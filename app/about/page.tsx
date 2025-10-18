"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <main className="bg-black text-white overflow-hidden">
      
      {/* ABOUT PAGE FULL-WIDTH BANNER WITH FADE-IN */}
      <section className="relative h-[80vh] w-full overflow-hidden animate-fadeIn">
        <Image
          src="/images/revissaway-about.jpg"
          alt="RevissaWay About Us"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlay for better text visibility if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        <div className="relative z-10"></div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            RevissaWay is an independent health tourism consultancy based in Australia, 
            dedicated to connecting clients from Australia and New Zealand with accredited 
            medical and aesthetic clinics across Turkey. We operate with transparency, 
            professionalism, and compliance — coordinating each step of the medical journey 
            through ethical partnerships. RevissaWay does not perform or advertise medical procedures; 
            all treatments are delivered exclusively by independently licensed healthcare providers 
            under applicable Turkish regulations.
          </p>
        </div>
        <div className="rounded-2xl shadow-lg w-full overflow-hidden h-[320px] md:h-[360px] relative">
          <Image
            src="/images/0004.jpg"
            alt="RevissaWay About Visual"
            fill
            className="w-full h-full object-cover rounded-xl shadow-md"
            priority
            quality={90}
          />
        </div>
      </section>

      {/* EXPERTISE & PARTNERSHIPS */}
      <section className="w-full bg-gradient-to-b from-white via-[#f8f3e4] to-[#f6ebc7] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800 text-center">Expertise and Partnerships</h2>
          
          <div className="space-y-6 text-left max-w-4xl mx-auto mb-12">
            <p className="text-gray-700 text-lg leading-relaxed">
              RevissaWay operates in close collaboration with <strong>accredited, licensed, and internationally recognized medical partners across Turkey</strong>. 
              Each clinic is carefully selected for its <strong>high ethical standards</strong>, <strong>advanced medical technology</strong>, 
              <strong>experienced specialists</strong>, and <strong>proven record of patient satisfaction</strong>.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              At RevissaWay, our goal is not only to connect clients with medical treatments but to create a <strong>comfortable, safe, and fully supported health travel experience</strong>. 
              From initial consultation and clinic matching to accommodation and transportation coordination, we ensure that every stage of the journey 
              is managed with <strong>transparency, professionalism, and trust</strong>.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to <strong>bridge clients from Australia and New Zealand</strong> with Turkey's most reputable and trusted healthcare providers, 
              delivering a <strong>personalized, ethical, and internationally compliant medical experience</strong>. 
              RevissaWay acts solely as an <strong>independent health tourism consultancy</strong>, partnering only with 
              <strong>licensed and accredited healthcare institutions</strong> that meet both <strong>national and international medical standards</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Column 1: Multiple Partners */}
            <div className="p-8 border border-[#9B7E3E]/40 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,126,62,0.5)] text-center h-[180px] flex flex-col justify-center bg-white/80">
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">Multiple Partners</h3>
              <p className="text-gray-700 text-sm">
                Collaborating with a wide range of accredited and licensed healthcare institutions across Turkey.
              </p>
            </div>
            
            {/* Column 2: Accredited Clinics */}
            <div className="p-8 border border-[#9B7E3E]/40 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,126,62,0.5)] text-center h-[180px] flex flex-col justify-center bg-white/80">
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">Accredited Clinics</h3>
              <p className="text-gray-700 text-sm">
                Partner facilities meet national licensing requirements and international accreditation standards.
              </p>
            </div>
            
            {/* Column 3: Transparent Coordination */}
            <div className="p-8 border border-[#9B7E3E]/40 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,126,62,0.5)] text-center h-[180px] flex flex-col justify-center bg-white/80">
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">Transparent Coordination</h3>
              <p className="text-gray-700 text-sm">
                RevissaWay ensures clients receive clear, ethical, and transparent guidance at every stage.
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
                  Accredited Medical Partners
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  RevissaWay cooperates only with internationally accredited and licensed clinics, ensuring patients are connected to verified, trusted, and professional healthcare providers.
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
                  Experienced Consultants
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team provides professional guidance and coordination, helping clients navigate every step of their medical journey with confidence.
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
                  Transparent and Affordable
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Patients receive premium-quality care through RevissaWay's trusted network at transparent and competitive costs, often up to 70% lower than in Western countries.
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
                  Easy International Access
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Turkey offers convenient travel connections, simplified visa processes, and multilingual assistance for global visitors.
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
                  Comprehensive Experience
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  RevissaWay combines professional medical coordination with Turkey's cultural richness, providing patients a comfortable and memorable journey from arrival to recovery.
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
                  Complete Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From initial consultation to post-treatment follow-up, our team provides continuous support and coordination throughout your medical journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Grid - Moved from Why Turkey */}
      <section className="w-full bg-gradient-to-b from-white to-[#FFF8DC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">
                Cost Advantage
              </h3>
              <p className="text-gray-700">
                Save up to 70% compared to Australian and New Zealand prices while receiving the same quality of care from internationally trained specialists.
              </p>
            </div>

            <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">
                JCI Accreditation
              </h3>
              <p className="text-gray-700">
                All partner clinics are internationally accredited by Joint Commission International (JCI) and meet the highest global healthcare standards.
              </p>
            </div>

            <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-4">👨‍⚕️</div>
              <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">
                Expert Surgeons
              </h3>
              <p className="text-gray-700">
                Turkish surgeons perform thousands of procedures annually, gaining unparalleled experience and expertise in aesthetic and reconstructive surgery.
              </p>
            </div>
          </div>

          {/* Statistics Section - Moved from Why Turkey (3 items only) */}
          <div className="bg-gradient-to-r from-[#9B7E3E]/10 to-[#f5e9cc]/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Türkiye by the Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                  1,500,000+
                </div>
                <p className="text-gray-700">
                  Medical Tourists Annually
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#9B7E3E] mb-2">JCI</div>
                <p className="text-gray-700">
                  Accredited Hospitals
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                  #1
                </div>
                <p className="text-gray-700">
                  Hair Transplant Destination
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

