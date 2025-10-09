"use client";

export default function PrivacyPolicyPage() {
  // Get current month and year
  const currentDate = new Date();
  const currentMonthYear = currentDate.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8DC] to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#9B7E3E]/20 to-[#f5e9cc]/30 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-700">
            How EstheWay collects, uses, and protects your information
          </p>
        </div>
      </section>

      {/* Content Section - Two Column Layout */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* English Content - Left Column */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-[#9B7E3E] pb-3">
                Privacy Policy
              </h2>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Last updated:</strong> {currentMonthYear}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At EstheWay, we respect your privacy and are committed to protecting the personal information you share with us.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                1. Information We Collect
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We only collect basic contact details (such as name, email, and phone number) when you submit an inquiry or consultation form.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                2. How We Use Your Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We use this information solely to connect you with licensed and accredited clinics in Türkiye and to coordinate your consultation.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                3. Data Security
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your data is stored securely and never shared with third parties without your explicit consent.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                4. Cookies and Analytics
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our website uses analytics tools (Google Ads, Meta Pixel) to understand user behavior and improve our services. You can disable cookies through your browser settings.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                5. Your Rights
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You can request to access, correct, or delete your personal data at any time by contacting us at{' '}
                <a href="mailto:contact@mehmetaliunvers.com" className="text-[#9B7E3E] hover:underline">
                  contact@mehmetaliunvers.com
                </a>
                .
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                6. International Data Transfers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Data may be processed in Türkiye for coordination purposes, in compliance with Australian Privacy Principles (APPs).
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                7. Contact Us
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about this Privacy Policy, contact us at:
              </p>
              <div className="bg-[#FFF8DC] p-4 rounded-lg border-l-4 border-[#9B7E3E]">
                <p className="text-gray-800 mb-2">
                  📧 <a href="mailto:contact@mehmetaliunvers.com" className="text-[#9B7E3E] hover:underline">contact@mehmetaliunvers.com</a>
                </p>
                <p className="text-gray-800">
                  📞 <a href="tel:+61483898360" className="text-[#9B7E3E] hover:underline">+61 483 898 360</a>
                </p>
              </div>
            </div>
          </div>

          {/* Turkish Content - Right Column */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-[#9B7E3E] pb-3">
                Gizlilik Politikası
              </h2>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Son güncelleme:</strong> {currentMonthYear}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                EstheWay olarak gizliliğinize saygı duyuyor ve bizimle paylaştığınız kişisel bilgilerin korunmasına büyük önem veriyoruz.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                1. Topladığımız Bilgiler
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Yalnızca ad, e-posta ve telefon gibi temel iletişim bilgilerini topluyoruz. Bu bilgiler yalnızca danışmanlık talebi oluşturduğunuzda alınır.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                2. Bilgilerin Kullanımı
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Topladığımız bilgiler, sizi Türkiye'deki lisanslı ve akredite kliniklerle buluşturmak ve danışmanlık sürecini yürütmek amacıyla kullanılır.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                3. Veri Güvenliği
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Verileriniz güvenli bir şekilde saklanır ve açık rızanız olmadan üçüncü kişilerle paylaşılmaz.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                4. Çerezler ve Analitik
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Web sitemiz, kullanıcı davranışını anlamak ve hizmetleri geliştirmek için Google Ads ve Meta Pixel gibi araçlar kullanır. Çerezleri tarayıcınızdan devre dışı bırakabilirsiniz.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                5. Haklarınız
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Kişisel verilerinize erişim, düzeltme veya silme talebinde bulunabilirsiniz. Bunun için bizimle iletişime geçin:{' '}
                <a href="mailto:contact@mehmetaliunvers.com" className="text-[#9B7E3E] hover:underline">
                  contact@mehmetaliunvers.com
                </a>
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                6. Uluslararası Veri Aktarımı
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Veriler, danışmanlık amacıyla Türkiye'de işlenebilir. Bu süreç Avustralya Gizlilik İlkeleri'ne (APPs) uygundur.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                7. İletişim
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bu politika ile ilgili sorularınız için bizimle iletişime geçin:
              </p>
              <div className="bg-[#FFF8DC] p-4 rounded-lg border-l-4 border-[#9B7E3E]">
                <p className="text-gray-800 mb-2">
                  📧 <a href="mailto:contact@mehmetaliunvers.com" className="text-[#9B7E3E] hover:underline">contact@mehmetaliunvers.com</a>
                </p>
                <p className="text-gray-800">
                  📞 <a href="tel:+61483898360" className="text-[#9B7E3E] hover:underline">+61 483 898 360</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 bg-[#9B7E3E]/10 border border-[#9B7E3E]/30 rounded-xl p-6 text-center">
          <p className="text-gray-700 text-sm leading-relaxed">
            <strong>Important:</strong> EstheWay is a coordination service and not a medical provider. 
            We connect patients with licensed clinics in Türkiye. All medical procedures are performed by our partner clinics, 
            and they maintain their own privacy policies regarding medical data.
          </p>
        </div>
      </section>
    </div>
  );
}

