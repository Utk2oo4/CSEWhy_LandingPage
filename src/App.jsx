import React, { useEffect } from 'react';
import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import TrustBar from './components/home/TrustBar';
import UpscQuoteSection from './components/home/UpscQuoteSection';
import PanIndiaCommunity from './components/home/PanIndiaCommunity';
import AppFeatures from './components/home/AppFeatures';
import CourseDiscovery from './components/home/CourseDiscovery';
import SocialCommunity from './components/home/SocialCommunity';
import StudentReviews from './components/home/StudentReviews';
import NewsSection from './components/home/NewsSection';
import Footer from './components/Footer';

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

export default function App() {
  useScrollReveal();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <HeroSection />
        <div className="reveal-section"><TrustBar /></div>
        <div className="reveal-section"><UpscQuoteSection /></div>
        <div className="reveal-section"><PanIndiaCommunity /></div>
        <div className="reveal-section"><AppFeatures /></div>
        <CourseDiscovery />
        <div className="reveal-section"><SocialCommunity /></div>
        <div className="reveal-section"><StudentReviews /></div>
        <div className="reveal-section"><NewsSection /></div>
      </main>
      <div className="reveal-section"><Footer /></div>
    </div>
  );
}

