'use client';

import React from 'react';

const Highlight = ({ text, details, activeHighlight, setActiveHighlight }) => {
  if (!details) {
    console.error(`No details found for highlight: ${text}`);
    return <span>{text}</span>;
  }

  const highlightStyles = {
    'fact-check': 'bg-yellow-100 hover:bg-yellow-200',
    'language': 'bg-pink-100 hover:bg-pink-200'
  };

  const labelStyles = {
    'fact-check': 'bg-yellow-100 border border-yellow-200 text-yellow-800',
    'language': 'bg-pink-50 border border-pink-200 text-pink-800'
  };

  return (
    <span 
      className={`${highlightStyles[details.type]} cursor-pointer relative inline-block`}
      onMouseEnter={() => setActiveHighlight(text)}
      onMouseLeave={() => setActiveHighlight(null)}
    >
      {text}
      {activeHighlight === text && (
        <div className="absolute z-50 bg-white shadow-lg rounded-lg border border-gray-200 w-80 mt-2" 
             style={{ left: '0', transform: 'none' }}>
          <div className="p-4">
            <div className="text-sm mb-2 font-semibold">{details.summary}</div>
          </div>
          <div className="flex justify-between items-center px-4 py-2 border-t border-gray-100">
            {details.type === 'fact-check' ? (
              <>
                <a 
                  href={details.link} 
                  className="text-xs text-blue-600 hover:underline font-normal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source: {details.source} →
                </a>
                <span className={`text-xs px-2 py-1 rounded-full ${labelStyles[details.type]} font-medium`}>
                  {details.type}
                </span>
              </>
            ) : (
              <>
                <div className="text-xs text-gray-600 font-medium">
                  Category: {details.category}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${labelStyles[details.type]} font-medium`}>
                  {details.type}
                </span>
              </>
            )}
          </div>
          {details.type === 'language' && (
            <div className="px-4 py-2 text-xs text-gray-600">
              <div className="font-normal">Impact: {details.impact}</div>
            </div>
          )}
        </div>
      )}
    </span>
  );
};

export default Highlight; 