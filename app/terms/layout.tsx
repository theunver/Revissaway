import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | RevissaWay Health & Aesthetics",
  description: "Review the terms and conditions for using RevissaWay. Transparent, compliant, and patient-focused health tourism coordination for Australia and New Zealand.",
  keywords: ["terms of use", "terms and conditions", "RevissaWay terms", "medical tourism terms", "health coordination terms", "Australian consumer law"],
  openGraph: {
    title: "Terms of Use | RevissaWay Health & Aesthetics",
    description: "Review the terms and conditions for using RevissaWay. Transparent and patient-focused health tourism coordination.",
    url: "https://estheway.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

