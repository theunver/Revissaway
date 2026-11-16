import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalDisclaimer from "@/components/GlobalDisclaimer";
import Analytics from "@/components/Analytics";
// import TranslationOverlayWrapper from "@/components/TranslationOverlayWrapper";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { pageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    path: "/",
    title: "Hair, Dental & Cosmetic Treatment in Turkey from Australia | RevissaWay",
    description:
      "RevissaWay is an Australian-based coordination service helping patients from Australia and New Zealand explore hair transplants, dental implants and veneers, and cosmetic surgery with clinics in Turkey.",
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

// Single, factual Organization entity (no ratings, reviews, prices, address or medical specialty).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "RevissaWay",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Australian-based health tourism coordination service connecting patients from Australia and New Zealand with independent healthcare providers in Turkey. RevissaWay does not provide medical treatment.",
  telephone: "+61481334272",
  email: "info@revissaway.com.au",
  areaServed: ["AU", "NZ"],
  sameAs: [
    "https://www.instagram.com/revissaway",
    "https://www.facebook.com/profile.php?id=61582103925829",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+61481334272",
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
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Analytics Tracking (includes Meta Pixel and GA4) */}
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
        </LanguageProvider>
      </body>
    </html>
  );
}
