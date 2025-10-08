"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md h-16">
      <div className="container mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo - Left */}
          <a href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="EstheWay Logo" 
              width={150}
              height={75}
              style={{ height: '150px', marginTop: '20px' }}
              className="w-auto object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
              priority
            />
          </a>
          
          {/* Center Menu - Desktop Only */}
          <div className="hidden md:flex items-center space-x-6">
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
          
          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
              className="flex items-center gap-2 text-white hover:text-[#B8965A] transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10"
              aria-label="Switch Language"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span className="font-medium text-sm">{language.toUpperCase()}</span>
            </button>

            <a 
              href="/#contact"
              className="bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 font-semibold text-sm md:text-base"
            >
              {t('nav.consultation')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

