"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin gradient progress bar pinned to the top of the viewport,
 * tied to page scroll. Direction-aware (fills from the reading side).
 * Consumed by: [locale] layout.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500 rtl:origin-right"
    />
  );
}
