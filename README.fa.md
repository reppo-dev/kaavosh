# کاوش / Kaavosh 🧭

[English](README.md) · **فارسی**

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

بدون هیچ سرویس بیرونی، دیتابیس یا API — کل سایت استاتیک از فایل‌های دیتا بیلد می‌شود.

---

## 📦 محتوا در یک نگاه

| بخش | تعداد | یادداشت |
| --- | --- | --- |
| مسیرهای یادگیری | **۶ مسیر** | فرانت‌اند، بک‌اند، DevOps و ابر، هوش مصنوعی/یادگیری ماشین، امنیت سایبری، موبایل |
| سوال‌های مصاحبه | **۱۱ حوزه × ۱٬۷۲۴ سوال** | وارداتی از ریپوهای متن‌باز با حفظ Attribution؛ ۱۰۰٪ دوزبانه (فارسی و انگلیسی) |
| پاسخ کامل فارسی | **۱٬۷۲۴ از ۱٬۷۲۴ (۱۰۰٪)** | هر ۱۱ حوزه به‌طور کامل به فارسی ترجمه شده‌اند |
| واژه‌نامه | **۵۴۰ واژه در ۱۲ دسته** | با جست‌وجو، فیلتر دسته و تمثیل روزمره |
| انیمیشن مفهومی | **۳۵ انیمیشن** | همه با SVG + CSS + motion در مرورگر کشیده می‌شوند |

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
│   ├── explainers.ts                ← متادیتای انیمیشن‌های مفهومی
│   ├── paths/                       ← ۶ مسیر یادگیری + index.ts
│   ├── interview/                   ← حوزه‌های مصاحبه + index.ts
│   ├── interview-bank/              ← بانک ۱٬۷۲۴ سوال وارداتی (JSON) + fa-bank/ (ترجمه فارسی)
│   └── glossary/                    ← ۳۸۳ واژه در ۱۱ دسته + index.ts
├── components/
│   ├── layout/                      ← Header, Footer, LocaleSwitcher, LogoMark
│   ├── landing/                     ← بخش‌های صفحه اصلی (Hero, HowItWorks, …)
│   ├── paths/                       ← RoadmapTimeline (نقشه راه متحرک)
│   ├── interview/                   ← QuestionCard, InterviewList
│   ├── glossary/                    ← GlossaryExplorer
│   ├── explainers/                  ← ⭐ ۳۴ انیمیشن SVG + registry
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
| `data/faq.ts` | سوال‌های پرتکرار | لندینگ → بخش FAQ |
| `data/explainers.ts` | عنوان/توضیح هر انیمیشن | کارت انیمیشن‌ها |
| `data/paths/*.ts` | ۶ مسیر × ۵ مرحله (topics, skills, resources, visual) | لندینگ → کارت‌های مسیر؛ `/paths`؛ `/paths/[slug]` |
| `data/interview/*.ts` | حوزه‌های دستی‌نویسی‌شده (پاسخ ۳۰ ثانیه‌ای، قدم‌ها، کد، followUps) | `/interview`؛ `/interview/[field]` |
| `data/interview/index.ts` | رجیستری ۱۱ حوزه + اعمال ترجمه‌های `fa-bank/` | generateStaticParams و صفحات |
| `data/interview-bank/*.json` | بانک ۱٬۷۲۴ سوال (EN اورجینال، با منبع و سطح) | از طریق `interview/index.ts` |
| `data/interview-bank/fa-bank/*.json` | ترجمه فارسی هر سوال: `q` (پرسش)، `qa` (پاسخ ۳۰ ثانیه‌ای)، `am` (پاسخ کامل) | روی کارت‌های سوال اعمال می‌شود |
| `data/glossary/terms.ts` | هسته واژه‌نامه + **ادغام همه فایل‌های `terms-more/`** (۳۸۳ واژه در ۱۱ دسته) | `/glossary` + کارت‌های واژه سوال‌ها |
| `data/glossary/categories.ts` | ۱۱ دسته واژه‌نامه | فیلتر بالای `/glossary` |
| `messages/fa.json` + `en.json` | متن‌های UI (دکمه‌ها، عنوان بخش‌ها، …) | همه کامپوننت‌ها با `useTranslations` |

### چطور محتوا اضافه کنم؟

1. **مسیر جدید:** فایل تازه در `data/paths/` بسازید (کپی از `frontend.ts`)، در `data/paths/index.ts` ثبتش کنید — صفحه `/paths/[slug]` خودکار ساخته می‌شود.
2. **سوال جدید:** یک آبجکت به آرایه `questions` هر حوزه در `data/interview/*.ts` اضافه کنید — همین.
3. **واژه جدید:** فایل دسته‌اش در `data/glossary/terms-more/` را باز کنید و اضافه کنید؛ شمارنده‌ها خودکار به‌روز می‌شوند.
4. **انیمیشن جدید:** یک `VisualKind` به `schema.ts` اضافه کنید، کامپوننت SVG بسازید، در `explainers/registry.tsx` رجیسترش کنید و متادیتای آن را در `explainers.ts` بنویسید.

> ⚠️ هر رشته‌ی قابل‌مشاهده باید `{ fa: "...", en: "..." }` باشد و در فارسی نیم‌فاصله (‌) رعایت شود.

---

## 🌐 دوزبانه و RTL

- مسیرها: `/fa/...` و `/en/...` — ریشه به `/fa` ریدایرکت می‌شود.
- فونت: فارسی → Vazirmatn، انگلیسی → Inter (خودکار با `dir`).
- تمام فاصله‌ها با utility های منطقی Tailwind (`ps/pe/ms/me/start/end`) هستند، پس RTL خودکار درست است.
- اعداد در فارسی با `toLocaleNumber()` فارسی می‌شوند.
- **پاسخ کامل هر سوال:** اگر ترجمه فارسی (`am`) موجود باشد با جهت RTL و نشان **FA** نمایش داده می‌شود؛ وگرنه متن انگلیسی با جهت LTR و نشان **EN**.

---

## 🔄 خط تولید ترجمه فارسی (fa pipeline)

بانک سوال‌ها از ریپوهای انگلیسی می‌آید؛ ترجمه فارسی با این اسکریپت‌ها مرحله‌به‌مرحله اضافه می‌شود:

```bash
# ۱) dump پاسخ‌های کامل بدون ترجمهِ یک حوزه
node scripts/fa-dump-body.mjs <slug>

# ۲) تکه‌تکه کردن برای ترجمه (هر تکه ~۱۲هزار کاراکتر)
node scripts/fa-chunk.mjs <slug>

# ۳) بعد از ترجمه هر تکه، ادغام به فایل مرجع fa-bank/<slug>.json
node scripts/fa-merge.mjs <slug> scripts/_fa-todo/<batch>.json [...]
```

- فایل‌های کاری `scripts/_fa-todo/` موقتی‌اند و در گیت نادیده گرفته می‌شوند؛ خروجی نهایی فقط `fa-bank/*.json` است.
- فایل `fa-bank/<slug>.json` آرایه‌ای از `{ en, q?, qa?, am? }` است: `en` کلید یکتا (عنوان انگلیسی سوال)، `q` پرسش فارسی، `qa` پاسخ ۳۰ ثانیه‌ای، `am` پاسخ کامل مارک‌داون.
- بازسازی بانک از ریپوهای منبع: `node scripts/build-interview-bank.mjs`

**وضعیت فعلی:** پرسش فارسی، پاسخ‌های ۳۰ ثانیه‌ای و پاسخ‌های کامل مارک‌داون برای هر ۱٬۷۲۴ سوال در تمام ۱۱ حوزه **۱۰۰٪ کامل** است.

---

## 🎬 درباره انیمیشن‌های مفهومی

به‌جای ویدیو یا عکس دانلودی، هر مفهوم سخت با **SVG + CSS + motion** همان‌جا در مرورگر کشیده می‌شود:

- بدون دانلود، بدون مصرف اینترنت، همیشه شارپ، بی‌نهایت بار قابل‌پخش.
- نمونه‌ها: سفر درخواست HTTP، حلقه رویداد، رندر و تطبیق ری‌اکت، DOM→پیکسل، گیت، کانتینر در برابر VM، توکن احراز هویت، JOIN، رمزنگاری، آموزش مدل ML، خط لوله CI/CD، چرخه حیات موبایل، مرتب‌سازی، پشته/صف، جدول هش، لیست پیوندی، پیمایش گراف، حافظه‌سازی (memoization)، Trie و… (مجموعاً ۳۵ انیمیشن).
- همه در `src/components/explainers/` — با رجیستری `VisualKind → کامپوننت`.
- همه انیمیشن‌ها به `prefers-reduced-motion` احترام می‌گذارند.

---

## ✍️ استایل محتوایی (قرارداد آموزشی)

همه محتواها همین زنجیره را دنبال می‌کنند:

1. **تعریف ساده** — اول مفهوم با کلمات روزمره
2. **تمثیل** — قیاس با زندگی واقعی (صف نانوایی، فهرست کتاب، جعبه‌ها…)
3. **اصطلاح تخصصی** — بعد از فهمیدن، اسم رسمی‌اش

در سوال‌های مصاحبه: اول **پاسخ ۳۰ ثانیه‌ای**، بعد **شکستن همان پاسخ به قدم‌های کوچک**، بعد **سوال‌های بعدی مصاحبه‌گر** و در آخر **کد نمونه**.

---

## 📄 مجوزها و حقوق منابع (Licensing & Attribution)

مجوزهای این مخزن به‌صورت شفاف در سه لایه تفکیک شده‌اند:

- **کد برنامه (`src/app`, `src/components`, `src/lib`, `src/i18n`, `scripts`):** تحت مجوز **MIT** — فایل [`LICENSE`](./LICENSE) را ببینید.
- **محتوای تألیفی و ترجمه‌های فارسی (`src/data/paths`, `src/data/glossary`, `src/data/deep-dives.ts`, `src/data/faq.ts`, `src/data/interview-bank/fa-bank`):** تحت مجوز **CC BY 4.0** — فایل [`LICENSE-CONTENT.md`](./LICENSE-CONTENT.md) را ببینید.
- **محتوای واردشده از پروژه‌های متن‌باز (`src/data/interview-bank/*.json`):** با حفظ مجوز اصلی و ذکر منبع (Attribution) برای تک‌تک سوالات — فایل [`THIRD_PARTY_LICENSES.md`](./THIRD_PARTY_LICENSES.md) را ببینید.

