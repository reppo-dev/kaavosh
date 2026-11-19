// Fix broken `related` references in the new glossary files (one-off, Nov 19 2026).
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(root, "src", "data", "glossary", "terms-more");

// per-file removals and renames applied inside `related: [...]` arrays only
const PLAN = {
  "ai-3.ts": { remove: ["GPU"], rename: { NLP: "Natural Language Processing" } },
  "algorithms-2.ts": { remove: ["String"], rename: {} },
  "algorithms-3.ts": { remove: ["String"], rename: {} },
  "backend-3.ts": { remove: [], rename: { "Separation of Concerns": "SOLID Principles" } },
  "database-2.ts": { remove: ["Security", "Data Model"], rename: {} },
  "devops-3.ts": { remove: ["Code Review"], rename: {} },
  "frontend-3.ts": { remove: ["Shadow DOM", "Scope", "Map", "Set", "Destructuring"], rename: {} },
  "fundamentals-2.ts": { remove: ["Observer", "ASCII", "Unicode", "String", "Sanitization", "Form"], rename: {} },
  "mobile-2.ts": { remove: ["React", "Widget", "Android"], rename: {} },
  "networking-2.ts": { remove: [], rename: { "Domain Name System": "DNS" } },
  "security-2.ts": { remove: ["Wi-Fi"], rename: {} },
  "system-design-2.ts": {
    remove: ["Aggregate Root", "Data Plane", "Database", "High Availability", "Failover", "Stateless"],
    rename: { "Separation of Concerns": "SOLID Principles" },
  },
};

const relRe = /(related:\s*\[)([^\]]*)(\])/g;

for (const [file, plan] of Object.entries(PLAN)) {
  const p = join(DIR, file);
  let src = readFileSync(p, "utf8");
  src = src.replace(relRe, (full, open, items, close) => {
    let list = items
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((s) => !plan.remove.includes(s.replace(/^"|"$/g, "")))
      .map((s) => {
        const name = s.replace(/^"|"$/g, "");
        return plan.rename[name] ? `"${plan.rename[name]}"` : `"${name}"`;
      });
    // dedupe (rename may collide with an existing entry)
    list = [...new Set(list)];
    return `${open}${list.join(", ")}${close}`;
  });
  writeFileSync(p, src, "utf8");
  console.log(`fixed ${file}`);
}
console.log("done");
