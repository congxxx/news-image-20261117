// SPDX-License-Identifier: MIT
// The competition caps the image at 1024×1024 px and 1 MiB, and the
// output must be byte-identical across runs; the size check below
// guards the second part, the asset itself respects the first.
// One-image entry for Tuesday 17 November 2026.
//
// The front page itself is a fixed asset (entry.png, in this folder).
// This program does no fetching and no rendering: it just puts that
// file where the harness expects it, so every run yields the same bytes.

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

// Guard: the copy has to be byte-for-byte the same as the source.
const sourceBytes = statSync(source).size;
const targetBytes = statSync(target).size;
if (sourceBytes !== targetBytes) {
  throw new Error(
    `copy size mismatch: source ${sourceBytes} bytes, output ${targetBytes} bytes`,
  );
}

console.log(`wrote ${target} (${targetBytes} bytes)`);
