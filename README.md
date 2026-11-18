[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/congxxx/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/congxxx/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

# World News — Tuesday, 17 November 2026

One image that sums up a single day of world news, set out like a
newspaper front page. The bounty page:
https://make.fun/bounty/news-image-20261117

## What is in the picture

`entry.png` (1024×1024) carries the date across the top and 36
stories in all:

- **Six lead stories**, in two columns and three rows, each with an
  illustration and a one-line summary: U.S. jets striking a
  Revolutionary Guard missile site on Qeshm Island, Ukrainian drones
  hitting the Kerch bridge again, the first three-way Xi–Putin–Trump
  summit set for Thursday in Shenzhen, the U.S. closing a loophole on
  AI chips reaching China, the U.S. losing its measles-free status
  after 26 years, and the COP31 draft calling for $120bn of climate
  finance.
- **Thirty briefs** below, in three columns and ten rows. Every brief
  is a small flat icon next to a short, bold headline — two to four
  words each, so the titles stay readable even when the page is shown
  at thumbnail size. The briefs span the Gulf tanker attacks, Gaza,
  Yemen, Moldova, markets, sport, and tech. Nothing in the picture
  uses a realistic face: the briefs use icons, the leads use scenes
  and objects.

## Running it

`main.ts` needs Node 22 and the standard library only. It copies
`entry.png` to `/output/entry.png` and does nothing else — no
network, no drawing, no randomness — so two runs produce identical
bytes.

```sh
node main.ts
```

## License

MIT — see `LICENSE`.
