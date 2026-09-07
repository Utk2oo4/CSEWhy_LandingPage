# News / Media Recognition Section — Antigravity Specification

## 1. Purpose

Create the **News / Media Recognition** section shown in the supplied reference images.

This section should communicate that CSEWhy has received recognition and coverage from established media outlets for its UPSC preparation platform.

The section should be visually clean, premium, spacious, and strongly focused on the media cards.

The cards must have a **continuous horizontal scroll/marquee animation**.

---

# 2. Section Position

Recommended page flow:

Navbar
↓
Hero
↓
Trust Bar
↓
UPSC Quote
↓
Pan-India Community
↓
App Features
↓
Course Discovery
↓
Social Media Community
↓
Student Reviews
↓
**News / Media Recognition**
↓
Final CTA
↓
Footer

Do not modify the previous sections.

---

# 3. Critical Implementation Rule

Use the supplied reference image only as a visual reference.

Do NOT use the screenshot as:

- a CSS background
- a full-section `<img>`
- a flattened screenshot
- a background containing the cards or text

Recreate the section using real HTML/CSS/React.

The following must be actual frontend elements:

- heading
- subtitle
- media cards
- media logos
- quote text
- marquee animation

---

# 4. Overall Visual Direction

The section should closely match the supplied reference.

Visual characteristics:

- clean white background
- generous whitespace
- centered heading
- large orange/black typography
- single horizontal row of media cards
- subtle card borders
- soft shadows
- rounded corners
- centered logos
- centered quotes
- continuous horizontal movement

Do not over-design this section.

The reference is intentionally simple.

---

# 5. Section Header

At the top center, use the heading:

**CSEWhy in News**

Color treatment:

```text
CSEWhy → #F45116
in News → #171717
```

Recommended desktop:

- font size: `56–64px`
- weight: `700–800`
- line-height: `1.05`
- centered

The orange and black split should be very clear.

---

# 6. Supporting Subtitle

Use:

> CSEWhy has garnered recognition from renowned media outlets for transforming UPSC preparation

Recommended:

- font size: `18–21px`
- line-height: `1.5`
- color: `#555555`
- centered
- max width: approximately `900px`

Spacing:

Heading → subtitle:

`18–24px`

Subtitle → cards:

`48–60px`

---

# 7. Media Cards

Create a single horizontally scrolling row.

The visual structure should resemble:

```text
←

[ Media Card ]
[ Media Card ]
[ Media Card ]
[ Media Card ]
[ Media Card ]

                                      →
```

Cards should partially enter and leave the viewport.

The edges should naturally crop the cards, as shown in the reference.

Do not show a scrollbar.

---

# 8. Card Dimensions

Desktop:

- width: `340–380px`
- height: `230–260px`

Tablet:

- width: `300–340px`
- height: approximately `230px`

Mobile:

- width: `290–320px`
- height: `220–250px`

Do NOT shrink cards too much on mobile.

It is preferable to show one complete card plus part of the next card.

---

# 9. Card Styling

Each media card should have:

- white background
- thin light-gray border
- subtle shadow
- approximately `10–14px` border radius
- centered content
- generous padding

Suggested:

```css
background: #FFFFFF;
border: 1px solid #D8D8D8;
border-radius: 12px;
box-shadow: 0 4px 14px rgba(0,0,0,0.04);
```

Keep shadows subtle.

Do not use large floating shadows.

---

# 10. Media Card Structure

Each card should contain:

```text
MediaCard
├── Media Logo
└── Quote
```

The logo should occupy the upper portion.

The quote should sit below with a comfortable gap.

Example:

```text
┌─────────────────────────────────────┐
│                                     │
│             [LOGO]                  │
│                                     │
│                                     │
│  “CSEWhy empowers aspirants with   │
│   personalized learning tools!”    │
│                                     │
└─────────────────────────────────────┘
```

---

# 11. Media Outlets and Content

Use the following content from the reference.

## Dainik Jagran

Logo:

**Dainik Jagran**

Quote:

> “CSEWhy empowers aspirants with personalized learning tools!”

---

## The New Indian Express

Logo:

**The New Indian Express**

Quote:

> “This ex-aspirant changed the way aspirants prepare for UPSC”

---

## Aaj

Logo:

**Aaj**

Quote:

> “Score 50+ Marks UPSC pre 2024 in first 15 mins if you are CSEWhy aspirant”

---

## The New Indian Express — Mains

Logo:

**The New Indian Express**

Quote:

> “Best answer writing preparation for UPSC Mains with CSEWhy”

---

# 12. Additional Cards

The marquee should contain enough cards to make the scrolling animation visually continuous.

If there are additional verified media mentions available in the project, include them.

Do NOT invent media coverage or quotes.

If only the four verified reference cards are available, duplicate the sequence for the infinite marquee rather than fabricating additional coverage.

---

# 13. Media Logo Handling

Use actual media logos/assets when available in the project.

If the project already contains logo assets:

- reuse them
- preserve their aspect ratio
- do not distort them
- do not crop them

If logo assets are not available, use a clean text-based representation temporarily rather than using unrelated logos.

Do not use random Google image results or unverified logo assets.

Recommended logo area:

```text
height: 65–90px
max-width: 200–240px
```

Use:

```css
object-fit: contain;
```

---

# 14. Logo Positioning

Center each logo horizontally.

Place it near the upper third of the card.

Example:

```text
       ┌────────────────┐
       │                │
       │     LOGO       │
       │                │
       │                │
       │     QUOTE      │
       │                │
       └────────────────┘
```

Maintain consistent logo-area height across all cards.

This prevents quotes from appearing at different vertical positions.

---

# 15. Quote Typography

Quote text should be:

- centered
- dark slate/gray
- medium weight
- approximately `19–22px` desktop
- `16–18px` mobile
- line-height `1.45–1.55`

Example:

> “This ex-aspirant changed the way aspirants prepare for UPSC”

Do not make the quote bold enough to overpower the media logo.

---

# 16. Highlight Card

The reference includes one highlighted Dainik Jagran card.

Give one card a very subtle warm highlight:

```css
background: #FFFCF2;
border-color: #F4C94E;
```

Do not use a strong yellow background.

The highlight should make the card feel selected without disrupting the overall design.

---

# 17. Infinite Scroll Animation

The news cards must move continuously.

Do NOT make them scroll only once.

Do NOT require the user to drag the cards.

Do NOT use a conventional slider with dots.

This should behave like a continuous marquee.

Recommended implementation:

```text
Track A:
[Dainik Jagran]
[Indian Express]
[Aaj]
[Indian Express Mains]

Track B:
[Dainik Jagran]
[Indian Express]
[Aaj]
[Indian Express Mains]
```

Render the sequence twice.

Animate the complete track continuously.

---

# 18. Animation Direction

Default direction:

**RIGHT → LEFT**

Cards should enter from the right side and exit from the left side.

Example:

```text
→ → →      [cards]      → → →

                ↓

← ← ←      [cards]      ← ← ←
```

The actual visual movement should be:

```text
RIGHT → LEFT
```

---

# 19. CSS Marquee

Prefer CSS animation.

Example:

```css
.news-track {
  display: flex;
  width: max-content;
  animation: news-marquee 32s linear infinite;
}

@keyframes news-marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
```

The exact translation must correspond to one complete duplicated sequence.

Do not hard-code an arbitrary pixel value that creates a visible jump.

---

# 20. Animation Speed

Recommended desktop:

`30–40 seconds`

Suggested starting value:

```css
animation-duration: 34s;
```

The animation should feel:

- smooth
- calm
- premium
- readable

Do not make the cards move too quickly.

---

# 21. Pause on Hover

Allow users to pause the marquee while reading.

```css
.news-marquee:hover .news-track {
  animation-play-state: paused;
}
```

This should pause only the news marquee.

---

# 22. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- stop the animation
- show the cards in a static horizontal/scrollable arrangement
- preserve all content

Do not force continuous movement for users who prefer reduced motion.

---

# 23. Edge Mask

The reference naturally crops cards at the viewport edges.

Use:

```css
overflow: hidden;
```

Optional subtle fade:

```css
mask-image: linear-gradient(
  to right,
  transparent,
  black 5%,
  black 95%,
  transparent
);
```

Only use the fade if it improves the visual result.

Do not make the fade obvious.

---

# 24. Responsive Behavior

## Desktop

Show approximately 3.5–4.5 cards simultaneously.

Example:

```text
[partial] [Card] [Card] [Card] [Card] [partial]
```

## Tablet

Show approximately 2.5–3 cards.

## Mobile

Show approximately:

```text
[Card] [partial]
```

Use card width around `290–320px`.

Do not squeeze all cards into the viewport.

The marquee should remain horizontally clipped inside the section.

---

# 25. Section Spacing

Recommended desktop:

Top padding:

`90–110px`

Bottom padding:

`90–110px`

Header → subtitle:

`18–24px`

Subtitle → marquee:

`48–60px`

Card row height:

approximately `230–260px`

Mobile:

Top/bottom padding:

`70–85px`

Subtitle → cards:

`36–44px`

---

# 26. Animation Performance

Use GPU-friendly transforms.

Animate:

```css
transform
```

Do not animate:

- left
- margin-left
- width
- padding

Avoid JavaScript animation loops.

CSS transforms should handle the marquee.

Use:

```css
will-change: transform;
```

only where useful.

---

# 27. React Component Architecture

Recommended:

```text
NewsSection
├── NewsHeader
└── NewsMarquee
    └── NewsCard
```

Use a data-driven array:

```js
const newsMentions = [
  {
    outlet: "Dainik Jagran",
    logo: "/assets/dainik-jagran.svg",
    quote: "CSEWhy empowers aspirants with personalized learning tools!",
    highlighted: true
  },
  {
    outlet: "The New Indian Express",
    logo: "/assets/indian-express.svg",
    quote: "This ex-aspirant changed the way aspirants prepare for UPSC"
  },
  {
    outlet: "Aaj",
    logo: "/assets/aaj.svg",
    quote: "Score 50+ Marks UPSC pre 2024 in first 15 mins if you are CSEWhy aspirant"
  },
  {
    outlet: "The New Indian Express",
    logo: "/assets/indian-express.svg",
    quote: "Best answer writing preparation for UPSC Mains with CSEWhy"
  }
];
```

Render the array twice for the marquee.

Do not duplicate the card markup manually.

---

# 28. Accessibility

Use:

```html
<section aria-labelledby="news-heading">
```

Heading:

```html
<h2 id="news-heading">
```

The logos should have useful alt text where they convey outlet identity.

Example:

```text
alt="Dainik Jagran"
```

Decorative visual elements should use empty alt text.

The animation should not prevent screen readers from accessing the content.

Avoid using an `aria-live` region because the scrolling cards are not live updates.

---

# 29. Mobile Accessibility

Ensure:
- quotes remain readable
- cards can be manually scrolled if animation is disabled
- no content is permanently inaccessible
- focus states remain visible
- touch interaction does not accidentally navigate the entire page horizontally

---

# 30. Do Not Modify Existing Sections

Do not modify:

- Navbar
- Hero
- Trust Bar
- UPSC Quote
- Pan-India Community
- App Features
- Course Discovery
- Social Media Community
- Student Reviews

Add this section independently.

Reuse the existing:
- typography
- container
- colors
- spacing
- border radius
- icon system

---

# 31. Do Not Add

Do NOT add:

- news article pages
- article thumbnails
- news feeds
- dates
- authors
- unrelated media outlets
- fabricated press mentions
- statistics
- extra CTA buttons
- social media widgets
- AI feature cards

This is a **media recognition / news coverage** section only.

---

# 32. Final Visual Goal

The finished section should closely resemble the supplied reference:

```text
                 CSEWhy in News

CSEWhy has garnered recognition from renowned media
outlets for transforming UPSC preparation


←  [ Dainik Jagran ] [ Indian Express ] [ Aaj ] [ Indian Express ]  ←
                         continuous movement
```

Visual priorities:

1. Large centered **CSEWhy in News** heading
2. Orange/black brand treatment
3. Supporting subtitle
4. Large clean media cards
5. Media logos
6. Media quotes
7. Continuous right-to-left marquee
8. Partial cards at the edges
9. Spacious, premium layout

The marquee should feel like a polished media-recognition strip rather than a standard carousel.
