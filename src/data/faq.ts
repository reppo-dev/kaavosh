import type { Localized } from "./schema";

/**
 * DATA FILE — Landing FAQ. Consumed by: landing page FAQ section (accordion).
 */
export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}

export const faqItems: FaqItem[] = [
  {
    id: "who-is-it-for",
    question: {
      fa: "این سایت برای چه کسی است؟",
      en: "Who is this site for?",
    },
    answer: {
      fa: "برای کسی که می‌خواهد از صفرِ مطلق وارد دنیای برنامه‌نویسی شود یا برای مصاحبه استخدامی آماده شود. هیچ دانش قبلی فرض نشده؛ هر مفهوم اول با زبان ساده و تمثیل توضیح داده می‌شود و بعد اصطلاح تخصصی‌اش معرفی می‌شود.",
      en: "For anyone entering programming from absolute zero, or preparing for job interviews. No prior knowledge is assumed: every concept is first explained in plain language with an everyday analogy, and only then given its technical name.",
    },
  },
  {
    id: "why-bilingual",
    question: {
      fa: "چرا دوزبانه است؟",
      en: "Why is it bilingual?",
    },
    answer: {
      fa: "چون یادگیری به زبان مادری عمیق‌تر می‌شود، اما مصاحبه و تیم‌ها به انگلیسی صحبت می‌کنند. هر متن دو نسخه دارد: فارسی برای فهمیدن، انگلیسی برای حرفه‌ای شدن. با دکمه بالای صفحه می‌توانید جابه‌جا شوید.",
      en: "Because understanding goes deeper in your mother tongue, but interviews and teams run in English. Every text exists in both languages: Persian to understand, English to go professional. Switch anytime from the button in the header.",
    },
  },
  {
    id: "animations-offline",
    question: {
      fa: "انیمیشن‌ها ویدیو هستند؟ نیاز به دانلود دارند؟",
      en: "Are the animations videos? Do they need downloading?",
    },
    answer: {
      fa: "نه — تمام انیمیشن‌ها با کد (SVG و CSS) همان‌جا در مرورگر شما کشیده می‌شوند. نه فایلی دانلود می‌شود، نه اینترنت زیادی مصرف می‌شود و نه کیفیتشان پایین می‌آید. مثل یک ویدیو بی‌نهایت بار پخش می‌شوند و همیشه شارپ می‌مانند.",
      en: "No — every animation is drawn live in your browser with code (SVG + CSS). Nothing to download, almost no data used, and they never lose quality. They replay infinitely like a video and stay crisp on any screen.",
    },
  },
  {
    id: "interview-format",
    question: {
      fa: "سوال‌های مصاحبه چطور نوشته شده‌اند؟",
      en: "How are the interview questions structured?",
    },
    answer: {
      fa: "هر سوال چهار بخش دارد: پاسخ ۳۰ ثانیه‌ای که همان‌جا در جلسه می‌گویید؛ شکستن همان پاسخ به قدم‌های کوچک برای اینکه واقعاً بفهمید؛ سوال‌های بعدی که مصاحبه‌گر معمولاً می‌پرسد؛ و یک نمونه کد که حرفتان را ثابت می‌کند.",
      en: "Every question has four parts: the 30-second answer you say in the room; the same answer broken into small steps so you truly understand it; the follow-ups interviewers usually ask next; and a code sample that proves what you said.",
    },
  },
  {
    id: "resources",
    question: {
      fa: "منابع از کجا می‌آیند؟",
      en: "Where do the resources come from?",
    },
    answer: {
      fa: "فقط منابع معتبر و پایدار: MDN، مستندات رسمی React و Next.js و Node، roadmap.sh، The Odin Project و freeCodeCamp. متن‌های این سایت همگی اورجینال نوشته شده‌اند و لینک‌ها فقط برای مطالعه عمیق‌تر هستند.",
      en: "Only reputable, stable sources: MDN, the official React/Next.js/Node docs, roadmap.sh, The Odin Project and freeCodeCamp. All text on this site is original — links are just for going deeper.",
    },
  },
];
