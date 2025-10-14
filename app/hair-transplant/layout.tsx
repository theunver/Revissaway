import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Transplant Methods - DHI, FUE, Sapphire | RevissaWay",
  description: "Explore hair transplant methods including DHI, FUE, Sapphire, beard, eyebrow, and female hair transplants. Performed by specialists at accredited facilities in Turkey.",
};

export default function HairTransplantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

