import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import TrustBar from './components/home/TrustBar';
import UpscQuoteSection from './components/home/UpscQuoteSection';
import PanIndiaCommunity from './components/home/PanIndiaCommunity';
// import AppFeatures from './components/home/AppFeatures';
import CourseDiscovery from './components/home/CourseDiscovery';
import SocialCommunity from './components/home/SocialCommunity';
import StudentReviews from './components/home/StudentReviews';
import NewsSection from './components/home/NewsSection';
import Footer from './components/Footer';
import TestimonialsPageV2 from './components/testimonials/TestimonialsPageV2';
import AboutPage from './components/about/AboutPage';

function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}

/** Home page — all original sections */
function HomePage() {
  useScrollReveal();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 1. Navbar & Hero Section */}
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />

        {/* 2. Trust Bar */}
        <div className="reveal-section"><TrustBar /></div>

        {/* 3. UPSC Quote */}
        <div className="reveal-section"><UpscQuoteSection /></div>

        {/* 4. Explore Courses */}
        <CourseDiscovery />

        {/* App Features section kept for future use */}
        {/* <div className="reveal-section"><AppFeatures /></div> */}

        {/* 5. Social Media */}
        <div className="reveal-section"><SocialCommunity /></div>

        {/* 6. India Map */}
        <div className="reveal-section"><PanIndiaCommunity /></div>

        {/* 7. Student Reviews */}
        <div className="reveal-section"><StudentReviews /></div>

        {/* 8. News */}
        <div className="reveal-section"><NewsSection /></div>
      </main>

      {/* 9. Footer */}
      <div className="reveal-section"><Footer /></div>
    </div>
  );
}

/** Testimonials page layout wrapper */
function TestimonialsLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activeLink="testimonials" />
      <main style={{ flex: 1 }}>
        <TestimonialsPageV2 />
      </main>
      <Footer />
    </div>
  );
}

/** About page layout wrapper */
function AboutLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activeLink="about" />
      <main style={{ flex: 1 }}>
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/testimonials" element={<TestimonialsLayout />} />
      <Route path="/about" element={<AboutLayout />} />
      <Route path="/about-us" element={<AboutLayout />} />
    </Routes>
  );
}
