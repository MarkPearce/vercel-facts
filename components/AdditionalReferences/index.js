'use client';

import React from 'react';

const references = [
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
];

const AdditionalReferences = () => {
  return (
    <div className="bg-gray-50 p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Additional References</h2>
      <div className="grid grid-cols-1 gap-4">
        {references.map((ref, index) => (
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
  );
};

export default AdditionalReferences; 