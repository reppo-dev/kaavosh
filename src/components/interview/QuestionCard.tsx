"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, GitBranch, Quote, ListOrdered, BookMarked, Telescope, CheckCircle2, ExternalLink } from "lucide-react";
import { Explainer } from "@/components/explainers/registry";
import { ExplainerFrame } from "@/components/ui/ExplainerFrame";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Chip } from "@/components/ui/Badge";
import { accents } from "@/lib/theme";
import { pick, toLocaleNumber, type Locale } from "@/lib/i18n-helpers";
import { glossaryTerms } from "@/data/glossary";
import { deepDiveIndex } from "@/data/deep-dives";
import type { DeepDive, InterviewQuestion } from "@/data/schema";

/** Fast term lookup — module-level, built once. */
const termIndex = new Map(glossaryTerms.map((t) => [t.term, t]));

function resolveDive(d: DeepDive | string): DeepDive | undefined {
  return typeof d === "string" ? deepDiveIndex[d] : d;
}

/** strips md links/bold/code ticks to plain text */
function plain(s: string) {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

/** minimal markdown renderer for imported answers: paragraphs, code, tables, lists, headings */
function Md({ md }: { md: string }) {
  const lines = md.split("\n");
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;
  const codeCls =
    "whitespace-pre overflow-x-auto rounded-lg border border-white/10 bg-[#0a0c14] px-3 py-2 text-start font-mono text-[12px] text-[#c9cfdf]";
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) buf.push(lines[i++]);
      i++;
      blocks.push(<pre key={key++} dir="ltr" className={codeCls}>{buf.join("\n")}</pre>);
      continue;
    }
    if (line.startsWith("|")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) buf.push(lines[i++]);
      blocks.push(<pre key={key++} className={`${codeCls} whitespace-pre-wrap`}>{buf.join("\n")}</pre>);
      continue;
    }
    if (/^#{1,6} /.test(line)) {
      blocks.push(
        <p key={key++} className="mt-1 text-sm font-bold text-white/80">{plain(line.replace(/^#+ /, ""))}</p>,
      );
      i++;
      continue;
    }
    if (/^[-*+] /.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^[-*+] /.test(lines[i])) buf.push(lines[i++].replace(/^[-*+] /, ""));
      blocks.push(
        <ul key={key++} className="ms-4 list-disc space-y-1">
          {buf.map((b, bi) => (
            <li key={bi} className="text-[13px] leading-relaxed text-white/60">{plain(b)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) buf.push(lines[i++].replace(/^\d+\. /, ""));
      blocks.push(
        <ol key={key++} className="ms-4 list-decimal space-y-1">
          {buf.map((b, bi) => (
            <li key={bi} className="text-[13px] leading-relaxed text-white/60">{plain(b)}</li>
          ))}
        </ol>,
      );
      continue;
    }
    if (!line.trim()) {
      i++;
      continue;
    }
    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("|") &&
      !/^#{1,6} /.test(lines[i]) &&
      !/^[-*+] /.test(lines[i]) &&
      !/^\d+\. /.test(lines[i])
    ) {
      buf.push(lines[i++]);
    }
    blocks.push(
      <p key={key++} className="text-[13px] leading-relaxed text-white/65">{plain(buf.join(" "))}</p>,
    );
  }
  return <div className="space-y-2.5">{blocks}</div>;
}

const labels = {
  fa: {
    vocab: "واژه‌های این سوال",
    dive: "توضیح عمیق‌تر",
    noVocab: "برای این سوال کارت واژه‌ای ثبت نشده.",
  },
  en: {
    vocab: "Vocabulary in this question",
    dive: "Go deeper",
    noVocab: "No vocabulary cards registered for this question.",
  },
} as const;

/**
 * QUESTION CARD — expandable Q&A. Collapsed: question + badges.
 * Expanded: 30-second answer, the step-by-step breakdown (with click-to-open
 * deep-dive markers), vocabulary cards used by the question, code proof,
 * follow-ups and the animated explainer.
 * Consumed by: /interview/[field] page.
 */
export function QuestionCard({
  q,
  index,
  locale,
  accent,
  labels: fieldLabels,
}: {
  q: InterviewQuestion;
  index: number;
  locale: Locale;
  accent: "indigo" | "cyan" | "emerald" | "amber" | "rose" | "violet" | "sky" | "lime";
  labels: {
    quickAnswer: string;
    stepByStep: string;
    followUps: string;
    codeExample: string;
    visualExplainer: string;
  };
}) {
  const [open, setOpen] = useState(false);
  const [openVocab, setOpenVocab] = useState<string | null>(null);
  const [openDives, setOpenDives] = useState<Set<string>>(new Set());
  const a = accents[accent];
  const num = toLocaleNumber(index + 1, locale);
  const ui = labels[locale];

  function toggleDive(id: string) {
    setOpenDives((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function DiveMarker({ diveId, compact }: { diveId: string; compact?: boolean }) {
    const isOpen = openDives.has(diveId);
    return (
      <span className="inline-flex flex-col w-full">
        <button
          onClick={() => toggleDive(diveId)}
          aria-expanded={isOpen}
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold transition ${a.bgSoft} ${a.text} ring-1 ${a.border} hover:brightness-125`}
        >
          <Telescope className="size-3" />
          {compact ? (locale === "fa" ? "؟" : "?") : ui.dive}
          <ChevronDown className={`size-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.span
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="block overflow-hidden"
            >
              <span className="mt-2 block rounded-xl border border-white/10 bg-[#0a0c14] p-4">
                {(() => {
                  const dive = resolveDive(diveId);
                  if (!dive) return null;
                  return (
                    <span className="block">
                      <span className="block text-sm font-bold text-white/85">{pick(dive.title, locale)}</span>
                      <span className="mt-1.5 block whitespace-pre-line text-[13px] leading-relaxed text-white/65">
                        {pick(dive.detail, locale)}
                      </span>
                      {dive.sourceUrl && (
                        <a
                          href={dive.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-[11px] text-white/40 underline underline-offset-2 hover:text-white/70"
                        >
                          {locale === "fa" ? "منبع ↗" : "source ↗"}
                        </a>
                      )}
                    </span>
                  );
                })()}
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    );
  }

  const vocabList = (q.vocab ?? []).map((t) => termIndex.get(t)).filter(Boolean);
  const diveIds = (q.deepDives ?? []).map((d) => (typeof d === "string" ? d : d.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-2xl border transition-colors ${
        open ? "border-white/25 bg-white/[0.05]" : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 px-5 py-5 text-start sm:px-6"
      >
        <span className={`mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl ${a.bgSoft} font-mono text-sm font-bold ring-1 ${a.border} ${a.text}`}>
          {num}
        </span>
        <span className="flex-1">
          <span className="block text-base font-bold leading-relaxed text-white/90 sm:text-lg">
            {pick(q.question, locale)}
          </span>
          <span className="mt-2 flex flex-wrap gap-1.5">
            {q.tags.map((tag) => (
              <Chip key={tag}>
                <span className="font-mono text-[11px]">{tag}</span>
              </Chip>
            ))}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full ring-1 ${open ? `${a.bgSoft} ${a.border} ${a.text}` : "ring-white/15 text-white/50"}`}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="space-y-5 px-5 pb-6 sm:px-6">
              {/* 30-second answer */}
              <div className={`rounded-xl border ${a.border} ${a.bgSofter} p-4`}>
                <p className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${a.text}`}>
                  <Quote className="size-3.5" />
                  {fieldLabels.quickAnswer}
                </p>
                <p
                  dir={q.hasFa ? undefined : q.lang === "en" ? "ltr" : undefined}
                  className="mt-2 text-start text-sm leading-relaxed text-white/80"
                >
                  {pick(q.quickAnswer, locale)}
                </p>
              </div>

              {/* imported full answer (English original) */}
              {q.questionCode && (
                <pre dir="ltr" className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a0c14] px-4 py-3 text-start font-mono text-[12px] leading-relaxed text-[#c9cfdf]">
                  {q.questionCode}
                </pre>
              )}
              {q.answerMd && (() => {
                const faBody = locale === "fa" && q.answerMdFa;
                const body = faBody ? q.answerMdFa! : q.answerMd!;
                return (
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/45">
                      <ListOrdered className="size-3.5" />
                      {locale === "fa" ? "پاسخ کامل" : "Full answer"}
                      <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/50">
                        {faBody ? "FA" : "EN"}
                      </span>
                    </p>
                    <div className="mt-2.5" dir={faBody ? "rtl" : "ltr"}>
                      <Md md={body} />
                    </div>
                  </div>
                );
              })()}

              {/* step-by-step (with deep-dive markers) */}
              {q.steps.length > 0 && (
                <div>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/45">
                    <ListOrdered className="size-3.5" />
                    {fieldLabels.stepByStep}
                  </p>
                  <ol className="relative mt-3 space-y-4 ps-6">
                    <span aria-hidden className="absolute inset-y-2 start-[10px] w-px bg-white/10" />
                    {q.steps.map((step, si) => (
                      <motion.li
                        key={si}
                        initial={{ opacity: 0, x: 14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.12 + si * 0.08, duration: 0.45 }}
                        className="relative"
                      >
                        <span className={`absolute -start-6 top-1 flex size-5 items-center justify-center rounded-full border border-white/15 bg-[#0a0c14] font-mono text-[10px] ${a.text}`}>
                          {toLocaleNumber(si + 1, locale)}
                        </span>
                        <p className="flex flex-wrap items-center gap-2 text-sm font-bold text-white/85">
                          {pick(step.title, locale)}
                          {step.deepDive && <DiveMarker diveId={step.deepDive} compact />}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">{pick(step.detail, locale)}</p>
                        {step.deepDive && <DiveMarker diveId={step.deepDive} />}
                        {step.code && (
                          <pre dir="ltr" className="mt-2 overflow-x-auto rounded-lg border border-white/10 bg-[#0a0c14] px-3 py-2 text-start font-mono text-xs text-[#c9cfdf]">
                            {step.code}
                          </pre>
                        )}
                      </motion.li>
                    ))}
                  </ol>
                </div>
              )}

              {/* vocabulary cards */}
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/45">
                  <BookMarked className="size-3.5" />
                  {ui.vocab}
                </p>
                {vocabList.length === 0 ? (
                  <p className="mt-2 text-xs text-white/35">{ui.noVocab}</p>
                ) : (
                  <div className="mt-2.5 space-y-2">
                    <div className="flex flex-wrap gap-1.5">
                      {vocabList.map((t) => (
                        <button
                          key={t!.term}
                          onClick={() => setOpenVocab(openVocab === t!.term ? null : t!.term)}
                          className={`rounded-full px-3 py-1 font-mono text-[11px] transition ${
                            openVocab === t!.term
                              ? `${a.bgSoft} ${a.text} ring-1 ${a.border}`
                              : "bg-white/[0.06] text-white/60 ring-1 ring-white/10 hover:bg-white/12 hover:text-white"
                          }`}
                        >
                          {t!.term}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence initial={false}>
                      {openVocab &&
                        (() => {
                          const t = termIndex.get(openVocab);
                          if (!t) return null;
                          return (
                            <motion.div
                              key={t.term}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className={`rounded-xl border ${a.border} bg-white/[0.04] p-4`}>
                                <div className="flex items-baseline justify-between gap-2">
                                  <span dir="ltr" className="text-start font-mono text-sm font-bold text-white">
                                    {t.term}
                                  </span>
                                  {locale === "fa" && (
                                    <span className={`text-sm font-bold ${a.text}`}>{t.fa}</span>
                                  )}
                                </div>
                                <p className="mt-2 text-[13px] leading-relaxed text-white/70">
                                  {pick(t.definition, locale)}
                                </p>
                                {t.analogy && (
                                  <p className="mt-2 border-s-2 border-white/15 ps-3 text-xs leading-relaxed text-white/50">
                                    💡 {pick(t.analogy, locale)}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          );
                        })()}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              {/* standalone deep-dives (not attached to a step) */}
              {diveIds.filter((id) => !q.steps.some((s) => s.deepDive === id)).length > 0 && (
                <div>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/45">
                    <Telescope className="size-3.5" />
                    {ui.dive}
                  </p>
                  <div className="mt-2 space-y-2">
                    {diveIds
                      .filter((id) => !q.steps.some((s) => s.deepDive === id))
                      .map((id) => (
                        <div key={id}>
                          <DiveMarker diveId={id} />
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* explainer */}
              {q.visual && q.visual !== "none" && (
                <ExplainerFrame title={fieldLabels.visualExplainer} accent={accent}>
                  <Explainer kind={q.visual} />
                </ExplainerFrame>
              )}

              {/* code */}
              {q.codeExample && (
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-white/45">
                    {fieldLabels.codeExample}
                  </p>
                  <CodeBlock
                    code={q.codeExample.code}
                    language={q.codeExample.language}
                    caption={pick(q.codeExample.caption, locale)}
                  />
                </div>
              )}

              {/* follow-ups */}
              {q.followUps && q.followUps.length > 0 && (
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/45">
                    <GitBranch className="size-3.5" />
                    {fieldLabels.followUps}
                  </p>
                  <ul className="mt-2.5 space-y-1.5">
                    {q.followUps.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-white/65">
                        <span className={`mt-2 size-1 shrink-0 rounded-full ${a.solid}`} />
                        {pick(f, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* provenance + verification sources */}
              <div className="flex flex-wrap items-center gap-2">
                {q.source && (
                  <span className="text-[10px] text-white/30">
                    {locale === "fa" ? "منبع سوال:" : "question source:"} {q.source}
                  </span>
                )}
                {(q.sources ?? []).length > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                    <CheckCircle2 className="size-3" />
                    {locale === "fa" ? "بررسی با منبع رسمی:" : "verify with official source:"}
                  </span>
                )}
                {(q.sources ?? []).map((u) => (
                  <a
                    key={u}
                    href={u}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] text-white/60 ring-1 ring-white/10 transition hover:bg-white/12 hover:text-white"
                  >
                    {new URL(u).hostname.replace("www.", "")}
                    <ExternalLink className="size-3" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
