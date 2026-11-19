"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — HTTP request round trip.
 * A request dot travels browser → server, the server thinks,
 * and a response dot comes back with a 200 badge.
 * Pure SVG + CSS — no video, drawn live in the browser.
 */
export function HttpRequestExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 4, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <svg viewBox="0 0 420 220" className="w-full" role="img">
      {/* baseline */}
      <line x1="60" y1="150" x2="360" y2="150" stroke="#262a3a" strokeWidth="2" />
      {/* browser */}
      <g>
        <rect x="18" y="120" width="84" height="60" rx="10" fill="#12141f" stroke="#3a4056" />
        <rect x="26" y="128" width="68" height="10" rx="5" fill="#1c1f2e" />
        <circle cx="32" cy="133" r="2.5" fill="#22d3ee" />
        <circle cx="39" cy="133" r="2.5" fill="#818cf8" />
        <rect x="26" y="146" width="50" height="8" rx="4" fill="#262a3a" />
        <rect x="26" y="160" width="34" height="8" rx="4" fill="#262a3a" />
        <text x="60" y="198" textAnchor="middle" fill="#8b93ab" fontSize="11">
          {L("مرورگر", "Browser")}
        </text>
      </g>
      {/* server */}
      <g>
        <rect x="318" y="118" width="84" height="64" rx="10" fill="#12141f" stroke="#3a4056" />
        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x="328"
            y={126 + i * 16}
            width="64"
            height="9"
            rx="4.5"
            fill="#1c1f2e"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        <text x="360" y="198" textAnchor="middle" fill="#8b93ab" fontSize="11">
          {L("سرور", "Server")}
        </text>
      </g>

      {/* request dot + label */}
      <motion.circle r="5" fill="#22d3ee" cy="150" cx="60"
        animate={{ cx: [60, 340, 340, 60], opacity: [0, 1, 1, 0] }}
        transition={{ ...loop, times: [0, 0.4, 0.42, 1] }}
      />
      <motion.text x="120" y="136" fill="#67e8f9" fontSize="10" fontFamily="monospace"
        animate={{ opacity: [0, 1, 1, 0, 0], x: [90, 200, 200, 200, 90] }}
        transition={{ ...loop, times: [0, 0.12, 0.4, 0.45, 1] }}
      >
        GET /page
      </motion.text>

      {/* response dot + label */}
      <motion.circle r="5" fill="#a3e635" cy="162" cx="340"
        animate={{ cx: [340, 70, 70, 340], opacity: [0, 1, 1, 0] }}
        transition={{ ...loop, times: [0.42, 0.82, 0.85, 1] }}
      />
      <motion.text x="180" y="182" fill="#a3e635" fontSize="10" fontFamily="monospace"
        animate={{ opacity: [0, 0, 1, 1, 0], x: [260, 260, 150, 150, 150] }}
        transition={{ ...loop, times: [0, 0.42, 0.55, 0.8, 1] }}
      >
        200 OK + HTML
      </motion.text>

      {/* status badge pulse */}
      <motion.g
        animate={{ opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <rect x="150" y="60" width="120" height="26" rx="13" fill="#1c1f2e" stroke="#3a4056" />
        <text x="210" y="77" textAnchor="middle" fill="#c6cbdd" fontSize="11" fontFamily="monospace">
          {L("درخواست ⇄ پاسخ", "request ⇄ response")}
        </text>
      </motion.g>
    </svg>
  );
}
