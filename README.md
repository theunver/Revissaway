# RevissaWay - Medical Tourism Landing Page

Modern dark-themed professional landing page for health tourism from Australia to Turkey with video hero background and gold accents.

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Formspree** - Form submission integration

## Features

- 🎨 **Dark Theme Design** - Professional dark background with gold accents
- 🎥 Full-screen video hero background with dark overlay
- 📱 Fully responsive (mobile, tablet, desktop)
- 🧭 Fixed navigation bar with mobile hamburger menu
- ♿ Accessible and user-friendly
- 🏥 Compliant with Australian cosmetic/medical advertising regulations
- 📞 WhatsApp integration (fixed button)
- 📅 Dedicated consultation booking page
- 📧 Formspree contact form integration
- 🔍 SEO optimized
- ⚡ Performance focused
- 🔗 Smooth scroll navigation

## Color Scheme

### Primary Colors
- **Background:** Dark gradient (#0a0a0a → #1a1a1a)
- **Cards:** Dark gray gradients (#2a2a2a → #1f1f1f)
- **Gold Accent:** #DAA520 (primary), #FFD700 (hover), #B8860B (dark)
- **Text:** White (#ffffff), Light gray (#f5f5f5, #e5e5e5)

### UI Elements
- **Buttons:** Gold (#DAA520) with white text, hover to #FFD700
- **Icons:** Gold (#DAA520)
- **Borders:** Dark gray (#374151, #1f2937)

## Installation

1. Install dependencies:

```bash
npm install
```

2. Add your hero video:
   - Place your video file at `/public/videos/8955660-uhd_3840_2160_24fps.mp4`
   - Recommended: MP4 format, optimized for web, 1920x1080 or higher

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

```bash
npm run build
```

Deploy the project to Vercel using the Vercel CLI or by connecting your GitHub repository to Vercel.

## Page Structure

### Home Page (`/`)

#### Header
- **Fixed Navigation Bar** (Black background with gold accents)
  - Left: RevissaWay logo
  - Center: Menu items (Home, Services, About, Blog, Contact)
  - Right: "Free Consultation" CTA button (Gold)
  - Mobile: Hamburger menu with slide-in panel

#### Hero Section
- Full-screen video background (`/public/videos/8955660-uhd_3840_2160_24fps.mp4`)
- Dark overlay (rgba(0,0,0,0.4))
- Centered text:
  - Headline: "Start Your Cosmetic Medical Journey Now"
  - Subheadline: "Trusted access to hair transplant, cosmetic surgery and dental aesthetics."
  - CTA: "Get Free Consultation on WhatsApp" (Gold button)
- Animated scroll indicator

#### Main Sections
1. **Services** (#services) - Dark cards with gold buttons
2. **Package Services** - Dark themed grid
3. **Why Turkey** (#about) - Benefits with gold check icons
4. **Process** - 5-step workflow with gold numbered badges
5. **Blog** (#blog) - Latest articles (placeholder)
6. **Testimonials** - Patient experiences (placeholder)
7. **FAQ** - Frequently asked questions (accordion with gold icons)
8. **Contact** (#contact) - Dark themed form with gold submit button

#### Footer
- Black background
- Links (Terms & Conditions, Privacy Policy) - Gold hover effect
- Disclaimer (Australian compliance)

### Additional Pages

#### Hair Transplant Page (`/hair-transplant`)
- Detailed information about hair transplant methods
- DHI, FUE, Sapphire, Beard, Eyebrow, Female procedures
- Dark themed consistent with main site

#### Consultation Page (`/consultation`)
- Dedicated consultation booking form
- Fields: First Name, Last Name, Email, Phone (+61), Preferred Date/Time, Service
- Formspree integration
- Back to home navigation

## Important Files

### Video
- `/public/videos/8955660-uhd_3840_2160_24fps.mp4` - Hero background video
- Fallback: Dark gradient background if video not available

### Styles
- `/app/globals.css` - Global styles with dark theme
- Custom classes: `.dark-card`, `.dark-card-light`

## Configuration

### WhatsApp Number
Update in `app/page.tsx`:
```typescript
const whatsappLink = "https://wa.me/61000000000";
```

### Formspree Endpoint
Both forms use: `https://formspree.io/f/maypkdzz`

### Navigation Menu
Edit in `app/page.tsx`:
```typescript
const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];
```

### Theme Colors (Tailwind Config)
```typescript
gold: {
  400: '#FFD700',  // Light gold (hover)
  500: '#DAA520',  // Primary gold
  600: '#B8860B',  // Dark gold
  700: '#9a7209',  // Darker gold
},
dark: {
  50: '#f5f5f5',   // Light gray text
  100: '#3a3a3a',  // Card light
  200: '#2f2f2f',  // Card light alt
  300: '#2a2a2a',  // Card
  400: '#1f1f1f',  // Card dark
  500: '#1a1a1a',  // Background
  600: '#0a0a0a',  // Background dark
},
```

## Responsive Behavior

### Desktop (>768px)
- Full navigation bar visible
- Video hero background
- Multi-column layouts
- Gold accents prominent

### Mobile (<768px)
- Hamburger menu
- Stacked layouts
- Touch-optimized buttons
- Mobile-friendly video playback

## Video Requirements

For optimal performance, your hero video should:
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 or 1280x720
- Duration: 10-30 seconds (loops automatically)
- File size: < 5MB (compress for web)
- Frame rate: 30fps
- No audio required (automatically muted)

## Form Integration

Both forms (contact and consultation) are integrated with Formspree:
- Endpoint: `https://formspree.io/f/maypkdzz`
- Success message: "✅ Thank you, your consultation request has been received."
- Error handling with user-friendly messages
- Auto-reset after 5 seconds
- Dark themed inputs with gold focus rings

## Compliance

The site is prepared in accordance with Australian cosmetic/medical advertising regulations:

- ✅ No guaranteed results
- ✅ No misleading claims
- ✅ No before-after photos
- ✅ Responsibility disclaimer present
- ✅ Professional dark theme suitable for medical services

## Design Philosophy

The dark theme with gold accents creates a premium, professional appearance suitable for medical tourism services. The design:
- Reduces eye strain
- Creates focus on important CTAs (gold buttons)
- Conveys professionalism and luxury
- Maintains excellent readability with white/light gray text
- Provides clear visual hierarchy

## License

© 2025 RevissaWay. All rights reserved.
