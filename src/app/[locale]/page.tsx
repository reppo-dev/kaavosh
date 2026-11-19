import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/landing/Hero";
import { MarqueeStrip } from "@/components/landing/MarqueeStrip";
import { PathsPreview } from "@/components/landing/PathsPreview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ExplainerShowcase } from "@/components/landing/ExplainerShowcase";
import { InterviewTeaser } from "@/components/landing/InterviewTeaser";
import { StatsSection } from "@/components/landing/StatsSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { CtaSection } from "@/components/landing/CtaSection";
import { learningPaths } from "@/data/paths";
import { interviewFields } from "@/data/interview";
import { explainerMeta } from "@/data/explainers";
import type { Locale } from "@/lib/i18n-helpers";

/**
 * LANDING PAGE — every section animates on scroll with a motif
 * that matches its content (typed terminal for hero, drawing line
 * for how-it-works, live SVGs for explainers, counters for stats).
 * Consumes: paths, interview, glossary and explainer data files.
 */
export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (rawLocale === "en" ? "en" : "fa") as Locale;
  setRequestLocale(rawLocale);
  const t = await getTranslations({ locale: rawLocale, namespace: "landing.stats" });

  const stageCount = learningPaths.reduce((n, p) => n + p.stages.length, 0);
  const questionCount = interviewFields.reduce((n, f) => n + f.questions.length, 0);
  const explainerCount = Object.values(explainerMeta).filter((e) => e.id !== "none").length;

  const stats = [
    { value: learningPaths.length, label: t("statsPaths") },
    { value: stageCount, label: t("statsStages") },
    { value: questionCount, label: t("statsQuestions") },
    { value: explainerCount, label: t("statsAnimations") },
  ];

  return (
    <>
      <Hero />
      <MarqueeStrip locale={locale} />
      <PathsPreview />
      <HowItWorks />
      <ExplainerShowcase />
      <InterviewTeaser />
      <StatsSection stats={stats} />
      <FaqSection />
      <CtaSection />
    </>
  );
}
