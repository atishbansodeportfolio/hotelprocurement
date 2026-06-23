import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import ProjectDetailsPage from './projects';
import ProjectsOverviewPage from './projects/ProjectsOverviewPage';
import AboutUsPage from './about-us';
import ServicesPage from './services';
import OfferingLookbookPage from './services/OfferingLookbookPage';
import HomeLookbookSection from './components/HomeLookbookSection';
import HowItsDonePage from './how-its-done';

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

      {/* Draggable Projects Horizontal Showcase */}
      <ProjectCarousel />

      {/* Brand Logos Strip */}
      <BrandStrip />

      {/* Split details layout with vertical interactive features and sticky image swap */}
      <FeatureList />

      {/* Grid of Lookbook categories teaser showcase */}
      <HomeLookbookSection />

      {/* Cinematic Parallax Overlay Banner */}
      <CinematicSection />

      {/* Methodologies & 4-Step Procurement Row */}
      <ProcessSection />

      {/* Count-up Metrics Stats Band (Deep Plum Background) */}
      <StatsBand />

      {/* 1 Large + 3 Small Editorial Insights Grid */}
      <InsightsGrid />

      {/* Accordion FAQ Section */}
      <FAQ />

      {/* Closing Pool Background Banner CTA */}
      <ClosingCTA />
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
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/offerings/:slug" element={<OfferingLookbookPage />} />
            <Route path="/how-its-done" element={<HowItsDonePage />} />
            <Route path="/projects" element={<ProjectsOverviewPage />} />
            <Route path="/projects/:clientName" element={<ProjectDetailsPage />} />
          </Routes>
        </main>

        {/* Global Contact Form */}
        <Contact />

        {/* Site Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;