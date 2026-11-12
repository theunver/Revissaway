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
    'nav.consultation': 'Free Enquiry',
    
    // Services
    'services.hairTransplant': 'Hair Transplant',
    'services.cosmeticSurgery': 'Cosmetic Surgery',
    'services.dentalAesthetics': 'Dental Implants & Veneers',
    
    // Footer
    'footer.title': 'Your Bridge to Wellness',
    'footer.description': 'Coordinating hair, cosmetic and dental treatment in Turkey for patients from Australia and New Zealand — with clear information at every step.',
    'footer.consultation': 'Send a Free Enquiry',
    'footer.address': 'ADDRESS',
    'footer.phone': 'PHONE',
    'footer.email': 'EMAIL',
    'footer.copyright': '© {year} RevissaWay | All rights reserved.',
    
    // Home Page
    'home.hero.title': 'Your Bridge to Hair, Dental and Cosmetic Treatment in Turkey',
    'home.hero.subtitle': 'RevissaWay helps patients from Australia and New Zealand explore treatment with independent clinics in Turkey — with clear information and coordination from your first enquiry.',
    'home.hero.cta': 'Make a Free Enquiry',
    'home.whyTurkey.title': 'Why Turkey?',
    'home.whyTurkey.description': 'RevissaWay is an Australian-based coordination service. We don\'t provide medical treatment; we help you connect with independent hospitals and clinics in Turkey, pass on their assessment and quotation, and help with non-medical arrangements such as accommodation and airport transfers. Our service is free for patients — you decide whether to proceed, you pay the clinic directly, and the clinic is responsible for your medical care.',
    'home.services.title': 'Our Services',
    'home.services.hairTransplant.title': 'Hair Transplant',
    'home.services.hairTransplant.description': 'FUE, DHI and Sapphire techniques — your clinic will advise which suits you.',
    'home.services.cosmeticSurgery.title': 'Cosmetic Surgery',
    'home.services.cosmeticSurgery.description': 'Procedures including breast surgery, liposuction and facial surgery.',
    'home.services.dentalAesthetics.title': 'Dental Implants & Veneers',
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
    'home.contact.title': 'Make a Free Enquiry',
    'home.contact.subtitle': 'Fill out the form below and we\'ll get back to you as soon as we can.',
    'home.contact.firstName': 'First Name',
    'home.contact.lastName': 'Last Name',
    'home.contact.email': 'Email',
    'home.contact.phone': 'Phone',
    'home.contact.preferredDate': 'Preferred Date',
    'home.contact.service': 'Service Interested In',
    'home.contact.message': 'Message',
    'home.contact.submit': 'Send Enquiry',
    'home.contact.submitting': 'Sending...',
    'home.contact.success': '✅ Thank you, your enquiry has been received.',
    'home.contact.error': 'Sorry, an error occurred. Please try again.',
    'home.contact.errorPreview': 'Test submissions are disabled on this preview site, so your enquiry was not sent.',
    'home.contact.errorFallback': 'You can also contact us directly on',
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
    'disclaimer.text': 'RevissaWay provides coordination services only and does not provide medical advice or treatment. Medical procedures are the responsibility of the independent provider that performs them. Results vary from person to person. Information on this website is general information only and is not medical advice.',
  },
  tr: {
    // Navbar
    'nav.home': 'Ana Sayfa',
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.whyTurkey': 'Neden Türkiye?',
    'nav.consultation': 'Ücretsiz Bilgi Talebi',
    
    // Services
    'services.hairTransplant': 'Saç Ekimi',
    'services.cosmeticSurgery': 'Estetik Cerrahi',
    'services.dentalAesthetics': 'Diş İmplantı ve Lamina',
    
    // Footer
    'footer.title': 'Sağlığınıza Köprü',
    'footer.description': 'Avustralya ve Yeni Zelanda\'daki hastalar için Türkiye\'de saç, estetik ve diş tedavisi koordinasyonu — her adımda açık bilgiyle.',
    'footer.consultation': 'Ücretsiz Bilgi Talebi Gönderin',
    'footer.address': 'ADRES',
    'footer.phone': 'TELEFON',
    'footer.email': 'E-POSTA',
    'footer.copyright': '© {year} RevissaWay | Tüm hakları saklıdır.',
    
    // Home Page
    'home.hero.title': 'Türkiye\'de Saç, Diş ve Estetik Tedaviye Köprünüz',
    'home.hero.subtitle': 'RevissaWay, Avustralya ve Yeni Zelanda\'daki hastaların Türkiye\'deki bağımsız kliniklerde tedavi seçeneklerini değerlendirmesine yardımcı olur — ilk talebinizden itibaren açık bilgi ve koordinasyonla.',
    'home.hero.cta': 'Ücretsiz Bilgi Talebi',
    'home.whyTurkey.title': 'Neden Türkiye?',
    'home.whyTurkey.description': 'RevissaWay, Avustralya merkezli bir koordinasyon hizmetidir. Tıbbi tedavi sunmayız; Türkiye\'deki bağımsız hastane ve kliniklerle bağlantı kurmanıza yardımcı olur, değerlendirmelerini ve fiyat tekliflerini size iletir, konaklama ve havalimanı transferi gibi tıbbi olmayan düzenlemelerde destek oluruz. Hizmetimiz hastalar için ücretsizdir — devam edip etmeyeceğinize siz karar verirsiniz, ödemeyi doğrudan kliniğe yaparsınız ve tıbbi bakımınızdan klinik sorumludur.',
    'home.services.title': 'Hizmetlerimiz',
    'home.services.hairTransplant.title': 'Saç Ekimi',
    'home.services.hairTransplant.description': 'FUE, DHI ve Sapphire teknikleri — size hangisinin uygun olduğunu kliniğiniz söyler.',
    'home.services.cosmeticSurgery.title': 'Estetik Cerrahi',
    'home.services.cosmeticSurgery.description': 'Meme cerrahisi, liposuction ve yüz cerrahisi dahil işlemler.',
    'home.services.dentalAesthetics.title': 'Diş İmplantı ve Lamina',
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
    'home.contact.title': 'Ücretsiz Bilgi Talebi Gönderin',
    'home.contact.subtitle': 'Aşağıdaki formu doldurun, size en kısa sürede dönüş yapalım.',
    'home.contact.firstName': 'Ad',
    'home.contact.lastName': 'Soyad',
    'home.contact.email': 'E-posta',
    'home.contact.phone': 'Telefon',
    'home.contact.preferredDate': 'Tercih Edilen Tarih',
    'home.contact.service': 'İlgilendiğiniz Hizmet',
    'home.contact.message': 'Mesaj',
    'home.contact.submit': 'Talebi Gönder',
    'home.contact.submitting': 'Gönderiliyor...',
    'home.contact.success': '✅ Teşekkürler, talebiniz alındı.',
    'home.contact.error': 'Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin.',
    'home.contact.errorPreview': 'Bu önizleme sitesinde test gönderimleri devre dışıdır; talebiniz gönderilmedi.',
    'home.contact.errorFallback': 'Bize doğrudan şu kanallardan da ulaşabilirsiniz:',
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
    'disclaimer.text': 'RevissaWay yalnızca koordinasyon hizmeti sunar; tıbbi tavsiye veya tedavi vermez. Tıbbi işlemlerin sorumluluğu, işlemi gerçekleştiren bağımsız sağlayıcıya aittir. Sonuçlar kişiden kişiye değişir. Bu web sitesindeki bilgiler yalnızca genel bilgi niteliğindedir ve tıbbi tavsiye değildir.',
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
