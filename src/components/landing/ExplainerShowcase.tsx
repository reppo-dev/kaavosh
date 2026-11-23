"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExplainerFrame } from "@/components/ui/ExplainerFrame";
import { HttpRequestExplainer } from "@/components/explainers/HttpRequest";
import { EventLoopExplainer } from "@/components/explainers/EventLoop";
import { SqlJoinExplainer } from "@/components/explainers/SqlJoin";

/**
 * EXPLAINER SHOWCASE — three live, code-drawn animations playing
 * right on the landing page. Consumed by: landing page.
 */
export function ExplainerShowcase() {
  const t = useTranslations("landing.explainers");

  const items = [
    { node: <HttpRequestExplainer />, title: "HTTP", accent: "cyan" as const },
    { node: <EventLoopExplainer />, title: "Event Loop", accent: "violet" as const },
    { node: <SqlJoinExplainer />, title: "SQL JOIN", accent: "emerald" as const },
  ];

  return (
    <section className="relative overflow-x-clip py-16 sm:py-24 lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-gradient-to-r from-indigo-600/10 via-transparent to-cyan-500/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0 transition-transform duration-300 md:hover:-translate-y-1.5"
            >
              <ExplainerFrame title={item.title} accent={item.accent}>
                {item.node}
              </ExplainerFrame>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-center font-mono text-xs text-white/35"
        >
          {t("live")}
        </motion.p>
      </div>
    </section>
  );
}
