'use client';

import { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);
  const [ratio, setRatio] = useState(16/9);

  return (
    <div 
      className={`relative w-full mb-12 ${props.className || ''}`}
      style={{ 
        maxWidth: '800px',
        aspectRatio: ratio
      }}
    >
      <Image
        src={error ? '/images/placeholder.jpg' : src}
        alt={alt}
        onError={() => setError(true)}
        fill
        sizes="(max-width: 800px) 100vw, 800px"
        style={{ objectFit: 'contain' }}
        priority
        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
          setRatio(naturalWidth / naturalHeight);
        }}
      />
    </div>
  );
};

export default ImageWithFallback; 