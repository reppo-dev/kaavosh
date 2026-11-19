"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — unidirectional state management (Redux-style).
 * UI dispatches an action, the reducer computes the next state,
 * the store notifies the view. One direction, always predictable.
 */
export function ReduxFlowExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("dispatch → reducer → store → view — فقط یک جهت", "dispatch → reducer → store → view — one direction only")}
      </text>

      {/* view */}
      <rect x="30" y="90" width="88" height="60" rx="10" fill="#12141f" stroke="#22d3ee" strokeWidth="2" />
      <text x="74" y="115" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="700">View</text>
      <text x="74" y="132" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("رابط کاربری", "the UI")}
      </text>

      {/* action pill travelling up */}
      <motion.rect
        x="66" y="30" width="76" height="22" rx="11" fill="#1e1b31" stroke="#c084fc"
        animate={{ y: [30, 78], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.9, 1] }}
      />
      <motion.text x="104" y="46" textAnchor="middle" fill="#c084fc" fontSize="10" fontFamily="monospace"
        animate={{ y: [30, 78], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 0.9, 1] }}>
        dispatch
      </motion.text>

      {/* reducer */}
      <motion.rect
        x="166" y="90" width="96" height="60" rx="10" fill="#12141f" stroke="#6366f1" strokeWidth="2"
        animate={{ stroke: ["#6366f1", "#a3e635", "#6366f1"] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
      />
      <text x="214" y="115" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="700">Reducer</text>
      <text x="214" y="132" textAnchor="middle" fill="#8b93ab" fontSize="9">(state, action) ⇒ state′</text>

      {/* store */}
      <motion.rect
        x="304" y="90" width="88" height="60" rx="10" fill="#12141f" stroke="#a3e635" strokeWidth="2"
        animate={{ stroke: ["#a3e635", "#a3e635"], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
      />
      <text x="348" y="115" textAnchor="middle" fill="#a3e635" fontSize="11" fontWeight="700">Store</text>
      <text x="348" y="132" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("state یکتا", "single state")}
      </text>

      {/* arrows */}
      <path d="M118 106 H 162" stroke="#3a4056" strokeWidth="2" />
      <path d="M262 106 H 300" stroke="#3a4056" strokeWidth="2" />
      {/* subscribe back */}
      <motion.path
        d="M348 154 C 348 200, 74 200, 74 154"
        stroke="#22d3ee"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6 5"
        animate={{ strokeDashoffset: [0, -22] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
      />
      <text x="211" y="206" textAnchor="middle" fill="#22d3ee" fontSize="9">
        {L("subscribe — تغییر state به view اطلاع داده می‌شود", "subscribe — state changes notify the view")}
      </text>
    </svg>
  );
}
