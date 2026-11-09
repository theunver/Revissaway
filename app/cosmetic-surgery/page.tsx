"use client";

import { useState } from "react";
import OptimizedVideo from "@/components/OptimizedVideo";
import ResponsiveImage from "@/components/ResponsiveImage";
import { useLocalized } from "@/contexts/LanguageContext";
import { content } from "./content";

export default function CosmeticSurgeryPage() {
  const c = useLocalized(content);
  const whatsappLink = "https://wa.me/61411854929";
  const [processExpanded, setProcessExpanded] = useState(false);

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
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Background image */}
        <ResponsiveImage
              src="/images/banner2.jpg"
          
          alt={c.t003}
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
            {c.t004}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {c.t005}
          </p>
        </div>
      </section>

      {/* Inside Our Partner Clinics Section */}
      <section className="bg-gradient-to-b from-[#fffaf3] to-[#f8f5f0] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {c.t006}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Procedure Video 1 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <OptimizedVideo 
              src="/videos/surgery1.mp4"
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
              src="/videos/surgery2.mp4"
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
              src="/videos/surgery3.mp4"
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
              src="/videos/surgery4.mp4"
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

      {/* Hair Transplant Highlight Section (below banner) */}
      <section className="bg-gradient-to-r from-[#fffaf3] to-[#f8f5f0] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
            {/* Left: Image with soft beige background shape */}
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#fffaf3] to-[#f8f5f0] rounded-3xl rotate-2" />
              <div className="relative">
                <ResponsiveImage
              src="/images/foto002.png"
                  
                  alt={c.t007}
                  className="w-full h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px] object-cover rounded-xl shadow-md"
                  style={{ opacity: 1 }}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
              </div>
            </div>

            {/* Right: SEO text content */}
            <div className="space-y-5 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {c.t008}
              </h2>

              <p className="text-gray-700 leading-relaxed">
                {c.t009}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {c.t010}
              </p>

              <p className="text-gray-700 leading-relaxed">
                {c.t011}
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* Rhinoplasty Section */}
      <section id="rhinoplasty" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t012}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t013}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t014}</div>
                <div className="text-sm text-gray-600">{c.t015}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t016}</div>
                <div className="text-sm text-gray-600">{c.t017}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t018}</div>
                <div className="text-sm text-gray-600">{c.t019}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t020}</div>
                <div className="text-sm text-gray-600">{c.t021}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/rhinoplasty.jpg" 
               
              alt={c.t022} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Face Lift Section */}
      <section id="face-lift" className="scroll-mt-20 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Face Lift.jpg" 
               
              alt={c.t023} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t024}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t025}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t026}</div>
                <div className="text-sm opacity-90">{c.t027}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t028}</div>
                <div className="text-sm opacity-90">{c.t029}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t030}</div>
                <div className="text-sm opacity-90">{c.t031}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t032}</div>
                <div className="text-sm opacity-90">{c.t033}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neck Lift Section */}
      <section id="neck-lift" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t034}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t035}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t036}</div>
                <div className="text-sm text-gray-600">{c.t037}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t038}</div>
                <div className="text-sm text-gray-600">{c.t039}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t040}</div>
                <div className="text-sm text-gray-600">{c.t041}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t042}</div>
                <div className="text-sm text-gray-600">{c.t043}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Neck Lift.jpg" 
               
              alt={c.t044} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Mummy Makeover Section */}
      <section id="mummy-makeover" className="scroll-mt-20 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Mummy Makeover.jpg" 
               
              alt={c.t045} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t046}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t047}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t048}</div>
                <div className="text-sm opacity-90">{c.t049}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t050}</div>
                <div className="text-sm opacity-90">{c.t051}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t052}</div>
                <div className="text-sm opacity-90">{c.t053}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t054}</div>
                <div className="text-sm opacity-90">{c.t055}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tummy Tuck Section */}
      <section id="tummy-tuck" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t056}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t057}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t058}</div>
                <div className="text-sm text-gray-600">{c.t059}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t060}</div>
                <div className="text-sm text-gray-600">{c.t061}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t062}</div>
                <div className="text-sm text-gray-600">{c.t063}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t064}</div>
                <div className="text-sm text-gray-600">{c.t065}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Tummy Tuck.jpg" 
               
              alt={c.t066} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Liposuction Section */}
      <section id="liposuction" className="scroll-mt-20 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Liposuction.jpg" 
               
              alt={c.t067} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t068}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t069}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t070}</div>
                <div className="text-sm opacity-90">{c.t071}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t072}</div>
                <div className="text-sm opacity-90">{c.t073}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t074}</div>
                <div className="text-sm opacity-90">{c.t075}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t076}</div>
                <div className="text-sm opacity-90">{c.t077}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brazilian Butt Lift Section */}
      <section id="brazilian-butt-lift" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t078}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t079}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t080}</div>
                <div className="text-sm text-gray-600">{c.t081}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t082}</div>
                <div className="text-sm text-gray-600">{c.t083}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t084}</div>
                <div className="text-sm text-gray-600">{c.t085}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t086}</div>
                <div className="text-sm text-gray-600">{c.t087}</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Brazilian Butt Lift.jpg" 
               
              alt={c.t088} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Breast Reduction Section */}
      <section id="breast-reduction" className="scroll-mt-20 bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Breast Reduction.jpg" 
               
              alt={c.t089} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t090}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t091}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t092}</div>
                <div className="text-sm opacity-90">{c.t093}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t094}</div>
                <div className="text-sm opacity-90">{c.t095}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t096}</div>
                <div className="text-sm opacity-90">{c.t097}</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">{c.t098}</div>
                <div className="text-sm opacity-90">{c.t099}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breast Implants Section */}
      <section id="breast-implants" className="scroll-mt-20 bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{c.t100}</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {c.t101}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t102}</div>
                <div className="text-sm text-gray-600">{c.t103}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t104}</div>
                <div className="text-sm text-gray-600">{c.t105}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t106}</div>
                <div className="text-sm text-gray-600">{c.t107}</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">{c.t108}</div>
                <div className="text-sm text-gray-600">{c.t109}</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <ResponsiveImage
              src="/icons/Breast Implants.jpg" 
               
              alt={c.t110} 
              className="rounded-lg shadow-lg object-cover w-full h-full"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Informational Section */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">{c.t111}</h3>
            <p className="text-sm text-gray-700">
              {c.t112}
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">{c.t113}</h3>
            <p className="text-sm text-gray-700">
              {c.t114}
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">{c.t115}</h3>
            <p className="text-sm text-gray-700">
              {c.t116}
            </p>
          </div>
        </div>
      </section>

      {/* Discover More About the Process Card */}
      <section className="bg-gradient-to-b from-white to-[#FFF8DC] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-[#e5e5e5]">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {c.t117}
              </h2>

              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-3">
                {c.t118}
              </p>

              <div className="text-center">
                <button
                  onClick={() => setProcessExpanded(!processExpanded)}
                  className="text-[#bfa980] font-medium hover:underline transition-all focus:outline-none"
                  aria-expanded={processExpanded}
                  aria-controls="process-details"
                >
                  {processExpanded ? c.readLess : c.readMore}
                </button>
              </div>

              <div
                id="process-details"
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  processExpanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="max-w-3xl mx-auto space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    {c.t119}
                  </p>
                  <p className="leading-relaxed">
                    {c.t120}
                  </p>
                  <p className="leading-relaxed">
                    {c.t121}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

