"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — linked list insertion.
 * Nodes are scattered boxes tied by next-pointers; inserting
 * means rewiring two arrows — no shifting, no copying.
 */
export function LinkedListExplainer() {
  const { L } = useExplainerLocale();

  const node = (x: number, label: string, stroke: string, pulse = false) => (
    <g>
      <motion.rect
        x={x}
        y="92"
        width="64"
        height="44"
        rx="9"
        fill="#12141f"
        stroke={stroke}
        strokeWidth={pulse ? 2 : 1.4}
        animate={pulse ? { stroke: [stroke, "#a3e635", stroke] } : undefined}
        transition={pulse ? { duration: 2.2, repeat: Infinity } : undefined}
      />
      <text x={x + 20} y="120" fill="#e2e8f0" fontSize="14">{label}</text>
      <circle cx={x + 52} cy="126" r="3.4" fill={stroke} />
    </g>
  );

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="28" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L('head → A → B → C — درج "X" بین A و B', 'head → A → B → C — insert "X" between A and B')}
      </text>

      {/* old pointer A→B (fading out) */}
      <motion.path
        d="M172 114 H 216"
        stroke="#6b7280"
        strokeWidth="2"
        strokeDasharray="5 4"
        animate={{ opacity: [1, 0.15, 0.15, 1] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.8, 1] }}
      />
      <motion.text
        x="194"
        y="106"
        textAnchor="middle"
        fill="#f87171"
        fontSize="9"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.8, 1] }}
      >
        {L("قطع", "break")}
      </motion.text>

      {node(90, "A", "#6366f1")}
      {node(220, "B", "#22d3ee")}
      {node(348, "C", "#22d3ee")}
      <path d="M300 114 H 344" stroke="#22d3ee" strokeWidth="2" markerEnd="" />

      {/* incoming node X from above */}
      <motion.g
        animate={{ y: [-58, 0, 0, -58] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.85, 1] }}
      >
        {node(155, "X", "#a3e635", true)}
        <text x="187" y="86" textAnchor="middle" fill="#a3e635" fontSize="9">
          {L("گره‌ی جدید", "new node")}
        </text>
      </motion.g>

      {/* new arrows A→X and X→B */}
      <motion.path
        d="M154 136 V 148 H 187"
        stroke="#a3e635"
        strokeWidth="2"
        fill="none"
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 0.85, 1] }}
      />
      <motion.path
        d="M220 136 V 148 H 187"
        stroke="#a3e635"
        strokeWidth="2"
        fill="none"
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.35, times: [0, 0.35, 0.85, 1] }}
      />

      <motion.text
        x="210"
        y="204"
        textAnchor="middle"
        fill="#a3e635"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("فقط دو اشاره‌گر عوض می‌شود — با داشتن جای درج، O(1)", "two pointer swaps — O(1) with the position in hand")}
      </motion.text>
    </svg>
  );
}
