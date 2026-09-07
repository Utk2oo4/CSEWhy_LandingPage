# Reviews / Student Testimonials Section — Antigravity Specification

## 1. Purpose

Create the **Student Reviews / Testimonials** section shown in the supplied reference image.

This section should appear after the Social Media Community section.

The section should replace the original people-photo cards with **review cards containing testimonials**.

The main visual interaction is a **continuous two-row horizontal scrolling animation**:

- **Row 1 moves from RIGHT → LEFT**
- **Row 2 moves from LEFT → RIGHT**

The movement should be smooth, continuous, and premium.

Do not use people photographs as the primary card content.

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
**Student Reviews**
↓
Final CTA
↓
Footer

Do not modify previous sections.

---

# 3. Visual Direction

The section should feel like a premium **Wall of Love / Student Reviews** section.

Use:

- warm off-white background
- large bold centered heading
- compact eyebrow
- two rows of horizontally scrolling testimonial cards
- soft card shadows
- rounded cards
- subtle pastel accents
- clean typography
- smooth movement

Suggested background:

`#FFFCFA`

Primary text:

`#171717`

Secondary text:

`#5F6368`

Brand orange:

`#F45116`

---

# 4. Section Header

At the top center add an eyebrow:

**STUDENT REVIEWS**

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

**What Our Learners Say**

Highlight:

**Say**

in the CSEWhy orange.

Visual:

```text
What Our Learners Say
                  ↑
              orange
```

Recommended desktop:
- 48–60px
- weight 700–800
- line-height approximately 1.05
- centered

---

## Supporting Text

Use:

> Real stories. Real progress. Real impact.

Style:
- muted gray
- 17–20px
- centered
- medium weight

---

# 5. Review Grid

Create two horizontal rows.

### Row 1

Direction:

**RIGHT → LEFT**

### Row 2

Direction:

**LEFT → RIGHT**

The animation must be continuous.

Example:

```text
ROW 1  ← ← ← ← ← ← ← ←

[Review] [Review] [Review] [Review] [Review] [Review]


ROW 2  → → → → → → → →

[Review] [Review] [Review] [Review] [Review] [Review]
```

Cards should partially enter and leave the viewport.

The row should feel like an infinite stream of testimonials.

---

# 6. Important Scroll Animation Rule

Do NOT make the rows move only once.

Implement a true **infinite marquee**.

Recommended approach:

1. Create a review array.
2. Render the same sequence twice.
3. Put both sequences inside an overflow-hidden track.
4. Animate the track using CSS keyframes.
5. Translate exactly one sequence width before looping.

Conceptually:

```text
Track:
[reviews A B C D E F][reviews A B C D E F]

Animation:
0%   → first sequence visible
100% → first sequence has completely moved away
loop → second identical sequence takes its place
```

This prevents visible jumps.

Do not use JavaScript `setInterval` for the primary movement.

Prefer CSS animation for performance.

---

# 7. Row 1 Animation

Direction:

**Right → Left**

Suggested:

```css
animation: reviews-left 35s linear infinite;
```

Example:

```css
@keyframes reviews-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
```

The exact percentage should be calculated according to the duplicated track structure.

Duration should be adjusted so the movement feels smooth rather than rushed.

Suggested range:

`32–45 seconds`

---

# 8. Row 2 Animation

Direction:

**Left → Right**

Suggested:

```css
animation: reviews-right 38s linear infinite;
```

Example:

```css
@keyframes reviews-right {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}
```

Use a slightly different duration from Row 1 to avoid the rows feeling mechanically synchronized.

Suggested range:

`34–48 seconds`

---

# 9. Pause on Hover

On desktop, hovering over a row may pause that row.

Example:

```css
.review-row:hover .review-track {
  animation-play-state: paused;
}
```

This allows users to read a testimonial.

Do not pause the entire section when only one card is hovered.

---

# 10. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled:

- stop the continuous animation
- show the rows in a static/scrollable layout
- keep all reviews accessible

Do not force animation on users who have requested reduced motion.

---

# 11. Review Card Design

Each review should be a real HTML card.

Suggested structure:

```text
ReviewCard
├── Reviewer Header
│   ├── Avatar
│   ├── Name
│   └── Location
├── Rating
├── Review Text
└── Course/Product Tag
```

Cards should be approximately:

Desktop:
- width: `300–360px`
- min-height: `250–280px`

Tablet:
- width: `290–330px`

Mobile:
- width: `280–310px`

Do not make cards too narrow.

---

# 12. Card Styling

Use:

- white background
- 1px very-light border
- subtle shadow
- 18–24px border radius
- 22–26px padding

Example:

```css
background: #FFFFFF;
border: 1px solid rgba(20,20,20,0.06);
border-radius: 20px;
box-shadow: 0 8px 30px rgba(20,20,20,0.05);
```

Avoid excessive shadows.

---

# 13. Reviewer Header

Use a circular initials avatar rather than requiring a photograph.

Example:

```text
┌────┐
│ AP │  Aarav Pratap
└────┘  Bengaluru, KA
```

Avatar:

- 42–50px
- circular
- pastel background
- bold initials
- accent color

Use different pastel colors across reviewers.

Do not use random profile photos.

---

# 14. Rating

Display:

**★★★★★**

Use a warm yellow/orange star color.

Recommended:

`#F5A400`

Place rating below the reviewer information.

Font size:

`15–18px`

Do not make stars dominate the card.

---

# 15. Review Text

Review text should be the main content of each card.

Use quotation marks.

Example:

> “The PYQ course made answer writing so much easier. Truly exam-oriented and crisp!”

Typography:

- 15–17px
- line-height 1.5–1.65
- dark navy/gray
- medium weight

Limit each review to approximately 2–4 lines on desktop.

Avoid very long paragraphs.

---

# 16. Course/Product Tag

At the bottom of each card add a small pill showing which product the review relates to.

Examples:

- `PYQ Course`
- `Current Affairs`
- `Foundation Resources`
- `Master AI for UPSC`
- `AI Creator Fellowship`

Use a soft pastel background.

Examples:

```text
PYQ Course
```

peach/pink

```text
Current Affairs
```

mint

```text
Foundation Resources
```

lavender

```text
Master AI for UPSC
```

light blue

```text
AI Creator Fellowship
```

soft pink/orange

The tag should visually match the card accent.

---

# 17. Review Content

Use realistic, concise student testimonials.

Create enough reviews so that each row has a rich continuous stream.

Recommended minimum:

**10–12 reviews total**

Use different reviewers, locations, products, and testimonial text.

Example review dataset:

```js
const reviews = [
  {
    name: "Aarav Pratap",
    location: "Bengaluru, KA",
    initials: "AP",
    rating: 5,
    text: "The PYQ course made answer writing so much easier. Truly exam-oriented and crisp!",
    product: "PYQ Course",
    accent: "pink"
  },
  {
    name: "Sneha M.",
    location: "Delhi",
    initials: "SM",
    rating: 5,
    text: "Current Affairs magazines are super helpful. Concise, relevant and perfect for revision.",
    product: "Current Affairs",
    accent: "green"
  },
  {
    name: "Rohan Kapoor",
    location: "Lucknow, UP",
    initials: "RK",
    rating: 5,
    text: "The Foundation resources gave me a strong base. Loved the clarity and structure.",
    product: "Foundation Resources",
    accent: "purple"
  },
  {
    name: "Priya Deshpande",
    location: "Pune, MH",
    initials: "PD",
    rating: 5,
    text: "Master AI for UPSC is a game-changer. Saves time and helps me study smarter.",
    product: "Master AI for UPSC",
    accent: "blue"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, RJ",
    initials: "VS",
    rating: 5,
    text: "The AI Creator Fellowship is a brilliant initiative. I learned, created and grew!",
    product: "AI Creator Fellowship",
    accent: "orange"
  },
  {
    name: "Neha Tiwari",
    location: "Chandigarh",
    initials: "NT",
    rating: 5,
    text: "Loved the quality of content and the supportive community. Highly recommend!",
    product: "PUQ Course",
    accent: "mint"
  },
  {
    name: "Kritika Anand",
    location: "Bhopal, MP",
    initials: "KA",
    rating: 5,
    text: "The explanations are simple yet deep. This platform actually cares about aspirants.",
    product: "PUQ Course",
    accent: "blue"
  },
  {
    name: "Raghav T.",
    location: "Hyderabad, TS",
    initials: "RT",
    rating: 5,
    text: "Current Affairs magazines keep me updated without overwhelming me. Perfect!",
    product: "Current Affairs",
    accent: "orange"
  },
  {
    name: "Ishita Patel",
    location: "Ahmedabad, GJ",
    initials: "IP",
    rating: 5,
    text: "The structured foundation resources helped me build concepts from scratch.",
    product: "Foundation Resources",
    accent: "green"
  },
  {
    name: "Aditya Menon",
    location: "Kochi, KL",
    initials: "AM",
    rating: 5,
    text: "Thanks to Master AI for UPSC, I can plan, revise and practice much more efficiently.",
    product: "Master AI for UPSC",
    accent: "purple"
  },
  {
    name: "Simran P.",
    location: "Patna, BR",
    initials: "SP",
    rating: 5,
    text: "The AI Creator Fellowship gave me real skills and confidence. Loved the experience!",
    product: "AI Creator Fellowship",
    accent: "pink"
  },
  {
    name: "Devansh Verma",
    location: "Indore, MP",
    initials: "DV",
    rating: 5,
    text: "Best platform for serious UPSC preparation. Clean, focused and genuinely useful.",
    product: "PUQ Course",
    accent: "blue"
  }
];
```

The exact review content can be replaced later with verified testimonials.

Do not claim that these are real customer reviews unless the project owner provides verified testimonials.

---

# 18. Row Distribution

Split the review dataset into two rows.

Example:

```js
const rowOneReviews = reviews.slice(0, 6);
const rowTwoReviews = reviews.slice(6, 12);
```

However, make sure the two rows contain a good mixture of products.

Do not put all reviews for one product into the same row.

---

# 19. Infinite Track Structure

Recommended JSX:

```jsx
<div className="reviews-marquee">
  <div className="reviews-track reviews-track-left">
    {[...rowOneReviews, ...rowOneReviews].map((review, index) => (
      <ReviewCard key={`${review.name}-${index}`} review={review} />
    ))}
  </div>
</div>
```

Second row:

```jsx
<div className="reviews-marquee">
  <div className="reviews-track reviews-track-right">
    {[...rowTwoReviews, ...rowTwoReviews].map((review, index) => (
      <ReviewCard key={`${review.name}-${index}`} review={review} />
    ))}
  </div>
</div>
```

Ensure the duplicated sequence has exactly the same widths/gaps so the loop is seamless.

---

# 20. Row Spacing

Recommended:

Header → first row:

`48–60px`

Row 1 → Row 2:

`20–28px`

Keep both rows close enough to feel like one component.

Section horizontal overflow must be hidden:

```css
overflow-x: hidden;
```

Do not allow the page itself to horizontally scroll.

---

# 21. Edge Treatment

The reference uses cards entering/exiting from the viewport edges.

Allow cards to be partially visible at the left/right edges.

Do not add visible scrollbar UI.

Optional:

Add a very subtle fade mask at the left and right edges:

```css
mask-image: linear-gradient(
  to right,
  transparent,
  black 5%,
  black 95%,
  transparent
);
```

Use only if it looks natural.

---

# 22. Responsive Behavior

## Desktop

Show approximately 4–5 cards simultaneously depending on viewport width.

The cards should retain a comfortable fixed width.

## Tablet

Show approximately 2–3 cards simultaneously.

## Mobile

Show approximately 1–1.2 cards at a time.

This is intentional: a partial next card communicates that the content continues.

Keep card width around:

`280–310px`

Do not shrink cards excessively.

The animation should remain smooth on mobile.

---

# 23. Animation Performance

Use GPU-friendly transforms.

Animate only:

```css
transform
```

and avoid animating:

- left
- margin-left
- width
- height

Use:

```css
will-change: transform;
```

only on the active marquee track.

Avoid JavaScript-driven per-frame animations.

---

# 24. Section Height

The section should have enough vertical space to breathe.

Recommended:

Desktop:

`700–850px`

depending on card dimensions.

Mobile:

approximately `700–900px`

depending on wrapping.

Do not force a fixed height that causes content clipping.

Use natural content height plus section padding.

---

# 25. Accessibility

Use semantic structure:

```html
<section aria-labelledby="reviews-heading">
```

Heading:

```html
<h2 id="reviews-heading">
```

Each review should be readable by screen readers.

The marquee animation should not make content inaccessible.

Consider adding:

```css
aria-live="off"
```

or avoid live-region semantics entirely because these are not live updates.

Respect reduced-motion preferences.

---

# 26. React Component Architecture

Recommended:

```text
Reviews
├── ReviewsHeader
├── ReviewsMarquee
│   └── ReviewCard
└── ReviewsMarquee
    └── ReviewCard
```

Suggested components:

```text
ReviewsSection
ReviewCard
ReviewMarquee
```

Keep the review data separate from the presentation.

---

# 27. Do Not Modify Existing Sections

Do not modify:

- Navbar
- Hero
- Trust Bar
- UPSC Quote
- Pan-India Community
- App Features
- Course Discovery
- Social Media Community

Add this section independently.

Reuse the existing:

- font
- container system
- spacing
- colors
- border radius
- icon system

---

# 28. Do Not Add

Do NOT add:

- large phone mockups
- social media feeds
- review statistics
- star-rating summary
- additional CTA sections
- pricing
- unrelated photos
- AI feature cards
- another course grid

The focus is exclusively on learner testimonials.

---

# 29. Final Visual Goal

The section should communicate:

**“Real UPSC aspirants are learning, practicing and growing with CSEWhy.”**

Visual hierarchy:

1. STUDENT REVIEWS
2. What Our Learners Say
3. Real stories. Real progress. Real impact.
4. Moving testimonial cards
5. Reviewer identity
6. 5-star rating
7. Review quote
8. Product/course tag

The defining interaction is:

**Top row → moves right-to-left**

**Bottom row → moves left-to-right**

Both rows should move continuously and seamlessly, creating a premium “Wall of Love” effect.
