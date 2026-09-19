# Courses Section — UPSC / Upskilling Toggle

## Objective

Update the existing CSEWhy Courses section so users can switch between two course collections **without leaving the page or navigating to another route**.

The section should have a prominent segmented toggle:

```text
┌──────────────────────────────────────────────┐
│  🎓 For UPSC Aspirants │ 💼 For Upskilling  │
└──────────────────────────────────────────────┘
```

When the user clicks a toggle option, the same course section updates its heading, description and course cards.

Use the attached reference image as the visual direction.

---

## 1. Overall Structure

```text
Courses Section
│
├── Audience Toggle
├── Dynamic Section Heading
├── Dynamic Description
├── Course Cards
└── Optional bottom microcopy
```

**Do NOT create two separate sections.**

**Do NOT navigate to another page.**

Everything happens inside the existing Courses section.

---

## 2. Audience Toggle

Place the toggle above the heading and center it.

```text
┌───────────────────────────────────────────────┐
│ 🎓 For UPSC Aspirants │ 💼 For Upskilling    │
└───────────────────────────────────────────────┘
```

Container:

```css
background: #FFFFFF;
border: 1px solid #F45116;
border-radius: 999px;
padding: 5px;
```

Selected option:

```text
background: #F45116
color: #FFFFFF
```

Unselected option:

```text
background: transparent
color: #111827
```

Recommended height: `52–58px`.

Use a graduation-cap icon for UPSC and a briefcase/skills icon for Upskilling.

---

## 3. Toggle Behavior

Use a single local state:

```js
const [audience, setAudience] = useState("upsc");
```

Values:

```text
"upsc"
"upskilling"
```

Clicking a toggle updates the same section immediately.

Do not:
- reload the page
- change the URL
- navigate to another route
- scroll the user elsewhere

Animate the content switch with a subtle `300–400ms` fade + small vertical movement.

Respect `prefers-reduced-motion`.

---

## 4. UPSC State

Default selection:

```text
For UPSC Aspirants
```

Heading:

```text
Courses Designed for a Smarter
UPSC Preparation
```

Highlight `UPSC` in `#F45116`.

Description:

```text
Learn from expert mentors with curated content, practical tools and real exam insights. Choose the course that fits your goals and move closer to your dream.
```

### Courses

#### PYQ Course
```text
Practice with purpose. Perform with confidence.
```
- Chapter-wise PYQs with detailed solutions
- Topic-wise practice tests
- Exam pattern analysis and insights

#### Master AI for UPSC
```text
Learn, apply and stay ahead with AI.
```
- Practical AI tools for UPSC preparation
- Real use-cases and step-by-step guidance
- Save time and study smarter

#### Foundation Resources
```text
Build strong basics for long-term success.
```
- Curated notes from NCERTs and standard sources
- Topic-wise summaries and mindmaps
- Essential government reports and documents

#### Current Affairs Magazines
```text
Stay updated. Stay ahead.
```
- Monthly magazines for Prelims + Mains
- Analysis of important news and editorials
- Infographics and ready-to-revise content

#### AI Creator Fellowship
```text
Learn. Create. Make an Impact.
```
- Hands-on training in AI content creation
- Build real projects and a portfolio
- Be part of a growing creator community

---

## 5. Upskilling State

When the user selects:

```text
For Upskilling
```

replace the cards in the **same section** with the upskilling course collection.

Heading:

```text
Skills That Help You
Move Forward
```

Highlight:

```text
Move Forward
```

in orange.

Description:

```text
Build practical skills, learn from industry professionals and create opportunities beyond your preparation journey.
```

Use the actual upskilling course dataset available in the project.

**Do not invent course names if they have not been defined.**

Recommended data structure:

```js
const COURSE_GROUPS = {
  upsc: [...],
  upskilling: [...]
};
```

---

## 6. Course Card Design

Each card should follow this structure:

```text
┌─────────────────────────────┐
│        ILLUSTRATION         │
├─────────────────────────────┤
│ Course Name                 │
│ Short subtitle              │
│                             │
│ ◉ Feature                   │
│ ◉ Feature                   │
│ ◉ Feature                   │
│                             │
│ Learn More             →    │
└─────────────────────────────┘
```

Style:

```css
background: #FFFFFF;
border: 1px solid #E8EDF3;
border-radius: 18–22px;
overflow: hidden;
```

Use very soft shadows.

---

## 7. Illustration Area

Each course card has a pastel illustration area at the top.

Suggested palette:

```text
PYQ Course              → light lavender
Master AI for UPSC      → light peach
Foundation Resources    → light mint
Current Affairs         → light blue
AI Creator Fellowship   → light pink
```

Use simple illustrations or existing project assets.

Do not use testimonial screenshots here.

---

## 8. Card Content

Course title:

```text
18–22px
font-weight: 700
```

Subtitle:

```text
14–15px
color: #5B6472
```

Features:

```text
14–15px
```

Use small colored circular icons.

Keep copy concise.

---

## 9. Learn More

Each card ends with:

```text
Learn More →
```

Use existing CSEWhy dark text.

On hover:
- card moves up 2–4px
- arrow moves slightly right
- shadow becomes subtly stronger

No aggressive animation.

---

## 10. Desktop Layout

When there is sufficient width:

```text
[ Card ] [ Card ] [ Card ] [ Card ] [ Card ]
```

Use approximately:

```text
gap: 16–20px
```

Keep cards equal height.

---

## 11. Responsive Layout

### Tablet

Use:

```text
[ Card ] [ Card ] [ Card ]
[ Card ] [ Card ]
```

### Mobile

Use a horizontal course carousel:

```text
[ Full Card ]
       [ Next Card partially visible ]
```

Allow touch scrolling.

Hide the scrollbar visually while preserving scrolling.

Never create page-level horizontal overflow.

---

## 12. Dynamic Header Configuration

Use configuration rather than duplicating JSX:

```js
const COURSE_VIEW_CONFIG = {
  upsc: {
    heading: "Courses Designed for a Smarter UPSC Preparation",
    highlight: "UPSC",
    description:
      "Learn from expert mentors with curated content, practical tools and real exam insights. Choose the course that fits your goals and move closer to your dream."
  },

  upskilling: {
    heading: "Skills That Help You Move Forward",
    highlight: "Move Forward",
    description:
      "Build practical skills, learn from industry professionals and create opportunities beyond your preparation journey."
  }
};
```

---

## 13. Decorative Elements

Keep decoration subtle.

Optional left:

```text
Same
Struggles
Bigger Dreams
```

Optional right:

```text
A More
Informed
India
```

Use thin orange underlines and small orange doodle strokes.

Do not let decoration interfere with content.

---

## 14. Bottom Microcopy

Optional:

```text
LEARN • PRACTICE • GROW • BELONG
```

Use small uppercase muted typography.

---

## 15. Accessibility

The toggle should use semantic tabs:

```html
role="tablist"
role="tab"
aria-selected="true/false"
```

Support:
- keyboard focus
- Enter
- Space
- arrow-key navigation where appropriate

Course links/buttons need visible focus states.

Respect reduced motion.

---

## 16. Component Architecture

```text
CoursesSection
│
├── AudienceToggle
│   ├── UPSCToggle
│   └── UpskillingToggle
│
├── CourseSectionHeader
│
└── CourseGrid / CourseCarousel
    └── CourseCard
```

Keep course data outside JSX and reuse existing project data/components where possible.

---

## 17. Important Existing-Site Rule

This is an enhancement to the existing Courses section.

Do not modify:
- Navbar
- Hero
- Trust Bar
- About section
- Testimonials
- Footer
- global typography
- global spacing tokens

unless required for consistency.

Reuse the existing CSEWhy design system.

---

## 18. Final UX

Initial state:

```text
          [ For UPSC Aspirants | For Upskilling ]

       Courses Designed for a Smarter
              UPSC Preparation

      Learn from expert mentors with curated...

[ PYQ ] [ Master AI ] [ Foundation ] [ Current Affairs ] [ AICF ]
```

After selecting Upskilling:

```text
          [ For UPSC Aspirants | For Upskilling ]

             Skills That Help You
                 Move Forward

      Build practical skills, learn from industry...

[ Course ] [ Course ] [ Course ] [ Course ] [ Course ]
```

The page remains exactly where the user is.

Only the course collection, heading and supporting description change.

The experience should feel like switching between two curated views of the same CSEWhy ecosystem—not navigating between separate pages.
