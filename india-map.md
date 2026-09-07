# India Map — Pan-India Community Section

## 1. Purpose

Build the **Pan-India Community** section directly below the existing **UPSC Quote section**.

This section should communicate one simple idea:

> **CSEWhy is not limited to one city — it is a nationwide UPSC preparation community.**

The visual focus should be a large, polished **India map visualization** with location markers, connecting paths, student/community illustrations, city callouts, and a subtle Indian landmark skyline at the bottom.

This must be implemented as a **real responsive frontend section**, not as one flattened background image.

Use the supplied visual reference as the source of truth for the composition and visual direction.

---

# 2. Existing Page Order

Do not modify previous sections.

The current page order is:

```text
1. Navbar
2. Hero
3. Trust Bar
4. UPSC Quote
5. Pan-India Community   ← BUILD THIS SECTION
6. App Features
7. Course Discovery
...
```

The Pan-India Community section must be inserted immediately after the UPSC Quote section.

Do not redesign or alter:

- Navbar
- Hero
- Trust Bar
- UPSC Quote

Reuse their existing:

- Container width
- Typography
- Brand colors
- Border radius
- Button/card styling
- Spacing system
- Responsive breakpoints

---

# 3. Core Message

The section should communicate:

```text
ONE COMMUNITY. ONE DREAM.

A UPSC Community
That Spans
Across India.
```

Supporting copy:

```text
From Delhi to Kerala, Mumbai to Assam — thousands
of aspirants are learning, preparing and growing
together with CSEWhy.
```

The wording can be adjusted slightly if required for layout, but preserve the meaning.

---

# 4. Overall Composition

Desktop layout:

```text
┌───────────────────────────────────────────────────────────────────────┐
│                                                                       │
│  LEFT CONTENT                         RIGHT VISUAL                    │
│                                                                       │
│  ONE COMMUNITY.                       Student/community illustrations│
│  ONE DREAM.                           around India map                │
│                                                                       │
│  A UPSC Community                     ┌─────────────────────┐         │
│  That Spans                           │                     │         │
│  Across India.                       │      INDIA MAP      │         │
│                                       │                     │         │
│  Supporting copy                      └─────────────────────┘         │
│                                                                       │
│  [500K+] [28+] [1 Community]                                         │
│                                                                       │
│                                                                       │
│  Different Cities. Same Dream.                                       │
│                                                                       │
├───────────────────────────────────────────────────────────────────────┤
│                    subtle landmark skyline                            │
└───────────────────────────────────────────────────────────────────────┘
```

The left side is informational.

The right side is visual and should attract attention.

The map should be the dominant visual object.

---

# 5. Section Background

Use a very light warm background consistent with the CSEWhy visual system.

Recommended:

```css
background: #FFFCFA;
```

or an extremely subtle warm cream gradient.

Do not use a saturated orange background.

The section should feel airy and premium.

---

# 6. Container

Use the same global container as the existing site.

Recommended desktop starting point:

```css
max-width: 1380px;
margin-inline: auto;
padding-inline: 32px;
```

Do not introduce a completely different container width.

On smaller screens:

```css
padding-inline: 20px;
```

---

# 7. Section Spacing

Recommended desktop:

```text
Top padding:       90–120px
Bottom padding:    60–90px
```

The section should have enough whitespace to clearly separate it from the UPSC Quote section.

Do not make it excessively tall.

Target approximately:

```text
Desktop: 600–750px
```

depending on the final map composition.

---

# 8. Section Eyebrow

At the top of the left content:

```text
ONE COMMUNITY. ONE DREAM.
```

Style:

- Small/medium font
- Uppercase
- Orange text
- Light peach background
- Rounded pill
- Optional people/group icon
- Compact horizontal padding

Suggested:

```css
background: #FFF0E9;
color: #F45116;
border-radius: 10px;
padding: 10px 16px;
font-size: 13px;
font-weight: 700;
letter-spacing: .04em;
```

---

# 9. Main Heading

Heading:

```text
A UPSC Community
That Spans
Across India.
```

Visual hierarchy:

```text
A UPSC Community
That Spans
Across India.
```

Use dark charcoal for the first lines.

Use brand orange for:

```text
Across India.
```

Recommended desktop typography:

```css
font-size: clamp(48px, 5vw, 68px);
font-weight: 800;
line-height: 1.04;
letter-spacing: -2px;
```

The heading should visually match the scale and weight of the existing hero/section headings.

Do not use a thin font.

---

# 10. Supporting Description

Use:

```text
From Delhi to Kerala, Mumbai to Assam — thousands
of aspirants are learning, preparing and growing
together with CSEWhy.
```

Recommended:

```css
font-size: 17–19px;
line-height: 1.6;
color: #555;
max-width: 570px;
```

Keep the text readable and avoid overly long line lengths.

---

# 11. Community Statistics

Under the description, add three compact statistic cards.

### Statistic 1

```text
500K+
Aspirants
```

Use an orange community/group icon.

### Statistic 2

```text
28+
States & UTs
```

Use a green/teal location icon.

### Statistic 3

```text
1 Community
1 Goal
```

Use a purple/orange target icon.

---

# 12. Statistics Card Design

Cards should be:

- White
- Rounded
- Thin warm border
- Very subtle shadow
- Compact
- Equal height

Suggested:

```css
background: #FFFFFF;
border: 1px solid #EEE5DF;
border-radius: 14px;
padding: 18px 20px;
```

Do not make them look like large dashboard cards.

They are supporting information.

Desktop:

```text
[ 500K+      ] [ 28+          ] [ 1 Community ]
[ Aspirants  ] [ States & UTs ] [ 1 Goal       ]
```

Mobile:

```text
[500K+ Aspirants]
[28+ States & UTs]
[1 Community / 1 Goal]
```

or a 2-column grid where space permits.

---

# 13. Right-Side India Map

The India map is the main visual centerpiece.

Use the supplied **India map SVG asset** if it already exists in the project.

Do NOT recreate the map using a generic CSS shape.

Do NOT replace the provided map with an inaccurate handmade silhouette.

The map should:

- Preserve the correct overall geography
- Have subtle internal state boundaries if included in the SVG
- Use a warm peach/orange treatment
- Remain visually soft
- Have enough contrast against the background
- Be large enough to immediately communicate "India"

Recommended visual treatment:

```css
fill: #F9D8C5;
```

with slightly darker peach/orange borders.

Do not use a highly saturated orange map.

---

# 14. Map Position

Desktop:

- Map centered within the right half
- Slightly larger than surrounding city/avatar elements
- Approximately 430–560px wide depending on viewport
- Keep sufficient whitespace around it

The map should not touch the viewport edge.

Use:

```text
RIGHT VISUAL AREA
        ↓
   floating people
       ↓
   INDIA MAP
       ↓
 floating people
```

---

# 15. Location Pins

Place multiple location pins over/around relevant regions of the map.

Suggested locations:

```text
Delhi
Jaipur
Mumbai
Bengaluru
Hyderabad
Chennai
Kolkata
Guwahati
```

Pins should be visually consistent.

Recommended:

- Orange pin
- Small white inner circle
- Soft orange shadow/glow
- Compact size
- Clear enough to see against the map

Do not use oversized Google Maps-style pins.

---

# 16. Location Coordinates

The pin positions should be stored as data rather than hard-coded into unrelated markup.

Example:

```js
const communityLocations = [
  {
    id: "delhi",
    city: "Delhi",
    x: 57,
    y: 25
  },
  {
    id: "jaipur",
    city: "Jaipur",
    x: 45,
    y: 32
  },
  {
    id: "mumbai",
    city: "Mumbai",
    x: 34,
    y: 52
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    x: 47,
    y: 72
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    x: 56,
    y: 62
  },
  {
    id: "chennai",
    city: "Chennai",
    x: 59,
    y: 78
  },
  {
    id: "kolkata",
    city: "Kolkata",
    x: 77,
    y: 46
  },
  {
    id: "guwahati",
    city: "Guwahati",
    x: 88,
    y: 30
  }
];
```

These values are illustrative percentages and should be adjusted to match the actual supplied SVG/map coordinate system.

Do not claim these are real CSEWhy user concentrations unless verified data exists.

---

# 17. Connecting Lines

Add subtle dashed/dotted curved lines connecting:

```text
Student illustration
        ↓
Location
        ↓
India map
```

The lines should visually communicate:

> Students from different parts of India are connected through one community.

Use SVG paths.

Example visual:

```text
       👤
        \
         \ . . . . ●
                    \
                     INDIA
                    MAP
```

Recommended:

```css
stroke: #F45116;
stroke-width: 1.5–2px;
stroke-dasharray: 4 6;
fill: none;
opacity: .65;
```

Keep the lines subtle.

---

# 18. Community / Student Illustrations

The right side should include multiple illustrated student/community avatars around the map.

The visual style should be:

- Friendly
- Flat/vector
- Modern
- Diverse
- Consistent
- Circular
- Similar visual weight to the supplied reference

Use approximately:

```text
8–10 avatars
```

Do not overcrowd the map.

Each avatar should sit near a corresponding city/location.

The illustrations should feel like members of one nationwide community rather than formal profile photos.

---

# 19. Avatar Presentation

Each avatar should appear inside a circular container.

Suggested:

```css
width: 72–92px;
height: 72–92px;
border-radius: 50%;
background: #FFFFFF;
border: 3px solid #FFFFFF;
box-shadow: 0 8px 22px rgba(50,30,20,.10);
```

Optional pastel circular backing:

```text
peach
green
blue
lavender
```

Keep the overall palette soft.

---

# 20. City Callout Cards

Near selected avatars, show compact city callout cards.

Examples:

### Delhi

```text
Delhi
Same Aspirations
Bigger Together.
```

### Jaipur

```text
Jaipur
Learning
Never Stops.
```

### Mumbai

```text
Mumbai
Ideas Today
A Better India Tomorrow.
```

### Bengaluru

```text
Bengaluru
Learn
Discuss
Grow
```

### Chennai

```text
Chennai
Discipline Today
Change Tomorrow.
```

### Kolkata

```text
Kolkata
Different Paths
Same Purpose.
```

### Hyderabad

```text
Hyderabad
More Learners
A Brighter India.
```

### Guwahati

```text
Guwahati
Small City
Big Dreams.
```

These are primarily visual storytelling elements.

Keep them concise.

---

# 21. Callout Card Style

Callout cards:

- White background
- Rounded corners
- Thin warm border
- Very subtle shadow
- Small orange city indicator dot
- Dark city name
- Smaller muted supporting text

Example:

```text
┌────────────────────┐
│ ● Delhi             │
│ Same Aspirations    │
│ Bigger Together.    │
└────────────────────┘
```

Recommended:

```css
border-radius: 14px;
padding: 12px 16px;
```

Do not make these cards large enough to compete with the heading.

---

# 22. Central Map Message

Optionally place a handwritten-style decorative phrase over/near the center of the map:

```text
A Stronger
India Together
```

Use this only as a decorative message.

It should not cover important map boundaries or pins.

Use a subtle handwritten font if the project already has one.

If no handwritten font exists, use a tasteful italic/script fallback.

---

# 23. Decorative Handwritten Phrases

Optional decorative phrases:

```text
Different Cities.
Same Dream.
```

and:

```text
From Every Corner of India
```

These should be subtle.

Use them as visual accents rather than primary information.

Do not add too many decorative phrases.

---

# 24. Bottom Landmark Skyline

Use the supplied **Indian landmark SVG** at the bottom of the section.

The skyline should be:

- Very subtle
- Pale peach/orange
- Thin line-art style
- Positioned along the bottom edge
- Decorative only

It should resemble a light illustrated Indian skyline.

Do not make the landmarks too dark.

The skyline should visually anchor the section without becoming the focus.

---

# 25. Decorative Birds / Clouds

A few small:

- Clouds
- Birds
- Dots
- Tiny decorative curves

may be placed around the map.

Keep opacity low.

These should be optional and should not create visual clutter.

---

# 26. Important Visual Hierarchy

The hierarchy must be:

```text
1. Main heading
2. India map
3. Student/community visual
4. Supporting description
5. Statistics
6. City labels
7. Decorative elements
```

Do not let decorative text or city cards overpower the main message.

---

# 27. Animation

Use subtle entrance animation.

Recommended sequence:

```text
Section enters viewport
        ↓
Heading fades/slides in
        ↓
India map fades in
        ↓
Location pins appear
        ↓
Connection lines draw
        ↓
Student avatars appear
        ↓
Statistics/cards appear
```

Keep animations around:

```text
400–700ms
```

Use staggered delays only where visually useful.

---

# 28. Map Interaction

The map does not need to be an interactive geographic map.

Do NOT add:

- Zoom
- Pan
- Google Maps controls
- Map tiles
- Geographic search
- Complex GIS functionality

This is a **marketing illustration**, not a navigation map.

Optional interaction:

- Hovering/focusing a city can slightly emphasize its corresponding avatar and callout.
- On mobile, tapping a city can highlight its callout.

Keep the interaction lightweight.

---

# 29. Responsive Desktop Behavior

At widths above approximately 1200px:

```text
Left:
45–48%

Right:
52–55%
```

The map should remain large.

Student avatars and city cards should be positioned relative to the map container rather than the viewport.

This is important.

Do not use arbitrary page-level absolute positioning such as:

```css
left: 1137px;
top: 428px;
```

Instead, use:

```css
.community-map {
  position: relative;
}

.location-marker {
  position: absolute;
  left: var(--x);
  top: var(--y);
}
```

---

# 30. Tablet Behavior

At approximately 768–1199px:

Use:

```text
LEFT CONTENT
      ↓
MAP / COMMUNITY VISUAL
```

or maintain two columns if there is enough space.

Reduce:

- Heading size
- Map size
- Avatar size
- Callout size
- Spacing

The section must never create horizontal overflow.

---

# 31. Mobile Behavior

At widths below 768px:

Use a single-column layout:

```text
ONE COMMUNITY. ONE DREAM.

A UPSC Community
That Spans
Across India.

Description

Statistics

        INDIA MAP

   ● Delhi
        👤

   👤 Mumbai ●

       ● Bengaluru
          👤

      etc.
```

The map should be displayed below the textual content.

Do not attempt to preserve the entire desktop composition on a narrow screen.

---

# 32. Mobile Avatar Strategy

On mobile, reduce the number of simultaneously visible city callouts if necessary.

Recommended:

- Keep the India map
- Keep the most important 4–5 city markers visible
- Allow smaller surrounding avatars
- Stack remaining city information beneath the map if required

Prioritize:

```text
Delhi
Mumbai
Bengaluru
Kolkata
Chennai
```

The design must remain readable.

---

# 33. Accessibility

Use semantic HTML.

Recommended structure:

```html
<section aria-labelledby="community-heading">
  ...
</section>
```

The India map should have an accessible description.

Decorative SVG elements should use:

```html
aria-hidden="true"
```

City callouts should be readable by screen readers.

Do not communicate essential information only through color.

---

# 34. Component Architecture

If using React/Next.js:

```text
PanIndiaCommunity/
├── PanIndiaCommunity.tsx
├── CommunityIntro.tsx
├── CommunityStats.tsx
├── IndiaCommunityMap.tsx
├── CommunityMarker.tsx
├── CommunityCallout.tsx
└── CommunityDecorations.tsx
```

Suggested data:

```text
communityLocations.ts
```

Keep location/callout data separate from presentation.

---

# 35. Recommended Data Structure

```js
const communityLocations = [
  {
    id: "delhi",
    city: "Delhi",
    message: "Same Aspirations. Bigger Together.",
    position: { x: 57, y: 25 },
    avatar: "...",
  },
  {
    id: "jaipur",
    city: "Jaipur",
    message: "Learning Never Stops.",
    position: { x: 45, y: 32 },
    avatar: "...",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    message: "Ideas Today. A Better India Tomorrow.",
    position: { x: 34, y: 52 },
    avatar: "...",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    message: "Learn. Discuss. Grow.",
    position: { x: 47, y: 72 },
    avatar: "...",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    message: "More Learners. A Brighter India.",
    position: { x: 56, y: 62 },
    avatar: "...",
  },
  {
    id: "chennai",
    city: "Chennai",
    message: "Discipline Today. Change Tomorrow.",
    position: { x: 59, y: 78 },
    avatar: "...",
  },
  {
    id: "kolkata",
    city: "Kolkata",
    message: "Different Paths. Same Purpose.",
    position: { x: 77, y: 46 },
    avatar: "...",
  },
  {
    id: "guwahati",
    city: "Guwahati",
    message: "Small City. Big Dreams.",
    position: { x: 88, y: 30 },
    avatar: "...",
  }
];
```

The exact avatar asset paths can be populated during implementation.

---

# 36. Asset Requirements

The section should support these assets:

```text
India map SVG
Indian landmark skyline SVG
Student/community illustrations
Optional icons
```

Use SVG wherever practical.

Do not flatten the entire section into a single JPG/PNG.

The supplied India map SVG should be reused directly.

The supplied landmark SVG should be reused directly.

---

# 37. Do Not Use the Reference Image as a Background

The reference image is a **design reference**, not the actual section background.

Do NOT implement:

```css
background-image: url("pan-india-reference.png");
```

Do NOT simply place the screenshot/image into the DOM.

Instead recreate:

```text
Text        → HTML
Stats       → HTML
Map         → SVG
Pins        → HTML/SVG
Lines       → SVG
City cards  → HTML
Avatars     → image assets
Landmarks   → SVG
Decorations → CSS/SVG
```

This is required for responsive behavior and maintainability.

---

# 38. Maintainability

Adding another city should require only adding another location object.

For example:

```js
{
  id: "lucknow",
  city: "Lucknow",
  message: "Prepare Today. Lead Tomorrow.",
  position: { x: 60, y: 38 }
}
```

The UI should automatically generate:

- Pin
- Connection line
- Avatar
- City callout

where applicable.

Do not require manually duplicating large blocks of JSX/HTML.

---

# 39. Performance

The section should be lightweight.

Avoid:

- Large animation libraries
- Map libraries
- Google Maps
- External map tiles
- Heavy 3D rendering
- Video backgrounds

Prefer:

- CSS
- SVG
- Lightweight React state
- CSS transitions
- Optimized image assets

Lazy-load non-critical avatar images if appropriate.

---

# 40. Design Consistency

Reuse the existing CSEWhy design language.

Brand orange:

```css
#F45116
```

Primary text:

```css
#171717
```

Secondary text:

```css
#555555
```

Warm background:

```css
#FFFCFA
```

Peach:

```css
#FFF0E9
```

Map:

```css
#F9D8C5
```

Use soft pastel colors for secondary visual elements.

Do not introduce a completely new color system.

---

# 41. Final Visual Target

The finished section should communicate this visually within a few seconds:

```text
                    CSEWhy
                       ↓
            ┌────────────────────┐
            │ ONE COMMUNITY.     │
            │ ONE DREAM.         │
            └────────────────────┘

         A UPSC Community
         That Spans
         Across India.

         Thousands of aspirants
         learning together...

       ┌───────┐ ┌──────┐ ┌────────────┐
       │500K+  │ │28+   │ │1 Community │
       │People │ │States│ │1 Goal      │
       └───────┘ └──────┘ └────────────┘

                         👤
                    ● Delhi
                         \
                 👤      \ . . . ●
              Mumbai       INDIA MAP
                    ● . . . /
                         👤
                    Bengaluru

             ...more connected cities...

────────────────────────────────────────────────
             Indian landmark skyline
────────────────────────────────────────────────
```

The final result should feel like a **premium community visualization**, not a generic map section.

---

# 42. Implementation Checklist

Before finishing, verify:

## Layout

- [ ] Section is directly below UPSC Quote
- [ ] Existing sections are untouched
- [ ] Desktop two-column composition works
- [ ] Mobile stacks correctly
- [ ] No horizontal overflow
- [ ] Container matches the rest of the website

## Typography

- [ ] Eyebrow is visible
- [ ] Main heading is large and bold
- [ ] "Across India." uses brand orange
- [ ] Description is readable
- [ ] Typography matches existing site

## Map

- [ ] Correct India SVG is used
- [ ] Map is the primary right-side visual
- [ ] Location pins are visible
- [ ] Pins are data-driven
- [ ] Connecting lines are subtle
- [ ] Map does not dominate the entire page

## Community

- [ ] Multiple diverse student illustrations are used
- [ ] Avatars are circular
- [ ] City labels are readable
- [ ] Callout cards are compact
- [ ] Visual does not feel overcrowded

## Stats

- [ ] 500K+ Aspirants
- [ ] 28+ States & UTs
- [ ] 1 Community / 1 Goal

## Decoration

- [ ] Subtle handwritten messaging
- [ ] Optional clouds/birds
- [ ] Landmark SVG at bottom
- [ ] Decorations remain secondary

## Interaction

- [ ] No unnecessary map controls
- [ ] Optional city hover/focus works
- [ ] Reduced-motion preference respected
- [ ] Keyboard focus is visible

## Quality

- [ ] Reference image used for visual matching
- [ ] Reference image is NOT used as the entire background
- [ ] Real HTML/SVG components are used
- [ ] Section is modular
- [ ] Adding a new city requires only data changes
- [ ] Assets are optimized
- [ ] Responsive behavior tested at desktop, tablet and mobile widths

---

# 43. Final Instruction to the Agent

Build this section as a **pixel-conscious recreation of the supplied Pan-India Community visual reference**, while converting the design into real responsive frontend components.

The reference image determines:

- Composition
- Visual hierarchy
- Relative sizing
- Spacing
- Colors
- Map placement
- Avatar placement
- Callout styling
- Decorative treatment

The actual implementation must remain:

- Responsive
- Semantic
- Accessible
- Modular
- Maintainable
- Data-driven

Do not change the existing Navbar, Hero, Trust Bar or UPSC Quote section.

Build only the **Pan-India Community section** and integrate it immediately below the UPSC Quote section.
