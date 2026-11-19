# کاوش / Kaavosh 🧭

> **مسیرهای یادگیری برنامه‌نویسی، از صفر تا استخدام — دوزبانه (فارسی/انگلیسی)، با انیمیشن‌های اسکرول و توضیح تصویریِ کدنویسی‌شده**
>
> Programming learning paths, from zero to hired — bilingual (FA/EN), with scroll animations and code-drawn visual explainers.

---

## ⚡ شروع سریع (Quick Start)

```bash
cd kaavosh
npm install
npm run dev
```

سپس در مرورگر باز کنید: **http://localhost:3000** → به‌صورت خودکار به `/fa` ریدایرکت می‌شود.

| اسکریپت | کار |
| --- | --- |
| `npm run dev` | سرور توسعه (Turbopack) |
| `npm run build` | بیلد پروداکشن |
| `npm run start` | اجرای نسخه بیلدشده |
| `npm run lint` | بررسی ESLint |

---

## 🧱 تکنولوژی‌ها

| ابزار | نقش |
| --- | --- |
| **Next.js 16** (App Router, `cacheComponents`) | فریم‌ورک |
| **TypeScript** | تایپ‌سیفتی کامل |
| **Tailwind CSS 4** | استایل (توکن‌های طراحی در `globals.css`) |
| **motion (Framer Motion)** | انیمیشن‌های اسکرول، whileInView، useScroll |
| **next-intl** | دوزبانه fa/en با مسیر `/fa` و `/en` و RTL خودکار |
| **Vazirmatn + Inter** | فونت فارسی و انگلیسی (next/font) |
| **lucide-react** | آیکون‌ها |

بدون هیچ سرویس بیرونی، دیتابیس یا API — کل سایت استاتیک از فایل‌های دیتا بیلد می‌شود.

---

## 🗂 معماری پوشه‌ها

```text
src/
├── app/
│   ├── [locale]/                    ← همه صفحات زیر این مسیر (fa/en)
│   │   ├── layout.tsx               ← RTL/LTR، فونت‌ها، هدر/فوتر، ScrollProgress
│   │   ├── page.tsx                 ← صفحه لندینگ (اسکرول انیمیشن هر بخش)
│   │   ├── paths/page.tsx           ← گرید همه مسیرهای یادگیری
│   │   ├── paths/[slug]/page.tsx    ← نقشه راه یک مسیر (خط کشیده‌شونده با اسکرول)
│   │   ├── interview/page.tsx       ← هاب سوال‌های مصاحبه
│   │   ├── interview/[field]/page.tsx ← سوال‌های یک حوزه (آکاردئون + فیلتر سطح)
│   │   ├── glossary/page.tsx        ← واژه‌نامه (جست‌وجو + فیلتر دسته)
│   │   └── not-found.tsx            ← ۴۰۴
│   └── globals.css                  ← سیستم طراحی (توکن‌ها، glass، marquee، …)
├── data/                            ← ⭐ همه محتوا اینجاست (فقط همین‌ها را ویرایش کنید)
│   ├── schema.ts                    ← تایپ‌های مرجع — قرارداد همه فایل‌های دیتا
│   ├── site.ts                      ← نام و معرفی سایت (هدر/فوتر/متا)
│   ├── faq.ts                       ← سوال‌های پرتکرار لندینگ
│   ├── explainers.ts                ← متادیتای ۱۲ انیمیشن مفهومی
│   ├── paths/                       ← ۶ مسیر یادگیری + index.ts
│   ├── interview/                   ← ۹ حوزه مصاحبه + index.ts
│   ├── interview-bank/              ← بانک ۷۲۳ سوال وارداتی از ریپوها (JSON، تولیدشده با scripts/build-interview-bank.mjs)
│   └── glossary/                    ← ۴۲ واژه + دسته‌ها + index.ts
├── components/
│   ├── layout/                      ← Header, Footer, LocaleSwitcher, LogoMark
│   ├── landing/                     ← بخش‌های صفحه اصلی (Hero, HowItWorks, …)
│   ├── paths/                       ← RoadmapTimeline (نقشه راه متحرک)
│   ├── interview/                   ← QuestionCard, InterviewList
│   ├── glossary/                    ← GlossaryExplorer
│   ├── explainers/                  ← ⭐ ۱۲ انیمیشن SVG + registry
│   ├── motion/                      ← Reveal, Stagger, TiltCard, NumberTicker, ScrollProgress
│   ├── ui/                          ← SectionHeading, CodeBlock, Badge, ResourceChip, ExplainerFrame
│   └── icons/registry.tsx           ← نگاشت اسم آیکون دیتا → آیکون lucide
├── i18n/                            ← routing, request, navigation (next-intl)
├── lib/                             ← theme.ts (رنگ‌ها), i18n-helpers.ts (pick و اعداد فارسی)
├── messages/                        ← fa.json / en.json (متن‌های UI)
└── middleware.ts                    ← ریدایرکت / به /fa
```

---

## 📊 راهنمای فایل‌های دیتا (DATA GUIDE)

**قانون طلایی:** محتوا فقط در `src/data/**` زندگی می‌کند؛ هیچ متنی داخل کامپوننت‌ها هاردکد نشده.

| فایل دیتا | محتوا | کجا نمایش داده می‌شود |
| --- | --- | --- |
| `data/schema.ts` | همه تایپ‌ها (`Localized`, `LearningPath`, `InterviewQuestion`, …) | مرجع همه فایل‌ها |
| `data/site.ts` | نام، شعار، توضیح سایت | هدر، فوتر، متادیتای صفحه |
| `data/faq.ts` | ۵ سوال پرتکرار | لندینگ → بخش FAQ |
| `data/explainers.ts` | عنوان/توضیح هر انیمیشن | کارت انیمیشن‌ها |
| `data/paths/*.ts` | ۶ مسیر × ۵ مرحله (topics, skills, resources, visual) | لندینگ → کارت‌های مسیر؛ `/paths`؛ `/paths/[slug]` (نقشه راه) |
| `data/paths/index.ts` | رجیستری مسیرها + `getPathBySlug` | generateStaticParams و صفحات |
| `data/interview/*.ts` | ۵ حوزه × ۶–۷ سوال (quickAnswer, steps, code, followUps, visual) | لندینگ (آمار)؛ `/interview`؛ `/interview/[field]` |
| `data/interview/index.ts` | رجیستری حوزه‌ها + `getFieldBySlug` | generateStaticParams و صفحات |
| `data/glossary/terms.ts` | ۴۲ واژه‌ی هسته + **ادغام همه‌ی فایل‌های `terms-more/`** (مجموع ۱۸۰ واژه در ۱۱ دسته) | `/glossary` + کارت‌های واژه‌ی سوال‌های مصاحبه |
| `data/glossary/terms-more/*.ts` | واژه‌های تکمیلی هر دسته (fundamentals, frontend, backend, database, devops, security, networking, mobile, ai) | از طریق terms.ts → `/glossary` |
| `data/glossary/categories.ts` | ۱۱ دسته واژه‌نامه | فیلتر بالای `/glossary` |
| `messages/fa.json` + `en.json` | متن‌های UI (دکمه‌ها، عنوان بخش‌ها، …) | همه کامپوننت‌ها با `useTranslations` |

### چطور محتوا اضافه کنم؟

1. **مسیر جدید:** فایل تازه در `data/paths/` بسازید (کپی از `frontend.ts`)، در `data/paths/index.ts` ثبتش کنید — صفحه `/paths/[slug]` خودکار ساخته می‌شود.
2. **سوال جدید:** یک آبجکت به آرایه `questions` هر حوزه در `data/interview/*.ts` اضافه کنید — همین.
3. **واژه جدید:** فایل دسته‌اش در `data/glossary/terms-more/` را باز کنید و اضافه کنید (یا اگر واژه‌ی هسته است، به terms.ts)؛ شمارنده‌ها خودکار به‌روز می‌شوند.
4. **انیمیشن جدید:** یک `VisualKind` به `schema.ts` اضافه کنید، کامپوننت SVG بسازید، در `explainers/registry.tsx` رجیسترش کنید و متادیتای آن را در `explainers.ts` بنویسید.

> ⚠️ هر رشته‌ی قابل‌مشاهده باید `{ fa: "...", en: "..." }` باشد و در فارسی نیم‌فاصله (‌) رعایت شود.

---

## 🎬 درباره انیمیشن‌های مفهومی

به‌جای ویدیو یا عکس دانلودی، هر مفهوم سخت با **SVG + CSS + motion** همان‌جا در مرورگر کشیده می‌شود:

- بدون دانلود، بدون مصرف اینترنت، همیشه شارپ، بی‌نهایت بار قابل‌پخش.
- لیست کامل: سفر درخواست HTTP، حلقه رویداد، رندر ری‌اکت، DOM→پیکسل، گیت، کانتینر در برابر VM، توکن احراز هویت، JOIN، رمزنگاری، آموزش مدل ML، خط لوله CI/CD، چرخه حیات موبایل.
- همه در `src/components/explainers/` — با رجیستری `VisualKind → کامپوننت`.

همچنین همه انیمیشن‌ها به `prefers-reduced-motion` احترام می‌گذارند.

---

## ✍️ استایل محتوایی (قرارداد آموزشی)

مطابق سبک دانشنامه‌ی شما، همه محتواها همین زنجیره را دنبال می‌کنند:

1. **تعریف ساده** — اول مفهوم با کلمات روزمره
2. **تمثیل** — قیاس با زندگی واقعی (صف نانوایی، فهرست کتاب، جعبه‌ها…)
3. **اصطلاح تخصصی** — بعد از فهمیدن، اسم رسمی‌اش

در سوال‌های مصاحبه: اول **پاسخ ۳۰ ثانیه‌ای**، بعد **شکستن همان پاسخ به قدم‌های کوچک**، بعد **سوال‌های بعدی مصاحبه‌گر** و در آخر **کد نمونه**.

---

## 🌐 دوزبانه و RTL

- مسیرها: `/fa/...` و `/en/...` — ریشه به `/fa` ریدایرکت می‌شود.
- فونت: فارسی → Vazirmatn، انگلیسی → Inter (خودکار با `dir`).
- تمام فاصله‌ها با utility های منطقی Tailwind (`ps/pe/ms/me/start/end`) هستند، پس RTL خودکار درست است.
- اعداد در فارسی با `toLocaleNumber()` فارسی می‌شوند.

---

## 📄 مجوز محتوا

تمام متن‌ها اورجینال نوشته شده‌اند. لینک‌ها فقط به منابع معتبر (MDN، مستندات رسمی، roadmap.sh، freeCodeCamp، The Odin Project، OWASP و…) اشاره می‌کنند.
