"use client";

import { useState } from "react";
import OptimizedVideo from "@/components/OptimizedVideo";
import { useLanguage, useLocalized } from "@/contexts/LanguageContext";
import { consentLabel } from "./consent-text";
import privacyRelease from "@/privacy-release.json";
import ResponsiveImage from "@/components/ResponsiveImage";
import { content } from "./content";

export default function Home() {
  const c = useLocalized(content);
  const { t, language } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredDate: "",
    service: "",
    message: "",
    consent: false,
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const whatsappLink = "https://wa.me/61411854929";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Spam honeypot: hidden from people, often auto-filled by bots.
    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem("website") as HTMLInputElement | null;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "Consultation Request",
          website: honeypot?.value || "",
          consentVersion: privacyRelease.policyVersion,
        }),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          preferredDate: "",
          service: "",
          message: "",
          consent: false,
        });
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const services = [
    {
      title: c.t003,
      description: c.t004,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: c.t005,
      description: c.t006,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: c.t007,
      description: c.t008,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const packageServices = [
    {
      title: c.t009,
      description: c.t010,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: c.t011,
      description: c.t012,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: c.t013,
      description: c.t014,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      title: c.t015,
      description: c.t016,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: c.t017,
      description: c.t018,
    },
    {
      number: "2",
      title: c.t019,
      description: c.t020,
    },
    {
      number: "3",
      title: c.t021,
      description: c.t022,
    },
    {
      number: "4",
      title: c.t023,
      description: c.t024,
    },
    {
      number: "5",
      title: c.t025,
      description: c.t026,
    },
  ];

  const faqs = [
    {
      question: c.t027,
      answer: c.t028,
    },
    {
      question: c.t029,
      answer: c.t030,
    },
    {
      question: c.t031,
      answer: c.t032,
    },
    {
      question: c.t033,
      answer: c.t034,
    },
    {
      question: c.t035,
      answer: c.t036,
    },
    // SEO-4B: planning treatment from Australia (answers server-rendered like the others)
    { question: c.faqAuWorkQ, answer: c.faqAuWorkA },
    { question: c.faqQuoteQ, answer: c.faqQuoteA },
    { question: c.faqInsuranceQ, answer: c.faqInsuranceA },
    { question: c.faqStayQ, answer: c.faqStayA },
    { question: c.faqFlyQ, answer: c.faqFlyA },
    { question: c.faqReturnQ, answer: c.faqReturnA },
  ];

  return (
    <main className="min-h-screen">
      {/* Fixed WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          try {
            window.trackGA4Event?.('whatsapp_click', {
              event_category: 'engagement',
              event_label: 'Chat on WhatsApp'
            });
          } catch (err) {
            console.log('Tracking error:', err);
          }
        }}
        data-floating-whatsapp
        aria-label="WhatsApp"
        className="fixed z-30 right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] md:bottom-8 md:right-6 bg-[#9B7E3E] hover:bg-[#B8965A] text-white w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-3 rounded-full md:rounded-xl shadow-lg transition-colors duration-300 font-semibold flex items-center justify-center gap-2"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden md:inline">WhatsApp</span>
      </a>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative h-[85vh] w-full overflow-hidden bg-black pt-[55px]">
        {/* Video Background */}
        <OptimizedVideo
          src="/videos/lowbannerfirst_optimized.mp4"
          className="w-full h-full object-cover absolute inset-0"
          autoPlay
          loop
          muted
          playsInline
          priority={true}
        />

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance text-center leading-snug md:leading-normal">
              {t('home.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
              {t('home.hero.subtitle')}
            </p>
            
            {/* CTA Buttons - Stacked Vertically */}
            <div className="flex flex-col items-center gap-3 max-w-xs mx-auto">
              {/* Primary CTA: Book Free Consultation */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  
                  // Track GA4 Event - Book Free Consultation
                  if (typeof window !== 'undefined' && window.trackGA4Event) {
                    window.trackGA4Event('consultation_click', {
                      event_category: 'engagement',
                      event_label: 'Book Free Consultation'
                    });
                    console.log('GA4 event fired: consultation_click');
                  }
                }}
                className="w-full text-center border-2 border-white bg-transparent hover:bg-[#C9A861] text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 font-medium text-lg"
              >
{t('home.hero.cta')}
              </a>

              {/* Secondary CTA: WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  // Tracking (non-blocking)
                  try {
                    window.trackGA4Event?.('whatsapp_click', {
                      event_category: 'engagement',
                      event_label: 'Chat on WhatsApp'
                    });
                    window.trackLeadSubmission?.();
                    window.trackWhatsAppContact?.();
                    window.trackMetaEvent?.('Lead', {
                      content_name: 'WhatsApp Consultation',
                      value: 1
                    });
                  } catch (err) {
                    console.log('Tracking error (non-critical):', err);
                  }
                  // Link will open regardless of tracking
                }}
                className="w-full text-center border-2 border-white bg-transparent hover:bg-[#C9A861] text-white px-8 py-4 rounded-lg shadow-lg transition-all duration-300 font-medium text-lg"
              >
{t('home.contact.whatsapp')}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Why Turkey Section (About) */}
      <section id="about" className="bg-gradient-to-b from-[#FFF8DC] to-white py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          {/* Top Row: Video + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Video */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                loading="lazy"
                src="https://www.youtube-nocookie.com/embed/iaVP0skLe68?si=h5dmjze6y4j2Fbva&autoplay=1&mute=1"
                title={c.t039}
                allowFullScreen
                allow="autoplay; encrypted-media"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('home.whyTurkey.title')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {t('home.whyTurkey.description')}
              </p>
            </div>
          </div>

          {/* Bottom Row: Features in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <span className="text-[#9B7E3E] font-bold text-xl mr-3 flex-shrink-0">✔</span>
                <div>
                  <strong className="block text-gray-900 mb-2">{c.t040}</strong>
                  <p className="text-sm">{c.t041}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <span className="text-[#9B7E3E] font-bold text-xl mr-3 flex-shrink-0">✔</span>
                <div>
                  <strong className="block text-gray-900 mb-2">{c.t042}</strong>
                  <p className="text-sm">{c.t043}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <span className="text-[#9B7E3E] font-bold text-xl mr-3 flex-shrink-0">✔</span>
                <div>
                  <strong className="block text-gray-900 mb-2">{c.t044}</strong>
                  <p className="text-sm">{c.t045}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <span className="text-[#9B7E3E] font-bold text-xl mr-3 flex-shrink-0">✔</span>
                <div>
                  <strong className="block text-gray-900 mb-2">{c.t046}</strong>
                  <p className="text-sm">{c.t047}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="flex items-start">
                <span className="text-[#9B7E3E] font-bold text-xl mr-3 flex-shrink-0">✔</span>
                <div>
                  <strong className="block text-gray-900 mb-2">{c.t048}</strong>
                  <p className="text-sm">{c.t049}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gradient-to-b from-white to-gray-50 py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t('home.services.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Hair Transplant */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(155,126,62,0.7)] min-h-[400px]"
            >
              <ResponsiveImage src="/images/services/hair.jpg" alt="" sizes="(min-width: 768px) 33vw, 100vw" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {t('home.services.hairTransplant.title')}
                  </h3>
                  <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    {t('home.services.hairTransplant.description')}
                  </p>
                </div>
                <a
                  href="/hair-transplant"
                  className="inline-block bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {c.t050}
                </a>
              </div>
            </div>

            {/* Cosmetic Surgery */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(155,126,62,0.7)] min-h-[400px]"
            >
              <ResponsiveImage src="/images/services/cosmetic.jpg" alt="" sizes="(min-width: 768px) 33vw, 100vw" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {t('home.services.cosmeticSurgery.title')}
                  </h3>
                  <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    {t('home.services.cosmeticSurgery.description')}
                  </p>
                </div>
                <a
                  href="/cosmetic-surgery"
                  className="inline-block bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {c.t051}
                </a>
              </div>
            </div>

            {/* Dental Aesthetics */}
            <div
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(155,126,62,0.7)] min-h-[400px]"
            >
              <ResponsiveImage src="/images/services/dental.jpg" alt="" sizes="(min-width: 768px) 33vw, 100vw" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors duration-300"></div>
              <div className="relative p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    {t('home.services.dentalAesthetics.title')}
                  </h3>
                  <p className="text-base text-gray-100 mb-6 leading-relaxed">
                    {t('home.services.dentalAesthetics.description')}
                  </p>
                </div>
                <a
                  href="/dental-aesthetics"
                  className="inline-block bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  {c.t052}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Package Services Section */}
      <section className="bg-gradient-to-b from-[#FFF8DC] to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            {c.t053}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-[#9B7E3E]/30 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[#9B7E3E] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-b from-white to-[#FFF8DC] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            {c.t054}
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border border-[#9B7E3E]/30 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#9B7E3E] hover:bg-[#B8965A] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto transition-colors duration-300">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-black mb-3 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-[#9B7E3E] -ml-3 -mr-3" style={{ width: 'calc(100% - 1.5rem)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            {c.t055}
          </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#9B7E3E]/30 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                type="button"
                id={`faq-question-${index + 1}`}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index + 1}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                    className={`w-5 h-5 text-[#9B7E3E] transition-transform duration-200 ${
                      openFaq === index ? "transform rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Answers are always in the HTML (crawlable, accessible); collapsed ones use the native hidden attribute. */}
              <div
                id={`faq-answer-${index + 1}`}
                role="region"
                aria-labelledby={`faq-question-${index + 1}`}
                hidden={openFaq !== index}
                className="px-6 py-4 bg-gray-50 border-t border-gray-200"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-gradient-to-b from-white to-[#FFF8DC] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            {t('home.contact.title')}
          </h2>
          <div id="consultation-form" className="max-w-2xl mx-auto bg-white border border-[#9B7E3E]/30 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-gray-600 text-lg">
              {t('home.contact.subtitle')}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Spam honeypot - visually hidden, skipped by keyboard and screen readers */}
            <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}>
              <label htmlFor="website">Leave this field empty</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-black mb-2">
{t('home.contact.firstName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#9B7E3E]"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-black mb-2">
{t('home.contact.lastName')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#9B7E3E]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
{t('home.contact.email')} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 text-black placeholder-gray-600"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
{t('home.contact.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+61"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 text-black placeholder-gray-600"
              />
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-semibold text-black mb-2">
{t('home.contact.preferredDate')}
              </label>
              <input
                type="datetime-local"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 text-black placeholder-gray-600"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
{t('home.contact.service')}
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 text-black placeholder-gray-600"
              >
                <option value="">{c.t061}</option>
                <option value="Hair Transplant">{c.t062}</option>
                <option value="Esthetic Surgery Applications">{c.t063}</option>
                <option value="Dental Aesthetics">{c.t064}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
{t('home.contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 text-black placeholder-gray-600"
                aria-describedby="message-note"
              />
              {/* DRAFT WORDING - pending legal approval (privacy-release.json) */}
              <p id="message-note" className="mt-2 text-xs text-gray-500">
                {c.t065}
              </p>
            </div>
            {/* Required consent - DRAFT WORDING pending legal approval (privacy-release.json).
                Validated again on the server together with the Privacy Policy version. */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 shrink-0 accent-[#9B7E3E]"
              />
              <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                {language === "tr" ? consentLabel.tr : consentLabel.en}
                <span className="text-red-500"> *</span>
              </label>
            </div>
            {formStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('home.contact.success')}</span>
              </div>
            )}
            {formStatus === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
{t('home.contact.error')}
              </div>
            )}
              <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-4 rounded-xl shadow-md transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
{formStatus === "submitting" ? t('home.contact.submitting') : t('home.contact.submit')}
            </button>
          </form>

            <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
{t('home.contact.privacy')}
            </p>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-4">{c.t068}</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                try {
                  window.trackGA4Event?.('whatsapp_click', {
                    event_category: 'engagement',
                    event_label: 'Chat on WhatsApp'
                  });
                } catch (err) {
                  console.log('Tracking error:', err);
                }
              }}
              className="inline-flex items-center gap-2 bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-4 rounded-xl shadow-md transition-all duration-300 font-semibold"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {c.t069}
            </a>
          </div>
          </div>
        </div>
      </section>

    </main>
  );
}
