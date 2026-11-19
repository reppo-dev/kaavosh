import type { InterviewField } from "../schema";

/**
 * DATA FILE — Interview questions. Consumed by: /interview hub page,
 * /interview/[field] Q&A page, landing page stats.
 */
export const backendInterview: InterviewField = {
  slug: "backend",
  title: { fa: "مصاحبه بک‌اند", en: "Backend interviews" },
  description: {
    fa: "سوال‌های واقعی مصاحبه‌های بک‌اند در ۲۰۲۶: طراحی REST، احراز هویت، ایندکس‌ها و کش — هرکدام با پاسخ کوتاه و شکستن قدم‌به‌قدم.",
    en: "Real 2026 backend interview questions: REST design, authentication, indexes and caching — each with a short answer and a step-by-step breakdown.",
  },
  icon: "server",
  accent: "indigo",
  questions: [
    {
      id: "rest-design-and-http-semantics",
      question: {
        fa: "یک API با REST خوب یعنی چه؟ متد و کد وضعیت را چطور انتخاب می‌کنید؟",
        en: "What makes a good REST API? How do you pick methods and status codes?",
      },
      difficulty: "junior",
      tags: ["rest", "http", "api-design"],
      quickAnswer: {
        fa: "REST یعنی URLها مثل اسم منابع باشند و متدهای HTTP مثل فعل‌ها: GET می‌خواند، POST می‌سازد، PUT/PATCH ویرایش می‌کند، DELETE حذف می‌کند. کد وضعیت هم حقیقت را می‌گوید: ۲۰۰ موفق، ۲۰۱ ساخته شد، ۴۰۴ پیدا نشد، ۴۰۱ احراز هویت نشده، ۴۰۳ ممنوع، ۴۲۲ ورودی خراب.",
        en: "REST means URLs name resources and HTTP methods act as verbs: GET reads, POST creates, PUT/PATCH edits, DELETE removes. Status codes tell the truth: 200 ok, 201 created, 404 missing, 401 unauthenticated, 403 forbidden, 422 invalid input.",
      },
      steps: [
        {
          title: { fa: "منبع در برابر فعل", en: "Resource vs verb" },
          detail: {
            fa: "URL اسم است، نه دستور: /orders/42 نه /getOrder?id=42. مثل برچسب کشوهاست، نه فرمان به کشوها.",
            en: "A URL is a name, not a command: /orders/42, not /getOrder?id=42. Like drawer labels, not commands shouted at drawers.",
          },
        },
        {
          title: { fa: "متدها معنای ثابت دارند", en: "Methods have fixed meanings" },
          detail: {
            fa: "GET باید «امن» باشد — هیچ‌چیز عوض نکند. PUT جایگزین کامل می‌کند و idempotent است (دوبار زدن همان نتیجه را می‌دهد)؛ PATCH تغییر جزئی است. احترام به این معناها کلاینت‌ها را پیش‌بینی‌پذیر می‌کند.",
            en: "GET must be 'safe' — it changes nothing. PUT fully replaces and is idempotent (calling twice gives the same result); PATCH edits partially. Respecting these meanings keeps clients predictable.",
          },
        },
        {
          title: { fa: "کد وضعیت = حقیقت پاسخ", en: "Status codes = the honest answer" },
          detail: {
            fa: "همه‌چیز را با 200 و پیام خطا برنگردانید. 4xx یعنی مقصر کلاینت است، 5xx یعنی مقصر سرور است. تیم فرانت از همین عدد یاد می‌گیرد خطا را چطور نمایش دهد.",
            en: "Don't return 200 with an error message inside. 4xx means the client erred; 5xx means the server did. The frontend team uses this number to decide how to show the error.",
          },
        },
        {
          title: { fa: "اعتبارسنجی قبل از همه‌چیز", en: "Validate first" },
          detail: {
            fa: "ورودی را با schema (مثل Zod) چک کنید و در خرابی 400/422 با پیام دقیق بدهید که کدام فیلد خراب است — نه یک «Bad Request» گنگ.",
            en: "Validate input against a schema (e.g. Zod) and fail with 400/422 plus a precise message naming the bad field — not a vague 'Bad Request'.",
          },
        },
        {
          title: { fa: "نسخه و پایداری", en: "Versioning and stability" },
          detail: {
            fa: "قراردادِ API قرارداد عمومی است. وقتی تغییر ناسازگار لازم شد، نسخه جدید (/v2)؛ تا کلاینت‌های قدیمی نشکنند.",
            en: "An API is a public contract. When a breaking change is unavoidable, ship a new version (/v2) instead of breaking existing clients.",
          },
        },
      ],
      codeExample: {
        language: "http",
        code: `POST /api/v1/orders
Content-Type: application/json

{ "itemId": "sku-77", "quantity": 2 }

→ 201 Created
Location: /api/v1/orders/9182

GET  /api/v1/orders/9182   → 200 (or 404)
DELETE /api/v1/orders/9182 → 204 No Content`,
        caption: {
          fa: "اسم منبع + فعل HTTP + کد وضعیت صادق",
          en: "Resource name + HTTP verb + honest status code",
        },
      },
      followUps: [
        {
          fa: "PUT و PATCH دقیقاً چه فرقی در رفتار دارند؟",
          en: "How do PUT and PATCH differ in behavior exactly?",
        },
        {
          fa: "pagination را چطور طراحی می‌کنید؟",
          en: "How would you design pagination?",
        },
      ],
      visual: "http-request",
    },
    {
      id: "authentication-vs-authorization-jwt",
      question: {
        fa: "احراز هویت و مجوزدهی چه فرقی دارند؟ توکن JWT چطور کار می‌کند؟",
        en: "Authentication vs authorization — and how does a JWT work?",
      },
      difficulty: "mid",
      tags: ["auth", "jwt", "security"],
      quickAnswer: {
        fa: "احراز هویت می‌پرسد «تو کی هستی؟» و مجوز می‌پرسد «اجازه داری این را بکنی؟». JWT یک قرارداد امضاشده است: سرور با کلید امضایش payload را می‌بندد؛ کلاینت آن را در هر درخواست می‌فرستد و سرور فقط امضا را چک می‌کند — بدون نیاز به حافظه‌ی نشست.",
        en: "Authentication asks 'who are you?'; authorization asks 'are you allowed to do this?'. A JWT is a signed contract: the server seals a payload with its signing key, the client sends it on every request, and the server verifies just the signature — no session storage needed.",
      },
      steps: [
        {
          title: { fa: "دو سوال متفاوت", en: "Two different questions" },
          detail: {
            fa: "لاگین = احراز هویت. چک‌کردن اینکه کاربر عادی نتواند ادمین را حذف کند = مجوزدهی. اشتباه گرفتن این دو، باگ امنیتی رایج است.",
            en: "Logging in = authentication. Checking that a normal user can't delete an admin = authorization. Mixing these up is a classic security bug.",
          },
        },
        {
          title: { fa: "JWT چطور بسته می‌شود", en: "How a JWT is sealed" },
          detail: {
            fa: "JWT سه بخش دارد: header، payload (مثل userId و نقش) و امضا. سرور payload را با کلید مخفی هش می‌کند؛ اگر کسی payload را دستکاری کند، امضا دیگر جور درنمی‌آید — مثل شکستن پلمپ بسته.",
            en: "A JWT has three parts: header, payload (userId, role…) and a signature. The server hashes the payload with a secret; if anyone edits the payload, the signature no longer matches — like breaking a parcel's seal.",
          },
        },
        {
          title: { fa: "چرا امضا مهم است", en: "Why the signature matters" },
          detail: {
            fa: "payload فقط encode شده، رمزنگاری نشده — همه می‌توانند بخوانندش ولی هیچ‌کس نمی‌تواند تغییرش دهد بدون کلید. پس هرگز اطلاعات محرمانه را داخل JWT نگذارید.",
            en: "The payload is encoded, not encrypted — anyone can read it, nobody can change it without the key. So never put secrets inside a JWT.",
          },
        },
        {
          title: { fa: "مصرف توکن", en: "Using the token" },
          detail: {
            fa: "کلاینت توکن را در هدر Authorization: Bearer می‌فرستد. سرور فقط امضا و انقضا را چک می‌کند — بدون کوکی و بدون جدول نشست؛ برای چند سرویس که با هم حرف می‌زنند عالی است.",
            en: "The client sends it in Authorization: Bearer. The server checks only signature and expiry — no cookie, no session table; great when multiple services must verify identity.",
          },
        },
        {
          title: { fa: "قیمتش: بی‌اعتبارسازی سخت", en: "The price: hard revocation" },
          detail: {
            fa: "چون سرور حالتی نگه نمی‌دارد، توکنِ سرقت‌شده تا انقضا معتبر می‌ماند. راه‌حل: عمر کوتاه (۱۵ دقیقه) + refresh token، یا denylist در Redis برای اخراج فوری.",
            en: "Since the server keeps no state, a stolen token stays valid until expiry. Mitigations: short lifetime (~15 min) + refresh tokens, or a Redis denylist for instant revocation.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `import jwt from "jsonwebtoken";

// issue (login)
const token = jwt.sign(
  { sub: user.id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: "15m" }
);

// verify (middleware)
function requireAuth(req, res, next) {
  try {
    const claims = jwt.verify(
      req.headers.authorization.slice(7), // strip "Bearer "
      process.env.JWT_SECRET
    );
    req.user = claims;
    next();
  } catch {
    res.status(401).json({ error: "invalid or expired token" });
  }
}`,
        caption: {
          fa: "صدور با امضا، بررسی فقط با کلید — بدون جدول نشست",
          en: "Issue with a signature; verify with just the key — no session table",
        },
      },
      followUps: [
        {
          fa: "توکن را کجا نگه دارید: localStorage یا cookie؟",
          en: "localStorage vs httpOnly cookie for tokens — which and why?",
        },
        { fa: "refresh token rotation چیست؟", en: "What is refresh token rotation?" },
      ],
      visual: "auth-jwt",
    },
    {
      id: "sql-indexes-and-query-performance",
      question: {
        fa: "ایندکس در پایگاه داده چیست و چرا گاهی بی‌اثر می‌شود؟",
        en: "What is a database index and why does it sometimes get ignored?",
      },
      difficulty: "mid",
      tags: ["sql", "postgres", "performance"],
      quickAnswer: {
        fa: "ایندکس ساختار جست‌وجوی مرتب (مثل B-tree) کنار جدول است که به‌جای ورق‌زدن همه‌ی سطرها، مستقیم می‌رود سراغ سطر درست — مثل فهرست آخر کتاب. بی‌اثر می‌شود وقتی روی ستون تابع می‌زنید، شرط با wildcard شروع می‌شود، یا ایندکس ستون‌های کوئری را کامل پوشش نمی‌دهد.",
        en: "An index is an ordered lookup structure (a B-tree) beside the table: instead of scanning every row, it jumps straight to the right ones — like a book's index page. It gets ignored when you wrap the column in a function, when the LIKE pattern starts with a wildcard, or when the index doesn't cover the queried columns.",
      },
      steps: [
        {
          title: { fa: "بدون ایندکس = ورق‌زدن همه کتاب", en: "No index = scanning the whole book" },
          detail: {
            fa: "بدون ایندکس، پایگاه داده Sequential Scan می‌کند: از سطر اول تا آخر می‌خواند و چک می‌کند. با میلیون‌ها سطر، این مثل پیدا کردن یک کلمه با خواندن کل کتاب است.",
            en: "Without an index the database does a sequential scan: reads every row and checks it. With millions of rows that's like finding a word by reading the whole book.",
          },
        },
        {
          title: { fa: "ایندکس = فهرست مرتب", en: "An index = a sorted lookup" },
          detail: {
            fa: "ایندکس کپی کوچکی از ستون است که مرتب نگه داشته می‌شود، با اشاره‌گر به سطر اصلی. جست‌وجو در فهرست مرتب با چند قدم (O(log n)) تمام می‌شود.",
            en: "The index is a small, always-sorted copy of the column with pointers to the real rows. Searching it takes a few steps (O(log n)).",
          },
        },
        {
          title: { fa: "قیمتش را بدانید", en: "Know the price" },
          detail: {
            fa: "هر ایندکس فضای دیسک می‌گیرد و روی هر INSERT/UPDATE باید به‌روز شود. ایندکس‌زدن هر ستون مثل فهرست‌کردن هر کلمه‌ی کتاب است — خودش کند می‌شود.",
            en: "Every index costs disk space and must be updated on each INSERT/UPDATE. Indexing every column is like indexing every word of a book — the writing gets slow.",
          },
        },
        {
          title: { fa: "وقتی بی‌اثر می‌شود", en: "When it gets ignored" },
          detail: {
            fa: "WHERE LOWER(email) = … تابع روی ستون، ایندکس ساده را دور می‌زند (راه‌حل: ایندکس تابعی یا نرمال‌سازی داده). LIKE '%ali' با wildcard اول هم نمی‌تواند از ترتیب استفاده کند. AND روی چند ستون بدون ایندکس ترکیبی هم همین‌طور.",
            en: "WHERE LOWER(email) = … applies a function, bypassing a plain index (fix: expression index or normalized data). LIKE '%ali' can't use the order either. Multi-column ANDs need a composite index.",
          },
        },
        {
          title: { fa: "با EXPLAIN ببینید", en: "See it with EXPLAIN" },
          detail: {
            fa: "قبل از جنگیدن با پلن، EXPLAIN ANALYZE بزنید: نشان می‌دهد واقعاً scan شده یا از ایندکس رفته، و هزینه‌ی واقعی چند میلی‌ثانیه است. بدون این، حدس‌ها معمولاً غلط‌اند.",
            en: "Before fighting the planner, run EXPLAIN ANALYZE: it shows whether the query scanned or used the index, and the real milliseconds. Guessing is usually wrong.",
          },
        },
      ],
      codeExample: {
        language: "sql",
        code: `-- slow: sequential scan on a big table
SELECT * FROM orders WHERE customer_id = 42;

-- create the index
CREATE INDEX idx_orders_customer ON orders (customer_id);

-- verify the plan
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 42;
-- → Index Scan using idx_orders_customer  (ms dropped from hundreds to ~1)`,
        caption: {
          fa: "ایندکس + EXPLAIN ANALYZE برای دیدن اثر واقعی",
          en: "Add the index, then EXPLAIN ANALYZE to see the real effect",
        },
      },
      followUps: [
        { fa: "ایندکس ترکیبی چه‌زمان بهتر از چند ایندکس تک‌ستونه است؟", en: "When is a composite index better than several single-column ones?" },
        { fa: "فرق clustered و non-clustered ایندکس؟", en: "Clustered vs non-clustered indexes?" },
      ],
      visual: "sql-join",
    },
    {
      id: "caching-strategies-and-invalidation",
      question: {
        fa: "کش را چطور طراحی می‌کنید و بزرگ‌ترین خطرش چیست؟",
        en: "How do you design caching, and what's its biggest danger?",
      },
      difficulty: "mid",
      tags: ["redis", "caching", "architecture"],
      quickAnswer: {
        fa: "کش یعنی جواب‌های گران را نزدیک نگه دارید تا دوباره حساب نشوند. استراتژی رایج: read-through با Redis و TTL. بزرگ‌ترین خطر داده‌ی کهنه است؛ پس قوانین بی‌اعتبارسازی را از روز اول تعریف کنید: با تغییر داده، کلید مربوطه پاک شود.",
        en: "Caching keeps expensive answers nearby so they aren't recomputed. The common setup: read-through with Redis plus a TTL. Its biggest danger is stale data, so define invalidation rules from day one: when the data changes, delete the matching key.",
      },
      steps: [
        {
          title: { fa: "چرا کش معجزه می‌کند", en: "Why caching works so well" },
          detail: {
            fa: "پرس‌وجوی دیتابیس ده‌ها میلی‌ثانیه؛ خواندن از Redis کمتر از یک میلی‌ثانیه. اگر ۸۰٪ درخواست‌ها روی ۲۰٪ داده‌های پرمصرف می‌رود، کش همان ۲۰٪ را می‌گیرد و بقیه سیستم را آزاد می‌کند.",
            en: "A DB query costs tens of milliseconds; a Redis read under one. If 80% of traffic hits 20% of hot data, caching that 20% frees the entire system.",
          },
        },
        {
          title: { fa: "الگوی read-through", en: "The read-through pattern" },
          detail: {
            fa: "اول در کش ببینید؛ اگر بود برگردانید (hit)، اگر نبود از دیتابیس بخوانید، نتیجه را در کش با TTL بگذارید و برگردانید (miss). TTL حداقل تضمین می‌کند داده‌ها بالاخره تازه شوند.",
            en: "Check the cache; on hit, return. On miss, read the DB, store the result with a TTL, return. The TTL at least guarantees data eventually refreshes.",
          },
        },
        {
          title: { fa: "خطر: داده کهنه", en: "The danger: stale data" },
          detail: {
            fa: "کش یعنی «احتمالاً عقب‌مانده». اگر قیمت را در دیتابیس عوض کنید و کش چند ساعت قدیمی نشان دهد، مشتری پول غلط می‌دهد. TTL کافی نیست — باید رویداد محور هم بی‌اعتبار کنید.",
            en: "A cache is 'probably slightly behind'. If you change a price but the cache shows the old one for hours, customers pay wrong. TTL alone isn't enough — invalidate on events too.",
          },
        },
        {
          title: { fa: "بی‌اعتبارسازی هدفمند", en: "Targeted invalidation" },
          detail: {
            fa: "قانون ساده: هر کلید کش بداند از کدام داده آمده. در همان تراکنشِ تغییر داده (یا رویدادش)، کلیدهای وابسته را DEL کنید. اسم‌گذاری کلید مثل products:{id} و products:list کمک می‌کند pattern-clear کنید.",
            en: "Simple rule: every cache key knows its source data. In the same write transaction (or its event), DEL the dependent keys. Key naming like products:{id} and products:list enables pattern clearing.",
          },
        },
        {
          title: { fa: "دو تله‌ی معروف", en: "Two famous traps" },
          detail: {
            fa: "Cache stampede: وقتی کلید داغ منقضی شود، هزار درخواست هم‌زمان به دیتابیس می‌ریزند — با lock یا منقضی‌سازی پراکنده حلش کنید. Cache penetration: درخواست‌های کلید ناموجود که هر بار به دیتابیس می‌روند — جواب خالی را هم کش کنید.",
            en: "Cache stampede: a hot key expires and thousands of requests hit the DB at once — fix with locks or jittered expiries. Cache penetration: repeated lookups for missing keys — cache the empty answer too.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `async function getProduct(id) {
  const key = \`product:\${id}\`;
  const hit = await redis.get(key);
  if (hit) return JSON.parse(hit);          // fast path

  const product = await db.products.find(id);
  if (product) {
    // jittered TTL avoids synchronized expiries
    const ttl = 3600 + Math.floor(Math.random() * 300);
    await redis.set(key, JSON.stringify(product), { EX: ttl });
  }
  return product;
}

async function updateProduct(id, patch) {
  await db.products.update(id, patch);
  await redis.del(\`product:\${id}\`);        // event-driven invalidation
  await redis.del("products:list");          // and the list view
}`,
        caption: {
          fa: "read-through با TTL پراکنده + پاک‌سازی کلیدها هنگام نوشتن",
          en: "Read-through with jittered TTL + key deletion on write",
        },
      },
      followUps: [
        { fa: "cache stampede را دقیقاً چطور می‌بندی؟", en: "How exactly do you prevent a cache stampede?" },
        { fa: "کش در سطح HTTP (هدرها) چه نقشی دارد؟", en: "What role do HTTP cache headers play?" },
      ],
      visual: "none",
    },
    {
      id: "message-queues-and-idempotency",
      question: {
        fa: "چرا صف پیام لازم می‌شود و idempotency چیست؟",
        en: "Why do you need a message queue, and what is idempotency?",
      },
      difficulty: "senior",
      tags: ["queues", "architecture", "resilience"],
      quickAnswer: {
        fa: "صف کارهای سنگین یا مستقل را از مسیر اصلی جدا می‌کند تا درخواست کاربر سریع جواب بگیرد و سیستم هم در پیک نمُرد: به‌جای اینکه کاربر منتظر ایمیل بماند، پیام در صف می‌نشیند و worker پس‌زمینه انجامش می‌دهد. idempotency یعنی اجرای دوباره‌ی یک عملیات، همان نتیجه‌ی یک بار را بدهد — چون صف تضمین می‌کند پیام‌ها حداقل یک‌بار می‌رسند، گاهی هم دوبار.",
        en: "A queue splits slow or independent work off the main path so the user's request returns fast and the system survives traffic spikes: instead of making a user wait for an email, the message waits in line and a background worker does it. Idempotency means running the same operation twice yields the same result as once — because queues promise at-least-once delivery, sometimes delivering twice.",
      },
      steps: [
        {
          title: { fa: "مشکل: کارِ سنگین در مسیر پاسخ", en: "The problem: heavy work on the response path" },
          detail: {
            fa: "ثبت‌نام که شامل ارسال ایمیل، ساخت گزارش و نوتیف است، کاربر را ۳ ثانیه نگه می‌دارد و اگر ایمیل‌سرویس کند شود، کل درخواست فِیل می‌شود.",
            en: "A signup that sends an email, builds a report and fires notifications holds the user for seconds — and a slow email provider fails the whole request.",
          },
        },
        {
          title: { fa: "حل: پیک‌سوار و نامه", en: "The fix: mail, not messenger" },
          detail: {
            fa: "به‌جای اینکه خودتان نامه را ببرید، به پیک‌سوار (صف) می‌دهید: درخواست فوراً ۲۰۰ می‌دهد، پیام در صف امن می‌ماند و workerها سر فرصت انجام می‌دهند و می‌توانند retry کنند.",
            en: "You hand the letter to the courier (the queue) instead of delivering it yourself: the request returns immediately, the message waits safely, and workers process it later with retries.",
          },
        },
        {
          title: { fa: "قانون تحویل: حداقل یک‌بار", en: "Delivery reality: at-least-once" },
          detail: {
            fa: "صف‌ها تضمین نمی‌کنند پیام «فقط یک‌بار» برسد؛ اگر worker وسط کار بمیرد، پیام دوباره می‌آید. پس مصرف‌کننده باید با تکرار مدارا کند.",
            en: "Queues don't promise exactly-once: if a worker dies mid-job, the message returns. So consumers must tolerate repetition by design.",
          },
        },
        {
          title: { fa: "idempotency = قدرت خرید", en: "Idempotency = buying power" },
          detail: {
            fa: "یک عملیات idempotent دوباره اجرا شود اثر تکراری ندارد: پرداخت با کلید idempotency چک می‌شود که دوباره کسر نشود؛ ساخت رکورد با شناسه ثابت، به‌جای دو رکورد یکی را می‌سازد.",
            en: "An idempotent operation has no extra effect on replay: payments use an idempotency key so money isn't charged twice; record creation with a fixed ID creates one row, not two.",
          },
        },
        {
          title: { fa: "پیام‌های سمی و ترتیب", en: "Poison messages and ordering" },
          detail: {
            fa: "پیامی که همیشه شکست می‌خورد باید بعد از N تلاش به dead-letter برود، نه حلقه‌ی بی‌نهایت. و اگر ترتیب مهم است (مثل تعویض وضعیت سفارش)، کلید پارتیشن را بر اساس شناسه‌ی موجودیت بگذارید.",
            en: "A message that always fails must go to a dead-letter queue after N attempts, not loop forever. If ordering matters (order status changes), partition by the entity's ID.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `// consumer: must be idempotent because delivery is at-least-once
async function handleOrderPaid(msg) {
  const already = await db.payments.find(msg.paymentId);
  if (already) return;               // second delivery: no-op, done

  await db.payments.insert({
    id: msg.paymentId,               // fixed ID → insert conflict on replay
    orderId: msg.orderId,
    amount: msg.amount,
  });
  await db.orders.updateStatus(msg.orderId, "paid");
  // after N failed attempts, the queue moves msg to dead-letter
}`,
        caption: {
          fa: "تحویل دوباره بی‌ضرر است چون با شناسه ثابت چک می‌شود",
          en: "Replay is harmless because the fixed ID makes it a no-op",
        },
      },
      followUps: [
        { fa: "فرق RabbitMQ و Kafka در مدل ترتیب پیام‌ها؟", en: "RabbitMQ vs Kafka on message ordering?" },
        { fa: "چطور تضمین می‌کنید عملیات دیتابیس و انتشار پیام با هم انجام شوند؟", en: "How do you keep a DB write and its message publish consistent?" },
      ],
      visual: "event-loop",
    },
    {
      id: "the-n-plus-one-problem",
      question: {
        fa: "مشکل N+1 چیست و چطور پیدایش می‌کنید و حلش می‌کنید؟",
        en: "What is the N+1 problem, and how do you find and fix it?",
      },
      difficulty: "mid",
      tags: ["sql", "orm", "performance"],
      quickAnswer: {
        fa: "کوئری اصلی برای لیست (۱) + برای هر آیتمِ آن لیست یک کوئری جدا (N) = N+1 کوئری برای یک صفحه. در لوکال دیده نمی‌شود، در پروداکشن با ۱۰۰ رکورد یعنی ۱۰۱ سفر به دیتابیس. پیدا کردنش با لاگ کوئری‌ها یا ابزار APM؛ حلش با JOIN یا eager loading در ORM.",
        en: "The main list query (1) plus one query per item in that list (N) = N+1 queries for a single page. Invisible locally; with 100 records in production that's 101 database round trips. Find it with query logging or APM; fix it with a JOIN or the ORM's eager loading.",
      },
      steps: [
        {
          title: { fa: "صحنه‌ی جرم", en: "The crime scene" },
          detail: {
            fa: "شما ۲۰ پست را لیست می‌کنید و برای هر پست نام نویسنده را جدا می‌گیرید. حلقه‌ی مخفی: ۱ کوئری لیست + ۲۰ کوئری نویسنده = ۲۱ کوئری.",
            en: "You list 20 posts and fetch each author separately. Hidden loop: 1 list query + 20 author queries = 21 queries.",
          },
        },
        {
          title: { fa: "چرا دیر دیده می‌شود", en: "Why it hides until production" },
          detail: {
            fa: "با ۳ رکورد در لوکال، ۴ کوئری در ۴ میلی‌ثانیه اثری ندارد. در پروداکشن با ۵۰۰ رکورد و شبکه‌ی واقعی، ۵۰۱ کوئری یعنی ثانیه‌ها — و دیتابیس زیر فشار.",
            en: "With 3 records locally, 4 queries at 4ms look harmless. In production with 500 records over a real network, 501 queries mean seconds — and a stressed database.",
          },
        },
        {
          title: { fa: "چطور پیدایش می‌کنید", en: "How you find it" },
          detail: {
            fa: "لاگ کوئری‌ها را روشن کنید و شمارنده بگذارید؛ در تست‌ها assert کنید تعداد کوئری ثابت است؛ در APM (مثل Datadog) الگوی تکراری همان کوئری پشت‌سرهم را می‌بینید.",
            en: "Enable query logging with a counter; assert in tests that the query count stays constant; in APM tools you see the same query repeating back-to-back.",
          },
        },
        {
          title: { fa: "حل: یک سفر باهم", en: "The fix: one trip together" },
          detail: {
            fa: "JOIN در SQL، یا eager loading در ORM (include/middleware در Prisma، select_related در Django). یک کوئری با JOIN همه‌ی داده‌ها را یک‌جا می‌آورد.",
            en: "JOIN in raw SQL, or the ORM's eager loading (Prisma include, Django select_related). One query brings everything in a single trip.",
          },
        },
        {
          title: { fa: "حلقه‌های پنهان در کد اپ", en: "Hidden loops in app code" },
          detail: {
            fa: "گاهی N+1 در ORM نیست، در کد است: حلقه‌ای که برای هر آیتم fetch می‌زند. راه‌حل: داده‌ها را دسته‌ای بگیرید (WHERE id IN (…)) و در حافظه بچینید.",
            en: "Sometimes N+1 isn't the ORM, it's your loop calling fetch per item. Fix: batch the reads (WHERE id IN (…)) and assemble in memory.",
          },
        },
      ],
      codeExample: {
        language: "typescript",
        code: `// ❌ N+1: 1 + N queries
const posts = await prisma.post.findMany({ take: 20 });
for (const p of posts) {
  p.author = await prisma.user.findUnique({ where: { id: p.authorId } });
}

// ✅ 1 query
const posts = await prisma.post.findMany({
  take: 20,
  include: { author: true },
});`,
        caption: {
          fa: "از ۲۱ کوئری به ۱ کوئری برای همان صفحه",
          en: "From 21 queries to 1 for the same page",
        },
      },
      followUps: [
        { fa: "کِی eager loading خودش بد است؟", en: "When is eager loading itself harmful?" },
        { fa: "dataloader و batching چه کمکی می‌کنند؟", en: "How do DataLoader-style batching help?" },
      ],
      visual: "sql-join",
    },
    {
      id: "horizontal-scaling-and-statelessness",
      question: {
        fa: "برای مقیاس افقی، چرا سرور باید stateless باشد؟",
        en: "Why must a server be stateless for horizontal scaling?",
      },
      difficulty: "senior",
      tags: ["scaling", "architecture", "statelessness"],
      quickAnswer: {
        fa: "مقیاس افقی یعنی اضافه‌کردن چند سرور یکسان پشت لود بالانسر، نه قوی‌ترکردن یک سرور. این فقط وقتی ممکن است که هر درخواست را هر سرور بتواند جواب دهد؛ یعنی هیچ چیزی مهم فقط در حافظه‌ی یک سرور نباشد: نشست‌ها، کش و فایل‌ها همه باید بیرون (Redis، دیتابیس، object storage) باشند.",
        en: "Horizontal scaling means adding many identical servers behind a load balancer, not one stronger server. It only works when any server can answer any request — meaning nothing critical lives only in one server's memory: sessions, cache and files all move out to Redis, a database or object storage.",
      },
      steps: [
        {
          title: { fa: "دو راه رشد", en: "Two ways to grow" },
          detail: {
            fa: "مقیاس عمودی: ماشین قوی‌تر (محدود و گران). مقیاس افقی: ماشین‌های بیشتر (تقریباً بی‌حد، ولی شرط دارد). ابرها عاشق دومی‌اند.",
            en: "Vertical: a stronger machine (limited, pricey). Horizontal: more machines (almost unlimited, but with a condition). Clouds love the second.",
          },
        },
        {
          title: { fa: "شرط: هر سرور قابل‌جایگزینی", en: "The condition: any server can answer" },
          detail: {
            fa: "لود بالانسر درخواست‌ها را پخش می‌کند و اگر یک سرور مُرد، فقط آن را از چرخه بیرون می‌کشد. این فقط وقتی امن است که درخواست به «حافظه‌ی سرور قبلی» وابسته نباشد.",
            en: "A load balancer spreads requests and can yank a dead server out of rotation safely only if requests don't depend on some previous server's memory.",
          },
        },
        {
          title: { fa: "دشمنان statefulness", en: "The enemies of statelessness" },
          detail: {
            fa: "نشست در حافظه (کاربر لاگین است ولی سرور بعدی نمی‌شناسدش)، فایل‌های آپلودی روی دیسک محلی، کش in-memory که هر سرور نسخه‌ی خودش را دارد — همه این‌ها باید بیرون بروند.",
            en: "In-memory sessions (logged in here, unknown there), uploaded files on local disk, per-server in-memory caches — all of these must move out.",
          },
        },
        {
          title: { fa: "به کجاها ببریم", en: "Where to put the state" },
          detail: {
            fa: "نشست/کش → Redis؛ فایل‌ها → S3 یا object storage؛ داده → دیتابیس مشترک. خود سرور فقط کد و پیکربندی؛ پس می‌توانید هر لحظه یک کانتینر جدید از همین ایمیج بالا بیاورید.",
            en: "Sessions/cache → Redis; files → S3/object storage; data → the shared DB. The server holds only code and config, so you can spin a fresh container from the same image anytime.",
          },
        },
        {
          title: { fa: "وقتی sticky session لازم می‌شود", en: "When sticky sessions tempt you" },
          detail: {
            fa: "راه‌حل میان‌بر «همیشه کاربر به همان سرور برود» مقیاس و بازیابی را می‌شکند: یکی از سرورها بمیرد، کاربرانش لاگین‌شان می‌پرد. اگر مجبور شدید، معمولاً نشانه‌ی state پنهان در کد است.",
            en: "The shortcut 'send each user to their own server' breaks scaling and recovery: that server dies, its users lose their sessions. If you need sticky sessions, there's usually hidden state in the code.",
          },
        },
      ],
      codeExample: {
        language: "yaml",
        code: `# docker-compose — N identical, stateless app replicas
services:
  app:
    image: registry/app:latest
    deploy:
      replicas: 3          # scale horizontally
  redis:
    image: redis:7         # shared sessions + cache
  db:
    image: postgres:16     # shared data
  # uploaded files → S3, never the local disk`,
        caption: {
          fa: "سه کپی یکسان؛ state در Redis/دیتابیس/S3 است، نه در اپ",
          en: "Three identical copies; state lives in Redis/DB/S3, not the app",
        },
      },
      followUps: [
        { fa: "Websocket‌ها را چطور با چند سرور مدیریت می‌کنید؟", en: "How do you handle WebSockets across many servers?" },
        { fa: "چرا در مقیاس بالا دیتابیس گلوگاه می‌شود؟", en: "Why does the DB become the bottleneck at scale?" },
      ],
      visual: "docker-containers",
    },
  ],
};
