"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — how a model learns.
 * Data dots stream into a small neural net, the loss curve draws
 * itself down toward zero, and the prediction flips ✗ → ✓.
 * Pure SVG + CSS — no video, drawn live in the browser.
 */
export function MlTrainingExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 6, repeat: Infinity, ease: "easeInOut" as const };

  const inputs: Array<[number, number]> = [
    [182, 70],
    [182, 96],
    [182, 122],
  ];
  const hidden: Array<[number, number]> = [
    [220, 83],
    [220, 109],
  ];
  const output: Array<[number, number]> = [[258, 96]];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* headline badge */}
      <motion.g
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <rect x="150" y="16" width="120" height="22" rx="11" fill="#1c1f2e" stroke="#3a4056" />
        <text x="210" y="31" textAnchor="middle" fill="#c6cbdd" fontSize="10" fontFamily="monospace">
          {L("آموزش → پیش‌بینی", "train → predict")}
        </text>
      </motion.g>

      {/* left: data stack */}
      {[
        { y: 58, c: "#a3e635" },
        { y: 82, c: "#22d3ee" },
        { y: 106, c: "#818cf8" },
      ].map((row, i) => (
        <g key={i}>
          <rect x="20" y={row.y} width="88" height="20" rx="6" fill="#1c1f2e" stroke="#3a4056" />
          <rect x="28" y={row.y + 7} width="52" height="6" rx="3" fill="#262a3a" />
          <circle cx="94" cy={row.y + 10} r="2.5" fill={row.c} />
        </g>
      ))}
      <text x="64" y="142" textAnchor="middle" fill="#8b93ab" fontSize="10">
        {L("داده", "data")}
      </text>
      <text x="64" y="156" textAnchor="middle" fill="#8b93ab" fontSize="8">
        {L("نمونه‌های برچسب‌دار", "labeled examples")}
      </text>

      {/* data dots flowing into the model */}
      {[0, 1, 2].map((i) => (
        <motion.circle key={i} r="4" fill="#a3e635"
          animate={{ cx: [108, 127, 145, 164], cy: [100, 93, 106, 100], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, delay: i * 0.55, ease: "easeInOut" }}
        />
      ))}

      {/* center: model box with a tiny neural net */}
      <rect x="168" y="44" width="104" height="92" rx="16" fill="#12141f" stroke="#818cf8" strokeOpacity="0.5" />
      <text x="220" y="58" textAnchor="middle" fill="#818cf8" fontSize="8" letterSpacing="1">model</text>
      {inputs.map(([x1, y1]) =>
        hidden.map(([x2, y2], j) => (
          <line key={`ih-${x1}-${y1}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#262a3a" strokeWidth="1" />
        ))
      )}
      {hidden.map(([x2, y2], j) => (
        <line key={`ho-${j}`} x1={x2} y1={y2} x2={output[0][0]} y2={output[0][1]} stroke="#262a3a" strokeWidth="1" />
      ))}
      {[...inputs, ...hidden, ...output].map(([x, y], i) => (
        <motion.circle key={`n-${x}-${y}`} cx={x} cy={y} r="5" fill="#1c1f2e" stroke="#818cf8" strokeWidth="1.5"
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* model → output arrow */}
      <line x1="274" y1="96" x2="326" y2="96" stroke="#262a3a" strokeWidth="1.5" strokeDasharray="3 5" />
      <motion.line x1="274" y1="96" x2="326" y2="96" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="3 5"
        animate={{ strokeDashoffset: [0, -16] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* right: prediction box, ✗ flips to ✓ */}
      <rect x="330" y="74" width="72" height="44" rx="10" fill="#12141f" stroke="#3a4056" />
      <motion.text x="366" y="103" textAnchor="middle" fontSize="20" fill="#fb7185"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.62, 0.68, 1] }}
      >
        ✗
      </motion.text>
      <motion.g
        style={{ originX: "366px", originY: "96px" }}
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.25, 1, 0.5] }}
        transition={{ ...loop, times: [0, 0.62, 0.7, 0.9, 1] }}
      >
        <text x="366" y="103" textAnchor="middle" fontSize="20" fill="#34d399">✓</text>
      </motion.g>
      <text x="366" y="134" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("پیش‌بینی", "prediction")}
      </text>

      {/* loss curve drawing down toward zero */}
      <rect x="168" y="160" width="104" height="56" rx="8" fill="#12141f" stroke="#3a4056" />
      <line x1="178" y1="166" x2="178" y2="208" stroke="#262a3a" strokeWidth="1" />
      <line x1="178" y1="208" x2="264" y2="208" stroke="#262a3a" strokeWidth="1" />
      <text x="264" y="172" textAnchor="end" fill="#8b93ab" fontSize="8">
        loss → 0
      </text>
      <motion.path
        d="M 180 168 C 194 194, 202 200, 216 203 C 232 206, 250 206.5, 262 206.5"
        fill="none" stroke="#fb7185" strokeWidth="2" strokeLinecap="round"
        pathLength={1}
        style={{ strokeDasharray: 1 }}
        animate={{ strokeDashoffset: [1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.06, 0.58, 1] }}
      />
    </svg>
  );
}
