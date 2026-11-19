"use client";

import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Lightbulb, Search } from "lucide-react";
import { iconRegistry } from "@/components/icons/registry";
import { accents } from "@/lib/theme";
import { pick, toLocaleNumber, type Locale } from "@/lib/i18n-helpers";
import { glossaryTerms, glossaryCategories } from "@/data/glossary";
import type { GlossaryCategory, GlossaryTerm } from "@/data/schema";

/**
 * GLOSSARY EXPLORER — live search + category pills + animated cards.
 * Consumed by: /glossary page.
 */
export function GlossaryExplorer({ labels }: { labels: { searchPlaceholder: string; all: string; analogy: string; related: string; noResults: string; terms: string } }) {
  const locale = useLocale() as Locale;
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const t of glossaryTerms) map.set(t.category, (map.get(t.category) ?? 0) + 1);
    return map;
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossaryTerms.filter((t) => {
      if (cat !== "all" && t.category !== cat) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        t.fa.includes(q) ||
        t.definition.fa.includes(q) ||
        t.definition.en.toLowerCase().includes(q)
      );
    });
  }, [query, cat]);

  const catList: { id: string; label: string; cat?: GlossaryCategory }[] = [
    { id: "all", label: labels.all },
    ...glossaryCategories.map((c) => ({
      id: c.id,
      label: `${pick(c.title, locale)} (${toLocaleNumber(counts.get(c.id) ?? 0, locale)})`,
      cat: c,
    })),
  ];

  function onRelated(term: string) {
    setQuery(term);
    const target = glossaryTerms.find((t) => t.term === term);
    setCat(target ? target.category : "all");
  }

  return (
    <div>
      {/* search */}
      <div className="relative mx-auto max-w-xl">
        <Search className="absolute start-4 top-1/2 size-4 -translate-y-1/2 text-white/35" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={labels.searchPlaceholder}
          aria-label={labels.searchPlaceholder}
          className="w-full rounded-full border border-white/10 bg-white/[0.05] py-3 ps-11 pe-4 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-indigo-500/50 focus:bg-white/[0.07] focus:ring-4 focus:ring-indigo-500/10"
        />
      </div>

      {/* category pills */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {catList.map((c) => {
          const active = cat === c.id;
          const a = c.cat ? accents[c.cat.accent] : null;
          const Icon = c.cat ? iconRegistry[c.cat.icon] : null;
          return (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`relative inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                active
                  ? a
                    ? `${a.bgSoft} ${a.text} ring-1 ${a.border}`
                    : "bg-white/10 text-white ring-1 ring-white/25"
                  : "text-white/50 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {Icon && <Icon className="size-3.5" />}
              {c.label}
            </button>
          );
        })}
      </div>

      {/* cards */}
      {shown.length === 0 ? (
        <p className="mt-14 rounded-2xl border border-dashed border-white/15 p-12 text-center text-sm text-white/50">
          {labels.noResults}
        </p>
      ) : (
        <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((t: GlossaryTerm) => {
              const category = glossaryCategories.find((c) => c.id === t.category);
              const a = accents[(category?.accent ?? "indigo") as keyof typeof accents];
              return (
                <motion.article
                  layout
                  key={t.term}
                  initial={{ opacity: 0, scale: 0.94, y: 18 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 dir="ltr" className="text-start font-mono text-base font-bold text-white">
                      {t.term}
                    </h3>
                    {locale === "fa" && (
                      <span className={`text-sm font-bold ${a.text}`}>{t.fa}</span>
                    )}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                    {pick(t.definition, locale)}
                  </p>

                  {t.analogy && (
                    <div className={`mt-3 rounded-lg border ${a.border} ${a.bgSofter} p-3`}>
                      <p className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${a.text}`}>
                        <Lightbulb className="size-3" />
                        {labels.analogy}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-white/60">
                        {pick(t.analogy, locale)}
                      </p>
                    </div>
                  )}

                  {t.related.length > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] uppercase tracking-wider text-white/35">
                        {labels.related}:
                      </span>
                      {t.related.map((r) => (
                        <button
                          key={r}
                          onClick={() => onRelated(r)}
                          className="rounded-full bg-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-white/55 ring-1 ring-white/10 transition hover:bg-white/15 hover:text-white"
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

      <p className="mt-8 text-center text-xs text-white/35">
        {toLocaleNumber(shown.length, locale)} {labels.terms}
      </p>
    </div>
  );
}
