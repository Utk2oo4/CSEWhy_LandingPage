import React from 'react';
import { socialPlatforms } from '../../data/socialData';

/* ───────────────────────────────────────────────────
   Icon Components
   ─────────────────────────────────────────────────── */

function InstagramIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="social-platform-icon"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function XIconWithTexture() {
  return (
    <div className="social-x-symbol-wrapper" aria-hidden="true">
      {/* Distressed background texture effect */}
      <svg className="social-x-texture-bg" viewBox="0 0 120 120" fill="none">
        <g opacity="0.3" stroke="white" strokeWidth="0.8">
          <path d="M15 25 L45 80 M20 90 L85 30 M30 15 L95 105 M10 60 L60 110 M70 10 L110 80 M5 40 L100 45" strokeDasharray="2 3" />
          <circle cx="35" cy="40" r="1" fill="white" />
          <circle cx="85" cy="75" r="1.5" fill="white" />
          <circle cx="25" cy="80" r="1.2" fill="white" />
          <circle cx="70" cy="30" r="0.8" fill="white" />
          <circle cx="95" cy="50" r="1" fill="white" />
          <circle cx="50" cy="95" r="1.4" fill="white" />
        </g>
      </svg>
      {/* Crisp White X Logo */}
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="social-x-logo-glyph"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    </div>
  );
}

function YouTubeIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="social-platform-icon"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="social-platform-icon"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.898-.962 5.502-1.36 7.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

/* ───────────────────────────────────────────────────
   CSEWhy UPSC Circular Badge for YouTube Card
   ─────────────────────────────────────────────────── */

function UpscCseWhyBadge() {
  return (
    <div className="social-badge-circle" aria-label="UPSC CSEWhy Bal Buddhi Vidya">
      <span className="social-badge-top">UPSC</span>
      <div className="social-badge-brand">
        <span className="social-badge-cse">CSE</span>
        <span className="social-badge-why">Why</span>
      </div>
      <div className="social-badge-pill">
        <span>BAL • BUDDHI • VIDYA</span>
      </div>
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Social Card Component
   ─────────────────────────────────────────────────── */

function SocialCard({ platform, index }) {
  const { name, followers, label, variant, href, ariaLabel } = platform;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-card social-card-${variant}`}
      aria-label={ariaLabel}
      style={{ animationDelay: `${(index + 2) * 120}ms` }}
    >
      {variant === 'x' ? (
        <div className="social-card-inner-x">
          <XIconWithTexture />
          <div className="social-card-x-info">
            <div className="social-card-count">{followers}</div>
            <div className="social-card-label">{label}</div>
          </div>
        </div>
      ) : variant === 'youtube' ? (
        <div className="social-card-inner-youtube">
          <UpscCseWhyBadge />
          <div className="social-card-youtube-info">
            <div className="social-card-header">
              <YouTubeIcon />
              <span className="social-platform-name">{name}</span>
            </div>
            <div className="social-card-count">{followers}</div>
            <div className="social-card-label">{label}</div>
          </div>
        </div>
      ) : (
        <div className="social-card-inner-standard">
          <div className="social-card-header">
            {variant === 'instagram' && <InstagramIcon />}
            {variant === 'telegram' && <TelegramIcon />}
            <span className="social-platform-name">{name}</span>
          </div>
          <div className="social-card-count">{followers}</div>
          <div className="social-card-label">{label}</div>
        </div>
      )}
    </a>
  );
}

/* ───────────────────────────────────────────────────
   Social Intro Component (Left Column)
   ─────────────────────────────────────────────────── */

function SocialIntro() {
  return (
    <div className="social-intro">
      <h2 id="social-community-heading" className="social-heading">
        <span className="social-heading-line">Most Loved</span>
        <span className="social-heading-line">
          <span className="social-highlight-orange">Online</span> Content
        </span>
        <span className="social-heading-line">Community</span>
      </h2>

      <p className="social-copy">
        Join the CSEWhy family and crack UPSC CSE with the same trust and support that{' '}
        <span className="social-highlight-coral">millions of aspirants</span> rely on!{' '}
        <span className="social-heart-emoji" role="img" aria-label="love">
          ❤️
        </span>
      </p>
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Social Grid Component (Right Column)
   ─────────────────────────────────────────────────── */

function SocialGrid() {
  return (
    <div className="social-grid">
      {socialPlatforms.map((platform, index) => (
        <SocialCard key={platform.id} platform={platform} index={index} />
      ))}
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Main Social Community Section
   ─────────────────────────────────────────────────── */

export default function SocialCommunity() {
  return (
    <section
      className="social-community-section"
      aria-labelledby="social-community-heading"
    >
      <div className="container">
        <div className="social-community-container">
          <SocialIntro />
          <SocialGrid />
        </div>
      </div>
    </section>
  );
}
