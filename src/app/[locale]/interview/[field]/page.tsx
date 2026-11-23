import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { InterviewList } from "@/components/interview/InterviewList";
import { iconRegistry } from "@/components/icons/registry";
import { accents } from "@/lib/theme";
import { pick, toLocaleNumber, type Locale } from "@/lib/i18n-helpers";
import { interviewFields, getFieldBySlug } from "@/data/interview";

/**
 * /interview/[field] — all Q&A cards for one field, with a
 * difficulty filter. Consumes: src/data/interview/<field>.ts
 */
export function generateStaticParams() {
  return interviewFields.flatMap((f) =>
    ["fa", "en"].map((locale) => ({ locale, field: f.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; field: string }>;
}): Promise<Metadata> {
  const { locale, field } = await params;
  const f = getFieldBySlug(field);
  if (!f) return {};
  const loc = (locale === "en" ? "en" : "fa") as Locale;
  return { title: pick(f.title, loc), description: pick(f.description, loc) };
}

export default async function InterviewFieldPage({
  params,
}: {
  params: Promise<{ locale: string; field: string }>;
}) {
  const { locale: rawLocale, field } = await params;
  const locale = (rawLocale === "en" ? "en" : "fa") as Locale;
  setRequestLocale(rawLocale);

  const f = getFieldBySlug(field);
  if (!f) notFound();

  const t = await getTranslations({ locale: rawLocale, namespace: "interviewPage" });
  const c = await getTranslations({ locale: rawLocale, namespace: "common" });
  const a = accents[f.accent];
  const Icon = iconRegistry[f.icon];

  return (
    <div className="relative overflow-x-clip">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-96" />
      <div
        aria-hidden
        className={`absolute inset-x-0 top-0 h-96 ${a.bgSofter} bg-gradient-to-b to-transparent`}
      />
      <section className="relative mx-auto max-w-4xl px-4 pb-20 pt-24 sm:px-6 sm:pb-28 sm:pt-28">
        <Link
          href="/interview"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft className="size-4 rtl:rotate-180" />
          {t("backToFields")}
        </Link>

        <div className="mt-6 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:gap-5">
          <span className={`flex size-12 shrink-0 items-center justify-center rounded-2xl sm:size-14 ${a.bgSoft} ring-1 ${a.border} ${a.glowShadow}`}>
            <Icon className={`size-6 sm:size-7 ${a.text}`} />
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="break-words text-2xl font-extrabold tracking-tight sm:text-4xl">
              {pick(f.title, locale)}
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/55">
              {pick(f.description, locale)}
            </p>
            <p className="mt-2 text-xs text-white/40">
              {toLocaleNumber(f.questions.length, locale)} {t("questionsIn")}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <InterviewList
            questions={f.questions}
            accent={f.accent}
            labels={{
              quickAnswer: c("quickAnswer"),
              stepByStep: c("stepByStep"),
              followUps: c("followUps"),
              codeExample: c("codeExample"),
              visualExplainer: c("visualExplainer"),
            }}
          />
        </div>
      </section>
    </div>
  );
}
