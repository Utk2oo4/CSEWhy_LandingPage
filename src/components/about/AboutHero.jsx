import React from 'react';
import { Star } from 'lucide-react';
import { aboutContent } from '../../data/aboutData';

export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section className="about-hero" aria-labelledby="about-hero-title">
      {/* Background ambient blobs */}
      <div className="about-hero-blob-left" aria-hidden="true" />
      <div className="about-hero-blob-right" aria-hidden="true" />
      <div className="about-hero-blob-bottom-right" aria-hidden="true" />

      {/* Decorative dot grid at top-left */}
      <div className="about-hero-dotgrid" aria-hidden="true">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="about-dot" />
        ))}
      </div>

      <div className="container about-hero-container">
        {/* Center Main Content */}
        <div className="about-hero-center">
          {/* Badge */}
          <div className="about-hero-badge">
            <Star size={13} className="about-hero-badge-star" fill="#F45116" />
            <span>{hero.badge}</span>
          </div>

          {/* Main Title */}
          <h1 id="about-hero-title" className="about-hero-title">
            <span className="about-hero-title-dark">{hero.headingPrefix}</span>
            <span className="about-hero-title-orange">{hero.headingHighlight}</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="about-hero-desc">{hero.description}</p>

          {/* Center Orange Divider */}
          <div className="about-hero-divider" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
