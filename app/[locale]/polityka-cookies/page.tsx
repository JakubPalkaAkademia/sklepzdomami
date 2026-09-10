import type { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const cookies = getDictionary(locale).cookies;
  return pageMetadata(locale, "/polityka-cookies", cookies.title, cookies.description);
}

export default async function CookiesPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const cookies = getDictionary(locale).cookies;

  return (
    <LegalPageContent
      title={cookies.title}
      effectivePrefix={cookies.effectivePrefix}
      effectiveDate={cookies.effectiveDate}
      sections={cookies.sections}
    />
  );
}
