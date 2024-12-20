'use client';

import React from 'react';

const Highlight = ({ text, details, activeHighlight, setActiveHighlight }) => {
  if (!details) {
    console.error(`No details found for highlight: ${text}`);
    return <span>{text}</span>;
  }

  const highlightStyles = {
    'fact-check': 'bg-yellow-100',
    'language': 'bg-pink-100'
  };

  return (
    <span 
      className={`${highlightStyles[details.type]} cursor-pointer relative inline-block`}
      onMouseEnter={() => setActiveHighlight(text)}
      onMouseLeave={() => setActiveHighlight(null)}
    >
      {text}
      {activeHighlight === text && (
        <div className="absolute z-50 p-4 bg-white shadow-lg rounded-lg border border-gray-200 w-64 mt-2" 
             style={{ left: '0', transform: 'none' }}>
          <div className="text-sm mb-2">{details.summary}</div>
          {details.type === 'fact-check' ? (
            <a 
              href={details.link} 
              className="text-xs text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source: {details.source} →
            </a>
          ) : (
            <div className="text-xs text-gray-600">
              <div className="font-medium">Category: {details.category}</div>
              <div>Impact: {details.impact}</div>
            </div>
          )}
        </div>
      )}
    </span>
  );
};

export default Highlight; 