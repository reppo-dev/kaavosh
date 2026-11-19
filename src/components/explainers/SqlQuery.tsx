"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — a SELECT query executing.
 * Rows stream through the WHERE filter; only matching ones
 * reach the result set. The query's shape, step by step.
 */
export function SqlQueryExplainer() {
  const { L } = useExplainerLocale();
  const rows = [
    { city: "Tehran", ok: true },
    { city: "Paris", ok: false },
    { city: "Shiraz", ok: true },
    { city: "London", ok: false },
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* query box */}
      <rect x="24" y="40" width="120" height="90" rx="12" fill="#12141f" stroke="#3a4056" />
      <text x="84" y="60" textAnchor="middle" fill="#8b93ab" fontSize="10">query</text>
      <text x="36" y="82" fill="#22d3ee" fontSize="10" fontFamily="monospace">SELECT *</text>
      <text x="36" y="100" fill="#22d3ee" fontSize="10" fontFamily="monospace">FROM users</text>
      <text x="36" y="118" fill="#c084fc" fontSize="10" fontFamily="monospace">WHERE city=</text>

      {/* table */}
      <text x="215" y="34" textAnchor="middle" fill="#8b93ab" fontSize="10">
        {L("جدول", "table")}
      </text>
      {rows.map((r, i) => (
        <motion.g
          key={r.city}
          animate={{ x: r.ok ? [0, 90, 90] : [0, 55, 55], opacity: r.ok ? [1, 1, 1] : [1, 1, 0.2] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.35, times: [0, 0.5, 1] }}
        >
          <rect x="170" y={44 + i * 34} width="90" height="26" rx="7"
            fill="#12141f" stroke={r.ok ? "#a3e635" : "#3a4056"} strokeWidth={r.ok ? 1.8 : 1} />
          <text x="215" y={61 + i * 34} textAnchor="middle" fill="#e2e8f0" fontSize="10">{r.city}</text>
        </motion.g>
      ))}

      {/* filter bar */}
      <motion.line x1="272" y1="36" x2="272" y2="180" stroke="#c084fc" strokeWidth="2.4" strokeDasharray="6 4"
        animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.4, repeat: Infinity }} />
      <text x="290" y="112" fill="#c084fc" fontSize="9">
        {L("فیلتر WHERE", "WHERE filter")}
      </text>

      {/* result */}
      <text x="370" y="34" textAnchor="middle" fill="#8b93ab" fontSize="10">
        {L("نتیجه", "result")}
      </text>
      <rect x="330" y="44" width="66" height="112" rx="10" fill="#12141f" stroke="#a3e635" strokeWidth="1.6" />
      {[0, 1].map((i) => (
        <motion.rect key={i} x="340" y={56 + i * 34} width="46" height="24" rx="6"
          fill="#14532d" stroke="#a3e635" strokeWidth="1"
          animate={{ opacity: [0, 0, 1, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: 0.5 + i * 0.4, times: [0, 0.4, 0.7, 1] }} />
      ))}
      <motion.text x="363" y="72" textAnchor="middle" fill="#a3e635" fontSize="9"
        animate={{ opacity: [0, 0, 1, 1] }} transition={{ duration: 3.2, repeat: Infinity, delay: 0.6, times: [0, 0.4, 0.7, 1] }}>
        Tehran
      </motion.text>
      <motion.text x="363" y="106" textAnchor="middle" fill="#a3e635" fontSize="9"
        animate={{ opacity: [0, 0, 1, 1] }} transition={{ duration: 3.2, repeat: Infinity, delay: 1, times: [0, 0.4, 0.7, 1] }}>
        Shiraz
      </motion.text>

      <motion.text
        x="210" y="212" textAnchor="middle" fill="#8b93ab" fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("سطرها یکی‌یکی از فیلتر می‌گذرند؛ فقط منطبق‌ها به نتیجه می‌رسند", "rows pass the filter one by one; only matches reach the result")}
      </motion.text>
    </svg>
  );
}
