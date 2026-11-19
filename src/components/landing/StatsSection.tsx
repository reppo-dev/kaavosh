"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/motion/NumberTicker";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * STATS SECTION — real numbers pulled from the data files, counted
 * up as you scroll. Consumed by: landing page.
 */
export function StatsSection({
  stats,
}: {
  stats: { value: number; label: string }[];
}) {
  const t = useTranslations("landing.stats");
  const locale = useLocale();

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
              />
              <p className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                <NumberTicker value={s.value} locale={locale} />
              </p>
              <p className="mt-2 text-sm text-white/55">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
