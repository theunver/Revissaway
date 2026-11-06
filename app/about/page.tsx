"use client";

import { useLanguage, useLocalized } from "@/contexts/LanguageContext";
import { rich } from "./rich";
import ResponsiveImage from "@/components/ResponsiveImage";
import AnimatedCounter from "@/components/AnimatedCounter";
import { content } from "./content";

export default function AboutPage() {
  const c = useLocalized(content);
  const { t, language } = useLanguage();
  const r = language === "tr" ? rich.tr : rich.en;
  
  return (
    <main className="bg-black text-white overflow-hidden">
      
      {/* ABOUT PAGE FULL-WIDTH BANNER */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <ResponsiveImage
          src="/images/revissaway-about.jpg"
          alt={c.t001}
          sizes="100vw"
          priority
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 1 }}
        />
        {/* Gradient overlay for better text visibility if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        <div className="relative z-10">        </div>
      </section>

      {/* TÜRKIYE BY THE NUMBERS - Moved to top */}
      <section className="w-full bg-gradient-to-b from-black to-[#1a1a1a] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#9B7E3E]/10 to-[#f5e9cc]/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-[#9B7E3E] mb-12">
              {c.t002}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                  <AnimatedCounter target={1500000} suffix="+" duration={2500} />
                </div>
                <p className="text-[#9B7E3E] font-semibold">
                  {c.t003}
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                  {c.t004}
                </div>
                <p className="text-[#9B7E3E] font-semibold">
                  {c.t005}
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                  <span className="animate-pulse">#1</span>
                </div>
                <p className="text-[#9B7E3E] font-semibold">
                  {c.t006}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">{c.t007}</h2>
          <p className="text-gray-300 leading-relaxed">
            {c.t008}
          </p>
        </div>
        <div className="rounded-2xl shadow-lg w-full overflow-hidden h-[320px] md:h-[360px] relative">
          <ResponsiveImage
            src="/images/0004.jpg"
            alt={c.t009}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-md"
            style={{ opacity: 1 }}
          />
        </div>
      </section>

      {/* EXPERTISE & PARTNERSHIPS */}
      <section className="w-full bg-gradient-to-b from-white via-[#f8f3e4] to-[#f6ebc7] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800 text-center">{c.t010}</h2>
          
          <div className="space-y-6 text-left max-w-4xl mx-auto mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              {r.p1}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              {r.p2}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              {r.p3}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Column 1: Multiple Partners */}
            <div className="p-8 border border-[#9B7E3E]/40 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,126,62,0.5)] text-center h-[180px] flex flex-col justify-center bg-white/80">
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">{c.t011}</h3>
              <p className="text-gray-700 text-sm">
                {c.t012}
              </p>
            </div>
            
            {/* Column 2: Accredited Clinics */}
            <div className="p-8 border border-[#9B7E3E]/40 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,126,62,0.5)] text-center h-[180px] flex flex-col justify-center bg-white/80">
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">{c.t013}</h3>
              <p className="text-gray-700 text-sm">
                {c.t014}
              </p>
            </div>
            
            {/* Column 3: Transparent Coordination */}
            <div className="p-8 border border-[#9B7E3E]/40 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,126,62,0.5)] text-center h-[180px] flex flex-col justify-center bg-white/80">
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">{c.t015}</h3>
              <p className="text-gray-700 text-sm">
                {c.t016}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ESTHEWAY */}
      <section className="w-full bg-gradient-to-b from-[#f6ebc7] via-[#f8f3e4] to-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t('about.whyChoose.title')}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-[#9B7E3E] to-[#B8965A] mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#9B7E3E]/20 hover:border-[#9B7E3E]/60">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9B7E3E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#9B7E3E] to-[#B8965A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9B7E3E] transition-colors">
                  {c.t017}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {c.t018}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#9B7E3E]/20 hover:border-[#9B7E3E]/60">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9B7E3E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#9B7E3E] to-[#B8965A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">★</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9B7E3E] transition-colors">
                  {c.t019}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {c.t020}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#9B7E3E]/20 hover:border-[#9B7E3E]/60">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9B7E3E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#9B7E3E] to-[#B8965A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">$</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9B7E3E] transition-colors">
                  {c.t021}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {c.t022}
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#9B7E3E]/20 hover:border-[#9B7E3E]/60">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9B7E3E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#9B7E3E] to-[#B8965A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">✈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9B7E3E] transition-colors">
                  {c.t023}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {c.t024}
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#9B7E3E]/20 hover:border-[#9B7E3E]/60">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9B7E3E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#9B7E3E] to-[#B8965A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">◆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9B7E3E] transition-colors">
                  {c.t025}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {c.t026}
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#9B7E3E]/20 hover:border-[#9B7E3E]/60">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#9B7E3E]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#9B7E3E] to-[#B8965A] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl font-bold">♥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#9B7E3E] transition-colors">
                  {c.t027}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {c.t028}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

