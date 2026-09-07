# Card 3 — CSEWhy Community

## Purpose
Card 3 is the community/social-proof card in the CSEWhy hero carousel. It should use the supplied group photograph as the primary visual and creatively communicate the size of the CSEWhy UPSC community.

The parent hero uses a 3-card stacked carousel: the active card is dominant, while previous and next cards are smaller and partially visible. fileciteturn5file3L393-L443

## Asset
Use the supplied group image:

```text
assets/community-group.png
```

Do not use the original X, Telegram, YouTube, or Instagram screenshots. The screenshots are only the source for the community numbers.

## Card Content

Eyebrow:
```text
03 · Community
```

Main heading:
```text
A Growing UPSC Community
```

Description:
```text
Join thousands of UPSC aspirants learning, practising and growing with CSEWhy.
```

Primary community badge:
```text
500K+ Aspirants
```

## Community Data

Display these current platform figures as clean text:

| Platform | Community |
|---|---:|
| X | 175K+ |
| Telegram | 42K+ |
| YouTube | 10K+ |
| Instagram | 120K+ |

Do not use the older generic statistics from the original hero specification for this card.

## Visual Composition

The card should have the same white rounded surface as the other hero cards:

```css
background: #FFFFFF;
border: 1px solid #F3D8CC;
border-radius: 28px;
box-shadow: 0 18px 45px rgba(80, 40, 20, 0.07);
```

Use the group photograph in the upper portion:

```css
border-radius: 22px;
overflow: hidden;
width: 100%;
height: 230px–260px;
object-fit: cover;
object-position: center;
```

Keep the people and the CSEWhy wall branding clearly visible.

Do not turn the photograph into an illustration, do not overlay social-media screenshots, and do not add fake UI.

## Image Badge

Place a floating white pill near the bottom of the photograph:

```text
👥 500K+ Aspirants
```

Style:

```css
background: #FFFFFF;
border: 1px solid #F3D8CC;
border-radius: 999px;
padding: 9px 15px;
font-weight: 700;
color: #171717;
```

The people/community icon should use the CSEWhy orange:

```css
color: #F45116;
```

## Bottom Information Area

Just like the previous cards, the heading belongs at the bottom rather than above the image.

Structure:

```text
[ community icon ]

A Growing UPSC Community

Join thousands of UPSC aspirants
learning, practising and growing
with CSEWhy.
```

Feature icon:

```css
width: 44px;
height: 44px;
border-radius: 12px;
background: #FFF0E9;
color: #F45116;
```

Heading:

```css
font-size: 30px–34px;
font-weight: 750–800;
line-height: 1.1;
color: #171717;
```

Description:

```css
font-size: 15px–17px;
line-height: 1.5;
color: #565656;
```

## Platform Statistics

Place the four platform figures below the description as a compact grid.

Desktop:

```text
┌────────┬────────┬────────┬────────┐
│ 175K+  │ 42K+   │ 10K+   │ 120K+  │
│ X      │ Telegram│ YouTube│ Instagram│
└────────┴────────┴────────┴────────┘
```

Mobile:

```text
175K+        42K+
X            Telegram

10K+         120K+
YouTube      Instagram
```

Use orange for the numbers and muted dark gray for platform labels.

Do not use large social-media logos or social-platform buttons.

## Visual Hierarchy

```text
1. Group photograph
2. 500K+ Aspirants
3. Community icon
4. A Growing UPSC Community
5. Description
6. Platform statistics
```

The card should feel like community proof, not a social-media dashboard.

## Card Dimensions

Match Cards 1 and 2:

```css
width: 400px–460px;
height: 450px–500px;
border-radius: 28px;
```

The parent specification recommends approximately 400–460px by 450–500px for the active card. fileciteturn5file3L426-L447

## Carousel State

When active:

```css
transform: translateX(0) scale(1);
opacity: 1;
z-index: 3;
```

Side cards follow the shared carousel treatment:

```css
scale(0.82);
opacity: 0.55;
```

The exact horizontal offsets should adapt to viewport width. fileciteturn5file3L451-L488

## Animation

Use the shared premium carousel transition:

```css
transition:
  transform 450ms ease,
  opacity 450ms ease,
  filter 450ms ease;
```

Avoid bounce, spinning, 3D rotation, or dramatic parallax. fileciteturn5file6L1095-L1116

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

and switch slides without animation when enabled. fileciteturn5file6L1081-L1091

## Responsive

### Desktop ≥ 1200px
Show the full group image, badge, heading, description, and four statistics.

### Tablet 768–1199px
Reduce image/card dimensions while keeping the group recognizable and the statistics readable.

### Mobile < 768px
Use a single active card. Keep the group photograph prominent and use a 2×2 statistics grid. The parent hero specifies a single-card mobile carousel. fileciteturn5file6L1258-L1290

## Accessibility

Alt text:

```text
CSEWhy community group photograph with the team standing together in front of the CSEWhy logo
```

Keep community numbers as HTML/text rather than embedding them in the image.

Carousel controls should retain accessible previous/next labels and pagination labels, consistent with the parent hero accessibility requirements. fileciteturn5file8L1559-L1582

## Data Object

Add Card 3 to the existing `heroSlides` array:

```js
{
  id: "community",
  eyebrow: "03 · Community",
  title: "A Growing UPSC Community",
  description:
    "Join thousands of UPSC aspirants learning, practising and growing with CSEWhy.",
  label: "500K+ Aspirants",
  image: "/assets/community-group.png",
  icon: "users",
  accent: "orange",
  stats: [
    { platform: "X", value: "175K+" },
    { platform: "Telegram", value: "42K+" },
    { platform: "YouTube", value: "10K+" },
    { platform: "Instagram", value: "120K+" }
  ]
}
```

The parent architecture is data-driven: adding a slide should only require adding an object to `heroSlides`; the carousel should automatically generate the card, pagination, navigation, swipe, and keyboard behavior. fileciteturn5file8L1621-L1664

## Final Carousel Story

```text
01  Expert Guidance
    Human guidance

02  CSEWhy App
    Complete preparation platform

03  A Growing UPSC Community
    Large, active UPSC community
```

The intended story is:

```text
GUIDANCE → PRODUCT → COMMUNITY
```

The card should make the visitor feel:

> “I'm joining a real community of UPSC aspirants, not preparing alone.”

Use the real group photograph for the human connection and the four platform figures for supporting social proof.
