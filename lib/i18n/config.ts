export const locales = ["pl", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

export const localeHtmlLang: Record<Locale, string> = {
  pl: "pl",
  en: "en",
  de: "de",
};

export const localeOg: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  de: "de_DE",
};

export const localeIntl: Record<Locale, string> = {
  pl: "pl-PL",
  en: "en-GB",
  de: "de-DE",
};

export const localeNames: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
  de: "Deutsch",
};

export const localeShortLabels: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  de: "DE",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
