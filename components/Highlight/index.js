'use client';

import React, { useState, useRef, useEffect } from 'react';

const Highlight = ({ text, details, activeHighlight, setActiveHighlight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const popoverRef = useRef(null);
  const timeoutRef = useRef(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: true, left: 0 });

  useEffect(() => {
    if (activeHighlight && activeHighlight !== text) {
      setIsHovered(false);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeHighlight, text]);

  useEffect(() => {
    if (isHovered && popoverRef.current) {
      const popover = popoverRef.current;
      
      const resizeObserver = new ResizeObserver(() => {
        if (!popover || !popover.parentElement) return;
        
        const parent = popover.parentElement;
        const popoverRect = popover.getBoundingClientRect();
        
        // Get the position of the first character
        const range = document.createRange();
        range.setStart(parent.firstChild, 0);
        range.setEnd(parent.firstChild, 1);
        const firstCharRect = range.getBoundingClientRect();
        
        // Find the nearest scrollable container
        let container = parent;
        while (container && container !== document.body) {
          const style = window.getComputedStyle(container);
          if (style.overflow === 'auto' || style.overflow === 'scroll' || 
              style.overflowX === 'auto' || style.overflowX === 'scroll') {
            break;
          }
          container = container.parentElement;
        }
        
        const POPOVER_WIDTH = 320;
        const VIEWPORT_PADDING = 20;
        
        // Round all our base measurements
        const spanLeft = Math.round(firstCharRect.left);
        const spanWidth = Math.round(parent.offsetWidth);
        const containerWidth = container ? Math.round(container.clientWidth) : Math.round(window.innerWidth);
        const safeZoneEnd = containerWidth - VIEWPORT_PADDING;
        const rightEdgePosition = Math.round(spanLeft + POPOVER_WIDTH);
        
        // Calculate left offset to keep popover within container
        let leftOffset = 0;
        
        // If the popover would go beyond the safe zone, adjust it
        if (rightEdgePosition > safeZoneEnd) {
          leftOffset = safeZoneEnd - rightEdgePosition;
        }
        
        // If pushing left would push too far left, try centering
        if ((spanLeft + leftOffset) < VIEWPORT_PADDING) {
          if (POPOVER_WIDTH > spanWidth) {
            // Try centering over the highlight
            leftOffset = -(POPOVER_WIDTH - spanWidth) / 2;
            
            // Ensure we don't go beyond the container edges
            if ((spanLeft + leftOffset) < VIEWPORT_PADDING) {
              leftOffset = VIEWPORT_PADDING - spanLeft;
            } else if ((spanLeft + leftOffset + POPOVER_WIDTH) > safeZoneEnd) {
              leftOffset = safeZoneEnd - (spanLeft + POPOVER_WIDTH);
            }
          }
        }

        // Round the final offset
        leftOffset = Math.round(leftOffset);

        setPopoverPosition({
          top: !(popoverRect.bottom > window.innerHeight - 100),
          left: leftOffset
        });
      });
      
      resizeObserver.observe(popover);
      return () => resizeObserver.disconnect();
    }
  }, [isHovered]);

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
      className={`${highlightStyles[details.type]} cursor-pointer inline relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      {(isHovered && activeHighlight === text) && (
        <div 
          ref={popoverRef}
          className="absolute z-50 bg-white shadow-lg rounded-lg border border-gray-200"
          style={{
            maxWidth: 'min(320px, calc(100vw - 40px))',
            width: '320px',
            left: popoverPosition.left,
            ...(popoverPosition.top
              ? { bottom: '100%', marginBottom: '0.5rem' }
              : { top: '100%', marginTop: '0.5rem' }
            )
          }}
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