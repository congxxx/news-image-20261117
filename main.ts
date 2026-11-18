// news-image-20261117 entry (Node 22, standard library only).
// The entry image is entry.png beside this file; this program copies it to
// the output directory as entry.png. The file is a JPEG by its magic bytes
// (the rules tell PNG and JPEG apart by content, not by the name).
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
