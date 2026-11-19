import type { InterviewField, InterviewQuestion } from "../schema";
import fs from "node:fs";
import path from "node:path";
import { frontendInterview } from "./frontend";
import { backendInterview } from "./backend";
import { devopsInterview } from "./devops-cloud";
import { aiMlInterview } from "./ai-ml";
import { cybersecurityInterview } from "./cybersecurity";

/**
 * DATA FILE — Interview fields registry. Consumed by: /interview hub page,
 * /interview/[field] pages (generateStaticParams), landing page stats.
 *
 * Two layers:
 *  1. Curated bilingual fields — hand-written questions with step-by-step fa/en answers.
 *  2. The import bank (src/data/interview-bank/*.json): every question extracted,
 *     deduped, categorized and difficulty-sorted from the cloned open-source repos
 *     (greatfrontend, sudheerj, Devinterview-io ×69, system-design-primer,
 *     tech-interview-handbook). Bank questions keep their English original — each
 *     card shows its source and an EN badge. Rebuild: node scripts/build-interview-bank.mjs
 */
import bankJsJson from "../interview-bank/javascript.json";
import bankReactJson from "../interview-bank/react.json";
import bankFrontendJson from "../interview-bank/frontend.json";
import bankBackendJson from "../interview-bank/backend.json";
import bankDevopsJson from "../interview-bank/devops-cloud.json";
import bankCyberJson from "../interview-bank/cybersecurity.json";
import bankAiMlJson from "../interview-bank/ai-ml.json";
import bankSdJson from "../interview-bank/system-design.json";
import bankBhJson from "../interview-bank/behavioral.json";
import bankAlgoJson from "../interview-bank/algorithms.json";
import bankMobileJson from "../interview-bank/mobile.json";

type BankFile = { meta: Omit<InterviewField, "questions">; questions: InterviewQuestion[] };

const bankBySlug: Record<string, BankFile> = {
  javascript: bankJsJson as unknown as BankFile,
  react: bankReactJson as unknown as BankFile,
  frontend: bankFrontendJson as unknown as BankFile,
  backend: bankBackendJson as unknown as BankFile,
  "devops-cloud": bankDevopsJson as unknown as BankFile,
  cybersecurity: bankCyberJson as unknown as BankFile,
  "ai-ml": bankAiMlJson as unknown as BankFile,
  "system-design": bankSdJson as unknown as BankFile,
  behavioral: bankBhJson as unknown as BankFile,
  algorithms: bankAlgoJson as unknown as BankFile,
  mobile: bankMobileJson as unknown as BankFile,
};

const curatedBySlug: Record<string, InterviewField> = {
  frontend: frontendInterview,
  backend: backendInterview,
  "devops-cloud": devopsInterview,
  "ai-ml": aiMlInterview,
  cybersecurity: cybersecurityInterview,
};

const RANK = { junior: 0, mid: 1, senior: 2 } as const;
const byDifficulty = (qs: InterviewQuestion[]) =>
  [...qs].sort((a, b) => RANK[a.difficulty] - RANK[b.difficulty]);

/** Persian overrides for bank questions: fa-bank/<slug>.json = [{en, q, qa}] */
const normKey = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
type FaEntry = { en: string; q: string; qa?: string };

function loadFaBank(slug: string): Record<string, FaEntry> {
  const map: Record<string, FaEntry> = {};
  try {
    const p = path.join(process.cwd(), "src/data/interview-bank/fa-bank", slug + ".json");
    const arr = JSON.parse(fs.readFileSync(p, "utf8")) as FaEntry[];
    for (const e of arr) map[normKey(e.en)] = e;
  } catch {
    /* no fa file for this slug yet */
  }
  return map;
}

function applyFa(slug: string, qs: InterviewQuestion[]): InterviewQuestion[] {
  const fa = loadFaBank(slug);
  if (!Object.keys(fa).length) return qs;
  return qs.map((q) => {
    const o = fa[normKey(q.question.en)];
    if (!o) return q;
    return {
      ...q,
      question: { fa: o.q, en: q.question.en },
      quickAnswer: o.qa ? { fa: o.qa, en: q.quickAnswer.en } : q.quickAnswer,
      hasFa: true,
    };
  });
}

const SLUG_ORDER = [
  "frontend",
  "backend",
  "javascript",
  "react",
  "devops-cloud",
  "cybersecurity",
  "ai-ml",
  "system-design",
  "algorithms",
  "mobile",
  "behavioral",
];

export const interviewFields: InterviewField[] = SLUG_ORDER.map((slug) => {
  const curated = curatedBySlug[slug];
  const bank = bankBySlug[slug];
  const meta = (curated ?? bank.meta) as Omit<InterviewField, "questions">;
  return {
    ...meta,
    slug,
    questions: byDifficulty(
      applyFa(slug, [
        ...(curated?.questions ?? []),
        ...(bank?.questions ?? []),
      ]),
    ),
  };
});

export function getFieldBySlug(slug: string): InterviewField | undefined {
  return interviewFields.find((f) => f.slug === slug);
}
