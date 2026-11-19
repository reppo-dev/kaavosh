import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter, Vazirmatn, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { dirFor } from "@/lib/theme";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import "../globals.css";

/**
 * LOCALE ROOT LAYOUT — sets language, direction (RTL for fa), fonts,
 * motion provider and the shared header/footer chrome.
 * Consumed by: every page under /[locale].
 */

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-custom",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: {
      default: site.name[locale === "fa" ? "fa" : "en"] + " — " + site.tagline[locale === "fa" ? "fa" : "en"],
      template: "%s · Kaavosh",
    },
    description: site.description[locale === "fa" ? "fa" : "en"],
    keywords: ["kaavosh", "کاوش", "learning paths", "interview questions"],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={dirFor(locale)}
      className={`${vazirmatn.variable} ${inter.variable} ${mono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-ink text-[#eceef6]">
        <NextIntlClientProvider>
          <ScrollProgress />
          <div aria-hidden className="noise-layer pointer-events-none fixed inset-0 z-[70]" />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
