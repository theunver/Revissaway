import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/cosmetic-surgery",
  title: "Cosmetic Surgery in Turkey from Australia – Rhinoplasty, Facelift, BBL | RevissaWay",
  description:
    "Information on rhinoplasty, face and neck lift, tummy tuck, liposuction, BBL, breast surgery and mummy makeover with independent providers in Türkiye, coordinated from Australia by RevissaWay. Every procedure carries risks.",
});

export default function CosmeticSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
