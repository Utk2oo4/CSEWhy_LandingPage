# About Us Page — CSEWhy UPSC Landing Page

## 1. Purpose

This document is the implementation specification for the **About Us page** of the CSEWhy UPSC preparation platform.

The goal is to recreate the supplied reference design as closely as possible: an "Our Story" intro block followed by a "Who We Are" content block pairing a narrative + stats with a real community photograph.

The page should feel:

- Warm and human (community-led, not corporate)
- Premium
- Clean
- Education/edtech focused
- Trustworthy and authentic
- Highly readable
- Responsive

The implementation should preserve the overall visual language already established on the CSEWhy homepage (see `Nav_Hero_Section.md`): warm off-white/peach backgrounds, orange primary accents, rounded cards, subtle borders/shadows, large typography, and handwritten-style decorative annotations.

---

# 2. Overall Page Structure

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│                                NAVBAR                                        │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                         SECTION A — INTRO / OUR STORY                       │
│                                                                              │
│                            [ ★ OUR STORY badge ]                            │
│                          About CSEWhy (heading)                            │
│                        Supporting description (2 lines)                    │
│                              [ short divider ]                             │
│   handwritten: "For a More Informed India"    handwritten: "Same Struggles │
│                                                  Bigger Dreams"             │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│                    SECTION B — WHO WE ARE                                   │
│                                                                              │
│  LEFT CONTENT                              RIGHT MEDIA                       │
│  ─────────────                             ───────────                       │
│  Eyebrow: WHO WE ARE                       Rounded community photo          │
│  Heading: More than a platform,            (India Gate / Rajpath sunset,    │
│           a community.                      4 people, backs to camera,     │
│  Paragraph description                      hoodies printed with taglines) │
│  3-item stat/feature row                   handwritten: "Real People.      │
│                                              Real Progress."                │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

Sections A and B sit on two visually distinct background tones (A = warm peach, B = lighter/white) to create separation without a hard border.

---

# 3. Reference Design Characteristics

## Primary visual language

Use:

- Warm off-white/peach background for the intro section
- Near-white background for the "Who We Are" section
- Orange as the primary brand accent
- Dark navy/charcoal for primary headline text
- Muted gray for body/supporting text
- Rounded corners on badges, images and icon containers
- Soft shadows, thin warm-gray borders
- Subtle dot-pattern and soft blob decorative shapes
- Hand-drawn/script-style annotations as accent copy

Avoid:

- Heavy gradients
- Dark section backgrounds
- Stock-photo clichés (this section relies on one authentic, specific community photo)
- Overly corporate/SaaS tone in copy

Reuse the design tokens already defined in `Nav_Hero_Section.md` (`--brand-orange`, `--text-primary`, `--hero-background`, radii, etc.) rather than redefining a new palette.

---

# 4. Design Tokens

Inherit from the global tokens. Additions specific to this page:

```css
--about-hero-bg: #FFF8F4;      /* Section A background */
--about-content-bg: #FFFFFF;    /* Section B background */

--script-text-color: #2B2B2B;   /* handwritten annotation color */
--script-underline: var(--brand-orange);

--stat-icon-bg: #FFF0E9;        /* pastel circular icon backgrounds */
--stat-icon-color: var(--brand-orange);
```

---

# 5. Section A — "Our Story" Intro

## 5.1 Layout

Centered, single-column, max-width container (`~800–900px` for text), full-bleed decorative background.

```css
text-align: center;
max-width: 860px;
margin: 0 auto;
padding: 90px 24px 70px;
```

## 5.2 Background decoration

- Top-left: a matrix of small low-opacity peach dots (reuse the hero's dotted-pattern component)
- Top-left/left edge: a soft, large, low-opacity blob/curve shape in a lighter peach tone
- Top-right: a soft rounded peach blob shape, partially cropped off-canvas
- All decorative shapes sit behind content (`z-index: 0`) and must never reduce text contrast

## 5.3 "OUR STORY" badge

Appearance:

- Small pill, light peach background
- Orange text, uppercase, letter-spaced
- Small filled star icon to the left of the label

```css
background: var(--brand-orange-light);
color: var(--brand-orange);
border-radius: 999px;
padding: 8px 18px;
font-size: 13px;
font-weight: 700;
letter-spacing: 0.06em;
text-transform: uppercase;
display: inline-flex;
align-items: center;
gap: 8px;
```

## 5.4 Heading

Text: **"About CSEWhy"**

- "About " → `var(--text-primary)` (dark navy/charcoal)
- "CSEWhy" → `var(--brand-orange)`
- Bold, large display size

```css
font-size: 56px;
font-weight: 800;
letter-spacing: -1px;
line-height: 1.1;
```

Mobile: scale down to `36–40px`.

## 5.5 Supporting description

Text:

```text
A learner community on a mission to make UPSC preparation
more accessible, structured and effective for every aspirant in India.
```

```css
font-size: 19px;
color: var(--text-secondary);
line-height: 1.6;
max-width: 700px;
margin: 24px auto 0;
```

## 5.6 Divider

A short, thin, centered horizontal rule beneath the description.

```css
width: 56px;
height: 3px;
background: var(--brand-orange);
border-radius: 2px;
margin: 28px auto 0;
```

## 5.7 Handwritten annotations (decorative copy)

Two short script-style captions flank the heading block, each rotated slightly and underlined with a loose orange squiggle/line — treat as pure decoration, not primary content.

- **Left**, near top-left, rotated ~ -8°:
  ```text
  For a
  More Informed
  India
  ```
- **Right**, near top-right, rotated ~ +6°:
  ```text
  Same
  Struggles
  Bigger Dreams
  ```

Styling:

```css
font-family: var(--script-font, "Caveat", "Segoe Script", cursive);
font-size: 20px;
color: var(--script-text-color);
line-height: 1.3;
```

Underline: a short hand-drawn-style orange stroke (SVG path or CSS border with slight curve/rotation) beneath the last line of each annotation.

These annotations should be hidden or repositioned safely on mobile so they never overlap the main heading (see §9).

---

# 6. Section B — "Who We Are"

## 6.1 Composition

Two-column layout on desktop:

```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 64px;
align-items: center;
padding: 90px 32px;
max-width: 1380px;
margin: 0 auto;
```

Left column: narrative + stats. Right column: photo.

## 6.2 Left column — Eyebrow

```text
WHO WE ARE
```

```css
color: var(--brand-orange);
font-size: 13px;
font-weight: 700;
letter-spacing: 0.08em;
text-transform: uppercase;
```

## 6.3 Left column — Heading

Text: **"More than a platform, a community."**

- "More than a platform," → dark navy/charcoal
- "a community." → orange

```css
font-size: 40px;
font-weight: 800;
line-height: 1.2;
letter-spacing: -0.5px;
margin-top: 12px;
```

## 6.4 Left column — Description

```text
CSEWhy is a student-led initiative started by a group of UPSC
aspirants who wanted to make quality, structured and reliable
resources accessible to every learner — no matter where they
come from. What began as a small idea has now grown into a
vibrant community of thousands of aspirants across India,
learning, discussing and growing together.
```

```css
font-size: 16px;
color: var(--text-secondary);
line-height: 1.7;
margin-top: 20px;
max-width: 520px;
```

## 6.5 Left column — Stat/feature row

Three inline items, each with a small pastel-orange circular icon, a bold primary line, and a muted secondary line (or a single bold two-line label for the third item).

```text
[icon: people/group]   10,000+                Learners & Growing
[icon: heart]           Authentic              By Aspirants, For Aspirants
[icon: graduation cap]  A More Informed India  (bold, no secondary line)
```

Layout:

```css
display: flex;
flex-wrap: wrap;
gap: 32px;
margin-top: 36px;
```

Each item:

```css
display: flex;
align-items: flex-start;
gap: 10px;
```

Icon container:

```css
width: 24px;
height: 24px;
color: var(--stat-icon-color);
```

Text block:

```css
font-weight: 700;
color: var(--text-primary);
font-size: 15px;

/* secondary line */
font-weight: 400;
color: var(--text-muted);
font-size: 13px;
```

Icons should be simple line-style SVG icons (people/group, heart outline, graduation cap) matching the stroke weight used elsewhere on the site.

## 6.6 Right column — Community photo

- Single photograph, rounded corners, soft shadow, thin warm border — same treatment as the hero carousel cards
- Content: four people seen from behind, seated, overlooking an India Gate/Rajpath-style avenue at sunset; each wearing a hoodie with a printed tagline on the back:
  - "Same Struggles Bigger Dreams"
  - "UPSC A More Informed India"
  - "Learn Discuss Prepare Grow"
  - "Better Learners A Better India"
- This is a **real supplied photo asset** — treat it as source of truth. Do not replace with generic stock imagery or regenerate the people/text.

```css
border-radius: var(--radius-2xl);
overflow: hidden;
box-shadow: 0 20px 40px rgba(0,0,0,0.08);
border: 1px solid var(--border-light);
aspect-ratio: 4 / 3; /* approximate — preserve source aspect ratio */
object-fit: cover;
```

## 6.7 Decorative accents around the photo

- Small orange "sparkle"/motion-line accent mark at the top-right corner of the image (3 short diagonal strokes), purely decorative
- Handwritten annotation at the bottom-right, just outside/below the image:

```text
Real People.
Real Progress.
```

Same script styling and orange underline treatment as §5.7.

---

# 7. Typography Summary

```css
Section A heading (About CSEWhy):   56px / 800 / -1px
Section A description:              19px / 400
Section B heading:                  40px / 800 / -0.5px
Section B description:              16px / 400 / line-height 1.7
Eyebrow / badge labels:             13px / 700 / uppercase / letter-spaced
Stat primary line:                  15px / 700
Stat secondary line:                13px / 400
Handwritten annotations:            20px / script font
```

---

# 8. Spacing Guidelines (Desktop)

```text
Navbar → Section A top padding:     ~90px
Badge → Heading:                    ~24px
Heading → Description:              ~24px
Description → Divider:              ~28px
Section A bottom padding:           ~70px

Section B top/bottom padding:       ~90px
Eyebrow → Heading:                  ~12px
Heading → Description:              ~20px
Description → Stat row:             ~36px
Column gap (left/right):            ~64px
```

Keep spacing generous — the page should feel unhurried and premium, not cramped.

---

# 9. Responsive Behavior

## Tablet

- Section B grid stacks to a single column: photo below the text, or text above photo (text first).
- Reduce column gap to `40px`.
- Heading sizes step down: Section A heading → `44px`, Section B heading → `32px`.

## Mobile

- Section A: heading `32–36px`, description `16px`.
- Handwritten annotations (§5.7) either:
  - move below the main description as a small centered row, or
  - are hidden entirely on narrow viewports (`< 480px`) to avoid overlap/clutter.
- Section B: single column; stat row wraps to 2 items per line, then 1; photo becomes full-width with slightly reduced corner radius.
- The "Real People. Real Progress." annotation moves below the image rather than overlapping it.

---

# 10. Accessibility Requirements

- Use a single semantic `<h1>` (or `<h2>` if the navbar/hero already owns the page `<h1>`) for "About CSEWhy" and a semantic `<h2>`/`<h3>` for "More than a platform, a community."
- Meaningful `alt` text for the community photo describing its actual content (e.g., "Four CSEWhy community members sitting together overlooking India Gate at sunset, wearing hoodies printed with community taglines").
- Decorative dot patterns, blobs, sparkle marks, and handwritten annotations are decorative only — mark as `aria-hidden="true"` / `role="presentation"` or implement as non-semantic background elements.
- Sufficient color contrast for all body text against the peach/white backgrounds.
- Icons in the stat row should have accessible labels (visually hidden text or `aria-label`) since the adjacent text already conveys meaning — avoid duplicate announcements.

---

# 11. Component Architecture

```text
AboutUsPage/
├── AboutHero (Section A)
│   ├── OurStoryBadge
│   ├── AboutHeading
│   ├── AboutDescription
│   ├── SectionDivider
│   ├── ScriptAnnotation (left variant)
│   ├── ScriptAnnotation (right variant)
│   └── DecorativeBackground
│
└── WhoWeAre (Section B)
    ├── WhoWeAreContent
    │   ├── Eyebrow
    │   ├── SectionHeading
    │   ├── SectionDescription
    │   └── StatRow
    │       └── StatItem (icon, primary line, secondary line)
    │
    └── WhoWeAreMedia
        ├── CommunityPhoto
        ├── SparkleAccent
        └── ScriptAnnotation (bottom-right variant)
```

`ScriptAnnotation` should be a single reusable component accepting `text`, `rotation`, and `position` props rather than four separate hard-coded elements.

---

# 12. Content Data Structure

Keep the stat row data-driven so items can be added/edited without touching markup:

```js
const aboutStats = [
  {
    id: "learners",
    icon: "users",
    primary: "10,000+",
    secondary: "Learners & Growing",
  },
  {
    id: "authentic",
    icon: "heart",
    primary: "Authentic",
    secondary: "By Aspirants, For Aspirants",
  },
  {
    id: "informed-india",
    icon: "graduation-cap",
    primary: "A More Informed India",
    secondary: null,
  },
];
```

---

# 13. Exact Page Copy

Use these strings unless product requirements explicitly change them.

Badge:
```text
Our Story
```

Section A heading:
```text
About CSEWhy
```

Section A description:
```text
A learner community on a mission to make UPSC preparation
more accessible, structured and effective for every aspirant in India.
```

Annotation (left):
```text
For a More Informed India
```

Annotation (right):
```text
Same Struggles Bigger Dreams
```

Section B eyebrow:
```text
Who We Are
```

Section B heading:
```text
More than a platform, a community.
```

Section B description:
```text
CSEWhy is a student-led initiative started by a group of UPSC
aspirants who wanted to make quality, structured and reliable
resources accessible to every learner — no matter where they
come from. What began as a small idea has now grown into a
vibrant community of thousands of aspirants across India,
learning, discussing and growing together.
```

Stat items:
```text
10,000+ — Learners & Growing
Authentic — By Aspirants, For Aspirants
A More Informed India
```

Photo annotation:
```text
Real People. Real Progress.
```

---

# 14. Design Matching Checklist

### Section A
- [ ] "Our Story" badge with star icon present
- [ ] "About" in dark, "CSEWhy" in orange
- [ ] Two-line description centered below heading
- [ ] Short orange divider beneath description
- [ ] Left and right handwritten annotations present and rotated
- [ ] Dot pattern and soft blob background decorations present
- [ ] Peach/off-white background

### Section B
- [ ] "WHO WE ARE" eyebrow in orange
- [ ] Two-tone heading (dark + orange)
- [ ] Description paragraph matches source copy
- [ ] 3-item stat row with icons present
- [ ] Rounded, bordered, shadowed community photo
- [ ] Sparkle accent near top-right of photo
- [ ] "Real People. Real Progress." annotation near photo

### Responsive
- [ ] No horizontal overflow at any breakpoint
- [ ] Section B stacks cleanly on mobile/tablet
- [ ] Handwritten annotations never overlap primary text on small screens
- [ ] Photo remains full aspect-ratio correct, no distortion

---

# 15. Final Design Intent

The About Us page should read as a natural continuation of the CSEWhy homepage's visual system — same orange/peach/charcoal palette, same rounded-card and soft-shadow language, same premium-but-warm tone — while shifting the emphasis from "product/course" messaging toward **community and authenticity**. The handwritten-style annotations and the single real community photograph (rather than stock imagery or generic illustration) are the key emotional differentiators of this page and should be preserved faithfully.
