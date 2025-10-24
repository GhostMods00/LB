# Lundy Building Group - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium construction and professional services websites with emphasis on trust, heritage, and craftsmanship. Focus on established credibility (Since 1975) with modern execution.

---

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Brand Maroon: `0 100% 25%` (HSL: #800000) - Primary brand color, buttons, headings
- Maroon Dark: `0 100% 21%` (HSL: #6A0000) - Hover states, darker accents
- Accent Gold: `43 47% 60%` (HSL: #C7A86D) - Subtle highlights, badges, success states

**Neutrals:**
- Charcoal: `215 25% 17%` (HSL: #1F2937) - Body text, dark mode backgrounds
- Slate: `215 25% 27%` (HSL: #334155) - Secondary text, borders
- Off-White: `210 40% 98%` (HSL: #F8FAFC) - Page backgrounds, light sections

**Semantic Colors:**
- Success: `142 71% 45%` - Form success states
- Error: `0 84% 60%` - Form validation errors
- Warning: `38 92% 50%` - Important notices

**Contrast Requirements:**
Maroon must meet WCAG AA standards on light backgrounds. Use off-white backgrounds with maroon text/buttons. Gold accent used sparingly for visual interest, never as primary CTA color.

---

### B. Typography

**Font Families:**
- **Headings**: Playfair Display (Serif) - Strong, classical, conveys heritage and permanence
  - Weights: 600 (SemiBold), 700 (Bold)
  - Usage: H1, H2, H3, hero headlines
- **Body**: Inter (Sans-serif) - Clean, highly readable, modern
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
  - Usage: Body text, UI elements, navigation

**Type Scale:**
- H1 (Hero): 3.5rem desktop / 2.5rem mobile, Playfair Display Bold
- H2 (Section): 2.5rem desktop / 2rem mobile, Playfair Display SemiBold
- H3 (Cards): 1.75rem desktop / 1.5rem mobile, Playfair Display SemiBold
- Body Large: 1.125rem, Inter Regular
- Body: 1rem, Inter Regular
- Small/Caption: 0.875rem, Inter Medium

---

### C. Layout System

**Spacing Primitives:**
Primary spacing units: 2, 4, 8, 12, 16, 20, 24, 32 (Tailwind units)
- Component padding: p-4, p-6, p-8
- Section padding: py-16 to py-32 (desktop), py-12 to py-20 (mobile)
- Grid gaps: gap-4, gap-6, gap-8

**Container Strategy:**
- Max width: 1280px (max-w-7xl) for full sections
- Content max: 1024px (max-w-6xl) for text-heavy pages
- Reading width: 65ch (max-w-prose) for long-form content

**Grid Patterns:**
- Services: 3-column grid desktop (lg:grid-cols-3), 2-column tablet (md:grid-cols-2), single mobile
- Projects: Masonry-style 2-column desktop, single mobile
- Testimonials: 2-column desktop, single mobile

---

### D. Component Library

**Navigation:**
- Sticky header on scroll with subtle maroon background
- Desktop: Horizontal navigation with dropdown for Services
- Mobile: Hamburger menu with slide-out drawer
- CTA button "Get a Quote" in maroon always visible

**Buttons:**
- Primary: Maroon background, white text, rounded corners (rounded-md)
- Outline: Maroon border, maroon text, transparent background with blur backdrop when on images
- Sizes: Regular (px-6 py-3), Large (px-8 py-4)
- Hover: Slightly darker maroon, subtle lift/shadow

**Cards:**
- Service Cards: White background, subtle shadow, maroon accent strip on top, icon + title + description + arrow link
- Project Cards: Image-heavy with overlay gradient, white text, category badge in gold
- Testimonial Cards: Light gray background, quote icon, centered text, attribution in smaller type

**Forms:**
- Input fields: Border slate, focus ring maroon, rounded corners
- Labels: Inter Medium, slate color
- Error states: Red border, error message below
- Success: Green checkmark, confirmation message

**Footer:**
- Multi-column layout: Company info, Quick Links, Services, Contact
- Maroon accent line separator at top
- Social icons in gold hover state
- ABN, business hours, address prominently displayed

---

### E. Visual Treatments

**Hero Section (Home):**
- Full-width background image showing construction project (high-quality, professional)
- Dark overlay gradient for text legibility
- Large Playfair Display headline centered
- Subtitle emphasizing "Since 1975" heritage
- Primary CTA button with blur backdrop
- Height: 80vh desktop, 60vh mobile

**Section Patterns:**
- Alternating white/off-white backgrounds for visual rhythm
- Generous whitespace between sections (py-20 to py-32)
- Section headings centered with gold accent line below

**Photography Style:**
- Professional construction imagery showing craftsmanship
- Consistent color grading with slight warmth
- Before/after comparisons for remedial works
- Team photos: Professional but approachable
- Project galleries: High-resolution, multiple angles

**Micro-interactions:**
- Subtle fade-in on scroll for sections (respect prefers-reduced-motion)
- Card hover: Slight lift with shadow increase
- Button hover: Scale 1.02 with color darkening
- Image hover: Subtle zoom on project cards

---

## Page-Specific Design Specifications

### Home Page
1. **Hero**: Full-width construction image, overlay, headline "Excellence in Construction Since 1975", CTA
2. **Services Grid**: 4 cards (Religious Precincts, Educational Institutions, Commercial Projects, Remedial Works) with icons
3. **Featured Projects**: 3-column showcase with image + title + brief
4. **Safety Strip**: Icon row highlighting certifications/compliance
5. **Testimonials**: 2-column cards with client quotes
6. **Final CTA Band**: Maroon background, "Ready to Build?" message

### Services Hub + Detail Pages
- Hub: Grid of service category cards
- Detail: Hero image of service type, bulleted benefits, project gallery, process timeline, CTA

### Projects Gallery
- Filterable masonry grid
- Category tags (gold badges)
- Hover reveals project title + client type
- Detail pages: Hero image, challenge/solution/outcome sections, stats boxes, image gallery

### About Page
- Company story with timeline visual
- "Since 1975" prominently featured
- Values cards (Quality, Safety, Relationships)
- Team section with headshots + roles

### Contact Page
- Split layout: Form left, contact details + embedded map right
- Business hours, phone, email, address
- Quote request form with clear labels

---

## Accessibility & Performance

**Contrast Ratios:**
- Maroon on off-white: Minimum 4.5:1
- Body text (charcoal on off-white): Minimum 7:1
- All interactive elements clearly focusable

**Keyboard Navigation:**
- Visible focus rings (maroon outline)
- Skip to main content link
- Logical tab order

**Images:**
- Lazy loading via next/image
- Responsive srcset
- Descriptive alt text for all images
- Decorative images: alt=""

**Performance Targets:**
- Lighthouse Performance: 90+
- LCP: <2.5s
- CLS: <0.1
- Font loading: next/font with font-display: swap

---

## Images Strategy

**Required Images:**
1. **Hero (Home)**: Wide construction site or completed building, professional quality
2. **Services**: Icon-style illustrations or photos for each service category
3. **Featured Projects**: 3 high-quality project photos
4. **About**: Office/team photo, heritage photo from 1975 if available
5. **Project Gallery**: 12-15 diverse construction photos
6. **Testimonials**: Optional client company logos
7. **Contact**: Map embed or static map image

All images should convey professionalism, quality craftsmanship, and attention to detail. Use construction site photos showing active work, completed buildings, and detail shots of quality finishes.

---

**Design Philosophy**: Professional without being corporate, established without being dated, trustworthy without being boring. Every element reinforces 48+ years of construction excellence while demonstrating modern capability.