import type { LearningPath } from "../schema";

/**
 * DATA FILE — Learning Path. Consumed by: /paths grid page,
 * /paths/[slug] roadmap page, landing page paths preview.
 */
export const backendPath: LearningPath = {
  slug: "backend",
  icon: "server",
  accent: "indigo",
  title: { fa: "بک‌اند", en: "Backend" },
  tagline: {
    fa: "موتور پشت صحنه: داده، منطق و امنیت",
    en: "The engine behind the scenes: data, logic and security",
  },
  description: {
    fa: "بک‌اند همه‌چیزی است که کاربر نمی‌بیند: سرورها، پایگاه داده، احراز هویت و پرداخت. در این مسیر با Node.js برنامه‌نویسی سمت سرور را شروع می‌کنید، با SQL داده‌ها را مدیریت می‌کنید و در نهایت APIهایی می‌سازید که میلیون‌ها درخواست را امن پاسخ می‌دهند.",
    en: "Backend is everything the user never sees: servers, databases, authentication and payments. This path starts server-side programming with Node.js, manages data with SQL, and ends with APIs that answer millions of requests securely.",
  },
  level: "beginner",
  totalDuration: { fa: "حدود ۶ تا ۱۰ ماه", en: "About 6–10 months" },
  roles: [
    { fa: "توسعه‌دهنده بک‌اند جونیور", en: "Junior Backend Developer" },
    { fa: "توسعه‌دهنده Node.js", en: "Node.js Developer" },
    { fa: "مهندس API", en: "API Engineer" },
    { fa: "توسعه‌دهنده فول‌استک", en: "Full-stack Developer" },
  ],
  stages: [
    {
      id: "programming-foundations",
      title: { fa: "پایه‌های برنامه‌نویسی با Node.js", en: "Programming foundations with Node.js" },
      duration: { fa: "۵ تا ۷ هفته", en: "5–7 weeks" },
      summary: {
        fa: "Node.js همان جاوااسکریپت است، ولی بیرون از مرورگر — روی سرور. اینجا منطق برنامه‌نویسی را تمرین می‌کنید: تابع، شرط، حلقه، خطاها و کار با فایل.",
        en: "Node.js is JavaScript outside the browser — on a server. Here you drill programming logic: functions, conditionals, loops, errors and working with files.",
      },
      topics: ["Node.js", "JavaScript", "Modules", "Errors", "Async/Await"],
      skills: [
        {
          fa: "برنامه‌ای بنویسید که فایل بخواند و بنویسد",
          en: "Write a program that reads and writes files",
        },
        {
          fa: "با async/await کار ناهم‌زمان را تمیز انجام دهید",
          en: "Handle async work cleanly with async/await",
        },
        {
          fa: "پروژه را با ماژول‌ها مرتب کنید",
          en: "Organize a project with modules",
        },
      ],
      resources: [
        {
          title: { fa: "مستندات رسمی Node.js — مقدمات", en: "Node.js official docs — Introduction" },
          url: "https://nodejs.org/en/learn",
          type: "docs",
        },
        {
          title: { fa: "آموزش‌نامه جاوااسکریپت مدرن", en: "javascript.info — The Modern JavaScript Tutorial" },
          url: "https://javascript.info",
          type: "book",
        },
        {
          title: { fa: "CS50 مقدمات علوم کامپیوتر", en: "CS50x — Introduction to Computer Science" },
          url: "https://cs50.harvard.edu/x/",
          type: "course",
        },
      ],
      visual: "event-loop",
    },
    {
      id: "http-and-apis",
      title: { fa: "وب چطور کار می‌کند: HTTP و API", en: "How the web works: HTTP & APIs" },
      duration: { fa: "۳ تا ۴ هفته", en: "3–4 weeks" },
      summary: {
        fa: "کل بک‌اند روی یک گفت‌وگو سوار است: کلاینت درخواست می‌فرستد، سرور جواب می‌دهد. اینجا متدهای HTTP، کدهای وضعیت، هدرها و طراحی یک API تمیز را یاد می‌گیرید.",
        en: "All of backend rides on one conversation: the client sends a request, the server answers. Here you learn HTTP methods, status codes, headers and designing a clean API.",
      },
      topics: ["HTTP", "REST", "JSON", "Express", "Status Codes"],
      skills: [
        {
          fa: "یک API ساده با Express بسازید",
          en: "Build a small API with Express",
        },
        {
          fa: "کد وضعیت درست را برای هر حالت انتخاب کنید",
          en: "Pick the right status code for each situation",
        },
        {
          fa: "با Postman یا curl درخواست بزنید و تست کنید",
          en: "Test endpoints with Postman or curl",
        },
      ],
      resources: [
        {
          title: { fa: "MDN — HTTP کلیات", en: "MDN — An overview of HTTP" },
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh بک‌اند", en: "roadmap.sh Backend" },
          url: "https://roadmap.sh/backend",
          type: "roadmap",
        },
        {
          title: { fa: "Express — راهنمای شروع", en: "Express — Getting started guide" },
          url: "https://expressjs.com/en/starter/installing.html",
          type: "docs",
        },
      ],
      visual: "http-request",
    },
    {
      id: "databases-sql",
      title: { fa: "پایگاه داده و SQL", en: "Databases & SQL" },
      duration: { fa: "۵ تا ۶ هفته", en: "5–6 weeks" },
      summary: {
        fa: "پایگاه داده حافظه‌ی بلندمدت برنامه است. SQL زبان پرسیدن از آن است: «همه سفارش‌های این کاربر را بده». اینجا طراحی جدول، ایندکس و join را می‌فهمید.",
        en: "A database is the program's long-term memory. SQL is the language for asking it things: 'give me all of this user's orders'. Here you learn table design, indexes and joins.",
      },
      topics: ["SQL", "PostgreSQL", "Schema Design", "Indexes", "Joins", "ORM"],
      skills: [
        {
          fa: "جداول را با روابط درست طراحی کنید",
          en: "Design tables with correct relationships",
        },
        {
          fa: "کوئری‌های join بزنید و سرعتشان را بسنجید",
          en: "Write joins and measure their speed",
        },
        {
          fa: "بدانید کجا ایندکس لازم است",
          en: "Know when an index is needed",
        },
      ],
      resources: [
        {
          title: { fa: "آموزش PostgreSQL رسمی", en: "PostgreSQL official tutorial" },
          url: "https://www.postgresql.org/docs/current/tutorial.html",
          type: "docs",
        },
        {
          title: { fa: "SQLBolt — تمرین تعاملی SQL", en: "SQLBolt — interactive SQL lessons" },
          url: "https://sqlbolt.com",
          type: "interactive",
        },
        {
          title: { fa: "Full Stack Open — پایگاه داده", en: "Full Stack Open — Databases" },
          url: "https://fullstackopen.com/en/part3",
          type: "course",
        },
      ],
      visual: "sql-join",
    },
    {
      id: "auth-security",
      title: { fa: "احراز هویت، مجوز و امنیت", en: "Auth, authorization & security" },
      duration: { fa: "۴ تا ۵ هفته", en: "4–5 weeks" },
      summary: {
        fa: "احراز هویت یعنی «تو کی هستی؟» و مجوز یعنی «اجازه داری چه‌کار کنی؟». اینجا با رمزهای عبور هش‌شده، توکن‌ها و بزرگ‌ترین حفره‌های امنیتی وب آشنا می‌شوید.",
        en: "Authentication asks 'who are you?'; authorization asks 'what are you allowed to do?'. Here you meet hashed passwords, tokens and the biggest holes in web security.",
      },
      topics: ["JWT", "Sessions", "OAuth", "Hashing", "OWASP", "Rate Limiting"],
      skills: [
        {
          fa: "سیستم لاگین امن با توکن بسازید",
          en: "Build a secure login with tokens",
        },
        {
          fa: "پسورد را درست هش کنید، هرگز ذخیره نکنید",
          en: "Hash passwords properly, never store them raw",
        },
        {
          fa: "سه حفره OWASP را در کد پیدا و ببندید",
          en: "Find and close the top OWASP holes in your code",
        },
      ],
      resources: [
        {
          title: { fa: "OWASP Top Ten", en: "OWASP Top 10" },
          url: "https://owasp.org/www-project-top-ten/",
          type: "docs",
        },
        {
          title: { fa: "MDN — امنیت HTTP", en: "MDN — HTTP security" },
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh — امنیت", en: "roadmap.sh — Security principles" },
          url: "https://roadmap.sh/backend",
          type: "roadmap",
        },
      ],
      visual: "auth-jwt",
    },
    {
      id: "scale-and-deploy",
      title: { fa: "مقیاس، کش و استقرار", en: "Scaling, caching & deployment" },
      duration: { fa: "۵ تا ۶ هفته", en: "5–6 weeks" },
      summary: {
        fa: "وقتی کاربرها زیاد می‌شوند، سرور تنها جوابگو نیست: کش جواب‌های پرتکرار را نزدیک نگه می‌دارد، صف کارهای سنگین را به بعد می‌سپارد و کانتینرها اپ را هر جا یکسان اجرا می‌کنند.",
        en: "When users grow, one server isn't enough: caching keeps frequent answers nearby, queues postpone heavy work, and containers run the app identically anywhere.",
      },
      topics: ["Redis", "Queues", "Docker", "Nginx", "CI/CD", "Observability"],
      skills: [
        {
          fa: "کش Redis را با استراتژی بی‌اعتبارسازی بچینید",
          en: "Set up Redis caching with an invalidation strategy",
        },
        {
          fa: "اپ را با داکر پکیج کنید و اجرا کنید",
          en: "Package and run the app with Docker",
        },
        {
          fa: "لاگ و متریک را تنظیم کنید تا بدانید چی خراب شده",
          en: "Set up logs and metrics so you know what broke",
        },
      ],
      resources: [
        {
          title: { fa: "داکر — شروع به کار", en: "Docker — Get started" },
          url: "https://docs.docker.com/get-started/",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh — دواپس", en: "roadmap.sh — DevOps" },
          url: "https://roadmap.sh/devops",
          type: "roadmap",
        },
        {
          title: { fa: "Full Stack Open — استقرار و کانتینر", en: "Full Stack Open — Deployment & containers" },
          url: "https://fullstackopen.com/en/part11",
          type: "course",
        },
      ],
      visual: "docker-containers",
    },
  ],
};
