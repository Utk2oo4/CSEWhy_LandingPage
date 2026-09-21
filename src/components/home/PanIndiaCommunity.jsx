import React, { useState } from 'react';
import { Users, MapPin, Target } from 'lucide-react';
import indiaMapSvg from '../../assets/india.svg';
import { communityLocations, communityStats } from '../../data/communityLocations';

export default function PanIndiaCommunity() {
  const [activeCity, setActiveCity] = useState(null);

  const getStatIcon = (iconName, color) => {
    switch (iconName) {
      case 'map-pin':
        return <MapPin size={22} color={color} strokeWidth={2.2} />;
      case 'target':
        return <Target size={22} color={color} strokeWidth={2.2} />;
      case 'users':
      default:
        return <Users size={22} color={color} strokeWidth={2.2} />;
    }
  };

  return (
    <section className="pan-india-section" aria-labelledby="pan-india-heading">
      <div className="container">
        <div className="pan-india-grid">
          {/* Left Column Content */}
          <div className="pan-india-left">
            <div className="pan-india-badge">
              <Users size={14} className="pan-india-badge-icon" />
              <span>ONE COMMUNITY. ONE DREAM.</span>
            </div>

            <h2 className="pan-india-heading" id="pan-india-heading">
              A UPSC Community <br />
              That Spans <br />
              <span className="highlight">Across India.</span>
            </h2>

            <p className="pan-india-desc">
              From Delhi to Kerala, Mumbai to Assam — thousands of aspirants are learning, preparing and growing together with CSEWhy.
            </p>

            {/* 3 Stats Cards */}
            <div className="pan-india-stats">
              {communityStats.map((stat) => (
                <div key={stat.id} className="pan-india-stat-card">
                  <div className="pan-india-stat-icon" style={{ background: stat.bgColor }}>
                    {getStatIcon(stat.icon, stat.color)}
                  </div>
                  <div>
                    <div className="pan-india-stat-num" style={{ color: stat.color }}>{stat.number}</div>
                    <div className="pan-india-stat-lbl">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Map & Clean Visuals */}
          <div className="pan-india-right">
            <div className="map-visual-wrapper">
              <div className="map-inner-container">
                {/* Map SVG */}
                <img
                  src={indiaMapSvg}
                  alt="Map of India showing CSEWhy nationwide community"
                  className="india-map-image"
                  loading="lazy"
                />

                {/* Location Pins & Avatars */}
                {communityLocations.map((loc) => {
                  const isActive = activeCity === loc.id;
                  return (
                    <React.Fragment key={loc.id}>
                      {/* Location Pin on Map */}
                      <div
                        className={`map-pin-marker ${isActive ? 'active' : ''}`}
                        style={{ left: loc.pinPos.left, top: loc.pinPos.top }}
                        onMouseEnter={() => setActiveCity(loc.id)}
                        onMouseLeave={() => setActiveCity(null)}
                      >
                        <span className="pin-dot" />
                        <span className="pin-pulse" />
                      </div>

                      {/* Student Avatar with City Label */}
                      <div
                        className={`map-student-avatar ${isActive ? 'active' : ''}`}
                        style={{
                          left: loc.avatarPos.left,
                          top: loc.avatarPos.top
                        }}
                        onMouseEnter={() => setActiveCity(loc.id)}
                        onMouseLeave={() => setActiveCity(null)}
                      >
                        <img src={loc.avatar} alt={`Student from ${loc.city}`} />
                        <span className="avatar-city-tag">{loc.city}</span>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
