'use client';

import React, { useState, useRef, useEffect } from 'react';

const Highlight = ({ text, details, activeHighlight, setActiveHighlight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const popoverRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (activeHighlight && activeHighlight !== text) {
      setIsHovered(false);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeHighlight, text]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (activeHighlight && activeHighlight !== text) {
      setActiveHighlight(null);
    }
    setIsHovered(true);
    setActiveHighlight(text);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
      setActiveHighlight(null);
    }, 300);
  };

  const handlePopoverMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
    setActiveHighlight(text);
  };

  const handlePopoverMouseLeave = () => {
    setIsHovered(false);
    setActiveHighlight(null);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsHovered(false);
    setActiveHighlight(null);
  };

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {(isHovered && activeHighlight === text) && (
        <div 
          ref={popoverRef}
          className="absolute z-50 bg-white shadow-lg rounded-lg border border-gray-200 w-80 mt-2" 
          style={{ left: '0', transform: 'none' }}
          onMouseEnter={handlePopoverMouseEnter}
          onMouseLeave={handlePopoverMouseLeave}
          role="tooltip"
          aria-label={`${details.type} information`}
        >
          <div className="relative pt-8 px-4 pb-4">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
              aria-label="Close"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="text-sm font-semibold">{details.summary}</div>
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