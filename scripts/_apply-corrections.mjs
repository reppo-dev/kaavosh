/**
 * One-off patcher: wires corrections.json into build-interview-bank.mjs.
 * Run: node scripts/_apply-corrections.mjs
 */
import fs from "node:fs";

const p = "scripts/build-interview-bank.mjs";
let s = fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");

if (s.includes("const CORRECTIONS =")) {
  console.log("CORRECTIONS already present — nothing to do");
  process.exit(0);
}

const data = JSON.parse(fs.readFileSync("scripts/corrections.json", "utf8"));
const json = JSON.stringify(data, null, 2);

const corrections =
  "/* ─────────────── fact-check corrections (verified Nov 18, 2026) ─────────────── */\n\n" +
  "const CORRECTIONS = " + json + ";\n\n" +
  "function applyCorrections(fileName, sorted) {\n" +
  "  for (const c of CORRECTIONS) {\n" +
  "    if (fileName !== c.file) continue;\n" +
  "    const q = sorted.find((x) => x.question.en.includes(c.includes));\n" +
  "    if (q) {\n" +
  "      Object.assign(q, c.patch);\n" +
  "      q.source = (q.source || \"\") + \" — fact-checked & corrected\";\n" +
  "      report.push(\"CORRECTED: \" + fileName + \" | \" + q.id);\n" +
  "    }\n" +
  "  }\n" +
  "}\n\n";

const marker = "function buildField(";
const idx = s.indexOf(marker);
if (idx < 0) {
  console.log("buildField marker not found");
  process.exit(1);
}
s = s.slice(0, idx) + corrections + s.slice(idx);

const oldLine = `  fs.mkdirSync(OUT, { recursive: true });`;
if (!s.includes(oldLine)) {
  console.log("buildField write block not found");
  process.exit(1);
}
s = s.replace(
  oldLine,
  "  applyCorrections(fileName, sorted);\n" + oldLine,
);

fs.writeFileSync(p, s);
console.log("corrections wired successfully");
