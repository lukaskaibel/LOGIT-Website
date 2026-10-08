// The home page's carousel. Each screen shows for a few seconds, then the next comes; a swipe, a turn of the wheel,
// the arrow keys, the bars under the badge or a click on a neighbouring iPhone move it by hand. Pointing at the
// iPhones holds it, and so does the pause button; with reduced motion it starts paused.

(() => {
  const body = document.body;
  const slides = [...document.querySelectorAll(".slide")];
  const phones = [...document.querySelectorAll(".phone")];
  const bars = [...document.querySelectorAll(".progress button:not(.toggle)")];
  const toggle = document.querySelector(".progress .toggle");
  const stage = document.querySelector(".stage");
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const count = slides.length;

  let index = 0;
  let progress = null; // the fill of the current bar; when it is full, the next screen comes
  let userPaused = reduceMotion.matches;
  let hovering = false;

  const durationOf = (i) => (i === 0 ? 7000 : 5200);

  // The shortest way round from the current screen: -1 is the one before it, 1 the one after.
  const offset = (i) => {
    const d = (((i - index) % count) + count) % count;
    return d > count / 2 ? d - count : d;
  };

  function place() {
    body.style.setProperty("--accent", slides[index].dataset.color);
    phones.forEach((phone, i) => { phone.dataset.pos = Math.max(-3, Math.min(3, offset(i))); });
    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
      slide.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
  }

  // The words leave towards one side, blurring, and the new ones come in from the other.
  function swapWords(from, to, direction) {
    if (reduceMotion.matches) return;
    for (const element of [from, to]) element.getAnimations().forEach((a) => a.cancel());
    from.animate(
      [{ opacity: 1, transform: "none", filter: "blur(0)" },
       { opacity: 0, transform: `translateX(${-direction * 36}px)`, filter: "blur(10px)" }],
      { duration: 500, easing: "cubic-bezier(.5,0,.9,.5)" });
    to.animate(
      [{ opacity: 0, transform: `translateX(${direction * 36}px)`, filter: "blur(10px)" },
       { opacity: 1, transform: "none", filter: "blur(0)" }],
      { duration: 630, delay: 270, easing: "cubic-bezier(.1,.5,.2,1)", fill: "backwards" });
  }

  function run() {
    progress?.cancel();
    bars.forEach((bar, i) => {
      bar.querySelector("span").style.transform = `scaleX(${i < index ? 1 : 0})`;
      if (i === index) bar.setAttribute("aria-current", "true"); else bar.removeAttribute("aria-current");
    });
    progress = bars[index].querySelector("span").animate(
      [{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }],
      { duration: durationOf(index), easing: "linear", fill: "forwards" });
    progress.onfinish = () => go(index + 1, 1);
    if (userPaused || hovering || document.hidden) progress.pause();
  }

  function go(target, direction) {
    target = ((target % count) + count) % count;
    if (target === index) return run();
    const from = index;
    direction ??= offset(target) > 0 ? 1 : -1;
    index = target;
    place();
    swapWords(slides[from], slides[index], direction);
    run();
  }

  function setPaused(paused) {
    userPaused = paused;
    toggle.setAttribute("aria-pressed", String(paused));
    toggle.setAttribute("aria-label", paused ? "Play" : "Pause");
    if (paused || hovering) progress.pause(); else progress.play();
  }

  bars.forEach((bar, i) => bar.addEventListener("click", () => go(i)));
  toggle.addEventListener("click", () => setPaused(!userPaused));

  stage.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") { hovering = true; progress.pause(); } });
  stage.addEventListener("pointerleave", () => { hovering = false; if (!userPaused) progress.play(); });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) progress.pause(); else if (!userPaused && !hovering) progress.play();
  });

  // A swipe or a drag sideways, anywhere on the page.
  let startX = null;
  let startY = 0;
  let swiped = false;
  body.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a, button")) return;
    startX = e.clientX;
    startY = e.clientY;
    swiped = false;
  });
  body.addEventListener("pointerup", (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      swiped = true;
      go(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    }
  });

  // A neighbour comes to the front when it is clicked.
  phones.forEach((phone, i) => phone.addEventListener("click", () => {
    if (!swiped && Math.abs(offset(i)) === 1) go(i);
  }));

  // A trackpad swipe or a turn of the wheel moves one screen per gesture.
  let wheelSum = 0;
  let wheelLocked = false;
  let wheelTimer;
  addEventListener("wheel", (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => { wheelSum = 0; wheelLocked = false; }, 220);
    if (wheelLocked) return;
    wheelSum += delta;
    if (Math.abs(wheelSum) > 40) {
      wheelLocked = true;
      go(index + Math.sign(wheelSum), Math.sign(wheelSum));
    }
  }, { passive: true });

  addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") go(index + 1, 1);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(index - 1, -1);
  });

  // A link to one screen (…/#balance) starts there, or goes there when the page is already open.
  const linked = () => slides.findIndex((slide) => `#${slide.dataset.id}` === location.hash);
  if (linked() > 0) {
    index = linked();
    place();
  }
  addEventListener("hashchange", () => { if (linked() >= 0) go(linked()); });

  run();
  setPaused(userPaused);
})();
