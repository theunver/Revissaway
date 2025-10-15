"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HairTransplantPage() {
  const { language } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/61000000000";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does the procedure take?",
      answer: "On average, the hair transplant procedure takes 6 to 8 hours. This may vary depending on the number of grafts to be transplanted."
    },
    {
      question: "Do the transplanted hairs fall out?",
      answer: "Yes, it's normal for transplanted hair to fall out within 2-4 weeks after the procedure. This is called 'shock loss' and is a natural part of the process. New, permanent hair will begin to grow from the transplanted follicles within 3-4 months."
    },
    {
      question: "When will my hair start to grow?",
      answer: "New hair growth typically begins 3-4 months after the procedure. You'll see noticeable improvement by 6 months, with full results visible after 12-18 months."
    },
    {
      question: "Will I feel pain during the procedure?",
      answer: "No, the procedure is performed under local anesthesia, making it virtually painless. You may feel slight pressure during the procedure, but no significant pain. Some mild discomfort may occur during the recovery period."
    },
    {
      question: "Can women also undergo hair transplant?",
      answer: "Yes, absolutely. Hair transplant procedures are suitable for both men and women experiencing hair loss. The technique and approach may vary based on individual hair loss patterns."
    },
    {
      question: "When can I return to work?",
      answer: "Most patients can return to work within 3-5 days after the procedure. However, it's recommended to avoid strenuous physical activities for at least 2 weeks."
    }
  ];

  const methods = [
    {
      id: 0,
      title: "DHI Hair Transplant",
      shortName: "DHI",
      description: "Direct Hair Implantation (DHI) is an advanced technique where hair follicles are implanted directly into the recipient area using a specialized implanter pen (Choi pen). This method allows for precise control over the depth, angle, and direction of each implanted hair follicle.",
      features: [
        "No need for prior channel opening - grafts are placed directly",
        "High density can be achieved, especially in small areas",
        "Minimal handling of grafts reduces trauma",
        "Faster recovery time compared to traditional methods",
        "Performed under local anesthesia by specialist surgeons",
        "Natural-looking results with proper hairline design",
      ],
      iconPath: "/icons/DHI.svg",
    },
    {
      id: 1,
      title: "FUE Hair Transplant",
      shortName: "FUE",
      description: "Follicular Unit Extraction (FUE) is one of the most popular hair transplant techniques worldwide. Individual hair follicles are extracted from the donor area (typically the back of the head) and carefully transplanted to the recipient area where hair loss has occurred.",
      features: [
        "Minimal scarring - no linear scar like strip method",
        "Faster healing and recovery period",
        "Can be performed on various body areas",
        "Suitable for both men and women",
        "Natural-looking, permanent results",
        "One of the most commonly used methods globally",
      ],
      iconPath: "/icons/FUE.svg",
    },
    {
      id: 2,
      title: "Sapphire Hair Transplant",
      shortName: "Sapphire",
      description: "Sapphire FUE is an enhanced version of the traditional FUE technique. Instead of steel blades, sapphire-tipped blades are used to create the recipient channels. These ultra-sharp, smooth blades allow for more precise incisions, potentially leading to better healing and more natural results.",
      features: [
        "Uses sapphire blades for creating channels",
        "Provides more precise and smaller incisions",
        "May support faster healing and less tissue damage",
        "Reduced risk of complications",
        "Higher density placement possible",
        "An advanced, premium form of FUE",
      ],
      iconPath: "/icons/SAPPHIRE.svg",
    },
    {
      id: 3,
      title: "Beard Transplant",
      shortName: "Beard",
      description: "Beard transplantation is a specialized procedure designed for men who want to achieve fuller, denser facial hair. Hair follicles are harvested from the scalp (donor area) and carefully transplanted to areas of the beard where growth is sparse, patchy, or absent.",
      features: [
        "Ideal for men with patchy or thin beard growth",
        "Hair follicles taken from the scalp (usually back of head)",
        "Natural-looking beard density and shape",
        "Duration depends on the number of grafts required",
        "Permanent results when performed correctly",
        "Can be combined with mustache or goatee design",
      ],
      iconPath: "/icons/BEARD.svg",
    },
    {
      id: 4,
      title: "TDF Technique (Two Days FUE)",
      shortName: "TDF",
      description:
        "TDF (Two Days FUE) is an advanced hair transplantation technique designed for patients with extensive hair loss and a strong donor area. Unlike traditional methods that require 6–8 months between sessions, TDF allows two consecutive transplantation sessions performed over two days — achieving faster, denser, and more natural results. This innovative approach is ideal for individuals with limited time who want to return to work or daily life quickly after the procedure.",
      features: [
        "Two sessions performed on consecutive days",
        "No need to wait months between procedures",
        "High graft survival rate and natural density",
        "Shorter downtime and faster recovery",
        "Effective for large bald areas (front and back)",
        "Performed by specialized surgical teams",
      ],
      iconPath: "/icons/TDF%20Technique.svg",
    },
    {
      id: 5,
      title: "Female Hair Transplant",
      shortName: "Female",
      description: "Female hair transplantation is specifically tailored to address hair loss patterns unique to women. Unlike male pattern baldness, women typically experience diffuse thinning rather than complete baldness. The procedure aims to restore volume and density while maintaining a natural, feminine hairline.",
      features: [
        "Designed for female hair loss patterns (diffuse thinning)",
        "Hairline design suited to female facial features",
        "Aims to restore natural volume and density",
        "Careful consideration of existing hair",
        "Can be combined with other hair restoration treatments",
        "Customized approach for each individual",
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
        className="fixed bottom-6 right-6 z-50 bg-[#9B7E3E] hover:bg-[#B8965A] text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 font-semibold flex items-center gap-2"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp
      </a>

      {/* Banner Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        {/* Background image */}
        <img
          src="/images/hair-banner.jpg"
          alt="Hair Transplant in Turkey"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40"></div>

        {/* Text content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white border-b-4 border-[#9B7E3E] inline-block pb-2">
            Hair Transplant in Turkey
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Restore your natural look with RevissaWay's advanced hair transplant methods and certified clinics in Turkey.
          </p>
        </div>
      </section>

      {/* Performed Procedures Section */}
      <section className="bg-gradient-to-b from-[#fffaf3] to-[#f8f5f0] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Inside Our Partner Clinics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Procedure Video 1 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <video 
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
            <video 
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
            <video 
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
            <video 
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 sticky top-24">
              {methods.map((method) => (
                <button
                  key={method.id}
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
              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {methods[selectedMethod].title}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                {methods[selectedMethod].description}
              </p>

              {/* Features List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-[#9B7E3E] rounded-full"></div>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {methods[selectedMethod].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-800">
                      <svg className="w-6 h-6 text-[#9B7E3E] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

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
                  Get Free Consultation
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
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                How Our Partner Clinics Differ from Conventional Hair Transplant Centers
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                At the heart of RevissaWay's philosophy lies a truly personalized hair transplant experience.
                Each patient receives one-to-one care, ensuring comfort, safety, and natural results at every step — from consultation to post-treatment follow-up.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our partner clinics accept only 1–2 patients per day, allowing the medical team to focus entirely on individual needs and maintain the highest standards of service. Every detail is carefully planned to ensure patients feel safe, connected, and comfortable during their stay in Türkiye — even small touches like portable Wi-Fi devices enhance the overall experience.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                One of our key advantages is the complimentary sedation hair transplant service, providing a completely pain-free and relaxing procedure while achieving high graft survival rates and natural density.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                All procedures are performed in fully equipped private hospitals that meet international medical standards.
                RevissaWay combines world-class medical expertise with genuine personalized care, ensuring safe, natural, and long-lasting results for every patient.
              </p>
            </div>

            {/* Right Column - Image with Background Shape */}
            <div className="relative animate-fadeIn">
              {/* Beige Background Shape */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#fffaf3] to-[#f8f5f0] rounded-3xl transform rotate-2"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img
                  src="/images/foto001.png"
                  alt="Modern hair transplant facilities in Turkey"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-md"
                  loading="lazy"
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
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-[#9B7E3E]/20 overflow-hidden shadow-md">
                  <button
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
              About Hair Transplant
            </h2>

            {/* YouTube Video Embed */}
            <div className="mb-8">
              <div className="rounded-xl overflow-hidden shadow-sm aspect-video lg:h-[320px]">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/QvzQlwSnzTQ"
                  title="Hair Transplant Procedure"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-xs text-gray-400 text-center mt-2">
                Informational purposes only
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
                    <p className="text-xs text-gray-600 font-medium">Who Can Have It?</p>
                    <p className="text-sm font-bold text-gray-900">Adults over 18</p>
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
                    <p className="text-xs text-gray-600 font-medium">Techniques Used</p>
                    <p className="text-sm font-bold text-gray-900">FUE, DHI, Sapphire</p>
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
                    <p className="text-xs text-gray-600 font-medium">Anesthesia Type</p>
                    <p className="text-sm font-bold text-gray-900">Local – Painless</p>
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
                    <p className="text-xs text-gray-600 font-medium">Accommodation</p>
                    <p className="text-sm font-bold text-gray-900">2 Days</p>
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
                    <p className="text-xs text-gray-600 font-medium">Operation Duration</p>
                    <p className="text-sm font-bold text-gray-900">6–8 Hours</p>
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
                    <p className="text-xs text-gray-600 font-medium">Recovery Period</p>
                    <p className="text-sm font-bold text-gray-900">7–14 Days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://revissaway.vercel.app/hair-transplant",
            "name": "RevissaWay Health & Aesthetics",
            "alternateName": "RevissaWay",
            "url": "https://revissaway.vercel.app/hair-transplant",
            "image": "https://revissaway.vercel.app/og/og-hair-transplant.jpg",
            "logo": "https://revissaway.vercel.app/og/revissaway-logo.png",
            "description": "RevissaWay connects you with Turkey's most trusted hair transplant experts offering DHI, FUE, and Sapphire techniques.",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Level 10, 440 Collins Street",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "postalCode": "3000",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-37.817",
              "longitude": "144.957"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+61 400 123 456",
              "contactType": "customer service",
              "areaServed": ["AU", "NZ", "TR"],
              "availableLanguage": ["English", "Turkish"]
            },
            "medicalSpecialty": "Hair Replacement",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "128",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "2500",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "url": "https://revissaway.vercel.app/hair-transplant",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "2500",
                "valueAddedTaxIncluded": true
              }
            },
            "review": {
              "@type": "Review",
              "name": "Great experience with RevissaWay",
              "author": {
                "@type": "Person",
                "name": "John Carter",
                "image": "https://revissaway.vercel.app/og/reviewer-john-carter.jpg"
              },
              "datePublished": "2025-02-20",
              "reviewBody": "RevissaWay made my hair transplant journey in Turkey seamless and professional. Everything from travel coordination to clinic experience was top-notch.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            "founder": {
              "@type": "Person",
              "name": "Mehmet Ali Ünver"
            },
            "sameAs": [
              "https://www.instagram.com/estheway",
              "https://www.youtube.com/@estheway",
              "https://www.facebook.com/estheway"
            ]
          }),
        }}
      />
    </main>
  );
}
