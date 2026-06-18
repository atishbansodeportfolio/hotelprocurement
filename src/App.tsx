import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import ProjectDetailsPage from './components/ProjectDetailsPage';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          const navHeight = 80;
          const targetPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    } else if (pathname === '/') {
      // Smooth scroll back to top of homepage when navigating back without hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash, pathname]);

  return null;
}

function Home() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="bg-brand-cream min-h-screen text-brand-charcoal antialiased selection:bg-brand-plum selection:text-white">
        {/* Sticky Header Nav */}
        <Navbar />

        {/* Scroll helper */}
        <ScrollToHash />

        {/* Page Sections in Sequence */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectt/:clientName" element={<ProjectDetailsPage />} />
          </Routes>
        </main>

        {/* Site Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;