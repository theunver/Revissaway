import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/why-turkey",
  title: "Why Turkey for Treatment? Planning Your Trip from Australia | RevissaWay",
  description:
    "Why do Australians go to Turkey for hair transplants, dental work and cosmetic surgery? A practical guide to what to check before you enquire, before you travel and after you return home.",
});

export default function WhyTurkeyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
