"use client";

import { useState } from "react";

export default function CosmeticSurgeryPage() {
  const whatsappLink = "https://wa.me/61000000000";
  const [processExpanded, setProcessExpanded] = useState(false);

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
      <section className="relative h-screen flex items-center justify-center text-center">
        {/* Background image */}
        <img
          src="/images/banner2.jpg"
          alt="Esthetic Surgery Applications Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40"></div>

        {/* Text content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white border-b-4 border-[#9B7E3E] inline-block pb-2">
            Esthetic Surgery Applications
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Some of the areas our Aesthetic, Plastic, and Reconstructive Surgeons specialize in are listed below.
          </p>
        </div>
      </section>

      {/* Inside Our Partner Clinics Section */}
      <section className="bg-gradient-to-b from-[#fffaf3] to-[#f8f5f0] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Inside Our Partner Clinics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Procedure Video 1 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <video 
              src="/videos/esthetic1.mp4"
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
              src="/videos/esthetic2.mp4"
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
              src="/videos/esthetic3.mp4"
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
              src="/videos/esthetic4.mp4"
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
            <div className="relative animate-fadeIn order-2 md:order-1">
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#fffaf3] to-[#f8f5f0] rounded-3xl rotate-2" />
              <div className="relative">
                <img
                  src="/images/foto002.png"
                  alt="Aesthetic surgery facilities in Turkey"
                  className="w-full h-[480px] sm:h-[560px] md:h-[620px] lg:h-[680px] object-cover rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: SEO text content */}
            <div className="space-y-5 animate-fadeIn order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                How Our Partner Clinics Differ from Conventional Hair Transplant Centers
              </h2>

              <p className="text-gray-700 leading-relaxed">
                A truly <strong className="text-gray-900 font-semibold">personalized hair transplant experience</strong> is at the heart of our philosophy.
                Each patient receives <strong className="text-gray-900 font-semibold">exclusive one-to-one care</strong>, ensuring comfort, safety, and natural results throughout every step — from consultation to aftercare.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We accept only <strong className="text-gray-900 font-semibold">1–2 patients per day</strong>, allowing our medical team to focus completely on individual needs and maintain the highest standard of service.
                Every detail is thoughtfully arranged — even small touches such as providing <strong className="text-gray-900 font-semibold">portable Wi-Fi devices</strong> so patients always feel connected, safe, and comfortable during their stay in Turkey.
              </p>

              <p className="text-gray-700 leading-relaxed">
                One of the most valued advantages is our <strong className="text-gray-900 font-semibold">complimentary sedation hair transplant service</strong>, which ensures a completely painless and relaxed procedure.
                Sedation allows patients to enjoy a stress-free experience while achieving <strong className="text-gray-900 font-semibold">high graft survival rates</strong> and <strong className="text-gray-900 font-semibold">natural density</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed">
                All procedures are performed in a <strong className="text-gray-900 font-semibold">fully equipped private hospital</strong>, where hygiene, safety, and professionalism meet international medical standards.
                This approach elevates the <strong className="text-gray-900 font-semibold">hair transplant experience in Turkey</strong>, combining world-class expertise with genuine personal care — for results that look natural and last a lifetime.
              </p>

              
            </div>
          </div>
        </div>
      </section>

      {/* Rhinoplasty Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Rhinoplasty</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Rhinoplasty, often known as a 'nose job,' is among the most common plastic surgery procedures. 
              It refines and enhances the aesthetics of the nose, harmonizing with facial features.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">7 Days</div>
                <div className="text-sm text-gray-600">Accommodation</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">1.5–3 Hours</div>
                <div className="text-sm text-gray-600">Operation</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">1–2 Weeks</div>
                <div className="text-sm text-gray-600">Recovery</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">5 Days</div>
                <div className="text-sm text-gray-600">Follow Up</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src="/icons/rhinoplasty.jpg" 
              alt="Rhinoplasty" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Face Lift Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div>
            <img 
              src="/icons/Face%20Lift.jpg" 
              alt="Face Lift" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Face Lift</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              A facelift (rhytidectomy) is a surgical procedure that improves visible signs of aging by lifting and tightening facial tissues.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">10 Days</div>
                <div className="text-sm opacity-90">Accommodation</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">2–4 Hours</div>
                <div className="text-sm opacity-90">Operation</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">1–2 Weeks</div>
                <div className="text-sm opacity-90">Recovery</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">5 Days</div>
                <div className="text-sm opacity-90">Follow Up</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neck Lift Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Neck Lift</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              A neck lift is a highly effective procedure for reducing visible signs of aging in the neck and jawline. 
              It removes excess skin and tightens underlying tissues, restoring a smoother, firmer, and more youthful appearance.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">8 Days</div>
                <div className="text-sm text-gray-600">Accommodation</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">2–3 Hours</div>
                <div className="text-sm text-gray-600">Operation Duration</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">2–3 Weeks</div>
                <div className="text-sm text-gray-600">Recovery Period</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">5 Days</div>
                <div className="text-sm text-gray-600">Follow-Up Visit</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src="/icons/Neck%20Lift.jpg" 
              alt="Neck Lift" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Mummy Makeover Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div>
            <img 
              src="/icons/Mummy%20Makeover.jpg" 
              alt="Mummy Makeover" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mummy Makeover</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Rediscover your pre-pregnancy physique with our Mummy Makeover package. 
              Enjoy rejuvenation, contouring, and enhancement performed by expert surgeons, 
              at a fraction of the cost compared to Australia or New Zealand.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">8 Days</div>
                <div className="text-sm opacity-90">Accommodation</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">4–6 Hours</div>
                <div className="text-sm opacity-90">Operation Duration</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">2–3 Weeks</div>
                <div className="text-sm opacity-90">Recovery Period</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">5 Days</div>
                <div className="text-sm opacity-90">Follow-Up Visit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tummy Tuck Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Tummy Tuck</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              A tummy tuck (abdominoplasty) enhances the contour and firmness of the abdomen. 
              This procedure removes excess fat and sagging skin while tightening underlying tissues, 
              resulting in a smoother and stronger abdominal profile. 
              It addresses both cosmetic concerns and reconstructive needs.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">8 Days</div>
                <div className="text-sm text-gray-600">Accommodation</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">2–4 Hours</div>
                <div className="text-sm text-gray-600">Operation Duration</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">6 Weeks</div>
                <div className="text-sm text-gray-600">Recovery Period</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">5 Days</div>
                <div className="text-sm text-gray-600">Follow-Up Visit</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src="/icons/Tummy%20Tuck.jpg" 
              alt="Tummy Tuck" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Liposuction Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Image */}
          <div>
            <img 
              src="/icons/Liposuction.jpg" 
              alt="Liposuction" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Liposuction</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Liposuction is a surgical technique designed to remove excess fat from specific areas of the body. 
              Commonly performed for body contouring, it targets the abdomen, hips, thighs, and buttocks, 
              achieving results that diet and exercise alone may not provide.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">4 Days</div>
                <div className="text-sm opacity-90">Accommodation</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">1–3 Hours</div>
                <div className="text-sm opacity-90">Operation Duration</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">2–3 Weeks</div>
                <div className="text-sm opacity-90">Recovery Period</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">5 Days</div>
                <div className="text-sm opacity-90">Follow-Up Visit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brazilian Butt Lift Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Brazilian Butt Lift</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              A Brazilian Butt Lift (BBL) is a cosmetic procedure designed to reshape and enhance the buttocks. 
              It involves removing excess fat and skin, and depending on the patient's needs, fat can be reduced 
              or transferred to create a more defined and natural look.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">7 Days</div>
                <div className="text-sm text-gray-600">Accommodation</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">2–5 Hours</div>
                <div className="text-sm text-gray-600">Operation Duration</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">1–2 Weeks</div>
                <div className="text-sm text-gray-600">Recovery Period</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">5–7 Days</div>
                <div className="text-sm text-gray-600">Follow-Up Visit</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div>
            <img 
              src="/icons/Brazilian%20Butt%20Lift.jpg" 
              alt="Brazilian Butt Lift" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Breast Reduction Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div>
            <img 
              src="/icons/Breast%20Reduction.jpg" 
              alt="Breast Reduction" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Breast Reduction</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Breast reduction (reduction mammoplasty) reduces excessively large breasts 
              by removing extra skin and tissue. It helps balance body proportions, 
              relieves physical discomfort, and restores a natural contour.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">6 Days</div>
                <div className="text-sm opacity-90">Accommodation</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">2–4 Hours</div>
                <div className="text-sm opacity-90">Operation Duration</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">2–6 Weeks</div>
                <div className="text-sm opacity-90">Recovery Period</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl">5 Days</div>
                <div className="text-sm opacity-90">Follow-Up Visit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breast Implants Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Breast Implants</h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Breast augmentation enhances the shape and volume of the breasts 
              using silicone implants. It is one of the most common cosmetic 
              surgeries worldwide, offering natural and lasting results.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">6 Days</div>
                <div className="text-sm text-gray-600">Accommodation</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">1–3 Hours</div>
                <div className="text-sm text-gray-600">Operation Duration</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">2 Weeks</div>
                <div className="text-sm text-gray-600">Recovery Period</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-2xl text-[#9B7E3E]">5 Days</div>
                <div className="text-sm text-gray-600">Follow-Up Visit</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <img 
              src="/icons/Breast%20Implants.jpg" 
              alt="Breast Implants" 
              className="rounded-lg shadow-lg object-cover w-full h-full"
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
            <h3 className="font-semibold text-xl mb-3">Who Is Suitable?</h3>
            <p className="text-sm text-gray-700">
              Suitable for individuals in good general health seeking to improve or restore facial and body appearance.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">Recovery Process</h3>
            <p className="text-sm text-gray-700">
              Recovery varies by procedure; most patients resume daily activities within 1–2 weeks.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md bg-gray-50 hover:shadow-xl transition-shadow duration-300">
            <div className="text-[#9B7E3E] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-semibold text-xl mb-3">Expected Results</h3>
            <p className="text-sm text-gray-700">
              Natural and long-lasting aesthetic outcomes achieved through professional surgical techniques.
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
                Discover More About the Process
              </h2>

              <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-3">
                Understanding your cosmetic surgery journey is key to achieving the best outcome. 
                Learn how RevissaWay guides you through consultation, operation, and recovery phases.
              </p>

              <div className="text-center">
                <button
                  onClick={() => setProcessExpanded(!processExpanded)}
                  className="text-[#bfa980] font-medium hover:underline transition-all focus:outline-none"
                  aria-expanded={processExpanded}
                  aria-controls="process-details"
                >
                  {processExpanded ? "Read Less ▲" : "Read More ▼"}
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
                    During your consultation, expert surgeons assess your aesthetic goals, medical history, 
                    and design the optimal surgical plan tailored to your body structure and expectations.
                  </p>
                  <p className="leading-relaxed">
                    The operation itself is performed using advanced surgical techniques in accredited facilities 
                    to ensure natural results, precise execution, and minimal downtime with maximum safety.
                  </p>
                  <p className="leading-relaxed">
                    Post-surgery, RevissaWay provides continuous support and follow-up care to help you 
                    achieve long-lasting and satisfying aesthetic results throughout your recovery journey.
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

