# App Features Section — Antigravity Specification

## 1. Purpose

Build the **App Features** section directly below the existing **Pan-India Community** section.

This section should explain exactly three core UPSC preparation tools:

1. **Practice**
2. **PYQs**
3. **Current Affairs**

**Do not add AI-powered learning. Do not add a fourth feature.**

The section should transition the page from the community story into the practical tools available inside the CSEWhy app.

---

## 2. Critical Implementation Rule

Use the provided reference image only as a **visual design reference**.

Do NOT use the complete reference image as:
- a CSS background
- a full-section image
- an `<img>` covering the entire section
- a flattened screenshot

Recreate the section with real HTML/CSS/React components.

Text, cards, icons, buttons, UI previews, and decorative elements must remain actual frontend elements.

---

## 3. Page Position

The existing page flow is:

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
**App Features**
↓
Course Discovery
↓
Results / Testimonials
↓
Final CTA
↓
Footer

Do not modify previously completed sections.

---

## 4. Visual Direction

Create a premium, modern UPSC education-app section that feels:

- clean
- spacious
- trustworthy
- youthful
- educational
- polished
- slightly playful

Keep the same visual language as the existing CSEWhy website.

### Core colors

Primary orange: `#F45116`

Primary text: `#171717`

Secondary text: `#555555`

Warm background: `#FFFCFA`

Soft peach: `#FFF0E9`

Suggested feature accents:

- Practice → orange/peach
- PYQs → purple/lavender
- Current Affairs → green/mint

Use very subtle pastel backgrounds. Avoid strong gradients, dark backgrounds, excessive shadows, and heavy 3D effects.

---

# 5. Overall Layout

Desktop:

```text
                         APP FEATURES

              Three Powerful Tools for Your
                   UPSC Preparation.

          Stay informed, practice smart, and learn
          from real exam questions — all in one app.

   ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
   │                 │ │                 │ │                 │
   │    PRACTICE     │ │      PYQs       │ │ CURRENT AFFAIRS │
   │                 │ │                 │ │                 │
   │      icon       │ │      icon       │ │       icon      │
   │                 │ │                 │ │                 │
   │   description   │ │   description   │ │   description   │
   │                 │ │                 │ │                 │
   │     mini UI     │ │     mini UI     │ │     mini UI     │
   │                 │ │                 │ │                 │
   └─────────────────┘ └─────────────────┘ └─────────────────┘
```

Use one centered heading area followed by three equal-width feature cards.

---

# 6. Section Header

Eyebrow:

**APP FEATURES**

Style:
- uppercase
- small font
- orange text
- rounded pill
- very light peach background
- subtle border

Heading:

**Three Powerful Tools for Your UPSC Preparation.**

Highlight **“UPSC Preparation.”** in the brand orange.

Recommended desktop heading:
- 48–56px
- bold/extra-bold
- line-height around 1.05–1.15
- centered
- max width around 800–900px

Supporting text:

> Stay informed, practice smart, and learn from real exam questions — all in one app, built for your UPSC journey.

Use muted gray text and a max width around 700–800px.

---

# 7. Feature Card 1 — Practice

### Title

**Practice**

### Description

> Strengthen your concepts with topic-wise practice tests, mock tests and detailed performance analysis.

### Icon

Use a target, quiz, practice, or similar icon.

Style:
- orange
- inside a soft peach circular container
- simple outline or clean filled icon
- consistent size with other feature icons

Use the existing icon library if the project already has one.

### Mini UI

Create a small practice-test interface:

```text
┌─────────────────────────────┐
│ Polity Practice Test        │
│                             │
│ Question 1/10               │
│ ███████░░░░░░               │
│                             │
│ Which of the following is   │
│ not a fundamental right?    │
│                             │
│ ○ Right to Equality         │
│ ● Right to Property         │
│ ○ Right to Freedom          │
└─────────────────────────────┘
```

Include:
- test title
- question counter
- progress bar
- question
- three choices
- one selected/highlighted choice

Keep it simplified and readable.

---

# 8. Feature Card 2 — PYQs

### Title

**PYQs**

### Description

> Access previous year questions with topic-wise organization, detailed solutions and exam insights.

### Icon

Use a document/question-paper icon.

Use:
- purple/lavender accent
- soft lavender circular icon background

### Mini UI

Create a simplified previous-year-question interface:

```text
┌─────────────────────────────┐
│ Previous Year Questions     │
│                             │
│ 2023       General Studies I│
│                             │
│ Consider the following      │
│ statements about...         │
│                             │
│ ○ Statement 1               │
│ ● Statement 2               │
│ ○ Statement 3               │
│                             │
│ [ View Solution → ]         │
└─────────────────────────────┘
```

Include:
- year selector
- subject/category selector
- question
- answer choices
- View Solution CTA

Do not recreate a full app; this is a visual preview.

---

# 9. Feature Card 3 — Current Affairs

### Title

**Current Affairs**

### Description

> Stay updated with daily current affairs, editorials and in-depth analysis curated specifically for UPSC.

### Icon

Use a newspaper/news icon.

Use:
- green/mint accent
- soft mint circular icon background

### Mini UI

Create a simplified news interface:

```text
┌─────────────────────────────┐
│ Today's Highlights          │
│                     12 Nov  │
│                             │
│ [image] POLITY              │
│         SC on Electoral     │
│         Bonds: Key          │
│         Takeaways        >  │
│                             │
│ [image] INTERNATIONAL       │
│         India-US Strategic  │
│         Partnership      >  │
│                             │
│ [image] ENVIRONMENT         │
│         COP29: Key          │
│         Outcomes         >  │
└─────────────────────────────┘
```

Small thumbnails can use existing assets or tasteful CSS placeholders.

Do not depend on external images unless already available.

---

# 10. Card Structure

All cards should share the same structure:

```text
FeatureCard
├── Header
│   ├── Icon
│   ├── Title
│   └── Arrow
├── Description
└── Mini App Preview
```

### Styling

- radius: 20–28px
- subtle 1px border
- soft shadow
- white or very lightly tinted background
- 28–32px internal padding
- equal height
- equal visual importance

Do not make one card significantly larger than the others.

---

# 11. Card Color Treatment

### Practice

Background: `#FFF9F5`

Accent: `#F45116`

Icon background: `#FFF0E9`

### PYQs

Background: very light lavender

Accent: purple

Icon background: soft lavender

### Current Affairs

Background: very light mint

Accent: green

Icon background: soft mint

Keep all colors pastel and premium.

---

# 12. Card Arrow

Add a small circular arrow button in the top-right.

Example:

`Practice                                      →`

The arrow should use the card accent color.

Hover:
- card moves up 3–5px
- shadow becomes slightly stronger
- arrow shifts 2–3px right

Keep animation subtle.

---

# 13. Decorative Elements

Optional:
- tiny orange hand-drawn lines
- small dots
- curved dashed connector
- faint peach circles
- subtle Indian line-art architecture near the bottom

Decoration must remain secondary.

Do not fill empty space with unnecessary graphics.

---

# 14. Spacing

Recommended desktop values:

Section top/bottom: `96px–120px`

Eyebrow → heading: `16px–20px`

Heading → description: `18px–24px`

Description → cards: `48px–64px`

Card gap: `24px–32px`

Card padding: `28px–32px`

Avoid excessive empty space between the header and cards.

---

# 15. Responsive Design

## Desktop

Three cards in one row:

```text
[ Practice ] [ PYQs ] [ Current Affairs ]
```

## Tablet

Use three columns when there is enough width.

Otherwise:

```text
[ Practice ] [ PYQs ]
[ Current Affairs ]
```

## Mobile

Stack vertically:

```text
APP FEATURES

Three Powerful Tools
for Your UPSC Preparation.

Description

[ Practice ]

[ PYQs ]

[ Current Affairs ]
```

Use 16–20px page padding.

Cards should be 100% width.

Do not create horizontal scrolling.

---

# 16. Mobile Mini-UI

Do not shrink desktop previews until their text becomes unreadable.

On mobile:
- reduce internal preview padding
- simplify UI content where necessary
- preserve readable typography
- keep the main visual interaction visible

---

# 17. Animation

Use subtle viewport entrance animation:

1. Header fades/slides upward.
2. Practice card appears.
3. PYQs card appears.
4. Current Affairs card appears.

Suggested stagger:
- header: 0ms
- Practice: 100ms
- PYQs: 180ms
- Current Affairs: 260ms

Use:
- opacity: 0 → 1
- translateY: 15–20px → 0
- duration: 400–600ms
- ease-out

Respect `prefers-reduced-motion`.

---

# 18. Accessibility

Use semantic HTML.

Recommended:

```html
<section aria-labelledby="app-features-heading">
```

Heading:

```html
<h2 id="app-features-heading">
```

Use meaningful headings for all three cards.

Do not communicate information only through color.

Icons should be decorative when the adjacent text already communicates their meaning; otherwise provide accessible labels.

Maintain sufficient text contrast.

---

# 19. React Component Architecture

Create:

```text
AppFeatures
```

Reusable child:

```text
FeatureCard
```

Use a data-driven structure:

```js
const appFeatures = [
  {
    title: "Practice",
    description: "Strengthen your concepts with topic-wise practice tests, mock tests and detailed performance analysis.",
    accent: "orange",
    icon: ...,
    preview: "practice"
  },
  {
    title: "PYQs",
    description: "Access previous year questions with topic-wise organization, detailed solutions and exam insights.",
    accent: "purple",
    icon: ...,
    preview: "pyq"
  },
  {
    title: "Current Affairs",
    description: "Stay updated with daily current affairs, editorials and in-depth analysis curated specifically for UPSC.",
    accent: "green",
    icon: ...,
    preview: "current-affairs"
  }
];
```

Avoid duplicating the full card markup three times.

---

# 20. Existing Sections Must Stay Untouched

Do not modify:
- Navbar
- Hero
- Trust Bar
- UPSC Quote
- Pan-India Community

unless a shared design-token adjustment is absolutely necessary.

Add App Features as an independent section.

Reuse existing:
- container width
- typography
- spacing tokens
- buttons
- border radius
- icon system

Do not introduce a new unrelated design system.

---

# 21. Do Not Overbuild

Do NOT add:
- AI-powered learning
- structured courses as a fourth feature
- course discovery
- testimonials
- pricing
- app download banner
- large phone mockup
- statistics
- additional feature cards

The section has exactly three features:

**Practice → PYQs → Current Affairs**

---

# 22. Final Visual Goal

Within a few seconds, the user should understand:

> CSEWhy gives UPSC aspirants practical tools to practice questions, learn from previous-year questions, and stay updated with current affairs.

Visual hierarchy:

1. Section heading
2. Three feature cards
3. Feature names
4. Short descriptions
5. Mini app UI previews
6. Decorative details

The final result should feel like a premium modern UPSC education product and naturally continue from the existing Pan-India Community section.
