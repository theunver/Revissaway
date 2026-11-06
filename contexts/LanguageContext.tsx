"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

// Supported languages: English (default) and Turkish only.
export type Language = 'en' | 'tr';
const SUPPORTED: readonly Language[] = ['en', 'tr'];
const STORAGE_KEY = 'language';

export const languageOptions = [
  { code: 'en', label: 'English', short: 'EN', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', short: 'TR', flag: '🇹🇷' },
] as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
  isTranslating: boolean;
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
    'services.cosmeticSurgery': 'Esthetic Surgery Applications',
    'services.dentalAesthetics': 'Dental Aesthetics',
    
    // Footer
    'footer.title': 'Your Bridge to Wellness',
    'footer.description': 'Discover trusted access to world-class cosmetic, hair transplant, and dental aesthetic clinics in Turkey — with RevissaWay connecting Australia, New Zealand, and Turkey through certified medical partnerships.',
    'footer.consultation': 'Book Your Free Consultation',
    'footer.address': 'ADDRESS',
    'footer.phone': 'PHONE',
    'footer.email': 'EMAIL',
    'footer.copyright': '© {year} RevissaWay | All rights reserved.',
    
    // Home Page
    'home.hero.title': 'Your Bridge to Turkey\'s Most Trusted Hair & Aesthetic Experts',
    'home.hero.subtitle': 'RevissaWay connects patients from Australia and New Zealand with accredited clinics in Turkey — offering world-class quality, expert surgeons, and transparent coordination.',
    'home.hero.cta': 'Book Free Consultation',
    'home.whyTurkey.title': 'Why Turkey?',
    'home.whyTurkey.description': 'RevissaWay is a trusted health tourism brand that works in collaboration with internationally accredited and licensed medical and aesthetic clinics across Turkey. RevissaWay does not provide medical treatment directly; it acts solely as a professional intermediary, ensuring that patients are connected only with certified hospitals, surgical centers, and clinics specialized in dental and aesthetic care. Through these partnerships, patients gain access to qualified physicians, experienced surgeons, and multidisciplinary healthcare teams. This network combines world-class clinical expertise, evidence-based medical practices, advanced technology, and genuine Turkish hospitality — providing patients with a safe, transparent, and professionally coordinated treatment journey from their initial consultation to full recovery.',
    'home.services.title': 'Our Services',
    'home.services.hairTransplant.title': 'Hair Transplant',
    'home.services.hairTransplant.description': 'Advanced FUE, DHI, and Sapphire techniques with natural-looking results.',
    'home.services.cosmeticSurgery.title': 'Cosmetic Surgery',
    'home.services.cosmeticSurgery.description': 'Expert cosmetic procedures including breast augmentation, liposuction, and facial surgeries.',
    'home.services.dentalAesthetics.title': 'Dental Aesthetics',
    'home.services.dentalAesthetics.description': 'Hollywood smile, dental implants, and comprehensive dental aesthetic treatments.',
    'home.packageServices.title': 'What\'s Included in Your Package',
    'home.packageServices.transfer.title': 'Transfer Service',
    'home.packageServices.transfer.description': 'Airport pickup and drop-off',
    'home.packageServices.hotel.title': 'Hotel Accommodation',
    'home.packageServices.hotel.description': 'Comfortable 4-5 star hotel stay',
    'home.packageServices.vip.title': 'VIP Support',
    'home.packageServices.vip.description': 'Dedicated coordinator throughout your stay',
    'home.packageServices.followup.title': '1-Year Follow-Up',
    'home.packageServices.followup.description': 'Post-treatment care and monitoring',
    'home.process.title': 'Our Process',
    'home.process.step1.title': 'Free Initial Consultation',
    'home.process.step1.description': 'Send your details and receive an initial assessment.',
    'home.process.step2.title': 'Doctor Evaluation',
    'home.process.step2.description': 'Expert medical review and personalized treatment plan.',
    'home.process.step3.title': 'Treatment Planning',
    'home.process.step3.description': 'Detailed scheduling and preparation guidance.',
    'home.process.step4.title': 'Medical Procedure',
    'home.process.step4.description': 'Professional treatment by licensed specialists.',
    'home.process.step5.title': 'Follow-Up Care',
    'home.process.step5.description': 'Ongoing support and monitoring for optimal results.',
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
    'home.contact.whatsapp': 'Chat on WhatsApp',
    'home.contact.privacy': 'We respect your privacy. Your details are used to respond to your enquiry and are handled as described in our Privacy Policy.',
    
    // About Page
    'about.title': 'About RevissaWay',
    'about.expertise.title': 'Expertise and Partnerships',
    'about.expertise.description': 'RevissaWay collaborates with multiple accredited and licensed medical partners across Turkey — including Estego Turkey. We are not tied to any single institution; instead, we operate through a network of verified clinics that comply with national and international healthcare standards.',
    'about.expertise.multiplePartners': 'Multiple Partners',
    'about.expertise.accreditedClinics': 'Accredited Clinics',
    'about.expertise.transparentCoordination': 'Transparent Coordination',
    'about.whyChoose.title': 'Why Choose RevissaWay',
    
    // Disclaimer
    'disclaimer.text': 'RevissaWay provides organization and consultation services only. All medical procedures are the responsibility of accredited partner hospitals and licensed medical professionals in Turkey. Results may vary from person to person. Information on this website is for general informational purposes only and does not constitute medical advice.',
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
    'footer.description': 'Türkiye\'deki dünya standartlarında kozmetik, saç ekimi ve diş estetiği kliniklerine güvenilir erişim keşfedin — RevissaWay, Avustralya, Yeni Zelanda ve Türkiye\'yi sertifikalı tıbbi ortaklıklar aracılığıyla birleştiriyor.',
    'footer.consultation': 'Ücretsiz Görüşme Rezervasyonu',
    'footer.address': 'ADRES',
    'footer.phone': 'TELEFON',
    'footer.email': 'E-POSTA',
    'footer.copyright': '© {year} RevissaWay | Tüm hakları saklıdır.',
    
    // Home Page
    'home.hero.title': 'Türkiye\'nin En Güvenilir Saç ve Estetik Uzmanlarına Köprünüz',
    'home.hero.subtitle': 'RevissaWay, Avustralya ve Yeni Zelanda\'dan Türkiye\'deki akredite kliniklerle hastaları birleştiriyor — dünya standartlarında kalite, uzman cerrahlar ve şeffaf koordinasyon sunuyor.',
    'home.hero.cta': 'Ücretsiz Görüşme Ayırt',
    'home.whyTurkey.title': 'Neden Türkiye?',
    'home.whyTurkey.description': 'RevissaWay, Türkiye genelinde uluslararası akredite ve lisanslı tıbbi ve estetik kliniklerle işbirliği içinde çalışan güvenilir bir sağlık turizmi markasıdır.',
    'home.services.title': 'Hizmetlerimiz',
    'home.services.hairTransplant.title': 'Saç Ekimi',
    'home.services.hairTransplant.description': 'Gelişmiş FUE, DHI ve Sapphire teknikleri ile doğal görünümlü sonuçlar.',
    'home.services.cosmeticSurgery.title': 'Estetik Cerrahi',
    'home.services.cosmeticSurgery.description': 'Meme büyütme, liposuction ve yüz cerrahisi dahil uzman estetik prosedürler.',
    'home.services.dentalAesthetics.title': 'Diş Estetiği',
    'home.services.dentalAesthetics.description': 'Hollywood gülüşü, diş implantları ve kapsamlı diş estetik tedavileri.',
    'home.packageServices.title': 'Paketinizde Neler Dahil',
    'home.packageServices.transfer.title': 'Transfer Hizmeti',
    'home.packageServices.transfer.description': 'Havaalanı karşılama ve uğurlama',
    'home.packageServices.hotel.title': 'Otel Konaklama',
    'home.packageServices.hotel.description': 'Rahat 4-5 yıldızlı otel konaklaması',
    'home.packageServices.vip.title': 'VIP Destek',
    'home.packageServices.vip.description': 'Kalışınız boyunca özel koordinatör',
    'home.packageServices.followup.title': '1 Yıl Takip',
    'home.packageServices.followup.description': 'Tedavi sonrası bakım ve izleme',
    'home.process.title': 'Sürecimiz',
    'home.process.step1.title': 'Ücretsiz İlk Görüşme',
    'home.process.step1.description': 'Detaylarınızı gönderin ve ilk değerlendirmeyi alın.',
    'home.process.step2.title': 'Doktor Değerlendirmesi',
    'home.process.step2.description': 'Uzman tıbbi inceleme ve kişiselleştirilmiş tedavi planı.',
    'home.process.step3.title': 'Tedavi Planlaması',
    'home.process.step3.description': 'Detaylı programlama ve hazırlık rehberi.',
    'home.process.step4.title': 'Tıbbi Prosedür',
    'home.process.step4.description': 'Lisanslı uzmanlar tarafından profesyonel tedavi.',
    'home.process.step5.title': 'Takip Bakımı',
    'home.process.step5.description': 'Optimal sonuçlar için sürekli destek ve izleme.',
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
    'home.contact.whatsapp': 'WhatsApp ile Sohbet',
    'home.contact.privacy': 'Gizliliğinize saygı duyuyoruz. Bilgileriniz talebinize yanıt vermek için kullanılır ve Gizlilik Politikamızda açıklandığı şekilde işlenir.',
    
    // About Page
    'about.title': 'RevissaWay Hakkında',
    'about.expertise.title': 'Uzmanlık ve Ortaklıklar',
    'about.expertise.description': 'RevissaWay, Türkiye genelinde Estego Turkey dahil olmak üzere birçok akredite ve lisanslı tıbbi ortakla işbirliği yapmaktadır. Tek bir kuruma bağlı değiliz; bunun yerine, ulusal ve uluslararası sağlık standartlarına uygun doğrulanmış kliniklerden oluşan bir ağ aracılığıyla çalışıyoruz.',
    'about.expertise.multiplePartners': 'Çoklu Ortaklar',
    'about.expertise.accreditedClinics': 'Akredite Klinikler',
    'about.expertise.transparentCoordination': 'Şeffaf Koordinasyon',
    'about.whyChoose.title': 'Neden RevissaWay\'i Seçmelisiniz',
    
    // Disclaimer
    'disclaimer.text': 'RevissaWay yalnızca organizasyon ve danışmanlık hizmetleri sunmaktadır. Tüm tıbbi prosedürler, Türkiye\'deki akredite ortak hastaneler ve lisanslı tıp uzmanlarının sorumluluğundadır. Sonuçlar kişiden kişiye değişebilir. Bu web sitesindeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Restore the visitor's choice after mount. Any previously stored, now unsupported
  // language (e.g. 'fr', 'zh') falls back to English.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // storage unavailable
    }
    if (saved && (SUPPORTED as readonly string[]).includes(saved)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguageState(saved as Language);
    } else if (saved) {
      try {
        localStorage.setItem(STORAGE_KEY, 'en');
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Static dictionaries only: switching re-renders instantly, no page reload needed.
  const setLanguage = useCallback((lang: Language) => {
    const next: Language = (SUPPORTED as readonly string[]).includes(lang) ? lang : 'en';
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    setLanguageState(next);
  }, []);

  const t = (key: string): string => {
    const english = translations.en as Record<string, string>;
    const fallback = english[key] || key;
    if (language === 'tr') {
      return (translations.tr as Record<string, string>)[key] || fallback;
    }
    return fallback;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading: false, isTranslating: false }}>
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

/** Page-level bilingual content: pass { en, tr } and receive the active language's object. */
export function useLocalized<T>(content: { en: T; tr: T }): T {
  const { language } = useLanguage();
  return language === 'tr' ? content.tr : content.en;
}
