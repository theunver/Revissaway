"use client";

import { useEffect, useState } from 'react';

interface TranslationOverlayProps {
  isTranslating: boolean;
  language: string;
}

export default function TranslationOverlay({ isTranslating, language }: TranslationOverlayProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isTranslating) {
      setShow(true);
    } else {
      // Keep showing for a brief moment after translation completes
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTranslating]);

  if (!show) return null;

  const languageNames: { [key: string]: string } = {
    en: 'English',
    tr: 'Türkçe',
    zh: '中文',
    ar: 'العربية',
    vi: 'Tiếng Việt',
    yue: '廣東話',
    pa: 'ਪੰਜਾਬੀ',
    hi: 'हिन्दी',
    it: 'Italiano',
    el: 'Ελληνικά',
    tl: 'Tagalog',
    th: 'ไทย',
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
        isTranslating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 text-center">
        <div className="mb-4">
          <svg
            className="animate-spin h-12 w-12 mx-auto text-[#9B7E3E]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Translating...
        </h3>
        
        <p className="text-gray-600 text-sm">
          Converting page content to{' '}
          <span className="font-semibold text-[#9B7E3E]">
            {languageNames[language] || language.toUpperCase()}
          </span>
        </p>

        <div className="mt-4 flex items-center justify-center gap-1">
          <div className="h-2 w-2 bg-[#9B7E3E] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="h-2 w-2 bg-[#9B7E3E] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="h-2 w-2 bg-[#9B7E3E] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}

