import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { de } from "@/lib/i18n/de";
import { en } from "@/lib/i18n/en";
import { pl, type Dictionary } from "@/lib/i18n/pl";

const dictionaries: Record<Locale, Dictionary> = {
  pl,
  en,
  de,
};

export function getDictionary(locale: string): Dictionary {
  if (isLocale(locale)) {
    return dictionaries[locale];
  }
  return dictionaries[defaultLocale];
}

export type { Dictionary };
