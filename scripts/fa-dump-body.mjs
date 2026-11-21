// Dump bank answers whose full body has no Persian translation yet.
// Usage: node scripts/fa-dump-body.mjs <slug>
// Output: scripts/_fa-todo/<slug>-body.json  → [{ en: <title key>, am: <EN body md> }]
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BANK = join(root, "src", "data", "interview-bank");
const FA = join(BANK, "fa-bank");

const normKey = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/fa-dump-body.mjs <slug>");
  process.exit(1);
}

const parsed = JSON.parse(readFileSync(join(BANK, `${slug}.json`), "utf8"));
const bank = Array.isArray(parsed) ? parsed : parsed.questions;

const faPath = join(FA, `${slug}.json`);
const faArr = existsSync(faPath) ? JSON.parse(readFileSync(faPath, "utf8")) : [];
const faMap = new Map();
for (const e of faArr) faMap.set(normKey(e.en), e);

const todo = [];
for (const q of bank) {
  if (!q.answerMd) continue; // curated fields may have no body
  const e = faMap.get(normKey(q.question.en));
  if (!e || !e.am) {
    todo.push({ en: q.question.en, am: q.answerMd });
  }
}

writeFileSync(join(root, "scripts", "_fa-todo", `${slug}-body.json`), JSON.stringify(todo, null, 1), "utf8");
const chars = todo.reduce((a, t) => a + t.am.length, 0);
console.log(`${slug}: ${todo.length} bodies without fa (${chars.toLocaleString()} chars) -> scripts/_fa-todo/${slug}-body.json`);
