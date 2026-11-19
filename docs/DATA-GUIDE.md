# راهنمای فایل‌های دیتا / DATA GUIDE

این سند نقشه‌ی کامل لایه‌ی داده است: **هر فایل دیتا چه چیزی دارد، کدام صفحه مصرفش می‌کند و چطور باید گسترشش داد.**

This document maps the entire data layer: what each data file holds, which page consumes it, and how to extend it.

---

## قرارداد کلی (Conventions)

| قانون | توضیح |
| --- | --- |
| دوزبانه | هر رشته‌ی قابل‌مشاهده باید `{ fa: "…", en: "…" }` باشد (تایپ `Localized`) |
| نیم‌فاصله | در فارسی از ZWNJ استفاده شود: می‌شود، واژه‌نامه، پایگاه‌داده |
| اعداد فارسی | در رشته‌های فارسی از ارقام فارسی استفاده شود: «۴ تا ۶ هفته» |
| slug/id | فقط kebab-case لاتین و پایدار — چون بخشی از URL می‌شوند |
| منابع | فقط لینک به منابع معتبر (MDN، مستندات رسمی، roadmap.sh، …) و متن همیشه اورجینال |
| Tایپ‌ها | همه از `src/data/schema.ts` وارد می‌شوند — آن فایل مرجع است |

---

## نقشه‌ی کامل (Full Map)

### ۱. هسته

| فایل | محتوا | مصرف‌کننده |
| --- | --- | --- |
| `src/data/schema.ts` | همه‌ی تایپ‌ها: `Localized`, `LearningPath`, `Stage`, `Resource`, `InterviewField`, `InterviewQuestion`, `AnswerStep`, `GlossaryTerm`, `VisualKind`, `IconName`, `AccentToken` | همه‌ی فایل‌های دیتا و کامپوننت‌ها |
| `src/data/site.ts` | نام، شعار، توضیح سایت (`SiteConfig`) | `Header`, `Footer`, `generateMetadata` در `[locale]/layout.tsx` |
| `src/data/faq.ts` | ۵ مورد `FaqItem` (سوال/جواب دوزبانه) | `FaqSection` → صفحه لندینگ |
| `src/data/explainers.ts` | `ExplainerMeta` برای هر `VisualKind` (عنوان/توضیح/محل استفاده) | کارت‌های انیمیشن؛ صفحه لندینگ (شمارش آمار) |

### ۲. مسیرهای یادگیری — `src/data/paths/`

| فایل | export | مسیر سایت |
| --- | --- | --- |
| `frontend.ts` | `frontendPath` | `/fa/paths/frontend` و `/en/paths/frontend` |
| `backend.ts` | `backendPath` | `/paths/backend` |
| `devops-cloud.ts` | `devopsCloudPath` | `/paths/devops-cloud` |
| `mobile.ts` | `mobilePath` | `/paths/mobile` |
| `ai-ml.ts` | `aiMlPath` | `/paths/ai-ml` |
| `cybersecurity.ts` | `cybersecurityPath` | `/paths/cybersecurity` |
| `index.ts` | `learningPaths[]`, `getPathBySlug()` | گرید `/paths`، پیش‌نمایش لندینگ، `generateStaticParams` |

**ساختار هر مسیر:** ۵ مرحله؛ هر مرحله: `duration`, `summary`, `topics[]`, `skills[]`, `resources[3]`, `visual` (کدام انیمیشن).

**مصرف‌کننده‌های UI:** `PathsPreview` (لندینگ)، `/paths/page.tsx`، `RoadmapTimeline` → `/paths/[slug]/page.tsx`.

### ۳. سوال‌های مصاحبه — `src/data/interview/`

| فایل | export | تعداد سوال | مسیر سایت |
| --- | --- | --- | --- |
| `frontend.ts` | `frontendInterview` | ۷ | `/interview/frontend` |
| `backend.ts` | `backendInterview` | ۷ | `/interview/backend` |
| `devops-cloud.ts` | `devopsInterview` | ۶ | `/interview/devops-cloud` |
| `ai-ml.ts` | `aiMlInterview` | ۶ | `/interview/ai-ml` |
| `cybersecurity.ts` | `cybersecurityInterview` | ۶ | `/interview/cybersecurity` |
| `index.ts` | `interviewFields[]`, `getFieldBySlug()` | — | هاب `/interview` + `generateStaticParams` |

**ساختار هر سوال:** `quickAnswer` (پاسخ ۳۰ ثانیه‌ای) → `steps[]` (همان پاسخ شکسته‌شده، تمثیل‌محور) → `codeExample?` → `followUps[]` → `visual?`.

**مصرف‌کننده‌های UI:** `InterviewTeaser` (لندینگ)، هاب `/interview/page.tsx`، `InterviewList` + `QuestionCard` → `/interview/[field]/page.tsx`.

### ۴. واژه‌نامه — `src/data/glossary/`

| فایل | export | محتوا |
| --- | --- | --- |
| `categories.ts` | `glossaryCategories[]` | ۱۱ دسته (fundamentals/frontend/backend/database/devops/security/networking/mobile/algorithms/system-design/ai) با آیکون و رنگ |
| `terms.ts` | `glossaryTerms[]` | ۴۲ واژه‌ی هسته **+ ادغام همه‌ی فایل‌های `terms-more/`** → مجموع ۱۸۰ واژه |
| `terms-more/algorithms.ts` | `moreAlgorithmsTerms` | ۱۵ واژه الگوریتم و ساختار داده |
| `terms-more/frontend-2.ts` | `moreFrontendTerms2` | ۳۲ واژه تکمیلی JS/React (Closure, Hoisting, Event Loop, JSX, Fiber, …) |
| `terms-more/system-design.ts` | `moreSystemDesignTerms` | ۱۲ واژه طراحی سیستم |
| `terms-more/ai-2.ts` | `moreAiTerms2` | ۶ واژه تکمیلی هوش مصنوعی |
| `terms-more/fundamentals.ts` | `moreFundamentalsTerms` | ۱۱ واژه تکمیلی مبانی (Data Type, Array, Object, Class, Recursion, Compiler, Interpreter, Framework, Library, Debugging, Version Control) |
| `terms-more/frontend.ts` | `moreFrontendTerms` | ۹ واژه تکمیلی فرانت‌اند |
| `terms-more/backend.ts` | `moreBackendTerms` | ۹ واژه تکمیلی بک‌اند |
| `terms-more/database.ts` | `moreDatabaseTerms` | ۶ واژه تکمیلی پایگاه داده |
| `terms-more/devops.ts` | `moreDevopsTerms` | ۶ واژه تکمیلی دواپس |
| `terms-more/security.ts` | `moreSecurityTerms` | ۶ واژه تکمیلی امنیت |
| `terms-more/networking.ts` | `moreNetworkingTerms` | ۱۰ واژه شبکه (IP, DNS, CDN, TCP/UDP, …) |
| `terms-more/mobile.ts` | `moreMobileTerms` | ۱۰ واژه موبایل |
| `terms-more/ai.ts` | `moreAiTerms` | ۶ واژه تکمیلی هوش مصنوعی |
| `index.ts` | re-export + `getGlossaryCategoriesWithCounts()` | مصرف `/glossary/page.tsx` |

**مصرف‌کننده UI:** `GlossaryExplorer` → `/glossary/page.tsx` (جست‌وجوی زنده + فیلتر دسته + کارت‌های متحرک).

**قاعده‌ی `related`:** هر کلید باید به termی اشاره کند که در ترکیب نهایی (هسته + تکمیلی) وجود دارد.

---

## چطور گسترش بدهم؟ (Recipes)

### مسیر جدید (مثلاً بازی‌سازی)

```ts
// 1) src/data/paths/game-dev.ts را بسازید (کپی ساختار از frontend.ts)
export const gameDevPath: LearningPath = { slug: "game-dev", icon: "terminal", accent: "lime", /* … */ };

// 2) در src/data/paths/index.ts
import { gameDevPath } from "./game-dev";
// و به آرایه learningPaths اضافه‌اش کنید.
```
تمام صفحات، فیلترها و آمارها خودکار به‌روز می‌شوند. فقط `icon` باید داخل `IconName` (schema) و `accent` داخل `AccentToken` باشد.

### سوال جدید مصاحبه

یک آبجکت به آرایه `questions` فایل حوزه اضافه کنید. اگر `visual` جدیدی می‌خواهید که وجود ندارد:
1. `VisualKind` جدید در `schema.ts`
2. کامپوننت SVG متحرک در `components/explainers/`
3. ثبت در `explainers/registry.tsx`
4. متادیتا در `data/explainers.ts`

### واژه جدید

به `terms.ts` اضافه کنید؛ `category` باید id موجود باشد و `related` باید به termهای موجود اشاره کند (چک دستی — تایپ‌ها رشته‌اند).

### تغییر متن‌های UI (نه دیتا)

متن‌های ثابت رابط (دکمه‌ها، عنوان بخش‌ها، فوتر) در `src/messages/fa.json` و `en.json` است — هر کلید باید در هر دو باشد، وگرنه next-intl خطای `MISSING_MESSAGE` می‌دهد.

---

## جریان داده در یک نگاه

```text
data/paths/index.ts ──► landing (PathsPreview, Stats)
        │            ──► /paths (گرید)
        └─ getPathBySlug ─► /paths/[slug] (RoadmapTimeline + Explainer)

data/interview/index.ts ─► landing (Stats)
        │               ─► /interview (هاب)
        └─ getFieldBySlug ► /interview/[field] (InterviewList → QuestionCard)

data/glossary/* ─► /glossary (GlossaryExplorer)

data/site.ts ─► Header / Footer / Metadata
data/faq.ts ─► landing FAQ
data/explainers.ts ─► متادیتای انیمیشن‌ها (+ آمار لندینگ)

messages/{fa,en}.json ─► همه‌ی متن‌های UI (next-intl)
```
