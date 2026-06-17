import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionSection from './components/MissionSection';
import ProjectCarousel from './components/ProjectCarousel';
import FeatureList from './components/FeatureList';
import CinematicSection from './components/CinematicSection';
import ProcessSection from './components/ProcessSection';
import StatsBand from './components/StatsBand';
import BrandStrip from './components/BrandStrip';
import InsightsGrid from './components/InsightsGrid';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal antialiased selection:bg-brand-plum selection:text-white">
      {/* Sticky Header Nav */}
      <Navbar />

      {/* Page Sections in Sequence */}
      <main>
        {/* Full-bleed Hero Banner */}
        <Hero />

        {/* Embedded Inline-Image Mission Statement & CTA Box */}
        <MissionSection />


        {/* Draggable Projects Horizontal Showcase */}
        <ProjectCarousel />

        {/* Split details layout with vertical interactive features and sticky image swap */}
        <FeatureList />

        {/* Cinematic Parallax Overlay Banner */}
        <CinematicSection />

        {/* Methodologies & 4-Step Procurement Row */}
        <ProcessSection />

        {/* Count-up Metrics Stats Band (Deep Plum Background) */}
        <StatsBand />

        {/* Brand Logos Placeholder Strip */}
        <BrandStrip />

        {/* 1 Large + 3 Small Editorial Insights Grid */}
        <InsightsGrid />

        {/* Accordion FAQ Section */}
        <FAQ />

        {/* Closing Pool Background Banner CTA */}
        <ClosingCTA />

        {/* Contact Inquiry Form & HQ Sourcing Office Locations */}
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

export default App;