import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About RevissaWay | Health Tourism Consultancy",
  description: "RevissaWay is an independent health tourism consultancy based in Australia, connecting clients from Australia and New Zealand with accredited medical and aesthetic clinics across Turkey.",
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
    title: "About RevissaWay | Health Tourism Consultancy",
    description: "RevissaWay is an independent health tourism consultancy based in Australia, connecting clients from Australia and New Zealand with accredited medical and aesthetic clinics across Turkey.",
    url: "https://revissaway.vercel.app/about",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

