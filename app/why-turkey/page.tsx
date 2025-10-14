"use client";

import AnimatedCounter from "@/components/AnimatedCounter";

export default function WhyTurkeyPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8DC] to-white">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/banner-placeholder.jpg"
          className="opacity-0 transition-opacity duration-700 w-full h-full object-cover absolute inset-0"
          src="/videos/aboutbanner.mp4"
          onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
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
          {/* Video */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/banner-placeholder.jpg"
              className="opacity-0 transition-opacity duration-700 w-full h-full object-cover"
              src="/videos/aboutbanner.mp4"
              onLoadedData={(e) => e.currentTarget.classList.remove('opacity-0')}
            />
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

        {/* Key Advantages Grid */}
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

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-[#9B7E3E]/10 to-[#f5e9cc]/30 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Türkiye by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                <AnimatedCounter target={1500000} suffix="+" duration={2500} />
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
                <AnimatedCounter target={70} suffix="%" duration={2000} />
              </div>
              <p className="text-gray-700">
                Cost Savings
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                <AnimatedCounter target={1} prefix="#" duration={1500} />
              </div>
              <p className="text-gray-700">
                Hair Transplant Destination
              </p>
            </div>
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

