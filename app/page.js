'use client';

import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import Image from 'next/image';

const XentinlLogo = () => (
  <div className="relative w-12 h-12">
    <div className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="pyramidGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>
        {/* Pyramid with eye */}
        <path d="M50 10 L90 80 L10 80 Z" fill="url(#pyramidGradient)" />
        <circle cx="50" cy="45" r="15" fill="#2563eb" />
        <circle cx="50" cy="45" r="7" fill="#ffffff" />
        {/* Scales of justice overlaid */}
        <g transform="translate(20, 65) scale(0.6)">
          <path d="M30 15 L70 15 M50 15 L50 25" stroke="#2563eb" strokeWidth="4" />
          <circle cx="30" cy="25" r="10" fill="none" stroke="#2563eb" strokeWidth="4" />
          <circle cx="70" cy="25" r="10" fill="none" stroke="#2563eb" strokeWidth="4" />
        </g>
      </svg>
    </div>
  </div>
);

// ImageWithFallback component for error handling
const ImageWithFallback = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${props.className || ''}`} style={{ minHeight: '200px' }}>
      <Image
        src={error ? '/images/placeholder.jpg' : src}
        alt={alt}
        onError={() => setError(true)}
        {...props}
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

[... rest of the component content remains the same as previous version ...]