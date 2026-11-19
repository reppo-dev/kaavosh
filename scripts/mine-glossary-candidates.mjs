// Mine candidate glossary terms from the interview bank Q&A content.
// Usage: node scripts/mine-glossary-candidates.mjs
// Output: scripts/_fa-todo/glossary-candidates.txt (frequency-sorted, filtered)
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BANK = join(root, "src", "data", "interview-bank");
const GLOSS = join(root, "src", "data", "glossary");

// 1) existing glossary terms
const files = ["terms.ts", ...readdirSync(join(GLOSS, "terms-more")).map((f) => "terms-more/" + f)];
const existing = new Set();
for (const f of files) {
  const src = readFileSync(join(GLOSS, f), "utf8");
  let m; const re = /term: "([^"]+)"/g;
  while ((m = re.exec(src))) existing.add(m[1]);
}
const existingLower = new Set([...existing].map((t) => t.toLowerCase()));

// 2) load all bank questions
const slugs = ["javascript", "react", "frontend", "backend", "devops-cloud", "cybersecurity", "ai-ml", "system-design", "algorithms", "mobile", "behavioral"];
const texts = [];
for (const s of slugs) {
  const parsed = JSON.parse(readFileSync(join(BANK, `${s}.json`), "utf8"));
  for (const q of parsed.questions) {
    const md = (q.answerMd || "").slice(0, 4000).replace(/[`*#>$]/g, " ");
    texts.push({ slug: s, text: `${q.question.en}\n${q.quickAnswer?.en || ""}\n${md}` });
  }
}

// 3) extraction patterns
const count = new Map();
const bump = (cand, slug) => {
  const k = cand;
  if (!count.has(k)) count.set(k, { n: 0, slugs: new Set() });
  const e = count.get(k);
  e.n++;
  e.slugs.add(slug);
};

const capPhrase = /\b([A-Z][a-zA-Z0-9]*(?:-[A-Z][a-zA-Z0-9]*)?(?:\s+(?:of|and|in|to|vs)?\s*[A-Z][a-zA-Z0-9]*(?:-[A-Z][a-zA-Z0-9]*)?){1,3})\b/g;
const acronym = /\b([A-Z][A-Z0-9]{1,7})\b/g;
const pascal = /\b([A-Z][a-z]+[A-Z][a-zA-Z0-9]*)\b/g; // camel/PascalCase like useMemo, BigInt
const snake = /\b([a-z]+_[a-z_]+)\b/g;

for (const { slug, text } of texts) {
  let m;
  while ((m = capPhrase.exec(text))) bump(m[1], slug);
  while ((m = acronym.exec(text))) bump("§" + m[1], slug);
  while ((m = pascal.exec(text))) bump("¶" + m[1], slug);
  while ((m = snake.exec(text))) bump("§" + m[1].toUpperCase(), slug);
}

// 4) filters
const STOP = new Set(
  ("The This That These Those When What Where Which Why How Your You Their They There Here Then Than Also However While About After Before During Between With Without From Into Over Under Again Each Other Some Many More Most Less Least New Old First Last Next Best Better Worst Good Great Big Small Same Next Step Real World Real-life Use Case Use Cases Interview Question Interview Questions Ask Asked Answer Answers Code Coding Example Examples Case Cases Point Points Thing Things Way Ways Note Notes Tip Tips Trick Tricks Deep Dive Deep Dives Part Level Levels Time Space Memory Data Structure Data Structures Programming Language Programming Languages Software Engineer Software Engineering Computer Science Tech Technical Role Team Teams Company Companies Developer Developers Application Applications System Systems Service Services Feature Features Requirement Requirements Problem Problems Solution Solutions Behavior Behaviors Value Values Key Keys Type Types Item Items Node Nodes Edge Edges Word Words String Strings Number Numbers Bit Bits Byte Bytes Character Characters Text Input Output Result Results Process Processes Step Steps Stage Stages Idea Ideas Concept Concepts Term Terms Term Definition Definitions Question Questions List Set Map Array Object Class Method Field Property Parameter Argument Return Update Updates Insert Delete Search Find Sort Order Store Keep Check Build Run Test Read Write Call Pass Give Get Make Take Use Used Using Need Needed Want Work Works Working Follow Followed Following Common Simple Easy Hard Complex Advanced Basic Modern Modern Alternative Efficient Inefficient Fast Slow Large Small Multiple Single Pair Pairs End Start Top Bottom Left Right North South Average Worst Best Case Cases Exactly Always Never Often Sometimes Usually Generally Typically Specifically Particularly Importantly However Therefore Meanwhile Additionally Furthermore Moreover Although Because Since Despite Instead Rather Compared Regarding Regarding Specific Certain Various Different Similar Important Critical Essential Useful Powerful Popular Commonly Frequently Typically Roughly Approximately Around Nearly Almost Fairly Quite Very Much More Less Fewer Least Most Well Still Just Only Even Also Too Here There When Where While During After Before Until Unless Because Though Although If Else Then Than So Such Both Either Neither All Any Each Every No Not None One Two Three Four Five Six Seven Eight Nine Ten First Second Third Fourth Fifth Sixth Seventh Eighth Ninth Tenth Hundred Thousand Million Billion Interviewee Interviewer Candidate Candidates Hiring Recruiter Hiring Manager Round Rounds Stage Screening Onsite Remote Hybrid On-site In-person Offer Offers Salary Compensation Benefit Benefits Culture Fit Company Company Size Startup Scale-up Enterprise Agency Freelance Product Products Client Customers User Users Team Member Members Colleague Peer Peers Manager Lead Mentor Junior Senior Mid Level Staff Principal Fellow Distinguished Engineer Engineering Designer PM Product Manager PO Scrum Master Agile Scrum Kanban Sprint Retrospective Standup Backlog Ticket Tickets Jira GitHub GitLab Bitbucket Slack Zoom Google Microsoft Amazon Apple Meta Facebook Netflix Uber Airbnb Twitter LinkedIn Stack Overflow Medium Dev To Reddit Hacker News YouTube Blog Blogs Book Books Course Courses Tutorial Tutorials Documentation Docs Spec Specs Specification Standard Standards RFC Proposal PR Pull Request Merge Rebase Commit Push Branch Fork Clone Issue Issues Bug Bugs Fix Fixed Regression Feature Flag Flags Release Deploy Deployment CI CD Pipeline Pipelines Environment Environments Production Staging Development Local Cloud Server Client Browser Server-side Client-side Frontend Backend Full-stack Fullstack Database Databases Query Queries Schema Migration Index Transaction Row Column Table Join Foreign Key Primary Key Normalization Denormalization ACID CAP BASE CRUD ORM SQL NoSQL REST GraphQL gRPC WebSocket HTTP HTTPS TCP UDP IP DNS TLS SSL SSH CDN LB Proxy Firewall VPN Token JWT OAuth Session Cookie Cache Caching Queue Message Kafka RabbitMQ Redis Memcached Docker Container Kubernetes Pod Cluster Node Pod Master Slave Primary Replica Sharding Partition Replica Replication Consistency Availability Latency Throughput Throughput Load Traffic Request Response Header Body Status Method Endpoint API SDK Framework Library Runtime Compiler Interpreter VM Virtual Machine OS Operating System Linux Windows macOS Android iOS Swift Kotlin Java Python Ruby Go Rust C Cpp Csharp PHP JavaScript TypeScript JSX TSX HTML CSS SCSS Sass Less Tailwind Bootstrap Webpack Vite Babel ESLint Prettier Jest Mocha Chai Cypress Playwright Puppeteer Selenium Karma Jasmine Enzyme React ReactJS Vue Angular Svelte Next Nuxt Gatsby Remix Solid SvelteKit Astro Express Koa Fastify Nest Django Flask FastAPI Laravel Rails Spring Boot Hibernate MyBatis MongoDB MySQL PostgreSQL PostgreSQL MariaDB SQLite Oracle SQLServer Cassandra DynamoDB Elasticsearch Elasticsearch Solr Neo4j GraphQL Apollo Relay Redux MobX Zustand Jotai Recoil RxJS Rx Lodash Ramda Moment Dayjs Axios Fetch jQuery Zepto D3 Three Chart Canvas WebGL WebGPU WASM WebAssembly Node NodeJS Deno Bun Yarn NPM PNPM Turbo Vite Rollup Esbuild SWC Terser Babel Jest Vitest React Testing Library RTL Storybook Chromatic Figma Sketch Adobe XD Zeplin InVision Principal Senior Lead Staff Manager Director VP CEO CTO CFO COO SVP EVP Intern Newgrad New Grad Entry Level Mid Senior Staff Senior Staff Principal Distinguished Google Amazon Meta Microsoft Apple Netflix Uber Airbnb Twitter LinkedIn ByteDance Alibaba Tencent Baidu Huawei Xiaomi Nvidia Intel AMD Qualcomm ARM Oracle IBM SAP Salesforce Adobe VMware Red Hat Canonical Docker Kubernetes HashiCorp Terraform Ansible Chef Puppet Jenkins CircleCI Travis GitHub Actions GitLab CI ArgoCD Spinnaker Prometheus Grafana ELK Loki Jaeger Zipkin Sentry Datadog New Relic PagerDuty OpsGenie Splunk AWS Azure GCP Google Cloud Amazon Web Services Microsoft Azure DigitalOcean Heroku Vercel Netlify Cloudflare Fastly Akamai CloudFront S3 EC2 Lambda ECS EKS AKS GKE Cloud Run Firebase Supabase PlanetScale Neon Supabase Turso Upstash Aiven MongoDB Atlas Snowflake Databricks BigQuery Redshift BigQuery Athena Presto Trino Spark Hadoop Flink Beam Airflow Luigi Dagster Prefect Temporal Cadence Ray Ray Dask Horovod Tensorflow PyTorch Keras MXNet JAX ONNX TensorRT OpenVINO CUDA ROCm OpenCL Vulkan Metal DirectX OpenGL GLSL HLSL WGSL Unity Unreal Godot CryEngine Blender Maya 3ds Max Houdini Nuke After Effects Premiere DaVinci Resolve FCP Adobe Premiere Pro Apple Final Cut Sony Vegas Avid Media Composer Filmora CapCut InShot KineMaster VN LumaFusion PowerDirector Vegas Movie Studio iMovie Windows Movie Maker Shotcut OpenShot Kdenlive Olive Flowblade Avidemux HandBrake FFmpeg Gyazo OBS Streamlabs XSplit Wirecast vMix Restream StreamYard Twitch YouTube Live Facebook Gaming Instagram TikTok Discord Telegram WhatsApp Signal Viber WeChat Line KakaoTalk Skype Teams Slack Zoom Google Meet Cisco Webex Whereby Jitsi Around Tandem Pop Flow Clubhouse Twitter Spaces Greenroom")
    .split(/\s+/),
);
const PEOPLE = /^(Adelson|Velsky|Landis|Knuth|Morris|Pratt|Eratosthenes|Euclid|Boyer|Moore|Rabin|Karp|Strassen|Karatsuba|Johnson|Trotter|Fisher|Yates|Kadane|Floyd|Dijkstra|Huffman|Kruskal|Prim|Bellman|Ford|Boehm|Atkinson|Hans|Russ|Binet|Lucas|Fibonacci|Gauss|Newton|Euler|Bayes|Markov|Poisson|Bernoulli|Chebyshev|Lagrange|Fourier|Laplace|Lebesgue|Riemann|Cantor|Godel|Turing|Church|Neumann|Shannon|Hopper|Ritchie|Thompson|Kernighan|Stroustrup|Rossum|Eich|Hejlsberg|Resig|Otto|Gaunt|Wathan|Duckett|McKinney|Abramov|Walcott|Micha|Zakas|Oswald)/;

const genericSingle = new Set(
  ("Algorithm Array List Tree Node Graph Vertex Edge Hash Stack Queue Heap Matrix Vector String Integer Float Boolean Object Class Struct Interface Enum Union Pointer Reference Value Variable Function Method Property Attribute Field Parameter Argument Return Type Instance Object Interface Abstract Final Static Public Private Protected Override Overload Constructor Destructor Getter Setter Iterator Generator Async Await Sync Promise Callback Closure Scope Hoist Context Binding This Super Extends Implements Package Module Import Export Default Named Namespace Bundle Chunk Polyfill Transpile Compile Interpret Parse Token Lexer Parser AST Grammar Semantic Syntax Runtime Memory Heap Stack Segment Register Cache Buffer Channel Pipe Socket Port Protocol Address Route Gateway Firewall Proxy Tunnel Encrypt Decrypt Hash Salt Pepper Digest Signature Certificate Key Pair Secret Token Session Cookie State Store Action Reducer Dispatch Subscribe Unsubscribe Render Reconcile Commit Mount Unmount Update Patch Props State Context Provider Consumer Hook Effect Ref Memo Callback Defer Throttle Debounce Batch Flush Schedule Priority Interrupt Yield Suspend Resume Fork Join Spawn Thread Process Coroutine Fiber Lock Mutex Semaphore Atomic Volatile Transaction Commit Rollback Isolation Durability Consistency Availability Partition Latency Throughput Bandwidth Jitter Timeout Retry Backoff Circuit Breaker Bulkhead Throttle Rate Limit Quota Budget Metric Log Trace Span Alert Dashboard Chart Graph Panel Widget Report Insight Signal Noise Trend Seasonal Anomaly Outlier Correlation Causation Experiment Variant Control Treatment Metric KPI OKR Goal Objective Target Milestone Deliverable Scope Estimate Effort Complexity Risk Mitigation Dependency Blocker Escalation Stakeholder Alignment Consensus Buy-in Feedback Review Audit Compliance Governance Policy Standard Procedure Guideline Principle Pattern Practice Convention Idiom Style Taste Craft Quality Debt Technical Legacy Greenfield Brownfield Migration Refactor Rewrite Rebuild Modernize Optimize Tune Benchmark Profile Measure Monitor Observe Instrument Telemetry").split(
    /\s+/,
  ),
);

const results = [];
for (const [cand, info] of count) {
  const isAcronym = cand.startsWith("§");
  const isPascal = cand.startsWith("¶");
  const name = isAcronym || isPascal ? cand.slice(1) : cand;
  if (info.n < 3) continue; // rare — skip
  if (STOP.has(name) || STOP.has(cand.slice(1))) continue;
  if (existingLower.has(name.toLowerCase())) continue;
  if (PEOPLE.test(name)) continue;
  if (isAcronym && !/^[A-Z]{2,8}$/.test(name)) continue;
  if (isPascal && info.n < 4) continue;
  // single-word capitalized plain words are usually noise unless PascalCase
  if (!isAcronym && !isPascal && !name.includes(" ") && !/^(Heap|Trie|Rope|Deque|Set|Map)$/.test(name)) continue;
  results.push({ name, n: info.n, slugs: [...info.slugs].sort().join(",") });
}

results.sort((a, b) => b.n - a.n);
const out = results.map((r) => `${String(r.n).padStart(4)}  ${r.name.padEnd(48)} [${r.slugs}]`).join("\n");
writeFileSync(join(root, "scripts", "_fa-todo", "glossary-candidates.txt"), out, "utf8");
console.log(`candidates: ${results.length} (freq>=3, not in glossary) -> scripts/_fa-todo/glossary-candidates.txt`);
console.log("top 60:");
for (const r of results.slice(0, 60)) console.log(`  ${String(r.n).padStart(4)}  ${r.name}  [${r.slugs.slice(0, 60)}]`);
