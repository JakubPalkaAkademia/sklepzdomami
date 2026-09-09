import type { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";
import { cookiesPolicyEffectiveDate, cookiesPolicySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description: "Polityka plików cookies serwisu Sklep z Domami.",
};

export default function CookiesPolicyPage() {
  return (
    <LegalPageContent
      title="Polityka cookies"
      effectiveDate={cookiesPolicyEffectiveDate}
      sections={cookiesPolicySections}
    />
  );
}
