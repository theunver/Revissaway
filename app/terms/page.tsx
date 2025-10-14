"use client";

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="text-lg text-gray-700">
            Please read these terms carefully before using RevissaWay services
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
                Terms of Use
              </h2>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Last updated:</strong> {currentMonthYear}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                By using this website, you agree to the following terms and conditions.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                1. General Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                RevissaWay is an independent health tourism coordination platform connecting patients from Australia and New Zealand with accredited clinics in Türkiye. We are not a medical provider.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                2. Medical Disclaimer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                All medical advice, diagnosis, and procedures are performed solely by licensed healthcare professionals at partner clinics. RevissaWay does not provide medical treatment or guarantee medical outcomes.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                3. User Responsibility
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                You agree to provide accurate information when submitting consultation requests. RevissaWay is not liable for any errors caused by incorrect or incomplete data.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                4. Fees and Payments
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Where applicable, service fees or commissions are transparently disclosed prior to engagement. RevissaWay does not collect medical service payments directly.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                5. Limitation of Liability
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                RevissaWay shall not be held responsible for any medical, financial, or travel issues arising from clinic-patient arrangements.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                6. Governing Law
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                These terms are governed by the laws of Australia.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                7. Contact
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms, contact:
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
                Kullanım Şartları
              </h2>
              
              <p className="text-sm text-gray-600 mb-6">
                <strong>Son güncelleme:</strong> {currentMonthYear}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                1. Genel Bilgiler
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                RevissaWay, Avustralya ve Yeni Zelanda'daki hastaları Türkiye'deki akredite kliniklerle buluşturan bağımsız bir sağlık turizmi koordinasyon platformudur. Tıbbi hizmet sağlayıcısı değildir.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                2. Tıbbi Sorumluluk Reddi
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Tüm tıbbi teşhis, tavsiye ve işlemler yalnızca partner kliniklerdeki lisanslı uzmanlar tarafından gerçekleştirilir. RevissaWay tıbbi tedavi sunmaz ve tıbbi sonuç garantisi vermez.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                3. Kullanıcı Sorumluluğu
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Danışmanlık formu doldururken doğru bilgi vermekle yükümlüsünüz. Yanlış bilgi sonucu oluşabilecek hatalardan RevissaWay sorumlu tutulamaz.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                4. Ücretler ve Ödemeler
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Geçerli olduğunda hizmet ücretleri veya komisyonlar işlem öncesinde şeffaf şekilde belirtilir. RevissaWay tıbbi hizmet ödemelerini doğrudan tahsil etmez.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                5. Sorumluluk Sınırlaması
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                RevissaWay, klinik-hasta ilişkisi kapsamında doğabilecek tıbbi, finansal veya seyahat kaynaklı sorunlardan sorumlu değildir.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                6. Yürürlükteki Hukuk
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bu şartlar Avustralya yasalarına tabidir.
              </p>

              <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">
                7. İletişim
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bu şartlarla ilgili sorularınız için bizimle iletişime geçebilirsiniz:
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
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>Important Notice:</strong> By using RevissaWay's coordination services, you acknowledge that:
          </p>
          <ul className="text-gray-700 text-sm text-left max-w-3xl mx-auto space-y-2">
            <li>• RevissaWay acts solely as an intermediary between patients and clinics</li>
            <li>• All medical decisions and procedures are the responsibility of licensed medical professionals at partner clinics</li>
            <li>• You should seek independent medical advice before undertaking any medical procedure</li>
            <li>• Travel and medical insurance is strongly recommended</li>
            <li>• All contracts for medical services are between you and the clinic, not RevissaWay</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

