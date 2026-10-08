"""Build site/privacy/ and site/terms/ from the privacy policy and terms the app ships.

    python3 tools/build-legal.py [path/to/LOGIT/LOGIT/Assets]

The texts default to the app repository next to this one (../LOGIT). Only the English originals are published: the
app's translations carry a note that they were translated automatically and need a legal review first. Run this again
whenever the app's texts change, and commit the result.
"""
import difflib
import html
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ASSETS = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT.parent / "LOGIT" / "LOGIT" / "Assets"
SITE = ROOT / "site"

# The address the app's Support button writes to (FEEDBACK_EMAIL in the app's Constants.swift), the same the texts give.
EMAIL = "logit.app@icloud.com"


# --- A little Markdown: the headings, paragraphs, lists, tables, links and emphasis these texts use. ---------------

def inline(text):
    links = []

    def keep_link(match):
        label, url = match.group(1), match.group(2)
        links.append(f'<a href="{html.escape(url, quote=True)}">{inline(label)}</a>')
        return f"\0{len(links) - 1}\0"

    text = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", keep_link, text)
    text = html.escape(text, quote=False)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", text)
    text = re.sub(r"(?<![\w])_(?!\s)(.+?)(?<!\s)_(?![\w])", r"<em>\1</em>", text)
    return re.sub(r"\0(\d+)\0", lambda m: links[int(m.group(1))], text)


def heading_id(text):
    text = re.sub(r"^\d+\.\s*", "", text)
    text = re.sub(r"[^\w\s-]", "", text)
    return re.sub(r"\s+", "-", text.strip()).lower()


def markdown(source):
    source = re.sub(r"<!--.*?-->", "", source, flags=re.S)
    lines = source.splitlines()
    out, ids = [], []
    i = 0

    def collect(prefix):
        nonlocal i
        items = []
        while i < len(lines) and re.match(prefix, lines[i]):
            items.append(re.sub(prefix, "", lines[i], count=1))
            i += 1
            while i < len(lines) and not lines[i].strip() and i + 1 < len(lines) and re.match(prefix, lines[i + 1]):
                i += 1  # a blank line between items keeps the list together
        return items

    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
        elif m := re.match(r"(#{1,4})\s+(.*)", line):
            level = len(m.group(1)) + (1 if len(m.group(1)) == 1 else 0)
            anchor = heading_id(m.group(2))
            ids.append(anchor)
            out.append(f'<h{level} id="{html.escape(anchor, quote=True)}">{inline(m.group(2))}</h{level}>')
            i += 1
        elif line.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not all(re.fullmatch(r":?-+:?", c) for c in cells):
                    rows.append(cells)
                i += 1
            head = "".join(f"<th>{inline(c)}</th>" for c in rows[0])
            body = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in row) + "</tr>" for row in rows[1:])
            out.append(f'<div class="table"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
        elif re.match(r"[-*]\s+", line):
            out.append("<ul>" + "".join(f"<li>{inline(item)}</li>" for item in collect(r"[-*]\s+")) + "</ul>")
        elif re.match(r"\d+\.\s+", line):
            out.append("<ol>" + "".join(f"<li>{inline(item)}</li>" for item in collect(r"\d+\.\s+")) + "</ol>")
        else:
            paragraph = []
            while i < len(lines) and lines[i].strip() and not re.match(r"(#{1,4}\s|\||[-*]\s|\d+\.\s)", lines[i]):
                paragraph.append(lines[i].strip())
                i += 1
            out.append(f"<p>{inline(' '.join(paragraph))}</p>")

    text = "\n".join(out)

    # Links within the page: the texts' table of contents doesn't always spell a heading the way the heading does.
    def resolve(match):
        anchor = heading_id(html.unescape(match.group(1)).replace("-", " "))
        if anchor in ids:
            return f'href="#{anchor}"'
        close = difflib.get_close_matches(anchor, ids, n=1, cutoff=0.5)
        if not close:
            raise SystemExit(f"No heading for the link #{anchor}")
        return f'href="#{html.escape(close[0], quote=True)}"'

    return re.sub(r'href="#([^"]+)"', resolve, text)


# --- The page around it. -------------------------------------------------------------------------------------------

def page(slug, title, description, body):
    links = [("contact", "Contact"), ("privacy", "Privacy"), ("terms", "Terms"), ("impressum", "Impressum")]
    nav = "\n".join(
        f'      <a href="../{s}/"{" aria-current=\"page\"" if s == slug else ""}>{label}</a>' for s, label in links)
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>{title} · LOGIT</title>
  <meta name="description" content="{description}">
  <meta name="theme-color" content="#000000">
  <link rel="icon" href="../images/favicon.png">
  <link rel="apple-touch-icon" href="../images/apple-touch-icon.png">
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <!-- Built by tools/build-legal.py from the app's texts. Edit those, not this file. -->
  <header class="top">
    <a class="brand" href="../"><img src="../images/icon.png" width="36" height="36" alt="">LOGIT</a>
    <a class="store-badge" href="https://apps.apple.com/app/logit-track-your-workouts/id6444813640">
      <img src="../images/app-store-badge.svg" width="135" height="40" alt="Download LOGIT on the App Store">
    </a>
  </header>

  <main class="doc">
{body}
  </main>

  <footer class="footer">
    <span>© 2026 Lukas Kaibel</span>
    <nav aria-label="Contact and legal">
{nav}
    </nav>
  </footer>
</body>
</html>
"""


def build(slug, source, title, description, before, after=""):
    text = (ASSETS / source).read_text(encoding="utf-8")
    content = markdown(text)
    # The first line of each text is its date: show it under the introduction, like the other pages do.
    date = re.match(r"<p><em>(.*?)</em></p>\n?", content)
    if date:
        content = content[date.end():]
        before = re.sub(r'(<p class="intro">.*?</p>\n)', lambda m: f'{m.group(1)}<p class="updated">{date.group(1)}</p>\n',
                        before, count=1, flags=re.S)
    body = "\n".join(f"    {line}" for line in (before + content + "\n" + after).splitlines())
    (SITE / slug).mkdir(parents=True, exist_ok=True)
    (SITE / slug / "index.html").write_text(page(slug, title, description, body), encoding="utf-8")
    print(f"site/{slug}/index.html")


INTRO = """<h1>Privacy Policy</h1>
<p class="intro">This is the privacy policy of the LOGIT app, the same text the app shows under Settings › About.
  At the end: what applies to this website, and who is responsible.</p>
"""

WEBSITE = f"""<h2 id="website">This website</h2>
<p>This website is hosted by <strong>GitHub Pages</strong>, a service of GitHub, Inc., 88 Colin P. Kelly Jr. St.,
  San Francisco, CA 94107, USA. To deliver a page, GitHub receives your IP address and the usual details of the request
  (which page, when, which browser). GitHub logs visitors' IP addresses for security purposes. This is based on the
  legitimate interest in providing the website reliably and securely (Art. 6(1)(f) GDPR). GitHub has certified that it
  adheres to the EU-U.S. Data Privacy Framework; see
  <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">GitHub's privacy
  statement</a>.</p>
<p>The website sets no cookies and uses no analytics or tracking. Its pictures, styles and script come with the page;
  nothing is loaded from other servers. The App Store links lead to Apple, where Apple's privacy policy applies.</p>
<p>If you send an email, your address and message are used only to answer you (Art. 6(1)(b) and (f) GDPR) and are
  deleted when the conversation is over, unless the law requires keeping them longer.</p>
<h2 id="responsible">Who is responsible</h2>
<address>Lukas Kaibel<br>Berlin, Germany<br>Email: <a href="mailto:{EMAIL}">{EMAIL}</a></address>
<p>He develops LOGIT and runs this website, and is the controller under the EU General Data Protection Regulation
  (GDPR).</p>
"""

TERMS = """<h1>Terms of Use</h1>
<p class="intro">These are the terms for using LOGIT, the same the app shows under Settings › About. Apple's
  <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Standard End User License Agreement</a>
  (EULA) applies as well.</p>
"""

build("privacy", "logit_privacy_policy.md", "Privacy Policy",
      "How LOGIT, the workout tracker for iPhone, and this website handle your data.", INTRO, WEBSITE)
build("terms", "logit_terms_and_conditions.md", "Terms of Use", "The terms for using LOGIT.", TERMS)
