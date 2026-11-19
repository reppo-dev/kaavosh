import type { LearningPath } from "../schema";

/**
 * DATA FILE — Learning Path. Consumed by: /paths grid page,
 * /paths/[slug] roadmap page, landing page paths preview.
 */
export const mobilePath: LearningPath = {
  slug: "mobile",
  icon: "smartphone",
  accent: "emerald",
  title: { fa: "توسعه موبایل", en: "Mobile Development" },
  tagline: {
    fa: "اپی بسازید که در جیب میلیون‌ها نفر باشد",
    en: "Build apps that live in millions of pockets",
  },
  description: {
    fa: "اپ موبایل با هر دکمه‌ای که روی گوشی بزنید باز می‌شود. این مسیر از پایه‌های برنامه‌نویسی شروع می‌کند، UI و چرخه حیات اپ را آموزش می‌دهد، شبکه و داده آفلاین را پوشش می‌دهد و با انتشار در استور و پایش اپ تمام می‌شود.",
    en: "A mobile app is what opens with every tap on a phone. This path starts with programming basics, teaches UI and the app lifecycle, covers networking and offline data, and ends with shipping to the stores and monitoring.",
  },
  level: "beginner",
  totalDuration: { fa: "حدود ۶ تا ۱۰ ماه", en: "About 6–10 months" },
  roles: [
    { fa: "توسعه‌دهنده موبایل جونیور", en: "Junior Mobile Developer" },
    { fa: "توسعه‌دهنده React Native", en: "React Native Developer" },
    { fa: "توسعه‌دهنده اندروید", en: "Android Developer" },
    { fa: "توسعه‌دهنده Flutter", en: "Flutter Developer" },
  ],
  stages: [
    {
      id: "programming-basics",
      title: { fa: "پایه‌های برنامه‌نویسی", en: "Programming basics" },
      duration: { fa: "۴ تا ۶ هفته", en: "4–6 weeks" },
      summary: {
        fa: "قبل از ساختن اپ، باید منطق کد را بلد باشید: متغیر، تابع، کلاس و خطاها. زبان پیشنهادی این مسیر TypeScript (برای React Native) یا Kotlin (برای اندروید) است.",
        en: "Before building apps, you need code logic: variables, functions, classes and errors. This path suggests TypeScript (for React Native) or Kotlin (for Android).",
      },
      topics: ["TypeScript", "Kotlin", "OOP", "Async", "Problem Solving"],
      skills: [
        {
          fa: "الگوریتم‌های کوچک را خودتان بنویسید",
          en: "Write small algorithms on your own",
        },
        {
          fa: "کد را با کلاس‌ها و ماژول‌ها مرتب کنید",
          en: "Organize code with classes and modules",
        },
        {
          fa: "با ابزار دیباگ باگ پیدا کنید",
          en: "Find bugs with a debugger",
        },
      ],
      resources: [
        {
          title: { fa: "آموزش‌نامه جاوااسکریپت مدرن", en: "javascript.info — Modern JS Tutorial" },
          url: "https://javascript.info",
          type: "book",
        },
        {
          title: { fa: "CS50x", en: "CS50x — Intro to Computer Science" },
          url: "https://cs50.harvard.edu/x/",
          type: "course",
        },
        {
          title: { fa: "مستندات Kotlin", en: "Kotlin official docs" },
          url: "https://kotlinlang.org/docs/home.html",
          type: "docs",
        },
      ],
      visual: "none",
    },
    {
      id: "ui-and-layouts",
      title: { fa: "رابط کاربری و چیدمان", en: "UI & layouts" },
      duration: { fa: "۴ تا ۵ هفته", en: "4–5 weeks" },
      summary: {
        fa: "موبایل یعنی صفحه کوچک و انگشت بزرگ؛ طراحی باید با این دو کنار بیاید. اینجا کامپوننت‌های UI، ناوبری بین صفحه‌ها و تطبیق با سایزهای مختلف گوشی را یاد می‌گیرید.",
        en: "Mobile means a small screen and a fat finger; design must live with both. You learn UI components, navigation between screens, and adapting to many phone sizes.",
      },
      topics: ["React Native", "Flutter", "Navigation", "Components", "Dark Mode"],
      skills: [
        {
          fa: "چند صفحه با ناوبری بسازید",
          en: "Build multi-screen flows with navigation",
        },
        {
          fa: "لیست‌های با عملکرد خوب بسازید",
          en: "Build performant scrolling lists",
        },
        {
          fa: "تم روشن و تاریک را مدیریت کنید",
          en: "Handle light and dark themes",
        },
      ],
      resources: [
        {
          title: { fa: "دوره رسمی اندروید", en: "Android Basics with Compose (official)" },
          url: "https://developer.android.com/courses/android-basics-compose/course",
          type: "course",
        },
        {
          title: { fa: "مستندات React Native", en: "React Native docs" },
          url: "https://reactnative.dev/docs/getting-started",
          type: "docs",
        },
        {
          title: { fa: "مسیر Flutter در roadmap.sh", en: "roadmap.sh Flutter" },
          url: "https://roadmap.sh/flutter",
          type: "roadmap",
        },
      ],
      visual: "dom-render",
    },
    {
      id: "app-lifecycle-native",
      title: { fa: "چرخه حیات اپ و پایه‌های نیتیو", en: "App lifecycle & native foundations" },
      duration: { fa: "۳ تا ۴ هفته", en: "3–4 weeks" },
      summary: {
        fa: "اپ موبایل همیشه روشن نیست: کاربر صفحه را عوض می‌کند، اپ می‌رود پس‌زمینه، سیستم ممکن است آن را بکشد. فهم چرخه حیات یعنی اپی که داده کاربر را گم نمی‌کند.",
        en: "A mobile app is not always alive: the user switches screens, the app goes to the background, the system may kill it. Knowing the lifecycle means an app that never loses the user's data.",
      },
      topics: ["Lifecycle", "Permissions", "Storage", "Notifications"],
      skills: [
        {
          fa: "حالت‌های اپ را مدیریت کنید و داده را نجات دهید",
          en: "Handle app states and persist data",
        },
        {
          fa: "مجوزهای اندروید و iOS را درست بخواهید",
          en: "Request Android/iOS permissions properly",
        },
        {
          fa: "نوتیفیکیشن بفرستید",
          en: "Send notifications",
        },
      ],
      resources: [
        {
          title: { fa: "چرخه حیات اکتیویتی اندروید", en: "Android activity lifecycle (official)" },
          url: "https://developer.android.com/guide/components/activities/activity-lifecycle",
          type: "docs",
        },
        {
          title: { fa: "React Native — پلتفرم‌ها", en: "React Native — Platform-specific code" },
          url: "https://reactnative.dev/docs/platform-specific-code",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh اندروید", en: "roadmap.sh Android" },
          url: "https://roadmap.sh/android",
          type: "roadmap",
        },
      ],
      visual: "mobile-lifecycle",
    },
    {
      id: "data-networking",
      title: { fa: "داده، شبکه و آفلاین‌فرست", en: "Data, networking & offline-first" },
      duration: { fa: "۴ تا ۵ هفته", en: "4–5 weeks" },
      summary: {
        fa: "اپ واقعی با سرور حرف می‌زند: توکن می‌گیرد، داده می‌کشد، و وقتی اینترنت رفت همچنان کار می‌کند. اینجا ذخیره‌سازی محلی، همگام‌سازی و مدیریت خطا را یاد می‌گیرید.",
        en: "A real app talks to a server: gets a token, caches data, and keeps working when the internet drops. You learn local storage, syncing and error handling.",
      },
      topics: ["REST", "Tokens", "SQLite", "Caching", "Sync", "Error States"],
      skills: [
        {
          fa: "به API امن وصل شوید",
          en: "Consume a secure API",
        },
        {
          fa: "داده را آفلاین نگه دارید و همگام کنید",
          en: "Store data offline and sync it back",
        },
        {
          fa: "حالت‌های خطا و لودینگ را تمیز طراحی کنید",
          en: "Design clean loading and error states",
        },
      ],
      resources: [
        {
          title: { fa: "React Native — Networking", en: "React Native — Networking" },
          url: "https://reactnative.dev/docs/network",
          type: "docs",
        },
        {
          title: { fa: "مستندات Room (اندروید)", en: "Room database (Android official)" },
          url: "https://developer.android.com/training/data-storage/room",
          type: "docs",
        },
        {
          title: { fa: "MDN — Fetch API", en: "MDN — Fetch API" },
          url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
          type: "docs",
        },
      ],
      visual: "http-request",
    },
    {
      id: "release-monitoring",
      title: { fa: "انتشار، استور و پایش", en: "Release, stores & monitoring" },
      duration: { fa: "۳ تا ۴ هفته", en: "3–4 weeks" },
      summary: {
        fa: "اپی که کسی آن را نصب نکند وجود ندارد. اینجا بسته‌بندی برای استور، مرور فرایند بررسی، نسخه‌های بتا و پایش کرش‌ها و عملکرد در دست کاربران واقعی را یاد می‌گیرید.",
        en: "An app nobody installs doesn't exist. You learn packaging for the stores, the review process, beta tracks, and monitoring crashes and performance in real users' hands.",
      },
      topics: ["App Store", "Play Store", "Crashlytics", "Beta Testing", "OTA Updates"],
      skills: [
        {
          fa: "اپ را برای انتشار آماده و آپلود کنید",
          en: "Prepare and upload a release build",
        },
        {
          fa: "خط لوله انتشار خودکار بسازید",
          en: "Automate the release pipeline",
        },
        {
          fa: "کرش‌ها را رصد و رفع کنید",
          en: "Track and fix crashes",
        },
      ],
      resources: [
        {
          title: { fa: "راهنمای انتشار اندروید", en: "Android release guide (official)" },
          url: "https://developer.android.com/studio/publish",
          type: "docs",
        },
        {
          title: { fa: "React Native — انتشار", en: "React Native — Publishing to stores" },
          url: "https://reactnative.dev/docs/signed-apk-android",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh اندروید", en: "roadmap.sh Android" },
          url: "https://roadmap.sh/android",
          type: "roadmap",
        },
      ],
      visual: "ci-cd-pipeline",
    },
  ],
};
