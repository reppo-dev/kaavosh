import type { LearningPath } from "../schema";

/**
 * DATA FILE — Learning Path. Consumed by: /paths grid page,
 * /paths/[slug] roadmap page, landing page paths preview.
 */
export const devopsCloudPath: LearningPath = {
  slug: "devops-cloud",
  icon: "cloud",
  accent: "sky",
  title: { fa: "دواپس و ابر", en: "DevOps & Cloud" },
  tagline: {
    fa: "کد را از لپ‌تاپ تا میلیون‌ها کاربر برسانید",
    en: "Carry code from a laptop to millions of users",
  },
  description: {
    fa: "دواپس پل بین برنامه‌نویسی و عملیات است: خودکارسازی هر چیزی که بین «کد نوشتم» تا «روی سرور کار می‌کند» اتفاق می‌افتد. در این مسیر با لینوکس شروع می‌کنید، کانتینرها را می‌فهمید، خط لوله CI/CD می‌سازید و در نهایت روی ابر مقیاس‌پذیر مستقر می‌شوید.",
    en: "DevOps is the bridge between development and operations: automating everything between 'I wrote code' and 'it runs on a server'. You start with Linux, understand containers, build CI/CD pipelines, and finally deploy resiliently on the cloud.",
  },
  level: "intermediate",
  totalDuration: { fa: "حدود ۷ تا ۱۱ ماه", en: "About 7–11 months" },
  roles: [
    { fa: "مهندس دواپس جونیور", en: "Junior DevOps Engineer" },
    { fa: "مهندس Site Reliability", en: "Site Reliability Engineer (SRE)" },
    { fa: "مهندس ابر", en: "Cloud Engineer" },
    { fa: "مهندس اتوماسیون", en: "Automation Engineer" },
  ],
  stages: [
    {
      id: "linux-networking",
      title: { fa: "لینوکس، ترمینال و شبکه", en: "Linux, terminal & networking" },
      duration: { fa: "۴ تا ۶ هفته", en: "4–6 weeks" },
      summary: {
        fa: "۸۰ درصد سرورهای دنیا لینوکس‌اند و هیچ دواپسی بدون ترمینال کار نمی‌کند. اینجا با فایل‌ها، مجوزها، پروسس‌ها و اینکه داده واقعاً چطور بین دو کامپیوتر می‌رود آشنا می‌شوید.",
        en: "Roughly 80% of the world's servers run Linux, and no DevOps engineer works without a terminal. You learn files, permissions, processes — and how data actually travels between two computers.",
      },
      topics: ["Linux", "Bash", "SSH", "DNS", "TCP/IP", "Permissions"],
      skills: [
        {
          fa: "هر روزتان با ترمینال بگذرد، نه با موس",
          en: "Live in the terminal instead of the mouse",
        },
        {
          fa: "با SSH به یک سرور وصل شوید و کار کنید",
          en: "Connect to and work on a server over SSH",
        },
        {
          fa: "مسیر یک بسته از DNS تا TCP را توضیح دهید",
          en: "Trace a packet from DNS down to TCP",
        },
      ],
      resources: [
        {
          title: { fa: "roadmap.sh دواپس", en: "roadmap.sh DevOps" },
          url: "https://roadmap.sh/devops",
          type: "roadmap",
        },
        {
          title: { fa: "دوره رایگان Linux Journey", en: "Linux Journey (free course)" },
          url: "https://linuxjourney.com",
          type: "interactive",
        },
        {
          title: { fa: "MDN — کلیات شبکه وب", en: "MDN — Web networking overview" },
          url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
          type: "docs",
        },
      ],
      visual: "none",
    },
    {
      id: "git-scripting",
      title: { fa: "گیت و اسکریپت‌نویسی", en: "Git & scripting" },
      duration: { fa: "۳ تا ۴ هفته", en: "3–4 weeks" },
      summary: {
        fa: "گیت قلب همکاری و اتوماسیون است: هر خط لوله از یک کامیت شروع می‌شود. اسکریپت‌های بش هم ابزار دست‌تان را چند برابر می‌کنند — کاری که یک روز طول می‌کشید، در یک دستور.",
        en: "Git is the heart of collaboration and automation: every pipeline starts with a commit. Bash scripts multiply your hands — an hour-long chore becomes one command.",
      },
      topics: ["Git", "GitHub Actions", "Bash", "YAML"],
      skills: [
        {
          fa: "گردش کار گیت تیمی را مدیریت کنید",
          en: "Manage a team Git workflow",
        },
        {
          fa: "یک اسکریپت بکاپ خودکار بنویسید",
          en: "Write an automated backup script",
        },
        {
          fa: "YAML را برای ابزارهای ابری تمیز بخوانید و بنویسید",
          en: "Read and write clean YAML for cloud tooling",
        },
      ],
      resources: [
        {
          title: { fa: "کتاب رسمی Git", en: "Pro Git book" },
          url: "https://git-scm.com/book/en/v2",
          type: "book",
        },
        {
          title: { fa: "مستندات GitHub Actions", en: "GitHub Actions documentation" },
          url: "https://docs.github.com/en/actions",
          type: "docs",
        },
        {
          title: { fa: "The Odin Project — Git", en: "The Odin Project — Git basics" },
          url: "https://www.theodinproject.com/lessons/foundations-git-basics",
          type: "course",
        },
      ],
      visual: "git-flow",
    },
    {
      id: "docker-containers",
      title: { fa: "کانتینرها با داکر", en: "Containers with Docker" },
      duration: { fa: "۴ تا ۵ هفته", en: "4–5 weeks" },
      summary: {
        fa: "«روی سیستم من کار می‌کرد» را همه شنیده‌اند. کانتینر اپ را با همه‌ی وابستگی‌هایش در یک بسته‌ی یکسان می‌گذارد که هر جا باز شود، همان‌طور کار می‌کند.",
        en: "'It worked on my machine' — everyone has heard it. A container packs the app with all its dependencies into one identical bundle that runs the same anywhere.",
      },
      topics: ["Docker", "Dockerfile", "Images", "Volumes", "Compose"],
      skills: [
        {
          fa: "Dockerfile برای اپ خودتان بنویسید",
          en: "Write a Dockerfile for your own app",
        },
        {
          fa: "با Compose چند سرویس را کنار هم بالا بیاورید",
          en: "Run multi-service stacks with Compose",
        },
        {
          fa: "تفاوت ماشین مجازی و کانتینر را توضیح دهید",
          en: "Explain VM vs container precisely",
        },
      ],
      resources: [
        {
          title: { fa: "داکر — شروع به کار", en: "Docker — Get started" },
          url: "https://docs.docker.com/get-started/",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh دواپس", en: "roadmap.sh DevOps" },
          url: "https://roadmap.sh/devops",
          type: "roadmap",
        },
        {
          title: { fa: "Dockerfile best practices (رسمی)", en: "Dockerfile best practices (official)" },
          url: "https://docs.docker.com/build/building/best-practices/",
          type: "docs",
        },
      ],
      visual: "docker-containers",
    },
    {
      id: "cicd-pipelines",
      title: { fa: "خط لوله CI/CD", en: "CI/CD pipelines" },
      duration: { fa: "۳ تا ۴ هفته", en: "3–4 weeks" },
      summary: {
        fa: "CI یعنی هر کامیت خودکار بیلد و تست می‌شود؛ CD یعنی نتیجه‌ی سالم خودکار منتشر می‌شود. نتیجه: انتشار دیگر ترسناک نیست، یک روال روزمره است.",
        en: "CI means every commit is built and tested automatically; CD means a healthy result ships automatically. Deployments stop being scary events and become a routine.",
      },
      topics: ["CI/CD", "GitHub Actions", "Testing", "Artifacts", "Rollbacks"],
      skills: [
        {
          fa: "خط لوله‌ای بسازید که تست و انتشار را خودکار کند",
          en: "Build a pipeline that tests and deploys automatically",
        },
        {
          fa: "برای خرابی‌ها rollback امن طراحی کنید",
          en: "Design safe rollbacks for failures",
        },
        {
          fa: "استراتژی انتشار بدون توقف را بشناسید",
          en: "Know zero-downtime release strategies",
        },
      ],
      resources: [
        {
          title: { fa: "مستندات GitHub Actions", en: "GitHub Actions documentation" },
          url: "https://docs.github.com/en/actions",
          type: "docs",
        },
        {
          title: { fa: "Full Stack Open — CI/CD", en: "Full Stack Open — CI/CD" },
          url: "https://fullstackopen.com/en/part11",
          type: "course",
        },
        {
          title: { fa: "GitLab — شروع CI/CD", en: "GitLab — CI/CD quick start" },
          url: "https://docs.gitlab.com/ci/quick_start/",
          type: "docs",
        },
      ],
      visual: "ci-cd-pipeline",
    },
    {
      id: "cloud-k8s-observability",
      title: { fa: "ابر، کوبرنتیز و رصد", en: "Cloud, Kubernetes & observability" },
      duration: { fa: "۶ تا ۸ هفته", en: "6–8 weeks" },
      summary: {
        fa: "ابر یعنی اجاره‌ی دیتاسنتر با کلیکِ دکمه. کوبرنتیز کانتینرها را در مقیاس مدیریت می‌کند و رصد یعنی قبل از کاربرها بفهمید چی خراب شده — با لاگ، متریک و تریس.",
        en: "The cloud is renting a datacenter with a button. Kubernetes manages containers at scale, and observability means knowing something broke before users do — via logs, metrics and traces.",
      },
      topics: ["Kubernetes", "AWS/GCP", "Monitoring", "Logging", "IaC", "Terraform"],
      skills: [
        {
          fa: "اپ کانتینری را روی کوبرنتیز مستقر کنید",
          en: "Deploy a containerized app on Kubernetes",
        },
        {
          fa: "داشبورد متریک و هشدار بسازید",
          en: "Set up metrics dashboards and alerts",
        },
        {
          fa: "زیرساخت را با Terraform به‌صورت کد تعریف کنید",
          en: "Define infrastructure as code with Terraform",
        },
      ],
      resources: [
        {
          title: { fa: "آموزش رسمی کوبرنتیز", en: "Kubernetes official tutorials" },
          url: "https://kubernetes.io/docs/tutorials/",
          type: "docs",
        },
        {
          title: { fa: "مستندات Terraform", en: "Terraform documentation" },
          url: "https://developer.hashicorp.com/terraform/docs",
          type: "docs",
        },
        {
          title: { fa: "roadmap.sh — AWS", en: "roadmap.sh — AWS" },
          url: "https://roadmap.sh/aws",
          type: "roadmap",
        },
      ],
      visual: "ci-cd-pipeline",
    },
  ],
};
