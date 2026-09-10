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
  const privacy = getDictionary(locale).privacy;
  return pageMetadata(locale, "/polityka-prywatnosci", privacy.title, privacy.description);
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const privacy = getDictionary(locale).privacy;

  return (
    <LegalPageContent
      title={privacy.title}
      effectivePrefix={privacy.effectivePrefix}
      effectiveDate={privacy.effectiveDate}
      sections={privacy.sections}
    />
  );
}
