"use client";

import OptimizedVideo from "@/components/OptimizedVideo";
import ResponsiveImage from "@/components/ResponsiveImage";
import Link from "next/link";
import type { ReactNode } from "react";
import { useLanguage, useLocalized } from "@/contexts/LanguageContext";
import { content } from "./content";

// Contextual internal links to the treatment pages inside existing copy (first match of each phrase, in order).
const TREATMENT_LINKS = {
  en: [["hair", "/hair-transplant"], ["cosmetic", "/cosmetic-surgery"], ["dental treatment", "/dental-aesthetics"]],
  tr: [["saç", "/hair-transplant"], ["estetik", "/cosmetic-surgery"], ["diş tedavisi", "/dental-aesthetics"]],
} as const;

function withTreatmentLinks(text: string, lang: "en" | "tr"): ReactNode {
  const out: ReactNode[] = [];
  let pos = 0;
  for (const [phrase, href] of TREATMENT_LINKS[lang]) {
    const i = text.indexOf(phrase, pos);
    if (i < 0) continue;
    out.push(text.slice(pos, i));
    out.push(<Link key={href} href={href} className="text-[#9B7E3E] underline hover:no-underline">{phrase}</Link>);
    pos = i + phrase.length;
  }
  out.push(text.slice(pos));
  return out;
}

// Planning-guide steps: bold "1. Before you enquire." label; "Smartraveller" links to the official site.
function guideStep(text: string): ReactNode {
  const m = text.match(/^(\d\.\s[^.]+\.)\s([\s\S]*)$/);
  const label = m ? m[1] : "";
  const body = m ? m[2] : text;
  const i = body.indexOf("Smartraveller");
  const rest: ReactNode = i < 0 ? body : (
    <>
      {body.slice(0, i)}
      <a href="https://www.smartraveller.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#9B7E3E] underline hover:no-underline">Smartraveller</a>
      {body.slice(i + "Smartraveller".length)}
    </>
  );
  return label ? <><strong className="text-gray-900">{label}</strong> {rest}</> : rest;
}

export default function WhyTurkeyPage() {
  const c = useLocalized(content);
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8DC] to-white">
      {/* Hero Section with Video Background */}
  <div className="relative w-full h-[70vh] overflow-hidden bg-black">
        <OptimizedVideo
          src="/videos/aboutbanner.mp4"
          className="w-full h-full object-cover absolute inset-0"
          autoPlay
          loop
          muted
          playsInline
          priority={true}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-semibold">
            {c.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            {c.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Portrait Video (replaces portrait image) */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <OptimizedVideo
              src="/videos/002bane_optimized.mp4"
              className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover object-center rounded-xl shadow-md"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {c.excellenceTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {withTreatmentLinks(c.excellenceP1, language === "tr" ? "tr" : "en")}
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              {c.excellenceP2}
            </p>
          </div>
        </div>

        {/* New Split Section - Text Left, Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content - Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {c.journeyTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {guideStep(c.journeyP1)}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {guideStep(c.journeyP2)}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {guideStep(c.journeyP3)}
            </p>
          </div>

          {/* Image - Right Side */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ResponsiveImage
              src="/images/whyphoto.jpg" 
               
              alt={c.imageAlt} 
              className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover object-center rounded-xl shadow-md"
              style={{ opacity: 1 }}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>

        {/* Why RevissaWay Section */}
        <div className="bg-white border border-[#9B7E3E]/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            {c.whyTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {c.accreditedTitle}
                </h3>
                <p className="text-gray-700">
                  {c.accreditedText}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {c.coordinationTitle}
                </h3>
                <p className="text-gray-700">
                  {c.coordinationText}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {c.pricingTitle}
                </h3>
                <p className="text-gray-700">
                  {c.pricingText}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {c.supportTitle}
                </h3>
                <p className="text-gray-700">
                  {c.supportText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

