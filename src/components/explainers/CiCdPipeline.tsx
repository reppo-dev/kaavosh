"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — continuous integration / delivery.
 * A commit dot rides a 4-stage pipeline (commit → build → test →
 * deploy), each stage checks green, then a rocket ships to production.
 * Pure SVG + CSS — no video, drawn live in the browser.
 */
export function CiCdPipelineExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 6, repeat: Infinity, ease: "easeInOut" as const };

  const stages = [
    { x: 24, label: L("کامیت", "commit"), accent: "#818cf8", t: 0.1 },
    { x: 112, label: L("ساخت", "build"), accent: "#22d3ee", t: 0.3 },
    { x: 200, label: L("تست", "test"), accent: "#a3e635", t: 0.5 },
    { x: 288, label: L("انتشار", "deploy"), accent: "#34d399", t: 0.62 },
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* headline badge */}
      <motion.g
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <rect x="150" y="16" width="120" height="22" rx="11" fill="#1c1f2e" stroke="#3a4056" />
        <text x="210" y="31" textAnchor="middle" fill="#c6cbdd" fontSize="10" fontFamily="monospace">
          push → production
        </text>
      </motion.g>

      {/* pipeline stages */}
      {stages.map((s) => (
        <g key={s.label}>
          <rect x={s.x} y="64" width="76" height="44" rx="10" fill="#12141f" stroke="#3a4056" />
          <motion.rect x={s.x} y="64" width="76" height="44" rx="10" fill={s.accent}
            animate={{ opacity: [0, 0, 0.16, 0.16] }}
            transition={{ ...loop, times: [0, s.t - 0.02, s.t, 1] }}
          />
          <text x={s.x + 38} y="90" textAnchor="middle" fill="#c6cbdd" fontSize="10" fontFamily="monospace">
            {s.label}
          </text>
          {/* green check pops above the box when the stage passes */}
          <motion.g
            animate={{ opacity: [0, 0, 1, 1], y: [6, 6, 0, 0] }}
            transition={{ ...loop, times: [0, s.t, s.t + 0.05, 1] }}
          >
            <circle cx={s.x + 38} cy="52" r="8" fill="#0a0c14" stroke="#34d399" strokeWidth="1.5" />
            <path
              d={`M ${s.x + 34.5} 52 L ${s.x + 37} 54.5 L ${s.x + 41.5} 49.5`}
              stroke="#34d399" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
          </motion.g>
        </g>
      ))}

      {/* connectors */}
      {[106, 194, 282].map((x) => (
        <path key={x} d={`M ${x + 1} 82.5 L ${x + 6.5} 86 L ${x + 1} 89.5`}
          stroke="#3a4056" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      ))}

      {/* commit dot riding the pipeline */}
      <motion.circle r="5" cy="86" fill="#818cf8"
        animate={{
          cx: [10, 62, 150, 238, 326, 326],
          opacity: [1, 1, 1, 1, 0, 0],
        }}
        transition={{ ...loop, times: [0, 0.1, 0.3, 0.5, 0.62, 1] }}
      />
      <text x="62" y="126" textAnchor="middle" fill="#8b93ab" fontSize="8" fontFamily="monospace">
        git push
      </text>

      {/* dashed shipping route to production */}
      <path d="M 326 112 C 334 130, 348 142, 364 152" fill="none" stroke="#262a3a" strokeWidth="1.5" strokeDasharray="3 5" />

      {/* rocket firing along the route */}
      <motion.g
        animate={{
          x: [326, 326, 348, 366, 366, 366],
          y: [106, 106, 130, 152, 152, 152],
          opacity: [0, 0, 1, 1, 0, 0],
        }}
        transition={{ ...loop, times: [0, 0.66, 0.7, 0.8, 0.85, 1] }}
      >
        <g transform="rotate(135)">
          <motion.path d="M 0 7 C -1.5 10, 1.5 10, 0 13 Z" fill="#fb7185"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.35, repeat: Infinity }}
          />
          <path d="M 0 -7 L 3 3 L 3 6 L -3 6 L -3 3 Z" fill="#c6cbdd" />
          <path d="M -3 3 L -6 7 L -3 6 Z M 3 3 L 6 7 L 3 6 Z" fill="#22d3ee" />
          <circle cx="0" cy="-1" r="1.6" fill="#0a0c14" stroke="#22d3ee" strokeWidth="0.8" />
        </g>
      </motion.g>

      {/* production cloud */}
      <g fill="#1c1f2e">
        <ellipse cx="372" cy="176" rx="32" ry="13" />
        <circle cx="356" cy="166" r="11" />
        <circle cx="378" cy="162" r="13" />
        <circle cx="394" cy="172" r="9" />
      </g>
      <motion.g fill="#34d399"
        animate={{ opacity: [0, 0, 0.14, 0.14] }}
        transition={{ ...loop, times: [0, 0.78, 0.82, 1] }}
      >
        <ellipse cx="372" cy="176" rx="32" ry="13" />
        <circle cx="356" cy="166" r="11" />
        <circle cx="378" cy="162" r="13" />
        <circle cx="394" cy="172" r="9" />
      </motion.g>
      <motion.text x="372" y="200" textAnchor="middle" fill="#8b93ab" fontSize="10"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.78, 0.82, 1] }}
      >
        production
      </motion.text>
      <motion.text x="372" y="200" textAnchor="middle" fill="#34d399" fontSize="10"
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ ...loop, times: [0, 0.78, 0.82, 1] }}
      >
        production ✓
      </motion.text>

      {/* caption */}
      <text x="210" y="222" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("هر push: ساخت → تست → انتشار → تحویل", "every push: build → test → deploy → ship")}
      </text>
    </svg>
  );
}
