'use client';

import React from 'react';
import XentinlLogo from '../Logo';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="max-w-[800px] mx-auto px-4 py-4 sm:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <XentinlLogo />
            <span className="text-xl font-semibold text-gray-900">Xentinl</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 