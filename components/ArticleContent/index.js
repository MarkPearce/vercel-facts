'use client';

import React from 'react';
import ImageWithFallback from '../ImageWithFallback';
import Highlight from '../Highlight';
import { highlights } from '../../data/highlights';

const ArticleContent = ({ activeHighlight, setActiveHighlight }) => {
  return (
    <div className="prose max-w-none">
      <div className="mb-4">
        President-elect Donald Trump and Softbank CEO Masayoshi Son announced Monday a{' '}
        <Highlight 
          text="$100 billion investment" 
          details={highlights["$100 billion investment"]}
          activeHighlight={activeHighlight}
          setActiveHighlight={setActiveHighlight}
        /> in America aimed at generating 100,000 new jobs.
      </div>

      <div className="mb-4">
        Trump, speaking at Mar-a-Lago after meeting Son there, called the investment a{' '}
        <Highlight 
          text="monumental demonstration of confidence" 
          details={highlights["monumental demonstration of confidence"]}
          activeHighlight={activeHighlight}
          setActiveHighlight={setActiveHighlight}
        /> in America's future.
      </div>

      <ImageWithFallback 
        src="/images/image-1.webp"
        alt="President-elect Donald Trump delivers remarks next to Chairman and CEO of SoftBank Masayoshi Son"
      />

      <div className="mb-4">
        Son said he is{' '}
        <Highlight 
          text="very excited" 
          details={highlights["very excited"]}
          activeHighlight={activeHighlight}
          setActiveHighlight={setActiveHighlight}
        /> about the investment.
      </div>

      <div className="mb-4">
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
        /> with his victory," he added.
      </div>

      <ImageWithFallback 
        src="/images/image-2.webp"
        alt="President-elect Donald Trump, left, walks out with SoftBank Group Corp founder and CEO Masayoshi Son"
      />

      <div className="mb-4">
        Trump also said "we{' '}
        <Highlight 
          text="will not rest" 
          details={highlights["will not rest"]}
          activeHighlight={activeHighlight}
          setActiveHighlight={setActiveHighlight}
        /> until America is richer, safer and stronger than it has ever been before."
      </div>

      <div className="mb-4">
        Karoline Leavitt, the incoming White House press secretary, said earlier on FOX Business' "Varney & Company" that the investment is a{' '}
        <Highlight 
          text="huge win" 
          details={highlights["huge win"]}
          activeHighlight={activeHighlight}
          setActiveHighlight={setActiveHighlight}
        /> for Trump, and it's another example of the Trump effect."
      </div>

      <div className="mb-4">
        The newspaper reported that SoftBank currently has around $30 billion of cash in hand, so it is{' '}
        <Highlight 
          text="unclear how the funding commitment will be met" 
          details={highlights["unclear how the funding commitment will be met"]}
          activeHighlight={activeHighlight}
          setActiveHighlight={setActiveHighlight}
        />.
      </div>

      <div className="mb-4">
        The company previously launched the SoftBank Vision Fund – a $100 billion venture capital fund that was marked by flops including{' '}
        <Highlight 
          text="WeWork and construction-focused startup Katerra" 
          details={highlights["WeWork and construction-focused startup Katerra"]}
          activeHighlight={activeHighlight}
          setActiveHighlight={setActiveHighlight}
        />, according to the Journal.
      </div>

      <ImageWithFallback 
        src="/images/image-3.webp"
        alt="SoftBank's Vision Fund invested in WeWork, an office-sharing company that filed for bankruptcy last year"
      />
    </div>
  );
};

export default ArticleContent; 