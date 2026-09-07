import React from 'react';
import { BookOpen, Newspaper, ClipboardCheck } from 'lucide-react';

export default function HeroCarouselCard({ slide, position, onClick }) {
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
