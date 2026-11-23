import type { AccentToken } from "@/data/schema";
import { accents } from "@/lib/theme";

/**
 * EXPLAINER FRAME — the framed panel every animated SVG explainer
 * sits inside, with a "live" pulse dot and accent top border.
 * Consumed by: landing showcase, roadmap stages, interview answers.
 */
export function ExplainerFrame({
  children,
  title,
  caption,
  accent,
  className,
}: {
  children: React.ReactNode;
  title: string;
  caption?: string;
  accent: AccentToken;
  className?: string;
}) {
  const a = accents[accent];
  return (
    <div
      className={`relative w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c14] ${className ?? ""}`}
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${a.hex}66, transparent)`,
        }}
      />
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3.5 py-2.5 sm:px-4">
        <span className="size-1.5 shrink-0 animate-pulse-soft rounded-full bg-emerald-400" />
        <span className="truncate text-xs font-semibold text-white/70">{title}</span>
        {caption && (
          <span className="ms-auto hidden truncate text-[11px] text-white/35 sm:block">
            {caption}
          </span>
        )}
      </div>
      <div className="overflow-x-hidden px-2.5 py-2.5 sm:px-3 sm:py-3">{children}</div>
    </div>
  );
}
