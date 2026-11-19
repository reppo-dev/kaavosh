"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — stack vs queue.
 * Same operations, opposite exit: the stack pops the last pushed
 * box (LIFO), the queue dequeues the first one that entered (FIFO).
 */
export function StackQueueExplainer() {
  const { L } = useExplainerLocale();
  const slot = 26;

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* stack */}
      <rect x="40" y="40" width="150" height="150" rx="12" fill="#12141f" stroke="#3a4056" />
      <text x="115" y="62" textAnchor="middle" fill="#8b93ab" fontSize="11">Stack — LIFO</text>
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="55"
          width="120"
          height="22"
          rx="6"
          fill={i === 2 ? "#6366f1" : "#262a3a"}
          y={168 - (i + 1) * slot}
          animate={{ y: [168 - (i + 1) * slot, 168 - (i + 1) * slot - 30, 168 - (i + 1) * slot] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.4, times: [0, 0.4, 1] }}
        />
      ))}
      <motion.text
        x="115"
        y="36"
        textAnchor="middle"
        fill="#a3e635"
        fontSize="10"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, times: [0, 0.4, 0.8] }}
      >
        {L("pop ↑ آخرین ورود", "pop ↑ last in")}
      </motion.text>

      {/* queue */}
      <rect x="230" y="40" width="160" height="150" rx="12" fill="#12141f" stroke="#3a4056" />
      <text x="310" y="62" textAnchor="middle" fill="#8b93ab" fontSize="11">Queue — FIFO</text>
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          width="40"
          height="26"
          rx="6"
          fill={i === 0 ? "#22d3ee" : "#262a3a"}
          y="120"
          x={340 - i * 48}
          animate={{ x: [340 - i * 48, 340 - i * 48, 248 - i * 48, 248 - i * 48], opacity: [1, 1, 1, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.5, times: [0, 0.45, 0.8, 1] }}
        />
      ))}
      <text x="252" y="110" textAnchor="middle" fill="#22d3ee" fontSize="10">
        {L("dequeue ← اولین ورود", "dequeue ← first in")}
      </text>
      <text x="372" y="110" textAnchor="middle" fill="#c084fc" fontSize="10">enqueue →</text>

      <motion.text
        x="210"
        y="216"
        textAnchor="middle"
        fill="#8b93ab"
        fontSize="10"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("همان جعبه‌ها — قانون خروج تمام تفاوت است", "same boxes — the exit rule is the whole difference")}
      </motion.text>
    </svg>
  );
}
