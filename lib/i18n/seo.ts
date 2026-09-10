import type { Metadata } from "next";
import { localeOg, type Locale } from "@/lib/i18n/config";
import { languageAlternates, localizedUrl } from "@/lib/i18n/paths";
import { hero, site } from "@/lib/site";

export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const url = localizedUrl(locale, path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      url,
      siteName: site.name,
      title: `${title} · ${site.name}`,
      description,
      images: [{ url: hero.poster, width: 1500, height: 500, alt: title }],
    },
  };
}
