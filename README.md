# THE WORLD TODAY — Friday, 20 November 2026

[![Competition](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/c/news-image-20261120)
[![Rank](https://make.fun/badge/news-image-20261120/Anonymus22/news-image-20261120/rank.svg)](https://make.fun/c/news-image-20261120)
[![Reward](https://make.fun/badge/news-image-20261120/Anonymus22/news-image-20261120/reward.svg)](https://make.fun/c/news-image-20261120)

A one-page poster summing up the world's news of **Friday, 20 November 2026** —
every story on the page was first reported that day, in some time zone.

## What's on the page (45 stories)

- **Masthead** with the day's region tally: Europe 9 · Americas 13 ·
  Asia-Pacific 11 · Mideast 4 · Africa 4 · Oceania 4 = **45 stories**.
- **The Day in Numbers** — 300,000 evacuated ahead of Cyclone Akvan ·
  $1.8bn of GTA VI sales in 24 hours · Asia-Pacific shares −7% on the week ·
  dollar index 103.9 · Taiwan's 5,248-point three-day slide · 4 ballistic
  missiles fired at Kyiv.
- **The Day in UTC** — a timeline of the day's first reports, 00:22–04:22 UTC.
- **Three lead panels** — (1) Russia's overnight ballistic-missile barrage on
  Kyiv (AP); (2) Asia's stock rout deepens to its worst week since 2020
  (Reuters); (3) Houthi strikes reach Riyadh's tallest tower (AFP, marked † as
  a one-sided claim, defined in the footer).
- **Eleven more illustrated panels (4–14)**, each with region and source tags:
  Cyclone Akvan's landfall preparations, the UK–EU Brussels summit,
  Hayabusa2's abandoned asteroid landing, GTA VI's record first day, a tanker
  ablaze after hitting a mine east of Hormuz, Taiwan's market rescue, the
  Wellington Test, Genoa airport's drone closure, Israel's strike in Lebanon,
  the White House cyber chief's ouster, and Seoul's overturned conviction.
- **A dark world map** with red pins numbered to match panels 1–14 and grey
  dots for the briefs.
- **31 numbered briefs (15–45)** with CAPS datelines, from The Hague and Nuuk
  to Suva, Kabul and Port-au-Prince.
- **DATE CHECK box** — the big stories deliberately *excluded* because they
  were first reported on Thursday 19 November or earlier: the World Court's
  Myanmar genocide verdict, the Trump–Xi–Putin Shenzhen summit, Anthropic's
  record $81.3bn IPO debut, the Senate's 51–48 Iran war-powers vote, the third
  Kerch Bridge strike, Google's Gemini 4 Neon launch, Voyager 1's one-light-day
  milestone and the record $190.4m Van Gogh sale. (Brief 15 is *today's*
  reaction to the verdict.)

## How it was made

The poster is drawn as HTML/CSS/SVG (`poster.html`) — masthead, panels, map
and briefs are all hand-set, with simple flat SVG illustrations per panel —
and rasterised locally with headless Chrome (`render.mjs`) into `entry.png`
at exactly 1024×1024. No external images and no network are used.

The submitted program, `main.ts` (Node 22, standard library only), copies the
repository's `entry.png` to the output directory — the pattern the rules
bless — so the judged bytes are identical on every run:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts   # writes out/entry.png
```

## Files

- `main.ts` — the entry program.
- `entry.png` — the poster image the program emits (1024×1024, under 1 MiB).
- `poster.html` — the poster's source layout.
- `render.mjs` — build-time renderer (poster.html → entry.png).
- `LICENSE` — MIT.
