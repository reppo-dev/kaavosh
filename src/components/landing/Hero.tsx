"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowRight, Mouse } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/layout/LogoMark";

/**
 * HERO — staggered masked headline, typed terminal, floating orbs.
 * Consumed by: landing page (first section, full viewport).
 */
export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  const { scrollYProgress } = useScroll();
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const lines = [
    { text: t("terminal.line1"), cls: "text-[#a5b4fc]" },
    { text: t("terminal.line2"), cls: "text-[#34d399]" },
    { text: t("terminal.line3"), cls: "text-[#34d399]" },
    { text: t("terminal.line4"), cls: "text-[#c084fc]" },
  ];

  // ── typing effect: type line 1 char by char, then reveal the rest, then loop
  const [typed, setTyped] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step > 0) return;
    const full = lines[0].text;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(id);
        setStep(1);
      }
    }, 34);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (step === 0 || step === lines.length) return;
    const id = setTimeout(() => setStep((s) => s + 1), step === lines.length - 1 ? 1400 : 650);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  useEffect(() => {
    if (step !== lines.length) return;
    const id = setTimeout(() => {
      setStep(0);
      setTyped("");
    }, 2600);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const words = [t("titleLine1"), t("titleLine2"), t("titleLine3")];

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-16">
      {/* backdrop */}
      <div aria-hidden className="grid-bg absolute inset-0" />
      <motion.div aria-hidden style={{ y: orbY1 }} className="absolute -top-24 start-[8%] size-80 rounded-full bg-indigo-600/20 blur-[110px]" />
      <motion.div aria-hidden style={{ y: orbY2 }} className="absolute top-1/3 end-[6%] size-96 rounded-full bg-cyan-500/15 blur-[130px]" />
      <motion.div aria-hidden style={{ y: orbY1 }} className="absolute bottom-0 start-1/3 size-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <motion.div style={{ opacity: fade }} className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 text-center">
        {/* badge */}
        <motion.span
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/15"
        >
          <span className="size-1.5 animate-pulse-soft rounded-full bg-emerald-400" />
          {t("badge")}
        </motion.span>

        {/* headline — masked line-by-line reveal */}
        <h1 className="text-[clamp(2.2rem,7vw,4.6rem)] font-extrabold leading-[1.15] tracking-tight">
          {words.map((w, i) => (
            <span key={i} className="block overflow-hidden py-0.5">
              <motion.span
                className={`block ${i === 2 ? "text-gradient" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/paths"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white shadow-[0_0_40px_-8px_rgba(99,102,241,0.6)] transition hover:shadow-[0_0_54px_-6px_rgba(99,102,241,0.8)]"
          >
            {t("ctaPaths")}
            <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>
          <Link
            href="/interview"
            className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-6 py-3 text-sm font-bold text-white/85 ring-1 ring-white/15 backdrop-blur transition hover:bg-white/10"
          >
            {t("ctaInterview")}
          </Link>
        </motion.div>

        {/* terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl"
        >
          <div className="rounded-2xl border border-white/10 bg-[#0a0c14]/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#fb7185]/80" />
                <span className="size-2.5 rounded-full bg-[#fbbf24]/80" />
                <span className="size-2.5 rounded-full bg-[#34d399]/80" />
              </div>
              <span className="font-mono text-[10px] text-white/35">{t("terminal.caption")}</span>
              <LogoMark className="size-4 opacity-70" />
            </div>
            <div dir="ltr" className="space-y-1.5 px-5 py-4 text-left font-mono text-[13px] leading-relaxed">
              <p className="text-[#a5b4fc]">
                {typed}
                {step === 0 && <span className="animate-pulse-soft text-white">▌</span>}
              </p>
              {lines.slice(1).map((l, i) => (
                <p key={i} className={l.cls} style={{ opacity: step >= i + 1 ? 1 : 0, transition: "opacity .3s" }}>
                  {l.text}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* scroll hint */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 z-10 flex flex-col items-center gap-1.5 text-white/40"
      >
        <span className="text-[11px]">{t("scrollHint")}</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <Mouse className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
