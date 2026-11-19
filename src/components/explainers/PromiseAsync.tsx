"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — promise states and async/await.
 * A promise starts pending, then settles once — resolved or
 * rejected — and await picks the thread back up after it.
 */
export function PromiseAsyncExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* pending */}
      <motion.g animate={{ opacity: [1, 0.25, 0.25] }} transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.4, 1] }}>
        <rect x="30" y="95" width="90" height="44" rx="10" fill="#12141f" stroke="#fbbf24" strokeWidth="2" />
        <text x="75" y="114" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="700">pending</text>
        <text x="75" y="130" textAnchor="middle" fill="#8b93ab" fontSize="9">
          {L("در انتظار…", "waiting…")}
        </text>
      </motion.g>

      {/* settle arrows */}
      <path d="M124 108 C 160 90, 180 80, 214 74" stroke="#3a4056" strokeWidth="2" fill="none" />
      <path d="M124 126 C 160 144, 180 154, 214 160" stroke="#3a4056" strokeWidth="2" fill="none" />

      {/* resolved */}
      <motion.g animate={{ opacity: [0.25, 1, 0.25] }} transition={{ duration: 3.2, repeat: Infinity, delay: 1.2, times: [0, 0.4, 1] }}>
        <rect x="220" y="48" width="100" height="44" rx="10" fill="#12141f" stroke="#a3e635" strokeWidth="2" />
        <text x="270" y="67" textAnchor="middle" fill="#a3e635" fontSize="11" fontWeight="700">resolved ✓</text>
        <text x="270" y="83" textAnchor="middle" fill="#8b93ab" fontSize="9">
          {L("مقدار نهایی", "the value")}
        </text>
      </motion.g>

      {/* rejected */}
      <motion.g animate={{ opacity: [0.25, 1, 0.25] }} transition={{ duration: 3.2, repeat: Infinity, delay: 2, times: [0, 0.4, 1] }}>
        <rect x="220" y="134" width="100" height="44" rx="10" fill="#12141f" stroke="#f87171" strokeWidth="2" />
        <text x="270" y="153" textAnchor="middle" fill="#f87171" fontSize="11" fontWeight="700">rejected ✕</text>
        <text x="270" y="169" textAnchor="middle" fill="#8b93ab" fontSize="9">
          {L("خطا → catch", "error → catch")}
        </text>
      </motion.g>

      {/* one settle only stamp */}
      <motion.text
        x="345"
        y="108"
        fill="#a3e635"
        fontSize="10"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
      >
        {L("فقط یک‌بار", "settles")}
      </motion.text>
      <motion.text
        x="345"
        y="124"
        fill="#8b93ab"
        fontSize="9"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
      >
        {L("یک‌بار برای همیشه", "once and for all")}
      </motion.text>

      {/* await line */}
      <rect x="30" y="190" width="380" height="26" rx="8" fill="#0a0c14" stroke="#3a4056" />
      <motion.text x="220" y="207" textAnchor="middle" fill="#22d3ee" fontSize="10" fontFamily="monospace"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }}>
        {L("const data = await fetch(url)  ←  تا settle شدن منتظر می‌ماند", "const data = await fetch(url)  ←  waits until it settles")}
      </motion.text>
    </svg>
  );
}
