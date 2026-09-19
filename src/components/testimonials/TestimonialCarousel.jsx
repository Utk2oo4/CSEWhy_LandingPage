import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialCarousel({ items, direction = 'left', courseLabel, onCardClick }) {
  const [manualOffset, setManualOffset] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const navTimerRef = useRef(null);
  const trackRef = useRef(null);

  // If no items, show empty message
  if (!items || items.length === 0) {
    return (
      <div className="tv2-carousel-empty">
        <p>No testimonials yet — we&apos;re collecting more experiences from CSEWhy students.</p>
      </div>
    );
  }

  // Ensure enough cards so that each group exceeds any wide screen (>= 4000px)
  // With 320px cards + 16px gap = 336px per card, 12 cards = 4032px per group
  const TARGET_CARDS = 12;
  const repeatMultiplier = Math.max(2, Math.ceil(TARGET_CARDS / items.length));
  const displayItems = Array.from({ length: repeatMultiplier }, () => items).flat();

  // Calculate speed: constant ~38px per second across all rows
  const CARD_STEP = 336;
  const groupWidth = displayItems.length * CARD_STEP;
  const scrollDuration = Math.round(groupWidth / 38);

  // Manual nudge handlers for prev/next buttons
  const handleNudge = (directionMultiplier) => {
    const cardEl = trackRef.current?.querySelector('.tv2-card');
    const cardW = cardEl ? cardEl.offsetWidth : 320;
    const step = (cardW + 16) * directionMultiplier;

    setIsNavigating(true);
    setManualOffset((prev) => {
      let nextOffset = prev + step;
      // Keep offset within bounds of a single group cycle
      if (nextOffset <= -groupWidth) nextOffset += groupWidth;
      if (nextOffset >= groupWidth)  nextOffset -= groupWidth;
      return nextOffset;
    });

    if (navTimerRef.current) {
      clearTimeout(navTimerRef.current);
    }
    navTimerRef.current = setTimeout(() => {
      setIsNavigating(false);
    }, 2500);
  };

  const prev = () => handleNudge(1);  // Shifts track right (reveals previous cards)
  const next = () => handleNudge(-1); // Shifts track left (reveals next cards)

  // Reset offset on course or direction change
  useEffect(() => {
    setManualOffset(0);
    setIsNavigating(false);
    return () => {
      if (navTimerRef.current) clearTimeout(navTimerRef.current);
    };
  }, [courseLabel, direction]);

  return (
    <div className="tv2-carousel-root">
      <button
        className="tv2-carousel-btn tv2-carousel-btn--prev"
        onClick={prev}
        aria-label={`Previous ${courseLabel} testimonial`}
        type="button"
      >
        <ChevronLeft size={18} strokeWidth={2.2} />
      </button>

      <div className="tv2-carousel-window">
        <div
          className="tv2-carousel-offset-track"
          style={{
            transform: `translateX(${manualOffset}px)`,
            transition: isNavigating ? 'transform 0.4s cubic-bezier(0.2, 0.9, 0.3, 1)' : 'none',
          }}
        >
          <div
            ref={trackRef}
            className={`tv2-carousel-track tv2-carousel-track--${direction}`}
            style={{
              '--tv2-scroll-duration': `${scrollDuration}s`,
              animationPlayState: isNavigating ? 'paused' : undefined,
            }}
          >
            {/* Primary group */}
            <div className="tv2-carousel-group">
              {displayItems.map((item, idx) => (
                <TestimonialCard
                  key={`g1-${item.id}-${idx}`}
                  item={item}
                  courseLabel={courseLabel}
                  onClick={() => onCardClick && onCardClick(item)}
                />
              ))}
            </div>

            {/* Duplicate group for seamless infinite loop */}
            <div className="tv2-carousel-group" aria-hidden="true">
              {displayItems.map((item, idx) => (
                <TestimonialCard
                  key={`g2-${item.id}-${idx}`}
                  item={item}
                  courseLabel={courseLabel}
                  isDuplicate={true}
                  onClick={() => onCardClick && onCardClick(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        className="tv2-carousel-btn tv2-carousel-btn--next"
        onClick={next}
        aria-label={`Next ${courseLabel} testimonial`}
        type="button"
      >
        <ChevronRight size={18} strokeWidth={2.2} />
      </button>
    </div>
  );
}

// ── Individual screenshot card ──────────────────────────────────────────────
function TestimonialCard({ item, courseLabel, isDuplicate = false, onClick }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <button
      className="tv2-card"
      onClick={onClick}
      aria-label={item.alt || `${courseLabel} testimonial from a CSEWhy learner`}
      type="button"
      tabIndex={isDuplicate ? -1 : 0}
    >
      {!loaded && <div className="tv2-card-skeleton" aria-hidden="true" />}
      <img
        src={item.imageUrl}
        alt={item.alt || `${courseLabel} testimonial from a CSEWhy learner`}
        className={`tv2-card-img ${loaded ? 'tv2-card-img--visible' : ''}`}
        decoding="async"
        onLoad={() => setLoaded(true)}
        ref={(img) => {
          if (img && img.complete && !loaded) {
            setLoaded(true);
          }
        }}
        draggable={false}
      />
      <div className="tv2-card-overlay" aria-hidden="true" />
    </button>
  );
}
