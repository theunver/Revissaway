// About page paragraphs with inline emphasis. EN = original copy (unchanged); TR = faithful translation.
// REVIEW:claim — accreditation / licensing / compliance / reputation statements (evidence pending, Batch 3 Group 3).
import type { ReactNode } from "react";

export const rich: { en: Record<"p1" | "p2" | "p3", ReactNode>; tr: Record<"p1" | "p2" | "p3", ReactNode> } = {
  en: {
    p1: (
      <>
        RevissaWay operates in close collaboration with <strong>accredited, licensed, and internationally recognized medical partners across Turkey</strong>.
        Each clinic is carefully selected for its <strong>high ethical standards</strong>, <strong>advanced medical technology</strong>,
        <strong>experienced specialists</strong>, and <strong>proven record of patient satisfaction</strong>.
      </>
    ),
    p2: (
      <>
        At RevissaWay, our goal is not only to connect clients with medical treatments but to create a <strong>comfortable, safe, and fully supported health travel experience</strong>.
        From initial consultation and clinic matching to accommodation and transportation coordination, we ensure that every stage of the journey
        is managed with <strong>transparency, professionalism, and trust</strong>.
      </>
    ),
    p3: (
      <>
        Our mission is to <strong>bridge clients from Australia and New Zealand</strong> with Turkey&apos;s most reputable and trusted healthcare providers,
        delivering a <strong>personalized, ethical, and internationally compliant medical experience</strong>.
        RevissaWay acts solely as an <strong>independent health tourism consultancy</strong>, partnering only with
        <strong>licensed and accredited healthcare institutions</strong> that meet both <strong>national and international medical standards</strong>.
      </>
    ),
  },
  tr: {
    // REVIEW:claim
    p1: (
      <>
        RevissaWay, <strong>Türkiye genelindeki akredite, lisanslı ve uluslararası alanda tanınan tıbbi partnerlerle</strong> yakın iş birliği içinde çalışır.
        Her klinik; <strong>yüksek etik standartları</strong>, <strong>ileri tıbbi teknolojisi</strong>,{" "}
        <strong>deneyimli uzmanları</strong> ve <strong>kanıtlanmış hasta memnuniyeti geçmişi</strong> gözetilerek özenle seçilir.
      </>
    ),
    p2: (
      <>
        RevissaWay olarak amacımız, danışanlarımızı yalnızca tıbbi tedavilerle buluşturmak değil; aynı zamanda <strong>konforlu, güvenli ve her aşamada desteklenen bir sağlık seyahati deneyimi</strong> sunmaktır.
        İlk konsültasyon ve klinik eşleştirmeden konaklama ve ulaşım koordinasyonuna kadar sürecin her aşamasının{" "}
        <strong>şeffaflık, profesyonellik ve güvenle</strong> yönetilmesini sağlarız.
      </>
    ),
    // REVIEW:claim
    p3: (
      <>
        Misyonumuz, <strong>Avustralya ve Yeni Zelanda&apos;daki danışanları</strong> Türkiye&apos;nin en saygın ve güvenilir sağlık hizmeti sağlayıcılarıyla buluşturarak{" "}
        <strong>kişiye özel, etik ve uluslararası standartlara uygun bir tıbbi deneyim</strong> sunmaktır.
        RevissaWay yalnızca <strong>bağımsız bir sağlık turizmi danışmanlığı</strong> olarak faaliyet gösterir ve yalnızca{" "}
        <strong>hem ulusal hem de uluslararası tıbbi standartları karşılayan</strong> <strong>lisanslı ve akredite sağlık kuruluşlarıyla</strong> iş birliği yapar.
      </>
    ),
  },
};
