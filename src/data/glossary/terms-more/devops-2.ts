import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (devops, extended 2). Merged into terms.ts → /glossary page. */
export const moreDevopsTerms2: GlossaryTerm[] = [
  {
    term: "Docker",
    fa: "داکر",
    category: "devops",
    definition: {
      fa: "Docker پلتفرم ساخت و اجرای کانتینرهاست: Dockerfile اپ را با وابستگی‌هایش در یک ایمیج پکیج می‌کند و Docker Engine آن را در هر سیستمی یکسان اجرا می‌کند. «روی سیستم من کار می‌کرد» را کلاً منسوخ می‌کند.",
      en: "Docker is the platform for building and running containers: a Dockerfile packs the app with its dependencies into an image, and the Docker Engine runs it identically anywhere — killing 'it worked on my machine' forever.",
    },
    analogy: {
      fa: "مثل کانتینر کشتی: بار را یک بار داخل جعبه استاندارد می‌چینی و از بندر به بندر بدون بازکردن جعبه جابه‌جا می‌شود؛ جرثقیل هر کشوری فقط جعبه را بلند می‌کند.",
      en: "Like a shipping container: pack the cargo once in a standard box and it travels port to port unopened; every country's crane lifts the same box.",
    },
    related: ["Container", "Kubernetes", "Deployment"],
  },
  {
    term: "Kubernetes",
    fa: "کوبرنتیز",
    category: "devops",
    definition: {
      fa: "Kubernetes ارکستراتور کانتینرهاست: اگر کانتینری مرد خودش دوباره بالا می‌آورد، ترافیک را بین نسخه‌ها پخش می‌کند، در پیک مقیاس می‌دهد و انتشار را تدریجی و قابل‌rollback می‌کند. شما حالت مطلوب را اعلام می‌کنید، او اجرایش می‌کند.",
      en: "Kubernetes is the container orchestrator: it restarts dead containers, spreads traffic across replicas, scales under load and makes releases gradual and rollback-able. You declare the desired state; it enforces it.",
    },
    analogy: {
      fa: "مثل مدیر کارگاهی که فقط می‌شنود «سه خط تولید همیشه فعال باشد»؛ استخدام، تعویض و شیفت‌بندی را خودش مدیریت می‌کند و هر خرابی را بی‌سروصدا جبران می‌کند.",
      en: "Like a workshop manager who only hears 'keep three production lines alive': hiring, swaps and shifts are handled quietly, and every breakdown is compensated silently.",
    },
    related: ["Docker", "Deployment", "Load Balancer"],
  },
  {
    term: "Serverless",
    fa: "بدون‌سرور",
    category: "devops",
    definition: {
      fa: "Serverless یعنی کدت فقط هنگام فراخوانی اجرا می‌شود (مثل Lambda) و سرور، مقیاس و پرداخت را ابر مدیریت می‌کند: صفر ترافیک یعنی صفر هزینه. برای بارهای نا‌منظم عالی است؛ شروع سرد و محدودیت زمان اجرا بهایش است.",
      en: "Serverless means your code runs only when invoked (like Lambda) while the cloud handles servers, scaling and billing: zero traffic, zero cost. Great for spiky loads; cold starts and execution limits are the price.",
    },
    analogy: {
      fa: "فرق مالکیت تاکسی و استفاده از اسنپ: تاکسی شخصی حتی پارک‌شده هم هزینه دارد؛ اسنپ فقط وقتی سوار شدی پول می‌گیری — و اگر صد نفر هم‌زمان درخواست بدهند، صد ماشین می‌آید.",
      en: "Owning a taxi vs ride-hailing: a private taxi costs even parked; ride-hailing charges only per ride — and if a hundred people request at once, a hundred cars arrive.",
    },
    related: ["Docker", "CI/CD", "Load Balancer"],
  },
];
