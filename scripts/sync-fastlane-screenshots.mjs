import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const sourceRoot =
  process.env.FASTLANE_SCREENSHOT_ROOT ??
  path.resolve(repoRoot, "..", "LOGIT", "fastlane", "screenshots");
const targetRoot = path.join(repoRoot, "public", "screenshots");

const locales = ["en-US", "de-DE"];
const screenshotPattern = /\.png$/i;
const framedPattern = /_framed\.png$/i;

function hasBundledScreenshots() {
  return locales.some((locale) => {
    const targetDir = path.join(targetRoot, locale);
    return existsSync(targetDir) && readdirSync(targetDir).some((entry) => screenshotPattern.test(entry));
  });
}

if (!existsSync(sourceRoot)) {
  if (hasBundledScreenshots()) {
    process.exit(0);
  }

  throw new Error(`Missing Fastlane screenshots directory: ${sourceRoot}`);
}

rmSync(targetRoot, { recursive: true, force: true });
mkdirSync(targetRoot, { recursive: true });

for (const locale of locales) {
  const sourceDir = path.join(sourceRoot, locale);
  const targetDir = path.join(targetRoot, locale);

  if (!existsSync(sourceDir)) {
    throw new Error(`Missing Fastlane screenshots directory: ${sourceDir}`);
  }

  mkdirSync(targetDir, { recursive: true });

  for (const entry of readdirSync(sourceDir)) {
    if (!screenshotPattern.test(entry) || framedPattern.test(entry)) {
      continue;
    }

    cpSync(path.join(sourceDir, entry), path.join(targetDir, entry));
  }
}
