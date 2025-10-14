"use client";

export default function WhyTurkeyPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8DC] to-white">
      {/* Hero Section with Video Background */}
  <div className="relative w-full h-[70vh] overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover absolute inset-0"
          src="/videos/aboutbanner.mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Why Turkey?
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Discover why thousands choose Turkey for world-class aesthetics and care
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Portrait Video (replaces portrait image) */}
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover object-center rounded-xl shadow-md"
            >
              <source src="/videos/002bane.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              World-Class Medical Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              RevissaWay is a trusted health tourism brand that works in collaboration with internationally accredited and licensed medical and aesthetic clinics across Turkey. RevissaWay does not provide medical treatment directly; it acts solely as a professional intermediary, ensuring that patients are connected only with certified hospitals, surgical centers, and clinics specialized in dental and aesthetic care.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Through these partnerships, patients gain access to qualified physicians, experienced surgeons, and multidisciplinary healthcare teams. This network combines world-class clinical expertise, evidence-based medical practices, advanced technology, and genuine Turkish hospitality — providing patients with a safe, transparent, and professionally coordinated treatment journey from their initial consultation to full recovery.
            </p>
          </div>
        </div>

        {/* New Split Section - Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Care Journey
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              From the moment you reach out to RevissaWay, every step of your medical journey is carefully coordinated with precision and care. Our dedicated team ensures seamless communication between you and our partner clinics, handling all logistics including travel arrangements, accommodation bookings, and appointment scheduling.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              We believe that quality healthcare extends beyond the procedure itself. Through our extensive network of accredited facilities and experienced medical professionals, we provide comprehensive support that encompasses pre-treatment consultations, during-procedure care, and thorough post-treatment follow-up — ensuring your complete peace of mind throughout your health tourism experience.
            </p>
          </div>

          {/* Image - Right Side */}
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
            <img 
              src="/images/p2.jpg" 
              alt="Comprehensive Medical Care in Turkey" 
              className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover object-center rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Why RevissaWay Section */}
        <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose RevissaWay?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Accredited Partners Only
                </h4>
                <p className="text-gray-700">
                  We work exclusively with JCI-accredited clinics and licensed medical professionals.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Full Coordination
                </h4>
                <p className="text-gray-700">
                  From consultation to recovery, we handle every detail of your medical journey.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Transparent Pricing
                </h4>
                <p className="text-gray-700">
                  All-inclusive packages with no hidden fees - transfers, accommodation, and aftercare included.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  Dedicated Support
                </h4>
                <p className="text-gray-700">
                  Your personal coordinator is available 24/7 throughout your entire journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

