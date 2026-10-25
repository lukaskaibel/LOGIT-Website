"""Build site/iphone-duo/ from the iPhone Duo screenshots of the app.

    python3 tools/build-duo.py path/to/screenshots

The folder holds open-sideways/, open-upright/ and closed/ with one PNG per screen (01_summary.png, ...) and an
INDEX.md that names each one ("- closed/01_summary.png — Summary (1398×2034)"). Every PNG becomes two WebP files in
site/images/duo/, a small one for the page and a large one it links to. Needs cwebp (`brew install webp`). Run it
again after new screenshots, and commit the result.
"""
import html
import re
import shutil
import struct
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
if len(sys.argv) < 2:
    sys.exit(__doc__)
SOURCE = Path(sys.argv[1])

# How the phone is held, the heading it gets, and the widths of its two WebP files.
POSTURES = [
    ("open-sideways", "Open, held sideways", (1000, 2000)),
    ("open-upright", "Open, held upright", (700, 1400)),
    ("closed", "Closed", (640, 1398)),
]

# The screens at the top of the page, each with what it shows. Several shots in one entry sit side by side.
HIGHLIGHTS = [
    (["open-sideways/08_history"],
     "Held sideways, a list and its detail sit side by side: History, Templates, Exercises, Measurements and Search."),
    (["open-sideways/02_strength"],
     "Charts use the full width, the way Health does on iPad."),
    (["open-sideways/15b_recorder_timer"],
     "During a workout the sets stay in one centered column, like on a phone. The rest timer and the other controls "
     "move into the column beside it."),
    (["closed/15b_recorder_timer", "closed/15c_recorder_timer_paused"],
     "Closed, the rest timer stands upright under the clock. Pause shows while it runs, play and stop once it's paused."),
]


def png_size(path):
    with open(path, "rb") as file:
        file.seek(16)
        return struct.unpack(">II", file.read(8))


def captions():
    found = {}
    for line in (SOURCE / "INDEX.md").read_text().splitlines():
        match = re.match(r"- (\S+)\.png — (.+?)(?: \(\d+×\d+\))?$", line)
        if match:
            found[match.group(1)] = match.group(2)
    return found


def build_images():
    out = SITE / "images" / "duo"
    shutil.rmtree(out, ignore_errors=True)
    shots = {}
    for folder, _, widths in POSTURES:
        (out / folder).mkdir(parents=True)
        for png in sorted((SOURCE / folder).glob("*.png")):
            width, height = png_size(png)
            files = []
            for target in widths:
                target = min(target, width)
                name = f"{png.stem}-{target}.webp"
                subprocess.run(["cwebp", "-quiet", "-q", "82", "-m", "6", "-resize", str(target), "0", str(png),
                                "-o", str(out / folder / name)], check=True)
                files.append((f"../images/duo/{folder}/{name}", target, round(height * target / width)))
            shots[f"{folder}/{png.stem}"] = files
    return shots


def figure(files, caption, sizes):
    (small, width, height), (large, large_width, _) = files
    alt = html.escape(caption, quote=True)
    return (f'<a href="{large}"><img src="{small}" srcset="{small} {width}w, {large} {large_width}w" sizes="{sizes}" '
            f'width="{width}" height="{height}" loading="lazy" alt="{alt}"></a>')


def page(shots, names):
    titles = {folder: title for folder, title, _ in POSTURES}
    parts = []
    for keys, text in HIGHLIGHTS:
        pair = len(keys) > 1
        images = "".join(
            figure(shots[key], f"{titles[key.split('/')[0]]}: {names[key]}",
                   "(max-width: 760px) 50vw, 270px" if pair else "(max-width: 760px) 100vw, 540px")
            for key in keys)
        parts.append(f'      <figure class="shot{" pair" if pair else ""}">\n'
                     f'        <div>{images}</div>\n'
                     f'        <figcaption>{html.escape(text)}</figcaption>\n'
                     f'      </figure>')
    highlights = "\n".join(parts)

    sections = []
    for folder, title, _ in POSTURES:
        sizes = {"open-sideways": "(max-width: 700px) 100vw, 540px",
                 "open-upright": "(max-width: 700px) 50vw, 260px",
                 "closed": "(max-width: 700px) 50vw, 200px"}[folder]
        items = "\n".join(
            f'      <figure class="shot">{figure(files, f"{title}: {names[key]}", sizes)}'
            f'<figcaption>{html.escape(names[key])}</figcaption></figure>'
            for key, files in shots.items() if key.startswith(folder + "/"))
        sections.append(f'    <h2 id="{folder}">{title}</h2>\n    <div class="screens {folder}">\n{items}\n    </div>')
    every = "\n\n".join(sections)

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>iPhone Duo · LOGIT</title>
  <meta name="description" content="Every screen of LOGIT 5.5 on iPhone Duo, open and closed.">
  <meta name="theme-color" content="#000000">
  <link rel="icon" href="../images/favicon.png">
  <link rel="apple-touch-icon" href="../images/apple-touch-icon.png">
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <header class="top">
    <a class="brand" href="../"><img src="../images/icon.png" width="36" height="36" alt="">LOGIT</a>
    <a class="store-badge" href="https://apps.apple.com/app/logit-track-your-workouts/id6444813640">
      <img src="../images/app-store-badge.svg" width="135" height="40" alt="Download LOGIT on the App Store">
    </a>
  </header>

  <main class="doc duo">
    <h1>LOGIT on iPhone Duo</h1>
    <p class="intro">LOGIT 5.5 is made for both displays of iPhone Duo. Open, it uses the whole screen. Closed, its
      controls move into the column next to the clock, so your sets keep their room.</p>

    <div class="highlights">
{highlights}
    </div>

{every}

    <p class="note">Captured in the iPhone Duo simulator with iOS 27.1, which hides the status bar on the workout
      screens. Tap a screen to see it larger.</p>
  </main>

  <footer class="footer">
    <span>© 2026 Lukas Kaibel</span>
    <nav aria-label="Contact and legal">
      <a href="../contact/">Contact</a>
      <a href="../privacy/">Privacy</a>
      <a href="../terms/">Terms</a>
      <a href="../impressum/">Impressum</a>
    </nav>
  </footer>
</body>
</html>
"""


names = captions()
shots = build_images()
missing = [key for key in shots if key not in names]
if missing:
    sys.exit(f"INDEX.md names no screen for: {', '.join(missing)}")
(SITE / "iphone-duo").mkdir(exist_ok=True)
(SITE / "iphone-duo" / "index.html").write_text(page(shots, names))
print(f"Wrote site/iphone-duo/ with {len(shots)} screens.")
