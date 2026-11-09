import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/dental-aesthetics",
  title: "Dental Implants & Veneers in Turkey from Australia | RevissaWay",
  description:
    "Planning dental implants, veneers or crowns in Turkey? Learn how treatment is planned, what to ask before you book and how follow-up works back in Australia. Free enquiry, coordinated by RevissaWay.",
});

export default function DentalAestheticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
