import React from 'react';
import { Target, FileText, Newspaper, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import scBondsImg from '../../assets/news_sc_bonds.jpg';
import indiaUsImg from '../../assets/news_india_us.jpg';
import cop29Img from '../../assets/news_cop29.jpg';
import studentPracticeImg from '../../assets/practice_student.jpg';

export default function AppFeatures() {
  return (
    <section className="app-features-section" aria-labelledby="app-features-heading">
      <div className="container">
        {/* Section Header */}
        <div className="features-header-wrapper">
          <div className="features-badge">
            <span>APP FEATURES</span>
          </div>

          <div className="features-heading-box">
            {/* Subtle hand-drawn accent lines */}
            <span className="accent-dashes" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 16L10 6" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M12 20L18 8" stroke="#F45116" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>

            <h2 className="features-heading" id="app-features-heading">
              Three Powerful Tools <br />
              for Your <span className="highlight">UPSC Preparation.</span>
            </h2>
          </div>

          <p className="features-desc">
            Stay informed, practice smart, and learn from real exam questions — all in one app, built for your UPSC journey.
          </p>
        </div>

        {/* 3 Feature Cards Grid */}
        <div className="features-grid">
          
          {/* Feature Card 1 — Practice */}
          <div className="feature-card practice-card">
            <div className="card-top-header">
              <div className="card-title-group">
                <div className="card-icon-box practice-icon-box">
                  <Target size={24} color="#F45116" strokeWidth={2.2} />
                </div>
                <h3 className="card-title">Practice</h3>
              </div>
              <div className="card-arrow-btn practice-arrow">
                <ArrowRight size={18} color="#F45116" strokeWidth={2.2} />
              </div>
            </div>

            <p className="card-desc">
              Strengthen your concepts with topic-wise practice tests, mock tests and detailed performance analysis.
            </p>

            {/* Mini UI — Practice */}
            <div className="mini-ui-container practice-mini-ui">
              {/* Left Student Character Graphic */}
              <div className="practice-illustration-box">
                <img src={studentPracticeImg} alt="Student preparing with practice test" className="practice-student-img" loading="lazy" />
              </div>

              {/* Main Quiz Mock Card */}
              <div className="mini-quiz-card">
                <div className="mini-quiz-header">
                  <span className="mini-quiz-title">Polity Practice Test</span>
                  <span className="mini-quiz-count">Question 1/10</span>
                </div>

                <div className="mini-progress-bar">
                  <div className="mini-progress-fill" style={{ width: '40%' }} />
                </div>

                <p className="mini-question-text">
                  Which of the following is not a fundamental right?
                </p>

                <div className="mini-options-list">
                  <div className="mini-option-item">
                    <span className="option-letter">A</span>
                    <span className="option-text">Right to Equality</span>
                  </div>

                  <div className="mini-option-item active-option">
                    <span className="option-letter">B</span>
                    <span className="option-text">Right to Property</span>
                  </div>

                  <div className="mini-option-item">
                    <span className="option-letter">C</span>
                    <span className="option-text">Right to Freedom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 — PYQs */}
          <div className="feature-card pyq-card">
            <div className="card-top-header">
              <div className="card-title-group">
                <div className="card-icon-box pyq-icon-box">
                  <FileText size={24} color="#7C3AED" strokeWidth={2.2} />
                </div>
                <h3 className="card-title">PYQs</h3>
              </div>
              <div className="card-arrow-btn pyq-arrow">
                <ArrowRight size={18} color="#7C3AED" strokeWidth={2.2} />
              </div>
            </div>

            <p className="card-desc">
              Access previous year questions with topic-wise organization, detailed solutions and exam insights.
            </p>

            {/* Mini UI — PYQs */}
            <div className="mini-ui-container pyq-mini-ui">
              {/* Decorative 3D Paper Sheet */}
              <div className="pyq-decorative-sheet">
                <div className="sheet-sparkles">✦</div>
                <span className="sheet-label-bold">UPSC</span>
                <span className="sheet-label-bold">PYQs</span>
              </div>

              {/* Main PYQ Mock Card */}
              <div className="mini-pyq-card">
                <h4 className="mini-pyq-header">Previous Year Questions</h4>

                {/* Dropdowns row */}
                <div className="pyq-dropdowns-row">
                  <div className="pyq-dropdown-pill">
                    <span>2023</span>
                    <ChevronDown size={14} />
                  </div>
                  <div className="pyq-dropdown-pill">
                    <span>General Studies I</span>
                    <ChevronDown size={14} />
                  </div>
                </div>

                <p className="mini-question-text">
                  Consider the following statements about the Governor of a State:
                </p>

                <div className="mini-pyq-lines">
                  <div className="mini-pyq-line-item">
                    <span className="pyq-dot" />
                    <span className="pyq-line-placeholder" style={{ width: '85%' }} />
                  </div>
                  <div className="mini-pyq-line-item active-pyq-line">
                    <span className="pyq-dot active" />
                    <span className="pyq-line-placeholder" style={{ width: '70%' }} />
                  </div>
                  <div className="mini-pyq-line-item">
                    <span className="pyq-dot" />
                    <span className="pyq-line-placeholder" style={{ width: '60%' }} />
                  </div>
                </div>

                <button className="view-solution-btn">
                  <span>View Solution</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Feature Card 3 — Current Affairs */}
          <div className="feature-card news-card">
            <div className="card-top-header">
              <div className="card-title-group">
                <div className="card-icon-box news-icon-box">
                  <Newspaper size={24} color="#10B981" strokeWidth={2.2} />
                </div>
                <h3 className="card-title">Current Affairs</h3>
              </div>
              <div className="card-arrow-btn news-arrow">
                <ArrowRight size={18} color="#10B981" strokeWidth={2.2} />
              </div>
            </div>

            <p className="card-desc">
              Stay updated with daily current affairs, editorials and in-depth analysis curated specifically for UPSC.
            </p>

            {/* Mini UI — Current Affairs */}
            <div className="mini-ui-container news-mini-ui">
              {/* Decorative News Paper */}
              <div className="news-decorative-sheet">
                <span className="news-sheet-title">NEWS</span>
                <div className="news-sheet-placeholder" />
                <div className="news-sheet-placeholder short" />
              </div>

              {/* Main News Highlights Mock Card */}
              <div className="mini-news-card">
                <div className="mini-news-header">
                  <span className="mini-news-title">Today's Highlights</span>
                  <span className="mini-news-date">12 Nov 2024</span>
                </div>

                <div className="news-items-list">
                  {/* News Item 1 */}
                  <div className="news-item">
                    <img src={scBondsImg} alt="SC on Electoral Bonds" className="news-thumb" loading="lazy" />
                    <div className="news-content">
                      <span className="news-tag tag-polity">Polity</span>
                      <h5 className="news-item-title">SC on Electoral Bonds: Key Takeaways</h5>
                    </div>
                    <ChevronRight size={16} className="news-arrow-icon" />
                  </div>

                  {/* News Item 2 */}
                  <div className="news-item">
                    <img src={indiaUsImg} alt="India US Relations" className="news-thumb" loading="lazy" />
                    <div className="news-content">
                      <span className="news-tag tag-ir">International Relations</span>
                      <h5 className="news-item-title">India-US Strategic Partnership in a Changing World</h5>
                    </div>
                    <ChevronRight size={16} className="news-arrow-icon" />
                  </div>

                  {/* News Item 3 */}
                  <div className="news-item">
                    <img src={cop29Img} alt="COP29 Environment" className="news-thumb" loading="lazy" />
                    <div className="news-content">
                      <span className="news-tag tag-env">Environment</span>
                      <h5 className="news-item-title">COP29: Key Outcomes and India's Stand</h5>
                    </div>
                    <ChevronRight size={16} className="news-arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
