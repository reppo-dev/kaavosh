import type { LearningPath } from "../schema";

/**
 * DATA FILE — Learning Path. Consumed by: /paths grid page,
 * /paths/[slug] roadmap page, landing page paths preview.
 * Educational & defensive focus only.
 */
export const cybersecurityPath: LearningPath = {
  slug: "cybersecurity",
  icon: "shield",
  accent: "rose",
  title: { fa: "امنیت سایبری", en: "Cybersecurity" },
  tagline: {
    fa: "سیستم‌ها را مثل مهاجم فکر کنید تا مثل نگهبان ببندید",
    en: "Think like an attacker to close the doors like a guard",
  },
  description: {
    fa: "امنیت سایبری یعنی فهمیدن اینکه سیستم‌ها چطور شکسته می‌شوند تا بتوانید آن‌ها را ببندید. این مسیر آموزشی و دفاعی است: از شبکه و لینوکس شروع می‌کنید، حفره‌های وب را می‌شناسید، رمزنگاری را می‌فهمید و در نهایت سیستم‌های احراز هویت امن طراحی می‌کنید.",
    en: "Cybersecurity means understanding how systems break so you can close them. This path is strictly educational and defensive: start with networks and Linux, recognize web vulnerabilities, understand cryptography, and finish by designing secure authentication systems.",
  },
  level: "beginner",
  totalDuration: { fa: "حدود ۷ تا ۱۱ ماه", en: "About 7–11 months" },
  roles: [
    { fa: "تحلیل‌گر امنیت جونیور", en: "Junior Security Analyst" },
    { fa: "متخصص امنیت وب", en: "Web Security Specialist" },
    { fa: "مهندس DevSecOps", en: "DevSecOps Engineer" },
    { fa: "تست‌کننده نفوذ (قانونمند)", en: "Penetration Tester (authorized)" },
  ],
  stages: [
    {
      id: "networks-and-os",
      title: { fa: "شبکه و سیستم‌عامل", en: "Networks & operating systems" },
      duration: { fa: "۵ تا ۶ هفته", en: "5–6 weeks" },
      summary: {
        fa: "قبل از دفاع باید بدانید چه چیزی را دفاع می‌کنید: بسته‌ها چطور بین دو کامپیوتر سفر می‌کنند، پورت‌ها چه‌اند، و لینوکس چطور کار می‌کند.",
        en: "Before defending, know what you're defending: how packets travel between two computers, what ports are, and how Linux works.",
      },
      topics: ["TCP/IP", "DNS", "Linux", "Firewalls", "Ports"],
      skills: [
        {
          fa: "با ابزارهایی مثل ping و traceroute مسیر داده را دنبال کنید",
          en: "Trace data paths with tools like ping and traceroute",
        },
        {
          fa: "مجوزهای فایل لینوکس را بخوانید و تنظیم کنید",
          en: "Read and set Linux file permissions",
        },
        {
          fa: "فایرول را پیکربندی کنید",
          en: "Configure a firewall",
        },
      ],
      resources: [
        {
          title: { fa: "Linux Journey — شبکه", en: "Linux Journey — networking" },
          url: "https://linuxjourney.com",
          type: "interactive",
        },
        {
          title: { fa: "MDN — کلیات HTTP", en: "MDN — HTTP overview" },
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh امنیت سایبری", en: "roadmap.sh Cyber Security" },
          url: "https://roadmap.sh/cyber-security",
          type: "roadmap",
        },
      ],
      visual: "http-request",
    },
    {
      id: "web-vulnerabilities",
      title: { fa: "حفره‌های امنیت وب", en: "Web security vulnerabilities" },
      duration: { fa: "۵ تا ۶ هفته", en: "5–6 weeks" },
      summary: {
        fa: "بیشتر حملات از چند حفره معروف می‌آیند: XSS یعنی کد غریبه در صفحه کاربر، CSRF یعنی درخواست جعلی به نام کاربر، SQL Injection یعنی دستور مخرب داخل کوئری. یاد می‌گیرید هر کدام چطور اتفاق می‌افتد و چطور بسته می‌شود.",
        en: "Most attacks come from a handful of famous holes: XSS means a stranger's code runs in the user's page, CSRF means a forged request in the user's name, SQL Injection means a malicious command inside a query. You learn how each happens and how each is closed.",
      },
      topics: ["OWASP", "XSS", "CSRF", "SQL Injection", "Input Validation"],
      skills: [
        {
          fa: "سه حفره اصلی را در کد تشخیص دهید",
          en: "Recognize the big three holes in code",
        },
        {
          fa: "ورودی کاربر را درست اعتبارسنجی و escape کنید",
          en: "Validate and escape user input properly",
        },
        {
          fa: "چک‌لیست OWASP را در پروژه اجرا کنید",
          en: "Apply the OWASP checklist to a project",
        },
      ],
      resources: [
        {
          title: { fa: "OWASP Top Ten", en: "OWASP Top 10" },
          url: "https://owasp.org/www-project-top-ten/",
          type: "docs",
        },
        {
          title: { fa: "PortSwigger Web Security Academy (تمرین رایگان)", en: "PortSwigger Web Security Academy (free labs)" },
          url: "https://portswigger.net/web-security",
          type: "interactive",
        },
        {
          title: { fa: "MDN — امنیت", en: "MDN — Web security" },
          url: "https://developer.mozilla.org/en-US/docs/Web/Security",
          type: "docs",
        },
      ],
      visual: "none",
    },
    {
      id: "cryptography",
      title: { fa: "رمزنگاری در عمل", en: "Cryptography in practice" },
      duration: { fa: "۴ تا ۵ هفته", en: "4–5 weeks" },
      summary: {
        fa: "رمزنگاری جعبه سیاه نیست: رمز متقارن یعنی یک کلید برای قفل و باز؛ نامتقارن یعنی قفل عمومی و کلید خصوصی؛ هش یعنی انگشت‌نگاری که برگشت‌ناپذیر است.",
        en: "Cryptography isn't a black box: symmetric means one key locks and opens; asymmetric means a public lock and a private key; hashing means a one-way fingerprint.",
      },
      topics: ["Symmetric", "Asymmetric", "Hashing", "Certificates", "TLS"],
      skills: [
        {
          fa: "تفاوت رمز، هش و انکودینگ را توضیح دهید",
          en: "Explain cipher vs hash vs encoding",
        },
        {
          fa: "پیام‌ها را با ابزارهای استاندارد رمز کنید",
          en: "Encrypt messages with standard tools",
        },
        {
          fa: "بفهمید TLS چطور کانال امن می‌سازد",
          en: "Understand how TLS builds a secure channel",
        },
      ],
      resources: [
        {
          title: { fa: "Cloudflare — TLS چیست", en: "Cloudflare — What is TLS?" },
          url: "https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/",
          type: "docs",
        },
        {
          title: { fa: "OWASP — راهنمای رمزنگاری", en: "OWASP — Cryptographic storage cheat sheet" },
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh امنیت سایبری", en: "roadmap.sh Cyber Security" },
          url: "https://roadmap.sh/cyber-security",
          type: "roadmap",
        },
      ],
      visual: "encryption",
    },
    {
      id: "auth-and-sessions",
      title: { fa: "احراز هویت و مدیریت نشست", en: "Authentication & session management" },
      duration: { fa: "۴ تا ۵ هفته", en: "4–5 weeks" },
      summary: {
        fa: "بیشتر نفوذها از درِ لاگین وارد می‌شوند، نه از دیوار. اینجا هش امن پسورد، توکن‌ها، جلسات و ورود چندمرحله‌ای را درست طراحی می‌کنید.",
        en: "Most breaches walk in through the login door, not the wall. Here you design password hashing, tokens, sessions and multi-factor login correctly.",
      },
      topics: ["JWT", "Sessions", "MFA", "OAuth 2.0", "Password Hashing"],
      skills: [
        {
          fa: "ذخیره‌سازی پسورد امن پیاده کنید",
          en: "Implement secure password storage",
        },
        {
          fa: "توکن‌ها را امن صادر و اعتبارسنجی کنید",
          en: "Issue and validate tokens safely",
        },
        {
          fa: "ورود چندمرحله‌ای اضافه کنید",
          en: "Add multi-factor authentication",
        },
      ],
      resources: [
        {
          title: { fa: "OWASP — هش پسورد", en: "OWASP — Password storage cheat sheet" },
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
          type: "docs",
        },
        {
          title: { fa: "OWASP — احراز هویت", en: "OWASP — Authentication cheat sheet" },
          url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
          type: "docs",
        },
        {
          title: { fa: "MDN — OAuth 2.0", en: "MDN — OAuth 2.0 overview" },
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/OAuth",
          type: "docs",
        },
      ],
      visual: "auth-jwt",
    },
    {
      id: "defense-and-ops",
      title: { fa: "دفاع، رصد و پاسخ", en: "Defense, monitoring & response" },
      duration: { fa: "۵ تا ۶ هفته", en: "5–6 weeks" },
      summary: {
        fa: "امنیت فقط دیوار نیست، دوربین و گشت هم هست: لاگ‌ها را رصد می‌کنید، هشدار می‌گیرید و وقتی حادثه شد، مرتب و بدون ترس پاسخ می‌دهید.",
        en: "Security isn't just walls — it's cameras and patrol: watch logs, alert on anomalies, and when an incident happens, respond calmly and in order.",
      },
      topics: ["Logging", "SIEM", "Incident Response", "Backups", "Hardening"],
      skills: [
        {
          fa: "لاگ‌های مفید طراحی کنید که واقعاً خوانده شوند",
          en: "Design logs that are actually read",
        },
        {
          fa: "پلن پاسخ به حادثه بنویسید",
          en: "Write an incident response plan",
        },
        {
          fa: "سرور را harden کنید",
          en: "Harden a server",
        },
      ],
      resources: [
        {
          title: { fa: "TryHackMe — مسیرهای دفاعی", en: "TryHackMe — defensive learning paths" },
          url: "https://tryhackme.com",
          type: "interactive",
        },
        {
          title: { fa: "OWASP — چک‌لیست DevSecOps", en: "OWASP — DevSecOps guideline" },
          url: "https://owasp.org/www-project-devsecops-guideline/",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh امنیت سایبری", en: "roadmap.sh Cyber Security" },
          url: "https://roadmap.sh/cyber-security",
          type: "roadmap",
        },
      ],
      visual: "ci-cd-pipeline",
    },
  ],
};
