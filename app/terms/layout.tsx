import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/terms",
  title: "Terms of Use | RevissaWay",
  description:
    "The terms that apply when you use the RevissaWay website and health tourism coordination service, including our role as an intermediary.",
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
