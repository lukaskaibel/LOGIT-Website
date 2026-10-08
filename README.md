# LOGIT Website

The website of [LOGIT](https://apps.apple.com/app/logit-track-your-workouts/id6444813640), the workout tracker for
iPhone: <https://lukaskaibel.github.io/LOGIT-Website/>

One screen that sends people to the App Store. It turns like a carousel through the App Store screenshots (by itself,
or with a swipe, the wheel, the arrow keys or the bars under the badge), and links to the pages the App Store and the
law ask for:

| Page | Address | Used as |
| --- | --- | --- |
| Home | `/` | Marketing URL in App Store Connect |
| Contact & Support | `/contact/` | Support URL |
| Privacy Policy | `/privacy/` | Privacy Policy URL |
| Terms of Use | `/terms/` | |
| Impressum | `/impressum/` | |

Each screen of the carousel has its own address too, e.g. `/#live` or `/#balance`.

## How it's made

Plain HTML and CSS in `site/`, with one small script (`site/carousel.js`). No framework, no build step, no fonts,
scripts or images from other servers, no cookies and no tracking. Pushing a change to `site/` on `main` publishes it
(`.github/workflows/deploy.yml`).

To look at it locally:

```sh
python3 -m http.server 8000 --directory site
```

## Keeping it in step with the app

Both tools read the app repository next to this one (`../LOGIT`); pass another path if it lives elsewhere. They need
Python 3, and `extract-phones.py` needs Pillow and NumPy.

- **Screenshots:** after new App Store screenshots (`fastlane/screenshots` in the app), run
  `python3 tools/extract-phones.py`. It cuts the iPhones out of the framed English screenshots into
  `site/images/phones/`. A screenshot that is new to the set needs an entry in the script's `SCREENS` and a slide in
  `site/index.html` (a `section` with its keyword, line and colour, a bar, and a `phone`).
- **Privacy policy and terms:** after the app's texts change (`LOGIT/Assets/logit_privacy_policy.md`,
  `logit_terms_and_conditions.md`), run `python3 tools/build-legal.py`. It writes `site/privacy/` and `site/terms/`;
  edit the texts in the app, not those pages. Only the English originals are published: the app's translations are
  marked as machine translated and not yet reviewed.
- **Contact address:** `logit.fitness@gmail.com`, the address the app's Support button writes to. It appears in
  `site/contact/`, `site/impressum/` and `tools/build-legal.py`.
