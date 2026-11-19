"use client";

import { useLocale } from "next-intl";

/**
 * Locale helper for animated explainers.
 * Every explainer is a client component inside NextIntlClientProvider,
 * so useLocale() works. `L(fa, en)` picks the string for the active locale.
 */
export function useExplainerLocale() {
  const locale = useLocale();
  const L = (fa: string, en: string) => (locale === "fa" ? fa : en);
  return { locale, L };
}
