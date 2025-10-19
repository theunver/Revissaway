import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Türkiye? | RevissaWay Health & Aesthetics",
  description: "Learn why Türkiye is the global leader in medical tourism. RevissaWay connects Australian and New Zealand patients with accredited clinics and experienced doctors.",
  keywords: ["medical tourism Turkey", "why Turkey", "JCI accredited clinics Turkey", "hair transplant Turkey", "cosmetic surgery Turkey", "dental Turkey", "RevissaWay"],
  openGraph: {
    title: "Why Türkiye? | RevissaWay Health & Aesthetics",
    description: "Learn why Türkiye is the global leader in medical tourism. RevissaWay connects Australian and New Zealand patients with accredited clinics and experienced doctors.",
    url: "https://www.revissaway.com.au/why-turkey",
  },
};

export default function WhyTurkeyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

