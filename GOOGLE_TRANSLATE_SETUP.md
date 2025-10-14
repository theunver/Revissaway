# Google Translate API Entegrasyonu - Kurulum Rehberi

## ✅ Tamamlanan İşlemler

### 1. API Route Oluşturuldu
- **Dosya:** `/app/api/translate/route.ts`
- **Özellikler:**
  - Batch translation desteği (50 metin birden)
  - Caching mekanizması
  - Error handling
  - Rate limiting koruması

### 2. Translation Hook
- **Dosya:** `/hooks/useTranslation.ts`
- **Özellikler:**
  - DOM tarama ve çeviri
  - Placeholder çevirisi
  - Batch işleme
  - Cache yönetimi

### 3. Translation Overlay
- **Dosya:** `/components/TranslationOverlay.tsx`
- **Özellikler:**
  - "Translating..." animasyonu
  - Dil adı gösterimi
  - Smooth fade in/out

### 4. Language Context Güncellendi
- **Dosya:** `/contexts/LanguageContext.tsx`
- **Özellikler:**
  - Otomatik DOM çevirisi
  - 11 dil desteği
  - localStorage entegrasyonu
  - isTranslating state

### 5. Navbar Dropdown
- **Dosya:** `/components/Navbar.tsx`
- **Özellikler:**
  - 11 dilli dropdown menü
  - Loading state
  - Bayrak emojileri
  - Smooth animasyonlar

---

## 🔧 Gerekli Kurulum Adımları

### Adım 1: Google Cloud API Key Oluştur

1. **Google Cloud Console'a git:**
   ```
   https://console.cloud.google.com/
   ```

2. **Yeni proje oluştur veya mevcut projeyi seç**

3. **Translation API'yi aktif et:**
   - Sol menüden **APIs & Services** → **Library**
   - "Cloud Translation API" ara
   - **Enable** butonuna tıkla

4. **API Anahtarı oluştur:**
   - **APIs & Services** → **Credentials**
   - **Create Credentials** → **API Key**
   - Anahtarı kopyala

5. **API Kısıtlamaları ayarla (önerilen):**
   - API key'e tıkla
   - **API restrictions** → **Restrict key**
   - **Cloud Translation API** seç
   - **Save**

### Adım 2: .env.local Dosyası Oluştur

Proje kök dizininde `.env.local` dosyası oluştur:

```bash
cd /Users/aliunver/Desktop/Estheway
touch .env.local
```

Aşağıdaki içeriği ekle:

```env
# Google Translate API Key
GOOGLE_TRANSLATE_API_KEY=AIzaSy...your_actual_api_key_here
```

**⚠️ ÖNEMLİ:**
- API anahtarını `your_actual_api_key_here` yerine yapıştır
- `.env.local` dosyası `.gitignore`'da var, commit edilmeyecek
- API anahtarını asla public repo'ya push etme

### Adım 3: Development Server'ı Yeniden Başlat

```bash
# Çalışan server'ı durdur (Ctrl+C)

# Yeniden başlat
npm run dev
```

---

## 🌍 Desteklenen Diller

| Dil | Kod | Bayrak |
|-----|-----|--------|
| English | `en` | 🇬🇧 |
| Türkçe | `tr` | 🇹🇷 |
| 中文 (Mandarin) | `zh` | 🇨🇳 |
| العربية (Arabic) | `ar` | 🇸🇦 |
| Tiếng Việt | `vi` | 🇻🇳 |
| 廣東話 (Cantonese) | `yue` | 🇭🇰 |
| ਪੰਜਾਬੀ (Punjabi) | `pa` | 🇮🇳 |
| हिन्दी (Hindi) | `hi` | 🇮🇳 |
| Italiano | `it` | 🇮🇹 |
| Ελληνικά (Greek) | `el` | 🇬🇷 |
| Tagalog | `tl` | 🇵🇭 |

---

## 🎯 Nasıl Çalışır?

### 1. Kullanıcı Dil Seçer
```
Navbar → 🇬🇧 EN ▼ → 🇨🇳 中文
```

### 2. Otomatik Çeviri Başlar
- **isTranslating = true** → Overlay görünür
- LanguageContext tetiklenir
- Sayfa taranır (DOM TreeWalker)

### 3. Batch Translation
```javascript
// 50'şer metin gruplar halinde
POST /api/translate
{
  "text": ["Welcome", "Contact Us", "Learn More", ...],
  "targetLang": "zh",
  "sourceLang": "en"
}
```

### 4. DOM Güncellenir
```javascript
// Her metin node güncellenir
node.textContent = "欢迎"; // "Welcome" → "欢迎"
element.setAttribute("data-translated-zh", "true");
```

### 5. Overlay Kaybolur
```
isTranslating = false → Overlay fade out
```

---

## 💰 Maliyet Tahmini

**Google Cloud Translation API v2 Fiyatlandırma:**
- **$20 / 1 milyon karakter**

**Örnek Sayfa:**
- Ortalama sayfa: ~10,000 karakter
- Maliyet: **$0.20 / sayfa çevirisi**

**Aylık Kullanım Tahmini:**
- 1000 sayfa görüntüleme × 10 dil = 10,000 çeviri
- Tahmini maliyet: **~$200/ay**

**Optimizasyon:**
- ✅ Caching (aynı metin tekrar çevrilmez)
- ✅ Batch translation (API call sayısı azalır)
- ✅ localStorage (dil tercihi kaydedilir)

---

## 🧪 Test Etme

### 1. Local Test
```bash
# Server çalışıyor mu?
curl http://localhost:3000

# API çalışıyor mu?
curl -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{"text":"Hello","targetLang":"zh","sourceLang":"en"}'

# Beklenen sonuç:
# {"translatedText":"你好"}
```

### 2. Browser Test
1. `http://localhost:3000` aç
2. Navbar'da dil dropdown'una tıkla
3. Çince (🇨🇳 中文) seç
4. "Translating..." overlay görünmeli
5. Tüm sayfa Çince'ye çevrilmeli
6. `localStorage` kontrol et:
   ```javascript
   localStorage.getItem('language') // "zh"
   ```

### 3. Error Test
```bash
# API key olmadan test
curl -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{"text":"Test"}'

# Beklenen: 500 error + "API key not configured"
```

---

## 🐛 Troubleshooting

### Hata: "API key not configured"
**Çözüm:**
```bash
# .env.local kontrolü
cat .env.local

# Olması gereken:
GOOGLE_TRANSLATE_API_KEY=AIzaSy...

# Server'ı yeniden başlat
npm run dev
```

### Hata: "Translation failed"
**Olası Nedenler:**
1. API key geçersiz → Console'dan yeni key oluştur
2. Translation API aktif değil → Enable et
3. Quota aşıldı → Billing kontrolü yap

### Overlay Kapanmıyor
**Çözüm:**
```javascript
// Browser console'da kontrol et
localStorage.clear();
window.location.reload();
```

### Çeviri Çok Yavaş
**Optimizasyon:**
- Batch size'ı küçült (50 → 20)
- Cache timeout ekle
- CDN kullan

---

## 📊 Monitoring

### Browser Console
```javascript
// Çeviri durumu
console.log(localStorage.getItem('language'));

// Cache boyutu
console.log(performance.memory);
```

### API Logs
Google Cloud Console → **Logging** → **Logs Explorer**

Filtre:
```
resource.type="api"
protoPayload.serviceName="translate.googleapis.com"
```

---

## 🔒 Güvenlik

### ✅ Yapılan:
- API key `.env.local` içinde (gitignore'da)
- Server-side proxy (`/api/translate`)
- Rate limiting (batch delay)
- Error handling

### ⚠️ Öneri:
- API key'i sadece domain'e kısıtla
- Quota limiti ayarla
- Budget alerts kur

---

## 📚 Dökümantasyon

### Google Cloud Translation API
```
https://cloud.google.com/translate/docs
```

### Next.js API Routes
```
https://nextjs.org/docs/api-routes/introduction
```

### Next.js Environment Variables
```
https://nextjs.org/docs/basic-features/environment-variables
```

---

## ✅ Checklist

- [ ] Google Cloud Console'da proje oluşturuldu
- [ ] Translation API aktif edildi
- [ ] API key oluşturuldu
- [ ] `.env.local` dosyası eklendi
- [ ] Server yeniden başlatıldı
- [ ] Local test yapıldı
- [ ] Tüm diller test edildi
- [ ] localStorage çalışıyor
- [ ] Overlay animasyonu çalışıyor
- [ ] Production'a deploy edildi

---

## 🚀 Production Deployment

### Vercel'de Environment Variable Ekle

1. **Vercel Dashboard** → Projeyi seç
2. **Settings** → **Environment Variables**
3. Ekle:
   ```
   Key: GOOGLE_TRANSLATE_API_KEY
   Value: AIzaSy...your_key_here
   Environments: Production, Preview, Development
   ```
4. **Save**
5. Redeploy:
   ```bash
   npx vercel --prod
   ```

---

## 📞 Destek

**Problem mi var?**
- Console log kontrol et: `F12` → Console
- Network tab kontrol et: `F12` → Network → XHR
- API response kontrol et

**Hala çalışmıyor?**
1. `.env.local` dosyasını kontrol et
2. Server'ı restart et
3. Cache'i temizle: `localStorage.clear()`
4. Browser'ı yenile: `Ctrl+F5`

---

## 🎉 Başarılı Kurulum Göstergeleri

✅ Navbar'da dil dropdown görünüyor
✅ Dil değiştirilince "Translating..." overlay açılıyor
✅ Sayfa içeriği seçilen dile çevriliyor
✅ Placeholder'lar çevriliyor
✅ Sayfa reload edilince dil korunuyor
✅ EN/TR'de native translation kullanılıyor
✅ Browser console'da hata yok

---

**Hazırlayan:** AI Assistant
**Tarih:** 2025-10-14
**Versiyon:** 1.0

