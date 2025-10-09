"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HairTransplantPage() {
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
      iconPath: "/icons/dhi.svg",
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
      iconPath: "/icons/fue.svg",
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
      iconPath: "/icons/sapphire.svg",
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
      iconPath: "/icons/beard.svg",
    },
    {
      id: 4,
      title: "Eyebrow Transplant",
      shortName: "Eyebrow",
      description: "Eyebrow transplantation is a delicate cosmetic procedure to restore or enhance eyebrow fullness. Individual hair follicles are carefully transplanted to create natural-looking, well-defined eyebrows that complement your facial features.",
      features: [
        "Suitable for thin, over-plucked, or missing eyebrows",
        "Natural exit angle and direction carefully planned",
        "Uses fine hair follicles for natural appearance",
        "Results vary based on individual hair structure",
        "Permanent solution for eyebrow restoration",
        "Customized to match facial symmetry and features",
      ],
      iconPath: "/icons/eyebrow.svg",
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
      iconPath: "/icons/female.svg",
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

      {/* Hero Banner Section */}
      <section 
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: 'url(/images/hair-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* Methods Section - Two Column Layout */}
      <section className="bg-gradient-to-b from-[#FFF8DC] to-white py-16">
        <div className="container mx-auto px-4">
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
                  <div>
                    <Image
                      src={method.iconPath}
                      alt={method.title}
                      width={64}
                      height={64}
                      priority
                      className="mx-auto mb-3"
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

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-white to-[#FFF8DC] py-16">
        <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Benefits of Hair Transplant
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Hair Style</h3>
            <p className="text-sm text-gray-600">Hair direction can be shaped.</p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Bloodless Procedure</h3>
            <p className="text-sm text-gray-600">Bleeding in the incision area is negligible.</p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No-Shave Technique</h3>
            <p className="text-sm text-gray-600">Advantage of performing a hair transplant without shaving.</p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Results</h3>
            <p className="text-sm text-gray-600">Faster recovery after hair transplant.</p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Recovery</h3>
            <p className="text-sm text-gray-600">Healing and revitalization occur more rapidly.</p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Strong Roots</h3>
            <p className="text-sm text-gray-600">Higher survival rate of transplanted hair follicles.</p>
          </div>

          {/* Benefit 7 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Painless Procedure</h3>
            <p className="text-sm text-gray-600">Less pain compared to classical methods.</p>
          </div>

          {/* Benefit 8 */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              <svg className="w-12 h-12 text-[#9B7E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Dense & Intense</h3>
            <p className="text-sm text-gray-600">Enables denser and more intensive transplants.            </p>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ and Information Section */}
      <section className="bg-gradient-to-b from-[#FFF8DC] to-white py-16">
        <div className="container mx-auto px-4">
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
              <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
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

      {/* Instagram Posts Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Instagram Post 1 */}
          <a
            href="https://www.instagram.com/p/DA6FqqVKr_X/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src="/images/1.png" 
              alt="Instagram Post 1" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Instagram Post 2 */}
          <a
            href="https://www.instagram.com/p/DJwzsTkoouU/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src="/images/2.png" 
              alt="Instagram Post 2" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Instagram Post 3 */}
          <a
            href="https://www.instagram.com/p/DEXowaZK5cZ/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src="/images/3.png" 
              alt="Instagram Post 3" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </a>

          {/* Instagram Post 4 */}
          <a
            href="https://www.instagram.com/p/DH-2Pc6oOhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-lg shadow-md overflow-hidden"
          >
            <img 
              src="/images/4.png" 
              alt="Instagram Post 4" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </a>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center mb-6">
              <img
                src="/logo.png"
                alt="EstheWay Logo"
                className="w-32 md:w-40 opacity-90 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="hover:text-[#9B7E3E] transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-[#9B7E3E] transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-sm text-gray-400 mb-4">
              © 2025 EstheWay. All rights reserved.
            </p>
            <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-6">
              <p className="text-xs text-gray-400 leading-relaxed text-center">
                <strong className="text-gray-300">Important Notice:</strong> All procedures are performed at accredited partner hospitals in Turkey by licensed medical specialists. EstheWay provides organization and consultation services only and does not provide medical services. Results may vary from person to person. Information on this website is for general informational purposes only and does not constitute medical advice. A doctor consultation is required to determine suitability for any procedure.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/" className="text-[#9B7E3E] hover:text-[#B8965A] transition-colors duration-200">
              ← Return to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
