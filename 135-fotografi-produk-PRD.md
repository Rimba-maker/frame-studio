# PRD: Frame Studio — Fotografi Produk & Commercial

## 1. Brand Identity

**Nama Brand:** Frame Studio
**Alasan Naming:** "Frame" = bingkai/framing fotografi, simbol langsung untuk craft fotografi. Singkat, modern, international-friendly. Cocok untuk studio yang positioning di B2B brand & commercial work.

**Tagline:** *"Visuals That Sell."*

**Target Audience:**
- Brand owner UMKM (perlu foto produk untuk online shop)
- Marketing manager perusahaan menengah-besar
- E-commerce brand (campaign visual, lifestyle shoot)
- F&B owner (menu photography, brand campaign)
- Beauty & skincare brand (product + model shoot)
- Fashion designer (lookbook, campaign)
- Real estate developer (property photography)

**Brand Voice:**
- Tone: Professional, creative-confident, results-oriented
- Style copywriting: Visual-first, fokus ROI & conversion (jualan vs sekadar "cantik")
- Avoid: Overly artsy jargon, vague portfolio talk

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (image-heavy, since ini portfolio studio)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo minimal, nav, CTA "Get Quote" |
| 2 | Hero | React island `client:load` | Showcase work, big image grid |
| 3 | Services | React island `client:visible` | Product, lifestyle, food, model, video |
| 4 | Portfolio | React island `client:visible` | Filter by category, masonry showcase |
| 5 | Case Studies | React island `client:visible` | Detail project dengan results |
| 6 | Studio & Equipment | `.astro` static | Studio capability, lighting setup |
| 7 | The Process | React island `client:visible` | 5-step from brief to delivery |
| 8 | Packages | React island `client:visible` | Pricing per kategori |
| 9 | Clients | React island `client:visible` | Brand logos clients |
| 10 | The Team | React island `client:visible` | Photographer profiles |
| 11 | Testimonial | React island `client:visible` | Quote dengan project results |
| 12 | Contact / Brief | React island `client:idle` | Project inquiry form |
| 13 | Footer | `.astro` static | Sosmed, behance, contact |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Work • Services • Studio • Clients • Journal
- CTA: **Get Quote**

### Hero
- **Headline:** Foto Yang Tidak Hanya Cantik — Tapi Menjual.
- **Subheadline:** Studio fotografi komersial di Jakarta, spesialis product photography, lifestyle campaign, dan brand content untuk UMKM hingga enterprise.
- **CTA Primary:** Lihat Portfolio
- **CTA Secondary:** Konsultasi Gratis

Stat bar: "500+ Brand Served • 50.000+ Photos Delivered • 4.9 ⭐ Client Rating"

### Services
- **Heading:** What We Shoot
- **Subheading:** Setiap brand punya visual language berbeda. Kami ngerti.

Grid 6 service cards:

**📦 Product Photography**
Clean white background, gradient, lifestyle, e-commerce-ready
- 360° spin video
- Multiple angles (front, side, top, back)
- Stylized lifestyle context

**🍔 Food & Beverage Photography**
Menu shot, hero shot, campaign visual
- Drink mixology shots
- Steam & motion food
- Tablescape composition

**👗 Fashion & Lifestyle**
Lookbook, campaign, e-commerce model shots
- Studio & outdoor shoot
- Model casting available
- Hair, makeup, styling included

**💄 Beauty & Cosmetics**
Texture, swatch, splash, hero product
- Macro detail product
- Skin texture close-up
- Model beauty shot

**🏢 Corporate & Branding**
Office, team, headshot, brand documentation
- Annual report photography
- LinkedIn-ready headshots
- Behind-the-scene content

**🎬 Video Content**
Reels, TikTok, brand film, product demo
- 9:16, 1:1, 16:9 multi-format
- Short-form social content
- Brand documentary

### Portfolio
- **Heading:** Selected Work
- **Subheading:** Browse by industry — semua proyek nyata, semua brief brand betulan.

Filter: All • Product • Food • Fashion • Beauty • Lifestyle • Video
Masonry grid 30+ portfolio image, lightbox-able

Caption hover: Brand name, project type, year

### Case Studies
- **Heading:** Case Studies
- **Subheading:** Bukan sekadar foto bagus — kami bantu brand achieve goals.

3 detailed case studies:

**📈 Sambal Pawon — Product Repositioning**
- Brief: Refresh visual identity dari "warung-ish" ke "premium artisan"
- Output: 45 product shots, 12 lifestyle, 8 video reels
- Results: 280% increase ROAS Meta Ads, 4.5x e-commerce conversion
- Timeline: 5 hari shoot, 14 hari delivery

**🍔 Burger Bros — Menu Photography**
- Brief: Hero shot 25 menu items untuk delivery app
- Output: 25 hero shots + 25 angle alternative
- Results: 60% increase delivery order, featured in GoFood top spot
- Timeline: 3 hari shoot, 7 hari delivery

**💄 Sereh Beauty — Brand Launch**
- Brief: Full visual identity untuk skincare brand launch
- Output: 120 product photos, 60 lifestyle, 8 brand films
- Results: Sold out 3.000 units di soft launch week 1
- Timeline: 14 hari shoot, 21 hari delivery

### Studio & Equipment
- **Heading:** Our Studio
- **Body:** Studio 300 m² di Jakarta Selatan dengan natural light, blackout zone, dan setup full equipment. Bisa juga on-location shoot di seluruh Indonesia.

Specs:
- 📍 **Location:** Jakarta Selatan, 300 m² studio
- 💡 **Lighting:** Profoto B10 Plus, Godox AD600 series, full continuous LED setup
- 📸 **Camera:** Canon R5, Sony A1, Fujifilm GFX 100 (medium format)
- 🎨 **Backdrop:** Paper rolls 30+ colors, fabric, wood, marble, custom build set
- 🍽️ **Food Styling Kitchen:** Full kitchen, fridge, prep area
- 👗 **Fashion Capability:** Steamer, makeup station, model holding room

### The Process
- **Heading:** Bagaimana Kami Bekerja
- Timeline 5-step:
  1. **📋 Brief & Consultation** — Discovery call, mood board diskusi, scope final
  2. **📝 Pre-Production** — Shot list, prop sourcing, location scouting (jika perlu)
  3. **📸 Production Day** — Studio/on-location shoot dengan tim lengkap
  4. **✨ Post-Production** — Color grading, retouch, masking sesuai brief
  5. **📦 Delivery** — Online gallery, high-res download, license usage clear

### Packages
- **Heading:** Paket Layanan
- **Subheading:** Harga indikatif. Custom quote tersedia untuk kebutuhan spesifik.

3 cards:

**🌱 Starter — Rp 4.5 jt**
*Untuk UMKM & small brand*
- 15 product photos (white BG + lifestyle)
- 1 hari shoot
- Basic retouch
- High-res delivery 7 hari
- 1x revision

**🌿 Brand Campaign — Rp 12 jt** ⭐ Most Popular
*Untuk launching produk atau campaign*
- 30 product + 15 lifestyle photos
- 5 video reels (15-30s)
- 2 hari shoot
- Pro retouch + color grading
- Delivery 14 hari
- 2x revision
- Model included (jika perlu)

**🌳 Full Production — Rp 25 jt+**
*Untuk enterprise & big launch*
- Custom scope (50+ photos, video, BTS)
- 3-5 hari shoot
- Professional model + styling + makeup
- Premium retouch (cosmetic-grade)
- Delivery 21 hari
- 3x revision
- Custom set build

Add-ons:
- Additional photo Rp 100k - 250k each
- Additional video reel Rp 750k each
- Location fee outside Jakarta Rp 2.5jt+
- Pro model Rp 3 - 15jt / day

### Clients
- **Heading:** Brands We've Worked With
- Logo grid 16-24 brand logos (UMKM lokal, F&B chain, beauty brand, fashion label)
- Marquee scroll desktop, grid mobile

### The Team
- **Heading:** Behind The Lens
- 4 photographer cards:
  - **Dimas Pratama** — Founder & Lead Photographer, 12+ tahun, ex-Vogue Indonesia contributor
  - **Sasha Anindya** — Senior Photographer, food & lifestyle specialist
  - **Reza Maulana** — Senior Photographer, fashion & beauty
  - **Bayu Kusuma** — Senior Videographer & Editor

Hover: Bio, specialty, notable clients

### Testimonial
- **Heading:** Apa Kata Klien
- 4-5 testimonial dengan project visual:

> "Foto Frame Studio bikin produk kami terlihat 3x lebih premium. ROAS Meta Ads naik signifikan setelah ganti visual."
> — **Anita, Founder Sambal Pawon**

> "Tim Frame super organized. Brief jelas, shot list detail, on-time delivery. Worth every rupiah."
> — **Pak Bayu, Marketing Manager PT Burger Bros**

> "Sebagai brand baru, kami butuh visual yang elevate. Frame Studio delivered beyond expectation — sold out di week 1 launch!"
> — **Maya, Founder Sereh Beauty**

### Contact / Brief
- **Heading:** Tell Us About Your Project
- **Body:** Setiap proyek dimulai dengan briefing yang baik. Isi form, atau langsung WhatsApp untuk konsultasi cepat.

Form:
- Nama, Email, WhatsApp
- Nama Brand / Perusahaan
- Tipe Proyek (Product / Food / Fashion / Beauty / Other)
- Estimated Budget Range
- Target Timeline
- Brief deskripsi proyek
- Upload referensi (optional)

**CTA:** Send Brief

Alternative: **WhatsApp Direct**

### Footer
- Tagline: *"Visuals that work harder than you do."*
- Studio: Address Jakarta Selatan + map
- Sosmed: IG (@framestudio.id), Behance, Vimeo, TikTok (BTS content)
- Press: Featured in Marketeers, MIX Marketing, SWA

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/product-photography-studio | "Studio fotografi product" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/photography%20studio%20setup/ | "Photographer di studio" | 1920x1080 |
| Service - Product | Unsplash | https://unsplash.com/s/photos/product-shot-bottle | "Product photography" | 800x800 |
| Service - Food | Pexels | https://www.pexels.com/search/food%20photography%20professional/ | "Food photography hero" | 800x800 |
| Service - Fashion | Unsplash | https://unsplash.com/s/photos/fashion-photography-studio | "Fashion editorial" | 800x800 |
| Service - Beauty | Pexels | https://www.pexels.com/search/beauty%20product%20photography/ | "Beauty product close-up" | 800x800 |
| Service - Corporate | Unsplash | https://unsplash.com/s/photos/corporate-headshot-professional | "Corporate headshot" | 800x800 |
| Service - Video | Pexels | https://www.pexels.com/search/video%20production%20studio/ | "Video production behind scenes" | 800x800 |
| Portfolio (30+) | Unsplash + Pexels | https://unsplash.com/s/photos/commercial-product-shot | Various brand work | 800x800 |
| Case Study - Sambal | Unsplash | https://unsplash.com/s/photos/sambal-product-shot | "Sambal product shot" | 1200x800 |
| Case Study - Burger | Pexels | https://www.pexels.com/search/burger%20photography/ | "Burger menu shot" | 1200x800 |
| Case Study - Beauty | Unsplash | https://unsplash.com/s/photos/skincare-product-clean | "Skincare brand visual" | 1200x800 |
| Studio interior | Unsplash | https://unsplash.com/s/photos/photography-studio-interior | "Studio interior 300m2" | 1200x800 |
| Equipment - Lighting | Pexels | https://www.pexels.com/search/photography%20lighting%20studio/ | "Profoto setup" | 800x600 |
| Equipment - Camera | Unsplash | https://unsplash.com/s/photos/professional-camera-gear | "Professional camera gear" | 800x600 |
| Process - Brief | Pexels | https://www.pexels.com/search/creative%20brief%20meeting/ | "Brief meeting" | 800x600 |
| Process - Pre-prod | Unsplash | https://unsplash.com/s/photos/mood-board-photography | "Pre-production planning" | 800x600 |
| Process - Production | Pexels | https://www.pexels.com/search/photographer%20behind%20scenes/ | "Production day BTS" | 800x600 |
| Process - Post | Unsplash | https://unsplash.com/s/photos/photo-editing-screen | "Post-production editing" | 800x600 |
| Process - Delivery | Pexels | https://www.pexels.com/search/digital%20gallery%20screen/ | "Online gallery delivery" | 800x600 |
| Team portraits | Pexels | https://www.pexels.com/search/photographer%20portrait/ | "Photographer portrait" | 600x800 |
| Clients logos | (placeholder) | Logo brand UMKM/corp | Brand logos | 200x100 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Hero: image grid reveal with stagger
const heroGridReveal = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const imageBlock = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

// Stats counter animation untuk "500+ Brand"
// Pakai useMotionValue + useTransform + animate()
```

### Services Grid (React island, `client:visible`)
- 6 cards reveal stagger `staggerChildren: 0.1`
- Hover: image scale + dark overlay slide-up + service detail reveal
- Image inside: subtle zoom on card hover

### Portfolio (React island, `client:visible`)
- Masonry grid dengan `layout` prop
- Filter tabs: smooth `layoutId` indicator
- Image hover: subtle scale + caption fade-in
- Click → lightbox modal full-screen pakai `AnimatePresence` morph
- Lightbox: keyboard nav (arrow keys), pinch zoom mobile

### Case Studies (React island, `client:visible`)
- 3 detailed cards, large hero image + content
- Image side: parallax slow `y` shift on scroll
- Stats reveal: counter animation (280%, 60%, etc)
- Hover: subtle scale + "Read more" reveal

### Studio & Equipment (`.astro` + small island)
- Specs reveal sequential
- Equipment icons: scale pop on visible

### The Process Timeline (React island, `client:visible`)
- Horizontal timeline desktop, vertical mobile
- Step numbers reveal sequential
- Step icon scale pop
- Connecting line: SVG `pathLength` draw

### Packages Cards (React island, `client:visible`)
- 3 cards reveal stagger
- "Most Popular" emphasized scale slight
- Hover: card lift + checkmark pulse
- Add-ons section: smooth expand

### Clients Logos (React island, `client:visible`)
- Marquee scroll auto (left to right)
- Logos grayscale by default
- Hover: color reveal + scale slight
- Pause on hover

### The Team (React island, `client:visible`)
- 4 photographer cards reveal stagger
- Hover: image grayscale → color + bio slide-up
- Specialty tags: stagger reveal

### Testimonial Carousel (React island, `client:visible`)
- Auto-rotate 8s
- Slide transition with project image swap
- Pause on hover
- Quote mark fade-in

### Contact Form
- Multi-step or single-form smooth experience
- Field focus: border accent
- Dropdown: smooth animation
- File upload (referensi) drag-drop visual feedback
- Submit: button morph + success state

### Scroll Reveal Pattern (reusable)
```tsx
const cinematicFade = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Cursor Effect (optional, desktop)
- Custom cursor: small circle that expands to "View" on portfolio hover
- Lag follower for smooth feel

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Services, Portfolio, Case Studies, Process, Packages, Clients, Team, Testimonial
- `client:idle` → Contact form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** Frame Studio — Commercial Photography Jakarta | Product, Food, Fashion
- **Description:** Studio fotografi komersial di Jakarta. Product, food, fashion, beauty, corporate photography & video. 500+ brand served. Get quote sekarang.
- **Keywords:** fotografi produk jakarta, commercial photography, product photography indonesia, food photography, fashion photography, studio foto jakarta
- **OG Image:** Portfolio showcase grid dengan logo (1200x630)
- **Schema:** `LocalBusiness` + `CreativeWork` + `Service` schema
