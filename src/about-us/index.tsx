import React, { useEffect } from 'react';
import AboutUsHero from './AboutUsHero';
import AboutUsIntro from './AboutUsIntro';
import AboutUsPillars from './AboutUsPillars';
import AboutUsSetsApart from './AboutUsSetsApart';
import AboutUsHowItsDone from './AboutUsHowItsDone';
import AboutUsGallery from './AboutUsGallery';
import AboutUsQuote from './AboutUsQuote';
import AboutUsTeam from './AboutUsTeam';
import SEO from '../components/SEO';

export default function AboutUsPage() {
  useEffect(() => {
    // Scroll window to top when navigating to the About Us page
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="bg-brand-cream">
      <SEO 
        title="About Us | Hospitality Sourcing Experts" 
        description="Learn about Divine Design & Procurement, our core values, and our founder Yogin Patel. Discover how we lead custom hotel furniture sourcing and global turnkey logistics."
        keywords="about divine design, hotel procurement leadership, hospitality sourcing team, Yogin Patel, hotel FF&E experience"
      />
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
