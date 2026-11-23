import type { GlossaryCategory } from "../schema";

/** DATA FILE — Glossary categories. Consumed by: /glossary page filter bar + category pills. */
export const glossaryCategories: GlossaryCategory[] = [
  {
    id: "fundamentals",
    icon: "code-2",
    accent: "amber",
    title: { fa: "مفاهیم پایه", en: "Fundamentals" },
  },
  {
    id: "frontend",
    icon: "layout-template",
    accent: "cyan",
    title: { fa: "فرانت‌اند", en: "Frontend" },
  },
  {
    id: "backend",
    icon: "server",
    accent: "indigo",
    title: { fa: "بک‌اند", en: "Backend" },
  },
  {
    id: "database",
    icon: "database",
    accent: "emerald",
    title: { fa: "پایگاه‌داده", en: "Database" },
  },
  {
    id: "devops",
    icon: "cloud",
    accent: "sky",
    title: { fa: "دواپس", en: "DevOps" },
  },
  {
    id: "security",
    icon: "shield",
    accent: "rose",
    title: { fa: "امنیت", en: "Security" },
  },
  {
    id: "ai",
    icon: "brain-circuit",
    accent: "violet",
    title: { fa: "هوش مصنوعی", en: "AI & ML" },
  },
  {
    id: "networking",
    icon: "globe",
    accent: "cyan",
    title: { fa: "شبکه و وب", en: "Networking" },
  },
  {
    id: "mobile",
    icon: "smartphone",
    accent: "lime",
    title: { fa: "موبایل", en: "Mobile" },
  },
  {
    id: "algorithms",
    icon: "terminal",
    accent: "amber",
    title: { fa: "الگوریتم و ساختار داده", en: "Algorithms & Data Structures" },
  },
  {
    id: "system-design",
    icon: "route",
    accent: "sky",
    title: { fa: "طراحی سیستم", en: "System Design" },
  },
  {
    id: "behavioral",
    icon: "messages-square",
    accent: "indigo",
    title: { fa: "فرهنگ مهندسی و رفتاری", en: "Engineering & Behavioral" },
  },
];
