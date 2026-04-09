# Homepage Build Prompt

You are building the homepage for Calaire Wellness Club (calaire.club). Read your CLAUDE.md file first — it contains the tech stack, design system, brand context, and coding conventions you must follow.

Before writing any code, run `/shape` to establish the design direction, then `/onboard` to set up project context.

---

## Project Initialization (If Not Already Done)

If the Astro project hasn't been initialized yet, set it up first:

1. Initialize Astro 5 with TypeScript in this directory
2. Install and configure Tailwind CSS 4
3. Install GSAP (gsap + @gsap/scrolltrigger + @gsap/splittext)
4. Install Lenis (@studio-freight/lenis)
5. Configure `tailwind.config.mjs` with the brand design tokens from CLAUDE.md (colors, typography, spacing)
6. Set up the base layout with Lenis smooth scrolling enabled globally
7. Load fonts: Cormorant Garamond (Medium 500) and Raleway (Light 300) via Google Fonts or self-hosted
8. Enable Astro View Transitions
9. Set up the global page structure: header with navigation, footer, and page wrapper

### Navigation (Header)
- Minimal, fixed header
- Logo: "CALAIRE" in Cormorant Garamond uppercase, left-aligned. Below it, "WELLNESS CLUB" in Raleway Light, smaller
- Nav links right-aligned: The Experience | About | FAQ
- Primary CTA button: "Reserve Your Place" → /book
- Mobile: hamburger menu with overlay navigation
- Header should be transparent on the hero, then gain a subtle cream background on scroll

### Footer (All Pages)
- Cream background, slightly darker than page background
- Logo (wordmark) centered
- Navigation links
- Contact: hello@calaire.club | phone number placeholder
- Social links placeholders
- Legal: Privacy Policy | Terms (placeholder links)
- Location: Austin, Texas
- Copyright: © 2026 Calaire Wellness Club

---

## Homepage Sections

Build the homepage section by section, in this exact order. After completing each section, run `/critique` to check for generic patterns.

---

### Section 1: Hero

**Layout:** Full-bleed background image covering the viewport. Content vertically and horizontally centered. Overlay to ensure text readability.

**Content:**
- Headline (Cormorant Garamond, uppercase, minimum 120px desktop): "A FULL DAY DESIGNED AROUND ONE IDEA: REST."
- Subheadline (Raleway Light, ~20px): "Curated wellness retreats for women in Austin. Massage, movement, meditation, and meals — all included, all handled. Your only job is to show up."
- Two CTAs side by side:
  - Primary (filled button, burgundy #5E3038 bg, white text): "Reserve Your Place" → /book
  - Secondary (outlined button, white border, white text): "See What's Included" → /experience

**Image:** `<!-- IMAGE: Wide-angle interior of a sunlit wellness space — warm wood floors, linen curtains catching soft light, green foliage visible through large windows. No people. Calm, airy, inviting. Warm ivory and sage tones. A room you want to walk into and exhale. -->`

**Animation:**
- Headline: GSAP SplitText — splits into words, each word fades in with subtle upward translateY(20px), staggered 80ms apart
- Subheadline: Fades in 300ms after headline completes
- CTAs: Fade in 200ms after subheadline
- Background image: Subtle parallax (moves slower than scroll) via CSS scroll-driven animation

---

### Section 2: The Problem

**Layout:** Centered text block, max-width ~700px. Cream background (#FAF6F1). No image. Generous vertical padding (120px+ top and bottom).

**Content (each line is its own paragraph):**

"You run the calendar. You manage the meals, the logistics, the emotional labor of everyone around you."

"When someone asks what you need, you don't even know where to start."

"Calaire exists for that moment. The one where you stop managing and start breathing."

**Typography:** Raleway for the first two paragraphs (~18px). The final paragraph ("Calaire exists...") in Cormorant Garamond italic, slightly larger (~22px), as a pull-out statement.

**Animation:** Each paragraph fades in on scroll, one at a time, with 200ms delay between them. CSS scroll-driven animation (view() timeline).

---

### Section 3: What Calaire Is

**Layout:** Left-aligned section heading. Below it, three content blocks in an asymmetric staggered grid — NOT equal-width cards. Example layout:
- Block 1: 55% width, left-aligned
- Block 2: 45% width, right-aligned, offset downward by ~60px
- Block 3: 50% width, centered, offset downward another ~60px

Each block contains: a text area and an image. Alternate image position (Block 1: image right of text. Block 2: image left of text. Block 3: image right of text).

**Section heading (Cormorant Garamond, uppercase, ~80px):** "ONE DAY. EVERYTHING INCLUDED. NO DECISIONS REQUIRED."

**Block 1 — The Format**
- Text: "A full Saturday, 10am to 9pm. Not a spa appointment. Not a class. A complete day of wellness — structured so you don't have to think about what comes next."
- Image (right side): `<!-- IMAGE: A woman mid-yoga stretch in a warm, naturally-lit studio. Soft focus. She looks relaxed, not performative. Shot from the side, not posed toward camera. -->`

**Block 2 — The Experience**
- Text: "Massage. Acupuncture. Yoga. Pilates. Meditation. Three chef-prepared meals. Thirty women, one venue, one price."
- Image (left side): `<!-- IMAGE: Close-up of hands during a massage — warm lighting, clean linens, massage oil catching the light. Intimate, not clinical. -->`

**Block 3 — The Simplicity**
- Text: "One price covers everything. No add-ons, no upsells, no tipping decisions. You leave your wallet at home and your to-do list at the door."
- Image (right side): `<!-- IMAGE: A beautifully set communal dining table — linen napkins, ceramic plates, fresh herbs as centerpiece, natural light from nearby windows. Warm and abundant, not fussy or formal. -->`

**Animation:** Blocks stagger in on scroll. Each block slides in from its respective side (Block 1 from left, Block 2 from right, Block 3 from left). GSAP ScrollTrigger, 200ms stagger. Images have a subtle scale-up from 0.95 to 1.0 on reveal.

---

### Section 4: A Glimpse of the Day

**Layout:** Vertical scroll sequence with three time blocks. Each block is a full-width row with image on one side (alternating) and text on the other. 50/50 split. Generous spacing between blocks.

**Section heading (Cormorant Garamond, uppercase, ~80px):** "FROM SUNRISE YOGA TO CANDLELIT DINNER."

**Morning — 10am**
- Text side (right): "Arrive to a quiet room. Set your things down. The day begins with guided movement — yoga or Pilates — to settle you into your body and out of your head."
- Time label (Cormorant Garamond, large, ~60px, light opacity): "10am"
- Image side (left, 50%): `<!-- IMAGE: Early morning light in a studio space. A small group of women on yoga mats, spaced comfortably apart. Instructor at the front. Peaceful, not crowded. -->`

**Afternoon — 2pm**
- Text side (left): "After a long lunch with no agenda, the afternoon is yours. Massage. Acupuncture. Meditation. Time to do nothing at all. There's space for whatever you need."
- Time label: "2pm"
- Image side (right, 50%): `<!-- IMAGE: A woman lying on a massage table, eyes closed. Warm ambient lighting. A single candle. Clean, minimal, calm. -->`

**Evening — 7pm**
- Text side (right): "The day closes with dinner — a meal designed for conversation, not performance. You'll sit with women who spent the day alongside you. No one has to explain themselves."
- Time label: "7pm"
- Image side (left, 50%): `<!-- IMAGE: Evening dinner scene. Warm candlelight, women seated at a long communal table, laughing naturally. Wine glasses, ceramic plates, greenery. Intimate but not staged. -->`

**CTA (centered, below the three blocks):** "See the full experience" → /experience

**Animation:** Each time block reveals on scroll — image slides in from its side, text fades in from the opposite. GSAP ScrollTrigger. Time labels fade in at low opacity first, then increase as the block fully enters viewport. Images have subtle parallax (CSS scroll-driven).

---

### Section 5: Social Proof

**Layout:** Cream background. Primary quote centered, large. Two secondary quotes below in a two-column layout.

**Note for code:** All testimonials are placeholders. Wrap each in a component that's easy to update later. Add a `<!-- PLACEHOLDER: Replace with real testimonials post-launch -->` comment.

**Primary quote (Cormorant Garamond italic, ~32px, centered, max-width 800px):**
"I didn't realize how much tension I was carrying until it was gone. I came home and had patience with my kids for the first time in weeks."

**Secondary quote 1 (Raleway, ~18px):**
"I've wanted to do a retreat for years but couldn't justify being away overnight. This was exactly what I needed."

**Secondary quote 2 (Raleway, ~18px):**
"No one tried to sell me anything. No one asked me to share my feelings in a circle. I just... rested."

**No images in this section.** Let the words breathe.

**Animation:** Primary quote fades in on scroll. Secondary quotes stagger in 200ms apart. Simple CSS scroll-driven fades.

---

### Section 6: Pricing

**Layout:** Centered content block. Large price number as the focal point. Descriptive text below. Single CTA. Cream background.

**Section heading (Cormorant Garamond, uppercase, ~60px):** "ONE PRICE. EVERYTHING INCLUDED."

**Price (Cormorant Garamond, very large, ~100px+ desktop, burgundy #5E3038):** "$550"
**Price qualifier (Raleway Light, ~16px, below price):** "per person"

**Inclusion text (Raleway, ~18px, centered, max-width 700px):**
"Eleven hours of curated wellness — yoga, Pilates, massage, acupuncture, meditation. Three chef-prepared meals. A private venue. A team handling every detail. Thirty women, one day, zero surprises."

**CTA (burgundy filled button):** "Reserve Your Place" → /book

**Small print (Raleway, ~14px, muted text color):** "Spaces are limited to 30 guests per event."

**Animation:** Price number counts up from $0 to $550 on scroll entry using GSAP. Inclusion text and CTA fade in after the count completes.

---

### Section 7: About Snippet

**Layout:** Two columns, asymmetric. Image on the left (40% width). Text on the right (60% width). Image should be slightly taller than the text block, creating a subtle overlap/offset.

**Text (right column):**

"Calaire was founded by Francesca, a Pilates and yoga instructor who spent years watching the same women show up to her studio running on empty."

"She kept hearing the same thing: 'I need a full day to myself, but I can't leave overnight.'"

"So she built one."

"Calaire is the retreat experience these women were asking for. One day. Everything taken care of. No guilt, no logistics, no compromise."

**CTA (text link with arrow, not a button):** "Read our story →" → /about

**Image (left column, 40%):** `<!-- IMAGE: Portrait of Francesca — warm, natural light, relaxed expression, looking slightly off-camera. Wellness setting (studio or natural backdrop). Warm tones. Approachable and confident, not posed or performative. -->`

**Animation:** Image slides in from left. Text fades in from right. GSAP ScrollTrigger, triggered when section is 20% in viewport.

---

### Section 8: Closing CTA

**Layout:** Full-width section. Background color shift — slightly darker cream or soft sage green. Centered text. Two CTAs stacked or side by side.

**Headline (Cormorant Garamond, uppercase, ~80px):** "YOU'VE BEEN MANAGING EVERYTHING. LET SOMEONE MANAGE THIS."

**Subheadline (Raleway Light, ~18px):** "Thirty guests. One Saturday. Everything included."

**Primary CTA (burgundy filled button):** "Reserve Your Place" → /book
**Secondary CTA (text link):** "Have questions? Get in touch" → mailto:hello@calaire.club

**No image.** The typography carries this section.

**Animation:** Background color transitions smoothly on scroll entry (CSS scroll-driven). Headline fades in, subheadline follows, CTAs appear last.

---

### Section 9: FAQ Teaser

**Layout:** Centered, max-width ~800px. Accordion-style expandable items. Clean, minimal — no heavy borders or backgrounds on the accordion items. Subtle divider lines between items.

**Section heading (Cormorant Garamond, uppercase, ~60px):** "COMMON QUESTIONS"

**Q: What exactly is a one-day wellness retreat?**
A: A full Saturday — 10am to 9pm — of curated wellness at a private venue in Austin. Yoga, Pilates, massage, acupuncture, meditation, and three chef-prepared meals. Everything is scheduled and handled. You just arrive.

**Q: Do I need experience with yoga or Pilates?**
A: None at all. Every session is designed to meet you where you are. The instructors are experienced with all levels.

**Q: What does the price cover?**
A: Everything. Every service, every meal, every detail. No add-ons, no upsells, no surprise charges. The price you see is the only price you pay.

**Q: Can I come alone?**
A: Most of our guests do. The day is designed for connection without pressure — communal meals and shared experiences create natural conversation. No forced bonding.

**CTA (text link with arrow):** "See all questions →" → /faq

**Animation:** Accordion expand/collapse uses smooth CSS height transitions (300ms ease). No scroll-triggered animation for this section — it should feel static and functional.

---

## Final Checks

After completing all sections:

1. Run `/audit` — check technical quality across the full page
2. Run `/critique` — full UX and design review
3. Run `/web-design-guidelines` — accessibility and compliance audit
4. Run `/normalize` — visual consistency check
5. Verify responsive behavior at 375px (mobile), 768px (tablet), 1440px (desktop)
6. Verify all animations are smooth and performant (only animating transform and opacity)
7. Verify Lenis smooth scrolling works correctly with all GSAP ScrollTrigger instances
8. Verify all placeholder images have `<!-- IMAGE: ... -->` comments

If any section looks generic or template-like after building, run `/bolder` on that section before moving on.
