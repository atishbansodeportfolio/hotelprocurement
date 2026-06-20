import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../projects/types';
import { projects } from '../projects/data';

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Monitor tab visibility to prevent animation queueing bugs
  useEffect(() => {
    const handleVisibility = () => {
      setIsTabVisible(document.visibilityState === 'visible');
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  useEffect(() => {
    if (!isTabVisible || isDragging || (isHovered && !isMobile)) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 3000); // Auto slide every 3 seconds
    return () => clearInterval(timer);
  }, [isTabVisible, isDragging, isHovered, isMobile, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const getCardProps = (index: number) => {
    let offset = index - currentIndex;

    // Handle wrap around for circular carousel
    if (offset < -1 && offset < -projects.length / 2) {
      offset += projects.length;
    } else if (offset > 1 && offset > projects.length / 2) {
      offset -= projects.length;
    }

    return offset;
  };

  const getVariant = (offset: number) => {
    if (offset === 0) return 'center';
    if (offset === -1) return 'left';
    if (offset === 1) return 'right';
    if (offset < 0) return 'hiddenLeft';
    return 'hiddenRight';
  };

  const cardVariants = {
    center: {
      x: '0%',
      scale: 1,
      z: 20,
      rotateY: 0,
      zIndex: 10,
      opacity: 1,
      filter: 'none',
      pointerEvents: 'auto' as const,
    },
    left: (custom: { isMobile: boolean }) => ({
      x: custom.isMobile ? '-48%' : '-56%',
      scale: custom.isMobile ? 0.8 : 0.85,
      z: -160,
      rotateY: custom.isMobile ? -12 : -24,
      zIndex: 5,
      opacity: 0.35,
      filter: 'blur(1.5px)',
      pointerEvents: 'auto' as const,
    }),
    right: (custom: { isMobile: boolean }) => ({
      x: custom.isMobile ? '48%' : '56%',
      scale: custom.isMobile ? 0.8 : 0.85,
      z: -160,
      rotateY: custom.isMobile ? 12 : 24,
      zIndex: 5,
      opacity: 0.35,
      filter: 'blur(1.5px)',
      pointerEvents: 'auto' as const,
    }),
    hiddenLeft: (custom: { isMobile: boolean }) => ({
      x: custom.isMobile ? '-90%' : '-110%',
      scale: 0.7,
      z: -150,
      rotateY: -35,
      zIndex: 0,
      opacity: 0,
      filter: 'blur(4px)',
      pointerEvents: 'none' as const,
    }),
    hiddenRight: (custom: { isMobile: boolean }) => ({
      x: custom.isMobile ? '90%' : '110%',
      scale: 0.7,
      z: -150,
      rotateY: 35,
      zIndex: 0,
      opacity: 0,
      filter: 'blur(4px)',
      pointerEvents: 'none' as const,
    })
  };

  return (
    <section 
      id="our-work" 
      className="pt-16 md:pt-24 pb-20 md:pb-28 bg-brand-cream border-t border-brand-charcoal/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal">
              Discover Projects<br className="hidden md:inline" /> designed to inspire.
            </h2>
          </div>
          <div className="max-w-sm md:text-right pb-1">
            <p className="text-xs md:text-sm text-brand-charcoal/60 font-light tracking-wide leading-relaxed">
              Handpicked hospitality spaces where craftsmanship, brand compliance, and comfort meet.
            </p>
          </div>
        </div>

        {/* 3D Slider Area */}
        <div 
          className="relative w-full flex items-center justify-center h-[260px] md:h-[400px] overflow-visible" 
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Card Carousel List */}
          <div className="relative w-full h-full flex items-center justify-center overflow-visible" style={{ transformStyle: 'preserve-3d' }}>
            {projects.map((project, idx) => {
              const offset = getCardProps(idx);
              const variantName = getVariant(offset);
              const isActive = offset === 0;

              return (
                <motion.div
                  key={project.id}
                  custom={{ isMobile }}
                  variants={cardVariants}
                  animate={variantName}
                  initial={false}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute w-[82vw] md:w-[580px] aspect-[16/10] flex flex-col cursor-pointer animate-gpu"
                  onClick={() => {
                    if (offset === -1) handlePrev();
                    if (offset === 1) handleNext();
                    if (offset === 0) navigate(`/projects/${project.slug}`);
                  }}
                  onMouseEnter={() => {
                    if (isActive) setHoveredIndex(idx);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                  }}
                  drag={isMobile ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={(event, info) => {
                    setIsDragging(false);
                    const threshold = 40;
                    if (info.offset.x < -threshold) {
                      handleNext();
                    } else if (info.offset.x > threshold) {
                      handlePrev();
                    }
                  }}
                  style={{ zIndex: isActive ? 10 : 5, transformStyle: 'preserve-3d' }}
                >
                  {/* Card Image Container */}
                  <div className={`w-full h-full rounded-2xl md:rounded-3xl overflow-hidden bg-brand-charcoal/5 border border-brand-charcoal/10 transition-shadow duration-500 ${isActive ? 'shadow-2xl' : 'shadow-md'} relative`}>
                    <img
                      src={project.imagePath}
                      alt={project.brand}
                      className="w-full h-full object-cover select-none"
                      draggable={false}
                    />
                    {((project.gallery && project.gallery.length > 2) || project.hoverImagePath) && isActive && (
                      <motion.img
                        src={project.gallery && project.gallery.length > 2 ? project.gallery[2] : project.hoverImagePath}
                        alt={`${project.brand} hover view`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows (Overlap design as in reference) */}
          {!isMobile && (
            <>
              <div className="absolute left-[3%] md:left-[12%] z-30">
                <button
                  onClick={handlePrev}
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-charcoal hover:bg-brand-plum text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>
              </div>

              <div className="absolute right-[3%] md:right-[12%] z-30">
                <button
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-charcoal hover:bg-brand-plum text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  aria-label="Next project"
                >
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>
              </div>
            </>
          )}

        </div>

        {/* Active Card Info (Flat 2D rendering for perfect sharpness) */}
        <div className="w-full max-w-[82vw] md:max-w-[580px] mx-auto mt-8 md:mt-10 min-h-[120px] md:min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex justify-between items-start text-left select-none"
            >
              <div className="flex-1 pr-6">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-brand-charcoal leading-tight">
                  {projects[currentIndex].brand}
                </h3>
                <p className="text-xxs md:text-xs text-brand-charcoal/40 font-semibold uppercase tracking-wider mt-1">
                  {projects[currentIndex].location}
                </p>
                <p className="text-xs md:text-sm text-brand-charcoal/60 font-light mt-3 max-w-sm md:max-w-md leading-relaxed tracking-wide">
                  {projects[currentIndex].description}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className="text-xl md:text-2xl font-semibold text-brand-plum block leading-tight">
                  {projects[currentIndex].keysCount}
                </span>
                <span className="text-[10px] md:text-xs text-brand-charcoal/40 font-light mt-1 block tracking-wide">
                  Capacity
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
