"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — from HTML to pixels.
 * Three source boxes (HTML/CSS/JS) merge into a growing DOM tree,
 * then the "screen" fills in blocks like a painting pass.
 */
export function DomRenderExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* sources */}
      {[
        { x: 24, label: "HTML", color: "#f97316" },
        { x: 24, y: 96, label: "CSS", color: "#38bdf8" },
        { x: 24, y: 162, label: "JS", color: "#facc15" },
      ].map((s) => (
        <g key={s.label}>
          <rect x={s.x} y={s.y ?? 30} width="66" height="44" rx="10" fill="#12141f" stroke={s.color} strokeOpacity="0.5" />
          <text x={s.x + 33} y={(s.y ?? 30) + 27} textAnchor="middle" fill={s.color} fontSize="12" fontWeight="700">
            {s.label}
          </text>
        </g>
      ))}

      {/* flow lines into the tree */}
      {[
        "M92 52 C 140 52, 140 100, 176 108",
        "M92 118 C 132 118, 140 112, 176 112",
        "M92 184 C 140 184, 140 128, 176 120",
      ].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="#262a3a"
          strokeWidth="2"
          fill="none"
          animate={{ strokeDasharray: "4 6", strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.4 + i * 0.2, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* DOM tree */}
      <g>
        <motion.circle cx="196" cy="114" r="12" fill="#818cf8"
          animate={{ scale: [1, 1.2, 1] }} transition={loop} style={{ originX: "196px", originY: "114px" }} />
        {[
          { x: 236, y: 80 }, { x: 236, y: 114 }, { x: 236, y: 148 },
        ].map((p, i) => (
          <motion.g key={i}>
            <path d={`M208 114 L ${p.x} ${p.y}`} stroke="#262a3a" strokeWidth="2" />
            <motion.circle cx={p.x} cy={p.y} r="8" fill="#1c1f2e" stroke="#3a4056"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          </motion.g>
        ))}
        <text x="210" y="190" textAnchor="middle" fill="#8b93ab" fontSize="10">{L("درخت DOM", "DOM tree")}</text>
      </g>

      {/* screen painting */}
      <g>
        <rect x="300" y="60" width="100" height="120" rx="10" fill="#0a0c14" stroke="#3a4056" />
        {[
          { y: 70, w: 80, c: "#818cf8" },
          { y: 92, w: 62, c: "#22d3ee" },
          { y: 114, w: 76, c: "#a3e635" },
          { y: 136, w: 52, c: "#c084fc" },
          { y: 158, w: 68, c: "#f97316" },
        ].map((b, i) => (
          <motion.rect
            key={b.y}
            x="310"
            y={b.y}
            width={b.w}
            height="12"
            rx="4"
            fill={b.c}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: [0, 1, 1, 0], x: [-14, 0, 0, 0] }}
            transition={{ ...loop, times: [i * 0.09, i * 0.09 + 0.18, 0.82, 1], delay: 0 }}
          />
        ))}
        <text x="350" y="198" textAnchor="middle" fill="#8b93ab" fontSize="10">{L("پیکسل‌ها", "pixels")}</text>
      </g>
    </svg>
  );
}
