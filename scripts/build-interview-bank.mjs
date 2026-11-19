/**
 * KAAVOSH — Interview Bank Builder
 * Reads the cloned open-source interview repos (G:/react/reee/_interview-repos),
 * extracts every question + answer, dedupes, categorizes, difficulty-sorts,
 * attaches vocabulary (glossary keys) and deep-dive cards, and writes
 * src/data/interview-bank/*.json consumed by the /interview pages.
 *
 * Run: node scripts/build-interview-bank.mjs
 */
import fs from "node:fs";
import path from "node:path";

const REPOS = "G:/react/reee/_interview-repos";
const OUT = "G:/react/reee/kaavosh/src/data/interview-bank";
const GLOSS = "G:/react/reee/kaavosh/src/data/glossary";

/* ────────────────────────────── helpers ────────────────────────────── */

const read = (p) => fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");
const norm = (s) =>
  s.toLowerCase().replace(/`/g, "").replace(/[^a-z0-9]+/g, " ").trim();

/** strip images, back-to-top nav links, html comments, leftover html tags */
function sanitizeMd(md) {
  return md
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*Back to Top[^)]*\)/gi, "")
    .replace(/\[⬆[^\]]*\]\([^)]*\)/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?(details|summary|p|div|span|sub|sup|strong|em|center|font|a|ul|ol|li|b|i|h[1-6])[^>]*>/gi, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** mermaid/l Blocks are not rendered on the site — drop their content */
function stripMermaid(md) {
  return md.replace(/```mermaid[\s\S]*?```/g, "");
}

function firstSentences(text, maxChars = 420) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxChars) return clean;
  const cut = clean.slice(0, maxChars);
  const lastDot = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("? "));
  return lastDot > 120 ? clean.slice(0, lastDot + 1) : cut.trim() + "…";
}

function splitSentencesFirstPara(md) {
  const para = md.split(/\n{2,}/).find((p) => p.trim() && !p.trim().startsWith("```") && !p.trim().startsWith("#"));
  return para ? firstSentences(para) : firstSentences(md);
}

function mapDifficulty(raw) {
  const v = (raw || "").toLowerCase();
  if (["easy", "basic", "junior", "beginner"].includes(v)) return "junior";
  if (["medium", "intermediate", "mid"].includes(v)) return "mid";
  if (["hard", "advanced", "senior", "expert"].includes(v)) return "senior";
  return null;
}

/** heuristic difficulty for repos without labels */
const ADVANCED_WORDS = [
  "internals", "reconcil", "fiber", "scale", "scaling", "architecture", "trade-off", "tradeoff",
  "sharding", "replication", "consistent hashing", "cap theorem", "distributed", "optimi",
  "memory leak", "garbage", "prototype chain", "microtask", "event loop", "ssr", "hydration",
  "security", "xss", "csrf", "jvm", "concurrency", "mixture of experts", "fine-tun", "rag",
  "why", "deep dive", "compare", "trade", "design",
];
const BASIC_WORDS = ["what is", "what are", "list", "define", "which", "when"];

function heuristicDifficulty(text) {
  const t = text.toLowerCase();
  let score = 0;
  for (const w of ADVANCED_WORDS) if (t.includes(w)) score += 2;
  for (const w of BASIC_WORDS) if (t.startsWith(w)) score -= 1;
  if (text.length > 500) score += 1;
  if (text.length > 1500) score += 1;
  if (score >= 5) return "senior";
  if (score >= 2) return "mid";
  return "junior";
}

/* ─────────────────────── vocabulary dictionary ─────────────────────── */

/** terms already in the glossary (parsed from the data files) */
function glossaryTerms() {
  const files = ["terms.ts", ...fs.readdirSync(path.join(GLOSS, "terms-more")).map((f) => "terms-more/" + f)];
  const set = new Set();
  for (const f of files) {
    const src = read(path.join(GLOSS, f));
    let m; const re = /term: "([^"]+)"/g;
    while ((m = re.exec(src))) set.add(m[1]);
  }
  return set;
}

/** NEW terms this build introduces (they will be added to the glossary) */
const NEW_TERMS = [
  // algorithms
  "Big-O Notation", "Sorting Algorithm", "Binary Search", "Hash Table", "Stack", "Queue",
  "Linked List", "Tree", "Graph", "BFS", "DFS", "Dynamic Programming", "Two Pointers",
  "Sliding Window", "Heap",
  // javascript / frontend
  "Closure", "Hoisting", "Temporal Dead Zone", "Event Delegation", "Event Bubbling",
  "Debouncing", "Throttling", "Prototypal Inheritance", "Promise", "Async/Await",
  "Callback Function", "Currying", "Module Bundler", "Tree Shaking", "Strict Mode",
  "Generator Function", "Web Worker", "Service Worker", "Event Loop", "PWA", "Lazy Loading",
  // react
  "JSX", "Reconciliation", "Fiber", "Context API", "React Portal", "Suspense",
  "Controlled Component", "Lifting State Up", "Custom Hook", "useEffect", "React 19 Actions",
  // system design
  "CAP Theorem", "Consistent Hashing", "Circuit Breaker", "CQRS", "Event Sourcing",
  "Eventual Consistency", "Leader Election", "Pub/Sub", "Backpressure", "Fan-out",
  "Write-ahead Log", "Bloom Filter",
  // llm
  "Transformer", "Attention", "Mixture of Experts", "RLHF", "Inference", "Tokenizer", "Node.js", "Docker", "Kubernetes", "Garbage Collection", "JVM", "Serverless",
];
/** vocabulary dictionary = every term in the glossary (terms.ts + terms-more/*).
 *  NEW_TERMS below is kept for provenance only — every entry now lives in the glossary,
 *  so it must NOT be concatenated again (that produced duplicate vocab chips). */
const DICT = [...glossaryTerms()];

/** generic terms excluded from auto-matching (they hit nearly every answer) */
const GENERIC = new Set([
  "Algorithm", "Function", "Loop", "Variable", "Array", "Object", "Class",
  "Data Type", "State", "Component", "Debugging", "Recursion",
]);

function matchVocab(text, max = 8) {
  const t = " " + text.toLowerCase().replace(/[`*]/g, " ").slice(0, 3200) + " ";
  const hits = [];
  for (const term of DICT) {
    if (GENERIC.has(term)) continue;
    const needle = term.toLowerCase();
    const re = new RegExp("(?<![a-z0-9])" + needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![a-z0-9])", "i");
    if (re.test(t) && !hits.includes(term)) hits.push(term);
    if (hits.length >= max) break;
  }
  return hits;
}

/* ─────────────────────── curated deep-dive attach ─────────────────────── */

const DIVE_MAP = [
  [/hoist/, "js-hoisting-tdz"],
  [/event loop/, "js-event-loop-phases"],
  [/microtask|promise\.then|job queue/, "js-microtask-vs-macrotask"],
  [/closure/, "js-closures-gc"],
  [/this keyword|how .* \bthis\b .*work|call, apply|bind method/, "js-this-binding"],
  [/prototyp/, "js-prototype-chain"],
  [/cookie|sessionstorage|localstorage|web storage/, "js-cookie-storage"],
  [/<script|defer attribute|async.{0,20}defer|defer.{0,20}async/, "js-async-defer"],
  [/delegat/, "js-event-delegation"],
  [/== |equality|double equal|loose comparison/, "js-equality-coercion"],
  [/virtual dom|reconcil|fiber|diffing/, "react-reconciliation-fiber"],
  [/why (do we need |are )?keys?|key prop/, "react-keys"],
  [/hydrat/, "react-hydration"],
  [/setstate|batching|state update/, "react-setstate-batch"],
  [/server component|use client|rsc/, "react-rsc-boundaries"],
  [/rules of hooks|conditional hook|hook order/, "react-hooks-rules"],
  [/cap theorem|consistency.{0,30}availability/, "sd-cap"],
  [/consistent hash/, "sd-consistent-hashing"],
  [/idempot/, "sd-idempotency"],
  [/leader election|single point of failure.{0,40}master/, "sd-leader-election"],
  [/circuit breaker|retry storm|cascading failure/, "sd-circuit-breaker"],
  [/fan.?out|celebrity problem|timeline/, "sd-fanout-celebrity"],
  [/eventual consistency/, "sd-eventual-consistency"],
  [/attention/, "llm-attention"],
  [/temperature/, "llm-temperature"],
  [/mixture of experts|\bmoe\b/, "llm-moe"],
];

function attachDives(text, existing = []) {
  const ids = [...existing];
  // markers attach on the QUESTION + first answer sentences only — not the whole body
  const t = text.toLowerCase().slice(0, 600);
  for (const [re, id] of DIVE_MAP) {
    if (re.test(t) && !ids.includes(id) && ids.length < 3) ids.push(id);
  }
  return ids;
}

/* ─────────────────────── visual explainer attach ─────────────────────── */
/** keyword → VisualKind; first match wins, so keep specific rules on top. */
const VISUAL_MAP = [
  // algorithm explainers (built for the bank's algorithms field)
  [/binary search/, "binary-search"],
  [/\btrie\b|prefix tree/, "trie"],
  [/linked list/, "linked-list"],
  [/\bbfs\b|breadth.?first|\bdfs\b|depth.?first|graph traversal|graph represent/, "graph-traversal"],
  [/dynamic programming|memoiz|tabulation|fibonacci|knapsack/, "memoization-dp"],
  [/bubble sort|quick ?sort|merge sort|insertion sort|selection sort|heap sort|counting sort|radix sort|bucket sort|sorting algorithm/, "sorting"],
  [/\bhash\b|hashmap|hashtable/, "hash-table"],
  // existing explainers
  [/event loop|microtask|job queue/, "event-loop"],
  [/virtual dom|reconcil|fiber|react render/, "react-render"],
  [/dom manipulat|dom tree|browser dom|document object model/, "dom-render"],
  [/\bjwt\b|oauth|access token|auth flow|bearer|authenticat/, "auth-jwt"],
  [/docker|containeriz/, "docker-containers"],
  [/\bgit\b|rebase|gitflow|version control/, "git-flow"],
  [/sql join|inner join|left join|right join|full outer|join operation|\bjoins?\b.{0,30}(table|sql|column)|(?:table|sql).{0,30}\bjoins?\b/, "sql-join"],
  [/encrypt|cipher|\baes\b|\brsa\b|symmetric key|asymmetric key|digital signature/, "encryption"],
  [/machine learning|gradient descent|epoch|overfit|backpropagation|neural network/, "ml-training"],
  [/ci\/cd|continuous integration|continuous deployment|jenkins|github actions|deployment pipeline/, "ci-cd-pipeline"],
  [/activity lifecycle|app lifecycle|oncreate|onresume|viewcontroller|android activity|widget lifecycle/, "mobile-lifecycle"],
  [/http request|http method|\brest\b|request.?response cycle|http\/1|http\/2/, "http-request"],
  // second wave: field themes mined from uncovered questions
  [/(use[A-Z]\w+|\bhooks?\b)/, "hooks-flow"],
  [/redux|reducer|dispatch|mobx|zustand|state management|unidirectional/, "redux-flow"],
  [/\bjsx\b|react element|element and component|synthetic event|controlled component|key prop|what is react|react component|class component|function component/, "jsx-flow"],
  [/promise|async|await|callback hell|callback queue|\bthen\b|fetch api|microtask queue/, "promise-async"],
  [/closure|hoist|this keyword|this binding|call and apply|\.call\b|\.apply\b|\bscope\b|garbage collection|memory leak/, "scope-closure"],
  [/\bcss\b|specificity|selector|box model|flexbox|grid layout|cascade|combinator/, "css-cascade"],
  [/\bheap\b|heapify|priority queue|sift/, "heap-sift"],
  [/\barrays?\b|\bslice\b|rotate|reverse|two.?pointer|sliding window|palindrome|matrix|bitwise|\bbits?\b/, "array-ops"],
  [/cach|cdn|\bredis\b|\bttl\b|hit rate|invalidat/, "cache-flow"],
  [/load.?balanc|scalab|availabilit|failover|monolith|microservic|horizontal|cap theorem|replica|reliab|high availability/, "load-balance"],
  [/kubernetes|kubectl|\bpods?\b|cluster|namespace|helm|node pool|rolling update|cni|container network/, "k8s-cluster"],
  [/\bllm\b|transformer|attention|tokeniz|embedding|rag|prompt|fine.?tun|\bgpt\b|\bbert\b|inference|language model|\bnlp\b|sentiment|markov|bayes|corpus|lemmati|stemming|pos tag/, "llm-flow"],
  [/flutter|widget|dart vm|react native/, "widget-tree"],
  [/tell me about|describe a (time|situation|scenario)|walk me through|why this company|give an example of a time|behavioral|star method|hiring|performance review|promotion|feedback/, "star-method"],
  [/xss|csrf|clickjacking|same.?origin|owasp|vulnerab|injection|sanitiz|cookie.*secure|security header/, "cache-flow"],
  [/sql|query|select|where|database|index|transaction|normaliz|schema|duplicate records/, "sql-query"],
  // generic last: stack/queue wins only when nothing above matched
  [/\bstack\b|\bqueues?\b|deque/, "stack-queue"],
];

/** per-field fallback so every bank question carries an animation */
const FIELD_DEFAULT_VISUAL = {
  javascript: "promise-async",
  react: "jsx-flow",
  frontend: "css-cascade",
  backend: "http-request",
  "devops-cloud": "k8s-cluster",
  cybersecurity: "cache-flow",
  "ai-ml": "llm-flow",
  "system-design": "load-balance",
  algorithms: "array-ops",
  mobile: "widget-tree",
  behavioral: "star-method",
};

function attachVisual(text) {
  const t = text.toLowerCase().slice(0, 900);
  for (const [re, kind] of VISUAL_MAP) if (re.test(t)) return kind;
  return "none";
}

/* ────────────────────────────── parsers ────────────────────────────── */

function parseGreatfrontend(repo, sourceTag) {
  const qDir = path.join(REPOS, repo, "questions");
  const out = [];
  for (const slug of fs.readdirSync(qDir)) {
    const dir = path.join(qDir, slug);
    let meta, mdx;
    try {
      meta = JSON.parse(read(path.join(dir, "metadata.json")));
      mdx = read(path.join(dir, "en-US.mdx"));
    } catch {
      continue;
    }
    if (meta.access && meta.access !== "free") continue;
    const fm = mdx.match(/^---\n([\s\S]*?)\n---/);
    const title = fm ? fm[1].match(/title:\s*(.+)/)?.[1]?.replace(/^"|"$/g, "") : slug;
    let body = mdx.replace(/^---\n[\s\S]*?\n---/, "").trim();
    // TL;DR = quickAnswer
    const tldr = body.match(/## TL;DR\n([\s\S]*?)(?=\n## |\n---)/);
    const quick = tldr ? firstSentences(tldr[1].replace(/\n- /g, " · ")) : splitSentencesFirstPara(body);
    const answerMd = stripMermaid(sanitizeMd(body.replace(/## TL;DR[\s\S]*?(?=\n## |$)/, "").trim()));
    const difficulty =
      mapDifficulty(meta.difficulty) ?? mapDifficulty(meta.level) ?? heuristicDifficulty(title + " " + body);
    const tags = [...(meta.topics || []), ...(meta.companies || []).slice(0, 3)];
    const text = title + " " + quick + " " + answerMd;
    out.push({
      id: slug,
      question: { fa: title, en: title },
      difficulty,
      tags: [...new Set(tags)].slice(0, 5),
      quickAnswer: { fa: quick, en: quick },
      steps: [],
      answerMd,
      lang: "en",
      vocab: matchVocab(text),
      deepDives: attachDives(text).map((id) => ({ id })),
      visual: attachVisual(text),
      source: sourceTag,
      _importance: meta.importance === "high" ? 1 : 0,
      _companies: meta.companies || [],
    });
  }
  return out;
}

function unwrapDetails(md) {
  return md
    .replace(/<details>\s*<summary>[\s\S]*?<\/summary>/gi, "")
    .replace(/<\/details>/gi, "")
    .replace(/<\/?p>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/#####\s*Answer:\s*\d+/gi, "")
    .trim();
}

function parseSudheerjJs() {
  const md = read(path.join(REPOS, "javascript-interview-questions", "README.md"));
  const parts = md.split(/^#### /m).slice(1);
  const out = [];
  for (const part of parts) {
    const nl = part.indexOf("\n");
    if (nl < 0) continue;
    const title = part.slice(0, nl).replace(/^\d+\.\s*/, "").trim();
    if (!title) continue;
    let body = unwrapDetails(part.slice(nl + 1));
    const codeMatch = body.match(/```[a-z]*\n([\s\S]*?)```/);
    const questionCode = codeMatch ? codeMatch[1].trim() : undefined;
    if (questionCode) body = body.replace(codeMatch[0], "");
    const answerMd = stripMermaid(sanitizeMd(body));
    if (answerMd.length < 20) continue;
    const quick = splitSentencesFirstPara(answerMd);
    const text = title + " " + (questionCode || "") + " " + answerMd;
    out.push({
      id: norm(title).slice(0, 60) + "-sudjs-" + out.length,
      question: { fa: title, en: title },
      difficulty: heuristicDifficulty(text),
      tags: ["javascript"],
      quickAnswer: { fa: quick, en: quick },
      steps: [],
      answerMd,
      questionCode,
      lang: "en",
      vocab: matchVocab(text),
      deepDives: attachDives(text).map((id) => ({ id })),
      visual: attachVisual(text),
      source: "sudheerj/javascript-interview-questions",
      _importance: 0,
    });
  }
  return out;
}

function parseSudheerjReact() {
  const md = read(path.join(REPOS, "reactjs-interview-questions", "README.md"));
  const marker = /^\s*(\d+)\.\s+###\s+(.+)$/gm;
  const marks = [];
  let m;
  while ((m = marker.exec(md))) {
    marks.push({ num: m[1], title: m[2].trim(), start: m.index + m[0].length });
  }
  const out = [];
  for (let i = 0; i < marks.length; i++) {
    const { title } = marks[i];
    const end = i + 1 < marks.length ? md.lastIndexOf("**[⬆", marks[i + 1].start) : md.length;
    let body = md.slice(marks[i].start, end > marks[i].start ? end : marks[i + 1].start);
    body = unwrapDetails(stripMermaid(sanitizeMd(body)));
    if (body.length < 30) continue;
    const quick = splitSentencesFirstPara(body);
    const text = title + " " + body;
    out.push({
      id: norm(title).slice(0, 60) + "-sudr-" + out.length,
      question: { fa: title, en: title },
      difficulty: heuristicDifficulty(text),
      tags: ["react"],
      quickAnswer: { fa: quick, en: quick },
      steps: [],
      answerMd: body,
      lang: "en",
      vocab: matchVocab(text),
      deepDives: attachDives(text).map((id) => ({ id })),
      visual: attachVisual(text),
      source: "sudheerj/reactjs-interview-questions",
      _importance: 0,
    });
  }
  return out;
}

/** fuzzy dedupe: normalized-equal OR token-Jaccard ≥ 0.8 (keep the preferred/repo-priority one) */
function jaccard(a, b) {
  const A = new Set(a.split(" "));
  const B = new Set(b.split(" "));
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
}
function dedupe(preferred, others, label, report) {
  const keys = preferred.map((q) => norm(q.question.en));
  const kept = [];
  let removed = 0;
  for (const q of others) {
    const k = norm(q.question.en);
    let dup = keys.includes(k);
    if (!dup && k.split(" ").length > 3) {
      for (const key of keys) {
        if (jaccard(k, key) >= 0.8) { dup = true; break; }
      }
    }
    if (dup) removed++;
    else { keys.push(k); kept.push(q); }
  }
  report.push(`${label}: dedupe removed ${removed} duplicates`);
  return kept;
}

function parseLlms() {
  const md = read(path.join(REPOS, "llms-interview-questions", "README.md"));
  const parts = md.split(/^## (?=\d+\.)/m).slice(1);
  const out = [];
  for (const part of parts) {
    const nl = part.indexOf("\n");
    const title = part.slice(0, nl).replace(/^\d+\.\s*/, "").trim();
    let body = part.slice(nl + 1);
    const nextRepo = body.search(/\n## (?!\d)/); // stop at non-question sections
    if (nextRepo > 0) body = body.slice(0, nextRepo);
    const answerMd = sanitizeMd(body);
    if (answerMd.length < 40) continue;
    const quick = splitSentencesFirstPara(answerMd);
    const text = title + " " + answerMd;
    out.push({
      id: norm(title).slice(0, 60) + "-" + out.length,
      question: { fa: title, en: title },
      difficulty: heuristicDifficulty(text),
      tags: ["llm", "ai", "2026"],
      quickAnswer: { fa: quick, en: quick },
      steps: [],
      answerMd,
      lang: "en",
      vocab: matchVocab(text),
      deepDives: attachDives(text).map((id) => ({ id })),
      visual: attachVisual(text),
      source: "Devinterview-io/llms-interview-questions",
      _importance: 0,
    });
  }
  return out;
}

/* ─────────────── curated: system design problems (EN bullets) ─────────────── */

const SYSTEM_DESIGN_CURATED = [
  {
    q: "Design Pastebin.com (or Bit.ly) — a service that stores text and shares it via short links",
    bullets: [
      "Clarify: read-heavy (10:1), public links, optional expiry, analytics optional.",
      "Estimate: traffic vs storage decides the design; keep URLs ~7 chars → 62^7 keyspace.",
      "Key-ID generation: auto-increment + base62 encoding, or a separate key-generation service (KGS) to avoid collisions.",
      "Storage: key-value store fits best; cache hot reads; CDN for static assets.",
      "Expiry: lazy cleanup + a cron cleaner; custom aliases need profanity/blacklist checks.",
      "Cross-cutting: rate limiting, analytics via counters, partitioning by hash(url).",
    ],
    difficulty: "junior",
  },
  {
    q: "Design the Twitter timeline and search (or Facebook feed and search)",
    bullets: [
      "Core tension: fan-out on write (fast reads, expensive for celebrities) vs fan-out on read (cheap writes, slow reads).",
      "Hybrid: push for normal users, pull/merge for celebrity followers.",
      "Timeline cache: precomputed feed per user (Redis lists of tweet IDs).",
      "Search: inverted index; tweet ingestion → indexing pipeline; fan-out search per user timeline.",
      "Tweet delivery: append to followers' timelines via a queue (async fan-out workers).",
    ],
    difficulty: "senior",
  },
  {
    q: "Design a web crawler",
    bullets: [
      "Components: URL frontier (prioritized queue), HTML downloader, parser, content store, URL extractor, dedup filter.",
      "Politeness: per-host rate limits, robots.txt compliance, delay between same-host requests.",
      "Dedupe: bloom filter or hash-set of seen URLs (hashing + canonicalization).",
      "Distribution: partition URLs by host across workers; BFS-ish traversal with priority (freshness).",
      "Robustness: consistent hashing for the downloader pool, handle spider traps and cycles.",
    ],
    difficulty: "mid",
  },
  {
    q: "Design Mint.com — a personal finance aggregation service",
    bullets: [
      "Ingestion: connect to banks/billing systems; unreliable sources → a queue + retry with backoff.",
      "Storage: users, accounts, transactions; sensitive data → encryption at rest.",
      "Categorization: user transactions mapped to budgets via tagging rules/ML.",
      "Analytics: aggregation over transactions; reports computed on demand or nightly.",
      "Cross-cutting: security (2FA), notification service for budget alerts.",
    ],
    difficulty: "mid",
  },
  {
    q: "Design the data structures for a social network (Facebook/LinkedIn style)",
    bullets: [
      "Core model: a graph — users as nodes, friendships as edges.",
      "Storage: friend lists in wide/column DBs; for graph queries use graph DB or cached adjacency.",
      "Machine learning hints: heavy users vs regular users shape storage strategies.",
      "Feed: merge friends' recent posts (k-way merge over per-user post lists).",
      "Scale: cache friend lists and top posts;paginate deep scrolls.",
    ],
    difficulty: "mid",
  },
  {
    q: "Design a key-value store that supports search (like a distributed Redis)",
    bullets: [
      "API: get/put/delete (+ search over keys or secondary indexes).",
      "Distribution: consistent hashing with virtual nodes for even load.",
      "Replication: N replicas, quorum reads/writes (R+W>N) for tunable consistency.",
      "Conflicts: versioning (vector clocks) + client or server-side resolution.",
      "Failures: hinted handoff, gossip for membership, anti-entropy repair.",
    ],
    difficulty: "senior",
  },
  {
    q: "Design Amazon's sales ranking by category feature",
    bullets: [
      "Ranking source: sold-count aggregation per (category, product).",
      "Pipeline: sales events → queue → aggregator → ranking store updated periodically.",
      "Hot path: serve precomputed top-K per category from cache; avoid ranking on read.",
      "Consistency trade-off: rankings can be eventually consistent (minutes).",
      "Scale: partition by category; windowed aggregation (daily/weekly) for freshness.",
    ],
    difficulty: "mid",
  },
  {
    q: "Design a system that scales to millions of users on AWS",
    bullets: [
      "Start simple: stateless web tier + LB; scale horizontally.",
      "Data tier: RDBMS up to a point — then read replicas, sharding, or NoSQL.",
      "Static content: CDN; dynamic caching: Redis/ElastiCache.",
      "Multi-AZ for availability; autoscaling groups for load.",
      "Async work: message queues (SQS) to decouple heavy tasks; observability from day one.",
    ],
    difficulty: "junior",
  },
];

/* ─────────────── curated: behavioral questions (bilingual STAR) ─────────────── */

function L(fa, en) {
  return { fa, en };
}
const BEHAVIORAL_CURATED = [
  {
    id: "tell-me-about-yourself",
    q: L("خودت را معرفی کن (Tell me about yourself)", "Tell me about yourself"),
    difficulty: "junior",
    tags: ["behavioral", "opening"],
    steps: [
      { title: L("حالت STAR", "Use STAR"), detail: L("جواب باید ۶۰ تا ۹۰ ثانیه باشد: موقعیت (Situation)، وظیفه (Task)، اقدام (Action)، نتیجه (Result).", "Keep it 60–90 seconds: Situation, Task, Action, Result.") },
      { title: L("خط داستان", "The arc"), detail: L("تحصیل/شروع ← مهارت اصلی ← یک پروژه‌ی ملموس با عدد نتیجه ← چرا این شرکت.", "Education/start → core skill → one concrete project with a numeric result → why this company.") },
      { title: L("خطای رایج", "Common mistake"), detail: L("رونویسی رزومه نکن؛ یک داستان منسجم بگو که به نقش وصل می‌شود.", "Don't recite your résumé; tell one coherent story that connects to the role.") },
    ],
  },
  {
    id: "conflict-with-teammate",
    q: L("یک بار که با هم‌تیمی اختلاف نظر جدی داشتی را تعریف کن", "Describe a time you had a serious disagreement with a teammate"),
    difficulty: "mid",
    tags: ["behavioral", "conflict"],
    steps: [
      { title: L("S/T", "S/T"), detail: L("موقعیت مشخص و اختلاف فنی یا اولویتی — بدون بدگویی از طرف مقابل.", "A concrete situation and a technical/priority disagreement — without badmouthing anyone.") },
      { title: L("A", "A"), detail: L("داده یا نمونه آوردی، فعالانه نقطه‌نظر او را پرسیدی، روی هدف مشترک مذاکره کردی.", "You brought data, actively asked for their view, negotiated around the shared goal.") },
      { title: L("R", "R"), detail: L("نتیجه + درس: چطور بعد از این تصمیم گرفتید.", "Outcome + lesson: how the team made decisions afterwards.") },
    ],
  },
  {
    id: "biggest-failure",
    q: L("بزرگ‌ترین شکست حرفه‌ای‌ات چه بود و چطور جبران کردی؟", "What was your biggest professional failure and how did you recover?"),
    difficulty: "mid",
    tags: ["behavioral", "failure"],
    steps: [
      { title: L("صادقانه ولی مرتبط", "Honest but relevant"), detail: L("یک شکست واقعی با پیامد مشخص انتخاب کن، نه «نقطه‌ضعف پنهانی که در واقع نقطه‌قوت است».", "Pick a real failure with a concrete consequence — not a disguised strength.") },
      { title: L("A", "A"), detail: L("مسئولیت را گرفتی، ریشه را پیدا کردی، اصلاح کردی و اطلاع‌رسانی شفاف داشتی.", "You owned it, found the root cause, fixed it, and communicated transparently.") },
      { title: L("R", "R"), detail: L("تغییری پایدار که از آن شکست ساختی (پروسه، چک‌لیست، تست).", "The durable change you built from it (a process, checklist, or test).") },
    ],
  },
  {
    id: "disagree-with-manager",
    q: L("وقتی با تصمیم مدیرت مخالف بودی چه کردی؟", "What did you do when you disagreed with your manager's decision?"),
    difficulty: "senior",
    tags: ["behavioral", "ownership"],
    steps: [
      { title: L("A", "A"), detail: L("در خلوت، با داده و گزینه‌ها مطرح کردی — نه در جلسه و نه احساسی.", "Raised it privately, with data and options — not emotionally in a meeting.") },
      { title: L("Commit", "Commit"), detail: L("بعد از تصمیم نهایی، حتی اگر مخالف بودی، تمام‌قد اجرا کردی (disagree and commit).", "After the final call, you executed fully even if you disagreed (disagree and commit).") },
      { title: L("R", "R"), detail: L("نتیجه — و اگر حق با تو بود، بدون «گفتم دیگر» یادداشتِ درس گرفتی.", "The outcome — and if you were right, you captured the lesson without 'I told you so'.") },
    ],
  },
  {
    id: "tight-deadline",
    q: L("ددلاین غیرممکانی داشتی؛ چطور مدیریتش کردی؟", "Tell me about a time you had an impossible deadline"),
    difficulty: "mid",
    tags: ["behavioral", "prioritization"],
    steps: [
      { title: L("Scope", "Scope"), detail: L("اول با ذینفعان دامنه را واقعی کردی: چی باید برسد، چی بعداً.", "First made scope realistic with stakeholders: what ships now, what waits.") },
      { title: L("A", "A"), detail: L("اولویت‌بندی، بریدن دکوراسیون، ارتباط ریسک‌ها زودهنگام.", "Prioritized, cut nice-to-haves, flagged risks early.") },
      { title: L("R", "R"), detail: L("تحویل + درس درباره‌ی برآوردزنی.", "Delivery + a lesson about estimation.") },
    ],
  },
  {
    id: "received-harsh-feedback",
    q: L("بازخورد تلخ گرفتی؛ چه کردی؟", "Tell me about a time you received harsh feedback"),
    difficulty: "junior",
    tags: ["behavioral", "growth"],
    steps: [
      { title: L("NᐧL", "NᐧL"), detail: L("برنشدی، تشکر کردی و مثال مشخص خواستی تا دقیق بفهمی.", "Didn't get defensive; thanked them and asked for concrete examples.") },
      { title: L("A", "A"), detail: L("یک تغییر قابل‌اندازه‌گیری ساختی و بعداً همان شخص را چک گرفتی.", "Made one measurable change and followed up with the same person later.") },
      { title: L("R", "R"), detail: L("نتیجه و رابطه‌ای که بهتر شد.", "The outcome and the improved relationship.") },
    ],
  },
  {
    id: "helped-teammate-struggling",
    q: L("کمک کردی هم‌تیمی‌ای گیر کرده باشد؛ تعریف کن", "Describe a time you helped a struggling teammate"),
    difficulty: "junior",
    tags: ["behavioral", "teamwork"],
    steps: [
      { title: L("S", "S"), detail: L("علت گیرکردن را درست تشخیص دادی (دانش، ابزار یا انگیزه).", "You diagnosed the real cause (knowledge, tooling, or motivation).") },
      { title: L("A", "A"), detail: L("جفت‌ programming یا جفت‌زنی، مستند کوچک، یا بازکردن مسیر — بدون تصاحب کارش.", "Pairing, a small doc, or unblocking — without taking over their work.") },
      { title: L("R", "R"), detail: L("نتیجه برای او و تیم.", "Outcome for them and the team.") },
    ],
  },
  {
    id: "why-this-company",
    q: L("چرا این شرکت؟ چرا این نقش؟", "Why this company? Why this role?"),
    difficulty: "junior",
    tags: ["behavioral", "motivation"],
    steps: [
      { title: L("تحقیق", "Research"), detail: L("یک محصول/مقاله/مهندسی واقعی از همان شرکت را نام ببر و بگو چیزی از آن یاد گرفتی.", "Name a real product/post/engineering effort and what you learned from it.") },
      { title: L("وصل‌کردن", "Connect"), detail: L("مهارت خودت را به مشکلی که آن شرکت دارد وصل کن.", "Connect your skills to a problem the company actually has.") },
      { title: L("صادق", "Honest"), detail: L("جواب عمومی «شرکت‌های بزرگ عالی‌اند» فوراً لو می‌رود.", "Generic answers like 'great company' are instantly spotted.") },
    ],
  },
];

/* ─────────────── Devinterview-io repos → field mapping ─────────────── */

const DVIO_DIR = path.join(REPOS, "devinterview-io");

const FIELD_CONFIG = [
  {
    slug: "javascript",
    meta: {
      title: { fa: "مصاحبه جاوااسکریپت", en: "JavaScript interviews" },
      description: {
        fa: "بانک کامل سوال‌های جاوااسکریپت از greatfrontend (نسخه ۲۰۲۶)، sudheerj و Devinterview-io — از مبانی تا عمق موتور زبان، مرتب از آسان به سخت.",
        en: "Full JS question bank from greatfrontend (2026 edition), sudheerj & Devinterview-io — language basics to engine internals, sorted easy → hard.",
      },
      icon: "code-2",
      accent: "amber",
    },
    dvio: [],
  },
  {
    slug: "react",
    meta: {
      title: { fa: "مصاحبه ری‌اکت", en: "React interviews" },
      description: {
        fa: "سوال‌های ری‌اکت از greatfrontend (۲۰۲۶) و sudheerj — از کامپوننت و state تا RSC و React 19، مرتب از آسان به سخت.",
        en: "React questions from greatfrontend (2026) & sudheerj — components and state to RSC and React 19, sorted easy → hard.",
      },
      icon: "sparkles",
      accent: "lime",
    },
    dvio: [],
  },
  {
    slug: "frontend",
    meta: {
      title: { fa: "مصاحبه فرانت‌اند", en: "Frontend interviews" },
      description: {
        fa: "از حلقه رویداد تا رندر ری‌اکت و Core Web Vitals — + بانک سوال‌های HTML، CSS، TypeScript و Vue از Devinterview-io.",
        en: "From the JS event loop to React rendering and Core Web Vitals — plus the Devinterview-io HTML, CSS, TypeScript & Vue bank.",
      },
      icon: "layout-template",
      accent: "cyan",
    },
    dvio: ["css-interview-questions", "html5-interview-questions", "typescript-interview-questions", "vue-interview-questions"],
  },
  {
    slug: "backend",
    meta: {
      title: { fa: "مصاحبه بک‌اند", en: "Backend interviews" },
      description: {
        fa: "از طراحی REST و احراز هویت تا Node، جاوا، Go، پایگاه داده و کش — + بانک کامل Devinterview-io (node، java، golang، oop، databases، …).",
        en: "From REST design and auth to Node, Java, Go, databases and caching — plus the full Devinterview-io bank (node, java, golang, oop, databases, …).",
      },
      icon: "server",
      accent: "indigo",
    },
    dvio: [
      "node-interview-questions", "java-interview-questions", "golang-interview-questions",
      "oop-interview-questions", "api-design-interview-questions", "databases-interview-questions",
      "express-interview-questions", "django-interview-questions", "caching-interview-questions",
      "concurrency-interview-questions", "mongodb-interview-questions", "redis-interview-questions",
      "sql-interview-questions", "layering-and-middleware-interview-questions",
      "dependency-injection-interview-questions", "websocket-interview-questions",
    ],
  },
  {
    slug: "devops-cloud",
    meta: {
      title: { fa: "مصاحبه دواپس و ابر", en: "DevOps & cloud interviews" },
      description: {
        fa: "از CI/CD و کانتینر تا کوبرنتیز، AWS و رصد — + بانک Devinterview-io (docker، kubernetes، git، aws، …).",
        en: "From CI/CD and containers to Kubernetes, AWS and observability — plus the Devinterview-io bank (docker, kubernetes, git, aws, …).",
      },
      icon: "cloud",
      accent: "sky",
    },
    dvio: [
      "devops-interview-questions", "docker-interview-questions", "kubernetes-interview-questions",
      "git-interview-questions", "aws-interview-questions", "azure-interview-questions",
      "load-balancing-interview-questions", "availability-and-reliability-interview-questions",
    ],
  },
  {
    slug: "cybersecurity",
    meta: {
      title: { fa: "مصاحبه امنیت سایبری", en: "Cybersecurity interviews" },
      description: {
        fa: "رمزنگاری، هش، XSS/CSRF، SQL Injection، TLS و OAuth با تمرکز بر مفهوم و دفاع — + بانک امنیت وب Devinterview-io.",
        en: "Cryptography, hashing, XSS/CSRF, SQL injection, TLS and OAuth — focused on concepts and defenses, plus the Devinterview-io web-security bank.",
      },
      icon: "shield",
      accent: "rose",
    },
    dvio: ["web-security-interview-questions", "cryptography-interview-questions"],
  },
  {
    slug: "ai-ml",
    meta: {
      title: { fa: "مصاحبه هوش مصنوعی و ML", en: "AI & ML interviews" },
      description: {
        fa: "از مبانی یادگیری و بیش‌برازش تا embedding، RAG، ارزیابی اپ‌های LLM و LLMOps — بانک ۲۰۲۶.",
        en: "From learning basics and overfitting to embeddings, RAG, LLM-app evaluation and LLMOps — the 2026 bank.",
      },
      icon: "brain-circuit",
      accent: "violet",
    },
    dvio: ["llmops-interview-questions", "deep-learning-interview-questions", "nlp-interview-questions"],
  },
  {
    slug: "system-design",
    meta: {
      title: { fa: "طراحی سیستم", en: "System design interviews" },
      description: {
        fa: "مسئله‌های کلاسیک طراحی سیستم + میکروسرویس‌ها، CAP، معماری نرم‌افزار و DDD — از system-design-primer و Devinterview-io.",
        en: "Classic system-design problems + microservices, CAP, software architecture and DDD — from system-design-primer & Devinterview-io.",
      },
      icon: "route",
      accent: "sky",
    },
    dvio: [
      "microservices-interview-questions", "cap-theorem-interview-questions",
      "software-architecture-interview-questions", "service-oriented-architecture-interview-questions",
      "domain-driven-design-interview-questions",
    ],
  },
  {
    slug: "behavioral",
    meta: {
      title: { fa: "سوال‌های رفتاری", en: "Behavioral interviews" },
      description: {
        fa: "سوال‌های رفتاری با ساختار STAR برای جونیور تا استاف — همان‌ها که نیم‌ساعت اول هر مصاحبه را می‌گیرند.",
        en: "Behavioral questions in STAR format from junior to staff — the ones that usually take the first half hour of every interview.",
      },
      icon: "messages-square",
      accent: "emerald",
    },
    dvio: [
      "behavioral-junior-interview-questions", "behavioral-senior-interview-questions",
      "behavioral-staff-interview-questions", "behavioral-managerial-interview-questions",
    ],
  },
  {
    slug: "algorithms",
    meta: {
      title: { fa: "الگوریتم و ساختار داده", en: "Algorithms & data structures interviews" },
      description: {
        fa: "راند الگوریتم هر مصاحبه: بیگ-او، ساختارها (hash، tree، graph، heap)، مرتب‌سازی، DP، دو اشاره‌گر و… — بانک کامل Devinterview-io.",
        en: "Every interview's algorithms round: Big-O, structures (hash, tree, graph, heap), sorting, DP, two pointers and more — the full Devinterview-io bank.",
      },
      icon: "terminal",
      accent: "amber",
    },
    dvio: [
      "big-o-notation-interview-questions", "data-structures-interview-questions",
      "dynamic-programming-interview-questions", "hash-table-data-structure-interview-questions",
      "binary-tree-data-structure-interview-questions", "linked-list-data-structure-interview-questions",
      "graph-data-structure-interview-questions", "array-data-structure-interview-questions",
      "heap-and-map-data-structures-interview-questions", "stack-data-structure-interview-questions",
      "queue-data-structure-interview-questions", "string-data-structure-interview-questions",
      "tree-data-structure-interview-questions", "trie-data-structure-interview-questions",
      "sorting-algorithms-interview-questions", "searching-algorithms-interview-questions",
      "greedy-algorithms-interview-questions", "divide-and-conquer-interview-questions",
      "backtracking-algorithms-interview-questions", "recursion-algorithm-interview-questions",
      "bit-manipulation-interview-questions", "fibonacci-sequence-interview-questions",
    ],
  },
  {
    slug: "mobile",
    meta: {
      title: { fa: "مصاحبه موبایل", en: "Mobile interviews" },
      description: {
        fa: "Flutter، اندروید (Kotlin)، React Native و Swift — از چرخه حیات تا انتشار در استور، بانک کامل Devinterview-io.",
        en: "Flutter, Android (Kotlin), React Native and Swift — lifecycle to store releases, the full Devinterview-io bank.",
      },
      icon: "smartphone",
      accent: "lime",
    },
    dvio: [
      "flutter-interview-questions", "android-interview-questions",
      "kotlin-interview-questions", "react-native-interview-questions", "swift-interview-questions",
    ],
  },
];

function parseDvio(repo, sourceTag) {
  const file = path.join(DVIO_DIR, repo + ".md");
  if (!fs.existsSync(file)) {
    report.push("MISSING dvio readme: " + repo);
    return [];
  }
  const md = read(file);
  const parts = md.split(/^## (?=\d+\.)/m).slice(1);
  const out = [];
  const topic = repo.replace(/-interview-questions$/, "");
  for (const part of parts) {
    const nl = part.indexOf("\n");
    if (nl < 0) continue;
    const title = part.slice(0, nl).replace(/^\d+\.\s*/, "").trim();
    let body = part.slice(nl + 1);
    const stop = body.search(/\n## (?!###)/);
    if (stop > 0) body = body.slice(0, stop);
    body = stripMermaid(sanitizeMd(unwrapDetails(body)));
    if (body.length < 40) continue;
    const quick = splitSentencesFirstPara(body);
    const text = title + " " + body;
    out.push({
      id: norm(title).slice(0, 55) + "-" + topic + "-" + out.length,
      question: { fa: title, en: title },
      difficulty: heuristicDifficulty(text),
      tags: [topic],
      quickAnswer: { fa: quick, en: quick },
      steps: [],
      answerMd: body,
      lang: "en",
      vocab: matchVocab(text),
      deepDives: attachDives(text).map((id) => ({ id })),
      visual: attachVisual(text),
      source: "Devinterview-io/" + repo,
      _importance: 0,
    });
  }
  return out;
}

/* ─────────────── verification: official sources per topic ─────────────── */

const SOURCES_BY_TOPIC = {
  javascript: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  react: ["https://react.dev/reference/react"],
  css: ["https://developer.mozilla.org/en-US/docs/Web/CSS"],
  html5: ["https://developer.mozilla.org/en-US/docs/Web/HTML"],
  typescript: ["https://www.typescriptlang.org/docs/"],
  vue: ["https://vuejs.org/guide/introduction"],
  node: ["https://nodejs.org/docs/latest/api/"],
  java: ["https://docs.oracle.com/en/java/javase/21/"],
  golang: ["https://go.dev/doc/"],
  oop: ["https://refactoring.guru/design-patterns"],
  "api-design": ["https://developer.mozilla.org/en-US/docs/Web/HTTP"],
  databases: ["https://use-the-index-luke.com/"],
  express: ["https://expressjs.com/"],
  django: ["https://docs.djangoproject.com/en/stable/"],
  caching: ["https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"],
  concurrency: ["https://nodejs.org/en/learn/asynchronous-work"],
  mongodb: ["https://www.mongodb.com/docs/"],
  redis: ["https://redis.io/docs/latest/"],
  sql: ["https://www.postgresql.org/docs/current/tutorial.html"],
  "layering-and-middleware": ["https://expressjs.com/en/guide/using-middleware.html"],
  "dependency-injection": ["https://martinfowler.com/articles/injection.html"],
  websocket: ["https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"],
  devops: ["https://roadmap.sh/devops"],
  docker: ["https://docs.docker.com/"],
  kubernetes: ["https://kubernetes.io/docs/home/"],
  git: ["https://git-scm.com/doc"],
  aws: ["https://docs.aws.amazon.com/"],
  azure: ["https://learn.microsoft.com/en-us/azure/?product=popular"],
  "load-balancing": ["https://www.cloudflare.com/learning/load-balancing/what-is-load-balancing/"],
  "availability-and-reliability": ["https://aws.amazon.com/builders-library/"],
  "web-security": ["https://owasp.org/www-project-top-ten/"],
  cryptography: ["https://developer.mozilla.org/en-US/docs/Web/Security"],
  microservices: ["https://microservices.io/patterns/"],
  "cap-theorem": ["https://en.wikipedia.org/wiki/CAP_theorem"],
  "software-architecture": ["https://martinfowler.com/architecture/"],
  "service-oriented-architecture": ["https://microservices.io/patterns/"],
  "domain-driven-design": ["https://martinfowler.com/bliki/DomainDrivenDesign.html"],
  "big-o-notation": ["https://www.bigocheatsheet.com/"],
  "data-structures": ["https://en.wikipedia.org/wiki/List_of_data_structures"],
  "dynamic-programming": ["https://en.wikipedia.org/wiki/Dynamic_programming"],
  "hash-table-data-structure": ["https://en.wikipedia.org/wiki/Hash_table"],
  "binary-tree-data-structure": ["https://en.wikipedia.org/wiki/Binary_tree"],
  "linked-list-data-structure": ["https://en.wikipedia.org/wiki/Linked_list"],
  "graph-data-structure": ["https://en.wikipedia.org/wiki/Graph_(abstract_data_type)"],
  "array-data-structure": ["https://en.wikipedia.org/wiki/Array_(data_structure)"],
  "heap-and-map-data-structures": ["https://en.wikipedia.org/wiki/Heap_(data_structure)"],
  "stack-data-structure": ["https://en.wikipedia.org/wiki/Stack_(abstract_data_type)"],
  "queue-data-structure": ["https://en.wikipedia.org/wiki/Queue_(abstract_data_type)"],
  "string-data-structure": ["https://en.wikipedia.org/wiki/String_(computer_science)"],
  "tree-data-structure": ["https://en.wikipedia.org/wiki/Tree_(abstract_data_type)"],
  "trie-data-structure": ["https://en.wikipedia.org/wiki/Trie"],
  "sorting-algorithms": ["https://en.wikipedia.org/wiki/Sorting_algorithm"],
  "searching-algorithms": ["https://en.wikipedia.org/wiki/Binary_search"],
  "greedy-algorithms": ["https://en.wikipedia.org/wiki/Greedy_algorithm"],
  "divide-and-conquer": ["https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm"],
  "backtracking-algorithms": ["https://en.wikipedia.org/wiki/Backtracking"],
  "recursion-algorithm": ["https://en.wikipedia.org/wiki/Recursion_(computer_science)"],
  "bit-manipulation": ["https://en.wikipedia.org/wiki/Bit_manipulation"],
  "fibonacci-sequence": ["https://en.wikipedia.org/wiki/Fibonacci_sequence"],
  llmops: ["https://huggingface.co/blog"],
  "deep-learning": ["https://en.wikipedia.org/wiki/Deep_learning"],
  nlp: ["https://en.wikipedia.org/wiki/Natural_language_processing"],
  flutter: ["https://docs.flutter.dev/"],
  android: ["https://developer.android.com/docs"],
  kotlin: ["https://kotlinlang.org/docs/home.html"],
  "react-native": ["https://reactnative.dev/docs/getting-started"],
  swift: ["https://www.swift.org/documentation/"],
  llm: ["https://huggingface.co/learn"],
  ai: ["https://huggingface.co/learn"],
  rest: ["https://developer.mozilla.org/en-US/docs/Web/HTTP"],
  http: ["https://developer.mozilla.org/en-US/docs/Web/HTTP"],
  security: ["https://owasp.org/www-project-top-ten/"],
  "system-design": ["https://github.com/donnemartin/system-design-primer"],
  architecture: ["https://martinfowler.com/architecture/"],
  "javascript-interview": ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
};

/** hand-verified sources for specific risky answers */
const MANUAL_SOURCES = [
  { repo: "sudheerj/reactjs-interview-questions", match: /javascript urls/i, sources: ["https://react.dev/blog/2024/04/25/react-19-upgrade-guide", "https://react.dev/reference/react-dom/components/a#disabling-url-parsing"] },
  { repo: "greatfrontend/top-javascript-interview-questions", match: /hoisting/i, sources: ["https://developer.mozilla.org/en-US/docs/Glossary/Hoisting"] },
  { repo: "sudheerj/javascript-interview-questions", match: /modify it to get the actual user data/i, sources: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"] },
];

function attachSources(q) {
  const out = new Set();
  for (const tag of q.tags || []) {
    for (const u of SOURCES_BY_TOPIC[tag] || []) out.add(u);
  }
  for (const p of MANUAL_SOURCES) {
    if (q.source && q.source.includes(p.repo) && p.match.test(q.question.en)) {
      for (const u of p.sources) out.add(u);
    }
  }
  return [...out].slice(0, 3);
}

/* ────────────────────────────── build ────────────────────────────── */

const RANK = { junior: 0, mid: 1, senior: 2 };

/* ─────────────── fact-check corrections (verified Nov 18, 2026) ─────────────── */

const CORRECTIONS = [
  {
    "file": "algorithms.json",
    "includes": "such that _enqueue_ has _O(1)_",
    "patch": {
      "quickAnswer": {
        "fa": "از یک آرایه پویا استفاده کن: افزودن به انتها O(1) و حذف از خانه صفر، همه‌ی عناصر را یک خانه جابه‌جا می‌کند — همان O(n) هدف.",
        "en": "Use a dynamic array: appending is O(1) amortized, and removing index 0 shifts every remaining element — exactly the required O(n) dequeue."
      },
      "answerMd": "The cleanest construction is a **dynamic array**:\n\n- **enqueue** → append at the end: `arr.push(x)` — O(1) amortized.\n- **dequeue** → remove the element at index 0: `arr.shift()` — every remaining element moves one slot forward, which is exactly the required O(n).\n\nA singly linked list produces the same split if you **insert at the head** (O(1) enqueue) and **remove at the tail** — reaching the node *before* the tail forces a full traversal, so dequeue is O(n). (Enqueue at the tail and dequeue at the head would give O(1)/O(1) — that is the *fast* queue, not what this question asks for.)\n\n### Python example — array version\n\n```python\nclass SlowQueue:\n    def __init__(self):\n        self.items = []\n\n    def enqueue(self, x):          # O(1) amortized\n        self.items.append(x)\n\n    def dequeue(self):             # O(n) — shifts every element left\n        return self.items.pop(0)\n```\n\nThis asymmetry is exactly why production runtimes ship a **deque** (double-ended queue): it makes both ends O(1)."
    }
  },
  {
    "file": "algorithms.json",
    "includes": "What is _Sentinel Search_",
    "patch": {
      "answerMd": "A **Sentinel Search** is a linear-search optimization: you append the search key itself to the end of the list (the *sentinel*) before scanning. The loop is then guaranteed to find the key, so the per-iteration bounds check disappears — average comparisons drop from roughly 2n (loop test + increment) to about n + 2. After the scan, one final check confirms whether the hit was real data or just the sentinel.\n\n**Complexity:** time O(n), extra space O(1).\n\n**Common confusion:** Sentinel Search is *not* the same as **self-organizing list** techniques such as Move-to-Front or Transpose. Those reorder entries based on access frequency to speed up *future* searches; the sentinel only removes the bounds check for the *current* search. A reordering heuristic can be combined with a sentinel, but they are independent optimizations.\n\n### Python example\n\n```python\ndef sentinel_search(arr, key):\n    last = len(arr) - 1\n    if last < 0:\n        return -1\n    old = arr[last]\n    arr[last] = key              # plant the sentinel\n    i = 0\n    while arr[i] != key:         # no bounds check needed\n        i += 1\n    arr[last] = old              # restore\n    if i < last or old == key:   # real hit?\n        return i\n    return -1\n```"
    }
  },
  {
    "file": "backend.json",
    "includes": "detect and handle WebSocket connection loss",
    "patch": {
      "answerMd": "### Connection Monitoring\n\n1. **Application-level heartbeats**: Browsers do **not** expose the WebSocket protocol's ping/pong control frames (RFC 6455 opcodes 0x9/0xA) to JavaScript — those are handled below the API surface. So implement an app-level heartbeat: send a small message (or a custom ping) on an interval (typically 30s) and treat the connection as dead when no response arrives within a shorter timeout T. Server-side frameworks (e.g. the `ws` library in Node.js) *do* expose native `ping()`/`pong()`.\n2. **Server-Side Monitoring**: Deploy **Prometheus** exporters to track `active_connections` via socket gauges, and **OpenTelemetry** trace spans to correlate socket lifecycle events with downstream microservice latency.\n3. **Client-Side Tracking**: Use the `onclose` and `onerror` event listeners, reconnect with exponential backoff + jitter, and — in React — wrap socket state in `useSyncExternalStore` or a custom hook so the component tree stays consistent."
    }
  }
];

function applyCorrections(fileName, sorted) {
  for (const c of CORRECTIONS) {
    if (fileName !== c.file) continue;
    const q = sorted.find((x) => x.question.en.includes(c.includes));
    if (q) {
      Object.assign(q, c.patch);
      q.source = (q.source || "") + " — fact-checked & corrected";
      report.push("CORRECTED: " + fileName + " | " + q.id);
    }
  }
}

function buildField(fileName, meta, questions) {
  const slug = fileName.replace(/\.json$/, "");
  const sorted = [...questions]
    .map((q, i) => ({ ...q, _i: i }))
    .sort(
      (a, b) =>
        RANK[a.difficulty] - RANK[b.difficulty] ||
        (b._importance || 0) - (a._importance || 0) ||
        a._i - b._i,
    )
    .map(({ _i, _importance, ...q }) => ({
      ...q,
      deepDives: (q.deepDives || []).map((d) => d.id),
      sources: attachSources(q),
      // field default: every question carries an animation (keyword rules ran at build time)
      visual: !q.visual || q.visual === "none" ? FIELD_DEFAULT_VISUAL[slug] || "none" : q.visual,
    }));

  const counts = { junior: 0, mid: 0, senior: 0 };
  for (const q of sorted) counts[q.difficulty]++;
  applyCorrections(fileName, sorted);
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, fileName), JSON.stringify({ meta, questions: sorted }, null, 1));
  report.push(`${fileName}: ${sorted.length} questions (${JSON.stringify(counts)})`);
}

const report = [];

/* 1) javascript (gf + sudheerj) */
const gfJs = parseGreatfrontend("top-javascript-interview-questions", "greatfrontend/top-javascript-interview-questions");
const sudJs = parseSudheerjJs();
const jsCfg = FIELD_CONFIG[0];
const jsUnique = dedupe(gfJs, sudJs, "javascript", report);
buildField("javascript.json", jsCfg.meta, [...gfJs, ...jsUnique]);

/* 2) react (gf + sudheerj) */
const gfReact = parseGreatfrontend("top-reactjs-interview-questions", "greatfrontend/top-reactjs-interview-questions");
const sudReact = parseSudheerjReact();
const reactCfg = FIELD_CONFIG[1];
const reactUnique = dedupe(gfReact, sudReact, "react", report);
buildField("react.json", reactCfg.meta, [...gfReact, ...reactUnique]);

/* 3) system design (primer curated problems + Devinterview-io architecture repos) */
{
  const sdCfg = FIELD_CONFIG.find((c) => c.slug === "system-design");
  const sd = SYSTEM_DESIGN_CURATED.map((c, i) => {
    const text = c.q + " " + c.bullets.join(" ");
    return {
      id: "sd-" + norm(c.q).slice(0, 40) + "-" + i,
      question: { fa: c.q, en: c.q },
      difficulty: c.difficulty,
      tags: ["system-design", "architecture"],
      quickAnswer: { fa: firstSentences(c.bullets[0] + " " + (c.bullets[1] || "")), en: firstSentences(c.bullets[0] + " " + (c.bullets[1] || "")) },
      steps: c.bullets.map((b, bi) => ({ title: L("گام " + (bi + 1), "Step " + (bi + 1)), detail: { fa: b, en: b } })),
      lang: "en",
      vocab: matchVocab(text),
      deepDives: attachDives(text).map((id) => ({ id })),
      visual: attachVisual(text),
      source: "donnemartin/system-design-primer + ashishps1/awesome-system-design-resources",
    };
  });
  let sdDvio = [];
  for (const repo of sdCfg.dvio) sdDvio.push(...parseDvio(repo, "Devinterview-io/" + repo));
  const sdAll = dedupe(sd, sdDvio, "system-design", report);
  buildField("system-design.json", sdCfg.meta, [...sd, ...sdAll]);
}

/* 4) behavioral (bilingual curated + Devinterview-io junior→staff) */
{
  const bhCfg = FIELD_CONFIG.find((c) => c.slug === "behavioral");
  const bh = BEHAVIORAL_CURATED.map((c) => ({
    id: c.id,
    question: c.q,
    difficulty: c.difficulty,
    tags: c.tags,
    quickAnswer: { fa: c.steps[0].detail.fa, en: c.steps[0].detail.en },
    steps: c.steps,
    vocab: [],
    deepDives: [],
    source: "yangshun/tech-interview-handbook (behavioral) — curated",
  }));
  let bhDvio = [];
  for (const repo of bhCfg.dvio) bhDvio.push(...parseDvio(repo, "Devinterview-io/" + repo));
  buildField("behavioral.json", bhCfg.meta, [...bh, ...bhDvio]);
}

/* 5+) remaining config-driven fields */
for (const cfg of FIELD_CONFIG.slice(2)) {
  if (["system-design", "behavioral"].includes(cfg.slug)) continue;
  let qs = [];
  for (const repo of cfg.dvio) qs.push(...parseDvio(repo, "Devinterview-io/" + repo));
  if (cfg.slug === "ai-ml") qs.push(...parseLlms());
  const seen = new Set();
  const uniq = qs.filter((q) => {
    const k = norm(q.question.en);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  buildField(cfg.slug + ".json", cfg.meta, uniq);
}

fs.writeFileSync(path.join(OUT, "report.txt"), report.join("\n"));
console.log(report.join("\n"));
