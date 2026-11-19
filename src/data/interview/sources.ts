/**
 * DATA FILE — "منابع مصاحبه" (interview sources).
 * The most-starred, actively-maintained GitHub interview repos.
 * Stars / last-push verified live via api.github.com on Nov 18, 2026.
 * Consumed by: /interview hub page, sources section.
 */

export interface InterviewSource {
  /** owner/repo */
  repo: string;
  url: string;
  /** stars as of Nov 18, 2026 */
  stars: string;
  /** last push, short date */
  pushed: string;
  group: "company" | "handbook" | "field";
  title: { fa: string; en: string };
  note: { fa: string; en: string };
}

export const interviewSources: InterviewSource[] = [
  // ── company-wise ──────────────────────────────────────────────
  {
    repo: "liquidslr/leetcode-company-wise-problems",
    url: "https://github.com/liquidslr/leetcode-company-wise-problems",
    stars: "35.4k",
    pushed: "2026-10",
    group: "company",
    title: { fa: "سوالات لیت‌کد به تفکیک شرکت", en: "LeetCode questions by company" },
    note: {
      fa: "برای ده‌ها شرکت (آمازون، گوگل، متا و…) فراوانی سوال‌های ۳۰/۶۰/۹۰ روز اخیر — فقط الگوریتم و کدنویسی.",
      en: "For dozens of companies (Amazon, Google, Meta…): 30/60/90-day question frequency — algorithms and coding only.",
    },
  },
  {
    repo: "snehasishroy/leetcode-companywise-interview-questions",
    url: "https://github.com/snehasishroy/leetcode-companywise-interview-questions",
    stars: "8.8k",
    pushed: "2026-08",
    group: "company",
    title: { fa: "پوشش شرکت‌ها — عریض‌ترین", en: "Widest company coverage" },
    note: {
      fa: "۶۶۰ پوشه‌ی شرکت — بزرگ‌ترین آرشیو سوالات به تفکیک شرکت (به‌روزرسانی ژوئیه ۲۰۲۶).",
      en: "660 company folders — the largest company-wise archive (updated July 2026).",
    },
  },
  {
    repo: "kdn251/interviews",
    url: "https://github.com/kdn251/interviews",
    stars: "65.6k",
    pushed: "2024",
    group: "company",
    title: { fa: "راهنمای مصاحبه (جاوا/پایتون)", en: "Interviews handbook (Java/Python)" },
    note: {
      fa: "راه‌حل الگوریتم و ساختار داده به جاوا و پایتون + بخش رفتاری و شرکت‌محور.",
      en: "Algorithm and data-structure solutions in Java and Python, plus behavioral and company sections.",
    },
  },
  // ── handbooks ─────────────────────────────────────────────────
  {
    repo: "donnemartin/system-design-primer",
    url: "https://github.com/donnemartin/system-design-primer",
    stars: "378k",
    pushed: "2026-09",
    group: "handbook",
    title: { fa: "پرستار طراحی سیستم", en: "System design primer" },
    note: {
      fa: "پرستاره‌ترین ریپوی مصاحبه در گیت‌هاب: مقیاس‌پذیری، CAP، کش، صف، و مسائل حل‌شده با فلش‌کارت انکی.",
      en: "The most-starred interview repo on GitHub: scalability, CAP, caching, queues, solved problems and Anki cards.",
    },
  },
  {
    repo: "yangshun/tech-interview-handbook",
    url: "https://github.com/yangshun/tech-interview-handbook",
    stars: "143k",
    pushed: "2026-08",
    group: "handbook",
    title: { fa: "کتاب راهنمای مصاحبه فنی", en: "Tech interview handbook" },
    note: {
      fa: "Grind 75، برنامه‌ی مطالعه، برگه‌های خلاصه‌ی الگوریتم، رزومه‌ی FAANG و سوال‌های رفتاری.",
      en: "Grind 75, a study plan, algorithm cheatsheets, the FAANG resume guide and behavioral questions.",
    },
  },
  {
    repo: "DopplerHQ/awesome-interview-questions",
    url: "https://github.com/DopplerHQ/awesome-interview-questions",
    stars: "85.6k",
    pushed: "2024",
    group: "handbook",
    title: { fa: "فهرست لینک همه‌ی حوزه‌ها", en: "Link index for every field" },
    note: {
      fa: "پهن‌ترین پوشش موضوعی به شکل فهرست لینک: زبان‌ها، دیتابیس، شبکه، امنیت، الگوریتم.",
      en: "The broadest topical coverage as a link index: languages, databases, networks, security, algorithms.",
    },
  },
  // ── field-specific ────────────────────────────────────────────
  {
    repo: "sudheerj/reactjs-interview-questions",
    url: "https://github.com/sudheerj/reactjs-interview-questions",
    stars: "44.9k",
    pushed: "2026",
    group: "field",
    title: { fa: "ری‌اکت — سوالات مصاحبه", en: "React interview questions" },
    note: {
      fa: "از پایه تا React 18/19: هوک‌ها، Redux، تست، React Native — منبع اصلی بخش ری‌اکت همین سایت.",
      en: "From basics to React 18/19: hooks, Redux, testing, React Native — the main source behind this site's React field.",
    },
  },
  {
    repo: "sudheerj/javascript-interview-questions",
    url: "https://github.com/sudheerj/javascript-interview-questions",
    stars: "27.7k",
    pushed: "2026",
    group: "field",
    title: { fa: "جاوااسکریپت — سوالات مصاحبه", en: "JavaScript interview questions" },
    note: {
      fa: "۱۰۰۰ سوال: هسته‌ی JS، ES6+، ناهمگامی، DOM و تمرین‌های کدی.",
      en: "1,000 questions: JS core, ES6+, async, DOM and coding exercises.",
    },
  },
  {
    repo: "greatfrontend/top-javascript-interview-questions",
    url: "https://github.com/greatfrontend/top-javascript-interview-questions",
    stars: "10.2k",
    pushed: "2026",
    group: "field",
    title: { fa: "GreatFrontEnd — جاوااسکریپت", en: "GreatFrontEnd — JavaScript" },
    note: {
      fa: "به‌روزشده برای ۲۰۲۶: hoisting/TDZ، ==/===، event loop — پاسخ‌های عمیق و استاندارد.",
      en: "Updated for 2026: hoisting/TDZ, ==/===, the event loop — deep, spec-grade answers.",
    },
  },
  {
    repo: "ashishps1/awesome-system-design-resources",
    url: "https://github.com/ashishps1/awesome-system-design-resources",
    stars: "43.5k",
    pushed: "2026",
    group: "field",
    title: { fa: "منابع طراحی سیستم", en: "System design resources" },
    note: {
      fa: "مفاهیم اصلی، شبکه، دیتابیس، کش و مسائل آسان/متوسط/سخت با تریدآف‌ها.",
      en: "Core concepts, networking, databases, caching and easy/medium/hard problems with trade-offs.",
    },
  },
  {
    repo: "Devinterview-io/llms-interview-questions",
    url: "https://github.com/Devinterview-io/llms-interview-questions",
    stars: "1.1k",
    pushed: "2026",
    group: "field",
    title: { fa: "LLM و مهندس هوش مصنوعی", en: "LLM / AI engineer" },
    note: {
      fa: "۶۳ سوال کلیدی ۲۰۲۶: ترنسفورمر، Mamba/MoE، خط لوله آموزش و بهینه‌سازی استنتاج.",
      en: "63 must-know 2026 questions: transformers, Mamba/MoE, the training pipeline and inference optimization.",
    },
  },
];

export const sourceGroups = [
  { id: "company", title: { fa: "به تفکیک شرکت", en: "Company-wise" } },
  { id: "handbook", title: { fa: "کتاب‌های راهنما", en: "Handbooks" } },
  { id: "field", title: { fa: "تخصصی هر حوزه", en: "Field-specific" } },
] as const;
