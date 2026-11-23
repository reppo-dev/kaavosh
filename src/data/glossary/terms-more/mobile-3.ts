import type { GlossaryTerm } from "../../schema";

/** Mobile glossary expansion — SwiftUI, Jetpack Compose, security, layout, performance & tooling. Consumed by: src/data/glossary/terms.ts. */
export const moreMobileTerms3: GlossaryTerm[] = [
  {
    term: "SwiftUI",
    fa: "فریم‌ورک SwiftUI",
    category: "mobile",
    definition: {
      fa: "فریم‌ورک اعلانی اپل برای ساخت رابط کاربری در iOS، macOS و watchOS با زبان Swift. به‌جای دستکاری دستی نماها، رابط کاربری تابعی از وضعیت (State) تعریف می‌شود.",
      en: "Apple's declarative UI framework for iOS, macOS, and watchOS written in Swift, where views automatically update as a function of state.",
    },
    analogy: {
      fa: "مثل نقشهٔ هوشمند ساختمان: به‌جای جابه‌جا کردن تک‌تک دیوارها، مشخص می‌کنید در هر حالت نقشه چه شکلی باشد و سیستم خودش تغییرات را اعمال می‌کند.",
      en: "Like a reactive blueprint: instead of moving bricks manually, you describe what the room looks like for each state and the framework updates it.",
    },
    related: ["Native App", "State", "Jetpack Compose", "Hot Reload"],
  },
  {
    term: "Jetpack Compose",
    fa: "فریم‌ورک Jetpack Compose",
    category: "mobile",
    definition: {
      fa: "جعبهٔ ابزار اعلانی مدرن گوگل برای ساخت رابط کاربری بومی اندروید با زبان Kotlin که جایگزین فایل‌های XML قدیمی شده و کامپوننت‌ها را با توابع Composable تعریف می‌کند.",
      en: "Google's modern declarative UI toolkit for native Android written in Kotlin, replacing XML layouts with composable functions that react to state changes.",
    },
    analogy: {
      fa: "مثل قطعه‌های لگو در کد Kotlin: هر بخش UI یک تابع کوچک است که هنگام تغییر داده، فقط خودش دوباره ترکیب می‌شود.",
      en: "Like Lego blocks in Kotlin functions: each UI piece declares itself and recomposes automatically when its data changes.",
    },
    related: ["Native App", "SwiftUI", "State", "MVVM"],
  },
  {
    term: "IPA",
    fa: "فایل بستهٔ IPA",
    category: "mobile",
    definition: {
      fa: "فرمت فایل بسته‌بندی و آرشیو اپلیکیشن‌های iOS (iOS App Store Package) که کد کامپایل‌شده، منابع، آیکون‌ها و امضای دیجیتال اپلیکیشن را برای نصب و انتشار در اپ‌استور نگه می‌دارد.",
      en: "iOS App Store Package — the archive format containing compiled binaries, assets, metadata, and code signature for distributing and installing iOS apps.",
    },
    analogy: {
      fa: "مثل چمدان پلمب‌شدهٔ اپلیکیشن برای آیفون؛ معادل فایل APK در دنیای اندروید.",
      en: "Like a sealed shipping box for an iOS app — the Apple equivalent of Android's APK.",
    },
    related: ["APK", "App Signing", "Native App"],
  },
  {
    term: "ADB",
    fa: "ابزار ADB اندروید",
    category: "mobile",
    definition: {
      fa: "Android Debug Bridge — ابزار خط فرمان که کامپیوتر توسعه‌دهنده را به گوشی یا شبیه‌ساز اندروید وصل می‌کند برای نصب اپلیکیشن، خواندن لاگ‌ها (Logcat) و دیباگ زنده.",
      en: "Android Debug Bridge — a command-line bridge connecting your computer to an Android device or emulator to install builds, stream logs, and run shell commands.",
    },
    analogy: {
      fa: "مثل کابل عیب‌یاب مکانیک که به کامپیوتر ماشین وصل می‌شود تا خطاها را بخواند و نرم‌افزار را به‌روز کند.",
      en: "Like an automotive diagnostic scanner plugged into a car to read live error logs and push updates.",
    },
    related: ["APK", "Debugging", "Crash Reporting"],
  },
  {
    term: "Gradle",
    fa: "سیستم ساخت Gradle",
    category: "mobile",
    definition: {
      fa: "سیستم خودکارسازی بیلد رسمی پروژه‌های اندروید که مدیریت وابستگی‌ها، کامپایل کد، تولید نسخه‌های مختلف (Debug/Release) و ساخت فایل نهایی APK یا AAB را انجام می‌دهد.",
      en: "The official build automation system for Android that resolves dependencies, compiles sources, configures build flavors, and packages APK or AAB outputs.",
    },
    analogy: {
      fa: "مثل مدیر خط مونتاژ کارخانه که تمام قطعات لازم را از انبار می‌آورد، سرهم می‌کند و محصول نهایی را بسته‌بندی می‌نماید.",
      en: "Like a factory assembly manager gathering parts from suppliers, compiling them in order, and boxing the final build.",
    },
    related: ["APK", "CI/CD", "Native App"],
  },
  {
    term: "CocoaPods & SPM",
    fa: "مدیر پکیج CocoaPods و SPM",
    category: "mobile",
    definition: {
      fa: "دو مدیر وابستگی اصلی در توسعهٔ iOS: Swift Package Manager (SPM) ابزار رسمی و یکپارچهٔ اپل درون Xcode است و CocoaPods ابزار محبوب قدیمی‌تر برای افزودن کتابخانه‌های آماده به پروژه.",
      en: "The two main iOS dependency managers: Swift Package Manager (SPM) is Apple's native tool built into Xcode, while CocoaPods is the long-standing community manager.",
    },
    analogy: {
      fa: "مثل npm در دنیای وب، اما مخصوص پروژه‌های آیفون و مک برای دانلود و همگام‌سازی کتابخانه‌ها.",
      en: "Like npm for the Apple ecosystem — fetching, versioning, and linking third-party libraries into your iOS project.",
    },
    related: ["SwiftUI", "Library", "IPA"],
  },
  {
    term: "Universal Links",
    fa: "لینک‌های سراسری (Universal Links)",
    category: "mobile",
    definition: {
      fa: "لینک‌های HTTPS استاندارد که روی دستگاه کاربر (در صورت نصب بودن اپ) مستقیماً صفحهٔ دقیق درون اپلیکیشن iOS یا اندروید (App Links) را باز می‌کنند و در غیر این صورت در مرورگر باز می‌شوند.",
      en: "Standard HTTPS URLs verified by domain ownership that open directly into the matching screen inside an installed mobile app, falling back cleanly to the web browser if uninstalled.",
    },
    analogy: {
      fa: "مثل کلید دوکاره: اگر درِ اختصاصی اپلیکیشن موجود باشد مستقیم وارد آن می‌شود، وگرنه از درِ اصلی وب‌سایت عبور می‌کند.",
      en: "Like a smart door that steps straight into your app if installed, or seamlessly opens the website if not.",
    },
    related: ["Deep Link", "HTTPS", "URL"],
  },
  {
    term: "Keychain & Keystore",
    fa: "ذخیره‌سازی امن Keychain و Keystore",
    category: "mobile",
    definition: {
      fa: "فضاهای ذخیره‌سازی رمزنگاری‌شده در سطح سیستم‌عامل (Keychain در iOS و Keystore در اندروید) برای نگهداری ایمن توکن‌ها، رمزها و کلیدهای خصوصی؛ بسیار امن‌تر از ذخیره‌سازی ساده در تنظیمات یا دیسک.",
      en: "OS-level encrypted storage (iOS Keychain and Android Keystore) backed by device hardware to safely hold tokens, credentials, and cryptographic keys.",
    },
    analogy: {
      fa: "مثل گاوصندوق تعبیه‌شده در دیوار خانه به‌جای گذاشتن کلید زیر پادری.",
      en: "Like a hardware wall safe instead of leaving your keys in an unlocked drawer.",
    },
    related: ["Encryption", "JWT", "Biometric Auth"],
  },
  {
    term: "Biometric Auth",
    fa: "احراز هویت زیست‌سنجی",
    category: "mobile",
    definition: {
      fa: "تأیید هویت کاربر با ویژگی‌های زیستی دستگاه مانند اثر انگشت یا تشخیص چهره (Face ID / Touch ID / BiometricPrompt) برای باز کردن قفل کلیدهای امن بدون نیاز به تایپ مکرر رمز.",
      en: "Authenticating users through device hardware sensors (Face ID, Touch ID, Android BiometricPrompt) to unlock secure credentials without retyping passwords.",
    },
    analogy: {
      fa: "مثل قفل اثرانگشتی گوشی که بدون به خاطر سپردن رمز طولانی، سریع و امن هویت صاحب دستگاه را تأیید می‌کند.",
      en: "Like a fingerprint door lock that verifies who you are in a split second without typing a long PIN.",
    },
    related: ["Authentication", "Keychain & Keystore", "Two-Factor Auth"],
  },
  {
    term: "Background Tasks",
    fa: "وظایف پس‌زمینه در موبایل",
    category: "mobile",
    definition: {
      fa: "اجرای کارهای محدود مانند همگام‌سازی داده، دانلود یا ارسال تحلیل‌ها زمانی که اپلیکیشن روی صفحه نیست؛ سیستم‌عامل برای حفظ باتری، زمان و منابع آن را به‌شدت محدود می‌کند (مثل WorkManager و BGTaskScheduler).",
      en: "Scheduled work such as syncing data or uploads when an app is not in the foreground, strictly constrained by iOS and Android (BGTaskScheduler, WorkManager) to preserve battery.",
    },
    analogy: {
      fa: "مثل کارهای نظافت شبانهٔ فروشگاه پس از بسته شدن در: فقط در بازه‌های مجاز و با مصرف برق کنترل‌شده انجام می‌شود.",
      en: "Like overnight restocking after a store closes — allowed only in OS-approved windows to save power.",
    },
    related: ["App Lifecycle", "Offline-First", "Push Notification"],
  },
  {
    term: "Safe Area",
    fa: "ناحیهٔ امن نمایشگر (Safe Area)",
    category: "mobile",
    definition: {
      fa: "بخشی از صفحهٔ موبایل که زیر بریدگی دوربین (Notch)، نوار وضعیت یا نوار ژست پایین صفحه قرار نمی‌گیرد تا دکمه‌ها و متن‌ها همیشه خوانا و قابل لمس باقی بمانند.",
      en: "The portion of a mobile screen unobstructed by camera notches, Dynamic Island, status bars, or home indicators so content stays visible and tappable.",
    },
    analogy: {
      fa: "مثل حاشیهٔ امن چاپ روی کاغذ که متن را از لبه‌های برش و منگنه دور نگه می‌دارد.",
      en: "Like print margins keeping text away from staples and trim lines.",
    },
    related: ["Adaptive Layout", "Responsive Design", "SwiftUI"],
  },
  {
    term: "Adaptive Layout",
    fa: "چیدمان تطبیقی موبایل",
    category: "mobile",
    definition: {
      fa: "طراحی رابط کاربری که خود را با اندازه‌های مختلف صفحه (گوشی کوچک، تبلت، گوشی تاشو)، چرخش افقی/عمودی و اندازهٔ فونت دسترس‌پذیری کاربر به‌طور پویا سازگار می‌کند.",
      en: "Designing mobile interfaces that dynamically adapt to phones, tablets, foldables, orientation changes, and user accessibility font scaling.",
    },
    analogy: {
      fa: "مثل مبلمان ماژولار که در آپارتمان کوچک جمع‌وجور چیده می‌شود و در سالن بزرگ چیدمان گسترده‌تری می‌گیرد.",
      en: "Like modular furniture that arranges compactly in a studio and expands cleanly into a large living room.",
    },
    related: ["Safe Area", "Responsive Design", "Accessibility"],
  },
  {
    term: "Permissions Model",
    fa: "مدل مجوزهای موبایل",
    category: "mobile",
    definition: {
      fa: "سازوکار حریم خصوصی iOS و اندروید که اپلیکیشن را ملزم می‌کند پیش از دسترسی به دوربین، موقعیت مکانی، مخاطبین یا اعلان‌ها، رضایت صریح کاربر را در زمان اجرا بگیرد.",
      en: "The runtime privacy model in iOS and Android requiring apps to request explicit user consent before accessing sensitive capabilities like camera, location, or contacts.",
    },
    analogy: {
      fa: "مثل مهمانی که قبل از باز کردن هر اتاق خانه از صاحب‌خانه اجازه می‌گیرد، آن هم دقیقاً وقتی به آن نیاز دارد.",
      en: "Like a guest asking permission before opening a specific room, right at the moment they actually need it.",
    },
    related: ["Authorization", "Push Notification", "App Lifecycle"],
  },
  {
    term: "OTA Update",
    fa: "به‌روزرسانی بدون استور (OTA)",
    category: "mobile",
    definition: {
      fa: "Over-The-Air Update — ارسال مستقیم اصلاحات جاوااسکریپت و منابع در اپ‌های Cross-Platform (مانند React Native / Expo) به گوشی کاربران بدون عبور مجدد از صف بررسی اپ‌استور (در چارچوب قوانین استور).",
      en: "Over-The-Air Update — shipping JS bundle or asset fixes directly to installed cross-platform apps (e.g., Expo Updates) without waiting for a full app-store binary review.",
    },
    analogy: {
      fa: "مثل تعویض صفحهٔ منوی داخل رستوران بدون نیاز به بازسازی کل ساختمان.",
      en: "Like updating the menu inside a restaurant without remodeling the building.",
    },
    related: ["React Native", "Cross-Platform", "Deployment"],
  },
  {
    term: "60fps & Frame Budget",
    fa: "نرخ ۶۰ فریم و بودجهٔ فریم",
    category: "mobile",
    definition: {
      fa: "برای اسکرول و انیمیشن روان روی موبایل (۶۰ هرتز)، اپلیکیشن فقط ۱۶.۶ میلی‌ثانیه زمان برای ساخت هر فریم دارد (در صفحه‌های ۱۲۰ هرتز تنها ۸.۳ میلی‌ثانیه). کار سنگین روی رشتهٔ اصلی باعث افت فریم و لگ (Jank) می‌شود.",
      en: "To keep animations smooth at 60fps, an app has only 16.6ms per frame (8.3ms at 120Hz). Blocking the UI thread beyond that budget drops frames and causes visible jank.",
    },
    analogy: {
      fa: "مثل ورق زدن دفترچهٔ نقاشی متحرک: اگر یک صفحه دیر ورق بخورد، حرکت روان تصویر تکه‌تکه به نظر می‌رسد.",
      en: "Like flipping a flipbook: hesitate for a split second on one page and the whole motion visibly stutters.",
    },
    related: ["App Lifecycle", "Flutter", "React Native"],
  },
  {
    term: "Gesture Recognizer",
    fa: "تشخیص‌دهندهٔ ژست لمسی",
    category: "mobile",
    definition: {
      fa: "لایه‌ای در سیستم‌عامل موبایل که رویدادهای خام لمس (لمس، حرکت، رها کردن) را به تعاملات معنادار مانند ضربه (Tap)، کشیدن (Swipe)، بزرگ‌نمایی با دو انگشت (Pinch) و نگه‌داشتن طولانی تبدیل می‌کند.",
      en: "A mobile UI layer that interprets raw touch coordinates and timings into high-level gestures like tap, swipe, pinch-to-zoom, pan, and long-press.",
    },
    analogy: {
      fa: "مثل مترجم زبان اشاره که حرکت‌های سادهٔ انگشت را به فرمان‌های واضح و معنادار تبدیل می‌کند.",
      en: "Like a sign-language interpreter turning raw finger movements into clear, intentional commands.",
    },
    related: ["SwiftUI", "Jetpack Compose", "Flutter"],
  },
  {
    term: "SQLite & Realm",
    fa: "دیتابیس محلی SQLite و Realm",
    category: "mobile",
    definition: {
      fa: "دیتابیس‌های تعبیه‌شده روی خود گوشی برای ذخیرهٔ ساختاریافتهٔ داده‌ها، کوئری سریع و پشتیبانی از حالت آفلاین بدون نیاز به سرور خارجی.",
      en: "Embedded on-device databases used in mobile apps for structured local persistence, fast querying, and reliable offline-first experiences.",
    },
    analogy: {
      fa: "مثل دفترچهٔ یادداشت جیبی که همیشه همراه شماست و حتی بدون اینترنت می‌توانید در آن جستجو و یادداشت کنید.",
      en: "Like a pocket notebook you carry everywhere — searchable and writable even with zero signal.",
    },
    related: ["Offline-First", "SQL", "NoSQL"],
  },
  {
    term: "Memory Leak (Mobile)",
    fa: "نشت حافظه در موبایل",
    category: "mobile",
    definition: {
      fa: "وضعیتی که اشیا یا صفحات بسته‌شده همچنان در حافظه باقی می‌مانند (مثلاً به‌دلیل چرخهٔ ارجاع قوی یا لغو نکردن شنونده‌ها) و در نهایت باعث کشته شدن ناگهانی اپ (OOM Crash) توسط سیستم‌عامل می‌شوند.",
      en: "When closed screens or objects remain retained in RAM (often via retain cycles or unremoved listeners), steadily consuming memory until the OS terminates the app with an out-of-memory crash.",
    },
    analogy: {
      fa: "مثل میز کاری که پرونده‌های تمام‌شده را هیچ‌وقت جمع نمی‌کنید تا جایی که دیگر جایی برای کار جدید نماند.",
      en: "Like never clearing finished files off your desk until there is literally no room left to work.",
    },
    related: ["Garbage Collection", "Crash Reporting", "App Lifecycle"],
  },
];
