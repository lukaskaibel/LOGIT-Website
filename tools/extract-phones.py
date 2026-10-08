"""Cut the iPhones out of the framed App Store screenshots for the home page.

    python3 tools/extract-phones.py [path/to/LOGIT/fastlane/screenshots]

The screenshots default to the app repository next to this one (../LOGIT). frameit draws each device onto
background.png, so every pixel that differs from the background belongs to the caption or the device. Below the
caption, each row's leftmost and rightmost differing pixel bound the device: the span between them becomes opaque, the
rest transparent. The device runs off the bottom of the canvas, so the result does too; the page fades it out there.

Writes site/images/phones/<name>.webp, 720 px wide, for the screens the home page shows (SCREENS below). A new screen
in the App Store set needs a slide in site/index.html as well.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SHOTS = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT.parent / "LOGIT" / "fastlane" / "screenshots"
OUT = ROOT / "site" / "images" / "phones"
LOCALE = "en-US"
WIDTH = 720

# The App Store screenshot (after "iPhone 17 Pro Max-NN_") and the file it becomes. SuperDropSet is left out: its
# screen starts mid-scroll and looks much like the recorder.
SCREENS = {
    "Summary": "summary",
    "Recorder": "recorder",
    "Finish": "finish",
    "Strength": "strength",
    "MuscleBalance": "muscle-balance",
    "Streak": "streak",
    "ExerciseIn3D": "exercise-3d",
    "LiveActivity": "live-activity",
    "BodyMeasurements": "body-measurements",
}

background = np.asarray(Image.open(SHOTS / "background.png").convert("RGB")).astype(np.int16)
OUT.mkdir(parents=True, exist_ok=True)

for path in sorted((SHOTS / LOCALE).glob("*_framed.png")):
    screen = path.stem.removesuffix("_framed").split("_", 1)[1]  # "iPhone 17 Pro Max-02_Recorder_framed" -> "Recorder"
    if screen not in SCREENS:
        continue

    rgb = Image.open(path).convert("RGB")
    differs = np.abs(np.asarray(rgb).astype(np.int16) - background).max(axis=2) > 6
    rows = differs.any(axis=1)

    # The device is the last run of differing rows; the caption's lines come before it.
    top = len(rows) - 1
    while top > 0 and rows[top - 1]:
        top -= 1

    mask = np.zeros(differs.shape, dtype=np.uint8)
    for y in range(top, differs.shape[0]):
        columns = np.flatnonzero(differs[y])
        if columns.size:
            mask[y, columns[0]:columns[-1] + 1] = 255

    xs = np.flatnonzero(mask.any(axis=0))
    phone = rgb.convert("RGBA")
    phone.putalpha(Image.fromarray(mask).filter(ImageFilter.GaussianBlur(0.6)))
    phone = phone.crop((xs[0], top, xs[-1] + 1, differs.shape[0]))
    phone = phone.resize((WIDTH, round(phone.height * WIDTH / phone.width)), Image.LANCZOS)
    phone.save(OUT / f"{SCREENS[screen]}.webp", "WEBP", quality=86, method=6)
    print(f"{SCREENS[screen]}.webp {phone.size[0]}×{phone.size[1]}  ← {path.name}")
