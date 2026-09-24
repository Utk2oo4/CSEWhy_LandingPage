# CSEWhy App Download Section

## Goal

Create the **final app-download CTA section**, placed immediately above the website footer. It should match the existing CSEWhy landing page style: clean, premium, warm, spacious, and strongly focused on the orange CSEWhy brand color.

---

## Section Layout

Use a wide rounded container with a very light warm peach/cream background.

### Desktop

- Two-column layout.
- **Left:** headline, description, store buttons, and three benefit points.
- **Right:** two overlapping CSEWhy mobile app mockups.
- Keep the phones fully visible; **do not crop, clip, or cut any part of the phones or their corners**.
- The phone mockups should slightly overlap each other while remaining inside the section.
- Add subtle decorative peach/orange circles and dotted patterns in the background.
- Use generous whitespace.
- Section should feel like a final conversion CTA before the footer.

### Mobile

- Stack content vertically.
- Headline and copy first.
- Store buttons below.
- Benefits can become a compact 3-item row/grid.
- Place the two phones underneath.
- Keep both phone mockups completely visible.
- Do not use `overflow: hidden` in a way that clips the phones.
- Reduce phone size and overlap slightly on small screens.

---

## Content

### Small Badge

**YOUR UPSC PREPARATION COMPANION**

Use a small rounded pill with:
- subtle peach background
- orange outline/text
- small mobile-phone icon

### Main Heading

**Download the  
CSEWhy App**

Style:
- Large, bold, modern sans-serif.
- `Download the` in dark navy/black.
- `CSEWhy` in CSEWhy orange.
- `App` in dark navy/black.

### Description

> Access courses, current affairs, practice tests and more — all in one place. Learn, practice and stay ahead in your UPSC journey.

Keep the paragraph readable and limited to roughly 2–3 lines on desktop.

---

## App Store Buttons

Place two buttons side-by-side:

1. **Get it on Google Play**
2. **Download on the App Store**

Use the official Google Play and Apple App Store visual treatments already used elsewhere on the landing page.

Buttons should have:
- white background
- subtle border
- rounded corners
- small shadow
- authentic store icon
- dark text

On mobile, stack the buttons if needed.

---

## Benefits

Show three simple benefits beneath the store buttons:

### 1. Learn Anywhere
Book/open-learning icon.

### 2. Practice Smarter
Lightning/bolt icon.

### 3. Stay Updated
Analytics/chart icon.

Use small circular pastel icon backgrounds and keep the typography compact.

---

## Mobile App Mockups

Use the provided CSEWhy app screenshots as the actual screen content.

### Rear / Learn Phone

Display the real CSEWhy Learn screen showing:
- `Hi Utkarsh!`
- `Welcome to CSEWhy`
- UPSC Foundation Package
- Current Affairs
- PYQs
- bottom navigation

### Front / Practice Phone

Display the real CSEWhy Practice screen showing:
- Practice
- Test Mode
- Prelims PYQs
- Free Play
- GS / CSAT
- Geography
- Art and Culture
- Ancient History
- Environment
- bottom navigation

### Mockup Treatment

- Use realistic modern smartphone frames.
- One phone slightly behind the other.
- Slight rotation is acceptable.
- Add a soft shadow underneath.
- Keep the screens sharp and readable.
- **Do not replace the real screenshots with invented UI.**
- **Do not crop the phone bodies or rounded corners.**
- The entire phone silhouette must remain visible.

Recommended composition:

```text
                 ┌───────────────┐
                 │   LEARN PHONE │
                 │               │
                 │               │
                 └───────────────┘
                       ╲
                        ╲
                   ┌───────────────┐
                   │ PRACTICE PHONE│
                   │               │
                   │               │
                   └───────────────┘
```

---

## Visual Style

Match the existing CSEWhy landing page:

- Primary orange: `#FF4F1F` or the existing project orange variable.
- Dark navy: use the existing heading/text color from the project.
- Background: very light warm cream/peach.
- White cards.
- Thin light borders.
- Large rounded corners.
- Soft shadows.
- Minimal gradients.
- Rounded modern typography.
- Avoid excessive decoration.

The section should visually connect with the existing:
- Hero section
- Trust/recognition section
- UPSC quote section
- Social community section
- India map section
- Student reviews
- CSEWhy in News section

---

## Suggested Structure

```jsx
<section className="app-download-section">
  <div className="app-download-container">

    <div className="app-download-content">
      <span className="section-badge">
        <Smartphone />
        YOUR UPSC PREPARATION COMPANION
      </span>

      <h2>
        Download the
        <span>CSEWhy</span> App
      </h2>

      <p>
        Access courses, current affairs, practice tests and more —
        all in one place. Learn, practice and stay ahead in your UPSC journey.
      </p>

      <div className="store-buttons">
        {/* Google Play */}
        {/* App Store */}
      </div>

      <div className="app-benefits">
        {/* Learn Anywhere */}
        {/* Practice Smarter */}
        {/* Stay Updated */}
      </div>
    </div>

    <div className="app-mockups">
      {/* Real Learn screenshot phone */}
      {/* Real Practice screenshot phone */}
    </div>

  </div>
</section>
```

---

## Responsive Requirements

### Desktop
- Section width: approximately `calc(100% - 120px)`.
- Maximum width: around `1400px`.
- Minimum height: approximately `500px`.
- Content width: roughly `48%`.
- Mockup area: roughly `52%`.

### Tablet
- Reduce heading size.
- Reduce phone dimensions.
- Maintain two-column layout where possible.

### Mobile
- Single-column layout.
- Heading around `42–48px`.
- Store buttons can become full-width.
- Benefits become a 3-column compact row or wrapped grid.
- Phones should be centered.
- Do not let the phones extend outside the section.
- Do not crop any phone corner.

---

## Important Implementation Notes

1. Reuse the project's existing fonts, colors, button styles, spacing variables, and border-radius system.
2. Reuse the existing navbar/hero CTA styling where appropriate.
3. Use the **real supplied CSEWhy app screenshots** inside the phone mockups.
4. Do not generate fake app screenshots.
5. Keep the complete phone frames visible.
6. Do not use a CSS mask or `overflow: hidden` that cuts the phones.
7. The section must sit directly above the footer.
8. Add generous bottom padding so the phone mockups never visually collide with the footer.
9. Add subtle entrance animation if the project already uses animations, but keep it professional.
10. Ensure accessibility with meaningful alt text and keyboard-accessible store links.

## Final CTA Feel

The section should communicate:

**Download the CSEWhy App → Learn anywhere → Practice smarter → Stay updated.**

It should feel like the natural final conversion point of the landing page before the footer.
