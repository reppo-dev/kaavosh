import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (devops, extended). Merged into terms.ts → /glossary page. */
export const moreDevopsTerms: GlossaryTerm[] = [

  {
    term: "Reverse Proxy",
    fa: "پروکسی معکوس",
    category: "devops",
    definition: {
      fa: "پروکسی معکوس دروازه‌ی جلوی سرورهای شماست: درخواست‌ها اول به او می‌رسند و او توزیع، کش، SSL و محافظت اعمال می‌کند. کاربر هرگز مستقیم به سرور اصلی نمی‌رسد. Nginx معروف‌ترین است.",
      en: "A reverse proxy is the gate in front of your servers: requests hit it first, and it applies distribution, caching, SSL and protection. Users never reach the origin directly. Nginx is the most famous.",
    },
    analogy: {
      fa: "مثل پذیرش یک مجموعه بزرگ: مهمان همیشه اول به پذیرش می‌رسد؛ پذیرش هدایت می‌کند، بازدیدهای تکراری را خودش جواب می‌دهد و مزاحم‌ها را قبل از رسیدن به اتاق‌ها می‌غرفه.",
      en: "Like a large organization's front desk: visitors always arrive there first; it routes them, answers repeated questions itself, and filters troublemakers before they reach the rooms.",
    },
    related: ["Proxy", "Load Balancer", "TLS Certificate"],
  },
  {
    term: "TLS Certificate",
    fa: "گواهی TLS",
    category: "devops",
    definition: {
      fa: "گواهی TLS شناسنامه‌ی دیجیتال دامنه‌ی شماست که مرجع معتبری (مثل Let's Encrypt) امضایش کرده: مرورگر با دیدنش مطمئن می‌شود به سرور واقعی وصل است و ترافیک رمز می‌شود.",
      en: "A TLS certificate is your domain's digital ID, signed by a trusted authority (like Let's Encrypt): seeing it, the browser trusts it reached the real server, and traffic gets encrypted.",
    },
    analogy: {
      fa: "مثل شناسنامه‌ای که اداره‌ی ثبت امضا کرده: بانک با دیدنش مطمئن می‌شود شما همان شخص هستید و مدارک را داخل پاکت مهر و موم‌شده رد و بدل می‌کند.",
      en: "Like an ID stamped by the civil registry: the bank trusts you are that person and exchanges documents in a sealed envelope.",
    },
    related: ["TLS", "Reverse Proxy", "Encryption"],
  },
  {
    term: "Canary Release",
    fa: "انتشار قناری",
    category: "devops",
    definition: {
      fa: "انتشار قناری یعنی نسخه‌ی جدید اول فقط به درصد کوچکی از کاربران برود (مثلاً ۵٪)؛ اگر متریک‌ها سالم بودند کم‌کم به ۱۰۰٪ می‌رسد. آسیب محدود به آن گروه کوچک می‌ماند.",
      en: "A canary release sends the new version to a small slice of users first (say 5%); if metrics stay healthy, it ramps to 100%. Any damage stays contained to that small group.",
    },
    analogy: {
      fa: "مثل امتحان‌کردن آب دوش با آرنج: قبل از کل بدن، بخش کوچکی حس می‌کند؛ اگر داغ بود، فقط آن بخش سوخته — نه کل بدن.",
      en: "Like testing shower water with your elbow: a small patch feels the heat first; if it's scalding, only that patch suffers — not the whole body.",
    },
    related: ["Rollback", "Deployment", "Monitoring"],
  },
  {
    term: "Rollback",
    fa: "برگشت به نسخه قبل",
    category: "devops",
    definition: {
      fa: "Rollback یعنی بازگشت سریع به نسخه‌ی قبلی وقتی انتشار جدید خراب شد — ترجیحاً با یک دستور، نه با هجوم شبانه‌ی تیم. برای همین است که نسخه‌های قبلی همیشه آماده نگه داشته می‌شوند.",
      en: "Rollback means quickly returning to the previous version when a release misbehaves — ideally with one command, not a midnight team scramble. That's why previous builds are always kept ready.",
    },
    analogy: {
      fa: "مثل سیستم بازی ذخیره‌شده: قبل از مرحله‌ی خطرناک ذخیره کرده‌اید؛ باختید، از همان نقطه ادامه می‌دهید، نه از صفر بازی.",
      en: "Like a game save system: you saved before the dangerous level; on defeat you resume from that point — never restart the whole game.",
    },
    related: ["Canary Release", "Deployment", "CI/CD"],
  },
  {
    term: "Secrets Management",
    fa: "مدیریت اسرار",
    category: "devops",
    definition: {
      fa: "مدیریت اسرار یعنی کلیدها، پسوردها و توکن‌ها هرگز داخل کد یا گیت نروند: در متغیرهای محیطی یا گاوصندوق‌هایی مثل Vault نگه داشته و به‌صورت امن به اپ تزریق می‌شوند و قابل چرخش‌اند.",
      en: "Secrets management means keys, passwords and tokens never live in code or git: they're stored in environment variables or vaults (like Vault), injected securely into the app, and rotatable.",
    },
    analogy: {
      fa: "مثل کلید گاوصندوق بانک: روی دیوار دفتر چسبانده نمی‌شود؛ در گاوصندوقی دیگر نگه داشته می‌شود، فقط افراد مجاز به آن دسترسی دارند و هر دوره چرخانده می‌شود.",
      en: "Like a bank vault key: it's never taped to the office wall; it lives in another safe, only authorized staff touch it, and it rotates periodically.",
    },
    related: ["Encryption", "CI/CD", "Hashing"],
  },
];
