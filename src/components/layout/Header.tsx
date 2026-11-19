"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "motion/react";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { LogoMark } from "./LogoMark";

/**
 * SITE HEADER — sticky, turns into glass after scrolling.
 * Consumed by: src/app/[locale]/layout.tsx (every page).
 */
export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const links = [
    { href: "/paths", label: t("paths") },
    { href: "/interview", label: t("interview") },
    { href: "/glossary", label: t("glossary") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "glass border-b border-white/[0.06] shadow-[0_8px_40px_-16px_rgba(0,0,0,0.7)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <LogoMark className="size-8 transition-transform duration-500 group-hover:rotate-[20deg]" />
          <span className="text-lg font-extrabold tracking-tight">
            کاوش<span className="mx-1.5 font-semibold text-white/40">/</span>
            <span className="text-gradient">Kaavosh</span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/15"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          {/* mobile burger */}
          <button
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-lg text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "bars"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {open ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/[0.06] md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
