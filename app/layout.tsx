import type { Metadata } from "next";
import Script from "next/script";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalDisclaimer from "@/components/GlobalDisclaimer";
import Analytics from "@/components/Analytics";
import ConsentBanner from "@/components/ConsentBanner";
import { ConsentProvider } from "@/contexts/ConsentContext";
// import TranslationOverlayWrapper from "@/components/TranslationOverlayWrapper";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    path: "/",
    title: "Treatment in Turkey from Australia – Hair, Cosmetic & Dental | RevissaWay",
    description:
      "RevissaWay is an Australian-based coordination service helping patients from Australia and New Zealand explore hair transplant, cosmetic surgery and dental treatment with independent healthcare providers in Türkiye.",
  }),
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
  other: {
    'geo.region': 'AU, NZ',
    'geo.placename': 'Australia, New Zealand',
    'facebook-domain-verification': 'knjdf967wkbfnojvoneqycherufakb',
  },
  verification: {
    google: '_8urZPE4UoCqVJf2e8zLMc-ln5xd2cAWCuBmHuQS_Uk',
  },
};

// Self-hosted at build time (no request to Google from visitors). It stays a late
// fallback in the font stacks in globals.css, exactly as with the former CSS @import.
const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-noto-thai",
});

// Single Organization entity for the whole site. Only facts shown on the site: RevissaWay is a
// coordination service (not a medical provider), so no MedicalBusiness / medicalSpecialty markup.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "RevissaWay",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Australian-based health tourism coordination service connecting patients from Australia and New Zealand with independent healthcare providers in Türkiye. RevissaWay does not provide medical treatment.",
  telephone: "+61411854929",
  email: "info@revissaway.com.au",
  areaServed: ["AU", "NZ"],
  sameAs: [
    "https://www.instagram.com/revissaway",
    "https://www.facebook.com/profile.php?id=61582103925829",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61411854929",
    contactType: "customer service",
    areaServed: ["AU", "NZ"],
    availableLanguage: ["English", "Turkish"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // data-scroll-behavior keeps Next.js <=15 behaviour: smooth in-page scrolling (globals.css)
    // but instant scroll-to-top on route changes.
    <html lang="en" data-scroll-behavior="smooth" className={notoSansThai.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ConsentProvider>
        {/* Consent-gated analytics: GA4 / Meta Pixel load only after opt-in, never on treatment pages */}
        <Analytics />

        <LanguageProvider>
          {/* Translation Overlay - TEMPORARILY DISABLED */}
          {/* <TranslationOverlayWrapper /> */}
          
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

          {/* Consent banner needs the active language for its (draft) wording */}
          <ConsentBanner />
        </LanguageProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
