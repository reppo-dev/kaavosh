import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (fundamentals, part 2). Merged into terms.ts → /glossary page. */
export const moreFundamentalsTerms2: GlossaryTerm[] = [
  {
    term: "JSON",
    fa: "جیسون",
    category: "fundamentals",
    definition: {
      fa: "JSON قالب متنی استاندارد تبادل داده است: کلید-مقدار در آکولاد، آرایه در براکت و رشته در گیومه دوتایی. زبان‌مستقل و خوانا برای انسان و ماشین است و زبان مشترک تقریباً همه‌ی APIهای وب شده است. محدودیت‌ها: کامنت ندارد، عدد بزرگ و تاریخ نوع بومی ندارد (به رشته تبدیل می‌شود).",
      en: "JSON is the standard text format for data exchange: key-value pairs in braces, arrays in brackets, strings in double quotes. Language-independent and readable by humans and machines, it's the common tongue of nearly every web API. Limits: no comments, no native big-integer or date type (those become strings).",
    },
    analogy: {
      fa: "مثل فرم سفارش با ساختار ثابت که هر رستورانی می‌فهمد: «نام: …، تعداد: …» — نه کسی ابهامی دارد نه نیازی به توضیح شفاهی است.",
      en: "Like a standard order form every restaurant understands: 'name: …, quantity: …' — no ambiguity, no verbal explaining.",
    },
    related: ["XML", "Serialization", "API", "Fetch API"],
  },
  {
    term: "OOP",
    fa: "برنامه‌نویسی شیءگرا",
    category: "fundamentals",
    definition: {
      fa: "برنامه‌نویسی شیءگرا جهان را به اشیاء مدل می‌کند که داده (فیلدها) و رفتار (متدها) را با هم حمل می‌کنند. چهار ستونش: کپسوله‌سازی (پنهان‌کاری جزئیات)، وراثت (بازاستفاده از والد)، چندریختی (همان فرمان، رفتار متفاوت) و انتزاع (نمایش ساده‌ی چیزهای پیچیده). OOP راه فکر کردن است، نه فقط سینتکس کلاس.",
      en: "Object-oriented programming models the world as objects carrying data (fields) and behavior (methods) together. Its four pillars: encapsulation (hide internals), inheritance (reuse the parent), polymorphism (same command, different behavior), abstraction (simple façades for complexity). OOP is a way of thinking, not just class syntax.",
    },
    analogy: {
      fa: "مثل ماشین: راننده فقط فرمان، پدال و دنده می‌بیند (انتزاع)؛ موتور زیر کاپوت قفل است (کپسوله‌سازی)؛ مدل‌های مختلف به پدال گاز جواب متفاوت می‌دهند (چندریختی) و هر مدل از طرح پایه ارث برده است.",
      en: "Like a car: the driver sees only wheel, pedals and gear (abstraction); the engine stays locked under the hood (encapsulation); different models respond differently to the same pedal (polymorphism); and each model inherits the base design.",
    },
    related: ["Class", "SOLID Principles", "Design Pattern", "Data Type"],
  },
  {
    term: "Design Pattern",
    fa: "الگوی طراحی",
    category: "fundamentals",
    definition: {
      fa: "الگوی طراحی راه‌حل آزموده و نام‌دار برای مسئله‌ی تکرارشونده‌ی طراحی است — نه کد آماده، بلکه نقشه‌ی فکری. سه خانواده‌ی کلاسیک: ساخت‌ی (Singleton، Factory، Builder)، ساختاری (Adapter، Decorator، Facade) و رفتاری (Observer، Strategy، Command). دانستن نام‌ها زبان مشترک تیم می‌سازد؛ اعمال اجباری‌شان کد اضافه می‌سازد.",
      en: "A design pattern is a named, battle-tested solution to a recurring design problem — not ready code, but a thinking template. Three classic families: creational (Singleton, Factory, Builder), structural (Adapter, Decorator, Facade) and behavioral (Observer, Strategy, Command). Knowing the names builds a team's shared language; forcing them everywhere builds bloat.",
    },
    analogy: {
      fa: "مثل دستورهای پخت استاندارد: برای «سس امولسیون» راه آزموده‌ای هست که هر آشپز با مواد محلی‌اش اجرا می‌کند — اسم مشترک باعث می‌شود «مایونز خانگی» را همه بفهمند.",
      en: "Like canonical recipes: for 'an emulsion sauce' there's a proven approach every chef adapts to local ingredients — the shared name lets everyone understand 'homemade mayo'.",
    },
    related: ["OOP", "SOLID Principles", "Repository Pattern"],
  },
  {
    term: "Call Stack",
    fa: "پشته‌ی فراخوانی",
    category: "fundamentals",
    definition: {
      fa: "پشته‌ی فراخوانی دفترچه‌ی «الان کجا هستیم؟» است: هر فراخوانی تابع یک فریم روی پشته می‌گذارد (پارامترها، متغیرهای محلی، آدرس بازگشت) و با return برداشته می‌شود. آخرین ورود، اولین خروج. خطای معروف stack overflow وقتی است که بازگشت عمیق پشته را پر کند — به همین دلیل در لاگ خطا، دنباله‌ی فریم‌ها می‌بینی.",
      en: "The call stack is the 'where are we now?' ledger: each function call pushes a frame (parameters, locals, return address) and pops it on return. Last in, first out. The famous stack overflow error happens when deep recursion fills the stack — which is why error logs show you a trail of frames.",
    },
    analogy: {
      fa: "مثل بشقاب‌های روی هم در کافهتریا: هر سفارش (فراخوانی) روی هم می‌گذاری و اولین بشقابی که برمی‌داری آخرین سفارش است.",
      en: "Like the plate stack in a cafeteria: each order (call) goes on top, and you always take the most recent one first.",
    },
    related: ["Recursion", "Function", "Event Loop", "Tail Recursion"],
  },
  {
    term: "Character Encoding",
    fa: "رمزگذاری نویسه",
    category: "fundamentals",
    definition: {
      fa: "رمزگذاری نویسه قرارداد تبدیل حروف به بایت است: ASCII فقط ۱۲۸ نویسه‌ی انگلیسی، UTF-8 هر نویسه‌ی یونیکد را با ۱ تا ۴ بایت (انگلیسی ۱ بایت، فارسی ۲ بایت) ذخیره می‌کند. اکوسیستم وب استاندارد UTF-8 است؛ قاطی کردن رمزگذاری‌ها همان «متن‌های عجیب» معروف � است.",
      en: "Character encoding is the convention turning letters into bytes: ASCII covers only 128 English characters; UTF-8 stores every Unicode character in 1–4 bytes (English 1 byte, Persian 2). The web standardizes on UTF-8; mixing encodings produces the famous � mojibake.",
    },
    analogy: {
      fa: "مثل کد مخفی بین دو دوست: اگر قرار باشد «هر حرف، شماره‌ی الفبا» ولی یکی با شماره‌ی تلفنی بخواند، پیام بی‌معنا می‌شود — فرستنده و گیرنده باید قرارداد یکی باشند.",
      en: "Like a secret code between friends: if one writes 'letter = alphabet position' and the other reads it as phone digits, the message becomes gibberish — sender and receiver must agree on the convention.",
    },
    related: [],
  },
  {
    term: "Regular Expression",
    fa: "عبارت باقاعده",
    category: "fundamentals",
    definition: {
      fa: "Regular Expression (regex) زبان الگو برای جست‌وجو و دستکاری متن است: \d رقم، [a-z]+ چند حرف کوچک، ^ و $ مرز شروع/پایان. برای اعتبارسنجی (ایمیل، شماره تلفن)، استخراج و جایگزینی به کار می‌رود؛ الگوهای پیچیده‌اش ناخوانا می‌شوند و برخی (nested) به backtracking نمایی می‌رسند — برای ساختار واقعی، parser بنویس.",
      en: "A regular expression (regex) is a pattern language for searching and reshaping text: \d digit, [a-z]+ lowercase run, ^ and $ start/end anchors. It powers validation (email, phone), extraction and replacement; complex patterns turn unreadable and pathological ones hit exponential backtracking — for real structure, write a parser.",
    },
    analogy: {
      fa: "مثل قالب فلزی حروف: هر الگو قالبی است که رشته‌ها از آن رد می‌شوند — هر چه داخل قالب جا شود «مچ» است.",
      en: "Like a letter stencil: each pattern is a cut-out template; whatever fits through the holes is a 'match'.",
    },
    related: ["Validation"],
  },
  {
    term: "Validation",
    fa: "اعتبارسنجی",
    category: "fundamentals",
    definition: {
      fa: "اعتبارسنجی چک کردن ورودی قبل از استفاده است: فرمت درست، محدوده‌ی مجاز، فیلدهای اجباری. قانون طلایی: هر دو سمت — سمت کلاینت برای تجربه‌ی کاربر سریع و سمت سرور برای امنیت (چون کلاینت همیشه قابل دور زدن است). کتابخانه‌های schema (مثل zod) قرارداد واحدی برای هر دو سمت می‌دهند.",
      en: "Validation checks input before use: correct format, allowed range, required fields. Golden rule: do it on both sides — client-side for fast UX, server-side for security (the client can always be bypassed). Schema libraries (like zod) give both ends one shared contract.",
    },
    analogy: {
      fa: "مثل گیت امنیتی فرودگاه: چک اول (کلاینت) صف را سریع می‌کند، اما چک اصلی (سرور) جایی است که آشکار می‌شود چه کسی چیز ممنوعه گذاشته.",
      en: "Like airport security: the first check (client) speeds up the queue, but the authoritative check (server) is where contraband actually gets caught.",
    },
    related: ["Regular Expression"],
  },
];
