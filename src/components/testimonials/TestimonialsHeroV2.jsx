import React from 'react';
import { Users, Heart, Star, BookOpen, Bookmark } from 'lucide-react';
import heroSideImg from '../../assets/testimonial-hero-side-img3.png';

export default function TestimonialsHeroV2() {
  return (
    <section className="tv2-hero" aria-labelledby="tv2-hero-heading">
      {/* Ambient background glows */}
      <div className="tv2-hero-blob-left" aria-hidden="true" />
      <div className="tv2-hero-blob-right" aria-hidden="true" />

      {/* Decorative dot grid at bottom left */}
      <div className="tv2-hero-dotgrid" aria-hidden="true" />

      <div className="container tv2-hero-layout">
        {/* ── Left Column: Typography, Stats & CTAs ────────────────────────── */}
        <div className="tv2-hero-content">
          {/* Badge */}
          <div className="tv2-hero-badge">
            <span className="tv2-hero-badge-star" aria-hidden="true">★</span>
            <span>TESTIMONIALS</span>
          </div>

          {/* Main Heading */}
          <h1 id="tv2-hero-heading" className="tv2-hero-heading">
            <span className="tv2-hero-heading-dark">Real Aspirants.</span>
            <span className="tv2-hero-highlight">Real Stories.</span>
          </h1>

          {/* Subtitle */}
          <p className="tv2-hero-sub">
            From tweets to WhatsApp messages, app reviews to emails — see how{' '}
            <strong>CSEWhy</strong> is helping aspirants across India.
          </p>

          {/* 3 Stats Row */}
          <div className="tv2-hero-stats" role="list">
            {/* Stat 1 */}
            <div className="tv2-hero-stat" role="listitem">
              <div className="tv2-hero-stat-icon" aria-hidden="true">
                <Users size={28} strokeWidth={2.1} />
              </div>
              <div className="tv2-hero-stat-text">
                <span className="tv2-hero-stat-value">10,000+</span>
                <span className="tv2-hero-stat-label">Happy Learners</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="tv2-hero-stat" role="listitem">
              <div className="tv2-hero-stat-icon" aria-hidden="true">
                <Heart size={28} strokeWidth={2.1} />
              </div>
              <div className="tv2-hero-stat-text">
                <span className="tv2-hero-stat-value">Authentic</span>
                <span className="tv2-hero-stat-label">Student Experiences</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="tv2-hero-stat" role="listitem">
              <div className="tv2-hero-stat-icon" aria-hidden="true">
                <Star size={28} strokeWidth={2.1} />
              </div>
              <div className="tv2-hero-stat-text">
                <span className="tv2-hero-stat-value">Across Platforms</span>
                <span className="tv2-hero-stat-label">
                  Twitter, WhatsApp & More
                </span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="tv2-hero-ctas">
            <a href="#courses" className="tv2-hero-btn-primary">
              <BookOpen size={18} strokeWidth={2.2} />
              <span>Explore Courses</span>
            </a>
            <a href="#resources" className="tv2-hero-btn-secondary">
              <Bookmark size={18} strokeWidth={2.2} />
              <span>Explore Resources</span>
            </a>
          </div>
        </div>

        {/* ── Right Column: Image & Accents ────────────────────────────────── */}
        <div className="tv2-hero-visual">
          

          {/* Hero Side Image */}
          <div className="tv2-hero-img-wrapper">
            <img
              src={heroSideImg}
              alt="CSEWhy Mobile App with real reviews from Twitter, WhatsApp, Google Play and Telegram"
              className="tv2-hero-side-img"
              loading="eager"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}
