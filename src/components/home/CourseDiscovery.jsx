import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, GraduationCap, Briefcase } from 'lucide-react';
import { COURSE_GROUPS, COURSE_VIEW_CONFIG } from '../../data/coursesData';

// UPSC course images
import imgPYQ from '../../assets/course images/PYQ mastery.png';
import imgCurrentAffairs from '../../assets/course images/current affairs.png';
import imgMasterAI from '../../assets/course images/master ai.png';
import imgFoundation from '../../assets/course images/FOUNDATION course.png';

// Upskilling course images
import imgAIFellowship from '../../assets/plan b course images/ai fellowship.png';
import imgPublicPolicy from '../../assets/plan b course images/public POLICY.png';
import imgPersonality from '../../assets/plan b course images/personality development.png';
import imgCareerMasterclass from '../../assets/plan b course images/career masterclass.png';

const COURSE_IMAGES = {
  // UPSC
  'pyq-mastery-2027':        imgPYQ,
  'current-affairs-mag':     imgCurrentAffairs,
  'master-ai-for-upsc':      imgMasterAI,
  'upsc-foundation-package': imgFoundation,
  // Upskilling
  'ai-creator-fellowship':   imgAIFellowship,
  'public-policy-fellowship': imgPublicPolicy,
  'personality-development': imgPersonality,
  'ai-masterclass-upskilling': imgCareerMasterclass,
};

/* ───────────────────────────────────────────────────
   Inline SVG Illustrations (flat vector, consistent)
   ─────────────────────────────────────────────────── */

function IllustrationPYQs() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="65" ry="10" fill="#E0D4FC" opacity="0.5" />
      <rect x="38" y="55" width="100" height="68" rx="6" fill="#FFFFFF" stroke="#C4B5FD" strokeWidth="1.5" />
      <line x1="52" y1="72" x2="120" y2="72" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="82" x2="110" y2="82" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="92" x2="100" y2="92" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="102" x2="115" y2="102" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="28" y="30" width="100" height="68" rx="6" fill="#FFFFFF" stroke="#A78BFA" strokeWidth="1.8" />
      <rect x="40" y="40" width="40" height="10" rx="3" fill="#7C3AED" />
      <text x="44" y="49" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PYQs</text>
      <line x1="40" y1="58" x2="112" y2="58" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="68" x2="104" y2="68" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="78" x2="95" y2="78" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <text x="40" y="93" fill="#A78BFA" fontSize="9" fontWeight="600" fontFamily="sans-serif">2014–2024</text>
      <circle cx="135" cy="45" r="16" fill="#7C3AED" opacity="0.12" />
      <circle cx="135" cy="45" r="12" fill="#7C3AED" />
      <path d="M129 45L133 49L141 41" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IllustrationAI() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="60" ry="10" fill="#FFDDD0" opacity="0.5" />
      <rect x="60" y="42" width="60" height="55" rx="14" fill="#FFFFFF" stroke="#F45116" strokeWidth="2" />
      <rect x="68" y="50" width="44" height="30" rx="8" fill="#FFF0E9" />
      <circle cx="80" cy="63" r="5" fill="#F45116" />
      <circle cx="100" cy="63" r="5" fill="#F45116" />
      <circle cx="81" cy="62" r="1.5" fill="#FFFFFF" />
      <circle cx="101" cy="62" r="1.5" fill="#FFFFFF" />
      <path d="M83 73 Q90 79 97 73" stroke="#F45116" strokeWidth="2" strokeLinecap="round" fill="none" />
      <line x1="90" y1="42" x2="90" y2="30" stroke="#F45116" strokeWidth="2" strokeLinecap="round" />
      <circle cx="90" cy="27" r="4" fill="#F45116" />
      <circle cx="90" cy="27" r="8" fill="#F45116" opacity="0.15" />
      <line x1="60" y1="65" x2="48" y2="75" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="120" y1="65" x2="132" y2="75" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M130 32 L136 28" stroke="#FFAA4C" strokeWidth="2" strokeLinecap="round" />
      <path d="M134 40 L142 38" stroke="#FFAA4C" strokeWidth="2" strokeLinecap="round" />
      <path d="M128 24 L132 18" stroke="#FFAA4C" strokeWidth="2" strokeLinecap="round" />
      <rect x="70" y="100" width="40" height="8" rx="2" fill="#FFAA8A" stroke="#F45116" strokeWidth="1" />
    </svg>
  );
}

function IllustrationBooks() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="65" ry="10" fill="#D1FAE5" opacity="0.5" />
      <rect x="35" y="85" width="110" height="18" rx="4" fill="#6EE7B7" stroke="#10B981" strokeWidth="1.5" />
      <text x="56" y="98" fill="#065F46" fontSize="9" fontWeight="bold" fontFamily="sans-serif">GOVT. REPORTS</text>
      <rect x="40" y="63" width="105" height="18" rx="4" fill="#A7F3D0" stroke="#10B981" strokeWidth="1.5" />
      <text x="52" y="76" fill="#065F46" fontSize="9" fontWeight="bold" fontFamily="sans-serif">STANDARD BOOKS</text>
      <rect x="45" y="41" width="95" height="18" rx="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
      <text x="72" y="54" fill="#10B981" fontSize="10" fontWeight="bold" fontFamily="sans-serif">NCERT</text>
      <path d="M130 41 L130 30 L136 35 L142 30 L142 41" fill="#10B981" />
      <circle cx="50" cy="35" r="3" fill="#10B981" opacity="0.3" />
      <circle cx="140" cy="78" r="3" fill="#10B981" opacity="0.3" />
    </svg>
  );
}

function IllustrationMagazine() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="60" ry="10" fill="#BFDBFE" opacity="0.4" />
      <rect x="40" y="28" width="85" height="90" rx="6" fill="#FFFFFF" stroke="#60A5FA" strokeWidth="2" />
      <rect x="40" y="28" width="85" height="22" rx="6" fill="#2563EB" />
      <rect x="40" y="44" width="85" height="6" fill="#2563EB" />
      <text x="50" y="44" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">The Current</text>
      <text x="55" y="57" fill="#2563EB" fontSize="10" fontWeight="700" fontFamily="sans-serif">Affairs</text>
      <line x1="50" y1="70" x2="115" y2="70" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="80" x2="108" y2="80" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="90" x2="100" y2="90" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="100" x2="112" y2="100" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="130" y="85" width="22" height="25" rx="4" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M152 92 Q160 97 152 105" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
      <path d="M136 80 Q138 75 140 80" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M142 78 Q144 73 146 78" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IllustrationCreator() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="60" ry="10" fill="#FFE4E6" opacity="0.5" />
      <rect x="35" y="100" width="110" height="8" rx="4" fill="#FDA4AF" />
      <rect x="42" y="45" width="96" height="55" rx="6" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.8" />
      <rect x="50" y="53" width="80" height="40" rx="3" fill="#FFF1F2" />
      <circle cx="90" cy="73" r="12" fill="#E11D48" opacity="0.15" />
      <circle cx="90" cy="73" r="8" fill="#E11D48" />
      <path d="M87 69 L95 73 L87 77 Z" fill="#FFFFFF" />
      <rect x="55" y="86" width="70" height="3" rx="1.5" fill="#FECDD3" />
      <rect x="55" y="86" width="30" height="3" rx="1.5" fill="#E11D48" />
      <path d="M145 42 L150 37" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      <path d="M148 50 L155 48" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      <path d="M143 35 L146 28" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      <rect x="142" y="68" width="26" height="35" rx="4" fill="#FFFFFF" stroke="#FDA4AF" strokeWidth="1.5" />
      <line x1="148" y1="78" x2="162" y2="78" stroke="#FECDD3" strokeWidth="2" strokeLinecap="round" />
      <line x1="148" y1="85" x2="158" y2="85" stroke="#FECDD3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IllustrationWriting() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="65" ry="10" fill="#E0D4FC" opacity="0.5" />
      <rect x="35" y="30" width="95" height="90" rx="8" fill="#FFFFFF" stroke="#A78BFA" strokeWidth="2" />
      <rect x="35" y="30" width="95" height="18" rx="8" fill="#7C3AED" />
      <rect x="35" y="44" width="95" height="4" fill="#7C3AED" />
      <text x="52" y="44" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">My Article</text>
      <line x1="50" y1="62" x2="115" y2="62" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="72" x2="108" y2="72" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="82" x2="120" y2="82" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="92" x2="100" y2="92" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="102" x2="113" y2="102" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="148" cy="55" r="14" fill="#7C3AED" opacity="0.12" />
      <path d="M141 55L144 58.5L155 47" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CourseIllustration({ type }) {
  switch (type) {
    case 'pyqs':     return <IllustrationPYQs />;
    case 'ai-robot': return <IllustrationAI />;
    case 'books':    return <IllustrationBooks />;
    case 'magazine': return <IllustrationMagazine />;
    case 'creator':  return <IllustrationCreator />;
    case 'writing':  return <IllustrationWriting />;
    default:         return null;
  }
}

/* ───────────────────────────────────────────────────
   Benefit Point Icon
   ─────────────────────────────────────────────────── */

function PointIcon({ icon, color, bg }) {
  const iconPaths = {
    'clipboard-list': <><rect x="6" y="3" width="12" height="18" rx="2" stroke={color} strokeWidth="1.8" fill="none"/><line x1="10" y1="9" x2="16" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="13" x2="15" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="17" x2="14" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    'target':         <><circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.8" fill="none"/><circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="1.5" fill={color}/></>,
    'bar-chart':      <><rect x="5" y="12" width="4" height="8" rx="1" fill={color}/><rect x="10" y="8" width="4" height="12" rx="1" fill={color} opacity="0.7"/><rect x="15" y="5" width="4" height="15" rx="1" fill={color} opacity="0.5"/></>,
    'cpu':            <><rect x="6" y="6" width="12" height="12" rx="2" stroke={color} strokeWidth="1.8" fill="none"/><line x1="9" y1="6" x2="9" y2="3" stroke={color} strokeWidth="1.5"/><line x1="15" y1="6" x2="15" y2="3" stroke={color} strokeWidth="1.5"/><line x1="9" y1="18" x2="9" y2="21" stroke={color} strokeWidth="1.5"/><line x1="15" y1="18" x2="15" y2="21" stroke={color} strokeWidth="1.5"/></>,
    'map':            <><path d="M3 7L9 4V17L3 20V7Z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M9 4L15 7V20L9 17V4Z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M15 7L21 4V17L15 20V7Z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'clock':          <><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" fill="none"/><line x1="12" y1="7" x2="12" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="12" x2="16" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></>,
    'book-open':      <><path d="M2 5C2 5 5 3 12 3C19 3 22 5 22 5V19C22 19 19 17 12 17C5 17 2 19 2 19V5Z" stroke={color} strokeWidth="1.5" fill="none"/><line x1="12" y1="3" x2="12" y2="17" stroke={color} strokeWidth="1.5"/></>,
    'layers':         <><path d="M12 4L3 9L12 14L21 9L12 4Z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M3 13L12 18L21 13" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'file-text':      <><rect x="5" y="2" width="14" height="20" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><line x1="9" y1="8" x2="15" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="12" x2="15" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="16" x2="13" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    'calendar':       <><rect x="3" y="5" width="18" height="16" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.5"/><line x1="8" y1="3" x2="8" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="3" x2="16" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    'edit':           <><path d="M16 3L21 8L8 21H3V16L16 3Z" stroke={color} strokeWidth="1.5" fill="none"/><line x1="14" y1="5" x2="19" y2="10" stroke={color} strokeWidth="1.5"/></>,
    'image':          <><rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="9" cy="9" r="2" stroke={color} strokeWidth="1.2" fill="none"/><path d="M3 17L8 12L13 17L17 13L21 17" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'star':           <><path d="M12 3L14.5 8.5L20.5 9L16 13.5L17.5 19.5L12 16.5L6.5 19.5L8 13.5L3.5 9L9.5 8.5L12 3Z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'briefcase':      <><rect x="3" y="8" width="18" height="13" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><path d="M8 8V5C8 4 9 3 10 3H14C15 3 16 4 16 5V8" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'users':          <><circle cx="9" cy="8" r="3.5" stroke={color} strokeWidth="1.5" fill="none"/><path d="M2 20C2 16 5 14 9 14C13 14 16 16 16 20" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="17" cy="9" r="2.5" stroke={color} strokeWidth="1.2" fill="none"/><path d="M19 20C19 17 18 15.5 16 14.5" stroke={color} strokeWidth="1.2" fill="none"/></>
  };

  return (
    <span className="course-point-icon" style={{ background: bg }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {iconPaths[icon] || iconPaths['star']}
      </svg>
    </span>
  );
}

/* ───────────────────────────────────────────────────
   Course Card
   ─────────────────────────────────────────────────── */

function CourseCard({ course, index }) {
  const courseImg = COURSE_IMAGES[course.id];

  return (
    <div
      className="course-card"
      style={{ '--stagger-delay': `${index * 80 + 100}ms` }}
    >
      {/* Illustration / Image */}
      <div
        className={`course-card-illustration${courseImg ? ' course-card-illustration--img' : ''}`}
        style={{ background: courseImg ? '#FFFFFF' : course.accentBg }}
      >
        {courseImg ? (
          <img
            src={courseImg}
            alt={course.title}
            className="course-card-img"
          />
        ) : (
          <CourseIllustration type={course.illustration} />
        )}
      </div>

      {/* Content */}
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-intro">{course.intro}</p>

        <ul className="course-points-list">
          {course.points.map((point, i) => (
            <li key={i} className="course-point-item">
              <PointIcon icon={point.icon} color={course.accentColor} bg={course.iconBg} />
              <span>{point.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href={`#${course.id}`}
        className="course-card-cta"
        style={{ '--cta-color': course.accentColor }}
        aria-label={`Learn more about ${course.title}`}
      >
        <span>See Details</span>
        <ArrowRight size={16} strokeWidth={2.2} className="course-cta-arrow" />
      </a>
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Dynamic Heading with highlight
   ─────────────────────────────────────────────────── */

function CourseHeading({ config }) {
  const { heading, highlightWord, highlightPhrase } = config;
  const highlight = highlightWord || highlightPhrase;

  if (!highlight) return <h2 className="course-heading" id="course-discovery-heading">{heading}</h2>;

  const idx = heading.indexOf(highlight);
  if (idx === -1) return <h2 className="course-heading" id="course-discovery-heading">{heading}</h2>;

  const before = heading.slice(0, idx);
  const after  = heading.slice(idx + highlight.length);

  return (
    <h2 className="course-heading" id="course-discovery-heading">
      {before}
      <span className="highlight">{highlight}</span>
      {after}
    </h2>
  );
}

/* ───────────────────────────────────────────────────
   Audience Toggle
   ─────────────────────────────────────────────────── */

function AudienceToggle({ audience, onChange }) {
  function handleKey(e, value) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onChange(value);
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      onChange('upskilling');
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      onChange('upsc');
    }
  }

  return (
    <div className="course-toggle-wrapper" role="tablist" aria-label="Select course audience">
      <button
        role="tab"
        id="tab-upsc"
        aria-selected={audience === 'upsc'}
        aria-controls="course-panel"
        className={`course-toggle-btn ${audience === 'upsc' ? 'course-toggle-btn--active' : ''}`}
        onClick={() => onChange('upsc')}
        onKeyDown={(e) => handleKey(e, 'upsc')}
        tabIndex={audience === 'upsc' ? 0 : -1}
      >
        <GraduationCap size={15} strokeWidth={2.2} />
        <span>For UPSC Aspirants</span>
      </button>

      <button
        role="tab"
        id="tab-upskilling"
        aria-selected={audience === 'upskilling'}
        aria-controls="course-panel"
        className={`course-toggle-btn ${audience === 'upskilling' ? 'course-toggle-btn--active' : ''}`}
        onClick={() => onChange('upskilling')}
        onKeyDown={(e) => handleKey(e, 'upskilling')}
        tabIndex={audience === 'upskilling' ? 0 : -1}
      >
        <Briefcase size={15} strokeWidth={2.2} />
        <span>For Upskilling</span>
      </button>
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Main Section
   ─────────────────────────────────────────────────── */

export default function CourseDiscovery() {
  const sectionRef = useRef(null);
  const [audience, setAudience] = useState('upsc');
  const [animating, setAnimating] = useState(false);
  const prevAudience = useRef('upsc');

  // Entrance animation observer
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('course-section-visible');
          observer.unobserve(section);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function handleAudienceChange(value) {
    if (value === audience || animating) return;
    prevAudience.current = audience;
    setAnimating(true);
    // brief exit, then swap
    setTimeout(() => {
      setAudience(value);
      setAnimating(false);
    }, 320);
  }

  useEffect(() => {
    const handleAudienceEvent = (e) => {
      if (e.detail && (e.detail === 'upsc' || e.detail === 'upskilling')) {
        handleAudienceChange(e.detail);
      }
    };
    window.addEventListener('change-course-audience', handleAudienceEvent);
    return () => window.removeEventListener('change-course-audience', handleAudienceEvent);
  }, [audience, animating]);

  const config  = COURSE_VIEW_CONFIG[audience];
  const courses = COURSE_GROUPS[audience];

  return (
    <section
      id="courses"
      className="course-discovery-section"
      aria-labelledby="course-discovery-heading"
      ref={sectionRef}
    >
      <div className="container">

        {/* Section Badge */}
        <div className="course-badge-wrapper">
          <div className="course-badge">
            <GraduationCap size={14} color="var(--brand-orange)" />
            <span>Our Courses</span>
          </div>
        </div>

        {/* Section Header */}
        <div className={`course-header-wrapper ${animating ? 'course-header--exit' : 'course-header--enter'}`}>
          <CourseHeading config={config} />
        </div>

        {/* Audience Toggle (Right-aligned just above course cards) */}
        <div className="course-toggle-row">
          <AudienceToggle audience={audience} onChange={handleAudienceChange} />
        </div>

        {/* Course Cards Grid */}
        <div
          id="course-panel"
          role="tabpanel"
          aria-labelledby={`tab-${audience}`}
          className={`course-content-panel ${animating ? 'course-content-panel--exit' : 'course-content-panel--enter'}`}
        >
          <div className="course-grid">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="course-view-all-wrapper">
          <a href="#all-courses" className="course-view-all-btn">
            <span>View All Courses</span>
            <ArrowRight size={18} strokeWidth={2.2} className="course-cta-arrow" />
          </a>
        </div>
      </div>

      {/* Decorative architectural skyline */}
      <div className="course-architecture-decor" aria-hidden="true">
        <svg width="100%" height="60" viewBox="0 0 1400 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60 L0 45 Q50 40 100 45 L120 35 L130 20 Q135 12 140 20 L150 35 L170 40 Q200 42 230 38 L250 30 L260 22 Q265 18 270 22 L280 30 L300 36 Q350 42 400 40 L420 35 L440 25 Q450 18 460 25 L470 32 Q500 40 540 42 L560 38 L580 28 Q590 20 600 28 L620 38 Q660 44 700 42 Q740 40 760 35 L780 25 Q790 18 800 25 L820 35 Q860 42 900 40 L920 35 L940 22 Q950 15 960 22 L980 35 Q1020 42 1060 40 L1080 32 Q1100 24 1120 32 L1140 38 Q1180 44 1220 40 L1240 30 Q1260 20 1280 30 L1300 40 Q1350 45 1400 42 L1400 60 Z" fill="#F45116" opacity="0.04" />
          <path d="M0 60 L0 50 Q100 46 200 50 L220 44 L230 38 Q235 34 240 38 L250 44 Q300 50 400 48 L420 42 L430 36 Q435 32 440 36 L450 42 Q500 50 600 48 L620 42 Q640 36 660 42 L680 48 Q750 52 850 48 L870 42 L880 34 Q885 30 890 34 L900 42 Q950 50 1050 48 L1070 42 Q1090 34 1110 42 L1130 48 Q1200 52 1300 48 L1320 44 Q1360 50 1400 48 L1400 60 Z" fill="#F45116" opacity="0.03" />
        </svg>
      </div>
    </section>
  );
}
