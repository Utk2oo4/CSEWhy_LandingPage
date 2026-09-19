# CSEWhy Testimonials Page — `/testimonials` (Version 2)

## Goal

Build a dedicated CSEWhy Testimonials page based on the latest approved visual direction.

The page should feel like a clean, premium **Wall of Testimonials** rather than a filter/database page.

Core concept:
- One hero section
- One section for each CSEWhy course
- One horizontally scrolling testimonial stream inside each course section
- Testimonials from all available platforms mixed together in the same stream
- Testimonials displayed as **actual screenshot images**
- No course selector
- No platform selector
- No separate testimonial rows for Twitter, WhatsApp, Telegram, Play Store, Email, etc.

The user simply scrolls down the page and discovers testimonials course by course.

---

## Page Route

```text
/testimonials
```

Do not create course/platform filter routes.

---

## Page Hierarchy

```text
NAVBAR

TESTIMONIAL HERO
    ↓
PYQ
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
MONTHLY MAGAZINE
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
CSAT
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
AI FOR UPSC
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
FOUNDATION NOTES
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
PUBLIC POLICY
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
AICF
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
PERSONALITY DEVELOPMENT
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
MASTERCLASS AI FOR UPSC
    ↓
ONE HORIZONTAL TESTIMONIAL STREAM
    ↓
FINAL CTA
```

---

## Hero Section

Use a light, warm CSEWhy visual style.

Background:
```text
#FFFBF8
```

Eyebrow:
```text
TESTIMONIALS
```

Heading:
```text
Real Aspirants. Real Stories.
```

Highlight `Real Stories.` in CSEWhy orange.

Supporting copy:
```text
From tweets to WhatsApp messages, app reviews to emails — see how CSEWhy is helping aspirants across India.
```

Trust metrics:
```text
10,000+
Happy Learners
```

```text
Authentic
Student Experiences
```

```text
Across Platforms
Twitter, WhatsApp, Telegram, Play Store, Email & More
```

Use simple line icons. Keep the hero compact and spacious.

---

## Course Sections

Every course gets its own section.

Courses:
```text
Pyq
Monthly Magazine
Csat
Aiforupsc
Foundation notes
Publicpolicy
AICF
PersonalityDevelopment
MasterclassAiforupsc
```

Display labels:
```text
PYQ
Monthly Magazine
CSAT
AI for UPSC
Foundation Notes
Public Policy
AICF
Personality Development
Masterclass AI for UPSC
```

Do not add other courses.

### Important

Do NOT add numeric labels such as:
```text
01 PYQ
02 Monthly Magazine
03 CSAT
```

Only show the course name.

---

## Course Section Design

Each course section should be visually simple.

Example:

```text
PYQ

Real experiences from PYQ learners.

                                      View all testimonials →

←   [SCREENSHOT] [SCREENSHOT] [SCREENSHOT] [SCREENSHOT]   →
```

Then the next course:

```text
Monthly Magazine

What readers are saying about our Monthly Magazine.

                                      View all testimonials →

→   [SCREENSHOT] [SCREENSHOT] [SCREENSHOT] [SCREENSHOT]   ←
```

Repeat for all courses.

---

## CRITICAL — SINGLE MIXED TESTIMONIAL STREAM

For each course there must be **ONE testimonial stream**.

Do NOT separate testimonials by platform.

Incorrect:
```text
PYQ
Twitter reviews
WhatsApp reviews
Telegram reviews
Play Store reviews
```

Correct:
```text
PYQ

[Twitter screenshot]
[WhatsApp screenshot]
[Telegram screenshot]
[Play Store screenshot]
[Email screenshot]
[Twitter screenshot]
[WhatsApp screenshot]
[Video screenshot]
[Telegram screenshot]

←──────── horizontal scrolling stream ────────→
```

All available platform testimonials should be mixed in the same carousel.

---

## Testimonials Must Be Screenshots

### CRITICAL REQUIREMENT

The testimonials themselves must be shown as **real screenshot images**.

Do NOT recreate testimonial content using HTML.

Incorrect:
```text
┌───────────────────────┐
│ ○ Student Name        │
│ ★★★★★                 │
│ "Great course..."     │
│ PYQ Course            │
└───────────────────────┘
```

Correct:
```text
┌───────────────────────┐
│                       │
│   ORIGINAL SCREENSHOT │
│   OF TESTIMONIAL      │
│                       │
└───────────────────────┘
```

The screenshot itself contains the original:
- name
- profile photo
- message/review
- platform UI
- date/time
- ratings
- engagement
- other original information

The frontend should not reconstruct or rewrite this content.

---

## Platform Mixing

The API should return testimonials with platform metadata.

Example:

```json
[
  {
    "id": "1",
    "course": "Pyq",
    "platform": "Twitter",
    "imageUrl": "/testimonials/pyq/001.webp"
  },
  {
    "id": "2",
    "course": "Pyq",
    "platform": "Whatsapp",
    "imageUrl": "/testimonials/pyq/002.webp"
  },
  {
    "id": "3",
    "course": "Pyq",
    "platform": "Playstore",
    "imageUrl": "/testimonials/pyq/003.webp"
  },
  {
    "id": "4",
    "course": "Pyq",
    "platform": "Telegram",
    "imageUrl": "/testimonials/pyq/004.webp"
  }
]
```

The frontend renders these in one ordered stream.

Do not group them by platform.

---

## Platform Identification

Do NOT place large platform logos or platform selectors above the screenshots.

The screenshot itself should provide the platform context.

Examples:
- Twitter screenshot looks like Twitter
- WhatsApp screenshot looks like WhatsApp
- Telegram screenshot looks like Telegram
- Play Store screenshot looks like Play Store
- Email screenshot looks like email

A tiny optional platform label may be used only if needed, but it must be subtle.

---

## Screenshot Card Design

Each screenshot sits inside a clean presentation card.

```css
background: #FFFFFF;
border: 1px solid #E8EDF3;
border-radius: 16px;
overflow: hidden;
```

Use only a subtle shadow.

The screenshot itself must remain unchanged.

Do not:
- crop it
- distort it
- stretch it
- change its colors
- rewrite its text
- overlay fake UI

---

## Screenshot Sizing

Desktop:
```text
approximately 300–380px wide
```

depending on screenshot aspect ratio.

Preserve the natural aspect ratio.

Use:
```css
object-fit: contain;
```

Do NOT use `object-fit: cover`.

The full testimonial screenshot must remain visible.

---

## Horizontal Scrolling

Each course gets one horizontally scrolling testimonial stream.

Example:

```text
PYQ

←
   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
   │ SCREEN  │ │ SCREEN  │ │ SCREEN  │ │ SCREEN  │
   │  SHOT   │ │  SHOT   │ │  SHOT   │ │  SHOT   │
   └─────────┘ └─────────┘ └─────────┘ └─────────┘
                                                   →
```

The stream should automatically scroll slowly.

Recommended alternating directions:
- PYQ → right-to-left
- Monthly Magazine ← left-to-right
- CSAT → right-to-left
- AI for UPSC ← left-to-right
- Foundation Notes → right-to-left
- Public Policy ← left-to-right
- AICF → right-to-left
- Personality Development ← left-to-right
- Masterclass AI for UPSC → right-to-left

---

## Seamless Infinite Scroll

Use a duplicated track for seamless looping:

```text
[A][B][C][D][E]
[A][B][C][D][E]
```

Animate continuously with no visible jump.

Do not repeatedly fetch data just to keep the animation moving.

---

## Manual Controls

Each testimonial stream can have subtle previous/next controls.

```text
←                                      →

[ screenshot ][ screenshot ][ screenshot ]
```

Buttons:
- circular
- white
- subtle shadow
- small
- accessible

On mobile, arrows may be hidden if swipe/drag is sufficient.

---

## Pause Behavior

Pause automatic scrolling when:
- mouse enters the carousel
- user focuses a testimonial
- user interacts with controls

Resume when the user leaves.

Touch devices should support normal swipe/drag.

---

## Reduced Motion

Respect:
```css
@media (prefers-reduced-motion: reduce)
```

Disable automatic scrolling and retain manual horizontal scrolling.

---

## Course Section Spacing

Avoid the cluttered appearance of the previous version.

Use generous vertical spacing.

Recommended:
```text
Course section margin-bottom: 80–110px
```

Within a course:
```text
Heading
↓
subtitle
↓
25–35px
↓
testimonial stream
```

Do not add progress bars, platform tabs, platform logos, or filter controls.

---

## Course Heading

Use large bold headings.

Example:
```text
PYQ
Real experiences from PYQ learners.
```

Right side:
```text
View all testimonials →
```

The link should be subtle.

If there is no real destination for a course, omit the link rather than inventing one.

---

## Visual Rhythm

Make it feel like the existing CSEWhy landing-page Reviews section:
- large whitespace
- simple headings
- clean testimonial cards
- horizontal movement
- alternating carousel directions
- minimal controls
- no complex filters
- no dense grid
- no repeated platform metadata
- testimonials are the visual focus

---

## Background

Keep the page primarily light.

Most sections:
```text
#FFFFFF
```

Hero:
```text
#FFFBF8
```

Optionally alternate very subtle:
```text
#FFFFFF
#FFFCFA
```

Do not create strong colored blocks behind every course.

---

## API Endpoint

Primary endpoint:
```text
/testimonials
```

Preferred response:

```json
{
  "testimonials": [
    {
      "id": "testimonial_001",
      "course": "Pyq",
      "platform": "Twitter",
      "imageUrl": "https://example.com/testimonials/pyq/001.webp",
      "createdAt": "2025-06-16T10:24:00Z"
    },
    {
      "id": "testimonial_002",
      "course": "Pyq",
      "platform": "Whatsapp",
      "imageUrl": "https://example.com/testimonials/pyq/002.webp",
      "createdAt": "2025-06-16T11:32:00Z"
    }
  ]
}
```

The important frontend field is:
```text
imageUrl
```

---

## Frontend Data Transformation

Group testimonials only by course.

Example:

```js
const testimonialsByCourse = {
  Pyq: [...],
  "Monthly Magazine": [...],
  Csat: [...],
  Aiforupsc: [...],
  "Foundation notes": [...],
  Publicpolicy: [...],
  AICF: [...],
  PersonalityDevelopment: [...],
  MasterclassAiforupsc: [...]
};
```

Each course array contains testimonials from all platforms.

Example:
```js
testimonialsByCourse.Pyq = [
  twitterTestimonial,
  whatsappTestimonial,
  telegramTestimonial,
  playstoreTestimonial,
  emailTestimonial,
  twitterTestimonial,
  videoTestimonial
];
```

Render that array as one carousel.

---

## Video Testimonials

Video testimonials also appear in the same mixed stream.

Example:
```text
[ Twitter screenshot ]
[ WhatsApp screenshot ]
[ Video thumbnail ]
[ Play Store screenshot ]
[ Email screenshot ]
```

For videos:
- use thumbnail/screenshot as the card image
- add a subtle play icon overlay
- clicking opens the video player/modal
- do not create a separate Video section

---

## Loading State

Use screenshot-shaped skeleton cards while loading.

Show approximately 4–6 skeletons per carousel.

Do not leave large blank spaces.

---

## Empty State

If a course has no testimonials:

```text
No testimonials yet

We’re collecting more experiences from CSEWhy students.
```

Do not create fake testimonials.

---

## Error State

If `/testimonials` fails:

```text
Unable to load testimonials

Please try again in a moment.
```

Button:
```text
Try Again
```

---

## Mobile Layout

On mobile:

```text
PYQ

Real experiences from PYQ learners.

← [ screenshot ][ screenshot ] →
```

Show approximately 1–1.3 cards at a time so the horizontal movement is obvious.

Users should be able to swipe manually.

Keep screenshot content intact.

---

## Accessibility

Each carousel must have:
- accessible previous button
- accessible next button
- keyboard focus support
- meaningful image alt text
- visible focus state
- reduced-motion support

Example alt:
```text
PYQ testimonial from a CSEWhy learner
```

---

## Performance

Because there can be many screenshots:
- lazy load below-the-fold images
- use optimized image formats
- avoid loading every screenshot at full resolution initially
- limit the initial number loaded per course if necessary
- avoid rendering hundreds of nodes at once
- duplicate the carousel track only for the rendered dataset
- preserve image dimensions to prevent layout shift

---

## Final CTA

After all course sections:

```text
Your story could be next.

Join thousands of aspirants who trust CSEWhy for their preparation.

[ Explore Our Courses → ]
```

Keep it consistent with the existing CSEWhy CTA styling.

---

## Component Structure

Recommended:

```text
TestimonialsPage
│
├── Navbar
│
├── TestimonialsHero
│
├── CourseTestimonialsSection
│   ├── CourseHeader
│   └── TestimonialCarousel
│       └── TestimonialScreenshotCard
│
├── CourseTestimonialsSection
│   ├── CourseHeader
│   └── TestimonialCarousel
│
├── ...
│
└── TestimonialsCTA
```

Use one reusable data-driven component:

```jsx
<CourseTestimonialsSection
  course="Pyq"
  title="PYQ"
  subtitle="Real experiences from PYQ learners."
  testimonials={pyqTestimonials}
  direction="left"
/>
```

---

## Final Visual Concept

```text
                    TESTIMONIALS

             Real Aspirants. Real Stories.

          10,000+      Authentic      Across Platforms


PYQ                                      View all →
Real experiences from PYQ learners.

←   [ screenshot ] [ screenshot ] [ screenshot ] [ screenshot ]   →
                         auto-scroll


MONTHLY MAGAZINE                         View all →
What readers are saying about our magazine.

→   [ screenshot ] [ screenshot ] [ screenshot ] [ screenshot ]   ←
                         auto-scroll


CSAT                                     View all →
Experiences from our CSAT learners.

←   [ screenshot ] [ screenshot ] [ screenshot ] [ screenshot ]   →


AI FOR UPSC                              View all →
Learner stories from AI for UPSC.

→   [ screenshot ] [ screenshot ] [ screenshot ] [ screenshot ]   ←


FOUNDATION NOTES                         View all →
What aspirants say about Foundation Notes.

←   [ screenshot ] [ screenshot ] [ screenshot ] [ screenshot ]   →


...remaining courses...


             Your story could be next.
                  [ Explore Courses ]
```

### Core rule

**One course = one horizontal stream containing every type of testimonial screenshot.**

The page should feel like the Reviews section of the CSEWhy homepage, expanded into a dedicated page with all nine courses.
