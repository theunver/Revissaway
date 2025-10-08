"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function GlobalDisclaimer() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-gray-900 text-gray-400 py-6 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs leading-relaxed text-center">
          <strong className="text-gray-300">Disclaimer:</strong> {t('disclaimer.text')}
        </p>
      </div>
    </div>
  );
}
