import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlossaryExplorer } from "@/components/glossary/GlossaryExplorer";

/**
 * /glossary — searchable bilingual term cards.
 * Consumes: src/data/glossary/*.
 */
export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const rawLocale = (await params).locale;
  setRequestLocale(rawLocale);
  const t = await getTranslations({ locale: rawLocale, namespace: "glossaryPage" });
  const c = await getTranslations({ locale: rawLocale, namespace: "common" });

  return (
    <div className="relative">
      <div aria-hidden className="grid-bg absolute inset-x-0 top-0 h-96" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-amber-500/10 to-transparent"
      />
      <section className="relative mx-auto max-w-6xl px-4 pb-28 pt-32 sm:px-6">
        <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-12">
          <GlossaryExplorer
            labels={{
              searchPlaceholder: c("searchPlaceholder"),
              all: t("allCategories"),
              analogy: c("analogy"),
              related: c("related"),
              noResults: c("noResults"),
              terms: c("terms"),
            }}
          />
        </div>
      </section>
    </div>
  );
}
