"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — binary search.
 * On a sorted array, the probe starts in the middle, halves the
 * search space each step and lands on the target: O(log n) made visible.
 */
const values = [3, 7, 12, 19, 25, 31, 44, 58];
const target = 31;
const probes = [3, 5]; // mid=3 → 19<31 → go right; mid=5 → found

export function BinarySearchExplainer() {
  const { L } = useExplainerLocale();
  const cellW = 44;
  const x0 = 30;

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L(`target = ${target} — آرایه‌ی مرتب، هر گام نصف می‌شود`, `target = ${target} — sorted array, halve every probe`)}
      </text>

      {values.map((v, i) => {
        const isProbe = probes.includes(i);
        const isFound = i === 5;
        return (
          <g key={i}>
            <motion.rect
              x={x0 + i * (cellW + 6)}
              y="48"
              width={cellW}
              height="40"
              rx="8"
              fill="#12141f"
              stroke={isFound ? "#a3e635" : isProbe ? "#6366f1" : "#3a4056"}
              strokeWidth={isFound || isProbe ? 2 : 1}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.18 }}
            />
            <text x={x0 + i * (cellW + 6) + cellW / 2} y="73" textAnchor="middle" fill="#e2e8f0" fontSize="13">
              {v}
            </text>
            <text x={x0 + i * (cellW + 6) + cellW / 2} y="106" textAnchor="middle" fill="#4a5168" fontSize="9">
              {i}
            </text>
          </g>
        );
      })}

      {/* probe indicator travelling over the array */}
      <motion.g
        animate={{ x: [x0 + 3 * (cellW + 6) + cellW / 2, x0 + 5 * (cellW + 6) + cellW / 2] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1, times: [0, 0.9] }}
      >
        <path d="M0 40 l-6 -12 h12 z" fill="#c084fc" />
      </motion.g>

      {/* step log */}
      <g fontFamily="monospace" fontSize="10">
        <motion.text x="30" y="140" fill="#8b93ab" animate={{ opacity: [0, 1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.25, 1] }}>
          {L(`probe 1: mid=3 → 19 < ${target} → نیمه‌ی چپ حذف`, `probe 1: mid=3 → 19 < ${target} → discard left half`)}
        </motion.text>
        <motion.text x="30" y="160" fill="#a3e635" animate={{ opacity: [0, 1, 1] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 1] }}>
          {L(`probe 2: mid=5 → 31 = ${target} → پیدا شد!`, `probe 2: mid=5 → 31 = ${target} → found!`)}
        </motion.text>
        <motion.text x="30" y="186" fill="#22d3ee" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity }}>
          {L("۲ گام از ۸ عنصر — همان O(log n)", "2 probes of 8 items — that's O(log n)")}
        </motion.text>
      </g>
    </svg>
  );
}
