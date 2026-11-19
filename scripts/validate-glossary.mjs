import fs from "node:fs";

const gloss = new Set();
const gfiles = [
  "src/data/glossary/terms.ts",
  ...fs
    .readdirSync("src/data/glossary/terms-more")
    .map((f) => "src/data/glossary/terms-more/" + f),
];
let dup = 0;
const seen = new Set();
for (const f of gfiles) {
  const s = fs.readFileSync(f, "utf8");
  let m;
  const r = /term: "([^"]+)"/g;
  while ((m = r.exec(s))) {
    if (seen.has(m[1])) {
      dup++;
      console.log("DUP:", m[1]);
    }
    seen.add(m[1]);
    gloss.add(m[1]);
  }
}
let bad = 0;
for (const f of gfiles) {
  const s = fs.readFileSync(f, "utf8");
  let m;
  const tr = /term: "([^"]+)"[\s\S]*?related: \[([^\]]*)\]/g;
  while ((m = tr.exec(s))) {
    const keys =
      m[2].match(/"([^"]+)"/g)?.map((x) => x.slice(1, -1)) || [];
    for (const k of keys) {
      if (!gloss.has(k)) {
        console.log("REL MISS:", f, m[1], "→", k);
        bad++;
      }
    }
  }
}
console.log("terms:", gloss.size, "| dupes:", dup, "| rel misses:", bad);
