import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (frontend/JS/React, extended). Merged into terms.ts → /glossary page. */
export const moreFrontendTerms2: GlossaryTerm[] = [
  {
    term: "Event Loop",
    fa: "حلقه رویداد",
    category: "frontend",
    definition: {
      fa: "حلقه رویداد قلب تک‌نخی جاوااسکریپت است: پشته را خالی می‌کند، بعد تمام صف microtaskها را می‌کشد و بعد یک وظیفه‌ی macrotask برمی‌دارد — و این چرخه بی‌نهایت تکرار می‌شود. به همین دلیل Promise زودتر از setTimeout(0) اجرا می‌شود و صفحه هم‌زمان پاسخ‌گو می‌ماند.",
      en: "The event loop is the heart of single-threaded JavaScript: drain the call stack, then drain the entire microtask queue, then take one macrotask — forever. That's why a Promise beats setTimeout(0) while the page stays responsive.",
    },
    analogy: {
      fa: "مثل گارسونی که هر بار اول میزهای فعلی را کامل سرو می‌کند، بعد سفارش‌های در انتظار را یکی‌یکی می‌برد؛ هیچ میزی دو روز منتظر نمی‌ماند، هیچ سفارشی هم وسط سروِ میز دیگر قطع نمی‌شود.",
      en: "Like a waiter who first fully serves the current tables, then picks up queued orders one by one — no table waits for days, no order cuts into another mid-serving.",
    },
    related: ["Event Delegation", "Promise", "Web Worker"],
  },
  {
    term: "PWA",
    fa: "اپلیکیشن پیشرونده وب",
    category: "frontend",
    definition: {
      fa: "PWA وب‌سایتی است با Service Worker و manifest که مثل اپ رفتار می‌کند: آفلاین باز می‌شود، آیکون روی صفحه‌ی اصلی می‌نشیند و push می‌فرستد — بدون استور و نصب سنتی.",
      en: "A PWA is a website with a Service Worker and manifest that behaves like an app: opens offline, sits as an icon on the home screen and sends push notifications — no store, no traditional install.",
    },
    analogy: {
      fa: "مثل رستورانی که هم سفارش آنلاین دارد هم شعبه: وب معمولی فقط آنلاین است؛ PWA شعبه‌ی فیزیکی هم دارد — حتی وقتی اینترنت قطع است باز است.",
      en: "Like a restaurant with both delivery and a physical branch: plain web is delivery-only; a PWA keeps a branch open even when the road (internet) is cut.",
    },
    related: ["Service Worker", "Cache", "SPA"],
  },
  {
    term: "Closure",
    fa: "بستار",
    category: "frontend",
    definition: {
      fa: "بستار تابعی است که محیط تولدش را به‌خاطر می‌سپارد و حتی بعد از تمام‌شدن تابع بیرونی به متغیرهای آن دسترسی دارد. پایه‌ی state در ری‌اکت، event handlerها و داده‌ی خصوصی است.",
      en: "A closure is a function that remembers its birth environment and can still touch the outer function's variables after it has finished. It powers React state, event handlers and private data.",
    },
    analogy: {
      fa: "مثل کوله‌پشتی تابع: هنگام تولد، متغیرهای اطرافش را داخل کوله می‌گذارد و همه‌جا همراهش می‌برد — حتی وقتی خانه‌اش (اسکوپ بیرونی) تخریب شده.",
      en: "Like a function's backpack: at birth it packs the surrounding variables and carries them everywhere — even after its home scope is gone.",
    },
    related: ["Function", "State", "Event Delegation"],
  },
  {
    term: "Hoisting",
    fa: "هویستینگ",
    category: "frontend",
    definition: {
      fa: "هویستینگ یعنی جاوااسکریپت قبل از اجرای دستورها، اعلان‌ها را در اسکوپ می‌سازد: var با undefined مقدار‌دهی می‌شود و function کامل در دسترس است؛ let و const تا رسیدن به اعلان در TDZ هستند.",
      en: "Hoisting means JavaScript creates declarations in a scope before executing statements: var becomes undefined, functions are fully available, while let/const sit in the temporal dead zone until reached.",
    },
    analogy: {
      fa: "مثل پذیرش مهمان‌ها قبل از شروع مهمانی: اسم همه در لیست ثبت می‌شود (اعلان ساخته می‌شود)، ولی مهمان‌های let و const تا رسیدنش به سالن اجازه ورود ندارند.",
      en: "Like registering guests before the party starts: everyone's name is on the list (the binding exists), but let/const guests can't enter the hall until their turn arrives.",
    },
    related: ["Temporal Dead Zone", "Variable", "Closure"],
  },
  {
    term: "Temporal Dead Zone",
    fa: "ناحیه‌ی مرگ موقت",
    category: "frontend",
    definition: {
      fa: "TDZ فاصله‌ی بین شروع اسکوپ تا خط اعلان let/const است؛ دسترسی به متغیر در این فاصله خطای ReferenceError می‌دهد — نه undefined. این طراحی از باگ‌های پنهان جلوگیری می‌کند.",
      en: "The TDZ is the gap between a scope's start and the let/const declaration line; touching the variable there throws a ReferenceError — not undefined. The design prevents silent bugs.",
    },
    analogy: {
      fa: "مثل اتاقی که درِش تا ساعت اعلام‌شده قفل است: قبل از آن ساعت، حتی نگاه‌کردن داخل هم اجازه ندارد — برخلاف var که از قبل باز است.",
      en: "Like a room locked until the announced hour: before that, even peeking inside is forbidden — unlike var, which was open all along.",
    },
    related: ["Hoisting", "Variable", "Closure"],
  },
  {
    term: "Event Delegation",
    fa: "واگذاری رویداد",
    category: "frontend",
    definition: {
      fa: "به‌جای نصب listener روی صد فرزند، یک listener روی والد می‌گذاری و با event.target تشخیص می‌دهی کدام فرزند کلیک شده. حافظه‌ی کمتر و کار با عناصری که بعداً اضافه می‌شوند.",
      en: "Instead of attaching listeners to a hundred children, you attach one listener to the parent and use event.target to find who was clicked. Less memory, and it works for elements added later.",
    },
    analogy: {
      fa: "مثل اینکه به‌جای دادن تلفن به هر کارمند، پذیرش یک تلفن دارد و وقتی زنگ خورد، خودش تشخیص می‌دهد تماس برای کدام واحد است.",
      en: "Like giving one phone to the front desk instead of a phone per employee: when it rings, the desk routes it to the right unit.",
    },
    related: ["Event Bubbling", "DOM", "Component"],
  },
  {
    term: "Event Bubbling",
    fa: "حبابی‌شدن رویداد",
    category: "frontend",
    definition: {
      fa: "رویداد بعد از اجرا روی عنصر هدف، به‌سمت بالا در درخت DOM حباب می‌شود: کلیک روی دکمه، روی والد و بعد والدِ والد هم دیده می‌شود. واگذاری رویداد روی همین رفتار سوار است؛ با stopPropagation هم قطع می‌شود.",
      en: "After firing on the target, an event bubbles up the DOM tree: a button's click is also seen by its parent and grandparent. Event delegation rides on this behavior, and stopPropagation cuts it.",
    },
    analogy: {
      fa: "مثل خبری که از واحد فنی به مدیر بخش و بعد به مدیرعامل هم می‌رسد؛ هر سطح می‌تواند آن را متوقف کند یا واکنش نشان دهد.",
      en: "Like news rising from the dev team to the department head and then the CEO: each level may react to it or stop it.",
    },
    related: ["Event Delegation", "DOM", "Component"],
  },
  {
    term: "Debouncing",
    fa: "لغزش‌گاه‌سازی",
    category: "frontend",
    definition: {
      fa: "دیبانس یعنی اجرای تابع فقط بعد از سکوت مشخص: در جست‌وجوی تایپی، تا کاربر تایپ را تمام نکرده درخواست نمی‌رود. هر فراخوانی جدید، تایمر قبلی را ریست می‌کند.",
      en: "Debouncing runs the function only after a quiet period: in a search box, no request fires until the user stops typing. Each new call resets the timer.",
    },
    analogy: {
      fa: "مثل آسانسور هوشمند که تا در بسته نشده و هیچ‌کس جدید نیامده حرکت نمی‌کند؛ هر مسافر جدید، زمان‌سنج را از نو شروع می‌کند.",
      en: "Like a smart elevator that waits until the door is clear and nobody new arrives: every fresh passenger restarts the timer.",
    },
    related: ["Throttling", "Event Delegation", "API"],
  },
  {
    term: "Throttling",
    fa: "نرخ‌بندی اجرا",
    category: "frontend",
    definition: {
      fa: "تتلینگ تضمین می‌کند تابع حداکثر یک‌بار در هر بازه‌ی زمانی اجرا شود؛ در اسکرول و resize که رویدادها صدها بار در ثانیه می‌آیند حیاتی است. تفاوت با دیبانس: دیبانس «بعد از سکوت»، تلِتلینگ «حداکثر نرخ».",
      en: "Throttling guarantees a function runs at most once per interval — vital for scroll and resize events that fire hundreds of times a second. Versus debounce: debounce waits for silence, throttle caps the rate.",
    },
    analogy: {
      fa: "مثل چراغ‌ راهنما که خودروها را هر ۳۰ ثانیه یک‌دسته عبور می‌دهد؛ هر چقدر هم ماشین پشتش جمع شود، نرخ عبور ثابت می‌ماند.",
      en: "Like a traffic light releasing cars once every 30 seconds no matter how long the queue — the rate stays constant.",
    },
    related: ["Debouncing", "Rate Limiting", "Event Delegation"],
  },
  {
    term: "Prototypal Inheritance",
    fa: "وراثت نمونه‌ای",
    category: "frontend",
    definition: {
      fa: "در جاوااسکریپت آبجکت‌ها مستقیم از آبجکت‌های دیگر ارث می‌برند: هر آبجکت یک اشاره‌گر به prototype دارد و ویژگی گمشده در آن جست‌وجو می‌شود — زنجیره تا null ادامه دارد.",
      en: "In JavaScript, objects inherit directly from other objects: each object holds a prototype pointer and missing properties are looked up there — the chain continues until null.",
    },
    analogy: {
      fa: "مثل پرسیدن سوال در دفتر: اول از خودت می‌پرسی؛ اگر بلد نبودی از هم‌اتاقی، بعد سرگروه، بعد مدیر — تا به برخورد به «کسی بلد نیست» برسی.",
      en: "Like asking around an office: you check yourself, then your deskmate, then the team lead — climbing the chain until someone answers or nobody knows.",
    },
    related: ["Object", "Class", "Closure"],
  },
  {
    term: "Promise",
    fa: "وعده",
    category: "frontend",
    definition: {
      fa: "Promise نماینده‌ی نتیجه‌ی آینده‌ی یک کار ناهم‌زمان است: در حال انتظار، موفق (resolve) یا شکست (reject). زنجیره‌ی then/catch خوانایی callback hell را برمی‌گرداند و پایه‌ی async/await است.",
      en: "A Promise represents the future result of async work: pending, fulfilled (resolve) or rejected (rejected). then/catch chains restore readability over callback hell and underpin async/await.",
    },
    analogy: {
      fa: "مثل رسید سفارش رستوران: سفارش را می‌دهی و رسید می‌گیری (promise)؛ سفارش آماده می‌شود (resolve) یا آشپزخانه اعلام مشکل می‌کند (reject) — تو meanwhile می‌توانی حرف بزنی.",
      en: "Like a restaurant order receipt: you get the receipt (promise), the order is eventually fulfilled (resolve) or the kitchen reports a problem (reject) — meanwhile you keep talking.",
    },
    related: ["Async/Await", "Callback Function", "Event Loop"],
  },
  {
    term: "Async/Await",
    fa: "ناهم‌زمان/انتظار",
    category: "frontend",
    definition: {
      fa: "async/await شکرِ روی Promiseهاست: کد ناهم‌زمان شبیه کد هم‌زمان و خط‌به‌خط خوانده می‌شود؛ await اجرای تابع فعلی را تا آماده‌شدن نتیجه متوقف می‌کند بدون فریز کردن نخ اصلی.",
      en: "async/await is sugar over Promises: async code reads line by line like sync code; await pauses the current function until the result is ready without freezing the main thread.",
    },
    analogy: {
      fa: "مثل اینکه برای نان از نانوا «کارت شماره» بگیری و بنشینی؛ خط بعدی کدت همان لحظه اجرا نمی‌شود، ولی کل فروشگاه همچنان در حال کار است.",
      en: "Like taking a bakery ticket and sitting down: your next instruction waits, but the whole shop keeps running.",
    },
    related: ["Promise", "Event Loop", "Callback Function"],
  },
  {
    term: "Callback Function",
    fa: "تابع بازفراخوان",
    category: "frontend",
    definition: {
      fa: "کال‌بک تابعی است که به تابع دیگر می‌دهی تا «وقت مناسب» صدا بزندش: بعد از اتمام درخواست، بعد از کلیک یا بعد از فیلتر آرایه. پدر معنوی Promiseها و رویدادهاست؛ زنجیره‌ی عمیقش callback hell می‌شود.",
      en: "A callback is a function you hand to another function to call 'when the time is right': after a request, a click, or while filtering an array. Promises and events grew out of it; deeply nested ones become callback hell.",
    },
    analogy: {
      fa: "مثل شماره‌ای که به تعمیرگاه می‌دهی: «وقتی قطعه رسید به من زنگ بزن» — تعمیرگاه می‌داند کی و چطور صدایت کند.",
      en: "Like leaving your number at a garage: 'call me when the part arrives' — the garage knows when and how to reach you.",
    },
    related: ["Promise", "Async/Await", "Event Delegation"],
  },
  {
    term: "Currying",
    fa: "کاری‌کردن",
    category: "frontend",
    definition: {
      fa: "کاری‌کردن یعنی تبدیل تابع چندآرگومانی به زنجیره‌ی توابع تک‌آرگومانی: sum(a)(b)(c). برای ساخت نسخه‌های ازپیش‌پرشده و ترکیب توابع کاربرد دارد.",
      en: "Currying turns a multi-argument function into a chain of single-argument functions: sum(a)(b)(c). It enables pre-filled variants and function composition.",
    },
    analogy: {
      fa: "مثل فرم چندصفحه‌ای که هر صفحه یک سوال می‌پرسد و جواب‌ها را جمع می‌کند؛ تا همه‌ی صفحات کامل نشود نتیجه نمی‌دهد.",
      en: "Like a multi-page form where each page asks one question and keeps the answers — no result until every page is filled.",
    },
    related: ["Function", "Closure", "Callback Function"],
  },
  {
    term: "Module Bundler",
    fa: "بسته‌ساز ماژول",
    category: "frontend",
    definition: {
      fa: "باندلر (Vite/Webpack/esbuild) صدها ماژول را به فایل‌های بهینه‌ی قابل‌اجرا تبدیل می‌کند: وابستگی‌ها را حل می‌کند، کد را minify و code-split می‌کند و فقط CSS/JS مصرفی را تولید می‌کند.",
      en: "A bundler (Vite/Webpack/esbuild) turns hundreds of modules into optimized runnable files: it resolves imports, minifies, code-splits and emits only the CSS/JS actually used.",
    },
    analogy: {
      fa: "مثل آماده‌سازی چمدان سفر: از میان صدها لباس، فقط چیزهای لازم سفر انتخاب، تاشده و در چند کیسه‌ی سبک چیده می‌شود — نه کشیدن کمد پشت کمد.",
      en: "Like packing a suitcase from a wardrobe: pick only what the trip needs, fold it tight into a few light bags — don't drag the whole closet.",
    },
    related: ["Tree Shaking", "SPA", "Service Worker"],
  },
  {
    term: "Tree Shaking",
    fa: "تکان‌دادن درخت",
    category: "frontend",
    definition: {
      fa: "Tree shaking حذف کد مرده است: باندلر با تحلیل استاتیک importها، توابع و ماژول‌های استفاده‌نشده را از خروجی حذف می‌کند؛ شرطش ES Modules و نوشتن side-effect-free.",
      en: "Tree shaking removes dead code: the bundler statically analyzes imports and drops unused functions/modules from the output — it requires ES Modules and side-effect-free code.",
    },
    analogy: {
      fa: "مثل تکان‌دادن درخت سیب: فقط میوه‌های چسبیده به شاخه‌های استفاده‌شده می‌مانند؛ شاخه‌های خالی در بسته‌ی نهایی نیستند.",
      en: "Like shaking an apple tree: only apples attached to used branches survive; dead branches never reach the bundle.",
    },
    related: ["Module Bundler", "SPA"],
  },
  {
    term: "Strict Mode",
    fa: "حالت سخت‌گیرانه",
    category: "frontend",
    definition: {
      fa: "strict mode با 'use strict' فعال می‌شود و اشتباهات خاموش را به خطای واقعی تبدیل می‌کند: متغیر بی‌اعلان، تکرار پارامتر و assignmentهای خطرناک دیگر بی‌سروصدا قبول نمی‌شوند.",
      en: "Strict mode ('use strict') turns silent mistakes into real errors: undeclared variables, duplicated parameters and unsafe assignments are no longer quietly accepted.",
    },
    analogy: {
      fa: "مثل داور سخت‌گیر تمرین: خطاهایی که قبلاً با چشم‌پوشی رد می‌شد، حالا سوت می‌خورد — نتیجه، بازی تمیزتر در مسابقه است.",
      en: "Like a strict referee at practice: fouls once waved off now get a whistle — and the real match gets cleaner.",
    },
    related: ["Variable", "Hoisting", "Debugging"],
  },
  {
    term: "Generator Function",
    fa: "تابع مولد",
    category: "frontend",
    definition: {
      fa: "تابع مولد (function*) اجرایش را با yield متوقف و بعداً از همان‌جا ادامه می‌دهد؛ هر صدا یک مقدار تولید می‌کند. برای دنباله‌های بی‌نهایت، پیمایش‌های سفارشی و ایجنت‌های stateful استفاده می‌شود.",
      en: "A generator function (function*) pauses at yield and resumes from the same spot later, producing one value per call. Useful for infinite sequences, custom iterators and stateful agents.",
    },
    analogy: {
      fa: "مثل شیر آب: هر بار شیر را باز می‌کنی یک لیوان می‌گیری و می‌بندی؛ جریان همان‌جای قبلی ادامه پیدا می‌کند، نه از اول.",
      en: "Like a tap: each turn pours one glass and stops; the flow resumes exactly where it left off — never from the start.",
    },
    related: ["Async/Await", "Function"],
  },
  {
    term: "Web Worker",
    fa: "وب‌کارگر",
    category: "frontend",
    definition: {
      fa: "Web Worker نخِ موازی بیرون از نخ اصلی مرورگر است: محاسبات سنگین را می‌برد آن‌جا تا UI فریز نشود؛ DOM ندارد و با پیام (postMessage) حرف می‌زند.",
      en: "A Web Worker is a parallel thread outside the browser's main thread: heavy computation moves there so the UI never freezes; it has no DOM and talks via postMessage.",
    },
    analogy: {
      fa: "مثل پشتیبانی فنی جدا از گیشه‌ی فروش: مشتریِ گیشه (UI) هیچ‌وقت در صف سنگینِ پشتیبانی گیر نمی‌کند؛ ارتباطشان با یادداشت است نه هم‌اتاقی.",
      en: "Like a support department separate from the sales counter: counter customers (the UI) never wait in the support queue; the two exchange notes instead of sharing a room.",
    },
    related: ["Web Worker", "Event Loop", "SPA"],
  },
  {
    term: "Service Worker",
    fa: "سرویس‌کارگر",
    category: "frontend",
    definition: {
      fa: "Service Worker یک اسکریپت پروکسی‌وار بین مرورگر و شبکه است که حتی با بسته‌شدن صفحه زنده است: کش آفلاین، نوتیفیکیشن push و پس‌زمینه‌همگام را ممکن می‌کند — ستون فقرات PWA.",
      en: "A Service Worker is a proxy-like script between browser and network that lives even when the page is closed: offline caching, push notifications and background sync — the backbone of PWAs.",
    },
    analogy: {
      fa: "مثل نگهبان هوشمندی که جلوی در ساختمان است: قبل از رسیدن درخواست به مقصد، می‌داند از کش جواب بدهد، از شبکه بگیرد یا پیام بعداً تحویل دهد.",
      en: "Like a smart doorman at a building's entrance: before a request reaches its destination, he decides to answer from cache, fetch from the network, or deliver the message later.",
    },
    related: ["PWA", "Cache", "Web Worker"],
  },
  {
    term: "JSX",
    fa: "جامع‌نویسی ری‌اکت",
    category: "frontend",
    definition: {
      fa: "JSX سینتکسی است که HTML‌مانند را داخل جاوااسکریپت می‌نویسد؛ کامپایلر آن را به فراخوانی‌های تابع ری‌اکت تبدیل می‌کند. HTML نیست — تابع است؛ برای همین شرط و حلقه داخلش طبیعی کار می‌کند.",
      en: "JSX is syntax that lets you write HTML-like markup inside JavaScript; the compiler turns it into React function calls. It isn't HTML — it's a function, so conditionals and loops compose naturally.",
    },
    analogy: {
      fa: "مثل سینتکس شیرین‌کن در TypeScript: همان کد معمولی زیرش هست، فقط نوشتنش شبیه چیزی است که در ذهن داری (نقشه‌ی UI).",
      en: "Like TypeScript's syntactic sugar: ordinary code underneath, written the way it looks in your head (a UI map).",
    },
    related: ["Component", "Module Bundler", "Virtual DOM"],
  },
  {
    term: "Reconciliation",
    fa: "تطبیق‌دهی",
    category: "frontend",
    definition: {
      fa: "Reconciliation فرایند مقایسه‌ی درخت جدید ری‌اکت با قبلی برای پیدا کردن حداقل تغییر DOM است. ری‌اکت با فرضیات ساده‌شده (همان نوع، همان key) این مقایسه را O(n) نگه می‌دارد.",
      en: "Reconciliation is React's diff of the new tree against the previous one to find the minimal DOM change. Simple assumptions (same type, same key) keep the comparison O(n).",
    },
    analogy: {
      fa: "مثل مقایسه‌ی دو نقشه‌ی ساختمان نسخه‌ی قبل و بعد برای اینکه فقط دیوارهای عوض‌شده را تخریب و بازسازی کنی، نه کل ساختمان.",
      en: "Like comparing a building's before/after blueprints to demolish and rebuild only changed walls — never the whole building.",
    },
    related: ["Virtual DOM", "Fiber", "Component"],
  },
  {
    term: "Fiber",
    fa: "فایبر",
    category: "frontend",
    definition: {
      fa: "Fiber موتور داخلی ری‌اکت است که کارِ رندر را به واحدهای کوچک شکسته و قابل‌وقفه می‌کند؛ ری‌اکت می‌تواند اولویت‌بندی کند، رندر طولانی را قطع کند و به تعامل کاربر برسد.",
      en: "Fiber is React's internal engine that splits rendering into small, interruptible units; React can prioritize, pause long renders and get back to user input faster.",
    },
    analogy: {
      fa: "مثل آشپزی با پرهیز از بلوک‌های طولانی: هر وقت سفارش فوری آمد (کلیک کاربر)، غذا نیمه‌کاره را کنار می‌گذاری، سفارش فوری را می‌دهی و بعد ادامه می‌دهی.",
      en: "Like a chef avoiding long unbroken tasks: when a rush order (a user click) arrives, they pause the half-made dish, serve the rush order, then resume.",
    },
    related: ["Reconciliation", "Suspense", "Virtual DOM"],
  },
  {
    term: "Context API",
    fa: "رابط زمینه",
    category: "frontend",
    definition: {
      fa: "Context داده را بدون پاس‌دادن دستی در هر لایه (prop drilling) به درخت تزریق می‌کند: theme، زبان و کاربر جاری نمونه‌های خوبش هستند. برای تغییرهای پرمخاطب، state manager مناسب‌تر است.",
      en: "Context injects data into a subtree without passing props through every layer (prop drilling): theme, language and current user are good fits. High-frequency changes need a real state manager.",
    },
    analogy: {
      fa: "مثل بلندگوی سالن: همه بدون اینکه پیام از دست به دست بچرخد، اعلام را می‌شنوند؛ ولی برای گفت‌وگوی دائمی و پرفشار، بلندگو ابزار درستی نیست.",
      en: "Like a hall loudspeaker: everyone hears announcements without the message being relayed hand to hand; but a loudspeaker is the wrong tool for constant, high-frequency chatter.",
    },
    related: ["State", "Props", "Lifting State Up"],
  },
  {
    term: "React Portal",
    fa: "پورتال ری‌اکت",
    category: "frontend",
    definition: {
      fa: "پورتال فرزند را در گره‌ای دیگر از DOM رندر می‌کند نه در والد خودش — برای مودال، tooltip و dropdown که باید از overflow و z-index والد فرار کنند؛ event bubbling از درخت ری‌اکت حفظ می‌شود.",
      en: "A portal renders children into a different DOM node than their parent — for modals, tooltips and dropdowns that must escape overflow and z-index; React-tree event bubbling is preserved.",
    },
    analogy: {
      fa: "مثل دفتر تحویل بسته‌ها در لابی: بسته از آپارتمان تو بیرون می‌رود ولی همچنان «بسته‌ی تو» است؛ اعلان‌ها و مسئولیتش از طریق همان زنجیره‌ی اصلی می‌رسد.",
      en: "Like a lobby parcel locker: the package physically leaves your apartment yet remains yours; notifications still reach you through the same chain.",
    },
    related: ["DOM", "Component", "Event Bubbling"],
  },
  {
    term: "Suspense",
    fa: "تعلیق",
    category: "frontend",
    definition: {
      fa: "Suspense مرز «هنوز آماده نیست» است: کامپوننت‌های در انتظار داده/کد جای fallback نمایش داده می‌شوند و وقتی آماده شدند، بدون قطع کل صفحه ظاهر می‌شوند — با streaming در Next.js ترکیب طلایی است.",
      en: "Suspense is the 'not ready yet' boundary: waiting components show a fallback and appear when ready without breaking the whole page — golden with streaming in Next.js.",
    },
    analogy: {
      fa: "مثل بخش‌بندی بازشدن پرده‌ی تئاتر: هر صحنه هر وقت آماده شد پرده‌اش را بالا می‌کشد؛ تماشاگر برای صحنه‌های آماده منتظر بقیه نمی‌ماند.",
      en: "Like staged theater curtains: each scene rises when ready; the audience doesn't wait for unfinished scenes to enjoy finished ones.",
    },
    related: ["SSR", "Lazy Loading", "Fiber"],
  },
  {
    term: "Controlled Component",
    fa: "کامپوننت کنترل‌شده",
    category: "frontend",
    definition: {
      fa: "در فرم کنترل‌شده، مقدار input از state می‌آید و هر تغییر با onChange به state برمی‌گردد؛ منبع حقیقت واحد است. در uncontrolled، DOM خودش مقدار را نگه می‌دارد و با ref می‌خوانی.",
      en: "In a controlled form, the input's value comes from state and every change flows back via onChange — a single source of truth. In uncontrolled, the DOM owns the value and you read it with a ref.",
    },
    analogy: {
      fa: "فرق بین مکالمه‌ی زنده و یادداشت: در کنترل‌شده هر حرف بلافاصله به دفتر مرکزی می‌رسد؛ در uncontrolled، دفتر فقط آخرش یک‌جا یادداشت را می‌گیرد.",
      en: "Live conversation vs a note: controlled sends every keystroke to HQ instantly; uncontrolled hands HQ the note only at the end.",
    },
    related: ["Controlled Component", "State", "Lifting State Up"],
  },
  {
    term: "Lifting State Up",
    fa: "بالابردن وضعیت",
    category: "frontend",
    definition: {
      fa: "وقتی دو کامپوننت به یک داده نیاز دارند، state به نزدیک‌ترین والد مشترک منتقل و از طریق props پایین فرستاده می‌شود؛ single source of truth می‌سازد و دو نسخه‌ی ناهم‌ساز از داده را می‌کشد.",
      en: "When two components need one piece of data, its state moves to the closest shared parent and flows down via props — one source of truth, no divergent copies.",
    },
    analogy: {
      fa: "مثل تقویم خانواده روی دیوار نشیمن: به‌جای دو تقویم متناقض در دو اتاق، یکی مشترک بالا قرار می‌گیرد و همه از آن می‌خوانند.",
      en: "Like a family calendar in the living room: instead of two conflicting calendars in two rooms, one shared copy sits high where everyone reads it.",
    },
    related: ["State", "Props", "Context API"],
  },
  {
    term: "Custom Hook",
    fa: "هوک سفارشی",
    category: "frontend",
    definition: {
      fa: "Custom Hook تابعی است که با use شروع می‌شود و هوک‌های خود ری‌اکت را در آن می‌پیچی تا منطق مشترک (fetch، فرم، resize) بین کامپوننت‌ها قابل استفاده‌مجدد شود؛ state هر مصرف‌کننده مستقل است.",
      en: "A custom hook (name starting with use) wraps React's own hooks to reuse shared logic (fetching, forms, resize) across components — each consumer gets independent state.",
    },
    analogy: {
      fa: "مثل دستور پخت مشترک: هر خانوار مواد خام خودش را می‌ریزد ولی مراحل یکی است؛ نسخه‌ی هر کس در آشپزخانه‌ی خودش پخته می‌شود، نه در یک قابلمه‌ی مشترک.",
      en: "Like a shared recipe: every household adds its own ingredients but follows the same steps — each version cooks in its own kitchen, never one shared pot.",
    },
    related: ["useEffect", "State", "Component"],
  },
  {
    term: "useEffect",
    fa: "هوک اثر جانبی",
    category: "frontend",
    definition: {
      fa: "useEffect کارهای بیرون از رندر را انجام می‌دهد: fetch، subscription، تایمر و تغییر DOM. آرایه‌ی وابستگی تعیین می‌کند کِی دوباره اجرا شود؛ تابع برگشتی هم پاک‌سازی است تا نشت نکند.",
      en: "useEffect handles work outside rendering: fetching, subscriptions, timers and DOM changes. Its dependency array decides when it re-runs, and the returned function cleans up to prevent leaks.",
    },
    analogy: {
      fa: "مثل قرار ملاقات‌های تقویم: «وقتی این چیزها عوض شدند، این کار را بکن؛ و وقتی تمام شد، این‌ها را سر جایشان بگذار» — بدون پاک‌سازی، دفتر پر از قرارهای رهاشده می‌شود.",
      en: "Like calendar appointments: 'when these things change, do this; when done, put things back' — without cleanup, the calendar fills with abandoned meetings.",
    },
    related: ["Custom Hook", "State", "Event Loop"],
  },
  {
    term: "React 19 Actions",
    fa: "اکشن‌های ری‌اکت ۱۹",
    category: "frontend",
    definition: {
      fa: "Actions در React 19 مدیریت فرم را یک‌پارچه می‌کنند: تابع action خودش transition و pending state را می‌چیند، optimistic update و خطاها را با useActionState/useOptimistic مدیریت می‌کند و با RSC همکاری می‌کند.",
      en: "React 19 Actions unify form handling: the action function wires transitions and pending state itself, optimistic updates and errors flow through useActionState/useOptimistic, and it composes with RSC.",
    },
    analogy: {
      fa: "مثل پیک با رسید خودکار: فرم را می‌دهی، پیک خودش مسیر را می‌چیند، «در حال ارسال» را نشان می‌دهد و اگر جایی خراب شد، دوباره می‌گذارد و خبر می‌دهد.",
      en: "Like a courier with automatic receipts: hand over the form and the courier plans the route, shows 'sending', retries failures and reports back — all built in.",
    },
    related: ["Controlled Component", "State", "SSR"],
  },
  {
    term: "Lazy Loading",
    fa: "بارگذاری تنبل",
    category: "frontend",
    definition: {
      fa: "Lazy loading یعنی کد یا تصویر فقط وقتی واقعاً لازم شد دانلود/اجرا شود: مسیرها و کامپوننت‌های سنگین با dynamic import تقسیم می‌شوند و خروجی اولیه سبک می‌ماند — مستقیم روی FCP و LCP اثر دارد.",
      en: "Lazy loading downloads/executes code or images only when truly needed: heavy routes and components split via dynamic imports keep the initial bundle light — directly improving FCP and LCP.",
    },
    analogy: {
      fa: "مثل کتابخانه که فقط وقتی کتاب را خواستی، آن را از انبار می‌آورد؛ به‌جای حمل کل قفسه‌ها به خانه در روز اول.",
      en: "Like a library fetching a book only when you request it — instead of hauling every shelf home on day one.",
    },
    related: ["Suspense", "Module Bundler", "Tree Shaking"],
  },
];
