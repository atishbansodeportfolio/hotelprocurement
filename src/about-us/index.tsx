import React, { useEffect } from 'react';
import AboutUsHero from './AboutUsHero';
import AboutUsIntro from './AboutUsIntro';
import AboutUsPillars from './AboutUsPillars';
import AboutUsSetsApart from './AboutUsSetsApart';
import AboutUsHowItsDone from './AboutUsHowItsDone';
import AboutUsGallery from './AboutUsGallery';
import AboutUsQuote from './AboutUsQuote';
import AboutUsTeam from './AboutUsTeam';

export default function AboutUsPage() {
  useEffect(() => {
    // Scroll window to top when navigating to the About Us page
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="bg-brand-cream">
      {/* 1. Hero banner */}
      <AboutUsHero />

      {/* 2. Headline & Introduction */}
      <AboutUsIntro />

      {/* 3. Core Pillars (Vision, Mission, Global Reach) */}
      <AboutUsPillars />

      {/* 4. What Sets Us Apart */}
      <AboutUsSetsApart />

      {/* 5. Founders & Leadership Team (Meet Our Founder) */}
      <AboutUsTeam />

      {/* 6. How It's Done (Procurement Phases Teaser) */}
      <AboutUsHowItsDone />

      {/* 7. Crafting Excellence Gallery */}
      <AboutUsGallery />

      {/* 8. Brand Monogram & Quote block */}
      <AboutUsQuote />
    </div>
  );
}
