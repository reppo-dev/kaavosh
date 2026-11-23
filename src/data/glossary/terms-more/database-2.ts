import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (database, part 2). Merged into terms.ts → /glossary page. */
export const moreDatabaseTerms2: GlossaryTerm[] = [
  {
    term: "Window Function",
    fa: "تابع پنجره‌ای",
    category: "database",
    definition: {
      fa: "تابع پنجره‌ای (ROW_NUMBER، RANK، SUM OVER، LAG/LEAD) محاسبه را روی «پنجره‌ای از سطرها» انجام می‌دهد بدون اینکه سطرها را مثل GROUP BY به یکی فرو بکاهد: برای هر سطر خروجی، میانگین بخش خودش را کنار همان سطر می‌گذارد. برای رتبه‌بندی و مقایسه‌ی سطر با قبلی/بعدی است.",
      en: "Window functions (ROW_NUMBER, RANK, SUM OVER, LAG/LEAD) compute over a 'window of rows' without collapsing them like GROUP BY: each output row keeps its identity alongside an aggregate over its partition. Ideal for rankings and comparing each row with its neighbors.",
    },
    analogy: {
      fa: "مثل اعلام رتبه در کلاس: هر دانش‌آموز با نمره‌ی خودش می‌ماند ولی «رتبه‌اش در کلاس» و «فاصله از نفر قبلی» کنار اسمش نوشته می‌شود.",
      en: "Like posting class rankings: every student keeps their own score, with their rank and gap-to-previous written beside their name.",
    },
    related: ["SQL", "Join", "Normalization"],
  },
  {
    term: "Common Table Expression",
    fa: "عبارت جدولی مشترک",
    category: "database",
    definition: {
      fa: "CTE با WITH یک نتیجه‌ی نام‌گذاری‌شده‌ی موقت تعریف می‌کند که در همان کوئری قابل استفاده و ارجاع چندباره است — کوئری‌های پیچیده را خوانا و پله‌پله می‌کند. CTE بازگشتی حتی پیمایش سلسله‌مراتب (کارمند→مدیر) را ممکن می‌کند.",
      en: "A CTE, declared with WITH, defines a temporary named result set usable and re-referenceable within the same query — making complex SQL readable step by step. Recursive CTEs even walk hierarchies (employee→manager).",
    },
    analogy: {
      fa: "مثل متغیرهای میانی در فرمول ریاضی: به‌جای یک فرمول یک‌خطی عظیم، هر مرحله را نام‌گذاری می‌کنی و مرحله‌ی بعد از نتیجه‌ی قبلی استفاده می‌کند.",
      en: "Like intermediate variables in math: instead of one giant formula, name each step and let the next step consume the previous result.",
    },
    related: ["SQL", "Window Function"],
  },
  {
    term: "Database View",
    fa: "نمای پایگاه‌داده",
    category: "database",
    definition: {
      fa: "View کوئری ذخیره‌شده‌ای است که مثل جدول مجازی رفتار می‌کند: داده‌ی خودش را ندارد، هر بار از جدول‌های پایه می‌خواند. برای ساده‌سازی کوئری‌های پرتکرار، کنترل دسترسی (نمایش بخشی از جدول) و پایداری قرارداد برای مصرف‌کننده‌ها به کار می‌رود.",
      en: "A view is a stored query that behaves like a virtual table: it holds no data itself and reads from base tables on every call. Used to simplify frequent queries, control access (expose part of a table), and keep a stable contract for consumers.",
    },
    analogy: {
      fa: "مثل پنجره‌ی ثابت روی انبار: هر بار نگاه کنی، محتوای واقعی انبار را می‌بینی؛ خودش کالایی ذخیره نمی‌کند.",
      en: "Like a fixed window onto a warehouse: every look shows the warehouse's current contents — the window stores nothing itself.",
    },
    related: ["SQL", "Materialized View", "Index"],
  },
  {
    term: "Materialized View",
    fa: "نمای مادی",
    category: "database",
    definition: {
      fa: "Materialized view برخلاف view معمولی، نتیجه‌ی کوئری را فیزیکی ذخیره می‌کند — خواندنش سریع است اما باید refresh شود تا به‌روز بماند. برای گزارش‌ها و تجمیع‌های سنگین (داشبورد، آمار فروش) که خواندن سریع مهم‌تر از به‌روز بودن لحظه‌ای است.",
      en: "Unlike a plain view, a materialized view physically stores the query's result — fast to read, but it must be refreshed to stay current. Ideal for heavy aggregations (dashboards, sales stats) where read speed beats momentary freshness.",
    },
    analogy: {
      fa: "مثل نسخه‌ی چاپی گزارش ماهانه: برداشتنش فوری است، ولی تا چاپ بعدی کهنه است — باید دوره‌ای تجدید شود.",
      en: "Like a printed monthly report: instantly at hand, but stale until the next print — you refresh it on a schedule.",
    },
    related: ["Database View", "SQL", "Cache", "OLTP vs OLAP"],
  },
  {
    term: "Stored Procedure",
    fa: "رویه‌ی ذخیره‌شده",
    category: "database",
    definition: {
      fa: "Stored procedure برنامه‌ای است داخل دیتابیس که با CALL صدا زده می‌شود: چند کوئری، منطق شرطی و تراکنش را نزدیک داده اجرا می‌کند — رفت‌وبرگشت شبکه کم می‌شود. مزیت: عملکرد و مرکزیت منطق؛ عیب: انتقال منطق از اپ به DB و دشواری تست/نسخه‌بندی.",
      en: "A stored procedure is a program inside the database, invoked with CALL: it runs multiple queries, conditionals and transactions close to the data — cutting network round-trips. Pros: performance and centralized logic; cons: logic drifts into the DB, hard to test and version.",
    },
    analogy: {
      fa: "مثل منشی مستقر در بایگانی که چند برگه را در همان اتاق پردازش می‌کند — به‌جای فرستادن هر برگه به بیرون و برگرداندنش.",
      en: "Like a clerk stationed in the archive who processes several forms right there instead of shipping each out and back.",
    },
    related: ["SQL", "Database Trigger", "Transaction"],
  },
  {
    term: "Database Trigger",
    fa: "تریگر پایگاه‌داده",
    category: "database",
    definition: {
      fa: "Trigger کدی در دیتابیس است که خودکار با رویداد (INSERT/UPDATE/DELETE روی جدول) اجرا می‌شود — مثل ثبت audit log یا به‌روز نگه داشتن ستون محاسباتی. قدرتمند ولی خطرناک: منطق پنهان در دیتابیس، دیباگ دشوار و اثر زنجیره‌ای ناخواسته.",
      en: "A trigger is database code that fires automatically on events (INSERT/UPDATE/DELETE on a table) — e.g., writing an audit log or maintaining a computed column. Powerful but risky: hidden logic inside the DB, hard debugging, unintended cascading effects.",
    },
    analogy: {
      fa: "مثل چراغ خودکار راهرو: با باز شدن در (رویداد) بی‌دستور روشن می‌شود — کسی که برق ساختمان را می‌بیند، دلیلش را آنجا نمی‌بیند.",
      en: "Like hallway lights that flip on when the door opens: automatic — but the electrician reviewing the circuit won't see why.",
    },
    related: ["Stored Procedure", "SQL", "Write-ahead Log"],
  },
  {
    term: "Prepared Statement",
    fa: "دستور آماده",
    category: "database",
    definition: {
      fa: "Prepared statement کوئری را با جای‌نگهدار (? یا $1) از پیش می‌فرستد تا پلن اجرا یک‌بار آماده شود و مقادیر بعداً جداگانه بایند شوند. دو مزیت: جلوگیری از SQL Injection (مقدار هرگز به متن کوئری نمی‌چسبد) و اجرای سریع‌تر کوئری‌های پرتکرار.",
      en: "A prepared statement sends the query with placeholders (? or $1) so the execution plan is prepared once and values are bound separately afterwards. Two wins: SQL injection prevention (values never merge into query text) and faster repeated execution.",
    },
    analogy: {
      fa: "مثل فرم چاپی بانک: ساختار فرم ثابت است و شما فقط خانه‌های خالی را پر می‌کنید — کسی نمی‌تواند با نوشتن در خانه‌ها «ساختار» فرم را عوض کند.",
      en: "Like a printed bank form: the structure is fixed and you fill in the blanks — no one can alter the form's structure by writing inside a field.",
    },
    related: ["SQL", "SQL Injection"],
  },
  {
    term: "OLTP vs OLAP",
    fa: "OLTP در برابر OLAP",
    category: "database",
    definition: {
      fa: "OLTP سیستم عملیاتی روزمره است: هزاران تراکنش کوتاه (سفارش، پرداخت)، خواندن/نوشتن سطر-محور و سازگاری قوی. OLAP تحلیلی است: کوئری‌های سنگین روی تاریخچه‌ی عظیم، ستون‌محور و فقط‌خواندنی عمدتاً. معمولاً داده از OLTP با ETL به انبار داده‌ی OLAP منتقل می‌شود.",
      en: "OLTP is the operational system: thousands of short transactions (orders, payments), row-oriented reads/writes, strong consistency. OLAP is analytical: heavy queries over huge history, column-oriented, mostly read-only. Data typically flows from OLTP into an OLAP warehouse via ETL.",
    },
    analogy: {
      fa: "مثل فرق صندوق فروش روزانه با گزارش مالی سالانه: صندوق باید سریع و دقیق تراکنش بزند؛ گزارش کل سال را یک‌بار و با نگاه تحلیلی می‌سازد.",
      en: "Like the daily cash register versus the yearly financial report: the register must transact quickly and precisely; the report crunches the whole year analytically.",
    },
    related: ["SQL", "ETL", "Index", "Normalization"],
  },
  {
    term: "ETL",
    fa: "استخراج، تبدیل، بارگذاری",
    category: "database",
    definition: {
      fa: "ETL فرایند انتقال داده بین سیستم‌هاست: Extract از منبع‌ها (دیتابیس‌ها، API، فایل‌ها)، Transform (پاک‌سازی، یکسان‌سازی، تجمیع) و Load در مقصد (انبار داده). امروز مدل ELT هم رایج شده: اول بارگذاری خام در انبار ابری، بعد تبدیل داخل انبار.",
      en: "ETL moves data between systems: Extract from sources (databases, APIs, files), Transform (cleanse, unify, aggregate), Load into a destination (warehouse). ELT is the modern twist: load raw data into a cloud warehouse first, transform it there.",
    },
    analogy: {
      fa: "مثل خط تولید کنسرو: برداشت محصول از مزرعه، شست‌وشو و برش، و پر کردن قوطی‌ها برای انبار.",
      en: "Like a canning line: harvest from the farm, wash and cut, then fill cans for the warehouse.",
    },
    related: ["OLTP vs OLAP"],
  },
];
