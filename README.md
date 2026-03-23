# Stellar Labor Professional Services — Website

Premium, enterprise-grade website for Stellar Labor Professional Services LLC — a workforce solutions and industrial staffing company serving North America.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The dev server runs at `http://localhost:3000`.

## Project Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Home
│   ├── about/              # About page
│   ├── industries/         # Industries page
│   ├── services/           # Services page
│   ├── employers/          # For Employers page
│   ├── talent/             # Careers / Talent page
│   ├── contact/            # Contact page
│   ├── safety/             # Safety & Compliance page
│   └── faq/                # FAQ page
├── components/
│   ├── layout/             # Navbar, Footer, MobileMenu
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page section components
│   ├── forms/              # Form components + Netlify hook
│   └── motion/             # Framer Motion wrappers
├── lib/
│   ├── constants.ts        # All site content/data
│   ├── metadata.ts         # SEO metadata factory
│   └── animations.ts       # Shared animation variants
└── types/                  # TypeScript interfaces
```

## Content Updates

All copy, industry data, services, FAQs, testimonials, and company info are centralized in `src/lib/constants.ts`. Edit this file to update site content without touching components.

## Forms

Three Netlify Forms are configured:
- **Contact** — General inquiries
- **Employer Inquiry** — Staffing requests from clients
- **Talent Application** — Job seeker applications

Forms use the `public/__forms.html` file for Netlify's build-time form detection (required for Next.js App Router). The `useNetlifyForm` hook in `src/components/forms/` handles client-side submission.

## Image Replacement Guide

Placeholder visuals use CSS patterns and Lucide icons. To add real photography:

1. Add optimized WebP images to `public/images/`
2. Use `next/image` component with proper `alt` text
3. **Recommended image style:** documentary/editorial industrial photography — workers on-site, safety gear, infrastructure, field leadership. High-end, realistic, modern. Avoid generic stock photos.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO metadata | No (defaults to stellarlabor.com) |

## Deployment to Netlify

### Via GitHub

1. Push this repo to GitHub
2. Connect the repo to Netlify
3. Netlify will auto-detect the `netlify.toml` configuration
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Node version: 20 (set in netlify.toml)

### Manual Deploy

```bash
npm run build
npx netlify deploy --prod
```

### Verify After Deploy

- [ ] All 9 pages render correctly
- [ ] Navigation works on mobile and desktop
- [ ] All 3 forms submit successfully (check Netlify Forms dashboard)
- [ ] Scroll animations trigger properly
- [ ] SEO metadata appears correctly (check with Open Graph debugger)

## Design System

**Colors:** Navy `#0A1628`, Graphite `#1C2333`, Steel `#64748B`, Off-white `#F8F9FA`, Amber `#C8A052`

**Typography:** Inter — used for all text. Bold/tight tracking for headings, regular weight for body.

**Animations:** Subtle scroll-triggered reveals (fade + slide up), staggered card entrances, number countups. All using Framer Motion with `whileInView` and `once: true`.
