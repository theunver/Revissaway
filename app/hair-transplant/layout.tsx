import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/hair-transplant",
  title: "Hair Transplant in Turkey from Australia – FUE, DHI & Sapphire | RevissaWay",
  description:
    "Learn about FUE, DHI, Sapphire, TDF, beard and female hair transplant options with clinics in Turkey, coordinated for patients from Australia and New Zealand by RevissaWay.",
});

export default function HairTransplantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
