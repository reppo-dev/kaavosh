# Kaavosh 🧭

**English** · [فارسی (Persian)](README.fa.md)

> **Programming learning paths, from zero to hired — bilingual (FA/EN), with scroll animations and code-drawn visual explainers.**
>
> مسیرهای یادگیری برنامه‌نویسی، از صفر تا استخدام — دوزبانه (فارسی/انگلیسی)، با انیمیشن‌های اسکرول و توضیح تصویریِ کدنویسی‌شده.

---

## ⚡ Quick Start

```bash
cd kaavosh
npm install
npm run dev
```

Open **http://localhost:3000** — it redirects to `/fa` (the Persian locale) automatically.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the built app |
| `npm run lint` | ESLint |

No external services, database or API — the whole site is static, built from local data files.

---

## 📦 Content at a Glance

| Section | Count | Notes |
| --- | --- | --- |
| Learning paths | **6 paths** | Frontend, Backend, DevOps & Cloud, AI/ML, Cybersecurity, Mobile |
| Interview questions | **11 fields × 1,724 Q&A** | Imported from popular open-source interview repos; Persian question text 100% complete |
| Persian full answers | **984 of 1,724** | 8 fields complete; `algorithms` and `react` in progress — untranslated bodies fall back to English with an EN badge |
| Glossary | **383 terms in 11 categories** | Searchable, category-filtered |
| Concept animations | **34 explainers** | All drawn in-browser with SVG + CSS + motion |

---

## 🧱 Tech Stack

| Tool | Role |
| --- | --- |
| **Next.js 16** (App Router, `cacheComponents`) | Framework |
| **TypeScript** | Full type safety |
| **Tailwind CSS 4** | Styling (design tokens in `globals.css`) |
| **motion (Framer Motion)** | Scroll animations, whileInView, useScroll |
| **next-intl** | fa/en bilingual routing with automatic RTL |
| **Vazirmatn + Inter** | Persian and English fonts (next/font) |
| **lucide-react** | Icons |

---

## 🗂 Project Structure

```text
src/
├── app/
│   ├── [locale]/                    ← all pages live under this route (fa/en)
│   │   ├── layout.tsx               ← RTL/LTR, fonts, header/footer, ScrollProgress
│   │   ├── page.tsx                 ← landing page (scroll-animated sections)
│   │   ├── paths/page.tsx           ← grid of all learning paths
│   │   ├── paths/[slug]/page.tsx    ← one path's roadmap (scroll-drawn line)
│   │   ├── interview/page.tsx       ← interview hub
│   │   ├── interview/[field]/page.tsx ← one field's questions (accordion + level filter)
│   │   ├── glossary/page.tsx        ← glossary (search + category filter)
│   │   └── not-found.tsx            ← 404
│   └── globals.css                  ← design system (tokens, glass, marquee, …)
├── data/                            ← ⭐ all content lives here (edit only these)
│   ├── schema.ts                    ← reference types — the contract for every data file
│   ├── site.ts                      ← site name and intro (header/footer/meta)
│   ├── faq.ts                       ← landing FAQ
│   ├── explainers.ts                ← metadata for the concept animations
│   ├── paths/                       ← 6 learning paths + index.ts
│   ├── interview/                   ← interview fields + index.ts
│   ├── interview-bank/              ← 1,724 imported questions (JSON) + fa-bank/ (Persian translations)
│   └── glossary/                    ← 383 terms in 11 categories + index.ts
├── components/
│   ├── layout/                      ← Header, Footer, LocaleSwitcher, LogoMark
│   ├── landing/                     ← landing sections (Hero, HowItWorks, …)
│   ├── paths/                       ← RoadmapTimeline (animated roadmap)
│   ├── interview/                   ← QuestionCard, InterviewList
│   ├── glossary/                    ← GlossaryExplorer
│   ├── explainers/                  ← ⭐ 34 SVG animations + registry
│   ├── motion/                      ← Reveal, Stagger, TiltCard, NumberTicker, ScrollProgress
│   ├── ui/                          ← SectionHeading, CodeBlock, Badge, ResourceChip, ExplainerFrame
│   └── icons/registry.tsx           ← data icon-name → lucide icon mapping
├── i18n/                            ← routing, request, navigation (next-intl)
├── lib/                             ← theme.ts (colors), i18n-helpers.ts (pick, Persian numerals)
├── messages/                        ← fa.json / en.json (UI strings)
└── middleware.ts                    ← redirects / to /fa
```

---

## 📊 Data File Guide

**Golden rule:** content lives only in `src/data/**`; nothing is hardcoded inside components.

| Data file | Contents | Rendered in |
| --- | --- | --- |
| `data/schema.ts` | All types (`Localized`, `LearningPath`, `InterviewQuestion`, …) | Referenced by every data file |
| `data/site.ts` | Name, tagline, site description | Header, footer, page metadata |
| `data/faq.ts` | Landing FAQ | Landing → FAQ section |
| `data/explainers.ts` | Title/caption per animation | Animation cards |
| `data/paths/*.ts` | 6 paths × 5 stages (topics, skills, resources, visual) | Landing path cards; `/paths`; `/paths/[slug]` |
| `data/interview/*.ts` | Hand-written fields (30-second answer, steps, code, followUps) | `/interview`; `/interview/[field]` |
| `data/interview/index.ts` | 11-field registry + applies `fa-bank/` Persian overrides | generateStaticParams and pages |
| `data/interview-bank/*.json` | 1,724-question bank (original English, with source & difficulty) | via `interview/index.ts` |
| `data/interview-bank/fa-bank/*.json` | Persian per question: `q` (question), `qa` (30-second answer), `am` (full answer) | Applied onto question cards |
| `data/glossary/terms.ts` | Glossary core + **merges every `terms-more/` file** (383 terms in 11 categories) | `/glossary` + inline term cards |
| `data/glossary/categories.ts` | 11 glossary categories | Filter bar on `/glossary` |
| `messages/fa.json` + `en.json` | UI strings (buttons, section headings, …) | Every component via `useTranslations` |

### How to add content

1. **New path:** create a file in `data/paths/` (copy `frontend.ts`), register it in `data/paths/index.ts` — the `/paths/[slug]` page is generated automatically.
2. **New question:** add an object to a field's `questions` array in `data/interview/*.ts` — that's it.
3. **New term:** open the term's category file in `data/glossary/terms-more/` and add it; counters update automatically.
4. **New animation:** add a `VisualKind` to `schema.ts`, build the SVG component, register it in `explainers/registry.tsx`, and write its metadata in `explainers.ts`.

> ⚠️ Every user-visible string must be `{ fa: "...", en: "..." }`, and Persian text must use proper half-spaces (ZWNJ).

---

## 🌐 Bilingual & RTL

- Routes: `/fa/...` and `/en/...` — the root redirects to `/fa`.
- Fonts: Persian → Vazirmatn, English → Inter (automatic via `dir`).
- All spacing uses Tailwind logical utilities (`ps/pe/ms/me/start/end`), so RTL just works.
- Numbers are localized to Persian digits with `toLocaleNumber()`.
- **Full answers:** when a Persian translation (`am`) exists it renders RTL with an **FA** badge; otherwise the English original renders LTR with an **EN** badge.

---

## 🔄 Persian Translation Pipeline (fa pipeline)

The question bank comes from English repos; Persian translations are added stage by stage with these scripts:

```bash
# 1) dump a field's full answers that have no Persian translation yet
node scripts/fa-dump-body.mjs <slug>

# 2) split the dump into ~12k-character translation chunks
node scripts/fa-chunk.mjs <slug>

# 3) after translating each chunk, merge it into the canonical fa-bank/<slug>.json
node scripts/fa-merge.mjs <slug> scripts/_fa-todo/<batch>.json [...]
```

- Working files in `scripts/_fa-todo/` are transient and git-ignored; the only final output is `fa-bank/*.json`.
- `fa-bank/<slug>.json` is an array of `{ en, q?, qa?, am? }`: `en` is the unique key (the question's English title), `q` the Persian question, `qa` the 30-second answer, `am` the full markdown answer.
- Rebuild the bank from the source repos: `node scripts/build-interview-bank.mjs`

**Current status:** Persian question text is complete for all 1,724 questions; Persian full answers cover 984 (8 fields complete; `algorithms` and `react` in progress).

---

## 🎬 About the Concept Animations

Instead of downloaded videos or images, every hard concept is drawn **in-browser with SVG + CSS + motion**:

- No downloads, no network cost, always sharp, replayable forever.
- Examples: the journey of an HTTP request, the JavaScript event loop, React render & reconciliation, DOM→pixel, Git, containers vs VMs, JWT auth, JOIN, encryption, ML training, CI/CD pipeline, mobile lifecycle, sorting, stack/queue, hash table, linked list, graph traversal, memoization, Trie, and more — 34 in total.
- All live in `src/components/explainers/` — with a `VisualKind → component` registry.
- Every animation respects `prefers-reduced-motion`.

---

## ✍️ Content Style (Teaching Convention)

All content follows the same chain:

1. **Plain definition** — the concept in everyday words first
2. **Analogy** — a real-life comparison (a bakery queue, a book index, boxes…)
3. **The technical term** — its official name, once it makes sense

For interview questions: the **30-second answer** first, then the same answer **broken into small steps**, then **likely follow-up questions**, and finally a **sample code snippet**.

---

## 📄 Content License

All texts are original. Links point only to reputable sources (MDN, official docs, roadmap.sh, freeCodeCamp, The Odin Project, OWASP, …).
