'use client';

import Image from 'next/image';

const ArticleHeader = () => (
  <div className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-colors duration-150">
    <a 
      href="https://www.foxbusiness.com/economy/trump-softbank-ceo-announce-100b-investment-critical-infrastructure-ai"
      className="flex items-center justify-between gap-4 group p-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-lg font-medium group-hover:underline">
          Original Article
        </span>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-500"
        >
          <path 
            d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="relative w-24 h-8">
        <Image
          src="/images/Fox_News_Channel_logo.svg"
          alt="Fox News logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
    </a>
  </div>
);

export default ArticleHeader; 