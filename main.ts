// THE WORLD TODAY — Friday, 20 November 2026 (news-image-20261120)
//
// Entry program: writes the day's one-page news poster to the output
// directory as entry.png. The poster itself (poster.html, rendered to
// entry.png by render.mjs at build time) sums up 45 stories first reported
// on Friday 20 November 2026: 3 lead panels, 11 more illustrated panels, a
// numbered world map, a numbers strip, a UTC timeline and 31 briefs, with a
// DATE CHECK box listing the big 19 November stories deliberately excluded.
//
// The competition rules bless this pattern: the program copies the PNG that
// ships in the repository, so the output is byte-identical on every run.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`poster image missing from repository: ${source}`);
}

copyFileSync(source, target);
console.log(`wrote ${target}`);

// Poster manifest (45 stories, all first reported Friday 20 November 2026):
//   Leads — 1 Kyiv missile barrage (AP) · 2 Asia stocks' worst week since
//   2020 (Reuters) · 3 Houthi strikes reach Riyadh's tallest tower (AFP, †).
//   Panels 4–14 — Cyclone Akvan evacuations · UK–EU Brussels summit ·
//   Hayabusa2 · GTA VI's $1.8bn day · Hormuz tanker fire · Taiwan market
//   rescue · Wellington Test · Genoa drone scare · Lebanon strike · White
//   House cyber chief ousted · Seoul court overturns ex-PM's conviction.
//   Briefs 15–45 — 31 datelined stories across all six regions.
//   Region tally — Europe 9 · Americas 13 · Asia-Pacific 11 · Mideast 4 ·
//   Africa 4 · Oceania 4 = 45. Excluded as 19 Nov news (see the poster's
//   DATE CHECK box): the Myanmar verdict itself, the Shenzhen summit,
//   Anthropic's IPO debut, the Senate war-powers vote, the Kerch strike,
//   Gemini 4 Neon, Voyager's light-day and the Van Gogh record sale.
