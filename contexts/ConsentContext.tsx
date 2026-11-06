"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { TRACKING_COOKIE_PATTERNS } from "@/lib/tracking";

// Visitor's tracking choices. Both default to OFF; nothing loads until the visitor opts in.
export interface ConsentChoice {
  analytics: boolean; // Google Analytics 4
  marketing: boolean; // Meta Pixel
}

interface ConsentState extends ConsentChoice {
  decided: boolean;
  settingsOpen: boolean;
  save: (choice: ConsentChoice) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openSettings: () => void;
  closeSettings: () => void;
}

const STORAGE_KEY = "rw_consent";
const STORAGE_VERSION = 1;
const ConsentContext = createContext<ConsentState | undefined>(undefined);

function readStored(): (ConsentChoice & { decided: true }) | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const v = JSON.parse(raw);
    if (v?.v !== STORAGE_VERSION) return null;
    return { analytics: v.analytics === true, marketing: v.marketing === true, decided: true };
  } catch {
    return null;
  }
}

function deleteTrackingCookies() {
  const host = window.location.hostname;
  const parts = host.split(".");
  const domains = new Set<string>(["", host, `.${host}`]);
  for (let i = 1; i < parts.length - 1; i++) domains.add(`.${parts.slice(i).join(".")}`);
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0]?.trim();
    if (!name || !TRACKING_COOKIE_PATTERNS.some((re) => re.test(name))) continue;
    for (const d of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [choice, setChoice] = useState<ConsentChoice>({ analytics: false, marketing: false });
  const [decided, setDecided] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = readStored();
    if (stored) {
      // Hydrating from browser storage after mount (server render has no access to it).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChoice({ analytics: stored.analytics, marketing: stored.marketing });
      setDecided(true);
    }
  }, []);

  const save = useCallback(
    (next: ConsentChoice) => {
      const revoked = (choice.analytics && !next.analytics) || (choice.marketing && !next.marketing);
      try {
        window.localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ v: STORAGE_VERSION, analytics: next.analytics, marketing: next.marketing, ts: new Date().toISOString() })
        );
      } catch {
        // Storage unavailable: the choice applies to this page view only.
      }
      setChoice(next);
      setDecided(true);
      setSettingsOpen(false);
      if (revoked) {
        // Tags cannot be unloaded from a running page: clear their cookies and start a clean page.
        deleteTrackingCookies();
        window.location.reload();
      }
    },
    [choice]
  );

  const value: ConsentState = {
    ...choice,
    decided,
    settingsOpen,
    save,
    acceptAll: () => save({ analytics: true, marketing: true }),
    rejectAll: () => save({ analytics: false, marketing: false }),
    openSettings: () => setSettingsOpen(true),
    closeSettings: () => setSettingsOpen(false),
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentState {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within a ConsentProvider");
  return ctx;
}
