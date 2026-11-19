"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — the JavaScript event loop.
 * Tasks drop into a queue, the stack takes one at a time,
 * the loop arrow spins: single thread that never blocks.
 */
export function EventLoopExplainer() {
  const { L } = useExplainerLocale();
  const task = { duration: 6, repeat: Infinity, ease: "linear" as const };

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* call stack */}
      <g>
        <rect x="30" y="30" width="130" height="110" rx="12" fill="#12141f" stroke="#3a4056" />
        <text x="95" y="52" textAnchor="middle" fill="#8b93ab" fontSize="11">{L("پشته‌ی فراخوانی", "Call Stack")}</text>
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x="45"
            y={124 - i * 26}
            width="100"
            height="18"
            rx="6"
            fill={i === 0 ? "#6366f1" : "#262a3a"}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.45 }}
          />
        ))}
      </g>

      {/* web APIs */}
      <g>
        <rect x="185" y="30" width="110" height="70" rx="12" fill="#12141f" stroke="#3a4056" />
        <text x="240" y="52" textAnchor="middle" fill="#8b93ab" fontSize="11">{L("وب APIها", "Web APIs")}</text>
        <motion.circle
          cx="222" cy="78" r="7" fill="#22d3ee"
          animate={{ cy: [78, 70, 78] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <motion.circle
          cx="258" cy="78" r="7" fill="#c084fc"
          animate={{ cy: [78, 70, 78] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
        />
      </g>

      {/* queue */}
      <g>
        <rect x="185" y="130" width="110" height="70" rx="12" fill="#12141f" stroke="#3a4056" />
        <text x="240" y="150" textAnchor="middle" fill="#8b93ab" fontSize="11">{L("صف وظایف", "Task Queue")}</text>
        {[0, 1].map((i) => (
          <motion.rect
            key={i}
            x={275 - i * 34}
            y="162"
            width="26"
            height="20"
            rx="6"
            fill="#0ea5e9"
            animate={{ x: [275, 205, 205], opacity: [0, 1, 0] }}
            transition={{ ...task, times: [0, 0.35, 1], repeatDelay: 1.2, delay: i === 0 ? 0 : 1.5 }}
          />
        ))}
      </g>

      {/* event loop arrow */}
      <motion.g
        style={{ originX: "330px", originY: "115px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
      >
        <path d="M330 95 A20 20 0 1 1 329.9 95 M330 95 l8 -6 M330 95 l9 5"
          stroke="#a3e635" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </motion.g>
      <text x="352" y="122" fill="#a3e635" fontSize="10">{L("حلقه", "loop")}</text>

      {/* moving task from queue to stack */}
      <motion.rect
        y="140" width="26" height="20" rx="6" fill="#0ea5e9"
        animate={{ x: [172, 106, 106], y: [140, 140, 60], opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2.4, ease: "easeInOut" }}
      />
    </svg>
  );
}
