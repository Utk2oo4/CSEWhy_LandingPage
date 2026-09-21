import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import quoteBg from '../../assets/quote_bg.png';

export default function UpscQuoteSection({
  badge = "A MINDSET FOR A BIGGER TOMORROW",
  quote = "doesn't make you an officer; it picks you as one.",
  highlight = "UPSC",
  ctaText = "Start Your Journey",
  ctaHref = "#explore"
}) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [litCount, setLitCount] = useState(0);

  // Full token list: highlight word first, then quote words
  const quoteWords = quote.split(' ');
  const allWords = [highlight, ...quoteWords]; // total tokens
  const totalWords = allWords.length;

  // Entrance fade-in
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Scroll-driven word highlight
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Completes when section top reaches 60% down the viewport (section is "arrived")
      const triggerRange = windowH * 0.6 + height * 0.3;
      const progress = Math.min(Math.max((windowH - top) / triggerRange, 0), 1);

      setLitCount(Math.round(progress * totalWords));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [totalWords]);

  return (
    <section
      ref={sectionRef}
      className="upsc-quote-section"
      style={{ backgroundImage: `url(${quoteBg})` }}
    >
      <div
        ref={containerRef}
        className="container upsc-quote-container"
        style={{
          opacity: 0,
          transform: 'translateY(28px)',
          transition: 'opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Top Badge */}
        <div className="upsc-quote-badge">
          <span className="upsc-quote-badge-icon">"</span>
          <span>{badge}</span>
        </div>

        {/* Main Quote — per-word scroll highlight */}
        <blockquote className="upsc-quote">
          <span className="upsc-quote-mark">"</span>
          {allWords.map((word, i) => {
            const isHighlight = i === 0; // "UPSC"
            const isLit = i < litCount;
            return (
              <span
                key={i}
                style={{
                  color: isHighlight
                    ? isLit ? '#F45116' : 'rgba(244,81,22,0.2)'
                    : isLit ? '#111827' : 'rgba(17,24,39,0.18)',
                  transition: 'color 0.35s ease',
                  display: 'inline',
                }}
              >
                {word}{i < allWords.length - 1 ? ' ' : ''}
              </span>
            );
          })}
          <span className="upsc-quote-mark">"</span>
        </blockquote>

        {/* Orange Accent Bar */}
        <div className="upsc-quote-accent" aria-hidden="true" />

        {/* Primary CTA */}
        <a href={ctaHref} className="upsc-quote-cta">
          <span>{ctaText}</span>
          <ArrowRight size={20} strokeWidth={2.2} />
        </a>
      </div>
    </section>
  );
}
