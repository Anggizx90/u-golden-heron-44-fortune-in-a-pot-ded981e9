// Fortune in a Pot — make.fun bounty u-golden-heron-44-fortune-in-a-pot-ded981e9
//
// Writes one kind, funny fortune for a houseplant to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt). Node 22, stdlib only, no network.
//
// The fortune was chosen from a scored shortlist of 25 drafts (see NOTES.md):
// it is a prediction about this plant's own future, it carries a small joke
// a plant lover would actually laugh at (repotting reframed as a promotion),
// it is warm to plant and keeper, and it reads cleanly aloud in one line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Soon you will outgrow this pot so gracefully that your keeper will call it a promotion, not a repotting.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-120
// characters, not only whitespace, on a single line. Validate the fortune
// before writing anything, and write it with no trailing newline so the
// file's character count is exactly the fortune's length.
const chars = [...FORTUNE];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`fortune is ${chars.length} characters, must be 1-120`);
}
if (FORTUNE.trim() !== FORTUNE || FORTUNE.includes("\n")) {
  throw new Error("fortune must be a single line with no surrounding whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, FORTUNE, "utf8");
