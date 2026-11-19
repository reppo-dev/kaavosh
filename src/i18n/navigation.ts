import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation helpers — use these instead of next/link
 * so URLs always carry the active language prefix.
 * Consumed by: every component that links between pages.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
