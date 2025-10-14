import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalDisclaimer from "@/components/GlobalDisclaimer";
import Analytics from "@/components/Analytics";
import TranslationOverlayWrapper from "@/components/TranslationOverlayWrapper";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Hair Transplant & Cosmetic Surgery in Turkey | RevissaWay",
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
    url: "https://estheway.com",
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
    canonical: "https://estheway.com",
    languages: {
      'en-US': 'https://estheway.com',
      'en-AU': 'https://estheway.com/en-au',
      'en-NZ': 'https://estheway.com/en-nz',
      'tr-TR': 'https://estheway.com/tr',
    },
  },
  other: {
    'geo.region': 'AU, NZ',
    'geo.placename': 'Australia, New Zealand',
    'geo.position': '-33.8688;151.2093',
    'ICBM': '-33.8688,151.2093',
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
