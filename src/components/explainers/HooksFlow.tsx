"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — the hook loop.
 * setState → re-render → effect runs → cleanup → next round.
 * One dot travels the cycle: state changes drive everything.
 */
export function HooksFlowExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("چرخه‌ی useState + useEffect", "the useState + useEffect cycle")}
      </text>

      {/* state box */}
      <motion.rect
        x="40" y="60" width="100" height="46" rx="10" fill="#12141f" stroke="#6366f1" strokeWidth="2"
        animate={{ stroke: ["#6366f1", "#a3e635", "#6366f1"] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.35, 1] }}
      />
      <text x="90" y="80" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="700">state</text>
      <text x="90" y="96" textAnchor="middle" fill="#8b93ab" fontSize="9">useState(0)</text>

      {/* render box */}
      <motion.rect
        x="200" y="60" width="100" height="46" rx="10" fill="#12141f" stroke="#22d3ee" strokeWidth="2"
        animate={{ stroke: ["#22d3ee", "#22d3ee", "#22d3ee"], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
      />
      <text x="250" y="80" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="700">re-render</text>
      <text x="250" y="96" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("کامپوننت دوباره", "the component again")}
      </text>

      {/* effect box */}
      <motion.rect
        x="200" y="150" width="100" height="46" rx="10" fill="#12141f" stroke="#c084fc" strokeWidth="2"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.4 }}
      />
      <text x="250" y="170" textAnchor="middle" fill="#c084fc" fontSize="11" fontWeight="700">effect</text>
      <text x="250" y="186" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("useEffect بعد از رندر", "useEffect after render")}
      </text>

      {/* cleanup box */}
      <motion.rect
        x="40" y="150" width="100" height="46" rx="10" fill="#12141f" stroke="#a3e635" strokeWidth="2"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2.2 }}
      />
      <text x="90" y="170" textAnchor="middle" fill="#a3e635" fontSize="11" fontWeight="700">cleanup</text>
      <text x="90" y="186" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("return در effect", "the effect's return")}
      </text>

      {/* cycle arrows */}
      <path d="M142 83 H 196" stroke="#3a4056" strokeWidth="2" markerEnd="" />
      <path d="M250 108 V 146" stroke="#3a4056" strokeWidth="2" />
      <path d="M198 173 H 144" stroke="#3a4056" strokeWidth="2" />
      <path d="M90 146 V 110" stroke="#3a4056" strokeWidth="2" />

      {/* travelling dot */}
      <motion.circle
        r="5"
        fill="#a3e635"
        animate={{ cx: [90, 250, 250, 90, 90], cy: [83, 83, 173, 173, 83] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.33, 0.66, 0.95, 1], ease: "linear" }}
      />

      <motion.text
        x="210"
        y="216"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("setState → رندر → effect → cleanup → دور بعد", "setState → render → effect → cleanup → next round")}
      </motion.text>
    </svg>
  );
}
