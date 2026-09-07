import React from 'react';
import { Users, GraduationCap, ShieldCheck, Download } from 'lucide-react';
import { statsData } from '../../data/heroSlides';

export default function StatsBar() {
  const getIcon = (iconName, color) => {
    switch (iconName) {
      case 'award':
        return <GraduationCap size={26} color={color} strokeWidth={2} />;
      case 'book-open':
        return <ShieldCheck size={26} color={color} strokeWidth={2} />;
      case 'download':
        return <Download size={26} color={color} strokeWidth={2} />;
      case 'users':
      default:
        return <Users size={26} color={color} strokeWidth={2} />;
    }
  };

  return (
    <div className="stats-bar-wrapper">
      <div className="stats-bar">
        {statsData.map((stat) => (
          <div key={stat.id} className="stat-item">
            <div className="stat-icon-wrapper" style={{ background: stat.bgColor }}>
              {getIcon(stat.icon, stat.color)}
            </div>
            <div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
