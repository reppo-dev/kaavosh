import type { GlossaryTerm } from "../schema";
import { moreFundamentalsTerms } from "./terms-more/fundamentals";
import { moreFundamentalsTerms2 } from "./terms-more/fundamentals-2";
import { moreFrontendTerms } from "./terms-more/frontend";
import { moreFrontendTerms2 } from "./terms-more/frontend-2";
import { moreFrontendTerms3 } from "./terms-more/frontend-3";
import { moreBackendTerms } from "./terms-more/backend";
import { moreBackendTerms2 } from "./terms-more/backend-2";
import { moreBackendTerms3 } from "./terms-more/backend-3";
import { moreDatabaseTerms } from "./terms-more/database";
import { moreDatabaseTerms2 } from "./terms-more/database-2";
import { moreDevopsTerms } from "./terms-more/devops";
import { moreDevopsTerms2 } from "./terms-more/devops-2";
import { moreDevopsTerms3 } from "./terms-more/devops-3";
import { moreSecurityTerms } from "./terms-more/security";
import { moreSecurityTerms2 } from "./terms-more/security-2";
import { moreNetworkingTerms } from "./terms-more/networking";
import { moreNetworkingTerms2 } from "./terms-more/networking-2";
import { moreMobileTerms } from "./terms-more/mobile";
import { moreMobileTerms2 } from "./terms-more/mobile-2";
import { moreAlgorithmsTerms } from "./terms-more/algorithms";
import { moreAlgorithmsTerms2 } from "./terms-more/algorithms-2";
import { moreAlgorithmsTerms3 } from "./terms-more/algorithms-3";
import { moreSystemDesignTerms } from "./terms-more/system-design";
import { moreSystemDesignTerms2 } from "./terms-more/system-design-2";
import { moreAiTerms } from "./terms-more/ai";
import { moreAiTerms2 } from "./terms-more/ai-2";
import { moreAiTerms3 } from "./terms-more/ai-3";

/**
 * DATA FILE — Glossary terms. Consumed by: /glossary searchable cards grid + inline term tooltips.
 * Structure: the 42 core terms below + per-category extension files in terms-more/.
 * Total coverage: ~370 terms across 11 categories (v4: mined from the interview bank Q&A).
 */
const coreGlossaryTerms: GlossaryTerm[] = [
  /* ── fundamentals ─────────────────────────────────────────────── */
  {
    term: "Variable",
    fa: "متغیر",
    category: "fundamentals",
    definition: {
      fa: "متغیر یک ظرفِ برچسب‌دار در حافظه است که مقداری را نگه می‌دارد تا بعداً استفاده کنید؛ مثل جعبه‌ای به نام userAge که عدد ۲۵ داخلش است. در طول برنامه می‌توانید محتوایش را عوض کنید ولی برچسبش همان می‌ماند.",
      en: "A variable is a labeled container in memory that holds a value for later use — like a box named userAge containing 25. You can change what's inside during the program, but the label stays the same.",
    },
    analogy: {
      fa: "مثل جعبه‌های قفسه‌خانه با برچسب: اسم روی جعبه ثابت است، ولی محتوایش را می‌توانید هر روز عوض کنید.",
      en: "Like labeled boxes on a shelf: the sticker on the box never changes, but you can swap the contents any day.",
    },
    related: ["Function", "Loop"],
  },
  {
    term: "Function",
    fa: "تابع",
    category: "fundamentals",
    definition: {
      fa: "تابع یک بلوک کدِ بسته‌بندی‌شده است که یک کار مشخص انجام می‌دهد و می‌تواند ورودی (پارامتر) بگیرد و خروجی برگرداند. یک‌بار می‌نویسید و هر جا لازم شد صدا می‌زنید، به‌جای تکرار کد.",
      en: "A function is a packaged block of code that performs one specific job, can take inputs (parameters) and return an output. You write it once and call it wherever needed instead of repeating code.",
    },
    analogy: {
      fa: "مثل ماشین کاپوچینوساز: دکمه‌اش را می‌زنید (صدا زدن تابع)، قهوه و شیر می‌ریزید (پارامترها) و نوشیدنی آماده می‌گیرید (خروجی) — بدون دانستن جزئیات داخلش.",
      en: "Like a coffee machine: press the button (call it), feed beans and milk (parameters), get a drink back (output) — without ever needing to know the internals.",
    },
    related: ["Variable", "Algorithm"],
  },
  {
    term: "Loop",
    fa: "حلقه",
    category: "fundamentals",
    definition: {
      fa: "حلقه به کامپیوتر می‌گوید یک کار را چند بار تکرار کند تا شرط تمام شود: «برای هر محصول در سبد، قیمت را جمع کن». بدون حلقه باید همان کد را هزار بار کپی می‌کردید.",
      en: "A loop tells the computer to repeat a task until a condition ends it: 'for each item in the cart, add its price'. Without loops you'd copy-paste the same code a thousand times.",
    },
    analogy: {
      fa: "مثل ورق‌زدن کارت‌های یک دست: تا آخر دست، هر کارت را یکی‌یکی نگاه می‌کنید و بعد می‌ایستید.",
      en: "Like flipping through a deck of cards: you examine each one until the deck runs out, then stop.",
    },
    related: ["Function", "Array"],
  },
  {
    term: "API",
    fa: "رابط برنامه‌نویسی",
    category: "fundamentals",
    definition: {
      fa: "API یک قرارداد ارتباطی بین دو نرم‌افزار است: «اگر این آدرس را با این اطلاعات صدا بزنی، من این داده را به این شکل می‌دهم». اپ هواشنما شما از API سرویس هواشناسی داده می‌گیرد، نه از ماهواره خودش.",
      en: "An API is a communication contract between two programs: 'call this address with this information and I'll return this data in this shape'. Your weather app gets data from a weather service's API, not from its own satellite.",
    },
    analogy: {
      fa: "مثل منوی رستوران: شما سفارش می‌دهید (درخواست) و آشپزخانه غذا می‌آورد (پاسخ)؛ لازم نیست وارد آشپزخانه شوید یا دستور غذا را بلد باشید.",
      en: "Like a restaurant menu: you place an order (request) and the kitchen brings the dish (response) — you never need to enter the kitchen or know the recipe.",
    },
    related: ["Endpoint", "Middleware"],
  },
  {
    term: "Algorithm",
    fa: "الگوریتم",
    category: "fundamentals",
    definition: {
      fa: "الگوریتم یک دستورغذای گام‌به‌گام برای حل یک مسئله است: ورودی مشخص، مراحل مشخص، خروجی مشخص. مرتب‌کردن لیست یا یافتن کوتاه‌ترین مسیر، هرکدام الگوریتم خودشان را دارند و بعضی‌ها به‌مراتب سریع‌ترند.",
      en: "An algorithm is a step-by-step recipe for solving a problem: defined input, defined steps, defined output. Sorting a list or finding the shortest route each has its own algorithms — and some are dramatically faster than others.",
    },
    analogy: {
      fa: "دو نفر می‌خواهند در یک قفسه‌ی ۱۰۰۰تایی کتابی را پیدا کنند: یکی از شماره ۱ ورق می‌زند، دیگری وسط را باز می‌کند و به حرف اول نگاه می‌کند (جست‌وجوی دودویی). دومی معمولاً چند برابر زودتر می‌رسد.",
      en: "Two people search a 1000-page book: one flips from page 1; the other opens the middle and checks the first letter (binary search). The second usually arrives far sooner.",
    },
    related: ["Function", "Loop"],
  },
  {
    term: "Open Source",
    fa: "متن‌باز",
    category: "fundamentals",
    definition: {
      fa: "نرم‌افزار متن‌باز یعنی کدش عمومی است: هرکسی می‌تواند بخواند، استفاده کند و بهبودش دهد. React و Linux و VS Code همه متن‌بازند؛ هزاران برنامه‌نویس ناشناس عملاً با شما همکاری می‌کنند.",
      en: "Open-source software means its code is public: anyone can read it, use it and improve it. React, Linux and VS Code are all open source — thousands of anonymous developers effectively collaborate with you.",
    },
    analogy: {
      fa: "مثل دستور غذایی خانوادگی که به‌جای قفل‌کردن در گاوصندوق، همه‌جا پخش می‌شود؛ هر کسی که آن را بهتر کند، به‌اشتراک می‌گذارد و دستور همگانی بهتر می‌شود.",
      en: "Like a family recipe shared publicly instead of locked in a vault: everyone who improves it shares it back, and the common recipe keeps getting better.",
    },
    related: ["API", "Version Control"],
  },

  /* ── frontend ─────────────────────────────────────────────────── */
  {
    term: "DOM",
    fa: "مدل اشیای سند",
    category: "frontend",
    definition: {
      fa: "DOM نمایش زنده و شاخه‌ای مرورگر از صفحه است: هر تگ HTML یک گره می‌شود و جاوااسکریپت می‌تواند گره‌ها را بخواند، عوض کند، حذف یا اضافه کند. آنچه کاربر می‌بیند، بازتاب همین درخت است.",
      en: "The DOM is the browser's live, tree-shaped representation of a page: every HTML tag becomes a node, and JavaScript can read, change, add or remove nodes. What the user sees is a reflection of this tree.",
    },
    analogy: {
      fa: "مثل شجره‌نامه‌ی خانواده که روی تخته‌ی وایت‌برد است: هر اسم یک برگه است؛ پاک‌کردن یا اضافه‌کردن یک برگه، فوراً شجره را عوض می‌کند — و صفحه هم همین‌طور.",
      en: "Like a family tree drawn on a whiteboard: each name is a sticky note; adding or removing one instantly reshapes the tree — and the page behaves the same way.",
    },
    related: ["Virtual DOM", "Component"],
  },
  {
    term: "Component",
    fa: "کامپوننت",
    category: "frontend",
    definition: {
      fa: "کامپوننت قطعه‌ای قابل‌استفاده‌مجدد از رابط کاربری است: HTML و منطق و استایلش در یک واحد. دکمه‌ی «افزودن به سبد» را یک‌بار می‌سازید و در ده صفحه همان را می‌گذارید.",
      en: "A component is a reusable piece of UI: its markup, logic and styles bundled into one unit. Build the 'Add to cart' button once and place the same one on ten pages.",
    },
    analogy: {
      fa: "مثل قطعات لگو: یک قطعه‌ی پنجره می‌سازید و در هر ساختمانی که لازم شد می‌چسبانیدش — هم‌شکل، هم‌رفتار.",
      en: "Like Lego bricks: build one window piece and snap it into any building — same shape, same behavior, every time.",
    },
    related: ["State", "Virtual DOM"],
  },
  {
    term: "State",
    fa: "وضعیت",
    category: "frontend",
    definition: {
      fa: "State حافظه‌ی لحظه‌ایِ یک کامپوننت است: متن تایپ‌شده در جست‌وجو، باز بودن منو، تعداد سبد خرید. وقتی state عوض می‌شود، رابط کاربری هم به‌طور خودکار به‌روز می‌شود.",
      en: "State is a component's momentary memory: the text typed in search, whether a menu is open, the cart count. When state changes, the UI updates automatically to match.",
    },
    analogy: {
      fa: "مثل تابلوی سفارش کافه: چیزی که روی آن نوشته شده، همان است که باریستا آماده می‌کند؛ اگر تابلو عوض شود، سفارش هم عوض می‌شود.",
      en: "Like a café's order board: whatever is written on it is what the barista makes; change the board and the order changes with it.",
    },
    related: ["Component", "Props"],
  },
  {
    term: "Responsive Design",
    fa: "طراحی واکنش‌گرا",
    category: "frontend",
    definition: {
      fa: "طراحی واکنش‌گرا یعنی یک صفحه که در هر سایز — موبایل، تبلت، مانیتور — خودش را می‌چیند تا خوب دیده شود: ستون‌ها روی هم می‌افتند، فونت‌ها تنظیم می‌شوند، منو جمع می‌شود.",
      en: "Responsive design means one page that rearranges itself for any size — phone, tablet, monitor: columns stack, fonts adjust, menus collapse.",
    },
    analogy: {
      fa: "مثل آب که شکل ظرفش را می‌گیرد: همان محتوا، ولی در لیوان باریک و در بشقاب پهن، هر دو خوب «نشسته» است.",
      en: "Like water taking its container's shape: the same content, sitting comfortably in a narrow glass or a wide plate.",
    },
    related: ["DOM", "CSS"],
  },
  {
    term: "Virtual DOM",
    fa: "DOM مجازی",
    category: "frontend",
    definition: {
      fa: "Virtual DOM یک کپی سبک از درخت صفحه در حافظه است که ری‌اکت با آن بازی می‌کند: تغییر را اول روی کپی اعمال می‌کند، با نسخه‌ی قبل مقایسه می‌کند و فقط اختلاف‌ها را به DOM واقعی می‌دهد.",
      en: "The Virtual DOM is a lightweight in-memory copy of the page tree that React plays with: it applies changes to the copy, diffs it against the previous version, and hands only the differences to the real DOM.",
    },
    analogy: {
      fa: "مثل ویرایش نقشه روی کاغذ شفاف قبل از خط‌زدن روی دیوار: اول روی کاغذ حساب می‌کنید چه تغییری لازم است، بعد فقط همان چند خط را روی دیوار می‌کشید.",
      en: "Like sketching edits on tracing paper before marking the wall: work out exactly what changes on paper, then draw only those few lines on the real wall.",
    },
    related: ["DOM", "Component"],
  },
  {
    term: "SSR",
    fa: "رندر سمت سرور",
    category: "frontend",
    definition: {
      fa: "SSR یعنی HTML صفحه در سرور ساخته و آماده فرستاده می‌شود، نه اینکه بعد از دانلود جاوااسکریپت در مرورگر ساخته شود. نتیجه: اولین دیدن صفحه سریع‌تر و سئو بهتر، چون ربات‌ها هم محتوا را همان اول می‌بینند.",
      en: "SSR means the page's HTML is built on the server and sent ready-made, instead of being assembled in the browser after JavaScript downloads. Result: a faster first paint and better SEO, since crawlers see the content immediately.",
    },
    analogy: {
      fa: "مثل پیتزایی که در رستوران کامل پخته و گرم تحویل می‌دهید، به‌جای مواد اولیه با یک اجاق دست‌دوم که مهمان خودش باید در آن بپزد.",
      en: "Like receiving a pizza fully baked from the restaurant, rather than raw ingredients plus a second-hand oven the guest must cook in.",
    },
    related: ["Component", "Hydration"],
  },

  /* ── backend ──────────────────────────────────────────────────── */
  {
    term: "Endpoint",
    fa: "نقطه‌ی اتصال",
    category: "backend",
    definition: {
      fa: "Endpoint یک آدرس مشخص روی سرور است که عملیاتی را انجام می‌دهد: POST /orders یعنی «سفارش بساز». هر endpoint یک قرارداد دارد: چه ورودی می‌خواهد، چه خروجی می‌دهد، چه خطاهایی ممکن است.",
      en: "An endpoint is a specific address on a server that performs an operation: POST /orders means 'create an order'. Each endpoint has a contract: what input it takes, what it returns, which errors are possible.",
    },
    analogy: {
      fa: "مثل پنجره‌های مختلف بانک: پنجره‌ی ۱ افتتاح حساب، پنجره‌ی ۲ واریز. هر پنجره مدارک مشخصی می‌خواهد و کار مشخصی می‌کند.",
      en: "Like bank teller windows: window 1 opens accounts, window 2 takes deposits. Each window asks for specific documents and performs one job.",
    },
    related: ["API", "Middleware"],
  },
  {
    term: "Middleware",
    fa: "میان‌افزار",
    category: "backend",
    definition: {
      fa: "Middleware تابعی است که قبل از رسیدن درخواست به مقصد اصلی، وسط راه آن را می‌گیرد: چک‌کردن لاگین، لاگ‌زدن، محدودسازی تعداد درخواست. زنجیره‌ای از بازرسی‌ها روی مسیر هر درخواست.",
      en: "A middleware is a function that intercepts a request on its way to the main handler: checking login, writing logs, rate limiting. A chain of checkpoints on every request's path.",
    },
    analogy: {
      fa: "مثل بازرسی‌های فرودگاه قبل از دروازه‌ی سوارشدن: چک پاسپورت، چک بوردینگ‌پس، اسکن چمدان — هرکدام یکی از middlewareها؛ اگر یکی رد نکند، به پرواز نمی‌رسید.",
      en: "Like airport security before boarding: passport check, boarding-pass check, luggage scan — each one a middleware; fail one and you never reach the gate.",
    },
    related: ["Endpoint", "Authentication"],
  },
  {
    term: "Authentication",
    fa: "احراز هویت",
    category: "backend",
    definition: {
      fa: "احراز هویت یعنی اثبات اینکه «تو همانی هستی که می‌گویی»: با پسورد، توکن یا کلید. بعد از احراز هویت، سیستم می‌داند این درخواست متعلق به کدام کاربر است.",
      en: "Authentication means proving 'you are who you claim to be': with a password, token or key. Once authenticated, the system knows which user a request belongs to.",
    },
    analogy: {
      fa: "مثل پارکینگ مجهز: پلاک‌خوان دور ورودی فقط اجازه‌ی ورود می‌دهد؛ اینکه بعداً در کدام طبقه پارک کنید ماجرا دیگری است.",
      en: "Like a smart parking gate: the plate reader only lets you in; where you're allowed to park afterwards is a different question.",
    },
    related: ["Authorization", "JWT"],
  },
  {
    term: "Authorization",
    fa: "مجوزدهی",
    category: "backend",
    definition: {
      fa: "مجوزدهی یعنی تعیین اینکه کاربرِ شناخته‌شده چه‌کارهای را اجازه دارد بکند: مشتری می‌تواند سفارش خودش را ببیند، ولی سفارش دیگران را نه؛ ادمین می‌تواند حذف کند.",
      en: "Authorization decides what an already-identified user is allowed to do: a customer may view their own order but not others'; an admin may delete.",
    },
    analogy: {
      fa: "بعد از اینکه نگهبان هتل شما را شناخت (احراز هویت)، کلید اتاق شما فقط در اتاق خودتان و لابی باز می‌کند، نه در طبقه‌ی بقیه (مجوزدهی).",
      en: "After the hotel guard recognizes you (authentication), your room key opens your room and the lobby — not other guests' floors (authorization).",
    },
    related: ["Authentication", "JWT"],
  },
  {
    term: "Rate Limiting",
    fa: "محدودسازی نرخ",
    category: "backend",
    definition: {
      fa: "محدودسازی نرخ یعنی سقف درخواست برای هر کاربر/کلید در بازه‌ی زمانی: «حداکثر ۱۰۰ درخواست در دقیقه». از غرق‌شدن سرور توسط اسکریپت‌ها یا اشتباه حلقه‌های بی‌نهایت جلوگیری می‌کند.",
      en: "Rate limiting sets a cap on requests per user/key per time window: 'max 100 requests per minute'. It keeps scripts, bugs and loops from drowning your server.",
    },
    analogy: {
      fa: "مثل محدودیت خرید روزانه‌ی نان در روزهای کمبود: هر کس حداکثر دو قرص — تا همه‌ی صف به‌اندازه‌ی خودش نان ببرد و یکی همه را با بار نکشد.",
      en: "Like rationing bread: each person takes at most two loaves so the whole queue gets its share and no one hauls away everything at once.",
    },
    related: ["Endpoint", "API"],
  },
  {
    term: "Idempotent",
    fa: "توان‌همسان",
    category: "backend",
    definition: {
      fa: "عملیات idempotent اگر چند بار اجرا شود، همان اثر یک بار را دارد: دوبار زدن دکمه‌ی پرداخت نباید دو بار پول کم کند. در APIها و صف‌ها حیاتی است، چون تکرار درخواست در شبکه طبیعی است.",
      en: "An idempotent operation has the same effect when run multiple times as when run once: hitting 'pay' twice must not charge twice. Vital in APIs and queues, because network retries are normal.",
    },
    analogy: {
      fa: "دکمه‌ی آسانسور: هرچقدر هم به آن فشار بدهید، آسانسور فقط یک‌بار می‌آید. دکمه‌ی ضربه‌زنی زنگ در اما سریع می‌شود، چون هر فشار یک ضرب جدا ثبت می‌کند.",
      en: "An elevator button: press it ten times, the elevator still comes once. A doorbell that rings per press is the opposite.",
    },
    related: ["Endpoint", "API"],
  },

  /* ── database ─────────────────────────────────────────────────── */
  {
    term: "Index",
    fa: "ایندکس",
    category: "database",
    definition: {
      fa: "ایندکس ساختار جست‌وجوی مرتبِ کنار جدول است که به‌جای گشتن در همه‌ی سطرها، مستقیم به سطرهای درست می‌پرد. هزینه‌اش فضای بیشتر و نوشتن کمی کندتر است.",
      en: "An index is an ordered lookup structure beside the table that jumps straight to matching rows instead of scanning everything. The price: extra storage and slightly slower writes.",
    },
    analogy: {
      fa: "مثل فهرست آخر کتاب: به‌جای ورق‌زدن ۵۰۰ صفحه، مستقیم می‌روید سراغ صفحه‌ی درست.",
      en: "Like the index at the back of a textbook: instead of flipping 500 pages, you jump straight to the right page.",
    },
    related: ["Join", "Transaction"],
  },
  {
    term: "Join",
    fa: "پیوند",
    category: "database",
    definition: {
      fa: "Join دو جدول را بر اساس ستون مشترک به هم می‌چسباند: جدول «سفارش‌ها» با جدول «کاربران» روی شناسه‌ی کاربر پیوند می‌خورد تا اسم خریدار کنار هر سفارش بیاید.",
      en: "A join snaps two tables together on a shared column: 'orders' joined with 'users' on user id puts the buyer's name beside each order.",
    },
    analogy: {
      fa: "مثل دو لیست دبیرستانی که با شماره‌ی دانش‌آموزی به هم می‌رسند: لیست نمرات و لیست نام‌ها؛ روی شماره که جور شوند، یک جدول کامل می‌شود.",
      en: "Like matching two school lists by student number: a grades list and a names list merge into one complete table.",
    },
    related: ["Index", "Transaction"],
  },
  {
    term: "Transaction",
    fa: "تراکنش",
    category: "database",
    definition: {
      fa: "تراکنش گروهی از عملیات است که «همه با هم» یا «هیچ‌کدام» اجرا می‌شوند: انتقال پول یعنی کم‌کردن از یک حساب و اضافه‌کردن به دیگری؛ اگر دومی شکست بخورد، اولی هم برمی‌گردد.",
      en: "A transaction is a group of operations that either all happen or none do: transferring money means subtracting from one account and adding to another; if the second step fails, the first rolls back.",
    },
    analogy: {
      fa: "مثل انتقال وسایل خانه: یا همه‌ی جعبه‌ها از خانه‌ی قدیم به جدید می‌رسند، یا اگر باربری وسط راه بریزد، قرار است همه به خانه‌ی اول برگردند.",
      en: "Like moving house: either every box arrives at the new place, or if the truck breaks down mid-route, everything goes back to the old one.",
    },
    related: ["Join", "Migration"],
  },
  {
    term: "Migration",
    fa: "مهاجرت",
    category: "database",
    definition: {
      fa: "Migration اسکریپت‌های نسخه‌پذیر تغییر ساختار دیتابیس است: «جدول orders اضافه شد»، «ستون phone به users اضافه شد». هر تغییری ثبت می‌شود تا همه‌ی محیط‌ها (تیم، تست، پروداکشن) ساختار یکسان داشته باشند.",
      en: "Migrations are versioned scripts that change the database schema: 'create orders table', 'add phone column to users'. Each change is recorded so every environment stays in sync.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی تغییرات ساختمان: هر بازسازی که پیمانکار انجام داده با تاریخ ثبت است؛ هر کسی که ساختمان را از صفر بسازد، همین ترتیب را اجرا می‌کند.",
      en: "Like a building's renovation log: every alteration is dated and ordered, so anyone rebuilding from scratch follows the same sequence.",
    },
    related: ["Transaction", "CI/CD"],
  },
  {
    term: "NoSQL",
    fa: "پایگاه داده بدون SQL",
    category: "database",
    definition: {
      fa: "NoSQL خانواده‌ای از پایگاه‌های داده با ساختار آزادتر از جدول‌های SQL است: سند (MongoDB)، کلید-مقدار (Redis)، نمودار. برای داده‌های بدون شکل ثابت یا مقیاس‌های خیلی بزرگ طراحی شده.",
      en: "NoSQL is a family of databases freer than SQL tables: document (MongoDB), key-value (Redis), graph. Built for data without a fixed shape or for very large scale.",
    },
    analogy: {
      fa: "SQL مثل فرم‌های اداری با ستون‌های ثابت است؛ NoSQL مثل دفترچه‌ی یادداشت آزاد: هر صفحه می‌تواند شکل خودش را داشته باشد — سریع و انعطاف‌پذیر، ولی یافتن «همه‌ی موارد با فلان ویژگی» سخت‌تر.",
      en: "SQL is like fixed-column government forms; NoSQL is a free notebook: every page can have its own shape — fast and flexible, but answering 'list everything with property X' is harder.",
    },
    related: ["Index", "API"],
  },
  {
    term: "ORM",
    fa: "نگاشت شیء به رابطه",
    category: "database",
    definition: {
      fa: "ORM لایه‌ای است که ردیف‌های دیتابیس را به آبجکت‌های زبان برنامه‌نویسی تبدیل می‌کند: به‌جای نوشتن SQL، با متدها کار می‌کنید (prisma.user.findMany()). سریع‌تر می‌نویسید ولی باید بدانید زیرش چه کوئری می‌رود.",
      en: "An ORM is a layer that turns database rows into programming-language objects: instead of writing SQL, you call methods (prisma.user.findMany()). Faster to write — but you must still know what SQL it generates underneath.",
    },
    analogy: {
      fa: "مثل مترجم همزمان بین شما و اهل فن: با زبان خودتان سفارش می‌دهید؛ ولی اگر مترجم سوءتفاهی کند، خرابی کار دست شماست — پس گاهی نگاهی به زبان اصلی (SQL) بیندازید.",
      en: "Like a live interpreter between you and a specialist: you order in your own language; but if the interpreter misunderstands, the damage is yours — so occasionally peek at the original language (SQL).",
    },
    related: ["Index", "Migration"],
  },

  /* ── devops ───────────────────────────────────────────────────── */
  {
    term: "CI/CD",
    fa: "یکپارچه‌سازی و تحویل پیوسته",
    category: "devops",
    definition: {
      fa: "CI/CD یعنی هر کامیت خودکار بیلد، تست و منتشر می‌شود. خرابی‌ها دقایقی بعد از کامیت پیدا می‌شوند و انتشار از رویدادِ ترسناک به روال روزمره تبدیل می‌شود.",
      en: "CI/CD means every commit is automatically built, tested and released. Breakages surface minutes after the commit, and deploying becomes a routine instead of a scary event.",
    },
    analogy: {
      fa: "مثل خط تولید خودکار کارخانه: هر قطعه‌ای که وارد خط می‌شود، همان لحظه از چند بازرسی می‌گذرد و قطعه‌ی خراب همان ابتدای خط کنار گذاشته می‌شود، نه انتهای خط.",
      en: "Like an automated factory line: each piece entering the line passes inspections immediately, and defective pieces are pulled at the start — not discovered at the end.",
    },
    related: ["Deployment", "Container"],
  },
  {
    term: "Container",
    fa: "کانتینر",
    category: "devops",
    definition: {
      fa: "کانتینر بسته‌ای است که اپ را با همه‌ی وابستگی‌هایش یک‌جا حمل می‌کند تا در هر سیستمی دقیقاً یکسان اجرا شود. از کرنل مشترک میزبان استفاده می‌کند، پس سبک و سریع‌راه‌انداز است.",
      en: "A container bundles the app with all its dependencies so it runs identically anywhere. It shares the host kernel, so it stays light and starts fast.",
    },
    analogy: {
      fa: "مثل کانتینر کشتی: هرچیزی داخلش چیده شده، از بندر شانگهای تا هامبورگ دست‌نخورده می‌ماند؛ جرثقیل فقط کل جعبه را جابه‌جا می‌کند، نه محتویاتش را.",
      en: "Like a shipping container: packed once, it rides from Shanghai to Hamburg untouched; the crane moves the whole box, never its contents.",
    },
    related: ["CI/CD", "Deployment"],
  },
  {
    term: "Deployment",
    fa: "استقرار",
    category: "devops",
    definition: {
      fa: "استقرار یعنی بردن نسخه‌ی جدید کد به محیطی که کاربرها از آن استفاده می‌کنند — با بیلد، تست، جایگزینی تدریجی و امکان برگشت اگر خراب شد.",
      en: "Deployment means carrying a new code version to the environment users hit — with building, testing, gradual replacement, and a rollback path if it breaks.",
    },
    analogy: {
      fa: "مثل تعویض لاستیک‌های ماشین در حال حرکت در پیت‌استاپ فرمول‌یک: بکس آماده، لاستیک جدید کنار، تعویض سریع، و اگر ایراد داشت همان لاستیک قبلی برمی‌گردد.",
      en: "Like an F1 pit stop changing tires mid-race: guns ready, new tires beside, a fast swap — and if something's off, the previous set goes back on.",
    },
    related: ["CI/CD", "Container"],
  },
  {
    term: "Load Balancer",
    fa: "توزیع‌کننده بار",
    category: "devops",
    definition: {
      fa: "Load balancer ترافیک ورودی را بین چند سرور پخش می‌کند: مثل نوبت‌دهنده که مراجعان را بین همه‌ی باجه‌های خالی تقسیم می‌کند؛ اگر یک سرور مرد، آن را از چرخه بیرون می‌کشد.",
      en: "A load balancer spreads incoming traffic across several servers, like a dispatcher splitting visitors among open counters; if one server dies, it gets pulled from rotation.",
    },
    analogy: {
      fa: "مثل منشی‌ی بیمارستان که مراجعان را بین پزشکانِ در دسترس می‌فرستد؛ اگر پزشکی مرخصی گرفت، صفش بین بقیه تقسیم می‌شود.",
      en: "Like a hospital receptionist routing visitors among available doctors; if one doctor is out, their queue splits across the rest.",
    },
    related: ["Deployment", "Monitoring"],
  },
  {
    term: "Monitoring",
    fa: "رصد",
    category: "devops",
    definition: {
      fa: "رصد یعنی نگه‌داشتن چشم روی سلامت سیستم: نمودار مصرف، نرخ خطا، تاخیر و هشدار وقتی چیزی از حد گذشت — تا کاربرها قبل از تیکت زدن، شما بدانید.",
      en: "Monitoring keeps eyes on system health: usage charts, error rates, latency, and alerts when something crosses a threshold — so you know before users file tickets.",
    },
    analogy: {
      fa: "مثل پنل داشبورد خودرو: سرعت، دما، بنزین و چراغ هشدار؛ شما را از خرابیِ ناگهانی باخبر می‌کند، نه اینکه تا بخار از کاپوت بلند شود صبر کنید.",
      en: "Like a car dashboard: speed, temperature, fuel, warning lights — you learn of trouble before steam starts pouring out of the hood.",
    },
    related: ["Load Balancer", "Deployment"],
  },
  {
    term: "Infrastructure as Code",
    fa: "زیرساخت به‌صورت کد",
    category: "devops",
    definition: {
      fa: "IaC یعنی سرورها، شبکه‌ها و دیتابیس‌ها در فایل کد تعریف می‌شوند و ابزار (مثل Terraform) آن‌ها را می‌سازد. زیرساخت قابل‌بازبینی، قابل‌تکرار و قابل‌بازسازی می‌شود.",
      en: "IaC means servers, networks and databases are defined in code files, applied by a tool like Terraform. Infrastructure becomes reviewable, repeatable and rebuildable.",
    },
    analogy: {
      fa: "فرق دارد بین «خانه‌ای که بچینی از حافظه چیدمانش کرده» و «نقشه‌ی معماری ثبت‌شده»: با نقشه، هر ساختمان‌دانی می‌تواند همان خانه را دقیقاً در شهر دیگر بسازد.",
      en: "It's the difference between a kitchen arranged from memory and a recorded architectural plan: with the plan, any builder can reproduce the exact house in another city.",
    },
    related: ["CI/CD", "Deployment"],
  },

  /* ── security ─────────────────────────────────────────────────── */
  {
    term: "Encryption",
    fa: "رمزنگاری",
    category: "security",
    definition: {
      fa: "رمزنگاری متن را با کلید به شکل ناخوانا تبدیل می‌کند و با کلید درست دوباره برمی‌گرداند. حتی اگر بسته‌ها در راه شنود شوند، ناخوانا می‌مانند — پایه‌ی HTTPS است.",
      en: "Encryption turns text into unreadable form with a key and back with the right key. Even if packets are eavesdropped in transit, they stay unreadable — the foundation of HTTPS.",
    },
    analogy: {
      fa: "مثل نامه‌ای داخل جعبه‌ی قفل‌دار: هر کسی می‌تواند جعبه را حمل کند، ولی فقط صاحب کلید می‌تواند بازش کند و بخواند.",
      en: "Like a letter inside a locked box: anyone can carry the box, but only the keyholder can open and read it.",
    },
    related: ["Hashing", "VPN"],
  },
  {
    term: "Hashing",
    fa: "هش‌کردن",
    category: "security",
    definition: {
      fa: "هش یک اثر یک‌طرفه از داده می‌سازد: از ورودی به خروجی یک‌راه است و برگشتی ندارد. برای ذخیره‌ی پسورد عالی است، چون حتی پایگاه داده‌ی لو رفته هم پسوردها را نشان نمی‌دهد.",
      en: "Hashing creates a one-way fingerprint of data: input to output only, never back. Perfect for passwords — even a leaked database reveals no passwords.",
    },
    analogy: {
      fa: "مثل انگشت‌نگاری: از هر انگشت یک اثر یکتا می‌ماند که می‌توان تطبیقش داد، ولی از اثر نمی‌توان خود انگشت را بازسازی کرد.",
      en: "Like a fingerprint: unique enough to match, impossible to reconstruct the finger from the print.",
    },
    related: ["Encryption", "Authentication"],
  },
  {
    term: "XSS",
    fa: "نفوذ از راه اسکریپت بین‌سایتی",
    category: "security",
    definition: {
      fa: "XSS یعنی کد جاوااسکریپتِ مهاجم داخل صفحه‌ی کاربر اجرا می‌شود — معمولاً چون ورودی کاربر بدون escape در صفحه گذاشته شده. می‌تواند کوکی بدزدد یا صفحه را جعل کند.",
      en: "XSS means the attacker's JavaScript runs inside the user's page — usually because user input was placed into the page unescaped. It can steal cookies or fake the page.",
    },
    analogy: {
      fa: "مثل اینکه کسی نامه‌ی شما را با «دستورهای پنهانی» جاسازی کند و کارمند اداره موقع خواندن، همان دستورها را اجرا کند — چون نمی‌فهمد آن‌ها بخشی از نامه‌اند نه بخشی از دستورالعملش.",
      en: "Like smuggling secret commands inside a letter so the clerk, while reading it aloud, executes them — unable to tell the letter's words from his own instructions.",
    },
    related: ["CSRF", "Encryption"],
  },
  {
    term: "CSRF",
    fa: "جعل درخواست بین‌سایتی",
    category: "security",
    definition: {
      fa: "CSRF یعنی سایتِ مهاجم مرورگر کاربر را فریب می‌دهد تا درخواستی به سایت مقصد بفرستد که خودکار کوکی‌های کاربر را هم حمل می‌کند؛ سایت فکر می‌کند خود کاربر این را خواسته.",
      en: "CSRF tricks the user's browser into sending a request to a target site that automatically carries the user's cookies; the site believes the user made it.",
    },
    analogy: {
      fa: "مثل اینکه یک غریبه از پشت سر شما، کارت‌تان را که در دستگاه رستوران جا مانده، به دستگاه بزند و سفارش بدهد؛ دستگاه فقط می‌بیند کارت معتبر است، نه اینکه چه‌کسی دکمه را زده.",
      en: "Like a stranger behind you tapping the card you left in the café reader and ordering; the machine sees a valid card, never asks who pressed the button.",
    },
    related: ["XSS", "Authentication"],
  },
  {
    term: "SQL Injection",
    fa: "تزریق SQL",
    category: "security",
    definition: {
      fa: "وقتی ورودی کاربر به‌صورت متن داخل کوئری SQL می‌چسبد، کاربر می‌تواند دستور SQL بگنجاند و پایگاه داده را فرمان بدهد: ورود بدون پسورد، خواندن همه‌ی جدول‌ها یا حذف داده.",
      en: "When user input is glued into an SQL query as text, the user can smuggle in SQL commands and command the database: log in without a password, read every table, or delete data.",
    },
    analogy: {
      fa: "مثل فرمی که بخش «نام» آن مستقیم به دستور رسمی چسبانده می‌شود؛ کسی در جای نام می‌نویسد «… و امضای چک را هم مطلق کن» و اداره همان را اجرا می‌کند.",
      en: "Like a form whose 'name' field gets pasted straight into an official order; someone writes '…and make the check unlimited' as the name, and the office executes it.",
    },
    related: ["Index", "Authentication"],
  },
  {
    term: "VPN",
    fa: "شبکه‌ی خصوصی مجازی",
    category: "security",
    definition: {
      fa: "VPN یک تونل رمزنگاری‌شده بین شما و سرور دیگر می‌سازد: ترافیک شما از نگاه شبکه‌ی محلی مخفی می‌شود و آدرس مقصد، IP سرور VPN دیده می‌شود، نه IP شما.",
      en: "A VPN builds an encrypted tunnel between you and another server: local networks can't read your traffic, and destinations see the VPN's IP instead of yours.",
    },
    analogy: {
      fa: "مثل سفر داخل یک کامیون بسته‌ی مسقف: ناظران جاده می‌بینند کامیون به کدام انبار می‌رود، ولی محتوای بسته‌ها را نمی‌بینند.",
      en: "Like riding inside a closed truck: watchers on the road see which warehouse it heads to, but never the contents of the boxes.",
    },
    related: ["Encryption", "Proxy"],
  },

  /* ── ai ───────────────────────────────────────────────────────── */
  {
    term: "LLM",
    fa: "مدل زبانی بزرگ",
    category: "ai",
    definition: {
      fa: "LLM شبکه‌ی عصبی عظیمی است که روی میلیاردها جمله آموزش دیده تا ادامه‌ی متن را پیش‌بینی کند. همین پیش‌بینیِ ساده، پاسخ‌گویی، ترجمه و کدنویسی را ممکن می‌کند؛ اما «دانش» آن محدود به داده‌ی آموزش است.",
      en: "An LLM is a giant neural network trained on billions of sentences to predict the next token. That simple prediction enables answering, translating and coding — but its knowledge is bounded by its training data.",
    },
    analogy: {
      fa: "مثل بازیکن سرعتی که میلیون‌ها پارتی بازی کرده: برای هر حرکت شما، محتمل‌ترین ادامه‌ی خوب را بلد است؛ ولی اگر قانون جدیدی وسط بازی معرفی کنید، ممکن است حفظ‌محور جواب بدهد.",
      en: "Like a speed-chess player who's played millions of games: they know the strongest likely continuation — but introduce a brand-new rule mid-game and they may answer from memory, not reasoning.",
    },
    related: ["Prompt", "Embedding", "RAG"],
  },
  {
    term: "Embedding",
    fa: "برداری‌سازی معنایی",
    category: "ai",
    definition: {
      fa: "Embedding تبدیل هر متن یا تصویر به برداری از اعداد است که معنا را نگه می‌دارد: هم‌معناها در فضای برداری نزدیک می‌شوند؛ پایه‌ی جست‌وجوی معنایی و RAG.",
      en: "An embedding converts any text or image into a vector of numbers that preserves meaning: similar meanings land close together in vector space — the basis of semantic search and RAG.",
    },
    analogy: {
      fa: "مثل نقشه‌ی شهر که هر مکان یک مختصات دارد: «دو مغازه هم‌نوع» شاید اسم‌های متفاوتی داشته باشند ولی مختصاتشان کنار هم است.",
      en: "Like a city map where every place gets coordinates: two similar shops may have different names, yet their coordinates sit side by side.",
    },
    related: ["LLM", "RAG"],
  },
  {
    term: "Prompt",
    fa: "پرامپت",
    category: "ai",
    definition: {
      fa: "پرامپت ورودی متنی‌ای است که به مدل می‌دهید: دستور، نقش، قواعد، مثال‌ها و داده. کیفیت خروجی مدل مستقیماً به کیفیت پرامپت وابسته است؛ پرامپت خوب مثل شرح کارِ دقیق است.",
      en: "A prompt is the textual input you give a model: instructions, role, rules, examples and data. Output quality depends directly on prompt quality — a good prompt reads like a precise brief.",
    },
    analogy: {
      fa: "مثل سفارش دادن به یک معمار ماهر: «خانه بساز» نتیجه‌ی تصادفی می‌دهد؛ نقشه‌ی دقیق با بودجه، سبک و محدودیت‌ها، دقیقاً همان می‌دهد که می‌خواهید.",
      en: "Like briefing a skilled architect: 'build a house' yields randomness; a precise brief with budget, style and constraints yields exactly what you wanted.",
    },
    related: ["LLM", "RAG"],
  },
  {
    term: "Fine-tuning",
    fa: "تنظیم دقیق",
    category: "ai",
    definition: {
      fa: "Fine-tuning یعنی ادامه‌ی آموزش یک مدل از پیش آموزش‌دیده با داده‌های کوچک و اختصاصی، تا رفتار یا سبکش برای یک وظیفه‌ی خاص تنظیم شود — بدون ساخت مدل از صفر.",
      en: "Fine-tuning continues training a pre-trained model on small, specific data so its behavior or style adapts to one task — without building a model from scratch.",
    },
    analogy: {
      fa: "مثل استخدام یک سرآشپز ماهر و آموزش دادنِ فقط دستورهای رستوران خودتان: پایه‌ی مهارت را نمی‌خواهید بسازید؛ فقط منو را مطابق سلیقه‌ی خانه تنظیم می‌کنید.",
      en: "Like hiring a trained chef and teaching them only your restaurant's recipes: you don't rebuild their skills, you tune the menu to your house's taste.",
    },
    related: ["LLM", "RAG"],
  },
  {
    term: "RAG",
    fa: "تولید با بازیابی",
    category: "ai",
    definition: {
      fa: "RAG یعنی قبل از پاسخ‌دادن، مستندات مرتبط از پایگاه دانش شما بازیابی و داخل پرامپت گذاشته می‌شود تا مدل بر اساس آن‌ها جواب دهد — با منبع و بدون اختراع.",
      en: "RAG retrieves relevant documents from your knowledge base before answering and places them in the prompt, so the model answers grounded in them — cited, not invented.",
    },
    analogy: {
      fa: "مثل دانش‌آموزی که قبل از جواب دادن، فایل‌های مرتبط را باز می‌کند و با کتاب جلویش جواب می‌دهد؛ به‌جای حدس‌زدن از حافظه.",
      en: "Like a student opening the relevant files and answering with the book in front of them — instead of guessing from memory.",
    },
    related: ["Embedding", "LLM"],
  },
  {
    term: "Hallucination",
    fa: "توهم‌زایی",
    category: "ai",
    definition: {
      fa: "توهم‌زایی یعنی مدل با اعتمادبه‌نفسِ کامل چیزی نادرست می‌گوید: منبع جعلی، عدد غلط، قابلیتی که وجود ندارد. چون ذات مدل «پیش‌بینی روان متن» است نه «بررسی صحت»، باید خروجی را ارزیابی و مهار کرد.",
      en: "Hallucination is when a model confidently states something false: a fake source, wrong number, nonexistent feature. Since the model predicts fluent text rather than verifying truth, outputs must be evaluated and contained.",
    },
    analogy: {
      fa: "مثل شاهدی روان‌بخوان که با جزئیات تعریف می‌کند ولی جزئیات را از قالب ذهنی‌اش پر می‌کند، نه از واقعیت؛ برای همین، گفته‌هایش را باید با سند چک کرد.",
      en: "Like a fluent witness who fills details from their mental template rather than reality — which is why you check their statements against documents.",
    },
    related: ["LLM", "RAG"],
  },
];

/** Full glossary: core terms + per-category extensions. */
export const glossaryTerms: GlossaryTerm[] = [
  ...coreGlossaryTerms,
  ...moreFundamentalsTerms,
  ...moreFundamentalsTerms2,
  ...moreFrontendTerms,
  ...moreFrontendTerms2,
  ...moreFrontendTerms3,
  ...moreBackendTerms,
  ...moreBackendTerms2,
  ...moreBackendTerms3,
  ...moreDatabaseTerms,
  ...moreDatabaseTerms2,
  ...moreDevopsTerms,
  ...moreDevopsTerms2,
  ...moreDevopsTerms3,
  ...moreSecurityTerms,
  ...moreSecurityTerms2,
  ...moreNetworkingTerms,
  ...moreNetworkingTerms2,
  ...moreMobileTerms,
  ...moreMobileTerms2,
  ...moreAlgorithmsTerms,
  ...moreAlgorithmsTerms2,
  ...moreAlgorithmsTerms3,
  ...moreSystemDesignTerms,
  ...moreSystemDesignTerms2,
  ...moreAiTerms,
  ...moreAiTerms2,
  ...moreAiTerms3,
];
