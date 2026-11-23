import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { iconRegistry } from "@/components/icons/registry";
import { accents } from "@/lib/theme";
import { pick, toLocaleNumber, type Locale } from "@/lib/i18n-helpers";
import { learningPaths } from "@/data/paths";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Briefcase, Clock, Layers } from "lucide-react";

/**
 * /paths — grid of all learning paths.
 * Consumes: src/data/paths/*.
 */
export default async function PathsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const rawLocale = (await params).locale;
  const locale = (rawLocale === "en" ? "en" : "fa") as Locale;
  setRequestLocale(rawLocale);
  const t = await getTranslations({ locale: rawLocale, namespace: "pathsPage" });
  const c = await getTranslations({ locale: rawLocale, namespace: "common" });
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <div className="relative overflow-x-clip">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-96" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-600/10 to-transparent"
      />
      <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-32">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((p) => {
            const a = accents[p.accent];
            const Icon = iconRegistry[p.icon];
            return (
              <Stagger key={p.slug} className="h-full min-w-0">
                <TiltCard glowColor={a.hex} className="h-full">
                  <StaggerItem className="h-full min-w-0">
                    <Link
                      href={`/paths/${p.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25 sm:p-6"
                    >
                      <div className={`mb-5 flex size-12 items-center justify-center rounded-xl ${a.bgSoft} ring-1 ${a.border}`}>
                        <Icon className={`size-6 ${a.text}`} />
                      </div>
                      <h3 className="text-xl font-bold">{pick(p.title, locale)}</h3>
                      <p className="mt-1.5 text-sm text-white/55">{pick(p.tagline, locale)}</p>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/45">
                        {pick(p.description, locale)}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/55">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 ring-1 ring-white/10">
                          <Layers className="size-3.5" />
                          {toLocaleNumber(p.stages.length, locale)}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 ring-1 ring-white/10">
                          <Clock className="size-3.5" />
                          {pick(p.totalDuration, locale)}
                        </span>
                      </div>

                      <div className="mt-4">
                        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/40">
                          <Briefcase className={`size-3.5 ${a.text}`} />
                          {c("roles")}
                        </p>
                        <p className="mt-1.5 text-xs text-white/50">
                          {p.roles.slice(0, 3).map((r) => pick(r, locale)).join(" · ")}
                        </p>
                      </div>

                      <Reveal className="mt-auto pt-5">
                        <span className={`inline-flex items-center gap-2 text-sm font-bold ${a.text}`}>
                          {c("learnMore")}
                          <Arrow className="size-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                        </span>
                      </Reveal>
                    </Link>
                  </StaggerItem>
                </TiltCard>
              </Stagger>
            );
          })}
        </div>
      </section>
    </div>
  );
}
