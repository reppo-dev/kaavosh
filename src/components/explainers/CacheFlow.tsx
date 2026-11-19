"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — a cache hit vs miss.
 * The request asks the cache first: a hit returns instantly,
 * a miss travels on to the origin and warms the cache.
 */
export function CacheFlowExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("اول کش را بپرس — بعد مبدأ را", "ask the cache first — then the origin")}
      </text>

      {/* request dot + cache */}
      <motion.circle r="5" fill="#22d3ee"
        animate={{ cx: [40, 130, 130, 250, 340, 340], cy: [100, 100, 100, 100, 100, 100] }}
        transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.22, 0.3, 0.55, 0.85, 1] }}
      />
      <rect x="140" y="70" width="90" height="60" rx="12" fill="#12141f" stroke="#22d3ee" strokeWidth="2" />
      <text x="185" y="94" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="700">Cache</text>
      <text x="185" y="110" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("کش / CDN", "cache / CDN")}
      </text>

      {/* origin */}
      <rect x="300" y="70" width="90" height="60" rx="12" fill="#12141f" stroke="#3a4056" />
      <text x="345" y="94" textAnchor="middle" fill="#8b93ab" fontSize="11" fontWeight="700">Origin</text>
      <text x="345" y="110" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("سرور اصلی", "the real server")}
      </text>

      {/* user */}
      <circle cx="40" cy="100" r="12" fill="#12141f" stroke="#6366f1" strokeWidth="2" />
      <text x="40" y="105" textAnchor="middle" fill="#6366f1" fontSize="9">👤</text>

      {/* HIT flash */}
      <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.3, 0.5] }}>
        <rect x="140" y="28" width="90" height="24" rx="8" fill="#14532d" stroke="#a3e635" />
        <text x="185" y="45" textAnchor="middle" fill="#a3e635" fontSize="10" fontWeight="700">
          {L("HIT — فوری ✓", "HIT — instant ✓")}
        </text>
      </motion.g>

      {/* MISS path label */}
      <motion.g animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 3.6, repeat: Infinity, times: [0, 0.45, 0.7, 1] }}>
        <rect x="196" y="148" width="150" height="24" rx="8" fill="#3b1d2e" stroke="#f87171" />
        <text x="271" y="165" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="700">
          {L("MISS → مبدأ + ذخیره در کش", "MISS → origin + fill the cache")}
        </text>
      </motion.g>

      {/* TTL note */}
      <g>
        <rect x="140" y="190" width="250" height="26" rx="8" fill="#0a0c14" stroke="#3a4056" />
        <motion.text x="265" y="207" textAnchor="middle" fill="#fbbf24" fontSize="10"
          animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }}>
          {L("هر ورودی TTL دارد — بعد از انقضا دوباره از مبدأ می‌آید", "every entry has a TTL — after expiry it refetches from the origin")}
        </motion.text>
      </g>
    </svg>
  );
}
