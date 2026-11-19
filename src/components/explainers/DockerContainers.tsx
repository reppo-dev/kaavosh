"use client";

import { motion } from "motion/react";
import { useExplainerLocale } from "./useExplainerLocale";

/**
 * ANIMATED EXPLAINER — VM vs container.
 * The same host shown two ways: heavy VMs each carrying a full
 * OS, versus light containers sharing one kernel.
 */
export function DockerContainersExplainer() {
  const { L } = useExplainerLocale();
  return (
    <svg viewBox="0 0 420 230" className="w-full" role="img">
      {/* left: VMs */}
      <g>
        <rect x="18" y="34" width="180" height="150" rx="14" fill="#12141f" stroke="#3a4056" />
        <text x="108" y="54" textAnchor="middle" fill="#8b93ab" fontSize="11">{L("ماشین‌های مجازی", "Virtual Machines")}</text>
        {[
          { x: 32, c: "#f97316" },
          { x: 112, c: "#f97316" },
        ].map((vm, i) => (
          <g key={i}>
            <rect x={vm.x} y="66" width="72" height="88" rx="10" fill="#1c1f2e" stroke={vm.c} strokeOpacity="0.55" />
            <rect x={vm.x + 8} y="74" width="56" height="18" rx="6" fill="#262a3a" />
            <text x={vm.x + 36} y="86" textAnchor="middle" fill="#8b93ab" fontSize="8">App</text>
            <rect x={vm.x + 8} y="98" width="56" height="28" rx="6" fill="#262a3a" />
            <text x={vm.x + 36} y="115" textAnchor="middle" fill="#8b93ab" fontSize="8">Full OS</text>
            <rect x={vm.x + 8} y="132" width="56" height="14" rx="6" fill="#0a0c14" />
            <text x={vm.x + 36} y="142" textAnchor="middle" fill="#8b93ab" fontSize="7">Guest OS boot…</text>
            <motion.rect
              x={vm.x + 8} y="132" width="56" height="14" rx="6"
              fill={vm.c} opacity="0.25"
              animate={{ opacity: [0, 0.35, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.4 }}
            />
          </g>
        ))}
        <text x="108" y="200" textAnchor="middle" fill="#8b93ab" fontSize="10">{L("سنگین · گیگابایت · بوت کند", "heavy · GBs · slow boot")}</text>
      </g>

      {/* right: containers */}
      <g>
        <rect x="222" y="34" width="180" height="150" rx="14" fill="#12141f" stroke="#22d3ee" strokeOpacity="0.4" />
        <text x="312" y="54" textAnchor="middle" fill="#67e8f9" fontSize="11">{L("کانتینرها", "Containers")}</text>
        {[
          { x: 236, y: 66 },
          { x: 316, y: 66 },
          { x: 236, y: 112 },
          { x: 316, y: 112 },
        ].map((c, i) => (
          <g key={i}>
            <rect x={c.x} y={c.y} width="72" height="38" rx="8" fill="#1c1f2e" stroke="#22d3ee" strokeOpacity="0.5" />
            <rect x={c.x + 8} y={c.y + 6} width="56" height="10" rx="4" fill="#262a3a" />
            <rect x={c.x + 8} y={c.y + 20} width="56" height="10" rx="4" fill="#0a0c14" />
            <motion.rect
              x={c.x} y={c.y} width="72" height="38" rx="8"
              fill="#22d3ee"
              animate={{ opacity: [0, 0.14, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.55 }}
            />
          </g>
        ))}
        <rect x="236" y="158" width="152" height="18" rx="7" fill="#262a3a" />
        <text x="312" y="171" textAnchor="middle" fill="#8b93ab" fontSize="8">{L("هسته‌ی مشترک (یک OS)", "shared kernel (one OS)")}</text>
        <text x="312" y="200" textAnchor="middle" fill="#8b93ab" fontSize="10">{L("سبک · مگابایت · شروع آنی", "light · MBs · starts instantly")}</text>
      </g>

      {/* vs badge */}
      <motion.g animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ originX: "210px", originY: "24px" }}>
        <circle cx="210" cy="24" r="15" fill="#1c1f2e" stroke="#3a4056" />
        <text x="210" y="29" textAnchor="middle" fill="#c6cbdd" fontSize="11" fontWeight="700">vs</text>
      </motion.g>
    </svg>
  );
}
