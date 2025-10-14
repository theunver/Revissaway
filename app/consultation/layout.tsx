import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Consultation - RevissaWay",
  description: "Book your free consultation for hair transplant, cosmetic surgery, or dental aesthetics in Turkey.",
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

