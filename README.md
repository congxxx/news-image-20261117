[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/congxxx/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/congxxx/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# World News — Tuesday, 17 November 2026

One image summing up the day's world news, in the style of a newspaper
front page.

## What it is

`entry.png` (1024×1024) carries the date at the top and 42 stories:

- **Six feature panels** with an illustration and a one-line summary each:
  U.S. strikes on Qeshm Island, the Crimea bridge hit again, the
  Xi–Putin–Trump summit set for Thursday in Shenzhen, U.S. AI chip
  curbs tightened, the U.S. losing its measles-free status after
  26 years, and the COP31 draft calling for $120bn in climate finance.
- **Thirty-six smaller items** in a grid below, covering the rest of the
  day — from Japan scrambling jets and Gaza crossings to the markets,
  sport, and the National Geographic pictures of the year.

## How it runs

The entry point is `main.ts` (Node 22, standard library only). It copies
`entry.png` to `/output/entry.png` and does nothing else: no network,
no rendering, no randomness. Running it twice produces byte-identical
output.

```sh
node main.ts
```

## License

MIT — see `LICENSE`.
