import type { ExplainerMeta, VisualKind } from "./schema";

/**
 * DATA FILE — Animated explainers metadata. Consumed by: landing
 * "Concept animations" showcase and stage/question cards.
 * The actual animations live in src/components/explainers/*.
 */
export const explainerMeta: Record<VisualKind, ExplainerMeta> = {
  "http-request": {
    id: "http-request",
    title: { fa: "سفر یک درخواست HTTP", en: "The journey of an HTTP request" },
    caption: {
      fa: "ببینید وقتی Enter می‌زنید، درخواست شما چطور به سرور می‌رود و پاسخ چطور برمی‌گردد.",
      en: "Watch your request travel to a server and come back with a response.",
    },
    usedIn: {
      fa: "بخش وب و شبکه در مسیرهای فرانت‌اند و بک‌اند",
      en: "Web & networking stages in the frontend and backend paths",
    },
  },
  "react-render": {
    id: "react-render",
    title: { fa: "رندر و تطبیق ری‌اکت", en: "React render & reconciliation" },
    caption: {
      fa: "درخت کامپوننت‌ها وقتی state عوض می‌شود چطور دوباره رندر می‌شود.",
      en: "How the component tree re-renders when state changes.",
    },
    usedIn: {
      fa: "مرحله ری‌اکت در مسیر فرانت‌اند و سوال‌های ری‌اکت",
      en: "The React stage in the frontend path and React questions",
    },
  },
  "event-loop": {
    id: "event-loop",
    title: { fa: "حلقه رویداد جاوااسکریپت", en: "The JavaScript event loop" },
    caption: {
      fa: "چرا جاوااسکریپت با یک نخ، هم‌زمان‌به‌نظر می‌رسد؟ صف، پشته و حلقه را ببینید.",
      en: "Why JavaScript feels simultaneous with a single thread — see the queue, stack and loop.",
    },
    usedIn: {
      fa: "مرحله جاوااسکریپت در مسیر فرانت‌اند و سوال‌های event loop",
      en: "The JavaScript stage in the frontend path and event-loop questions",
    },
  },
  "git-flow": {
    id: "git-flow",
    title: { fa: "شاخه و ادغام در گیت", en: "Branching & merging in Git" },
    caption: {
      fa: "کامیت‌ها روی خط زمان، شاخه‌زدن از یک نقطه و ادغام دوباره.",
      en: "Commits on a timeline, branching from a point and merging back.",
    },
    usedIn: {
      fa: "مرحله ابزارها در بیشتر مسیرها",
      en: "Tooling stages in most paths",
    },
  },
  "docker-containers": {
    id: "docker-containers",
    title: { fa: "ماشین مجازی در برابر کانتینر", en: "VM vs container" },
    caption: {
      fa: "چرا کانتینر سبک است؟ هر کدام از چه چیزی ساخته شده‌اند را مقایسه کنید.",
      en: "Compare what each is built from and why containers stay light.",
    },
    usedIn: {
      fa: "مرحله داکر در مسیرهای دواپس و بک‌اند",
      en: "The Docker stages in the DevOps and backend paths",
    },
  },
  "auth-jwt": {
    id: "auth-jwt",
    title: { fa: "احراز هویت با توکن", en: "Token-based authentication" },
    caption: {
      fa: "توکن چطور صادر می‌شود، همراه هر درخواست می‌رود و امضایش چطور بررسی می‌شود.",
      en: "How a token is issued, carried on every request, and verified by signature.",
    },
    usedIn: {
      fa: "مرحله احراز هویت و سوال‌های امنیتی",
      en: "Auth stages and security questions",
    },
  },
  "sql-join": {
    id: "sql-join",
    title: { fa: "JOIN در پایگاه داده", en: "JOINing two tables" },
    caption: {
      fa: "دو جدول بر اساس کلید مشترک به هم می‌چسبند و یک نتیجه می‌سازند.",
      en: "Two tables snap together on a shared key into one result.",
    },
    usedIn: {
      fa: "مرحله پایگاه داده و سوال‌های SQL",
      en: "The database stage and SQL questions",
    },
  },
  "dom-render": {
    id: "dom-render",
    title: { fa: "از HTML تا پیکسل", en: "From HTML to pixels" },
    caption: {
      fa: "مرورگر چطور HTML و CSS و JS را به درخت DOM و بعد به تصویر صفحه تبدیل می‌کند.",
      en: "How the browser turns HTML, CSS and JS into a DOM tree, then pixels.",
    },
    usedIn: {
      fa: "مرحله HTML/CSS در مسیر فرانت‌اند",
      en: "The HTML/CSS stage in the frontend path",
    },
  },
  "ml-training": {
    id: "ml-training",
    title: { fa: "آموزش یک مدل یادگیری ماشین", en: "Training a machine-learning model" },
    caption: {
      fa: "داده وارد مدل می‌شود، خطا کم می‌شود و پیش‌بینی بهتر می‌شود.",
      en: "Data flows in, error shrinks, predictions improve.",
    },
    usedIn: {
      fa: "مرحله‌های یادگیری ماشین در مسیر هوش مصنوعی",
      en: "The machine-learning stages in the AI/ML path",
    },
  },
  "ci-cd-pipeline": {
    id: "ci-cd-pipeline",
    title: { fa: "خط لوله CI/CD", en: "A CI/CD pipeline" },
    caption: {
      fa: "کامیت شما در خط لوله: ساخت، تست، انتشار — با تیک‌های سبز.",
      en: "Your commit flows through build, test and deploy — with green checks.",
    },
    usedIn: {
      fa: "مرحله خط لوله در مسیر دواپس و انتشار در موبایل",
      en: "The pipeline stage in DevOps and the release stage in mobile",
    },
  },
  encryption: {
    id: "encryption",
    title: { fa: "رمزنگاری متن", en: "Encrypting a message" },
    caption: {
      fa: "پیامِ خوانا با کلید به متن نامفهوم تبدیل و بعد برگردانده می‌شود.",
      en: "A readable message turns into gibberish with a key, then back.",
    },
    usedIn: {
      fa: "مرحله رمزنگاری در مسیر امنیت سایبری",
      en: "The cryptography stage in the cybersecurity path",
    },
  },
  "mobile-lifecycle": {
    id: "mobile-lifecycle",
    title: { fa: "چرخه حیات اپلیکیشن موبایل", en: "The mobile app lifecycle" },
    caption: {
      fa: "اپ چطور بین حالت‌های ساخته‌شدن، دیده‌شدن، متوقف‌شدن و نابودی می‌چرخد.",
      en: "How an app cycles through created, visible, paused and destroyed.",
    },
    usedIn: {
      fa: "مرحله چرخه حیات در مسیر موبایل",
      en: "The lifecycle stage in the mobile path",
    },
  },
  "binary-search": {
    id: "binary-search",
    title: { fa: "جست‌وجوی دودویی", en: "Binary search" },
    caption: {
      fa: "با هر حدس نصف آرایه کنار می‌رود — دو گام برای هشت عنصر.",
      en: "Every probe discards half the array — two probes for eight items.",
    },
    usedIn: {
      fa: "سوال‌های جست‌وجو در بخش الگوریتم",
      en: "Searching questions in the algorithms field",
    },
  },
  sorting: {
    id: "sorting",
    title: { fa: "مرتب‌سازی حبابی", en: "Bubble sort" },
    caption: {
      fa: "عناصر مجاور مقایسه و جابه‌جا می‌شوند تا بزرگ‌ترین به انتها برسد.",
      en: "Adjacent items compare and swap until the largest reaches the end.",
    },
    usedIn: {
      fa: "سوال‌های مرتب‌سازی در بخش الگوریتم",
      en: "Sorting questions in the algorithms field",
    },
  },
  "stack-queue": {
    id: "stack-queue",
    title: { fa: "پشته در برابر صف", en: "Stack vs queue" },
    caption: {
      fa: "همان جعبه‌ها، قانون خروج متفاوت: آخرین ورود در برابر اولین ورود.",
      en: "Same boxes, opposite exit rule: last-in versus first-in.",
    },
    usedIn: {
      fa: "سوال‌های پشته و صف در بخش الگوریتم",
      en: "Stack and queue questions in the algorithms field",
    },
  },
  "hash-table": {
    id: "hash-table",
    title: { fa: "جدول هش و برخورد", en: "Hash table & collisions" },
    caption: {
      fa: "کلید از تابع هش می‌گذرد و به سطل می‌رسد؛ برخورد زنجیره می‌شود.",
      en: "A key runs through the hash into a bucket; collisions chain up.",
    },
    usedIn: {
      fa: "سوال‌های هش در بخش الگوریتم",
      en: "Hashing questions in the algorithms field",
    },
  },
  "linked-list": {
    id: "linked-list",
    title: { fa: "درج در لیست پیوندی", en: "Linked-list insertion" },
    caption: {
      fa: "درج یعنی دو اشاره‌گر عوض شود — بدون جابه‌جایی عناصر.",
      en: "Insertion means rewiring two pointers — no element shifting.",
    },
    usedIn: {
      fa: "سوال‌های لیست پیوندی در بخش الگوریتم",
      en: "Linked-list questions in the algorithms field",
    },
  },
  "graph-traversal": {
    id: "graph-traversal",
    title: { fa: "پیمایش BFS در گراف", en: "BFS graph traversal" },
    caption: {
      fa: "موج بازدید حلقه‌به‌حلقه از مبدأ پخش می‌شود — پس کوتاه‌ترین مسیر پیدا است.",
      en: "The visit wave expands ring by ring from the source — hence shortest paths.",
    },
    usedIn: {
      fa: "سوال‌های گراف و BFS/DFS",
      en: "Graph and BFS/DFS questions",
    },
  },
  "memoization-dp": {
    id: "memoization-dp",
    title: { fa: "حافظه‌سازی و برنامه‌نویسی پویا", en: "Memoization & DP" },
    caption: {
      fa: "زیرمسئله‌های تکراری یک‌بار حل و در جدول ثبت می‌شوند — نمایی به خطی.",
      en: "Repeated subproblems solve once into a table — exponential to linear.",
    },
    usedIn: {
      fa: "سوال‌های DP و بازگشت در بخش الگوریتم",
      en: "DP and recursion questions in the algorithms field",
    },
  },
  trie: {
    id: "trie",
    title: { fa: "درخت پیشوندی (Trie)", en: "The trie (prefix tree)" },
    caption: {
      fa: "حروف مسیر می‌سازند؛ پیشوند مشترک یعنی مسیر مشترک.",
      en: "Letters build paths; a shared prefix means a shared path.",
    },
    usedIn: {
      fa: "سوال‌های Trie و رشته در بخش الگوریتم",
      en: "Trie and string questions in the algorithms field",
    },
  },
  "star-method": {
    id: "star-method",
    title: { fa: "روش STAR در مصاحبه", en: "The STAR interview method" },
    caption: {
      fa: "زمینه، وظیفه، اقدام، نتیجه — ترتیب طلایی جواب‌های رفتاری.",
      en: "Situation, Task, Action, Result — the golden order of behavioral answers.",
    },
    usedIn: {
      fa: "همه‌ی سوال‌های رفتاری",
      en: "Every behavioral question",
    },
  },
  "jsx-flow": {
    id: "jsx-flow",
    title: { fa: "از JSX تا صفحه", en: "From JSX to the screen" },
    caption: {
      fa: "JSX کامپایل می‌شود به درخت المان و ری‌اکت آن را به UI بدل می‌کند.",
      en: "JSX compiles to an element tree; React turns that tree into UI.",
    },
    usedIn: {
      fa: "سوال‌های پایه‌ی ری‌اکت",
      en: "React fundamentals questions",
    },
  },
  "hooks-flow": {
    id: "hooks-flow",
    title: { fa: "چرخه‌ی هوک‌ها", en: "The hooks cycle" },
    caption: {
      fa: "setState رندر می‌دهد، effect اجرا می‌شود، cleanup برمی‌گردد.",
      en: "setState renders, the effect runs, cleanup comes back around.",
    },
    usedIn: {
      fa: "سوال‌های useState/useEffect و هوک‌ها",
      en: "useState/useEffect and hooks questions",
    },
  },
  "redux-flow": {
    id: "redux-flow",
    title: { fa: "مدیریت state یک‌جهته", en: "Unidirectional state flow" },
    caption: {
      fa: "dispatch به reducer، reducer به store، store به view — همیشه یک جهت.",
      en: "dispatch to the reducer, reducer to store, store to view — one direction, always.",
    },
    usedIn: {
      fa: "سوال‌های Redux و مدیریت state",
      en: "Redux and state-management questions",
    },
  },
  "promise-async": {
    id: "promise-async",
    title: { fa: "Promise و async/await", en: "Promises & async/await" },
    caption: {
      fa: "pending، بعد فقط یک‌بار resolve یا reject — await منتظرش می‌ماند.",
      en: "Pending, then settled exactly once — resolve or reject; await waits for it.",
    },
    usedIn: {
      fa: "سوال‌های ناهمگامی جاوااسکریپت",
      en: "JavaScript async questions",
    },
  },
  "scope-closure": {
    id: "scope-closure",
    title: { fa: "بستار و دامنه", en: "Closures & scope" },
    caption: {
      fa: "تابع داخلی حافظه‌ی متغیرهای محل تولدش را زنده نگه می‌دارد.",
      en: "The inner function keeps its birthplace's variables alive.",
    },
    usedIn: {
      fa: "سوال‌های closure، hoisting و this",
      en: "Closure, hoisting and this questions",
    },
  },
  "css-cascade": {
    id: "css-cascade",
    title: { fa: "اولویت در CSS", en: "CSS specificity" },
    caption: {
      fa: "id صد امتیاز، class ده، تگ یک — بالاترین امتیاز برنده است.",
      en: "id scores 100, class 10, tag 1 — the highest score wins.",
    },
    usedIn: {
      fa: "سوال‌های CSS و انتخابگرها",
      en: "CSS and selector questions",
    },
  },
  "cache-flow": {
    id: "cache-flow",
    title: { fa: "کش: HIT و MISS", en: "Cache: hit vs miss" },
    caption: {
      fa: "اول کش را بپرس؛ hit فوری است، miss به مبدأ می‌رود و کش را گرم می‌کند.",
      en: "Ask the cache first: a hit is instant, a miss reaches the origin and warms the cache.",
    },
    usedIn: {
      fa: "سوال‌های کش، CDN و کارایی",
      en: "Caching, CDN and performance questions",
    },
  },
  "load-balance": {
    id: "load-balance",
    title: { fa: "توزیع بار و سلامت سرور", en: "Load balancing & health checks" },
    caption: {
      fa: "ترافیک بین سرورها پخش می‌شود؛ سرور مرد از چرخه خارج می‌شود.",
      en: "Traffic spreads across servers; a dead one drops out of rotation.",
    },
    usedIn: {
      fa: "سوال‌های مقیاس‌پذیری و دسترس‌پذیری",
      en: "Scalability and availability questions",
    },
  },
  "k8s-cluster": {
    id: "k8s-cluster",
    title: { fa: "خوشه‌ی Kubernetes", en: "A Kubernetes cluster" },
    caption: {
      fa: "کنترل‌پلین وضعیت مطلوب را اعمال می‌کند؛ pod مرد جای دیگر بالا می‌آید.",
      en: "The control plane enforces desired state; a dead pod is rescheduled elsewhere.",
    },
    usedIn: {
      fa: "سوال‌های Kubernetes و کانتینر",
      en: "Kubernetes and container questions",
    },
  },
  "llm-flow": {
    id: "llm-flow",
    title: { fa: "تولید متن با LLM", en: "How an LLM generates text" },
    caption: {
      fa: "پرامپت توکن می‌شود، از لایه‌های attention می‌گذرد و توکن بعدی انتخاب می‌شود.",
      en: "The prompt becomes tokens, flows through attention layers, and the next token is picked.",
    },
    usedIn: {
      fa: "سوال‌های LLM و هوش مصنوعی",
      en: "LLM and AI questions",
    },
  },
  "widget-tree": {
    id: "widget-tree",
    title: { fa: "بازسازی درخت ویجت", en: "The widget tree rebuild" },
    caption: {
      fa: "setState فقط زیردرخت صاحب state را دوباره می‌سازد.",
      en: "setState rebuilds only the subtree that owns the state.",
    },
    usedIn: {
      fa: "سوال‌های Flutter و React Native",
      en: "Flutter and React Native questions",
    },
  },
  "heap-sift": {
    id: "heap-sift",
    title: { fa: "درج در هیپ", en: "Heap insert (sift-up)" },
    caption: {
      fa: "عنصر جدید تا برقراری قانون هیپ با والدین جابه‌جا می‌شود.",
      en: "A new element bubbles up past its parents until the heap property holds.",
    },
    usedIn: {
      fa: "سوال‌های heap و صف اولویت‌دار",
      en: "Heap and priority-queue questions",
    },
  },
  "sql-query": {
    id: "sql-query",
    title: { fa: "اجرای کوئری SQL", en: "A SELECT query executing" },
    caption: {
      fa: "سطرها از فیلتر WHERE می‌گذرند و فقط منطبق‌ها به نتیجه می‌رسند.",
      en: "Rows stream through the WHERE filter; only matches reach the result.",
    },
    usedIn: {
      fa: "سوال‌های SQL و دیتابیس",
      en: "SQL and database questions",
    },
  },
  "array-ops": {
    id: "array-ops",
    title: { fa: "دو اشاره‌گر روی آرایه", en: "Two pointers over an array" },
    caption: {
      fa: "دو اندکس از دو سر به هم می‌رسند — معکوس، چرخش و تفکیک با O(1) حافظه.",
      en: "Two indices walk toward each other — reverse, rotate and partition in O(1) memory.",
    },
    usedIn: {
      fa: "سوال‌های آرایه و رشته در بخش الگوریتم",
      en: "Array and string questions in the algorithms field",
    },
  },
  none: {
    id: "none",
    title: { fa: "بدون انیمیشن", en: "No animation" },
    caption: { fa: "—", en: "—" },
    usedIn: { fa: "—", en: "—" },
  },
};
