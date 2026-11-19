// Status of Persian translation coverage per interview field.
// Usage: node scripts/fa-status.mjs
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BANK = join(root, "src", "data", "interview-bank");
const FA = join(BANK, "fa-bank");

const normKey = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const slugs = [
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

let grandTotal = 0;
let grandDone = 0;
let grandPartial = 0; // q but missing qa
let grandOrphan = 0;

for (const slug of slugs) {
  const bankPath = join(BANK, `${slug}.json`);
  if (!existsSync(bankPath)) continue;
  const parsed = JSON.parse(readFileSync(bankPath, "utf8"));
  const bank = Array.isArray(parsed) ? parsed : parsed.questions;
  const faPath = join(FA, `${slug}.json`);
  const faArr = existsSync(faPath) ? JSON.parse(readFileSync(faPath, "utf8")) : [];
  const faMap = new Map();
  for (const e of faArr) faMap.set(normKey(e.en), e);

  const bankKeys = new Set();
  let done = 0;
  let partial = 0;
  let missing = [];
  for (const q of bank) {
    const k = normKey(q.question.en);
    bankKeys.add(k);
    const e = faMap.get(k);
    if (e && e.q) {
      if (e.qa) done++;
      else partial++;
    } else {
      missing.push(q.question.en);
    }
  }
  let orphan = 0;
  for (const [k] of faMap) if (!bankKeys.has(k)) orphan++;

  grandTotal += bank.length;
  grandDone += done;
  grandPartial += partial;
  grandOrphan += orphan;

  const pct = bank.length ? Math.round((done / bank.length) * 100) : 0;
  console.log(
    `${slug.padEnd(15)} ${String(done).padStart(4)}/${String(bank.length).padStart(4)} ${String(pct).padStart(3)}%  partial(qa-missing):${partial} orphan:${orphan}`
  );
  if (process.argv.includes("--missing")) {
    for (const m of missing) console.log(`    MISS: ${m.slice(0, 80)}`);
  }
}
console.log(
  `\nTOTAL done: ${grandDone}/${grandTotal} (${Math.round((grandDone / grandTotal) * 100)}%)  partial:${grandPartial} orphan:${grandOrphan}`
);
