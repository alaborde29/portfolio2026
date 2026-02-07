import createMiddleware from "next-intl/middleware";

const locales = ["fr", "en"] as const;

export default createMiddleware({
  locales,
  defaultLocale: "fr",
  localePrefix: "always",
});

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
