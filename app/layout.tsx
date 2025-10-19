import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalDisclaimer from "@/components/GlobalDisclaimer";
import Analytics from "@/components/Analytics";
import TranslationOverlayWrapper from "@/components/TranslationOverlayWrapper";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.revissaway.com.au"),
  title: "Hair Transplant & Esthetic Surgery Applications in Turkey | RevissaWay",
  description: "Connect with Türkiye's most trusted clinics for hair transplant, cosmetic, and dental aesthetics. RevissaWay serves patients from Australia and New Zealand with expert coordination and transparency.",
  keywords: ["hair transplant Turkey", "cosmetic surgery Turkey", "dental aesthetics Turkey", "medical tourism Australia", "health tourism Turkey", "RevissaWay"],
  authors: [{ name: "RevissaWay" }],
  creator: "RevissaWay",
  publisher: "RevissaWay",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    url: "https://www.revissaway.com.au",
    title: "RevissaWay | Health & Aesthetics Tourism",
    description: "Premium aesthetic and health tourism services in Turkey. Connecting Australia, New Zealand, and Turkey.",
    siteName: "RevissaWay",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RevissaWay - Health & Aesthetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RevissaWay | Health & Aesthetics Tourism",
    description: "Premium aesthetic and health tourism services in Turkey.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.revissaway.com.au",
    languages: {
      'en-US': 'https://www.revissaway.com.au',
      'en-AU': 'https://www.revissaway.com.au',
      'en-NZ': 'https://www.revissaway.com.au',
      'tr-TR': 'https://www.revissaway.com.au',
    },
  },
  other: {
    'geo.region': 'AU, NZ',
    'geo.placename': 'Australia, New Zealand',
    'geo.position': '-33.8688;151.2093',
    'ICBM': '-33.8688,151.2093',
    'facebook-domain-verification': 'knjdf967wkbfnojvoneqycherufakb',
  },
  verification: {
    google: '_8urZPE4UoCqVJf2e8zLMc-ln5xd2cAWCuBmHuQS_Uk',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1538401167354551');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1538401167354551&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        {/* Analytics Tracking */}
        <Analytics />
        
        <LanguageProvider>
          {/* Translation Overlay */}
          <TranslationOverlayWrapper />
          
          {/* Global Navbar */}
          <Navbar />
          
          {/* Add top padding to account for fixed navbar */}
          <div className="pt-16">
            {children}
          </div>

          {/* Global Footer */}
          <Footer />

          {/* Global Disclaimer */}
          <GlobalDisclaimer />
        </LanguageProvider>
      </body>
    </html>
  );
}
