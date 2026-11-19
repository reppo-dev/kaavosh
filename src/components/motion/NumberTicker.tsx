"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * Locale-aware digits (۰۱۲۳ for fa).
 * Consumed by: landing stats section.
 */
export function NumberTicker({
  value,
  locale,
  className,
  duration = 1.6,
}: {
  value: number;
  locale: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const n = Math.round(v);
        setDisplay(
          locale === "fa"
            ? n.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)])
            : n.toString(),
        );
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, locale]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
