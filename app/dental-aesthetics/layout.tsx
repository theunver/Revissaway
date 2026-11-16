import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/dental-aesthetics",
  title: "Dental Implants & Veneers in Turkey from Australia | RevissaWay",
  description:
    "Information on dental implants, crowns, veneers and Hollywood smile treatment with dental clinics in Turkey, coordinated for patients from Australia and New Zealand by RevissaWay.",
});

export default function DentalAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
