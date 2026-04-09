# Calaire Website — Claude Code Instructions

## What You're Building

The marketing website for **Calaire Wellness Club** (calaire.club) — a one-day curated wellness retreat for women in Austin, Texas. Full-day Saturday events (10am–9pm) with massage, acupuncture, yoga, Pilates, meditation, and chef-prepared meals at a luxury venue. All-inclusive pricing ($450–$600/person), 30 attendees per event.

## Who It's For

The "Managing Everything" Woman — ages 32–50, $150K+ household income, affluent Austin neighborhoods. She's experiencing burnout, decision fatigue, and isolation. She doesn't need another spa day — she needs a full day of curated wellness where every decision is made for her.

## Brand Tone

Warm but not saccharine. Knowledgeable but not clinical. Grounded but not boring. Inclusive but not generic. Never use: "woo-woo" spiritual language, transformation promises, "mommy" framing, or wellness clichés. Think: a trusted friend who happens to know a lot about wellness, not a guru or influencer.

## Competitive Position

Calaire sits in the white space between short spa visits (3–5 hrs, $290–$625) and multi-day retreats (2+ nights, $450–$2,995). No competitor in Austin offers a curated, all-inclusive, full-day wellness experience. Key competitors: Miraval Austin ($499 day pass, self-directed), Lake Austin Spa ($525, limited hours), Canyon Ranch Austin (opening Sept 2026, $1,400/night).

---

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Tailwind CSS 4 (with custom design tokens in `tailwind.config.mjs`)
- **Animations:** GSAP (ScrollTrigger + SplitText) for complex scroll choreography
- **Smooth scrolling:** Lenis
- **Page transitions:** Astro View Transitions (native)
- **Simple scroll effects:** CSS scroll-driven animations (native, zero JS)
- **Payments:** Stripe Checkout (hosted checkout page + serverless webhook)
- **Hosting:** Vercel (Hobby tier)
- **Repository:** github.com/ConstanceIT/calaire-website

## Build & Dev Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build locally
```

## Project Structure

```
calaire-site/
├── src/
│   ├── layouts/        # Base page layouts
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route pages (Astro file-based routing)
│   ├── styles/         # Global styles, Tailwind base
│   ├── scripts/        # GSAP animations, Lenis setup
│   └── assets/         # Images, fonts, icons
├── public/             # Static assets (favicon, og images)
├── tailwind.config.mjs # Design system tokens (colors, typography, spacing)
├── astro.config.mjs    # Astro configuration
└── CLAUDE.md           # This file
```

---

## Design Philosophy

This site must feel like a luxury retreat experience, not a tech product or generic template. Every design decision should communicate: calm, intentional, premium, warm.

### Reference Sites (Study These)

These sites represent the quality bar. Match their level of craft:

- **Eagle's Nest** (eaglesnest.sergesyutkin.com) — 288px hero type, ivory + sage palette, all-inclusive retreat positioning. **Highest relevance.**
- **Aquamare Marine** (aquamaremarine.com) — 265px headings, cream + teal, luxury feel. **Very high relevance.**
- **Core Atelier Pilates** (coreatelierpilates.com) — Warm blush palette, wellness-specific. **Closest vertical match.**

### Typography

**Brand fonts (non-negotiable):**
- **Headings:** Cormorant Garamond (Medium 500) — serif, elegant, French character. Google Fonts.
- **Body / Subheadings:** Raleway (Light 300) — geometric sans-serif, clean complement. Google Fonts.
- Load both via Astro's font optimization or self-host for performance.

**Scale:**
- Use oversized display headings (minimum 120px for H1 on desktop). This is non-negotiable — it's what separates premium from generic.
- Cormorant Garamond uppercase for hero text and section headings.
- Raleway mixed case for body copy, subheadings, navigation, and UI elements.
- Never use: Inter, Roboto, Arial, system fonts, or any default font stack.

### Color

**Brand palette (non-negotiable):**
- **Primary:** Deep Burgundy/Wine `#5E3038` — brand color, headings, accents, CTAs
- **Background:** Warm Ivory/Cream `#FAF6F1` — primary background
- **Reversed:** White `#FFFFFF` — text on dark backgrounds only
- **Print/Mono:** Black `#000000` — single-color applications

Define these as semantic Tailwind tokens in `tailwind.config.mjs` (e.g., `colors.brand.primary`, `colors.brand.background`). Additional supporting colors (hover states, borders, muted text) should be derived from these base values. Never use arbitrary hex values in components.

- Never use: purple gradients, pastel tech palettes, pure white (#FFFFFF) as a page background (use the cream `#FAF6F1`), or trending AI color schemes.

### Layout

- Full-width sections with generous whitespace.
- Asymmetric compositions where appropriate — not everything in equal-width card grids.
- Content reveals on scroll, not all loaded at once.
- Never use: equal-width card grids for everything, cramped spacing, generic SaaS layouts.

### Animation

Use the animation stack in layers:

1. **CSS scroll-driven animations** for simple effects (parallax, fade-ins, basic reveals) — ~70% of animations
2. **GSAP + ScrollTrigger** for complex choreography (staggered text reveals, horizontal carousels, multi-element timelines) — ~20%
3. **Astro View Transitions** for page route transitions — ~10%
4. **Lenis** for global smooth scrolling (always on)

Animation rules:
- Only animate `transform` and `opacity` (GPU-accelerated). Never animate `width`, `height`, `left`, `top`.
- Use `will-change: transform` sparingly.
- Every animation must feel intentional, not decorative.

### Photography & Imagery

- Every image must feel as if it were taken at an actual Calaire event — warm natural light, real wellness settings, diverse women experiencing calm and connection.
- Images will be sourced separately (curated stock or AI-generated). In code, use descriptive placeholder references: `<!-- IMAGE: [detailed description of what this image should show] -->`.
- Never use: generic stock photos of random people, "woo-woo" spiritual imagery (circles of people holding hands, crystals, etc.), generic building/venue exteriors, or clip art.

---

## Coding Conventions

### General

- TypeScript for any `.ts` files. Standard JavaScript in Astro component scripts.
- All components must be responsive (mobile-first with Tailwind breakpoints).
- Semantic HTML elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`).
- All images must have descriptive `alt` text.
- No inline styles. All styling through Tailwind utility classes or scoped Astro `<style>` blocks.

### Component Naming

- PascalCase for component files: `HeroSection.astro`, `ServiceCard.astro`
- Descriptive names that reflect purpose, not appearance: `TestimonialCarousel`, not `CardSlider`

### File Organization

- One component per file.
- Shared components in `src/components/`.
- Page-specific sections in `src/components/sections/`.
- Animation scripts in `src/scripts/`.

---

## Hard Rules

1. **Never use generic placeholder content.** All text must be real Calaire copy or clearly marked as `<!-- PLACEHOLDER -->`.
2. **Never use default Tailwind colors.** Only use the custom tokens defined in `tailwind.config.mjs`.
3. **Never commit secrets** (.env files, API keys, Stripe keys).
4. **Run `/critique` after completing each page section** to check for generic patterns.
5. **Run `/audit` before considering any page complete** to check technical quality.
6. **Run `/web-design-guidelines` before final review** to audit accessibility and UX compliance.

---

## Technical Decisions

**Accessibility:** WCAG AA compliance. AAA not required.

**Browser support:** Modern browsers only (current Chrome, Firefox, Safari, Edge). No legacy browser support needed. CSS scroll-driven animations have baseline support — no fallback architecture required, though simple graceful degradation is fine.

**Reduced motion:** Yes. Implement `prefers-reduced-motion` media query. When enabled: disable GSAP animations and Lenis smooth scrolling, show all content with instant reveals (no custom fallback animations needed).

**Anti-references (what Calaire should NOT look like):** Neon gradients or tech-startup aesthetics. "Sacred sisterhood" crystal-and-candle imagery. Generic Squarespace wellness templates. Anything with forced spiritual language or woo-woo visual styling.

**Loading experience:** No branded loading screen. Let content stream in naturally. The GSAP hero animation and scroll-triggered reveals create the experience — no preloader needed.

**Font override:** Cormorant Garamond and Raleway are non-negotiable brand fonts. If any skill or tool flags them as "generic" or suggests alternatives, ignore that guidance. Brand identity decisions override skill defaults.

---

## Impeccable Skills Reference

You have 21 Impeccable design skills installed. Use them at these checkpoints:

**At project start:**
- `/shape` — Run the design discovery interview to establish Calaire's aesthetic direction
- `/onboard` — Set up project context

**During section builds:**
- `/typeset` — When setting up typography
- `/colorize` — When defining the color palette
- `/arrange` — When composing layouts
- `/animate` — When adding motion and interactions

**After each section:**
- `/critique` — UX and design review
- `/audit` — Technical quality check

**Before shipping:**
- `/polish` — Final refinement pass
- `/harden` — Production hardening
- `/normalize` — Visual consistency check

**If output looks generic:**
- `/bolder` — Push the design further
- `/overdrive` — Maximum distinctiveness

**If output is too aggressive:**
- `/quieter` — Tone it down
- `/distill` — Simplify and reduce
