import React from 'react';

// Golden Laurel Wreath SVG (Left & Right halves)
function LaurelLeft() {
  return (
    <svg width="18" height="42" viewBox="0 0 20 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4C14 10 10 16 4 20C10 22 14 26 16 32C18 38 16 44 16 44" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <path d="M12 8C7 11 4 16 2 20" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
      <circle cx="15" cy="6" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="10" cy="14" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="6" cy="24" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="10" cy="32" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="14" cy="40" r="2" fill="#D97706" opacity="0.8" />
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg width="18" height="42" viewBox="0 0 20 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
      <path d="M16 4C14 10 10 16 4 20C10 22 14 26 16 32C18 38 16 44 16 44" stroke="#D97706" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <path d="M12 8C7 11 4 16 2 20" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
      <circle cx="15" cy="6" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="10" cy="14" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="6" cy="24" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="10" cy="32" r="2" fill="#D97706" opacity="0.8" />
      <circle cx="14" cy="40" r="2" fill="#D97706" opacity="0.8" />
    </svg>
  );
}

export default function TrustBar() {
  return (
    <section className="trust-bar-section">
      <div className="container">
        <div className="trust-bar-card">
          {/* Header Title with decorative side divider lines */}
          <div className="trust-header">
            <span className="trust-header-line" />
            <h2 className="trust-header-title">
              Trusted by Aspirants. Recognized by Industry Leaders.
            </h2>
            <span className="trust-header-line" />
          </div>

          {/* 6 Proof Items Row */}
          <div className="trust-proof-grid">
            {/* Item 1: Google for Startups */}
            <div className="trust-item trust-item-google">
              <div className="google-proof-wrapper">
                {/* Official Google G Logo */}
                <svg width="34" height="34" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <div>
                  <div className="trust-micro-label">BACKED BY</div>
                  <div className="trust-bold-title">Google for Startups</div>
                </div>
              </div>
            </div>

            {/* Item 2: Play Store Rating */}
            <div className="trust-item">
              <div className="wreath-item-layout">
                <LaurelLeft />
                <div className="wreath-center-text">
                  <div className="trust-rating-score">4.8/5</div>
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <div className="trust-sub-label">Play Store Rating</div>
                </div>
                <LaurelRight />
              </div>
            </div>

            {/* Item 3: Editor's Choice */}
            <div className="trust-item">
              <div className="wreath-item-layout">
                <LaurelLeft />
                <div className="wreath-center-text">
                  <div className="trust-bold-title" style={{ fontSize: '15px' }}>Editor's Choice</div>
                  <div className="trust-mid-title">Education App</div>
                  <div className="trust-sub-label">Google Play</div>
                </div>
                <LaurelRight />
              </div>
            </div>

            {/* Item 4: Safe & Secure */}
            <div className="trust-item">
              <div className="security-proof-wrapper">
                <div className="shield-icon-box">
                  <svg width="26" height="30" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V12C3 18.55 6.84 24.74 12 27C17.16 24.74 21 18.55 21 12V5L12 1Z" fill="#10B981" />
                    <path d="M10 16.2L7.3 13.5L5.9 14.9L10 19L18 11L16.6 9.6L10 16.2Z" fill="#FFFFFF" />
                  </svg>
                </div>
                <div>
                  <div className="trust-micro-label" style={{ color: '#1E3A8A' }}>SAFE & SECURE</div>
                  <div className="trust-sub-desc">Your data is 100%</div>
                  <div className="trust-sub-desc">protected</div>
                </div>
              </div>
            </div>

            {/* Item 5: 50L+ Happy Users */}
            <div className="trust-item">
              <div className="wreath-item-layout">
                <LaurelLeft />
                <div className="wreath-center-text">
                  <div className="trust-big-stat">50L+</div>
                  <div className="trust-sub-label" style={{ fontWeight: 600, color: '#4B5563' }}>
                    Happy<br />Users
                  </div>
                </div>
                <LaurelRight />
              </div>
            </div>

            {/* Item 6: 50K+ 5 Star Reviews */}
            <div className="trust-item">
              <div className="wreath-item-layout">
                <LaurelLeft />
                <div className="wreath-center-text">
                  <div className="trust-big-stat">50K+</div>
                  <div className="trust-sub-label" style={{ fontWeight: 600, color: '#4B5563' }}>
                    5 Star<br />Reviews
                  </div>
                </div>
                <LaurelRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
