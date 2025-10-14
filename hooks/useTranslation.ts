"use client";

import { useCallback, useEffect, useState } from 'react';

const translationCache: { [key: string]: string } = {};

export function useTranslation(targetLang: string, isEnabled: boolean = true) {
  const [isTranslating, setIsTranslating] = useState(false);

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

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: texts,
          targetLang,
          sourceLang,
        }),
      });

      if (!response.ok) {
        console.error('Translation API error:', response.statusText);
        return texts;
      }

      const data = await response.json();
      return data.translatedTexts || texts;
    } catch (error) {
      console.error('Batch translation error:', error);
      return texts;
    }
  }, [targetLang]);

  const translateDOM = useCallback(async () => {
    if (!isEnabled || targetLang === 'en' || targetLang === 'tr') {
      return;
    }

    setIsTranslating(true);

    try {
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

            // Skip if no meaningful text
            const text = node.textContent?.trim() || '';
            if (!text || text.length < 2) {
              return NodeFilter.FILTER_REJECT;
            }

            // Skip if already translated
            if (parent.hasAttribute('data-translated')) {
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
            item.node.parentElement?.setAttribute('data-translated', 'true');
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
        if (placeholder && !el.hasAttribute('data-placeholder-translated')) {
          const translated = await translateText(placeholder);
          el.setAttribute('placeholder', translated);
          el.setAttribute('data-placeholder-translated', 'true');
        }
      }

    } catch (error) {
      console.error('DOM translation error:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [targetLang, isEnabled, translateText, translateBatch]);

  return {
    translateText,
    translateBatch,
    translateDOM,
    isTranslating,
  };
}

