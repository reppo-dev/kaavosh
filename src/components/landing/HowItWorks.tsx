"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useSpring } from "motion/react";
import { Route, MonitorPlay, MessagesSquare, Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * HOW IT WORKS — four steps beside a progress line that draws
 * itself as you scroll (the site's teaching idea in visual form).
 * Consumed by: landing page.
 */
export function HowItWorks() {
  const t = useTranslations("landing.how");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const steps = [
    { icon: Route, key: "step1", accent: "from-indigo-500 to-violet-500" },
    { icon: MonitorPlay, key: "step2", accent: "from-cyan-400 to-sky-500" },
    { icon: MessagesSquare, key: "step3", accent: "from-emerald-400 to-teal-500" },
    { icon: Briefcase, key: "step4", accent: "from-amber-400 to-orange-500" },
  ];

  return (
    <section className="relative overflow-x-clip py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div ref={ref} className="relative mt-12 sm:mt-16">
          {/* progress line */}
          <div aria-hidden className="absolute top-0 bottom-0 start-[21px] w-px bg-white/10 sm:start-[27px] md:start-1/2" />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute top-0 bottom-0 start-[21px] w-px origin-top bg-gradient-to-b from-indigo-400 via-cyan-400 to-fuchsia-400 sm:start-[27px] md:start-1/2"
          />

          <div className="grid gap-10 sm:gap-14">
            {steps.map((s, i) => {
              const firstSide = i % 2 === 0; // alternates around the center line
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 34, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.21, 0.65, 0.35, 1] }}
                  className={`relative flex min-w-0 items-start gap-4 ps-14 sm:gap-6 sm:ps-16 md:w-1/2 ${
                    firstSide
                      ? "md:justify-self-start md:ps-0 md:pe-14 md:text-end"
                      : "md:justify-self-end md:ps-14 md:text-start"
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute top-0 start-0 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-[0_0_36px_-8px_rgba(99,102,241,0.55)] sm:size-14 sm:rounded-2xl ${
                      firstSide ? "md:start-auto md:-end-7" : "md:-start-7"
                    }`}
                  >
                    <Icon className="size-5 sm:size-6" />
                  </span>

                  <div className={`min-w-0 flex-1 ${firstSide ? "md:pe-4" : "md:ps-4"}`}>
                    <span className="font-mono text-xs text-white/35">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-bold sm:text-xl">{t(`${s.key}.title`)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {t(`${s.key}.detail`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
