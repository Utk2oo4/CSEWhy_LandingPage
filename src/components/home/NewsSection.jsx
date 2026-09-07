import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsMentions } from '../../data/newsData';
import dainikLogo from '../../assets/news logo/dainik.png';
import indianExpressLogo from '../../assets/news logo/indianexpress.avif';
import aajLogo from '../../assets/news logo/aaj.png';

/* ───────────────────────────────────────────────────
   Laurel Icon SVGs for Eyebrow
   ─────────────────────────────────────────────────── */

function LaurelLeft() {
  return (
    <svg width="15" height="24" viewBox="0 0 16 28" fill="none" aria-hidden="true" className="news-laurel-icon">
      <path d="M12 2C10 7 7 12 2 15C7 17 10 21 12 26" stroke="#F45116" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 5C6 7 4 10 2 13" stroke="#F45116" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 22C7 20 4 17 2 14" stroke="#F45116" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="4" r="1.5" fill="#F45116" />
      <circle cx="7" cy="9" r="1.5" fill="#F45116" />
      <circle cx="4" cy="14" r="1.5" fill="#F45116" />
      <circle cx="7" cy="19" r="1.5" fill="#F45116" />
      <circle cx="11" cy="24" r="1.5" fill="#F45116" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg width="15" height="24" viewBox="0 0 16 28" fill="none" style={{ transform: 'scaleX(-1)' }} aria-hidden="true" className="news-laurel-icon">
      <path d="M12 2C10 7 7 12 2 15C7 17 10 21 12 26" stroke="#F45116" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 5C6 7 4 10 2 13" stroke="#F45116" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 22C7 20 4 17 2 14" stroke="#F45116" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="4" r="1.5" fill="#F45116" />
      <circle cx="7" cy="9" r="1.5" fill="#F45116" />
      <circle cx="4" cy="14" r="1.5" fill="#F45116" />
      <circle cx="7" cy="19" r="1.5" fill="#F45116" />
      <circle cx="11" cy="24" r="1.5" fill="#F45116" />
    </svg>
  );
}

/* ───────────────────────────────────────────────────
   Media Outlet Logos Mapping
   ─────────────────────────────────────────────────── */

const logoMap = {
  'dainik-jagran': {
    src: dainikLogo,
    alt: 'Dainik Jagran',
    className: 'news-outlet-img news-outlet-dainik',
  },
  'indian-express': {
    src: indianExpressLogo,
    alt: 'The New Indian Express',
    className: 'news-outlet-img news-outlet-indianexpress',
  },
  'aaj': {
    src: aajLogo,
    alt: 'Aaj',
    className: 'news-outlet-img news-outlet-aaj',
  },
};

function NewsLogo({ logoType }) {
  const logo = logoMap[logoType];
  if (!logo) return null;

  return (
    <img
      src={logo.src}
      alt={logo.alt}
      className={logo.className}
      loading="lazy"
    />
  );
}

/* ───────────────────────────────────────────────────
   Media Card Component (exact Screenshot structure)
   ─────────────────────────────────────────────────── */

function MediaCard({ mention }) {
  const { outlet, logoType, quote } = mention;

  return (
    <article className="news-card" aria-label={`Recognition from ${outlet}`}>
      {/* Floating Quote Badge overlapping top border */}
      <div className="news-card-quote-badge" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#F45116">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
        </svg>
      </div>

      {/* Upper Logo Area */}
      <div className="news-card-logo-box">
        <NewsLogo logoType={logoType} />
      </div>

      {/* Quote Body */}
      <blockquote className="news-card-quote">
        {quote}
      </blockquote>
    </article>
  );
}

/* ───────────────────────────────────────────────────
   Main News Recognition Section Component
   ─────────────────────────────────────────────────── */

export default function NewsSection() {
  // 16 cards (4 identical sets) for seamless infinite marquee loop on all screen sizes up to 4K
  const marqueeCards = [
    ...newsMentions,
    ...newsMentions,
    ...newsMentions,
    ...newsMentions,
  ];

  return (
    <section className="news-section" aria-labelledby="news-heading">
      {/* Decorative Dot Matrix in top-left */}
      <div className="news-dot-matrix" aria-hidden="true" />
      {/* Subtle Warm Glow in top-right */}
      <div className="news-glow-orb" aria-hidden="true" />

      <div className="container">
        {/* Header Block */}
        <div className="news-header">
          {/* Laurel Eyebrow */}
          <div className="news-eyebrow">
            <LaurelLeft />
            <span className="news-eyebrow-text">AS FEATURED IN</span>
            <LaurelRight />
          </div>

          <h2 id="news-heading" className="news-title">
            <span className="news-title-orange">CSEWhy</span> in News
          </h2>

          <p className="news-subtitle">
            CSEWhy has been recognized by leading media outlets for redefining
            UPSC preparation through innovation and impact.
          </p>
        </div>
      </div>

      {/* Continuous Horizontal Scrolling Marquee */}
      <div className="news-marquee-wrapper" aria-hidden="false">
        <div className="news-marquee-track" aria-label="Media recognition scrolling track">
          {marqueeCards.map((mention, index) => (
            <MediaCard
              key={`news-${mention.id}-${index}`}
              mention={mention}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
