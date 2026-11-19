import {
  BookOpen,
  ExternalLink,
  FileText,
  GraduationCap,
  Map,
  MousePointerClick,
  PlayCircle,
} from "lucide-react";
import type { Localized, ResourceType } from "@/data/schema";
import { pick, type Locale } from "@/lib/i18n-helpers";

/**
 * RESOURCE CHIP — external link to a reputable learning resource.
 * Consumed by: stage cards on the roadmap page.
 */
const typeIcons: Record<ResourceType, React.ComponentType<{ className?: string }>> = {
  docs: FileText,
  video: PlayCircle,
  course: GraduationCap,
  book: BookOpen,
  interactive: MousePointerClick,
  roadmap: Map,
};

export function ResourceChip({
  title,
  url,
  type,
  locale,
  typeLabel,
}: {
  title: Localized;
  url: string;
  type: ResourceType;
  locale: Locale;
  /** Pre-translated resource-type label. */
  typeLabel: string;
}) {
  const Icon = typeIcons[type];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 transition hover:border-white/20 hover:bg-white/[0.08]"
    >
      <Icon className="size-4 shrink-0 text-white/45 transition group-hover:text-white/80" />
      <span className="min-w-0 flex-1 truncate text-sm text-white/80 transition group-hover:text-white">
        {pick(title, locale)}
      </span>
      <span className="hidden shrink-0 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] text-white/45 sm:inline">
        {typeLabel}
      </span>
      <ExternalLink className="size-3.5 shrink-0 text-white/25 transition group-hover:text-white/70" />
    </a>
  );
}
