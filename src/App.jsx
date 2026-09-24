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
import AppDownload from './components/home/AppDownload';
import TestimonialsPageV2 from './components/testimonials/TestimonialsPageV2';
import AboutPage from './components/about/AboutPage';

/** Home page — all original sections */
function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* 1. Navbar & Hero Section */}
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. UPSC Quote */}
        <UpscQuoteSection />

        {/* 4. Explore Courses */}
        <CourseDiscovery />

        {/* 5. Social Media */}
        <SocialCommunity />

        {/* 6. India Map */}
        <PanIndiaCommunity />

        {/* 7. Student Reviews */}
        <StudentReviews />

        {/* 8. News */}
        <NewsSection />

        {/* 9. App Download */}
        <AppDownload />
      </main>

      {/* 10. Footer */}
      <Footer />
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
