import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialLightbox({ testimonial, testimonials, onClose }) {
  const currentIdx = testimonials.findIndex((t) => t.id === testimonial.id);

  const goPrev = useCallback(() => {
    if (currentIdx > 0) {
      // We'll signal navigation via a custom event since parent controls active testimonial
      window.dispatchEvent(new CustomEvent('t-lightbox-nav', { detail: testimonials[currentIdx - 1] }));
    }
  }, [currentIdx, testimonials]);

  const goNext = useCallback(() => {
    if (currentIdx < testimonials.length - 1) {
      window.dispatchEvent(new CustomEvent('t-lightbox-nav', { detail: testimonials[currentIdx + 1] }));
    }
  }, [currentIdx, testimonials]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="t-lightbox-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Testimonial screenshot lightbox"
    >
      <div className="t-lightbox-inner">
        {/* Close */}
        <button
          className="t-lightbox-close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={22} strokeWidth={2} />
        </button>

        {/* Prev */}
        {currentIdx > 0 && (
          <button
            className="t-lightbox-nav t-lightbox-nav--prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
        )}

        {/* Image */}
        <div className="t-lightbox-img-wrap">
          <img
            src={testimonial.imageUrl}
            alt={testimonial.alt || `Testimonial screenshot from ${testimonial.platform}`}
            className="t-lightbox-img"
          />
        </div>

        {/* Next */}
        {currentIdx < testimonials.length - 1 && (
          <button
            className="t-lightbox-nav t-lightbox-nav--next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        )}

        {/* Counter */}
        {testimonials.length > 1 && (
          <p className="t-lightbox-counter" aria-live="polite">
            {currentIdx + 1} / {testimonials.length}
          </p>
        )}
      </div>
    </div>
  );
}
