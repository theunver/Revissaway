"use client";

import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-b from-white to-[#f5e9cc] px-4 py-8 md:px-8 md:py-12 text-[#3a3a3a] font-sans pb-16">
      {/* Title & Text */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-semibold text-[#a58a58] mb-4">{t('footer.title')}</h2>
        <p className="text-base max-w-2xl mx-auto mb-6">
          {t('footer.description')}
        </p>
        <a
          href="/#contact"
          className="inline-block bg-[#a58a58] text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          {t('footer.consultation')}
        </a>
      </div>

      {/* Social Media Links - Mobile Optimized */}
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 mb-6">
        <div className="flex gap-4 mt-2">
          <a href="https://api.whatsapp.com/send?phone=61435955386" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80">
            <FaWhatsapp className="text-[#9B7E3E] text-xl" />
            <span className="text-sm text-[#9B7E3E]">WhatsApp</span>
          </a>
          <a href="https://instagram.com/estheway" target="_blank" className="flex items-center gap-2 hover:opacity-80">
            <FaInstagram className="text-[#9B7E3E] text-xl" />
            <span className="text-sm text-[#9B7E3E]">Instagram</span>
          </a>
          <a href="https://tiktok.com/@estheway" target="_blank" className="flex items-center gap-2 hover:opacity-80">
            <FaTiktok className="text-[#9B7E3E] text-xl" />
            <span className="text-sm text-[#9B7E3E]">Tiktok</span>
          </a>
          <a href="https://facebook.com/estheway" target="_blank" className="flex items-center gap-2 hover:opacity-80">
            <FaFacebookF className="text-[#9B7E3E] text-xl" />
            <span className="text-sm text-[#9B7E3E]">Facebook</span>
          </a>
        </div>
      </div>

      {/* Contact Info - Mobile Optimized */}
      <div id="contact-info" className="max-w-6xl mx-auto mt-6 flex flex-col items-center gap-1 text-sm text-[#9B7E3E] text-center">
        <div className="mt-4">
          <h3 className="text-[#9B7E3E] font-semibold">{t('footer.address')}</h3>
          <p>Office 3877, Ground floor<br />470 St Kilda Road<br />Melbourne VIC 3004</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-[#9B7E3E] font-semibold">{t('footer.phone')}</h3>
          <p>International: +61 435 955 386</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-[#9B7E3E] font-semibold">{t('footer.email')}</h3>
          <p>info@revissaway.com.au</p>
        </div>
      </div>

      {/* Logo + Copyright */}
      <div className="text-center mt-10">
        <Image 
          src="/logo.png" 
          alt="RevissaWay" 
          width={120} 
          height={60} 
          className="mx-auto mb-3"
          loading="eager"
          style={{ opacity: 1 }}
        />
        <p className="text-xs text-gray-600 mt-4">{t('footer.copyright')}</p>
        
        {/* Legal Links */}
        <div className="mt-3 flex gap-4 justify-center">
          <a 
            href="/privacy-policy" 
            className="text-xs text-[#9B7E3E] hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-xs text-gray-400">|</span>
          <a 
            href="/terms" 
            className="text-xs text-[#9B7E3E] hover:underline transition-colors"
          >
            Terms of Use
          </a>
          <span className="text-xs text-gray-400">|</span>
          <a 
            href="/about" 
            className="text-xs text-[#9B7E3E] hover:underline transition-colors"
          >
            About RevissaWay
          </a>
        </div>
        
        <p className="text-xs text-gray-500 mt-6">
          RevissaWay is not a medical provider. It connects patients with accredited clinics in Türkiye. 
          All medical procedures are performed by licensed partner clinics.
        </p>
      </div>
    </footer>
  );
}
