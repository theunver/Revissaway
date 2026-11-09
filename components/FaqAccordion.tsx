"use client";

import { useState } from "react";

// Same look and behaviour as the homepage FAQ: one answer open at a time.
// All answers are in the HTML (crawlable, accessible); collapsed ones use the native hidden attribute.
export default function FaqAccordion({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id={id} className="bg-white py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">{title}</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#9B7E3E]/30 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <button
                type="button"
                id={`${id}-question-${index + 1}`}
                aria-expanded={open === index}
                aria-controls={`${id}-answer-${index + 1}`}
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-black">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-[#9B7E3E] flex-shrink-0 ml-4 transition-transform duration-200 ${open === index ? "transform rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`${id}-answer-${index + 1}`}
                role="region"
                aria-labelledby={`${id}-question-${index + 1}`}
                hidden={open !== index}
                className="px-6 py-4 bg-gray-50 border-t border-gray-200"
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
