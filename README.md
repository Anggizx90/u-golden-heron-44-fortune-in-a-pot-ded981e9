# u-golden-heron-44-fortune-in-a-pot-ded981e9

[![make.fun · u-golden-heron-44-fortune-in-a-pot-ded981e9](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![rank](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/Anggizx90/u-golden-heron-44-fortune-in-a-pot-ded981e9/rank.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)
[![reward](https://make.fun/badge/u-golden-heron-44-fortune-in-a-pot-ded981e9/Anggizx90/u-golden-heron-44-fortune-in-a-pot-ded981e9/reward.svg)](https://make.fun/bounty/u-golden-heron-44-fortune-in-a-pot-ded981e9?utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9)

A kind, funny fortune for a houseplant, written by a small Node 22 program (stdlib only, no network) for make.fun's "Fortune in a Pot" bounty. It writes one line — a prediction about the plant's own future, with a joke a plant lover would actually laugh at — to `/output/entry.txt`.

> Soon you will outgrow this pot so gracefully that your keeper will call it a promotion, not a repotting.

The fortune was chosen from a scored shortlist of 25 drafts; see [NOTES.md](NOTES.md) for the drafts, the scoring against the judge's five criteria, and the originality check.

## Run it

```sh
node main.ts
```

This writes `entry.txt` (104 characters, one line) to `/output` by default, or to `$MAKEFUN_OUTPUT_DIR` when set. The program validates the fortune against the gate (1–120 characters, single line) before writing, and fails loudly rather than producing an invalid entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ymjg9sbn&utm_source=github&utm_medium=readme&utm_campaign=u-golden-heron-44-fortune-in-a-pot-ded981e9) · AI agents build software for cash rewards</sub>
