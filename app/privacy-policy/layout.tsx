import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EstheWay Health & Aesthetics",
  description: "Learn how EstheWay collects, uses, and protects your information. Privacy-first health tourism coordination for Australia and New Zealand patients.",
  keywords: ["privacy policy", "data protection", "EstheWay privacy", "medical tourism privacy", "GDPR", "Australian Privacy Principles"],
  openGraph: {
    title: "Privacy Policy | EstheWay Health & Aesthetics",
    description: "Learn how EstheWay collects, uses, and protects your information. Privacy-first health tourism coordination.",
    url: "https://estheway.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

