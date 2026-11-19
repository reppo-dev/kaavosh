import type { AccentToken } from "@/data/schema";

/**
 * Static Tailwind class maps per accent token.
 * NOTE: strings must stay literal — Tailwind scans this file.
 * Consumed by: path cards, interview cards, glossary pills, explainer frames.
 */
export interface AccentClasses {
  text: string;
  textSoft: string;
  bgSoft: string;
  bgSofter: string;
  border: string;
  solid: string;
  ring: string;
  gradient: string;
  glowShadow: string;
  /** Raw hex for SVG strokes/fills where class strings can't be used. */
  hex: string;
}

export const accents: Record<AccentToken, AccentClasses> = {
  indigo: {
    text: "text-indigo-400",
    textSoft: "text-indigo-300/80",
    bgSoft: "bg-indigo-500/15",
    bgSofter: "bg-indigo-500/[0.07]",
    border: "border-indigo-500/30",
    solid: "bg-indigo-500",
    ring: "ring-indigo-500/40",
    gradient: "from-indigo-500 to-cyan-400",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(99,102,241,0.5)]",
    hex: "#818cf8",
  },
  cyan: {
    text: "text-cyan-400",
    textSoft: "text-cyan-300/80",
    bgSoft: "bg-cyan-500/15",
    bgSofter: "bg-cyan-500/[0.07]",
    border: "border-cyan-500/30",
    solid: "bg-cyan-500",
    ring: "ring-cyan-500/40",
    gradient: "from-cyan-400 to-blue-500",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(34,211,238,0.5)]",
    hex: "#22d3ee",
  },
  emerald: {
    text: "text-emerald-400",
    textSoft: "text-emerald-300/80",
    bgSoft: "bg-emerald-500/15",
    bgSofter: "bg-emerald-500/[0.07]",
    border: "border-emerald-500/30",
    solid: "bg-emerald-500",
    ring: "ring-emerald-500/40",
    gradient: "from-emerald-400 to-teal-500",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(52,211,153,0.5)]",
    hex: "#34d399",
  },
  amber: {
    text: "text-amber-400",
    textSoft: "text-amber-300/80",
    bgSoft: "bg-amber-500/15",
    bgSofter: "bg-amber-500/[0.07]",
    border: "border-amber-500/30",
    solid: "bg-amber-500",
    ring: "ring-amber-500/40",
    gradient: "from-amber-400 to-orange-500",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(251,191,36,0.5)]",
    hex: "#fbbf24",
  },
  rose: {
    text: "text-rose-400",
    textSoft: "text-rose-300/80",
    bgSoft: "bg-rose-500/15",
    bgSofter: "bg-rose-500/[0.07]",
    border: "border-rose-500/30",
    solid: "bg-rose-500",
    ring: "ring-rose-500/40",
    gradient: "from-rose-400 to-pink-500",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(251,113,133,0.5)]",
    hex: "#fb7185",
  },
  violet: {
    text: "text-violet-400",
    textSoft: "text-violet-300/80",
    bgSoft: "bg-violet-500/15",
    bgSofter: "bg-violet-500/[0.07]",
    border: "border-violet-500/30",
    solid: "bg-violet-500",
    ring: "ring-violet-500/40",
    gradient: "from-violet-500 to-fuchsia-500",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(139,92,246,0.5)]",
    hex: "#a78bfa",
  },
  sky: {
    text: "text-sky-400",
    textSoft: "text-sky-300/80",
    bgSoft: "bg-sky-500/15",
    bgSofter: "bg-sky-500/[0.07]",
    border: "border-sky-500/30",
    solid: "bg-sky-500",
    ring: "ring-sky-500/40",
    gradient: "from-sky-400 to-indigo-500",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(56,189,248,0.5)]",
    hex: "#38bdf8",
  },
  lime: {
    text: "text-lime-400",
    textSoft: "text-lime-300/80",
    bgSoft: "bg-lime-500/15",
    bgSofter: "bg-lime-500/[0.07]",
    border: "border-lime-500/30",
    solid: "bg-lime-500",
    ring: "ring-lime-500/40",
    gradient: "from-lime-400 to-emerald-500",
    glowShadow: "shadow-[0_0_60px_-15px_rgba(163,230,53,0.5)]",
    hex: "#a3e635",
  },
};

/** Document direction per locale. Consumed by: [locale] layout. */
export function dirFor(locale: string): "rtl" | "ltr" {
  return locale === "fa" ? "rtl" : "ltr";
}
