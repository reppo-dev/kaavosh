"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqItems } from "@/data/faq";
import { pick, type Locale } from "@/lib/i18n-helpers";

/**
 * FAQ SECTION — accordion with a rotating plus icon.
 * Consumed by: landing page.
 */
export function FaqSection() {
  const t = useTranslations("landing.faq");
  const locale = useLocale() as Locale;
  const [open, setOpen] = useState<string | null>(faqItems[0].id);

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12 space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? "border-indigo-500/30 bg-indigo-500/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="text-sm font-bold text-white/85 sm:text-base">
                    {pick(item.question, locale)}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full ring-1 ${
                      isOpen ? "bg-indigo-500/20 ring-indigo-400/40 text-indigo-300" : "ring-white/15 text-white/50"
                    }`}
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-white/60">
                        {pick(item.answer, locale)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
