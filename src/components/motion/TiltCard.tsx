"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

/**
 * Subtle 3D tilt on hover + accent glow that follows the pointer.
 * Consumed by: path cards, explainer frames, landing cards.
 */
export function TiltCard({
  children,
  className,
  glowColor = "#818cf8",
  maxTilt = 8,
}: {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 180,
    damping: 20,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 180,
    damping: 20,
  });

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={`group relative ${className ?? ""}`}
    >
      {/* pointer-following glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mx,50%) var(--my,50%), ${glowColor}22, transparent 65%)`,
        }}
      />
      {children}
    </motion.div>
  );
}
