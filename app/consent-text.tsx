// Contact-form consent label (DRAFT legal wording, pending approval - see privacy-release.json).
// EN = wording as implemented in Batch 3B (unchanged). TR = faithful translation. REVIEW:legal for both.
import type { ReactNode } from "react";

const link = (label: string) => (
  <a href="/privacy-policy" className="text-[#9B7E3E] underline">{label}</a>
);

export const consentLabel: { en: ReactNode; tr: ReactNode } = {
  en: (
    <>
      I consent to RevissaWay collecting and using the information in this form, including health information
      (such as the treatment I am interested in and anything in my message), to respond to my enquiry. I understand
      this information is handled by RevissaWay&apos;s service providers, some of which store data outside Australia,
      as described in the {link("Privacy Policy")}.
    </>
  ),
  tr: (
    <>
      RevissaWay&apos;in, talebime yanıt verebilmek için bu formdaki bilgileri — sağlık bilgileri dahil (ilgilendiğim
      tedavi ve mesajımda yazdıklarım gibi) — toplamasına ve kullanmasına onay veriyorum. Bu bilgilerin, bazıları verileri
      Avustralya dışında saklayan RevissaWay hizmet sağlayıcıları tarafından {link("Gizlilik Politikası")}&apos;nda
      açıklandığı şekilde işlendiğini anlıyorum.
    </>
  ),
};
