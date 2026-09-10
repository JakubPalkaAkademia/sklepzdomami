import { site } from "@/lib/site";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";

export const appPaths = [
  "/",
  "/o-nas",
  "/kontakt",
  "/polityka-prywatnosci",
  "/polityka-cookies",
] as const;

export type AppPath = (typeof appPaths)[number];

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const maybeLocale = segments[0];
  if (maybeLocale && isLocale(maybeLocale) && maybeLocale !== defaultLocale) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function isHomePath(pathname: string): boolean {
  return stripLocalePrefix(pathname) === "/";
}

export function localeFromPathname(pathname: string): Locale {
  const maybeLocale = pathname.split("/").filter(Boolean)[0];
  if (maybeLocale && isLocale(maybeLocale) && maybeLocale !== defaultLocale) {
    return maybeLocale;
  }
  return defaultLocale;
}

export function localizedUrl(locale: Locale, path: string): string {
  return `${site.url}${localizedPath(locale, path)}`;
}

export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {
    "x-default": localizedUrl(defaultLocale, path),
  };
  for (const locale of locales) {
    languages[locale] = localizedUrl(locale, path);
  }
  return languages;
}
