"use client";

import { useEffect, useState } from "react";
import { useConsent } from "@/contexts/ConsentContext";
import { useLocalized } from "@/contexts/LanguageContext";

// DRAFT WORDING - pending legal approval (see privacy-release.json). Do not deploy to
// production until the approved Privacy Policy ships in the same release.
export default function ConsentBanner() {
  const { decided, settingsOpen, analytics, marketing, save, acceptAll, rejectAll, closeSettings } = useConsent();
  const [mounted, setMounted] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, marketing: false });
  // DRAFT legal wording (EN as implemented in Batch 3B; TR faithful translation) - REVIEW:legal
  const b = useLocalized({
    en: {
      title: "Your privacy choices",
      body: "We would like to use Google Analytics to understand how our website is used, and the Meta Pixel to measure our advertising. Both stay off unless you turn them on. They are never loaded on our treatment pages, and the details you enter in our contact form are never sent to them.",
      policy: "Privacy Policy", legend: "Choose which tools to allow",
      analytics: "Analytics", analyticsDesc: "(Google Analytics) – visit statistics with generic page names.",
      marketing: "Marketing", marketingDesc: "(Meta Pixel) – measures visits from our Facebook and Instagram advertising.",
      reject: "Reject all", save: "Save choices", choose: "Choose", accept: "Accept all", close: "Close",
    },
    tr: {
      title: "Gizlilik tercihleriniz",
      body: "Web sitemizin nasıl kullanıldığını anlamak için Google Analytics'i, reklamlarımızı ölçmek için de Meta Pixel'i kullanmak istiyoruz. Siz açmadığınız sürece ikisi de kapalı kalır. Tedavi sayfalarımızda hiçbir zaman yüklenmezler ve iletişim formumuza girdiğiniz bilgiler bu araçlara asla gönderilmez.",
      policy: "Gizlilik Politikası", legend: "İzin vereceğiniz araçları seçin",
      analytics: "Analitik", analyticsDesc: "(Google Analytics) – genel sayfa adlarıyla ziyaret istatistikleri.",
      marketing: "Pazarlama", marketingDesc: "(Meta Pixel) – Facebook ve Instagram reklamlarımızdan gelen ziyaretleri ölçer.",
      reject: "Tümünü reddet", save: "Seçimleri kaydet", choose: "Seç", accept: "Tümünü kabul et", close: "Kapat",
    },
  });

  // Render only on the client, after the stored choice has been read.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (settingsOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDraft({ analytics, marketing });
      setShowChoices(true);
    }
  }, [settingsOpen, analytics, marketing]);

  if (!mounted || (decided && !settingsOpen)) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 md:p-4"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-[#9B7E3E]/40 bg-white p-4 md:p-5 shadow-2xl text-sm text-gray-700">
        <h2 id="consent-title" className="text-base font-semibold text-gray-900 mb-1">{b.title}</h2>
        <p className="leading-relaxed">
          {b.body}{" "}
          <a href="/privacy-policy" className="text-[#9B7E3E] underline">{b.policy}</a>
        </p>

        {showChoices && (
          <fieldset className="mt-3 space-y-2">
            <legend className="sr-only">{b.legend}</legend>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consent-analytics"
                className="mt-1 accent-[#9B7E3E]"
                checked={draft.analytics}
                onChange={(e) => setDraft({ ...draft, analytics: e.target.checked })}
              />
              <span><strong className="text-gray-900">{b.analytics}</strong> {b.analyticsDesc}</span>
            </label>
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                name="consent-marketing"
                className="mt-1 accent-[#9B7E3E]"
                checked={draft.marketing}
                onChange={(e) => setDraft({ ...draft, marketing: e.target.checked })}
              />
              <span><strong className="text-gray-900">{b.marketing}</strong> {b.marketingDesc}</span>
            </label>
          </fieldset>
        )}

        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          <button type="button" onClick={rejectAll} className="px-4 py-2 rounded-lg border border-[#9B7E3E] text-[#9B7E3E] font-semibold hover:bg-[#9B7E3E]/10">
            {b.reject}
          </button>
          {showChoices ? (
            <button type="button" onClick={() => save(draft)} className="px-4 py-2 rounded-lg border border-[#9B7E3E] text-[#9B7E3E] font-semibold hover:bg-[#9B7E3E]/10">
              {b.save}
            </button>
          ) : (
            <button type="button" onClick={() => setShowChoices(true)} className="px-4 py-2 rounded-lg border border-[#9B7E3E] text-[#9B7E3E] font-semibold hover:bg-[#9B7E3E]/10">
              {b.choose}
            </button>
          )}
          <button type="button" onClick={acceptAll} className="px-4 py-2 rounded-lg bg-[#9B7E3E] hover:bg-[#B8965A] text-white font-semibold">
            {b.accept}
          </button>
          {settingsOpen && (
            <button type="button" onClick={closeSettings} className="px-4 py-2 rounded-lg text-gray-500 hover:underline">
              {b.close}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
