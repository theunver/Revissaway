"use client";

import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-b from-white to-[#f5e9cc] px-6 py-14 text-[#3a3a3a] font-sans">
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

      {/* Content Row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left: Socials */}
        <div className="flex flex-col gap-3 text-base">
          <a href="https://wa.me/61483898360" target="_blank" className="flex items-center gap-3 hover:opacity-80">
            <FaWhatsapp className="text-[#a58a58] text-xl" /> WhatsApp
          </a>
          <a href="https://instagram.com/estheway" target="_blank" className="flex items-center gap-3 hover:opacity-80">
            <FaInstagram className="text-[#a58a58] text-xl" /> Instagram
          </a>
          <a href="https://tiktok.com/@estheway" target="_blank" className="flex items-center gap-3 hover:opacity-80">
            <FaTiktok className="text-[#a58a58] text-xl" /> Tiktok
          </a>
          <a href="https://facebook.com/estheway" target="_blank" className="flex items-center gap-3 hover:opacity-80">
            <FaFacebookF className="text-[#a58a58] text-xl" /> Facebook
          </a>
        </div>

        {/* Right: Info */}
        <div className="text-sm text-right space-y-3">
          <h3 className="text-[#a58a58] font-semibold">{t('footer.address')}</h3>
          <p>58 Clarke St<br />Southbank VIC 3006</p>

          <h3 className="text-[#a58a58] font-semibold mt-4">{t('footer.phone')}</h3>
          <p>International: +61 483 898 360</p>

          <h3 className="text-[#a58a58] font-semibold mt-4">{t('footer.email')}</h3>
          <p>contact@mehmetaliunvers.com</p>
        </div>
      </div>

      {/* Logo + Copyright */}
      <div className="text-center mt-10">
        <Image src="/logo.png" alt="EstheWay" width={120} height={60} className="mx-auto mb-3" />
        <p className="text-xs text-gray-600 mt-4">{t('footer.copyright')}</p>
        
        {/* Legal Links */}
        <div className="mt-3 flex gap-4 justify-center">
          <a 
            href="/privacy-policy" 
            className="text-xs text-[#a58a58] hover:underline transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-xs text-gray-400">|</span>
          <a 
            href="/terms" 
            className="text-xs text-[#a58a58] hover:underline transition-colors"
          >
            Terms of Use
          </a>
        </div>
        
        <p className="text-xs text-gray-500 mt-3">
          EstheWay is not a medical provider. It connects patients with accredited clinics in Türkiye. 
          All medical procedures are performed by licensed partner clinics.
        </p>
      </div>
    </footer>
  );
}
