// Render poster.html to entry.png at exactly 1024x1024 using headless Chrome.
// Build-time helper only: the submitted program (main.ts) just copies the
// resulting entry.png, so no network or browser is needed at run time.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const require = createRequire('/home/hatch/workspace/makefun/radar/shots-tool/package.json');
const puppeteer = require('puppeteer');

const here = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(here, 'poster.html');
const outPath = join(here, 'entry.png');

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--force-color-profile=srgb'],
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 1024, deviceScaleFactor: 1 });
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: outPath, type: 'png', clip: { x: 0, y: 0, width: 1024, height: 1024 } });
  console.log('wrote', outPath);
} finally {
  await browser.close();
}
