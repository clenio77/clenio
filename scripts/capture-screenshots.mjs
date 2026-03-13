import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";

const CONFIG_PATH = process.argv[2] || "scripts/screenshots.json";
const OUTPUT_DIR = process.argv[3] || "images/projects";
const VIEWPORT = { width: 1400, height: 900 };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const raw = await fs.readFile(CONFIG_PATH, "utf-8");
  const items = JSON.parse(raw);
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEWPORT });

  for (const item of items) {
    const name = item.name || "screenshot";
    const url = item.url;
    if (!url) continue;

    console.log(`Capturando: ${name} -> ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });
    await sleep(800);

    const filePath = path.join(OUTPUT_DIR, `${name}.png`);
    await page.screenshot({ path: filePath, fullPage: true });
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
