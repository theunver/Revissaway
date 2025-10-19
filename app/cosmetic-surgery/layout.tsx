import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmetic Surgery Turkey | BBL, Rhinoplasty, Facelift, Breast Surgery | RevissaWay",
  description: "Expert cosmetic surgery in Turkey. Brazilian Butt Lift, rhinoplasty, breast procedures, facelift, liposuction, and more at JCI-accredited hospitals. Safe, affordable, premium care.",
  keywords: ["cosmetic surgery Turkey", "BBL Turkey", "rhinoplasty Turkey", "breast augmentation Turkey", "facelift Turkey", "liposuction Turkey", "tummy tuck Turkey", "mommy makeover Turkey"],
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
    title: "Cosmetic Surgery Turkey | RevissaWay",
    description: "World-class cosmetic surgery procedures at accredited Turkish clinics. Expert surgeons, premium care, affordable prices.",
    url: "https://www.revissaway.com.au/cosmetic-surgery",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic Surgery Turkey | RevissaWay",
    description: "Expert cosmetic surgery in Turkey with experienced surgeons.",
  },
};

export default function CosmeticSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

