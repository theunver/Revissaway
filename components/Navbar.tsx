"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage, languageOptions } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t, isLoading, isTranslating } = useLanguage();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md h-[55px]">
        <div className="flex items-center justify-between h-full px-4 md:px-8 max-w-[1920px] mx-auto">
          {/* Logo - Centered on mobile, left on desktop */}
          <a href="/" className="flex items-center translate-y-2 absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
            <Image 
              src="/logo.png" 
              alt="RevissaWay Logo" 
              width={350}
              height={350}
              className="w-auto max-h-[85px] md:max-h-[95px] lg:max-h-[115px] object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              priority
            />
          </a>

        {/* Center Menu - Desktop Only */}
        <div className="hidden md:flex items-center justify-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <a href="/#home" className="text-white hover:text-[#B8965A] transition-colors duration-200">
              {t('nav.home')}
            </a>
            
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href="/#services"
                className="text-white hover:text-[#B8965A] transition-colors duration-200 flex items-center gap-1"
              >
                {t('nav.services')}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className="ml-0"
                >
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </a>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-56 bg-black/95 backdrop-blur-md text-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <a
                  href="/hair-transplant"
                  className="block px-4 py-3 hover:bg-[#9B7E3E] hover:text-white transition-colors duration-200 border-b border-gray-700"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {t('services.hairTransplant')}
                </a>
                <a
                  href="/cosmetic-surgery"
                  className="block px-4 py-3 hover:bg-[#9B7E3E] hover:text-white transition-colors duration-200 border-b border-gray-700"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {t('services.cosmeticSurgery')}
                </a>
                <a
                  href="/dental-aesthetics"
                  className="block px-4 py-3 hover:bg-[#9B7E3E] hover:text-white transition-colors duration-200"
                  onClick={() => setIsServicesOpen(false)}
                >
                  {t('services.dentalAesthetics')}
                </a>
              </div>
            </div>
            
            <a href="/why-turkey" className="text-white hover:text-[#B8965A] transition-colors duration-200">
              {t('nav.whyTurkey')}
            </a>
            <a href="/about" className="text-white hover:text-[#B8965A] transition-colors duration-200">
              {t('nav.about')}
            </a>
            <a href="/#contact" className="text-white hover:text-[#B8965A] transition-colors duration-200">
              {t('nav.contact')}
            </a>
          </div>

        {/* Right Side Buttons - Desktop Only */}
        <div className="hidden md:flex items-center gap-3">
            {/* Language Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
            >
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-1 text-white hover:text-[#B8965A] transition-colors duration-200 px-2 py-2 rounded-lg hover:bg-white/10"
                aria-label="Switch Language"
                disabled={isTranslating}
              >
                {(isLoading || isTranslating) ? (
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <span className="text-lg">{languageOptions.find(l => l.code === language)?.flag || '🌐'}</span>
                )}
                <span className="font-medium text-sm">{language.toUpperCase()}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md text-white rounded-lg shadow-xl overflow-hidden transition-all duration-200 max-h-80 overflow-y-auto ${
                  isLanguageOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {languageOptions.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-[#9B7E3E] transition-colors duration-200 border-b border-gray-700 last:border-b-0 flex items-center gap-3 ${
                      language === lang.code ? 'bg-[#9B7E3E]/50' : ''
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="text-sm">{lang.label}</span>
                    {language === lang.code && (
                      <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <a 
              href="/#contact"
              className="bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-3 py-2 rounded-lg shadow-md transition-all duration-300 font-semibold text-sm whitespace-nowrap"
            >
              {t('nav.consultation')}
            </a>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
    </nav>

    {/* Full-Screen Mobile Menu Overlay */}
    <div
      className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#1a1a1a] backdrop-blur-sm"></div>
      
      {/* Menu Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 py-20">
        
        {/* Navigation Links */}
        <nav className="flex flex-col items-center space-y-6 mb-12 w-full max-w-md">
          <Link 
            href="/#home" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xl font-medium hover:text-[#9B7E3E] transition-colors duration-300"
          >
            {t('nav.home')}
          </Link>
          
          {/* Services Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="text-white text-xl font-medium hover:text-[#9B7E3E] transition-colors duration-300 flex items-center justify-center gap-2 w-full"
            >
              {t('nav.services')}
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Services Submenu */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileServicesOpen ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-[#111111] rounded-lg py-2 px-4 space-y-3">
                <Link 
                  href="/hair-transplant" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className="block text-white text-base font-normal hover:text-[#9B7E3E] transition-colors duration-300 pl-6"
                >
                  {t('services.hairTransplant')}
                </Link>
                
                <Link 
                  href="/dental-aesthetics" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className="block text-white text-base font-normal hover:text-[#9B7E3E] transition-colors duration-300 pl-6"
                >
                  {t('services.dentalAesthetics')}
                </Link>
                
                <Link 
                  href="/cosmetic-surgery" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className="block text-white text-base font-normal hover:text-[#9B7E3E] transition-colors duration-300 pl-6"
                >
                  {t('services.cosmeticSurgery')}
                </Link>
              </div>
            </div>
          </div>
          
          <Link 
            href="/why-turkey" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xl font-medium hover:text-[#9B7E3E] transition-colors duration-300"
          >
            {t('nav.whyTurkey')}
          </Link>
          
          <Link 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xl font-medium hover:text-[#9B7E3E] transition-colors duration-300"
          >
            {t('nav.about')}
          </Link>
          
          <Link 
            href="/#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-xl font-medium hover:text-[#9B7E3E] transition-colors duration-300"
          >
            {t('nav.contact')}
          </Link>
        </nav>

        {/* Free Consultation Button */}
        <Link
          href="/#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="w-full max-w-md bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 font-bold text-lg mb-8 text-center"
        >
          {t('nav.consultation')}
        </Link>

        {/* Language Switcher - All Languages */}
        <div className="w-full max-w-md">
          <p className="text-center text-sm text-white/70 mb-3 uppercase tracking-wider">
            Select Language
          </p>
          <div className="grid grid-cols-3 gap-3">
            {languageOptions.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  language === lang.code 
                    ? 'bg-[#9B7E3E] border-2 border-[#9B7E3E] text-white' 
                    : 'border-2 border-[#B8965A] text-white hover:bg-[#9B7E3E] hover:border-[#9B7E3E]'
                }`}
              >
                <span>{lang.flag}</span>
                <span className="text-xs">{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

