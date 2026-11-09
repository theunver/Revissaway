import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/hair-transplant",
  title: "Hair Transplant in Turkey from Australia – Methods & What to Ask | RevissaWay",
  description:
    "Considering a hair transplant in Turkey? Compare FUE, DHI, Sapphire and TDF methods, see what to ask your clinic before you book, and make a free enquiry coordinated from Australia by RevissaWay.",
});

export default function HairTransplantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
