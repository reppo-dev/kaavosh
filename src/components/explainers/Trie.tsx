"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — trie (prefix tree).
 * Letters walk from the root edge by edge; a shared prefix
 * means a shared path, and the word end gets a flag.
 */
export function TrieExplainer() {
  const { L } = useExplainerLocale();

  // root at (70,150); "cat" path; "bat" branches
  const root = { x: 70, y: 150 };
  const cat = [
    { x: 150, y: 110, ch: "c" },
    { x: 230, y: 80, ch: "a" },
    { x: 310, y: 60, ch: "t" },
  ];
  const bat = [
    { x: 150, y: 190, ch: "b" },
    { x: 230, y: 170, ch: "a" },
  ];

  const edge = (x1: number, y1: number, x2: number, y2: number, color: string, delay: number) => (
    <motion.path
      d={`M${x1} ${y1} L${x2} ${y2}`}
      stroke={color}
      strokeWidth="2"
      fill="none"
      animate={{ pathLength: [0, 1, 1], opacity: [0.4, 1, 1] }}
      transition={{ duration: 2.6, repeat: Infinity, delay, times: [0, 0.5, 1] }}
    />
  );

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L('ذخیره‌ی "cat" و "bat" — مسیر مشترک فقط برای پیشوند مشترک', 'store "cat" and "bat" — shared prefix = shared path')}
      </text>

      {/* root */}
      <circle cx={root.x} cy={root.y} r="16" fill="#12141f" stroke="#6366f1" strokeWidth="2" />
      <text x={root.x} y={root.y + 4} textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("ریشه", "root")}
      </text>

      {/* cat path */}
      {edge(root.x + 14, root.y - 8, cat[0].x - 12, cat[0].y + 8, "#6366f1", 0)}
      {edge(cat[0].x + 10, cat[0].y - 6, cat[1].x - 12, cat[1].y + 6, "#6366f1", 0.8)}
      {edge(cat[1].x + 10, cat[1].y - 4, cat[2].x - 12, cat[2].y + 6, "#6366f1", 1.6)}
      {cat.map((n, i) => (
        <motion.g key={`c${i}`} animate={{ opacity: [0.2, 1, 1, 0.2] }} transition={{ duration: 3.4, repeat: Infinity, delay: i * 0.8, times: [0, 0.3, 0.85, 1] }}>
          <circle cx={n.x} cy={n.y} r="14" fill="#12141f" stroke="#6366f1" strokeWidth="2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="12">{n.ch}</text>
        </motion.g>
      ))}
      {/* word-end flag */}
      <motion.g animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3.4, repeat: Infinity, delay: 2.4, times: [0, 0.3, 0.85, 1] }}>
        <rect x={cat[2].x + 18} y={cat[2].y - 26} width="58" height="18" rx="6" fill="#14532d" stroke="#a3e635" />
        <text x={cat[2].x + 47} y={cat[2].y - 13} textAnchor="middle" fill="#a3e635" fontSize="9">
          {L("پایان ✓", "end ✓")}
        </text>
      </motion.g>

      {/* bat path */}
      {edge(root.x + 14, root.y + 8, bat[0].x - 12, bat[0].y - 8, "#c084fc", 1.2)}
      {edge(bat[0].x + 10, bat[0].y + 2, bat[1].x - 12, bat[1].y - 2, "#c084fc", 2)}
      {bat.map((n, i) => (
        <motion.g key={`b${i}`} animate={{ opacity: [0.2, 1, 1, 0.2] }} transition={{ duration: 3.4, repeat: Infinity, delay: 1.2 + i * 0.8, times: [0, 0.3, 0.85, 1] }}>
          <circle cx={n.x} cy={n.y} r="14" fill="#12141f" stroke="#c084fc" strokeWidth="2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="12">{n.ch}</text>
        </motion.g>
      ))}

      <motion.text
        x="210"
        y="218"
        textAnchor="middle"
        fill="#22d3ee"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("هزینه‌ی lookup برابر طول کلمه است — نه اندازه‌ی دیکشنری", "lookup costs O(word length) — not dictionary size")}
      </motion.text>
    </svg>
  );
}
