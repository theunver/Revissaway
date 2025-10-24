"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'tr' | 'zh' | 'ar' | 'vi' | 'yue' | 'pa' | 'hi' | 'it' | 'el' | 'tl' | 'th' | 'fr' | 'es';

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
  { code: 'es', label: 'Español', flag: '🇪🇸' },
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
    'home.hero.title': 'Votre pont vers les experts les plus fiables en cheveux et esthétique de Turquie',
    'home.hero.subtitle': 'RevissaWay connecte les patients d\'Australie et de Nouvelle-Zélande avec des cliniques accréditées en Turquie — offrant une qualité de classe mondiale, des chirurgiens experts et une coordination transparente.',
    'home.hero.cta': 'Réserver une consultation gratuite',
    'home.whyTurkey.title': 'Pourquoi la Turquie ?',
    'home.whyTurkey.description': 'RevissaWay est une marque de tourisme médical de confiance qui travaille en collaboration avec des cliniques médicales et esthétiques accréditées et licenciées internationalement à travers la Turquie.',
    'home.services.title': 'Nos services',
    'home.services.hairTransplant.title': 'Greffe de cheveux',
    'home.services.hairTransplant.description': 'Techniques avancées FUE, DHI et Sapphire avec des résultats naturels.',
    'home.services.cosmeticSurgery.title': 'Chirurgie esthétique',
    'home.services.cosmeticSurgery.description': 'Procédures esthétiques expertes incluant augmentation mammaire, liposuccion et chirurgies faciales.',
    'home.services.dentalAesthetics.title': 'Esthétique dentaire',
    'home.services.dentalAesthetics.description': 'Sourire Hollywood, implants dentaires et traitements esthétiques dentaires complets.',
    'home.packageServices.title': 'Ce qui est inclus dans votre forfait',
    'home.packageServices.transfer.title': 'Service de transfert',
    'home.packageServices.transfer.description': 'Prise en charge et retour à l\'aéroport',
    'home.packageServices.hotel.title': 'Hébergement hôtelier',
    'home.packageServices.hotel.description': 'Séjour confortable dans un hôtel 4-5 étoiles',
    'home.packageServices.vip.title': 'Support VIP',
    'home.packageServices.vip.description': 'Coordinateur dédié tout au long de votre séjour',
    'home.packageServices.followup.title': 'Suivi d\'1 an',
    'home.packageServices.followup.description': 'Soins post-traitement et surveillance',
    'home.process.title': 'Notre processus',
    'home.process.step1.title': 'Consultation initiale gratuite',
    'home.process.step1.description': 'Envoyez vos détails et recevez une évaluation initiale.',
    'home.process.step2.title': 'Évaluation du médecin',
    'home.process.step2.description': 'Examen médical expert et plan de traitement personnalisé.',
    'home.process.step3.title': 'Planification du traitement',
    'home.process.step3.description': 'Programmation détaillée et conseils de préparation.',
    'home.process.step4.title': 'Procédure médicale',
    'home.process.step4.description': 'Traitement professionnel par des spécialistes licenciés.',
    'home.process.step5.title': 'Soins de suivi',
    'home.process.step5.description': 'Support continu et surveillance pour des résultats optimaux.',
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
    'home.contact.whatsapp': 'Chat sur WhatsApp',
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
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.whyTurkey': '¿Por qué Turquía?',
    'nav.consultation': 'Consulta gratuita',
    
    // Services
    'services.hairTransplant': 'Trasplante de cabello',
    'services.cosmeticSurgery': 'Cirugía estética',
    'services.dentalAesthetics': 'Estética dental',
    
    // Footer
    'footer.title': 'Tu puente hacia el bienestar',
    'footer.description': 'Descubre acceso confiable a clínicas de cosmética, trasplante de cabello y estética dental de clase mundial en Turquía — con RevissaWay conectando Australia, Nueva Zelanda y Turquía a través de asociaciones médicas certificadas.',
    'footer.consultation': 'Reserva tu consulta gratuita',
    'footer.address': 'DIRECCIÓN',
    'footer.phone': 'TELÉFONO',
    'footer.email': 'CORREO',
    'footer.copyright': '© 2025 RevissaWay | Todos los derechos reservados.',
    
    // Home Page
    'home.hero.title': 'Tu puente hacia los expertos más confiables en cabello y estética de Turquía',
    'home.hero.subtitle': 'RevissaWay conecta pacientes de Australia y Nueva Zelanda con clínicas acreditadas en Turquía — ofreciendo calidad de clase mundial, cirujanos expertos y coordinación transparente.',
    'home.hero.cta': 'Reservar consulta gratuita',
    'home.whyTurkey.title': '¿Por qué Turquía?',
    'home.whyTurkey.description': 'RevissaWay es una marca de turismo médico de confianza que trabaja en colaboración con clínicas médicas y estéticas acreditadas y licenciadas internacionalmente en toda Turquía.',
    'home.services.title': 'Nuestros servicios',
    'home.services.hairTransplant.title': 'Trasplante de cabello',
    'home.services.hairTransplant.description': 'Técnicas avanzadas FUE, DHI y Sapphire con resultados naturales.',
    'home.services.cosmeticSurgery.title': 'Cirugía estética',
    'home.services.cosmeticSurgery.description': 'Procedimientos estéticos expertos incluyendo aumento de senos, liposucción y cirugías faciales.',
    'home.services.dentalAesthetics.title': 'Estética dental',
    'home.services.dentalAesthetics.description': 'Sonrisa Hollywood, implantes dentales y tratamientos estéticos dentales completos.',
    'home.packageServices.title': 'Qué está incluido en tu paquete',
    'home.packageServices.transfer.title': 'Servicio de transfer',
    'home.packageServices.transfer.description': 'Recogida y regreso al aeropuerto',
    'home.packageServices.hotel.title': 'Alojamiento hotelero',
    'home.packageServices.hotel.description': 'Estancia cómoda en hotel 4-5 estrellas',
    'home.packageServices.vip.title': 'Soporte VIP',
    'home.packageServices.vip.description': 'Coordinador dedicado durante toda tu estancia',
    'home.packageServices.followup.title': 'Seguimiento de 1 año',
    'home.packageServices.followup.description': 'Cuidados post-tratamiento y monitoreo',
    'home.process.title': 'Nuestro proceso',
    'home.process.step1.title': 'Consulta inicial gratuita',
    'home.process.step1.description': 'Envía tus detalles y recibe una evaluación inicial.',
    'home.process.step2.title': 'Evaluación del médico',
    'home.process.step2.description': 'Revisión médica experta y plan de tratamiento personalizado.',
    'home.process.step3.title': 'Planificación del tratamiento',
    'home.process.step3.description': 'Programación detallada y guía de preparación.',
    'home.process.step4.title': 'Procedimiento médico',
    'home.process.step4.description': 'Tratamiento profesional por especialistas licenciados.',
    'home.process.step5.title': 'Cuidados de seguimiento',
    'home.process.step5.description': 'Soporte continuo y monitoreo para resultados óptimos.',
    'home.contact.title': 'Reserva tu consulta gratuita',
    'home.contact.subtitle': 'Completa el formulario a continuación y te responderemos en 24 horas.',
    'home.contact.firstName': 'Nombre',
    'home.contact.lastName': 'Apellido',
    'home.contact.email': 'Correo electrónico',
    'home.contact.phone': 'Teléfono',
    'home.contact.preferredDate': 'Fecha preferida',
    'home.contact.service': 'Servicio de interés',
    'home.contact.message': 'Mensaje',
    'home.contact.submit': 'Reservar consulta',
    'home.contact.submitting': 'Enviando...',
    'home.contact.success': '✅ Gracias, tu solicitud de consulta ha sido recibida.',
    'home.contact.error': 'Lo sentimos, ocurrió un error. Por favor intenta de nuevo.',
    'home.contact.whatsapp': 'Chat en WhatsApp',
    'home.contact.privacy': 'Respetamos tu privacidad. Tu información no será compartida con terceros.',
    
    // About Page
    'about.title': 'Acerca de RevissaWay',
    'about.expertise.title': 'Experiencia y asociaciones',
    'about.expertise.description': 'RevissaWay colabora con múltiples socios médicos acreditados y licenciados en toda Turquía — incluyendo Estego Turkey. No estamos vinculados a una sola institución; en su lugar, operamos a través de una red de clínicas verificadas que cumplen con los estándares de atención médica nacionales e internacionales.',
    'about.expertise.multiplePartners': 'Múltiples socios',
    'about.expertise.accreditedClinics': 'Clínicas acreditadas',
    'about.expertise.transparentCoordination': 'Coordinación transparente',
    'about.whyChoose.title': 'Por qué elegir RevissaWay',
    
    // Disclaimer
    'disclaimer.text': 'RevissaWay proporciona únicamente servicios de organización y consultoría. Todos los procedimientos médicos son responsabilidad de hospitales socios acreditados y profesionales médicos licenciados en Turquía. Los resultados pueden variar de persona a persona. La información en este sitio web es únicamente para fines informativos generales y no constituye consejo médico.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    const validLanguages = ['en', 'tr', 'zh', 'ar', 'vi', 'yue', 'pa', 'hi', 'it', 'el', 'tl', 'th', 'fr', 'es'];
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
        document.querySelectorAll('[data-translated-tr], [data-translated-zh], [data-translated-ar], [data-translated-vi], [data-translated-yue], [data-translated-pa], [data-translated-hi], [data-translated-it], [data-translated-el], [data-translated-tl], [data-translated-th], [data-translated-fr], [data-translated-es]').forEach(el => {
          // Remove all translation attributes
          ['tr', 'zh', 'ar', 'vi', 'yue', 'pa', 'hi', 'it', 'el', 'tl', 'th', 'fr', 'es'].forEach(lang => {
            el.removeAttribute(`data-translated-${lang}`);
          });
        });
        return;
      }

      // For static translation languages (tr, fr, es), don't use dynamic translation
      if (['tr', 'fr', 'es'].includes(language)) {
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
    // For languages with static translations (en, tr, fr, es), use them
    if (['en', 'tr', 'fr', 'es'].includes(language)) {
      const langData = translations[language as 'en' | 'tr' | 'fr' | 'es'] || translations.en;
      return langData[key as keyof typeof translations.en] || key;
    }
    // For other languages, return the key (they use dynamic translation)
    return key;
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
