import type { DeepDive } from "./schema";

/**
 * DATA FILE — Deep-dive cards. Consumed by: QuestionCard markers on
 * /interview/[field] pages (click a "؟" marker → this card opens).
 * Every card is verified against reputable sources (MDN, React docs,
 * official spec/databases). IDs are referenced by interview-bank questions.
 */
export const deepDiveList: DeepDive[] = [
  /* ── JavaScript ─────────────────────────────────────────────── */
  {
    id: "js-hoisting-tdz",
    title: { fa: "هویستینگ و ناحیه‌ی مرگ موقت، دقیق", en: "Hoisting & the TDZ, precisely" },
    detail: {
      fa: "جاوااسکریپت هیچ کدی را فیزیکی جابه‌جا نمی‌کند. در فاز «نصب اسکوپ»، اعلان‌ها ساخته می‌شوند: اعلان var به undefined مقدار‌دهی می‌شود؛ اعلان function کامل با بدنه در دسترس است؛ let/const یک binding ساخته می‌شود ولی مقدار‌دهی‌نشده می‌ماند — این بازه همان TDZ است و خواندنش ReferenceError می‌دهد. let/const این‌طور طراحی شدند تا باگ‌های خاموشی که var می‌ساخت (استفاده قبل از تعریف) آشکار شوند. importها هم قبل از اجرای ماژول لینک می‌شوند.\n\nمنبع دقیق: مشخصات ECMA-262، بخش Declaration Instantiation.",
      en: "JavaScript never physically moves code. During scope instantiation, declarations are created: var bindings initialize to undefined; function declarations are fully available with their body; let/const create a binding that stays uninitialized — that window is the TDZ, and reading it throws ReferenceError. let/const were designed this way to surface the silent bugs var allowed (use before define). Imports are also linked before module evaluation.\n\nPrecise source: ECMA-262 spec, Declaration Instantiation.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
  },
  {
    id: "js-event-loop-phases",
    title: { fa: "چرخه‌ی رویداد، دقیق و فاز‌به‌فاز", en: "The event loop, phase by phase" },
    detail: {
      fa: "حلقه‌ی رویداد در هر تکرار: ۱) اجرای همه‌ی کد هم‌زمان باقی‌مانده روی پشته تا خالی شود؛ ۲) خالی‌کردن کل صف microtask (Promise.then، queueMicrotask، MutationObserver) تا تمام شود؛ ۳) در مرورگر، اجرای یک وظیفه‌ی macrotask (تایمر، رویداد، I/O) و برگشت به مرحله‌ی ۲. چون microtaskها قبل از هر رندر خالی می‌شوند، Promise همیشه زودتر از setTimeout(0) اجرا می‌شود. در Node، phases مثل timers و poll جدا دارند ولی قانون «microtask بعد از هر macrotask» همان است.",
      en: "Each loop iteration: 1) run all remaining synchronous code until the stack is empty; 2) drain the entire microtask queue (Promise.then, queueMicrotask, MutationObserver); 3) in browsers, run one macrotask (timer, event, I/O) and go back to step 2. Because microtasks drain before any render, a Promise always beats setTimeout(0). Node adds phases like timers and poll, but the 'microtasks after every macrotask' rule is the same.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop",
  },
  {
    id: "js-microtask-vs-macrotask",
    title: { fa: "microtask در برابر macrotask", en: "Microtask vs macrotask" },
    detail: {
      fa: "macrotask: setTimeout، setInterval، رویدادهای DOM، I/O — هر کدام یک «نوبت کامل». microtask: callbacks of Promise.then/catch/finally، queueMicrotask، awaitهای resolve‌شده — نوبت‌های کوتاه که تا خالی‌شدن کل صف، بی‌وقفه اجرا می‌شوند و اجازه‌ی رندر نمی‌دهند. نتیجه‌ی عملی: با microtask می‌توانی مطمئن باشی کدت «بعد از این تیکه کد و قبل از رندر بعدی» اجرا می‌شود؛ با macrotask فقط «در چرخه‌های بعدی».",
      en: "Macrotasks: setTimeout, setInterval, DOM events, I/O — each gets a full turn. Microtasks: Promise.then/catch/finally callbacks, queueMicrotask, resolved awaits — short jobs that run until the queue drains, without letting the page render. Practical result: a microtask is guaranteed to run 'after this code, before the next render'; a macrotask only 'in later cycles'.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide",
  },
  {
    id: "js-closures-gc",
    title: { fa: "بستار و حافظه: چه‌وقت نشت می‌کند؟", en: "Closures & memory: when do they leak?" },
    detail: {
      fa: "بستار تا وقتی زنده است، کل scope محصورش را نگه می‌دارد — نه فقط متغیر استفاده‌شده را. اگر یک event handler روی عنصر ماندگار ثبت شود و در متغیرش به آبجکت بزرگی اشاره کند، آن آبجکت جمع‌نشدنی می‌شود. راه درمان: وقتی دیگر لازم نیست listener را remove کنی، اشاره‌گرهای بزرگ را به null بگذار و از WeakMap/WeakRef برای داده‌های قابل‌جمع استفاده کن. DevTools → Memory → Heap snapshot نشت را نشان می‌دهد.",
      en: "A closure keeps its entire enclosing scope alive — not just the variables it uses. If an event handler registered on a long-lived element references a large object, that object can never be collected. Fix: remove listeners when done, null out large references, and use WeakMap/WeakRef for collectable data. DevTools → Memory → Heap snapshot reveals leaks.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management",
  },
  {
    id: "js-this-binding",
    title: { fa: "قانون‌های اتصال this، مرتب", en: "The rules that bind this, in order" },
    detail: {
      fa: "ترتیب اولویت: ۱) new binding — با new، this آبجکت تازه است؛ ۲) explicit binding — call/apply/bind این را تحمیل می‌کنند؛ ۳) implicit binding — obj.fn() یعنی this همان obj است؛ ۴) default — در حالت loose، this سراسری (window/undefined در strict). توابع فلشی this ندارند — از محیط lexical خودشان می‌گیرند و call/bind رویشان اثر ندارد. در event handlerهای DOM، this همان element است مگر فلشی باشد.",
      en: "Priority order: 1) new binding — with new, this is the fresh object; 2) explicit — call/apply/bind force it; 3) implicit — obj.fn() means this is obj; 4) default — global object in loose mode, undefined in strict mode. Arrow functions have no this of their own — they take it lexically, and call/bind cannot change it. In DOM handlers, this is the element unless it's an arrow function.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this",
  },
  {
    id: "js-prototype-chain",
    title: { fa: "زنجیره‌ی prototype تا انتها", en: "The prototype chain, end to end" },
    detail: {
      fa: "هر آبجکت یک [[Prototype]] داخلی دارد. دسترسی به ویژگی‌ای که در خود آبجکت نیست، در prototype جست‌وجو و تا رسیدن به null ادامه پیدا می‌کند. Object.prototype سر زنجیره‌ی معمولی‌هاست (hasOwnProperty و toString از همین‌جا می‌آیند). کلاس‌ها فقط شکرِ این سیستم‌اند: متدهای کلاس روی Class.prototype می‌نشینند. Object.create(null) آبجکتی بدون زنجیره می‌سازد — دیکشنری تمیز بدون خطر بازنویسی کلیدها.",
      en: "Every object has an internal [[Prototype]]. A missing property lookup walks that prototype and keeps going until null. Object.prototype heads the usual chain (hasOwnProperty and toString live there). Classes are sugar over this system: class methods sit on Class.prototype. Object.create(null) builds a chain-free object — a clean dictionary immune to key shadowing.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
  },
  {
    id: "js-cookie-storage",
    title: { fa: "کوکی، localStorage، sessionStorage — از نگاه امنیت", en: "Cookies, localStorage, sessionStorage — security view" },
    detail: {
      fa: "کوکی با هر درخواست به سرور می‌رود و با HttpOnly از دسترس جاوااسکریپت خارج است (دفاع در برابر XSS) و با SameSite در برابر CSRF؛ انقضا هم دارد. localStorage پایدار و فقط کلاینت است — حجمش ~۵-۱۰MB و برای توکن دسترسی خطرناک است چون XSS می‌تواند بخواندش. sessionStorage همین است ولی با بستن تب تمام. قاعده‌ی امن: توکن نشست در کوکی httpOnly+Secure+SameSite؛ داده‌های UI در storageها.",
      en: "Cookies travel with every request, are invisible to JS with HttpOnly (an XSS defense) and resist CSRF with SameSite; they can expire. localStorage is persistent, client-only (~5–10MB) — storing access tokens there is dangerous because XSS can read them. sessionStorage is the same but dies with the tab. Secure rule: session tokens in HttpOnly+Secure+SameSite cookies; UI data in web storage.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",
  },
  {
    id: "js-async-defer",
    title: { fa: "script، async، defer — دقیقاً چه‌فرق دارند", en: "script vs async vs defer — exactly" },
    detail: {
      fa: "script ساده: دانلود → اجرا؛ هر دو مرحله پارسی HTML را متوقف می‌کنند. async: دانلود موازی، اما به‌محض رسیدن اجرا می‌شود و پارسی را قطع می‌کند — ترتیب اجرا نامطمئن؛ برای اسکریپت‌های مستقل مثل analytics. defer: دانلود موازی، اجرا فقط بعد از کامل‌شدن پارسی و قبل از DOMContentLoaded — ترتیب حفظ می‌شود؛ انتخاب پیش‌فرض اسکریپت‌های اپ. ماژول‌ها (type=\"module\") به‌طور پیش‌فرض مثل defer رفتار می‌کنند.",
      en: "Plain script: download → execute; both block HTML parsing. async: parallel download but executes the moment it arrives, cutting parsing — execution order is unpredictable; good for independent scripts like analytics. defer: parallel download, executes only after parsing completes and before DOMContentLoaded — order preserved; the default choice for app scripts. Modules (type=\"module\") behave like defer by default.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script",
  },
  {
    id: "js-event-delegation",
    title: { fa: "واگذاری رویداد — کِی و کِی نه", en: "Event delegation — when and when not" },
    detail: {
      fa: "با یک listener روی والد، رویدادهای حبابیِ فرزندان را می‌گیری؛ شرطش این است که رویداد bubble کند (focus و blur حباب نمی‌کنند؛ focusin/focusout می‌کنند). مزایا: حافظه‌ی کم، پشتیبانی از عناصر پویا. محدودیت‌ها: رویدادهای بدون bubble، متوقف‌کردن میانه‌ی مسیر، و event.target که ممکن است داخل یک عنصر تو در تو باشد — با closest() پیدایش می‌کنی.",
      en: "One parent listener catches bubbling child events; the catch: the event must bubble (focus/blur don't — use focusin/focusout). Wins: low memory, works for dynamic elements. Limits: non-bubbling events, mid-path stopPropagation, and event.target possibly nested inside another element — resolve it with closest().",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling",
  },
  {
    id: "js-equality-coercion",
    title: { fa: "موتور == دقیقاً چه می‌کند", en: "What == actually does" },
    detail: {
      fa: "== در مشخصات «انتزاعی برابری» نام دارد: اگر نوع‌ها یکی باشند همان ===؛ وگرنه تبدیل‌های ترتیبی مشخص انجام می‌شود — null == undefined (درست)، عدد در برابر رشته → رشته به عدد، boolean به عدد، آبجکت با ToPrimitive به primitive. نتیجه‌های مشهور: '0'==false درست، []==![] درست، NaN==NaN غلط. === هیچ تبدیلی نمی‌کند و نوع متفاوت را بی‌درنگ غلط می‌دهد — قاعده‌ی پیش‌فرض تیم‌ها.",
      en: "== is formally 'abstract equality': same types behave like ===; otherwise ordered conversions apply — null == undefined (true), number vs string → string becomes number, booleans become numbers, objects go through ToPrimitive. Famous results: '0'==false is true, []==![] is true, NaN==NaN is false. === does no conversions and rejects different types instantly — the team default.",
    },
    sourceUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality",
  },

  /* ── React ─────────────────────────────────────────────────── */
  {
    id: "react-reconciliation-fiber",
    title: { fa: "Reconciliation با Fiber — چطور قابل‌وقفه شد", en: "Reconciliation with Fiber — how renders became interruptible" },
    detail: {
      fa: "قبل از Fiber، مقایسه‌ی درخت یک‌قطعه و غیرقابل‌وقفه بود و با درخت‌های بزرگ، فریم‌ها می‌افتادند. Fiber هر کامپوننت را به گره‌ای با اولویت تبدیل کرد؛ ری‌اکت کار را در تکه‌های زمانی می‌برِد، بین تکه‌ها به ورودی کاربر برمی‌گردد و درختِ «در حال کار» را جدا از «در حال نمایش» نگه می‌دارد تا وقتی تمام شد یک‌جا commit شود — برای همین بین رندر و commit هیچ‌وقت UI نیمه‌کاره نمی‌بینی.",
      en: "Pre-Fiber, diffing was one unbreakable chunk and big trees dropped frames. Fiber turned each component into a node with priority; React slices the work into time chunks, yields to user input between slices, and keeps the 'work-in-progress' tree separate from the 'current' one, committing all at once — which is why you never see a half-rendered UI between render and commit.",
    },
    sourceUrl: "https://react.dev/reference/react-dom/server",
  },
  {
    id: "react-keys",
    title: { fa: "چرا key این‌قدر مهم است — از دید reconciliation", en: "Why keys matter — from reconciliation's view" },
    detail: {
      fa: "در لیست‌ها، ری‌اکت بین فرزندان قدیم و جدید را با key جور می‌کند؛ key پایدار یعنی «این همان آیتم قبلی است». با index به‌عنوان key، حذف از وسط باعث می‌شود همه‌ی keyها جابه‌جا شوند: ری‌اکت ناجور جور می‌چیند، state مربوط به آیتم‌ها جابه‌جا می‌شود و inputهای کنترل‌نشده مقدار غلط نشان می‌دهند. key باید بین خواهرها یکتا و پایدار باشد — id دیتابیس، نه Math.random().",
      en: "In lists, React pairs old and new children by key; a stable key means 'this is the same item as before'. With index as key, deleting from the middle shifts every key: React pairs wrongly, item state shuffles, and uncontrolled inputs show wrong values. Keys must be unique and stable among siblings — a database id, never Math.random().",
    },
    sourceUrl: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",
  },
  {
    id: "react-hydration",
    title: { fa: "Hydration دقیقاً چه می‌کند", en: "What hydration actually does" },
    detail: {
      fa: "سرور HTML آماده می‌فرستد؛ مرورگر صفحه را «فوری» نشان می‌دهد ولی خشک است — هیچ event listener ندارد. hydration یعنی ری‌اکت همان درخت را در کلاینت دوباره رندر می‌کند و به‌جای ساختن DOM، به گره‌های موجود «چسب» می‌زند و state را وصل می‌کند. ناهم‌خوانی سرور/کلاینت (مثل تاریخ محلی) هشدار mismatch می‌دهد. در React 18/19 hydration انتخابی و streaming است: بخش‌ها به‌مرور آب می‌شوند.",
      en: "The server ships ready-made HTML; the browser paints it instantly but it's inert — no event listeners. Hydration means React re-renders the same tree on the client and 'glues' onto the existing DOM nodes instead of rebuilding them, wiring up state. Server/client mismatches (like a local date) trigger hydration warnings. React 18/19 add selective hydration and streaming: sections hydrate progressively.",
    },
    sourceUrl: "https://react.dev/reference/react-dom/hydrateRoot",
  },
  {
    id: "react-setstate-batch",
    title: { fa: "setState و batching — چرا دو بار set، یک رندر", en: "setState and batching — why two sets make one render" },
    detail: {
      fa: "ری‌اکت چند فراخوانی setState را در یک رویداد به‌صورت دسته‌ای پردازش می‌کند تا هر بار فقط یک رندر انجام شود؛ به همین دلیل setCount(count+1) دو بار پشت‌سرهم هم فقط +۱ می‌دهد — هر دو همان snapshot قبلی را می‌خوانند. فرم درست: setCount(c => c+1) که به آخرین مقدار در صف آپدیت‌ها نگاه می‌کند. در React 18+ batching حتی داخل timeout و promiseها هم کار می‌کند (automatic batching).",
      en: "React batches multiple setState calls within one event into a single render; that's why setCount(count+1) twice still adds just 1 — both read the same previous snapshot. The correct form is setCount(c => c+1), which reads the latest queued value. Since React 18, automatic batching works even inside timeouts and promises.",
    },
    sourceUrl: "https://react.dev/reference/react/useState",
  },
  {
    id: "react-rsc-boundaries",
    title: { fa: "مرز Server Component — چه چیزی از کجا رد نمی‌شود", en: "The RSC boundary — what can't cross" },
    detail: {
      fa: "Server Component هرگز به باندل کلاینت نمی‌رود: نه JS، نه event handler، نه useState/useEffect؛ فقط می‌تواند props قابل‌serialize به کلاینت بدهد (تابع نه!). Client Component با 'use client' شروع می‌شود و children آن می‌توانند سروری باشند — این «ترکیب» کلید معماری است: صفحه سروری می‌ماند و جزیره‌های تعاملی کلاینت می‌شوند. مرز عبور داده سریال‌شده (RSC payload) است نه HTML.",
      en: "A Server Component never ships to the client bundle: no JS, no event handlers, no useState/useEffect; it can only pass serializable props to clients (functions not allowed!). A Client Component starts with 'use client' and its children can be server components — that composition is the architecture's key: pages stay server-side with interactive client islands. The boundary carries serialized data (the RSC payload), not HTML.",
    },
    sourceUrl: "https://react.dev/reference/rsc/server-components",
  },
  {
    id: "react-hooks-rules",
    title: { fa: "قواعد هوک‌ها — چرا واقعاً", en: "The rules of hooks — the real reason" },
    detail: {
      fa: "ری‌اکت هوک‌ها را بر اساس «ترتیب فراخوانی» به state هر کامپوننت وصل می‌کند، نه بر اساس نام. اگر هوک داخل شرط یا حلقه باشد، ترتیب بین دو رندر عوض می‌شود و ری‌اکت state را به هوک اشتباه می‌چسباند — خطای معروف Rendered fewer hooks than expected دقیقاً همین است. به همین دلیل eslint-plugin-react-hooks وجود دارد و هوک‌ها باید در بالاترین سطح کامپوننت صدا زده شوند.",
      en: "React pairs hooks to a component's state by call order, not by name. A hook inside a condition or loop changes the order between renders, and React attaches state to the wrong hook — the famous 'Rendered fewer hooks than expected' error. That's why eslint-plugin-react-hooks exists and hooks must run at the component's top level.",
    },
    sourceUrl: "https://react.dev/reference/rules/rules-of-hooks",
  },

  /* ── System design ─────────────────────────────────────────── */
  {
    id: "sd-cap",
    title: { fa: "CAP در عمل — هیچ‌کس همیشه هر سه را ندارد", en: "CAP in practice — nobody has all three" },
    detail: {
      fa: "P (تحمل پارتیشن) در سیستم‌های واقعی انتخاب نیست — شبکه قطع می‌شود؛ پس انتخاب واقعی: C یا A. CP (مثل Zookeeper، بانک‌های قدیمی): در پارتیشن، خواندن/نوشتن غیرهم‌اهنگ رد می‌شود تا عدد غلط نده. AP (مثل Cassandra در حالت پیش‌فرض، DNS): همیشه جواب می‌دهد، ولی ممکن است داده‌ی چند‌ثانیه‌ای عقب باشد. PACELC ادامه‌ی ماجراست: بدون پارتیشن هم بین Latency و Consistency انتخاب داری.",
      en: "P (partition tolerance) isn't a choice in real systems — networks partition; so the real choice is C or A. CP (ZooKeeper, banking): under partition, reject inconsistent reads/writes rather than serve wrong data. AP (Cassandra by default, DNS): always answer, possibly seconds stale. PACELC extends it: even without partitions you trade Latency against Consistency.",
    },
    sourceUrl: "https://en.wikipedia.org/wiki/CAP_theorem",
  },
  {
    id: "sd-consistent-hashing",
    title: { fa: "درهم‌سازی سازگار و گره‌های مجازی", en: "Consistent hashing & virtual nodes" },
    detail: {
      fa: "روی حلقه، هر سرور در چند نقطه می‌نشیند (virtual nodes) تا توزیع کلیدها یکنواخت‌تر شود؛ حذف یک سرور، بارش را میان همسایه‌ها پخش می‌کند نه همه‌ی سیستم. بدون VNs، یک سرورِ بدشانس سهم غیرمنطقی می‌گیرد. DynamoDB، Cassandra و لودبالانسرهای TCP پرکاربرد از همین الگو هستند؛ در cache farm هم تا حد ممکن cache hit را حفظ می‌کند.",
      en: "On the ring, each server occupies many points (virtual nodes) so keys distribute evenly; removing one server spreads its load across neighbors instead of the whole system. Without VNs, one unlucky server gets an unfair share. DynamoDB, Cassandra and TCP load balancers use this; in cache farms it preserves cache hits as much as possible.",
    },
    sourceUrl: "https://en.wikipedia.org/wiki/Consistent_hashing",
  },
  {
    id: "sd-idempotency",
    title: { fa: "Idempotency در پرداخت — الگوی کلید امنیتی", en: "Idempotency in payments — the key pattern" },
    detail: {
      fa: "کلاینت برای هر درخواست حساس یک Idempotency-Key یکتا (UUID) می‌سازد و در retry همان را می‌فرستد. سرور کلید را با نتیجه ذخیره می‌کند: تکرار بیاید، همان پاسخ قبلی برگردد بدون اجرای دوباره. پیاده‌سازی: جدول keys با unique constraint + ذخیره‌ی پاسخ؛ بین شروع و پایان هم lock می‌گذارند تا دو درخواست هم‌زمان دو تراکنش نسازند. Stripe و همه‌ی درگاه‌های بزرگ همین الگو را دارند.",
      en: "The client generates a unique Idempotency-Key (UUID) per sensitive request and reuses it on retries. The server stores key → result: a replay returns the previous response without re-executing. Implementation: a keys table with a unique constraint storing the response, plus a lock between start and finish so two concurrent requests can't create two transactions. Stripe and every major gateway use this pattern.",
    },
    sourceUrl: "https://stripe.com/docs/api/idempotent_requests",
  },
  {
    id: "sd-leader-election",
    title: { fa: "انتخاب رهبر و split brain", en: "Leader election & split brain" },
    detail: {
      fa: "خطر اصلی: دو نود هم‌زمان خودشان را رهبر ببینند (split brain) و دو بار بنویسند. راه‌حل‌ها: اجاره‌ی رهبر با TTL در یک مخزن مشترک (Redis/ZooKeeper) که باید تمدید شود؛ یا اجماع (Raft) که با اکثریت رأی رهبر می‌دهد و ترم (term) شماره می‌خورد تا رهبر قدیمی مدعایش باطل شود. بعد از انتخاب، همه‌ی نوشتن‌ها فقط از رهبر به followers جریان می‌یابد.",
      en: "The main danger: two nodes both believing they're leader (split brain) and writing twice. Solutions: leader leases with TTL in a shared store (Redis/ZooKeeper) that must be renewed; or consensus (Raft), which elects by majority vote and numbers terms so a stale leader's claims are rejected. After election, writes flow only from leader to followers.",
    },
    sourceUrl: "https://en.wikipedia.org/wiki/Raft_(algorithm)",
  },
  {
    id: "sd-circuit-breaker",
    title: { fa: "مدارشکن — سه حالت و نیمه‌باز", en: "Circuit breaker — three states and half-open" },
    detail: {
      fa: "سه حالت: بسته (عادی)، باز (خطا از آستانه گذشت؛ همه‌ی درخواست‌ها فوراً رد می‌شوند بدون مصرف timeout)، نیمه‌باز (بعد از cooldown چند درخواست آزمایشی می‌رود). آستانه درست: بر اساس نرخ خطا و حداقل حجم — نه بر اساس ۲ خطای اول صبح. با retry exponential backoff و timeoutهای سفت ترکیب می‌شود؛ کتابخانه‌های استاندارد: resilience4j، Polly، opossum.",
      en: "Three states: closed (normal), open (error rate crossed the threshold — requests are rejected instantly without burning timeouts), half-open (after a cooldown, a few probe requests go through). Set thresholds on error rate plus minimum volume — not on the first two failures of the morning. Combine with exponential-backoff retries and strict timeouts; standard libs: resilience4j, Polly, opossum.",
    },
    sourceUrl: "https://martinfowler.com/bliki/CircuitBreaker.html",
  },
  {
    id: "sd-fanout-celebrity",
    title: { fa: "مشکل سلبریتی — راه‌حل ترکیبی", en: "The celebrity problem — the hybrid fix" },
    detail: {
      fa: "Fan-out on write: نوشتن گران، خواندن O(1) — عالی برای کاربر معمولی. Fan-out on read: نوشتن ارزان، خواندن گران — تنها گزینه برای سلبریتی با ۱۰۰M دنبال‌کننده (پستش را در ۱۰۰M تایملاین کپی کردن غیرممکن است). راه‌حل واقعی توییتر/اینستا: ترکیبی — فالوئرهای عادی پیش‌محاسبه، سلبریتی‌ها در زمان خواندن merge می‌شوند؛ کاربران غیرفعال هم اصلاً تایملاین پیش‌ساخته نمی‌گیرند.",
      en: "Fan-out on write: expensive writes, O(1) reads — great for normal users. Fan-out on read: cheap writes, expensive reads — the only option for a celebrity with 100M followers (copying one post into 100M timelines is impossible). Twitter/Instagram's real answer is hybrid: precompute for regular followers, merge celebrities at read time, and skip inactive users entirely.",
    },
    sourceUrl: "https://en.wikipedia.org/wiki/Distributed_computing",
  },
  {
    id: "sd-eventual-consistency",
    title: { fa: "سازگاری نهایی — کِی قابل قبول است", en: "Eventual consistency — when is it acceptable" },
    detail: {
      fa: "پرسش درست: «چقدر عقب‌ماندگی قابل تحمل است؟» قابل قبول: شمارنده‌ی لایک، فید، analytics، جست‌وجو. خطرناک: موجودی انبار (فروش دوباره‌ی کالای تمام‌شده)، حساب بانکی، صلاحیت دسترسی. ابزارهای میان‌راه: read-your-writes برای خود کاربر (نشست را از نسخه‌ی اصلی بخوان)، monotonic reads، و نمایش «در حال به‌روزرسانی» به‌جای عدد نادرست.",
      en: "The right question: 'how much staleness is tolerable?' Acceptable: like counters, feeds, analytics, search. Dangerous: inventory (selling sold-out stock), bank balances, permission checks. Mitigations: read-your-writes for the acting user (read the session from the primary), monotonic reads, and UIs that say 'updating…' instead of showing wrong numbers.",
    },
    sourceUrl: "https://en.wikipedia.org/wiki/Eventual_consistency",
  },

  /* ── LLM ───────────────────────────────────────────────────── */
  {
    id: "llm-attention",
    title: { fa: "attention ریاضی‌اش چیست — Q، K، V", en: "The math of attention — Q, K, V" },
    detail: {
      fa: "هر توکن سه بردار می‌سازد: Query (چه دنبالش هستم)، Key (چه پیشنهادی دارم)، Value (محتوایم چیست). امتیاز توجه = dot product کوئری هر توکن با کلید همه‌ی توکن‌ها، سپس softmax برای وزن‌ها و جمع وزنی valueها. به‌کارگیری چند head موازی یعنی هم‌زمان چند نوع رابطه (نحوی، مرجعی، معنایی) دیده شود. هزینه‌اش O(n²) نسبت به طول متن است — ریشه‌ی محدودیت context و تکنیک‌هایی مثل GQA و FlashAttention.",
      en: "Every token builds three vectors: Query (what am I looking for), Key (what I offer), Value (my content). Attention scores = each token's query dot-producted with every key, softmaxed into weights, then a weighted sum of values. Multiple heads run in parallel to catch different relation types (syntactic, referential, semantic). The cost is O(n²) in text length — the root of context limits and of techniques like GQA and FlashAttention.",
    },
    sourceUrl: "https://en.wikipedia.org/wiki/Attention_(machine_learning)",
  },
  {
    id: "llm-temperature",
    title: { fa: "temperature — زیر سرِ hood چه می‌کند", en: "Temperature — under the hood" },
    detail: {
      fa: "مدل روی کل واژگان یک توزیع احتمال می‌دهد؛ temperature قبل از softmax روی logits تقسیم می‌شود: T نزدیک صفر → تفاوت logits شدید می‌شود و تقریباً همیشه حداکثر محتمل انتخاب می‌شود (deterministic)؛ T بالای ۱ → توزیع تخت‌تر و گزینه‌های کم‌احتمال هم شانس می‌گیرند. برای استخراج ساختارمند و طبقه‌بندی T=0؛ برای ایده‌پردازی 0.7-1؛ بالای 1.3 معمولاً بی‌ثباتی کلامی می‌دهد. with top_p همراه کار می‌کند (nucleus sampling).",
      en: "The model produces a probability distribution over the whole vocabulary; temperature divides the logits before softmax: T near 0 sharpens differences so the top choice nearly always wins (deterministic); T above 1 flattens the distribution so low-probability options get chances. Use T=0 for structured extraction and classification, 0.7–1 for ideation, and expect incoherence above ~1.3. It works together with top_p (nucleus sampling).",
    },
    sourceUrl: "https://platform.openai.com/docs/guides/text-generation",
  },
  {
    id: "llm-moe",
    title: { fa: "Mixture of Experts — چرا مدل ۴۰۰B با هزینه‌ی ۵۰B اجرا می‌شود", en: "MoE — why a 400B model runs at 50B cost" },
    detail: {
      fa: "در MoE، لایه‌ی FFN هر بلوک با چند «expert» جایگزین شده و یک router کوچک برای هر توکن top-k متخصص را انتخاب می‌کند (معمولاً k=2). پارامترها کل‌اند ولی در هر پاس فقط بخشی فعال است (active params)؛ به همین دلیل کیفیت مدل بزرگ با هزینه‌ی inferenc کوچک‌تر می‌آید. چالش‌ها: بار متوازن متخصص‌ها (load balancing loss)، حافظه‌ی بالا برای نگه‌داشتن همه‌ی متخصص‌ها و پیچیدگی آموزش.",
      en: "In MoE, each block's FFN is replaced by several 'experts', and a small router picks the top-k experts per token (usually k=2). Total parameters are huge but only a fraction is active per response (active params) — that's how big-model quality arrives at smaller inference cost. Challenges: balancing expert load (a load-balancing loss), the memory to hold all experts, and training complexity.",
    },
    sourceUrl: "https://huggingface.co/blog/moe",
  },
];

/** Fast id → card lookup. Consumed by: QuestionCard markers. */
export const deepDiveIndex: Record<string, DeepDive> = Object.fromEntries(
  deepDiveList.map((d) => [d.id, d]),
);
