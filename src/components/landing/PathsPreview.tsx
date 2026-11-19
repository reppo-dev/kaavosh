"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, Layers } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/motion/TiltCard";
import { iconRegistry } from "@/components/icons/registry";
import { accents } from "@/lib/theme";
import { pick, toLocaleNumber, type Locale } from "@/lib/i18n-helpers";
import { learningPaths } from "@/data/paths";

/**
 * PATHS PREVIEW — grid of learning-path cards with 3D tilt + glow.
 * Consumed by: landing page.
 */
export function PathsPreview() {
  const t = useTranslations("landing.paths");
  const locale = useLocale() as Locale;
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((p, i) => {
            const a = accents[p.accent];
            const Icon = iconRegistry[p.icon];
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard glowColor={a.hex} className="h-full">
                  <Link
                    href={`/paths/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
                  >
                    <div className={`mb-5 flex size-12 items-center justify-center rounded-xl ${a.bgSoft} ring-1 ${a.border}`}>
                      <Icon className={`size-6 ${a.text}`} />
                    </div>
                    <h3 className="text-xl font-bold">{pick(p.title, locale)}</h3>
                    <p className="mt-1.5 text-sm text-white/55">{pick(p.tagline, locale)}</p>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 ring-1 ring-white/10">
                        <Layers className="size-3.5" />
                        {toLocaleNumber(p.stages.length, locale)} {t("stageUnit")}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 ring-1 ring-white/10">
                        <Clock className="size-3.5" />
                        {pick(p.totalDuration, locale)}
                      </span>
                    </div>

                    <span className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold ${a.text}`}>
                      {pick(p.title, locale)}
                      <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
