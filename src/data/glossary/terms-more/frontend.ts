/** DATA FILE — Glossary terms (frontend, extended). Merged into terms.ts → /glossary page. */
import type { GlossaryTerm } from "../../schema";

export const moreFrontendTerms: GlossaryTerm[] = [
  {
    term: "HTML",
    fa: "اچ‌تی‌ام‌ال",
    category: "frontend",
    definition: {
      fa: "HTML زبان نشانه‌گذاری است که اسکلت هر صفحه‌ی وب را می‌سازد: با تگ‌ها مشخص می‌کنید کدام بخش عنوان است، کدام پاراگراف، کدام تصویر و کدام دکمه. مرورگر HTML را می‌خواند و از روی آن صفحه را می‌چیند؛ سپس CSS ظاهرش را می‌آراید و جاوااسکریپت رفتارش را می‌دهد.",
      en: "HTML is the markup language that builds the skeleton of every web page: with tags you declare which part is a heading, which is a paragraph, which is an image and which is a button. The browser reads the HTML and assembles the page from it; CSS then dresses it up and JavaScript gives it behavior.",
    },
    analogy: {
      fa: "مثل اسکلت ساختمان: اول ستون‌ها و دیوارها بالا می‌آیند؛ رنگ‌آمیزی (CSS) و سیم‌کشی برق (جاوااسکریپت) بعداً روی همین اسکلت انجام می‌شود.",
      en: "Like a building's frame: the columns and walls go up first; the paint job (CSS) and the electrical wiring (JavaScript) come later, on that same frame.",
    },
    related: ["DOM", "CSS"],
  },
  {
    term: "CSS",
    fa: "سی‌اس‌اس",
    category: "frontend",
    definition: {
      fa: "CSS زبانی است که مشخص می‌کند هر عنصر صفحه چه شکلی باشد: رنگ، فونت، فاصله‌ها، چیدمان و انیمیشن. یک فایل استایل خوب می‌تواند HTML خشک و بی‌رنگ را به ظاهری مرتب و زیبا تبدیل کند — و هم‌زمان ده‌ها صفحه را پوشش دهد.",
      en: "CSS is the language that decides what every element on the page looks like: color, fonts, spacing, layout and animation. One good stylesheet can turn dry, colorless HTML into a tidy, beautiful appearance — and cover dozens of pages at the same time.",
    },
    analogy: {
      fa: "مثل دکوراسیون داخلی: ساختمان (HTML) با همان اسکلت می‌ماند؛ اما رنگ دیوار، پرده و چیدمان مبل، حس خانه را کاملاً عوض می‌کند.",
      en: "Like interior decoration: the building (HTML) keeps its same frame, but the wall color, curtains and furniture arrangement completely change how the home feels.",
    },
    related: ["HTML", "Responsive Design"],
  },
  {
    term: "TypeScript",
    fa: "تایپ‌اسکریپت",
    category: "frontend",
    definition: {
      fa: "TypeScript همان جاوااسکریپت است به‌اضافه‌ی «تایپ»: برای هر متغیر و تابع مشخص می‌کنید چه نوع داده‌ای می‌پذیرد و چه چیزی برمی‌گرداند، و اشتباه‌ها را همان‌جا در ادیتور، قبل از اجرا می‌بینید. در نهایت به همان جاوااسکریپتی کامپایل می‌شود که مرورگر می‌فهمد.",
      en: "TypeScript is JavaScript plus types: for every variable and function you declare what kind of data it accepts and returns, and you see mistakes right in the editor, before the code ever runs. In the end it compiles to the same JavaScript the browser understands.",
    },
    analogy: {
      fa: "مثل فرم بانک با فیلدهای نوع‌دار: نام، شماره‌ی حساب، مبلغ — اگر در جای مبلغ حروف بنویسید، اپراتور همان پشت میز توقف‌تان می‌کند؛ نه اینکه سند خراب‌شده راهی سیستم شود و بعداً دردسر بسازد.",
      en: "Like bank forms with typed fields — name, account number, amount: write letters in the amount field and the clerk stops you right there, instead of a broken document traveling into the system and causing trouble later.",
    },
    related: ["Data Type", "Compiler"],
  },
  {
    term: "Props",
    fa: "پراپ‌ها",
    category: "frontend",
    definition: {
      fa: "Props ورودی‌هایی است که کامپوننتِ والد به فرزند می‌دهد: داده یا تنظیمی که فرزند باید نمایش دهد یا با آن کار کند. پراپ‌ها فقط‌خواندنی‌اند؛ کامپوننت نمی‌تواند پراپِ خودش را عوض کند، فقط والد می‌تواند مقدار تازه‌ای بفرستد و فرزند دوباره رندر شود.",
      en: "Props are the inputs a parent component hands to its child: data or settings the child should display or work with. Props are read-only — a component cannot change its own props; only the parent can send a fresh value, and the child re-renders.",
    },
    analogy: {
      fa: "مثل کارت سفارشی که سرآشپز به خط آشپزخانه می‌دهد: خط فقط همان را می‌پزد و کارت را دستکاری نمی‌کند؛ اگر سفارش عوض شود، سرآشپز کارت جدیدی می‌فرستد.",
      en: "Like the order ticket a head chef hands to the kitchen line: the line cooks exactly what's written and never edits the ticket; if the order changes, the chef sends a new one.",
    },
    related: ["Component", "State"],
  },
  {
    term: "Hooks",
    fa: "هوک‌ها",
    category: "frontend",
    definition: {
      fa: "Hooks توابع آماده‌ی ری‌اکت هستند که به کامپوننتِ تابعی قابلیت اضافه می‌کنند: useState حافظه‌ی وضعیت می‌دهد، useEffect به رخدادهای بیرونی مثل دریافت داده و تایمرها وصل می‌شود. اسمشان از «قلاب» می‌آید، چون کامپوننت را به این قابلیت‌ها قلاب می‌کنید.",
      en: "Hooks are ready-made React functions that give function components extra abilities: useState provides state memory, useEffect connects to outside events like data fetching and timers. The name comes from \"hooking\" — you hook the component into these capabilities.",
    },
    analogy: {
      fa: "مثل پریزهای برق روی دیوار: دیوار خودش خبری از یخچال یا رادیو ندارد، ولی هر وسیله‌ای را که به پریز بزنید، همان لحظه جان می‌گیرد — بدون آنکه سیم‌کشی خانه را باز کنید.",
      en: "Like power sockets in a wall: the wall itself knows nothing about fridges or radios, but plug any appliance in and it comes alive — no need to reopen the house's wiring.",
    },
    related: ["State", "Component"],
  },
  {
    term: "Hydration",
    fa: "هیدریشن",
    category: "frontend",
    definition: {
      fa: "هیدریشن یعنی زنده‌کردن HTML آماده‌ای که سرور فرستاده: مرورگر اول صفحه‌ی خشکِ بی‌تعامل را نشان می‌دهد، بعد جاوااسکریپتِ ری‌اکت می‌رسد، همان ساختار را از نو می‌سازد و گوش و دست (کلیک و تایپ) به آن می‌چسباند. تا هیدریشن تمام نشود، صفحه دیده می‌شود ولی دکمه‌هایش جواب نمی‌دهند.",
      en: "Hydration means bringing to life the ready-made HTML the server sent: the browser first shows a dry, non-interactive page, then React's JavaScript arrives, rebuilds the same structure in memory, and attaches ears and hands to it (clicks and typing). Until hydration finishes, the page is visible but its buttons don't respond.",
    },
    analogy: {
      fa: "مثل غذای خشک‌شده‌ی کوهنوردی: در بسته کامل و قابل‌دیدن است، ولی تا آب جوش داخلش نریزید و صبر نکنید، خوردنی نیست — HTML سرور همان بسته است و جاوااسکریپت، آب جوش.",
      en: "Like freeze-dried backpacking food: it looks complete in the packet, but it's not edible until you pour in boiling water and wait — the server's HTML is the packet, and JavaScript is the boiling water.",
    },
    related: ["SSR", "Virtual DOM"],
  },
  {
    term: "SPA",
    fa: "اپلیکیشن تک‌صفحه‌ای",
    category: "frontend",
    definition: {
      fa: "SPA یعنی اپلیکیشن تک‌صفحه‌ای: مرورگر فقط یک HTML از سرور می‌گیرد و بقیه‌ی «صفحه‌ها» همان‌جا، با جاوااسکریپت، جابه‌جا می‌شوند — بدون رفرش کامل. حس اپ دسکتاپ می‌دهد، ولی بار اول سنگین‌تر است چون همه‌ی کد یک‌جا می‌آید.",
      en: "A SPA (single-page application) means the browser fetches only one HTML from the server, and every other \"page\" is swapped in place by JavaScript — no full reload. It feels like a desktop app, though the first load is heavier because all the code arrives at once.",
    },
    analogy: {
      fa: "مثل تئاتری که پرده‌اش نمی‌افتد: نورها روشن می‌ماند و فقط دکور صحنه عوض می‌شود؛ سایت چندصفحه‌ای برای هر صفحه پرده می‌کشد و سالن را تاریک و روشن می‌کند (رفرش).",
      en: "Like a theater whose curtain never falls: the lights stay on and only the stage set changes; a multi-page site drops the curtain and darkens the hall for every page (a reload).",
    },
    related: ["SSR", "Hydration"],
  },
  {
    term: "Accessibility",
    fa: "دسترس‌پذیری",
    category: "frontend",
    definition: {
      fa: "دسترس‌پذیری یعنی ساختن سایتی که همه بتوانند استفاده کنند: کاربر نابینا با صفحه‌خوان، کسی که فقط کیبورد دارد، یا کسی که رنگ‌ها را تشخیص نمی‌دهد. در عمل یعنی HTML معنادار، کنتراست کافی، لیبل برای فیلدهای فرم و همه‌ی کارها که با کیبورد هم شدنی باشند.",
      en: "Accessibility means building a site everyone can use: a blind user with a screen reader, someone limited to the keyboard, or a person who can't distinguish colors. In practice it means meaningful HTML, enough contrast, labels on form fields, and every interaction working by keyboard too.",
    },
    analogy: {
      fa: "مثل ورودی ساختمان با پله و سطح شیب‌دار: سطح شیب برای ویلچر و کالسکه و چمدان است، ولی در نهایت برای همه راه راحت‌تری می‌شود — و قانون ساختمان هم همان را الزامی می‌کند.",
      en: "Like a building entrance with stairs and a ramp: the ramp is there for wheelchairs, strollers and luggage, but it ends up an easier path for everyone — and building codes require it.",
    },
    related: ["HTML", "Responsive Design"],
  },
  {
    term: "Core Web Vitals",
    fa: "شاخص‌های حیاتی وب",
    category: "frontend",
    definition: {
      fa: "Core Web Vitals سه شاخص رسمی گوگل برای سلامت تجربه‌ی کاربر است: LCP می‌گوید محتوای اصلی چقدر زود دیده می‌شود، INP می‌گوید سایت چقدر سریع به کلیک جواب می‌دهد و CLS می‌گوید چیدمان هنگام لود چقدر جابه‌جا می‌شود. این اعداد روی رتبه‌ی سئو هم اثر می‌گذارند.",
      en: "Core Web Vitals are Google's three official metrics for user-experience health: LCP says how soon the main content appears, INP says how fast the site responds to clicks, and CLS says how much the layout jumps while loading. These numbers also influence your SEO ranking.",
    },
    analogy: {
      fa: "مثل معیارهای سرویس در رستوران: سرعت آوردن غذا (LCP)، سرعت پاسخ گارسون به دستِ بلندشده (INP) و اینکه ظروف موقع چیدن میز از جایشان نلغزند (CLS). آشپز خوب نه‌تنها طعم غذا، این سه را هم زیر نظر دارد.",
      en: "Like restaurant service metrics: how fast the food arrives (LCP), how quickly the waiter answers your raised hand (INP), and whether the dishes slide around while the table is set (CLS). A good restaurant watches these three, not just the flavor.",
    },
    related: ["SSR", "Latency"],
  },
];
