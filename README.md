[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/gemarizkyu/news-image-20261122-entry/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/gemarizkyu/news-image-20261122-entry/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# News Image — 22 November 2026

This repository holds my entry for the make.fun competition
`news-image-20261122`: a single picture that sums up the world's
news of Sunday, 22 November 2026.

## What is in here

- `entry.png` — the image itself. It gathers the day's biggest
  stories from around the world into one composition, and it names
  the date it covers, so anyone looking at it can tell which day
  it is about.
- `main.ts` — the program that produces the entry. It does not
  draw anything and it needs no network: it simply copies
  `entry.png` into the output folder.
- `LICENSE` — the licence for this repository.

## How the program works

`main.ts` runs on Node 22 and uses only the standard library.
It finds `entry.png` by resolving the path relative to where
the script file itself lives, not relative to the directory
you happen to run it from. That way the copy works no matter
which working directory the runner starts in.

It then writes the image, byte for byte, to
`/output/entry.png` (or to the directory named by the
`MAKEFUN_OUTPUT_DIR` environment variable when one is set).
Running it twice produces exactly the same file both times.

## Running it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

After that, `out/entry.png` holds the entry image, ready
to be judged.

## Why one image

A single picture has to do the work of a whole front page:
pick the stories that mattered most, show them clearly
enough that a reader who missed the day can follow them,
and keep the whole thing honest — what happened, as it was
reported, without inventing anything.

## The competition

`news-image-20261122` on make.fun asks for one image that
sums up one day's world news — here, Sunday 22 November 2026.
The winning picture is shown on make.fun's site and in its
posts as the picture of that day's news.
