import type { GlossaryTerm } from "../../schema";

/** Database glossary expansion — indexing internals, MVCC, isolation, pooling, partitioning & specialized DBs. Consumed by: src/data/glossary/terms.ts. */
export const moreDatabaseTerms3: GlossaryTerm[] = [
  {
    term: "B-Tree Index",
    fa: "ایندکس درخت B (B-Tree)",
    category: "database",
    definition: {
      fa: "رایج‌ترین ساختار دادهٔ ایندکس در دیتابیس‌های رابطه‌ای که کلیدها را به‌صورت مرتب در درختی متوازن نگه می‌دارد و جستجوهای دقیق (`=`) و بازه‌ای (`<`, `BETWEEN`, `ORDER BY`) را در زمان O(log n) انجام می‌دهد.",
      en: "The default balanced tree index in relational databases that keeps keys sorted for O(log n) lookups, range queries (BETWEEN, <, >), and ordered scans.",
    },
    analogy: {
      fa: "مثل فهرست الفبایی طبقه‌بندی‌شدهٔ کتابخانه که با چند انتخاب سریع دقیقاً به قفسه و صفحهٔ مورد نظر می‌رسید.",
      en: "Like a multi-level alphabetical library catalog that narrows millions of books down to one shelf in a few jumps.",
    },
    related: ["Index", "SQL", "Tree", "Binary Search"],
  },
  {
    term: "Composite Index",
    fa: "ایندکس ترکیبی",
    category: "database",
    definition: {
      fa: "ایندکسی که روی چند ستون به ترتیب مشخص ساخته می‌شود (مثلاً `(tenant_id, created_at)`). ترتیب ستون‌ها حیاتی است زیرا دیتابیس از پیشوند سمت چپ ایندکس برای جستجو استفاده می‌کند.",
      en: "An index spanning multiple columns in a specific order (e.g., (tenant_id, created_at)). Column order matters because queries utilize the leftmost prefix of the index.",
    },
    analogy: {
      fa: "مثل دفترچهٔ تلفن مرتب‌شده بر اساس «نام خانوادگی، سپس نام»: پیدا کردن با نام خانوادگی فوری است، ولی جستجو فقط با نام کوچک نیاز به گشتن کل دفتر دارد.",
      en: "Like a phonebook sorted by (Last Name, First Name): looking up by last name is instant, while searching by first name alone requires scanning the whole book.",
    },
    related: ["Index", "B-Tree Index", "Covering Index"],
  },
  {
    term: "Covering Index",
    fa: "ایندکس پوششی (Covering Index)",
    category: "database",
    definition: {
      fa: "ایندکسی که تمامی ستون‌های مورد نیاز یک کوئری را در خود دارد، بنابراین دیتابیس پاسخ را مستقیم از خود ایندکس می‌خواند (Index-Only Scan) و نیازی به مراجعه به جدول اصلی ندارد.",
      en: "An index containing every column required by a query so the database answers directly from the index (Index-Only Scan) without fetching rows from the main table.",
    },
    analogy: {
      fa: "مثل فهرست پشت کتاب که خلاصهٔ جواب همان‌جا نوشته شده و دیگر نیازی به ورق زدن متن اصلی کتاب نیست.",
      en: "Like an index card at the back of a book that already holds the exact fact you need, saving a trip to the actual pages.",
    },
    related: ["Index", "Composite Index", "Query Execution Plan"],
  },
  {
    term: "Query Execution Plan",
    fa: "نقشهٔ اجرای کوئری (EXPLAIN)",
    category: "database",
    definition: {
      fa: "گزارشی که بهینه‌ساز دیتابیس (با دستور `EXPLAIN` یا `EXPLAIN ANALYZE`) ارائه می‌دهد و نشان می‌دهد کوئری از کدام ایندکس، نوع Join یا اسکن کامل جدول استفاده می‌کند و هر مرحله چقدر هزینه دارد.",
      en: "The step-by-step plan produced by the database optimizer (via EXPLAIN / EXPLAIN ANALYZE) showing index scans, sequential scans, join algorithms, and cost estimates.",
    },
    analogy: {
      fa: "مثل نقشهٔ مسیر GPS پیش از سفر که نشان می‌دهد کدام جاده‌ها بزرگراه‌اند و کدام بخش‌ها ترافیک سنگین دارند.",
      en: "Like inspecting a GPS route breakdown before driving so you spot the exact bottleneck road.",
    },
    related: ["SQL", "Index", "Join", "B-Tree Index"],
  },
  {
    term: "MVCC",
    fa: "کنترل هم‌زمانی چندنسخه‌ای (MVCC)",
    category: "database",
    definition: {
      fa: "Multi-Version Concurrency Control — تکنیکی در دیتابیس‌هایی مثل PostgreSQL که برای هر سطر چندین نسخه نگه می‌دارد تا خوانندگان و نویسندگان بدون قفل کردن یکدیگر به اسنپ‌شات سازگار داده دسترسی داشته باشند.",
      en: "Multi-Version Concurrency Control — keeps multiple versions of rows so readers never block writers and writers never block readers, giving each transaction a consistent snapshot.",
    },
    analogy: {
      fa: "مثل خواندن نسخهٔ چاپ‌شدهٔ سند در حالی که همکارتان روی پیش‌نویس نسخهٔ جدید کار می‌کند؛ هیچ‌کدام منتظر دیگری نمی‌مانید.",
      en: "Like reading a printed snapshot of a document while a teammate edits a new draft — neither blocks the other.",
    },
    related: ["Transaction", "ACID", "Isolation Levels", "Database Vacuum"],
  },
  {
    term: "Isolation Levels",
    fa: "سطوح ایزوله‌سازی تراکنش",
    category: "database",
    definition: {
      fa: "قوانین تعیین‌کنندهٔ اینکه تراکنش‌های هم‌زمان تا چه حد تغییرات یکدیگر را ببینند (Read Uncommitted، Read Committed، Repeatable Read و Serializable)؛ مصالحه‌ای میان سازگاری دقیق و کارایی هم‌زمان.",
      en: "Rules controlling what concurrent transactions can see from each other (Read Uncommitted, Read Committed, Repeatable Read, Serializable), trading off strict consistency against throughput.",
    },
    analogy: {
      fa: "مثل اتاق‌های جلسه با دیوارهای شیشه‌ای تا عایق صوتی کامل: هرچه ایزوله‌تر باشد تداخل کمتر است اما هماهنگی هزینهٔ بیشتری دارد.",
      en: "Like meeting rooms ranging from open desks to soundproof booths: stronger isolation stops interference at the cost of coordination.",
    },
    related: ["ACID", "Transaction", "MVCC", "Lock Contention"],
  },
  {
    term: "Denormalization",
    fa: "نرمال‌زدایی داده",
    category: "database",
    definition: {
      fa: "افزودن عمدی داده‌های تکراری یا ستون‌های ازپیش‌محاسبه‌شده به جداول برای کاهش تعداد Joinهای سنگین و افزایش سرعت خواندن، به بهای پیچیده‌تر شدن به‌روزرسانی‌ها.",
      en: "Intentionally duplicating data or storing precomputed fields across tables to avoid expensive joins and speed up reads, at the cost of extra care on writes.",
    },
    analogy: {
      fa: "مثل نوشتن جمع کل فاکتور در بالای برگه تا هر بار مجبور نباشید همهٔ ردیف‌ها را دوباره جمع بزنید — فقط با تغییر یک قلم باید جمع کل را هم به‌روز کنید.",
      en: "Like writing the invoice total at the top of the sheet so you don't re-add every line on read — you just remember to update it when items change.",
    },
    related: ["Normalization", "Join", "Materialized View", "OLTP vs OLAP"],
  },
  {
    term: "Connection Pooling",
    fa: "استخر اتصال دیتابیس",
    category: "database",
    definition: {
      fa: "نگهداری مجموعه‌ای از اتصالات باز و آماده به دیتابیس و بازاستفاده از آن‌ها میان درخواست‌های برنامه، تا هزینهٔ سنگین باز و بسته کردن اتصال TCP/احراز هویت در هر کوئری حذف شود.",
      en: "Maintaining a cache of reusable open database connections shared across requests to avoid the latency and resource overhead of opening a new connection per query.",
    },
    analogy: {
      fa: "مثل ناوگان تاکسی آماده در ایستگاه: به‌جای خرید ماشین جدید برای هر مسافر، از ماشین‌های آماده به‌نوبت استفاده می‌شود.",
      en: "Like a fleet of taxis waiting at a stand: riders reuse ready cars instead of building a new car per trip.",
    },
    related: ["SQL", "Latency", "Serverless", "API"],
  },
  {
    term: "Partitioning",
    fa: "پارتیشن‌بندی جدول",
    category: "database",
    definition: {
      fa: "شکستن یک جدول بسیار بزرگ (مثلاً بر اساس تاریخ یا منطقه) به قطعات کوچک‌تر درون یک دیتابیس تا کوئری‌ها فقط پارتیشن مرتبط را اسکن کنند و حذف داده‌های قدیمی فوری شود.",
      en: "Splitting a massive table into smaller physical chunks (e.g., by month or region) within one database so queries scan only relevant partitions and archiving old data is instant.",
    },
    analogy: {
      fa: "مثل دسته‌بندی پرونده‌های بایگانی در زونکن‌های جداگانه برای هر سال به‌جای ریختن همهٔ برگه‌ها در یک جعبهٔ غول‌پیکر.",
      en: "Like filing invoices in one binder per year instead of one giant box, so searching 2026 skips all earlier years.",
    },
    related: ["Sharding", "Index", "SQL"],
  },
  {
    term: "Full-Text Search",
    fa: "جستجوی تمام‌متن",
    category: "database",
    definition: {
      fa: "قابلیت جستجوی سریع درون متن‌های طولانی با استفاده از ایندکس معکوس (Inverted Index)، ریشه‌یابی کلمات و رتبه‌بندی مرتبط بودن (مانند PostgreSQL `tsvector` یا Elasticsearch)، بسیار سریع‌تر از `LIKE '%...%'`.",
      en: "Fast search across natural-language text using inverted indexes, stemming, and relevance ranking (e.g., PostgreSQL tsvector or Elasticsearch), far faster than wildcard LIKE queries.",
    },
    analogy: {
      fa: "مثل واژه‌نامهٔ انتهای کتاب که شمارهٔ تمام صفحاتی را که هر کلمه در آن آمده یک‌جا فهرست کرده است.",
      en: "Like a book's back-of-book index listing every page where a word appears so you don't scan page by page.",
    },
    related: ["Index", "SQL", "Vector Database"],
  },
  {
    term: "Time-Series Database",
    fa: "دیتابیس سری زمانی",
    category: "database",
    definition: {
      fa: "دیتابیسی بهینه‌شده برای ذخیره و تحلیل داده‌های برچسب‌خورده با زمان (مانند متریک‌های سرور، حسگرهای IoT و قیمت‌های بازار) با فشرده‌سازی بالا و پنجره‌های تجمیع سریع.",
      en: "A database optimized for ingesting, compressing, and aggregating timestamped measurements such as server metrics, IoT telemetry, and financial ticks.",
    },
    analogy: {
      fa: "مثل نوار قلب یا دفتر ثبت دمای ساعتی که برای ثبت پیوسته در طول زمان و مقایسهٔ بازه‌ها طراحی شده است.",
      en: "Like a heart-rate monitor strip optimized for continuous time-ordered readings and quick range rollups.",
    },
    related: ["Monitoring", "Observability", "Partitioning", "OLTP vs OLAP"],
  },
  {
    term: "Graph Database",
    fa: "دیتابیس گرافی",
    category: "database",
    definition: {
      fa: "دیتابیسی (مانند Neo4j) که داده‌ها را به‌صورت گره‌ها (Nodes) و یال‌های روابط (Edges) ذخیره می‌کند تا پیمایش روابط چندلایه (مثل شبکهٔ اجتماعی یا کشف تقلب) بدون Joinهای سنگین بسیار سریع باشد.",
      en: "A database (such as Neo4j) that stores data natively as nodes and relationship edges, making multi-hop relationship traversals like social networks or fraud rings extremely fast.",
    },
    analogy: {
      fa: "مثل تابلوی کارآگاه با پین و نخ‌های رنگی: دنبال کردن «دوستِ دوستِ دوست» مستقیم با پیگیری نخ‌ها انجام می‌شود.",
      en: "Like a detective's string board: tracing friends-of-friends follows direct links instead of joining giant spreadsheets.",
    },
    related: ["Graph", "NoSQL", "Join", "BFS"],
  },
  {
    term: "Columnar Storage",
    fa: "ذخیره‌سازی ستون‌محور",
    category: "database",
    definition: {
      fa: "ذخیرهٔ مقادیر هر ستون کنار هم روی دیسک به‌جای ذخیرهٔ سطر‌به‌سطر. برای کوئری‌های تحلیلی (OLAP) که فقط روی چند ستون از میلیون‌ها سطر میانگین یا مجموع می‌گیرند فوق‌العاده سریع و فشرده است.",
      en: "Storing each table column contiguously on disk rather than row by row, dramatically improving compression and analytical (OLAP) scans that read only a few columns across millions of rows.",
    },
    analogy: {
      fa: "مثل نگه داشتن لیست قیمت همهٔ کالاها در یک برگهٔ جداگانه: برای محاسبهٔ مجموع فروش لازم نیست اسم و آدرس مشتریان را هم بخوانید.",
      en: "Like keeping all prices on one dedicated sheet: computing total revenue never touches customer addresses.",
    },
    related: ["OLTP vs OLAP", "ETL", "Partitioning"],
  },
  {
    term: "Lock Contention",
    fa: "رقابت بر سر قفل (Lock Contention)",
    category: "database",
    definition: {
      fa: "وضعیتی که چندین تراکنش هم‌زمان برای دسترسی به یک سطر یا جدول قفل‌شده در صف منتظر می‌مانند و باعث افزایش تأخیر و افت شدید توان عملیاتی دیتابیس می‌شود.",
      en: "When multiple concurrent transactions wait to acquire locks on the same hot row or table, causing latency spikes and throughput degradation.",
    },
    analogy: {
      fa: "مثل ده‌ها مشتری که هم‌زمان سر یک صندوق واحد صف کشیده‌اند در حالی که بقیهٔ فروشگاه خلوت است.",
      en: "Like dozens of shoppers queuing at a single busy checkout lane while the rest of the store sits idle.",
    },
    related: ["Deadlock", "Transaction", "Optimistic Locking", "Isolation Levels"],
  },
  {
    term: "Foreign Key Cascade",
    fa: "عملیات آبشاری کلید خارجی",
    category: "database",
    definition: {
      fa: "قانونی روی کلید خارجی (مانند `ON DELETE CASCADE` یا `SET NULL`) که تعیین می‌کند هنگام حذف یا تغییر رکورد والد، چه بلایی به‌طور خودکار سر رکوردهای فرزند وابسته بیاید.",
      en: "A foreign-key rule (such as ON DELETE CASCADE or SET NULL) defining how child rows automatically react when their referenced parent row is deleted or updated.",
    },
    analogy: {
      fa: "مثل حذف یک پوشه در کامپیوتر که همهٔ فایل‌های داخلش نیز هم‌زمان پاک می‌شوند تا فایل یتیم باقی نماند.",
      en: "Like deleting a folder and automatically removing the files inside so no orphaned records are left behind.",
    },
    related: ["Foreign Key", "Primary Key", "SQL", "Database Trigger"],
  },
  {
    term: "Database Vacuum",
    fa: "پاک‌سازی Vacuum در دیتابیس",
    category: "database",
    definition: {
      fa: "فرایند نگهداری (به‌ویژه در PostgreSQL) که نسخه‌های قدیمی و مردهٔ سطرهای باقی‌مانده از MVCC را جمع‌آوری می‌کند تا فضای دیسک بازیافت شود و آمار بهینه‌ساز کوئری به‌روز بماند.",
      en: "A maintenance process (notably in PostgreSQL) that reclaims storage from dead row versions left behind by MVCC updates/deletes and refreshes planner statistics.",
    },
    analogy: {
      fa: "مثل جمع‌آوری برگه‌های خط‌خورده از دفتر بایگانی در پایان هفته تا قفسه‌ها پر نشوند.",
      en: "Like clearing crossed-out pages from a filing cabinet each week so shelves don't bloat.",
    },
    related: ["MVCC", "Query Execution Plan", "Transaction"],
  },
];
