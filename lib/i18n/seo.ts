import type { Metadata } from "next";
import { localeOg, locales, type Locale } from "@/lib/i18n/config";
import { languageAlternates, localizedUrl } from "@/lib/i18n/paths";
import { site } from "@/lib/site";

export function ogImage(alt: string) {
  return {
    url: site.ogImage,
    width: site.ogImageWidth,
    height: site.ogImageHeight,
    alt,
  };
}

export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  options?: { absoluteTitle?: boolean },
): Metadata {
  const url = localizedUrl(locale, path);
  const ogTitle = options?.absoluteTitle ? title : `${title} · ${site.name}`;
  return {
    title: options?.absoluteTitle ? { absolute: title } : title,
    description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      alternateLocale: locales
        .filter((item) => item !== locale)
        .map((item) => localeOg[item]),
      url,
      siteName: site.name,
      title: ogTitle,
      description,
      images: [ogImage(title)],
    },
    twitter: {
      card: "summary_large_image",
      site: site.twitter,
      title: ogTitle,
      description,
      images: [site.ogImage],
    },
  };
}
