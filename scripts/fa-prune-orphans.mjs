// Remove fa-bank entries whose normalized key matches no bank question title.
// Since all fields are at 100%, every orphan is a stale/duplicate key.
// Usage: node scripts/fa-prune-orphans.mjs
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BANK = join(root, "src", "data", "interview-bank");
const FA = join(BANK, "fa-bank");

const normKey = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

// 1) collect every bank title across the 11 bank files
const SLUGS = [
  "javascript",
  "react",
  "frontend",
  "backend",
  "devops-cloud",
  "cybersecurity",
  "ai-ml",
  "system-design",
  "algorithms",
  "mobile",
  "behavioral",
];
const allKeys = new Set();
for (const slug of SLUGS) {
  const parsed = JSON.parse(readFileSync(join(BANK, `${slug}.json`), "utf8"));
  const bank = Array.isArray(parsed) ? parsed : parsed.questions;
  for (const q of bank) allKeys.add(normKey(q.question.en));
}

// 2) prune each fa file
for (const f of readdirSync(FA)) {
  if (!f.endsWith(".json") || f.startsWith("_")) continue;
  const path = join(FA, f);
  const arr = JSON.parse(readFileSync(path, "utf8"));
  const kept = [];
  const removed = [];
  for (const e of arr) {
    if (allKeys.has(normKey(e.en))) kept.push(e);
    else removed.push(e.en);
  }
  if (removed.length) {
    writeFileSync(path, JSON.stringify(kept, null, 1), "utf8");
    console.log(`${f}: kept ${kept.length}, removed ${removed.length}:`);
    for (const r of removed) console.log(`   - ${r.slice(0, 90)}`);
  } else {
    console.log(`${f}: clean (${kept.length})`);
  }
}
