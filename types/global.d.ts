// Global type declarations for analytics and tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
    _fbq: any;
    trackLeadSubmission: () => void;
    trackGA4Event: (eventName: string, params?: Record<string, any>) => void;
    trackMetaEvent: (eventName: string, params?: Record<string, any>) => void;
    trackWhatsAppContact: () => void;
  }
}

export {};

