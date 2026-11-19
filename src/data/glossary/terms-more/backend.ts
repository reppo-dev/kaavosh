/** DATA FILE — Glossary terms (backend, extended). Merged into terms.ts → /glossary page. */
import type { GlossaryTerm } from "../../schema";

export const moreBackendTerms: GlossaryTerm[] = [
  {
    term: "HTTP",
    fa: "پروتکل انتقال ابرمتن",
    category: "backend",
    definition: {
      fa: "HTTP قواعد گفت‌وگوی مرورگر و سرور است: مرورگر می‌پرسد «این آدرس را می‌خواهم» و سرور جواب می‌دهد «بفرما»، «پیدا نشد» یا «اجازه نداری». هر درخواست یک متد دارد (GET برای خواندن، POST برای ساختن) و هر پاسخ یک کد وضعیت، مثل ۲۰۰ یا ۴۰۴.",
      en: "HTTP is the set of rules for conversation between browser and server: the browser asks \"I want this address\" and the server answers \"here you go\", \"not found\" or \"you don't have access\". Every request carries a method (GET to read, POST to create) and every response carries a status code, like 200 or 404.",
    },
    analogy: {
      fa: "مثل مکاتبه‌ی اداری با فرم استاندارد: درخواست روی برگه‌ی رسمی می‌آید و جواب هم با همان قالب برمی‌گردد؛ کد ۲۰۰ یعنی «انجام شد»، ۴۰۴ یعنی «چنین پرونده‌ای نداریم» و ۵۰۰ یعنی «دست خودمان خطا رفت».",
      en: "Like official correspondence on a standard form: the request arrives on a formal sheet and the reply comes back on the same template; code 200 means 'done', 404 means 'no such file', 500 means 'we messed up on our end'.",
    },
    related: ["REST", "Endpoint"],
  },
  {
    term: "REST",
    fa: "معماری REST",
    category: "backend",
    definition: {
      fa: "REST رایج‌ترین سبک طراحی API است: هر منبع یک آدرس خوانا دارد (/users/12) و متدهای HTTP کارها را انجام می‌دهند — GET می‌خواند، POST می‌سازد، PUT ویرایش می‌کند، DELETE حذف می‌کند. هر درخواست خودش کامل است و چیزی از درخواست قبلی به‌خاطر نمی‌سپارد.",
      en: "REST is the most common style for designing APIs: every resource gets a readable address (/users/12) and HTTP methods do the work — GET reads, POST creates, PUT updates, DELETE removes. Each request stands on its own and remembers nothing from the previous one.",
    },
    analogy: {
      fa: "مثل کمد بایگانی اداره: هر پرونده آدرس مشخصی دارد («کاربران، پرونده‌ی ۱۲») و روی هر کدام همان چهار کار استاندارد انجام می‌شود: خواندن، افزودن، ویرایش، حذف. هر بار مراجعه، مشخصات کامل را دوباره می‌آورید؛ کمد چیزی از دفعه‌ی قبل به یاد ندارد.",
      en: "Like an office filing cabinet: every folder has a clear address ('users, file 12') and the same four standard operations apply — read, add, edit, remove. Each visit you bring the full details again; the cabinet remembers nothing from last time.",
    },
    related: ["HTTP", "Endpoint", "GraphQL"],
  },
  {
    term: "GraphQL",
    fa: "گراف‌کیوال",
    category: "backend",
    definition: {
      fa: "GraphQL زبانی است که در آن کلاینت دقیقاً می‌گوید چه داده‌ای می‌خواهد: به‌جای چند endpoint با شکل ثابت، یک درخواست می‌فرستید و فیلدهای موردنیاز را داخل خودش لیست می‌کنید — نه فیلد اضافه، نه درخواست چندباره. سرور هم دقیقاً همان شکل را برمی‌گرداند.",
      en: "GraphQL is a language where the client states exactly which data it wants: instead of several fixed-shaped endpoints, you send one request listing the fields you need inside it — no extra fields, no repeated round-trips. The server returns precisely that shape.",
    },
    analogy: {
      fa: "مثل سفارش با برگه در کافه: به‌جای انتخاب بشقاب‌های ثابت منو که نصفش دور ریخته می‌شود، دقیق می‌نویسید «اسپرسو، کم‌شیر، بدون قند» و همان دقیق می‌رسد — یک پنجره‌ی سفارش برای همه‌ی نیازها.",
      en: "Like ordering with a slip at a café: instead of fixed platters from a menu, half of which gets thrown away, you write exactly 'espresso, light milk, no sugar' and that is exactly what arrives — one ordering window for every need.",
    },
    related: ["REST", "API"],
  },
  {
    term: "WebSocket",
    fa: "وب‌سوکت",
    category: "backend",
    definition: {
      fa: "WebSocket یک کانال ارتباطی دائمی بین مرورگر و سرور است: بعد از برقراری، هر دو طرف هر لحظه می‌توانند پیام بفرستند، بدون اینکه برای هر پیام اتصال از نو باز و بسته شود. برای چت، بازی آنلاین و قیمت لحظه‌ای بورس ساخته شده؛ هرجا سرور باید بی‌درنگ خبر بدهد، نه اینکه منتظر بماند کاربر بپرسد.",
      en: "A WebSocket is a permanent channel between browser and server: once established, both sides can send messages at any moment, without reopening the connection for each message. Built for chat, online games and live stock prices — anywhere the server must push news immediately instead of waiting for the user to ask.",
    },
    analogy: {
      fa: "مثل خط تلفنی که باز مانده: تا گوشی را نگذاشته‌اید، هر وقت حرفی داشتید می‌گویید و طرف مقابل هم همین‌طور — بدون شماره‌گیری برای هر جمله. HTTP عادی بیشتر شبیه ردوبدل‌کردن نامه است.",
      en: "Like a phone line left open: until someone hangs up, you speak whenever you have something to say, and so does the other side — no dialing per sentence. Plain HTTP is closer to exchanging letters.",
    },
    related: ["HTTP", "Latency"],
  },
  {
    term: "Cookie & Session",
    fa: "کوکی و نشست",
    category: "backend",
    definition: {
      fa: "کوکی فایل کوچکی است که سرور به مرورگر می‌سپارد و مرورگر در هر درخواست بعدی خودکار برمی‌گرداند؛ به همین ترتیب سایت شما را به یاد می‌آورد. Session رکورد سمت سرور است که با شناسه‌ی داخل کوکی به شما وصل می‌شود؛ سبد خرید و وضعیت لاگین معمولاً همان‌جا زندگی می‌کنند.",
      en: "A cookie is a small file the server leaves in your browser and the browser automatically sends back with every later request — that is how the site remembers you. A session is the server-side record linked to you through the ID inside the cookie; shopping carts and login state usually live there.",
    },
    analogy: {
      fa: "کوکی مثل دستبند باشگاه است که روی مچ می‌ماند و هر بار ورودی نشانش می‌دهید؛ session پرونده‌ی پشت میز با همان شماره‌ی دستبند است — ثبت کرده کدام کمد مال شماست و چقدر از اشترکتان باقی مانده.",
      en: "The cookie is like a gym wristband that stays on your arm and gets shown at every entrance; the session is the file at the front desk with the same wristband number — it records which locker is yours and how much of your membership remains.",
    },
    related: ["Authentication", "HTTP"],
  },
  {
    term: "Cache",
    fa: "حافظه‌ی نهان",
    category: "backend",
    definition: {
      fa: "Cache یعنی نگه‌داشتن نتیجه‌ی یک کار پرهزینه تا دفعه‌ی بعد به‌جای محاسبه‌ی دوباره، از حافظه گرفته شود. در وب، هم مرورگر تصاویر را کش می‌کند، هم سرور نتیجه‌ی کوئری‌ها را؛ نتیجه سرعت بیشتر و بار کمتر روی دیتابیس است. هزینه‌اش این است که داده‌ی کش‌شده ممکن است کمی کهنه باشد.",
      en: "Cache means keeping the result of an expensive job so that next time, instead of computing it again, you grab it from memory. On the web, both the browser caches images and the server caches query results — more speed, less load on the database. The price: cached data may be slightly stale.",
    },
    analogy: {
      fa: "مثل ادویه‌های روی قفسه‌ی کنار اجاق به‌جای انبار انتهای آشپزخانه: هر غذا با چند قدم آماده می‌شود؛ فقط باید یادتان باشد هر وقت کهنه شد، قفسه را تازه کنید.",
      en: "Like spices on the shelf beside the stove instead of the pantry at the far end of the kitchen: every dish comes together in a few steps — you just have to remember to refresh the shelf when they go stale.",
    },
    related: ["CDN", "Latency"],
  },
  {
    term: "Message Queue",
    fa: "صف پیام",
    category: "backend",
    definition: {
      fa: "Message Queue صندوقچه‌ای در میانه‌ی راه است که سرویس‌ها پیام‌هایشان را داخلش می‌گذارند و سرویس دیگر در فرصت خودش برمی‌دارد و پردازش می‌کند. فرستنده و گیرنده لازم نیست هم‌زمان روشن باشند؛ اگر گیرنده کرش کند، پیام‌ها در صف می‌مانند تا برگردد.",
      en: "A message queue is a mailbox in the middle of the road: services drop their messages into it and another service picks them up and processes them when it has time. Sender and receiver don't need to be online at the same moment; if the receiver crashes, the messages wait in the queue until it recovers.",
    },
    analogy: {
      fa: "مثل صندوق نامه‌های یک انجمن: نویسنده‌ها نامه را می‌اندازند و می‌روند سراغ کارشان؛ دبیر در فرصت خودش باز می‌کند و یکی‌یکی جواب می‌دهد. اگر دبیر یک هفته مرخصی برود، نامه‌ها گم نمی‌شوند — در صندوق منتظر می‌مانند.",
      en: "Like an organization's letterbox: writers drop their letters in and go back to work; the secretary opens the box at their own pace and answers one by one. If the secretary takes a week off, nothing is lost — the letters just wait.",
    },
    related: ["Microservices", "Idempotent"],
  },
  {
    term: "Microservices",
    fa: "میکروسرویس‌ها",
    category: "backend",
    definition: {
      fa: "میکروسرویس یعنی شکستن اپ بزرگ به سرویس‌های کوچکِ مستقل: سفارش، پرداخت، اعلان — هرکدام کد و دیتابیس خودش را دارد و جدا دیپلوی می‌شود. خرابی یک سرویس کل سیستم را زمین نمی‌زند و هر تیم با سرعت خودش جلو می‌رود؛ به‌قیمت سختیِ هماهنگیِ شبکه بین سرویس‌ها.",
      en: "Microservices means breaking a big app into small independent services: orders, payments, notifications — each with its own code and database, deployed separately. One service failing doesn't take the whole system down, and each team moves at its own pace; the price is the hard work of coordinating the network between services.",
    },
    analogy: {
      fa: "مثل بازار با ده‌ها مغازه‌ی مستقل به‌جای یک فروشگاه بزرگ: قصابی و لبنیاتی و نانوایی هرکدام دخل و ساعت کاری خودشان را دارند؛ اگر نانوایی تعطیل کند، قصابی سر کارش است. ولی خرید کامل یعنی رفتن به چند در و پرداخت چندبار.",
      en: "Like a market of many independent shops instead of one giant department store: butcher, dairy and bakery each keep their own till and hours; if the bakery closes, the butcher keeps working. But a full shopping trip means walking through several doors and paying several times.",
    },
    related: ["Message Queue", "Container"],
  },
  {
    term: "Webhook",
    fa: "وب‌هوک",
    category: "backend",
    definition: {
      fa: "Webhook یعنی «تا خبرم شد، صدا بزن»: به‌جای اینکه برنامه‌ی شما هر چند ثانیه از سرویس دیگر بپرسد «کار تمام شد؟»، آن سرویس خودش یک درخواست HTTP به آدرس شما می‌فرستد. پرداخت‌ها، گیت‌هاب و سرویس‌های پیام‌کوتاه همه این‌طور خبر می‌دهند.",
      en: "A webhook means \"call me when you know\": instead of your app polling another service every few seconds asking 'is it done yet?', that service sends an HTTP request to your address by itself. Payments, GitHub and SMS services all announce this way.",
    },
    analogy: {
      fa: "مثل رستورانی که به‌جای اینکه شما هر پنج دقیقه به آشپزخانه سر بزنید و بپرسید «غذا آماده است؟»، وقتی غذا آماده شد، خودشان به شماره‌تان زنگ می‌زنند تا بیایید؛ polling یعنی همان سرک‌کشیدن‌های مکرر به آشپزخانه.",
      en: "Like a restaurant that, instead of you peeking into the kitchen every five minutes asking 'is my food ready?', rings your number the moment the dish is up. Polling is those repeated peeks into the kitchen.",
    },
    related: ["HTTP", "Message Queue"],
  },
];
