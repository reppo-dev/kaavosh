"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";

/**
 * CTA SECTION — final gradient panel before the footer.
 * Consumed by: landing page.
 */
export function CtaSection() {
  const t = useTranslations("landing.cta");
  const locale = useLocale();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative px-4 py-24 sm:px-6 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10"
      >
        {/* animated gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/25 via-[#0a0c14] to-cyan-500/20" />
        <motion.div
          aria-hidden
          className="absolute -top-20 start-1/4 size-72 rounded-full bg-fuchsia-500/20 blur-[100px]"
          animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div aria-hidden className="grid-bg absolute inset-0" />

        <div className="relative flex flex-col items-center gap-5 px-6 py-16 text-center sm:py-20">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Sparkles className="size-6 text-cyan-300" />
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="max-w-xl text-sm text-white/60 sm:text-base">{t("subtitle")}</p>
          <Link
            href="/paths"
            className="group mt-2 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#05060a] transition hover:bg-cyan-200"
          >
            {t("button")}
            <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
