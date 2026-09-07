# Nav + Hero Section — CSEWhy UPSC Landing Page

## 1. Purpose

This document is the implementation specification for the **Navbar + Hero section** of the CSEWhy-style UPSC preparation landing page.

The goal is to recreate the supplied reference design as closely as possible while replacing the original single phone/app mockup on the right side with an **interactive carousel/stack of 3 promotional cards**.

The section should feel:

- Modern
- Premium
- Clean
- Education/edtech focused
- Warm and approachable
- Highly readable
- Responsive
- Conversion focused

The implementation should preserve the overall visual language of the reference image: white navigation bar, warm off-white/peach hero background, orange primary accents, rounded cards, subtle borders/shadows, large typography, and small pastel-colored icon treatments.

---

# 2. Overall Page Structure

The page starts with:

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                NAVBAR                                        │
│ Logo | Home | Courses ▼ | Blogs | About Us ▼ | Download App | Login | CTA    │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                              HERO SECTION                                    │
│                                                                              │
│  LEFT CONTENT                              RIGHT CAROUSEL                     │
│  ─────────────                             ───────────────                    │
│  Badge                                     Previous card                      │
│  Main heading                              Active large card                 │
│  Description                               Next card                          │
│  CTA buttons                               ←  ● ● ●  →                       │
│  App download badges                                                        │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                              STATS BAR                                       │
└──────────────────────────────────────────────────────────────────────────────┘
```

The navbar and hero should visually read as one cohesive landing-page introduction.

---

# 3. Reference Design Characteristics

## Primary visual language

Use:

- White navbar
- Very light cream/off-white hero background
- Orange/red-orange as the primary brand accent
- Black/dark charcoal for primary text
- Muted gray for supporting text
- Very subtle peach decorative elements
- Rounded corners
- Thin warm-gray borders
- Soft shadows
- Large whitespace
- Strong visual hierarchy

Avoid:

- Heavy gradients
- Dark backgrounds
- Excessive shadows
- Excessive animation
- Glassmorphism
- Large amounts of text
- Generic stock imagery
- Blue/purple as dominant brand colors

Blue, green, purple, etc. can be used only as small category/icon accents inside carousel cards.

---

# 4. Suggested Design Tokens

These values are starting points. Agents may tune them slightly to match the reference image.

```css
--brand-orange: #F45116;
--brand-orange-dark: #E7460B;
--brand-orange-light: #FFF0E9;

--text-primary: #171717;
--text-secondary: #565656;
--text-muted: #777777;

--page-background: #FFFDFC;
--hero-background: #FFF8F4;

--border-light: #EDE3DE;
--border-orange: #F3B49D;

--white: #FFFFFF;

--green: #22A66A;
--blue: #3D73D9;
--purple: #8D35C7;

--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 24px;
--radius-2xl: 28px;
```

The orange should be the dominant accent.

---

# 5. Navbar

## 5.1 Navbar layout

The navbar occupies the full width of the page.

It should have:

- White background
- Bottom separation from hero through spacing rather than a strong border
- Approximately 78–92px height on desktop
- Horizontal content container
- Logo aligned left
- Navigation centered/near-left
- Actions aligned right

Suggested structure:

```text
[ CSEWhy ]    Home    Courses ▼    Blogs    About Us ▼       [Download App] [Login] [Explore Courses]
```

---

## 5.2 Navbar container

Use a centered max-width container.

Recommended:

```css
max-width: 1380px;
margin: 0 auto;
padding: 0 32px;
```

For larger desktop screens, the content should remain comfortably centered rather than stretching all the way to the edges.

---

# 6. Logo

The logo reads:

```text
CSEWhy
```

Visual treatment:

- `CSE` → orange
- `Why` → black/dark
- Bold typography
- Large enough to be clearly visible
- No unnecessary icon beside the logo

Approximate desktop size:

```css
font-size: 32px;
font-weight: 750-800;
letter-spacing: -1px;
```

The logo should not look like a generic text logo. It should visually match the strong, compact branding shown in the reference.

---

# 7. Main Navigation

Navigation items:

1. Home
2. Courses
3. Blogs
4. About Us

Dropdown indicators:

- Courses → downward chevron
- About Us → downward chevron

## Active state

Home is active.

The active Home state should contain:

- Orange text
- Thin orange underline
- Underline positioned below the text
- Slightly stronger visual weight

Example:

```text
Home
────
```

Use approximately:

```css
color: var(--brand-orange);
border-bottom: 2px solid var(--brand-orange);
```

Navigation should have comfortable spacing.

Suggested gap:

```css
gap: 36px;
```

---

# 8. Navbar Buttons

There are three actions on the right.

## 8.1 Download App

Appearance:

- Very light peach/orange background
- Dark text
- Download icon
- Rounded corners
- Medium font weight

Example:

```text
↓  Download App
```

Suggested:

```css
background: #FFF0E9;
color: #222;
border-radius: 10px;
padding: 14px 20px;
```

This is a secondary action.

---

## 8.2 Login

Appearance:

- White background
- Thin orange/peach border
- Dark text
- Rounded corners

Example:

```text
Login
```

Suggested:

```css
background: #FFFFFF;
border: 1px solid #DDAA96;
border-radius: 10px;
padding: 14px 24px;
```

---

## 8.3 Explore Courses

This is the primary navbar CTA.

Appearance:

- Solid orange
- White text
- Rounded corners
- Slightly stronger shadow
- High contrast

Example:

```text
Explore Courses
```

Suggested:

```css
background: var(--brand-orange);
color: #FFFFFF;
border-radius: 10px;
padding: 14px 24px;
font-weight: 700;
```

Hover:

- Slightly darker orange
- Small upward/scale movement is optional
- Do not create excessive animation

---

# 9. Responsive Navbar

On tablet/mobile:

Desktop navigation should collapse.

Recommended mobile behavior:

```text
[CSEWhy]                                      [☰]
```

Clicking the menu opens:

```text
Home
Courses
Blogs
About Us

Download App
Login
Explore Courses
```

Do not allow the desktop navigation to wrap awkwardly.

The mobile menu should be a clean vertical menu.

---

# 10. Hero Section

## 10.1 Hero composition

Desktop hero uses a two-column layout:

```text
LEFT: approximately 48–50%
RIGHT: approximately 50–52%
```

Suggested:

```css
display: grid;
grid-template-columns: 0.95fr 1.05fr;
gap: 40px;
```

The left side contains all messaging.

The right side contains the new carousel.

---

# 11. Hero Background

The hero background should be:

```css
background: #FFF8F4;
```

or an extremely subtle warm gradient.

It should remain almost white.

Do NOT use a strong orange gradient.

The reference has a soft, airy appearance.

---

# 12. Decorative Hero Elements

The hero can include subtle decorative details:

### Left-bottom dotted pattern

A matrix of very small peach/orange dots.

Characteristics:

- Low opacity
- Small circles
- Gradually fading toward the right/top
- Positioned behind/around the lower left content

Example concept:

```text
• • • • •
• • • • •
• • • •
• • •
• •
```

This should remain decorative and must never interfere with text readability.

---

## 12.1 Right-side circular decoration

Behind the carousel, add one or more very subtle dashed circular outlines.

Characteristics:

- Large circular ring
- Extremely low opacity
- Peach/orange stroke
- Dashed
- Centered around the active carousel card

This creates the same visual depth as the original phone mockup area.

---

# 13. Hero Badge

At the top of the left content:

```text
★  Your Complete UPSC Preparation Ecosystem
```

Appearance:

- Pale peach background
- Orange star icon
- Orange/brown text
- Rounded pill/card
- Compact height

Suggested:

```css
background: #FFEDE5;
border-radius: 10px;
padding: 10px 16px;
font-size: 14px;
```

The badge should sit approximately 45–65px below the navbar.

---

# 14. Main Hero Heading

Exact headline:

```text
Prepare for UPSC
with the Right
Resources.
```

The words:

```text
Prepare for UPSC
with the
Resources.
```

are dark.

The words:

```text
Right
```

and/or the orange emphasis shown in the reference should use the brand orange.

Recommended visual:

```text
Prepare for UPSC
with the Right
Resources.
```

with:

```text
Right
Resources.
```

in orange if matching the provided reference.

Desktop:

```css
font-size: clamp(52px, 5vw, 70px);
font-weight: 800;
line-height: 1.05;
letter-spacing: -2px;
```

The heading is the strongest element in the entire hero.

Do not make the heading excessively thin.

---

# 15. Hero Description

Text:

```text
Structured courses, foundation resources, current affairs,
PYQs and AI-powered learning — all designed to help
you prepare smarter and crack UPSC.
```

Characteristics:

- Dark gray
- Comfortable line-height
- Maximum width around 580px
- Font size approximately 18px
- Not bold

Suggested:

```css
font-size: 18px;
line-height: 1.6;
color: #4F4F4F;
max-width: 570px;
```

---

# 16. Hero CTA Buttons

There are two primary hero actions.

## 16.1 Explore Courses

Solid orange button:

```text
▣  Explore Courses
```

Characteristics:

- Orange background
- White text
- Book/course icon
- Rounded corners
- Strong visual weight

Suggested:

```css
padding: 16px 28px;
border-radius: 10px;
font-weight: 700;
```

---

## 16.2 Explore Resources

Outlined secondary button:

```text
▣  Explore Resources
```

Characteristics:

- White/transparent background
- Orange border
- Orange text
- Same height as primary CTA

Desktop buttons should sit horizontally:

```text
[ Explore Courses ]   [ Explore Resources ]
```

Mobile buttons may stack vertically.

---

# 17. App Download Row

Below the hero CTAs:

```text
▯  Learn on the CSEWhy App
   Access everything anytime, anywhere.

   [ Google Play ] [ App Store ]
```

The left side contains:

- Small phone/device icon
- Bold title
- Supporting subtitle

The right side contains:

- Google Play badge
- Apple App Store badge

The badges should be visually compact and aligned horizontally.

This row should not overpower the main CTA.

---

# 18. RIGHT HERO — NEW CAROUSEL

## IMPORTANT CHANGE FROM ORIGINAL DESIGN

The original reference uses a tilted smartphone/app mockup.

**Do NOT implement the phone mockup as the primary right-side visual.**

Replace it with an interactive promotional carousel.

The carousel should contain 3 cards.

Suggested cards:

```text
1. Foundation Resources
2. Current Affairs
3. PYQs
```

Additional cards can be added later without rewriting the carousel component.

---

# 19. Carousel Concept

The visual style should resemble a **three-card stacked carousel** rather than a normal horizontal slideshow.

At any moment:

```text
        ┌───────────────┐
        │ Current       │
        │ Affairs       │
        │               │
        └───────────────┘

             ┌────────────────────────┐
             │                        │
             │  Foundation Resources  │
             │                        │
             │      MAIN CARD         │
             │                        │
             └────────────────────────┘

                              ┌───────────────┐
                              │ PYQs          │
                              │               │
                              └───────────────┘
```

The active card should be larger.

The previous and next cards should be partially visible behind it.

---

# 20. Carousel Active Card

The active card should be:

- White
- Large
- Rounded approximately 26–30px
- Thin border
- Soft shadow
- Centered
- Clearly dominant

Suggested dimensions:

```css
width: 400–460px;
height: 450–500px;
```

Adjust based on viewport.

The card should have generous internal padding.

---

# 21. Carousel Side Cards

Previous and next cards:

- Slightly smaller
- Lower opacity
- Slightly scaled down
- Partially visible
- Positioned behind the active card

Suggested transform:

```css
scale(0.82)
```

and horizontal translation.

Example:

```css
.previous {
    transform: translateX(-190px) scale(0.82);
    opacity: 0.55;
}

.active {
    transform: translateX(0) scale(1);
    opacity: 1;
}

.next {
    transform: translateX(190px) scale(0.82);
    opacity: 0.55;
}
```

The exact offsets should adapt to screen width.

---

# 22. Carousel Card 1 — Foundation Resources

Content:

### Category

```text
01 · Foundation
```

### Heading

```text
Foundation Resources
```

### Description

```text
Build your basics with structured notes,
expert lectures and curated study material.
```

### Visual

Use an educational illustration such as:

- Stacked books
- UPSC books
- Notebook
- Study material

Primary icon accent:

- Orange

Suggested icon:

```text
Open book
```

Icon background:

```text
light peach/orange
```

---

# 23. Carousel Card 2 — Current Affairs

Content:

### Category

```text
02 · Current Affairs
```

### Heading

```text
Stay Updated With Current Affairs
```

### Description

```text
Daily updates and exam-focused analysis
for smarter UPSC preparation.
```

### Visual

Use an illustration such as:

- Newspaper
- News article
- Globe
- Current affairs document

Accent:

- Blue

Icon background:

- Very light blue

---

# 24. Carousel Card 3 — PYQs

Content:

### Category

```text
03 · PYQs
```

### Heading

```text
Practice With Real PYQs
```

### Description

```text
Understand UPSC patterns, test your preparation
and improve your accuracy.
```

### Visual

Use an illustration such as:

- Question paper
- Checklist
- Exam sheet
- Tick marks

Accent:

- Green

Icon background:

- Very light green

---

# 25. Carousel Navigation

Under the cards:

```text
             ←   ●  ○  ○   →
```

Include:

- Previous button
- Pagination dots
- Next button

Arrow buttons should be circular.

Suggested:

```css
width: 44px;
height: 44px;
border-radius: 50%;
background: white;
border: 1px solid #EADDD7;
```

Hover:

- Orange border
- Orange arrow

---

# 26. Pagination Dots

There are 3 dots.

Inactive:

```text
○
```

Active:

```text
━━━━
```

The active dot should be orange and slightly wider.

Example:

```css
.active {
    width: 24px;
    border-radius: 8px;
    background: var(--brand-orange);
}
```

---

# 27. Carousel Interaction

The carousel must support:

### Previous button

Moves:

```text
1 → 3
2 → 1
3 → 2
```

### Next button

Moves:

```text
1 → 2
2 → 3
3 → 1
```

### Pagination dots

Clicking a dot directly selects that slide.

### Touch/swipe

On mobile/tablet:

- Swipe left → next
- Swipe right → previous

Do not disable normal page scrolling.

Use pointer/touch gesture detection only within the carousel.

---

# 28. Optional Auto Rotation

Recommended behavior:

- Automatically change slides every 4–5 seconds
- Pause auto-rotation when user interacts with the carousel
- Resume after a short period if desired

However, auto-rotation should never be required for usability.

Users must always be able to manually change the slide.

Respect:

```css
prefers-reduced-motion
```

When reduced motion is enabled:

- Disable sliding animation
- Change instantly
- Keep the carousel fully usable

---

# 29. Carousel Animation

Transition should be smooth and premium.

Recommended:

```css
transition:
    transform 450ms ease,
    opacity 450ms ease,
    filter 450ms ease;
```

Avoid:

- Bouncy animations
- Excessive scaling
- Fast spinning
- 3D rotations
- Dramatic parallax

The carousel should feel like a professional education website.

---

# 30. Hero Vertical Alignment

The hero content should be vertically centered relative to the carousel.

Approximate desktop hero:

```text
Navbar
────────────────────────────

          Hero

Badge
Heading                    Carousel
Description                Carousel
Buttons                    Carousel
App row                    Dots

────────────────────────────
Stats
```

The carousel should not make the hero dramatically taller than the reference.

---

# 31. Stats Bar

At the bottom of the hero, retain the stats bar from the reference.

It should appear as a large white rounded rectangular container.

Suggested:

```css
background: #FFFFFF;
border: 1px solid #EEE5E0;
border-radius: 16px;
box-shadow: 0 8px 24px rgba(30,20,10,.04);
```

Four statistics:

### Stat 1

```text
500K+
Strong Community
```

Orange icon/accent.

### Stat 2

```text
1000+
Prelims Cleared
```

Green icon/accent.

### Stat 3

```text
50K+
Resources & Notes
```

Blue icon/accent.

### Stat 4

```text
50K+
App Downloads
```

Purple icon/accent.

---

# 32. Stats Layout

Desktop:

```text
┌────────────────────────────────────────────────────────────────────────┐
│  👥 500K+       │ 🎓 1000+       │ 🛡 50K+        │ ↓ 50K+             │
│ Strong Community │ Prelims Cleared │ Resources... │ App Downloads       │
└────────────────────────────────────────────────────────────────────────┘
```

Use vertical separators between stats.

Mobile:

```text
500K+       1000+
Community   Prelims

50K+        50K+
Resources   Downloads
```

or a single-column layout if necessary.

---

# 33. Responsive Breakpoints

## Desktop ≥ 1200px

Use:

```text
Navbar: full desktop
Hero: 2 columns
Carousel: 3-card stack
Stats: 4 columns
```

---

## Tablet 768–1199px

Use:

```text
Navbar: compressed desktop or menu
Hero: 2 columns if space allows
Carousel: smaller cards
Stats: 2 × 2
```

Reduce heading size.

---

## Mobile < 768px

Use:

```text
Navbar: logo + hamburger
Hero: single column

Badge
Heading
Description
CTA
App badges
Carousel
Stats
```

The carousel should become a single-card slider.

Side cards may be hidden or reduced to narrow previews.

Recommended mobile behavior:

```text
┌────────────────────────┐
│                        │
│  Foundation Resources  │
│                        │
│      illustration       │
│                        │
└────────────────────────┘
        ← ● ○ ○ →
```

---

# 34. Mobile Typography

Suggested:

```css
Hero heading:
36–46px

Description:
16px

Badge:
12–13px

CTA:
15–16px
```

The headline should remain strong but should not overflow.

---

# 35. Accessibility Requirements

The implementation must include:

- Semantic `<nav>`
- Semantic hero section
- Proper heading hierarchy
- Buttons as actual `<button>` elements
- Links as `<a>` elements where navigation is intended
- `aria-label` for carousel arrow buttons
- Accessible pagination labels
- Keyboard support
- Visible focus states
- Good color contrast
- Alt text for meaningful carousel illustrations

Keyboard:

```text
← Previous slide
→ Next slide
```

when carousel has focus.

---

# 36. Component Architecture

If using React/Next.js:

Recommended component structure:

```text
NavHeroSection/
├── Navbar
│   ├── Logo
│   ├── DesktopNavigation
│   ├── NavbarActions
│   └── MobileMenu
│
├── Hero
│   ├── HeroContent
│   │   ├── HeroBadge
│   │   ├── HeroHeading
│   │   ├── HeroDescription
│   │   ├── HeroActions
│   │   └── AppDownloadRow
│   │
│   ├── HeroCarousel
│   │   ├── CarouselCard
│   │   ├── CarouselControls
│   │   └── CarouselDots
│   │
│   └── DecorativeBackground
│
└── StatsBar
    └── StatItem
```

---

# 37. Carousel Data Structure

Do not hard-code the carousel layout directly into separate components.

Use data.

Example:

```js
const heroSlides = [
  {
    id: "foundation",
    eyebrow: "01 · Foundation",
    title: "Foundation Resources",
    description:
      "Build your basics with structured notes, expert lectures and curated study material.",
    icon: "book",
    accent: "orange",
    image: "/images/foundation-resources.png"
  },
  {
    id: "current-affairs",
    eyebrow: "02 · Current Affairs",
    title: "Stay Updated With Current Affairs",
    description:
      "Daily updates and exam-focused analysis for smarter UPSC preparation.",
    icon: "newspaper",
    accent: "blue",
    image: "/images/current-affairs.png"
  },
  {
    id: "pyqs",
    eyebrow: "03 · PYQs",
    title: "Practice With Real PYQs",
    description:
      "Understand UPSC patterns, test your preparation and improve your accuracy.",
    icon: "clipboard",
    accent: "green",
    image: "/images/pyqs.png"
  }
];
```

This makes it easy to add future slides.

---

# 38. Important Implementation Rule

Adding another slide should require only adding another object to:

```js
heroSlides
```

It should NOT require manually modifying the carousel HTML structure.

Example future slide:

```js
{
  id: "value-added",
  eyebrow: "04 · Value Added",
  title: "Go Beyond Basic Preparation",
  description: "...",
  icon: "star",
  accent: "purple",
  image: "/images/value-added.png"
}
```

The carousel should automatically:

- Generate the card
- Generate the pagination dot
- Support navigation
- Support swipe
- Support keyboard navigation

---

# 39. Suggested Folder Structure

```text
src/
├── components/
│   └── home/
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── HeroCarousel.tsx
│       ├── HeroCarouselCard.tsx
│       ├── HeroActions.tsx
│       ├── AppDownloadRow.tsx
│       └── StatsBar.tsx
│
├── data/
│   └── heroSlides.ts
│
├── assets/
│   └── hero/
│       ├── foundation-resources.png
│       ├── current-affairs.png
│       ├── pyqs.png
│       └── value-added.png
│
└── styles/
    └── hero.css
```

---

# 40. Visual Priority

The visual priority should be:

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

Decorative elements must never compete with the heading or CTA.

---

# 41. Spacing Guidelines

Approximate desktop spacing:

```text
Navbar height:             80–92px

Navbar → Hero badge:       55–70px

Badge → Heading:           30–36px

Heading → Description:     24–30px

Description → CTA:         28–34px

CTA → App row:             35–45px

Hero → Stats:              45–65px
```

Keep spacing generous.

The page should feel premium, not cramped.

---

# 42. Exact Hero Messaging

Use these strings unless product requirements explicitly change them.

Badge:

```text
Your Complete UPSC Preparation Ecosystem
```

Heading:

```text
Prepare for UPSC
with the Right
Resources.
```

Description:

```text
Structured courses, foundation resources, current affairs,
PYQs and AI-powered learning — all designed to help
you prepare smarter and crack UPSC.
```

Primary CTA:

```text
Explore Courses
```

Secondary CTA:

```text
Explore Resources
```

App title:

```text
Learn on the CSEWhy App
```

App subtitle:

```text
Access everything anytime, anywhere.
```

---

# 43. Interaction States

All buttons need:

### Default

Clean and visually stable.

### Hover

Small visual change:

- Slight darkening
- Border color change
- Optional 1–2px upward movement

### Active

Slightly darker background.

### Focus

Clearly visible outline.

### Disabled

Only if technically required.

Do not make interactions overly animated.

---

# 44. Performance

The hero is the most visible part of the page, so performance matters.

Recommendations:

- Lazy-load non-active carousel images where possible
- Optimize illustrations
- Use WebP/AVIF where supported
- Avoid huge PNGs
- Avoid video backgrounds
- Avoid large JS animation libraries just for the carousel
- Prefer CSS transitions and lightweight state management

The first hero card should render immediately.

---

# 45. Design Matching Checklist

Before considering the section complete, compare it against the reference and verify:

### Navbar

- [ ] Logo is left aligned
- [ ] Home is orange and underlined
- [ ] Courses has dropdown chevron
- [ ] Blogs visible
- [ ] About Us has dropdown chevron
- [ ] Download App button present
- [ ] Login button present
- [ ] Explore Courses orange CTA present

### Hero

- [ ] Warm off-white/peach background
- [ ] Badge present
- [ ] Large black/orange heading
- [ ] Supporting description
- [ ] Two CTA buttons
- [ ] App download row
- [ ] Right-side carousel
- [ ] 3 carousel cards
- [ ] Active card is visually dominant
- [ ] Previous/next cards partially visible
- [ ] Arrow controls
- [ ] Pagination dots
- [ ] Subtle circular background decoration
- [ ] Bottom stats bar

### Responsive

- [ ] No horizontal overflow
- [ ] Mobile navbar works
- [ ] Hero stacks correctly
- [ ] Carousel works with touch
- [ ] Stats collapse correctly
- [ ] Typography scales appropriately

---

# 46. Final Design Intent

The final implementation should look like a polished UPSC edtech landing page rather than a generic SaaS template.

The most important visual transformation from the original reference is:

```text
ORIGINAL

Hero
   ↓
[ Text ]                    [ Tilted Phone ]
                            [ App UI ]
                            [ Floating cards ]


NEW DESIGN

Hero
   ↓
[ Text ]                    [ Previous Card ]
                            [ ACTIVE CARD ]
                            [ Next Card ]
                                ↓
                            [ ← ● ● ● → ]
```

The carousel should become the visual focal point on the right side while still leaving the headline as the primary conversion/message element.

The implementation must be modular so additional promotional slides can be added later without redesigning the component.

