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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Comprehensive Care Journey in Turkey
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choosing Turkey for medical tourism means accessing world-class healthcare that combines advanced medical expertise, internationally accredited hospitals, and exceptional hospitality.
              RevissaWay acts as your trusted connection point — coordinating every aspect of your medical travel experience with certified hospitals and licensed aesthetic or dental clinics across Turkey.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From your first consultation to post-treatment follow-up, every step is planned with precision and transparency. Our coordination team ensures smooth communication between you and our partner clinics, assisting with travel arrangements, accommodation options, and appointment scheduling.
            </p>
            <p className="text-gray-700 leading-relaxed">
              RevissaWay does not provide medical treatment directly. Instead, we facilitate your access to accredited medical institutions that meet global healthcare standards, ensuring safety, quality, and peace of mind throughout your treatment journey in Turkey.
            </p>
          </div>

          {/* Image - Right Side */}
          <div className="rounded-2xl overflow-hidden shadow-2xl animate-fadeIn">
            <img 
              src="/images/whyphoto.jpg" 
              alt="Medical tourism in Turkey" 
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

