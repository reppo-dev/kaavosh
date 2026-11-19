"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — from JSX to the screen.
 * A line of JSX compiles into an element tree; React turns that
 * tree into the UI. Edit the code, the tree and UI follow.
 */
export function JsxFlowExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* code panel */}
      <rect x="20" y="40" width="150" height="120" rx="12" fill="#12141f" stroke="#3a4056" />
      <text x="95" y="60" textAnchor="middle" fill="#8b93ab" fontSize="10">JSX</text>
      <text x="34" y="82" fill="#c084fc" fontSize="10" fontFamily="monospace">&lt;Card&gt;</text>
      <text x="46" y="100" fill="#22d3ee" fontSize="10" fontFamily="monospace">&lt;Title /&gt;</text>
      <text x="46" y="118" fill="#22d3ee" fontSize="10" fontFamily="monospace">&lt;Body /&gt;</text>
      <text x="34" y="136" fill="#c084fc" fontSize="10" fontFamily="monospace">&lt;/Card&gt;</text>
      <motion.rect
        x="30"
        y="70"
        width="130"
        height="72"
        rx="6"
        fill="#6366f1"
        opacity="0.12"
        animate={{ opacity: [0.05, 0.18, 0.05] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />

      {/* arrow 1 */}
      <motion.path
        d="M176 100 H 216"
        stroke="#a3e635"
        strokeWidth="2"
        strokeDasharray="5 4"
        animate={{ strokeDashoffset: [0, -18] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
      />
      <text x="196" y="92" textAnchor="middle" fill="#a3e635" fontSize="9">
        {L("کامپایل", "compile")}
      </text>

      {/* element tree */}
      <rect x="222" y="40" width="90" height="120" rx="12" fill="#12141f" stroke="#3a4056" />
      <text x="267" y="60" textAnchor="middle" fill="#8b93ab" fontSize="10">
        {L("درخت المان", "element tree")}
      </text>
      <circle cx="267" cy="86" r="9" fill="#6366f1" />
      <circle cx="245" cy="126" r="7" fill="#22d3ee" />
      <circle cx="289" cy="126" r="7" fill="#22d3ee" />
      <path d="M267 95 L248 119 M267 95 L286 119" stroke="#3a4056" strokeWidth="1.6" />
      <motion.g animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 }}>
        <circle cx="267" cy="86" r="13" fill="none" stroke="#a3e635" strokeWidth="1.4" />
      </motion.g>

      {/* arrow 2 */}
      <motion.path
        d="M318 100 H 350"
        stroke="#a3e635"
        strokeWidth="2"
        strokeDasharray="5 4"
        animate={{ strokeDashoffset: [0, -18] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.3 }}
      />
      <text x="334" y="92" textAnchor="middle" fill="#a3e635" fontSize="9">
        {L("رندر", "render")}
      </text>

      {/* rendered UI */}
      <rect x="356" y="40" width="48" height="120" rx="12" fill="#12141f" stroke="#3a4056" />
      <motion.rect x="364" y="56" width="32" height="12" rx="4" fill="#6366f1"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.4, repeat: Infinity, delay: 1 }} />
      <rect x="364" y="76" width="32" height="34" rx="4" fill="#262a3a" />
      <rect x="364" y="118" width="32" height="8" rx="3" fill="#262a3a" />
      <rect x="364" y="132" width="32" height="8" rx="3" fill="#262a3a" />

      <motion.text
        x="210"
        y="196"
        textAnchor="middle"
        fill="#8b93ab"
        fontSize="10"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("JSX فقط توصیف است — ری‌اکت خودش درخت المان و UI را می‌سازد", "JSX only describes — React builds the element tree and the UI itself")}
      </motion.text>
    </svg>
  );
}
