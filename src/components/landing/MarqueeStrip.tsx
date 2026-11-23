import { learningPaths } from "@/data/paths";
import { pick, type Locale } from "@/lib/i18n-helpers";

/**
 * MARQUEE STRIP — two infinite ticker rows of topics from the data.
 * Consumed by: landing page (right under the hero).
 */
export function MarqueeStrip({ locale }: { locale: Locale }) {
  const rowA = learningPaths.flatMap((p) => p.stages.flatMap((s) => s.topics.slice(0, 3)));
  const rowB = learningPaths.map((p) => pick(p.title, locale));
  const uniqA = [...new Set(rowA)];
  const uniqB = [...new Set(rowB)];

  return (
    <div className="relative flex flex-col gap-3 overflow-hidden border-y border-white/[0.06] bg-white/[0.02] py-5" dir="ltr">
      <div className="pointer-events-none absolute inset-y-0 start-0 z-10 w-10 bg-gradient-to-r from-[#05060a] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 end-0 z-10 w-10 bg-gradient-to-l from-[#05060a] to-transparent sm:w-24" />

      <div className="flex w-max animate-marquee gap-3">
        {[...uniqA, ...uniqA].map((topic, i) => (
          <span key={i} className="whitespace-nowrap rounded-full bg-white/[0.05] px-4 py-1.5 font-mono text-xs text-white/60 ring-1 ring-white/10">
            {topic}
          </span>
        ))}
      </div>
      <div className="flex w-max animate-marquee-reverse gap-3">
        {[...uniqB, ...uniqB].map((topic, i) => (
          <span key={i} className="whitespace-nowrap rounded-full bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 px-4 py-1.5 text-xs font-semibold text-white/70 ring-1 ring-white/10">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}
