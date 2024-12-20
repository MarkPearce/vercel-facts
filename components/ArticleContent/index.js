'use client';

import React from 'react';
import ImageWithFallback from '../ImageWithFallback';
import Highlight from '../Highlight';
import { highlights } from '../../data/highlights';

const ArticleContent = ({ activeHighlight, setActiveHighlight }) => {
  if (!highlights) {
    console.error('Highlights data not loaded');
    return null;
  }

  return (
    <div className="prose max-w-none">
      <p className="mb-4">
        President-elect Donald Trump and Softbank CEO Masayoshi Son announced Monday a{' '}
        <Highlight 
          text="$100 billion investment" 
          details={highlights["$100 billion investment"]} 
          activeHighlight={activeHighlight} 
          setActiveHighlight={setActiveHighlight} 
        /> in America aimed at generating 100,000 new jobs.
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
        The newspaper reported that SoftBank currently has around $30 billion of cash in hand, so it is{' '}
        <Highlight text="unclear how the funding commitment will be met" details={highlights["unclear how the funding commitment will be met"]} activeHighlight={activeHighlight} setActiveHighlight={setActiveHighlight} />.
      </p>

      <p className="mb-4">
        The company previously launched the SoftBank Vision Fund – a $100 billion venture capital fund that was marked by flops including{' '}
        <Highlight text="WeWork and construction-focused startup Katerra" details={highlights["WeWork and construction-focused startup Katerra"]} activeHighlight={activeHighlight} setActiveHighlight={setActiveHighlight} />, according to the Journal.
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
  );
};

export default ArticleContent; 