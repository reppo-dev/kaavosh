"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — two pointers over an array.
 * Two indices walk toward each other, comparing and swapping:
 * the shape behind reverse, rotate, two-sum and partition moves.
 */
export function ArrayOpsExplainer() {
  const { L } = useExplainerLocale();
  const cells = [9, 2, 7, 4];
  const cellW = 52;
  const gap = 10;
  const x0 = 78;

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("معکوس‌سازی درجا با دو اشاره‌گر — O(n) زمان، O(1) حافظه", "in-place reversal with two pointers — O(n) time, O(1) memory")}
      </text>

      {cells.map((v, i) => {
        const x = x0 + i * (cellW + gap);
        return (
          <g key={i}>
            <rect x={x} y="70" width={cellW} height="44" rx="9" fill="#12141f" stroke="#3a4056" />
            <motion.text
              x={x + cellW / 2}
              y="98"
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="14"
              animate={{ opacity: [1, 0, 0, 1] }}
              transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.35, 0.7, 1] }}
            >
              {v}
            </motion.text>
          </g>
        );
      })}

      {/* swapped values appear */}
      {[4, 7, 2, 9].map((v, i) => {
        const x = x0 + i * (cellW + gap);
        return (
          <motion.text
            key={v}
            x={x + cellW / 2}
            y="98"
            textAnchor="middle"
            fill="#a3e635"
            fontSize="14"
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.4, 0.85, 1] }}
          >
            {v}
          </motion.text>
        );
      })}

      {/* left pointer */}
      <motion.g
        animate={{ x: [x0 + cellW / 2, x0 + cellW / 2, x0 + 2 * (cellW + gap) + cellW / 2, x0 + 2 * (cellW + gap) + cellW / 2] }}
        transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
      >
        <path d="M0 130 l-6 -12 h12 z" fill="#22d3ee" />
        <text y="156" textAnchor="middle" fill="#22d3ee" fontSize="9">L</text>
      </motion.g>

      {/* right pointer */}
      <motion.g
        animate={{ x: [x0 + 3 * (cellW + gap) + cellW / 2, x0 + 3 * (cellW + gap) + cellW / 2, x0 + (cellW + gap) + cellW / 2, x0 + (cellW + gap) + cellW / 2] }}
        transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
      >
        <path d="M0 130 l-6 -12 h12 z" fill="#c084fc" />
        <text y="156" textAnchor="middle" fill="#c084fc" fontSize="9">R</text>
      </motion.g>

      {/* swap arc */}
      <motion.path
        d={`M${x0 + cellW / 2} 56 C ${x0 + cellW} 30, ${x0 + 3 * (cellW + gap)} 30, ${x0 + 3 * (cellW + gap) + cellW / 2} 56`}
        stroke="#a3e635"
        strokeWidth="2"
        fill="none"
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0.9, 0.9, 0.2, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.3, 0.8, 1] }}
      />
      <motion.text x="210" y="36" textAnchor="middle" fill="#a3e635" fontSize="9"
        animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.25, 0.7, 1] }}>
        swap ⇄
      </motion.text>

      <motion.text
        x="210" y="196" textAnchor="middle" fill="#8b93ab" fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("اشاره‌گرها به هم می‌رسند و کار تمام است", "the pointers meet and the job is done")}
      </motion.text>
    </svg>
  );
}
