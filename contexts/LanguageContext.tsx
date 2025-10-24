"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'tr' | 'zh' | 'ar' | 'vi' | 'yue' | 'pa' | 'hi' | 'it' | 'el' | 'tl' | 'th' | 'fr';

export const languageOptions = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'yue', label: '廣東話', flag: '🇭🇰' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'el', label: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'tl', label: 'Tagalog', flag: '🇵🇭' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
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
    'footer.copyright': '© 2025 RevissaWay | All rights reserved.',
    
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
    'footer.copyright': '© 2025 RevissaWay | Tüm hakları saklıdır.',
    
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
    'about.title': 'RevissaWay Hakkında',
    'about.expertise.title': 'Uzmanlık ve Ortaklıklar',
    'about.expertise.description': 'RevissaWay, Türkiye genelinde Estego Turkey dahil olmak üzere birçok akredite ve lisanslı tıbbi ortakla işbirliği yapmaktadır. Tek bir kuruma bağlı değiliz; bunun yerine, ulusal ve uluslararası sağlık standartlarına uygun doğrulanmış kliniklerden oluşan bir ağ aracılığıyla çalışıyoruz.',
    'about.expertise.multiplePartners': 'Çoklu Ortaklar',
    'about.expertise.accreditedClinics': 'Akredite Klinikler',
    'about.expertise.transparentCoordination': 'Şeffaf Koordinasyon',
    'about.whyChoose.title': 'Neden RevissaWay\'i Seçmelisiniz',
    
    // Disclaimer
    'disclaimer.text': 'RevissaWay yalnızca organizasyon ve danışmanlık hizmetleri sunmaktadır. Tüm tıbbi prosedürler, Türkiye\'deki akredite ortak hastaneler ve lisanslı tıp uzmanlarının sorumluluğundadır. Sonuçlar kişiden kişiye değişebilir. Bu web sitesindeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve tıbbi tavsiye niteliği taşımaz.',
  },
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.whyTurkey': 'Pourquoi la Turquie ?',
    'nav.consultation': 'Consultation gratuite',
    
    // Services
    'services.hairTransplant': 'Greffe de cheveux',
    'services.cosmeticSurgery': 'Chirurgie esthétique',
    'services.dentalAesthetics': 'Esthétique dentaire',
    
    // Footer
    'footer.title': 'Votre pont vers le bien-être',
    'footer.description': 'Découvrez un accès fiable aux cliniques de cosmétique, greffe de cheveux et esthétique dentaire de classe mondiale en Turquie — avec RevissaWay connectant l\'Australie, la Nouvelle-Zélande et la Turquie grâce à des partenariats médicaux certifiés.',
    'footer.consultation': 'Réservez votre consultation gratuite',
    'footer.address': 'ADRESSE',
    'footer.phone': 'TÉLÉPHONE',
    'footer.email': 'E-MAIL',
    'footer.copyright': '© 2025 RevissaWay | Tous droits réservés.',
    
    // Home Page
    'home.hero.title': 'Commencez votre parcours médical esthétique maintenant',
    'home.hero.subtitle': 'Accès fiable depuis l\'Australie et la Nouvelle-Zélande vers les meilleures cliniques turques pour la greffe de cheveux, la chirurgie esthétique et l\'esthétique dentaire.',
    'home.hero.cta': 'Obtenez une consultation gratuite sur WhatsApp',
    'home.whyTurkey.title': 'Pourquoi la Turquie ?',
    'home.contact.title': 'Réservez votre consultation gratuite',
    'home.contact.subtitle': 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.',
    'home.contact.firstName': 'Prénom',
    'home.contact.lastName': 'Nom de famille',
    'home.contact.email': 'E-mail',
    'home.contact.phone': 'Téléphone',
    'home.contact.preferredDate': 'Date préférée',
    'home.contact.service': 'Service qui vous intéresse',
    'home.contact.message': 'Message',
    'home.contact.submit': 'Réserver une consultation',
    'home.contact.submitting': 'Envoi en cours...',
    'home.contact.success': '✅ Merci, votre demande de consultation a été reçue.',
    'home.contact.error': 'Désolé, une erreur s\'est produite. Veuillez réessayer.',
    'home.contact.whatsapp': 'Contacter via WhatsApp',
    'home.contact.privacy': 'Nous respectons votre vie privée. Vos informations ne seront pas partagées avec des tiers.',
    
    // About Page
    'about.title': 'À propos de RevissaWay',
    'about.expertise.title': 'Expertise et partenariats',
    'about.expertise.description': 'RevissaWay collabore avec plusieurs partenaires médicaux accrédités et licenciés à travers la Turquie — y compris Estego Turkey. Nous ne sommes liés à aucune institution unique ; au lieu de cela, nous opérons à travers un réseau de cliniques vérifiées qui respectent les normes de soins de santé nationales et internationales.',
    'about.expertise.multiplePartners': 'Partenaires multiples',
    'about.expertise.accreditedClinics': 'Cliniques accréditées',
    'about.expertise.transparentCoordination': 'Coordination transparente',
    'about.whyChoose.title': 'Pourquoi choisir RevissaWay',
    
    // Disclaimer
    'disclaimer.text': 'RevissaWay fournit uniquement des services d\'organisation et de consultation. Toutes les procédures médicales sont de la responsabilité des hôpitaux partenaires accrédités et des professionnels médicaux licenciés en Turquie. Les résultats peuvent varier d\'une personne à l\'autre. Les informations sur ce site web sont uniquement à des fins d\'information générale et ne constituent pas des conseils médicaux.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    const validLanguages = ['en', 'tr', 'zh', 'ar', 'vi', 'yue', 'pa', 'hi', 'it', 'el', 'tl', 'th', 'fr'];
    if (savedLang && validLanguages.includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  // Translate all DOM content when language changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Cache for translated texts
    const translationCache: { [key: string]: string } = {};
    
    const translateElements = async (elements: Element[]) => {
      if (elements.length === 0) return;

      const toTranslate: { element: Element; text: string; originalText: string }[] = [];

      for (const el of elements) {
        const text = el.textContent?.trim() || '';
        if (!text || text.length < 2) continue;

        // Skip if already translated to this language
        if (el.hasAttribute(`data-translated-${language}`)) continue;

        // Get direct text content only (not nested elements)
        const directText = Array.from(el.childNodes)
          .filter(node => node.nodeType === Node.TEXT_NODE)
          .map(node => node.textContent?.trim())
          .filter(Boolean)
          .join(' ');

        if (directText && directText.length >= 2) {
          toTranslate.push({ 
            element: el, 
            text: directText,
            originalText: directText
          });
        }
      }

      if (toTranslate.length === 0) return;

      // Translate in batches of 30
      const batchSize = 30;
      for (let i = 0; i < toTranslate.length; i += batchSize) {
        const batch = toTranslate.slice(i, i + batchSize);
        const textsToTranslate = batch.map(item => {
          // Check cache first
          const cacheKey = `${language}:${item.text}`;
          if (translationCache[cacheKey]) {
            return null; // Already cached
          }
          return item.text;
        }).filter(Boolean) as string[];

        if (textsToTranslate.length === 0) {
          // All from cache
          batch.forEach(item => {
            const cacheKey = `${language}:${item.text}`;
            if (translationCache[cacheKey]) {
              // Replace text nodes only
              Array.from(item.element.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
                  node.textContent = translationCache[cacheKey];
                }
              });
              item.element.setAttribute(`data-translated-${language}`, 'true');
            }
          });
          continue;
        }

        try {
          const response = await fetch('/api/translate', {
            method: 'POST',
            headers: { 
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              text: textsToTranslate,
              targetLang: language,
              sourceLang: 'en',
            }),
          });

          if (!response.ok) {
            console.error(`Translation API error: ${response.status} ${response.statusText}`);
            // On error, mark items as translated with original text to avoid retries
            batch.forEach(item => {
              item.element.setAttribute(`data-translated-${language}`, 'true');
            });
            return;
          }

          const data = await response.json();
          
          if (!data || !data.translatedTexts) {
            console.error('Invalid translation response:', data);
            batch.forEach(item => {
              item.element.setAttribute(`data-translated-${language}`, 'true');
            });
            return;
          }

          const translations = data.translatedTexts;

          let translationIndex = 0;
          batch.forEach(item => {
            const cacheKey = `${language}:${item.text}`;
            let translated: string;

            if (translationCache[cacheKey]) {
              translated = translationCache[cacheKey];
            } else {
              translated = translations[translationIndex] || item.text;
              translationCache[cacheKey] = translated;
              translationIndex++;
            }

            // Replace only text nodes, preserve child elements
            Array.from(item.element.childNodes).forEach(node => {
              if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
                node.textContent = translated;
              }
            });

            item.element.setAttribute(`data-translated-${language}`, 'true');
          });
        } catch (error) {
          console.error('Batch translation error:', error);
          // Mark as translated to prevent infinite retries
          batch.forEach(item => {
            item.element.setAttribute(`data-translated-${language}`, 'true');
          });
        }

        // Delay between batches to avoid rate limiting
        if (i + batchSize < toTranslate.length) {
          await new Promise(resolve => setTimeout(resolve, 150));
        }
      }
    };

    const translatePage = async () => {
      // Reset for EN only (original language)
      if (language === 'en') {
        document.querySelectorAll('[data-translated-tr], [data-translated-zh], [data-translated-ar], [data-translated-vi], [data-translated-yue], [data-translated-pa], [data-translated-hi], [data-translated-it], [data-translated-el], [data-translated-tl], [data-translated-th], [data-translated-fr]').forEach(el => {
          // Remove all translation attributes
          ['tr', 'zh', 'ar', 'vi', 'yue', 'pa', 'hi', 'it', 'el', 'tl', 'th', 'fr'].forEach(lang => {
            el.removeAttribute(`data-translated-${lang}`);
          });
        });
        return;
      }

      setIsTranslating(true);

      try {
        // Select all visible text elements
        const selector = 'p, h1, h2, h3, h4, h5, h6, li, span, div, a, button, label, td, th, blockquote, figcaption';
        const elements = Array.from(document.querySelectorAll(selector));

        // Filter out unwanted elements
        const filteredElements = elements.filter(el => {
          const tagName = el.tagName.toLowerCase();
          
          // Exclude certain tags
          if (['script', 'style', 'noscript', 'svg', 'path', 'iframe', 'code', 'pre'].includes(tagName)) {
            return false;
          }

          // Exclude elements with specific classes or IDs (e.g., code blocks)
          if (el.closest('script, style, noscript, svg, iframe, code, pre')) {
            return false;
          }

          // Check if element is visible
          const style = window.getComputedStyle(el);
          if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
            return false;
          }

          return true;
        });

        await translateElements(filteredElements);

        // Translate placeholders
        const placeholderElements = Array.from(document.querySelectorAll('[placeholder]')) as HTMLElement[];
        for (const el of placeholderElements) {
          const placeholder = el.getAttribute('placeholder');
          if (placeholder && !el.hasAttribute(`data-placeholder-${language}`)) {
            const cacheKey = `${language}:placeholder:${placeholder}`;
            let translated = translationCache[cacheKey];

            if (!translated) {
              try {
                const response = await fetch('/api/translate', {
                  method: 'POST',
                  headers: { 
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Accept': 'application/json',
                  },
                  body: JSON.stringify({
                    text: placeholder,
                    targetLang: language,
                    sourceLang: 'en',
                  }),
                });

                if (response.ok) {
                  const data = await response.json();
                  if (data && data.translatedText) {
                    translated = data.translatedText;
                    translationCache[cacheKey] = translated;
                  } else {
                    translated = placeholder;
                  }
                } else {
                  translated = placeholder;
                }
              } catch (error) {
                console.error('Placeholder translation error:', error);
                translated = placeholder;
              }
            }

            if (translated) {
              el.setAttribute('placeholder', translated);
              el.setAttribute(`data-placeholder-${language}`, 'true');
            }
          }
        }

        // Update HTML lang attribute for better rendering
        document.documentElement.lang = language;

        // Set up MutationObserver for dynamic content
        const observer = new MutationObserver((mutations) => {
          const newElements: Element[] = [];
          
          mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const el = node as Element;
                const selector = 'p, h1, h2, h3, h4, h5, h6, li, span, div, a, button, label, td, th, blockquote, figcaption';
                
                // Check the element itself
                if (el.matches(selector)) {
                  newElements.push(el);
                }
                
                // Check child elements
                const children = el.querySelectorAll(selector);
                newElements.push(...Array.from(children));
              }
            });
          });

          if (newElements.length > 0) {
            translateElements(newElements);
          }
        });

        // Observe the body for changes
        observer.observe(document.body, {
          childList: true,
          subtree: true,
        });

        // Store observer to disconnect later
        (window as any).__translationObserver = observer;

      } catch (error) {
        console.error('Page translation error:', error);
      } finally {
        setIsTranslating(false);
      }
    };

    // Disconnect previous observer if exists
    if ((window as any).__translationObserver) {
      (window as any).__translationObserver.disconnect();
    }

    // Wait for page to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', translatePage);
    } else {
      translatePage();
    }

    return () => {
      if ((window as any).__translationObserver) {
        (window as any).__translationObserver.disconnect();
      }
    };
  }, [language]);

  const setLanguage = async (lang: Language) => {
    setIsLoading(true);
    localStorage.setItem('language', lang);
    
    // Force full page reload for clean translation
    // This ensures no cache conflicts between language switches
    window.location.reload();
  };

  const t = (key: string): string => {
    const langData = translations[language as 'en' | 'tr' | 'fr'] || translations.en;
    return langData[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading, isTranslating }}>
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
