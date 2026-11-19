"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — hash table.
 * A key runs through the hash function, lands in a bucket;
 * a second key collides into the same bucket and joins the chain.
 */
export function HashTableExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* keys */}
      <rect x="24" y="52" width="64" height="26" rx="8" fill="#12141f" stroke="#6366f1" />
      <text x="56" y="70" textAnchor="middle" fill="#e2e8f0" fontSize="12">"cat"</text>
      <rect x="24" y="120" width="64" height="26" rx="8" fill="#12141f" stroke="#c084fc" />
      <text x="56" y="138" textAnchor="middle" fill="#e2e8f0" fontSize="12">"act"</text>

      {/* hash function */}
      <motion.circle
        cx="150"
        cy="100"
        r="26"
        fill="#12141f"
        stroke="#3a4056"
        animate={{ stroke: ["#3a4056", "#22d3ee", "#3a4056"] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      />
      <text x="150" y="97" textAnchor="middle" fill="#22d3ee" fontSize="10">hash</text>
      <text x="150" y="109" textAnchor="middle" fill="#22d3ee" fontSize="10">f(key)</text>

      {/* travelling dots */}
      <motion.circle
        r="4"
        fill="#6366f1"
        animate={{ cx: [88, 124, 176], cy: [65, 88, 70] }}
        transition={{ duration: 2.2, repeat: Infinity, times: [0, 0.4, 1], repeatDelay: 0.6 }}
      />
      <motion.circle
        r="4"
        fill="#c084fc"
        animate={{ cx: [88, 124, 176], cy: [133, 112, 130] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 1.1, times: [0, 0.4, 1], repeatDelay: 0.6 }}
      />

      {/* buckets */}
      <text x="255" y="42" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("سطل‌ها", "buckets")}
      </text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="230" y={52 + i * 38} width="44" height="30" rx="7" fill="#12141f" stroke="#3a4056" />
          <text x="240" y={72 + i * 38} fill="#4a5168" fontSize="10">{i}</text>
        </g>
      ))}

      {/* collision chain in bucket 2 */}
      <motion.rect
        x="280"
        y="128"
        width="52"
        height="26"
        rx="7"
        fill="#1e1b31"
        stroke="#6366f1"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.3, 0.9, 1] }}
      />
      <motion.text x="306" y="146" textAnchor="middle" fill="#e2e8f0" fontSize="11" animate={{ opacity: [0, 1, 1, 0] }} transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.3, 0.9, 1] }}>
        cat
      </motion.text>
      <motion.rect
        x="338"
        y="128"
        width="52"
        height="26"
        rx="7"
        fill="#241a31"
        stroke="#c084fc"
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.45, 0.75, 1] }}
      />
      <motion.text x="364" y="146" textAnchor="middle" fill="#e2e8f0" fontSize="11" animate={{ opacity: [0, 0, 1, 0] }} transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.45, 0.75, 1] }}>
        act
      </motion.text>

      <motion.text
        x="210"
        y="212"
        textAnchor="middle"
        fill="#fbbf24"
        fontSize="10"
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {L("برخورد! → زنجیره در همان سطل", "collision! → chained in the same bucket")}
      </motion.text>
    </svg>
  );
}
