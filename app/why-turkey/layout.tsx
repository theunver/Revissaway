import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/why-turkey",
  title: "Travelling from Australia to Turkey for Treatment | RevissaWay",
  description:
    "Why patients from Australia and New Zealand consider Türkiye for hair, cosmetic and dental treatment, and how RevissaWay coordinates enquiries with independent healthcare providers.",
});

export default function WhyTurkeyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
