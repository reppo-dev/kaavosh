"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — an LLM generating text.
 * The prompt is split into tokens, flows through stacked
 * transformer layers, and the next token is chosen — one at a time.
 */
export function LlmFlowExplainer() {
  const { L } = useExplainerLocale();
  const tokens = ["شهر", "زیبا", "است"];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="22" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("prompt → توکن‌ها → لایه‌های ترنسفورمر → توکن بعدی", "prompt → tokens → transformer layers → next token")}
      </text>

      {/* prompt box */}
      <rect x="24" y="60" width="110" height="60" rx="10" fill="#12141f" stroke="#3a4056" />
      <text x="79" y="80" textAnchor="middle" fill="#8b93ab" fontSize="10">prompt</text>
      <text x="79" y="100" textAnchor="middle" fill="#e2e8f0" fontSize="10">
        {L("«هوای امروز…»", '"the weather today…"')}
      </text>

      {/* tokenization */}
      <motion.g animate={{ opacity: [0.3, 1, 1, 0.3] }} transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.3, 0.85, 1] }}>
        {tokens.map((tk, i) => (
          <rect key={tk} x={160 + i * 40} y="66" width="34" height="24" rx="6" fill="#1e1b31" stroke="#22d3ee" strokeWidth="1.2" />
        ))}
        {tokens.map((tk, i) => (
          <text key={tk} x={177 + i * 40} y="82" textAnchor="middle" fill="#22d3ee" fontSize="8">
            {tk.slice(0, 4)}
          </text>
        ))}
        <text x="205" y="112" textAnchor="middle" fill="#8b93ab" fontSize="9">tokenizer</text>
      </motion.g>

      {/* transformer stack */}
      <motion.g
        animate={{ stroke: ["#6366f1", "#c084fc", "#6366f1"] }}
        transition={{ duration: 3.2, repeat: Infinity }}
      >
        <rect x="150" y="126" width="130" height="60" rx="12" fill="#12141f" stroke="#6366f1" strokeWidth="2" />
      </motion.g>
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x="162" y={136 + i * 16}
          width="106"
          height="10"
          rx="5"
          fill="#6366f1"
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35 }}
        />
      ))}
      <text x="215" y="200" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("attention × N لایه", "attention × N layers")}
      </text>

      {/* output token */}
      <motion.g animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.5, 0.85, 1] }}>
        <rect x="300" y="138" width="90" height="36" rx="10" fill="#14532d" stroke="#a3e635" strokeWidth="1.6" />
        <text x="345" y="161" textAnchor="middle" fill="#a3e635" fontSize="11" fontFamily="monospace">
          {L("«…گرم»", '"…warm"')}
        </text>
      </motion.g>
      <path d="M282 156 H 296" stroke="#3a4056" strokeWidth="2" />
      <text x="345" y="190" textAnchor="middle" fill="#a3e635" fontSize="9">
        {L("توکن به‌توکن تکرار می‌شود", "repeated token by token")}
      </text>

      <motion.text
        x="210"
        y="222"
        textAnchor="middle"
        fill="#8b93ab"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("مدل هر بار فقط «توکن بعدی» را پیش‌بینی می‌کند", "each pass, the model predicts just the next token")}
      </motion.text>
    </svg>
  );
}
