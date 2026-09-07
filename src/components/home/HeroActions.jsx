import React from 'react';
import { BookOpen, Bookmark } from 'lucide-react';

export default function HeroActions() {
  return (
    <div className="hero-actions">
      <a href="#courses" className="btn-hero-primary">
        <BookOpen size={20} strokeWidth={2.2} /> Explore Courses
      </a>
      <a href="#resources" className="btn-hero-secondary">
        <Bookmark size={20} strokeWidth={2.2} /> Explore Resources
      </a>
    </div>
  );
}
