import React from 'react';
import { Star } from 'lucide-react';
import HeroActions from './HeroActions';
import HeroCarousel from './HeroCarousel';
import StatsBar from './StatsBar';
import { heroSlides } from '../../data/heroSlides';

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      {/* Decorative dot matrix pattern */}
      <div className="hero-dots-pattern" aria-hidden="true" />

      {/* Decorative circular dashed ring */}
      <div className="hero-circle-decor" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column Messaging */}
          <div className="hero-left">
            <div className="hero-badge">
              <Star size={14} className="hero-badge-star" fill="currentColor" />
              <span>Your Complete UPSC Preparation Ecosystem</span>
            </div>

            <h1 className="hero-heading">
              Prepare for UPSC with the <span className="highlight">Right</span> <span className="highlight">Resources.</span>
            </h1>

            <p className="hero-description">
              Structured courses, foundation resources, current affairs, PYQs and AI-powered learning — all designed to help you prepare smarter and crack UPSC.
            </p>

            <HeroActions />
          </div>

          {/* Right Column Interactive Promotional Carousel */}
          <div className="hero-right">
            <HeroCarousel slides={heroSlides} />
          </div>
        </div>

        {/* Stats Bar */}
        <StatsBar />
      </div>
    </section>
  );
}
