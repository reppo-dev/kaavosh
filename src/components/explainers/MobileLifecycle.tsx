"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — Android/iOS app lifecycle.
 * Four state chips (created → visible → paused → destroyed) light up
 * in sequence around a phone whose screen dims and brightens to match,
 * with a loop arrow back to creation.
 * Pure SVG + CSS — no video, drawn live in the browser.
 */
export function MobileLifecycleExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 6, repeat: Infinity, ease: "easeInOut" as const };

  const chips = [
    { x: 26, y: 38, label: L("ساخته شد", "created"), accent: "#a3e635", t: [0, 0.03, 0.06, 0.13, 0.17] },
    { x: 306, y: 38, label: L("دیده می‌شود", "visible"), accent: "#22d3ee", t: [0, 0.17, 0.21, 0.43, 0.47] },
    { x: 306, y: 164, label: L("متوقف", "paused"), accent: "#c084fc", t: [0, 0.47, 0.51, 0.69, 0.73] },
    { x: 26, y: 164, label: L("نابود شد", "destroyed"), accent: "#fb7185", t: [0, 0.73, 0.77, 0.87, 0.91] },
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <defs>
        <marker id="mlc-arrow" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 8 4 L 0 8 Z" fill="#3a4056" />
        </marker>
      </defs>

      {/* lifecycle loop arrows: created → visible → paused → destroyed → created */}
      {[
        { d: "M 118 46 C 158 26, 262 26, 302 46", accent: "#22d3ee", o: [0, 0, 1, 1, 0], times: [0, 0.12, 0.16, 0.2, 0.24] },
        { d: "M 350 68 C 392 92, 392 138, 350 160", accent: "#c084fc", o: [0, 0, 1, 1, 0], times: [0, 0.42, 0.46, 0.5, 0.54] },
        { d: "M 302 180 C 260 200, 160 200, 118 180", accent: "#fb7185", o: [0, 0, 1, 1, 0], times: [0, 0.68, 0.72, 0.76, 0.8] },
        { d: "M 70 160 C 28 138, 28 88, 70 68", accent: "#a3e635", o: [0, 0, 1, 1, 0], times: [0, 0.88, 0.92, 0.96, 1] },
      ].map((a, i) => (
        <g key={i}>
          <path d={a.d} fill="none" stroke="#3a4056" strokeWidth="1.5" markerEnd="url(#mlc-arrow)" />
          <motion.g
            animate={{ opacity: a.o }}
            transition={{ ...loop, times: a.times }}
          >
            <motion.path d={a.d} fill="none" stroke={a.accent} strokeWidth="1.5" strokeDasharray="4 8"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            />
          </motion.g>
        </g>
      ))}

      {/* phone frame */}
      <rect x="180" y="44" width="60" height="124" rx="14" fill="#12141f" stroke="#3a4056" strokeWidth="2" />
      <rect x="187" y="56" width="46" height="96" rx="6" fill="#0a0c14" stroke="#1c1f2e" />
      <rect x="200" y="48" width="20" height="3" rx="1.5" fill="#262a3a" />
      <rect x="196" y="157" width="28" height="3" rx="1.5" fill="#262a3a" />

      {/* app UI on screen */}
      <rect x="193" y="64" width="34" height="8" rx="3" fill="#262a3a" />
      <rect x="193" y="78" width="24" height="8" rx="3" fill="#262a3a" />
      <rect x="193" y="92" width="30" height="6" rx="3" fill="#262a3a" />

      {/* screen brightness: bright while visible, dim while paused, off when destroyed */}
      <motion.rect x="187" y="56" width="46" height="96" rx="6" fill="#22d3ee"
        animate={{ opacity: [0, 0.3, 0.18, 0.18, 0.04, 0, 0] }}
        transition={{ ...loop, times: [0, 0.05, 0.14, 0.46, 0.52, 0.72, 1] }}
      />
      <motion.rect x="187" y="56" width="46" height="96" rx="6" fill="#0a0c14"
        animate={{ opacity: [0, 0, 0.5, 0.5, 1, 1] }}
        transition={{ ...loop, times: [0, 0.46, 0.52, 0.7, 0.78, 1] }}
      />
      <motion.text x="210" y="110" textAnchor="middle" fontSize="16" fill="#fb7185"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ ...loop, times: [0, 0.74, 0.78, 0.88, 1] }}
      >
        ✕
      </motion.text>

      {/* state chips */}
      {chips.map((c) => (
        <g key={c.label}>
          <rect x={c.x} y={c.y} width="88" height="26" rx="13" fill="#1c1f2e" stroke="#3a4056" />
          <motion.rect x={c.x} y={c.y} width="88" height="26" rx="13" fill={c.accent}
            animate={{ opacity: [0, 0, 0.2, 0.2, 0] }}
            transition={{ ...loop, times: c.t }}
          />
          <motion.rect x={c.x} y={c.y} width="88" height="26" rx="13" fill="none" stroke={c.accent} strokeWidth="1.5"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ ...loop, times: c.t }}
          />
          <circle cx={c.x + 16} cy={c.y + 13} r="3" fill={c.accent} opacity="0.35" />
          <motion.circle cx={c.x + 16} cy={c.y + 13} r="3" fill={c.accent}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ ...loop, times: c.t }}
          />
          <text x={c.x + 52} y={c.y + 17} textAnchor="middle" fill="#8b93ab" fontSize="10" fontFamily="monospace">
            {c.label}
          </text>
        </g>
      ))}

      {/* caption */}
      <text x="210" y="222" textAnchor="middle" fill="#8b93ab" fontSize="9" fontFamily="monospace">
        {L("ساخته شد → دیده می‌شود → متوقف → نابود شد", "created → visible → paused → destroyed")}
      </text>
    </svg>
  );
}
