import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, X, Image as ImageIcon, Plus, ArrowUp } from 'lucide-react';
import { LookbookCategory } from './types';

// Structured Lookbook Categories with Page Numbers (from user screenshot index)
const categories: LookbookCategory[] = [
  {
    name: 'Chairs & Benches',
    pageNumber: 6,
    description: 'Sleek, ergonomically designed seating options that provide optimal support and sophisticated styling for dining and lounge environments.',
    images: [
      '/lookbook/chair-and-benches/hero-1.jpeg',
      '/lookbook/chair-and-benches/Screenshot 2026-06-19 144835.png',
      '/lookbook/chair-and-benches/Screenshot 2026-06-19 144849.png',
      '/lookbook/chair-and-benches/Screenshot 2026-06-19 144905.png',
      '/lookbook/chair-and-benches/Screenshot 2026-06-19 144925.png',
      '/lookbook/chair-and-benches/Screenshot 2026-06-19 144939.png',
      '/lookbook/chair-and-benches/Screenshot 2026-06-19 144959.png',
      '/lookbook/chair-and-benches/Screenshot 2026-06-19 145008.png'
    ]
  },
  {
    name: 'Clubchairs',
    pageNumber: 26,
    description: 'Deep, comfortable clubchairs wrapped in high-durability leathers and premium fabrics, tailored for lobbies and luxury suites.',
    images: [
      '/lookbook/clubchairs/hero.png',
      '/lookbook/clubchairs/Screenshot 2026-06-19 171824.png',
      '/lookbook/clubchairs/Screenshot 2026-06-19 171901.png',
      '/lookbook/clubchairs/Screenshot 2026-06-19 171908.png',
      '/lookbook/clubchairs/Screenshot 2026-06-19 171918.png',
      '/lookbook/clubchairs/Screenshot 2026-06-19 171927.png',
      '/lookbook/clubchairs/Screenshot 2026-06-19 171942.png',
      '/lookbook/clubchairs/Screenshot 2026-06-19 172010.png'
    ]
  },
  {
    name: 'Barstools',
    pageNumber: 36,
    description: 'High-profile counter and bar seating solutions featuring solid framing and customizable height finishes.',
    images: [
      '/lookbook/barstools/hero-3.jpeg',
      '/lookbook/barstools/Screenshot 2026-06-19 172109.png',
      '/lookbook/barstools/Screenshot 2026-06-19 172118.png',
      '/lookbook/barstools/Screenshot 2026-06-19 172125.png',
      '/lookbook/barstools/Screenshot 2026-06-19 172132.png'
    ]
  },
  {
    name: 'Sofas',
    pageNumber: 42,
    description: 'Modular and structural sofas crafted for lobby lounge and hospitality guestroom applications, adhering to fire compliance standard CAL 133.',
    images: [
      '/lookbook/sofas/hero-4.jpeg',
      '/lookbook/sofas/Screenshot 2026-06-19 172157.png',
      '/lookbook/sofas/Screenshot 2026-06-19 172205.png',
      '/lookbook/sofas/Screenshot 2026-06-19 172212.png',
      '/lookbook/sofas/Screenshot 2026-06-19 172221.png',
      '/lookbook/sofas/Screenshot 2026-06-19 172231.png',
      '/lookbook/sofas/Screenshot 2026-06-19 172236.png',
      '/lookbook/sofas/Screenshot 2026-06-19 172249.png',
      '/lookbook/sofas/Screenshot 2026-06-19 172304.png'
    ]
  },
  {
    name: 'Dining Tables',
    pageNumber: 60,
    description: 'Custom stone and oak-top dining tables engineered to survive heavy commercial usage while maintaining a sleek, natural profile.',
    images: [
      '/lookbook/dining-tables/hero-5.jpeg',
      '/lookbook/dining-tables/Screenshot 2026-06-19 172404.png',
      '/lookbook/dining-tables/Screenshot 2026-06-19 172411.png',
      '/lookbook/dining-tables/Screenshot 2026-06-19 172419.png',
      '/lookbook/dining-tables/Screenshot 2026-06-19 172433.png',
      '/lookbook/dining-tables/Screenshot 2026-06-19 172442.png'
    ]
  },
  {
    name: 'Slim Collection Tables',
    pageNumber: 74,
    description: 'Minimalist console tables, sideboards, and writing desks with thin iron framing, designed to maximize functional space.',
    images: [
      '/lookbook/slim-collection-tables/hero-6.jpeg',
      '/lookbook/slim-collection-tables/Screenshot 2026-06-19 172447.png',
      '/lookbook/slim-collection-tables/Screenshot 2026-06-19 172459.png',
      '/lookbook/slim-collection-tables/Screenshot 2026-06-19 172510.png',
      '/lookbook/slim-collection-tables/Screenshot 2026-06-19 172518.png',
      '/lookbook/slim-collection-tables/Screenshot 2026-06-19 172527.png',
      '/lookbook/slim-collection-tables/Screenshot 2026-06-19 172540.png',
      '/lookbook/slim-collection-tables/Screenshot 2026-06-19 172553.png'
    ]
  },
  {
    name: 'Occasional Tables',
    pageNumber: 104,
    description: 'Bespoke end tables, coffee tables, and nesting sets serving as functional focal points for guestroom bedside and lounge groupings.',
    images: [
      '/lookbook/occasional-tables/hero-7.jpeg',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172655.png',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172701.png',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172709.png',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172714.png',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172723.png',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172728.png',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172735.png',
      '/lookbook/occasional-tables/Screenshot 2026-06-19 172742.png'
    ]
  },
  {
    name: 'Cabinets',
    pageNumber: 116,
    description: 'Walnut credenzas, double-door wardrobes, and custom millwork storage solutions constructed for high-capacity hotel storage.',
    images: [
      '/lookbook/cabinets/hero-8.jpeg',
      '/lookbook/cabinets/Screenshot 2026-06-19 172828.png',
      '/lookbook/cabinets/Screenshot 2026-06-19 172836.png',
      '/lookbook/cabinets/Screenshot 2026-06-19 172843.png',
      '/lookbook/cabinets/Screenshot 2026-06-19 172853.png',
      '/lookbook/cabinets/Screenshot 2026-06-19 172901.png',
      '/lookbook/cabinets/Screenshot 2026-06-19 172908.png',
      '/lookbook/cabinets/Screenshot 2026-06-19 172918.png'
    ]
  },
  {
    name: 'Leather & Fabric Colours',
    pageNumber: 128,
    description: 'A curated spectrum of contract-grade leather and textile swatches meeting heavy double-rub ratings (Wyzenbeek/Martindale).',
    images: [
      '/lookbook/leather-fabric-colours/hero.jpeg',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173008.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173017.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173026.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173036.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173052.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173101.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173106.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173113.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173119.png',
      '/lookbook/leather-fabric-colours/Screenshot 2026-06-19 173128.png'
    ]
  }
];

const offeringsMap: Record<string, { title: string; defaultPage: number }> = {
  'premium-casegoods': { title: 'Premium Casegoods', defaultPage: 6 }, // Chairs & Benches
  'soft-seating': { title: 'Soft Seating', defaultPage: 42 }, // Sofas
  'bespoke-furnishings': { title: 'Bespoke Furnishings', defaultPage: 74 }, // Slim Collection Tables
  'doors-windows': { title: 'Doors & Windows', defaultPage: 128 }, // Leather & Fabric Colours
  'theater-auditorium-seating': { title: 'Theater & Auditorium Seating', defaultPage: 6 }, // Chairs & Benches
};

export default function OfferingLookbookPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const offeringInfo = slug ? offeringsMap[slug] : null;
  const defaultPage = offeringInfo ? offeringInfo.defaultPage : 6;
  
  // Set initially selected category based on offering default
  const [activeCategory, setActiveCategory] = useState<LookbookCategory>(
    categories.find(c => c.pageNumber === defaultPage) || categories[0]
  );
  
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show back-to-top button on mobile view
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top of the page when mounting
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle escape key for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        handleNextImage();
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        handlePrevImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, activeCategory]);

  if (!offeringInfo) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl font-light text-brand-charcoal mb-4">Offering lookbook not found.</h2>
        <button 
          onClick={() => navigate('/services')} 
          className="flex items-center space-x-2 text-brand-gold hover:text-brand-plum transition-colors font-medium text-sm"
        >
          <ArrowLeft size={16} />
          <span>Back to Services</span>
        </button>
      </div>
    );
  }

  const handleNextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % activeCategory.images.length);
  };

  const handlePrevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + activeCategory.images.length) % activeCategory.images.length);
  };

  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal">
      
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 md:pt-32 pb-24">
        
        {/* Dynamic Header */}
        <div className="mb-12 border-b border-brand-charcoal/5 pb-6">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full mb-3">
            Digital Lookbook
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal leading-none">
            {offeringInfo.title}
          </h1>
          <p className="text-sm text-brand-charcoal/50 font-light mt-3 max-w-2xl">
            Browse our curated collections, specify material components, and download design schematics. Custom imagery uploading capabilities will be fully enabled in your dashboard.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Table of Contents (Index Menu) */}
          <div className="w-full lg:w-80 lg:sticky lg:top-28 bg-brand-cream border border-brand-charcoal/10 rounded-xl p-8 shadow-xxs">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold font-bold block">
              PURE Furniture
            </span>
            <span className="font-serif text-3xl font-light text-brand-charcoal block mt-1.5 mb-8">
              Index
            </span>

            {/* List of categories */}
            <div className="space-y-4">
              {categories.map((category) => {
                const isActive = activeCategory.name === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => {
                      setActiveCategory(category);
                      // Scroll to images section on mobile/tablet view (screens smaller than lg breakpoint: 1024px)
                      if (window.innerWidth < 1024) {
                        const galleryElement = document.getElementById('lookbook-gallery');
                        if (galleryElement) {
                          const yOffset = -100; // Offset for sticky navbar + breathing space
                          const y = galleryElement.getBoundingClientRect().top + window.scrollY + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`flex items-center justify-between w-full group text-left cursor-pointer transition-all duration-300 relative py-1 text-sm ${
                      isActive 
                        ? 'text-brand-plum font-semibold' 
                        : 'text-brand-charcoal/70 hover:text-brand-charcoal'
                    }`}
                  >
                    <div className="flex items-center space-x-2 flex-grow pr-4">
                      {isActive && (
                        <motion.span 
                          layoutId="activeDot"
                          className="w-1.5 h-1.5 bg-brand-plum rounded-full"
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        />
                      )}
                      <span className={`tracking-wide font-light ${isActive ? 'font-semibold pl-1' : ''}`}>
                        {category.name}
                      </span>
                    </div>

                    {/* Dotted spacer element for aesthetic styling */}
                    <div className="hidden sm:block flex-grow border-b border-dotted border-brand-charcoal/15 mx-2 group-hover:border-brand-charcoal/30 transition-colors" />

                    <span className={`text-[11px] font-mono tracking-widest ${isActive ? 'text-brand-plum font-bold' : 'text-brand-charcoal/40'}`}>
                      {category.images.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Catalog Gallery Grid */}
          <div id="lookbook-gallery" className="w-full lg:flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                {/* Category Header details */}
                <div className="mb-8">
                  <h2 className="text-2xl font-light text-brand-charcoal tracking-tight mb-2">
                    {activeCategory.name}
                  </h2>
                  <p className="text-sm font-light text-brand-charcoal/70 leading-relaxed tracking-wide max-w-xl">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Grid of Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {activeCategory.images.map((imgUrl, imgIdx) => (
                    <motion.div
                      key={imgUrl}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group relative aspect-4/3 rounded-xl overflow-hidden bg-brand-charcoal/5 border border-brand-charcoal/10 cursor-zoom-in shadow-xxs hover:shadow-xs"
                      onClick={() => setLightboxIndex(imgIdx)}
                    >
                      <img
                        src={imgUrl}
                        alt={`${activeCategory.name} design asset ${imgIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                        loading="lazy"
                      />
                      
                      {/* Dark overlay showing zoom icon */}
                      <div className="absolute inset-0 bg-brand-charcoal/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-2 rounded-full text-white text-xs font-medium uppercase tracking-widest flex items-center space-x-2">
                          <ImageIcon size={14} />
                          <span>View Detail</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-charcoal/95 backdrop-blur-md flex items-center justify-center"
          >
            {/* Modal Header */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/70 select-none z-10">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  {offeringInfo.title}
                </span>
                <span className="text-sm font-light text-white mt-1">
                  {activeCategory.name} — Asset {lightboxIndex + 1} of {activeCategory.images.length}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left/Right Navigation */}
            <button
              onClick={handlePrevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer hidden md:block"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={handleNextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer hidden md:block"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Image View */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[80vh] overflow-hidden rounded-lg border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeCategory.images[lightboxIndex]}
                alt={`${activeCategory.name} detail view`}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Mobile swipe indicator / controls */}
            <div className="absolute bottom-8 flex md:hidden items-center justify-center space-x-6 text-white/80 select-none">
              <button onClick={handlePrevImage} className="p-3 bg-white/5 border border-white/10 rounded-full">
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs tracking-widest font-mono">
                {lightboxIndex + 1} / {activeCategory.images.length}
              </span>
              <button onClick={handleNextImage} className="p-3 bg-white/5 border border-white/10 rounded-full">
                <ChevronRight size={20} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Back to Top Button on Mobile */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 lg:hidden p-3 rounded-full bg-brand-plum text-white shadow-md hover:bg-brand-charcoal transition-all border border-brand-plum/10 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
