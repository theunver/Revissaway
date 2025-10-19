"use client";

import { useCallback, useEffect, useState, useRef } from 'react';

// In-memory cache for translations
const translationCache: { [key: string]: string } = {};

// RTL languages that need right-to-left text direction
const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ur', 'yi'];

export function useTranslation(targetLang: string, isEnabled: boolean = true) {
  const [isTranslating, setIsTranslating] = useState(false);
  const observerRef = useRef<MutationObserver | null>(null);
  const translationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear stale cache when language changes
  const clearStaleCache = useCallback(() => {
    // Clear in-memory cache
    Object.keys(translationCache).forEach(key => {
      if (!key.includes(`_${targetLang}_`)) {
        delete translationCache[key];
      }
    });

    // Clear data-translated attributes from previous language
    document.querySelectorAll('[data-translated]').forEach(el => {
      el.removeAttribute('data-translated');
    });
    document.querySelectorAll('[data-placeholder-translated]').forEach(el => {
      el.removeAttribute('data-placeholder-translated');
    });
  }, [targetLang]);

  const translateText = useCallback(async (text: string, sourceLang: string = 'en'): Promise<string> => {
    if (!text || !text.trim()) return text;
    if (sourceLang === targetLang) return text;
    if (targetLang === 'en' || targetLang === 'tr') return text; // Already have these translations

    // Check cache
    const cacheKey = `${sourceLang}_${targetLang}_${text}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          targetLang,
          sourceLang,
        }),
      });

      if (!response.ok) {
        console.error('Translation API error:', response.statusText);
        return text; // Return original on error
      }

      const data = await response.json();
      const translated = data.translatedText || text;
      
      // Cache the result
      translationCache[cacheKey] = translated;
      
      return translated;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original on error
    }
  }, [targetLang]);

  const translateBatch = useCallback(async (texts: string[], sourceLang: string = 'en'): Promise<string[]> => {
    if (!texts.length) return texts;
    if (sourceLang === targetLang) return texts;
    if (targetLang === 'en' || targetLang === 'tr') return texts;

    // Check cache for each text
    const uncachedTexts: string[] = [];
    const cachedResults: { [index: number]: string } = {};
    
    texts.forEach((text, index) => {
      const cacheKey = `${sourceLang}_${targetLang}_${text}`;
      if (translationCache[cacheKey]) {
        cachedResults[index] = translationCache[cacheKey];
      } else {
        uncachedTexts.push(text);
      }
    });

    // If all texts are cached, return immediately
    if (uncachedTexts.length === 0) {
      return texts.map((text, index) => cachedResults[index] || text);
    }

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: uncachedTexts,
          targetLang,
          sourceLang,
        }),
      });

      if (!response.ok) {
        console.error('Translation API error:', response.statusText);
        return texts;
      }

      const data = await response.json();
      const newTranslations = data.translatedTexts || uncachedTexts;

      // Cache new translations
      uncachedTexts.forEach((text, idx) => {
        const cacheKey = `${sourceLang}_${targetLang}_${text}`;
        translationCache[cacheKey] = newTranslations[idx];
      });

      // Merge cached and new translations
      let uncachedIndex = 0;
      return texts.map((text, index) => {
        if (cachedResults[index]) {
          return cachedResults[index];
        } else {
          return newTranslations[uncachedIndex++];
        }
      });
    } catch (error) {
      console.error('Batch translation error:', error);
      return texts;
    }
  }, [targetLang]);

  const translateDOM = useCallback(async (skipLoader: boolean = false) => {
    if (!isEnabled || targetLang === 'en' || targetLang === 'tr') {
      // Reset to LTR for English/Turkish
      document.documentElement.setAttribute('dir', 'ltr');
      document.body.setAttribute('dir', 'ltr');
      return;
    }

    if (!skipLoader) {
      setIsTranslating(true);
    }

    try {
      // Set text direction for RTL languages
      const direction = RTL_LANGUAGES.includes(targetLang) ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('dir', direction);
      document.body.setAttribute('dir', direction);

      // Find all text nodes
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            // Skip script, style, and certain elements
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            
            const tagName = parent.tagName.toLowerCase();
            if (['script', 'style', 'noscript', 'iframe', 'svg'].includes(tagName)) {
              return NodeFilter.FILTER_REJECT;
            }

            // Skip if no meaningful text (use textContent for RTL support)
            const text = node.textContent?.trim() || '';
            if (!text || text.length < 2) {
              return NodeFilter.FILTER_REJECT;
            }

            // Skip if already translated for this language
            if (parent.hasAttribute('data-translated') && 
                parent.getAttribute('data-translated-lang') === targetLang) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      const textNodes: { node: Node; originalText: string }[] = [];
      let currentNode: Node | null;

      while ((currentNode = walker.nextNode())) {
        const text = currentNode.textContent?.trim();
        if (text) {
          textNodes.push({ node: currentNode, originalText: text });
        }
      }

      // Translate in batches
      const batchSize = 50;
      for (let i = 0; i < textNodes.length; i += batchSize) {
        const batch = textNodes.slice(i, i + batchSize);
        const textsToTranslate = batch.map(item => item.originalText);
        
        const translations = await translateBatch(textsToTranslate);
        
        batch.forEach((item, index) => {
          if (item.node.textContent) {
            item.node.textContent = translations[index];
            const parent = item.node.parentElement;
            if (parent) {
              parent.setAttribute('data-translated', 'true');
              parent.setAttribute('data-translated-lang', targetLang);
            }
          }
        });

        // Small delay between batches to avoid rate limiting
        if (i + batchSize < textNodes.length) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      // Translate placeholder and aria-label attributes
      const elementsWithPlaceholder = document.querySelectorAll('[placeholder]');
      for (const el of Array.from(elementsWithPlaceholder)) {
        const placeholder = el.getAttribute('placeholder');
        if (placeholder && 
            (!el.hasAttribute('data-placeholder-translated') || 
             el.getAttribute('data-placeholder-lang') !== targetLang)) {
          const translated = await translateText(placeholder);
          el.setAttribute('placeholder', translated);
          el.setAttribute('data-placeholder-translated', 'true');
          el.setAttribute('data-placeholder-lang', targetLang);
        }
      }

      // Translate aria-label attributes
      const elementsWithAriaLabel = document.querySelectorAll('[aria-label]');
      for (const el of Array.from(elementsWithAriaLabel)) {
        const ariaLabel = el.getAttribute('aria-label');
        if (ariaLabel && 
            (!el.hasAttribute('data-aria-translated') || 
             el.getAttribute('data-aria-lang') !== targetLang)) {
          const translated = await translateText(ariaLabel);
          el.setAttribute('aria-label', translated);
          el.setAttribute('data-aria-translated', 'true');
          el.setAttribute('data-aria-lang', targetLang);
        }
      }

    } catch (error) {
      console.error('DOM translation error:', error);
    } finally {
      if (!skipLoader) {
        setIsTranslating(false);
      }
    }
  }, [targetLang, isEnabled, translateText, translateBatch]);

  // Setup MutationObserver to watch for dynamic content
  useEffect(() => {
    if (!isEnabled || targetLang === 'en' || targetLang === 'tr') {
      // Disconnect observer if not translating
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    // Clear stale cache when language changes
    clearStaleCache();

    // Initial translation
    translateDOM(false);

    // Setup observer for dynamic content
    const observer = new MutationObserver((mutations) => {
      // Debounce rapid mutations
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }

      translationTimeoutRef.current = setTimeout(() => {
        // Only translate if we have meaningful additions
        const hasNewContent = mutations.some(mutation => 
          mutation.type === 'childList' && mutation.addedNodes.length > 0
        );

        if (hasNewContent) {
          translateDOM(true); // Skip loader for dynamic content
        }
      }, 300); // Wait 300ms after last mutation
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }
    };
  }, [targetLang, isEnabled, translateDOM, clearStaleCache]);

  return {
    translateText,
    translateBatch,
    translateDOM,
    isTranslating,
  };
}

