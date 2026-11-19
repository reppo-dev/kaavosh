import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (mobile, part 2). Merged into terms.ts → /glossary page. */
export const moreMobileTerms2: GlossaryTerm[] = [
  {
    term: "React Native",
    fa: "ری‌اکت نیتیو",
    category: "mobile",
    definition: {
      fa: "React Native با همان React و JS، اپ موبایل بومی می‌سازد: کامپوننت‌های JS به ویجت‌های واقعی پلتفرم ترجمه می‌شوند (نه WebView). برجی که یاد می‌گیری برای iOS و Android یکسان است؛ برای دسترسی به قابلیت‌های بومی، ماژول‌های native یا اکوسیستم Expo به کار می‌رود.",
      en: "React Native builds native mobile apps with the same React and JS: your components translate to real platform widgets (not WebView). The React you know targets both iOS and Android; native capabilities come via native modules or the Expo ecosystem.",
    },
    analogy: {
      fa: "مثل معمار واحد برای دو شهر با آیین‌نامه‌های متفاوت: نقشه (کد JS) یکی است و پیمانکار هر شهر (پلتفرم) با مصالح بومی همان نقشه را می‌سازد.",
      en: "Like one architect serving two cities with different building codes: the blueprint (JS) is identical; each city's contractor (platform) builds it with local materials.",
    },
    related: ["Cross-Platform", "Native App", "Flutter"],
  },
  {
    term: "Flutter",
    fa: "فلاتر",
    category: "mobile",
    definition: {
      fa: "Flutter چارچوب چندسکویی گوگل با زبان Dart است: به‌جای ویجت‌های بومی، خودش با موتور Skia (و Impeller) هر پیکسل را می‌کشد — پس ظاهر در iOS و Android دقیقاً یکسان است. کامپایل AOT به ماشین‌کد، اجرای روان ۶۰/۱۲۰fps و hot reload سریع از نقاط قوتش است.",
      en: "Flutter is Google's cross-platform framework using Dart: instead of native widgets it paints every pixel itself via the Skia (now Impeller) engine — so iOS and Android look pixel-identical. AOT compilation to machine code, smooth 60/120fps rendering and fast hot reload are its hallmarks.",
    },
    analogy: {
      fa: "مثل نقاشی که هر جا می‌رود قلم و رنگ خودش را می‌برد: در هر گالری (پلتفرم) اثر دقیقاً یکسان بیرون می‌آید، برخلاف سفارش از هنرمند محلی هر شهر.",
      en: "Like a painter who brings their own brushes and paints everywhere: the artwork comes out identical in every gallery (platform), unlike commissioning each city's local artist.",
    },
    related: ["React Native", "Cross-Platform", "Hot Reload"],
  },
  {
    term: "Stateless vs Stateful Widget",
    fa: "ویجت بی‌حالت در برابر باحالت",
    category: "mobile",
    definition: {
      fa: "در Flutter، StatelessWidget ویجتی است که ورودی‌هایش عوض نشود هرگز تغییر نمی‌کند (متن، آیکون) و فقط یک بار build می‌شود. StatefulWidget وضعیت داخلی دارد (مقدار فرم، شمارنده) که با setState عوض می‌شود و rebuild می‌کند. قاعده: تا می‌توانی stateless بمان — state را به کمترین ویجت ممکن نزدیک کن.",
      en: "In Flutter, a StatelessWidget never changes unless its inputs change (text, icon) and builds once. A StatefulWidget holds internal state (form value, counter) that changes via setState and triggers a rebuild. Rule of thumb: stay stateless as long as possible, and keep state as low in the tree as possible.",
    },
    analogy: {
      fa: "Stateless مثل تابلوی چاپی (تا نقشه عوض نشود ثابت است) و stateful مثل تخته‌ی نمره که با هر گل پاک و دوباره نوشته می‌شود.",
      en: "Stateless is a printed sign (frozen until the design changes); stateful is a scoreboard that's wiped and rewritten with every goal.",
    },
    related: ["State", "Flutter"],
  },
  {
    term: "Hot Reload",
    fa: "بارگذاری داغ",
    category: "mobile",
    definition: {
      fa: "Hot Reload تغییرات کد را بدون از دست رفتن state فعلی اپ، در همان لحظه روی دستگاه/شبیه‌ساز اعمال می‌کند: ویجت‌ها rebuild می‌شوند اما داده‌ی صفحه (مثلاً فرم پُر شده) سر جایش می‌ماند. چرخه‌ی طراحی-اجرا از دقیقه‌ها به ثانیه‌ها می‌رسد؛ تفاوتش با hot restart این است که restart همه‌چیز را از صفر می‌کند.",
      en: "Hot Reload applies code changes to the device/emulator instantly without losing the app's current state: widgets rebuild, but page data (a filled form) stays put. The design-run loop shrinks from minutes to seconds; hot restart, by contrast, resets everything from scratch.",
    },
    analogy: {
      fa: "مثل تعویض دکمه‌ی لباس در حال پوشیدن به‌جای تعویض کل لباس: همان لباس ادامه پیدا می‌کند و چیزی از حالت قبلی (state) از دست نمی‌رود.",
      en: "Like swapping a coat's button while wearing it, rather than changing the whole outfit: you continue where you were, keeping all state.",
    },
    related: ["Flutter", "HMR", "Debugging"],
  },
  {
    term: "APK",
    fa: "بسته‌ی اندروید",
    category: "mobile",
    definition: {
      fa: "APK (Android Package) فرمت بسته‌ی نصب اپ اندروید است — زیپی از کد کامپایل‌شده (DEX)، منابع، manifest و امضای دیجیتال. امروز Google Play فرمت AAB (Android App Bundle) را می‌گیرد که سرور از رویش APK بهینه‌شده برای هر دستگاه می‌سازد؛ APK مستقیم برای نصب سایدلود کاربرد دارد.",
      en: "An APK (Android Package) is Android's install bundle — a zip of compiled code (DEX), resources, manifest and a digital signature. Google Play now takes AAB (Android App Bundle), from which the store generates device-optimized APKs; raw APKs matter for sideloading.",
    },
    analogy: {
      fa: "مثل جعبه‌ی کامل یک مبل همراه دفترچه و مهر گارانتی: همه‌چیز برای نصب در یک بسته — و مهر (امضای دیجیتال) نشان می‌دهد دست کسی به محتوا نزده.",
      en: "Like a complete furniture box with manual and warranty seal: everything needed in one package — the seal (digital signature) proves nobody tampered with the contents.",
    },
    related: ["App Signing", "Store Optimization"],
  },
];
