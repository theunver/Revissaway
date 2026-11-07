"use client";

// DRAFT Terms of Use v2 (pending legal review) – see components/legal/LegalDoc.tsx for the release safeguards.
import { LegalPage } from "@/components/legal/LegalDoc";
import { useLanguage } from "@/contexts/LanguageContext";
import { TermsEN, TermsTR } from "./content";

export default function TermsPage() {
  const { language } = useLanguage();
  const tr = language === "tr";
  return (
    <LegalPage
      title={tr ? "Kullanım Şartları" : "Terms of Use"}
      subtitle={tr ? "Lütfen RevissaWay hizmetlerini kullanmadan önce bu şartları dikkatle okuyun" : "Please read these terms carefully before using RevissaWay services"}
      docTitle={tr ? "Kullanım Şartları" : "Terms of Use"}
      // Set to the approved publication date before release.
      lastUpdated={null}
    >
      {tr ? <TermsTR /> : <TermsEN />}
    </LegalPage>
  );
}
