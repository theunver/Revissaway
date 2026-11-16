import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy | RevissaWay",
  description:
    "How RevissaWay collects, uses and protects the personal information you share with us.",
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
