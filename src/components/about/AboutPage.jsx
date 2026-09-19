import React from 'react';
import AboutHero from './AboutHero';
import WhoWeAre from './WhoWeAre';
import OurJourney from './OurJourney';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Section A: Our Story */}
      <AboutHero />

      {/* Section B: Who We Are */}
      <WhoWeAre />

      {/* Section C: Our Journey / Long-Form Narrative */}
      <OurJourney />
    </div>
  );
}
