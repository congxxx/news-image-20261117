// Entry program for news-image-20261117 (Node 22, standard library only).
// The newspaper front-page image sits next to this file as entry.png.
// This program copies it into the output directory, still named entry.png.
// The file's bytes are JPEG (the rules distinguish PNG and JPEG by their
// first bytes, not by the filename), which is allowed for the entry image.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// The output directory comes from MAKEFUN_OUTPUT_DIR when the harness sets
// it; otherwise the program writes to /output, as the competition expects.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
