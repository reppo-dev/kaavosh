import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LogoMark } from "./LogoMark";
import { site } from "@/data/site";

/**
 * SITE FOOTER — sections, disclaimer, copyright.
 * Consumed by: src/app/[locale]/layout.tsx (every page).
 */
export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  const links = [
    { href: "/paths", label: t("paths") },
    { href: "/interview", label: t("interview") },
    { href: "/glossary", label: t("glossary") },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#07080e]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <LogoMark className="size-8" />
              <span className="text-lg font-extrabold">
                {locale === "fa" ? `${site.name.fa} / ${site.name.en}` : site.name.en}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white/80">{t("sections")}</h3>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/50 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-xs">
            <h3 className="text-sm font-bold text-white/80">
              {nav("paths")} · {nav("interview")} · {nav("glossary")}
            </h3>
            <p className="mt-4 text-xs leading-relaxed text-white/40">
              {t("disclaimer")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/[0.06] pt-6 text-center text-xs text-white/35 sm:mt-12 sm:flex-row sm:text-start">
          <span>
            {locale === "fa" ? `© ۲۰۲۶ ${site.name.fa} · ${site.name.en}` : `© 2026 ${site.name.en}`}
          </span>
          <span>{t("copyright")}</span>
        </div>
      </div>
    </footer>
  );
}
