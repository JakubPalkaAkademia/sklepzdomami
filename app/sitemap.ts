import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { appPaths, languageAlternates, localizedUrl } from "@/lib/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.flatMap((locale) =>
    appPaths.map((path) => ({
      url: localizedUrl(locale, path),
      lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : 0.6,
      alternates: {
        languages: languageAlternates(path),
      },
    })),
  );
}
