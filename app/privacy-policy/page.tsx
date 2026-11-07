"use client";

// DRAFT Privacy Policy v2 (pending legal review) – see components/legal/LegalDoc.tsx for the release safeguards.
import { LegalPage } from "@/components/legal/LegalDoc";
import { useLanguage } from "@/contexts/LanguageContext";
import { PrivacyEN, PrivacyTR } from "./content";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const tr = language === "tr";
  return (
    <LegalPage
      title={tr ? "Gizlilik Politikası" : "Privacy Policy"}
      subtitle={tr ? "RevissaWay bilgilerinizi nasıl toplar, kullanır ve korur" : "How RevissaWay collects, uses, and protects your information"}
      docTitle={tr ? "Gizlilik Politikası" : "Privacy Policy"}
      // Set to the approved publication date (e.g. "6 November 2026") before release.
      lastUpdated={null}
    >
      {tr ? <PrivacyTR /> : <PrivacyEN />}
    </LegalPage>
  );
}
