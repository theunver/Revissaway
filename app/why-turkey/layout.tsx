import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/why-turkey",
  title: "Why Turkey for Treatment? | RevissaWay",
  description:
    "Why patients from Australia and New Zealand consider Turkey for hair, cosmetic and dental treatment, and how RevissaWay coordinates their enquiries.",
});

export default function WhyTurkeyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
