import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel';
import TestimonialLightbox from './TestimonialLightbox';
import TestimonialsHeroV2 from './TestimonialsHeroV2';
import { COURSES_V2, getTestimonialsForCourse } from '../../data/testimonialsDataV2';

// Per-course subtitle copy is in the data. Auto-scroll directions alternate.
const DIRECTIONS = ['left', 'right'];


export default function TestimonialsPageV2() {
  const [lightboxItem, setLightboxItem]         = useState(null);
  const [lightboxItems, setLightboxItems]       = useState([]);

  const handleCardClick = (item, courseItems) => {
    setLightboxItem(item);
    setLightboxItems(courseItems);
  };

  // Listen for lightbox prev/next navigation events (from TestimonialLightbox)
  React.useEffect(() => {
    const handler = (e) => setLightboxItem(e.detail);
    window.addEventListener('t-lightbox-nav', handler);
    return () => window.removeEventListener('t-lightbox-nav', handler);
  }, []);

  return (
    <div className="tv2-page">
      {/* ── Hero ───────────────────────────────────────────── */}
      <TestimonialsHeroV2 />

      {/* ── Course sections ─────────────────────────────────── */}
      {COURSES_V2.map((course, idx) => {
        const items = getTestimonialsForCourse(course.id);
        const dir   = DIRECTIONS[idx % 2];
        const isAlt = idx % 2 === 1; // alternate bg

        return (
          <section
            key={course.id}
            className={`tv2-course-section ${isAlt ? 'tv2-course-section--alt' : ''}`}
            aria-labelledby={`course-heading-${course.id}`}
          >
            <div className="container tv2-course-header">
              <div className="tv2-course-header-left">
                <h2 id={`course-heading-${course.id}`} className="tv2-course-title">
                  {course.label}
                </h2>
                <p className="tv2-course-subtitle">{course.subtitle}</p>
              </div>
              {items.length > 0 && (
                <a href="#" className="tv2-view-all" aria-label={`View all ${course.label} testimonials`}>
                  View all testimonials <ArrowRight size={14} strokeWidth={2.2} style={{ display: 'inline', verticalAlign: 'middle' }} />
                </a>
              )}
            </div>

            <div className="tv2-course-carousel">
              <TestimonialCarousel
                items={items}
                direction={dir}
                courseLabel={course.label}
                onCardClick={(item) => handleCardClick(item, items)}
              />
            </div>
          </section>
        );
      })}


      {/* ── Lightbox ───────────────────────────────────────── */}
      {lightboxItem && (
        <TestimonialLightbox
          testimonial={lightboxItem}
          testimonials={lightboxItems}
          onClose={() => setLightboxItem(null)}
        />
      )}
    </div>
  );
}
