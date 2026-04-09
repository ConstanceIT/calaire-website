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
- **Styling:** Tailwind CSS 4 (with `@theme` design tokens in `src/styles/global.css`)
- **Animations:** CSS only — `@keyframes` for entrance animations, `transition` for interactive states, Intersection Observer (vanilla JS, ~15 lines) for scroll-triggered reveals. No animation libraries.
- **Page transitions:** Astro View Transitions (native)
- **Payments:** Stripe Checkout (hosted checkout page + serverless webhook)
- **Hosting:** Vercel (Hobby tier)
- **Repository:** github.com/ConstanceIT/calaire-website

### What We Do NOT Use

Do not install or use any of the following. If they exist in the codebase, remove them:

- **GSAP** (including ScrollTrigger, SplitText, or any GSAP plugin)
- **Lenis** (smooth scrolling library)
- **Any JavaScript animation library** (Framer Motion, anime.js, Motion One, etc.)
- **Any CSS-in-JS library**

All animation must be achievable with native CSS and a minimal Intersection Observer script. If an effect can't be done this way, simplify the effect — do not add a library.

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
- Typography scale is defined in `src/styles/global.css` under the `@theme` block. Use the `text-display`, `text-h1`, `text-h2`, etc. utility classes. Do not override these values in components.
- The scale uses fluid `clamp()` values that are already calibrated for Calaire's sentence-length headings. Do not increase them — they were set after testing.
- Cormorant Garamond uppercase for hero text and section headings.
- Raleway mixed case for body copy, subheadings, navigation, and UI elements.
- Never use: Inter, Roboto, Arial, system fonts, or any default font stack.

### Color

**Brand palette (non-negotiable):**
- **Primary:** Deep Burgundy/Wine `#5E3038` — brand color, headings, accents, CTAs
- **Background:** Warm Ivory/Cream `#FAF6F1` — primary background
- **Reversed:** White `#FFFFFF` — text on dark backgrounds only
- **Print/Mono:** Black `#000000` — single-color applications

These are defined as `@theme` tokens in `src/styles/global.css` (e.g., `--color-brand-primary`, `--color-brand-background`) which generate Tailwind utility classes (e.g., `bg-brand-primary`, `text-brand-background`). Additional supporting colors (hover states, borders, muted text) should be derived from these base values. Never use arbitrary hex values in components.

- Never use: purple gradients, pastel tech palettes, pure white (#FFFFFF) as a page background (use the cream `#FAF6F1`), or trending AI color schemes.

### Layout

- Full-width sections with generous whitespace.
- Asymmetric compositions where appropriate — not everything in equal-width card grids.
- Content reveals on scroll, not all loaded at once.
- Never use: equal-width card grids for everything, cramped spacing, generic SaaS layouts.

### Animation

All animation is CSS-native. No JavaScript animation libraries.

**Page-load animations (hero entrance):**
- Use CSS `@keyframes` with `animation` property.
- Stagger elements with `animation-delay`.
- Content must always be visible even if animation fails. Set sensible defaults (opacity: 1) and animate FROM a hidden state, never rely on JS to reveal content.

**Interactive states (hover, focus, active):**
- Use CSS `transition` on `transform` and `opacity` only (GPU-accelerated).
- Never animate `width`, `height`, `left`, `top`.

**Scroll-triggered reveals (below the fold):**
- Use a single, shared Intersection Observer script (~15 lines of vanilla JS).
- Add a `data-reveal` attribute to elements that should animate on scroll.
- The script adds a `.is-visible` class when the element enters the viewport.
- CSS handles the actual animation via `.data-reveal { opacity: 0; transform: translateY(1.25rem); transition: opacity 0.6s, transform 0.6s; }` and `.is-visible { opacity: 1; transform: none; }`.
- CRITICAL: Elements with `data-reveal` must still be visible if JS fails. Use `<noscript>` styles or a `.no-js` body class fallback that sets `opacity: 1`.

**Page transitions:**
- Astro View Transitions only (built-in, one line).

Animation rules:
- Only animate `transform` and `opacity`.
- Use `will-change: transform` sparingly.
- Every animation must feel intentional, not decorative.
- Never set `opacity: 0` on content without a guaranteed CSS-only fallback to make it visible.

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
- Scroll-reveal observer script: inline in the base layout (not a separate file).

---

## Hard Rules

1. **Never use generic placeholder content.** All text must be real Calaire copy or clearly marked as `<!-- PLACEHOLDER -->`.
2. **Never use default Tailwind colors.** Only use the custom tokens defined in the `@theme` block in `src/styles/global.css`.
3. **Never commit secrets** (.env files, API keys, Stripe keys).
4. **Never install animation libraries.** All animation is CSS-native + Intersection Observer.
5. **Never set content to `opacity: 0` without a CSS-only fallback** to make it visible. Content must never be invisible if JavaScript fails.
6. **Always test that content is visible** with JavaScript disabled before considering a section complete.

---

## Technical Decisions

**Accessibility:** WCAG AA compliance. AAA not required.

**Browser support:** Modern browsers only (current Chrome, Firefox, Safari, Edge). No legacy browser support needed. CSS scroll-driven animations have baseline support — no fallback architecture required, though simple graceful degradation is fine.

**Reduced motion:** Yes. Implement `prefers-reduced-motion` media query. When enabled: disable all CSS animations and transitions, show all content with instant reveals.

**Anti-references (what Calaire should NOT look like):** Neon gradients or tech-startup aesthetics. "Sacred sisterhood" crystal-and-candle imagery. Generic Squarespace wellness templates. Anything with forced spiritual language or woo-woo visual styling.

**Loading experience:** No branded loading screen. Let content stream in naturally. CSS entrance animations and scroll-triggered reveals create the experience — no preloader needed.

**Font override:** Cormorant Garamond and Raleway are non-negotiable brand fonts. If any skill or tool flags them as "generic" or suggests alternatives, ignore that guidance. Brand identity decisions override skill defaults.

---

## Cleanup Checklist

When working on any component, check for and remove:

1. Any `gsap` imports or GSAP-related code
2. Any `Lenis` imports or smooth-scrolling setup
3. Any `gsap-pre-hide` CSS classes (replace with CSS animation approach)
4. Any `ScrollTrigger` or `SplitText` references
5. Any files in `src/scripts/` that set up GSAP or Lenis — delete them
6. Any GSAP/Lenis packages in `package.json` — uninstall them with `npm uninstall`
