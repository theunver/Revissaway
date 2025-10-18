"use client";

export default function DentalAestheticsPage() {
  const whatsappLink = "https://wa.me/61483898360";

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
      <section
        className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center"
        style={{ 
          backgroundImage: "url('/images/banner-dental.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          transform: 'scaleX(-1)'
        }}
      >
        <div className="absolute inset-0 bg-black/30" style={{ transform: 'scaleX(-1)' }}></div>
        <div className="relative z-10 px-6" style={{ transform: 'scaleX(-1)' }}>
          <h1 className="text-5xl md:text-6xl font-bold text-white border-b-4 border-[#9B7E3E] inline-block pb-2">
            Dental Aesthetics
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Transform your smile with modern dental treatments at internationally accredited clinics in Turkey.
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
              src="/videos/dental-video1.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
            />
          </div>

          {/* Procedure Video 2 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <video 
              src="/videos/dental-video2.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
            />
          </div>

          {/* Procedure Video 3 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <video 
              src="/videos/dental-video3.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
            />
          </div>

          {/* Procedure Video 4 */}
          <div className="rounded-xl overflow-hidden shadow-[0_0_40px_10px_rgba(255,215,0,0.25)] transition-all duration-500">
            <video 
              src="/videos/dental-video4.mp4"
              className="object-cover w-full h-[320px] md:h-[380px] lg:h-[420px] cursor-pointer [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:hover:opacity-100"
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="metadata"
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
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
            <video
              src="/videos/dental-collage.mp4"
              poster="/images/dental-placeholder.jpg"
              controls
              preload="metadata"
              className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover object-center rounded-xl shadow-md"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Excellence in Dental Aesthetics
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              RevissaWay's partner dental clinics deliver advanced aesthetic dentistry solutions in fully equipped hospitals, combining medical precision with artistic design. Every treatment is carried out by accredited experts, ensuring long-lasting, natural, and confident smiles.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* 1️⃣ Dental Implants & Restorations Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Dental Implants & Restorations</h2>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">Dental Implants</h3>
            <p className="mb-4 text-gray-700">
              Most effective solution for missing teeth with natural look, permanent result, and high success rates.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">1–3 Hours</div>
                <div className="text-sm text-gray-600">Operation Duration</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">5–7 Days</div>
                <div className="text-sm text-gray-600">Recovery</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">5 Days</div>
                <div className="text-sm text-gray-600">Follow-up</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-8 text-gray-900">Dental Crowns</h3>
            <p className="mb-4 text-gray-700">
              Restorative caps to renew tooth shape, size, and strength. Materials include porcelain, ceramic, metal, or combinations.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">2–4 Hours</div>
                <div className="text-sm text-gray-600">Operation Duration</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">5–7 Days</div>
                <div className="text-sm text-gray-600">Recovery</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg text-[#9B7E3E]">5 Days</div>
                <div className="text-sm text-gray-600">Follow-up</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="/images/Dental Implants.jpg"
              alt="Dental Implants"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 2️⃣ Dental Veneers & Cosmetic Enhancements Section */}
      <section className="bg-white text-black py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Image */}
          <div>
            <img
              src="/images/Dental Veneers.jpg"
              alt="Dental Veneers"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Dental Veneers & Cosmetic Enhancements</h2>

            <h3 className="text-xl font-semibold mb-2 text-gray-900">Dental Veneers</h3>
            <p className="mb-4 text-gray-700">
              Custom-made thin shells to cover front teeth, protecting and enhancing aesthetics, boosting confidence.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg">2–4 Hours</div>
                <div className="text-sm opacity-90">Operation Duration</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg">5–7 Days</div>
                <div className="text-sm opacity-90">Recovery</div>
              </div>
              <div className="bg-[#9B7E3E] text-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="font-bold text-lg">5 Days</div>
                <div className="text-sm opacity-90">Follow-up</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 mt-8 text-gray-900">Hollywood Smile</h3>
            <p className="mb-4 text-gray-700">
              Comprehensive smile makeover with veneers and advanced dental technology for a radiant, picture-perfect smile.
            </p>
          </div>
        </div>
      </section>

      {/* Dental Aesthetics Before & After Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left: Text Content */}
            <div className="md:w-1/2 text-left space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Dental Aesthetics Before & After</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Discover the transformation achieved through our partner clinics' dental aesthetic procedures.
                Each treatment is designed to enhance both function and appearance, delivering healthy and confident smiles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From dental implants to Hollywood smiles, our accredited partners use state-of-the-art technology and proven techniques to create natural-looking, long-lasting results.
              </p>
            </div>

            {/* Right: Auto-Scrolling Images */}
            <div className="md:w-1/2 overflow-x-auto overflow-y-hidden rounded-xl shadow-lg bg-white p-2 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-[#9B7E3E] [&::-webkit-scrollbar-thumb]:rounded-full hover:[&>div]:animation-paused">
              <div className="flex gap-4 animate-[scroll_15s_linear_infinite]">
                <img 
                  src="/images/dental001.jpg" 
                  alt="Dental Aesthetics Before & After 1" 
                  className="w-[380px] h-[280px] object-cover rounded-lg flex-shrink-0" 
                />
                <img 
                  src="/images/dental002.jpg" 
                  alt="Dental Aesthetics Before & After 2" 
                  className="w-[380px] h-[280px] object-cover rounded-lg flex-shrink-0" 
                />
                <img 
                  src="/images/dental003.jpg" 
                  alt="Dental Aesthetics Before & After 3" 
                  className="w-[380px] h-[280px] object-cover rounded-lg flex-shrink-0" 
                />
                <img 
                  src="/images/dental004.jpg" 
                  alt="Dental Aesthetics Before & After 4" 
                  className="w-[380px] h-[280px] object-cover rounded-lg flex-shrink-0" 
                />
                {/* Duplicate for seamless loop */}
                <img 
                  src="/images/dental001.jpg" 
                  alt="Dental Aesthetics Before & After 1" 
                  className="w-[380px] h-[280px] object-cover rounded-lg flex-shrink-0" 
                />
                <img 
                  src="/images/dental002.jpg" 
                  alt="Dental Aesthetics Before & After 2" 
                  className="w-[380px] h-[280px] object-cover rounded-lg flex-shrink-0" 
                />
              </div>
            </div>
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
              Anyone seeking to improve dental health, restore missing teeth, or enhance smile aesthetics with professional care.
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
              Recovery varies by treatment; most patients resume normal activities within days to a week.
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
              Natural-looking, long-lasting dental restorations achieved through modern techniques and materials.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#FFF8DC] to-[#f8f5f0] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a free consultation and personalized treatment plan.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
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

