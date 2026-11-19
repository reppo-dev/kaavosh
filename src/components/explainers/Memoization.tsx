"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — memoization / dynamic programming.
 * The naive tree recomputes the same subproblem again and again;
 * the memo table answers instantly the second time it's asked.
 */
export function MemoizationExplainer() {
  const { L } = useExplainerLocale();

  // fib(5) tree, left part only for clarity
  const treeNodes = [
    { id: "fib(5)", x: 70, y: 60, memo: false },
    { id: "fib(4)", x: 40, y: 110, memo: false },
    { id: "fib(3)", x: 100, y: 110, memo: true },
    { id: "fib(2)", x: 100, y: 160, memo: true },
  ];
  const memoRows = ["fib(0) → 0", "fib(1) → 1", "fib(2) → 1", "fib(3) → 2", "fib(4) → 3"];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="120" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("درخت فراخوانی", "call tree")}
      </text>
      <text x="320" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("جدول memo", "memo table")}
      </text>

      <path d="M70 66 L40 104 M70 66 L100 104 M100 116 L100 154" stroke="#3a4056" strokeWidth="1.6" fill="none" />
      {treeNodes.map((n, i) => (
        <g key={i}>
          <motion.rect
            x={n.x - 30}
            y={n.y - 13}
            width="60"
            height="26"
            rx="7"
            fill="#12141f"
            stroke={n.memo ? "#a3e635" : "#f87171"}
            strokeWidth="1.6"
            animate={n.memo ? { stroke: ["#f87171", "#a3e635", "#a3e635"] } : undefined}
            transition={n.memo ? { duration: 3, repeat: Infinity, delay: i * 0.4 } : undefined}
          />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="10">{n.id}</text>
        </g>
      ))}

      {/* memo hit stamp */}
      <motion.text
        x="100"
        y="192"
        textAnchor="middle"
        fill="#a3e635"
        fontSize="9"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.85, 1] }}
      >
        {L("cache hit — بدون محاسبه‌ی دوباره", "cache hit — no recompute")}
      </motion.text>

      {/* memo table filling */}
      <rect x="252" y="40" width="150" height="150" rx="12" fill="#12141f" stroke="#3a4056" />
      {memoRows.map((row, i) => (
        <motion.text
          key={i}
          x="266"
          y={64 + i * 25}
          fill="#e2e8f0"
          fontSize="11"
          fontFamily="monospace"
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.35, times: [0, 0.3, 0.6, 1] }}
        >
          {row}
        </motion.text>
      ))}

      <motion.text
        x="210"
        y="216"
        textAnchor="middle"
        fill="#22d3ee"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("هر زیرمسئله یک‌بار حل می‌شود → O(2ⁿ) می‌شود O(n)", "each subproblem solved once → O(2ⁿ) becomes O(n)")}
      </motion.text>
    </svg>
  );
}
