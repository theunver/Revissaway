"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage, languageOptions } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Prevent body scroll when mobile menu is open; allow closing with Escape
  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'unset';
      delete document.body.dataset.menuOpen;
      return;
    }
    document.body.style.overflow = 'hidden';
    // Lets floating elements (e.g. the WhatsApp button) hide while the menu is open.
    document.body.dataset.menuOpen = 'true';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      delete document.body.dataset.menuOpen;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/85 lg:bg-black/70 lg:backdrop-blur-md h-[55px]">
        <div className="flex items-center justify-between h-full px-4 md:px-8 max-w-[1920px] mx-auto">
          {/* Logo - Centered on mobile, left on desktop */}
          <a href="/" className="flex items-center translate-y-2 absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
            <Image 
              src="/logo.png" 
              alt="RevissaWay Logo" 
              width={350}
              height={350}
              className="w-auto max-h-[85px] md:max-h-[95px] lg:max-h-[115px] object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              priority
              loading="eager"
              style={{ opacity: 1 }}
            />
          </a>

        {/* Center Menu - Desktop Only */}
        <div className="hidden lg:flex items-center justify-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <a href="/#home" className="text-white hover:text-[#B8965A] transition-colors duration-200">
              {t('nav.home')}
            </a>
            
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {/* Link and toggle are siblings (a <button> inside an <a> is invalid HTML);
                  colour/hover live on the wrapper so the look is unchanged. */}
              <div className="text-white hover:text-[#B8965A] transition-colors duration-200 flex items-center gap-1">
                <a href="/#services">
                  {t('nav.services')}
                </a>
                <button
                  type="button"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="ml-0"
                  aria-label="Toggle services menu"
                  aria-expanded={isServicesOpen}
                  aria-controls="desktop-services-menu"
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
              </div>

              {/* Dropdown Menu */}
              <div
                id="desktop-services-menu"
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
            <a 
              href="/#contact-info" 
              onClick={(e) => {
                e.preventDefault();
                // Check if we're on the homepage
                if (window.location.pathname === '/') {
                  // Scroll to contact info in footer
                  document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Navigate to homepage contact info
                  window.location.href = '/#contact-info';
                }
              }}
              className="text-white hover:text-[#B8965A] transition-colors duration-200"
            >
              {t('nav.contact')}
            </a>
          </div>

        {/* Right Side Buttons - Desktop Only */}
        <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle (English default, Turkish) */}
            <div role="group" aria-label="Language" className="flex items-center rounded-lg border border-[#9B7E3E]/70 overflow-hidden text-sm font-semibold">
              {languageOptions.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  lang={lang.code}
                  title={lang.label}
                  aria-pressed={language === lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1.5 transition-colors duration-200 ${
                    language === lang.code ? 'bg-[#9B7E3E] text-white' : 'text-white hover:text-[#B8965A]'
                  }`}
                >
                  {lang.short}
                </button>
              ))}
            </div>

            <a 
              href="/#contact"
              onClick={() => {
                // Track GA4 Event - Consultation Click (Navbar)
                if (typeof window !== 'undefined' && window.trackGA4Event) {
                  window.trackGA4Event('consultation_click', {
                    event_category: 'engagement',
                    event_label: 'Book Free Consultation'
                  });
                  console.log('GA4 event fired: consultation_click');
                }
              }}
              className="bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-3 py-2 rounded-lg shadow-md transition-all duration-300 font-semibold text-sm whitespace-nowrap"
            >
              {t('nav.consultation')}
            </a>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
    </nav>

    {/* Full-Screen Mobile Menu Overlay */}
    <div
      id="mobile-menu"
      className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#1a1a1a]"></div>

      {/* Menu Content - starts below the fixed navbar/logo and scrolls on short screens */}
      <div className="relative h-full overflow-y-auto overscroll-contain flex flex-col items-center px-6 pt-[96px] pb-8">
        
        {/* Navigation Links */}
        <nav className="flex flex-col items-center w-full max-w-md mb-5 divide-y divide-white/10">
          <a 
            href="/#home" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-2.5 text-center text-white text-lg font-medium hover:text-[#9B7E3E] transition-colors duration-200"
          >
            {t('nav.home')}
          </a>
          
          {/* Services Dropdown */}
          <div className="w-full">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="py-2.5 text-white text-lg font-medium hover:text-[#9B7E3E] transition-colors duration-200 flex items-center justify-center gap-2 w-full"
              aria-expanded={isMobileServicesOpen}
              aria-controls="mobile-services-submenu"
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
              id="mobile-services-submenu"
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileServicesOpen ? 'max-h-48 opacity-100 mb-2 visible' : 'max-h-0 opacity-0 invisible'
              }`}
            >
              <div className="bg-[#111111] rounded-lg py-1 px-4">
                <a 
                  href="/hair-transplant" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className="block py-2 text-center text-white/90 text-base font-normal hover:text-[#9B7E3E] transition-colors duration-200"
                >
                  {t('services.hairTransplant')}
                </a>
                
                <a 
                  href="/dental-aesthetics" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className="block py-2 text-center text-white/90 text-base font-normal hover:text-[#9B7E3E] transition-colors duration-200"
                >
                  {t('services.dentalAesthetics')}
                </a>
                
                <a 
                  href="/cosmetic-surgery" 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsMobileServicesOpen(false);
                  }}
                  className="block py-2 text-center text-white/90 text-base font-normal hover:text-[#9B7E3E] transition-colors duration-200"
                >
                  {t('services.cosmeticSurgery')}
                </a>
              </div>
            </div>
          </div>
          
          <a 
            href="/why-turkey" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-2.5 text-center text-white text-lg font-medium hover:text-[#9B7E3E] transition-colors duration-200"
          >
            {t('nav.whyTurkey')}
          </a>
          
          <a 
            href="/about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-2.5 text-center text-white text-lg font-medium hover:text-[#9B7E3E] transition-colors duration-200"
          >
            {t('nav.about')}
          </a>
          
          <a 
            href="/#contact-info" 
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              // Check if we're on the homepage
              if (window.location.pathname === '/') {
                // Scroll to contact info in footer
                document.getElementById('contact-info')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                // Navigate to homepage contact info
                window.location.href = '/#contact-info';
              }
            }}
            className="block w-full py-2.5 text-center text-white text-lg font-medium hover:text-[#9B7E3E] transition-colors duration-200"
          >
            {t('nav.contact')}
          </a>
        </nav>

        {/* Free Consultation Button */}
        <a
          href="/#contact"
          onClick={() => {
            setIsMobileMenuOpen(false);
            // Track GA4 Event - Consultation Click (Mobile Menu)
            if (typeof window !== 'undefined' && window.trackGA4Event) {
              window.trackGA4Event('consultation_click', {
                event_category: 'engagement',
                event_label: 'Book Free Consultation'
              });
              console.log('GA4 event fired: consultation_click');
            }
          }}
          className="w-full max-w-md bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-3 rounded-full shadow-lg transition-colors duration-200 font-bold text-base mb-5 text-center"
        >
          {t('nav.consultation')}
        </a>

        {/* Language toggle: English (default) / Turkish */}
        <div role="group" aria-label="Language" className="w-full max-w-md grid grid-cols-2 gap-3">
          {languageOptions.map((lang) => (
            <button
              key={lang.code}
              type="button"
              lang={lang.code}
              aria-pressed={language === lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 border-2 ${
                language === lang.code
                  ? 'bg-[#9B7E3E] border-[#9B7E3E] text-white'
                  : 'border-[#B8965A] text-white hover:bg-[#9B7E3E]/30'
              }`}
            >
              <span aria-hidden="true">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

