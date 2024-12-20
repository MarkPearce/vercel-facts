'use client';

import React from 'react';

const Highlight = ({ text, details, activeHighlight, setActiveHighlight }) => {
  if (!details) {
    console.error(`No details found for highlight: ${text}`);
    return <span>{text}</span>;
  }

  return (
    <span 
      className="bg-yellow-100 cursor-pointer relative inline-block"
      onMouseEnter={() => setActiveHighlight(text)}
      onMouseLeave={() => setActiveHighlight(null)}
    >
      {text}
      {activeHighlight === text && (
        <div className="absolute z-50 p-4 bg-white shadow-lg rounded-lg border border-gray-200 w-64 mt-2" style={{ left: '0', transform: 'none' }}>
          <p className="text-sm mb-2">{details.summary}</p>
          <a 
            href={details.link} 
            className="text-xs text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: {details.source} →
          </a>
        </div>
      )}
    </span>
  );
};

export default Highlight; 