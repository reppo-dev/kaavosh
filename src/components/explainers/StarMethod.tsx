"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — the STAR interview method.
 * Situation → Task → Action → Result: one light travels the loop,
 * showing the order a strong behavioral answer follows.
 */
export function StarMethodExplainer() {
  const { L } = useExplainerLocale();
  const steps = [
    { id: "S", label: L("زمینه", "Situation"), color: "#6366f1" },
    { id: "T", label: L("وظیفه", "Task"), color: "#22d3ee" },
    { id: "A", label: L("اقدام", "Action"), color: "#c084fc" },
    { id: "R", label: L("نتیجه", "Result"), color: "#a3e635" },
  ];
  const positions = [
    { x: 60, y: 60 },
    { x: 270, y: 60 },
    { x: 270, y: 140 },
    { x: 60, y: 140 },
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="26" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("داستان را در همین ترتیب تعریف کن — ۶۰ تا ۹۰ ثانیه", "tell it in exactly this order — 60 to 90 seconds")}
      </text>

      {/* loop path */}
      <motion.path
        d="M150 75 H 265 M 290 90 V 130 M 265 155 H 155 M 130 140 V 90"
        stroke="#3a4056"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 5"
        animate={{ strokeDashoffset: [0, -22] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
      />

      {steps.map((s, i) => {
        const p = positions[i];
        return (
          <motion.g
            key={s.id}
            animate={{ opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.7 }}
          >
            <rect
              x={p.x - 40}
              y={p.y - 24}
              width="80"
              height="48"
              rx="10"
              fill="#12141f"
              stroke={s.color}
              strokeWidth="2"
            />
            <text x={p.x} y={p.y - 2} textAnchor="middle" fill={s.color} fontSize="15" fontWeight="700">
              {s.id}
            </text>
            <text x={p.x} y={p.y + 14} textAnchor="middle" fill="#e2e8f0" fontSize="10">
              {s.label}
            </text>
          </motion.g>
        );
      })}

      <motion.text
        x="210"
        y="205"
        textAnchor="middle"
        fill="#a3e635"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("نتیجه را با عدد بگو: زمان، درصد، درآمد — Result قابل اندازه‌گیری", "quantify the result: time, %, revenue — a measurable Result")}
      </motion.text>
    </svg>
  );
}
