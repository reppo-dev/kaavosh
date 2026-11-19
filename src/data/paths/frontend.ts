import type { LearningPath } from "../schema";

/**
 * DATA FILE — Learning Path. Consumed by: /paths grid page,
 * /paths/[slug] roadmap page, landing page paths preview.
 */
export const frontendPath: LearningPath = {
  slug: "frontend",
  icon: "layout-template",
  accent: "cyan",
  title: { fa: "فرانت‌اند", en: "Frontend" },
  tagline: {
    fa: "چیزی که کاربر می‌بیند و لمس می‌کند می‌سازید",
    en: "Build what users see and touch",
  },
  description: {
    fa: "فرانت‌اند یعنی ساختن بخشی از سایت یا اپ که در مرورگر نمایش داده می‌شود: دکمه‌ها، فرم‌ها، انیمیشن‌ها و هر چیزی که کاربر با آن کار می‌کند. در این مسیر از HTML و CSS شروع می‌کنید، با جاوااسکریپت صفحه را زنده می‌کنید و در نهایت با React و Next.js اپ‌های مدرن و سریع می‌سازید.",
    en: "Frontend means building the part of a site or app that renders in the browser: buttons, forms, animations and everything a user interacts with. This path starts at HTML and CSS, brings pages alive with JavaScript, and ends with building modern, fast apps using React and Next.js.",
  },
  level: "beginner",
  totalDuration: { fa: "حدود ۶ تا ۹ ماه", en: "About 6–9 months" },
  roles: [
    { fa: "توسعه‌دهنده فرانت‌اند جونیور", en: "Junior Frontend Developer" },
    { fa: "توسعه‌دهنده ری‌اکت", en: "React Developer" },
    { fa: "توسعه‌دهنده فرانت‌اند Next.js", en: "Next.js Developer" },
    { fa: "مهندس رابط کاربری", en: "UI Engineer" },
  ],
  stages: [
    {
      id: "html-css-foundations",
      title: { fa: "پایه‌های HTML و CSS", en: "HTML & CSS foundations" },
      duration: { fa: "۴ تا ۶ هفته", en: "4–6 weeks" },
      summary: {
        fa: "HTML اسکلت صفحه است و CSS پوست و ظاهرش. اینجا یاد می‌گیرید ساختار صفحه را توصیف کنید و بعد آن را زیبا و مرتب کنید — مثل ساختن دیوار و بعد رنگ‌آمیزی‌اش.",
        en: "HTML is a page's skeleton; CSS is its skin and style. You learn to describe a page's structure, then make it beautiful and tidy — like building a wall and then painting it.",
      },
      topics: ["HTML", "CSS", "Flexbox", "Grid", "Responsive", "Accessibility"],
      skills: [
        {
          fa: "یک صفحه کامل از روی طرح بسازید، بدون کمک",
          en: "Build a full page from a design, without help",
        },
        {
          fa: "صفحه‌ای بسازید که روی موبایل و لپ‌تاپ هر دو خوب دیده شود",
          en: "Make one layout look right on both phone and laptop",
        },
        {
          fa: "برچسب‌های معنایی بزنید که کدتان برای همه خوانا باشد",
          en: "Use semantic tags so your markup is readable and accessible",
        },
      ],
      resources: [
        {
          title: { fa: "آموزش وب MDN", en: "MDN Learn Web Development" },
          url: "https://developer.mozilla.org/en-US/docs/Learn",
          type: "docs",
        },
        {
          title: { fa: "مسیر فرانت‌اند در roadmap.sh", en: "roadmap.sh Frontend" },
          url: "https://roadmap.sh/frontend",
          type: "roadmap",
        },
        {
          title: { fa: "دوره وب رایگان freeCodeCamp", en: "freeCodeCamp Responsive Web Design" },
          url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
          type: "interactive",
        },
      ],
      visual: "dom-render",
    },
    {
      id: "javascript-and-dom",
      title: { fa: "جاوااسکریپت و دستکاری DOM", en: "JavaScript & the DOM" },
      duration: { fa: "۶ تا ۸ هفته", en: "6–8 weeks" },
      summary: {
        fa: "جاوااسکریپت مغز صفحه است: به کلیک‌ها جواب می‌دهد، داده می‌گیرد و محتوا عوض می‌کند. اینجا مهم‌ترین ایده‌های زبان — متغیر، تابع، آرایه و حلقه رویداد — را می‌فهمید.",
        en: "JavaScript is the page's brain: it answers clicks, fetches data and changes content. Here you grasp the language's core ideas — variables, functions, arrays and the event loop.",
      },
      topics: ["JavaScript", "DOM", "Events", "Fetch API", "Async", "ES6"],
      skills: [
        {
          fa: "به کلیک و تایپ کاربر واکنش نشان دهید",
          en: "React to user clicks and typing",
        },
        {
          fa: "داده را از یک API بگیرید و نمایش دهید",
          en: "Fetch data from an API and render it",
        },
        {
          fa: "تفاوت کد هم‌زمان و ناهم‌زمان را توضیح دهید",
          en: "Explain synchronous vs asynchronous code",
        },
      ],
      resources: [
        {
          title: { fa: "جاوااسکریپت مدرن (آموزش‌نامه معتبر)", en: "javascript.info — The Modern JavaScript Tutorial" },
          url: "https://javascript.info",
          type: "book",
        },
        {
          title: { fa: "MDN جاوااسکریپت", en: "MDN JavaScript Guide" },
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          type: "docs",
        },
        {
          title: { fa: "پروژه The Odin Project", en: "The Odin Project — Foundations" },
          url: "https://www.theodinproject.com/paths/foundations",
          type: "course",
        },
      ],
      visual: "event-loop",
    },
    {
      id: "tooling-typescript-git",
      title: { fa: "ابزارهای حرفه‌ای: TypeScript و Git", en: "Pro tooling: TypeScript & Git" },
      duration: { fa: "۳ تا ۴ هفته", en: "3–4 weeks" },
      summary: {
        fa: "قبل از فریم‌ورک، ابزارها را یاد بگیرید: TypeScript به کدتان نوع می‌دهد تا باگ‌ها قبل از اجرا پیدا شوند؛ Git تاریخچه کد را نگه می‌دارد تا تیم بتواند با خیال راحت هم‌زمان کار کند.",
        en: "Before frameworks, learn the tools: TypeScript adds types so bugs surface before the code even runs; Git keeps your code's history so a team can safely work together.",
      },
      topics: ["TypeScript", "Git", "GitHub", "npm", "Vite"],
      skills: [
        {
          fa: "برای توابع و آبجکت‌ها نوع تعریف کنید",
          en: "Type your functions and objects",
        },
        {
          fa: "با شاخه‌ها کار کنید و Pull Request بدهید",
          en: "Branch, commit and open a pull request",
        },
        {
          fa: "وابستگی‌های پروژه را با npm مدیریت کنید",
          en: "Manage project dependencies with npm",
        },
      ],
      resources: [
        {
          title: { fa: "مستندات رسمی TypeScript برای مبتدی", en: "TypeScript for Beginners (official docs)" },
          url: "https://www.typescriptlang.org/docs/handbook/intro.html",
          type: "docs",
        },
        {
          title: { fa: "کتاب رسمی Git", en: "Pro Git book" },
          url: "https://git-scm.com/book/en/v2",
          type: "book",
        },
        {
          title: { fa: "دوره Git در The Odin Project", en: "The Odin Project — Git Basics" },
          url: "https://www.theodinproject.com/lessons/foundations-git-basics",
          type: "course",
        },
      ],
      visual: "git-flow",
    },
    {
      id: "react-components",
      title: { fa: "ری‌اکت و تفکر کامپوننتی", en: "React & component thinking" },
      duration: { fa: "۶ تا ۸ هفته", en: "6–8 weeks" },
      summary: {
        fa: "ری‌اکت یادتان می‌دهد صفحه را مثل لگو ببینید: از قطعه‌های کوچک و قابل استفاده مجدد. state یعنی حافظه‌ی لحظه‌ای هر قطعه؛ وقتی state عوض می‌شود، ری‌اکت فقط همان قسمت را دوباره می‌کشد.",
        en: "React teaches you to see pages like Lego: small reusable pieces. State is each piece's momentary memory — change it and React redraws only that piece.",
      },
      topics: ["React", "Components", "State", "Hooks", "Props", "React 19"],
      skills: [
        {
          fa: "رابط کاربری را به کامپوننت‌های کوچک بشکنید",
          en: "Break a UI into small components",
        },
        {
          fa: "با useState و useEffect کار کنید",
          en: "Work with useState and useEffect",
        },
        {
          fa: "داده را بین کامپوننت‌ها با props جابه‌جا کنید",
          en: "Pass data between components with props",
        },
      ],
      resources: [
        {
          title: { fa: "آموزش رسمی ری‌اکت", en: "react.dev — Learn React" },
          url: "https://react.dev/learn",
          type: "docs",
        },
        {
          title: { fa: "Full Stack Open (بخش ری‌اکت)", en: "Full Stack Open — React" },
          url: "https://fullstackopen.com/en",
          type: "course",
        },
        {
          title: { fa: "بازی‌های تمرینی React Inbox در The Odin Project", en: "The Odin Project — React Path" },
          url: "https://www.theodinproject.com/paths/full-stack-javascript",
          type: "course",
        },
      ],
      visual: "react-render",
    },
    {
      id: "nextjs-production",
      title: { fa: "Next.js و ساختن برای پروداکشن", en: "Next.js & building for production" },
      duration: { fa: "۶ تا ۸ هفته", en: "6–8 weeks" },
      summary: {
        fa: "Next.js چارچوبی روی ری‌اکت است که سرعت، سئو و رندر سمت سرور (RSC) را حل می‌کند. اینجا اولین اپ واقعی‌تان را می‌سازید: مسیرها، داده، فرم‌ها و استقرار.",
        en: "Next.js is React's production framework: it solves speed, SEO and server rendering (RSC). Here you build your first real app: routes, data, forms and deployment.",
      },
      topics: ["Next.js", "RSC", "Routing", "SEO", "Core Web Vitals", "Deployment"],
      skills: [
        {
          fa: "اپی با چند صفحه و مسیر داینامیک بسازید",
          en: "Build an app with multiple pages and dynamic routes",
        },
        {
          fa: "تفاوت کامپوننت سرور و کلاینت را بدانید",
          en: "Know when to use server vs client components",
        },
        {
          fa: "اپ را روی اینترنت مستقر کنید",
          en: "Deploy the app to the internet",
        },
      ],
      resources: [
        {
          title: { fa: "دوره رسمی Next.js", en: "nextjs.org — Learn (App Router course)" },
          url: "https://nextjs.org/learn",
          type: "course",
        },
        {
          title: { fa: "مستندات Next.js", en: "Next.js Documentation" },
          url: "https://nextjs.org/docs",
          type: "docs",
        },
        {
          title: { fa: "وب.دِو — عملکرد و Core Web Vitals", en: "web.dev — Performance & Core Web Vitals" },
          url: "https://web.dev/performance",
          type: "docs",
        },
      ],
      visual: "http-request",
    },
  ],
};
