"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.whyTurkey': 'Why Turkey?',
    'nav.consultation': 'Free Consultation',
    
    // Services
    'services.hairTransplant': 'Hair Transplant',
    'services.cosmeticSurgery': 'Cosmetic Surgery',
    'services.dentalAesthetics': 'Dental Aesthetics',
    
    // Footer
    'footer.title': 'Your Bridge to Wellness',
    'footer.description': 'Discover trusted access to world-class cosmetic, hair transplant, and dental aesthetic clinics in Turkey — with EstheWay connecting Australia, New Zealand, and Turkey through certified medical partnerships.',
    'footer.consultation': 'Book Your Free Consultation',
    'footer.address': 'ADDRESS',
    'footer.phone': 'PHONE',
    'footer.email': 'EMAIL',
    'footer.copyright': '© 2025 EstheWay | All rights reserved.',
    
    // Home Page
    'home.hero.title': 'Start Your Cosmetic Medical Journey Now',
    'home.hero.subtitle': 'Trusted access from Australia & New Zealand to Turkey\'s leading clinics for hair transplant, cosmetic surgery, and dental aesthetics.',
    'home.hero.cta': 'Get Free Consultation on WhatsApp',
    'home.whyTurkey.title': 'Why Turkey?',
    'home.contact.title': 'Book Your Free Consultation',
    'home.contact.subtitle': 'Fill out the form below and we\'ll get back to you within 24 hours.',
    'home.contact.firstName': 'First Name',
    'home.contact.lastName': 'Last Name',
    'home.contact.email': 'Email',
    'home.contact.phone': 'Phone',
    'home.contact.preferredDate': 'Preferred Date',
    'home.contact.service': 'Service Interested In',
    'home.contact.message': 'Message',
    'home.contact.submit': 'Book Consultation',
    'home.contact.submitting': 'Sending...',
    'home.contact.success': '✅ Thank you, your consultation request has been received.',
    'home.contact.error': 'Sorry, an error occurred. Please try again.',
    'home.contact.whatsapp': 'Contact via WhatsApp',
    'home.contact.privacy': 'We respect your privacy. Your information will not be shared with third parties.',
    
    // About Page
    'about.title': 'About EstheWay',
    'about.expertise.title': 'Expertise and Partnerships',
    'about.expertise.description': 'EstheWay collaborates with multiple accredited and licensed medical partners across Turkey — including Estego Turkey. We are not tied to any single institution; instead, we operate through a network of verified clinics that comply with national and international healthcare standards.',
    'about.expertise.multiplePartners': 'Multiple Partners',
    'about.expertise.accreditedClinics': 'Accredited Clinics',
    'about.expertise.transparentCoordination': 'Transparent Coordination',
    'about.whyChoose.title': 'Why Choose EstheWay',
    
    // Disclaimer
    'disclaimer.text': 'EstheWay provides organization and consultation services only. All medical procedures are the responsibility of accredited partner hospitals and licensed medical professionals in Turkey. Results may vary from person to person. Information on this website is for general informational purposes only and does not constitute medical advice.',
  },
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.whyTurkey': 'Neden Türkiye?',
    'nav.consultation': 'Ücretsiz Görüşme',
    
    // Services
    'services.hairTransplant': 'Saç Ekimi',
    'services.cosmeticSurgery': 'Estetik Cerrahi',
    'services.dentalAesthetics': 'Diş Estetiği',
    
    // Footer
    'footer.title': 'Sağlığınıza Köprü',
    'footer.description': 'Türkiye\'deki dünya standartlarında kozmetik, saç ekimi ve diş estetiği kliniklerine güvenilir erişim keşfedin — EstheWay, Avustralya, Yeni Zelanda ve Türkiye\'yi sertifikalı tıbbi ortaklıklar aracılığıyla birleştiriyor.',
    'footer.consultation': 'Ücretsiz Görüşme Rezervasyonu',
    'footer.address': 'ADRES',
    'footer.phone': 'TELEFON',
    'footer.email': 'E-POSTA',
    'footer.copyright': '© 2025 EstheWay | Tüm hakları saklıdır.',
    
    // Home Page
    'home.hero.title': 'Kozmetik Tıbbi Yolculuğunuza Şimdi Başlayın',
    'home.hero.subtitle': 'Avustralya ve Yeni Zelanda\'dan Türkiye\'nin önde gelen saç ekimi, estetik cerrahi ve diş estetiği kliniklerine güvenilir erişim.',
    'home.hero.cta': 'WhatsApp\'tan Ücretsiz Danışmanlık Alın',
    'home.whyTurkey.title': 'Neden Türkiye?',
    'home.contact.title': 'Ücretsiz Görüşmenizi Ayırtın',
    'home.contact.subtitle': 'Aşağıdaki formu doldurun, 24 saat içinde size geri dönelim.',
    'home.contact.firstName': 'Ad',
    'home.contact.lastName': 'Soyad',
    'home.contact.email': 'E-posta',
    'home.contact.phone': 'Telefon',
    'home.contact.preferredDate': 'Tercih Edilen Tarih',
    'home.contact.service': 'İlgilendiğiniz Hizmet',
    'home.contact.message': 'Mesaj',
    'home.contact.submit': 'Görüşme Ayırt',
    'home.contact.submitting': 'Gönderiliyor...',
    'home.contact.success': '✅ Teşekkürler, görüşme talebiniz alındı.',
    'home.contact.error': 'Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.',
    'home.contact.whatsapp': 'WhatsApp ile İletişim',
    'home.contact.privacy': 'Gizliliğinize saygı duyuyoruz. Bilgileriniz üçüncü taraflarla paylaşılmayacaktır.',
    
    // About Page
    'about.title': 'EstheWay Hakkında',
    'about.expertise.title': 'Uzmanlık ve Ortaklıklar',
    'about.expertise.description': 'EstheWay, Türkiye genelinde Estego Turkey dahil olmak üzere birçok akredite ve lisanslı tıbbi ortakla işbirliği yapmaktadır. Tek bir kuruma bağlı değiliz; bunun yerine, ulusal ve uluslararası sağlık standartlarına uygun doğrulanmış kliniklerden oluşan bir ağ aracılığıyla çalışıyoruz.',
    'about.expertise.multiplePartners': 'Çoklu Ortaklar',
    'about.expertise.accreditedClinics': 'Akredite Klinikler',
    'about.expertise.transparentCoordination': 'Şeffaf Koordinasyon',
    'about.whyChoose.title': 'Neden EstheWay\'i Seçmelisiniz',
    
    // Disclaimer
    'disclaimer.text': 'EstheWay yalnızca organizasyon ve danışmanlık hizmetleri sunmaktadır. Tüm tıbbi prosedürler, Türkiye\'deki akredite ortak hastaneler ve lisanslı tıp uzmanlarının sorumluluğundadır. Sonuçlar kişiden kişiye değişebilir. Bu web sitesindeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
