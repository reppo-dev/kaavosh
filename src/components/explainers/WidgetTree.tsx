"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — the widget tree rebuild.
 * State changes mark the owning widget dirty; Flutter rebuilds
 * just that subtree and repaints — hot, fast, predictable.
 */
export function WidgetTreeExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("setState → زیردرخت دوباره ساخته می‌شود", "setState → the subtree rebuilds")}
      </text>

      {/* tree edges */}
      <path d="M210 70 L 110 120 M210 70 L 310 120 M110 140 L 70 180 M110 140 L 160 180 M310 140 L 355 180"
        stroke="#3a4056" strokeWidth="1.8" fill="none" />

      {/* root */}
      <rect x="170" y="46" width="80" height="30" rx="8" fill="#12141f" stroke="#6366f1" strokeWidth="1.8" />
      <text x="210" y="66" textAnchor="middle" fill="#6366f1" fontSize="10">Scaffold</text>

      {/* left branch — marked dirty, rebuilding */}
      <motion.g animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.6, repeat: Infinity }}>
        <rect x="72" y="112" width="76" height="30" rx="8" fill="#1e1b31" stroke="#fbbf24" strokeWidth="2" />
        <text x="110" y="132" textAnchor="middle" fill="#fbbf24" fontSize="10">Column</text>
        <text x="110" y="106" textAnchor="middle" fill="#fbbf24" fontSize="8">
          {L("کثیف ⚡", "dirty ⚡")}
        </text>
      </motion.g>

      {/* right branch — untouched */}
      <rect x="272" y="112" width="76" height="30" rx="8" fill="#12141f" stroke="#3a4056" strokeWidth="1.4" />
      <text x="310" y="132" textAnchor="middle" fill="#8b93ab" fontSize="10">AppBar</text>

      {/* leaves */}
      {[
        { x: 40, label: "Text" },
        { x: 130, label: "Image" },
      ].map((l, i) => (
        <motion.g key={l.label} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2.6, repeat: Infinity, delay: 0.4 + i * 0.3 }}>
          <rect x={l.x} y="166" width="62" height="28" rx="8" fill="#12141f" stroke="#22d3ee" strokeWidth="1.6" />
          <text x={l.x + 31} y="184" textAnchor="middle" fill="#22d3ee" fontSize="9">{l.label}</text>
        </motion.g>
      ))}
      <rect x="326" y="166" width="62" height="28" rx="8" fill="#12141f" stroke="#3a4056" strokeWidth="1.2" />
      <text x="357" y="184" textAnchor="middle" fill="#8b93ab" fontSize="9">Action</text>

      {/* frame flash */}
      <motion.rect
        x="58" y="102" width="104" height="102" rx="12"
        fill="none" stroke="#a3e635" strokeWidth="1.4" strokeDasharray="5 4"
        animate={{ opacity: [0, 0.9, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, times: [0, 0.45, 1] }}
      />
      <motion.text
        x="110" y="218" textAnchor="middle" fill="#a3e635" fontSize="9"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, times: [0, 0.45, 1] }}
      >
        {L("فقط همین زیردرخت rebuild شد", "only this subtree got rebuilt")}
      </motion.text>
    </svg>
  );
}
