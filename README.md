[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/congxxx/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/congxxx/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# World News — Tuesday, 17 November 2026

A single image that sums up one day of world news, laid out like a
newspaper front page. See the bounty:
https://make.fun/bounty/news-image-20261117

## Inside the picture

`entry.png` (1024×1024) opens with the date across the top and holds
42 stories in total:

- **Six lead stories**, two columns by three rows, each with a picture
  and a short line: the U.S. strikes on Qeshm Island, the Kerch bridge
  hit a second day, the Xi–Putin–Trump summit set for Thursday in
  Shenzhen, tighter U.S. AI chip curbs, the U.S. losing measles-free
  status after 26 years, and the COP31 draft calling for $120bn in
  climate finance.
- **Thirty-six briefs** underneath in three columns by twelve rows.
  Each one pairs a small flat icon with a bold headline — Japan
  scrambling jets, the Gaza crossings, the Houthis in Yemen, markets,
  sport, tech, and the National Geographic pictures of the year, among
  others. No realistic faces anywhere: the small items use icons so the
  headlines stay readable even at thumbnail size.

## Running it

`main.ts` runs on Node 22 with the standard library only. It copies
`entry.png` into `/output/entry.png` and nothing more — no network,
no drawing, no randomness, so repeated runs give identical bytes.

```sh
node main.ts
```

## License

MIT — see `LICENSE`.
