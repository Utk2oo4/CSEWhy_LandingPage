import React from 'react';
import { Users, Heart, GraduationCap } from 'lucide-react';
import { aboutStats, aboutContent } from '../../data/aboutData';
import communityPhoto from '../../assets/boss.webp';

export default function WhoWeAre() {
  const { whoWeAre } = aboutContent;

  const renderStatIcon = (id) => {
    switch (id) {
      case 'learners':
        return <Users size={22} strokeWidth={2.2} />;
      case 'authentic':
        return <Heart size={22} strokeWidth={2.2} />;
      case 'informed-india':
        return <GraduationCap size={22} strokeWidth={2.2} />;
      default:
        return null;
    }
  };

  return (
    <section className="who-we-are-section" aria-labelledby="who-we-are-heading">
      <div className="container who-we-are-container">
        {/* Left Column: Narrative & Stats */}
        <div className="who-we-are-content">
          <p className="who-we-are-eyebrow">{whoWeAre.eyebrow}</p>
          <h2 id="who-we-are-heading" className="who-we-are-title">
            <span>{whoWeAre.headingPart1}</span>
            <br />
            <span className="who-we-are-title-highlight">
              {whoWeAre.headingPart2}
            </span>
          </h2>
          <p className="who-we-are-description">{whoWeAre.description}</p>

          {/* 3-Item Stats Row */}
          <div className="about-stats-row" role="list">
            {aboutStats.map((stat) => (
              <div key={stat.id} className="about-stat-item" role="listitem">
                <div className="about-stat-icon" aria-hidden="true">
                  {renderStatIcon(stat.id)}
                </div>
                <div className="about-stat-text">
                  <span className="about-stat-primary">{stat.primary}</span>
                  <span
                    className={`about-stat-secondary ${
                      stat.isTwoLineBold ? 'about-stat-secondary--bold' : ''
                    }`}
                  >
                    {stat.secondary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Community Photo & Accents */}
        <div className="who-we-are-media">
          <div className="about-photo-card">

            {/* Photo */}
            <img
              src={communityPhoto}
              alt={whoWeAre.photoAlt}
              className="about-community-img"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
