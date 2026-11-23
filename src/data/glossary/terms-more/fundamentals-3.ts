import type { GlossaryTerm } from "../../schema";

/** Fundamentals glossary expansion — concurrency, memory model, functional concepts, OOP pillars & testing. Consumed by: src/data/glossary/terms.ts. */
export const moreFundamentalsTerms3: GlossaryTerm[] = [
  {
    term: "Concurrency vs Parallelism",
    fa: "هم‌زمانی در برابر موازی‌سازی",
    category: "fundamentals",
    definition: {
      fa: "هم‌زمانی (Concurrency) یعنی مدیریت و پیش‌بردن چند کار به‌صورت درهم‌تنیده روی یک یا چند هسته (ساختار)، اما موازی‌سازی (Parallelism) یعنی اجرای واقعی چند کار دقیقاً در یک لحظه روی چند هستهٔ پردازنده.",
      en: "Concurrency is structuring a program to make progress on multiple tasks interleaved over time; parallelism is physically executing multiple tasks at the exact same instant across multiple CPU cores.",
    },
    analogy: {
      fa: "یک آشپز که بین دو قابلمه جابه‌جا می‌شود هم‌زمانی دارد؛ دو آشپز که هم‌زمان دو غذا می‌پزند موازی‌سازی انجام می‌دهند.",
      en: "One chef juggling two pots is concurrency; two chefs cooking two dishes at the exact same second is parallelism.",
    },
    related: ["Process vs Thread", "Event Loop", "Thread Pool"],
  },
  {
    term: "Process vs Thread",
    fa: "فرایند در برابر نخ (Process vs Thread)",
    category: "fundamentals",
    definition: {
      fa: "Process یک برنامهٔ در حال اجرا با فضای حافظهٔ مستقل و ایزوله است؛ Thread کوچک‌ترین واحد اجرا درون یک Process است که حافظه را با سایر Threadهای همان Process به اشتراک می‌گذارد.",
      en: "A process is an isolated running program with its own memory space; a thread is a lightweight execution unit inside a process that shares memory with sibling threads.",
    },
    analogy: {
      fa: "Process مثل یک خانهٔ جداگانه با آشپزخانهٔ اختصاصی است؛ Threadها اعضای یک خانواده درون همان خانه هستند که از وسایل مشترک استفاده می‌کنند.",
      en: "A process is a separate house with its own kitchen; threads are family members inside the same house sharing the same rooms.",
    },
    related: ["Concurrency vs Parallelism", "Mutex", "Race Condition", "Thread Pool"],
  },
  {
    term: "Stack vs Heap",
    fa: "حافظهٔ پشته در برابر هیپ",
    category: "fundamentals",
    definition: {
      fa: "Stack حافظه‌ای سریع و مرتب برای فریم‌های فراخوانی توابع و متغیرهای محلی با عمر کوتاه است؛ Heap فضای بزرگ‌تر و پویا برای آبجکت‌ها و داده‌هایی است که اندازه‌شان در زمان اجرا مشخص می‌شود.",
      en: "The stack is fast, structured memory for function call frames and short-lived locals; the heap is larger, dynamic memory for objects whose size or lifetime is determined at runtime.",
    },
    analogy: {
      fa: "Stack مثل دستهٔ بشقاب‌های روی میز است که سریع از بالا می‌گذارید و برمی‌دارید؛ Heap مثل انبار بزرگی است که هر بسته را در فضای خالی دلخواه می‌چینید.",
      en: "The stack is a neat pile of plates on a counter; the heap is a big warehouse where boxes go wherever space fits.",
    },
    related: ["Call Stack", "Garbage Collection", "Pointer & Reference"],
  },
  {
    term: "Pointer & Reference",
    fa: "اشاره‌گر و ارجاع",
    category: "fundamentals",
    definition: {
      fa: "به‌جای کپی کردن خودِ داده، آدرس محل نگهداری آن در حافظه را نگه می‌دارند. در زبان‌هایی مثل C/C++ اشاره‌گر مستقیم با آدرس حافظه کار می‌کند و در زبان‌هایی مثل جاوااسکریپت آبجکت‌ها با ارجاع منتقل می‌شوند.",
      en: "Values that point to where data lives in memory rather than copying the data itself — explicit memory addresses in C/C++, or object references in JS, Java, and Python.",
    },
    analogy: {
      fa: "مثل دادن لینک یک سند Google Docs به‌جای فرستادن فایل کپی‌شده: هر کس ویرایش کند، همه همان سند واحد را می‌بینند.",
      en: "Like sharing a link to a document instead of emailing a copy: edits through the link change the same underlying file.",
    },
    related: ["Stack vs Heap", "Object", "Immutability"],
  },
  {
    term: "Immutability",
    fa: "تغییرناپذیری (Immutability)",
    category: "fundamentals",
    definition: {
      fa: "ویژگی داده‌ای که پس از ساخته شدن تغییر نمی‌کند؛ برای تغییر، یک نسخهٔ جدید ساخته می‌شود. این اصل باگ‌های ناشی از تغییر ناخواستهٔ وضعیت مشترک را کم می‌کند و تشخیص تغییر در React و Redux را سریع می‌سازد.",
      en: "Data that cannot be modified after creation — updates produce a new copy instead. It prevents accidental side effects in shared state and makes change detection fast in React and Redux.",
    },
    analogy: {
      fa: "مثل دفتر کل حسابداری با خودکار: عدد قبلی را پاک نمی‌کنید، یک سطر اصلاحی جدید می‌نویسید تا تاریخچه همیشه سالم بماند.",
      en: "Like a pen-and-ink ledger: you never erase past lines — you write a new entry so history stays trustworthy.",
    },
    related: ["Pure Function", "State", "Functional Programming"],
  },
  {
    term: "Pure Function",
    fa: "تابع خالص",
    category: "fundamentals",
    definition: {
      fa: "تابعی که دو شرط دارد: به ازای ورودی یکسان همیشه خروجی یکسان برمی‌گرداند و هیچ اثر جانبی (Side Effect) بیرونی مانند تغییر متغیر سراسری یا تماس شبکه ایجاد نمی‌کند.",
      en: "A function that always returns the same output for the same inputs and causes zero external side effects (no mutating globals, I/O, or random state).",
    },
    analogy: {
      fa: "مثل ماشین‌حساب ساده: ۲ + ۳ همیشه ۵ می‌شود و هیچ چیز دیگری را در محیط تغییر نمی‌دهد.",
      en: "Like a pocket calculator: 2 + 3 always gives 5 and never alters anything outside itself.",
    },
    related: ["Function", "Immutability", "Functional Programming", "Unit Testing"],
  },
  {
    term: "Functional Programming",
    fa: "برنامه‌نویسی تابعی",
    category: "fundamentals",
    definition: {
      fa: "پارادایم برنامه‌نویسی که بر ساخت نرم‌افزار با ترکیب توابع خالص، داده‌های تغییرناپذیر و توابع مرتبهٔ بالا (`map`، `filter`، `reduce`) به‌جای تغییر گام‌به‌گام وضعیت تأکید دارد.",
      en: "A programming paradigm emphasizing pure functions, immutable data, and function composition (map, filter, reduce) instead of mutating shared state step by step.",
    },
    analogy: {
      fa: "مثل خط نوار نقاله که هر ایستگاه قطعه را تبدیل می‌کند و تحویل ایستگاه بعدی می‌دهد بدون دستکاری ایستگاه‌های دیگر.",
      en: "Like an assembly conveyor where each station transforms an item and passes it along without touching other stations.",
    },
    related: ["Pure Function", "Immutability", "Closure", "Currying"],
  },
  {
    term: "Abstraction",
    fa: "انتزاع (Abstraction)",
    category: "fundamentals",
    definition: {
      fa: "پنهان کردن جزئیات پیچیدهٔ پیاده‌سازی و نمایش یک رابط ساده و معنادار به استفاده‌کننده، تا بتوان با سیستم‌های بزرگ بدون درگیر شدن با تمام جزئیات داخلی کار کرد.",
      en: "Hiding complex implementation details behind a clean, simple interface so callers focus on what something does rather than how it works internally.",
    },
    analogy: {
      fa: "مثل فرمان و پدال خودرو: برای رانندگی نیازی نیست جزئیات احتراق موتور یا جعبه‌دنده را بدانید.",
      en: "Like a car's steering wheel and pedals: you drive without needing to understand fuel injection or gear ratios.",
    },
    related: ["OOP", "Encapsulation", "Polymorphism", "API"],
  },
  {
    term: "Encapsulation",
    fa: "کپسوله‌سازی (Encapsulation)",
    category: "fundamentals",
    definition: {
      fa: "کنار هم قرار دادن داده‌ها و متدهای کار با آن داده‌ها درون یک واحد (کلاس یا ماژول) و محدود کردن دسترسی مستقیم بیرونی به وضعیت داخلی تا قواعد و اعتبار داده‌ها نقض نشود.",
      en: "Bundling data and the methods operating on it inside a single unit while restricting direct external access to internal state to protect invariants.",
    },
    analogy: {
      fa: "مثل کپسول دارو یا خودپرداز بانک: فقط از طریق دکمه‌های مجاز با حساب کار می‌کنید، نه دست بردن مستقیم در خزانه.",
      en: "Like an ATM: you interact only through safe buttons and rules, never reaching directly into the cash vault.",
    },
    related: ["OOP", "Class", "Abstraction", "Polymorphism"],
  },
  {
    term: "Polymorphism",
    fa: "چندریختی (Polymorphism)",
    category: "fundamentals",
    definition: {
      fa: "توانایی کار با انواع مختلف از طریق یک رابط مشترک، به‌طوری که هر نوع پیاده‌سازی خاص خودش از آن عملیات را اجرا کند (مثلاً فراخوانی `pay()` روی کارت بانکی، کیف پول یا رمزارز).",
      en: "The ability to interact with different types through a single shared interface, where each concrete type supplies its own behavior (e.g., calling pay() on card, wallet, or bank transfer).",
    },
    analogy: {
      fa: "مثل دکمهٔ «پخش» که هم روی ویدیو، هم موسیقی و هم پادکست کار می‌کند، اما هرکدام به روش خود اجرا می‌شوند.",
      en: "Like a single 'Play' button that works for video, music, and podcasts, each handling playback in its own way.",
    },
    related: ["OOP", "Abstraction", "SOLID Principles", "Design Pattern"],
  },
  {
    term: "Unit Testing",
    fa: "تست واحد (Unit Testing)",
    category: "fundamentals",
    definition: {
      fa: "آزمون خودکار کوچک‌ترین واحدهای کد (یک تابع، کلاس یا کامپوننت) به‌صورت ایزوله و سریع تا مطمئن شویم منطق هر بخش پس از تغییرات همچنان درست کار می‌کند.",
      en: "Automated testing of the smallest isolated pieces of code (functions, classes, or components) to verify logic quickly and catch regressions early.",
    },
    analogy: {
      fa: "مثل تست کردن تک‌تک شمع‌ها و ترمز خودرو پیش از مونتاژ کامل روی خط تولید.",
      en: "Like testing each spark plug and brake pad individually before assembling the full car.",
    },
    related: ["Integration Testing", "TDD", "Pure Function", "CI/CD"],
  },
  {
    term: "Integration Testing",
    fa: "تست یکپارچگی",
    category: "fundamentals",
    definition: {
      fa: "آزمون همکاری چندین ماژول یا لایه در کنار هم (مثلاً API همراه با دیتابیس واقعی یا سرویس احراز هویت) تا خطاهای موجود در مرز ارتباطی بخش‌ها کشف شود.",
      en: "Testing multiple modules or layers working together (such as an API connected to a real test database) to catch bugs at the boundaries between components.",
    },
    analogy: {
      fa: "مثل تست رانندگی کل ماشین پس از مونتاژ تا مطمئن شوید موتور، گیربکس و ترمز با هم هماهنگ کار می‌کنند.",
      en: "Like test-driving the assembled car to confirm the engine, gearbox, and brakes work harmoniously together.",
    },
    related: ["Unit Testing", "TDD", "CI/CD"],
  },
  {
    term: "Technical Debt",
    fa: "بدهی فنی",
    category: "fundamentals",
    definition: {
      fa: "هزینهٔ آینده‌ای که از انتخاب راه‌حل سریع و موقت به‌جای طراحی تمیز و پایدار به وجود می‌آید. مانند وام مالی، اگر به‌موقع بازپرداخت (ریفکتور) نشود، سرعت توسعه را به‌شدت کند می‌کند.",
      en: "The implied future cost of choosing a quick, messy shortcut today over a cleaner design. Like financial debt, left unpaid it accrues 'interest' that slows every future feature.",
    },
    analogy: {
      fa: "مثل چسب زدن لولهٔ آب به‌جای تعویض آن: امروز کار راه می‌افتد، اما هر ماه وقت بیشتری برای تعمیرهای اضطراری می‌برد.",
      en: "Like duct-taping a leaky pipe: it ships today, but costs growing maintenance effort every month until properly fixed.",
    },
    related: ["Clean Architecture", "SOLID Principles", "Unit Testing"],
  },
  {
    term: "Memory Management",
    fa: "مدیریت حافظه",
    category: "fundamentals",
    definition: {
      fa: "فرایند تخصیص حافظهٔ RAM هنگام ساخت داده‌ها و آزادسازی آن پس از پایان نیاز؛ به‌صورت خودکار (Garbage Collection)، شمارش ارجاع (ARC) یا دستی (C/Rust Ownership).",
      en: "The process of allocating RAM for program data and freeing it when no longer needed — via garbage collection, reference counting, or explicit ownership rules.",
    },
    analogy: {
      fa: "مثل مدیریت میزهای یک رستوران: به هر مهمان میز مناسب می‌دهید و به‌محض رفتنش میز را جمع می‌کنید تا مهمان بعدی بنشیند.",
      en: "Like managing tables in a restaurant: seat arriving guests appropriately and clear tables promptly once they leave.",
    },
    related: ["Garbage Collection", "Stack vs Heap", "Pointer & Reference"],
  },
];
