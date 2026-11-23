import type { GlossaryTerm } from "../../schema";

/** Frontend glossary expansion — Shadow DOM, ARIA, Micro-Frontends, Optimistic UI, Server Components & WebAssembly. Consumed by: src/data/glossary/terms.ts. */
export const moreFrontendTerms4: GlossaryTerm[] = [
  {
    term: "Shadow DOM",
    fa: "درخت Shadow DOM",
    category: "frontend",
    definition: {
      fa: "استاندارد بومی مرورگر که اجازه می‌دهد یک زیردرخت DOM و استایل‌های CSS ایزوله به یک المان وصل شوند تا استایل‌های بیرون و داخل کامپوننت با هم تداخل نکنند؛ پایهٔ اصلی Web Componentهاست.",
      en: "A native browser standard attaching an encapsulated DOM and CSS subtree to an element so external and internal styles never leak into each other — the backbone of Web Components.",
    },
    analogy: {
      fa: "مثل اتاق آکوستیک داخل یک سالن: هرچه در اتاق رخ دهد بیرون نمی‌رود و سر و صدای سالن هم واردش نمی‌شود.",
      en: "Like a soundproof booth inside a hall: styles inside stay contained and global styles don't bleed in.",
    },
    related: ["DOM", "Web Components", "Virtual DOM", "CSS"],
  },
  {
    term: "ARIA",
    fa: "صفت‌های دسترس‌پذیری ARIA",
    category: "frontend",
    definition: {
      fa: "Accessible Rich Internet Applications — مجموعه‌ای از صفت‌های HTML (مانند `role`، `aria-label`، `aria-expanded` و `aria-live`) که معنا و وضعیت المان‌های تعاملی سفارشی را برای صفحه‌خوان‌ها توضیح می‌دهند.",
      en: "Accessible Rich Internet Applications — HTML attributes (role, aria-label, aria-expanded, aria-live) that convey semantics and live state of custom widgets to screen readers.",
    },
    analogy: {
      fa: "مثل تابلوهای بریل کنار دکمه‌های آسانسور تا کاربران نابینا دقیقاً بدانند هر کنترل چه نقشی دارد و در چه وضعیتی است.",
      en: "Like Braille labels beside elevator buttons, describing each control's role and current state to assistive tech.",
    },
    related: ["Accessibility", "Semantic HTML", "DOM"],
  },
  {
    term: "Optimistic UI",
    fa: "رابط کاربری خوش‌بینانه (Optimistic UI)",
    category: "frontend",
    definition: {
      fa: "الگویی که نتیجهٔ اقدام کاربر (مثل لایک زدن یا افزودن نظر) را بلافاصله در رابط کاربری نشان می‌دهد پیش از آنکه پاسخ سرور برسد، و فقط در صورت خطای سرور تغییر را برمی‌گرداند.",
      en: "A UX pattern that immediately renders the expected outcome of a user action (like toggling a heart) before the server responds, rolling back cleanly only if the request fails.",
    },
    analogy: {
      fa: "مثل روشن شدن فوری چراغ دکمهٔ آسانسور به‌محض فشار دادن، بدون اینکه منتظر رسیدن کابین بمانید.",
      en: "Like an elevator button lighting up the instant you press it rather than waiting for the car to confirm.",
    },
    related: ["State", "Latency", "React 19 Actions"],
  },
  {
    term: "Server Components",
    fa: "کامپوننت‌های سرور (RSC)",
    category: "frontend",
    definition: {
      fa: "کامپوننت‌هایی در React و Next.js که منحصراً روی سرور اجرا می‌شوند، مستقیم به دیتابیس یا فایل‌ها دسترسی دارند و هیچ کد جاوااسکریپتی از خودشان به باندل مرورگر ارسال نمی‌کنند.",
      en: "React components that execute exclusively on the server, can read databases or secrets directly, and ship zero component JavaScript to the browser bundle.",
    },
    analogy: {
      fa: "مثل پختن غذا در آشپزخانه و آوردن بشقاب آماده سر میز، به‌جای آوردن اجاق گاز و مواد اولیه روی میز مشتری.",
      en: "Like plating a finished dish in the kitchen instead of shipping the stove and raw ingredients to the table.",
    },
    related: ["SSR", "Hydration", "Suspense", "React 19 Actions"],
  },
  {
    term: "Micro-Frontends",
    fa: "میکروفرانت‌اند (Micro-Frontends)",
    category: "frontend",
    definition: {
      fa: "معماری‌ای که یک اپلیکیشن وب بزرگ را به بخش‌های مستقلِ قابل توسعه و استقرار جداگانه توسط تیم‌های مختلف تقسیم می‌کند — معادل میکروسرویس‌ها در لایهٔ رابط کاربری.",
      en: "An architecture decomposing a large web frontend into independently developed, tested, and deployed vertical slices owned by separate teams — the UI counterpart to microservices.",
    },
    analogy: {
      fa: "مثل یک مرکز خرید که هر مغازه دکور و فروشندهٔ مستقل خودش را دارد اما از دید مشتری یک مجموعهٔ یکپارچه است.",
      en: "Like a shopping mall where each shop runs independently while shoppers experience one cohesive building.",
    },
    related: ["Microservices", "Module Bundler", "SPA"],
  },
  {
    term: "WebAssembly",
    fa: "وب‌اسمبلی (WebAssembly / Wasm)",
    category: "frontend",
    definition: {
      fa: "قالب باینری سطح پایین برای مرورگر که به زبان‌هایی مثل Rust، C++ و Go اجازه می‌دهد با سرعت نزدیک به کد بومی کنار جاوااسکریپت اجرا شوند (مناسب ویرایش ویدیو، بازی، CAD و پردازش سنگین).",
      en: "A portable binary instruction format for browsers enabling languages like Rust, C++, and Go to run alongside JavaScript at near-native speed for heavy workloads like media editing or games.",
    },
    analogy: {
      fa: "مثل نصب یک موتور توربوی تخصصی در کنار موتور اصلی خودرو برای زمانی که به حداکثر قدرت محاسباتی نیاز است.",
      en: "Like bolting a high-efficiency turbo engine beside JavaScript whenever compute-heavy tasks demand raw speed.",
    },
    related: ["Compiler", "Web Worker", "Core Web Vitals"],
  },
  {
    term: "CSS Custom Properties",
    fa: "متغیرهای CSS (Custom Properties)",
    category: "frontend",
    definition: {
      fa: "متغیرهای بومی CSS (مانند `--accent: #6366f1`) که از طریق `var(--accent)` خوانده می‌شوند، از آبشار و ارث‌بری DOM پیروی می‌کنند و می‌توان آن‌ها را در زمان اجرا (مثلاً برای تغییر تم روشن/تاریک) تغییر داد.",
      en: "Native CSS variables (e.g., --accent: #6366f1) read with var(), participating in the cascade and modifiable dynamically at runtime for theming and responsive spacing.",
    },
    analogy: {
      fa: "مثل تعریف «رنگ اصلی برند» در یک کلید مرکزی: با عوض کردن یک مقدار، کل صفحه فوری تغییر رنگ می‌دهد.",
      en: "Like a master color swatch: flip one variable at the root and an entire theme updates instantaneously.",
    },
    related: ["CSS", "CSS Specificity", "Responsive Design"],
  },
  {
    term: "State Machine",
    fa: "ماشین حالت (Finite State Machine)",
    category: "frontend",
    definition: {
      fa: "مدل ریاضی و الگوی کدنویسی که وضعیت‌های مجاز یک کامپوننت (مثلاً `idle`، `loading`، `success`، `error`) و گذارهای معتبر بین آن‌ها را صریح تعریف می‌کند تا وضعیت‌های غیرممکن (مثل هم‌زمان loading و error) هرگز رخ ندهند.",
      en: "A modeling pattern defining explicit finite states (idle, loading, success, error) and valid transitions between them, eliminating impossible state combinations caused by scattered booleans.",
    },
    analogy: {
      fa: "مثل چراغ راهنمایی: فقط می‌تواند سبز، زرد یا قرمز باشد و ترتیب تغییرش دقیقاً مشخص است — هرگز هم‌زمان سبز و قرمز نمی‌شود.",
      en: "Like a traffic light: only green, yellow, or red in strict transitions — never green and red simultaneously.",
    },
    related: ["State", "Hooks", "Design Pattern"],
  },
];
