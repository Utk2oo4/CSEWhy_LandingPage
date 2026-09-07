# Trust_Bar.md

## Purpose

Implement the **Trust Bar immediately below the Hero section** of the
CSEWhy homepage.

This reference is the supplied design screenshot:

-   Desktop reference: `Trust Bar.png`
-   Reference dimensions: approximately **1788 × 342 px**

Important context:

> The Hero section already contains the first statistics/trust row
> with: - `500K+` --- Strong Community - `1000+` --- Prelims Cleared -
> `50K+` --- Resources & Notes - `50K+` --- App Downloads
>
> **Do NOT recreate or duplicate that statistics row in this Trust
> Bar.**
>
> The Trust Bar described here is the **second trust/proof strip that
> appears below the Hero**.

The Trust Bar has two visually distinct horizontal rows:

1.  The existing upper statistics row may already be rendered by the
    Hero and must not be duplicated.
2.  This component adds the **lower recognition/trust row** shown in the
    reference.

------------------------------------------------------------------------

# 1. SCREENSHOT-TO-FRONTEND MODE

Treat the supplied `Trust Bar.png` as the **primary source of truth**.

Do not redesign it.

Do not create a generic "trust badges" section.

Do not generate a different visual interpretation.

Reconstruct the visible layout as real HTML/CSS/components.

Required workflow:

``` text
Inspect Trust Bar.png
        ↓
Analyze dimensions / spacing / typography / colors
        ↓
Identify reusable trust items
        ↓
Implement TrustBar component
        ↓
Run application
        ↓
Render at reference viewport
        ↓
Compare against Trust Bar.png
        ↓
Fix visual differences
        ↓
Render again
        ↓
Finalize
```

------------------------------------------------------------------------

# 2. COMPONENT SCOPE

The Trust Bar should sit directly below the Hero section.

Conceptually:

``` text
Hero
│
├── Hero content
├── Hero feature/stat content
└── Hero statistics row
          ↓
     TRUST BAR
          ↓
     Next homepage section
```

The Trust Bar must not duplicate content already present in the Hero.

------------------------------------------------------------------------

# 3. VISUAL STRUCTURE

The supplied reference shows a wide, centered trust/proof container on a
very light warm background.

The visible lower trust row contains:

``` text
Trusted by Aspirants. Recognized by Industry Leaders.
```

centered near the top of the trust panel.

Below that heading is a horizontal collection of five proof blocks:

``` text
Google for Startups
        │
4.8/5 Play Store Rating
        │
Editor's Choice Education App
        │
Safe & Secure
        │
50L+ Happy Users
        │
50K+ 5 Star Reviews
```

The exact visual order and proportions should follow the supplied
screenshot.

------------------------------------------------------------------------

# 4. TRUST BAR CONTAINER

Use a wide centered container.

Visual characteristics:

-   white / near-white surface
-   subtle warm surrounding background
-   rounded corners
-   very subtle border
-   very subtle shadow
-   generous horizontal padding
-   generous vertical padding
-   no excessive nested containers

The container should feel like a single premium trust strip.

Do not create a large card inside another large card.

------------------------------------------------------------------------

# 5. HEADER / TRUST STATEMENT

At the top center of the lower trust bar:

``` text
Trusted by Aspirants. Recognized by Industry Leaders.
```

Visual behavior:

-   centered
-   bold/semi-bold
-   dark text
-   medium-large desktop text
-   generous whitespace above and below
-   subtle horizontal divider lines on both sides

Reference structure:

``` text
────────────    Trusted by Aspirants. Recognized by Industry Leaders.    ────────────
```

The divider lines should be:

-   short
-   subtle
-   thin
-   visually secondary to the heading

Do not make the divider lines dominant.

------------------------------------------------------------------------

# 6. TRUST ITEM ROW

Below the heading, render the proof items in one horizontal row on
desktop.

Use approximately equal visual weight between items, while allowing
content width to determine internal alignment.

Every item should feel like part of one unified strip rather than an
independent card.

Do not place each item inside a separate rounded card.

Use vertical dividers between logical groups where visible in the
reference.

------------------------------------------------------------------------

# 7. ITEM 1 --- GOOGLE FOR STARTUPS

Visible content:

``` text
BACKED BY
Google for Startups
```

Visual treatment:

-   Google "G" logo on the left
-   small uppercase/compact `BACKED BY`
-   larger `Google for Startups`
-   dark text
-   logo and text vertically centered

The Google logo should use an actual image/SVG asset if available.

Do not recreate the Google logo using plain text.

If an existing Google for Startups asset exists in the project, reuse
it.

------------------------------------------------------------------------

# 8. ITEM 2 --- PLAY STORE RATING

Visible content:

``` text
4.8/5
★★★★★
Play Store Rating
```

Visual hierarchy:

-   `4.8/5` should be prominent
-   five orange/gold stars underneath or beside the rating according to
    the reference
-   `Play Store Rating` below
-   decorative laurel/wreath elements on the sides

The stars should be actual icons/SVGs or an appropriate icon
implementation.

The star color should match the warm orange/gold accent in the
reference.

Do not use emoji stars.

------------------------------------------------------------------------

# 9. ITEM 3 --- EDITOR'S CHOICE

Visible content:

``` text
Editor's Choice
Education App
Google Play
```

The item also contains decorative laurel/wreath elements.

Visual hierarchy:

-   `Editor's Choice` is the main line
-   `Education App` is secondary
-   `Google Play` is supporting text

Maintain the same compact vertical rhythm visible in the screenshot.

The laurel elements should remain subtle and decorative.

------------------------------------------------------------------------

# 10. ITEM 4 --- SAFE & SECURE

Visible content:

``` text
SAFE & SECURE
Your data is 100%
protected
```

Visual treatment:

-   green shield/check icon
-   small/medium heading
-   supporting copy below
-   green accent
-   vertically centered content

The shield should visually communicate security without becoming
oversized.

Use an SVG/icon if available.

------------------------------------------------------------------------

# 11. ITEM 5 --- HAPPY USERS

Visible content:

``` text
50L+
Happy
Users
```

Visual treatment:

-   orange laurel/wreath decoration
-   prominent `50L+`
-   supporting `Happy Users`
-   centered alignment

Preserve the compact vertical arrangement.

------------------------------------------------------------------------

# 12. ITEM 6 --- 5 STAR REVIEWS

Visible content:

``` text
50K+
5 Star
Reviews
```

Visual treatment:

-   orange laurel/wreath decoration
-   prominent `50K+`
-   supporting `5 Star Reviews`
-   centered alignment

Keep it visually balanced with the `50L+ Happy Users` item.

------------------------------------------------------------------------

# 13. DIVIDERS

Use thin vertical dividers between trust groups where visible.

Divider characteristics:

-   very light neutral/warm gray
-   thin
-   relatively tall but shorter than the full panel height
-   vertically centered

Do not overuse dividers.

The divider should separate content without becoming a visual element
itself.

------------------------------------------------------------------------

# 14. COLOR SYSTEM

The Trust Bar follows the existing CSEWhy homepage visual language.

Primary characteristics:

-   warm off-white page background
-   white trust panel
-   dark navy/near-black text
-   CSEWhy orange as the primary accent
-   orange/gold decorative laurels
-   Google multi-color logo
-   green security accent
-   subtle gray dividers

Do not introduce:

-   purple gradients
-   blue AI gradients
-   neon colors
-   glassmorphism
-   heavy glow effects

Keep the design clean and premium.

------------------------------------------------------------------------

# 15. TYPOGRAPHY

Use the same typography system already established by the Hero.

Do not introduce a new font for this section.

Approximate hierarchy:

``` text
Trust heading:
    medium-large
    semibold/bold

Primary proof number:
    large
    bold

Supporting label:
    small/medium
    regular/medium

Micro label such as "BACKED BY":
    small
    uppercase
    compact
```

Maintain consistent line heights.

Do not allow unnecessary wrapping on desktop.

------------------------------------------------------------------------

# 16. SPACING

The section should have generous whitespace.

Pay particular attention to:

-   gap between Hero and Trust Bar
-   top padding inside the Trust Bar
-   heading-to-items gap
-   horizontal item spacing
-   divider spacing
-   logo-to-text spacing
-   vertical centering

Do not make the Trust Bar cramped.

Do not make it excessively tall either.

The screenshot communicates a compact premium proof strip.

------------------------------------------------------------------------

# 17. DESKTOP LAYOUT

At desktop widths:

``` text
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│      ───  Trusted by Aspirants. Recognized by Industry Leaders.  ───     │
│                                                                          │
│  Google       4.8/5       Editor's Choice     Safe & Secure   50L+  50K+ │
│  Startups     ★★★★★       Education App       protected       Users Reviews│
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

Use flexbox or CSS grid.

Do not use absolute positioning for the whole row.

Individual decorative elements may use relative positioning where
appropriate.

------------------------------------------------------------------------

# 18. RESPONSIVE BEHAVIOR

The desktop screenshot is the primary reference, but the component must
be responsive.

## Large desktop

Keep the proof items in one row.

## Laptop

Slightly reduce:

-   horizontal padding
-   gaps
-   typography

but preserve one-row composition when practical.

## Tablet

Allow the trust items to wrap into two rows if necessary.

Do not force tiny unreadable content.

## Mobile

Use a stacked or horizontally scrollable trust layout depending on the
existing site's design system.

Recommended mobile behavior:

``` text
Trust heading
      ↓
Google for Startups
      ↓
Play Store Rating
      ↓
Editor's Choice
      ↓
Safe & Secure
      ↓
Happy Users
      ↓
5 Star Reviews
```

Alternative: a compact horizontal carousel if the existing site already
uses carousel patterns.

Do not allow horizontal page overflow.

------------------------------------------------------------------------

# 19. CONTENT RULE

Use the content shown in the reference.

Do not invent additional trust claims.

Do not add:

-   extra statistics
-   extra badges
-   extra companies
-   fake certifications
-   fake awards
-   extra testimonials

The Trust Bar is intentionally concise.

------------------------------------------------------------------------

# 20. HERO DUPLICATION RULE

This is especially important for this implementation.

The Hero already contains:

``` text
500K+ Strong Community
1000+ Prelims Cleared
50K+ Resources & Notes
50K+ App Downloads
```

Those four statistics belong to the Hero.

**Do not render them again inside TrustBar.**

TrustBar should begin with the recognition statement:

``` text
Trusted by Aspirants. Recognized by Industry Leaders.
```

and then render the proof items shown in the supplied Trust Bar
reference.

------------------------------------------------------------------------

# 21. REUSABLE COMPONENT STRUCTURE

Recommended component structure:

``` text
TrustBar
├── TrustBarHeader
└── TrustProofRow
    ├── GoogleStartupProof
    ├── PlayStoreRatingProof
    ├── EditorsChoiceProof
    ├── SecurityProof
    ├── HappyUsersProof
    └── ReviewsProof
```

A generic reusable component may also be used:

``` text
TrustProofItem
```

but do not over-abstract items that have meaningfully different layouts.

------------------------------------------------------------------------

# 22. ICON / DECORATION RULES

Use consistent iconography.

Required visual motifs:

-   Google logo
-   star icons
-   green security shield
-   orange/gold laurel decorations

Laurels can be:

-   existing SVG assets
-   simple SVG paths
-   an appropriate icon asset

Do not use emoji for these elements.

Do not use unrelated icon styles.

------------------------------------------------------------------------

# 23. ACCESSIBILITY

Implement:

-   semantic text
-   appropriate image alt text
-   accessible icons where needed
-   sufficient contrast
-   no information conveyed only by color

Decorative laurels should use `aria-hidden="true"` if implemented as
decorative SVGs.

------------------------------------------------------------------------

# 24. IMPLEMENTATION RULES

Prefer:

-   semantic HTML
-   flexbox/grid
-   CSS variables
-   reusable React components if the project uses React
-   existing project styles/tokens
-   existing asset pipeline

Avoid:

-   screenshot-as-background
-   fixed absolute coordinates for the entire component
-   canvas recreation
-   unnecessary dependencies
-   inline SVG duplication when an existing asset exists
-   hardcoded viewport-specific positioning

------------------------------------------------------------------------

# 25. VISUAL QA

After implementation, render the Trust Bar at approximately the
reference width.

Compare:

### Structure

-   overall panel width
-   panel height
-   corner radius
-   heading position
-   item positions
-   divider positions

### Typography

-   heading size
-   number size
-   supporting text size
-   weight
-   line height

### Spacing

-   panel padding
-   item gaps
-   logo spacing
-   divider spacing
-   heading spacing

### Visuals

-   Google logo size
-   star size
-   shield size
-   laurel size
-   colors
-   borders
-   shadows

Fix discrepancies iteratively.

------------------------------------------------------------------------

# 26. DO NOT STOP AT FIRST IMPLEMENTATION

The first implementation is not the final implementation.

Use:

``` text
Build
  ↓
Render
  ↓
Compare
  ↓
Find largest mismatch
  ↓
Fix
  ↓
Render
  ↓
Compare again
```

Continue until the Trust Bar visually belongs to the same website as the
supplied reference.

------------------------------------------------------------------------

# 27. FINAL CHECKLIST

Before completion:

-   [ ] Trust Bar is directly below Hero.
-   [ ] Hero statistics are NOT duplicated.
-   [ ] Trust statement is centered.
-   [ ] Horizontal divider lines match the reference.
-   [ ] Google for Startups block is present.
-   [ ] Play Store rating block is present.
-   [ ] Editor's Choice block is present.
-   [ ] Safe & Secure block is present.
-   [ ] 50L+ Happy Users block is present.
-   [ ] 50K+ 5 Star Reviews block is present.
-   [ ] Dividers match the reference.
-   [ ] Colors match the CSEWhy design system.
-   [ ] Typography matches the Hero.
-   [ ] Spacing is generous and balanced.
-   [ ] No unnecessary nested cards.
-   [ ] No duplicate Hero statistics.
-   [ ] Responsive behavior works.
-   [ ] No horizontal overflow on mobile.
-   [ ] Icons are consistent.
-   [ ] No emoji icons.
-   [ ] No generic redesign.
-   [ ] Rendered result has been visually compared against
    `Trust Bar.png`.

------------------------------------------------------------------------

# 28. SUCCESS CRITERIA

The implementation is successful when a user can place the coded Trust
Bar immediately below the existing Hero and visually perceive it as the
**same CSEWhy website shown in the reference images**.

The Trust Bar should feel:

-   premium
-   clean
-   trustworthy
-   spacious
-   consistent with the Hero
-   visually faithful
-   responsive
-   implementation-friendly

Most importantly:

> **Do not rebuild the Hero statistics. Build only the additional
> recognition/proof Trust Bar shown in this reference.**
