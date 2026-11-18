// SPDX-License-Identifier: MIT
// Front page for Tuesday 17 November 2026.
//
// The image itself is a fixed asset (entry.png, next to this file). This
// program does no fetching and no rendering: it simply places that file
// where the harness expects it, so every run produces the same bytes.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = "/output";
const target = join(targetDir, "entry.png");

if (!existsSync(source)) {
  throw new Error(`missing entry image: ${source}`);
}

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);

// Sanity check: the copy must be byte-for-byte identical to the source.
const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (sourceSize !== targetSize) {
  throw new Error(
    `size mismatch: source ${sourceSize} bytes, output ${targetSize} bytes`,
  );
}

console.log(`wrote ${target}`);
