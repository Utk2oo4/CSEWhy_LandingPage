import React from 'react';

export default function ScriptAnnotation({
  text,
  rotation = 0,
  className = '',
  style = {},
  underlineWidth = 90,
}) {
  const lines = text.split('\n');

  return (
    <div
      className={`about-script-annotation ${className}`}
      style={{
        transform: `rotate(${rotation}deg)`,
        ...style,
      }}
      aria-hidden="true"
    >
      <div className="about-script-lines">
        {lines.map((line, idx) => (
          <span key={idx} className="about-script-line">
            {line}
          </span>
        ))}
      </div>
      <svg
        className="about-script-underline"
        viewBox="0 0 120 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${underlineWidth}px` }}
      >
        <path
          d="M 3 8 C 36 3.5, 84 10.5, 117 6"
          stroke="#F45116"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
