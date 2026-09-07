# Social Media Community Section — Antigravity Specification

## Purpose
Create the Social Media / Online Content Community section shown in the supplied reference image. Place it after Course Discovery.

The implementation must recreate the design with real HTML/CSS/React. Do NOT use the screenshot as a background, full-section image, or flattened UI.

## Layout
Use a clean white/warm-white background and a wide centered container.

Desktop: two columns.
- Left: large heading and supporting paragraph.
- Right: four large social cards in an asymmetric 2×2 grid.

Approximate structure:

[ LEFT CONTENT ]        [ Instagram ][ X ]
                         [ YouTube   ][ Telegram ]

Use the existing CSEWhy container, typography, spacing, and design tokens.

## Left Content

Heading, exactly:

**Most Loved**
**Online Content**
**Community**

Highlight only **Online** in the CSEWhy orange (`#F45116`). Keep the other words near-black (`#000` / existing primary text).

Recommended desktop heading:
- 60–72px
- weight 700–800
- line-height 0.95–1.05
- left aligned

Supporting copy, exactly:

> Join the CSEWhy family and crack UPSC CSE with the same trust and support that millions of aspirants rely on! ❤️

Highlight **millions of aspirants** in a pink/coral accent similar to the reference.

Recommended width: 360–430px.
Font: 18–20px, medium/semibold, line-height 1.45–1.6.

## Social Grid

Create exactly four cards:

1. Instagram — 78k Followers
2. X — 138k Followers
3. YouTube — 10k Followers
4. Telegram — 45k Followers

Arrange them asymmetrically like the reference:

Top row:
- Instagram: narrower
- X: wider

Bottom row:
- YouTube: wider
- Telegram: narrower

Use CSS grid rather than a screenshot.

Suggested columns:
`0.8fr 1.2fr`

Bottom row can use:
`1.2fr 0.8fr`

Cards should have approximately 10–14px radius and large visual presence.

## Instagram Card

Background: Instagram-style pink/magenta/orange gradient.

Suggested:
`linear-gradient(135deg, #F02A8A, #F34B59, #FF9D00)`

Content:
- Instagram icon
- Instagram
- 78k
- Followers

All white.

Suggested:
- platform: 22–26px
- number: 40–48px
- label: 16–18px

Center content vertically. Use a recognizable Instagram icon from the project's existing icon system.

## X Card

Background: solid black (`#000000`).

Content:
- X logo
- X
- 138k
- Followers

All white.

Keep it minimal and close to the reference.

## YouTube Card

Background: CSEWhy orange, approximately `#FF6500` or the existing brand orange.

Content:
- YouTube icon
- Youtube
- 10k
- Followers

All white.

The reference also has a circular white CSEWhy/UPSC profile-style badge. If a suitable existing logo/profile asset exists, use it. Otherwise create a simple circular white badge with the existing CSEWhy brand mark. Do not invent a complex logo.

## Telegram Card

Background: Telegram blue, approximately `#2EA8DF`.

Content:
- Telegram icon
- Telegram
- 45k
- Followers

All white.

## Card Alignment

The reference uses slightly different internal compositions:
- Instagram: centered
- X: centered/minimal
- Telegram: centered
- YouTube: can use a horizontal profile badge + text arrangement

Do not force every card to have identical internal alignment if that makes the recreation less accurate.

## Typography

Reuse the project's existing font.

If none is defined, use a modern sans-serif such as Inter.

Heading:
- desktop 60–72px
- 700–800 weight

Platform:
- 20–26px
- 600–700

Follower number:
- 40–48px
- 700–800

Follower label:
- 15–18px

## Spacing

Desktop:
- section padding: 110–140px vertical
- heading to paragraph: 48–60px
- column gap: 70–100px
- social card gap: 18–22px
- card padding: 32–40px

Keep the large amount of whitespace visible in the reference.

## Responsive

### Desktop
Two-column layout:
`[ heading + copy ] [ social grid ]`

### Tablet
Keep two columns when comfortable. Otherwise stack intro above the social grid.

### Mobile
Stack:

Most Loved
Online Content
Community

paragraph

Instagram
X
YouTube
Telegram

A 2-column social grid is also acceptable on larger mobile widths if each card remains readable.

Never allow horizontal page overflow.

Mobile heading: 40–48px.
Mobile paragraph: 16–18px.
Mobile follower number: 32–40px.

## Interaction

All four cards must be clickable links to the actual CSEWhy social profiles.

Do not invent URLs. Store URLs in configuration/data and use the real project URLs.

Hover:
- lift 3–5px
- subtle shadow
- tiny content/icon scale
- 200ms transition

Do not change the platform colors dramatically.

## Animation

On viewport entry:
- heading fades/slides upward
- paragraph follows
- Instagram, X, YouTube, Telegram appear with a small stagger

Use opacity 0→1 and translateY(15px)→0, duration 400–500ms.

Respect `prefers-reduced-motion`.

## Accessibility

Use:

`<section aria-labelledby="social-community-heading">`

with:

`<h2 id="social-community-heading">`

Each social card must have an accessible link name such as:
- Follow CSEWhy on Instagram
- Follow CSEWhy on X
- Follow CSEWhy on YouTube
- Join CSEWhy on Telegram

Do not rely only on platform logos.

## Component Architecture

Recommended:

SocialCommunity
├── SocialIntro
└── SocialGrid
    └── SocialCard

Use a data-driven array:

```js
const socialPlatforms = [
  { name: "Instagram", followers: "78k", label: "Followers", variant: "instagram", href: "..." },
  { name: "X", followers: "138k", label: "Followers", variant: "x", href: "..." },
  { name: "Youtube", followers: "10k", label: "Followers", variant: "youtube", href: "..." },
  { name: "Telegram", followers: "45k", label: "Followers", variant: "telegram", href: "..." }
];
```

Do not duplicate the complete card markup four times.

## Existing Sections

Do not modify:
- Navbar
- Hero
- Trust Bar
- UPSC Quote
- Pan-India Community
- App Features
- Course Discovery

Add this section independently.

Reuse the existing design system.

## Do Not Add

Do not add:
- additional social platforms
- extra follower statistics
- testimonials
- social feeds
- post carousels
- videos
- app-download CTAs
- unrelated illustrations
- AI features

## Final Visual Goal

Match the supplied reference as closely as possible:
- spacious white/warm background
- large left-aligned heading
- “Online” in orange
- paragraph beneath
- large asymmetric social cards on the right
- Instagram gradient
- black X
- orange YouTube
- blue Telegram
- clean modern typography
- subtle interactions
- responsive behavior

The result should feel like a polished, native CSEWhy landing-page section rather than a generic social-media widget.
