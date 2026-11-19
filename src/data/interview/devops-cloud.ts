import type { InterviewField } from "../schema";

/**
 * DATA FILE — Interview questions. Consumed by: /interview hub page,
 * /interview/[field] Q&A page, landing page stats.
 */
export const devopsInterview: InterviewField = {
  slug: "devops-cloud",
  title: { fa: "مصاحبه دواپس و ابر", en: "DevOps & cloud interviews" },
  description: {
    fa: "سوال‌های واقعی مصاحبه‌های دواپس در ۲۰۲۶: CI/CD، کانتینرها، کوبرنتیز، IaC و رصد — هرکدام با پاسخ کوتاه و شکستن قدم‌به‌قدم.",
    en: "Real 2026 DevOps interview questions: CI/CD, containers, Kubernetes, IaC and observability — each with a short answer and a step-by-step breakdown.",
  },
  icon: "cloud",
  accent: "sky",
  questions: [
    {
      id: "what-is-cicd",
      question: {
        fa: "CI/CD چیست و بدون آن تیم‌ها چه رنجی می‌کشند؟",
        en: "What is CI/CD, and what do teams suffer without it?",
      },
      difficulty: "junior",
      tags: ["ci-cd", "automation", "pipeline"],
      quickAnswer: {
        fa: "CI یعنی هر کامیت خودکار بیلد و تست می‌شود تا خرابی‌ها دقایقی بعد از کامیت پیدا شوند، نه هفته‌ها بعد. CD یعنی نسخه‌ی سالم خودکار به استیجینگ و پروداکشن می‌رود. نتیجه: انتشار از «رویداد ترسناک ماهانه» به «روال بی‌حساب روزانه» تبدیل می‌شود.",
        en: "CI means every commit is built and tested automatically, so breakages surface minutes after the commit — not weeks later. CD means a healthy build ships itself to staging and production. Deployments stop being a scary monthly event and become a calm daily routine.",
      },
      steps: [
        {
          title: { fa: "دردِ قبل از CI", en: "The pain before CI" },
          detail: {
            fa: "قبل از CI، تیم‌ها هفته‌ها روی شاخه‌های جدا کار می‌کردند و بعد ادغام می‌شد «مرگ ادغام»: دو هفته رفع تعارض و باگ. تست دستی هم هر بار جا می‌ماند.",
            en: "Before CI, teams worked weeks on separate branches, then merged into 'merge hell': two weeks of conflicts and bugs. Manual testing slipped every time.",
          },
        },
        {
          title: { fa: "حرف C اول: پیوسته ادغام", en: "The first C: continuous integration" },
          detail: {
            fa: "کامیت‌های کوچک و مکرر؛ هر کامیت در runner بیلد می‌شود، لینت و تست‌ها اجرا می‌شوند. اگر قرمز شد، مقصر دقایقی پیش مشخص است، نه ماه‌ها بعد.",
            en: "Small, frequent commits; each one builds on a runner with lint and tests. If it goes red, the culprit is minutes old, not months old.",
          },
        },
        {
          title: { fa: "حرف CD: پیوسته تحویل/استقرار", en: "The CD: continuous delivery/deployment" },
          detail: {
            fa: "بیلد سبز به‌صورت خودکار بسته‌بندی و مستقر می‌شود: اول استیجینگ، بعد (با تایید یا خودکار) پروداکشن. هیچ «روی لپ‌تاپ من جواب می‌داد» باقی نمی‌ماند.",
            en: "A green build is packaged and deployed automatically: staging first, then (with approval or fully automated) production. 'Worked on my laptop' stops existing.",
          },
        },
        {
          title: { fa: "خط لوله واقعی چه دارد", en: "What a real pipeline contains" },
          detail: {
            fa: "مراحل استاندارد: نصب وابستگی‌ها → لینت/تایپ‌چک → تست‌های واحد → بیلد → تست‌های یکپارچگی → اسکن امنیتی → انتشار. هر مرحله سریع و قابل‌شکست‌کردن.",
            en: "Standard stages: install deps → lint/typecheck → unit tests → build → integration tests → security scan → release. Each stage fast and fail-able.",
          },
        },
        {
          title: { fa: "دو قانون طلایی", en: "Two golden rules" },
          detail: {
            fa: "۱) خط لوله را از کامیت تا انتشار در کمتر از ۱۰ دقیقه نگه دارید وگرنه تیم شروع به دورزدنش می‌کند. ۲) شاخه‌ی اصلی همیشه قابل‌انتشار باشد.",
            en: "1) Keep the pipeline under ~10 minutes end-to-end, or the team starts bypassing it. 2) Main must always be releasable.",
          },
        },
      ],
      codeExample: {
        language: "yaml",
        code: `name: ci
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm test
      - run: npm run build
  deploy:
    needs: test          # only a green build ships
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: ./deploy.sh`,
        caption: {
          fa: "هر کامیت تست می‌شود؛ فقط بیلد سبز منتشر می‌شود",
          en: "Every commit is tested; only a green build deploys",
        },
      },
      followUps: [
        { fa: "تست‌های کند را چطور از مسیر خارج می‌کنید؟", en: "How do you keep slow tests out of the critical path?" },
        { fa: "فرق continuous delivery و continuous deployment؟", en: "Continuous delivery vs continuous deployment?" },
      ],
      visual: "ci-cd-pipeline",
    },
    {
      id: "containers-vs-vms",
      question: {
        fa: "کانتینر و ماشین مجازی چه فرقی دارند؟ چرا کانتینر سبک‌تر است؟",
        en: "How do containers differ from VMs — and why are containers lighter?",
      },
      difficulty: "junior",
      tags: ["docker", "containers", "virtualization"],
      quickAnswer: {
        fa: "ماشین مجازی کل سیستم‌عامل مهمان را شبیه‌سازی می‌کند: هر VM کرنل و همه‌چیز خودش را دارد، پس چند گیگابایت و دقایقی راه‌اندازی. کانتینر فقط پروسس‌های اپ را ایزوله می‌کند و از کرنلِ مشترکِ میزبان استفاده می‌کند؛ پس چند ده مگابایت است و در ثانیه بالا می‌آید.",
        en: "A VM virtualizes a whole guest OS: every VM carries its own kernel and everything, so it's gigabytes and boots in minutes. A container isolates just the app's processes and shares the host's kernel — so it's tens of megabytes and starts in seconds.",
      },
      steps: [
        {
          title: { fa: "VM: خانه با همه‌ی اسباب‌بازی‌ها", en: "A VM: a full house" },
          detail: {
            fa: "هایپروایزر روی سخت‌افزار، و روی آن هر VM یک سیستم‌عامل کامل: کرنل، کتابخانه‌ها، همه‌چیز. ایزوله‌ترین حالت است ولی سنگین — مثل ساختن یک خانه‌ی کامل برای هر مستأجر.",
            en: "A hypervisor sits on hardware, and each VM on top carries a full OS: kernel, libraries, everything. Maximum isolation, maximum weight — like building a whole house per tenant.",
          },
        },
        {
          title: { fa: "کانتینر: آپارتمان با مشاعات", en: "A container: an apartment with shared utilities" },
          detail: {
            fa: "همه‌ی کانتینرها کرنل میزبان را مشترک استفاده می‌کنند و فقط با namespace (دیدن پروسس‌های خودشان) و cgroups (سهم CPU/رم) ایزوله شده‌اند. مثل آپارتمان: در اختصاصی، برق مشترک.",
            en: "Containers share the host kernel and isolate only via namespaces (their own process view) and cgroups (CPU/RAM shares). Like apartments: private doors, shared utilities.",
          },
        },
        {
          title: { fa: "نتیجه‌ی عملی", en: "Practical consequences" },
          detail: {
            fa: "کانتینر در ثانیه‌ای بالا می‌آید و در مقیاس صدها نسخه هم‌زمان منطقی است؛ VM برای ایزولاسیون قوی‌تر از سیستم‌عامل‌های متفاوت (ویندوز روی لینوکس) لازم است.",
            en: "Containers boot in seconds and scale to hundreds of copies; VMs remain necessary for stronger isolation or different OSes (Windows on Linux).",
          },
        },
        {
          title: { fa: "ایمیج چیست", en: "What is an image" },
          detail: {
            fa: "ایمیج، بسته‌ی فقط‌خواندنیِ اپ + وابستگی‌هاست؛ لایه‌لایه ساخته می‌شود و کش می‌شود. کانتینر، اجرای زنده‌ی همان ایمیج با یک لایه‌ی نوشتنی است.",
            en: "An image is a read-only bundle of app + dependencies, built in cached layers. A container is that image running with a thin writable layer.",
          },
        },
        {
          title: { fa: "قانون لایه‌ها", en: "Layer discipline" },
          detail: {
            fa: "چون لایه‌ها کش می‌شوند، ترتیب Dockerfile مهم است: وابستگی‌ها قبل از کد، تا تغییر کد نیازی به دانلود دوباره‌ی npm داشته باشد.",
            en: "Because layers cache, Dockerfile order matters: dependencies before code, so a code change doesn't re-run the whole npm install layer.",
          },
        },
      ],
      codeExample: {
        language: "dockerfile",
        code: `FROM node:22-alpine
WORKDIR /app

COPY package*.json ./      # dependency layer first
RUN npm ci

COPY . .                   # code layer — changes rarely invalidate the cache
RUN npm run build

CMD ["node", "dist/main.js"]`,
        caption: {
          fa: "لایه‌بندی درست، بیلد و دیپلوی را چند برابر سریع می‌کند",
          en: "Right layering makes builds and deploys dramatically faster",
        },
      },
      followUps: [
        { fa: "ایمیج‌های multi-stage چه مشکلی را حل می‌کنند؟", en: "What problem do multi-stage builds solve?" },
        { fa: "کانتینر ایزولاسیون امنیتی کافی می‌دهد؟", en: "Is container isolation enough for security?" },
      ],
      visual: "docker-containers",
    },
    {
      id: "kubernetes-basics",
      question: {
        fa: "کوبرنتیز کدام مشکل داکر را حل می‌کند؟ pod و deployment چیست؟",
        en: "Which Docker problem does Kubernetes solve? What are pods and deployments?",
      },
      difficulty: "mid",
      tags: ["kubernetes", "k8s", "orchestration"],
      quickAnswer: {
        fa: "داکر یک کانتینر را خوب اجرا می‌کند؛ کوبرنتیز صدها کانتینر را در چند ماشین مدیریت می‌کند: اگر کانتینری مرد، خودش دوباره بالا می‌آورد، ترافیک را پخش می‌کند و در پیک مقیاس می‌دهد. pod کوچک‌ترین واحد است (معمولاً یک کانتینر) و deployment توصیف حالت مطلوب است که کنترلرها به آن می‌رسند.",
        en: "Docker runs one container well; Kubernetes manages hundreds across many machines: it restarts dead containers, spreads traffic and scales under load. A pod is the smallest unit (usually one container); a deployment declares the desired state that controllers then enforce.",
      },
      steps: [
        {
          title: { fa: "مشکل: پنگولبالی در مقیاس", en: "The problem: chaos at scale" },
          detail: {
            fa: "با ۵۰ کانتینر روی ۱۰ سرور، از کجا می‌فهمید هر کدام کجاست؟ اگر یکی مرد چه کسی بالا می‌آوردش؟ اگر پیک آمد کدام سرور باید بیشتر بگیرد؟ مدیریت دستی دیگر ممکن نیست.",
            en: "With 50 containers on 10 servers: where is each one? Who restarts a dead one? Which server takes more load during a spike? Manual management stops working.",
          },
        },
        {
          title: { fa: "حل: حالت مطلوب + کنترل‌کننده", en: "The fix: desired state + controllers" },
          detail: {
            fa: "شما در YAML اعلام می‌کنید «۳ نسخه از این سرویس» می‌خواهم؛ کنترل‌های کوبرنتیز مدام واقعیت را با این خواسته مقایسه می‌کنند و اختلاف را رفع می‌کنند (reconciliation loop).",
            en: "You declare 'I want 3 replicas of this service' in YAML; Kubernetes controllers continuously compare reality to that desire and fix the difference (a reconciliation loop).",
          },
        },
        {
          title: { fa: "pod: واحد زمان‌بندی", en: "Pod: the scheduling unit" },
          detail: {
            fa: "pod یک یا چند کانتینر است که هم‌زمان و هم‌شبکه اجرا می‌شوند (localhost مشترک). معمولاً یک کانتینر در هر pod؛ کانتینرهای تزئینی مثل log-shipper استثنا هستند.",
            en: "A pod is one or more containers running together on a shared network (a shared localhost). Usually one container per pod; sidecars like log shippers are the exception.",
          },
        },
        {
          title: { fa: "deployment و replica", en: "Deployments and replicas" },
          detail: {
            fa: "deployment می‌گوید چند replica، چه ایمیجی، چه منابعی. rollout جدید را تدریجی می‌کند: نسخه‌های جدید یکی‌یکی بالا، سلامت‌سنجی، بعد ادامه — و اگر خراب شد، rollback.",
            en: "A deployment declares replica count, image and resources. Rollouts are gradual: new pods come up one by one, get health-checked, then continue — with rollback if they fail.",
          },
        },
        {
          title: { fa: "سرویس و شبکه", en: "Services and networking" },
          detail: {
            fa: "podها موقتی‌اند و IPشان عوض می‌شود؛ Service یک آدرس ثابت و لودبالانس بین podهای زنده می‌دهد. liveness/readiness probeها تعیین می‌کنند چه‌وقت restart و چه‌وقت از چرخه‌ی ترافیک بیرون.",
            en: "Pods are temporary and their IPs change; a Service gives a stable address balancing across live pods. Liveness/readiness probes decide when to restart and when to pull a pod from traffic.",
          },
        },
      ],
      codeExample: {
        language: "yaml",
        code: `apiVersion: apps/v1
kind: Deployment
metadata: { name: api }
spec:
  replicas: 3                    # desired state
  selector: { matchLabels: { app: api } }
  template:
    metadata: { labels: { app: api } }
    spec:
      containers:
        - name: api
          image: registry/api:1.4.2
          readinessProbe:        # only healthy pods get traffic
            httpGet: { path: /healthz, port: 8080 }`,
        caption: {
          fa: "سه نسخه همیشه زنده؛ podهای ناسالم ترافیک نمی‌گیرند",
          en: "Three replicas always alive; unhealthy pods get no traffic",
        },
      },
      followUps: [
        { fa: "فرق liveness و readiness probe؟", en: "Liveness vs readiness probes?" },
        { fa: "ConfigMap و Secret چه نقشی دارند؟", en: "What role do ConfigMaps and Secrets play?" },
      ],
      visual: "docker-containers",
    },
    {
      id: "infrastructure-as-code",
      question: {
        fa: "Infrastructure as Code چیست و چه‌فرقی با کلیک‌کردن در کنسول دارد؟",
        en: "What is Infrastructure as Code, and how is it different from clicking in a console?",
      },
      difficulty: "mid",
      tags: ["terraform", "iac", "automation"],
      quickAnswer: {
        fa: "IaC یعنی زیرساخت (سرور، شبکه، دیتابیس) در فایل کد تعریف می‌شود و ابزاری مثل Terraform آن را اعمال می‌کند. فرقش با کلیک در کنسول مثل فرق یک دستورغذای مکتوب با «حس می‌کنم نمک لازم است» است: قابل‌تکرار، قابل‌بازبینی، قابل‌version control و قابل‌تست.",
        en: "IaC means infrastructure (servers, networks, databases) is defined in code files and applied by a tool like Terraform. Versus console clicking, it's the difference between a written recipe and 'it felt like it needed salt': repeatable, reviewable, version-controlled, testable.",
      },
      steps: [
        {
          title: { fa: "مشکل: زیرساخت لقب‌گرفته از کلیک", en: "The problem: click-built infrastructure" },
          detail: {
            fa: "زیرساختی که با کلیک ساخته شده، فقط در ذهن سازنده وجود دارد: هیچ‌کس دقیق نمی‌داند چه تنظیماتی دارد؛ بازسازی در فاجعه یا محیط جدید، هفته‌ها حدس‌زدن است.",
            en: "Click-built infrastructure lives only in its builder's head: nobody knows the exact settings, and rebuilding it after a disaster or in a new environment is weeks of guessing.",
          },
        },
        {
          title: { fa: "حل: زیرساخت مثل کد", en: "The fix: infra like code" },
          detail: {
            fa: "در Terraform/HCL یا YAML اعلام می‌کنید چه منابعی می‌خواهید؛ ابزار وضعیت فعلی را می‌خواند، پلن تغییر (plan) می‌سازد و بعد apply می‌کند. حالت مطلوب همیشه در گیت است.",
            en: "You declare desired resources in Terraform/HCL or YAML; the tool reads current state, builds a plan, then applies it. The desired state always lives in git.",
          },
        },
        {
          title: { fa: "سه برندگی مشخص", en: "Three concrete wins" },
          detail: {
            fa: "۱) بازسازی یکسان در هر محیط (dev = staging = prod). ۲) بررسی تغییرها با Pull Request، مثل کد. ۳) تاریخچه: هر تغییر زیرساخت قابل ردیابی به کامیت و مسئولش.",
            en: "1) Identical rebuilds everywhere (dev = staging = prod). 2) Infra changes reviewed via pull requests like code. 3) History: every change traceable to a commit and an owner.",
          },
        },
        {
          title: { fa: "idempotent بودن", en: "Idempotence" },
          detail: {
            fa: "اجرای دوباره‌ی همان کد IaC چیزی را خراب نمی‌کند: ابزار فقط اختلاف را می‌بیند و همان را اصلاح می‌کند. این فرق اساسی با اسکریپت‌های دستی است که اجرای دوباره‌شان خطرناک است.",
            en: "Re-running the same IaC breaks nothing: the tool sees only the delta and fixes exactly that — unlike hand-written scripts whose rerun is risky.",
          },
        },
        {
          title: { fa: "state و نگهداری‌اش", en: "State and its care" },
          detail: {
            fa: "Terraform یک state file دارد که «چه ساخته‌ام» را نگه می‌دارد؛ باید در storage مشترک و قفل‌شده نگه داشته شود، نه روی لپ‌تاپ‌ها — وگرنه دو نفر هم‌زمان زیرساخت را خراب می‌کنند.",
            en: "Terraform keeps a state file ('what I built'); it must live in shared locked storage, not on laptops — otherwise two people can corrupt infrastructure concurrently.",
          },
        },
      ],
      codeExample: {
        language: "hcl",
        code: `resource "aws_s3_bucket" "uploads" {
  bucket = "kaavosh-uploads-prod"
}

resource "aws_s3_bucket_versioning" "uploads" {
  bucket = aws_s3_bucket.uploads.id
  versioning_configuration { status = "Enabled" }
}
# terraform plan  → review the diff
# terraform apply → make it so (idempotent)`,
        caption: {
          fa: "زیرساخت مثل کد: پلن، بازبینی، اعمال",
          en: "Infra as code: plan, review, apply",
        },
      },
      followUps: [
        { fa: "drift چیست و چطور کشف می‌شود؟", en: "What is configuration drift and how do you detect it?" },
        { fa: "چرا secretها را داخل کد IaC نمی‌گذارید؟", en: "Why never put secrets inside IaC code?" },
      ],
      visual: "none",
    },
    {
      id: "observability-logs-metrics-traces",
      question: {
        fa: "سه ستون رصد (observability) چیست و هرکدام کِی به کار می‌آید؟",
        en: "What are the three pillars of observability and when does each help?",
      },
      difficulty: "mid",
      tags: ["observability", "monitoring", "logging"],
      quickAnswer: {
        fa: "متریک‌ها پاسخ «چی خراب است؟» را سریع می‌دهند (نمودار نرخ خطا، تاخیر). لاگ‌ها پاسخ «چرا خراب شده؟» را می‌دهند (رویدادهای متن‌دار). تریس‌ها پاسخ «کجا خراب شده؟» در سیستم چندسرویسی را می‌دهند (مسیر یک درخواست از سرویس به سرویس). سه‌تا با هم یک ابزار عیب‌یابی کامل می‌سازند.",
        en: "Metrics answer 'what broke?' fast (error-rate and latency charts). Logs answer 'why did it break?' (structured events). Traces answer 'where did it break?' in multi-service systems (one request's path across services). Together they form a complete debugging toolkit.",
      },
      steps: [
        {
          title: { fa: "متریک: نبض سیستم", en: "Metrics: the pulse" },
          detail: {
            fa: "اعداد در طول زمان: نرخ خطا، p95 تاخیر، مصرف CPU، طول صف. ارزان‌اند و برای داشبورد و هشدار عالی‌اند؛ اما جزئیات یک درخواست خاص را نمی‌گویند.",
            en: "Numbers over time: error rate, p95 latency, CPU, queue depth. Cheap and perfect for dashboards and alerts — but they don't tell a single request's story.",
          },
        },
        {
          title: { fa: "لاگ: دفتر رویدادها", en: "Logs: the event diary" },
          detail: {
            fa: "رویدادهای متن‌دار در لحظه‌ی وقوع. قانون ۲۰۲۶: لاگ ساختاریافته (JSON) با شناسه‌ی درخواست و سطح درست؛ لاگ‌های متن آزاد در مقیاس عملاً غیرقابل‌جست‌وجو هستند.",
            en: "Text events captured at the moment they happen. The 2026 rule: structured (JSON) logs with a request ID and the right level — free-form text logs are unsearchable at scale.",
          },
        },
        {
          title: { fa: "تریس: ردیابی در چند سرویس", en: "Traces: following one request across services" },
          detail: {
            fa: "در معماری میکروسرویس، یک درخواست از ۵ سرویس می‌گذرد. تریس با trace id مشترک، زمان هر مرحله را نشان می‌دهد: کدام سرویس ۹۰٪ تاخیر را ساخت.",
            en: "In microservices a request crosses 5 services. A shared trace id stitches the spans together and shows which stage consumed 90% of the latency.",
          },
        },
        {
          title: { fa: "گردش کار واقعی", en: "The real workflow" },
          detail: {
            fa: "هشدار متریک: «خطای checkout بالا رفته» → تریس: سه درخواست نمونه را دنبال کن → سرویس پرداخت کند است → لاگ همان سرویس با trace id: استثنای timeout به سرویس بانکی. سه ستون در سه دقیقه.",
            en: "Metric alert: 'checkout errors up' → trace: follow three samples → payment service is slow → its logs with the trace id: bank timeout exception. Three pillars, three minutes.",
          },
        },
        {
          title: { fa: "هشدار معنادار", en: "Meaningful alerts" },
          detail: {
            fa: "هشدار باید «قابل‌اقدام» باشد: اگر می‌توانید صبح ببینیدش، ticket بده نه page. هشدار بر اساس SLI/SLO (مثلاً p95 زیر هدف) بهتر از هشدار CPU است که هیچ‌کس نمی‌داند یعنی چه.",
            en: "Alerts must be actionable: if it can wait for morning, file a ticket — don't page. Alerting on SLI/SLO (p95 vs target) beats CPU alerts nobody knows how to read.",
          },
        },
      ],
      codeExample: {
        language: "javascript",
        code: `// structured log with correlation ids — searchable, greppable
logger.info("order processed", {
  requestId: req.id,
  traceId: span?.traceId,
  orderId: order.id,
  durationMs: Date.now() - start,
  status: "ok",
});
// one line in, one line out — no prose paragraphs in logs`,
        caption: {
          fa: "لاگ ساختاریافته با شناسه‌ی درخواست، کلید اتصال سه ستون",
          en: "Structured logs with request ids tie all three pillars together",
        },
      },
      followUps: [
        { fa: "sampling در تریس‌ها را چطور تنظیم می‌کنید؟", en: "How do you set trace sampling?" },
        { fa: "چه چیزی را هشدار می‌دهید و چه چیزی را داشبورد؟", en: "What do you alert on vs just dashboard?" },
      ],
      visual: "none",
    },
    {
      id: "zero-downtime-deploys",
      question: {
        fa: "انتشار بدون قطعی (zero-downtime) چطور انجام می‌شود؟",
        en: "How do you deploy with zero downtime?",
      },
      difficulty: "senior",
      tags: ["deployment", "rollback", "high-availability"],
      quickAnswer: {
        fa: "اصل کلی: نسخه‌ی جدید را کنار نسخه‌ی قدیمی بالا بیاورید، سلامت‌سنجی کنید، بعد ترافیک را قدم‌به‌قدم جابه‌جا کنید. دو الگوی رایج: rolling (یکی‌یکی جایگزینی در کوبرنتیز) و blue-green (دو محیط کامل و سوییچ یک‌مرحله‌ای) + مهاجرت دیتابیس سازگار با دو نسخه.",
        en: "The principle: bring the new version up beside the old, health-check it, then shift traffic gradually. Two common patterns: rolling (replace pods one by one in Kubernetes) and blue-green (two full environments, one-way switch) — plus database migrations that stay compatible with both versions.",
      },
      steps: [
        {
          title: { fa: "چرا دیپلوی ساده قطع می‌کند", en: "Why naive deploys cut service" },
          detail: {
            fa: "stop-start ساده یعنی بین خاموشی نسخه‌ی قدیم و بالاآمدن جدید، درخواست‌ها ریخته می‌شوند؛ کاربرها خطای 502 می‌بینند. با انتشار مکرر، این دیگر قابل‌تحمل نیست.",
            en: "Stop-start deployment means requests dropped between the old version dying and the new one being ready — users see 502s. Unacceptable when you deploy often.",
          },
        },
        {
          title: { fa: "rolling: جابه‌جایی نرم در کلاستر", en: "Rolling: soft swap in the cluster" },
          detail: {
            fa: "در کوبرنتیز، pod جدید کنار قدیمی بالا می‌آید، readiness probe سلامتش را تایید می‌کند، از Service ترافیک می‌گیرد و pod قدیمی حذف می‌شود؛ همیشه ظرفیت زنده وجود دارد.",
            en: "In Kubernetes a new pod starts beside the old, its readiness probe approves it, traffic shifts from the Service, and the old pod retires — live capacity never hits zero.",
          },
        },
        {
          title: { fa: "blue-green: سوییچ بی‌مرحله", en: "Blue-green: a clean switch" },
          detail: {
            fa: "دو محیط کامل: blue (فعلی) و green (جدید). green را کامل تست می‌کنید و بعد با یک تغییر در لودبالانسر کل ترافیک یک‌جا می‌رود؛ rollback هم یک سوییچ به عقب است — سریع ولی دو برابر منابع در لحظه‌ی انتشار.",
            en: "Two full environments: blue (current) and green (new). Test green fully, then flip the load balancer all at once; rollback is flipping back — fast, but momentarily double the resources.",
          },
        },
        {
          title: { fa: "مهاجرت دیتابیس سازگار", en: "Compatible DB migrations" },
          detail: {
            fa: "سخت‌ترین بخش: هنگام انتشار، نسخه‌ی قدیم و جدید هم‌زمان زنده‌اند. پس مهاجرت‌ها باید expand/migrate/contract باشند: اول ستون را اضافه کنید (سازگار)، داده را پر کنید، آخر حذف‌های ناسازگار را در انتشار بعدی بدهید.",
            en: "The hard part: old and new run simultaneously during rollout. Migrations must be expand/migrate/contract: add the column first (compatible), backfill, defer breaking removals to the next release.",
          },
        },
        {
          title: { fa: "سلامت‌سنجی و فرار سریع", en: "Health checks and fast escape" },
          detail: {
            fa: "هیچ الگویی بدون health check واقعی کار نمی‌کند: probe باید منطق تجاری مهم را ببیند نه فقط اینکه پورت باز است. و rollback باید همان‌قدر خودکار و تمرین‌شده باشد که deploy است.",
            en: "No pattern works without real health checks: the probe must cover critical business logic, not just an open port. And rollback must be as automated and rehearsed as deploy.",
          },
        },
      ],
      codeExample: {
        language: "yaml",
        code: `strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1          # one extra pod during rollout
    maxUnavailable: 0    # never drop below full capacity
# + a real readiness probe → traffic only to healthy new pods`,
        caption: {
          fa: "با maxUnavailable=0 ظرفیت هیچ‌وقت صفر نمی‌شود",
          en: "maxUnavailable=0 keeps live capacity above zero at all times",
        },
      },
      followUps: [
        { fa: "canary release چه فرقی با blue-green دارد؟", en: "How does a canary release differ from blue-green?" },
        { fa: "feature flags کجا به انتشار کمک می‌کنند؟", en: "Where do feature flags help deploys?" },
      ],
      visual: "ci-cd-pipeline",
    },
  ],
};
