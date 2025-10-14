"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import TranslationOverlay from './TranslationOverlay';

export default function TranslationOverlayWrapper() {
  const { isTranslating, language } = useLanguage();

  return <TranslationOverlay isTranslating={isTranslating} language={language} />;
}

