import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { coursesData } from '../../data/coursesData';

/* ───────────────────────────────────────────────────
   Inline SVG Illustrations (flat vector, consistent)
   ─────────────────────────────────────────────────── */

function IllustrationPYQs() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shadow ellipse */}
      <ellipse cx="90" cy="125" rx="65" ry="10" fill="#E0D4FC" opacity="0.5" />
      {/* Bottom paper */}
      <rect x="38" y="55" width="100" height="68" rx="6" fill="#FFFFFF" stroke="#C4B5FD" strokeWidth="1.5" />
      <line x1="52" y1="72" x2="120" y2="72" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="82" x2="110" y2="82" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="92" x2="100" y2="92" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="102" x2="115" y2="102" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />
      {/* Top paper */}
      <rect x="28" y="30" width="100" height="68" rx="6" fill="#FFFFFF" stroke="#A78BFA" strokeWidth="1.8" />
      <rect x="40" y="40" width="40" height="10" rx="3" fill="#7C3AED" />
      <text x="44" y="49" fill="#FFFFFF" fontSize="8" fontWeight="bold" fontFamily="sans-serif">PYQs</text>
      <line x1="40" y1="58" x2="112" y2="58" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="68" x2="104" y2="68" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="40" y1="78" x2="95" y2="78" stroke="#C4B5FD" strokeWidth="2.5" strokeLinecap="round" />
      <text x="40" y="93" fill="#A78BFA" fontSize="9" fontWeight="600" fontFamily="sans-serif">2014–2024</text>
      {/* Checkmark badge */}
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
      {/* Robot body */}
      <rect x="60" y="42" width="60" height="55" rx="14" fill="#FFFFFF" stroke="#F45116" strokeWidth="2" />
      {/* Robot head detail */}
      <rect x="68" y="50" width="44" height="30" rx="8" fill="#FFF0E9" />
      {/* Eyes */}
      <circle cx="80" cy="63" r="5" fill="#F45116" />
      <circle cx="100" cy="63" r="5" fill="#F45116" />
      <circle cx="81" cy="62" r="1.5" fill="#FFFFFF" />
      <circle cx="101" cy="62" r="1.5" fill="#FFFFFF" />
      {/* Mouth */}
      <path d="M83 73 Q90 79 97 73" stroke="#F45116" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Antenna */}
      <line x1="90" y1="42" x2="90" y2="30" stroke="#F45116" strokeWidth="2" strokeLinecap="round" />
      <circle cx="90" cy="27" r="4" fill="#F45116" />
      {/* Antenna glow */}
      <circle cx="90" cy="27" r="8" fill="#F45116" opacity="0.15" />
      {/* Arms */}
      <line x1="60" y1="65" x2="48" y2="75" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="120" y1="65" x2="132" y2="75" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
      {/* Lightbulb sparks */}
      <path d="M130 32 L136 28" stroke="#FFAA4C" strokeWidth="2" strokeLinecap="round" />
      <path d="M134 40 L142 38" stroke="#FFAA4C" strokeWidth="2" strokeLinecap="round" />
      <path d="M128 24 L132 18" stroke="#FFAA4C" strokeWidth="2" strokeLinecap="round" />
      {/* Book below */}
      <rect x="70" y="100" width="40" height="8" rx="2" fill="#FFAA8A" stroke="#F45116" strokeWidth="1" />
    </svg>
  );
}

function IllustrationBooks() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="65" ry="10" fill="#D1FAE5" opacity="0.5" />
      {/* Bottom book — Govt. Reports */}
      <rect x="35" y="85" width="110" height="18" rx="4" fill="#6EE7B7" stroke="#10B981" strokeWidth="1.5" />
      <text x="56" y="98" fill="#065F46" fontSize="9" fontWeight="bold" fontFamily="sans-serif">GOVT. REPORTS</text>
      {/* Middle book — Standard Books */}
      <rect x="40" y="63" width="105" height="18" rx="4" fill="#A7F3D0" stroke="#10B981" strokeWidth="1.5" />
      <text x="52" y="76" fill="#065F46" fontSize="9" fontWeight="bold" fontFamily="sans-serif">STANDARD BOOKS</text>
      {/* Top book — NCERT */}
      <rect x="45" y="41" width="95" height="18" rx="4" fill="#FFFFFF" stroke="#10B981" strokeWidth="2" />
      <text x="72" y="54" fill="#10B981" fontSize="10" fontWeight="bold" fontFamily="sans-serif">NCERT</text>
      {/* Bookmark ribbon */}
      <path d="M130 41 L130 30 L136 35 L142 30 L142 41" fill="#10B981" />
      {/* Small star */}
      <circle cx="50" cy="35" r="3" fill="#10B981" opacity="0.3" />
      <circle cx="140" cy="78" r="3" fill="#10B981" opacity="0.3" />
    </svg>
  );
}

function IllustrationMagazine() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="60" ry="10" fill="#BFDBFE" opacity="0.4" />
      {/* Magazine body */}
      <rect x="40" y="28" width="85" height="90" rx="6" fill="#FFFFFF" stroke="#60A5FA" strokeWidth="2" />
      {/* Header stripe */}
      <rect x="40" y="28" width="85" height="22" rx="6" fill="#2563EB" />
      <rect x="40" y="44" width="85" height="6" fill="#2563EB" />
      <text x="50" y="44" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">The Current</text>
      <text x="55" y="57" fill="#2563EB" fontSize="10" fontWeight="700" fontFamily="sans-serif">Affairs</text>
      {/* Content lines */}
      <line x1="50" y1="70" x2="115" y2="70" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="80" x2="108" y2="80" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="90" x2="100" y2="90" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="100" x2="112" y2="100" stroke="#BFDBFE" strokeWidth="2.5" strokeLinecap="round" />
      {/* Coffee cup */}
      <rect x="130" y="85" width="22" height="25" rx="4" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="1.5" />
      <path d="M152 92 Q160 97 152 105" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
      {/* Steam */}
      <path d="M136 80 Q138 75 140 80" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M142 78 Q144 73 146 78" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function IllustrationCreator() {
  return (
    <svg width="160" height="120" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="90" cy="125" rx="60" ry="10" fill="#FFE4E6" opacity="0.5" />
      {/* Laptop base */}
      <rect x="35" y="100" width="110" height="8" rx="4" fill="#FDA4AF" />
      {/* Laptop screen */}
      <rect x="42" y="45" width="96" height="55" rx="6" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.8" />
      {/* Screen content — video interface */}
      <rect x="50" y="53" width="80" height="40" rx="3" fill="#FFF1F2" />
      {/* Play button */}
      <circle cx="90" cy="73" r="12" fill="#E11D48" opacity="0.15" />
      <circle cx="90" cy="73" r="8" fill="#E11D48" />
      <path d="M87 69 L95 73 L87 77 Z" fill="#FFFFFF" />
      {/* Video progress bar */}
      <rect x="55" y="86" width="70" height="3" rx="1.5" fill="#FECDD3" />
      <rect x="55" y="86" width="30" height="3" rx="1.5" fill="#E11D48" />
      {/* Spark accents */}
      <path d="M145 42 L150 37" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      <path d="M148 50 L155 48" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      <path d="M143 35 L146 28" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
      {/* Small tablet beside */}
      <rect x="142" y="68" width="26" height="35" rx="4" fill="#FFFFFF" stroke="#FDA4AF" strokeWidth="1.5" />
      <line x1="148" y1="78" x2="162" y2="78" stroke="#FECDD3" strokeWidth="2" strokeLinecap="round" />
      <line x1="148" y1="85" x2="158" y2="85" stroke="#FECDD3" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CourseIllustration({ type }) {
  switch (type) {
    case 'pyqs': return <IllustrationPYQs />;
    case 'ai-robot': return <IllustrationAI />;
    case 'books': return <IllustrationBooks />;
    case 'magazine': return <IllustrationMagazine />;
    case 'creator': return <IllustrationCreator />;
    default: return null;
  }
}

/* ───────────────────────────────────────────────────
   Benefit Point Icon (small, in a pastel circle)
   ─────────────────────────────────────────────────── */

function PointIcon({ icon, color, bg }) {
  const iconPaths = {
    'clipboard-list': <><rect x="6" y="3" width="12" height="18" rx="2" stroke={color} strokeWidth="1.8" fill="none"/><line x1="10" y1="9" x2="16" y2="9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="13" x2="15" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="17" x2="14" y2="17" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    'target': <><circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.8" fill="none"/><circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="12" cy="12" r="1.5" fill={color}/></>,
    'bar-chart': <><rect x="5" y="12" width="4" height="8" rx="1" fill={color}/><rect x="10" y="8" width="4" height="12" rx="1" fill={color} opacity="0.7"/><rect x="15" y="5" width="4" height="15" rx="1" fill={color} opacity="0.5"/></>,
    'cpu': <><rect x="6" y="6" width="12" height="12" rx="2" stroke={color} strokeWidth="1.8" fill="none"/><line x1="9" y1="6" x2="9" y2="3" stroke={color} strokeWidth="1.5"/><line x1="15" y1="6" x2="15" y2="3" stroke={color} strokeWidth="1.5"/><line x1="9" y1="18" x2="9" y2="21" stroke={color} strokeWidth="1.5"/><line x1="15" y1="18" x2="15" y2="21" stroke={color} strokeWidth="1.5"/></>,
    'map': <><path d="M3 7L9 4V17L3 20V7Z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M9 4L15 7V20L9 17V4Z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M15 7L21 4V17L15 20V7Z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'clock': <><circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.8" fill="none"/><line x1="12" y1="7" x2="12" y2="12" stroke={color} strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="12" x2="16" y2="14" stroke={color} strokeWidth="1.8" strokeLinecap="round"/></>,
    'book-open': <><path d="M2 5C2 5 5 3 12 3C19 3 22 5 22 5V19C22 19 19 17 12 17C5 17 2 19 2 19V5Z" stroke={color} strokeWidth="1.5" fill="none"/><line x1="12" y1="3" x2="12" y2="17" stroke={color} strokeWidth="1.5"/></>,
    'layers': <><path d="M12 4L3 9L12 14L21 9L12 4Z" stroke={color} strokeWidth="1.5" fill="none"/><path d="M3 13L12 18L21 13" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'file-text': <><rect x="5" y="2" width="14" height="20" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><line x1="9" y1="8" x2="15" y2="8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="12" x2="15" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="16" x2="13" y2="16" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    'calendar': <><rect x="3" y="5" width="18" height="16" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.5"/><line x1="8" y1="3" x2="8" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="3" x2="16" y2="7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></>,
    'edit': <><path d="M16 3L21 8L8 21H3V16L16 3Z" stroke={color} strokeWidth="1.5" fill="none"/><line x1="14" y1="5" x2="19" y2="10" stroke={color} strokeWidth="1.5"/></>,
    'image': <><rect x="3" y="3" width="18" height="18" rx="3" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="9" cy="9" r="2" stroke={color} strokeWidth="1.2" fill="none"/><path d="M3 17L8 12L13 17L17 13L21 17" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'star': <><path d="M12 3L14.5 8.5L20.5 9L16 13.5L17.5 19.5L12 16.5L6.5 19.5L8 13.5L3.5 9L9.5 8.5L12 3Z" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'briefcase': <><rect x="3" y="8" width="18" height="13" rx="2" stroke={color} strokeWidth="1.5" fill="none"/><path d="M8 8V5C8 4 9 3 10 3H14C15 3 16 4 16 5V8" stroke={color} strokeWidth="1.5" fill="none"/></>,
    'users': <><circle cx="9" cy="8" r="3.5" stroke={color} strokeWidth="1.5" fill="none"/><path d="M2 20C2 16 5 14 9 14C13 14 16 16 16 20" stroke={color} strokeWidth="1.5" fill="none"/><circle cx="17" cy="9" r="2.5" stroke={color} strokeWidth="1.2" fill="none"/><path d="M19 20C19 17 18 15.5 16 14.5" stroke={color} strokeWidth="1.2" fill="none"/></>
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
   Course Card Component
   ─────────────────────────────────────────────────── */

function CourseCard({ course, index }) {
  return (
    <div
      className="course-card"
      style={{ '--stagger-delay': `${index * 80 + 100}ms` }}
    >
      {/* Illustration Area */}
      <div className="course-card-illustration" style={{ background: course.accentBg }}>
        <CourseIllustration type={course.illustration} />
      </div>

      {/* Content Area */}
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <p className="course-card-intro">{course.intro}</p>

        {/* Benefit Points */}
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
        aria-label={`View ${course.title}`}
      >
        <span>View Course</span>
        <ArrowRight size={16} strokeWidth={2.2} className="course-cta-arrow" />
      </a>
    </div>
  );
}

/* ───────────────────────────────────────────────────
   Main Section
   ─────────────────────────────────────────────────── */

export default function CourseDiscovery() {
  const sectionRef = useRef(null);

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

  return (
    <section
      className="course-discovery-section"
      aria-labelledby="course-discovery-heading"
      ref={sectionRef}
    >
      <div className="container">
        {/* Section Header */}
        <div className="course-header-wrapper">
          <div className="course-badge">
            <span>EXPLORE COURSES</span>
          </div>

          <h2 className="course-heading" id="course-discovery-heading">
            Courses Designed for a Smarter{' '}
            <br />
            <span className="highlight">UPSC Preparation</span>
          </h2>

          <p className="course-desc">
            Learn from expert mentors with curated content, practical tools and real exam insights.
            Choose the course that fits your goals and move closer to your dream.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="course-grid">
          {coursesData.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View All Courses CTA */}
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
          {/* Stylized Indian architecture silhouette */}
          <path d="M0 60 L0 45 Q50 40 100 45 L120 35 L130 20 Q135 12 140 20 L150 35 L170 40 Q200 42 230 38 L250 30 L260 22 Q265 18 270 22 L280 30 L300 36 Q350 42 400 40 L420 35 L440 25 Q450 18 460 25 L470 32 Q500 40 540 42 L560 38 L580 28 Q590 20 600 28 L620 38 Q660 44 700 42 Q740 40 760 35 L780 25 Q790 18 800 25 L820 35 Q860 42 900 40 L920 35 L940 22 Q950 15 960 22 L980 35 Q1020 42 1060 40 L1080 32 Q1100 24 1120 32 L1140 38 Q1180 44 1220 40 L1240 30 Q1260 20 1280 30 L1300 40 Q1350 45 1400 42 L1400 60 Z" fill="#F45116" opacity="0.04" />
          <path d="M0 60 L0 50 Q100 46 200 50 L220 44 L230 38 Q235 34 240 38 L250 44 Q300 50 400 48 L420 42 L430 36 Q435 32 440 36 L450 42 Q500 50 600 48 L620 42 Q640 36 660 42 L680 48 Q750 52 850 48 L870 42 L880 34 Q885 30 890 34 L900 42 Q950 50 1050 48 L1070 42 Q1090 34 1110 42 L1130 48 Q1200 52 1300 48 L1320 44 Q1360 50 1400 48 L1400 60 Z" fill="#F45116" opacity="0.03" />
        </svg>
      </div>
    </section>
  );
}
