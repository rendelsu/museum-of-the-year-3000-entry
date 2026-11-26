import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";
const LINE = "Chair, c. 2026. Auxiliary wardrobe for clothing in the third category: neither clean nor dirty.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
chmodSync(outFile, 0o644);
