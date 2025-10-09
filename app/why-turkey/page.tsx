"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function WhyTurkeyPage() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8DC] to-white">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hakkinda-logo.png"
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/aboutbanner.mp4"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold">
            {language === 'en' ? 'Why Turkey?' : 'Neden Türkiye?'}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            {language === 'en'
              ? 'Discover why thousands choose Turkey for world-class aesthetics and care'
              : 'Binlerce kişinin neden dünya standartlarında estetik ve bakım için Türkiye\'yi seçtiğini keşfedin'}
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
              preload="metadata"
              className="w-full h-full object-cover"
              src="/videos/8955660-uhd_3840_2160_24fps.mp4"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === 'en' ? 'World-Class Medical Excellence' : 'Dünya Standardında Medikal Mükemmellik'}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {language === 'en'
                ? 'EstheWay is a trusted health tourism brand that works in collaboration with internationally accredited and licensed medical and aesthetic clinics across Turkey. EstheWay does not provide medical treatment directly; it acts solely as a professional intermediary, ensuring that patients are connected only with certified hospitals, surgical centers, and clinics specialized in dental and aesthetic care.'
                : 'EstheWay, Türkiye genelinde uluslararası akredite ve lisanslı tıbbi ve estetik kliniklerle işbirliği içinde çalışan güvenilir bir sağlık turizmi markasıdır. EstheWay doğrudan tıbbi tedavi sağlamaz; yalnızca profesyonel bir aracı olarak hareket eder ve hastaların yalnızca sertifikalı hastaneler, cerrahi merkezler ve diş ile estetik bakım konusunda uzmanlaşmış kliniklerle bağlantı kurmasını sağlar.'}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {language === 'en'
                ? 'Through these partnerships, patients gain access to qualified physicians, experienced surgeons, and multidisciplinary healthcare teams. This network combines world-class clinical expertise, evidence-based medical practices, advanced technology, and genuine Turkish hospitality — providing patients with a safe, transparent, and professionally coordinated treatment journey from their initial consultation to full recovery.'
                : 'Bu ortaklıklar sayesinde hastalar, kalifiye doktorlara, deneyimli cerrahlara ve multidisipliner sağlık ekiplerine erişim sağlar. Bu ağ, dünya standartlarında klinik uzmanlık, kanıta dayalı tıbbi uygulamalar, ileri teknoloji ve gerçek Türk misafirperverliğini birleştirir - hastalara ilk konsültasyondan tam iyileşmeye kadar güvenli, şeffaf ve profesyonelce koordine edilmiş bir tedavi yolculuğu sunar.'}
            </p>
          </div>
        </div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">
              {language === 'en' ? 'Cost Advantage' : 'Maliyet Avantajı'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Save up to 70% compared to Australian and New Zealand prices while receiving the same quality of care from internationally trained specialists.'
                : 'Uluslararası eğitimli uzmanlardan aynı kalitede bakım alırken Avustralya ve Yeni Zelanda fiyatlarına kıyasla %70\'e varan tasarruf sağlayın.'}
            </p>
          </div>

          <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4">🏥</div>
            <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">
              {language === 'en' ? 'JCI Accreditation' : 'JCI Akreditasyonu'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'All partner clinics are internationally accredited by Joint Commission International (JCI) and meet the highest global healthcare standards.'
                : 'Tüm partner klinikler Joint Commission International (JCI) tarafından uluslararası akredite edilmiştir ve en yüksek küresel sağlık standartlarını karşılar.'}
            </p>
          </div>

          <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-5xl mb-4">👨‍⚕️</div>
            <h3 className="text-2xl font-semibold text-[#9B7E3E] mb-3">
              {language === 'en' ? 'Expert Surgeons' : 'Uzman Cerrahlar'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Turkish surgeons perform thousands of procedures annually, gaining unparalleled experience and expertise in aesthetic and reconstructive surgery.'
                : 'Türk cerrahlar yılda binlerce prosedür gerçekleştirerek estetik ve rekonstrüktif cerrahide benzersiz deneyim ve uzmanlık kazanır.'}
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-[#9B7E3E]/10 to-[#f5e9cc]/30 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {language === 'en' ? 'Türkiye by the Numbers' : 'Rakamlarla Türkiye'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                <AnimatedCounter target={1500000} suffix="+" duration={2500} />
              </div>
              <p className="text-gray-700">
                {language === 'en' ? 'Medical Tourists Annually' : 'Yıllık Medikal Turist'}
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#9B7E3E] mb-2">JCI</div>
              <p className="text-gray-700">
                {language === 'en' ? 'Accredited Hospitals' : 'Akredite Hastaneler'}
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                <AnimatedCounter target={70} suffix="%" duration={2000} />
              </div>
              <p className="text-gray-700">
                {language === 'en' ? 'Cost Savings' : 'Maliyet Tasarrufu'}
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#9B7E3E] mb-2">
                <AnimatedCounter target={1} prefix="#" duration={1500} />
              </div>
              <p className="text-gray-700">
                {language === 'en' ? 'Hair Transplant Destination' : 'Saç Ekimi Destinasyonu'}
              </p>
            </div>
          </div>
        </div>

        {/* Why EstheWay Section */}
        <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {language === 'en' ? 'Why Choose EstheWay?' : 'Neden EstheWay?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {language === 'en' ? 'Accredited Partners Only' : 'Sadece Akredite Partnerler'}
                </h4>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'We work exclusively with JCI-accredited clinics and licensed medical professionals.'
                    : 'Yalnızca JCI akredite klinikler ve lisanslı tıbbi profesyonellerle çalışıyoruz.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {language === 'en' ? 'Full Coordination' : 'Tam Koordinasyon'}
                </h4>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'From consultation to recovery, we handle every detail of your medical journey.'
                    : 'Konsültasyondan iyileşmeye kadar tıbbi yolculuğunuzun her detayını yönetiyoruz.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {language === 'en' ? 'Transparent Pricing' : 'Şeffaf Fiyatlandırma'}
                </h4>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'All-inclusive packages with no hidden fees - transfers, accommodation, and aftercare included.'
                    : 'Gizli ücret yok - transferler, konaklama ve sonrası bakım dahil her şey dahil paketler.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {language === 'en' ? 'Dedicated Support' : 'Özel Destek'}
                </h4>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Your personal coordinator is available 24/7 throughout your entire journey.'
                    : 'Kişisel koordinatörünüz tüm yolculuğunuz boyunca 7/24 hizmetinizdedir.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

