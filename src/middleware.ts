import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Redirects "/" → "/fa" and attaches the locale prefix to every route.
 */
export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
