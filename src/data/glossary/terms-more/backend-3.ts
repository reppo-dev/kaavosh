import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (backend, part 3). Merged into terms.ts → /glossary page. */
export const moreBackendTerms3: GlossaryTerm[] = [
  {
    term: "SQL",
    fa: "اس‌کیو‌ال",
    category: "backend",
    definition: {
      fa: "SQL زبان استاندارد گفت‌وگو با پایگاه‌داده‌های رابطه‌ای است: SELECT خواندن، INSERT/UPDATE/DELETE نوشتن، JOIN ترکیب جدول‌ها و WHERE فیلتر. بخش‌هایش شامل DDL (ساختار) و DML (داده) است و تقریباً هر دیتابیس رابطه‌ای آن را می‌فهمد.",
      en: "SQL is the standard language for talking to relational databases: SELECT reads, INSERT/UPDATE/DELETE write, JOIN combines tables, WHERE filters. It spans DDL (structure) and DML (data), and virtually every relational database understands it.",
    },
    analogy: {
      fa: "مثل فرم‌های استاندارد اداری: هر اداره (دیتابیس) زبان مشترکی دارد که با آن درخواست می‌دهی «این ستون‌ها را از سطرهایی که این شرط را دارند بده».",
      en: "Like standardized office forms: every office (database) shares one language for 'give me these columns from rows matching this condition'.",
    },
    related: ["NoSQL", "Join", "Index", "Transaction", "Normalization"],
  },
  {
    term: "Dependency Injection",
    fa: "تزریق وابستگی",
    category: "backend",
    definition: {
      fa: "در تزریق وابستگی، کلاس وابستگی‌هایش (سرویس‌ها، مخازن داده) را خودش نمی‌سازد؛ بیرون تحویلش می‌دهد — از طریق constructor یا setter. نتیجه: کد قابل‌تست می‌شود (mock تزریق می‌کنی)، وابستگی‌ها صریح‌اند و جایگزینی پیاده‌سازی آسان است. Spring و Angular این را در هسته دارند.",
      en: "With dependency injection, a class never constructs its own dependencies (services, repositories); they're handed in — via constructor or setter. Result: testable code (inject mocks), explicit dependencies, and painless implementation swaps. Spring and Angular are built around it.",
    },
    analogy: {
      fa: "مثل آشپزی که خودش از مغازه مواد نمی‌خرد؛ هر صبح سبد مواد آماده به آشپزخانه می‌رسد — فردا می‌توانی همان سبد را از تأمین‌کننده‌ی دیگری بگیری.",
      en: "Like a chef who never shops: every morning a prepped basket arrives — tomorrow you swap the supplier without touching the kitchen.",
    },
    related: ["Inversion of Control", "SOLID Principles", "Design Pattern"],
  },
  {
    term: "Inversion of Control",
    fa: "وارونگی کنترل",
    category: "backend",
    definition: {
      fa: "IoC یعنی به‌جای اینکه کد تو چارچوب را صدا بزند و مسیر اجرا را کنترل کند، چارچوب کد تو را در نقاط از پیش‌تعریف‌شده صدا می‌زند (Hollywood principle: «به ما زنگ بزنید، به شما مراجعه می‌کنیم»). تزریق وابستگی رایج‌ترین شکل آن است؛ کنترل جریان به فریم‌ورک منتقل می‌شود.",
      en: "Inversion of control means instead of your code calling the framework and driving the flow, the framework calls your code at predefined hooks ('don't call us, we'll call you'). Dependency injection is its most common form — flow control moves to the framework.",
    },
    analogy: {
      fa: "مثل استخدام در شرکت: قبلاً خودت وقت ملاقات‌ها را تعیین می‌کردی (کد تو کنترل دارد)؛ حالا سازمان برنامه می‌ریزد و تو را دعوت می‌کند.",
      en: "Like joining a company: you used to schedule your own meetings (your code in control); now the organization sets the calendar and summons you.",
    },
    related: ["Dependency Injection", "Framework"],
  },
  {
    term: "SOLID Principles",
    fa: "اصول سالید",
    category: "backend",
    definition: {
      fa: "پنج اصل طراحی شیءگرا: تک‌مسئولیتی (هر کلاس یک دلیل برای تغییر)، باز-بسته (باز برای توسعه، بسته برای تغییر)، جایگزینی لیسکوف (زیرکلاس باید جای والد بنشیند)، تفکیک اینترفیس (اینترفیس‌های کوچک و تخصصی) و وارونگی وابستگی (وابستگی به انتزاع، نه پیاده‌سازی).",
      en: "Five object-oriented design principles: Single Responsibility (one reason to change per class), Open-Closed (open to extension, closed to modification), Liskov Substitution (subclasses must fit where parents do), Interface Segregation (small focused interfaces), and Dependency Inversion (depend on abstractions, not implementations).",
    },
    analogy: {
      fa: "مثل اصول سازمان‌دهی یک شرکت سالم: هر واحد یک وظیفه، استخدام از بیرون بدون بازسازی داخلی، جایگزینی کارمند بدون اختلال، شرح شغل دقیق و قرارداد با متخصص نه با هرکسی.",
      en: "Like running a healthy organization: one job per unit, grow by hiring not restructuring, substitutions that don't disrupt, precise job descriptions, and contracts with specialists rather than generalists.",
    },
    related: ["Dependency Injection", "Inversion of Control", "Class", "Design Pattern"],
  },
  {
    term: "MVC",
    fa: "ام‌وی‌سی",
    category: "backend",
    definition: {
      fa: "MVC اپ را به سه لایه می‌شکند: Model داده و منطق، View نمایش، Controller میانجی که ورودی را می‌گیرد، مدل را به‌روز می‌کند و view را انتخاب می‌کند. جداسازی نگرانی‌ها را ممکن می‌کند؛ Django نسخه‌ی MVT و Flutter/Android نسخه‌های MVVM/MVP را دارد.",
      en: "MVC splits an app into Model (data + logic), View (presentation), and Controller (mediator: takes input, updates the model, picks the view). It separates concerns; Django's MVT and mobile's MVVM/MVP are close cousins.",
    },
    analogy: {
      fa: "مثل رستوران: آشپزخانه مدل است (غذا می‌سازد)، بشقاب و تزئین view است، گارسون controller است که سفارش می‌گیرد و هماهنگ می‌کند.",
      en: "Like a restaurant: the kitchen is the model, plating is the view, and the waiter is the controller coordinating between them.",
    },
    related: ["MVVM", "SOLID Principles"],
  },
  {
    term: "MVVM",
    fa: "ام‌وی‌وی‌ام",
    category: "mobile",
    definition: {
      fa: "MVVM سه لایه دارد: View (UI)، ViewModel (وضعیت و منطق نمایش، بدون ارجاع به View) و Model (داده). ViewModel داده را به‌صورت observable منتشر می‌کند و View خودش را به‌روز می‌کند — تست‌پذیری بالا و جداسازی کامل UI از منطق؛ الگوی استاندارد Android و WPF.",
      en: "MVVM has three layers: View (UI), ViewModel (presentation state/logic, no reference to the View), and Model (data). The ViewModel exposes observable state and the View updates itself — highly testable, fully decoupling UI from logic; the standard pattern in Android and WPF.",
    },
    analogy: {
      fa: "مثل پشت‌صحنه‌ی تلویزیون: مجری (view) فقط جلوی دوربین است؛ کارگردان (viewmodel) متن و ترتیب را می‌دهد ولی مجری را نمی‌بیند — هر دو مستقل عوض می‌شوند.",
      en: "Like TV production: the presenter (view) is on camera; the director (viewmodel) feeds content but never sees the presenter — each can change independently.",
    },
    related: ["MVC", "State"],
  },
  {
    term: "RPC",
    fa: "فراخوانی رویه‌ی از راه دور",
    category: "backend",
    definition: {
      fa: "RPC یعنی صدا زدن تابعی که روی سرویس دیگری اجرا می‌شود انگار تابع محلی است: شبکه، سریال‌سازی و انتظار پاسخ از تو مخفی می‌شود. ساده و سریع برای ارتباط داخلی سرویس‌ها، ولی با شکست شبکه (تایم‌اوت، تکرار ناخواسته) باید آگاهانه کنار بیایی.",
      en: "RPC means calling a function that runs on another service as if it were local: the network, serialization and waiting are hidden from you. It's simple and fast for internal service calls, but you must consciously handle network failure (timeouts, unintended retries).",
    },
    analogy: {
      fa: "مثل تلفن داخلی سازمان: شماره می‌گیری و حرف می‌زنی انگار هم‌اتاقی است — غافل از اینکه خط می‌تواند قطع شود.",
      en: "Like an office intercom: you dial and talk as if the person is next door — forgetting the line can drop.",
    },
    related: ["gRPC", "REST", "Microservices", "Serialization"],
  },
  {
    term: "gRPC",
    fa: "جی‌آر‌پی‌سی",
    category: "backend",
    definition: {
      fa: "gRPC چارچوب RPC مدرن گوگل است: قرارداد سرویس در فایل proto تعریف می‌شود، کد کلاینت/سرور تولید می‌شود، و ارتباط باینری روی HTTP/2 انجام می‌شود — سریع‌تر و typed از REST/JSON، با پشتیبانی استریم دوطرفه. برای ارتباط بین‌سرویسی داخلی ایده‌آل است؛ برای API عمومی مرورگرها REST معمول‌تر است.",
      en: "gRPC is Google's modern RPC framework: services are declared in .proto files, client/server code is generated, and communication is binary over HTTP/2 — faster and strongly typed vs REST/JSON, with bidirectional streaming. Ideal for internal service-to-service calls; public browser-facing APIs usually stay REST.",
    },
    analogy: {
      fa: "مثل قرارداد از پیش امضاشده بین دو دفتر: هر دو دقیقاً می‌دانند فرم‌ها چه شکلی‌اند، پس بسته‌ها کوچک و سریع جابه‌جا می‌شوند.",
      en: "Like two offices that signed one contract upfront: both know the exact form layouts, so packages stay small and fast.",
    },
    related: ["RPC", "Serialization", "REST", "Microservices"],
  },
  {
    term: "Serialization",
    fa: "سریال‌سازی",
    category: "backend",
    definition: {
      fa: "سریال‌سازی تبدیل آبجکت حافظه به جریان بایت برای ذخیره یا ارسال است و برعکسش deserialization. فرمت‌ها: JSON (خوانا، پرکاربرد)، Protocol Buffers/Avro (باینری فشرده و typed)، BSON. نکات مهم: نسخه‌بندی schema، امنیت (deserialization ناامن آسیب‌پذیری است) و هزینه‌ی CPU/پهنای باند.",
      en: "Serialization converts in-memory objects into a byte stream for storage or transfer; deserialization is the reverse. Formats: JSON (readable, ubiquitous), Protocol Buffers/Avro (compact typed binary), BSON. Watch for: schema versioning, security (unsafe deserialization is a vulnerability class), and CPU/bandwidth cost.",
    },
    analogy: {
      fa: "مثل بسته‌بندی مبلمان برای اسباب‌کشی: قطعات جدا و شماره‌گذاری می‌شوند تا در جعبه جا شوند و در مقصد دقیقاً مثل قبل سرهم شوند.",
      en: "Like flat-packing furniture for a move: pieces are numbered and boxed, then rebuilt identically at the destination.",
    },
    related: ["JSON", "gRPC", "Message Queue"],
  },
  {
    term: "SSE",
    fa: "رویدادهای ارسالی از سرور",
    category: "backend",
    definition: {
      fa: "Server-Sent Events جریان یک‌طرفه‌ی سرور به کلاینت روی HTTP معمولی است: سرور با Content-Type: text/event-stream رویداد می‌فرستد و EventSource در مرورگر آن را می‌خواند. از WebSocket ساده‌تر است (اتصال HTTP، اتصال مجدد خودکار) ولی فقط یک‌طرفه — برای فید قیمت، اعلان و پیشرفت کار.",
      en: "Server-Sent Events is a one-way server-to-client stream over plain HTTP: the server pushes events with Content-Type: text/event-stream and the browser's EventSource reads them. Simpler than WebSocket (regular HTTP, automatic reconnect) but one-way only — ideal for price feeds, notifications, job progress.",
    },
    analogy: {
      fa: "مثل رادیوی خبری: گیرنده فقط گوش می‌دهد و ایستگاه هر وقت خبر داشت پخش می‌کند — دوطرفه گفت‌وگو نیست.",
      en: "Like a news radio: the receiver only listens while the station broadcasts whenever there's news — no conversation.",
    },
    related: ["WebSocket", "HTTP", "Long Polling"],
  },
  {
    term: "Long Polling",
    fa: "پینگ‌آهنگ طولانی",
    category: "backend",
    definition: {
      fa: "Long polling ترفندی برای شبیه‌سازی به‌روزرسانی لحظه‌ای روی HTTP معمولی است: کلاینت درخواست می‌فرستد و سرور پاسخ را تا رسیدن داده‌ی جدید نگه می‌دارد؛ کلاینت فوراً درخواست بعدی را می‌فرستد. پیاده‌سازی با هر زیرساخت HTTP ممکن است، اما هزینه‌ی اتصال و تایم‌اوت دارد — قبل از WebSocket راه استاندارد بود.",
      en: "Long polling simulates real-time updates over plain HTTP: the client requests, the server holds the response until new data arrives, and the client immediately re-requests. It works on any HTTP infrastructure but burns connections and hits timeouts — the standard trick before WebSockets.",
    },
    analogy: {
      fa: "مثل تماس با پشتیبانی و نگه داشتن خط تا خبر تازه برسد — به محض قطع، دوباره زنگ می‌زنی.",
      en: "Like calling support and holding the line until there's news — and redialing the moment you get cut off.",
    },
    related: ["SSE", "WebSocket", "HTTP"],
  },
  {
    term: "CORS",
    fa: "اشتراک منابع بین‌مبدا",
    category: "backend",
    definition: {
      fa: "CORS سازوکار امنیتی مرورگرهاست که اجازه می‌دهد صفحه‌ی یک مبدا (origin) به منابع مبدا دیگر درخواست بزند: مرورگر درخواست preflight (OPTIONS) می‌فرستد و سرور با هدرهایی مثل Access-Control-Allow-Origin اعلام می‌کند چه مبدا و متدهایی مجازند. خطای CORS یعنی سرور اجازه نداده، نه اینکه درخواست اشتباه باشد.",
      en: "CORS is the browser mechanism that lets a page from one origin call another origin's resources: the browser sends a preflight (OPTIONS) request, and the server answers with headers like Access-Control-Allow-Origin declaring which origins and methods are allowed. A CORS error means the server didn't permit it — not that the request was malformed.",
    },
    analogy: {
      fa: "مثل لیست مهمان‌های باشگاه: متقاضی (مرورگر) اول می‌پرسد «فلانی می‌تواند بیاید؟» و نگهبان (سرور) با اجازه‌نامه‌ی کتبی جواب می‌دهد.",
      en: "Like a club's guest list: the visitor (browser) first asks 'may they come in?' and the doorman (server) answers in writing.",
    },
    related: ["Same-Origin Policy", "HTTP", "API", "XSS"],
  },
  {
    term: "OAuth",
    fa: "اواوت",
    category: "backend",
    definition: {
      fa: "OAuth 2.0 پروتکل اعطای دسترسی است: به‌جای پسورد دادن به اپ ثالث، کاربر در صفحه‌ی سرویس اصلی لاگین می‌کند و اپ فقط یک access token با محدوده‌ی مشخص (scope) و عمر محدود می‌گیرد. «لاگین با گوگل» همان OAuth است و با OpenID Connect برای احراز هویت ترکیب می‌شود.",
      en: "OAuth 2.0 is a delegation protocol: instead of handing a third-party app your password, you log in on the provider's own page and the app receives a scoped, short-lived access token. 'Sign in with Google' is OAuth; OpenID Connect layers identity on top.",
    },
    analogy: {
      fa: "مثل کلید موقت هتل به نظافتچی: به‌جای کلید اصلی خانه، فقط کلید اتاق مشخص و برای مدت محدود می‌دهی.",
      en: "Like giving a cleaner a temporary hotel key card: not your house keys — just one room, for one stay.",
    },
    related: ["JWT", "Authentication", "Authorization", "Token"],
  },
  {
    term: "Race Condition",
    fa: "وضعیت مسابقه",
    category: "backend",
    definition: {
      fa: "وضعیت مسابقه وقتی است که نتیجه به ترتیب زمانی دسترسی هم‌زمان به داده‌ی مشترک بستگی داشته باشد: دو درخواست هم‌زمان موجودی را چک و کم می‌کنند و هر دو با موفقیت رد می‌شوند. راه‌حل‌ها: قفل (mutex)، تراکنش با isolation درست، یا عملیات اتمیک در دیتابیس/Redis.",
      en: "A race condition occurs when the outcome depends on the timing of concurrent access to shared state: two requests both check and decrement stock, and both succeed. Fixes: locks (mutex), properly isolated transactions, or atomic operations in the database/Redis.",
    },
    analogy: {
      fa: "مثل آخرین صندلی اتوبوس که دو نفر هم‌زمان می‌بینند و هر دو با خود فکر می‌کنند «تهی است، می‌روم جلو» — نتیجه به اینکه چه کسی اول رسید بستگی دارد.",
      en: "Like two people spotting the last bus seat simultaneously, each concluding it's free — the result depends on who moved first.",
    },
    related: ["Deadlock", "Mutex", "Transaction", "Thread Pool"],
  },
  {
    term: "Deadlock",
    fa: "بن‌بست",
    category: "backend",
    definition: {
      fa: "بن‌بست وقتی رخ می‌دهد که دو فرایند هر دو منتظر منابعی باشند که دیگری نگه داشته و هیچ‌کدام رها نمی‌کند: تراکنش A قفل ردیف ۱ را دارد و ردیف ۲ می‌خواهد؛ تراکنش B برعکس. پیشگیری: ترتیب ثابت به‌دست آوردن قفل‌ها، کوتاه نگه داشتن تراکنش‌ها و timeout برای قفل.",
      en: "A deadlock happens when processes each hold a resource the other needs and neither yields: transaction A locks row 1 and wants row 2, transaction B does the reverse. Prevention: a consistent lock-acquisition order, short transactions, and lock timeouts.",
    },
    analogy: {
      fa: "مثل دو نفر در راهروی باریک که هر دو مدارکشان را در دست دارند و هر دو ادعا می‌کنند حق عبور با دیگری است — هیچ‌کس حرکت نمی‌کند.",
      en: "Like two people in a narrow corridor, each clutching papers the other needs, each insisting the other move first.",
    },
    related: ["Race Condition", "Mutex", "Transaction"],
  },
  {
    term: "Thread Pool",
    fa: "استخر رشته",
    category: "backend",
    definition: {
      fa: "استخر رشته مجموعه‌ای از worker های از پیش‌ساخته است که کارها از صف برمی‌دارند — به‌جای ساختن/نابود کردن thread برای هر کار که پرهزینه است. اندازه‌ی استخر تعیین‌کننده است: بیش از حد، هزینه‌ی context switch؛ کمتر از حد، هدر رفتن هسته‌های CPU.",
      en: "A thread pool is a set of pre-built workers that pull tasks from a queue — avoiding the cost of creating/destroying a thread per task. Pool size matters: too many threads cause context-switch overhead; too few waste CPU cores.",
    },
    analogy: {
      fa: "مثل تیم پیک ثابت رستوران: به‌جای استخدام پیک جدید برای هر سفارش، چند پیک همیشه آماده‌اند و سفارش‌ها از صف برداشته می‌شوند.",
      en: "Like a restaurant's fixed courier team: no hiring per order — a few couriers stand ready and pull orders from a queue.",
    },
    related: ["Mutex", "Race Condition", "Time Complexity"],
  },
  {
    term: "Mutex",
    fa: "قفل متقابل",
    category: "backend",
    definition: {
      fa: "Mutex (mutual exclusion) قفلی است که فقط یک رشته در هر لحظه می‌تواند وارد بخش بحرانی شود؛ بقیه منتظر می‌مانند. semaphore نسخه‌ی شمارش‌دار آن است (n مجوز). نکات: نگه داشتن قفل کوتاه، ترتیب ثابت برای جلوگیری از بن‌بست، و ترجیح ساختارهای هم‌زمان آماده وقتی هست.",
      en: "A mutex (mutual exclusion) is a lock allowing only one thread into the critical section at a time; a semaphore is its counting version (n permits). Best practices: hold locks briefly, acquire in a consistent order to prevent deadlock, and prefer battle-tested concurrent structures.",
    },
    analogy: {
      fa: "مثل کلید اتاق جلسات تک‌نفره: هر بار یک نفر کلید را می‌گیرد؛ بقیه در راهرو می‌مانند تا خالی شود.",
      en: "Like the single key to a one-person meeting room: one holder at a time, everyone else waits in the hallway.",
    },
    related: ["Deadlock", "Race Condition", "Thread Pool"],
  },
  {
    term: "JIT Compilation",
    fa: "کامپایل لحظه‌ای",
    category: "backend",
    definition: {
      fa: "کامپایل JIT در حین اجرا، بخش‌های داغ کد را به ماشین‌کد تبدیل و بهینه می‌کند — بین کامپایلر AOT (از قبل) و مفسر (خط‌به‌خط) است. JVM، V8 جاوااسکریپت و .NET از JIT استفاده می‌کنند: شروع کمی کند، اما اجرای طولانی با بهینه‌سازی‌های مبتنی بر پروفایل سریع می‌شود.",
      en: "JIT compilation translates hot code paths into machine code during execution — between ahead-of-time compilation and interpretation. The JVM, V8 and .NET are JIT-based: slightly slow startup, but long runs get faster via profile-guided optimizations.",
    },
    analogy: {
      fa: "مثل مترجم همزمان که اول جمله‌به‌جمله می‌گوید، ولی جمله‌های پرتکرار را حفظ می‌کند و دفعه‌ی بعد روان و سریع ترجمه‌شان را می‌دهد.",
      en: "Like a simultaneous interpreter who starts sentence-by-sentence but memorizes repeated sentences and delivers them fluently thereafter.",
    },
    related: ["JVM", "Compiler", "Interpreter"],
  },
  {
    term: "Cache Invalidation",
    fa: "باطل‌سازی کش",
    category: "backend",
    definition: {
      fa: "باطل‌سازی کش یعنی تصمیم‌گیری درباره‌ی چه زمانی داده‌ی کش‌شده دیگر معتبر نیست. استراتژی‌ها: TTL (انقضای زمانی)، write-through/write-behind (نوشتن هم‌زمان در کش و DB)، و حذف صریح با رویداد. جمله‌ی معروف: «دو مشکل سخت در علوم کامپیوتر: باطل‌سازی کش و نام‌گذاری». خطای کهنگی داده مستقیم به کاربر می‌رسد.",
      en: "Cache invalidation is deciding when cached data stops being trustworthy. Strategies: TTL expiry, write-through/write-behind (updating cache and DB together), and explicit eviction on events. Famous quote: 'there are two hard problems in CS: cache invalidation and naming.' Stale data goes straight to users.",
    },
    analogy: {
      fa: "مثل تابلوهای قیمت سوپرمارکت: یا تاریخ انقضا روی تابلو می‌گذاری (TTL)، یا با هر تغییر قیمت فوراً تابلو را عوض می‌کنی (write-through).",
      en: "Like supermarket shelf labels: either stamp an expiry date (TTL) or swap the label the instant the price changes (write-through).",
    },
    related: ["Cache", "Redis", "Eventual Consistency"],
  },
  {
    term: "LRU Cache",
    fa: "کش LRU",
    category: "backend",
    definition: {
      fa: "LRU (کم‌اخیراً‌استفاده‌شده) سیاست اخراج کش است: وقتی ظرفیت پر شود، عنصری که بیشترین زمان از آخرین استفاده‌اش گذشته اخراج می‌شود. پیاده‌سازی O(1): جدول هش + لیست پیوندی دومطرفه (هر دسترسی گره را به سر می‌آورد). در Redis و کتابخانه‌های کش استاندارد است.",
      en: "LRU (least recently used) is an eviction policy: when capacity is full, the element untouched for the longest gets evicted. The O(1) implementation pairs a hash map with a doubly linked list (every access moves its node to the head). Standard in Redis and caching libraries.",
    },
    analogy: {
      fa: "مثل کمد لباس با ظرفیت محدود: هر بار چیزی می‌پوشی، به جلوی کمد می‌بردی؛ پر که شد، آخرین لباس‌های کهنه از انتها بیرون می‌آیند.",
      en: "Like a cramped wardrobe: worn items move to the front; when it's full, the long-forgotten ones at the back go out.",
    },
    related: ["Cache", "Hash Table", "Linked List", "Cache Invalidation"],
  },
  {
    term: "N+1 Problem",
    fa: "مسئله‌ی N+1",
    category: "backend",
    definition: {
      fa: "مسئله‌ی N+1 وقتی است که برای لیستی از N رکورد، یک کوئری لیست و بعد N کوئری جداگانه برای جزئیات هر رکورد زده می‌شود — مثل گرفتن ۵۰ پست و بعد ۵۰ کوئری برای نویسنده‌ی هر پست. راه‌حل: eager loading / JOIN / IN — همه‌ی رابطه‌ها را در یک یا دو کوئری بگیر.",
      en: "The N+1 problem: fetching a list of N records issues 1 list query plus N per-record detail queries — like fetching 50 posts and then 50 queries for each author. Fix: eager loading / JOIN / IN — pull the relations in one or two queries.",
    },
    analogy: {
      fa: "مثل خرید ۵۰ قلم از فروشگاه و برای هر قلم یک سفر جداگانه به خانه — به‌جای یک سبد.",
      en: "Like buying 50 items and driving home after each one instead of using a cart.",
    },
    related: ["ORM", "SQL", "Latency"],
  },
  {
    term: "SOAP",
    fa: "سوپ",
    category: "backend",
    definition: {
      fa: "SOAP پروتکل پیام‌رسانی XML-محور با قرارداد رسمی (WSDL) است: پیام‌ها ساختار سخت‌گیرانه دارند و تراکنش، امنیت و معاملات استاندارد (WS-*) دارد. سنگین‌تر و قدیمی‌تر از REST است، اما در بانک‌داری و سیستم‌های سازمانی قدیمی هنوز رایج است.",
      en: "SOAP is an XML messaging protocol with a formal contract (WSDL): strict message structure plus standardized WS-* extensions for security and transactions. Heavier and older than REST, but still common in banking and legacy enterprise systems.",
    },
    analogy: {
      fa: "مثل مکاتبه‌ی رسمی با سربرگ و امضا و قالب ثابت — سنگین ولی حقوقی و پذیرفته‌شده در ادارات قدیمی.",
      en: "Like formal correspondence with letterhead, signatures and a fixed template — heavy, but legally recognized in old institutions.",
    },
    related: ["REST", "XML", "RPC"],
  },
  {
    term: "Redis",
    fa: "ردیس",
    category: "backend",
    definition: {
      fa: "Redis پایگاه‌داده‌ی درون‌حافظه‌ای با ساختارهای داده‌ی غنی است: string، hash، list، set، sorted set، stream و pub/sub. چون داده در RAM است، خواندن/نوشتن زیر میلی‌ثانیه است — برای کش، session، شمارنده، صف و leaderboard. ماندگاری با RDB (اسنپ‌شات) و AOF (لاگ عملیات) دارد.",
      en: "Redis is an in-memory data store with rich structures: strings, hashes, lists, sets, sorted sets, streams and pub/sub. Because data lives in RAM, reads/writes are sub-millisecond — used for caching, sessions, counters, queues and leaderboards. Persistence via RDB snapshots and AOF operation logs.",
    },
    analogy: {
      fa: "میز یادداشت کنار دستت در برابر آرشیو قفسه‌ای: هر چیزی که سریع لازم است روی میز است؛ وقتی میزی پر شد، کم‌استفاده‌ها (LRU) به آرشیو می‌روند.",
      en: "Like the desk pad next to you versus the archive shelf: whatever you need fast sits on the desk; when it fills, least-recently-used sheets go to the archive.",
    },
    related: ["Cache", "LRU Cache", "Message Queue", "Pub/Sub", "Cache Invalidation"],
  },
  {
    term: "Kafka",
    fa: "کافکا",
    category: "backend",
    definition: {
      fa: "Kafka بستر جریان رویداد است: تولیدکننده‌ها رویداد را به topic می‌نویسند و مصرف‌کننده‌ها با offset از پارتیشن‌ها می‌خوانند. چون لاگ روی دیسک ماندگار و قابل بازپخش است، مصرف‌کننده می‌تواند از هر نقطه دوباره بخواند. برای رویدادهای سازمانی، ETL لحظه‌ای و معماری رویدادمحور استاندارد است.",
      en: "Kafka is an event-streaming platform: producers write events to topics, consumers read partitions via offsets. Because the log is durable on disk and replayable, a consumer can re-read from any point. It's the standard for enterprise event pipelines, real-time ETL and event-driven architectures.",
    },
    analogy: {
      fa: "مثل دفتر ثبت رویدادهای شرکت که هیچ ورودی پاک نمی‌شود: هر بخش (topic) پارتیشن دارد، هر خواننده نشان می‌دهد تا کجا خوانده و می‌تواند از اول دوباره بخواند.",
      en: "Like a company event ledger that never erases entries: each section has pages (partitions), readers keep bookmarks (offsets), and can reread from page one.",
    },
    related: ["Message Queue", "Pub/Sub", "Event-Driven Architecture", "Eventual Consistency"],
  },
  {
    term: "XML",
    fa: "ایکس‌ام‌ال",
    category: "backend",
    definition: {
      fa: "XML قالب داده‌ی تگ‌دار با ساختار سلسله‌مراتبی است: <user><name>…</name></user>. با namespace، اعتبارسنجی XSD و XSLT اکوسیستم رسمی دارد؛ پرحرف‌تر و سنگین‌تر از JSON است ولی در اسناد اداری، SOAP و سیستم‌های قدیمی هنوز استاندارد است.",
      en: "XML is a tag-based, hierarchical data format: <user><name>…</name></user>. It has a formal ecosystem (namespaces, XSD validation, XSLT); it's wordier and heavier than JSON but still standard in documents, SOAP and legacy systems.",
    },
    analogy: {
      fa: "مثل نامه‌ی اداری با پاکت و مهر و امضا در برابر پیام‌رسان سریع (JSON) — رسمی و قابل راستی‌آزمایی، ولی طولانی.",
      en: "Like formal snail mail with envelope, stamp and signature versus a quick messenger (JSON) — formal and verifiable, but verbose.",
    },
    related: ["JSON", "SOAP", "Serialization"],
  },
];
