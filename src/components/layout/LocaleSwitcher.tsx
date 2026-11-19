"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Languages } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";

/**
 * LANGUAGE SWITCHER — swaps fa ↔ en while keeping the current page.
 * Consumed by: Header (and usable anywhere).
 */
export function LocaleSwitcher() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const next = locale === "fa" ? "en" : "fa";

  return (
    <Link
      href={pathname}
      locale={next}
      aria-label={t("switchLocaleAria")}
      className="relative flex h-9 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
    >
      <Languages className="size-4" />
      <motion.span
        key={next}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {t("switchLocale")}
      </motion.span>
    </Link>
  );
}
