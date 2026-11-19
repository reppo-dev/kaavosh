"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — closures and scope.
 * The inner function keeps a live bubble of the outer scope
 * alive even after the outer call has returned.
 */
export function ScopeClosureExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* outer scope bubble */}
      <motion.rect
        x="30" y="40" width="220" height="160" rx="16"
        fill="#6366f1" opacity="0.08" stroke="#6366f1" strokeWidth="1.6"
        animate={{ opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <text x="52" y="62" fill="#6366f1" fontSize="10" fontWeight="700">
        {L("outer() — تمام شد ولی…", "outer() — returned, but…")}
      </text>
      <rect x="50" y="76" width="100" height="24" rx="6" fill="#1e1b31" stroke="#6366f1" />
      <text x="100" y="92" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="monospace">let count = 0</text>

      {/* inner scope bubble */}
      <rect x="150" y="110" width="86" height="72" rx="12" fill="#12141f" stroke="#22d3ee" strokeWidth="1.8" />
      <text x="193" y="130" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="700">inner()</text>
      <text x="193" y="146" textAnchor="middle" fill="#8b93ab" fontSize="9">count++</text>
      <text x="193" y="162" textAnchor="middle" fill="#8b93ab" fontSize="9">return count</text>

      {/* link from inner to outer variable */}
      <motion.path
        d="M170 132 C 130 110, 140 90, 152 88"
        stroke="#a3e635"
        strokeWidth="2"
        fill="none"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      <text x="105" y="122" fill="#a3e635" fontSize="9">
        {L("زنده نگه داشته شد", "kept alive")}
      </text>

      {/* returned function travels out */}
      <motion.g
        animate={{ x: [0, 130, 130], y: [0, -18, -18] }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.5, 1] }}
      >
        <rect x="256" y="128" width="70" height="34" rx="8" fill="#14532d" stroke="#a3e635" />
        <text x="291" y="149" textAnchor="middle" fill="#a3e635" fontSize="10" fontFamily="monospace">inner</text>
      </motion.g>

      {/* counter calls */}
      <g fontFamily="monospace" fontSize="10">
        <motion.text x="336" y="70" fill="#22d3ee" animate={{ opacity: [0, 1, 1] }} transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.3, 1] }}>
          counter() → 1
        </motion.text>
        <motion.text x="336" y="90" fill="#22d3ee" animate={{ opacity: [0, 1, 1] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.6, times: [0, 0.3, 1] }}>
          counter() → 2
        </motion.text>
        <motion.text x="336" y="110" fill="#22d3ee" animate={{ opacity: [0, 1, 1] }} transition={{ duration: 3.2, repeat: Infinity, delay: 1.2, times: [0, 0.3, 1] }}>
          counter() → 3
        </motion.text>
      </g>

      <motion.text
        x="210"
        y="216"
        textAnchor="middle"
        fill="#8b93ab"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("بستار = تابع + حافظه‌ی متغیرهای محل تولدش", "a closure = the function + a memory of its birthplace")}
      </motion.text>
    </svg>
  );
}
