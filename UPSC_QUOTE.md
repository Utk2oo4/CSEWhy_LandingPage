# UPSC Quote Section

## Overview

Create the **UPSC Quote Section** for the CSEWhy landing page.

This section should use the provided background artwork as the
**full-width visual background** and place the quote/content on top
using HTML/CSS.

### Background asset

Use this generated background image:

``` text
src/assests/quote_bg.png
```

The background contains:

-   Soft cream/ivory atmosphere
-   Faded Indian government architecture on the left
-   Trees and birds
-   Ashoka Lion Capital on the right
-   Indian flag
-   Warm beige/sepia tones
-   Large clean central area intended for overlay content

**Important:** Do not recreate the architecture, Ashoka Capital, or flag
with separate HTML elements if this background asset is available. Use
the supplied image as the background.

------------------------------------------------------------------------

# 1. Section Placement

The landing-page order should be:

``` text
1. Navbar
2. Hero Section
3. Trust Bar
4. UPSC Quote Section
5. Pan-India Community / India Map
6. App Features
7. Course Discovery
8. Footer
```

The UPSC Quote Section should work as an emotional transition between
the Trust Bar and the Pan-India Community section.

------------------------------------------------------------------------

# 2. Visual Direction

The final result should look like a **premium CSEWhy version** of the
supplied reference.

Do NOT use the purple background from the original reference.

The section should inherit the current website identity:

-   White / cream
-   CSEWhy orange
-   Deep navy / near-black typography
-   Warm beige imagery
-   Minimal and premium
-   Aspirational
-   Indian civil-services visual identity

The supplied background image is the primary visual element.

------------------------------------------------------------------------

# 3. Background Implementation

Use the image as a CSS background.

Recommended structure:

``` jsx
<section className="upsc-quote-section">
  <div className="upsc-quote-content">
    {/* quote content */}
  </div>
</section>
```

Recommended CSS:

``` css
.upsc-quote-section {
  position: relative;
  min-height: 680px;
  width: 100%;
  overflow: hidden;

  background-image: url("/assets/upsc-quote/wide_minimalist_pastel_sepia_themed_background_s.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Background requirements

-   The image must cover the complete section.
-   Do not stretch it unnaturally.
-   Do not tile it.
-   Do not add another large colored background over it.
-   Preserve the central empty space of the artwork.
-   The quote must remain highly readable over the image.

If the actual asset path differs, update the import/path accordingly.

------------------------------------------------------------------------

# 4. Optional Readability Overlay

If the background reduces text readability at a particular viewport, use
a **very subtle** overlay.

Example:

``` css
.upsc-quote-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.12);
  pointer-events: none;
}
```

Do not use a strong dark overlay.

The artwork should remain visible.

The background should still feel like the original supplied image.

------------------------------------------------------------------------

# 5. Content Layer

The content must sit above the background.

``` css
.upsc-quote-content {
  position: relative;
  z-index: 2;

  width: min(100% - 40px, 1100px);
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
```

The content should occupy the **central blank area** of the background.

Avoid placing important text directly over:

-   The government building on the left
-   The Ashoka Capital on the right
-   The Indian flag
-   Dense foliage

------------------------------------------------------------------------

# 6. Badge

Place a small pill above the quote.

Text:

> A MINDSET FOR A BIGGER TOMORROW

Recommended markup:

``` jsx
<div className="upsc-quote-badge">
  <span className="upsc-quote-badge-icon">“</span>
  <span>A MINDSET FOR A BIGGER TOMORROW</span>
</div>
```

Recommended styling:

``` css
.upsc-quote-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;

  padding: 10px 18px 10px 10px;
  border-radius: 999px;

  background: rgba(255, 248, 239, 0.92);

  color: #172033;

  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  box-shadow: 0 8px 24px rgba(30, 20, 10, 0.06);
}
```

Badge icon:

``` css
.upsc-quote-badge-icon {
  width: 30px;
  height: 30px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: #ff6500;
  color: #ffffff;

  font-size: 20px;
  font-weight: 700;
}
```

------------------------------------------------------------------------

# 7. Main Quote

Use this exact quote:

> "UPSC doesn't make you an officer; it picks you as one."

The quote is the most important element in this section.

Recommended JSX:

``` jsx
<blockquote className="upsc-quote">
  <span className="upsc-quote-mark">“</span>
  <span>
    <span className="upsc-highlight">UPSC</span>
    {" doesn’t make you an officer; it picks you as one."}
  </span>
  <span className="upsc-quote-mark">”</span>
</blockquote>
```

### Typography

Use the same modern sans-serif family as the rest of the website.

Do NOT use the decorative/pixelated font from the original purple
reference.

Recommended:

``` css
.upsc-quote {
  max-width: 980px;
  margin: 32px auto 0;

  color: #111827;

  font-size: clamp(42px, 5vw, 72px);
  line-height: 1.05;
  font-weight: 750;

  letter-spacing: -0.045em;
}
```

### Highlight

Only `UPSC` should receive the orange treatment.

``` css
.upsc-highlight {
  color: #ff6500;
}
```

Do not make the entire quote orange.

------------------------------------------------------------------------

# 8. Quote Marks

Use oversized, extremely subtle quote marks.

``` css
.upsc-quote-mark {
  color: rgba(17, 24, 39, 0.16);
  font-weight: 800;
}
```

They should support the editorial design without competing with the
text.

------------------------------------------------------------------------

# 9. Accent Line

Place a short orange line underneath the quote.

``` jsx
<div className="upsc-quote-accent" aria-hidden="true" />
```

CSS:

``` css
.upsc-quote-accent {
  width: 72px;
  height: 5px;

  margin-top: 28px;

  border-radius: 999px;

  background: #ff6500;
}
```

------------------------------------------------------------------------

# 10. Supporting Text

Use:

> It's not just an exam, it's a calling.\
> Are you ready to answer it?

Recommended markup:

``` jsx
<p className="upsc-quote-subtitle">
  It’s not just an exam, it’s a calling.
  <br />
  Are you ready to answer it?
</p>
```

CSS:

``` css
.upsc-quote-subtitle {
  margin: 24px 0 0;

  color: #4b5563;

  font-size: clamp(18px, 2vw, 23px);
  line-height: 1.55;
  font-weight: 450;
}
```

The subtitle must remain visually secondary to the quote.

------------------------------------------------------------------------

# 11. CTA

Add the primary CTA below the supporting copy.

Text:

> Start Your Journey →

Recommended:

``` jsx
<a
  href="#"
  className="upsc-quote-cta"
>
  <span>Start Your Journey</span>
  <span aria-hidden="true">→</span>
</a>
```

CSS:

``` css
.upsc-quote-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  min-width: 270px;
  min-height: 60px;

  margin-top: 30px;
  padding: 0 30px;

  border-radius: 14px;

  background: #ff6500;
  color: #ffffff;

  font-size: 18px;
  font-weight: 700;

  text-decoration: none;

  box-shadow: 0 8px 0 rgba(190, 70, 0, 0.20);

  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    background-color 180ms ease;
}
```

Hover:

``` css
.upsc-quote-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 0 rgba(190, 70, 0, 0.20);
}
```

Arrow:

``` css
.upsc-quote-cta:hover span:last-child {
  transform: translateX(4px);
}
```

------------------------------------------------------------------------

# 12. Important Background/Text Relationship

The background already contains strong visual elements on the left and
right.

Therefore:

### Center

Keep the central quote/content clean.

### Left

Allow the government-building illustration to remain visible.

Do not put additional cards or text over it.

### Right

Allow the Ashoka Lion Capital and Indian flag to remain visible.

Do not place UI controls over the monument.

The final visual hierarchy should be:

``` text
                 BADGE

          MAIN UPSC QUOTE

                ─────

          SUPPORTING COPY

          [ START JOURNEY ]

     architecture       Ashoka Capital
        background       + flag
```

------------------------------------------------------------------------

# 13. No Quote Card

Do **not** place the quote inside a large white rectangular card.

The supplied background already provides enough empty/light space for
the content.

The quote should appear naturally **on top of the artwork**.

Only the small badge may have a translucent cream background.

This keeps the section lighter and more integrated with the website.

------------------------------------------------------------------------

# 14. Section Height

Desktop:

``` css
min-height: 680px;
```

Recommended range:

``` text
640px – 760px
```

Do not create excessive vertical whitespace.

The quote should feel visually integrated with the architecture at the
bottom of the image.

------------------------------------------------------------------------

# 15. Desktop Positioning

At desktop widths:

``` text
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│                         [ BADGE ]                             │
│                                                               │
│              “UPSC doesn’t make you an officer;              │
│                    it picks you as one.”                      │
│                                                               │
│                         ─────                                 │
│                                                               │
│              It’s not just an exam, it’s a calling.           │
│                  Are you ready to answer it?                  │
│                                                               │
│                  [ Start Your Journey → ]                     │
│                                                               │
│   Government architecture                 Ashoka Capital       │
│   faded into background                    + Indian flag       │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

The exact positioning should adapt according to the background image
crop.

------------------------------------------------------------------------

# 16. Responsive Background

Desktop:

``` css
background-size: cover;
background-position: center center;
```

Tablet:

``` css
background-position: center center;
```

Mobile:

``` css
background-size: auto 100%;
background-position: center bottom;
```

If the background crop makes the Ashoka Capital or building disappear on
mobile, prioritize the readability of the quote and use a softer
background crop.

The background is decorative; content must always win.

------------------------------------------------------------------------

# 17. Mobile Layout

At `< 768px`:

``` css
.upsc-quote-section {
  min-height: 680px;
  padding: 72px 20px 48px;

  background-position: center bottom;
}
```

Quote:

``` css
.upsc-quote {
  margin-top: 24px;

  font-size: clamp(34px, 10vw, 46px);
  line-height: 1.08;
}
```

Subtitle:

``` css
.upsc-quote-subtitle {
  font-size: 17px;
}
```

CTA:

``` css
.upsc-quote-cta {
  width: min(100%, 340px);
}
```

The quote should remain centered.

Do not attempt to preserve the exact desktop composition.

------------------------------------------------------------------------

# 18. Mobile Background Treatment

On mobile:

-   Reduce visual intensity if necessary.
-   Keep the central background light.
-   Do not allow the Ashoka Capital to cover the quote.
-   Do not allow the government building to interfere with text.
-   Hide any decorative handwritten annotations if they are later added.
-   Preserve the Indian flag where practical, but never at the expense
    of readability.

If necessary:

``` css
.upsc-quote-section::before {
  background: rgba(255, 255, 255, 0.20);
}
```

------------------------------------------------------------------------

# 19. Accessibility

Use semantic HTML:

``` html
<section>
  <div>
    <blockquote>
    <p>
    <a>
  </div>
</section>
```

The background image is decorative.

Do not use it as meaningful content.

If the image is implemented through CSS background, no `alt` text is
required.

The CTA must have:

-   Visible keyboard focus
-   Sufficient contrast
-   Clear hover state
-   Clear destination when integrated

Example:

``` css
.upsc-quote-cta:focus-visible {
  outline: 3px solid #111827;
  outline-offset: 4px;
}
```

------------------------------------------------------------------------

# 20. Reduced Motion

Respect user preferences:

``` css
@media (prefers-reduced-motion: reduce) {
  .upsc-quote-cta,
  .upsc-quote-cta span:last-child {
    transition: none;
  }

  .upsc-quote-cta:hover {
    transform: none;
  }
}
```

Do not add unnecessary animation.

------------------------------------------------------------------------

# 21. Recommended Component Structure

Create:

``` text
src/
├── components/
│   └── landing/
│       └── UpscQuote/
│           ├── UpscQuote.jsx
│           ├── UpscQuote.css
│           └── index.js
│
└── assets/
    └── upsc-quote/
        └── wide_minimalist_pastel_sepia_themed_background_s.png
```

If the project uses TypeScript:

``` text
UpscQuote.tsx
UpscQuote.module.css
index.ts
```

Follow the existing project's naming conventions if they differ.

------------------------------------------------------------------------

# 22. Suggested Component API

Keep the content configurable so the main application developer can
integrate it easily.

``` jsx
<UpscQuote
  badge="A MINDSET FOR A BIGGER TOMORROW"
  quote="UPSC doesn’t make you an officer; it picks you as one."
  highlight="UPSC"
  subtitle={
    <>
      It’s not just an exam, it’s a calling.
      <br />
      Are you ready to answer it?
    </>
  }
  ctaText="Start Your Journey"
  ctaHref="#"
/>
```

Do not hardcode authentication or backend logic into this component.

------------------------------------------------------------------------

# 23. Integration Requirements

This landing page is being developed independently from the existing
application.

Therefore:

-   Do not depend on the existing application's internal components.
-   Do not recreate authentication.
-   Do not connect to APIs.
-   Do not create database logic.
-   Do not assume existing routes.
-   Keep CTA destination configurable.
-   Keep the section importable as a standalone React component.

The main application developer can connect:

``` text
Start Your Journey
        ↓
Existing signup/onboarding route
```

later.

------------------------------------------------------------------------

# 24. Asset Rule

The supplied background image should be treated as the **single primary
visual asset** for this section.

Do not:

-   Add another generic Indian background
-   Replace it with stock imagery
-   Recreate it using random SVGs
-   Put the screenshot itself inside another card
-   Add a purple overlay
-   Add unnecessary gradients that obscure the artwork

The objective is:

> **Use the supplied image as the visual foundation and layer the quote
> cleanly on top.**

------------------------------------------------------------------------

# 25. Final Visual Goal

The final section should communicate:

> **UPSC is more than an examination --- it is a path toward
> responsibility, leadership, and public service.**

The design should feel:

**Indian + Premium + Aspirational + Modern + Trustworthy**

and visually belong to the existing CSEWhy website.

The supplied background should remain clearly visible while the quote
remains the primary focus.

------------------------------------------------------------------------

# 26. Final QA Checklist

Before completion:

-   [ ] Supplied background image is used as the section background
-   [ ] Background covers the full section
-   [ ] Quote is rendered as HTML, not baked into the image
-   [ ] Badge appears above the quote
-   [ ] `UPSC` is orange
-   [ ] Quote uses modern website typography
-   [ ] Quote is centered over the blank area
-   [ ] Quote does not overlap the Ashoka Capital
-   [ ] Quote does not become unreadable over the architecture
-   [ ] Supporting copy is present
-   [ ] Orange accent line is present
-   [ ] CTA is present
-   [ ] CTA uses the website's orange
-   [ ] CTA hover state works
-   [ ] CTA keyboard focus works
-   [ ] No large quote card is used
-   [ ] No purple background is introduced
-   [ ] No unnecessary decorative elements are added
-   [ ] Mobile layout is intentionally adapted
-   [ ] Background crop remains attractive on mobile
-   [ ] Reduced-motion preference is respected
-   [ ] Component is independently reusable
-   [ ] CTA route is configurable
-   [ ] No backend dependency exists

------------------------------------------------------------------------

# 27. Implementation Principle

**Do not treat the background as the design itself.**

Treat it as the **visual canvas**.

The implementation should create the final composition by combining:

``` text
BACKGROUND IMAGE
       +
HTML QUOTE
       +
BADGE
       +
ACCENT LINE
       +
SUPPORTING COPY
       +
CTA
```

This ensures that the text remains:

-   responsive
-   selectable
-   accessible
-   SEO-friendly
-   editable
-   maintainable

while the supplied artwork provides the Indian visual identity.
