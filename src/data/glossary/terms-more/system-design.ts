import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (system design). Merged into terms.ts → /glossary page. */
export const moreSystemDesignTerms: GlossaryTerm[] = [
  {
    term: "CAP Theorem",
    fa: "قضیه CAP",
    category: "system-design",
    definition: {
      fa: "CAP می‌گوید پایگاه داده‌ی توزیع‌شده در لحظه‌ی قطعی شبکه فقط می‌تواند دو تا از سه ویژگی را کامل داشته باشد: سازگاری (Consistency)، دسترس‌پذیری (Availability) یا تحمل پارتیشن (Partition tolerance). چون پارتیشن اجتناب‌ناپذیر است، انتخاب واقعی بین سازگاری و دسترس‌پذیری است.",
      en: "CAP says a distributed database under a network partition can only fully guarantee two of three: Consistency, Availability or Partition tolerance. Since partitions are inevitable, the real choice is consistency vs availability.",
    },
    analogy: {
      fa: "مثل دو شعبه‌ی بانک که خط تلفنشان قطع شده: یا هر دو باز می‌مانند ولی ممکن است موجودی را ناهماهنگ نشان دهند (Availability)، یا یکی تعطیل می‌کند تا عدد اشتباه داده نشود (Consistency).",
      en: "Like two bank branches whose phone line dies: both stay open but may show inconsistent balances (Availability), or one closes so no wrong number is ever shown (Consistency).",
    },
    related: ["Eventual Consistency", "Replication", "Sharding"],
  },
  {
    term: "Consistent Hashing",
    fa: "درهم‌سازی سازگار",
    category: "system-design",
    definition: {
      fa: "درهم‌سازی معمولی با اضافه‌شدن یک سرور، تقریباً همه‌ی کلیدها را جابه‌جا می‌کند. درهم‌سازی سازگار کلیدها و سرورها را روی یک حلقه می‌چیند و هر کلید به نزدیک‌ترین سرور می‌رود؛ افزودن/حذف سرور فقط بخش کوچکی از کلیدها را جابه‌جا می‌کند.",
      en: "Plain hashing remaps nearly every key when a server joins. Consistent hashing places keys and servers on a ring, assigning each key to the next server clockwise — adding or removing a server moves only a small slice of keys.",
    },
    analogy: {
      fa: "مثل حلقه‌ی ایستگاه اتوبوس: ایستگاه جدید وسط مسیر اضافه شود، فقط مسافران همان محدوده ایستگاه عوض می‌شود؛ نه کل شهر جابه‌جا می‌شود.",
      en: "Like a circular bus route: adding a stop mid-route only reshuffles passengers in that segment — the whole city isn't remapped.",
    },
    related: ["Sharding", "Load Balancer", "CAP Theorem"],
  },
  {
    term: "Circuit Breaker",
    fa: "مدارشکن",
    category: "system-design",
    definition: {
      fa: "مدارشکن وقتی سرویس پایین‌دستی مدام شکست می‌خورد، فراخوانی‌ها را به‌جای انتظار و timeout، فوراً قطع می‌کند تا زنجیره‌ی خرابی نزان شود؛ بعد از یک دوره‌ی خنک، با درخواست‌های آزمایشی دوباره امتحان می‌گیرد.",
      en: "A circuit breaker stops calling a failing downstream service outright — instead of piling up timeouts — to prevent cascading failure; after a cool-down it probes with test requests.",
    },
    analogy: {
      fa: "مثل فیوز خانه: جریان اضافه که دید، برق را قطع می‌کند تا سیم‌ها نسوزند؛ بعداً با بازکردن دوباره امتحان می‌گیری آیا مشکل رفع شده.",
      en: "Like a home fuse: it cuts the current when overload is detected so wires don't burn; later you flip it back to test whether the fault is gone.",
    },
    related: ["Backpressure", "Load Balancer", "Monitoring"],
  },
  {
    term: "CQRS",
    fa: "جداسازی دستور از پرس‌وجو",
    category: "system-design",
    definition: {
      fa: "CQRS مسیر خواندن و نوشتن را جدا می‌کند: مدل نوشتن نرمال‌شده و سخت‌گیرانه، مدل خواندن denormalized و بهینه برای کوئری. هر دو با رویدادها هم‌گام می‌شوند.",
      en: "CQRS splits the read and write paths: a strict, normalized write model and a denormalized read model optimized for queries, kept in sync via events.",
    },
    analogy: {
      fa: "مثل آشپزخانه و ویترین رستوران: آشپزخانه قواعد سخت خودش را دارد (نوشتن)؛ ویترین چیده‌شده و سریع برای مشتری (خواندن)؛ پیک بین‌شان را هم‌گام می‌کند.",
      en: "Like a restaurant kitchen and display case: the kitchen follows strict rules (writes); the display is arranged for fast serving (reads); runners keep them in sync.",
    },
    related: ["Event Sourcing", "NoSQL", "Index"],
  },
  {
    term: "Event Sourcing",
    fa: "مبتنی بر رویداد",
    category: "system-design",
    definition: {
      fa: "در Event Sourcing به‌جای ذخیره‌ی وضعیت فعلی، دنباله‌ی کامل رویدادها ذخیره می‌شود («سبد اضافه شد»، «تخفیف اعمال شد») و وضعیت با پخش‌کردن رویدادها بازسازی می‌گردد؛ تاریخچه کامل و قابل بازپخش است.",
      en: "In event sourcing you store the full sequence of events ('item added', 'discount applied') instead of the current state, and rebuild state by replaying events — a complete, replayable history.",
    },
    analogy: {
      fa: "مثل دفتر روزنامه‌ی حسابدار: به‌جای «موجودی فعلی»، همه‌ی رسیدها نگه داشته می‌شود؛ موجودی هر لحظه با جمع رسیدها درمی‌آید و هر اشتباهی قابل ردیابی است.",
      en: "Like an accountant's ledger: instead of storing 'current balance', every receipt is kept; the balance is derived by summing receipts, and any mistake is traceable.",
    },
    related: ["CQRS", "Transaction", "Write-ahead Log"],
  },
  {
    term: "Eventual Consistency",
    fa: "سازگاری نهایی",
    category: "system-design",
    definition: {
      fa: "در سازگاری نهایی، بعد از هر نوشتن، نسخه‌ها بالاخره به یک عدد واحد می‌رسند — نه لزوماً فوری. در عوض خواندن‌ها سریع و سیستم همیشه در دسترس است؛ برای لایک‌ها و شمارنده‌ها عالی، برای موجودی بانک خطرناک.",
      en: "With eventual consistency, replicas converge to the same value after every write — not necessarily instantly. Reads stay fast and the system stays available: great for likes and counters, risky for bank balances.",
    },
    analogy: {
      fa: "مثل شایعه در مدرسه: چند لحظه نسخه‌های مختلف می‌چرخد، ولی آخر همه به یک روایت می‌رسند؛ اگر داستان «کی پول دارد» باشد، این تاخیر مشکل‌ساز است.",
      en: "Like a rumor at school: versions float around for a moment, then everyone converges on one story — fine for gossip, dangerous for 'who holds the money'.",
    },
    related: ["CAP Theorem", "Replication", "Cache"],
  },
  {
    term: "Leader Election",
    fa: "انتخاب رهبر",
    category: "system-design",
    definition: {
      fa: "در سیستم‌های توزیع‌شده چند نود یک نقش را باید فقط یکی انجام دهد (نوشتن، زمان‌بندی). انتخاب رهبر با الگوریتم‌هایی مثل Raft به‌طور خودکار رهبر را انتخاب و بعد از مرگش جانشین می‌کند.",
      en: "In distributed systems, only one node may perform a role (writes, scheduling). Leader election algorithms like Raft choose the leader automatically and replace it when it dies.",
    },
    analogy: {
      fa: "مثل انتخاب سرگروه کلاس: همه رأی می‌دهند، یک نفر رهبر می‌شود؛ اگر غایب شد، کلاس بدون دعوا و بدون دو سرگروه هم‌زمان، سرگروه جدید انتخاب می‌کند.",
      en: "Like electing a class captain: everyone votes, one leads; if they're absent, the class elects a new one — without two captains fighting at once.",
    },
    related: ["Replication", "CAP Theorem", "Deployment"],
  },
  {
    term: "Pub/Sub",
    fa: "انتشار/اشتراک",
    category: "system-design",
    definition: {
      fa: "در Pub/Sub فرستنده پیام را به «موضوع» منتشر می‌کند و هر تعداد مشترک آن را می‌گیرد — فرستنده و گیرنده همدیگر را نمی‌شناسند. جداسازی سرویس‌ها و پخش رویداد ستون‌هایش است.",
      en: "In Pub/Sub, publishers emit messages to a 'topic' and any number of subscribers receive them — publishers and subscribers don't know each other. It decouples services and broadcasts events.",
    },
    analogy: {
      fa: "مثل کانال رادیویی: گوینده نمی‌داند چه‌کسی گوش می‌دهد؛ هر که فرکانس را تنظیم کرده باشد می‌شنود — از یک نفر تا میلیون‌ها.",
      en: "Like a radio station: the broadcaster doesn't know who's listening; anyone tuned to the frequency hears it — one person or millions.",
    },
    related: ["Message Queue", "Microservices", "Webhook"],
  },
  {
    term: "Backpressure",
    fa: "فشار معکوس",
    category: "system-design",
    definition: {
      fa: "Backpressure یعنی مصرف‌کننده به تولیدکننده بگوید «کم‌تر و آرام‌تر بفرست» تا صف بی‌نهایت نشود؛ با کنترل جریان، صف محدود یا ردکردن بار اجرا می‌شود. بدون آن، کند شدن یک سرویس کل زنجیره را می‌کشد.",
      en: "Backpressure is the consumer telling the producer 'send less, slower' so queues don't grow unbounded — via flow control, bounded queues or load shedding. Without it, one slow service kills the chain.",
    },
    analogy: {
      fa: "مثل بچشمه که مخزنش پر است: شیر بالادست باید بفهمد و جریان را ببندد؛ وگرنه آب از لبه سرریز می‌کند و همه‌جا را می‌گیرد.",
      en: "Like a cistern that's full: the upstream valve must sense it and throttle the flow — otherwise water spills everywhere.",
    },
    related: ["Message Queue", "Rate Limiting", "Circuit Breaker"],
  },
  {
    term: "Fan-out",
    fa: "بازپخش",
    category: "system-design",
    definition: {
      fa: "Fan-out یعنی یک رویداد به‌طور موازی به همه‌ی مقصدها برسد: پست شما به تایملاین هزار دنبال‌کننده کپی می‌شود. چالش مشهور آن «مشکل سلبریتی» است: کاربر با میلیون‌ها دنبال‌کننده نوشتن را گران می‌کند.",
      en: "Fan-out delivers one event in parallel to all destinations: your post is copied to a thousand followers' timelines. Its famous challenge is the 'celebrity problem' — users with millions of followers make writes expensive.",
    },
    analogy: {
      fa: "مثل کارت‌دعوت: می‌توانی به هر مهمان جداگانه زنگ بزنی (fan-out on write، گران برای مشهورها) یا هر مهمان خودش موقع آمدن بپرسد چه خبر (fan-out on read).",
      en: "Like wedding invitations: call every guest individually (fan-out on write — expensive for celebrities), or let each guest ask for the news on arrival (fan-out on read).",
    },
    related: ["Message Queue", "Pub/Sub", "Cache"],
  },
  {
    term: "Write-ahead Log",
    fa: "دفتر پیش‌نویس نوشتن",
    category: "system-design",
    definition: {
      fa: "WAL یعنی قبل از اعمال تغییر روی داده‌ی اصلی، تغییر در یک دفتر پیوسته ثبت شود؛ در کرش، سیستم با بازپخش دفتر به حالت سالم برمی‌گردد. پایه‌ی پایداری پایگاه داده‌ها و صف‌هاست.",
      en: "A WAL records every change to a sequential log before applying it to the main data; after a crash, the system replays the log to recover — the backbone of database durability.",
    },
    analogy: {
      fa: "مثل دفتر مشروط صرافی که قبل از انجام هر معامله، معامله را می‌نویسد؛ برق که رفت، با بازخوانی دفتر معلوم است کدام معامله‌ها انجام شده و کدام نه.",
      en: "Like an exchange desk that writes every trade before executing it: after a power cut, reading the log shows exactly which trades completed and which didn't.",
    },
    related: ["Event Sourcing", "Transaction", "ACID"],
  },
  {
    term: "Bloom Filter",
    fa: "فیلتر بلوم",
    category: "system-design",
    definition: {
      fa: "فیلتر بلوم ساختار احتمالی است که با فضای کوچک جواب می‌دهد: «قطعاً نیست» یا «احتمالاً هست». برای حذف جست‌وجوهای بی‌فایده از دیتابیس و کش استفاده می‌شود و نرخ خطای کوچکش قابل تنظیم است.",
      en: "A Bloom filter is a probabilistic structure answering 'definitely not present' or 'probably present' in tiny space — used to skip useless database/cache lookups, with a small tunable error rate.",
    },
    analogy: {
      fa: "مثل نگهبانی که فقط «این اسم تو لیست نیست، برو» را مطمئن می‌گوید؛ «هست» را با احتمال اشتباه می‌گوید — پس گاردِ اصلی فقط اسم‌های مثبت را چک می‌کند.",
      en: "Like a bouncer who can say with certainty 'you're not on the list' but only 'probably on it' — so the main gate checks only the positives.",
    },
    related: ["Hash Table", "Cache", "Big-O Notation"],
  },
];
