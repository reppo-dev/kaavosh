import type { SiteConfig } from "./schema";

/**
 * DATA FILE — Site identity. Consumed by: header, footer, page metadata.
 */
export const site: SiteConfig = {
  name: { fa: "کاوش", en: "Kaavosh" },
  tagline: {
    fa: "مسیرهای یادگیری برنامه‌نویسی، از صفر تا استخدام",
    en: "Programming learning paths, from zero to hired",
  },
  description: {
    fa: "پلتفرم دوزبانه یادگیری برنامه‌نویسی با مسیرهای مرحله‌به‌مرحله، سوال‌های مصاحبه با توضیح قدم‌به‌قدم و انیمیشن‌های مفهومی ساخته‌شده با کد.",
    en: "A bilingual platform for learning programming: stage-by-stage paths, interview questions broken into beginner-friendly steps, and concept animations drawn with code.",
  },
};
