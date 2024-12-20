'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import ArticleHeader from '../components/ArticleHeader';
import ArticleContent from '../components/ArticleContent';
import AdditionalReferences from '../components/AdditionalReferences';

const FactCheck = () => {
  const [activeHighlight, setActiveHighlight] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="w-full max-w-screen-xl mx-auto">
        <div className="max-w-[800px] mx-auto px-4 py-8">
          <div className="bg-white shadow rounded-lg overflow-visible">
            <ArticleHeader />
            <div className="p-6">
              <ArticleContent 
                activeHighlight={activeHighlight}
                setActiveHighlight={setActiveHighlight}
              />
            </div>
            <AdditionalReferences />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FactCheck;