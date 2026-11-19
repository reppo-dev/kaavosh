import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (database, extended). Merged into terms.ts → /glossary page. */
export const moreDatabaseTerms: GlossaryTerm[] = [
  {
    term: "Primary Key",
    fa: "کلید اصلی",
    category: "database",
    definition: {
      fa: "کلید اصلی شناسه‌ی یکتای هر سطر در جدول است: دو سطر هرگز نمی‌توانند مقدار یکسانی داشته باشند و مقدارش هم خالی نمی‌شود. معمولاً یک id خودافزاینده یا شناسه‌ی تصادفی است.",
      en: "A primary key is each row's unique identifier: no two rows may share the same value and it can never be empty. Usually an auto-incrementing id or a random identifier.",
    },
    analogy: {
      fa: "مثل کد ملی: در کل کشور دو نفر با یک کد نداریم و بدون کد هم ثبت‌نام نمی‌شوند؛ همین یک فیلد، شما را از میلیون‌ها نفر دیگر جدا می‌کند.",
      en: "Like a national ID number: no two citizens share one, and nobody registers without one — that single field separates you from millions of others.",
    },
    related: ["Foreign Key", "Index", "Normalization"],
  },
  {
    term: "Foreign Key",
    fa: "کلید خارجی",
    category: "database",
    definition: {
      fa: "کلید خارجی ستونی در جدول است که به کلید اصلی جدول دیگری اشاره می‌کند و رابطه را می‌سازد: orders.user_id می‌گوید هر سفارش متعلق به کدام کاربر است — و دیتابیس اجازه نمی‌دهد به کاربرِ ناموجود اشاره کنی.",
      en: "A foreign key is a column pointing to another table's primary key, creating the relationship: orders.user_id says which user each order belongs to — and the database refuses references to users that don't exist.",
    },
    analogy: {
      fa: "مثل شماره‌ی ملی روی قرارداد: قرارداد به شخص وصل می‌شود با همان شماره‌ای که در شناسنامه ثبت است؛ اگر شماره اشتباه باشد، سامانه قرارداد را ثبت نمی‌کند.",
      en: "Like a national ID printed on a contract: the contract binds to a person through the number registered in their records; a wrong number makes the system reject the contract.",
    },
    related: ["Primary Key", "Join", "Normalization"],
  },
  {
    term: "Normalization",
    fa: "نرمال‌سازی",
    category: "database",
    definition: {
      fa: "نرمال‌سازی یعنی چیدن داده طوری که هر حقیقت فقط یک‌جا ذخیره شود: نام شهر در جدول شهرها، نه تکرارشده در هزار سطر سفارش. از ناهماهنگی جلوگیری می‌کند ولی برای خواندن، جدول‌ها را دوباره باید به هم چسباند.",
      en: "Normalization means arranging data so every fact is stored in exactly one place: the city's name lives in a cities table, not repeated across a thousand order rows. It prevents inconsistency, at the cost of joining tables when reading.",
    },
    analogy: {
      fa: "مثل کتابخانه که هر کتاب یک نسخه دارد و از فهرست به آن ارجاع می‌شود، به‌جای ده‌ها کپی که به‌مرور از متن اصلی جدا می‌شوند.",
      en: "Like a library keeping one copy of each book referenced from catalogs — instead of dozens of copies that gradually drift from the original text.",
    },
    related: ["Primary Key", "Join", "ORM"],
  },
  {
    term: "ACID",
    fa: "چهار ضمانت تراکنش",
    category: "database",
    definition: {
      fa: "ACID چهار ضمانت تراکنش‌های امن است: اتمی (همه یا هیچ)، سازگار (قواعد همیشه برقرار)، ایزوله (تراکنش‌ها همدیگر را نمی‌بینند) و پایدار (بعد از تأیید، با خاموشی هم از بین نمی‌رود).",
      en: "ACID is the four guarantees of safe transactions: Atomic (all or nothing), Consistent (rules always hold), Isolated (transactions don't peek at each other), and Durable (once confirmed, it survives crashes).",
    },
    analogy: {
      fa: "مثل قانون دفترخانه‌ی اسناد: سند یا کامل ثبت می‌شود یا اصلاً (اتمی)؛ قوانین ثبت همیشه نقض نمی‌شوند (سازگار)؛ دو پرونده‌ی هم‌زمان تداخل نمی‌کنند (ایزوله) و بعد از ثبت، با آتش‌سوزی هم سند از بین نمی‌رود (پایدار).",
      en: "Like a notary office's rules: a deed is either fully registered or not at all (atomic); registry laws are never violated (consistent); two simultaneous files don't interfere (isolated); once stamped, even a fire can't erase it (durable).",
    },
    related: ["Transaction", "Replication", "NoSQL"],
  },
  {
    term: "Sharding",
    fa: "اشتراک‌گذاری افقی داده",
    category: "database",
    definition: {
      fa: "شاردینگ یعنی شکستن یک جدول غول‌پیکر به چند پایگاه داده‌ی جدا بر اساس کلیدی مثل شناسه کاربر: کاربران A تا M سرور یک، N تا Z سرور دو. بار تقسیم می‌شود ولی کوئری‌های بین‌شاردی گران می‌شوند.",
      en: "Sharding splits one giant table across several databases by a key like user id: users A–M on server one, N–Z on server two. Load divides nicely, but cross-shard queries become expensive.",
    },
    analogy: {
      fa: "مثل تقسیم یک آرشیو عظیم بین چند ساختمان بر اساس حرف اول نام خانوادگی: هر ساختمان سبک و سریع است؛ ولی پرونده‌ای که حروفش پراکنده است باید از چند جا جمع شود.",
      en: "Like splitting a giant archive across buildings by surname's first letter: each building stays light and fast, but files with scattered letters must be gathered from several places.",
    },
    related: ["Replication", "Index", "Load Balancer"],
  },
  {
    term: "Replication",
    fa: "همانندسازی",
    category: "database",
    definition: {
      fa: "همانندسازی یعنی نگه‌داشتن کپی زنده از پایگاه داده روی چند سرور: خواندن‌ها بین نسخه‌ها پخش می‌شود و اگر اصلی از کار افتاد، یکی از کپی‌ها جایش را می‌گیرد.",
      en: "Replication keeps live copies of the database on several servers: reads spread across copies, and if the primary dies, one of the copies takes over.",
    },
    analogy: {
      fa: "مثل شعبه‌های بانک که همه رکوردهای مشترک را دارند: مراجعه‌ها بین شعبه‌ها تقسیم می‌شود و تعطیلی یک شعبه، کل سیستم را زمین نمی‌زند.",
      en: "Like bank branches all holding the same records: visitors split across branches, and one branch's closure doesn't bring the system down.",
    },
    related: ["Sharding", "ACID", "Load Balancer"],
  },
];
