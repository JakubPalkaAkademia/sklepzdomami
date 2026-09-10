import type { Metadata } from "next";
import { ShelterPage } from "@/components/ShelterPage";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/", dict.metadata.titleDefault, dict.metadata.description, {
    absoluteTitle: true,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  return <ShelterPage dict={getDictionary(locale)} />;
}
