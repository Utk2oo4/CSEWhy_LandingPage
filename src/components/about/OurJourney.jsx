import React from 'react';
import { journeyBlocks } from '../../data/aboutData';

export default function OurJourney() {
  return (
    <section className="about-journey-section" aria-labelledby="about-journey-title">
      {journeyBlocks.map((block) => {
        const isBelief = block.id === 'belief';
        const isGeography = block.id === 'geography';
        const isBeyond = block.id === 'beyond-resources';

        if (isBelief) {
          return (
            <div key={block.id} className="about-journey-row about-journey-row--belief">
              <div className="about-journey-block about-journey-block--belief">
                <h3 className="about-journey-heading">
                  <span>{block.headingPart1}</span>
                  <span className="about-journey-heading-highlight">{block.headingPart2}</span>
                </h3>
                <div className="about-journey-body">
                  {block.paragraphs.map((p, idx) => (
                    <p key={idx} className="about-journey-para">
                      {p}
                    </p>
                  ))}

                  {block.pullQuote && (
                    <blockquote className="about-journey-pullquote">
                      {block.pullQuote}
                    </blockquote>
                  )}

                  {block.closingParagraph && (
                    <p className="about-journey-para about-journey-para--closing">
                      {block.closingParagraph}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        }

        if (isGeography) {
          return (
            <div key={block.id} className="about-journey-row about-journey-row--geography">
              <div className="about-journey-block">
                {block.eyebrow && (
                  <p className="about-journey-eyebrow">{block.eyebrow}</p>
                )}
                <h3 className="about-journey-heading">
                  <span>{block.headingPart1}</span>
                  <span className="about-journey-heading-highlight">{block.headingPart2}</span>
                </h3>
                <div className="about-journey-body">
                  {block.paragraphs.map((p, idx) => {
                    const isEmphasis =
                      p === "UPSC preparation isn't the privilege of a particular city." ||
                      p === 'CSEWhy is built around that belief.';
                    return (
                      <p
                        key={idx}
                        className={`about-journey-para ${isEmphasis ? 'about-journey-para--emphasis' : ''}`}
                      >
                        {p}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        }

        // beyond-resources block
        return (
          <div key={block.id} className="about-journey-row about-journey-row--beyond">
            <div className="about-journey-block">
              <h3 className="about-journey-heading">
                <span>{block.headingPart1}</span>
                <span className="about-journey-heading-highlight">{block.headingPart2}</span>
              </h3>
              <div className="about-journey-body">
                {block.paragraphs.map((p, idx) => {
                  const isEmphasis =
                    p === 'Preparation is not only about collecting material.' ||
                    p === 'That idea became CSEWhy.';
                  return (
                    <p
                      key={idx}
                      className={`about-journey-para ${isEmphasis ? 'about-journey-para--emphasis' : ''}`}
                    >
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

// Alias export for flexibility
export { OurJourney as WhyCSEWhy };
