"use client";

// Shared building blocks for the DRAFT legal pages (/privacy-policy, /terms).
// Content comes from the QA legal drafts (Privacy Policy v2, Terms of Use v2) and is NOT legally approved.
// <Pending> marks every unresolved statement. scripts/check-legal-release.mjs fails the build if any
// <Pending> remains once privacy-release.json is set to approved: true, and next.config.js already
// blocks Production builds while approved is false.
import type { ReactNode } from "react";
import privacyRelease from "@/privacy-release.json";
import { useLanguage } from "@/contexts/LanguageContext";

export const LEGAL_IS_DRAFT = privacyRelease.approved !== true;
export const LEGAL_VERSION = privacyRelease.policyVersion;

const L = {
  en: {
    pending: "Pending review",
    proposed: "Proposed wording – pending confirmation",
    draftTitle: "DRAFT – for review only",
    draftBody:
      "This document is a draft. It has not been legally approved and is not yet in effect. Items marked “Pending review” are unresolved and must not be relied on. Some sections describe proposed processes that are not yet in operation.",
    version: "Version",
    updated: "Last updated",
    updatedPending: "pending approval",
    draft: "draft",
  },
  tr: {
    pending: "İnceleme bekliyor",
    proposed: "Önerilen ifade – teyit bekliyor",
    draftTitle: "TASLAK – yalnızca inceleme amaçlıdır",
    draftBody:
      "Bu belge bir taslaktır. Hukuki onaydan geçmemiştir ve henüz yürürlükte değildir. “İnceleme bekliyor” olarak işaretlenen konular çözülmemiştir ve bunlara dayanılmamalıdır. Bazı bölümler henüz uygulanmayan, önerilen süreçleri açıklamaktadır.",
    version: "Sürüm",
    updated: "Son güncelleme",
    updatedPending: "onay bekliyor",
    draft: "taslak",
  },
};

function useL() {
  const { language } = useLanguage();
  return L[language === "tr" ? "tr" : "en"];
}

/** Inline marker for an unresolved fact or legal question. */
export function Pending({ children }: { children?: ReactNode }) {
  const l = useL();
  return (
    <span
      data-legal-pending=""
      className="inline rounded border border-amber-300 bg-amber-50 px-1.5 py-0.5 text-[0.85em] font-medium text-amber-900"
    >
      [{l.pending}{children ? <>: {children}</> : null}]
    </span>
  );
}

/** Block marker for proposed wording that depends on an unanswered question. */
export function Proposed({ children }: { children: ReactNode }) {
  const l = useL();
  return (
    <div
      data-legal-pending=""
      className="my-3 rounded-lg border border-dashed border-amber-400 bg-amber-50/70 p-3 text-sm text-amber-950"
    >
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-amber-800">{l.proposed}</p>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-xl font-semibold text-[#9B7E3E] mt-8 mb-3">{children}</h3>;
}

export function Para({ children }: { children: ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>;
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-6 space-y-1.5 text-gray-700 leading-relaxed mb-4">{children}</ul>;
}

export function OList({ children }: { children: ReactNode }) {
  return <ol className="list-decimal pl-6 space-y-1.5 text-gray-700 leading-relaxed mb-4">{children}</ol>;
}

export function ContactBox() {
  return (
    <div className="bg-[#FFF8DC] p-4 rounded-lg border-l-4 border-[#9B7E3E] mb-4">
      <p className="text-gray-800 mb-2">
        📧 <a href="mailto:info@revissaway.com.au" className="text-[#9B7E3E] hover:underline">info@revissaway.com.au</a>
      </p>
      <p className="text-gray-800">
        📞 <a href="tel:+61481334272" className="text-[#9B7E3E] hover:underline">+61 481 334 272</a>
      </p>
    </div>
  );
}

/** Page shell: keeps the existing hero + white card design, single column in the active language. */
export function LegalPage({
  title,
  subtitle,
  docTitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle: string;
  docTitle: string;
  /** Date of the approved text. Must be set before release (checked by scripts/check-legal-release.mjs). */
  lastUpdated: string | null;
  children: ReactNode;
}) {
  const l = useL();
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8DC] to-white">
      <section className="bg-gradient-to-r from-[#9B7E3E]/20 to-[#f5e9cc]/30 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-700">{subtitle}</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
        {LEGAL_IS_DRAFT && (
          <div
            role="note"
            data-legal-draft-notice=""
            className="mb-8 rounded-xl border-2 border-amber-400 bg-amber-50 p-5 text-amber-950"
          >
            <p className="font-bold mb-1">{l.draftTitle}</p>
            <p className="text-sm leading-relaxed">{l.draftBody}</p>
          </div>
        )}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
          <div className="prose prose-gray max-w-none break-words">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-[#9B7E3E] pb-3">{docTitle}</h2>
            <p className="text-sm text-gray-600 mb-6">
              <strong>{l.version}:</strong> {LEGAL_VERSION}
              {LEGAL_IS_DRAFT ? ` (${l.draft})` : ""} · <strong>{l.updated}:</strong>{" "}
              {lastUpdated ?? l.updatedPending}
            </p>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
