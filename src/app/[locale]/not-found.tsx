import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "@/components/layout/LogoMark";

/**
 * 404 INSIDE A LOCALE — friendly, on-brand.
 * Consumed by: Next.js for any unmatched route under /[locale].
 */
export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="relative flex min-h-[70svh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div aria-hidden className="grid-bg absolute inset-0" />
      <LogoMark className="relative size-14 animate-float" />
      <p className="relative font-mono text-6xl font-extrabold text-gradient">404</p>
      <h1 className="relative text-2xl font-extrabold">{t("title")}</h1>
      <p className="relative max-w-md text-sm text-white/55">{t("subtitle")}</p>
      <Link
        href="/"
        className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-bold text-white transition hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.7)]"
      >
        {t("cta")}
      </Link>
    </div>
  );
}
