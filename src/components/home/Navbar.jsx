import React, { useState } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Landmark,
  Newspaper,
  ClipboardList,
} from 'lucide-react';

const courseDropdownItems = [
  {
    title: 'Foundational Courses',
    desc: 'Build strong conceptual clarity from the basics',
    icon: Landmark,
    badgeBg: '#E8F8F0',
    iconColor: '#059669',
    href: '#courses',
  },
  {
    title: 'Current Affairs',
    desc: 'Stay updated with daily news & in-depth analysis',
    icon: Newspaper,
    badgeBg: '#EFF6FF',
    iconColor: '#2563EB',
    href: '#news',
  },
  {
    title: 'PYQs',
    desc: 'Topic-wise PYQs for Prelims, Mains & CSAT',
    icon: ClipboardList,
    badgeBg: '#F5EEFF',
    iconColor: '#9333EA',
    href: '#courses',
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

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
          <li
            className="nav-item-dropdown"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <a
              href="#courses"
              className={`nav-link ${coursesOpen ? 'open' : ''}`}
              aria-haspopup="true"
              aria-expanded={coursesOpen}
            >
              Courses <ChevronDown size={15} strokeWidth={2.2} className="dropdown-arrow" />
            </a>

            {/* Desktop Courses Hover Dropdown */}
            <div className={`courses-dropdown ${coursesOpen ? 'open' : ''}`}>
              <div className="courses-dropdown-menu">
                <span className="dropdown-caret" aria-hidden="true" />
                {courseDropdownItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="course-dropdown-item"
                      onClick={() => setCoursesOpen(false)}
                    >
                      <div
                        className="course-dropdown-icon"
                        style={{ backgroundColor: item.badgeBg, color: item.iconColor }}
                      >
                        <Icon size={24} strokeWidth={2.2} />
                      </div>
                      <div className="course-dropdown-info">
                        <span className="course-dropdown-title">{item.title}</span>
                        <p className="course-dropdown-desc">{item.desc}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
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
          {/* Mobile Courses Accordion */}
          <div className="mobile-courses-accordion">
            <button
              type="button"
              className="mobile-menu-link mobile-courses-toggle"
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
            >
              <span>Courses</span>
              <ChevronDown
                size={16}
                strokeWidth={2.2}
                className={`mobile-chevron ${mobileCoursesOpen ? 'open' : ''}`}
              />
            </button>

            {mobileCoursesOpen && (
              <div className="mobile-courses-list">
                {courseDropdownItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      className="mobile-course-subitem"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileCoursesOpen(false);
                      }}
                    >
                      <div
                        className="mobile-course-icon"
                        style={{ backgroundColor: item.badgeBg, color: item.iconColor }}
                      >
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                      <div className="mobile-course-info">
                        <span className="mobile-course-title">{item.title}</span>
                        <span className="mobile-course-desc">{item.desc}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
          <a href="#blogs" className="mobile-menu-link">Blogs</a>
          <a href="#about" className="mobile-menu-link">About Us</a>
          <hr className="mobile-menu-divider" />
          <a href="#login" className="btn-login mobile-menu-cta">Login</a>
          <a href="#explore" className="btn-explore-nav mobile-menu-cta">Explore Courses</a>
        </div>
      )}
    </nav>
  );
}
