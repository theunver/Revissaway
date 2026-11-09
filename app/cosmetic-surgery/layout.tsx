import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/cosmetic-surgery",
  title: "Plastic & Cosmetic Surgery in Turkey from Australia | RevissaWay",
  description:
    "Considering plastic or cosmetic surgery in Turkey? Learn about nose jobs (rhinoplasty), tummy tucks, mummy makeovers, breast surgery and liposuction with independent surgeons, and how to plan from Australia. Every procedure carries risks.",
});

export default function CosmeticSurgeryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
