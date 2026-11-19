"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — Git branching & merging.
 * A main timeline of commits, a feature branch splits off,
 * grows, and merges back with a merge node.
 */
export function GitFlowExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 6, repeat: Infinity, ease: "easeInOut" as const };
  const dot = (cx: number, cy: number, color: string) => (
    <circle cx={cx} cy={cy} r="6" fill={color} />
  );

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* main line */}
      <path d="M30 160 H390" stroke="#262a3a" strokeWidth="2.5" />
      {/* branch curve */}
      <path d="M150 160 C 190 160, 195 96, 235 96 H330 C 355 96, 360 128, 375 150"
        stroke="#262a3a" strokeWidth="2.5" fill="none" strokeDasharray="0" />

      {/* main commits */}
      {[
        { x: 50, c: "#818cf8" },
        { x: 100, c: "#818cf8" },
        { x: 150, c: "#818cf8" },
        { x: 390, c: "#a3e635" },
      ].map((d, i) => (
        <motion.g key={d.x} initial={{ scale: 0.7, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...loop, delay: i * 0.35, duration: 1.2 }}
          style={{ originX: `${d.x}px`, originY: "160px" }}>
          {dot(d.x, 160, d.c)}
        </motion.g>
      ))}

      {/* feature branch commits */}
      {[
        { x: 260, c: "#22d3ee" },
        { x: 300, c: "#22d3ee" },
      ].map((d, i) => (
        <motion.g key={d.x}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 }}
        >
          {dot(d.x, 96, d.c)}
        </motion.g>
      ))}

      {/* labels */}
      <text x="46" y="190" fill="#8b93ab" fontSize="10">main</text>
      <text x="278" y="82" fill="#8b93ab" fontSize="10">{L("شاخه‌ی feature", "feature branch")}</text>

      {/* traveling commit on branch */}
      <motion.circle r="6" fill="#22d3ee" cy="96"
        animate={{ cx: [235, 300], opacity: [0, 1, 1, 0] }}
        transition={{ ...loop, times: [0, 0.3, 0.55, 1] }}
      />
      {/* merge highlight */}
      <motion.circle cx="390" cy="160" r="6" fill="#a3e635"
        animate={{ scale: [1, 1.7, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ ...loop, times: [0.62, 0.75, 1] }}
        style={{ originX: "390px", originY: "160px" }}
      />
      <motion.text x="352" y="196" fill="#a3e635" fontSize="10"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ ...loop, times: [0, 0.62, 0.72, 0.9, 1] }}
      >
        {L("ادغام!", "merge!")}
      </motion.text>
    </svg>
  );
}
