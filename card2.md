# Card 2 — CSEWhy App

## 1. Purpose

This document defines **Card 2 of the CSEWhy hero carousel**.

Card 2 showcases the real CSEWhy mobile application using the project asset:

```text
assets/mobile-ss.png
```

The card should communicate that CSEWhy brings learning resources, courses, current affairs, PYQs, and practice into one mobile experience.

The existing hero specification requires the right side to use a **3-card promotional carousel**, with the active card visually dominant and neighboring cards partially visible. fileciteturn2file0L117-L131

The visual language must remain consistent with Card 1:

- White card surface
- Warm off-white/peach hero surroundings
- CSEWhy orange accents
- Rounded corners
- Subtle warm border
- Soft shadow
- Clean modern typography
- Premium UPSC-edtech appearance

---

# 2. Card Identity

### Card number

```text
02
```

### Card title

```text
CSEWhy App
```

### Card description

```text
Courses, current affairs, tests and resources — all in one place.
```

### Small label

```text
Learn Anywhere
```

### Optional decorative message

```text
Learn.
Prepare.
Succeed.
```

The main heading **must appear in the lower information section**, just like Card 1 places “Expert Guidance” in its lower content area. Card 1 establishes the shared hierarchy of visual → icon → heading → description. fileciteturn4file0L434-L480

---

# 3. Carousel Position

Card 2 is the **second slide**.

The three-slide carousel is:

```text
01 — Expert Guidance
02 — CSEWhy App
03 — Practice Mode
```

When Card 2 is active:

```text
        Previous              ACTIVE                 Next
       ┌─────────┐       ┌────────────────┐       ┌─────────┐
       │         │       │                │       │         │
       │ Expert  │       │  APP SCREENS   │       │Practice │
       │Guidance │       │                │       │  Mode   │
       └─────────┘       └────────────────┘       └─────────┘
```

The parent specification requires:

- Active card to be visually dominant
- Previous/next cards partially visible
- Arrow controls
- Pagination dots
- Smooth carousel interaction fileciteturn2file0L117-L131

---

# 4. Main Asset

Use the supplied project asset:

```text
assets/mobile-ss.png
```

Do not recreate the mobile application UI with HTML/CSS.

Do not invent additional app screens.

Do not replace the supplied screenshot with generated UI.

The image should be treated as the **source of truth for the CSEWhy app visual**.

If `mobile-ss.png` contains the three-phone composition already, use the complete composition as a single visual asset.

If it contains a single app screenshot, use it as the primary screen and create the surrounding presentation with CSS.

---

# 5. Important Product Direction

The AI-powered learning feature has been removed from the current product direction.

Therefore:

- Do not create an AI card.
- Do not add an AI chat interface.
- Do not describe the CSEWhy App as AI-powered.
- Do not add AI-specific graphics.

The current carousel is:

```text
Expert Guidance
      ↓
CSEWhy App
      ↓
Practice Mode
```

---

# 6. Card Dimensions

Use the same outer dimensions as Card 1.

Desktop:

```css
width: 400px–460px;
height: 450px–500px;
border-radius: 28px;
```

The parent hero specification uses approximately 400–460px width and 450–500px height for the active carousel card.

Do not make Card 2 substantially larger or smaller than Card 1 or Card 3.

The hero should not become dramatically taller because of this card. fileciteturn2file4L503-L525

---

# 7. Card Surface

Use:

```css
background: #FFFFFF;
border: 1px solid #F3D8CC;
border-radius: 28px;
box-shadow: 0 18px 45px rgba(80, 40, 20, 0.07);
```

The card should feel elevated but lightweight.

Avoid:

- Heavy shadows
- Glassmorphism
- Dark backgrounds
- Strong gradients
- Thick borders
- Excessive glow

---

# 8. Card Composition

The card should follow this structure:

```text
┌──────────────────────────────────┐
│                                  │
│          APP VISUAL              │
│                                  │
│     ┌────┐ ┌────┐ ┌────┐        │
│     │    │ │    │ │    │         │
│     │APP │ │APP │ │APP │         │
│     │    │ │    │ │    │         │
│     └────┘ └────┘ └────┘         │
│                                  │
│       Learn Anywhere              │
│                                  │
├──────────────────────────────────┤
│                                  │
│   ┌────┐                         │
│   │ ▯  │                         │
│   └────┘                         │
│                                  │
│   CSEWhy App                     │
│                                  │
│   Courses, current affairs,      │
│   tests and resources —          │
│   all in one place.              │
│                                  │
└──────────────────────────────────┘
```

The **visual occupies the upper portion** and the title/description occupy the lower portion.

---

# 9. App Visual Area

Create a soft visual container behind `mobile-ss.png`.

Recommended:

```css
background: #FFF5F0;
border-radius: 22px;
```

The visual area should occupy approximately:

```text
55–60% of card height
```

The information panel should occupy approximately:

```text
40–45% of card height
```

Keep enough breathing room around the screenshot.

---

# 10. Mobile Image

Use:

```text
assets/mobile-ss.png
```

The image should be visually prominent.

Recommended:

```css
width: 88%;
max-width: 390px;
object-fit: contain;
```

If the asset contains transparent space around the phones, crop the visual container carefully through CSS rather than modifying the source asset.

Do not distort the image.

Maintain the original aspect ratio.

Use:

```css
height: auto;
```

and:

```css
object-fit: contain;
```

where possible.

---

# 11. If mobile-ss.png Contains Multiple Phones

If `mobile-ss.png` is the three-phone transparent composition, treat it as the main hero graphic.

Do not split it into separate images.

The intended composition is:

```text
        ┌─────────┐
   ┌────┤ CENTER  ├────┐
   │    │  PHONE  │    │
   │    └─────────┘    │
   │ LEFT          RIGHT│
   └────────────────────┘
```

The center phone should naturally receive the most visual attention.

Keep all phone screens intact.

---

# 12. If mobile-ss.png Contains One Screenshot

If the asset is a single mobile screenshot, create a simple device presentation around it.

Use:

```css
border-radius: 24px;
box-shadow: 0 14px 35px rgba(30, 20, 10, 0.12);
```

Optionally add two very subtle background screenshot previews behind it.

Do not recreate screenshots that are not available.

---

# 13. Screenshot Integrity

The actual CSEWhy UI shown in `mobile-ss.png` must remain unchanged.

Preserve:

- Text
- Icons
- Navigation
- App colors
- Course cards
- Practice UI
- Current Affairs UI
- Foundation Resources
- PYQs
- Images
- Existing UI states

Do not recolor the screenshot.

Do not blur the screenshot.

Do not apply filters.

Do not change the UI content.

The screenshot is a real-product showcase.

---

# 14. App Badge

Add a small floating badge in the visual area.

Text:

```text
Learn Anywhere
```

Recommended icon:

```text
Smartphone
```

Style:

```css
background: #FFFFFF;
border: 1px solid #F2D7CA;
border-radius: 999px;
padding: 9px 15px;
color: #8A4A32;
```

The icon should use the CSEWhy orange:

```css
color: #F45116;
```

Place it near the lower edge of the app visual.

Do not cover important screenshot content.

---

# 15. Optional Decorative Message

A small handwritten message may appear above or beside the app visual:

```text
Learn.
Prepare.
Succeed.
```

Use a handwritten font if the project already includes one.

Otherwise, omit the handwritten message rather than introducing an inconsistent font.

Add a subtle orange underline.

The decoration must remain secondary to the app screenshots.

---

# 16. Decorative Accent Marks

Small orange hand-drawn marks can be placed around the screenshot.

Example:

```text
   /   |
 ─    /
```

Use:

```css
color: #F45116;
```

Keep them subtle.

Do not add large illustrations around the phones.

The parent hero specifically positions decorative elements below the primary content hierarchy. fileciteturn2file3L291-L307

---

# 17. Main Information Panel

The bottom portion should visually match Card 1.

Use:

```text
[ smartphone icon ]

CSEWhy App

Courses, current affairs, tests and resources —
all in one place.
```

Keep generous internal spacing.

The title should not overlap the app image.

---

# 18. Feature Icon

Use an outlined smartphone icon.

Recommended:

```css
background: #FFF0E9;
color: #F45116;
border-radius: 12px;
```

Suggested size:

```text
44px × 44px
```

Icon size:

```text
22–24px
```

The icon treatment should match the rounded feature icon used in Card 1.

---

# 19. Card Heading

Exact text:

```text
CSEWhy App
```

Recommended:

```css
font-size: 30px–36px;
font-weight: 750–800;
line-height: 1.1;
letter-spacing: -0.5px;
color: #171717;
```

This is the main heading of Card 2.

It must be positioned **at the bottom of the card**, inside the lower information section.

Do not place the main heading above the app screenshots.

---

# 20. Card Description

Exact text:

```text
Courses, current affairs, tests and resources — all in one place.
```

Recommended:

```css
font-size: 16px–18px;
line-height: 1.5;
color: #565656;
```

On desktop, aim for approximately 2–3 lines.

Keep the copy concise.

---

# 21. Eyebrow

If the shared carousel component supports an eyebrow, use:

```text
02 · CSEWhy App
```

Recommended:

```css
font-size: 12px–13px;
font-weight: 700;
color: #F45116;
letter-spacing: 0.4px;
```

Do not duplicate the eyebrow if the reusable carousel already renders it.

---

# 22. Internal Hierarchy

The card should visually follow:

```text
1. App screenshots
2. Learn Anywhere badge
3. Smartphone icon
4. CSEWhy App heading
5. Description
6. Decorative details
```

The app visual and heading are the strongest elements.

---

# 23. Desktop Layout

Recommended:

```text
┌────────────────────────────────────────┐
│                                        │
│       Learn. Prepare. Succeed.         │
│                                        │
│       ┌────┐  ┌──────┐  ┌────┐        │
│       │    │  │      │  │    │        │
│       │APP │  │ APP  │  │APP │        │
│       │    │  │      │  │    │        │
│       └────┘  └──────┘  └────┘        │
│                                        │
│          ┌────────────────┐            │
│          │ ▯ Learn Anywhere│           │
│          └────────────────┘            │
│                                        │
├────────────────────────────────────────┤
│                                        │
│  ┌────┐                                │
│  │ ▯  │                                │
│  └────┘                                │
│                                        │
│  CSEWhy App                            │
│                                        │
│  Courses, current affairs, tests and   │
│  resources — all in one place.         │
│                                        │
└────────────────────────────────────────┘
```

Keep the card visually balanced against the large hero heading on the left.

---

# 24. Relationship to Hero

The hero is a two-column layout:

```text
LEFT
Badge
Heading
Description
CTAs
App download row

RIGHT
Carousel
```

The parent hero specification establishes this structure. fileciteturn2file1L184-L200

Card 2 must therefore remain compact enough to coexist with the left-side content.

The carousel should not overpower the hero heading.

The parent visual priority is:

```text
1. Hero heading
2. Orange CTA
3. Active carousel card
4. Hero description
5. Secondary CTA
6. Navbar CTA
7. App download row
8. Stats
9. Decorative elements
```

fileciteturn2file3L291-L307

---

# 25. Color Tokens

Use the existing CSEWhy hero tokens:

```css
--brand-orange: #F45116;
--brand-orange-dark: #E7460B;
--brand-orange-light: #FFF0E9;

--text-primary: #171717;
--text-secondary: #565656;
--text-muted: #777777;

--page-background: #FFFDFC;
--hero-background: #FFF8F4;

--card-background: #FFFFFF;
--border-light: #EDE3DE;
--border-orange: #F3D8CC;
```

The parent hero uses a warm off-white/peach background and orange primary accents. fileciteturn2file2L214-L233

Do not introduce another dominant color.

Colors inside the actual app screenshot must not be changed.

---

# 26. Typography

Use the same primary font as the rest of the landing page.

Recommended:

```text
CSEWhy App
→ 750–800

Description
→ 400–500

Badge
→ 600–700

Eyebrow
→ 700
```

Keep the typography consistent with Card 1.

---

# 27. Border and Shadow

Use:

```css
border: 1px solid #F3D8CC;
```

and:

```css
box-shadow: 0 18px 45px rgba(80, 40, 20, 0.07);
```

The active card should feel slightly elevated from neighboring cards.

---

# 28. Side-Card Compatibility

When Card 2 is active:

```text
       Expert Guidance       CSEWhy App        Practice Mode
             ┌──────┐       ┌──────────────┐       ┌──────┐
             │      │       │              │       │      │
             │      │       │ APP SCREENS  │       │      │
             │      │       │              │       │      │
             └──────┘       └──────────────┘       └──────┘
```

The active CSEWhy App card must be:

- Largest
- Full opacity
- Front-most
- Clearly readable

Neighboring cards can use reduced opacity and scale.

---

# 29. Carousel Controls

Use the shared controls from the parent hero:

```text
             ←   ● ━ ●   →
```

For three slides:

```text
○  ●  ○
```

The active dot should be:

```css
background: #F45116;
```

and slightly wider than inactive dots.

The parent specification requires previous/next controls and pagination. fileciteturn2file0L117-L131

---

# 30. Animation

Use the shared carousel animation:

```css
transition:
  transform 450ms ease,
  opacity 450ms ease,
  filter 450ms ease;
```

The parent specification recommends a 450ms smooth transition and explicitly avoids bouncy animation, excessive scaling, spinning, 3D rotation, and dramatic parallax. fileciteturn2file4L478-L499

Do not continuously animate the app screenshots.

The screenshot composition should move with the card.

---

# 31. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- Disable sliding animation.
- Change the active card immediately.
- Keep arrows and pagination usable.

The parent specification explicitly requires this behavior. fileciteturn2file4L464-L474

---

# 32. Responsive Behavior

## Desktop ≥ 1200px

Use:

```text
3-card carousel
Large active CSEWhy App card
Three-phone composition where available
Full lower information panel
```

The parent layout uses a two-column hero and a 3-card carousel on desktop. fileciteturn2file4L611-L622

---

## Tablet 768–1199px

Reduce:

- Card width
- Screenshot size
- Badge size
- Internal padding

If the three-phone composition becomes crowded, allow the outer phones to become smaller while keeping the center phone dominant.

Do not make the screenshot text unreadable.

The parent specification allows smaller cards at tablet widths. fileciteturn2file4L626-L637

---

## Mobile < 768px

Use a single active card.

The parent specification requires the carousel to become a single-card slider on mobile. fileciteturn2file4L641-L660

Recommended:

```text
┌────────────────────────┐
│                        │
│     APP VISUAL         │
│                        │
│       ┌──────┐         │
│       │      │         │
│       │ APP  │         │
│       │      │         │
│       └──────┘         │
│                        │
│   ▯ Learn Anywhere     │
│                        │
├────────────────────────┤
│                        │
│  CSEWhy App            │
│                        │
│  Courses, current      │
│  affairs, tests and    │
│  resources — all in    │
│  one place.            │
│                        │
└────────────────────────┘

       ←  ○ ● ○  →
```

Do not squeeze three phones into a narrow mobile card if readability suffers.

---

# 33. Mobile Image Size

Recommended:

```css
width: 80%;
max-width: 300px;
```

For a three-phone composition, use:

```css
width: 92%;
max-width: 360px;
```

Maintain aspect ratio.

The app screenshot must remain the dominant visual.

---

# 34. Accessibility

Use descriptive alt text.

If the image is a three-phone composition:

```text
CSEWhy mobile app showing learning resources, practice and courses
```

If it is a single screenshot, describe the visible app screen accurately.

Carousel controls:

```html
aria-label="Previous slide"
aria-label="Next slide"
```

Pagination:

```text
Go to Expert Guidance slide
Go to CSEWhy App slide
Go to Practice Mode slide
```

The parent hero requires accessible controls, keyboard support, visible focus states, and meaningful alt text. fileciteturn4file0L800-L823

---

# 35. Performance

`mobile-ss.png` is a hero asset.

Optimize it for production:

- Prefer WebP/AVIF where possible.
- Avoid unnecessarily huge PNG dimensions.
- Preserve screenshot readability after compression.
- Load the active carousel image immediately.
- Lazy-load inactive carousel images where possible.
- Do not load duplicate copies of the same image.

The parent hero specifically recommends optimized imagery, WebP/AVIF, avoiding huge PNGs, and lazy-loading non-active carousel images. fileciteturn2file0L84-L98

---

# 36. Asset Usage

Expected project structure:

```text
assets/
└── mobile-ss.png
```

Use the exact asset path available in the project.

Do not assume a different filename.

Implementation example:

```jsx
<img
  src="/assets/mobile-ss.png"
  alt="CSEWhy mobile app showing learning resources, practice and courses"
/>
```

If the project imports assets through JavaScript/TypeScript, use the project's existing import convention instead.

---

# 37. Component Structure

Recommended:

```text
HeroCarousel
└── HeroCarouselCard
    └── CSEWhyAppCard
        ├── AppVisual
        │   ├── MobileScreenshot
        │   ├── LearnAnywhereBadge
        │   └── DecorativeAccents
        │
        └── AppContent
            ├── SmartphoneIcon
            ├── CardTitle
            └── CardDescription
```

Prefer using the shared `HeroCarouselCard` rather than creating a completely separate carousel.

The parent specification recommends a modular structure:

```text
Hero
├── HeroContent
├── HeroCarousel
│   ├── CarouselCard
│   ├── CarouselControls
│   └── CarouselDots
└── DecorativeBackground
```

fileciteturn2file3L263-L287

---

# 38. Data-Driven Slide

Add Card 2 as a data object.

Recommended:

```js
{
  id: "csewhy-app",
  eyebrow: "02 · CSEWhy App",
  title: "CSEWhy App",
  description:
    "Courses, current affairs, tests and resources — all in one place.",
  label: "Learn Anywhere",
  image: "/assets/mobile-ss.png",
  icon: "smartphone",
  accent: "orange"
}
```

The parent specification recommends a data-driven slide architecture so additional promotional slides can be added without redesigning the carousel. fileciteturn2file0L145-L174

---

# 39. No Duplicate CTA

Do not add a large orange button inside Card 2.

The hero already has:

```text
Explore Courses
Explore Resources
```

as its primary actions.

Card 2 should primarily function as a product showcase.

If the card itself needs to be clickable, use a subtle interaction rather than introducing another large CTA.

---

# 40. Hover State

If Card 2 is interactive:

```css
transform: translateY(-2px);
```

may be used.

Keep the screenshot movement extremely subtle.

Do not:

- Rotate the entire card
- Create a 3D phone animation
- Bounce the phones
- Add excessive glow
- Zoom aggressively

The parent hero recommends restrained interaction changes. fileciteturn2file0L52-L80

---

# 41. Visual Matching Checklist

## Card

- [ ] White background
- [ ] 26–30px rounded corners
- [ ] Warm subtle border
- [ ] Soft shadow
- [ ] Same dimensions as Card 1

## App Visual

- [ ] `assets/mobile-ss.png` used
- [ ] Actual app UI preserved
- [ ] No fake UI recreated
- [ ] No AI interface
- [ ] Screenshot not distorted
- [ ] Screenshot remains readable
- [ ] App visual occupies upper portion

## Bottom Content

- [ ] Smartphone icon
- [ ] “CSEWhy App” heading at bottom
- [ ] Exact description
- [ ] Heading matches Card 1 typography
- [ ] Description remains readable

## Styling

- [ ] Brand orange accents
- [ ] White card
- [ ] Warm peach visual area
- [ ] Subtle decorations
- [ ] No heavy gradients
- [ ] No glassmorphism
- [ ] No excessive shadow

## Carousel

- [ ] Card is slide 2
- [ ] Active card is dominant
- [ ] Side cards remain visible
- [ ] Previous/next controls work
- [ ] Pagination works
- [ ] Swipe works
- [ ] Keyboard navigation works
- [ ] Reduced-motion behavior works

## Responsive

- [ ] Desktop composition balanced
- [ ] Tablet screenshots remain readable
- [ ] Mobile becomes single-card
- [ ] No horizontal overflow
- [ ] App visual remains prominent

---

# 42. Final Design Intent

Card 2 should communicate one simple idea:

> **Everything you need for UPSC preparation, right on your phone.**

The visual hierarchy is:

```text
             CSEWHY APP VISUAL
                     ↓
              Learn Anywhere
                     ↓
              Smartphone Icon
                     ↓
                CSEWhy App
                     ↓
       Courses, current affairs,
       tests and resources —
          all in one place.
```

The final carousel story is:

```text
01  Expert Guidance
        ↓
    Human support

02  CSEWhy App
        ↓
    Complete platform

03  Practice Mode
        ↓
    Active preparation
```

Together, these three cards communicate:

```text
GUIDANCE → LEARNING PLATFORM → PRACTICE
```

This is the intended current CSEWhy hero direction. The original hero specification calls for a polished, warm, premium UPSC-edtech presentation with the carousel acting as the visual focal point on the right side. fileciteturn2file2L214-L233
