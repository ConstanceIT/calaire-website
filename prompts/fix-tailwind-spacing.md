# Fix: Tailwind CSS v4 Spacing Utility Class Names

## The Problem

The deployed site at https://calaire-website.vercel.app/ has **zero spacing** — no padding, margins, or gaps anywhere. The entire layout is collapsed and unreadable.

**Root cause:** Every spacing utility class in the project uses the wrong Tailwind CSS v4 naming convention.

In Tailwind v4, when you define `--spacing-lg: 1.5rem` in the `@theme` block of `global.css`, Tailwind registers `lg` as a spacing value. The correct utility class is `px-lg`. But the codebase used `px-spacing-lg` everywhere — which Tailwind doesn't recognize, so it silently drops the class from the compiled CSS.

## What Needs to Happen

### 1. Verify and fix all spacing class names

Search every `.astro` file in `src/` for any remaining instances of the pattern `*-spacing-*` used as a Tailwind utility class (e.g., `px-spacing-lg`, `py-spacing-md`, `gap-spacing-2xl`, `mt-spacing-3xl`, `p-spacing-sm`, `mb-spacing-xl`, `py-spacing-section`).

The fix for each is to remove the `spacing-` segment:
- `px-spacing-lg` → `px-lg`
- `py-spacing-md` → `py-md`
- `gap-spacing-2xl` → `gap-2xl`
- `mt-spacing-3xl` → `mt-3xl`
- `p-spacing-sm` → `p-sm`
- `py-spacing-section` → `py-section`
- etc.

**Important:** Do NOT change CSS custom property definitions or `var()` references. Only change Tailwind utility class names in `class="..."` attributes. The `@theme` block in `global.css` is correct as-is (`--spacing-lg: 1.5rem` etc.).

A previous edit attempted to fix all 77 instances across 12 files. Verify that edit was applied correctly and catch anything that may have been missed.

### 2. Check for the same pattern in other token namespaces

While spacing is the critical issue, check whether the same mistake exists for other `@theme` tokens:
- **Font sizes:** Are classes like `text-font-size-display` used instead of `text-display`? (The `@theme` defines `--font-size-display`, which should produce the utility `text-display`.)
- **Colors:** Are classes like `bg-color-brand-primary` used instead of `bg-brand-primary`? (The `@theme` defines `--color-brand-primary`, which should produce `bg-brand-primary`, `text-brand-primary`, etc.)
- **Font families:** Are classes like `font-font-heading` used instead of `font-heading`?

Fix any that are wrong, following the same pattern.

### 3. Build and verify

After all fixes:
1. Run `npm run build` — confirm zero errors.
2. Spot-check the compiled CSS output in `dist/` to confirm that spacing utilities like `px-lg`, `py-md`, `gap-2xl` etc. are present.
3. Run `/audit` and `/web-design-guidelines` to check overall quality.

### 4. Commit and push

Commit with a clear message explaining the Tailwind v4 naming convention fix. Push to `main` so Vercel auto-deploys.

## Files Affected

All component files in `src/`:
- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/sections/HeroSection.astro`
- `src/components/sections/ProblemSection.astro`
- `src/components/sections/WhatCalaireIsSection.astro`
- `src/components/sections/GlimpseSection.astro`
- `src/components/sections/SocialProofSection.astro`
- `src/components/sections/PricingSection.astro`
- `src/components/sections/AboutSnippetSection.astro`
- `src/components/sections/ClosingCtaSection.astro`
- `src/components/sections/FaqSection.astro`

Do NOT modify:
- `src/styles/global.css` (the `@theme` definitions are correct)
