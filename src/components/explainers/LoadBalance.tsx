"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — load balancing with health checks.
 * Requests spread across servers; when one goes dark, the
 * health check notices and traffic reroutes around it.
 */
export function LoadBalanceExplainer() {
  const { L } = useExplainerLocale();
  const servers = [
    { x: 250, y: 55, alive: true },
    { x: 250, y: 115, alive: false },
    { x: 250, y: 175, alive: true },
  ];

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="22" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("ترافیک پخش می‌شود؛ سرور خراب از چرخه خارج می‌شود", "traffic spreads; a broken server leaves the rotation")}
      </text>

      {/* LB */}
      <rect x="40" y="88" width="90" height="56" rx="12" fill="#12141f" stroke="#6366f1" strokeWidth="2" />
      <text x="85" y="112" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="700">
        {L("لود-بالانسر", "Load Balancer")}
      </text>
      <text x="85" y="128" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("توزیع بار", "spreads the load")}
      </text>

      {/* request dots splitting */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r="4"
          fill="#22d3ee"
          animate={{
            cx: [134, 200, 244],
            cy: [116, i === 1 ? 115 : 70 + i * 60, 70 + i * 60],
            opacity: i === 1 ? [1, 1, 0] : [1, 1, 1],
          }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5, times: [0, 0.6, 1] }}
        />
      ))}

      {/* links */}
      {servers.map((s, i) => (
        <motion.line
          key={i}
          x1="134" y1="116" x2={s.x - 24} y2={s.y}
          stroke={s.alive ? "#3a4056" : "#f87171"}
          strokeWidth="2"
          strokeDasharray={s.alive ? undefined : "4 4"}
          animate={s.alive ? { opacity: [0.6, 1, 0.6] } : { opacity: [1, 0.25, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* servers */}
      {servers.map((s, i) => (
        <motion.g key={i} animate={{ opacity: s.alive ? 1 : [1, 0.4, 1] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}>
          <rect
            x={s.x} y={s.y - 18} width="80" height="36" rx="9"
            fill="#12141f"
            stroke={s.alive ? "#a3e635" : "#f87171"}
            strokeWidth="1.8"
          />
          <text x={s.x + 28} y={s.y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="10">
            {L(`سرور ${i + 1}`, `server ${i + 1}`)}
          </text>
          <circle cx={s.x + 68} cy={s.y} r="4" fill={s.alive ? "#a3e635" : "#f87171"} />
        </motion.g>
      ))}

      {/* health check note on dead server */}
      <motion.text
        x="250" y="212" textAnchor="middle" fill="#f87171" fontSize="10"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, times: [0, 0.5, 1] }}
      >
        {L("health check مردود → از چرخه خارج، بار به بقیه می‌رسد", "failed health check → out of rotation; the rest pick up the load")}
      </motion.text>
    </svg>
  );
}
