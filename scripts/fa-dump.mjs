// Dump untranslated bank questions (en title + en quickAnswer) for a field.
// Usage: node scripts/fa-dump.mjs <slug>
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BANK = join(root, "src", "data", "interview-bank");
const FA = join(BANK, "fa-bank");
const OUT = join(root, "scripts", "_fa-todo");

const normKey = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const slug = process.argv[2];
if (!slug) {
  console.error("usage: node scripts/fa-dump.mjs <slug>");
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
  const e = faMap.get(normKey(q.question.en));
  // todo = no fa entry at all, or missing qa
  if (!e || !e.q || !e.qa) {
    todo.push({
      en: q.question.en,
      qa: q.quickAnswer?.en ?? "",
    });
  }
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, `${slug}-todo.json`), JSON.stringify(todo, null, 1), "utf8");
console.log(`${slug}: dumped ${todo.length} todo entries -> scripts/_fa-todo/${slug}-todo.json`);
