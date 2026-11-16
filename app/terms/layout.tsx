import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/terms",
  title: "Terms of Use | RevissaWay",
  description:
    "The terms that apply when you use the RevissaWay website and coordination service.",
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
