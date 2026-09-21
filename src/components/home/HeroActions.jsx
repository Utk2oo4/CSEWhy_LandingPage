import React from 'react';
import { BookOpen } from 'lucide-react';

export default function HeroActions() {
  return (
    <div className="hero-actions">
      <a href="#courses" className="btn-hero-primary">
        <BookOpen size={20} strokeWidth={2.2} /> Explore Courses
      </a>

      {/* Google Play Store Button */}
      <a href="#playstore" className="store-badge" aria-label="Get it on Google Play">
        <svg width="20" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.609 1.814C3.253 2.19 3.033 2.766 3.033 3.518V20.482C3.033 21.234 3.253 21.81 3.609 22.186L3.69 22.257L13.155 12.792V12L13.155 11.208L3.69 1.743L3.609 1.814Z" fill="#00E676"/>
          <path d="M16.31 15.947L13.155 12.792V11.208L16.31 8.053L16.388 8.098L20.126 10.222C21.196 10.829 21.196 11.811 20.126 12.418L16.388 14.542L16.31 15.947Z" fill="#FFD600"/>
          <path d="M16.388 15.902L13.155 12.669L3.609 22.215C3.965 22.591 4.541 22.645 5.219 22.261L16.388 15.902Z" fill="#FF3D00"/>
          <path d="M16.388 8.098L5.219 1.739C4.541 1.355 3.965 1.409 3.609 1.785L13.155 11.331L16.388 8.098Z" fill="#00B0FF"/>
        </svg>
        <div>
          <div className="store-badge-sub">GET IT ON</div>
          <div className="store-badge-title">Google Play</div>
        </div>
      </a>

      {/* Apple App Store Button */}
      <a href="#appstore" className="store-badge" aria-label="Download on the App Store">
        <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09999 22C7.78999 22.05 6.79999 20.68 5.95999 19.47C4.24999 17 2.93999 12.45 4.69999 9.39C5.56999 7.87 7.12999 6.91 8.81999 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
        </svg>
        <div>
          <div className="store-badge-sub">Download on the</div>
          <div className="store-badge-title">App Store</div>
        </div>
      </a>
    </div>
  );
}
