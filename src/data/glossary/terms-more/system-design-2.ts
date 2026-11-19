import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (system design, part 2). Merged into terms.ts → /glossary page. */
export const moreSystemDesignTerms2: GlossaryTerm[] = [
  {
    term: "Domain-Driven Design",
    fa: "طراحی دامنه‌محور",
    category: "system-design",
    definition: {
      fa: "DDD (Domain-Driven Design) روش طراحی است که ساختار نرم‌افزار را از دل زبان کسب‌وکار بیرون می‌کشد: Bounded Context ها مرزهای مدل را تعیین می‌کنند، Entity ها هویت دارند، Value Object ها فقط مقدارند و Aggregate ها واحد یکپارچگی‌اند. هدف: کدی که زبان جلسات کسب‌وکار را بازتاب دهد.",
      en: "DDD is a design method that pulls software structure out of the business language itself: Bounded Contexts set model boundaries, Entities have identity, Value Objects are pure values, and Aggregates are consistency units. Goal: code that mirrors the words used in business meetings.",
    },
    analogy: {
      fa: "مثل تقسیم بیمارستان به بخش‌ها: «قسمت قلب» زبان و مقررات خودش را دارد (Bounded Context)؛ بیمار (Entity) در هر بخش تعریف متفاوتی از «پرونده» دارد و هر بخش قوانین یکپارچگی خودش را اعمال می‌کند.",
      en: "Like a hospital divided into departments: cardiology has its own vocabulary and rules (Bounded Context); a patient (Entity) means a different record per department, and each enforces its own consistency rules.",
    },
    related: ["Bounded Context", "Microservices", "Event-Driven Architecture"],
  },
  {
    term: "Bounded Context",
    fa: "زمینه‌ی محدود",
    category: "system-design",
    definition: {
      fa: "Bounded Context مرز صریحی است که درونش یک مدل معنا دارد: «مشتری» در بخش فروش (آدرس، سابقه‌ی خرید) با «مشتری» در پشتیبانی (تیکت‌ها، سطح SLA) مدل متفاوتی است. خارج از مرز، همان واژه معنای دیگری دارد — به همین دلیل مدل‌ها را بین context ها با نگاشت (context mapping) ترجمه می‌کنند.",
      en: "A Bounded Context is an explicit border inside which one model is valid: 'customer' in sales (address, purchase history) differs from 'customer' in support (tickets, SLA tier). Outside the border the same word means something else — models get translated between contexts via context mapping.",
    },
    analogy: {
      fa: "مثل معنای «هزینه» در سه دفتر: در حسابداری، در خرید و در مالیات هر کدام تعریف و فرم خودشان را دارند — برخورد نکن تا حساب‌ها قاطی شود.",
      en: "Like the word 'expense' in three departments: accounting, purchasing and tax each have their own definition and form — don't let the ledgers blend.",
    },
    related: ["Domain-Driven Design", "Microservices", "Anti-Corruption Layer"],
  },
  {
    term: "SOA",
    fa: "معماری سرویس‌گرا",
    category: "system-design",
    definition: {
      fa: "SOA (Service-Oriented Architecture) اپ را به سرویس‌های قابل‌استفاده‌ی مجدد می‌شکند که از طریق ESB (گذرگاه سازمانی) با قراردادهای رسمی (معمولاً SOAP/WSDL) حرف می‌زنند. پیشگام معماری میکروسرویس است؛ تفاوت اصلی: ESB مرکزی و هوشمند در برابر ارتباط مستقیم و سبک بین سرویس‌ها.",
      en: "SOA (service-oriented architecture) splits an app into reusable services that talk through an Enterprise Service Bus with formal contracts (usually SOAP/WSDL). It pioneered microservices; the key difference is SOA's central, smart ESB versus microservices' direct, lightweight service-to-service calls.",
    },
    analogy: {
      fa: "مثل دفتر با پست مرکزی: همه‌ی نامه‌ها از اتاق‌خانة مرکزی می‌گذرند که مسیر و فرمت را چک می‌کند (ESB) — منظم ولی می‌تواند گلوگاه شود.",
      en: "Like an office with a central mailroom: every letter passes through one smart room that checks routing and format (ESB) — orderly, but it can become a bottleneck.",
    },
    related: ["Microservices", "SOAP", "Message Queue", "Event-Driven Architecture"],
  },
  {
    term: "Event-Driven Architecture",
    fa: "معماری رویدادمحور",
    category: "system-design",
    definition: {
      fa: "در معماری رویدادمحور، سرویس‌ها به‌جای صدا زدن مستقیم همدیگر، رویداد منتشر می‌کنند («سفارش ثبت شد») و هر کسی که علاقه دارد به آن واکنش نشان می‌دهد — انزوای زمانی و مکانی، مقیاس‌پذیری و افزودن مصرف‌کننده‌ی جدید بدون دست زدن به تولیدکننده. هزینه: پیچیدگی ردیابی، ترتیب رویداد و یکپارچگی نهایی.",
      en: "In event-driven architecture, services don't call each other directly — they publish events ('order placed') and interested parties react. You get temporal and spatial decoupling, scalability, and new consumers without touching producers. The cost: tracing complexity, event ordering, eventual consistency.",
    },
    analogy: {
      fa: "مثل تابلوی اعلانات ساختمان: مدیر فقط یک اعلان می‌زند؛ همه‌ی واحدهایی که به آن مربوط است خودشان اقدام می‌کنند — لازم نیست مدیر تک‌تک باتو رفت‌وآمد کند.",
      en: "Like a building's announcement board: the manager posts once; every relevant unit acts on it independently — no door-to-door visits.",
    },
    related: ["Pub/Sub", "Message Queue", "Kafka", "Event Sourcing", "Microservices"],
  },
  {
    term: "Saga Pattern",
    fa: "الگوی ساگا",
    category: "system-design",
    definition: {
      fa: "Saga جایگزین تراکنش توزیع‌شده است: یک فرایند چندسرویسی به دنباله‌ای از تراکنش‌های محلی می‌شکند و اگر یکی شکست بخورد، تراکنش‌های جبرانی (compensating) قبلی‌ها اجرا می‌شود — «بلیت لغو شد، پرداخت برگشت داده شد». دو هماهنگی دارد: choreography (رویدادمحور) و orchestration (هماهنگ‌کننده‌ی مرکزی).",
      en: "The Saga pattern replaces distributed transactions: a multi-service process becomes a chain of local transactions, and if one fails, compensating transactions undo the earlier ones — 'cancel the ticket, refund the payment'. Two coordination styles: choreography (event-driven) and orchestration (central coordinator).",
    },
    analogy: {
      fa: "مثل سفر چندمرحله‌ای با لغو پلکانی: اگر پرواز لغو شد، اتاق و سفر زمینی هم جداگانه لغو و پول هر کدام جداگانه برمی‌گردد — هیچ «تراکنش واحد جهانی» وجود ندارد.",
      en: "Like a multi-leg trip with staged cancellation: if the flight cancels, the hotel and car are each cancelled and refunded separately — there is no single global transaction.",
    },
    related: ["Two-Phase Commit", "Event-Driven Architecture", "Eventual Consistency", "Transaction"],
  },
  {
    term: "Two-Phase Commit",
    fa: "کامیت دومرحله‌ای",
    category: "system-design",
    definition: {
      fa: "2PC پروتکل تراکنش توزیع‌شده است: فاز آماده‌سازی (همه‌ی شرکت‌کننده‌ها می‌گویند «آماده‌ام») و فاز کامیت (هماهنگ‌کننده دستور commit یا rollback به همه می‌دهد). اتمی بودن را تضمین می‌کند، اما هماهنگ‌کننده‌ی تک‌نقطه‌ی شکست است و قفل‌ها تا تصمیم نهایی نگه داشته می‌شوند — در سیستم‌های بزرگ عمدتاً با Saga جایگزین شده است.",
      en: "Two-phase commit is a distributed transaction protocol: a prepare phase ('I'm ready' from every participant), then a commit phase where the coordinator orders commit or rollback to all. It guarantees atomicity, but the coordinator is a single point of failure and locks are held until the decision — large systems increasingly prefer Sagas.",
    },
    analogy: {
      fa: "مثل ناهار گروهی که هر نفر اول می‌گوید «من آزادم» (آماده) و بعد از رضایت همه، سرگروه یک‌جا اعلام می‌کند «ساعت ۸ ناهار» یا «کنسل».",
      en: "Like a group dinner: everyone first says 'I'm free' (prepare), and only after all confirm does the organizer announce '8pm — confirmed' or 'cancelled' to everyone at once.",
    },
    related: ["Saga Pattern", "Transaction", "Eventual Consistency", "Strong Consistency"],
  },
  {
    term: "Service Mesh",
    fa: "شبکه‌ی سرویس",
    category: "system-design",
    definition: {
      fa: "Service Mesh لایه‌ی زیرساختی برای ارتباط بین سرویس‌هاست: هر پود یک sidecar proxy (مثل Envoy) دارد که ترافیک را عبور می‌دهد و retry، mTLS، circuit breaking و مشاهده‌پذیری را بدون تغییر کد اپ اضافه می‌کند. Istio و Linkerd پیاده‌سازی‌های شناخته‌شده‌اند؛ هزینه‌اش پیچیدگی و سربار proxy هاست.",
      en: "A service mesh is an infrastructure layer for service-to-service traffic: each pod gets a sidecar proxy (e.g., Envoy) that adds retries, mTLS, circuit breaking and observability without touching app code. Istio and Linkerd are the known implementations; the cost is added complexity and proxy overhead.",
    },
    analogy: {
      fa: "مثل شرکت انتظامی که هر اتوبوس یک همراه آموزش‌دیده دارد: مسیردهی، چک مسافر و گزارش‌گیری را انجام می‌دهد و راننده (کد اپ) فقط رانندگی می‌کند.",
      en: "Like every bus carrying a trained conductor: routing, passenger checks and reporting are handled so the driver (app code) just drives.",
    },
    related: ["Kubernetes", "Microservices", "Circuit Breaker", "Observability"],
  },
  {
    term: "API Gateway",
    fa: "دروازه‌ی API",
    category: "system-design",
    definition: {
      fa: "API Gateway دروازه‌ی واحد ورود کلاینت‌ها به میکروسرویس‌هاست: مسیریابی به سرویس درست، احراز هویت، rate limiting، تجمیع پاسخ‌ها و SSL termination را مرکزی می‌کند. کلاینت با یک نقطه حرف می‌زند و سرویس‌ها از منطق مشترک بی‌نیاز می‌شوند؛ خودش باید مقیاس‌پذیر و در دسترس باشد (SPOF احتمالی).",
      en: "An API gateway is the single entry point for clients into microservices: centralizing routing, authentication, rate limiting, response aggregation and SSL termination. Clients see one endpoint and services drop shared logic — but the gateway itself must scale and stay up (potential SPOF).",
    },
    analogy: {
      fa: "مثل پذیرش بیمارستان: بیمار فقط به گیشة اول مراجعه می‌کند؛ پذیرش ثبت می‌کند، بیمه چک می‌کند و به بخش درست می‌فرستد — هیچ بخشی خودش پذیرش نمی‌کند.",
      en: "Like a hospital front desk: patients see one reception — it registers, checks insurance, and routes to the right ward; no ward does its own admissions.",
    },
    related: ["Reverse Proxy", "Rate Limiting", "Microservices", "Load Balancer"],
  },
  {
    term: "Clean Architecture",
    fa: "معماری تمیز",
    category: "system-design",
    definition: {
      fa: "Clean Architecture وابستگی‌ها را به سمت مرکز می‌کشد: قوانین کسب‌وکار (entities، use cases) هیچ وابستگی به DB، وب یا فریم‌ورک ندارند و جزئیات (دیتابیس، API) در حلقه‌های بیرونی‌اند. نتیجه: منطق کسب‌وکار با تعویض دیتابیس یا فریم‌ورک دست‌نخورده می‌ماند و تست آن بدون زیرساخت ممکن است.",
      en: "Clean Architecture points all dependencies inward: business rules (entities, use cases) depend on nothing — not the DB, web, or framework — while details (databases, APIs) live in outer rings. Result: business logic survives database/framework swaps and is testable without infrastructure.",
    },
    analogy: {
      fa: "مثل مغز در جمجمه: تصمیم‌های حیاتی (منطق) در مرکز محافظت‌شده‌اند و حس‌گرها و اندام‌ها (دیتابیس و UI) فقط پیام می‌رسانند و اجرا می‌کنند.",
      en: "Like the brain in the skull: vital decisions (logic) sit protected at the center while sensors and limbs (DB, UI) merely relay and execute.",
    },
    related: ["SOLID Principles", "Domain-Driven Design", "Repository Pattern"],
  },
  {
    term: "Repository Pattern",
    fa: "الگوی مخزن",
    category: "system-design",
    definition: {
      fa: "الگوی مخزن یک لایه‌ی واسط بین منطق کسب‌وکار و دسترسی به داده می‌گذارد: کد با `orderRepository.find(id)` حرف می‌زند و نمی‌داند پشتش SQL است، NoSQL یا API. مزیت: تعویض ذخیره‌گاه، mock کردن آسان در تست و متمرکز شدن کوئری‌ها؛ عیب: برای ORMهای ساده ممکن است boilerplate اضافه باشد.",
      en: "The repository pattern inserts a facade between business logic and data access: code speaks `orderRepository.find(id)` without knowing whether SQL, NoSQL or an API is behind it. Pros: swappable storage, easy test mocks, centralized queries; con: possible boilerplate over simple ORMs.",
    },
    analogy: {
      fa: "مثل پیشخوان خدمات دولتی: تو فقط فرم می‌دهی و نمی‌دانی پشت صحنه کدام بایگانی و کدام کارمند آن را پردازش می‌کند.",
      en: "Like a government service counter: you hand over a form without knowing which back-office archive or clerk processes it.",
    },
    related: ["Clean Architecture", "ORM", "SOLID Principles"],
  },
  {
    term: "Single Point of Failure",
    fa: "نقطه‌ی شکست واحد",
    category: "system-design",
    definition: {
      fa: "SPOF هر جزئی است که خرابی‌اش کل سیستم را زمین می‌زند: دیتابیس تک‌گره، یک DNS، حتی هماهنگ‌کننده‌ی 2PC. طراحی مقاوم یعنی حذف SPOF ها با replication، چند ناحیه‌ای کردن و fallback — همراه با تمرین خرابی (chaos testing) تا نقاط پنهان آشکار شوند.",
      en: "A single point of failure is any component whose failure takes down the whole system: a single-node database, one DNS, even the 2PC coordinator. Resilient design eliminates SPOFs via replication, multi-region setups and fallbacks — proven with chaos testing that surfaces hidden ones.",
    },
    analogy: {
      fa: "مثل پل تک‌طرفه‌ی تنها به روستا: تا سالم است هیچ‌کس فکر نمی‌کند، تا یک سیلی همه‌ی ارتباط را قطع می‌کند.",
      en: "Like the single bridge to a village: fine until one flood cuts off everything.",
    },
    related: ["Replication", "Load Balancer"],
  },
  {
    term: "Health Check",
    fa: "بررسی سلامت",
    category: "system-design",
    definition: {
      fa: "Health check نقطه‌ی پایانی ساده‌ای است که لود‌بالانسر و orchestrator با آن می‌فهمند نمونه زنده و آماده است: liveness (پروسه بالا است؟) و readiness (آماده‌ی دریافت ترافیک؟ — مثلاً اتصال DB برقرار است؟). نمونه‌ی ناسالم از چرخش ترافیک خارج می‌شود تا خطا به کاربر نرسد.",
      en: "A health check is a simple endpoint that load balancers and orchestrators use to tell if an instance is alive and ready: liveness (is the process up?) and readiness (can it serve traffic — e.g., DB connection OK?). Unhealthy instances are pulled from rotation before users notice.",
    },
    analogy: {
      fa: "مثل ویزیت سریع پزشک پیش از شیفت: هر کارمند اول تأیید آمادگی می‌گیرد؛ هر که سرفه می‌کند آن روز پشت پیشخوان نمی‌نشیند.",
      en: "Like a quick pre-shift medical check: anyone coughing sits out the day; only cleared staff take the counter.",
    },
    related: ["Load Balancer", "Kubernetes", "Monitoring", "Observability"],
  },
  {
    term: "Service Discovery",
    fa: "کشف سرویس",
    category: "system-design",
    definition: {
      fa: "کشف سرویس یعنی یافتن آدرس فعلی نمونه‌های یک سرویس وقتی IP ها با مقیاس‌پذیری مدام عوض می‌شوند: هر نمونه در registry (مثل Consul یا DNS داخلی K8s) ثبت می‌شود و مشتری‌ها از آن آدرس تازه می‌گیرند. بدون آن، پیکربندی ثابت با هر scaling و جابه‌جایی می‌شکند.",
      en: "Service discovery finds the current addresses of a service's instances as IPs churn with scaling: each instance registers itself in a registry (Consul, or K8s' internal DNS) and clients fetch fresh addresses from it. Without it, static configs break on every scale-up or reschedule.",
    },
    analogy: {
      fa: "مثل صفحه‌ی «امروز کدام اتاق جلسه؟» در شرکت: چون اتاق‌ها مدام عوض می‌شوند، همه هر روز از تابلوی مرکزی آدرس تازه می‌گیرند، نه از یادداشت قدیمی.",
      en: "Like a daily 'which meeting room?' board: rooms change constantly, so everyone checks the central board instead of an old sticky note.",
    },
    related: ["Kubernetes", "Load Balancer", "Microservices", "DNS"],
  },
  {
    term: "Control Plane",
    fa: "صفحه‌ی کنترل",
    category: "system-design",
    definition: {
      fa: "Control plane مغز تصمیم‌گیر سیستم توزیع‌شده است (مثل API server و scheduler در Kubernetes): وضعیت مطلوب را می‌خواند و به data plane (نمونه‌های واقعی که ترافیک می‌گیرند) دستور می‌دهد. جداسازی این دو، ارتقا و مقیاس هر کدام را مستقل ممکن می‌کند.",
      en: "The control plane is the decision-making brain of a distributed system (Kubernetes' API server and scheduler): it reads desired state and commands the data plane — the real instances serving traffic. Separating the two lets each upgrade and scale independently.",
    },
    analogy: {
      fa: "مثل برج مراقبت در برابر خلبان‌ها: برج مسیرها را تصمیم می‌گیرد (control plane) و هواپیماها اجرا می‌کنند (data plane) — هرگز برج مسافر جابه‌جا نمی‌کند.",
      en: "Like an air-traffic tower versus pilots: the tower decides routes (control plane), planes execute (data plane) — the tower never carries passengers itself.",
    },
    related: ["Kubernetes", "Service Mesh", "Microservices"],
  },
  {
    term: "Horizontal vs Vertical Scaling",
    fa: "مقیاس‌پذیری افقی در برابر عمودی",
    category: "system-design",
    definition: {
      fa: "مقیاس عمودی یعنی قوی‌تر کردن همان سرور (CPU و RAM بیشتر) — ساده ولی سقف سخت‌افزاری و توقف دارد. مقیاس افقی یعنی اضافه کردن سرورهای بیشتر و پخش بار — تقریباً بی‌سقف ولی نیازمند طراحی stateless، تقسیم داده و لود‌بالانس. سیستم‌های بزرگ مدرن افقی می‌شوند.",
      en: "Vertical scaling makes the same server stronger (more CPU/RAM) — simple but hardware-capped and disruptive. Horizontal scaling adds more servers and spreads load — nearly unbounded but demands stateless design, data partitioning and load balancing. Modern large systems scale horizontally.",
    },
    analogy: {
      fa: "عمودی مثل خرید ماشین‌حساب گران‌تر برای حسابداری؛ افقی مثل استخدام ده حسابدار و تقسیم کار بین‌شان — دومی نیاز به تقسیم دفترها و هماهنگی دارد.",
      en: "Vertical is buying your one accountant a better calculator; horizontal is hiring ten accountants and splitting the books — which demands task division and coordination.",
    },
    related: ["Load Balancer", "Sharding", "Replication"],
  },
  {
    term: "Strong Consistency",
    fa: "سازگاری قوی",
    category: "system-design",
    definition: {
      fa: "سازگاری قوی یعنی بعد از هر نوشتن موفق، هر خواندن بعدی (از هر نمونه) همان مقدار جدید را ببیند — هزینه‌اش همگام‌سازی و افزایش latency است و در قطع شبکه، دسترس‌پذیری فدا می‌شود (CAP). سازگاری نهایی برعکس است: تفاوت موقت قبول و همگرایی بعدی. انتخاب بر اساس نیاز کسب‌وکار: تراکنش بانکی قوی، شمارنده‌ی لایک نهایی.",
      en: "Strong consistency means every read after a successful write sees the new value from any replica — paid for with synchronization latency, and under a network partition availability is sacrificed (CAP). Eventual consistency is the opposite: temporary divergence that converges. Choose by business need: bank transfers strong, like counters eventual.",
    },
    analogy: {
      fa: "قوی مثل حساب بانکی مشترک که هر دو نفر در لحظه همین موجودی را می‌بینند؛ نهایی مثل تابلوی امتیاز دو استادیوم که چند ثانیه با هم فرق دارند ولی به نتیجه‌ی واحد می‌رسند.",
      en: "Strong is a joint bank account both partners see identically in the moment; eventual is two stadium scoreboards that briefly differ before converging.",
    },
    related: ["Eventual Consistency", "CAP Theorem", "Two-Phase Commit", "Replication"],
  },
  {
    term: "Optimistic Locking",
    fa: "قفل خوش‌بینانه",
    category: "system-design",
    definition: {
      fa: "قفل خوش‌بینانه فرض می‌کند تضاد کمیاب است: خواندن بدون قفل، و هنگام نوشتن چک می‌شود که نسخه از زمان خواندن عوض نشده (ستون version یا چک شرط WHERE)؛ عوض شده بود → خطای تضاد و تلاش دوباره. برخلاف قفل بدبینانه که از اول قفل می‌گیرد و برای انتظار طولانی هزینه دارد. برای نرخ تضاد کم عالی است.",
      en: "Optimistic locking assumes conflicts are rare: read without locking, and on write verify the row hasn't changed since your read (a version column or conditional WHERE); if it changed → conflict error and retry. Pessimistic locking instead locks upfront and pays for long waits. Great for low-conflict workloads.",
    },
    analogy: {
      fa: "مثل ویرایش هم‌زمان سند: هر کس آزادانه می‌نویسد و موقع ذخیره، اگر نسخه عوض شده باشد سیستم می‌گوید «نسخه کهنه است، دوباره» — به‌جای قفل کردن سند برای هر ویرایشگر.",
      en: "Like collaborative doc editing: everyone writes freely, and at save time a changed version triggers 'stale copy — reload' instead of locking the doc for every editor.",
    },
    related: ["Transaction", "Race Condition", "Eventual Consistency", "Version Control"],
  },
  {
    term: "Anti-Corruption Layer",
    fa: "لایه‌ی ضدرسوب",
    category: "system-design",
    definition: {
      fa: "لایه‌ی ضدرسوب ترجمه‌ای میان مدل داخلی تمیز تو و سیستم بیرونی قدیمی/طرف ثالث است: پیام‌ها و مدل‌های آن سیستم هرگز مستقیم وارد دامنه‌ی تو نمی‌شوند. بدون آن، مدل به‌کندی شکل و منطق سیستم بد می‌گیرد («رسوب»). در ادغام با سیستم legacy و API های بیرون به کار می‌رود.",
      en: "An anti-corruption layer translates between your clean internal model and a legacy/external system: that system's models and messages never leak directly into your domain. Without it, your model slowly warps around the other system's shape ('corruption'). Essential when integrating with legacy or third-party APIs.",
    },
    analogy: {
      fa: "مثل مترجم رسمی در جلسه با شرکتی که زبان و اصطلاحات گیج‌کننده دارد: هرچه می‌گویند اول به زبان تمیز شرکت تو برگردانده می‌شود — اصطلاحاتشان به قراردادهای داخلی تو راه نمی‌یابد.",
      en: "Like an official interpreter in meetings with a company speaking confusing jargon: everything gets re-expressed in your firm's clean language — their terms never reach your internal contracts.",
    },
    related: ["Domain-Driven Design", "Bounded Context", "SOAP"],
  },
];
