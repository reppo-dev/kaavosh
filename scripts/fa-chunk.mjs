// Split a body dump into translation chunks of ~N chars (default 12000).
// Usage: node scripts/fa-chunk.mjs <slug> [chunkChars]
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODO = join(root, "scripts", "_fa-todo");

const slug = process.argv[2];
const chunkChars = Number(process.argv[3] || 12000);
const src = join(TODO, `${slug}-body.json`);
const items = JSON.parse(readFileSync(src, "utf8"));

// clean previous chunks of this slug
for (const f of readdirSync(TODO)) {
  if (f.startsWith(`${slug}-body-c`) && f.endsWith(".json")) {
    // keep; overwritten below
  }
}

let idx = 0;
let buf = [];
let size = 0;
const flush = () => {
  if (!buf.length) return;
  const name = `${slug}-body-c${String(idx).padStart(2, "0")}.json`;
  writeFileSync(join(TODO, name), JSON.stringify(buf, null, 1), "utf8");
  console.log(`${name}: ${buf.length} answers, ${size.toLocaleString()} chars`);
  idx++;
  buf = [];
  size = 0;
};
for (const it of items) {
  if (size + it.am.length > chunkChars && buf.length) flush();
  buf.push(it);
  size += it.am.length;
}
flush();
console.log(`total ${items.length} answers in ${idx} chunks`);
