import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_TRANSLATE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;
const GOOGLE_TRANSLATE_API_URL = 'https://translation.googleapis.com/language/translate/v2';

export async function POST(request: NextRequest) {
  try {
    const { text, targetLang, sourceLang = 'en' } = await request.json();

    if (!GOOGLE_TRANSLATE_API_KEY) {
      return NextResponse.json(
        { error: 'Google Translate API key not configured' },
        { status: 500 }
      );
    }

    if (!text || !targetLang) {
      return NextResponse.json(
        { error: 'Missing required parameters: text and targetLang' },
        { status: 400 }
      );
    }

    // If source and target are the same, return original text
    if (sourceLang === targetLang) {
      return NextResponse.json({ translatedText: text });
    }

    // Handle batch translation for arrays
    const textsToTranslate = Array.isArray(text) ? text : [text];

    const response = await fetch(
      `${GOOGLE_TRANSLATE_API_URL}?key=${GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          q: textsToTranslate,
          target: targetLang,
          source: sourceLang,
          format: 'text',
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Translate API error:', response.status, errorText);
      return NextResponse.json(
        { error: 'Translation failed', details: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Validate response structure
    if (!data || !data.data || !data.data.translations) {
      console.error('Invalid API response structure:', data);
      return NextResponse.json(
        { error: 'Invalid translation response' },
        { status: 500 }
      );
    }

    if (Array.isArray(text)) {
      const translations = data.data.translations.map((t: any) => t.translatedText);
      return NextResponse.json(
        { translatedTexts: translations },
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
    } else {
      const translatedText = data.data.translations[0].translatedText;
      return NextResponse.json(
        { translatedText },
        {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
        }
      );
    }
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

