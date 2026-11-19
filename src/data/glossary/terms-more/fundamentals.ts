import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (fundamentals, extended). Merged into terms.ts → /glossary page. */
export const moreFundamentalsTerms: GlossaryTerm[] = [
  {
    term: "Data Type",
    fa: "نوع داده",
    category: "fundamentals",
    definition: {
      fa: "نوع داده به کامپیوتر می‌گوید مقدار داخل متغیر از چه جنسی است: متن، عدد، درست/نادرست یا لیست. نوع، عملیات مجاز را تعیین می‌کند — روی عدد می‌توانید جمع بزنید، روی متن نه.",
      en: "A data type tells the computer what kind of value lives in a variable: text, number, true/false, or a list. The type defines which operations are legal — you can add numbers, not sentences.",
    },
    analogy: {
      fa: "مثل بخش‌بندی انبار: قفسه‌ی مایعات، قفسه‌ی شکسته‌شونده، قفسه‌ی مواد خوراکی. هر کالا به قفسه‌ی خودش می‌رود و هر قفسه قوانین جابه‌جایی خودش را دارد.",
      en: "Like warehouse zoning: a liquids shelf, a fragile shelf, a perishables shelf. Every item goes to its own zone and each zone has its own handling rules.",
    },
    related: ["Variable", "Array", "Object"],
  },
  {
    term: "Array",
    fa: "آرایه",
    category: "fundamentals",
    definition: {
      fa: "آرایه لیستی مرتب از چند مقدار زیر یک نام است: shoppingCart = [شیر، نان، پنیر]. به هر خانه با شماره‌اش (ایندکس، معمولاً از صفر) دسترسی می‌گیرید.",
      en: "An array is an ordered list of values under one name: shoppingCart = [milk, bread, cheese]. You reach each slot by its number (index, usually starting at zero).",
    },
    analogy: {
      fa: "مثل ردیف صندلی‌های سالن سینما: همه زیر یک ردیف‌اند و هر صندلی شماره دارد؛ با گفتن «ردیف ۵، صندلی ۲» مستقیم می‌رسید.",
      en: "Like a cinema row: all seats belong to one row and each has a number — 'row 5, seat 2' takes you straight there.",
    },
    related: ["Object", "Loop", "Data Type"],
  },
  {
    term: "Object",
    fa: "آبجکت",
    category: "fundamentals",
    definition: {
      fa: "آبجکت بسته‌ای از اطلاعات درباره‌ی یک چیز است، با جفت‌های کلید-مقدار: user = { name: علی، age: ۲۵, email: … }. به‌جای ده متغیر پراکنده، یک موجودیت مرتب دارید.",
      en: "An object bundles everything about one thing into key-value pairs: user = { name: 'Ali', age: 25, email: '…' }. Instead of ten scattered variables, you get one tidy entity.",
    },
    analogy: {
      fa: "مثل کارت پرسنلی: همه‌ی مشخصات یک نفر روی یک کارت است؛ هر فیلد یک برچسب دارد (نام، بخش، شماره تماس) و مقدارش کنارش نوشته شده.",
      en: "Like an employee badge: everything about one person on a single card, each field labeled (name, department, phone) with its value beside it.",
    },
    related: ["Class", "Array", "Data Type"],
  },
  {
    term: "Class",
    fa: "کلاس",
    category: "fundamentals",
    definition: {
      fa: "کلاس نقشه‌ی ساخت آبجکت‌هاست: چه فیلدها و چه رفتارهایی خواهند داشت. از یک کلاس User هر تعداد آبجکت کاربر واقعی می‌سازید، همه با همان شکل و قواعد.",
      en: "A class is the blueprint for building objects: which fields and behaviors they will have. From one User class you create countless real user objects, all sharing the same shape and rules.",
    },
    analogy: {
      fa: "مثل قالب کیک: یک قالب دارید و از هر بار خمیر، یک کیک هم‌شکل بیرون می‌آید؛ قالب همان کلاس و هر کیک یک آبجکت است.",
      en: "Like a cake mold: one mold, and every batch of batter produces an identically shaped cake — the mold is the class, each cake an object.",
    },
    related: ["Object", "Function", "Data Type"],
  },
  {
    term: "Recursion",
    fa: "بازگشت",
    category: "fundamentals",
    definition: {
      fa: "بازگشت یعنی تابعی که خودش را صدا می‌زند روی نسخه‌ی کوچک‌تری از مسئله، تا به حالت ساده‌ای برسد که جوابش معلوم است. مسیر پوشه‌ها یا محاسبه‌ی فاکتوریل کلاسیک آن است.",
      en: "Recursion is a function calling itself on a smaller version of the problem until it reaches a trivially known answer — like walking a folder tree or computing factorials.",
    },
    analogy: {
      fa: "مثل نگاه‌کردن داخل جعبه‌ی جعبه‌ها: هر بار جعبه‌ای را باز می‌کنید که خودش جعبه دارد؛ تا برسید به جعبه‌ای که فقط محتواست، نه جعبهٔ دیگر.",
      en: "Like opening a box of boxes: each box contains more boxes, until you reach one holding only contents — no box inside.",
    },
    related: ["Function", "Loop", "Algorithm"],
  },
  {
    term: "Compiler",
    fa: "کامپایلر",
    category: "fundamentals",
    definition: {
      fa: "کامپایلر کد شما را یک‌بار و کامل به زبان ماشین ترجمه می‌کند و خروجی اجرایی می‌دهد (مثل .exe). خطاها را قبل از اجرا می‌گیرد و برنامه‌ی نهایی سریع اجرا می‌شود.",
      en: "A compiler translates your entire code to machine language once, producing an executable (like an .exe). It catches errors before running, and the final program executes fast.",
    },
    analogy: {
      fa: "مثل مترجمی که کل کتاب را یک‌جا ترجمه و چاپ می‌کند؛ از آن به بعد هر کسی نسخه‌ی چاپی را بدون مترجم و با حداکثر سرعت می‌خواند.",
      en: "Like a translator who renders the whole book once and prints it: from then on everyone reads the printed copy at full speed, no interpreter needed.",
    },
    related: ["Interpreter", "Debugging", "Framework"],
  },
  {
    term: "Interpreter",
    fa: "مفسر",
    category: "fundamentals",
    definition: {
      fa: "مفسر کد را خط‌به‌خط همان لحظه اجرا می‌کند — بدون فایل خروجی. شروع سریع و تمرین آسان است؛ ولی خطاها موقع اجرا پیدا می‌شوند و سرعت خالص معمولاً کمتر از کد کامپایل‌شده است.",
      en: "An interpreter runs your code line by line, right away — no output file. Startup is instant and learning is easy, but errors surface during execution and raw speed is usually lower than compiled code.",
    },
    analogy: {
      fa: "مثل مترجم هم‌زمان کنفرانس: جمله‌به‌جمله ترجمه می‌کند و بلافاصله می‌شنوید؛ اما اگر وسط جمله اشتباه کند، همان لحظه شنیده می‌شود.",
      en: "Like a simultaneous interpreter at a conference: sentence by sentence, heard instantly — but a mid-sentence mistake is heard immediately too.",
    },
    related: ["Compiler", "Debugging", "Data Type"],
  },
  {
    term: "Framework",
    fa: "فریم‌ورک",
    category: "fundamentals",
    definition: {
      fa: "فریم‌ورک اسکلت آماده‌ی برنامه است: ساختار، جریان کار و ابزارهای رایج را خودش می‌چیند و شما خانه را درون قواعدش می‌سازید (React، Next.js، Django). کد شما را فریم‌ورک صدا می‌زند.",
      en: "A framework is a ready-made application skeleton: it provides structure, workflow and common tooling, and you build inside its rules (React, Next.js, Django). Your code is called by the framework.",
    },
    analogy: {
      fa: "مثل ساختن در یک مجتمع آماده: اسکلت، تأسیسات و آسانسور از قبل هست؛ شما فقط دیوارها و دکوراسیون را طبق قواعد مجموعه انجام می‌دهید.",
      en: "Like building inside a prepared complex: skeleton, utilities and elevators exist already; you add walls and decor following the complex's rules.",
    },
    related: ["Library", "Compiler", "Component"],
  },
  {
    term: "Library",
    fa: "کتابخانه",
    category: "fundamentals",
    definition: {
      fa: "کتابخانه مجموعه‌ای از کدهای آماده است که وقتی لازم شد صدا می‌زنید — برخلاف فریم‌ورک، کنترل اصلی دست شماست. مثلاً برای نمودار یا تاریخ، به‌جای نوشتن از صفر از کتابخانه استفاده می‌کنید.",
      en: "A library is a collection of ready-made code you call when needed — unlike a framework, you stay in control of the flow. Charts, dates, animations: you import a library instead of writing from scratch.",
    },
    analogy: {
      fa: "مثل کتابخانه‌ی واقعی: وقتی به یک اطلاعات خاص نیاز داری، کتابش را برمی‌داری و استفاده می‌کنی؛ زندگی روزمره‌ات همان است و هیچ‌کس به تو نمی‌گوید چه‌کاری کنی.",
      en: "Like a real library: when you need specific knowledge, you borrow that one book and use it — your daily life stays yours, nobody directs it.",
    },
    related: ["Framework", "API", "Open Source"],
  },
  {
    term: "Debugging",
    fa: "اشکال‌زدایی",
    category: "fundamentals",
    definition: {
      fa: "دیباگ یعنی پیدا کردن دلیل رفتار اشتباه کد و رفعش: با break point توقف می‌کنید، متغیرها را نگاه می‌کنید و گام‌به‌گام جلو می‌روید تا خطای منطقی پیدا شود.",
      en: "Debugging means finding why code misbehaves and fixing it: you pause at breakpoints, inspect variables and step through execution until the faulty assumption appears.",
    },
    analogy: {
      fa: "مثل کار پزشک: تشخیص قبل از درمان — علائم را می‌بینید (خطا)، آزمایش می‌دهید (لاگ و break point) و تا ریشه پیدا نشود، دارویی تجویز نمی‌کنید.",
      en: "Like a physician: diagnose before treating — read the symptoms (the error), run tests (logs and breakpoints), and never prescribe before finding the root cause.",
    },
    related: ["Compiler", "Interpreter", "Version Control"],
  },
  {
    term: "Version Control",
    fa: "کنترل نسخه",
    category: "fundamentals",
    definition: {
      fa: "کنترل نسخه (معروف‌ترینش Git) تاریخچه‌ی کامل تغییرات کد را نگه می‌دارد: هر تغییر با توضیح ثبت می‌شود، به روزهای قبل برمی‌گردید و چند نفر بدون له‌کردن کار همدیگر موازی کار می‌کنند.",
      en: "Version control (most famously Git) keeps the full history of code changes: every change is recorded with a message, you can return to any past day, and many people work in parallel without crushing each other's work.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی ثبت بازی شطرنج: هر حرکت با توضیح ثبت است؛ اگر ببازید، به هر موقعیت قبلی برمی‌گردید و حرکت دیگری امتحان می‌کنید.",
      en: "Like a chess game notation: every move is recorded; if you lose, you rewind to any earlier position and try a different move.",
    },
    related: ["Debugging", "CI/CD", "Open Source"],
  },
];
