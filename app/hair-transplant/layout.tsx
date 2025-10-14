import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hair Transplant Methods - DHI, FUE, Sapphire | RevissaWay",
  description: "Explore hair transplant methods including DHI, FUE, Sapphire, beard, eyebrow, and female hair transplants. Performed by specialists at accredited facilities in Turkey.",
  keywords: [
    "TDF Technique",
    "Two Days FUE",
    "Hair transplant Turkey",
    "FUE hair transplant",
    "DHI",
    "Sapphire FUE",
    "High graft survival",
    "Fast recovery",
  ],
};

export default function HairTransplantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

