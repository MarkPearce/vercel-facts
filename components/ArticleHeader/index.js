'use client';

import Image from 'next/image';

const ArticleHeader = () => (
  <div className="bg-gray-100 p-4 border-b border-gray-200">
    <div className="text-sm text-gray-600 mb-3">Original Article</div>
    <div className="flex items-center gap-4">
      <div className="relative w-24 h-8">
        <Image
          src="/images/Fox_News_Channel_logo.svg"
          alt="Fox News logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <a 
        href="https://www.foxbusiness.com/economy/trump-softbank-ceo-announce-100b-investment-critical-infrastructure-ai"
        className="text-lg font-medium text-gray-900 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        SoftBank CEO and Trump announce $100 billion investment in U.S. by firm
      </a>
    </div>
  </div>
);

export default ArticleHeader; 