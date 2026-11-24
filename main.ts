// Validated entry program for make.fun competition w39
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "That wasn't a missed spot; that was load-bearing filth maintaining the structural integrity of your carpet.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`, 'utf8');
