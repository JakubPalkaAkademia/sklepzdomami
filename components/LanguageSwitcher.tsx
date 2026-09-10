"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, localeShortLabels } from "@/lib/i18n/config";
import { localizedPath, stripLocalePrefix } from "@/lib/i18n/paths";
import { useDictionary, useLocale } from "@/components/LocaleProvider";

const LOCALE_COOKIE = "NEXT_LOCALE";

function persistLocale(locale: string) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;samesite=lax`;
  } catch {
    // ignore cookie errors
  }
}

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const dict = useDictionary();
  const pathname = usePathname();
  const path = stripLocalePrefix(pathname);

  return (
    <nav className="lang-switcher" aria-label={dict.language.ariaLabel}>
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={localizedPath(locale, path)}
            hrefLang={locale}
            className={`lang-switcher__link${active ? " lang-switcher__link--active" : ""}`}
            aria-label={`${dict.language.switchTo} ${localeNames[locale]}`}
            aria-current={active ? "true" : undefined}
            onClick={() => persistLocale(locale)}
          >
            {localeShortLabels[locale]}
          </Link>
        );
      })}
    </nav>
  );
}
