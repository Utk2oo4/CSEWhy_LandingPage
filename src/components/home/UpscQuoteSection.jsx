import React from 'react';
import { ArrowRight } from 'lucide-react';
import quoteBg from '../../assets/quote_bg.png';

export default function UpscQuoteSection({
  badge = "A MINDSET FOR A BIGGER TOMORROW",
  quote = "doesn’t make you an officer; it picks you as one.",
  highlight = "UPSC",
  subtitleLine1 = "It’s not just an exam, it’s a calling.",
  subtitleLine2 = "Are you ready to answer it?",
  ctaText = "Start Your Journey",
  ctaHref = "#explore"
}) {
  return (
    <section className="upsc-quote-section" style={{ backgroundImage: `url(${quoteBg})` }}>
      <div className="container upsc-quote-container">
        {/* Top Badge */}
        <div className="upsc-quote-badge">
          <span className="upsc-quote-badge-icon">“</span>
          <span>{badge}</span>
        </div>

        {/* Main Quote */}
        <blockquote className="upsc-quote">
          <span className="upsc-quote-mark">“</span>
          <span>
            <span className="upsc-highlight">{highlight}</span> {quote}
          </span>
          <span className="upsc-quote-mark">”</span>
        </blockquote>

        {/* Orange Accent Bar */}
        <div className="upsc-quote-accent" aria-hidden="true" />

        {/* Subtitle */}
        <p className="upsc-quote-subtitle">
          {subtitleLine1}
          <br />
          {subtitleLine2}
        </p>

        {/* Primary CTA */}
        <a href={ctaHref} className="upsc-quote-cta">
          <span>{ctaText}</span>
          <ArrowRight size={20} strokeWidth={2.2} />
        </a>
      </div>
    </section>
  );
}
