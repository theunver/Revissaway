"use client";

import { useCallback, useEffect, useState, useRef } from 'react';

// Global observer registry to ensure clean disconnection
declare global {
  interface Window {
    __activeTranslationObservers__?: MutationObserver[];
  }
}

// In-memory cache for translations
const translationCache: { [key: string]: string } = {};

// RTL languages that need right-to-left text direction
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur', 'yi'];

export function useTranslation(targetLang: string, isEnabled: boolean = true) {
  const [isTranslating, setIsTranslating] = useState(false);
  const completedRef = useRef<boolean>(false);

  // Force complete cache clear on language change
  const forceFullCacheClear = useCallback(() => {
    // Clear ALL in-memory translations
    Object.keys(translationCache).forEach(key => {
      delete translationCache[key];
    });

    // Clear ALL data attributes from DOM
    if (typeof document !== 'undefined') {
      document.querySelectorAll('[data-translated]').forEach(el => {
        el.removeAttribute('data-translated');
        el.removeAttribute('data-translated-lang');
      });
      document.querySelectorAll('[data-placeholder-translated]').forEach(el => {
        el.removeAttribute('data-placeholder-translated');
        el.removeAttribute('data-placeholder-lang');
      });
      document.querySelectorAll('[data-aria-translated]').forEach(el => {
        el.removeAttribute('data-aria-translated');
        el.removeAttribute('data-aria-lang');
      });
    }
  }, []);

  // Translate all text nodes with parallel batch processing
  const translateAllNodes = useCallback(async () => {
    if (!isEnabled || targetLang === 'en' || targetLang === 'tr' || targetLang === 'fr' || targetLang === 'es') {
      // Reset to LTR for English/Turkish
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.setAttribute('dir', 'ltr');
      }
      return;
    }

    try {
      // Set text direction for RTL languages
      const direction = RTL_LANGUAGES.includes(targetLang) ? 'rtl' : 'ltr';
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('dir', direction);
        document.body.setAttribute('dir', direction);
      }

      // Collect all text nodes from scratch
      const textNodes: { node: Node; originalText: string }[] = [];
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            
            const tagName = parent.tagName.toLowerCase();
            if (['script', 'style', 'noscript', 'iframe', 'svg'].includes(tagName)) {
              return NodeFilter.FILTER_REJECT;
            }

            const text = node.textContent?.trim() || '';
            if (!text || text.length < 2) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      let currentNode: Node | null;
      while ((currentNode = walker.nextNode())) {
        const text = currentNode.textContent?.trim();
        if (text) {
          textNodes.push({ node: currentNode, originalText: text });
        }
      }

      if (textNodes.length === 0) return;

      // Get unique texts
      const uniqueTexts = Array.from(new Set(textNodes.map(item => item.originalText)));

      // Split into batches of 50
      const batchSize = 50;
      const batches: string[][] = [];
      for (let i = 0; i < uniqueTexts.length; i += batchSize) {
        batches.push(uniqueTexts.slice(i, i + batchSize));
      }

      // Process all batches in parallel with Promise.all
      const batchPromises = batches.map(async (batch) => {
        try {
          const response = await fetch('/api/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: batch,
              targetLang,
              sourceLang: 'en',
            }),
          });

          if (!response.ok) {
            console.error('Translation API error:', response.statusText);
            return batch.map(text => ({ original: text, translated: text }));
          }

          const data = await response.json();
          const translations = data.translatedTexts || batch;
          
          return batch.map((text, idx) => ({
            original: text,
            translated: translations[idx],
          }));
        } catch (error) {
          console.error('Batch translation error:', error);
          return batch.map(text => ({ original: text, translated: text }));
        }
      });

      // Wait for ALL batches to complete
      const results = await Promise.all(batchPromises);
      
      // Build translation map
      const translationMap: { [key: string]: string } = {};
      results.flat().forEach(({ original, translated }) => {
        translationMap[original] = translated;
        // Cache the result
        const cacheKey = `en_${targetLang}_${original}`;
        translationCache[cacheKey] = translated;
      });

      // Apply all translations to DOM
      textNodes.forEach(({ node, originalText }) => {
        const translated = translationMap[originalText];
        if (translated && translated !== originalText) {
          node.textContent = translated;
          const parent = node.parentElement;
          if (parent) {
            parent.setAttribute('data-translated', 'true');
            parent.setAttribute('data-translated-lang', targetLang);
          }
        }
      });

      // Translate placeholder attributes
      const elementsWithPlaceholder = document.querySelectorAll('[placeholder]');
      const placeholderPromises = Array.from(elementsWithPlaceholder).map(async (el) => {
        const placeholder = el.getAttribute('placeholder');
        if (placeholder && placeholder.trim().length > 0) {
          try {
            const response = await fetch('/api/translate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                text: placeholder,
                targetLang,
                sourceLang: 'en',
              }),
            });
            
            if (response.ok) {
              const data = await response.json();
              const translated = data.translatedText || placeholder;
              el.setAttribute('placeholder', translated);
              el.setAttribute('data-placeholder-translated', 'true');
              el.setAttribute('data-placeholder-lang', targetLang);
            }
          } catch (error) {
            console.error('Placeholder translation error:', error);
          }
        }
      });

      // Translate aria-label attributes
      const elementsWithAriaLabel = document.querySelectorAll('[aria-label]');
      const ariaPromises = Array.from(elementsWithAriaLabel).map(async (el) => {
        const ariaLabel = el.getAttribute('aria-label');
        if (ariaLabel && ariaLabel.trim().length > 0) {
          try {
            const response = await fetch('/api/translate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                text: ariaLabel,
                targetLang,
                sourceLang: 'en',
              }),
            });
            
            if (response.ok) {
              const data = await response.json();
              const translated = data.translatedText || ariaLabel;
              el.setAttribute('aria-label', translated);
              el.setAttribute('data-aria-translated', 'true');
              el.setAttribute('data-aria-lang', targetLang);
            }
          } catch (error) {
            console.error('Aria-label translation error:', error);
          }
        }
      });

      // Wait for ALL attribute translations to complete
      await Promise.all([...placeholderPromises, ...ariaPromises]);

    } catch (error) {
      console.error('Translation error:', error);
    }
  }, [targetLang, isEnabled]);

  // Main translation effect
  useEffect(() => {
    if (!isEnabled || targetLang === 'en' || targetLang === 'tr' || targetLang === 'fr' || targetLang === 'es') {
      // Reset to LTR and cleanup
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.body.setAttribute('dir', 'ltr');
      }
      
      // Disconnect all previous observers
      if (typeof window !== 'undefined' && window.__activeTranslationObservers__) {
        window.__activeTranslationObservers__.forEach(obs => obs.disconnect());
        window.__activeTranslationObservers__ = [];
      }
      
      setIsTranslating(false);
      return;
    }

    // Show loading overlay
    setIsTranslating(true);
    completedRef.current = false;

    // Force complete cache clear
    forceFullCacheClear();

    // Disconnect ALL previous observers globally
    if (typeof window !== 'undefined') {
      if (window.__activeTranslationObservers__) {
        window.__activeTranslationObservers__.forEach(obs => obs.disconnect());
      }
      window.__activeTranslationObservers__ = [];
    }

    // Run initial translation
    const runInitialTranslation = async () => {
      try {
        await translateAllNodes();
        completedRef.current = true;
        setIsTranslating(false);
      } catch (error) {
        console.error('Initial translation failed:', error);
        completedRef.current = true;
        setIsTranslating(false);
      }
    };

    // Start translation immediately
    runInitialTranslation();

    // Setup fresh MutationObserver for dynamic content
    const observer = new MutationObserver((mutations) => {
      // Only process if initial translation is complete
      if (!completedRef.current) return;

      // Check if there are meaningful additions
      const hasNewContent = mutations.some(mutation => 
        mutation.type === 'childList' && mutation.addedNodes.length > 0
      );

      if (hasNewContent) {
        // Re-translate new content
        completedRef.current = false;
        translateAllNodes().then(() => {
          completedRef.current = true;
        });
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    // Register observer globally
    if (typeof window !== 'undefined') {
      if (!window.__activeTranslationObservers__) {
        window.__activeTranslationObservers__ = [];
      }
      window.__activeTranslationObservers__.push(observer);
    }

    // Cleanup
    return () => {
      observer.disconnect();
      if (typeof window !== 'undefined' && window.__activeTranslationObservers__) {
        const index = window.__activeTranslationObservers__.indexOf(observer);
        if (index > -1) {
          window.__activeTranslationObservers__.splice(index, 1);
        }
      }
    };
  }, [targetLang, isEnabled, forceFullCacheClear, translateAllNodes]);

  // Legacy API support
  const translateText = useCallback(async (text: string, sourceLang: string = 'en'): Promise<string> => {
    if (!text || !text.trim()) return text;
    if (sourceLang === targetLang) return text;
    if (targetLang === 'en' || targetLang === 'tr' || targetLang === 'fr' || targetLang === 'es') return text;

    const cacheKey = `${sourceLang}_${targetLang}_${text}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, targetLang, sourceLang }),
      });

      if (!response.ok) return text;

      const data = await response.json();
      const translated = data.translatedText || text;
      translationCache[cacheKey] = translated;
      return translated;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  }, [targetLang]);

  const translateBatch = useCallback(async (texts: string[], sourceLang: string = 'en'): Promise<string[]> => {
    if (!texts.length) return texts;
    if (sourceLang === targetLang) return texts;
    if (targetLang === 'en' || targetLang === 'tr' || targetLang === 'fr' || targetLang === 'es') return texts;

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: texts, targetLang, sourceLang }),
      });

      if (!response.ok) return texts;

      const data = await response.json();
      return data.translatedTexts || texts;
    } catch (error) {
      console.error('Batch translation error:', error);
      return texts;
    }
  }, [targetLang]);

  return {
    translateText,
    translateBatch,
    translateDOM: translateAllNodes,
    isTranslating,
  };
}
