import type { GlossaryTerm } from "../../schema";

/** DevOps glossary expansion — Kubernetes primitives, GitOps, observability, chaos & deployment strategies. Consumed by: src/data/glossary/terms.ts. */
export const moreDevopsTerms4: GlossaryTerm[] = [
  {
    term: "Pod",
    fa: "پاد (Pod در کوبرنتیز)",
    category: "devops",
    definition: {
      fa: "کوچک‌ترین واحد قابل استقرار در کوبرنتیز که یک یا چند کانتینر هم‌وابسته را با آدرس IP و فضای ذخیره‌سازی مشترک روی یک گره اجرا می‌کند.",
      en: "The smallest deployable unit in Kubernetes, wrapping one or more tightly coupled containers that share a network IP and storage volumes.",
    },
    analogy: {
      fa: "مثل غلاف نخودفرنگی: هر غلاف یک یا چند کانتینر را کنار هم نگه می‌دارد و همه با هم متولد و جابه‌جا می‌شوند.",
      en: "Like a pea pod holding one or more containers that share the same roof, address, and lifecycle.",
    },
    related: ["Kubernetes", "Container", "StatefulSet", "Horizontal Pod Autoscaler"],
  },
  {
    term: "StatefulSet",
    fa: "استیت‌فول‌ست (StatefulSet)",
    category: "devops",
    definition: {
      fa: "شیء کنترلی در کوبرنتیز برای سرویس‌های دارای وضعیت (مانند دیتابیس‌ها و Kafka) که به هر پاد نام شبکهٔ پایدار، ترتیب شروع/توقف مشخص و دیسک ماندگار اختصاصی می‌دهد.",
      en: "A Kubernetes workload controller for stateful applications (like databases or Kafka) that guarantees stable network identities, ordered rollouts, and dedicated persistent storage per Pod.",
    },
    analogy: {
      fa: "مثل کارمندان با میز و کمد نام‌دار (دیتابیس ۱، دیتابیس ۲)، برخلاف کارمندان موقت که هر روز روی هر میز خالی می‌نشینند.",
      en: "Like employees with assigned numbered desks and personal lockers, rather than interchangeable hot-desking.",
    },
    related: ["Kubernetes", "Pod", "Replication"],
  },
  {
    term: "Horizontal Pod Autoscaler",
    fa: "مقیاس‌دهی خودکار پادها (HPA)",
    category: "devops",
    definition: {
      fa: "کنترلری در کوبرنتیز که به‌طور خودکار تعداد نسخه‌های یک سرویس (Replicas) را بر اساس مصرف CPU، حافظه یا متریک‌های سفارشی (مانند طول صف) کم و زیاد می‌کند.",
      en: "A Kubernetes controller that automatically scales the number of Pod replicas up or down based on CPU, memory, or custom metrics like request queue depth.",
    },
    analogy: {
      fa: "مثل مدیر سوپرمارکت که به‌محض طولانی شدن صف صندوق‌ها، صندوقدارهای جدید باز می‌کند و در ساعت خلوت آن‌ها را می‌بندد.",
      en: "Like a store manager opening extra checkout lanes as queues grow and closing them once traffic drops.",
    },
    related: ["Kubernetes", "Pod", "Horizontal vs Vertical Scaling", "Monitoring"],
  },
  {
    term: "Helm",
    fa: "مدیر پکیج Helm",
    category: "devops",
    definition: {
      fa: "مدیر بسته برای کوبرنتیز که فایل‌های YAML پیچیدهٔ یک اپلیکیشن را در قالب‌های قابل تنظیم به نام Chart بسته‌بندی، نسخه‌بندی و با یک دستور نصب یا بازگردانی (Rollback) می‌کند.",
      en: "The package manager for Kubernetes that bundles complex YAML manifests into versioned, parameterized templates called Charts for one-command installs and rollbacks.",
    },
    analogy: {
      fa: "مثل بستهٔ آمادهٔ مبلمان IKEA همراه با دفترچه و پیچ‌ها: یک فرمان می‌دهید و کل مجموعهٔ کوبرنتیز یکپارچه نصب می‌شود.",
      en: "Like a flat-pack kit with parameterized instructions that installs and upgrades an entire Kubernetes stack in one command.",
    },
    related: ["Kubernetes", "YAML", "Infrastructure as Code", "Rollback"],
  },
  {
    term: "GitOps",
    fa: "رویکرد GitOps",
    category: "devops",
    definition: {
      fa: "روش عملیاتی که مخزن Git را تنها منبع حقیقت برای زیرساخت و استقرارها قرار می‌دهد؛ ابزارهایی مانند ArgoCD وضعیت واقعی کلاستر را مدام با Git مقایسه و به‌صورت خودکار همگام می‌کنند.",
      en: "An operational model using Git as the single source of truth for infrastructure and deployments; agents like ArgoCD continuously reconcile the live cluster to match Git.",
    },
    analogy: {
      fa: "مثل ترموستات هوشمند: دمای دلخواه را در Git ثبت می‌کنید و سیستم خودکار محیط واقعی را همیشه روی همان مقدار نگه می‌دارد.",
      en: "Like a thermostat: you declare the desired state in Git, and an automated loop continuously brings reality into alignment.",
    },
    related: ["Version Control", "Infrastructure as Code", "CI/CD", "Kubernetes"],
  },
  {
    term: "Container Registry",
    fa: "مخزن ایمیج کانتینر",
    category: "devops",
    definition: {
      fa: "انبار مرکزی (مانند Docker Hub، GHCR یا AWS ECR) برای ذخیره، نسخه‌بندی، اسکن امنیتی و توزیع ایمیج‌های کانتینر بین خط لولهٔ CI و سرورهای تولید.",
      en: "A central repository (such as Docker Hub, GHCR, or AWS ECR) for storing, versioning, security-scanning, and distributing container images to clusters.",
    },
    analogy: {
      fa: "مثل انبار قطعات تاییدشده که خط تولید (CI) محصولات بسته‌بندی‌شده را آنجا می‌گذارد و سرورها از آن تحویل می‌گیرند.",
      en: "Like a vetted warehouse where CI publishes signed container images and production servers pull them down.",
    },
    related: ["Docker", "Container", "CI/CD", "Artifact"],
  },
  {
    term: "Prometheus & Grafana",
    fa: "پایش با Prometheus و Grafana",
    category: "devops",
    definition: {
      fa: "زوج استاندارد پایش در کلود: Prometheus متریک‌های سری زمانی (CPU، نرخ خطا، تأخیر) را جمع‌آوری و هشدار تولید می‌کند و Grafana آن‌ها را در داشبوردهای بصری زنده نمایش می‌دهد.",
      en: "The standard cloud-native monitoring duo: Prometheus scrapes and stores time-series metrics and evaluates alerts, while Grafana visualizes them on live dashboards.",
    },
    analogy: {
      fa: "Prometheus مثل حسگرها و جعبه‌سیاه خودرو است و Grafana مثل صفحهٔ کیلومتر و داشبورد جلوی راننده.",
      en: "Prometheus is the car's sensor array and logger; Grafana is the live instrument cluster on the dashboard.",
    },
    related: ["Monitoring", "Observability", "Time-Series Database", "SLA vs SLO vs SLI"],
  },
  {
    term: "OpenTelemetry",
    fa: "استاندارد OpenTelemetry",
    category: "devops",
    definition: {
      fa: "استاندارد متن‌باز و مستقل از فروشنده (OTel) برای تولید، جمع‌آوری و ارسال سه ستون مشاهده‌پذیری — لاگ‌ها، متریک‌ها و ردیابی توزیع‌شده (Traces) — از کد به هر ابزار پایش.",
      en: "A vendor-neutral open-source standard (OTel) for instrumenting, collecting, and exporting logs, metrics, and distributed traces to any observability backend.",
    },
    analogy: {
      fa: "مثل استاندارد USB-C برای داده‌های پایش: یک‌بار کدتان را ابزارگذاری می‌کنید و به هر سامانهٔ تحلیلی وصل می‌شوید.",
      en: "Like USB-C for telemetry: instrument your app once and plug into any monitoring vendor without rewriting code.",
    },
    related: ["Observability", "Monitoring", "Prometheus & Grafana"],
  },
  {
    term: "Artifact",
    fa: "محصول بیلد (Artifact)",
    category: "devops",
    definition: {
      fa: "خروجی قابل استقرار و تغییرناپذیری که خط لولهٔ CI از کد منبع می‌سازد (مانند ایمیج Docker، فایل JAR، باندل استاتیک یا بستهٔ APK) تا دقیقاً همان نسخه تست و منتشر شود.",
      en: "An immutable deployable output produced by a CI build (such as a Docker image, static bundle, JAR, or APK) so the exact tested build is promoted to production.",
    },
    analogy: {
      fa: "مثل محصول بسته‌بندی‌شده و پلمب‌شدهٔ کارخانه: همان جعبهٔ تست‌شده به فروشگاه می‌رود، نه مواد اولیهٔ خام.",
      en: "Like a sealed product off the factory line: you ship the exact tested package, not raw ingredients.",
    },
    related: ["CI/CD", "Container Registry", "Deployment"],
  },
  {
    term: "Zero-Downtime Deployment",
    fa: "استقرار بدون قطعی",
    category: "devops",
    definition: {
      fa: "انتشار نسخهٔ جدید نرم‌افزار بدون آنکه کاربران هیچ خطا یا قطعی حس کنند؛ با ترکیب استراتژی‌هایی مانند Rolling Update، Blue-Green، Canary، Health Check و مایگریشن‌های سازگار با نسخهٔ قبل.",
      en: "Releasing a new version with zero user-facing interruption by combining rolling, blue-green, or canary deployments with health checks and backward-compatible migrations.",
    },
    analogy: {
      fa: "مثل تعویض آسفالت یک خط بزرگراه در حالی که ترافیک روان از خطوط کناری عبور می‌کند.",
      en: "Like repaving one highway lane at a time while traffic flows smoothly through the open lanes.",
    },
    related: ["Blue-Green Deployment", "Canary Release", "Health Check", "Migration"],
  },
  {
    term: "Chaos Engineering",
    fa: "مهندسی آشوب (Chaos Engineering)",
    category: "devops",
    definition: {
      fa: "تزریق کنترل‌شده و هدفمند خطا به سیستم (مثل خاموش کردن یک سرور، ایجاد تأخیر شبکه یا قطع کش) برای کشف نقاط ضعف پیش از آنکه در بحران واقعی مشتریان را متأثر کند.",
      en: "Deliberately injecting controlled failures (killing instances, adding network latency, failing dependencies) to uncover weaknesses before real outages hit users.",
    },
    analogy: {
      fa: "مثل مانور آتش‌نشانی برنامه‌ریزی‌شده در ساختمان تا قبل از آتش‌سوزی واقعی، خروجی‌ها و واکنش تیم امتحان شود.",
      en: "Like a scheduled fire drill — testing exits and alarms safely so nothing fails during a real emergency.",
    },
    related: ["Single Point of Failure", "Circuit Breaker", "Observability", "MTTR & MTBF"],
  },
  {
    term: "Feature Flag",
    fa: "پرچم ویژگی (Feature Flag)",
    category: "devops",
    definition: {
      fa: "کلید کنترلی در زمان اجرا که اجازه می‌دهد یک ویژگی جدید را بدون استقرار مجدد کد برای همه یا درصدی از کاربران روشن یا در صورت بروز باگ فوری خاموش کنید.",
      en: "A runtime toggle that lets you enable a feature for a percentage of users or instantly disable a buggy feature without redeploying code.",
    },
    analogy: {
      fa: "مثل کلید فیوز جداگانه برای هر اتاق ساختمان: اگر چراغی اتصالی کرد، فقط همان کلید را می‌زنید بدون قطع برق کل خانه.",
      en: "Like an individual circuit breaker for one room: turn a feature on gradually or flip it off instantly without touching the rest.",
    },
    related: ["Canary Release", "Deployment", "Rollback"],
  },
  {
    term: "Staging Environment",
    fa: "محیط آزمایشی پیش‌تولید (Staging)",
    category: "devops",
    definition: {
      fa: "محیطی تا حد ممکن هم‌سان با محیط تولید (Production) که نسخهٔ جدید پیش از انتشار نهایی روی آن مستقر و از نظر عملکرد، مایگریشن‌ها و یکپارچگی بررسی می‌شود.",
      en: "A near-identical replica of production where release candidates are deployed and verified end-to-end before going live to real users.",
    },
    analogy: {
      fa: "مثل تمرین نهایی تئاتر با لباس و نورپردازی کامل روی صحنه، یک شب پیش از ورود تماشاگران.",
      en: "Like a full dress rehearsal on stage with lights and costumes the night before opening night.",
    },
    related: ["Deployment", "CI/CD", "Integration Testing"],
  },
  {
    term: "Immutable Infrastructure",
    fa: "زیرساخت تغییرناپذیر",
    category: "devops",
    definition: {
      fa: "رویکردی که در آن سرورها پس از راه‌اندازی هرگز به‌صورت دستی ویرایش یا آپدیت نمی‌شوند؛ برای هر تغییر، ایمیج یا سرور تازه ساخته شده و جایگزین قبلی می‌شود تا از رانش پیکربندی (Configuration Drift) جلوگیری گردد.",
      en: "An infrastructure model where running servers are never patched in place; every change builds a fresh machine or container image and replaces the old one, preventing configuration drift.",
    },
    analogy: {
      fa: "مثل تعویض کارتریج پرینتر به‌جای پر کردن دستی جوهر روی میز: همیشه تمیز، یکسان و تکرارپذیر است.",
      en: "Like replacing a sealed part instead of tinkering on-site — every instance matches the blueprint identically.",
    },
    related: ["Infrastructure as Code", "Container", "Docker", "Terraform"],
  },
];
