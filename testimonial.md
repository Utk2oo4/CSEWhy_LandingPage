# CSEWhy Testimonials Page — `/testimonials`

## 1. Overview

Build a dedicated CSEWhy Testimonials page based on the provided reference image.

The page should feel like a polished, premium social-proof section for a UPSC education platform.

**Important:** Testimonials must be displayed as **actual screenshot images**, not recreated as HTML/text testimonial cards.

Use the uploaded reference image as the visual direction for the overall page structure and spacing, but build the page as real responsive frontend components.

Do not use the reference image itself as the page background.

---

# 2. Page URL

Main route:

```text
/testimonials
```

The page should support course/platform filtering through the URL.

Recommended route structure:

```text
/testimonials/:course?platform=:platform
```

Examples:

```text
/testimonials/pyq?platform=twitter
/testimonials/csat?platform=playstore
/testimonials/aiforupsc?platform=whatsapp
```

If no course is specified:

```text
/testimonials
```

default to:

```text
course = Pyq
platform = Twitter
```

---

# 3. Overall Page Structure

The page should follow this hierarchy:

```text
NAVBAR

        TESTIMONIAL HERO
        ─────────────────
        What Aspirants Say About CSEWhy
        supporting copy
        3 trust/stat items


        COURSE SELECTOR
        ─────────────────
        1. Choose a Course
        [ PYQ ] [ Monthly Magazine ] [ CSAT ] ...


        PLATFORM SELECTOR
        ─────────────────
        2. Choose Platform
        [ Twitter ] [ WhatsApp ] [ Telegram ] ...


        TESTIMONIAL HEADER
        ─────────────────
        PYQ · Twitter Testimonials
        description
        sorting/filter control


        SCREENSHOT TESTIMONIAL GRID
        ─────────────────
        [ screenshot ] [ screenshot ] [ screenshot ] [ screenshot ]
        [ screenshot ] [ screenshot ] [ screenshot ] [ screenshot ]


        LOAD MORE


        OPTIONAL FINAL CTA
```

---

# 4. Hero Section

Use a soft warm peach/cream background.

Recommended colors:

```text
Brand Orange: #F45116
Primary Text: #111827
Secondary Text: #5B6472
Background: #FFFBF8
Soft Peach: #FFF1E9
White: #FFFFFF
Border: #E8EDF3
```

Hero content:

Eyebrow:

```text
TESTIMONIALS
```

Heading:

```text
What Aspirants Say About CSEWhy
```

Highlight `CSEWhy` in CSEWhy orange.

Supporting text:

```text
Real experiences from our community, across platforms.
```

Below the heading, show three trust indicators:

### Stat 1

```text
10,000+
Happy Learners
```

### Stat 2

```text
Real Experiences
From Aspirants Like You
```

### Stat 3

```text
Trusted by UPSC
Aspirants
```

Use simple line icons.

The hero should be compact, not excessively tall.

Add subtle hand-drawn/decorative orange elements only if they fit the existing CSEWhy visual language.

---

# 5. Course Selector

This is the primary filter.

Heading:

```text
1. Choose a Course
```

Supporting text:

```text
Select the course you want to see testimonials for.
```

Display the courses as a horizontal card/chip carousel.

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

Recommended display labels:

| API Value | Display |
|---|---|
| `Pyq` | PYQ |
| `Monthly Magazine` | Monthly Magazine |
| `Csat` | CSAT |
| `Aiforupsc` | AI for UPSC |
| `Foundation notes` | Foundation Notes |
| `Publicpolicy` | Public Policy |
| `AICF` | AICF |
| `PersonalityDevelopment` | Personality Development |
| `MasterclassAiforupsc` | Masterclass AI for UPSC |

Each course should be represented by:

```text
┌─────────────────────┐
│       [icon]        │
│                     │
│       PYQ           │
└─────────────────────┘
```

Use small course-specific icons.

### Selected state

The selected course should have:

- Orange border
- Very light orange background
- Orange icon
- Slightly stronger visual weight

Example:

```text
┌─────────────────────┐
│       [icon]        │
│                     │
│       PYQ           │  ← selected
└─────────────────────┘
```

Do not make the selected card overly saturated.

### Desktop

Show all 9 course cards if they fit naturally.

If they do not fit:

- horizontal scrolling
- left/right navigation buttons
- no ugly scrollbar

### Mobile

Use horizontal scrolling.

The course cards should remain compact enough to browse quickly.

---

# 6. Platform Selector

This is the secondary filter.

Heading:

```text
2. Choose Platform
```

Supporting text:

```text
See what aspirants are saying about this course on different platforms.
```

Platforms:

```text
Twitter
Whatsapp
Telegram
Playstore
Email
Video
```

Recommended display:

```text
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│  𝕏 Twitter     │ │ WhatsApp       │ │ Telegram       │
│     (24)       │ │     (18)        │ │     (12)       │
└────────────────┘ └────────────────┘ └────────────────┘

┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ Play Store (31)│ │ Email (7)      │ │ Video (9)      │
└────────────────┘ └────────────────┘ └────────────────┘
```

The counts are examples only.

**Do not hardcode these numbers unless they come from the API.**

If the API returns testimonial counts, show them.

If not, simply show:

```text
Twitter
WhatsApp
Telegram
Play Store
Email
Video
```

### Selected platform

The selected platform should use:

- Dark/near-black background for Twitter/X as shown in the reference
- White text
- Other platforms remain white with subtle border
- Orange can be used as a secondary accent

Do not force Twitter's dark treatment onto every platform.

Each platform can have its recognizable icon.

---

# 7. Selected State / URL

When the user selects:

```text
PYQ
```

and:

```text
Twitter
```

update the URL to:

```text
/testimonials/pyq?platform=twitter
```

When the user clicks WhatsApp:

```text
/testimonials/pyq?platform=whatsapp
```

When the user changes course:

```text
/testimonials/csat?platform=whatsapp
```

The page should update without a full browser reload if the framework supports client-side routing.

---

# 8. Testimonial Heading

Below the filters:

```text
PYQ · Twitter Testimonials
```

Use orange for:

```text
PYQ
```

and dark text for:

```text
· Twitter Testimonials
```

Supporting text:

```text
Real tweets from aspirants who used our PYQ resources.
```

This description should dynamically change according to the selected course/platform.

Examples:

```text
PYQ · WhatsApp Testimonials

Real messages from aspirants who used our PYQ resources.
```

```text
CSAT · Play Store Testimonials

Reviews from aspirants using CSEWhy for CSAT preparation.
```

---

# 9. Sorting / Controls

On the right side of the testimonial heading, provide:

```text
[ Most Recent ▾ ]
```

Possible sort values:

```text
Most Recent
Oldest
Most Loved
```

Only implement sorting options supported by the API/data.

Also optionally show:

```text
Showing 1–8 of 24
```

If pagination/count data is available.

---

# 10. MOST IMPORTANT — TESTIMONIALS ARE SCREENSHOTS

The actual testimonial content must be displayed as **image screenshots**.

Do NOT recreate the Twitter/WhatsApp/Telegram/Play Store UI using HTML.

For example:

```text
┌──────────────────────────┐
│                          │
│   ACTUAL SCREENSHOT      │
│   OF TESTIMONIAL         │
│                          │
│                          │
└──────────────────────────┘
```

Each testimonial should be an image asset returned by the API.

The screenshot itself should contain:

- person's profile/avatar
- username/name
- testimonial text
- platform UI
- timestamp/date
- engagement information
- any other content contained in the original screenshot

The frontend should simply present the screenshot beautifully.

This preserves authenticity and prevents accidentally changing the wording or appearance of the original testimonial.

---

# 11. Screenshot Card

Each screenshot should sit inside a clean card/container.

Recommended:

```text
┌──────────────────────────────┐
│                              │
│      testimonial image       │
│                              │
└──────────────────────────────┘
```

Style:

```text
background: white
border: 1px solid #E8EDF3
border-radius: 14px
overflow: hidden
box-shadow: subtle
```

Do not crop important testimonial content.

Use:

```css
object-fit: contain;
```

rather than:

```css
object-fit: cover;
```

when displaying screenshots.

The entire screenshot should remain visible.

---

# 12. Screenshot Grid

Desktop:

```text
4 columns
```

Example:

```text
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ image   │ │ image   │ │ image   │ │ image   │
│         │ │         │ │         │ │         │
└─────────┘ └─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ image   │ │ image   │ │ image   │ │ image   │
│         │ │         │ │         │ │         │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

Use approximately:

```text
gap: 16–20px
```

Keep screenshot cards aligned and clean.

### Important

Different screenshot dimensions are expected.

Do not distort them.

Use a consistent card area while preserving the screenshot's aspect ratio.

If necessary, allow cards to have variable heights or use a masonry layout.

---

# 13. Recommended Alternative — Masonry Grid

For screenshot testimonials, a masonry layout can actually feel more natural than forcing every screenshot into the exact same height.

Example:

```text
┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
│           │ │           │ │           │ │           │
│ screenshot│ │ screenshot│ │ screenshot│ │ screenshot│
│           │ │           │ │           │ │           │
│           │ └───────────┘ │           │ │           │
│           │               │           │ └───────────┘
└───────────┘               └───────────┘
```

Use masonry only if the screenshots have substantially different dimensions.

Otherwise use a standard 4-column grid.

---

# 14. Clicking a Screenshot

When a user clicks a testimonial screenshot:

Open a lightbox/modal.

Example:

```text
┌─────────────────────────────────────────────────┐
│                                            ×    │
│                                                 │
│             [ FULL SCREENSHOT ]                 │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

Requirements:

- dark translucent backdrop
- centered screenshot
- preserve original aspect ratio
- zoom if appropriate
- close button
- Escape closes
- clicking outside closes
- keyboard accessible

On mobile, allow the screenshot to occupy most of the viewport.

---

# 15. Hover Interaction

Desktop screenshot cards can have a very subtle hover:

```text
transform: translateY(-2px)
box-shadow: slightly stronger
```

Do not add exaggerated animations.

A small:

```text
View
```

or zoom icon can appear on hover.

Keep the screenshot itself unchanged.

---

# 16. Load More

Below the testimonial grid:

```text
[ Load More Testimonials ↓ ]
```

If the API supports pagination, use it.

Preferred:

```text
GET /testimonials?course=Pyq&platform=Twitter&page=2
```

or cursor pagination if supported.

When clicked:

- fetch next batch
- append screenshots
- do not replace the existing testimonials
- show loading state inside the button

Example:

```text
[ Loading... ]
```

Do not use infinite scrolling unless specifically requested.

---

# 17. API Integration

Primary endpoint:

```text
/testimonials
```

Preferred query:

```text
GET /testimonials?course=Pyq&platform=Twitter
```

The frontend should also be able to work with a response containing all testimonials:

```text
GET /testimonials
```

and filter locally as a fallback.

Preferred response:

```json
{
  "course": "Pyq",
  "platform": "Twitter",
  "total": 24,
  "page": 1,
  "pageSize": 8,
  "testimonials": [
    {
      "id": "testimonial_001",
      "course": "Pyq",
      "platform": "Twitter",
      "imageUrl": "https://example.com/testimonials/pyq/twitter/001.png",
      "createdAt": "2025-06-16T10:24:00Z"
    }
  ]
}
```

The important frontend field is:

```text
imageUrl
```

The testimonial image should be loaded from that URL.

---

# 18. Platform-Specific Image Handling

All platforms ultimately render screenshots.

### Twitter

```text
imageUrl
```

Screenshot of tweet.

### WhatsApp

```text
imageUrl
```

Screenshot of WhatsApp testimonial.

### Telegram

```text
imageUrl
```

Screenshot of Telegram message/post.

### Play Store

```text
imageUrl
```

Screenshot of Play Store review.

### Email

```text
imageUrl
```

Screenshot of email testimonial.

### Video

For Video testimonials, use a screenshot/thumbnail in the grid.

When clicked, open the video player.

Example:

```json
{
  "id": "video_001",
  "course": "Pyq",
  "platform": "Video",
  "imageUrl": "https://...",
  "videoUrl": "https://..."
}
```

Show a play button overlay on video thumbnails.

---

# 19. Empty State

If a selected course/platform has no testimonials:

```text
No testimonials yet

We're collecting more experiences from CSEWhy students.
```

Do not create fake content.

Provide:

```text
[ Explore Other Platforms ]
```

---

# 20. Loading State

Use screenshot-shaped skeleton cards.

Example:

```text
┌───────────────┐
│ █████████████ │
│ █████████████ │
│ ███████████   │
│               │
│ █████████████ │
│ █████████     │
└───────────────┘
```

Show 6–8 skeletons while loading.

---

# 21. Error State

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

# 22. Responsive Design

## Desktop

Use:

```text
max-width: 1400px
padding: 32px
```

Course selector:

```text
horizontal
```

Platform selector:

```text
horizontal
```

Testimonials:

```text
4-column grid
```

## Tablet

Testimonials:

```text
3 columns
```

## Mobile

Hero:

```text
centered
```

Course selector:

```text
horizontal scroll
```

Platform selector:

```text
horizontal scroll
```

Testimonials:

```text
1 column
```

Avoid making the page excessively tall due to large screenshot widths.

Use a sensible maximum screenshot width.

---

# 23. Mobile Filter Behavior

On mobile, the selectors should remain easy to use.

Recommended:

```text
Choose a Course
[ PYQ ▾ ]
```

followed by:

```text
Choose Platform

[ Twitter ] [ WhatsApp ] [ Telegram ] →
```

The platform row can horizontally scroll.

The course selector can also become a compact dropdown if nine cards are too wide.

---

# 24. Navigation

Use the existing CSEWhy navbar.

Testimonials should appear as an active navigation item if the page is part of the main website navigation.

Do not redesign the existing navbar unnecessarily.

---

# 25. Footer / CTA

A small final CTA can be included after the testimonial grid.

Suggested:

```text
Have a story to share?

Your experience can motivate thousands of aspirants.

[ Share Your Story → ]
```

Use the existing CSEWhy CTA styling.

Keep this section compact so the testimonials remain the primary focus.

---

# 26. Design Rules

Use the existing CSEWhy design system.

### Colors

```text
Orange: #F45116
Dark: #111827
Secondary: #5B6472
Cream: #FFFBF8
Peach: #FFF1E9
White: #FFFFFF
Border: #E8EDF3
```

### Visual style

- clean
- premium
- editorial
- warm
- spacious
- trustworthy
- subtle rounded corners
- subtle shadows
- no excessive gradients
- no dark overall background
- no 3D cards
- no excessive animation

---

# 27. Important Authenticity Rule

Because these are real testimonials, **never modify the screenshot contents**.

Do not:

- rewrite testimonial text
- change names
- change dates
- change profile pictures
- fabricate engagement numbers
- generate fake testimonials
- generate fake social-media screenshots
- crop out context that changes the meaning

The API should provide the original testimonial screenshot.

The frontend's responsibility is presentation, filtering, pagination, and lightbox viewing.

---

# 28. Component Structure

Recommended React structure:

```text
TestimonialsPage
│
├── TestimonialsHero
│
├── CourseSelector
│
├── PlatformSelector
│
├── TestimonialToolbar
│
├── TestimonialGrid
│   └── TestimonialScreenshotCard
│
├── TestimonialLightbox
│
├── LoadMoreButton
│
└── TestimonialsCTA
```

Suggested data:

```js
const courses = [
  "Pyq",
  "Monthly Magazine",
  "Csat",
  "Aiforupsc",
  "Foundation notes",
  "Publicpolicy",
  "AICF",
  "PersonalityDevelopment",
  "MasterclassAiforupsc"
];

const platforms = [
  "Twitter",
  "Whatsapp",
  "Telegram",
  "Playstore",
  "Email",
  "Video"
];
```

Keep these data-driven.

Do not duplicate UI markup for each course/platform.

---

# 29. Accessibility

Ensure:

- course buttons have accessible labels
- platform buttons have accessible labels
- screenshot images have meaningful alt text
- lightbox is keyboard accessible
- Escape closes lightbox
- visible focus states
- sufficient color contrast
- reduced-motion support

Example alt:

```text
PYQ testimonial from Twitter by Manu
```

Do not use:

```text
image1.png
testimonial.png
```

as alt text.

---

# 30. Performance

Testimonials may contain many image screenshots.

Implement:

- lazy loading
- responsive image sizes
- WebP/AVIF where supported
- fixed/known image dimensions to reduce layout shift
- pagination/load-more
- avoid loading every testimonial on initial page load
- preload only the first visible images if useful

Do not load all screenshots for all courses and platforms simultaneously.

---

# 31. Final Interaction Flow

The intended user journey is:

```text
/testimonials
      ↓
Default: PYQ + Twitter
      ↓
User selects CSAT
      ↓
/testimonials/csat?platform=twitter
      ↓
Testimonials update
      ↓
User selects Play Store
      ↓
/testimonials/csat?platform=playstore
      ↓
Play Store screenshot testimonials appear
      ↓
User clicks screenshot
      ↓
Full-size lightbox
```

This should feel instant and smooth.

---

# 32. Do Not Change Other Website Sections

This task is only for the Testimonials page.

Do not modify:

- existing navbar design
- homepage sections
- About page
- Course Discovery section
- Social Media section
- Reviews section elsewhere
- Footer

unless a small shared component change is required for routing/navigation.

The uploaded reference image is a **design reference**, not a background asset.

Build everything as actual responsive frontend components.
