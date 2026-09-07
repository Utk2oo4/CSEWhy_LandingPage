import React, { useState } from 'react';
import { ChevronDown, Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="/" className="logo" aria-label="CSEWhy Home">
          <span className="logo-cse">CSE</span>
          <span className="logo-why">Why</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link active">
              Home
            </a>
          </li>
          <li>
            <a href="#courses" className="nav-link">
              Courses <ChevronDown size={15} strokeWidth={2.2} />
            </a>
          </li>
          <li>
            <a href="#blogs" className="nav-link">
              Blogs
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About Us <ChevronDown size={15} strokeWidth={2.2} />
            </a>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <a href="#download" className="btn-download-app">
            <Download size={17} strokeWidth={2.2} /> Download App
          </a>
          <a href="#login" className="btn-login">
            Login
          </a>
          <a href="#explore" className="btn-explore-nav">
            Explore Courses
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="mobile-menu-dropdown">
          <a href="#home" className="mobile-menu-link active">Home</a>
          <a href="#courses" className="mobile-menu-link">Courses</a>
          <a href="#blogs" className="mobile-menu-link">Blogs</a>
          <a href="#about" className="mobile-menu-link">About Us</a>
          <hr className="mobile-menu-divider" />
          <a href="#download" className="btn-download-app mobile-menu-cta">
            <Download size={17} /> Download App
          </a>
          <a href="#login" className="btn-login mobile-menu-cta">Login</a>
          <a href="#explore" className="btn-explore-nav mobile-menu-cta">Explore Courses</a>
        </div>
      )}
    </nav>
  );
}
