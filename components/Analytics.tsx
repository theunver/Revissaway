"use client";

import Script from "next/script";

export default function Analytics() {
  // Replace these with your actual tracking IDs
  const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your Google Analytics 4 ID
  const GOOGLE_ADS_ID = "AW-XXXXXXX"; // Replace with your Google Ads ID (optional)
  const GOOGLE_ADS_CONVERSION_LABEL = "abcd1234"; // Replace with your conversion label
  const META_PIXEL_ID = "XXXXXXXXXXXXXXX"; // Replace with your Meta Pixel ID

  return (
    <>
      {/* Google Analytics 4 (GA4) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // GA4 Configuration
          gtag('config', '${GA4_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
          
          // Google Ads Configuration (if you have Google Ads)
          ${GOOGLE_ADS_ID !== 'AW-XXXXXXX' ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
          
          // Google Ads Conversion Tracking Helper Function
          window.trackLeadSubmission = function() {
            if (typeof gtag !== 'undefined' && '${GOOGLE_ADS_ID}' !== 'AW-XXXXXXX') {
              gtag('event', 'conversion', {
                'send_to': '${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}',
                'event_callback': function() {
                  console.log('Conversion tracked: Lead_Submission');
                }
              });
            }
          };
          
          // GA4 Event Tracking Helper
          window.trackGA4Event = function(eventName, params) {
            if (typeof gtag !== 'undefined') {
              gtag('event', eventName, params);
            }
          };
          
          // Meta Pixel Event Tracking Helper
          window.trackMetaEvent = function(eventName, params) {
            if (typeof fbq !== 'undefined') {
              fbq('track', eventName, params);
            }
          };
          
          // Meta Pixel WhatsApp Contact Tracking
          window.trackWhatsAppContact = function() {
            if (typeof fbq !== 'undefined') {
              fbq('track', 'Contact', {
                method: 'WhatsApp'
              });
              console.log('Meta Pixel tracked: Contact (WhatsApp)');
            }
          };
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

