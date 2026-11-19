import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { iconRegistry } from "@/components/icons/registry";
import { accents } from "@/lib/theme";
import { pick, toLocaleNumber, type Locale } from "@/lib/i18n-helpers";
import { interviewFields } from "@/data/interview";
import { interviewSources } from "@/data/interview/sources";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, MessagesSquare, Star } from "lucide-react";

/**
 * /interview — hub of all interview fields.
 * Consumes: src/data/interview/*.
 */
export default async function InterviewHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const rawLocale = (await params).locale;
  const locale = (rawLocale === "en" ? "en" : "fa") as Locale;
  setRequestLocale(rawLocale);
  const t = await getTranslations({ locale: rawLocale, namespace: "interviewPage" });
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <div className="relative">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-96" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-violet-600/10 to-transparent"
      />
      <section className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <p className="mt-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
            <MessagesSquare className="size-3.5" />
            {t("updated")}
          </span>
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interviewFields.map((f) => {
            const a = accents[f.accent];
            const Icon = iconRegistry[f.icon];
            return (
              <Stagger key={f.slug}>
                <StaggerItem>
                  <TiltCard glowColor={a.hex} className="h-full">
                    <Link
                      href={`/interview/${f.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
                    >
                      <div className={`mb-5 flex size-12 items-center justify-center rounded-xl ${a.bgSoft} ring-1 ${a.border}`}>
                        <Icon className={`size-6 ${a.text}`} />
                      </div>
                      <h3 className="text-xl font-bold">{pick(f.title, locale)}</h3>
                      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-white/55">
                        {pick(f.description, locale)}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className={`text-sm font-bold ${a.text}`}>
                          {toLocaleNumber(f.questions.length, locale)} {t("questionsIn")}
                        </span>
                        <Arrow className={`size-4 ${a.text} transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1`} />
                      </div>
                    </Link>
                  </TiltCard>
                </StaggerItem>
              </Stagger>
            );
          })}
        </div>

        {/* ── منابع مصاحبه — verified GitHub repos ── */}
        <section className="mt-24">
          <SectionHeading
            eyebrow={t("sourcesEyebrow")}
            title={t("sourcesTitle")}
            subtitle={t("sourcesSubtitle")}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {interviewSources.map((s) => (
              <Stagger key={s.repo}>
                <StaggerItem>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-bold leading-snug text-white/90">
                        {pick(s.title, locale)}
                      </h3>
                      <ExternalLink className="mt-0.5 size-4 shrink-0 text-white/30 transition-colors group-hover:text-white/70" />
                    </div>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-white/50">
                      {pick(s.note, locale)}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-1 font-semibold text-amber-300 ring-1 ring-amber-500/25">
                        <Star className="size-3" />
                        {s.stars} {t("sourcesStars")}
                      </span>
                      <span className="rounded-full bg-white/5 px-2.5 py-1 text-white/45">
                        {t("sourcesUpdated")}: {s.pushed}
                      </span>
                    </div>
                    <span dir="ltr" className="mt-3 truncate text-[11px] text-white/30">
                      {s.repo}
                    </span>
                  </a>
                </StaggerItem>
              </Stagger>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
