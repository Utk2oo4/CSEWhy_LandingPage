import React from 'react';
import { BookOpen, Newspaper, ClipboardCheck, GraduationCap, Smartphone, Users } from 'lucide-react';

export default function HeroCarouselCard({ slide, position, onClick }) {
  // If this is the Expert Guidance Mentor Card (Card 1)
  if (slide.type === 'mentor') {
    return (
      <div
        className={`carousel-card mentor-carousel-card ${position}`}
        onClick={position !== 'active' ? onClick : undefined}
      >
        {/* Upper Visual Stage */}
        <div className="mentor-visual-stage">
          {/* Soft Peach Halo Circle */}
          <div className="mentor-peach-disc" aria-hidden="true" />

          {/* Top-Right Badge: Smarter Strategies */}
          <div className="floating-badge badge-strategies">
            <div className="badge-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="12" width="4" height="9" rx="1.5" fill="#F45116" />
                <rect x="10" y="7" width="4" height="14" rx="1.5" fill="#F45116" />
                <rect x="17" y="3" width="4" height="18" rx="1.5" fill="#F45116" />
              </svg>
            </div>
            <div className="badge-text-wrap">
              <span>Smarter</span>
              <span>Strategies</span>
            </div>
          </div>

          {/* Middle-Right: Radiating Accent Rays */}
          <div className="mentor-accent-rays" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="4" y1="14" x2="18" y2="6" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="16" x2="20" y2="16" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="4" y1="18" x2="17" y2="24" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Bottom-Right Badge: Exam-Focused Guidance */}
          <div className="floating-badge badge-guidance">
            <div className="badge-icon-wrap">
              <GraduationCap size={20} color="#F45116" strokeWidth={2.2} />
            </div>
            <div className="badge-text-wrap">
              <span>Exam-Focused</span>
              <span>Guidance</span>
            </div>
          </div>

          {/* Left Pill Badge: UPSC Mentor */}
          {/* <div className="floating-pill-badge badge-mentor">
            <span className="pill-user-icon">
              <User size={13} color="#FFFFFF" strokeWidth={2.6} />
            </span>
            <span className="pill-label">UPSC Mentor</span>
          </div> */}

          {/* Cutout Portrait of the Teacher */}
          <img
            src={slide.image}
            alt="UPSC Mentor"
            className="mentor-portrait-img"
            loading="eager"
          />
        </div>

        {/* Lower Information Panel */}
        <div className="mentor-info-panel">
          <div className="mentor-book-badge">
            <BookOpen size={24} color="#F45116" strokeWidth={2.2} />
          </div>
          <h3 className="mentor-panel-title">{slide.title}</h3>
          <p className="mentor-panel-desc">{slide.description}</p>
        </div>
      </div>
    );
  }

  // If this is the CSEWhy App Card (Card 2)
  if (slide.type === 'app') {
    return (
      <div
        className={`carousel-card app-carousel-card ${position}`}
        onClick={position !== 'active' ? onClick : undefined}
      >
        {/* Upper Visual Stage */}
        <div className="app-visual-stage">
          {/* Soft Peach Halo Circle */}
          <div className="app-peach-disc" aria-hidden="true" />

          {/* Bottom-Right Accent Rays */}
          <div className="app-accent-rays bottom-right" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="8" y1="6" x2="20" y2="2" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="10" y1="12" x2="22" y2="12" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="8" y1="18" x2="19" y2="22" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* App Mockups Image */}
          <img
            src={slide.image}
            alt="CSEWhy Mobile App Interface"
            className="app-mockup-img"
            loading="eager"
          />
        </div>

        {/* Lower Information Panel */}
        <div className="app-info-panel">
          <div className="app-phone-badge">
            <Smartphone size={24} color="#F45116" strokeWidth={2.2} />
          </div>
          <h3 className="app-panel-title">{slide.title}</h3>
          <p className="app-panel-desc">{slide.description}</p>
        </div>
      </div>
    );
  }

  // If this is the Community Card (Card 3)
  if (slide.type === 'community') {
    return (
      <div
        className={`carousel-card community-carousel-card ${position}`}
        onClick={position !== 'active' ? onClick : undefined}
      >
        {/* Upper Visual Stage */}
        <div className="community-visual-stage">
          {/* People Group Photo */}
          <img
            src={slide.image}
            alt="CSEWhy Community"
            className="community-photo-img"
            loading="eager"
          />

          {/* Social Stats Curved Arch */}
          <svg className="social-arch-curve" viewBox="0 0 370 120" fill="none" preserveAspectRatio="none">
            <path d="M 40 76 Q 185 10 330 76" stroke="#F45116" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>

          {/* Four Social Platform Badges along the Arch */}
          {/* 1. Instagram */}
          <div className="social-badge badge-ig">
            <div className="social-badge-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="ig-grad-card3" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="url(#ig-grad-card3)" strokeWidth="2.2" />
                <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad-card3)" strokeWidth="2.2" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad-card3)" />
              </svg>
            </div>
            <div className="social-badge-text">
              <span className="social-count">120K+</span>
              <span className="social-label">Followers</span>
            </div>
          </div>

          {/* 2. YouTube */}
          <div className="social-badge badge-yt">
            <div className="social-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
                <polygon points="10,8.5 16,12 10,15.5" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="social-badge-text">
              <span className="social-count">10K+</span>
              <span className="social-label">Subscribers</span>
            </div>
          </div>

          {/* 3. X (Twitter) */}
          <div className="social-badge badge-x">
            <div className="social-badge-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="5" fill="#000000" />
                <path d="M14.8 6.5h1.9l-4.1 4.7 4.9 6.3h-3.8l-3-3.9-3.4 3.9H5.4l4.4-5.1L5.1 6.5h3.9l2.7 3.6 3.1-3.6zm-.7 9.8h1l-6.8-8.9h-1.1l6.9 8.9z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="social-badge-text">
              <span className="social-count">175K+</span>
              <span className="social-label">Followers</span>
            </div>
          </div>

          {/* 4. Telegram */}
          <div className="social-badge badge-tg">
            <div className="social-badge-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#229ED9" />
                <path d="M7 11.8l9.6-3.8c.4-.2.8.1.7.5l-1.6 7.7c-.1.5-.4.6-.9.4l-2.6-1.9-1.3 1.2c-.1.1-.3.3-.6.3l.2-2.7 5-4.5c.2-.2 0-.3-.3-.1l-6.2 3.9-2.6-.8c-.6-.2-.6-.6.1-.8z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="social-badge-text">
              <span className="social-count">42K+</span>
              <span className="social-label">Aspirants</span>
            </div>
          </div>

          {/* Accent Rays around Arch */}
          <div className="community-accent-rays top-left" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="6" y1="18" x2="2" y2="10" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="12" y1="18" x2="10" y2="8" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="18" x2="20" y2="10" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="community-accent-rays top-right" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="6" y1="18" x2="4" y2="10" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="12" y1="18" x2="14" y2="8" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="18" x2="22" y2="10" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="community-accent-rays mid-left" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="8" x2="6" y2="4" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="14" x2="4" y2="14" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="20" x2="6" y2="24" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="community-accent-rays mid-right" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="6" y1="8" x2="18" y2="4" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6" y1="14" x2="20" y2="14" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="6" y1="20" x2="18" y2="24" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Floating Pill: India's biggest creator led UPSC community */}
          {/* <div className="floating-community-pill">
            <Users size={18} color="#F45116" strokeWidth={2.4} />
            <span>India's biggest creator led UPSC community</span>
          </div> */}
        </div>

        {/* Lower Information Panel */}
        <div className="community-info-panel">
          <div className="community-icon-badge">
            <Users size={24} color="#F45116" strokeWidth={2.2} />
          </div>
          <h3 className="community-panel-title">{slide.title}</h3>
          <p className="community-panel-desc">{slide.description}</p>
        </div>
      </div>
    );
  }

  // Generic cards (News, Checklist, etc.)
  const getIcon = () => {
    switch (slide.icon) {
      case 'newspaper':
        return <Newspaper size={26} color={slide.accentColor} strokeWidth={2.2} />;
      case 'clipboard':
        return <ClipboardCheck size={26} color={slide.accentColor} strokeWidth={2.2} />;
      case 'book':
      default:
        return <BookOpen size={26} color={slide.accentColor} strokeWidth={2.2} />;
    }
  };

  const renderIllustration = () => {
    if (slide.type === 'books') {
      return (
        <div className="illustration-books-box">
          <svg width="180" height="130" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="120" rx="75" ry="14" fill="#FFDDD0" opacity="0.6" />
            {/* Bottom Book */}
            <path d="M 40 95 L 155 95 L 160 110 L 45 110 Z" fill="#FFEFEA" stroke="#F45116" strokeWidth="1.5" />
            <rect x="35" y="85" width="125" height="15" rx="3" fill="#FFAA8A" stroke="#F45116" strokeWidth="1.5" />

            {/* Middle Book */}
            <path d="M 45 75 L 150 75 L 155 88 L 50 88 Z" fill="#FFF" stroke="#F45116" strokeWidth="1.5" />
            <rect x="40" y="65" width="115" height="15" rx="3" fill="#FF8254" stroke="#F45116" strokeWidth="1.5" />

            {/* Top Book */}
            <path d="M 55 52 L 140 52 L 145 64 L 60 64 Z" fill="#FFF" stroke="#F45116" strokeWidth="1.5" />
            <rect x="50" y="42" width="95" height="15" rx="3" fill="#F45116" />
            <text x="97" y="53" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">UPSC</text>
          </svg>
        </div>
      );
    }

    if (slide.type === 'news') {
      return (
        <div className="illustration-news-box">
          <svg width="160" height="120" viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="25" width="110" height="90" rx="8" fill="#FFFFFF" stroke="#60A5FA" strokeWidth="2" />
            <path d="M42 40 H82 V47 H42 Z" fill="#2563EB" />
            <text x="42" y="46" fill="#FFFFFF" fontSize="6" fontWeight="bold" fontFamily="sans-serif">NEWS</text>
            <line x1="90" y1="42" x2="128" y2="42" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />
            <line x1="90" y1="48" x2="120" y2="48" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />

            <line x1="42" y1="58" x2="128" y2="58" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="66" x2="128" y2="66" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="74" x2="108" y2="74" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />

            <circle cx="115" cy="85" r="14" fill="#3B82F6" opacity="0.15" />
            <circle cx="115" cy="85" r="10" stroke="#2563EB" strokeWidth="1.5" />
            <line x1="105" y1="85" x2="125" y2="85" stroke="#2563EB" strokeWidth="1" />
            <line x1="115" y1="75" x2="115" y2="95" stroke="#2563EB" strokeWidth="1" />
          </svg>
        </div>
      );
    }

    if (slide.type === 'checklist') {
      return (
        <div className="illustration-checklist-box">
          <svg width="160" height="120" viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="20" width="90" height="95" rx="8" fill="#FFFFFF" stroke="#34D399" strokeWidth="2" />
            <line x1="55" y1="36" x2="110" y2="36" stroke="#6EE7B7" strokeWidth="3" strokeLinecap="round" />

            {/* Check item 1 */}
            <path d="M55 52 L60 57 L68 47" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="74" y1="52" x2="115" y2="52" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" />

            {/* Check item 2 */}
            <path d="M55 70 L60 75 L68 65" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="74" y1="70" x2="115" y2="70" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" />

            {/* Check item 3 */}
            <path d="M55 88 L60 93 L68 83" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="74" y1="88" x2="105" y2="88" stroke="#A7F3D0" strokeWidth="2.5" strokeLinecap="round" />

            {/* Badge overlay */}
            <rect x="110" y="75" width="22" height="22" rx="6" fill="#F45116" />
            <path d="M115 86 L119 90 L127 81" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`carousel-card ${position}`}
      onClick={position !== 'active' ? onClick : undefined}
    >
      <div className="carousel-card-icon-box" style={{ background: slide.accentBg }}>
        {getIcon()}
      </div>

      <h3 className="carousel-card-title">{slide.title}</h3>
      <p className="carousel-card-desc">{slide.description}</p>

      <div className="carousel-card-illustration">
        {renderIllustration()}
      </div>
    </div>
  );
}
