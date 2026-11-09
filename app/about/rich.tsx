// About page paragraphs with inline emphasis. SEO-2: factual wording (no accreditation/reputation claims); TR = faithful translation.
import type { ReactNode } from "react";

export const rich: { en: Record<"p1" | "p2" | "p3", ReactNode>; tr: Record<"p1" | "p2" | "p3", ReactNode> } = {
  en: {
    p1: (
      <>
        RevissaWay works with <strong>more than one independent clinic and hospital across Turkey</strong>, so we&apos;re not tied to a single institution.
        We pass on each clinic&apos;s <strong>assessment, treatment proposal and quotation</strong>, and you can ask the clinic about its
        <strong>qualifications, licences and accreditation</strong> before you decide.
      </>
    ),
    p2: (
      <>
        At RevissaWay, our goal is not only to connect clients with medical treatments but to create a <strong>comfortable and well-organised health travel experience</strong>.
        From your first enquiry and clinic matching to accommodation and transportation coordination, we ensure that every stage of the journey
        is managed with <strong>transparency, professionalism, and trust</strong>.
      </>
    ),
    p3: (
      <>
        Our mission is to make it easier for <strong>people in Australia and New Zealand</strong> to explore treatment in Turkey,
        with <strong>clear information and honest communication</strong> at every step.
        RevissaWay acts solely as an <strong>independent health tourism coordination service</strong>; our service is free for patients, and
        treatment is provided by <strong>independent healthcare providers</strong> that patients pay directly.
      </>
    ),
  },
  tr: {
    p1: (
      <>
        RevissaWay, <strong>Türkiye genelinde birden fazla bağımsız klinik ve hastaneyle</strong> çalışır; tek bir kuruma bağlı değildir.
        Her kliniğin <strong>değerlendirmesini, tedavi önerisini ve fiyat teklifini</strong> size iletiriz; karar vermeden önce kliniğe{" "}
        <strong>niteliklerini, lisanslarını ve akreditasyonunu</strong> sorabilirsiniz.
      </>
    ),
    p2: (
      <>
        RevissaWay olarak amacımız, danışanlarımızı yalnızca tıbbi tedavilerle buluşturmak değil; aynı zamanda <strong>konforlu ve iyi organize edilmiş bir sağlık seyahati deneyimi</strong> sunmaktır.
        İlk talebiniz ve klinik eşleştirmeden konaklama ve ulaşım koordinasyonuna kadar sürecin her aşamasının{" "}
        <strong>şeffaflık, profesyonellik ve güvenle</strong> yönetilmesini sağlarız.
      </>
    ),
    p3: (
      <>
        Misyonumuz, <strong>Avustralya ve Yeni Zelanda&apos;daki insanların</strong> Türkiye&apos;deki tedavi seçeneklerini{" "}
        <strong>açık bilgi ve dürüst iletişimle</strong> her adımda kolayca değerlendirebilmesini sağlamaktır.
        RevissaWay yalnızca <strong>bağımsız bir sağlık turizmi koordinasyon hizmeti</strong> olarak faaliyet gösterir; hizmetimiz hastalar için ücretsizdir ve
        tedavi, hastaların doğrudan ödeme yaptığı <strong>bağımsız sağlık hizmeti sağlayıcıları</strong> tarafından verilir.
      </>
    ),
  },
};
