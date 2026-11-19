import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (mobile). Merged into terms.ts → /glossary page. */
export const moreMobileTerms: GlossaryTerm[] = [
  {
    term: "Native App",
    fa: "اپ بومی",
    category: "mobile",
    definition: {
      fa: "اپ بومی با زبان و ابزار رسمی هر پلتفرم ساخته می‌شود: Kotlin برای اندروید و Swift برای iOS. کامل‌ترین دسترسی به سخت‌افزار و بهترین عملکرد را دارد؛ اما برای هر سیستم‌عامل کد جدا لازم است.",
      en: "A native app is built with each platform's official language and tools: Kotlin for Android, Swift for iOS. It gets the deepest hardware access and best performance — but needs separate code per OS.",
    },
    analogy: {
      fa: "مثل گفت‌وگو با هر قومی به زبان خودشان: روان‌ترین و صمیمی‌ترین رابطه را می‌سازد، ولی برای هر قوم باید یک مترجم جدا آموزش بدهید.",
      en: "Like speaking to each community in its own language: the smoothest, most intimate connection — but you need a separate interpreter for every community.",
    },
    related: ["Cross-Platform", "App Signing", "App Lifecycle"],
  },
  {
    term: "Cross-Platform",
    fa: "چندپلتفرمی",
    category: "mobile",
    definition: {
      fa: "توسعه‌ی چندپلتفرمی یعنی یک کدبیس برای اندروید و iOS با هم: Flutter با Dart و React Native با جاوااسکریپت سرعت توسعه را بالا می‌برند، ولی گاهی به کد نیتیو برای کارهای خاص نیاز می‌شود.",
      en: "Cross-platform development means one codebase for Android and iOS together: Flutter (Dart) and React Native (JavaScript) speed up development, though specific features sometimes still need native code.",
    },
    analogy: {
      fa: "مثل کت‌وشلوار دو جنس که با یک الگو هر دو دوخته می‌شود: سریع‌تر و ارزان‌تر، ولی برای برازش بی‌نقص گاهی باید هر کدام را جداگانه تنظیم کنید.",
      en: "Like two suits cut from one pattern: faster and cheaper, though for a perfect fit you occasionally adjust each one separately.",
    },
    related: ["Native App", "App Signing", "State"],
  },
  {
    term: "App Lifecycle",
    fa: "چرخه حیات اپ",
    category: "mobile",
    definition: {
      fa: "اپ موبایل همیشه زنده نیست: ساخته می‌شود، دیده می‌شود، وقتی کاربر اپ دیگری باز می‌کند به پس‌زمینه می‌رود و ممکن است سیستم آن را ببیند و نابودش کند. مدیریت درست این چرخه یعنی داده‌ی کاربر گم نمی‌شود.",
      en: "A mobile app isn't always alive: it's created, becomes visible, moves to the background when the user opens another app, and the system may eventually destroy it. Handling these states correctly means the user never loses data.",
    },
    analogy: {
      fa: "مثل حضور در یک جلسه‌ی شلوغ: وارد می‌شوید (ساخته‌شدن)، تمرکز دارید (دیده‌شدن)، وقتی تماس تلفنی می‌آید مکث می‌کنید (پس‌زمینه) و اگر جا تنگ شود بیرون می‌روید (نابودی) — کارتان باید هر لحظه قابل ازسرگیری باشد.",
      en: "Like sitting in a crowded meeting: you enter (created), participate (visible), pause when a phone call comes (background), and may be asked to leave when space runs out (destroyed) — your work must be resumable at any point.",
    },
    related: ["Native App", "Offline-First", "Crash Reporting"],
  },
  {
    term: "Push Notification",
    fa: "اعلان فوری",
    category: "mobile",
    definition: {
      fa: "اعلان فوری پیامی است که سرور بدون باز بودن اپ به دستگاه کاربر می‌فرستد: خبر تخفیف، پیام جدید یا یادآوری. مسیرش از سرویس‌های رسمی گوگل و اپل می‌گذرد و باید با اجازه‌ی کاربر باشد.",
      en: "A push notification is a message the server sends to a user's device even when the app is closed: a sale alert, a new message, a reminder. It travels through Google's and Apple's official services and always requires user consent.",
    },
    analogy: {
      fa: "مثل زنگ درخانه به‌جای تماس‌های مکرر: خانه‌بان فقط وقتی مزاحم می‌شود که پیام واقعی داشته باشد؛ اگر زیاد زنگ بزند، ساکن اجازه را پس می‌گیرد.",
      en: "Like a doorbell instead of repeated phone calls: the visitor only disturbs you when there's a real message — ring too often and the resident revokes permission.",
    },
    related: ["App Lifecycle", "Store Optimization", "Offline-First"],
  },
  {
    term: "Offline-First",
    fa: "آفلاین‌فرست",
    category: "mobile",
    definition: {
      fa: "طراحی آفلاین‌فرست یعنی اپ را طوری بساز که بدون اینترنت هم کار اصلی را انجام دهد: داده در حافظه‌ی محلی ذخیره و بعداً همگام می‌شود. اینترنت «تزئین» است نه «پیش‌شرط».",
      en: "Offline-first means designing the app to do its core job without internet: data is stored locally and synced later. Connectivity is an enhancement, not a prerequisite.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی یادداشت کاغذی در سفر: هر جا چیزی می‌نویسید حتی بی‌برق و بی‌آنترنت؛ برگشتید که با نسخه‌ی اصلی یکسانش می‌کنید.",
      en: "Like a paper notebook on a trip: you jot things down anywhere, even with no signal; back online, you reconcile it with the master copy.",
    },
    related: ["App Lifecycle", "Push Notification", "Cache"],
  },
  {
    term: "Deep Link",
    fa: "پیوند ژرف",
    category: "mobile",
    definition: {
      fa: "دیپ‌لینک نشانی‌ای است که مستقیم به یک صفحه‌ی خاص داخل اپ می‌رود، نه فقط باز کردن اپ: myapp://product/123. از وب و پیام‌ها به قلب اپ میان‌بر می‌زند.",
      en: "A deep link is an address that lands on a specific screen inside the app, not just opening it: myapp://product/123. It shortcuts from the web and messages straight into the app's heart.",
    },
    analogy: {
      fa: "مثل آدرس دقیق «طبقه ۳، اتاق ۳۰۷» به‌جای «برو آن ساختمان، خودت پیدایش می‌کنی»؛ مهمان بی‌واسطه به جلسه‌ی درست می‌رسد.",
      en: "Like giving the address 'floor 3, room 307' instead of 'go to that building and figure it out' — the guest arrives directly at the right meeting.",
    },
    related: ["Push Notification", "Store Optimization", "App Lifecycle"],
  },
  {
    term: "App Signing",
    fa: "امضای اپلیکیشن",
    category: "mobile",
    definition: {
      fa: "هر بیلد منتشرشده باید با کلید خصوصی توسعه‌دهنده امضا شود تا سیستم‌عامل بداند از همان ناشر نسخه‌ی قبلی است. کلید را گم کنی، دیگر نمی‌توانی آپدیت همان اپ را منتشر کنی.",
      en: "Every released build must be signed with the developer's private key so the OS knows it comes from the same publisher as before. Lose that key and you can no longer ship updates for the same app.",
    },
    analogy: {
      fa: "مثل امضای ثابت در اسناد بانکی: بانک فقط تغییراتِ امضاشده با همان امضای اول را می‌پذیرد؛ امضا عوض شود، حساب عملاً مال شما نیست.",
      en: "Like a fixed signature on bank documents: the bank accepts changes signed exactly like the first; change the signature and the account effectively isn't yours.",
    },
    related: ["Native App", "Cross-Platform", "Beta Testing"],
  },
  {
    term: "Crash Reporting",
    fa: "گزارش خرابی",
    category: "mobile",
    definition: {
      fa: "ابزار گزارش خرابی (مثل Crashlytics) هر کرش را با ردپایش ثبت می‌کند: در کدام خط، با چه ورودی، روی چه دستگاهی. رتبه‌بندی خرابی‌ها می‌گوید اول کدام را درست کنید.",
      en: "Crash reporting tools (like Crashlytics) log every crash with its trail: which line, what input, which device. Ranking crashes tells you what to fix first.",
    },
    analogy: {
      fa: "مثل جعبه‌سیاه هواپیما: بعد از هر حادثه، داده‌های دقیق لحظه‌ی سقوط در دست است؛ بدون آن، تعمیر حدس‌زدن است.",
      en: "Like a plane's black box: after any incident you hold exact data from the moment of failure; without it, repairs are guesswork.",
    },
    related: ["App Lifecycle", "Monitoring", "Beta Testing"],
  },
  {
    term: "Beta Testing",
    fa: "آزمایش بتا",
    category: "mobile",
    definition: {
      fa: "انتشار بتا یعنی نسخه‌ی تقریباً آماده را به گروه کوچکی از کاربران واقعی بدهید قبل از انتشار عمومی: با TestFlight در iOS و مسیر تست در Play Console. بازخورد و کرش‌ها قبل از آسیب به اعتبار گرفته می‌شود.",
      en: "A beta release gives a nearly-ready build to a small group of real users before the public launch: TestFlight on iOS, testing tracks on Play Console. Feedback and crashes surface before they can damage your reputation.",
    },
    analogy: {
      fa: "مثل پیش‌نمایش تئاتر برای مخاطب محدود: لوچ‌ها را پیش از افتتاحیه پیدا می‌کنید، وقتی هنوز اصلاح‌شان کم‌هزینه است.",
      en: "Like a theater preview for a small audience: you catch the rough edges before opening night, while they're still cheap to fix.",
    },
    related: ["Crash Reporting", "Store Optimization", "App Signing"],
  },
  {
    term: "Store Optimization",
    fa: "بهینه‌سازی برای استور",
    category: "mobile",
    definition: {
      fa: "ASO یعنی دیده‌شدن اپ در استور: انتخاب اسم و کلیدواژه درست، اسکرین‌شات‌های گویا، آیکون تمیز و مدیریت نظرات. مثل سئو است اما برای جست‌وجوی داخل اپ‌استور.",
      en: "ASO means being discoverable in the stores: the right name and keywords, telling screenshots, a clean icon, and active review management. It's SEO, but for search inside the app stores.",
    },
    analogy: {
      fa: "مثل ویترین مغازه در خیابان پر رفت‌وآمد: همان کیفیت محصول با ویترین بهتر، چند برابر مشتری می‌گیرد؛ ویترین خالی یعنی محصول عالی و فروش صفر.",
      en: "Like a shop window on a busy street: the same product with a better window pulls in multiples of customers; an empty window means a great product with zero sales.",
    },
    related: ["Beta Testing", "Push Notification", "Deep Link"],
  },
];
