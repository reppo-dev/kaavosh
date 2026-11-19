// Merge fa batch file(s) into the canonical per-slug fa-bank file.
// Usage: node scripts/fa-merge.mjs <slug> <batch1.json> [batch2.json ...]
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const FA = join(root, "src", "data", "interview-bank", "fa-bank");

const normKey = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const [slug, ...batches] = process.argv.slice(2);
if (!slug || !batches.length) {
  console.error("usage: node scripts/fa-merge.mjs <slug> <batch.json> [...]");
  process.exit(1);
}

const faPath = join(FA, `${slug}.json`);
const map = new Map();
if (existsSync(faPath)) {
  for (const e of JSON.parse(readFileSync(faPath, "utf8"))) {
    map.set(normKey(e.en), e);
  }
}

let added = 0;
let updated = 0;
for (const b of batches) {
  const arr = JSON.parse(readFileSync(b, "utf8"));
  for (const e of arr) {
    if (!e.en || (!e.q && !e.qa)) {
      console.error(`SKIP bad entry (missing en/q/qa): ${JSON.stringify(e).slice(0, 120)}`);
      continue;
    }
    const k = normKey(e.en);
    if (map.has(k)) {
      const old = map.get(k);
      // merge: keep existing fields, fill in missing ones, overwrite q/qa when provided
      map.set(k, {
        ...old,
        ...e,
        q: e.q || old.q,
        qa: e.qa || old.qa,
      });
      updated++;
    } else if (!e.q) {
      console.error(`SKIP qa-only entry for unknown key: ${e.en.slice(0, 80)}`);
    } else {
      map.set(k, e);
      added++;
    }
  }
}

const out = [...map.values()];
writeFileSync(faPath, JSON.stringify(out, null, 1), "utf8");
console.log(`${slug}: merged ${batches.length} batch file(s) -> added ${added}, updated ${updated}, total ${out.length}`);
