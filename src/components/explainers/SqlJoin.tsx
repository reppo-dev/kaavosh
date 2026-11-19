"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — SQL JOIN.
 * Two tables slide together on a shared key; matching rows
 * glow and drop into the result table.
 */
export function SqlJoinExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 6.5, repeat: Infinity, ease: "easeInOut" as const };

  const rowsA = [
    { id: "1", name: "Ali" },
    { id: "2", name: "Sara" },
    { id: "3", name: "Reza" },
  ];
  const rowsB = [
    { id: "2", city: "Tehran" },
    { id: "3", city: "Shiraz" },
    { id: "9", city: "Rome" },
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* table A */}
      <g>
        <rect x="26" y="40" width="120" height="120" rx="10" fill="#12141f" stroke="#3a4056" />
        <text x="86" y="58" textAnchor="middle" fill="#8b93ab" fontSize="10">users</text>
        {rowsA.map((r, i) => (
          <g key={r.id}>
            <rect x="36" y={66 + i * 26} width="100" height="18" rx="5"
              fill={r.id === "1" ? "#1c1f2e" : "#262a3a"} />
            <text x="44" y={79 + i * 26} fill={r.id === "1" ? "#5c6379" : "#c6cbdd"} fontSize="9" fontFamily="monospace">
              {r.id} · {r.name}
            </text>
          </g>
        ))}
      </g>

      {/* table B slides in */}
      <motion.g
        animate={{ x: [24, 0], opacity: [0.4, 1] }}
        transition={{ ...loop, times: [0, 0.35], duration: 6.5 }}
      >
        <rect x="274" y="40" width="120" height="120" rx="10" fill="#12141f" stroke="#3a4056" />
        <text x="334" y="58" textAnchor="middle" fill="#8b93ab" fontSize="10">orders</text>
        {rowsB.map((r, i) => (
          <g key={r.id}>
            <rect x="284" y={66 + i * 26} width="100" height="18" rx="5"
              fill={r.id === "9" ? "#1c1f2e" : "#262a3a"} />
            <text x="292" y={79 + i * 26} fill={r.id === "9" ? "#5c6379" : "#c6cbdd"} fontSize="9" fontFamily="monospace">
              {r.id} · {r.city}
            </text>
          </g>
        ))}
      </motion.g>

      {/* key connection pulses on matching ids */}
      <motion.path
        d="M148 92 C 200 92, 220 118, 272 118"
        stroke="#a3e635" strokeWidth="2" fill="none"
        animate={{ opacity: [0, 1, 1, 0], strokeDasharray: "3 5", strokeDashoffset: [0, -24] }}
        transition={{ ...loop, times: [0.15, 0.3, 0.75, 0.9], duration: 6.5 }}
      />
      <motion.path
        d="M148 118 C 200 118, 220 92, 272 92"
        stroke="#a3e635" strokeWidth="2" fill="none"
        animate={{ opacity: [0, 1, 1, 0], strokeDasharray: "3 5", strokeDashoffset: [0, -24] }}
        transition={{ ...loop, times: [0.15, 0.3, 0.75, 0.9], duration: 6.5 }}
      />

      {/* result */}
      <motion.g
        animate={{ y: [16, 0], opacity: [0, 1] }}
        transition={{ ...loop, times: [0.55, 0.8], duration: 6.5 }}
      >
        <rect x="130" y="168" width="160" height="52" rx="10" fill="#12241a" stroke="#34d399" strokeOpacity="0.5" />
        <text x="210" y="186" textAnchor="middle" fill="#34d399" fontSize="10">{L("نتیجه‌ی JOIN", "JOIN result")}</text>
        <rect x="140" y="196" width="64" height="16" rx="5" fill="#262a3a" />
        <text x="172" y="208" textAnchor="middle" fill="#c6cbdd" fontSize="9" fontFamily="monospace">2 · Sara</text>
        <rect x="212" y="196" width="64" height="16" rx="5" fill="#262a3a" />
        <text x="244" y="208" textAnchor="middle" fill="#c6cbdd" fontSize="9" fontFamily="monospace">3 · Reza</text>
      </motion.g>
    </svg>
  );
}
