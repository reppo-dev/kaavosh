"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { QuestionCard } from "./QuestionCard";
import type { Difficulty, InterviewQuestion } from "@/data/schema";

/**
 * INTERVIEW LIST — client wrapper adding a difficulty filter on top
 * of the question cards. Consumed by: /interview/[field] page.
 */
export function InterviewList({
  questions,
  accent,
  labels,
}: {
  questions: InterviewQuestion[];
  accent: "indigo" | "cyan" | "emerald" | "amber" | "rose" | "violet" | "sky" | "lime";
  labels: {
    quickAnswer: string;
    stepByStep: string;
    followUps: string;
    codeExample: string;
    visualExplainer: string;
  };
}) {
  const locale = useLocale() as Locale;
  const t = useTranslations("difficulty");
  const it = useTranslations("interviewPage");
  const ct = useTranslations("common");
  const [filter, setFilter] = useState<Difficulty | "all">("all");

  const shown = useMemo(
    () => (filter === "all" ? questions : questions.filter((q) => q.difficulty === filter)),
    [filter, questions],
  );

  const filters: { id: Difficulty | "all"; label: string }[] = [
    { id: "all", label: it("filterAll") },
    { id: "junior", label: t("junior") },
    { id: "mid", label: t("mid") },
    { id: "senior", label: t("senior") },
  ];

  return (
    <div>
      {/* filter pills */}
      <div className="mb-6 flex flex-wrap items-center gap-1.5 sm:mb-8 sm:gap-2">
        {filters.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`relative rounded-full px-3.5 py-2 text-xs font-semibold transition sm:px-4 sm:text-sm ${
                active ? "text-white" : "text-white/55 hover:text-white"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="difficulty-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {f.label}
            </button>
          );
        })}
      </div>

      {/* question cards */}
      <div className="space-y-4">
        {shown.map((q, i) => (
          <QuestionCard key={q.id} q={q} index={i} locale={locale} accent={accent} labels={labels} />
        ))}
        {shown.length === 0 && (
          <p className="rounded-2xl border border-dashed border-white/15 p-10 text-center text-sm text-white/50">
            {ct("noResults")}
          </p>
        )}
      </div>
    </div>
  );
}

type Locale = "fa" | "en";
