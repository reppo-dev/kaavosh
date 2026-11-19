import type { GlossaryTerm } from "../../schema";

/** DATA FILE — Glossary terms (devops, part 3). Merged into terms.ts → /glossary page. */
export const moreDevopsTerms3: GlossaryTerm[] = [
  {
    term: "IaaS vs PaaS vs SaaS",
    fa: "ای‌aaS در برابر PaaS و SaaS",
    category: "devops",
    definition: {
      fa: "سه سطح ابر: IaaS زیرساخت خام می‌دهد (VM، شبکه، دیسک — خودت OS و رانتایم را مدیریت می‌کنی)، PaaS پلتفرم اجرای اپ (کد را deploy کنی، سرور و مقیاس با آن‌هاست) و SaaS نرم‌افزار آماده‌ی استفاده (Gmail). هر چه بالا بروی کنترل کمتر و مسئولیت عملیاتی کمتر است.",
      en: "Three cloud levels: IaaS gives raw infrastructure (VMs, network, disks — you manage OS and runtime), PaaS gives an app platform (deploy code; servers and scaling are theirs), and SaaS is ready-to-use software (Gmail). Higher up the stack: less control, less operational burden.",
    },
    analogy: {
      fa: "مثل غذا: IaaS آشپزخانه‌ی اجاره‌ای (همه‌چیز با خودت)، PaaS آشپزخانه‌ی مجهز با مواد آماده، SaaS رستوران — فقط سفارش می‌دهی و می‌خوری.",
      en: "Like food: IaaS is a rented kitchen (everything DIY), PaaS a stocked kitchen with prepped ingredients, SaaS a restaurant — order and eat.",
    },
    related: ["Serverless", "Docker", "Kubernetes", "Deployment"],
  },
  {
    term: "SLA vs SLO vs SLI",
    fa: "SLA در برابر SLO و SLI",
    category: "devops",
    definition: {
      fa: "SLI معیار اندازه‌گیری است (مثلاً درصد درخواست‌های زیر ۳۰۰ms)؛ SLO هدف داخلی روی آن معیار (۹۹٫۹٪ در ماه)؛ SLA قرارداد رسمی با مشتری که پیامد نقضش جریمه است. مهندسی SRE حول SLOها بودجه‌ی خطا می‌سازد: زیر سقف، ریسک فیچر مجاز است.",
      en: "SLI is the measured indicator (e.g., % of requests under 300ms); SLO is the internal target on that indicator (99.9% monthly); SLA is the formal customer contract whose breach carries penalties. SRE practice builds error budgets around SLOs: under the cap, shipping features is allowed.",
    },
    analogy: {
      fa: "مثل مدرسه: SLI نمره‌ی آزمون است، SLO حد قبولی داخلی، SLA قراردادی که با والدین امضا شده و تخطیش پیامد دارد.",
      en: "Like school: SLI is the test score, SLO the internal pass threshold, SLA the signed contract with consequences.",
    },
    related: ["Monitoring", "Observability", "Latency", "Rate Limiting"],
  },
  {
    term: "MTTR & MTBF",
    fa: "MTTR و MTBF",
    category: "devops",
    definition: {
      fa: "MTTR میانگین زمان ترمیم است: از خرابی تا برگشتن سرویس — هرچه کمتر، تیم پاسخ‌گوتر. MTBF میانگین زمان بین خرابی‌هاست — هرچه بیشتر، پایدارتر. با هم سلامت قابلیت اطمینان را می‌سنجند: MTBF کوتاه یعنی خرابی مکرر، MTTR طولانی یعنی بازیابی کند.",
      en: "MTTR (mean time to repair) measures from failure to restored service — lower means a more responsive team. MTBF (mean time between failures) measures stability — higher means fewer outages. Together they gauge reliability: short MTBF = frequent failures, long MTTR = slow recovery.",
    },
    analogy: {
      fa: "مثل خودرو: MTBF فاصله‌ی بین تعمیرهاست، MTTR مدت‌زمانی که ماشین در تعمیرگاه می‌ماند — هر دو را می‌خواهی بهتر کنی.",
      en: "Like a car: MTBF is how often it breaks, MTTR how long it sits in the shop — you want both numbers to improve.",
    },
    related: ["Monitoring", "Rollback", "Observability"],
  },
  {
    term: "Blue-Green Deployment",
    fa: "استقرار آبی-سبز",
    category: "devops",
    definition: {
      fa: "در استقرار آبی-سبز دو محیط هم‌زمان وجود دارد: نسخه‌ی فعلی (آبی) ترافیک می‌گیرد و نسخه‌ی جدید (سبز) آماده می‌شود؛ با یک سوییچ روی لود-بالانسر، ترافیک یک‌جا جابه‌جا می‌شود. برگشت = سوییچ معکوس در چند ثانیه. هزینه: دو برابر زیرساخت در حین استقرار.",
      en: "In blue-green deployment two environments coexist: the current version (blue) serves traffic while the new one (green) is staged; one load-balancer switch moves traffic instantly. Rollback = flipping the switch back in seconds. Cost: double infrastructure during deploy.",
    },
    analogy: {
      fa: "مثل دو صحنه‌ی تئاتر: نمایش روی صحنه‌ی الف در جریان است؛ صحنه‌ی ب تمرین‌شده و آماده است و با خاموشی چند ثانیه‌ای پرده عوض می‌شود.",
      en: "Like two theater stages: the show runs on stage A while stage B is rehearsed and ready — a few seconds of darkness swaps them.",
    },
    related: ["Canary Release", "Deployment", "Rollback", "Load Balancer"],
  },
  {
    term: "YAML",
    fa: "یامل",
    category: "devops",
    definition: {
      fa: "YAML قالب پیکربندی خوانا برای انسان است: تورفتگی ساختار را نشان می‌دهد، نیازی به براکت ندارد و کامنت می‌پذیرد. فایل‌های Kubernetes، GitHub Actions و Docker Compose همه YAML هستند. نکته: تورفتگی اشتباه = خطای پارس؛ و همیشه مشکل «نروژ» (کشور NO به false تفسیر می‌شود) را به یاد داشته باش.",
      en: "YAML is a human-readable config format: indentation defines structure, no braces needed, comments allowed. Kubernetes manifests, GitHub Actions and Docker Compose are all YAML. Watch out: wrong indentation breaks parsing, and the 'Norway problem' (the country code NO parsed as false) bites the unwary.",
    },
    analogy: {
      fa: "مثل فرم خوانا با تورفتگی: هر زیربخش یک واحد جلوتر می‌رود — خواندنش راحت است ولی یک فاصله‌ی اشتباه معنایش را عوض می‌کند.",
      en: "Like a readable outline form: each sub-item indents one level — easy to read, but one wrong space changes the meaning.",
    },
    related: ["Docker", "Kubernetes", "Infrastructure as Code"],
  },
  {
    term: "IAM",
    fa: "مدیریت هویت و دسترسی",
    category: "devops",
    definition: {
      fa: "IAM (Identity and Access Management) سامانه‌ی مرکزی هویت‌ها و دسترسی‌هاست: کاربر/سرویس چه نقشی دارد و روی چه منبعی چه عملیاتی مجاز است. اصل طلایی: کمترین امتیاز (least privilege) — هر هویت فقط حداقل دسترسی لازم را بگیرد. کلیدهای سرویس، نقش‌ها و سیاست‌ها همه زیر همین چترند.",
      en: "IAM (Identity and Access Management) is the central system for identities and permissions: which user/service holds which role over which resource. Golden rule: least privilege — every identity gets only the minimum access it needs. Service keys, roles and policies all live under this umbrella.",
    },
    analogy: {
      fa: "مثل کارت پرسنلی هوشمند ساختمان: هر کارت فقط به اتاق‌های لازم باز می‌کند و ورود همه ثبت می‌شود.",
      en: "Like a smart employee badge: it opens only the rooms that person needs, and every entry is logged.",
    },
    related: ["RBAC", "Authentication", "Authorization", "Secrets Management"],
  },
  {
    term: "TDD",
    fa: "توسعه‌ی آزمون‌محور",
    category: "devops",
    definition: {
      fa: "در TDD چرخه‌ی قرمز-سبز-بازآرایی داری: اول تستی می‌نویسی که شکست بخورد (قرمز)، حداقل کد لازم برای پاس شدنش (سبز)، بعد کد را تمیز می‌کنی بدون تغییر رفتار. نتیجه: پوشش تست بالا، طراحی قابل‌تست و اعتماد به تغییرات. BDD همان چرخه با زبان رفتاری (Given/When/Then) است.",
      en: "TDD runs the red-green-refactor loop: write a failing test first (red), write the minimal code to pass it (green), then clean up without changing behavior. Result: high coverage, testable design, confidence in changes. BDD is the same loop expressed in Given/When/Then language.",
    },
    analogy: {
      fa: "مثل نقشه‌ی معماری قبل از ساختن: اول مشخص می‌کنی چه چیزی «درست» است (تست)، بعد می‌سازی — نه اینکه بسازی و بعد دنبال عیب‌یاب باشی.",
      en: "Like drafting the blueprint before building: you define what 'correct' means first (the test), then build to it.",
    },
    related: ["CI/CD", "Debugging"],
  },
  {
    term: "Docker Compose",
    fa: "داکر کامپوز",
    category: "devops",
    definition: {
      fa: "Docker Compose چند کانتینر را با یک فایل YAML تعریف و با یک فرمان بالا می‌آورد: اپ، دیتابیس، کش و صف با شبکه‌ی مشترک و ترتیب راه‌اندازی (depends_on). برای محیط توسعه‌ی محلی و تست یکپارچگی استاندارد است؛ ارکستراسیون تولیدی کار Kubernetes است.",
      en: "Docker Compose defines multiple containers in one YAML file and brings them up with a single command: app, database, cache and queue share a network and startup order (depends_on). It's the standard for local dev and integration testing; production orchestration is Kubernetes' job.",
    },
    analogy: {
      fa: "مثل دفترچه‌ی سیم‌کشی سیستم صوتی خانه: همه‌ی دستگاه‌ها و اتصالاتشان یک‌جا نوشته شده و با یک کلید کل سیستم روشن می‌شود.",
      en: "Like a home-audio setup guide: every device and its wiring written in one place, and one switch powers the whole system.",
    },
    related: ["Docker", "Kubernetes", "Container"],
  },
  {
    term: "Terraform",
    fa: "ترافورم",
    category: "devops",
    definition: {
      fa: "Terraform ابزار IaC اعلامی است: زیرساخت (VM، شبکه، دیتابیس ابری) را در کد HCL تعریف می‌کنی و با plan تغییرات را پیش‌نمایش و با apply اعمال می‌کنی. state آن واقعیتِ زیرساخت را نگه می‌دارد. مزیت: زیرساخت قابل بازتولید، بررسی‌شده در git و یکسان بین محیط‌ها.",
      en: "Terraform is declarative IaC: you define infrastructure (VMs, networks, cloud DBs) in HCL, preview changes with plan, and apply them. Its state file tracks reality. Benefits: reproducible, code-reviewed infrastructure that's identical across environments.",
    },
    analogy: {
      fa: "مثل دستور آشپزی دقیق برای آشپزخانه: هر بار که اجرا شود همان غذا با همان مواد و ترتیب درمی‌آید، در هر آشپزخانه‌ای.",
      en: "Like a precise recipe: run it in any kitchen and you get the same dish from the same ingredients in the same order.",
    },
    related: ["Infrastructure as Code", "Deployment", "Docker", "Secrets Management"],
  },
  {
    term: "Observability",
    fa: "قابلیت مشاهده‌پذیری",
    category: "devops",
    definition: {
      fa: "قابلیت مشاهده‌پذیری یعنی از روی خروجی‌های سیستم (لاگ، متریک، trace) بتوانی سؤالات تازه درباره‌ی رفتار داخلی‌اش پرسید — نه فقط هشدارهای از پیش تعریف‌شده. سه ستون: لاگ‌های ساخت‌یافته، متریک‌های زمان‌سری و distributed tracing که مسیر یک درخواست بین سرویس‌ها را نشان می‌دهد.",
      en: "Observability means being able to ask new questions about a system's internal behavior from its outputs (logs, metrics, traces) — beyond predefined alerts. Three pillars: structured logs, time-series metrics, and distributed tracing that follows one request across services.",
    },
    analogy: {
      fa: "مثل تفاوت دزدگیر ساده با دوربین‌های مداربسته‌ی کامل: دزدگیر فقط زنگ می‌زند (هشدار)، اما دوربین‌ها به تو اجازه می‌دهند بعد از حادثه دقیقاً بفهمی چه اتفاقی افتاده.",
      en: "Like the difference between a burglar alarm and full camera coverage: the alarm only rings (alerts); the cameras let you reconstruct exactly what happened.",
    },
    related: ["Monitoring", "Latency", "Microservices", "MTTR & MTBF"],
  },
  {
    term: "Rebase vs Merge",
    fa: "ری‌بیس در برابر مرج",
    category: "devops",
    definition: {
      fa: "Merge تاریخچه‌ی دو شاخه را با یک کامیت ادغام حفظ می‌کند؛ rebase کامیت‌های شاخه را برداشته و روی نوک شاخه‌ی مقصد دوباره می‌گذارد — تاریخچه‌ای خطی و تمیز می‌سازد ولی کامیت‌ها را بازنویسی می‌کند. قانون طلایی: هرگز شاخه‌های عمومی اشتراکی را rebase نکن.",
      en: "Merge preserves both branch histories with a merge commit; rebase lifts your commits and replays them on top of the target branch — a clean linear history, but rewritten commits. Golden rule: never rebase shared public branches.",
    },
    analogy: {
      fa: "Merge مثل ضمیمه کردن دو دفتر یادداشت با یک صفحه‌ی «اینجا یکی شدیم»؛ rebase مثل بازنویسی دفترت روی ادامه‌ی دفتر اصلی — تمیزتر، ولی رد قبلی پاک می‌شود.",
      en: "Merge staples two notebooks together with a 'joined here' page; rebase rewrites your notebook onto the main one's continuation — tidier, but the original timeline is gone.",
    },
    related: ["Version Control", "CI/CD"],
  },
  {
    term: "Ingress",
    fa: "اینگرس",
    category: "devops",
    definition: {
      fa: "Ingress در Kubernetes قانون مسیریابی ترافیک HTTP/S از بیرون به سرویس‌های داخل خوشه است: مبتنی بر host و path تصمیم می‌گیرد کدام سرویس جواب بدهد، و TLS termination را هم انجام می‌دهد. خودش فقط قانون است؛ اجرا با Ingress Controller (NGINX، Traefik) است.",
      en: "Ingress in Kubernetes defines HTTP/S routing rules from outside the cluster into services: by host and path it decides which service responds, and handles TLS termination. The resource is only the rule; an Ingress Controller (NGINX, Traefik) enforces it.",
    },
    analogy: {
      fa: "مثل تابلوی پذیرش لابی: بر اساس «برای چه شرکتی آمده‌ای» (host) و «به کدام بخش» (path) می‌گوید به کدام آسانسور برو.",
      en: "Like the lobby reception board: by company (host) and department (path), it tells you which elevator to take.",
    },
    related: ["Kubernetes", "Load Balancer", "Reverse Proxy", "TLS"],
  },
];
