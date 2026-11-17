/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  KAAVOSH — DATA SCHEMA (Single source of truth for all data files)
 * ─────────────────────────────────────────────────────────────────────────────
 *  This file defines EVERY type used by the data layer.
 *
 *  ⚠️  RULES for anyone adding/editing data files:
 *   1. Every user-visible string MUST be bilingual: { fa: "...", en: "..." }
 *      → fa uses proper Persian typography (ZWNJ "‌" where needed, Persian digits).
 *   2. Only link to reputable sources (MDN, official docs, roadmap.sh,
 *      freeCodeCamp, The Odin Project, …). Never invent URLs.
 *   3. Never copy paragraphs from other sites — write original text.
 *   4. Keep `id` / `slug` stable ASCII kebab-case — they become URL parts.
 *   5. Every data file must start with a header comment saying:
 *      → which page/component consumes it (see DATA-GUIDE.md).
 *
 *  WHO CONSUMES THIS FILE:
 *   - src/data/paths/*.ts        → LearningPath
 *   - src/data/interview/*.ts    → InterviewField
 *   - src/data/glossary/terms.ts → GlossaryTerm
 *   - src/data/explainers.ts     → ExplainerMeta
 *   - src/data/site.ts           → SiteConfig
 * ─────────────────────────────────────────────────────────────────────────────
 */

/** A string localized in Persian (fa) and English (en). */
export type Localized = { fa: string; en: string };

/** Tailwind-safe accent tokens. Class maps live in src/lib/theme.ts. */
export type AccentToken =
  | 'indigo'
  | 'cyan'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'violet'
  | 'sky'
  | 'lime';

/** Lucide icon names allowed by the registry (src/components/icons/registry.tsx). */
export type IconName =
  | 'layout-template'
  | 'server'
  | 'cloud'
  | 'smartphone'
  | 'brain-circuit'
  | 'shield'
  | 'database'
  | 'terminal'
  | 'globe'
  | 'book-open'
  | 'messages-square'
  | 'route'
  | 'sparkles'
  | 'code-2';

/** Which built-in animated explainer (pure SVG/CSS, no video files) a stage/question uses. */
export type VisualKind =
  | 'http-request'
  | 'react-render'
  | 'event-loop'
  | 'git-flow'
  | 'docker-containers'
  | 'auth-jwt'
  | 'sql-join'
  | 'dom-render'
  | 'ml-training'
  | 'ci-cd-pipeline'
  | 'encryption'
  | 'mobile-lifecycle'
  | 'none';

/* ───────────────────────────── Learning Paths ───────────────────────────── */

export type ResourceType = 'docs' | 'video' | 'course' | 'book' | 'interactive' | 'roadmap';

export interface Resource {
  title: Localized;
  /** Reputable source only (MDN, official docs, roadmap.sh, …). */
  url: string;
  type: ResourceType;
}

export interface Stage {
  /** Stable kebab-case id, unique inside its path. */
  id: string;
  title: Localized;
  /** Rough duration, e.g. { fa: "۴ تا ۶ هفته", en: "4–6 weeks" } */
  duration: Localized;
  /** One-paragraph summary of what this stage is about. */
  summary: Localized;
  /** Short tech keywords rendered as chips. */
  topics: string[];
  /** "After this stage you can…" bullet points. */
  skills: Localized[];
  resources: Resource[];
  /** Animated explainer shown with this stage (pure-code SVG animation). */
  visual: VisualKind;
}

export interface LearningPath {
  /** URL slug, e.g. "frontend" → /paths/frontend */
  slug: string;
  icon: IconName;
  accent: AccentToken;
  title: Localized;
  tagline: Localized;
  description: Localized;
  level: 'beginner' | 'intermediate' | 'all';
  totalDuration: Localized;
  /** Job titles this path can lead to. */
  roles: Localized[];
  stages: Stage[];
}

/* ────────────────────────── Interview Questions ─────────────────────────── */

export type Difficulty = 'junior' | 'mid' | 'senior';

export interface AnswerStep {
  title: Localized;
  /** Plain-language explanation, everyday analogy first, jargon second. */
  detail: Localized;
  /** Optional tiny snippet for this step. */
  code?: string;
}

export interface InterviewQuestion {
  /** Stable kebab-case id, unique inside its field. */
  id: string;
  question: Localized;
  difficulty: Difficulty;
  tags: string[];
  /** The 2–3 sentence "elevator" answer said first in a real interview. */
  quickAnswer: Localized;
  /** The answer broken into small steps a beginner can follow. */
  steps: AnswerStep[];
  codeExample?: { language: string; code: string; caption: Localized };
  /** What interviewers typically ask next. */
  followUps?: Localized[];
  visual?: VisualKind;
}

export interface InterviewField {
  /** URL slug, e.g. "frontend" → /interview/frontend */
  slug: string;
  title: Localized;
  description: Localized;
  icon: IconName;
  accent: AccentToken;
  questions: InterviewQuestion[];
}

/* ─────────────────────────────── Glossary ───────────────────────────────── */

export interface GlossaryTerm {
  /** English term, e.g. "State". Doubles as the lookup key. */
  term: string;
  /** Persian equivalent, e.g. "وضعیت". */
  fa: string;
  /** Category id — must exist in src/data/glossary/categories.ts */
  category: string;
  definition: Localized;
  /** Everyday analogy (their favorite teaching pattern). */
  analogy?: Localized;
  /** Related term keys. */
  related: string[];
}

export interface GlossaryCategory {
  id: string;
  title: Localized;
  icon: IconName;
  accent: AccentToken;
}

/* ─────────────────────── Animated Explainers (meta) ─────────────────────── */

export interface ExplainerMeta {
  id: VisualKind;
  title: Localized;
  /** One sentence: what the animation shows. */
  caption: Localized;
  /** Which section typically displays it. */
  usedIn: Localized;
}

/* ───────────────────────────── Site config ──────────────────────────────── */

export interface SiteConfig {
  name: Localized;
  tagline: Localized;
  description: Localized;
}
