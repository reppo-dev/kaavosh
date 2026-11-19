import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (backend, extended 2). Merged into terms.ts → /glossary page. */
export const moreBackendTerms2: GlossaryTerm[] = [
  {
    term: "Node.js",
    fa: "نود جی‌اس",
    category: "backend",
    definition: {
      fa: "Node.js محیط اجرای جاوااسکریپت بیرون از مرورگر است: موتور V8 کروم را با ماژول‌هایی برای فایل، شبکه و سیستم‌عامل ترکیب می‌کند. مدل event-driven و non-blocking آن برای سرویس‌های پرترافیک I/O عالی است.",
      en: "Node.js is JavaScript runtime outside the browser: Chrome's V8 engine plus modules for files, networking and the OS. Its event-driven, non-blocking model shines for high-traffic I/O services.",
    },
    analogy: {
      fa: "مثل گارسونی حرفه‌ای که برای هر میز نمی‌ایستد تا غذا آماده شود؛ سفارش‌ها را می‌گیرد، آشپزخانه کار می‌کند و او بین میزها در گردش است — هیچ وقتی هدر نمی‌رود.",
      en: "Like a skilled waiter who never stands waiting for one kitchen order: takes orders, the kitchen cooks, and he keeps circulating between tables — zero idle time.",
    },
    related: ["Middleware", "Event Loop", "API"],
  },
  {
    term: "JVM",
    fa: "ماشین مجازی جاوا",
    category: "backend",
    definition: {
      fa: "JVM همان ماشینی است که بایت‌کد جاوا (و Kotlin/Scala) را اجرا می‌کند: «یک‌بار بنویس، همه‌جا اجرا کن» همین‌جا معنا پیدا می‌کند. GC، JIT compilation و مدیریت حافظه‌اش دلیل محبوبیت جاوا در سیستم‌های بزرگ است.",
      en: "The JVM is the machine that runs Java bytecode (and Kotlin/Scala): 'write once, run anywhere' literally means here. Its GC, JIT compilation and memory management made Java a giant-system favorite.",
    },
    analogy: {
      fa: "مثل یک برق‌adapter جهانی: کدت برای JVM نوشته می‌شود و JVM خودش با برقِ هر کشوری (ویندوز، لینوکس، سرور ابری) سازگار می‌شود.",
      en: "Like a universal power adapter: your code targets the JVM, and it adapts to any country's outlet (Windows, Linux, cloud servers).",
    },
    related: ["Compiler", "Garbage Collection", "Class"],
  },
  {
    term: "Garbage Collection",
    fa: "جمع‌آوری زباله",
    category: "backend",
    definition: {
      fa: "GC حافظه‌ای را که دیگر اشاره‌گری ندارد، خودکار آزاد می‌کند تا شما دستی free نکنید. الگوریتم‌هایش (مثل generational GC) بر اساس این واقعیت کار می‌کنند که بیشتر آبجکت‌ها کوتاه‌عمرند؛ نشت حافظه یعنی چیزی بی‌اشتیا هنوز به آن اشاره می‌کند.",
      en: "GC automatically frees memory no one references anymore, so you never free manually. Its algorithms (like generational GC) exploit the fact that most objects die young; a leak means something still points at dead data.",
    },
    analogy: {
      fa: "مثل خدمتکار هتلی که هر ساعت اتاق‌ها را چک می‌کند: هر وسایلی که صاحبش چک‌اوت کرده و کسی نگهش نداشته جمع می‌شود؛ ولی یک چمدانی که مهمان هنوز دستش است، برنمی‌دارد.",
      en: "Like a hotel housekeeper checking rooms hourly: anything checked out with no one holding it gets collected — but a bag a guest still grips stays.",
    },
    related: ["JVM", "Closure", "Node.js"],
  },
];
