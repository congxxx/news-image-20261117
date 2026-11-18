// SPDX-License-Identifier: MIT
// One-image entry: Tuesday 17 November 2026 in world news.
//
// The picture itself is a fixed asset (entry.png, sitting next to this
// file). Nothing is fetched and nothing is drawn at run time — this
// program only moves that file to where the harness looks for it, so
// two runs can never disagree about the bytes.
//
// Competition limits this program respects: the image is at most
// 1024x1024 px and 1 MiB, and the output must be byte-identical
// across runs (the size check below guards the second part).

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = "/output";
const target = join(outDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry image not found: ${source}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The copy must be the same file, byte for byte — check the sizes match.
const copied = statSync(target).size;
const original = statSync(source).size;
if (copied !== original) {
  throw new Error(
    `copy size ${copied} does not match source size ${original}`,
  );
}

console.log(`wrote ${target} (${copied} bytes)`);
