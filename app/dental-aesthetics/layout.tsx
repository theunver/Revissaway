import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/dental-aesthetics",
  title: "Dental Treatment in Turkey from Australia – Implants, Veneers, Crowns | RevissaWay",
  description:
    "Information on dental implants, crowns, veneers and Hollywood smile treatment with independent dental clinics in Türkiye, coordinated for patients from Australia and New Zealand by RevissaWay.",
});

export default function DentalAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
