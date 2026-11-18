// news-image-20261117 entry (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to the
// grader's output directory. The copy is byte for byte, so repeated runs
// write identical output. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
const src = join(dirname(fileURLToPath(import.meta.url)), 'entry.png');
writeFileSync(outPath, readFileSync(src));
