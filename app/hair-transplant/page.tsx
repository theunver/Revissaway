"use client";

import { useEffect, useState } from "react";

// Stable, language-independent anchors for the method tabs (e.g. /hair-transplant#fue).
const METHOD_SLUGS = ["dhi", "fue", "sapphire-fue", "beard-transplant", "tdf", "female-hair-transplant"];
import OptimizedVideo from "@/components/OptimizedVideo";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import ResponsiveImage from "@/components/ResponsiveImage";
import { useLocalized } from "@/contexts/LanguageContext";
import { content } from "./content";

export default function HairTransplantPage() {
  const c = useLocalized(content);
  const { language } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/61411854929";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Deep links: /hair-transplant#fue selects that method tab and scrolls to it.
  useEffect(() => {
    const fromHash = () => {
      const i = METHOD_SLUGS.indexOf(window.location.hash.slice(1));
      if (i < 0) return;
      setSelectedMethod(i);
      requestAnimationFrame(() => document.getElementById(METHOD_SLUGS[i])?.scrollIntoView({ block: "start" }));
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  // ARIA tabs keyboard support: arrow keys move between method tabs.
  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const n = METHOD_SLUGS.length;
    const next = e.key === "ArrowRight" || e.key === "ArrowDown" ? (i + 1) % n
      : e.key === "ArrowLeft" || e.key === "ArrowUp" ? (i - 1 + n) % n
      : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1;
    if (next < 0) return;
    e.preventDefault();
    setSelectedMethod(next);
    document.getElementById(`tab-${METHOD_SLUGS[next]}`)?.focus();
  };

  const faqs = [
    {
      question: c.t001,
      answer: c.t002
    },
    {
      question: c.t003,
      answer: c.t004
    },
    {
      question: c.t005,
      answer: c.t006
    },
    {
      question: c.t007,
      answer: c.t008
    },
    {
      question: c.t009,
      answer: c.t010
    },
    {
      question: c.t011,
      answer: c.t012
    }
  ];

  const methods = [
    {
      id: 0,
      title: c.t013,
      shortName: "DHI",
      description: c.t014,
      features: [
        c.t015,
        c.t016,
        c.t017,
        c.t018,
        c.t019,
        c.t020,
      ],
      iconPath: "/icons/DHI.svg",
    },
    {
      id: 1,
      title: c.t021,
      shortName: "FUE",
      description: c.t022,
      features: [
        c.t023,
        c.t024,
        c.t025,
        c.t026,
        c.t027,
        c.t028,
      ],
      iconPath: "/icons/FUE.svg",
    },
    {
      id: 2,
      title: c.t029,
      shortName: "Sapphire",
      description: c.t030,
      features: [
        c.t031,
        c.t032,
        c.t033,
        c.t034,
        c.t035,
        c.t036,
      ],
      iconPath: "/icons/SAPPHIRE.svg",
    },
    {
      id: 3,
      title: c.t037,
      shortName: "Beard",
      description: c.t038,
      features: [
        c.t039,
        c.t040,
        c.t041,
        c.t042,
        c.t043,
        c.t044,
      ],
      iconPath: "/icons/BEARD.svg",
    },
    {
      id: 4,
      title: c.t045,
      shortName: "TDF",
      description:
        c.t046,
      features: [
        c.t047,
        c.t048,
        c.t049,
        c.t050,
        c.t051,
        c.t052,
      ],
      iconPath: "/icons/TDF%20Technique.svg",
    },
    {
      id: 5,
      title: c.t053,
      shortName: "Female",
      description: c.t054,
      features: [
        c.t055,
        c.t056,
        c.t057,
        c.t058,
        c.t059,
        c.t060,
      ],
      iconPath: "/icons/FEMALE.svg",
    },
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

      {/* Banner Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        {/* Background image */}
        <ResponsiveImage
              src="/images/hair-banner.jpg"
          
          alt={c.t063}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 1 }}
              sizes="100vw"
              priority
            />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40"></div>

        {/* Text content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white border-b-4 border-[#9B7E3E] inline-block pb-2">
            {c.t064}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {c.t065}
          </p>
        </div>
      </section>

      {/* Performed Procedures Section */}
      <section className="bg-gradient-to-b from-[#fffaf3] to-[#f8f5f0] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {c.t066}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Procedure Video 1 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <OptimizedVideo 
              src="/videos/hairreels1.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>

          {/* Procedure Video 2 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <OptimizedVideo 
              src="/videos/hairreels2.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>

          {/* Procedure Video 3 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <OptimizedVideo 
              src="/videos/hairreels3.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>

          {/* Procedure Video 4 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <OptimizedVideo 
              src="/videos/hairreels4.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          </div>
        </div>
        </div>
      </section>

      {/* Methods Section - Two Column Layout */}
      <section className="bg-gradient-to-b from-[#f8f5f0] to-[#FFF8DC] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Method Cards */}
          <div className="lg:col-span-5">
            <div role="tablist" aria-label={language === "tr" ? "Saç ekimi yöntemleri" : "Hair transplant methods"}className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 sticky top-24">
              {methods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  role="tab"
                  id={`tab-${METHOD_SLUGS[method.id]}`}
                  aria-selected={selectedMethod === method.id}
                  aria-controls={METHOD_SLUGS[method.id]}
                  tabIndex={selectedMethod === method.id ? 0 : -1}
                  onKeyDown={(e) => onTabKey(e, method.id)}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`relative p-6 rounded-xl transition-all duration-300 group ${
                    selectedMethod === method.id
                      ? 'bg-gradient-to-br from-[#9B7E3E] to-[#8B7335] shadow-2xl scale-105'
                      : 'bg-white hover:bg-gray-50 border border-[#9B7E3E]/30 hover:border-[#9B7E3E] shadow-md'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-3">
                    <img
                      src={method.iconPath}
                      alt={`${method.title} icon`}
                      width="80"
                      height="80"
                      className="w-20 h-20 rounded-lg mx-auto md:w-24 md:h-24"
                      loading="lazy"
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-center font-semibold text-sm md:text-base mt-2 transition-colors duration-300 ${
                    selectedMethod === method.id ? 'text-white' : 'text-gray-800'
                  }`}>
                    {method.title}
                  </h3>

                  {/* Selected Indicator */}
                  {selectedMethod === method.id && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#9B7E3E]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Method Description */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-white/20">
              {/* All method panels are in the HTML (crawlable); only the selected one is shown (native hidden attribute). */}
              {methods.map((method) => (
                <div
                  key={method.id}
                  id={METHOD_SLUGS[method.id]}
                  role="tabpanel"
                  aria-labelledby={`tab-${METHOD_SLUGS[method.id]}`}
                  hidden={selectedMethod !== method.id}
                  className="scroll-mt-24"
                >
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    {method.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                    {method.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-[#9B7E3E] rounded-full"></div>
                      {c.t067}
                    </h3>
                    <ul className="space-y-3">
                      {method.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-800">
                          <svg className="w-6 h-6 text-[#9B7E3E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-4 rounded-xl shadow-lg transition-all duration-300 font-semibold text-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {c.t068}
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Partner Clinics Difference Section */}
      <section className="bg-gradient-to-b from-[#FFF8DC] to-[#fffaf3] px-4 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {c.t069}
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                {c.t070}
              </p>
              
              {/* SEO-4B: question groups — the leading question is emphasised */}
              {[c.t071, c.t072, c.t073].map((text, i) => {
                const q = text.indexOf("?") + 1;
                return (
                  <p key={i} className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">{text.slice(0, q)}</strong>{text.slice(q)}
                  </p>
                );
              })}
            </div>

            {/* Right Column - Image with Background Shape */}
            <div className="relative">
              {/* Beige Background Shape */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#fffaf3] to-[#f8f5f0] rounded-3xl transform rotate-2"></div>
              
              {/* Image Container */}
              <div className="relative">
                <ResponsiveImage
              src="/images/foto001.png"
                  
                  alt={c.t074}
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-md"
                  style={{ opacity: 1 }}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ and Information Section */}
      <section className="bg-gradient-to-b from-[#fffaf3] to-[#f8f5f0] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              {c.t075}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-[#9B7E3E]/20 overflow-hidden shadow-md">
                  <button
                    type="button"
                    id={`hair-faq-question-${index + 1}`}
                    aria-expanded={openFaq === index}
                    aria-controls={`hair-faq-answer-${index + 1}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-gray-800 font-semibold pr-4">{faq.question}</span>
                    <svg
                      className={`w-6 h-6 text-[#9B7E3E] flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    id={`hair-faq-answer-${index + 1}`}
                    role="region"
                    aria-labelledby={`hair-faq-question-${index + 1}`}
                    aria-hidden={openFaq !== index}
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-[#9B7E3E]/10">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - About Hair Transplant */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              {c.t076}
            </h2>

            {/* YouTube Video Embed */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-video lg:h-[320px]">
                <iframe
                loading="lazy"
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube-nocookie.com/embed/QvzQlwSnzTQ"
                  title={c.t077}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                {c.t078}
              </p>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-8 h-8 text-[#9B7E3E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">{c.t079}</p>
                    <p className="text-sm font-bold text-gray-900">{c.t080}</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-8 h-8 text-[#9B7E3E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">{c.t081}</p>
                    <p className="text-sm font-bold text-gray-900">{c.t082}</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-8 h-8 text-[#9B7E3E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">{c.t083}</p>
                    <p className="text-sm font-bold text-gray-900">{c.t084}</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-8 h-8 text-[#9B7E3E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">{c.t085}</p>
                    <p className="text-sm font-bold text-gray-900">{c.t086}</p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-8 h-8 text-[#9B7E3E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">{c.t087}</p>
                    <p className="text-sm font-bold text-gray-900">{c.t088}</p>
                  </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-8 h-8 text-[#9B7E3E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">{c.t089}</p>
                    <p className="text-sm font-bold text-gray-900">{c.t090}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* Structured data: the site-wide Organization JSON-LD lives in app/layout.tsx. RevissaWay is a
          coordination service, so no MedicalBusiness / medicalSpecialty markup here. */}
    </main>
  );
}
