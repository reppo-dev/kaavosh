import type { GlossaryTerm } from "../../schema";

/** System Design glossary expansion — resilience patterns, distributed locks, outbox, DLQ, edge caching & replication. Consumed by: src/data/glossary/terms.ts. */
export const moreSystemDesignTerms3: GlossaryTerm[] = [
  {
    term: "Rate Limiter Algorithms",
    fa: "الگوریتم‌های محدودسازی نرخ",
    category: "system-design",
    definition: {
      fa: "الگوریتم‌های کنترل ترافیک API شامل Token Bucket (اجازهٔ جهش کوتاه)، Leaky Bucket (خروجی یکنواخت)، Fixed Window و Sliding Window Log/Counter برای جلوگیری از سوءاستفاده و حفظ پایداری سرویس.",
      en: "Algorithms controlling request rates — Token Bucket (allows short bursts), Leaky Bucket (steady outflow), Fixed Window, and Sliding Window — to protect services from overload or abuse.",
    },
    analogy: {
      fa: "Token Bucket مثل سطل ژتون بازی است که هر ثانیه چند ژتون جدید اضافه می‌شود و هر درخواست یک ژتون مصرف می‌کند.",
      en: "Token Bucket is like a token jar refilled steadily: each request spends a token, allowing brief bursts up to jar capacity.",
    },
    related: ["Rate Limiting", "API Gateway", "Redis", "Backpressure"],
  },
  {
    term: "Distributed Lock",
    fa: "قفل توزیع‌شده",
    category: "system-design",
    definition: {
      fa: "سازوکاری برای هماهنگی میان چندین سرور مستقل تا در هر لحظه فقط یک گره منبع مشترک (مثل پردازش یک سفارش یا کرون‌جاب) را تغییر دهد؛ معمولاً با Redis، etcd یا ZooKeeper همراه با زمان انقضا (TTL) پیاده‌سازی می‌شود.",
      en: "A coordination primitive ensuring only one node across multiple servers accesses a shared critical resource at a time, typically backed by Redis, etcd, or ZooKeeper with lease TTLs.",
    },
    analogy: {
      fa: "مثل چوب‌دست سخنرانی در جلسهٔ بزرگ: فقط کسی که چوب‌دست را در دست دارد اجازهٔ صحبت دارد و بعد از زمان مشخص باید آن را پس بدهد.",
      en: "Like a talking stick in a meeting with a timer: only the holder can act, and if they freeze, the timer releases it.",
    },
    related: ["Mutex", "Leader Election", "Redis", "Split-Brain"],
  },
  {
    term: "Idempotency Key",
    fa: "کلید توان‌همسانی (Idempotency Key)",
    category: "system-design",
    definition: {
      fa: "شناسهٔ یکتایی که کلاینت همراه درخواست حساس (مثلاً پرداخت) می‌فرستد تا اگر شبکه قطع شد و درخواست دوباره ارسال گردید، سرور همان نتیجهٔ اول را برگرداند و عملیات دو بار اجرا نشود.",
      en: "A unique client-generated token sent with a sensitive request (like a payment) so retries after network timeouts return the original result instead of charging twice.",
    },
    analogy: {
      fa: "مثل شمارهٔ پیگیری روی چک بانکی: اگر همان چک دو بار به باجه برسد، بانک می‌فهمد قبلاً نقد شده و دوباره پول کم نمی‌کند.",
      en: "Like a unique check number: submitting the same check twice won't withdraw funds a second time.",
    },
    related: ["Idempotent", "Retry with Exponential Backoff", "API", "Transaction"],
  },
  {
    term: "Outbox Pattern",
    fa: "الگوی صندوق خروجی (Outbox Pattern)",
    category: "system-design",
    definition: {
      fa: "الگویی برای انتشار قابل‌اطمینان رویدادها: تغییر داده و رکورد رویداد هر دو درون یک تراکنش دیتابیس در جدول `outbox` ذخیره می‌شوند و سپس یک پردازش جداگانه آن را به Kafka/صف پیام می‌فرستد تا مشکل نوشتن دوگانه (Dual-Write) رخ ندهد.",
      en: "A pattern preventing dual-write bugs by saving both the business state change and the outgoing event record inside the same DB transaction, then relaying events asynchronously to a broker.",
    },
    analogy: {
      fa: "مثل ثبت سفارش و گذاشتن برگهٔ ارسال در سبد خروجی روی یک میز واحد، تا پیک بعداً برگه‌ها را با اطمینان ببرد.",
      en: "Like writing the order and dropping the dispatch slip into an outbox tray in one atomic step for a courier to deliver reliably.",
    },
    related: ["Transaction", "Message Queue", "Kafka", "Event-Driven Architecture"],
  },
  {
    term: "Bulkhead Pattern",
    fa: "الگوی دیوارهٔ ضدآب (Bulkhead)",
    category: "system-design",
    definition: {
      fa: "جدا کردن استخر منابع (نخ‌ها، اتصالات یا سرورها) برای سرویس‌های مختلف تا اگر یک وابستگی کند یا خراب شد، کل ظرفیت سیستم را نبلعد و بقیهٔ قابلیت‌ها سالم بمانند.",
      en: "Isolating resource pools (threads, connections, instances) per dependency or feature so a slow or failing subsystem cannot exhaust capacity and sink the entire application.",
    },
    analogy: {
      fa: "مثل دیواره‌های ضدآب داخل بدنهٔ کشتی: اگر یک بخش سوراخ شود، آب فقط همان اتاقک را پر می‌کند و کل کشتی غرق نمی‌شود.",
      en: "Like watertight compartments in a ship's hull: flooding one compartment doesn't sink the entire vessel.",
    },
    related: ["Circuit Breaker", "Thread Pool", "Microservices", "Single Point of Failure"],
  },
  {
    term: "Retry with Exponential Backoff",
    fa: "تلاش مجدد با تأخیر نمایی",
    category: "system-design",
    definition: {
      fa: "استراتژی مدیریت خطاهای موقت شبکه که در هر تلاش مجدد، زمان انتظار را دو برابر می‌کند (مثلاً ۱، ۲، ۴، ۸ ثانیه) و معمولاً مقدار تصادفی (Jitter) می‌افزاید تا همهٔ کلاینت‌ها هم‌زمان به سرور هجوم نبرند.",
      en: "A retry strategy for transient failures that doubles the delay after each attempt (1s, 2s, 4s...) plus random jitter so recovering servers aren't hammered simultaneously.",
    },
    analogy: {
      fa: "وقتی تلفن دوستتان اشغال است، هر بار کمی بیشتر صبر می‌کنید تا دوباره زنگ بزنید به‌جای اینکه هر ثانیه پشت‌سرهم بگیرید.",
      en: "When a phone line is busy, waiting progressively longer between redials instead of hammering the line every second.",
    },
    related: ["Circuit Breaker", "Thundering Herd", "Idempotency Key", "Backpressure"],
  },
  {
    term: "Dead Letter Queue",
    fa: "صف پیام‌های ناموفق (DLQ)",
    category: "system-design",
    definition: {
      fa: "صفی جداگانه در سامانه‌های پیام‌رسان که پیام‌های خراب یا پردازش‌نشده پس از چند بار تلاش مجدد به آن منتقل می‌شوند تا صف اصلی مسدود نشود و تیم بتواند آن‌ها را بررسی و بازپخش کند.",
      en: "A dedicated queue where messages that repeatedly fail processing are routed after max retries, keeping the main queue unblocked while preserving failed payloads for inspection.",
    },
    analogy: {
      fa: "مثل صندوق نامه‌های بی‌آدرس در ادارهٔ پست: کنار گذاشته می‌شوند تا بررسی شوند و جلوی توزیع بقیهٔ نامه‌ها را نگیرند.",
      en: "Like the post office's undeliverable mail bin — pulled aside for investigation so healthy mail keeps moving.",
    },
    related: ["Message Queue", "Kafka", "Retry with Exponential Backoff", "Pub/Sub"],
  },
  {
    term: "Read Replica",
    fa: "نسخهٔ خواندنی دیتابیس (Read Replica)",
    category: "system-design",
    definition: {
      fa: "نسخهٔ کپی‌شده و فقط‌خواندنی از دیتابیس اصلی که بار کوئری‌های خواندن (SELECT) را از دوش سرور اصلی برمی‌دارد و مقیاس‌پذیری خواندن را بالا می‌برد (معمولاً با کمی تأخیر همگام‌سازی).",
      en: "A read-only copy synced from the primary database that offloads heavy SELECT traffic to scale read throughput, typically with slight replication lag.",
    },
    analogy: {
      fa: "مثل چاپ چند نسخه از منوی رستوران: ده‌ها مشتری هم‌زمان منو را می‌خوانند بدون اینکه سرآشپز را درگیر کنند.",
      en: "Like printing multiple copies of a menu: dozens of guests read simultaneously without crowding the chef.",
    },
    related: ["Replication", "Eventual Consistency", "Horizontal vs Vertical Scaling", "CQRS"],
  },
  {
    term: "Thundering Herd",
    fa: "پدیدهٔ هجوم هم‌زمان (Thundering Herd)",
    category: "system-design",
    definition: {
      fa: "زمانی که یک کلید پرمصرف در کش منقضی می‌شود (یا سرور بالا می‌آید) و هزاران درخواست هم‌زمان برای بازسازی همان داده به دیتابیس حمله می‌کنند و آن را از پا درمی‌آورند.",
      en: "When a hot cache key expires or a service recovers and thousands of concurrent requests simultaneously stampede the database to recompute the exact same data.",
    },
    analogy: {
      fa: "مثل باز شدن درِ حراج جمعهٔ سیاه که هزار نفر هم‌زمان از یک درِ باریک وارد می‌شوند و راه را می‌بندند.",
      en: "Like thousands of shoppers rushing through one narrow door the exact second a sale opens.",
    },
    related: ["Cache", "Cache Invalidation", "Retry with Exponential Backoff", "Rate Limiting"],
  },
  {
    term: "Split-Brain",
    fa: "دوپارگی کلاستر (Split-Brain)",
    category: "system-design",
    definition: {
      fa: "حالتی خطرناک در سیستم‌های توزیع‌شده که بر اثر قطعی شبکه میان گره‌ها، دو بخش کلاستر هر دو خود را رهبر (Primary) می‌پندارند و داده‌های ناسازگار می‌نویسند؛ با رای‌گیری اکثریت (Quorum) پیشگیری می‌شود.",
      en: "A dangerous distributed-systems failure where a network partition causes two subsets of nodes to both believe they are the leader and accept conflicting writes; prevented with quorum consensus.",
    },
    analogy: {
      fa: "مثل دو کمک‌خلبان که ارتباطشان قطع شده و هرکدام فرمان هواپیما را به سمت متفاوتی می‌چرخاند.",
      en: "Like two co-pilots losing intercom contact and steering the plane in opposite directions at once.",
    },
    related: ["CAP Theorem", "Leader Election", "Distributed Lock", "Strong Consistency"],
  },
  {
    term: "CDN Edge Caching",
    fa: "کش لبه در CDN",
    category: "system-design",
    definition: {
      fa: "ذخیرهٔ فایل‌های ایستا، تصاویر و حتی پاسخ‌های API در سرورهای لبه (Edge) نزدیک به جغرافیای کاربر تا درخواست بدون سفر به سرور مرکزی در چند میلی‌ثانیه پاسخ داده شود.",
      en: "Storing static assets, media, and cacheable API responses at CDN edge nodes geographically close to users so responses return in milliseconds without hitting the origin server.",
    },
    analogy: {
      fa: "مثل داشتن انبارهای کوچک محلی در هر شهر به‌جای ارسال همهٔ سفارش‌ها از کارخانهٔ مرکزی در آن سر کشور.",
      en: "Like stocking popular items in neighborhood mini-warehouses instead of shipping every order from a distant factory.",
    },
    related: ["CDN", "Cache", "Cache Invalidation", "Latency"],
  },
  {
    term: "Geo-Replication",
    fa: "تکثیر جغرافیایی داده",
    category: "system-design",
    definition: {
      fa: "نگهداری کپی‌های همگام از داده‌ها در چندین دیتاسنتر در قاره‌ها یا مناطق مختلف برای کاهش تأخیر کاربران جهانی و تداوم سرویس در صورت از کار افتادن یک منطقهٔ کامل.",
      en: "Replicating data across multiple geographic regions to lower latency for global users and survive an entire data-center or regional outage.",
    },
    analogy: {
      fa: "مثل داشتن شعبه‌های بانکی هماهنگ در چند کشور: حتی اگر یک شهر دچار قطعی برق شود، سیستم در سایر شهرها فعال می‌ماند.",
      en: "Like synced bank branches across continents: even if one city loses power, operations continue smoothly elsewhere.",
    },
    related: ["Replication", "Eventual Consistency", "CAP Theorem", "Latency"],
  },
];
