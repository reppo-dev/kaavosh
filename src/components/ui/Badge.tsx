import type { AccentToken, Difficulty } from "@/data/schema";
import { accents } from "@/lib/theme";

/**
 * Small presentational primitives.
 * Consumed by: cards, lists and filters across all pages.
 */

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-white/70 ring-1 ring-white/10 ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

const difficultyAccent: Record<Difficulty, AccentToken> = {
  junior: "emerald",
  mid: "amber",
  senior: "rose",
};

export function DifficultyBadge({
  difficulty,
  label,
}: {
  difficulty: Difficulty;
  /** Pre-translated label from the parent (server) component. */
  label: string;
}) {
  const a = accents[difficultyAccent[difficulty]];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${a.bgSoft} ${a.text} ring-1 ${a.border}`}
    >
      <span className={`size-1.5 rounded-full ${a.solid}`} />
      {label}
    </span>
  );
}
