import React from 'react';
import { rowOneReviews, rowTwoReviews } from '../../data/reviewsData';

function StarRating({ count = 5 }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="star-icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#F5A400"
          stroke="#F5A400"
          strokeWidth="1"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const { name, location, initials, rating, text, product, accent } = review;

  return (
    <article className="review-card">
      <div className="review-card-header">
        <div className={`review-avatar review-avatar-${accent}`} aria-hidden="true">
          <span>{initials}</span>
        </div>
        <div className="review-author-meta">
          <h3 className="review-author-name">{name}</h3>
          <p className="review-author-location">{location}</p>
        </div>
      </div>

      <div className="review-rating-row">
        <StarRating count={rating} />
      </div>

      <blockquote className="review-quote">
        “{text}”
      </blockquote>

      <div className="review-card-footer">
        <span className={`review-product-tag review-tag-${accent}`}>
          {product}
        </span>
      </div>
    </article>
  );
}

export default function StudentReviews() {
  return (
    <section
      className="reviews-section"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="reviews-header">
          <div className="reviews-eyebrow-pill">
            <span>STUDENT REVIEWS</span>
          </div>

          <h2 id="reviews-heading" className="reviews-title">
            What Our Learners <span className="highlight-orange">Say</span>
          </h2>

          <p className="reviews-subtitle">
            Real stories. Real progress. Real impact.
          </p>
        </div>
      </div>

      {/* Full-width Continuous Marquee Tracks */}
      <div className="reviews-marquee-wrapper" aria-hidden="false">
        {/* Row 1: Right to Left */}
        <div className="reviews-row" aria-label="Student reviews marquee row 1">
          <div className="reviews-track reviews-track-left">
            {[...rowOneReviews, ...rowOneReviews].map((review, index) => (
              <ReviewCard key={`row1-${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="reviews-row" aria-label="Student reviews marquee row 2">
          <div className="reviews-track reviews-track-right">
            {[...rowTwoReviews, ...rowTwoReviews].map((review, index) => (
              <ReviewCard key={`row2-${review.id}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
