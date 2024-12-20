'use client';

import React from 'react';
import ImageWithFallback from '../ImageWithFallback';
import Highlight from '../Highlight';
import { highlights } from '../../data/highlights';

const ArticleContent = ({ activeHighlight, setActiveHighlight }) => {
  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
      SoftBank CEO and Trump announce $100 billion investment in U.S. by firm
      </h1>
      
      <div className="text-gray-600 text-sm mb-6">
        By Greg Norman | Fox Business | December 16, 2016
      </div>

      <div className="prose prose-lg max-w-none">
        <figure className="mb-6">
          <ImageWithFallback 
            src="/images/image-1.webp"
            alt="President-elect Donald Trump delivers remarks next to Chairman and CEO of SoftBank Masayoshi Son"
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-gray-600 mt-2 text-center">
            President-elect Donald Trump with SoftBank CEO Masayoshi Son at Trump Tower
          </figcaption>
        </figure>

        <div className="mb-6">
          President-elect Donald Trump and Softbank CEO Masayoshi Son announced Monday a{' '}
          <Highlight 
            text="$100 billion investment" 
            details={highlights["$100 billion investment"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          /> in America aimed at generating 100,000 new jobs.
        </div>

        <div className="mb-6">
          Trump, speaking at Mar-a-Lago after meeting Son there, called the investment "a monumental demonstration of confidence in America's future."
        </div>

        <div className="mb-6">
          Masa runs one of the largest companies in Japan and among the most successful investment and technology companies anywhere in the world, one of the{' '}
          <Highlight 
            text="most successful investors in the world" 
            details={highlights["most successful investors in the world"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />. And we've just concluded a very productive meeting," Trump said. "And today, I'm thrilled to announce that SoftBank will be investing $100 billion in America, creating{' '}
          <Highlight 
            text="100,000 American jobs at a minimum" 
            details={highlights["100,000 American jobs at a minimum"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />. And he's doing this because he feels{' '}
          <Highlight 
            text="very optimistic about our country since the election" 
            details={highlights["very optimistic about our country since the election"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />."
        </div>
        
        <div className="mb-6">
          "This historic investment is a monumental demonstration of confidence in America's future. And it will help ensure that{' '}
          <Highlight 
            text="artificial intelligence, emerging technologies and other industries of tomorrow" 
            details={highlights["artificial intelligence, emerging technologies and other industries of tomorrow"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          /> are built, created and grown right here in the USA," Trump added.
        </div>

        <figure className="mb-6">
          <ImageWithFallback 
            src="/images/image-1.webp"
            alt="President-elect Donald Trump delivers remarks next to Chairman and CEO of SoftBank Masayoshi Son"
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-gray-600 mt-2 text-center">
            President-elect Donald Trump with SoftBank CEO Masayoshi Son at Trump Tower
          </figcaption>
        </figure>

        <div className="mb-6">
          Trump also said "we will not rest until{' '}
          <Highlight 
            text="America is richer, safer and stronger than it has ever been before" 
            details={highlights["America is richer, safer and stronger than it has ever been before"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />."
        </div>

        <div className="mb-6">
          Son said he is{' '}
          <Highlight 
            text="very excited" 
            details={highlights["very excited"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          /> about the investment.
        </div>

        <div className="mb-6">
          "I would really like to celebrate the{' '}
          <Highlight 
            text="great victory" 
            details={highlights["great victory"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          /> of President Trump, and my confidence level to the economy of the United States has{' '}
          <Highlight 
            text="tremendously increased" 
            details={highlights["tremendously increased"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          /> with his victory," he added. "So because of that, I'm now excited to commit this $100 billion and 100,000 jobs into the United States."
        </div>

        <figure className="mb-6">
          <ImageWithFallback 
            src="/images/image-2.webp"
            alt="President-elect Donald Trump, left, walks out with SoftBank Group Corp founder and CEO Masayoshi Son"
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-gray-600 mt-2 text-center">
            Trump and Son leaving a meeting at Trump Tower in New York
          </figcaption>
        </figure>

        <div className="mb-6">
          Karoline Leavitt, the incoming White House press secretary, said earlier on FOX Business' "Varney & Company" that the investment is{' '}
          <Highlight 
            text="huge win" 
            details={highlights["huge win"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          /> for Trump, and it's another example of the Trump effect."
        </div>

        <div className="mb-6">
          "This is President Trump delivering on the promise he made to the American people on the campaign trail that he was going to make the United States of America the manufacturing superpower of the world," Leavitt added.
        </div>

        <figure className="mb-6">
          <ImageWithFallback 
            src="/images/image-3.webp"
            alt="SoftBank's Vision Fund invested in WeWork, an office-sharing company that filed for bankruptcy last year"
            className="w-full rounded-lg"
          />
          <figcaption className="text-sm text-gray-600 mt-2 text-center">
            WeWork, one of SoftBank's major investments, filed for bankruptcy in 2023
          </figcaption>
        </figure>

        <div className="mb-6">
          A person involved with the announcement today at Mar-a-Lago told The Wall Street Journal that SoftBank plans to complete the investments before Trump leaves office in 2029.
        </div>

        <div className="mb-6">
          The newspaper reported that SoftBank currently has around $30 billion of cash in hand, so it is{' '}
          <Highlight 
            text="unclear how the funding commitment will be met" 
            details={highlights["unclear how the funding commitment will be met"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />.
        </div>

        <div className="mb-6">
          The company previously launched the SoftBank Vision Fund – a $100 billion venture capital fund that was marked by flops including{' '}
          <Highlight 
            text="WeWork and construction-focused startup Katerra" 
            details={highlights["WeWork and construction-focused startup Katerra"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />, according to the Journal.
        </div>

        <div className="mb-6">
          Son was cited as saying in October that he believes{' '}
          <Highlight 
            text="computers will possess human-level cognitive abilities within the next two to three years" 
            details={highlights["computers will possess human-level cognitive abilities within the next two to three years"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />.
        </div>

        <div className="mb-6">
          "{' '}
          <Highlight 
            text="A gold rush of intelligence has arrived" 
            details={highlights["A gold rush of intelligence has arrived"]}
            activeHighlight={activeHighlight}
            setActiveHighlight={setActiveHighlight}
          />. The one who goes fastest will win," Son reportedly said at the SoftBank World 2024 conference.
        </div>
      </div>
    </article>
  );
};

export default ArticleContent; 