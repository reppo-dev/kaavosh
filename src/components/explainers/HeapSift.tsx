"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — min-heap sift-up.
 * A new value lands at the end and bubbles up past its parents
 * until the heap property (parent ≤ child) holds again.
 */
export function HeapSiftExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("درج ۴ در min-heap — تا برقراری قانون بالا می‌رود", "insert 4 into a min-heap — it climbs until the rule holds")}
      </text>

      {/* tree edges */}
      <path d="M210 88 L 120 150 M210 88 L 300 150 M120 150 L 75 196 M300 150 L 345 196"
        stroke="#3a4056" strokeWidth="1.8" fill="none" />

      {/* nodes: 2 root, 5 and 8 children, new 4 under 5 */}
      {[
        { x: 210, y: 74, v: "2", c: "#6366f1" },
        { x: 120, y: 136, v: "5", c: "#6366f1" },
        { x: 300, y: 136, v: "8", c: "#6366f1" },
        { x: 75, y: 182, v: "7", c: "#6366f1" },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="17" fill="#12141f" stroke={n.c} strokeWidth="1.8" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fill="#e2e8f0" fontSize="13">{n.v}</text>
        </g>
      ))}

      {/* travelling new node 4: leaf under 5 → swap with 5 → stop below 2 */}
      <motion.g
        animate={{
          x: [40, 40, -45, -45],
          y: [0, 0, 0, 0],
        }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.35, 0.75, 1] }}
      >
        <motion.g
          animate={{ x: [60, 60, 145], y: [178, 178, 128] }}
          transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.35, 0.75] }}
        >
          <circle r="17" cx="0" cy="0" fill="#14532d" stroke="#a3e635" strokeWidth="2.2" />
          <text y="5" textAnchor="middle" fill="#a3e635" fontSize="13" fontWeight="700">4</text>
        </motion.g>
      </motion.g>
      {/* ghost leaf slot */}
      <circle cx="75" cy="178" r="17" fill="none" stroke="#3a4056" strokeWidth="1" strokeDasharray="3 3" />

      {/* comparison labels */}
      <motion.text x="150" y="118" fill="#fbbf24" fontSize="9"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.5, 0.9] }}>
        4 &lt; 5 ⇄
      </motion.text>
      <motion.text x="248" y="116" fill="#a3e635" fontSize="9"
        animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.6, 0.85, 1] }}>
        {L("4 > 2 ✓ توقف", "4 > 2 ✓ stop")}
      </motion.text>

      <motion.text
        x="210" y="222" textAnchor="middle" fill="#22d3ee" fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("هر گام با والد مقایسه می‌شود — O(log n)", "each step compares against the parent — O(log n)")}
      </motion.text>
    </svg>
  );
}
