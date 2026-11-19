"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — token-based auth.
 * Login issues a token (a key), the client carries it on every
 * request, the server checks the signature without a lookup.
 */
export function AuthJwtExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 6, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* client */}
      <g>
        <rect x="24" y="88" width="78" height="62" rx="10" fill="#12141f" stroke="#3a4056" />
        <circle cx="63" cy="108" r="10" fill="#262a3a" />
        <rect x="42" y="126" width="42" height="8" rx="4" fill="#262a3a" />
        <text x="63" y="170" textAnchor="middle" fill="#8b93ab" fontSize="11">{L("کلاینت", "Client")}</text>
      </g>
      {/* server */}
      <g>
        <rect x="318" y="88" width="78" height="62" rx="10" fill="#12141f" stroke="#3a4056" />
        <rect x="328" y="100" width="58" height="9" rx="4" fill="#262a3a" />
        <rect x="328" y="114" width="58" height="9" rx="4" fill="#262a3a" />
        <rect x="328" y="128" width="58" height="9" rx="4" fill="#262a3a" />
        <text x="357" y="170" textAnchor="middle" fill="#8b93ab" fontSize="11">{L("سرور", "Server")}</text>
      </g>
      {/* line */}
      <line x1="104" y1="132" x2="316" y2="132" stroke="#262a3a" strokeWidth="2" />

      {/* login: token issued */}
      <motion.g
        animate={{ opacity: [0, 1, 1, 0], x: [0, 0, 0, 0] }}
        transition={{ ...loop, times: [0, 0.06, 0.2, 0.3] }}
      >
        <motion.rect x="130" y="42" width="160" height="30" rx="15" fill="#1c1f2e" stroke="#818cf8"
          animate={{ opacity: [0, 1, 1, 0] }} transition={{ ...loop, times: [0, 0.05, 0.25, 0.3] }} />
        <text x="210" y="61" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontFamily="monospace">
          {L("login → توکن صادر شد", "login → token issued")}
        </text>
      </motion.g>

      {/* token key traveling to client */}
      <motion.g
        animate={{ x: [180, 110], opacity: [0, 1, 1, 0] }}
        transition={{ ...loop, times: [0, 0.2, 0.3, 0.42], duration: 6 }}
      >
        <circle r="8" fill="#818cf8" cy="42" cx="0" />
        <path d="M-2.5 2.5 L-6.5 6.5 M-6 7 a2 2 0 1 0 0.1 0.1" stroke="#05060a" strokeWidth="1.4" />
      </motion.g>

      {/* every request carries the token */}
      <motion.circle r="5" fill="#818cf8" cy="132" cx="110"
        animate={{ cx: [110, 310], opacity: [0, 1, 1, 0] }}
        transition={{ ...loop, times: [0.42, 0.58, 0.72, 0.8] }}
      />
      <motion.text x="150" y="120" fill="#a5b4fc" fontSize="10" fontFamily="monospace"
        animate={{ opacity: [0, 1, 1, 0], x: [110, 200, 200, 200] }}
        transition={{ ...loop, times: [0.42, 0.55, 0.72, 0.8], duration: 6 }}
      >
        Authorization: Bearer …
      </motion.text>

      {/* verified */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ ...loop, times: [0, 0.72, 0.8, 0.92, 1], duration: 6 }}
      >
        <rect x="288" y="60" width="106" height="24" rx="12" fill="#12241a" stroke="#34d399" strokeOpacity="0.6" />
        <text x="341" y="76" textAnchor="middle" fill="#34d399" fontSize="10" fontFamily="monospace">
          {L("✓ امضا معتبر است", "✓ signature valid")}
        </text>
      </motion.g>
    </svg>
  );
}
