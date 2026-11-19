"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — CSS specificity as a scoreboard.
 * id (100) beats class (10) beats tag (1); the highest score
 * wins the element, regardless of file order.
 */
export function CssCascadeExplainer() {
  const { L } = useExplainerLocale();
  const rules = [
    { sel: "#header", score: "100", pts: [1, 0, 0], color: "#c084fc", win: true },
    { sel: ".title", score: "10", pts: [0, 1, 0], color: "#22d3ee", win: false },
    { sel: "h1", score: "1", pts: [0, 0, 1], color: "#6366f1", win: false },
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L('سه قاعده روی یک <h1 class="title" id="header"> — برنده کیست؟', 'three rules on one <h1 class="title" id="header"> — who wins?')}
      </text>

      {rules.map((r, i) => {
        const y = 52 + i * 46;
        return (
          <motion.g
            key={r.sel}
            animate={{ opacity: r.win ? [0.6, 1, 0.6] : [0.45, 0.75, 0.45] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.4 }}
          >
            <rect
              x="36" y={y} width="270" height="38" rx="9"
              fill="#12141f"
              stroke={r.win ? "#a3e635" : "#3a4056"}
              strokeWidth={r.win ? 2 : 1}
            />
            <text x="52" y={y + 24} fill={r.color} fontSize="12" fontFamily="monospace">{r.sel}</text>
            {/* score chips: id · class · tag */}
            {r.pts.map((p, j) => (
              <g key={j}>
                <rect x={188 + j * 34} y={y + 9} width="28" height="20" rx="5" fill={p ? r.color : "#262a3a"} opacity={p ? 0.9 : 0.5} />
                <text x={202 + j * 34} y={y + 23} textAnchor="middle" fill={p ? "#0a0c14" : "#8b93ab"} fontSize="9" fontWeight="700">
                  {p}
                </text>
              </g>
            ))}
            <text x={300} y={y + 24} textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="700">
              {r.score}
            </text>
            {r.win && (
              <motion.text x="336" y={y + 24} fill="#a3e635" fontSize="11" fontWeight="700"
                animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.8, repeat: Infinity }}>
                {L("برنده ✓", "wins ✓")}
              </motion.text>
            )}
          </motion.g>
        );
      })}

      {/* column labels */}
      <g fill="#4a5168" fontSize="9">
        <text x="202" y="44" textAnchor="middle">id</text>
        <text x="236" y="44" textAnchor="middle">class</text>
        <text x="270" y="44" textAnchor="middle">tag</text>
        <text x="300" y="44" textAnchor="middle">{L("امتیاز", "score")}</text>
      </g>

      <motion.text
        x="210"
        y="212"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("!important فقط به‌عنوان آخرین راه‌حل — همه‌چیز را می‌شکند", "!important is the last resort — it breaks everything")}
      </motion.text>
    </svg>
  );
}
