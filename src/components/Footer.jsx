import React from 'react';
import { Download, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <a href="/" className="footer-logo" aria-label="CSEWhy Home">
              <span className="logo-cse">CSE</span>
              <span className="logo-why">Why</span>
            </a>
            <p className="footer-tagline">
              Your complete UPSC preparation ecosystem. Structured courses, current affairs, PYQs and AI-powered learning.
            </p>
            <div className="footer-store-badges">
              <a href="#playstore" className="footer-store-btn" aria-label="Get it on Google Play">
                <Download size={16} strokeWidth={2.2} />
                <span>Google Play</span>
              </a>
              <a href="#appstore" className="footer-store-btn" aria-label="Download on the App Store">
                <Download size={16} strokeWidth={2.2} />
                <span>App Store</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#download">Download App</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#practice">Practice Tests</a></li>
              <li><a href="#pyqs">Previous Year Questions</a></li>
              <li><a href="#current-affairs">Current Affairs</a></li>
              <li><a href="#notes">Study Notes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-link-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-links footer-contact-links">
              <li>
                <Mail size={15} strokeWidth={2} />
                <a href="mailto:support@csewhy.com">support@csewhy.com</a>
              </li>
              <li>
                <MapPin size={15} strokeWidth={2} />
                <span>New Delhi, India</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="footer-social-row">
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Telegram */}
              <a href="https://t.me" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span>© {currentYear} CSEWhy. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
