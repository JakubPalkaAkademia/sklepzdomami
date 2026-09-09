import type { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";
import { privacyPolicyEffectiveDate, privacyPolicySections } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności serwisu Sklep z Domami — Szmaragdowa 7.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageContent
      title="Polityka prywatności"
      effectiveDate={privacyPolicyEffectiveDate}
      sections={privacyPolicySections}
    />
  );
}
