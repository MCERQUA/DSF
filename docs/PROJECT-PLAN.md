# Desert Spray Foaming Website Recreation Plan

## Project Overview

Recreating the WordPress website at https://desertsprayfoaming.com/ as a modern Next.js static site while preserving:
- All URL structures
- All images and assets
- All text content
- All pages (742 total)

## Scope Summary

| Category | Count | Approach |
|----------|-------|----------|
| Core pages (Home, About, Services, Contact, Gallery, Blog, Sitemap, Find Us) | 8 | Manual recreation |
| County service area pages | 5 | Manual recreation |
| City-specific location pages | ~726 | Template-based generation |
| Blog posts | 3 | Manual recreation |
| **Total** | **~742 pages** | |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Urbanist (Google Fonts)
- **Forms:** React Hook Form + server actions
- **Deployment:** Vercel (recommended) or any static host

## Design Tokens

```css
/* Colors extracted from live site */
--purple-dark: #391f56;
--purple-medium: #4a2c6a;
--tan-gold: #caa982;
--tan-light: #CCB18A;
--teal-accent: #7EBEC5;
--text-dark: #333333;
--text-light: #ffffff;
--bg-light: #f5f5f5;
```

## Reference PDFs

Located in `/docs/originals/`:
- `home.pdf` - Homepage reference
- `about-us.pdf` - About page reference
- `services.pdf` - Services page reference
- `contact-us.pdf` - Contact page reference
- `find-us-on-the-web.pdf` - Web presence page reference
- `sitemap.pdf` - Sitemap page reference

These PDFs can be used to recreate main pages without browser tools (except for images).

## Directory Structure

```
/home/mike/Mike-AI/DSF/
├── docs/
│   ├── originals/          # PDF references of main pages
│   ├── PROJECT-PLAN.md
│   └── LOCATION-PAGES-GUIDE.md
├── public/
│   └── images/             # All downloaded images
├── src/
│   ├── app/                # Next.js pages (App Router)
│   │   ├── page.tsx        # Homepage
│   │   ├── about-us/
│   │   ├── services/
│   │   ├── contact-us/
│   │   ├── services-gallery/
│   │   ├── blog/
│   │   ├── sitemap/
│   │   ├── find-us-on-the-web/
│   │   ├── spray-foam-insulation/
│   │   ├── attic-insulation/
│   │   ├── commercial-insulation/
│   │   ├── insulation-removal/
│   │   └── [service]-[city]-tx/  # Dynamic location pages
│   ├── components/         # Reusable components
│   ├── data/               # City data, content data
│   └── lib/                # Utilities
├── scripts/                # Build scripts for page generation
└── package.json
```

## Phase Breakdown

### Phase 1: Foundation
- [x] Create documentation
- [ ] Initialize Next.js project
- [ ] Configure Tailwind with design tokens
- [ ] Download all website images

### Phase 2: Core Components
- [ ] Header with navigation menu
- [ ] Footer with links and contact info
- [ ] Contact form component
- [ ] Service card component
- [ ] Hero section component
- [ ] CTA banner component
- [ ] 3-step process component
- [ ] Benefits section component

### Phase 3: Main Pages
- [ ] Homepage
- [ ] About Us
- [ ] Services
- [ ] Contact Us
- [ ] Services Gallery
- [ ] Blog (index + 3 posts)
- [ ] Sitemap
- [ ] Find Us on the Web

### Phase 4: Location Pages
- [ ] Create location page template
- [ ] Build city data file
- [ ] Generate all location pages
- [ ] Verify URL structure matches original

## URL Structure Reference

All URLs must match the original WordPress site exactly:

### Core Pages
- `/` - Homepage
- `/about-us/` - About page
- `/services/` - Services overview
- `/contact-us/` - Contact page
- `/services-gallery/` - Gallery
- `/blog/` - Blog index
- `/sitemap/` - Sitemap
- `/find-us-on-the-web/` - Web presence page

### Service Category Pages
- `/spray-foam-insulation/`
- `/attic-insulation/`
- `/commercial-insulation/`
- `/insulation-removal/`

### County Pages
- `/spray-foam-insulation-andrews-county-tx/`
- `/spray-foam-insulation-gaines-county-tx/`
- `/spray-foam-insulation-lubbock-county-tx/`
- `/spray-foam-insulation-terry-county-tx/`
- `/spray-foam-insulation-yoakum-county-tx/`

### Location Pages (Template-Generated)
Pattern: `/{service}-{city}-tx/`

Services:
- spray-foam-insulation
- attic-insulation
- home-insulation
- commercial-insulation
- insulation-removal
- insulation-contractor
- insulation-company
- metal-building-insulation
- pole-barn-insulation
- warehouse-insulation
- new-construction-insulation

## Contact Information

- **Phone:** 432-300-7950
- **Email:** klass@desertsprayfoaming.com
- **Address:** 150 Fm 1429 Seminole, TX 79360
- **Facebook:** [Link to Facebook page]

## Next Steps

1. Run `npm install` after Next.js setup
2. Run image download script
3. Start development server with `npm run dev`
4. Build location pages with generation script
