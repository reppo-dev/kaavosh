"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — bubble sort.
 * Adjacent bars compare and swap while the sorted tail grows
 * from the right edge: O(n²) passes, minus the parts already done.
 */
const bars = [58, 34, 76, 22, 45];

export function SortingExplainer() {
  const { L } = useExplainerLocale();
  const barW = 52;
  const gap = 14;
  const x0 = 30;
  const baseY = 150;
  const maxH = 84;

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("مقایسه‌ی همسایه‌ها → جابه‌جایی → بزرگ‌ترین به انتها می‌رسد", "compare neighbours → swap → largest bubbles to the end")}
      </text>

      {bars.map((v, i) => {
        const x = x0 + i * (barW + gap);
        const h = (v / 100) * maxH + 22;
        return (
          <g key={i}>
            <motion.rect
              x={x}
              width={barW}
              rx="8"
              fill={i === 4 ? "#a3e635" : "#6366f1"}
              y={baseY - h}
              height={h}
              animate={{
                x: [x, x, x + barW + gap, x + barW + gap, x, x],
                fill: i === 4 ? ["#a3e635", "#a3e635", "#a3e635"] : ["#6366f1", "#c084fc", "#6366f1", "#6366f1"],
              }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.45, 0.75, 0.9, 1] }}
            />
            <motion.text
              x={x + barW / 2}
              y={baseY - h - 8}
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="12"
              animate={{ x: [x + barW / 2, x + barW / 2, x + barW / 2 + barW + gap, x + barW / 2 + barW + gap, x + barW / 2, x + barW / 2] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.45, 0.75, 0.9, 1] }}
            >
              {v}
            </motion.text>
          </g>
        );
      })}

      {/* sorted-tail bracket */}
      <motion.g animate={{ opacity: [0.2, 1, 1, 0.2] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.9, 1] }}>
        <path d={`M${x0 + 4 * (barW + gap) - 6} ${baseY + 10} h${barW + 12}`} stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />
        <text x={x0 + 4 * (barW + gap) + barW / 2} y={baseY + 26} textAnchor="middle" fill="#a3e635" fontSize="9">
          {L("مرتب", "sorted")}
        </text>
      </motion.g>

      <g fontFamily="monospace" fontSize="10">
        <motion.text x="30" y="200" fill="#8b93ab" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 3, repeat: Infinity }}>
          {L("n−1 گذر · تا n مقایسه در هر گذر · O(n²)", "n−1 passes · up to n comparisons each · O(n²)")}
        </motion.text>
      </g>
    </svg>
  );
}
