import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/consultation",
  title: "Free Consultation | RevissaWay",
  description:
    "Request a free consultation about hair transplant, cosmetic surgery or dental treatment in Turkey, coordinated from Australia by RevissaWay.",
});

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
