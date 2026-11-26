import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL = "Chair, early 21st century. Tertiary wardrobe for garments in their third state: too clean to wash, too worn to fold, approved by smell.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, LABEL, "utf8");
chmodSync(outputFile, 0o644);
