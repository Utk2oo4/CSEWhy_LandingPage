import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Briefcase,
} from 'lucide-react';
import { coursesData, upskillingData } from '../../data/coursesData';

const courseCategories = [
  {
    id: 'upsc',
    heading: 'For UPSC Preparation',
    icon: GraduationCap,
    badgeBg: '#FFF0E9',
    iconColor: '#F45116',
    courses: coursesData,
  },
  {
    id: 'upskilling',
    heading: 'For Upskilling',
    icon: Briefcase,
    badgeBg: '#F5EEFF',
    iconColor: '#7C3AED',
    courses: upskillingData,
  },
];

export default function Navbar({ activeLink = 'home' }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  const handleCourseItemClick = (e, audienceType, courseId) => {
    setCoursesOpen(false);
    setMobileOpen(false);
    setMobileCoursesOpen(false);
    window.dispatchEvent(new CustomEvent('change-course-audience', { detail: audienceType }));

    const targetId = courseId || 'courses';
    const el = document.getElementById(targetId);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        e.preventDefault();
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
            <Link to="/" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}>
              Home
            </Link>
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
              <div className="courses-dropdown-menu courses-mega-menu">
                <span className="dropdown-caret" aria-hidden="true" />
                <div className="courses-dropdown-columns">
                  {courseCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <div key={category.id} className="courses-dropdown-col">
                        {/* Category Heading */}
                        <a
                          href="#courses"
                          className="course-col-header"
                          onClick={(e) => handleCourseItemClick(e, category.id)}
                        >
                          <div
                            className="course-col-icon"
                            style={{ backgroundColor: category.badgeBg, color: category.iconColor }}
                          >
                            <Icon size={18} strokeWidth={2.2} />
                          </div>
                          <div className="course-col-header-text">
                            <span className="course-col-title">{category.heading}</span>
                          </div>
                        </a>

                        {/* List of courses under heading */}
                        <div className="course-col-list">
                          {category.courses.map((course) => (
                            <a
                              key={course.id}
                              href={`#${course.id}`}
                              className="course-col-item"
                              onClick={(e) => handleCourseItemClick(e, category.id, course.id)}
                            >
                              <span
                                className="course-col-item-bullet"
                                style={{ '--bullet-color': category.iconColor }}
                              />
                              <span className="course-col-item-title">{course.title}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link
              to="/testimonials"
              className={`nav-link ${activeLink === 'testimonials' ? 'active' : ''}`}
            >
              Testimonials
            </Link>
          </li>
          <li>
            <a href="#blogs" className="nav-link">
              Blogs
            </a>
          </li>
          <li>
            <Link
              to="/about"
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            >
              About Us
            </Link>
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
          <Link to="/" className={`mobile-menu-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/testimonials" className={`mobile-menu-link ${activeLink === 'testimonials' ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>Testimonials</Link>
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
                {courseCategories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div key={category.id} className="mobile-course-group">
                      <div
                        className="mobile-course-group-heading"
                        onClick={(e) => handleCourseItemClick(e, category.id)}
                      >
                        <span
                          className="mobile-group-icon"
                          style={{ backgroundColor: category.badgeBg, color: category.iconColor }}
                        >
                          <Icon size={14} strokeWidth={2.2} />
                        </span>
                        <span>{category.heading}</span>
                      </div>
                      <div className="mobile-group-links">
                        {category.courses.map((course) => (
                          <a
                            key={course.id}
                            href={`#${course.id}`}
                            className="mobile-course-link-item"
                            onClick={(e) => handleCourseItemClick(e, category.id, course.id)}
                          >
                            {course.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <a href="#blogs" className="mobile-menu-link">Blogs</a>
          <Link
            to="/about"
            className={`mobile-menu-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>
          <hr className="mobile-menu-divider" />
          <a href="#login" className="btn-login mobile-menu-cta">Login</a>
          <a href="#explore" className="btn-explore-nav mobile-menu-cta">Explore Courses</a>
        </div>
      )}
    </nav>
  );
}
