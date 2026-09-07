import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HeroCarouselCard from './HeroCarouselCard';

export default function HeroCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = slides.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  // Auto rotation every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="hero-carousel-container">
      {/* Cards Viewport Stack */}
      <div
        className="cards-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button
          className="carousel-nav-btn left"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} strokeWidth={2.5} />
        </button>

        {slides.map((slide, index) => {
          let position = 'next';
          if (index === activeIndex) {
            position = 'active';
          } else if (index === (activeIndex - 1 + total) % total) {
            position = 'prev';
          }

          return (
            <HeroCarouselCard
              key={slide.id}
              slide={slide}
              position={position}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}

        <button
          className="carousel-nav-btn right"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="carousel-dots" role="tablist">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            role="tab"
            aria-selected={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
