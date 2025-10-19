import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Aesthetics Turkey | Veneers, Implants, Hollywood Smile | RevissaWay",
  description: "Transform your smile with modern dental treatments in Turkey. Hollywood smile, veneers, implants, and crowns at internationally accredited clinics. Up to 70% savings.",
  keywords: ["dental aesthetics Turkey", "Hollywood smile Turkey", "dental veneers Turkey", "dental implants Turkey", "cosmetic dentistry Turkey", "dental crowns Turkey", "smile makeover Turkey"],
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
    title: "Dental Aesthetics Turkey | RevissaWay",
    description: "Professional dental aesthetic treatments at accredited clinics in Turkey. Hollywood smile, veneers, implants at affordable prices.",
    url: "https://www.revissaway.com.au/dental-aesthetics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Aesthetics Turkey | RevissaWay",
    description: "Transform your smile with modern dental treatments in Turkey.",
  },
};

export default function DentalAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

