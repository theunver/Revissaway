import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/cosmetic-surgery",
  title: "Plastic & Cosmetic Surgery in Turkey from Australia | RevissaWay",
  description:
    "Information on rhinoplasty, face and neck lift, tummy tuck, liposuction, BBL, breast surgery and mummy makeover with surgeons in Turkey, coordinated from Australia by RevissaWay. Every procedure carries risks.",
});

export default function CosmeticSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
