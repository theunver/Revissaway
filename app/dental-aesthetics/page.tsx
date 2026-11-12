"use client";

import OptimizedVideo from "@/components/OptimizedVideo";
import ResponsiveImage from "@/components/ResponsiveImage";
import FaqAccordion from "@/components/FaqAccordion";
import { useLocalized } from "@/contexts/LanguageContext";
import { content } from "./content";

export default function DentalAestheticsPage() {
  const c = useLocalized(content);
  const whatsappLink = "https://wa.me/61481334272";

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
      <section
        className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center"
        style={{ transform: 'scaleX(-1)' }}
      >
        <ResponsiveImage src="/images/banner-dental.jpg" alt="" sizes="100vw" priority className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" style={{ transform: 'scaleX(-1)' }}></div>
        <div className="relative z-10 px-6" style={{ transform: 'scaleX(-1)' }}>
          <h1 className="text-5xl md:text-6xl font-bold text-white border-b-4 border-[#9B7E3E] inline-block pb-2">
            {c.t003}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {c.t004}
          </p>
        </div>
      </section>

      {/* Inside Our Partner Clinics Section */}
      <section className="bg-gradient-to-b from-[#fffaf3] to-[#f8f5f0] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {c.t005}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Procedure Video 1 */}
            <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
              <OptimizedVideo 
                src="/videos/dental9.mp4"
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
                src="/videos/dental10.mp4"
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

      {/* Excellence in Dental Aesthetics - World-Class Medical Excellence Style */}
      <section className="bg-gradient-to-b from-[#FFF8DC] to-[#f8f5f0] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <OptimizedVideo
              src="/videos/dental-collage.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover object-center rounded-xl shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {c.t006}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {c.t007}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>{c.t008}</strong> {c.t009}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>{c.t010}</strong> {c.t011}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>{c.t012}</strong> {c.t013}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>{c.t014}</strong> {c.t015}
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* 1️⃣ Dental Implants & Restorations Section */}
      <section id="dental-implants" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{c.t016}</h2>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">{c.t017}</h3>
            <p className="mb-4 text-gray-700">
              {c.t018}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">{c.t019}</div>
                <div className="text-sm text-gray-600">{c.t020}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">{c.t021}</div>
                <div className="text-sm text-gray-600">{c.t022}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">{c.t023}</div>
                <div className="text-sm text-gray-600">{c.t024}</div>
              </div>
            </div>

            <h3 id="dental-crowns" className="scroll-mt-24 text-xl font-semibold mb-2 mt-8 text-gray-900">{c.t025}</h3>
            <p className="mb-4 text-gray-700">
              {c.t026}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">{c.t027}</div>
                <div className="text-sm text-gray-600">{c.t028}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">{c.t029}</div>
                <div className="text-sm text-gray-600">{c.t030}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">{c.t031}</div>
                <div className="text-sm text-gray-600">{c.t032}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <ResponsiveImage
              src="/images/Dental Implants.jpg"
              
              alt={c.t033}
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 2️⃣ Dental Veneers & Cosmetic Enhancements Section */}
      <section id="veneers" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div>
            <ResponsiveImage
              src="/images/Dental Veneers.jpg"
              
              alt={c.t034}
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{c.t035}</h2>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">{c.t036}</h3>
            <p className="mb-4 text-gray-700">
              {c.t037}
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg">{c.t038}</div>
                <div className="text-sm opacity-90">{c.t039}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg">{c.t040}</div>
                <div className="text-sm opacity-90">{c.t041}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg">{c.t042}</div>
                <div className="text-sm opacity-90">{c.t043}</div>
              </div>
            </div>

            <h3 id="hollywood-smile" className="scroll-mt-24 text-xl font-semibold mb-2 mt-8 text-gray-900">{c.t044}</h3>
            <p className="mb-4 text-gray-700">
              {c.t045}
            </p>
          </div>
        </div>
      </section>

      {/* Dental Aesthetics Before & After Section */}
      <section id="before-and-after" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left: Text Content */}
            <div className="md:w-1/2 text-left space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">{c.t046}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {c.t047}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {c.t048}
              </p>
            </div>

            {/* Right: Auto-Scrolling Images */}
            <div className="md:w-1/2 overflow-x-auto overflow-y-hidden rounded-xl shadow-lg bg-white p-2 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#9B7E3E] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&>div]:animation-paused">
              <div className="flex gap-4 animate-[scroll_15s_linear_infinite]">
                <ResponsiveImage
              src="/images/dental001.jpg" 
                   
                  alt={c.t049} 
                  className="w-[480px] h-[360px] object-cover rounded-lg flex-shrink-0"
              sizes="480px"
            />
                <ResponsiveImage
              src="/images/dental002.jpg" 
                   
                  alt={c.t050} 
                  className="w-[480px] h-[360px] object-cover rounded-lg flex-shrink-0"
              sizes="480px"
            />
                <ResponsiveImage
              src="/images/dental003.jpg" 
                   
                  alt={c.t051} 
                  className="w-[480px] h-[360px] object-cover rounded-lg flex-shrink-0"
              sizes="480px"
            />
                <ResponsiveImage
              src="/images/dental004.jpg" 
                   
                  alt={c.t052} 
                  className="w-[480px] h-[360px] object-cover rounded-lg flex-shrink-0"
              sizes="480px"
            />
                {/* Duplicate for seamless loop */}
                <ResponsiveImage
              src="/images/dental001.jpg" 
                   
                  alt={c.t053} 
                  className="w-[480px] h-[360px] object-cover rounded-lg flex-shrink-0"
              sizes="480px"
            />
                <ResponsiveImage
              src="/images/dental002.jpg" 
                   
                  alt={c.t054} 
                  className="w-[480px] h-[360px] object-cover rounded-lg flex-shrink-0"
              sizes="480px"
            />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">{c.t055}</h3>
            <p className="text-sm text-gray-700">
              {c.t056}
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">{c.t057}</h3>
            <p className="text-sm text-gray-700">
              {c.t058}
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">{c.t059}</h3>
            <p className="text-sm text-gray-700">
              {c.t060}
            </p>
          </div>
        </div>
      </section>

      {/* SEO-4B: treatment-planning FAQ (same component/design as the homepage FAQ) */}
      <FaqAccordion
        id="dental-faq"
        title={c.faqTitle}
        items={[
          { question: c.faq1Q, answer: c.faq1A },
          { question: c.faq2Q, answer: c.faq2A },
          { question: c.faq3Q, answer: c.faq3A },
          { question: c.faq4Q, answer: c.faq4A },
          { question: c.faq5Q, answer: c.faq5A },
          // SEO-6B (links: EN + TR phrases; only the phrase present in the active language is linked)
          { question: c.faq6Q, answer: c.faq6A, links: [{ text: "send a free enquiry", href: "/#contact" }, { text: "ücretsiz bir bilgi talebi gönderin", href: "/#contact" }] },
          { question: c.faq7Q, answer: c.faq7A, links: [{ text: "Crowns", href: "/dental-aesthetics#dental-crowns" }, { text: "veneers are different treatments", href: "/dental-aesthetics#veneers" }, { text: "Kron", href: "/dental-aesthetics#dental-crowns" }, { text: "lamina farklı tedavilerdir", href: "/dental-aesthetics#veneers" }] },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            {c.t061}
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            {c.t062}
          </p>
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
            className="inline-flex items-center gap-2 bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-8 py-4 rounded-xl shadow-md transition-all duration-300 font-semibold text-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

