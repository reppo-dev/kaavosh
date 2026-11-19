"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Clock, CheckCircle2, Lightbulb } from "lucide-react";
import { useLocale } from "next-intl";
import { Explainer } from "@/components/explainers/registry";
import { ExplainerFrame } from "@/components/ui/ExplainerFrame";
import { ResourceChip } from "@/components/ui/ResourceChip";
import { Chip } from "@/components/ui/Badge";
import { iconRegistry } from "@/components/icons/registry";
import { accents } from "@/lib/theme";
import { pick, stageNumber, type Locale } from "@/lib/i18n-helpers";
import type { LearningPath } from "@/data/schema";

/**
 * ROADMAP TIMELINE — the showpiece. A vertical gradient line draws
 * itself with scroll while stage cards (alternating on desktop)
 * reveal: topics, skills, resources and the stage's live explainer.
 * Consumed by: /paths/[slug] page.
 */
export function RoadmapTimeline({ path, labels }: { path: LearningPath; labels: {
  stageLabel: string; ofLabel: string; duration: string; skills: string;
  resources: string; topics: string; typeDocs: string; typeVideo: string;
  typeCourse: string; typeBook: string; typeInteractive: string; typeRoadmap: string;
} }) {
  const locale = useLocale() as Locale;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.75"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const a = accents[path.accent];
  const Icon = iconRegistry[path.icon];

  const typeLabels: Record<string, string> = {
    docs: labels.typeDocs,
    video: labels.typeVideo,
    course: labels.typeCourse,
    book: labels.typeBook,
    interactive: labels.typeInteractive,
    roadmap: labels.typeRoadmap,
  };

  return (
    <div ref={ref} className="relative mt-12">
      {/* the road */}
      <div aria-hidden className="absolute top-0 bottom-0 start-[22px] w-1 rounded-full bg-white/[0.07] md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2" />
      <motion.div
        aria-hidden
        style={{ scaleY: lineScale }}
        className={`absolute top-0 bottom-0 start-[22px] w-1 origin-top rounded-full bg-gradient-to-b ${a.gradient} md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2`}
      />

      <div className="space-y-10 md:space-y-16">
        {path.stages.map((stage, i) => {
          const leftSide = i % 2 === 0;
          return (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 44, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className={`relative md:w-1/2 ${
                leftSide
                  ? "md:pe-12 md:justify-self-end"
                  : "md:ps-12 md:justify-self-start"
              } ps-14 md:ps-0`}
            >
              {/* node on the line */}
              <span
                className={`absolute start-0 top-2 flex size-11 items-center justify-center rounded-xl border bg-[#0a0c14] font-mono text-sm font-bold md:start-auto ${
                  a.border
                } ${a.text} ${leftSide ? "md:-end-6" : "md:-start-6"}`}
              >
                {stageNumber(i + 1, locale)}
              </span>

              <div
                className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors sm:p-6 ${""}`}
              >
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-lg font-bold sm:text-xl">{pick(stage.title, locale)}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-white/55 ring-1 ring-white/10">
                    <Clock className="size-3.5" />
                    {pick(stage.duration, locale)}
                  </span>
                </div>

                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  {pick(stage.summary, locale)}
                </p>

                {/* topics */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {stage.topics.map((topic) => (
                    <Chip key={topic}>
                      <span className="font-mono text-[11px]">{topic}</span>
                    </Chip>
                  ))}
                </div>

                {/* skills */}
                <div className="mt-4">
                  <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/45">
                    <CheckCircle2 className={`size-3.5 ${a.text}`} />
                    {labels.skills}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {stage.skills.map((skill, si) => (
                      <li key={si} className="flex items-start gap-2 text-sm text-white/70">
                        <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${a.solid}`} />
                        {pick(skill, locale)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* explainer */}
                {stage.visual !== "none" && (
                  <ExplainerFrame
                    className="mt-5"
                    title={labels.stageLabel + " " + stageNumber(i + 1, locale)}
                    caption={pick(stage.title, locale)}
                    accent={path.accent}
                  >
                    <Explainer kind={stage.visual} />
                  </ExplainerFrame>
                )}

                {/* resources */}
                <div className="mt-5">
                  <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/45">
                    <Lightbulb className={`size-3.5 ${a.text}`} />
                    {labels.resources}
                  </p>
                  <div className="mt-2.5 space-y-2">
                    {stage.resources.map((r, ri) => (
                      <ResourceChip
                        key={ri}
                        title={r.title}
                        url={r.url}
                        type={r.type}
                        locale={locale}
                        typeLabel={typeLabels[r.type] ?? r.type}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* finish node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="relative mt-12 flex ps-14 md:justify-center md:ps-0"
      >
        <span className={`flex items-center gap-2.5 rounded-full border ${a.border} bg-[#0a0c14] px-5 py-3 text-sm font-bold ${a.text} shadow-[0_0_50px_-12px] ${a.glowShadow}`}>
          <Icon className="size-5" />
          {pick(path.title, locale)} ✓
        </span>
      </motion.div>
    </div>
  );
}
