import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (frontend & JavaScript, part 3). Merged into terms.ts → /glossary page. */
export const moreFrontendTerms3: GlossaryTerm[] = [
  {
    term: "SEO",
    fa: "بهینه‌سازی برای موتور جست‌وجو",
    category: "frontend",
    definition: {
      fa: "SEO مجموعه‌ی کارهایی است که رتبه‌ی سایت را در نتایج گوگل بالا می‌برد: محتوای باارزش، ساختار HTML معنایی، سرعت بارگذاری (Core Web Vitals)، موبایل‌پسند بودن، متا تگ‌ها و داده‌ی ساخت‌یافته (schema). برای SPA ها چالش ویژه دارد چون خزنده‌ها JS را دیر اجرا می‌کنند — راه‌حل: SSR/SSG.",
      en: "SEO is the set of practices that raise a site's rank in search results: valuable content, semantic HTML, loading speed (Core Web Vitals), mobile-friendliness, meta tags and structured data (schema). SPAs struggle because crawlers execute JS late — the fix is SSR/SSG.",
    },
    analogy: {
      fa: "مثل تزئین ویترین مغازه برای رهگذر: ویترین روشن و مرتب (سرعت)، تابلوی درست (عنوان‌ها) و قفسه‌بندی منطقی (ساختار) باعث می‌شود مشتری وارد شود.",
      en: "Like dressing a shop window for passersby: bright and orderly display (speed), a clear sign (titles) and logical shelf layout (structure) pull customers in.",
    },
    related: ["Core Web Vitals", "SSR", "SSG", "Semantic HTML"],
  },
  {
    term: "Semantic HTML",
    fa: "اچ‌تی‌ام‌ال معنایی",
    category: "frontend",
    definition: {
      fa: "HTML معنایی یعنی به‌جای div های بی‌معنا از تگ‌های بامعنا استفاده کنی: header، nav، main، article، section، footer. خزنده‌های موتور جست‌وجو ساختار را می‌فهمند، صفحه‌خوان‌ها (accessibility) مسیر درست می‌دهند و کد خودش مستند می‌شود.",
      en: "Semantic HTML means using meaningful tags instead of anonymous divs: header, nav, main, article, section, footer. Search crawlers understand the structure, screen readers navigate correctly, and the code documents itself.",
    },
    analogy: {
      fa: "مثل خانه با اتاق‌های برچسب‌دار (آشپزخانه، اتاق خواب) در برابر یک سالن بزرگ بدون دیوار: مهمان و مآمور شهرداری هر دو بلافاصله می‌فهمند کجا چه چیزی است.",
      en: "Like a house with labeled rooms (kitchen, bedroom) versus one big wall-less hall: guests and inspectors both instantly know what's where.",
    },
    related: ["Accessibility", "SEO", "HTML"],
  },
  {
    term: "CSS Selector",
    fa: "انتخابگر CSS",
    category: "frontend",
    definition: {
      fa: "انتخابگر الگویی است که می‌گوید کدام عناصر این قاعده را بگیرند: تگ (p)، کلاس (.card)، شناسه (#header)، صفت ([type=\"text\"])، شبه‌کلاس (:hover، :nth-child) و ترکیب‌ها (div > p، .list li). انتخابگرهای ساده‌تر Specificity کمتری دارند و نگهداری‌شان آسان‌تر است.",
      en: "A CSS selector is the pattern deciding which elements a rule applies to: tag (p), class (.card), id (#header), attribute ([type=\"text\"]), pseudo-class (:hover, :nth-child) and combinations (div > p, .list li). Simpler selectors carry lower specificity and are easier to maintain.",
    },
    analogy: {
      fa: "مثل تابلوهای ارسال پست: «همه‌ی آپارتمان‌های این خیابان» (تگ)، «واحد قرمز رنگ» (کلاس)، «فقط شماره ۷» (شناسه) — هرچه دقیق‌تر، شمارش گیرنده‌ها کمتر.",
      en: "Like postal routing: 'every building on this street' (tag), 'the red-painted unit' (class), 'only number 7' (id) — the more specific, the fewer recipients.",
    },
    related: ["CSS", "CSS Specificity", "DOM"],
  },
  {
    term: "CSS Specificity",
    fa: "اولویت قواعد CSS",
    category: "frontend",
    definition: {
      fa: "Specificity امتیاز تعیین برنده‌ی قواعد متضاد است: شناسه (۱۰۰) بر کلاس (۱۰) و کلاس بر تگ (۱) غلبه می‌کند؛ در تساوی، قاعده‌ی دیرتر در فایل می‌برد و !important همه را می‌شکند. پیچیدگی زیاد آن باعث می‌شود استایل‌ها «غیرقابل‌پیش‌بینی» شوند — به همین دلیل روش‌هایی مثل BEM امتیاز را تخت نگه می‌دارند.",
      en: "Specificity decides which conflicting CSS rule wins: id (100) beats class (10), class beats tag (1); ties go to the later rule, and !important overrides everything. High specificity makes styles unpredictable — which is why conventions like BEM keep it flat.",
    },
    analogy: {
      fa: "مثل سلسله‌مراتب امضا در اداره: امضای مدیر (id) تذکر سرپرست (class) را باطل می‌کند و تذکر سرپرست حرف کارمند ساده (tag) را — !important هم مثل مهر «دستور آمرانه» است که همه را دور می‌زند.",
      en: "Like signature hierarchy at an office: the director's signature (id) overrides a supervisor's note (class), which beats a clerk's (tag) — and !important is the 'by order' stamp that skips them all.",
    },
    related: ["CSS", "CSS Selector"],
  },
  {
    term: "Flexbox",
    fa: "فلکس‌باکس",
    category: "frontend",
    definition: {
      fa: "Flexbox مدل چیدمان یک‌بعدی CSS است: عناصر در یک ردیف یا ستون قرار می‌گیرند و با justify-content، align-items و flex-grow/flex-shrink توزیع فضا و اندازه کنترل می‌شود. برای نوار ابزار، کارت‌های هم‌ارتفاع و وسط‌چین کردن آسان ایده‌آل است؛ برای گرید دو‌بعدی، CSS Grid مناسب‌تر است.",
      en: "Flexbox is CSS's one-dimensional layout model: elements line up in a row or column, with justify-content, align-items and flex-grow/shrink controlling space and sizing. Ideal for toolbars, equal-height cards and easy centering; for two-dimensional layouts, use CSS Grid.",
    },
    analogy: {
      fa: "مثل چیدن وسایل در یک قفسه‌ی کشویی: فاصله‌ها خودکار تقسیم می‌شوند و با چند پیچ تنظیم می‌گوید «وسط‌چین»، «بین‌شان فاصله مساوی» یا «این یکی بزرگ‌تر کش بیاید».",
      en: "Like arranging items on a sliding shelf: space divides automatically, with dials for 'center everything', 'equal gaps' or 'let this one grow bigger'.",
    },
    related: ["CSS Grid", "CSS", "Responsive Design"],
  },
  {
    term: "CSS Grid",
    fa: "گرید CSS",
    category: "frontend",
    definition: {
      fa: "CSS Grid مدل چیدمان دو‌بعدی است: هم سطر هم ستون را هم‌زمان تعریف می‌کنی (grid-template-columns/rows) و عناصر می‌توانند چند خانه جا شوند (grid-column: span 2). برای صفحه‌بندی کل سایت، گالری‌ها و چیدمان‌های مجله‌ای استاندارد است و با minmax و auto-fit واکنش‌گرا می‌شود.",
      en: "CSS Grid is CSS's two-dimensional layout model: define rows and columns together (grid-template-columns/rows) and let items span multiple cells (grid-column: span 2). It's the standard for page layouts, galleries and magazine designs, turning responsive with minmax and auto-fit.",
    },
    analogy: {
      fa: "مثل کاشی‌کاری با نقشه: اول شبکه‌ی کاشی‌ها را می‌کشی، بعد هر نقش می‌تواند یک خانه یا دو خانه‌ی مجاور را بگیرد — کل طرح از پیش منظم است.",
      en: "Like tiling from a blueprint: draw the grid first, then each motif occupies one cell or spans two — the whole design stays organized upfront.",
    },
    related: ["Flexbox", "CSS", "Responsive Design"],
  },
  {
    term: "Web Components",
    fa: "کامپوننت‌های وب",
    category: "frontend",
    definition: {
      fa: "Web Components استاندارد بومی مرورگر برای ساخت کامپوننت بدون فریم‌ورک است با سه تکنولوژی: Custom Elements (تگ دلخواه)، Shadow DOM (استایل و DOM ایزوله) و HTML Templates. مزیت: در هر فریم‌ورکی کار می‌کند؛ برای دیزاین‌سیستم‌های مشترک بین چند اپ به کار می‌رود.",
      en: "Web Components are the browser's native standard for framework-free components, built on three technologies: Custom Elements (custom tags), Shadow DOM (isolated styles and DOM), and HTML Templates. They work inside any framework — great for design systems shared across apps.",
    },
    analogy: {
      fa: "مثل پریز استاندارد برق: هر سازنده‌ای می‌تواند دستگاه بسازد، چون شکل پریز (استاندارد مرورگر) همه‌جا یکی است.",
      en: "Like the standard power socket: any manufacturer can build devices because the socket shape (the browser standard) is universal.",
    },
    related: ["DOM", "Component"],
  },
  {
    term: "CSR",
    fa: "رندر سمت کلاینت",
    category: "frontend",
    definition: {
      fa: "در CSR مرورگر یک HTML تقریباً خالی و یک فایل JS بزرگ می‌گیرد و خودش صفحه را می‌سازد (React/Vue معمولی). نتیجه: پس از لود اول، جابه‌جایی صفحات فوری است و سرور سبک می‌ماند؛ اما بار اول کندتر و SEO ضعیف‌تر است چون خزنده محتوای آماده نمی‌بیند.",
      en: "With CSR the browser receives a nearly empty HTML plus a big JS bundle and builds the page itself (plain React/Vue). Result: instant navigation after first load and a light server — but slower first paint and weaker SEO, since crawlers see no ready content.",
    },
    analogy: {
      fa: "مثل خرید مبله‌ی باز‌شده: جعبه‌ها را می‌بری خانه (JS) و خودت سرهم می‌کنی — حمل اول سنگین است، ولی بعداً جابه‌جایی وسایل داخل خانه سریع است.",
      en: "Like buying flat-pack furniture: you carry boxes home (JS) and assemble them — the first trip is heavy, but rearranging afterwards is quick.",
    },
    related: ["SSR", "SSG", "SPA", "Hydration", "SEO"],
  },
  {
    term: "SSG",
    fa: "تولید ایستای سایت",
    category: "frontend",
    definition: {
      fa: "SSG (Static Site Generation) صفحات را در زمان build به HTML کامل تبدیل و به CDN می‌دهد — نه اجرای سرور، نه ساخت سمت کلاینت. سریع‌ترین گزینه و ارزان‌ترین است (فایل‌های ایستا)، ولی محتوا تا build بعدی ثابت است؛ برای وبلاگ، مستندات و صفحات بازاریابی ایده‌آل و ISR بین این و دینامیک است.",
      en: "SSG (Static Site Generation) renders pages to complete HTML at build time and serves them from a CDN — no server execution, no client-side assembly. It's the fastest and cheapest option (static files), but content freezes until the next build; perfect for blogs, docs and marketing pages, with ISR bridging toward dynamic.",
    },
    analogy: {
      fa: "مثل چاپ هزار بروشور پیش از نمایشگاه: تحویل به بازدیدکننده فوری است، ولی تا چاپ بعدی محتوایش عوض نمی‌شود.",
      en: "Like printing a thousand brochures before the expo: handing them out is instant, but the text won't change until the next print run.",
    },
    related: ["SSR", "CSR", "CDN", "SEO"],
  },
  {
    term: "HMR",
    fa: "جایگزینی داغ ماژول",
    category: "frontend",
    definition: {
      fa: "HMR (Hot Module Replacement) هنگام توسعه، فقط ماژول تغییرکرده را در مرورگر جایگزین می‌کند بدون رفرش کامل صفحه: state کامپوننت‌ها حفظ می‌شود و بازخورد در کسری از ثانیه می‌آید. Vite و webpack هر دو پیاده‌سازی‌اش را دارند و در پروژه‌های بزرگ تفاوت تجربه‌ی توسعه را می‌سازد.",
      en: "HMR (Hot Module Replacement) swaps only the changed module in the browser during development — no full reload: component state survives and feedback arrives in fractions of a second. Vite and webpack both implement it; on large projects it defines the dev experience.",
    },
    analogy: {
      fa: "مثل تعویض یک چرخ خودرو در حرکت به‌جای توقف کامل و استارت دوباره: سفر ادامه پیدا می‌کند و چیزی از مسیر (state) از دست نمی‌رود.",
      en: "Like changing one wheel of a moving car instead of a full stop and restart: the journey continues and nothing on the road (state) is lost.",
    },
    related: ["Module Bundler", "State", "Debugging"],
  },
  {
    term: "AJAX",
    fa: "آژاکس",
    category: "frontend",
    definition: {
      fa: "AJAX (Asynchronous JavaScript And XML) تکنیک دریافت/ارسال داده بدون رفرش صفحه است — با XMLHttpRequest در قدیم و fetch امروزی. پایه‌ی وب تعاملی مدرن است: جست‌وجوی زنده، بی‌نهایت اسکرول و ارسال فرم بدون رفرش همه با آن انجام می‌شود؛ امروز داده XML نیست، JSON است.",
      en: "AJAX (Asynchronous JavaScript And XML) fetches/sends data without a page reload — XMLHttpRequest in the past, fetch today. It's the base of the modern interactive web: live search, infinite scroll and no-reload form submits. Today's payload is JSON, not XML.",
    },
    analogy: {
      fa: "مثل سفارش غذا با زنگ میز به‌جای بلند شدن و رفتن به آشپزخانه: بقیه‌ی شام (صفحه) دست‌نخورده می‌ماند و فقط بشقاب جدید می‌رسد.",
      en: "Like ringing the table bell for another dish instead of walking to the kitchen: the rest of your meal (the page) stays untouched while just the new plate arrives.",
    },
    related: ["Fetch API", "JSON", "SPA", "Promise"],
  },
  {
    term: "ES Modules",
    fa: "ماژول‌های ES",
    category: "frontend",
    definition: {
      fa: "ESM سیستم ماژول استاندارد جاوااسکریپت است: import/export با تحلیل ایستا (قبل از اجرا معلوم است چه چیزی از کجا می‌آید) که tree-shaking و بارگذاری تنبل را ممکن می‌کند. CommonJS قدیم (require از Node) پویا بود و ابزارها را مجبور به حدس‌های سخت می‌کرد؛ اکوسیستم به سمت ESM رفته است.",
      en: "ESM is JavaScript's standard module system: import/export with static analysis (dependencies are known before execution), enabling tree-shaking and lazy loading. Legacy CommonJS (Node's require) is dynamic and forced tools into hard guesses; the ecosystem has moved to ESM.",
    },
    analogy: {
      fa: "مثل فهرست دقیق مواد لازم پیش از پختن (ایستا) در برابر فرستادن کسی وسط پخت به مغازه با «هرچه فکر کردی بخر» (پویا) — اولی قابل برنامه‌ریزی و بهینه است.",
      en: "Like a precise ingredient list before cooking (static) versus sending someone mid-recipe to 'buy whatever seems right' (dynamic) — the first is plannable and optimizable.",
    },
    related: ["Module Bundler", "Tree Shaking", "Node.js"],
  },
  {
    term: "IIFE",
    fa: "تابع فراخوانی‌شده‌ی فوری",
    category: "frontend",
    definition: {
      fa: "IIFE (Immediately Invoked Function Expression) تابعی است که همان‌جا که تعریف می‌شود اجرا می‌شود: (function(){ … })(). پیش از let/const و ماژول‌ها، تنها راه ساخت دامنه‌ی خصوصی بود — متغیرها داخل آن از نشت به scope جهانی محافظت می‌شدند. هنوز در کدهای قدیمی و الگوهای ماژول سبک دیده می‌شود.",
      en: "An IIFE (Immediately Invoked Function Expression) runs the moment it's defined: (function(){ … })(). Before let/const and modules, it was the only way to make private scope — variables inside were shielded from leaking into global scope. Still seen in legacy code and lightweight module patterns.",
    },
    analogy: {
      fa: "مثل اتاق قرنطینه‌ی یک‌بارمصرف: هر چیزی داخلش می‌گذاری بیرون نمی‌ریزد و خودش هم بلافاصله کارش را می‌کند و تمام می‌شود.",
      en: "Like a disposable quarantine room: nothing inside escapes, and the room does its job instantly and is done.",
    },
    related: ["Closure", "Event Loop"],
  },
  {
    term: "WeakMap & WeakSet",
    fa: "ویک‌مپ و ویک‌ست",
    category: "frontend",
    definition: {
      fa: "WeakMap/WeakSet مجموعه‌هایی با ارجاع ضعیف به کلیدهاست: تا وقتی شیء در جای دیگری زنده است در مجموعه هست، و با حذف آخرین ارجاع قوی، خودکار از آن پاک می‌شود (بدون نشت حافظه). برای داده‌ی الحاقی به اشیاء خارج از کنترل تو (متادیتای DOM، کش خصوصی اشیاء) عالی است؛ کلیدش فقط شیء است و پیمایش ندارد.",
      en: "WeakMap/WeakSet hold weak references to keys: an object stays while something else references it strongly, and vanishes automatically once the last strong reference dies (no memory leak). Perfect for attaching extra data to objects you don't own (DOM metadata, private per-object caches); keys are objects only, with no iteration.",
    },
    analogy: {
      fa: "مثل پست‌یت چسبیده به فایل: تا فایل هست، یادداشت هم هست؛ فایل در بازیافت رفت، یادداشت هم بی‌هیچ اقدامی با آن رفت.",
      en: "Like a sticky note on a file: as long as the file exists so does the note; once the file hits the bin, the note goes with it — no cleanup step.",
    },
    related: ["Garbage Collection"],
  },
  {
    term: "Spread & Rest Operators",
    fa: "عملگرهای گسترش و تجمیع",
    category: "frontend",
    definition: {
      fa: "سه‌نقطه (...) دو نقش دارد: در صدا زدن/مقداردهی «گسترش» است ([...arr, x] یک آرایه‌ی جدید می‌سازد) و در تعریف پارامتر/دسته‌سازی «بقیه» را جمع می‌کند (function f(...args)). برای کپی بدون تغییر اصل، ادغام آبجکت‌ها و توابع با پارامتر متغیر ضروری است؛ فقط یک سطح عمیق کپی می‌کند (deep copy نه).",
      en: "The three dots (...) play two roles: at call/construction sites it's spread ([...arr, x] builds a new array); in parameter definitions it's rest, gathering leftovers (function f(...args)). Essential for non-mutating copies, object merging and variadic functions; note it copies only one level deep (not a deep copy).",
    },
    analogy: {
      fa: "مثل خالی کردن یک کیف روی میز (spread) و برعکس، جمع کردن همه‌ی خرت‌وپرت میز داخل یک کیف (rest) — یک علامت، دو جهت.",
      en: "Like emptying a bag onto a table (spread) versus sweeping the table's clutter back into a bag (rest) — one symbol, two directions.",
    },
    related: ["Array", "Object"],
  },
  {
    term: "Fetch API",
    fa: "ای‌پی‌آی Fetch",
    category: "frontend",
    definition: {
      fa: "fetch رابط استاندارد مرورگر برای درخواست HTTP است که Promise برمی‌گرداند: await fetch(url) و بعد res.json(). برخلاف jQuery ajax، خطاهای شبکه را reject نمی‌کند — فقط قطع اتصال؛ پس باید res.ok را خودت چک کنی. با AbortController لغو شدنی است و جایگزین مدرن XHR است.",
      en: "fetch is the browser's standard HTTP interface returning a Promise: await fetch(url) then res.json(). Unlike jQuery's ajax, network errors don't reject it — only connection failures do; you must check res.ok yourself. It's cancellable via AbortController and the modern XHR replacement.",
    },
    analogy: {
      fa: "مثل باجه‌ی سفارش کافه: رسیدی می‌گیرد (Promise) و پشت آن یا نوشیدنی می‌آید یا پیام «ناموجود» — هشدار عدم موجودی را خودت باید چک کنی، خودش فریاد نمی‌زند.",
      en: "Like a café order counter: you get a claim ticket (Promise) and later either a drink or an 'out of stock' note — you must check for the note yourself; nobody shouts.",
    },
    related: ["AJAX", "Promise", "Async/Await", "AbortController"],
  },
  {
    term: "AbortController",
    fa: "کنترل‌کننده‌ی لغو",
    category: "frontend",
    definition: {
      fa: "AbortController استاندارد لغو عملیات‌های ناهمگام است: سیگنالش را به fetch/event listener می‌دهی و با controller.abort() عملیات متوقف می‌شود. کاربرد اصلی: لغو جست‌وجوی قبلی هنگام تایپ کاربر (جلوگیری از مسابقه‌ی پاسخ‌ها) و لغو درخواست‌ها هنگام خروج از صفحه. AbortSignal.timeout(ms) نسخه‌ی تایم‌اوت خودکار است.",
      en: "AbortController is the standard for cancelling async operations: hand its signal to fetch/event listeners and controller.abort() stops them. Main uses: cancelling the previous search as the user types (preventing response races) and aborting requests on page exit. AbortSignal.timeout(ms) is the built-in timeout flavor.",
    },
    analogy: {
      fa: "مثل دکمه‌ی لغو سفارش اپ غذا: تا وقتی آشپز پختن را شروع نکرده، سفارش بدون هزینه بسته می‌شود.",
      en: "Like a food app's cancel button: until the kitchen starts cooking, the order closes free of charge.",
    },
    related: ["Fetch API", "Promise", "AJAX"],
  },
];
