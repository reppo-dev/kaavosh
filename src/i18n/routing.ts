import { defineRouting } from "next-intl/routing";

/**
 * i18n routing config — the two supported languages.
 * Consumed by: middleware, [locale] layout, navigation helpers.
 */
export const routing = defineRouting({
  locales: ["fa", "en"],
  defaultLocale: "fa",
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
