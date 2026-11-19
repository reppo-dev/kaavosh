import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/data/schema";

export type { Locale };

/**
 * Picks the right side of a { fa, en } string.
 * Consumed by: every server component rendering data content.
 */
export function pick(value: Localized, locale: Locale): string {
  return value[locale] ?? value.fa;
}

/** Human-friendly Persian digits for fa, latin for en. */
const faDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toLocaleNumber(n: number, locale: Locale): string {
  const digits = String(n);
  return locale === "fa"
    ? digits.replace(/\d/g, (d) => faDigits[Number(d)])
    : digits;
}

/** Zero-padded stage number: 3 → "03" / "۰۳". */
export function stageNumber(n: number, locale: Locale): string {
  return toLocaleNumber(n, locale).padStart(locale === "fa" ? 4 : 2, "0");
}
