"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useConsent } from "@/contexts/ConsentContext";
import { genericTitle, isTreatmentPath, sanitizeEventParams, sanitizeLocation, sanitizeReferrer } from "@/lib/tracking";

const GA4_MEASUREMENT_ID = "G-Y7E9BLZXRX";
const META_PIXEL_ID = "1538401167354551";

/**
 * Privacy-first tag loading:
 * - Nothing loads before consent (GA4 = "analytics" choice, Meta Pixel = "marketing" choice).
 * - Neither tag ever loads on medical treatment pages.
 * - GA4 receives a generic page title, a sanitised URL (utm_* only) and an origin-only referrer;
 *   Google Signals and ad personalisation are off.
 * - Meta automatic configuration (button-click / page-metadata collection) is off.
 * - Only fixed event names/labels are sent; form contents are never sent.
 * The site has no client-side navigation (plain <a> links), so each page view is a fresh document.
 */
export default function Analytics() {
  const pathname = usePathname() || "/";
  const { analytics, marketing } = useConsent();
  const treatment = isTreatmentPath(pathname);
  // Never load tags on Vercel preview/deployment URLs (*.vercel.app): test traffic must not reach
  // Google Analytics or Meta, even if a tester accepts the banner.
  const testHost = typeof window !== "undefined" && window.location.hostname.endsWith(".vercel.app");
  const gaOn = analytics && !treatment && !testHost;
  const metaOn = marketing && !treatment && !testHost;

  // Event helpers used across the site; they no-op unless the matching tag is allowed and loaded.
  useEffect(() => {
    window.trackGA4Event = (name, params = {}) => {
      if (gaOn && typeof window.gtag === "function") window.gtag("event", name, sanitizeEventParams(params));
    };
    window.trackMetaEvent = (name, params) => {
      if (metaOn && typeof window.fbq === "function") window.fbq("track", name, params);
    };
    window.trackWhatsAppContact = () => {
      if (metaOn && typeof window.fbq === "function") window.fbq("track", "Contact", { method: "WhatsApp" });
    };
    window.trackLeadSubmission = () => {};
  }, [gaOn, metaOn]);

  // Safety net: if tags were loaded in this document and a treatment page is reached without a full
  // page load, stop GA4/Meta immediately and start a clean document.
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    if (treatment && w.__rwTrackersLoaded) {
      w[`ga-disable-${GA4_MEASUREMENT_ID}`] = true;
      try {
        window.fbq?.("consent", "revoke");
      } catch {
        // ignore
      }
      window.location.reload();
    }
  }, [treatment]);

  if (typeof window === "undefined") return null;

  const gaConfig = JSON.stringify({
    page_title: genericTitle(pathname),
    page_location: sanitizeLocation(window.location.href),
    page_referrer: sanitizeReferrer(document.referrer),
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  return (
    <>
      {gaOn && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="rw-ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
window.__rwTrackersLoaded = true;
var rwCfg = ${gaConfig};
gtag('js', new Date());
gtag('set', { page_title: rwCfg.page_title, page_location: rwCfg.page_location, page_referrer: rwCfg.page_referrer });
gtag('config', '${GA4_MEASUREMENT_ID}', rwCfg);`}
          </Script>
        </>
      )}
      {metaOn && (
        <Script id="rw-meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
window.__rwTrackersLoaded = true;
fbq('set', 'autoConfig', false, '${META_PIXEL_ID}');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      )}
    </>
  );
}
