import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About RevissaWay | Australian Health Tourism Coordination Service",
  description:
    "RevissaWay is an Australian-based coordination and referral service. We don't provide medical treatment; we help patients from Australia and New Zealand connect with independent healthcare providers in Turkey.",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
