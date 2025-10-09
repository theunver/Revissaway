import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | EstheWay Health & Aesthetics",
  description: "Review the terms and conditions for using EstheWay. Transparent, compliant, and patient-focused health tourism coordination for Australia and New Zealand.",
  keywords: ["terms of use", "terms and conditions", "EstheWay terms", "medical tourism terms", "health coordination terms", "Australian consumer law"],
  openGraph: {
    title: "Terms of Use | EstheWay Health & Aesthetics",
    description: "Review the terms and conditions for using EstheWay. Transparent and patient-focused health tourism coordination.",
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

