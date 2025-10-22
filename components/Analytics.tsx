"use client";

import Script from "next/script";

export default function Analytics() {
  // Google Analytics 4 Measurement ID
  const GA4_MEASUREMENT_ID = "G-Y7E9BLZXRX"; // RevissaWay GA4 ID
  const META_PIXEL_ID = "1538401167354551"; // Meta Pixel ID

  return (
    <>
      {/* Google Analytics 4 (GA4) - G-Y7E9BLZXRX */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_MEASUREMENT_ID}');

          // Safe GA4 Event Tracking Helper
          window.trackGA4Event = function(eventName, params = {}) {
            try {
              if (typeof gtag !== 'undefined') {
                gtag('event', eventName, params);
                console.log('✅ GA4 Event Sent:', eventName, params);
              } else {
                console.warn('⚠️ GA4 not ready yet');
              }
            } catch (err) {
              console.error('GA4 Event Error:', err);
            }
          };

          // Google Ads Lead Submission Helper (placeholder)
          window.trackLeadSubmission = function() {
            try {
              console.log('✅ Lead submission tracked');
            } catch (err) {
              console.error('Lead tracking error:', err);
            }
          };

          // Meta Pixel Event Tracking Helper
          window.trackMetaEvent = function(eventName, params) {
            try {
              if (typeof fbq !== 'undefined') {
                fbq('track', eventName, params);
              }
            } catch (err) {
              console.error('Meta Pixel error:', err);
            }
          };

          // Meta Pixel WhatsApp Contact Tracking
          window.trackWhatsAppContact = function() {
            try {
              if (typeof fbq !== 'undefined') {
                fbq('track', 'Contact', {
                  method: 'WhatsApp'
                });
                console.log('Meta Pixel tracked: Contact (WhatsApp)');
              }
            } catch (err) {
              console.error('WhatsApp tracking error:', err);
            }
          };

          console.log("✅ GA4 tracking initialized safely");
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Meta Pixel Noscript Fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

