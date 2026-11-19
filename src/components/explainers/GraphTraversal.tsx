"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — BFS.
 * The visit wave expands level by level from the source:
 * distance 1, then 2, then 3 — why BFS finds shortest paths
 * in unweighted graphs.
 */
const nodes = [
  { id: "S", x: 90, y: 115, lvl: 0 },
  { id: "A", x: 190, y: 60, lvl: 1 },
  { id: "B", x: 190, y: 170, lvl: 1 },
  { id: "C", x: 290, y: 40, lvl: 2 },
  { id: "D", x: 290, y: 130, lvl: 2 },
  { id: "E", x: 380, y: 90, lvl: 3 },
];
const edges: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [4, 5],
];
const lvlColor = ["#6366f1", "#22d3ee", "#c084fc", "#a3e635"];

export function GraphTraversalExplainer() {
  const { L } = useExplainerLocale();

  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      <text x="210" y="24" textAnchor="middle" fill="#8b93ab" fontSize="11">
        {L("BFS — کاوش در حلقه‌های فاصله", "BFS — explore in rings of distance")}
      </text>

      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x + 18}
          y1={nodes[a].y}
          x2={nodes[b].x - 18}
          y2={nodes[b].y}
          stroke="#3a4056"
          strokeWidth="2"
          animate={{ stroke: ["#3a4056", lvlColor[nodes[b].lvl], "#3a4056"] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: nodes[b].lvl * 0.9 + i * 0.12, times: [0, 0.5, 1] }}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.g
          key={i}
          animate={{ opacity: n.lvl === 0 ? 1 : [0.15, 1, 1, 0.15] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: n.lvl * 0.9, times: [0, 0.25, 0.85, 1] }}
        >
          <circle cx={n.x} cy={n.y} r="18" fill="#12141f" stroke={lvlColor[n.lvl]} strokeWidth="2" />
          <text x={n.x} y={n.y + 4} textAnchor="middle" fill="#e2e8f0" fontSize="12">{n.id}</text>
        </motion.g>
      ))}

      <g>
        {[0, 1, 2, 3].map((l) => (
          <g key={l}>
            <circle cx={62 + l * 26} cy="206" r="5" fill={lvlColor[l]} />
            <text x={74 + l * 26} y="210" fill="#8b93ab" fontSize="9">
              {l === 0 ? L("مبدأ", "source") : L(`فاصله ${l}`, `dist ${l}`)}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
