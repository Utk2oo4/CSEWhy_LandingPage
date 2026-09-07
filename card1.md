# Card 1 — Expert Guidance

## 1. Purpose

This document is the implementation specification for **Card 1 of the CSEWhy hero carousel**.

The card replaces the generic resource-style carousel content with a **personal Expert Guidance / UPSC Mentor card** featuring the teacher image that will be provided separately.

The card must visually belong to the existing CSEWhy hero section and follow the design language defined in `Nav_Hero_Section.md`: warm off-white/peach background, CSEWhy orange accents, white rounded surfaces, subtle borders, soft shadows, large readable typography, and a premium edtech feel.

The supplied teacher image is the source of truth for the person shown in the card. **Do not generate a replacement person or alter the person's identity.**

---

# 2. Card Role

Card 1 communicates the human/mentor side of CSEWhy.

### Primary message

> Expert Guidance

### Supporting message

> Learn smarter with guidance, strategies, and insights designed specifically for UPSC aspirants.

### Mentor label

> UPSC Mentor

### Supporting visual message

> Let's Crack UPSC Together!

The overall impression should be:

- Personal
- Trustworthy
- Approachable
- Professional
- Aspirant-focused
- Premium
- Warm

The card should feel like a mentor is personally guiding the aspirant rather than looking like a generic course advertisement.

---

# 3. Relationship to the Hero Carousel

This card is the **active/featured card** when Card 1 is selected.

The parent hero specification defines a three-card stacked carousel:

```text
Previous Card       ACTIVE CARD          Next Card
     ┌──────┐       ┌──────────────┐       ┌──────┐
     │      │       │              │       │      │
     │      │       │ Expert       │       │      │
     │      │       │ Guidance     │       │      │
     │      │       │              │       │      │
     └──────┘       └──────────────┘       └──────┘
                         ↓
                     ←  ● ━ ●  →
```

When this card is active:

- It is the largest card.
- It has full opacity.
- It sits in front of the other cards.
- It receives the strongest visual emphasis.
- Its teacher image must be clearly visible.
- The lower information panel must remain readable.

Use the carousel behavior, controls, responsive rules, keyboard support, touch/swipe behavior, and animation rules from `Nav_Hero_Section.md`.

---

# 4. Important Product Change

The original hero specification described generic resource cards.

For the current CSEWhy hero carousel, **Card 1 is instead Expert Guidance**.

The card data should therefore be:

```js
{
  id: "expert-guidance",
  eyebrow: "01 · Expert Guidance",
  title: "Expert Guidance",
  description:
    "Learn smarter with guidance, strategies, and insights designed specifically for UPSC aspirants.",
  label: "UPSC Mentor",
  image: "/images/hero/teacher.png"
}
```

The exact image path can be changed to match the project's asset structure.

Do not hard-code the card HTML separately from the carousel data structure.

---

# 5. Card Dimensions

Follow the parent hero carousel dimensions as the starting point.

Desktop active card:

```css
width: 400px–460px;
height: 450px–500px;
border-radius: 26px–30px;
```

The exact dimensions should be tuned against the full hero composition.

The card must remain visually balanced with the left-side hero heading.

Avoid making the card so tall that it pushes the stats section unnecessarily far down the page.

---

# 6. Card Surface

The active card should use:

```css
background: #FFFFFF;
border: 1px solid #F3D8CC;
border-radius: 28px;
```

Use a very subtle shadow:

```css
box-shadow: 0 18px 45px rgba(80, 40, 20, 0.07);
```

The shadow must remain soft and understated.

Avoid:

- Heavy shadows
- Glassmorphism
- Strong gradients
- Dark card backgrounds
- Excessive glow
- Thick borders

---

# 7. Teacher Image

## Source

The teacher image will be supplied separately.

Use the provided image as the visual source.

The image should show the teacher with:

- Natural facial appearance
- Clear glasses
- Dark hair
- Light stubble
- Dark shirt
- Arms crossed
- Friendly smile

Do not artificially redesign the person.

---

# 8. Image Treatment

The teacher should occupy the upper portion of the card.

Recommended composition:

```text
┌──────────────────────────────────┐
│                                  │
│      Let's Crack UPSC            │
│         Together!                │
│                                  │
│             TEACHER              │
│          arms crossed            │
│                                  │
│                                  │
├──────────────────────────────────┤
│  📖                              │
│                                  │
│  Expert Guidance                 │
│                                  │
│  Learn smarter with guidance,    │
│  strategies, and insights...     │
└──────────────────────────────────┘
```

The person should be visually prominent but should not completely cover the text or badges.

---

# 9. Image Background

Place the teacher against a soft peach circular/oval visual treatment.

Suggested:

```css
background: #FFF0E9;
border-radius: 50%;
```

The shape should sit behind the teacher and create separation from the white card.

It should feel like a soft editorial portrait treatment rather than a hard geometric circle.

Keep the peach shape subtle.

---

# 10. Teacher Positioning

The teacher should be approximately centered horizontally in the card.

The image can slightly overlap the transition between the visual area and the lower information panel.

Suggested conceptual layering:

```text
             ┌─────────────────────┐
             │                     │
             │   peach oval        │
             │       ┌──────┐      │
             │       │      │      │
             │       │Teacher      │
             │       │      │      │
             │       └──────┘      │
             │                     │
             ├─────────────────────┤
             │  Expert Guidance    │
             │  supporting text    │
             └─────────────────────┘
```

Use `object-fit: cover` or `object-contain` depending on the supplied teacher image dimensions.

The teacher's face and crossed arms must remain visible.

---

# 11. Teacher Image Quality

The final rendering should feel like a professional website photograph.

Preserve:

- Natural skin texture
- Natural hair texture
- Clear glasses
- Natural smile
- Realistic proportions
- Realistic lighting

Do not apply:

- Cartoon effects
- Illustration filters
- Heavy HDR
- Excessive sharpening
- Artificial skin smoothing
- Dramatic color grading

The card should use the provided photograph as-is wherever possible.

---

# 12. Mentor Badge

Add a small floating badge over the teacher image.

Text:

```text
UPSC Mentor
```

Recommended icon:

```text
User / person icon
```

Suggested visual:

```css
background: #FFFFFF;
color: #8A4A32;
border: 1px solid #F2D7CA;
border-radius: 999px;
padding: 10px 16px;
```

The badge should include a small orange person icon.

Example:

```text
┌──────────────────────┐
│  ●  UPSC Mentor      │
└──────────────────────┘
```

Position it approximately around the lower-left or lower-middle area of the teacher image.

Do not cover the teacher's face.

---

# 13. Handwritten Message

Add the supporting visual message:

```text
Let's
Crack UPSC
Together!
```

This is a decorative motivational element.

It should appear near the upper portion of the card, beside or above the teacher.

Use a handwritten/script-style font if one is already available in the project.

If a handwritten font is unavailable, use a visually similar casual handwritten treatment.

The text should remain readable.

Add a small orange hand-drawn underline beneath the message.

Example:

```text
Let's
Crack UPSC
Together!
────────────
```

Use the brand orange:

```css
color: #F45116;
```

for the underline/accent.

The handwritten message is decorative and should not compete with the main `Expert Guidance` heading.

---

# 14. Decorative Accent Marks

Small orange accent strokes can be positioned near the teacher.

Example:

```text
   /
  ─
   \
```

Use them sparingly.

Suggested:

```css
color: #F45116;
```

They should resemble subtle hand-drawn emphasis marks.

Do not add many decorative elements.

---

# 15. Feature Badges

Two small supporting feature badges can appear around the teacher.

### Badge 1

```text
Smarter Strategies
```

Use a small analytics/bar-chart style icon.

### Badge 2

```text
Exam-Focused Guidance
```

Use a small graduation-cap or education icon.

These badges should use the same soft-card language:

```css
background: #FFF5F0;
border-radius: 16px;
```

with orange icon accents.

They are secondary elements and should never dominate the teacher image.

---

# 16. Main Information Panel

The lower section contains the primary card information.

Use a white panel with generous internal spacing.

### Icon

Use an outlined open-book icon.

Orange:

```css
color: #F45116;
```

Place the icon inside a small rounded square/pill with a pale peach background.

Example:

```text
┌──────┐
│  📖  │
└──────┘
```

---

# 17. Card Heading

Exact text:

```text
Expert Guidance
```

Recommended:

```css
font-size: 30px–36px;
font-weight: 750–800;
line-height: 1.1;
letter-spacing: -0.5px;
color: #171717;
```

The heading must be the strongest text element inside the card.

Do not use all caps.

---

# 18. Card Description

Exact text:

```text
Learn smarter with guidance, strategies, and insights designed specifically for UPSC aspirants.
```

Recommended:

```css
font-size: 16px–18px;
line-height: 1.5;
color: #565656;
```

Keep the description comfortably readable.

On desktop, aim for approximately 3–4 lines.

Do not make the text area overly dense.

---

# 19. Card Internal Hierarchy

The final card should visually follow:

```text
1. Teacher
2. Motivational message
3. UPSC Mentor badge
4. Expert Guidance heading
5. Description
6. Supporting decorative details
```

The teacher and the `Expert Guidance` heading should be the strongest elements.

---

# 20. Suggested Card Layout

Desktop concept:

```text
┌──────────────────────────────────────────┐
│                                          │
│  Let's                                    │
│  Crack UPSC          Smarter Strategies  │
│  Together!                                │
│                                          │
│             ┌───────────────┐            │
│             │               │            │
│             │    TEACHER    │            │
│             │  arms crossed │            │
│             │               │            │
│             └───────────────┘            │
│                                          │
│  ┌────────────────┐   ┌──────────────┐  │
│  │ 👤 UPSC Mentor │   │ Exam-Focused │  │
│  └────────────────┘   │ Guidance     │  │
│                       └──────────────┘  │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  ┌────┐                                  │
│  │ 📖 │                                  │
│  └────┘                                  │
│                                          │
│  Expert Guidance                         │
│                                          │
│  Learn smarter with guidance, strategies,│
│  and insights designed specifically for  │
│  UPSC aspirants.                         │
│                                          │
└──────────────────────────────────────────┘
```

The exact arrangement can be adjusted to fit the actual teacher photograph.

---

# 21. Color Tokens

Use the hero's existing design tokens:

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
```

The orange accent should remain consistent with the rest of the hero.

Avoid introducing blue, purple, or green as major colors on this card.

---

# 22. Typography

Use the same primary font as the rest of the CSEWhy landing page.

Typography should be:

- Bold
- Friendly
- Highly readable
- Modern
- Slightly rounded where possible

Recommended hierarchy:

```text
Expert Guidance
↓
Large / bold

Description
↓
Medium / gray

UPSC Mentor
↓
Small / medium

Let's Crack UPSC Together!
↓
Decorative handwritten
```

Do not introduce a completely different typography system for the card.

---

# 23. Card Border and Shadow

Use a thin warm border:

```css
border: 1px solid #F3D8CC;
```

Use a subtle shadow:

```css
box-shadow: 0 18px 45px rgba(80, 40, 20, 0.07);
```

The active card should look elevated from the side cards without appearing heavy.

---

# 24. Side-Card Compatibility

When Card 1 is active, the neighboring cards should remain visible behind it according to the parent carousel rules.

Example:

```text
        Previous              ACTIVE                 Next
       ┌─────────┐      ┌────────────────┐      ┌─────────┐
       │         │      │                │      │         │
       │ App     │      │    TEACHER     │      │ Practice│
       │         │      │                │      │         │
       └─────────┘      │ Expert         │      └─────────┘
                        │ Guidance       │
                        └────────────────┘
```

The active card must remain clearly dominant.

---

# 25. Carousel Controls

Use the existing carousel controls from `Nav_Hero_Section.md`.

The controls should appear below the carousel:

```text
                 ←   ● ━ ●   →
```

For a three-slide carousel:

- One active pagination indicator
- Two inactive indicators
- Circular previous button
- Circular next button

The active pagination indicator should be orange and wider.

---

# 26. Animation

Follow the parent carousel animation rules.

Recommended:

```css
transition:
  transform 450ms ease,
  opacity 450ms ease,
  filter 450ms ease;
```

Do not animate the teacher independently with:

- Excessive zooming
- Floating
- Rotation
- 3D effects
- Dramatic parallax

The card movement itself should provide the animation.

Respect:

```css
prefers-reduced-motion
```

When reduced motion is enabled, transition slides without animated movement.

---

# 27. Responsive Behavior

## Desktop ≥ 1200px

Use the full composition:

```text
Handwritten message
Teacher
Mentor badge
Supporting feature badges
Expert Guidance panel
```

The teacher image should be large and prominent.

---

## Tablet 768–1199px

Reduce:

- Teacher image size
- Badge size
- Card width
- Typography slightly

Keep the teacher clearly visible.

Avoid crowding the card with too many floating badges.

If necessary, hide one secondary feature badge while keeping:

- Teacher
- UPSC Mentor
- Expert Guidance
- Description

---

## Mobile < 768px

The card becomes a single active card.

Recommended structure:

```text
┌────────────────────────┐
│                        │
│  Let's Crack UPSC      │
│  Together!             │
│                        │
│       TEACHER           │
│    arms crossed        │
│                        │
│   UPSC Mentor          │
│                        │
├────────────────────────┤
│  📖                    │
│                        │
│  Expert Guidance       │
│                        │
│  Learn smarter with    │
│  guidance, strategies, │
│  and insights...       │
└────────────────────────┘
```

Hide or simplify secondary floating badges if they make the card cramped.

Do not allow horizontal page overflow.

---

# 28. Accessibility

The teacher image is meaningful content.

Use descriptive alt text such as:

```text
UPSC mentor providing expert guidance for CSEWhy aspirants
```

Carousel controls must use:

```html
aria-label="Previous slide"
aria-label="Next slide"
```

Pagination indicators must have accessible labels such as:

```text
Go to Expert Guidance slide
```

The card must remain keyboard accessible.

---

# 29. Performance

The teacher image is a hero asset.

Recommendations:

- Use an optimized image format such as WebP or AVIF where supported.
- Avoid unnecessarily huge source dimensions.
- Do not load multiple copies of the same teacher image.
- The active card should load immediately.
- Side-card images can be deferred where appropriate.
- Avoid large animation libraries for this card.

---

# 30. Component Structure

If using React/Next.js:

```text
HeroCarousel
└── HeroCarouselCard
    ├── ExpertGuidanceVisual
    │   ├── TeacherImage
    │   ├── MentorBadge
    │   ├── MotivationalMessage
    │   └── FeatureBadges
    │
    └── ExpertGuidanceContent
        ├── FeatureIcon
        ├── CardTitle
        └── CardDescription
```

The carousel itself should remain reusable.

Do not create a separate carousel implementation specifically for this card.

---

# 31. Data-Driven Slide

The slide should be represented as data.

Example:

```js
{
  id: "expert-guidance",
  eyebrow: "01 · Expert Guidance",
  title: "Expert Guidance",
  description:
    "Learn smarter with guidance, strategies, and insights designed specifically for UPSC aspirants.",
  label: "UPSC Mentor",
  motivationalText: "Let's Crack UPSC Together!",
  image: "/images/hero/teacher.png",
  icon: "book",
  accent: "orange"
}
```

The carousel component should render this object using the same `CarouselCard` structure used by the other slides.

---

# 32. Do Not Add AI Feature

The current product direction has removed the AI-powered learning feature from the app.

Therefore:

- Do not show an AI card.
- Do not show an AI chat interface.
- Do not label this card as AI-powered.
- Do not use AI as the third-card concept in the current hero.

For the current carousel, this card represents **Expert Guidance**.

The other current hero feature to highlight is **Practice Mode**.

---

# 33. Visual Matching Checklist

Before considering Card 1 complete:

### Card Surface

- [ ] White active card
- [ ] Warm peach/off-white surrounding background
- [ ] Rounded 26–30px corners
- [ ] Thin warm border
- [ ] Soft shadow

### Teacher

- [ ] Provided teacher image is used
- [ ] Face remains natural
- [ ] Glasses remain intact
- [ ] Arms-crossed pose remains visible
- [ ] Teacher is the main visual focus
- [ ] Image does not look artificially generated

### Messaging

- [ ] “Let's Crack UPSC Together!” present
- [ ] “UPSC Mentor” badge present
- [ ] “Expert Guidance” heading present
- [ ] Correct supporting description present

### Styling

- [ ] Brand orange used for accents
- [ ] No dark background
- [ ] No excessive gradient
- [ ] No excessive shadow
- [ ] No glassmorphism
- [ ] No excessive decorative elements

### Carousel

- [ ] Card works as active slide
- [ ] Side cards remain visible
- [ ] Pagination works
- [ ] Previous/next controls work
- [ ] Touch/swipe works on mobile
- [ ] Keyboard navigation works
- [ ] Reduced-motion behavior works

### Responsive

- [ ] Desktop composition looks balanced
- [ ] Tablet layout does not feel crowded
- [ ] Mobile card remains readable
- [ ] No horizontal overflow
- [ ] Teacher remains clearly visible

---

# 34. Final Design Intent

The card should communicate one simple idea immediately:

> **You are not preparing for UPSC alone — CSEWhy provides expert guidance along the way.**

The visual hierarchy should therefore be:

```text
                 TEACHER
                    ↓
        “Let's Crack UPSC Together!”
                    ↓
              UPSC Mentor
                    ↓
             Expert Guidance
                    ↓
       Short supporting description
```

The final card should look like a premium **mentor introduction inside a UPSC education platform**, not like a generic profile card.

Use the supplied teacher photograph as the hero visual and keep the overall treatment consistent with the parent CSEWhy hero specification.
