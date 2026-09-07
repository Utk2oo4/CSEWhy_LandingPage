# Course Discovery Section — Antigravity Specification

## 1. Purpose

Create a **Course Discovery / Explore Courses** section below the existing App Features section.

Use the provided course-discovery reference image as the visual direction.

The section should help visitors quickly understand the available CSEWhy learning products and choose a course based on their preparation goals.

The section must contain exactly these five course cards:

1. **PUQ Course**
2. **Master AI for UPSC**
3. **Foundation Resources**
4. **Current Affairs Magazines**
5. **AI Creator Fellowship**

Each course card must include **2–3 concise points explaining what the course/product offers**.

Do not add unrelated courses.

---

# 2. Critical Implementation Rule

The reference image is a **visual reference only**.

Do NOT use the reference image as:

- a CSS background
- a full-section `<img>`
- a screenshot
- a flattened UI
- a background layer containing the text/cards

Recreate the section using real HTML/CSS/React components.

All text, cards, icons, buttons, badges, and interactions must be actual frontend elements.

Use existing project components/design tokens wherever possible.

---

# 3. Page Position

The intended page flow is:

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
**Course Discovery**
↓
Results / Testimonials
↓
Final CTA
↓
Footer

Do not modify the previously completed sections.

---

# 4. Overall Visual Style

Match the existing CSEWhy visual language:

- premium
- clean
- warm
- modern
- educational
- spacious
- trustworthy
- subtle playful details

Use a warm off-white/cream section background.

Suggested colors:

Primary orange:

`#F45116`

Primary text:

`#171717`

Secondary text:

`#555555`

Background:

`#FFFCFA`

Soft peach:

`#FFF0E9`

Use different very-light pastel accents for the five cards.

Suggested accents:

- PUQ Course → lavender
- Master AI for UPSC → peach/orange
- Foundation Resources → mint/green
- Current Affairs Magazines → light blue
- AI Creator Fellowship → soft pink/peach

Keep colors subtle.

Avoid heavy gradients, dark cards, excessive shadows, and overly saturated backgrounds.

---

# 5. Section Header

At the top center, add an eyebrow pill:

**EXPLORE COURSES**

Style:

- uppercase
- orange text
- small/medium font
- rounded pill
- very light peach background
- subtle border

---

## Main Heading

Use:

**Courses Designed for a Smarter**
**UPSC Preparation**

Highlight:

**UPSC Preparation**

in the brand orange.

The heading should be large, bold, and centered.

Recommended desktop size:

`48–56px`

Recommended line-height:

`1.05–1.15`

Maximum heading width:

approximately `850–1000px`

---

## Supporting Description

Use:

> Learn from expert mentors with curated content, practical tools and real exam insights. Choose the course that fits your goals and move closer to your dream.

Keep it centered and muted.

Maximum width:

`750–850px`

---

# 6. Course Card Layout

Desktop should display all five cards in one row when the container width permits.

```text
┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│            │ │            │ │            │ │            │ │            │
│ illustration│ │illustration│ │illustration│ │illustration│ │illustration│
│            │ │            │ │            │ │            │ │            │
├────────────┤ ├────────────┤ ├────────────┤ ├────────────┤ ├────────────┤
│ PUQ Course │ │ Master AI  │ │Foundation  │ │ Current    │ │ AI Creator │
│            │ │ for UPSC   │ │ Resources  │ │ Affairs    │ │ Fellowship │
│ short      │ │ short      │ │ short      │ │ short      │ │ short      │
│ intro      │ │ intro      │ │ intro      │ │ intro      │ │ intro      │
│            │ │            │ │            │ │            │ │            │
│ • Point    │ │ • Point    │ │ • Point    │ │ • Point    │ │ • Point    │
│ • Point    │ │ • Point    │ │ • Point    │ │ • Point    │ │ • Point    │
│ • Point    │ │ • Point    │ │ • Point    │ │ • Point    │ │ • Point    │
│            │ │            │ │            │ │            │ │            │
│ View Course│ │ View Course│ │ View Course│ │ View Course│ │ View Course│
└────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘
```

All five cards should have consistent:

- width
- height
- padding
- border radius
- typography hierarchy
- CTA placement

Do not allow one card to become substantially taller because of its text.

---

# 7. Course Card Structure

Each card should contain:

```text
CourseCard
├── Illustration Area
├── Course Content
│   ├── Course Title
│   ├── Short Intro
│   └── 2–3 Benefit Points
└── CTA
    └── View Course →
```

The illustration area should occupy roughly the upper 30–35% of the card.

The content area should remain white or very lightly tinted.

---

# 8. Course 1 — PUQ Course

## Title

**PUQ Course**

Keep this exact spelling as provided by the product naming.

## Short intro

> Practice with purpose. Perform with confidence.

## Points

Use exactly 3 concise points:

- **Chapter-wise PYQs with detailed solutions**
- **Topic-wise practice tests**
- **Exam pattern analysis and insights**

## Visual

Use a clean illustration related to:

- previous-year questions
- exam papers
- question sheets
- UPSC preparation

Possible visual concept:

A stack of papers labelled `PYQs` with a subtle year range.

Use lavender/purple as the supporting accent.

---

# 9. Course 2 — Master AI for UPSC

## Title

**Master AI for UPSC**

## Short intro

> Learn, apply and stay ahead with AI.

## Points

Use:

- **Practical AI tools for UPSC preparation**
- **Real use-cases and step-by-step guidance**
- **Save time and study smarter**

## Visual

Use a friendly educational AI/technology illustration.

Possible concept:

A small AI assistant/robot working with a laptop and study materials.

Keep the illustration simple and consistent with the other course illustrations.

Use peach/orange accents.

---

# 10. Course 3 — Foundation Resources

## Title

**Foundation Resources**

## Short intro

> Build strong basics for long-term success.

## Points

Use:

- **Curated notes from NCERTs and standard sources**
- **Topic-wise summaries and mindmaps**
- **Essential government reports and documents**

## Visual

Use stacked study books/resources.

Possible labels:

- NCERT
- Standard Books
- Govt. Reports

Use mint/green accents.

---

# 11. Course 4 — Current Affairs Magazines

## Title

**Current Affairs Magazines**

## Short intro

> Stay updated. Stay ahead.

## Points

Use:

- **Monthly magazines for Prelims + Mains**
- **Analysis of important news and editorials**
- **Infographics and ready-to-revise content**

## Visual

Use a magazine/newspaper illustration.

Possible concept:

A current-affairs magazine with a small Indian government/civic illustration and a coffee cup.

Use light blue accents.

---

# 12. Course 5 — AI Creator Fellowship

## Title

**AI Creator Fellowship**

## Short intro

> Learn. Create. Make an Impact.

## Points

Use:

- **Hands-on training in AI content creation**
- **Build real projects and a portfolio**
- **Be part of a growing creator community**

## Visual

Use a creative AI/content-production illustration.

Possible concept:

Laptop or tablet with a video/content interface, play button, or creator tools.

Use soft pink/orange accents.

---

# 13. Benefit Point Design

Each point should have a small circular icon.

Example:

```text
○  Chapter-wise PYQs with detailed solutions
○  Topic-wise practice tests
○  Exam pattern analysis and insights
```

Icon should be:

- small
- visually consistent
- related to the point where possible
- placed inside a subtle pastel circle

Do not use oversized icons.

The text should be readable and concise.

---

# 14. CTA

Every card should have:

**View Course →**

Make it an actual button/link.

Recommended style:

- orange text
- subtle peach background
- rounded corners
- arrow icon
- full-width or nearly full-width inside the card

On hover:

- background becomes slightly stronger
- arrow moves 2–3px right
- transition around 200ms

---

# 15. View All Courses CTA

Below the five cards, centered:

**View All Courses →**

Use an outlined button.

Style:

- orange border
- orange text
- white/cream background
- rounded corners
- medium width
- arrow icon

Suggested spacing:

`40–48px` below the cards.

---

# 16. Decorative Elements

You may add a small number of subtle decorative elements inspired by the reference:

- handwritten-style motivational text
- tiny orange strokes
- subtle curved line
- faint pastel circles
- light Indian architectural line-art near the bottom

Possible handwritten copy:

**Learn. Prepare. Grow.**

or

**Same Dream. Bigger Possibilities.**

Keep decoration very subtle.

Do not allow it to interfere with card readability.

Do not use decoration to fill every empty space.

---

# 17. Card Illustration Rules

Illustrations should be:

- flat/vector style
- clean
- friendly
- consistent across all five cards
- softly colored
- centered
- visually similar in complexity

Do not mix:

- photographs
- 3D renders
- unrelated stock illustrations
- different illustration styles

If suitable existing project assets are available, reuse them.

Otherwise create/source a consistent illustration set.

The illustration should not contain important text that needs to be read by the user. Course names and benefits must be real HTML text.

---

# 18. Responsive Behavior

## Desktop

Five cards in one row if the viewport allows.

Use a wide content container.

Suggested:

```text
[ PUQ ] [ AI ] [ Foundation ] [ Current Affairs ] [ Fellowship ]
```

## Tablet

Use either:

```text
[ PUQ ] [ AI ] [ Foundation ]
[ Current Affairs ] [ Fellowship ]
```

or a horizontal scroll/carousel if that better matches the existing site's responsive strategy.

Do not squeeze cards until their text becomes unreadable.

## Mobile

Use a single-column stack:

```text
[ PUQ Course ]

[ Master AI for UPSC ]

[ Foundation Resources ]

[ Current Affairs Magazines ]

[ AI Creator Fellowship ]

[ View All Courses ]
```

Alternative: use a horizontal swipe carousel only if the project already uses carousel patterns.

Avoid accidental horizontal page overflow.

---

# 19. Responsive Typography

Desktop heading:

`48–56px`

Tablet:

`38–46px`

Mobile:

`30–36px`

Card title:

Desktop:

`20–22px`

Mobile:

`20px`

Card description:

`14–16px`

Benefit text:

`13–15px`

Maintain good line height.

---

# 20. Spacing

Recommended desktop:

Section padding:

`96px–120px` top and bottom

Eyebrow → heading:

`16–20px`

Heading → description:

`18–24px`

Description → cards:

`48–60px`

Card gap:

`16–20px`

Card internal padding:

`20–24px`

Cards → View All button:

`40–48px`

Adjust based on the existing project's container and spacing tokens.

---

# 21. Card Hover Interaction

On desktop hover:

- card lifts by approximately 3–5px
- border becomes slightly more visible
- shadow increases subtly
- CTA arrow moves slightly
- illustration can scale by approximately `1.02`

Do not create aggressive animations.

On mobile, avoid hover-only interactions.

---

# 22. Entrance Animation

When the section enters the viewport:

1. Header fades upward.
2. Cards appear with a subtle stagger.
3. View All Courses button appears last.

Suggested timing:

```text
Header       0ms
PUQ          100ms
AI           160ms
Foundation   220ms
Current      280ms
Fellowship   340ms
CTA          420ms
```

Animation:

```text
opacity: 0 → 1
transform: translateY(15px) → translateY(0)
```

Duration:

`400–600ms`

Respect:

`prefers-reduced-motion`.

---

# 23. Accessibility

Use semantic HTML.

Recommended:

```html
<section aria-labelledby="course-discovery-heading">
```

Use:

```html
<h2 id="course-discovery-heading">
```

Each course title should be a heading.

Each View Course CTA should have a meaningful accessible label if the destination is course-specific.

Example:

```text
View PUQ Course
View Master AI for UPSC
View Foundation Resources
```

Do not rely only on color to distinguish course categories.

Ensure sufficient text contrast.

---

# 24. Component Architecture

If the project uses React:

```text
CourseDiscovery
├── SectionHeader
├── CourseGrid
│   └── CourseCard
└── ViewAllCoursesButton
```

Use a data-driven array:

```js
const courses = [
  {
    title: "PUQ Course",
    intro: "Practice with purpose. Perform with confidence.",
    accent: "purple",
    illustration: "...",
    points: [
      "Chapter-wise PYQs with detailed solutions",
      "Topic-wise practice tests",
      "Exam pattern analysis and insights"
    ]
  },
  {
    title: "Master AI for UPSC",
    intro: "Learn, apply and stay ahead with AI.",
    accent: "orange",
    illustration: "...",
    points: [
      "Practical AI tools for UPSC preparation",
      "Real use-cases and step-by-step guidance",
      "Save time and study smarter"
    ]
  },
  {
    title: "Foundation Resources",
    intro: "Build strong basics for long-term success.",
    accent: "green",
    illustration: "...",
    points: [
      "Curated notes from NCERTs and standard sources",
      "Topic-wise summaries and mindmaps",
      "Essential government reports and documents"
    ]
  },
  {
    title: "Current Affairs Magazines",
    intro: "Stay updated. Stay ahead.",
    accent: "blue",
    illustration: "...",
    points: [
      "Monthly magazines for Prelims + Mains",
      "Analysis of important news and editorials",
      "Infographics and ready-to-revise content"
    ]
  },
  {
    title: "AI Creator Fellowship",
    intro: "Learn. Create. Make an Impact.",
    accent: "pink",
    illustration: "...",
    points: [
      "Hands-on training in AI content creation",
      "Build real projects and a portfolio",
      "Be part of a growing creator community"
    ]
  }
];
```

Do not duplicate the full card markup five times.

---

# 25. Course Data Must Be Easy to Change

The course cards should be driven from data.

If a new course needs to be added later, it should be possible by adding one object to the course array.

Do not hard-code layout logic separately for every course.

---

# 26. Important Distinction From App Features

The previous **App Features** section has exactly three features:

- Practice
- PYQs
- Current Affairs

This **Course Discovery** section is different.

It showcases the actual products/courses:

- PUQ Course
- Master AI for UPSC
- Foundation Resources
- Current Affairs Magazines
- AI Creator Fellowship

Do not merge these two sections.

---

# 27. Do Not Modify Existing Sections

Do not modify:

- Navbar
- Hero
- Trust Bar
- UPSC Quote
- Pan-India Community
- App Features

unless a shared design-token adjustment is required.

Add this section independently below App Features.

Reuse the existing:
- typography
- container
- buttons
- spacing
- border radius
- icon system

---

# 28. Final Visual Goal

The user should immediately understand:

**“CSEWhy has different resources and courses for different UPSC preparation needs.”**

The visual hierarchy should be:

1. EXPLORE COURSES
2. Main heading
3. Supporting description
4. Five course cards
5. Course illustrations
6. Course names
7. 2–3 useful course benefits
8. View Course buttons
9. View All Courses CTA

The final section should look polished and close in visual spirit to the supplied reference while being fully responsive, interactive, accessible, and implemented as real frontend UI.
