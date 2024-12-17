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
        <path d="M50 10 L90 80 L10 80 Z" fill="url(#pyramidGradient)" />
        <circle cx="50" cy="45" r="15" fill="#2563eb" />
        <circle cx="50" cy="45" r="7" fill="#ffffff" />
        <g transform="translate(20, 65) scale(0.6)">
          <path d="M30 15 L70 15 M50 15 L50 25" stroke="#2563eb" strokeWidth="4" />
          <circle cx="30" cy="25" r="10" fill="none" stroke="#2563eb" strokeWidth="4" />
          <circle cx="70" cy="25" r="10" fill="none" stroke="#2563eb" strokeWidth="4" />
        </g>
      </svg>
    </div>
  </div>
);

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

const FactCheck = () => {
  const [activeHighlight, setActiveHighlight] = useState(null);

  const highlights = {
    "100,000 jobs": {
      summary: "This claim is unverified. While SoftBank previously promised 50,000 jobs in 2016, the actual job creation numbers were never independently verified.",
      source: "CNBC",
      link: "https://www.cnbc.com/2024/12/16/softbank-ceo-to-announce-100-billion-investment-in-us-during-visit-with-trump.html"
    },
    "unclear how the funding commitment will be met": {
      summary: "Accurate. SoftBank has $30B cash on hand. The funding structure and timeline for the full $100B commitment remains unclear.",
      source: "Bloomberg",
      link: "https://www.bloomberg.com/news/articles/2024-12-16/softbank-s-son-to-pledge-100-billion-in-us-investments-cnbc"
    },
    "WeWork and construction-focused startup Katerra": {
      summary: "Accurate. The previous Vision Fund had significant losses, with WeWork filing for bankruptcy in 2023 and Katerra closing in 2021.",
      source: "Reuters",
      link: "https://www.reuters.com/business/finance/softbank-ceo-announce-100-bln-investment-us-during-visit-trump-cnbc-reports-2024-12-16/"
    }
  };

  const Highlight = ({ text, details }) => (
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

  return (
    <div className="min-h-screen bg-gray-50">
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

      <main className="w-full max-w-screen-xl mx-auto">
        <div className="max-w-[800px] mx-auto px-4 py-8">
          <div className="bg-white shadow rounded-lg overflow-visible">
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
                  Trump, SoftBank CEO announce $100B investment in critical infrastructure, AI
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="prose max-w-none">
                <p className="mb-4">
                  President-elect Donald Trump and Softbank CEO Masayoshi Son announced Monday a <Highlight text="$100 billion investment" details={highlights["100,000 jobs"]} /> in America aimed at generating 100,000 new jobs.
                </p>

                <p className="mb-4">
                  Trump, speaking at Mar-a-Lago after meeting Son there, called the investment "a monumental demonstration of confidence in America's future."
                </p>

                <ImageWithFallback 
                  src="/images/image-1.webp"
                  alt="President-elect Donald Trump delivers remarks next to Chairman and CEO of SoftBank Masayoshi Son, at Mar-a-Lago in Palm Beach, Fla., on Monday, Dec. 16"
                />

                <p className="mb-4">
                  "Masa runs one of the largest companies in Japan and among the most successful investment and technology companies anywhere in the world, one of the most successful investors in the world. And we've just concluded a very productive meeting," Trump said. "And today, I'm thrilled to announce that SoftBank will be investing $100 billion in America, creating 100,000 American jobs at a minimum. And he's doing this because he feels very optimistic about our country since the election."
                </p>

                <ImageWithFallback 
                  src="/images/image-2.webp"
                  alt="President-elect Donald Trump, left, walks out with SoftBank Group Corp founder and CEO Masayoshi Son to speak to members of the media in the lobby at Trump Tower in New York City in December 2016"
                />

                <p className="mb-4">
                  "This historic investment is a monumental demonstration of confidence in America's future. And it will help ensure that artificial intelligence, emerging technologies and other industries of tomorrow are built, created and grown right here in the USA," Trump added.
                </p>

                <p className="mb-4">
                  Trump also said "we will not rest until America is richer, safer and stronger than it has ever been before."
                </p>

                <p className="mb-4">
                  Son said he is "very excited" about the investment.
                </p>

                <p className="mb-4">
                  "I would really like to celebrate the great victory of President Trump, and my confidence level to the economy of the United States has tremendously increased with his victory," he added. "So because of that, I'm now excited to commit this $100 billion and 100,000 jobs into the United States."
                </p>

                <p className="mb-4">
                  Karoline Leavitt, the incoming White House press secretary, said earlier on FOX Business' "Varney & Company" that the investment is "a huge win for Trump, and it's another example of the Trump effect."
                </p>

                <p className="mb-4">
                  "This is President Trump delivering on the promise he made to the American people on the campaign trail that he was going to make the United States of America the manufacturing superpower of the world," Leavitt added.
                </p>

                <p className="mb-4">
                  A person involved with the announcement today at Mar-a-Lago told The Wall Street Journal that SoftBank plans to complete the investments before Trump leaves office in 2029.
                </p>

                <p className="mb-4">
                  The newspaper reported that SoftBank currently has around $30 billion of cash in hand, so it is <Highlight text="unclear how the funding commitment will be met" details={highlights["unclear how the funding commitment will be met"]} />.
                </p>

                <p className="mb-4">
                  The company previously launched the SoftBank Vision Fund – a $100 billion venture capital fund that was marked by flops including <Highlight text="WeWork and construction-focused startup Katerra" details={highlights["WeWork and construction-focused startup Katerra"]} />, according to the Journal.
                </p>

                <ImageWithFallback 
                  src="/images/image-3.webp"
                  alt="SoftBank's Vision Fund invested in WeWork, an office-sharing company that filed for bankruptcy last year"
                />

                <p className="mb-4">
                  Son was cited as saying in October that he believes computers will possess human-level cognitive abilities within the next two to three years.
                </p>

                <p className="mb-4">
                  "A gold rush of intelligence has arrived. The one who goes fastest will win," Son reportedly said at the SoftBank World 2024 conference.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Additional References</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    title: "SoftBank CEO and Trump announce $100 billion investment in U.S.",
                    publisher: "CNBC",
                    date: "December 16, 2024",
                    link: "https://www.cnbc.com/2024/12/16/softbank-ceo-to-announce-100-billion-investment-in-us-during-visit-with-trump.html"
                  },
                  {
                    title: "Trump, SoftBank CEO announce $100 billion US investment, in echo of 2016 event",
                    publisher: "Reuters",
                    date: "December 16, 2024",
                    link: "https://www.reuters.com/business/finance/softbank-ceo-announce-100-bln-investment-us-during-visit-trump-cnbc-reports-2024-12-16/"
                  },
                  {
                    title: "SoftBank's Masayoshi Son Pledges $100 Billion US Investment",
                    publisher: "Bloomberg",
                    date: "December 16, 2024",
                    link: "https://www.bloomberg.com/news/articles/2024-12-16/softbank-s-son-to-pledge-100-billion-in-us-investments-cnbc"
                  }
                ].map((ref, index) => (
                  <div key={index} className="relative bg-white rounded-lg shadow p-4">
                    <div className="absolute top-2 right-2 text-gray-400 text-sm">{index + 1}</div>
                    <a 
                      href={ref.link}
                      className="text-blue-600 hover:underline font-medium block mb-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {ref.title}
                    </a>
                    <div className="text-sm text-gray-600">{ref.publisher}</div>
                    <div className="text-sm text-gray-500">{ref.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FactCheck;