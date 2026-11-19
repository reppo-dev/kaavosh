"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — React render & reconciliation.
 * A small component tree: when state changes, one node pulses
 * red, then the diff spreads updates only through affected branches.
 */
export function ReactRenderExplainer() {
  const { L } = useExplainerLocale();
  const node = (cx: number, cy: number, fill: string) => ({ cx, cy, fill });

  const base = "#262a3a";
  const pulse = { duration: 5, repeat: Infinity, ease: "easeInOut" as const };

  const links = [
    "M210 52 L120 110",
    "M210 52 L300 110",
    "M120 110 L80 168",
    "M120 110 L160 168",
    "M300 110 L260 168",
    "M300 110 L340 168",
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {links.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke={base}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={i === 0 ? { stroke: [base, "#fb7185", base] } : { stroke: base }}
          transition={pulse}
        />
      ))}

      {/* root — the state change happens here */}
      <motion.circle
        {...node(210, 52, "#818cf8")} r="14"
        animate={{ fill: ["#818cf8", "#fb7185", "#818cf8"], scale: [1, 1.25, 1] }}
        transition={pulse}
        style={{ originX: "210px", originY: "52px" }}
      />
      <text x="210" y="34" textAnchor="middle" fill="#8b93ab" fontSize="10">
        {L("App · state تغییر می‌کند", "App · state changes")}
      </text>

      {/* mid nodes */}
      <motion.circle {...node(120, 110, base)} r="11" animate={{ fill: [base, "#f59e0b", base] }} transition={{ ...pulse, delay: 0.35 }} />
      <circle {...node(300, 110, base)} r="11" fill={base} />

      {/* leaves */}
      <motion.circle {...node(80, 168, base)} r="9" animate={{ fill: [base, "#34d399", base] }} transition={{ ...pulse, delay: 0.7 }} />
      <motion.circle {...node(160, 168, base)} r="9" animate={{ fill: [base, "#34d399", base] }} transition={{ ...pulse, delay: 0.85 }} />
      <circle {...node(260, 168, base)} r="9" fill={base} />
      <circle {...node(340, 168, base)} r="9" fill={base} />

      {/* diff caption */}
      <motion.g animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 5, repeat: Infinity }}>
        <rect x="292" y="18" width="118" height="24" rx="12" fill="#1c1f2e" stroke="#3a4056" />
        <text x="351" y="34" textAnchor="middle" fill="#c6cbdd" fontSize="10" fontFamily="monospace">
          {L("diff → رندر دوباره", "diff → re-render")}
        </text>
      </motion.g>
    </svg>
  );
}
