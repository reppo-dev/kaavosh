import type { GlossaryTerm } from "../../schema";

/** Backend glossary expansion — pagination, versioning, DTO, graceful shutdown, logging, workers & streaming. Consumed by: src/data/glossary/terms.ts. */
export const moreBackendTerms4: GlossaryTerm[] = [
  {
    term: "Pagination (Cursor vs Offset)",
    fa: "صفحه‌بندی (مکان‌نما در برابر Offset)",
    category: "backend",
    definition: {
      fa: "دو روش تقسیم نتایج بزرگ API: روش `OFFSET/LIMIT` ساده است ولی در صفحات عمیق کند می‌شود و با درج دادهٔ جدید ردیف‌ها تکراری یا جا می‌افتند؛ روش Cursor بر اساس شناسه/زمان آخرین آیتم، سریع و پایدار است.",
      en: "Two ways to slice large API results: Offset pagination is simple but slows on deep pages and drifts on inserts; Cursor pagination anchors on the last seen item for stable O(1)-like traversal.",
    },
    analogy: {
      fa: "Offset مثل گفتن «برو صفحهٔ ۲۰۰» در کتابی است که مدام صفحه به اولش اضافه می‌شود؛ Cursor مثل گذاشتن نشانک دقیق روی آخرین سطری است که خواندید.",
      en: "Offset says 'skip 500 rows' even if new rows arrive; Cursor puts a bookmark right on the last item you read.",
    },
    related: ["API", "REST", "Index", "SQL"],
  },
  {
    term: "API Versioning",
    fa: "نسخه‌بندی API",
    category: "backend",
    definition: {
      fa: "مدیریت تغییرات ناسازگار در API (مثلاً از طریق مسیر `/v1/`، `/v2/` یا هدر HTTP) تا کلاینت‌ها و اپ‌های موبایل قدیمی بدون خطا به کار خود ادامه دهند در حالی که کلاینت‌های جدید به نسخهٔ تازه مهاجرت می‌کنند.",
      en: "Managing breaking API changes (via URL paths like /v1/ and /v2/ or headers) so older web and mobile clients keep working while newer clients adopt updated contracts.",
    },
    analogy: {
      fa: "مثل نگه داشتن پریز قدیمی کنار پریز جدید در خانه تا وسایل قبلی هم بدون سوختن کار کنند.",
      en: "Like keeping the old power outlet active beside the new one until every appliance has been upgraded.",
    },
    related: ["API", "REST", "Endpoint", "Zero-Downtime Deployment"],
  },
  {
    term: "DTO",
    fa: "شیء انتقال داده (DTO)",
    category: "backend",
    definition: {
      fa: "Data Transfer Object — آبجکت ساده و تایپ‌شده‌ای که دقیقاً فیلدهای مجاز ورودی یا خروجی API را تعریف می‌کند تا مدل داخلی دیتابیس (مثل ستون هش رمز عبور) مستقیم به بیرون نشت نکند.",
      en: "Data Transfer Object — a dedicated schema defining the exact fields accepted or returned by an API boundary so internal database models (like password hashes) never leak out.",
    },
    analogy: {
      fa: "مثل کارت ویزیت شما: فقط نام و شمارهٔ کاری را نشان می‌دهد، نه کل پروندهٔ پزشکی و بانکی‌تان را.",
      en: "Like a business card sharing only your name and work email — not your entire private filing cabinet.",
    },
    related: ["API", "Serialization", "Validation", "Clean Architecture"],
  },
  {
    term: "Graceful Shutdown",
    fa: "خاموشی آرام سرور",
    category: "backend",
    definition: {
      fa: "واکنش کنترل‌شدهٔ سرور هنگام دریافت سیگنال توقف (`SIGTERM`): پذیرش درخواست‌های جدید را متوقف می‌کند، منتظر اتمام درخواست‌های در حال اجرا می‌ماند و سپس اتصالات دیتابیس و صف‌ها را تمیز می‌بندد.",
      en: "Handling a termination signal (SIGTERM) cleanly: stop accepting new traffic, finish in-flight requests, flush buffers, and close database connections before exiting.",
    },
    analogy: {
      fa: "مثل رستورانی که ساعت ۱۰ تابلوی «بسته است» می‌زند، اما اجازه می‌دهد مشتریانی که داخل نشسته‌اند غذایشان را تمام کنند.",
      en: "Like locking the restaurant door at closing time while letting seated guests finish their meals before turning off the lights.",
    },
    related: ["Zero-Downtime Deployment", "Kubernetes", "Connection Pooling"],
  },
  {
    term: "Structured Logging",
    fa: "لاگ‌گیری ساختاریافته",
    category: "backend",
    definition: {
      fa: "ثبت لاگ‌ها در قالب ماشین‌خوان مانند JSON با فیلدهای ثابت (`timestamp`، `level`، `requestId`، `userId`) به‌جای متن ساده، تا جستجو، فیلتر و ساخت هشدار روی میلیون‌ها لاگ فوری شود.",
      en: "Emitting logs as machine-parseable records (typically JSON with consistent fields like requestId, level, and latency) instead of free-form text so filtering and alerting scale cleanly.",
    },
    analogy: {
      fa: "مثل ثبت گزارش‌ها در جدول اکسل مرتب به‌جای نوشتن خاطرات پراکنده در دفترچهٔ بدون خط.",
      en: "Like recording events in a clean spreadsheet instead of scribbling free-form paragraphs in a notebook.",
    },
    related: ["Observability", "JSON", "Monitoring", "OpenTelemetry"],
  },
  {
    term: "Background Worker",
    fa: "پردازشگر پس‌زمینه (Worker)",
    category: "backend",
    definition: {
      fa: "سرویس جداگانه‌ای که کارهای سنگین یا زمان‌بر (ارسال ایمیل، تبدیل ویدیو، تولید PDF) را از صف پیام برمی‌دارد و خارج از چرخهٔ درخواست-پاسخ HTTP اجرا می‌کند تا API سریع بماند.",
      en: "A separate process that pulls heavy or slow jobs (emails, video encoding, report generation) from a queue outside the HTTP request cycle so API responses stay fast.",
    },
    analogy: {
      fa: "مثل گارسونی که سفارش را می‌گیرد و سریع برمی‌گردد سراغ مشتری بعدی، در حالی که آشپزخانه در پس‌زمینه غذا را آماده می‌کند.",
      en: "Like a cashier handing you an order number immediately while the kitchen cooks your meal in the background.",
    },
    related: ["Message Queue", "Dead Letter Queue", "Cron Job", "Latency"],
  },
  {
    term: "Cron Job",
    fa: "وظیفهٔ زمان‌بندی‌شده (Cron Job)",
    category: "backend",
    definition: {
      fa: "کاری که طبق یک زمان‌بندی تکرارشونده (مثلاً هر شب ساعت ۲ بامداد یا هر ۵ دقیقه) به‌صورت خودکار اجرا می‌شود؛ مانند تهیهٔ بکاپ، ارسال گزارش روزانه یا پاک‌سازی توکن‌های منقضی.",
      en: "A recurring automated task triggered on a schedule (e.g., nightly backups, daily digests, or pruning expired sessions).",
    },
    analogy: {
      fa: "مثل ساعت زنگ‌دار تکرارشونده که هر روز سر ساعت مشخص یک کار روتین را آغاز می‌کند.",
      en: "Like a recurring alarm clock that automatically kicks off a routine chore every day at 2:00 AM.",
    },
    related: ["Background Worker", "Distributed Lock", "Kubernetes"],
  },
  {
    term: "Streaming Response",
    fa: "پاسخ استریمینگ (Chunked Streaming)",
    category: "backend",
    definition: {
      fa: "ارسال تدریجی پاسخ HTTP به کلاینت به‌محض آماده شدن هر بخش (مانند خروجی توکن‌به‌توکن LLM یا دانلود فایل‌های حجیم)، بدون نیاز به نگهداری کل خروجی در حافظهٔ سرور.",
      en: "Sending an HTTP response incrementally in chunks as data becomes ready (such as LLM token streams or large exports) instead of buffering the entire payload first.",
    },
    analogy: {
      fa: "مثل ریختن آب با شلنگ به‌جای پر کردن استخر و خالی کردن یک‌جای آن.",
      en: "Like pouring water from a tap steadily rather than filling a giant bucket before handing it over.",
    },
    related: ["HTTP", "SSE", "SSR", "LLM"],
  },
  {
    term: "Content-Type & MIME",
    fa: "نوع محتوا و MIME Type",
    category: "backend",
    definition: {
      fa: "هدر استاندارد HTTP (`Content-Type`) که به گیرنده می‌گوید بدنهٔ پیام چه نوع داده‌ای دارد — مثلاً `application/json`، `text/html`، `multipart/form-data` یا `image/webp` — تا درست پارس شود.",
      en: "An HTTP header declaring the exact media format of a payload — such as application/json, text/html, or multipart/form-data — so clients and servers parse it safely.",
    },
    analogy: {
      fa: "مثل برچسب روی جعبهٔ پستی («شکستنی»، «مواد غذایی»، «اسناد») تا گیرنده بداند چگونه با آن برخورد کند.",
      en: "Like a shipping label telling the recipient whether the box holds glass, documents, or perishables.",
    },
    related: ["HTTP", "Content Negotiation", "JSON", "REST"],
  },
  {
    term: "Webhook Signature",
    fa: "امضای امنیتی وب‌هوک",
    category: "backend",
    definition: {
      fa: "کد تأیید رمزنگاری‌شده (معمولاً HMAC-SHA256) که فرستندهٔ وب‌هوک در هدر می‌فرستد تا سرور شما مطمئن شود پیام واقعاً از سرویس معتبر (مثل درگاه پرداخت) آمده و دستکاری نشده است.",
      en: "A cryptographic signature (typically HMAC-SHA256) sent in a webhook header so your server verifies the payload genuinely came from the trusted provider and wasn't tampered with.",
    },
    analogy: {
      fa: "مثل مهر مومی اختصاصی روی نامهٔ بانکی که اثبات می‌کند نامه جعلی نیست و در راه باز نشده است.",
      en: "Like a tamper-evident wax seal from your bank proving the notice is genuine and unaltered.",
    },
    related: ["Webhook", "Hashing", "Digital Signature", "API"],
  },
];
