import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { RoadmapTimeline } from "@/components/paths/RoadmapTimeline";
import { iconRegistry } from "@/components/icons/registry";
import { accents } from "@/lib/theme";
import { pick, type Locale } from "@/lib/i18n-helpers";
import { learningPaths, getPathBySlug } from "@/data/paths";

/**
 * /paths/[slug] — one learning path's visual roadmap.
 * Consumes: src/data/paths/<slug>.ts
 */
export function generateStaticParams() {
  return learningPaths.flatMap((p) =>
    ["fa", "en"].map((locale) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const path = getPathBySlug(slug);
  if (!path) return {};
  const loc = (locale === "en" ? "en" : "fa") as Locale;
  return { title: pick(path.title, loc), description: pick(path.description, loc) };
}

export default async function PathDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = (rawLocale === "en" ? "en" : "fa") as Locale;
  setRequestLocale(rawLocale);

  const path = getPathBySlug(slug);
  if (!path) notFound();

  const t = await getTranslations({ locale: rawLocale, namespace: "pathsPage" });
  const c = await getTranslations({ locale: rawLocale, namespace: "common" });
  const rt = await getTranslations({ locale: rawLocale, namespace: "resourceType" });
  const a = accents[path.accent];
  const Icon = iconRegistry[path.icon];
  const Arrow = locale === "fa" ? ArrowLeft : ArrowRight;

  return (
    <div className="relative">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-[420px]" />
      <div
        aria-hidden
        className={`absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b ${a.bgSofter} to-transparent`}
      />

      <section className="relative mx-auto max-w-6xl px-4 pb-28 pt-28 sm:px-6">
        {/* breadcrumb */}
        <Link
          href="/paths"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-white"
        >
          <Arrow className="size-4 rtl:rotate-180" />
          {t("backToPaths")}
        </Link>

        {/* hero */}
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
          <span className={`flex size-16 shrink-0 items-center justify-center rounded-2xl ${a.bgSoft} ring-1 ${a.border} ${a.glowShadow}`}>
            <Icon className={`size-8 ${a.text}`} />
          </span>
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {pick(path.title, locale)}
            </h1>
            <p className={`mt-2 text-lg font-semibold ${a.textSoft}`}>{pick(path.tagline, locale)}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-white/60">
              {pick(path.description, locale)}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <span className={`size-2 rounded-full ${a.solid}`} />
                {pick(path.totalDuration, locale)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Briefcase className={`size-4 ${a.text}`} />
                {path.roles.map((r) => pick(r, locale)).join(" · ")}
              </span>
            </div>
          </div>
        </div>

        {/* roadmap */}
        <div className="mt-16">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{t("roadmapTitle")}</h2>
          <p className="mt-1.5 text-sm text-white/45">{t("roadmapSubtitle")}</p>

          <RoadmapTimeline
            path={path}
            labels={{
              stageLabel: t("stageLabel"),
              ofLabel: t("ofLabel"),
              duration: c("duration"),
              skills: c("skills"),
              resources: c("resources"),
              topics: c("topics"),
              typeDocs: rt("docs"),
              typeVideo: rt("video"),
              typeCourse: rt("course"),
              typeBook: rt("book"),
              typeInteractive: rt("interactive"),
              typeRoadmap: rt("roadmap"),
            }}
          />
        </div>
      </section>
    </div>
  );
}
