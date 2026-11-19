"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — a Kubernetes cluster.
 * The control plane decides the desired state; pods run on
 * worker nodes and a failed pod is rescheduled elsewhere.
 */
export function K8sClusterExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* control plane */}
      <motion.rect
        x="145" y="28" width="130" height="44" rx="10" fill="#12141f" stroke="#6366f1" strokeWidth="2"
        animate={{ stroke: ["#6366f1", "#a3e635", "#6366f1"] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <text x="210" y="48" textAnchor="middle" fill="#6366f1" fontSize="11" fontWeight="700">Control Plane</text>
      <text x="210" y="63" textAnchor="middle" fill="#8b93ab" fontSize="9">
        {L("وضعیت مطلوب را اعمال می‌کند", "enforces the desired state")}
      </text>

      {/* nodes */}
      {[{ x: 60, label: "node 1" }, { x: 300, label: "node 2" }].map((n, ni) => (
        <g key={ni}>
          <rect x={n.x} y="110" width="120" height="86" rx="12" fill="#12141f" stroke="#3a4056" />
          <text x={n.x + 60} y="128" textAnchor="middle" fill="#8b93ab" fontSize="10">{n.label}</text>
          {[0, 1].map((p) => (
            <motion.rect
              key={p}
              x={n.x + 14 + p * 52}
              y="140"
              width="44"
              height="26"
              rx="7"
              fill={ni === 1 && p === 1 ? "#3b1d2e" : "#1e1b31"}
              stroke={ni === 1 && p === 1 ? "#f87171" : "#22d3ee"}
              strokeWidth="1.4"
              animate={
                ni === 1 && p === 1
                  ? { opacity: [1, 0.3, 0.3, 1] }
                  : { opacity: [0.6, 1, 0.6] }
              }
              transition={{ duration: 3, repeat: Infinity, delay: p * 0.4 + ni * 0.3 }}
            />
          ))}
          <text x={n.x + 36} y="157" textAnchor="middle" fill="#22d3ee" fontSize="9">pod</text>
          <text x={n.x + 88} y="157" textAnchor="middle" fill={ni === 1 ? "#f87171" : "#22d3ee"} fontSize="9">pod</text>
        </g>
      ))}

      {/* control plane to nodes */}
      <path d="M175 74 C 120 85, 120 95, 120 108" stroke="#3a4056" strokeWidth="2" fill="none" />
      <path d="M245 74 C 300 85, 300 95, 300 108" stroke="#3a4056" strokeWidth="2" fill="none" />

      {/* reschedule pod */}
      <motion.circle
        r="6"
        fill="#a3e635"
        animate={{
          cx: [344, 344, 240, 130],
          cy: [153, 153, 120, 153],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.25, 0.55, 0.85, 1] }}
      />
      <motion.text
        x="210" y="222" textAnchor="middle" fill="#a3e635" fontSize="10"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.5, 1] }}
      >
        {L("pod مرد؟ کنترل‌پلین همان لحظه جایگزین روی نود دیگر بالا می‌آورد", "a dead pod? the control plane spins up a replacement on another node instantly")}
      </motion.text>
    </svg>
  );
}
