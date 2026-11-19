"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — symmetric encryption round trip.
 * A readable word scrambles letter-by-letter into ciphertext,
 * travels across with the key, and unscrambles on the other side.
 * Pure SVG + CSS — no video, drawn live in the browser.
 */
export function EncryptionExplainer() {
  const { L } = useExplainerLocale();
  const loop = { duration: 5, repeat: Infinity, ease: "easeInOut" as const };

  const PLAIN = ["H", "E", "L", "L", "O"];
  const CIPHER = ["x", "9", "#", "k", "Q"];
  const LEFT_X = [46, 60, 74, 88, 102];
  const RIGHT_X = [318, 332, 346, 360, 374];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* headline badge */}
      <motion.g
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <rect x="138" y="22" width="144" height="24" rx="12" fill="#1c1f2e" stroke="#3a4056" />
        <text x="210" y="38" textAnchor="middle" fill="#c6cbdd" fontSize="10" fontFamily="monospace">
          {L("یک کلید، هم قفل می‌کند هم باز", "same key locks & unlocks")}
        </text>
      </motion.g>

      {/* left: plaintext box */}
      <rect x="18" y="76" width="112" height="68" rx="10" fill="#12141f" stroke="#3a4056" />
      <motion.text x="74" y="94" textAnchor="middle" fill="#8b93ab" fontSize="8" letterSpacing="1"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.1, 0.13, 1] }}
      >
        PLAINTEXT
      </motion.text>
      <motion.text x="74" y="94" textAnchor="middle" fill="#fb7185" fontSize="8" letterSpacing="1"
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.1, 0.13, 0.33, 0.37, 1] }}
      >
        CIPHERTEXT
      </motion.text>
      {PLAIN.map((ch, i) => {
        const s = 0.1 + i * 0.05;
        return (
          <motion.text key={`lp-${i}`} x={LEFT_X[i]} y="124" textAnchor="middle"
            fill="#c6cbdd" fontSize="17" fontFamily="monospace"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ ...loop, times: [0, s, s + 0.02, 1] }}
          >
            {ch}
          </motion.text>
        );
      })}
      {CIPHER.map((ch, i) => {
        const s = 0.1 + i * 0.05;
        return (
          <motion.text key={`lc-${i}`} x={LEFT_X[i]} y="124" textAnchor="middle"
            fill="#fb7185" fontSize="17" fontFamily="monospace"
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ ...loop, times: [0, s - 0.02, s, 0.32, 0.36, 1] }}
          >
            {ch}
          </motion.text>
        );
      })}

      {/* right: decrypted box */}
      <rect x="290" y="76" width="112" height="68" rx="10" fill="#12141f" stroke="#3a4056" />
      <motion.text x="346" y="94" textAnchor="middle" fill="#fb7185" fontSize="8" letterSpacing="1"
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.46, 0.49, 0.68, 0.72, 1] }}
      >
        CIPHERTEXT
      </motion.text>
      <motion.text x="346" y="94" textAnchor="middle" fill="#34d399" fontSize="8" letterSpacing="1"
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ ...loop, times: [0, 0.7, 0.73, 1] }}
      >
        DECRYPTED ✓
      </motion.text>
      {CIPHER.map((ch, i) => {
        const u = 0.5 + i * 0.05;
        return (
          <motion.text key={`rc-${i}`} x={RIGHT_X[i]} y="124" textAnchor="middle"
            fill="#fb7185" fontSize="17" fontFamily="monospace"
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
            transition={{ ...loop, times: [0, 0.44, 0.46, u - 0.02, u, 1] }}
          >
            {ch}
          </motion.text>
        );
      })}
      {PLAIN.map((ch, i) => {
        const u = 0.5 + i * 0.05;
        return (
          <motion.text key={`rp-${i}`} x={RIGHT_X[i]} y="124" textAnchor="middle"
            fill="#34d399" fontSize="17" fontFamily="monospace"
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{ ...loop, times: [0, u - 0.02, u, 1] }}
          >
            {ch}
          </motion.text>
        );
      })}

      {/* transit channel */}
      <line x1="134" y1="110" x2="286" y2="110" stroke="#262a3a" strokeWidth="1.5" strokeDasharray="3 6" />
      <motion.line x1="134" y1="110" x2="286" y2="110" stroke="#3a4056" strokeWidth="1.5" strokeDasharray="3 6"
        animate={{ strokeDashoffset: [0, -18] }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />

      {/* ciphertext packet traveling right, key riding on top */}
      <motion.g
        animate={{ x: [0, 0, 0, 272, 272, 272], opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.32, 0.34, 0.42, 0.45, 1] }}
      >
        <motion.g transform="translate(74 124)">
          <motion.circle cx="0" cy="-28" r="6" fill="none" stroke="#22d3ee" strokeWidth="1.5"
            animate={{ r: [6, 12], opacity: [0.5, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
          />
          <circle cx="0" cy="-28" r="6" fill="#12141f" stroke="#22d3ee" strokeWidth="1.6" />
          <path d="M0 -22 L0 -10 M0 -18 L4.5 -18 M0 -14.5 L3 -14.5"
            stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <text x="0" y="0" textAnchor="middle" fill="#fb7185" fontSize="17" fontFamily="monospace">
            x9#kQ
          </text>
        </motion.g>
      </motion.g>

      {/* static key, pulsing while ciphertext is unreadable */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{ ...loop, times: [0, 0.1, 0.14, 0.64, 0.7, 1] }}
      >
        <motion.circle cx="210" cy="177" r="8" fill="none" stroke="#22d3ee" strokeWidth="1.5"
          animate={{ r: [8, 15], opacity: [0.55, 0] }}
          transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.g>
      <circle cx="210" cy="170" r="7" fill="#12141f" stroke="#22d3ee" strokeWidth="2" />
      <path d="M210 177 L210 191 M210 185 L215.5 185 M210 189 L213.5 189"
        stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" fill="none" />
      <text x="210" y="204" textAnchor="middle" fill="#8b93ab" fontSize="8">
        {L("کلید مخفی", "secret key")}
      </text>
    </svg>
  );
}
