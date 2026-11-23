import type { GlossaryTerm } from "../../schema";

/** Behavioral & Engineering Culture glossary category — STAR, postmortems, RFCs, code reviews, agile & collaboration. Consumed by: src/data/glossary/terms.ts. */
export const behavioralTerms: GlossaryTerm[] = [
  {
    term: "STAR Method",
    fa: "روش پاسخ‌گویی STAR",
    category: "behavioral",
    definition: {
      fa: "ساختار استاندارد پاسخ به سوالات مصاحبهٔ رفتاری در چهار بخش: Situation (زمینه)، Task (مسئولیت شما)، Action (اقدام‌های دقیق خودتان) و Result (نتیجهٔ قابل اندازه‌گیری).",
      en: "A structured framework for behavioral interview stories: Situation (context), Task (your responsibility), Action (specific steps you took), and Result (measurable impact).",
    },
    analogy: {
      fa: "مثل قصه‌گویی سینمایی چهارپرده: صحنه را می‌چینی، چالش را می‌گویی، کار قهرمان را نشان می‌دهی و در پایان نتیجه را با عدد ثابت می‌کنی.",
      en: "Like a crisp four-act story: set the scene, name the challenge, highlight your actions, and close with concrete results.",
    },
    related: ["Trade-off Analysis", "Ownership & Accountability", "Postmortem"],
  },
  {
    term: "Postmortem",
    fa: "گزارش پس از حادثه (Blameless Postmortem)",
    category: "behavioral",
    definition: {
      fa: "سند تحلیلی بدون سرزنش افراد پس از یک اختلال یا قطعی سرویس که خط زمانی حادثه، علت ریشه‌ای (Root Cause) و اقدامات پیشگیرانهٔ سیستمی را ثبت می‌کند تا همان خطا تکرار نشود.",
      en: "A blameless review written after an outage documenting the timeline, root causes, and systemic safeguards so the organization learns instead of blaming individuals.",
    },
    analogy: {
      fa: "مثل بررسی جعبهٔ سیاه هواپیما: هدف مقصر کردن خلبان نیست، اصلاح چک‌لیست و سیستم است تا پروازهای بعدی امن‌تر شوند.",
      en: "Like aviation black-box investigations: focused on fixing systems and checklists rather than punishing individuals.",
    },
    related: ["On-Call & Incident Response", "MTTR & MTBF", "Psychological Safety"],
  },
  {
    term: "Code Review",
    fa: "بازبینی کد (Code Review)",
    category: "behavioral",
    definition: {
      fa: "بررسی تغییرات کد (Pull Request) توسط هم‌تیمی‌ها پیش از ادغام برای کشف باگ‌ها، حفظ خوانایی و معماری، و انتقال دانش درون تیم با بازخورد سازنده و محترمانه.",
      en: "Peer inspection of code changes (Pull Requests) before merging to catch bugs, uphold maintainability, and spread system knowledge with constructive, respectful feedback.",
    },
    analogy: {
      fa: "مثل ویراستاری مقاله پیش از چاپ: چشم تازه خطاهایی را می‌بیند که نویسنده به‌خاطر آشنایی زیاد از کنارشان رد شده است.",
      en: "Like an editor reviewing a draft before publication — fresh eyes catch blind spots the author scrolled past.",
    },
    related: ["Version Control", "Technical Debt", "Psychological Safety"],
  },
  {
    term: "RFC & Design Doc",
    fa: "سند طراحی فنی (RFC / Design Doc)",
    category: "behavioral",
    definition: {
      fa: "سند مختصری که پیش از پیاده‌سازی یک تغییر بزرگ نوشته می‌شود تا مسئله، گزینه‌های معماری، مصالحه‌ها (Trade-offs) و ریسک‌ها را به اشتراک بگذارد و پیش از کدنویسی هم‌راستایی تیم را بگیرد.",
      en: "A concise written proposal shared before building a major change, outlining goals, architecture options, trade-offs, and risks to gather early feedback and team alignment.",
    },
    analogy: {
      fa: "مثل تأیید نقشهٔ معماری قبل از بتن‌ریزی: اصلاح یک خط روی کاغذ چند دقیقه وقت می‌برد اما خراب کردن دیوار چند هفته.",
      en: "Like reviewing architectural blueprints before pouring concrete: changing a line on paper takes minutes, tearing down a wall takes weeks.",
    },
    related: ["Trade-off Analysis", "Clean Architecture", "Stakeholder Management"],
  },
  {
    term: "Agile & Scrum",
    fa: "روش چابک (Agile و Scrum)",
    category: "behavioral",
    definition: {
      fa: "رویکرد تکرارشوندهٔ توسعهٔ نرم‌افزار در بازه‌های کوتاه (Sprintهای ۱ تا ۲ هفته‌ای) برای تحویل تدریجی ارزش به کاربر، دریافت بازخورد زودهنگام و انطباق با تغییرات.",
      en: "An iterative delivery approach working in short sprints (1–2 weeks) to ship incremental user value, gather rapid feedback, and adapt to changing priorities.",
    },
    analogy: {
      fa: "به‌جای ساختن مخفیانهٔ یک ماشین در دو سال، اول دوچرخه می‌سازی، بازخورد می‌گیری و مرحله‌به‌مرحله ارتقا می‌دهی.",
      en: "Instead of disappearing for a year to build everything at once, you ship small working slices and steer using real feedback.",
    },
    related: ["Retrospective", "Estimation & Story Points", "Scope Creep"],
  },
  {
    term: "Retrospective",
    fa: "جلسهٔ بازنگری (Retrospective)",
    category: "behavioral",
    definition: {
      fa: "جلسهٔ منظم پایان هر اسپرینت یا پروژه که تیم بررسی می‌کند چه کارهایی خوب پیش رفت، چه چیزهایی مانع بود و چه اقدام مشخصی برای بهبود فرایند در دورهٔ بعدی انجام شود.",
      en: "A recurring reflection meeting at the end of a sprint or project to ask what went well, what slowed the team down, and what concrete action to improve next cycle.",
    },
    analogy: {
      fa: "مثل بازبینی فیلم مسابقه توسط تیم ورزشی پس از بازی تا تاکتیک بازی بعدی بهتر شود.",
      en: "Like a sports team watching game tape after a match to sharpen tactics for the next game.",
    },
    related: ["Agile & Scrum", "Psychological Safety", "Postmortem"],
  },
  {
    term: "Scope Creep",
    fa: "گسترش بی‌ضابطهٔ دامنه (Scope Creep)",
    category: "behavioral",
    definition: {
      fa: "اضافه شدن تدریجی و کنترل‌نشدهٔ ویژگی‌ها و خواسته‌های جدید وسط یک پروژه بدون افزایش زمان یا منابع، که معمولاً به تأخیر، خستگی تیم و افت کیفیت منجر می‌شود.",
      en: "Uncontrolled growth of requirements mid-project without adjusting timeline or resources, often causing missed deadlines, burnout, and degraded quality.",
    },
    analogy: {
      fa: "مثل نقاشی یک اتاق که وسط کار تبدیل به تعویض کفپوش، کابینت و لوله‌کشی کل خانه می‌شود ولی موعد تحویل همان جمعه می‌ماند.",
      en: "Like starting a weekend room-painting job that quietly expands into redoing the entire kitchen by the same Sunday deadline.",
    },
    related: ["Stakeholder Management", "Estimation & Story Points", "Trade-off Analysis"],
  },
  {
    term: "Trade-off Analysis",
    fa: "تحلیل مصالحه (Trade-off)",
    category: "behavioral",
    definition: {
      fa: "مهارت سنجیدن مزایا، معایب، هزینه‌ها و ریسک‌های گزینه‌های مختلف مهندسی (مثل سرعت در برابر سازگاری یا سادگی در برابر انعطاف) و توجیه شفاف علت انتخاب یک مسیر.",
      en: "Evaluating pros, cons, costs, and constraints across engineering options (e.g., latency vs. consistency, speed vs. maintainability) and clearly justifying the chosen path.",
    },
    analogy: {
      fa: "در مهندسی هیچ انتخاب بی‌هزینه‌ای وجود ندارد؛ مثل انتخاب ماشین بین مصرف سوخت کم، سرعت بالا و فضای صندوق.",
      en: "There are no free lunches in engineering — like choosing between fuel economy, cargo space, and acceleration.",
    },
    related: ["RFC & Design Doc", "CAP Theorem", "Technical Debt"],
  },
  {
    term: "Ownership & Accountability",
    fa: "مالکیت و مسئولیت‌پذیری",
    category: "behavioral",
    definition: {
      fa: "نگاه «این کار مال من است» از طراحی تا استقرار، پایش در تولید و رفع مشکلات؛ یعنی نه فقط نوشتن کد و تحویل دادن، بلکه تضمین نتیجهٔ واقعی برای کاربر و تیم.",
      en: "Taking end-to-end responsibility from design through deployment, production monitoring, and follow-up — caring about real user outcomes rather than merely closing a ticket.",
    },
    analogy: {
      fa: "مثل آشپزی که فقط غذا را نمی‌پزد، بلکه طعمش را می‌چشد و مطمئن می‌شود گرم و سالم به دست مشتری برسد.",
      en: "Like a chef who doesn't just toss food on a counter, but tastes it and ensures the guest has a great meal.",
    },
    related: ["STAR Method", "On-Call & Incident Response", "Observability"],
  },
  {
    term: "On-Call & Incident Response",
    fa: "کشیک فنی و پاسخ به حادثه (On-Call)",
    category: "behavioral",
    definition: {
      fa: "چرخشی بودن مسئولیت پاسخ فوری به هشدارهای تولید، اولویت دادن به بازگرداندن سریع سرویس (Mitigation) پیش از تحقیق عمیق، اطلاع‌رسانی شفاف و ثبت Postmortem پس از پایداری.",
      en: "Rotating duty to respond to production alerts: prioritize fast user mitigation first, communicate status clearly, then investigate root causes and write a postmortem.",
    },
    analogy: {
      fa: "مثل اورژانس بیمارستان: اول خون‌ریزی را بند می‌آورید و بیمار را پایدار می‌کنید، بعد آزمایش‌های تکمیلی را انجام می‌دهید.",
      en: "Like an ER team: stabilize the patient first to stop the bleeding, then run deep diagnostics afterward.",
    },
    related: ["Postmortem", "MTTR & MTBF", "Rollback", "Monitoring"],
  },
  {
    term: "Psychological Safety",
    fa: "امنیت روانی در تیم",
    category: "behavioral",
    definition: {
      fa: "فضایی در تیم مهندسی که اعضا بدون ترس از تمسخر یا تنبیه می‌توانند سوال بپرسند، اشتباه را سریع گزارش دهند، ایدهٔ متفاوت مطرح کنند و مخالفت محترمانه داشته باشند.",
      en: "A team climate where engineers feel safe asking questions, surfacing mistakes early, proposing bold ideas, and respectfully challenging decisions without fear of blame.",
    },
    analogy: {
      fa: "مثل بندبازی که تور ایمنی زیرش است: با آرامش و شفافیت کار می‌کند و اگر مشکلی دید بلافاصله اعلام می‌کند.",
      en: "Like working with a safety net: people speak up early about risks instead of hiding problems until they explode.",
    },
    related: ["Postmortem", "Code Review", "Retrospective", "Mentorship"],
  },
  {
    term: "Mentorship",
    fa: "منتورشیپ و رشد هم‌تیمی‌ها",
    category: "behavioral",
    definition: {
      fa: "راهنمایی برنامه‌نویسان کم‌تجربه‌تر از طریق جفت‌برنامه‌نویسی (Pair Programming)، بازخوردهای آموزشی در Code Review و کمک به تصمیم‌گیری مستقل به‌جای حل کردن همهٔ کارها به جای آن‌ها.",
      en: "Growing fellow engineers through pairing, educational code reviews, and guiding them to reason independently rather than simply handing over finished solutions.",
    },
    analogy: {
      fa: "مثل یاد دادن ماهیگیری و خواندن نقشه به‌جای اینکه هر روز ماهی آماده تحویل بدهی.",
      en: "Like teaching someone how to read the compass rather than carrying them to every destination.",
    },
    related: ["Code Review", "Psychological Safety", "Cross-Functional Collaboration"],
  },
  {
    term: "Cross-Functional Collaboration",
    fa: "همکاری میان‌تیمی (Cross-Functional)",
    category: "behavioral",
    definition: {
      fa: "همکاری نزدیک مهندسان با مدیر محصول، طراح UI/UX، تیم داده و تیم امنیت برای ترجمهٔ نیازهای کسب‌وکار به راه‌حل‌های فنی ساده و مؤثر.",
      en: "Working closely across engineering, product management, design, data, and security to translate user and business goals into practical, well-scoped technical solutions.",
    },
    analogy: {
      fa: "مثل ارکستر سمفونی: ویولن، پیانو و سازهای کوبه‌ای هرکدام تخصص متفاوت دارند اما یک قطعهٔ مشترک را هماهنگ اجرا می‌کنند.",
      en: "Like a symphony orchestra: distinct specialists playing different instruments in sync toward one shared piece.",
    },
    related: ["Stakeholder Management", "RFC & Design Doc", "Agile & Scrum"],
  },
  {
    term: "Stakeholder Management",
    fa: "مدیریت ذی‌نفعان",
    category: "behavioral",
    definition: {
      fa: "هم‌تراز نگه داشتن انتظارات مدیران، تیم محصول و مشتریان از طریق اطلاع‌رسانی زودهنگام دربارهٔ ریسک‌ها، اولویت‌بندی شفاف و ارائهٔ گزینه‌ها به‌جای گفتن صرف «نمی‌شود».",
      en: "Aligning expectations with product leads, managers, and partners through early risk visibility, clear prioritization, and offering actionable options instead of blunt 'no's.",
    },
    analogy: {
      fa: "مثل خلبانی که به‌محض دیدن هوای طوفانی به مسافران اطلاع می‌دهد و مسیر جایگزین و زمان جدید رسیدن را شفاف می‌گوید.",
      en: "Like a pilot announcing turbulence and an adjusted arrival time early rather than surprising passengers at landing.",
    },
    related: ["Scope Creep", "Cross-Functional Collaboration", "Trade-off Analysis"],
  },
  {
    term: "Estimation & Story Points",
    fa: "برآورد کار و امتیاز داستان (Estimation)",
    category: "behavioral",
    definition: {
      fa: "تخمین نسبی پیچیدگی، عدم قطعیت و حجم یک تسک (اغلب با دنبالهٔ فیبوناچی) برای برنامه‌ریزی واقع‌بینانهٔ اسپرینت و شکستن کارهای مبهم بزرگ به گام‌های قابل پیش‌بینی.",
      en: "Estimating relative complexity and uncertainty of work (often with Fibonacci story points) to plan realistically and surface oversized, ambiguous tasks that need breaking down.",
    },
    analogy: {
      fa: "مثل مقایسهٔ سایز تی‌شرت (S, M, L, XL) برای تخمین سختی مسیر کوهنوردی به‌جای قول دادن دقیق بر حسب دقیقه.",
      en: "Like comparing trail difficulty by T-shirt sizes (S/M/L) rather than pretending you can predict every minute on an unknown hike.",
    },
    related: ["Agile & Scrum", "Scope Creep", "Retrospective"],
  },
];
