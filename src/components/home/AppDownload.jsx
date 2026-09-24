import React, { useEffect, useRef } from "react";
import { Smartphone, BookOpen, Zap, BarChart2 } from "lucide-react";
import mobileImg from "../../assets/mobile download.png";
import playstoreIcon from "../../assets/icon/playstore-icon.png";

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.17 1.27-2.15 3.79.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.79M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

const BENEFITS = [
  { icon: BookOpen,  label: "Learn Anywhere",   color: "#F45116", bg: "#FFF0E8" },
  { icon: Zap,       label: "Practice Smarter", color: "#0284C7", bg: "#EBF7FF" },
  { icon: BarChart2, label: "Stay Updated",     color: "#10B981", bg: "#ECFDF5" },
];

export default function AppDownload() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("appdl-visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="download-app"
      className="appdl-section"
      ref={sectionRef}
      aria-labelledby="appdl-heading"
    >
      {/* Decorative Background Accents */}
      <div className="appdl-blob appdl-blob--tl" aria-hidden="true" />
      <div className="appdl-blob appdl-blob--center" aria-hidden="true" />
      <div className="appdl-dots appdl-dots--tl" aria-hidden="true" />
      <div className="appdl-dots appdl-dots--bl" aria-hidden="true" />
      <div className="appdl-dots appdl-dots--tr" aria-hidden="true" />

      <div className="container">
        <div className="appdl-grid">

          {/* Left Column Content */}
          <div className="appdl-content">
            <div className="appdl-badge">
              <Smartphone size={14} className="appdl-badge-icon" strokeWidth={2.4} />
              <span>YOUR UPSC PREPARATION COMPANION</span>
            </div>

            <h2 className="appdl-heading" id="appdl-heading">
              Download the <br />
              <span className="appdl-heading-brand">CSEWhy</span> App
            </h2>

            <p className="appdl-desc">
              Access courses, current affairs, practice tests and more — all in one place.
              Learn, practice and stay ahead in your UPSC journey.
            </p>

            <div className="appdl-store-btns">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="appdl-store-btn"
                id="btn-google-play"
                aria-label="Get CSEWhy on Google Play"
              >
                <img
                  src={playstoreIcon}
                  alt="Google Play"
                  className="appdl-store-icon-img"
                />
                <span className="appdl-store-btn-text">
                  <span className="appdl-store-label">GET IT ON</span>
                  <span className="appdl-store-name">Google Play</span>
                </span>
              </a>

              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="appdl-store-btn"
                id="btn-app-store"
                aria-label="Download CSEWhy on the App Store"
              >
                <AppleIcon />
                <span className="appdl-store-btn-text">
                  <span className="appdl-store-label">Download on the</span>
                  <span className="appdl-store-name">App Store</span>
                </span>
              </a>
            </div>

            <div className="appdl-benefits">
              {BENEFITS.map(({ icon: Icon, label, color, bg }) => (
                <div className="appdl-benefit" key={label}>
                  <span className="appdl-benefit-icon" style={{ background: bg }}>
                    <Icon size={16} color={color} strokeWidth={2.2} />
                  </span>
                  <span className="appdl-benefit-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="appdl-mockups-wrap">
            <div className="appdl-mockups" aria-label="CSEWhy app screenshots">
              <img
                src={mobileImg}
                alt="CSEWhy app on two phones showing Learn and Practice screens"
                className="appdl-phone-img"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
