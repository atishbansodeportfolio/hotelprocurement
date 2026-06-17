import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  brand: string;
  location: string;
  description: string;
  isPlaceholder: boolean;
  imagePath?: string;
  keysCount: string;
}

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      brand: 'Holiday Inn Express',
      location: 'Fairhope, Alabama',
      description: 'A full FF&E refresh delivered on brand standard and on schedule.',
      isPlaceholder: false,
      imagePath: '/images/holiday-inn.jpeg',
      keysCount: '84 Keys',
    },
    {
      id: 2,
      brand: 'Hampton Inn',
      location: 'Farmington, MO',
      description: 'Complete lobby, guestroom casegoods, and custom soft seating procurement.',
      isPlaceholder: false,
      imagePath: '/images/hampton-inn.jpeg',
      keysCount: '92 Keys',
    },
    {
      id: 3,
      brand: 'Quality Inn',
      location: 'Bemidji, MN',
      description: 'Value engineering and direct sourcing for guestroom PIP compliance.',
      isPlaceholder: false,
      imagePath: '/images/quality-inn.jpeg',
      keysCount: '78 Keys',
    },
    {
      id: 4,
      brand: 'Lobby & Lounge Concept',
      location: 'Featured Showcase',
      description: 'An inspiring look at custom casegoods and lounge seating designed to create memorable first impressions.',
      isPlaceholder: false,
      imagePath: '/images/Hotel_lobby_lounge_golden_hour_202606172336.jpeg',
      keysCount: 'Public Spaces',
    },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="our-work" className="pt-12 md:pt-16 pb-12 md:pb-16 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
              Discover Projects Designed to Inspire.
            </h2>
            <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide">
              Handpicked hospitality spaces where craftsmanship, brand compliance, and comfort meet.
            </p>
          </div>
          
          {/* Slider Controls */}
          <div className="flex space-x-3 mt-8 md:mt-0">
            <button
              onClick={() => handleScroll('left')}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-charcoal/10 hover:border-brand-plum bg-transparent hover:bg-brand-charcoal hover:text-white transition-all duration-300 group"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} className="text-brand-charcoal group-hover:text-white transition-colors" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-brand-charcoal/10 hover:border-brand-plum bg-transparent hover:bg-brand-charcoal hover:text-white transition-all duration-300 group"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} className="text-brand-charcoal group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 md:space-x-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4 -mx-6 px-6 lg:-mx-8 lg:px-8 cursor-grab active:cursor-grabbing"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[420px] snap-start"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 group shadow-sm bg-brand-charcoal/5 border border-brand-charcoal/10">
                {project.isPlaceholder ? (
                  /* Elegant placeholder card styling */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#ECE7DF] to-[#E3DCD2] transition-colors duration-500 group-hover:from-[#E3DCD2] group-hover:to-[#D8CEBF]">
                    <span className="text-xxs font-semibold uppercase tracking-[0.2em] text-brand-plum/60 mb-2">
                      FF&E Showcase Gallery
                    </span>
                    <span className="text-xs md:text-sm font-medium tracking-wide text-brand-charcoal/60 text-center max-w-[280px]">
                      [Add real project photo]
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-brand-charcoal/40 uppercase">
                      <span>Divine Procurement</span>
                      <span>{project.keysCount}</span>
                    </div>
                  </div>
                ) : (
                  /* Image card styling */
                  <>
                    <img
                      src={project.imagePath}
                      alt={project.brand}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </div>

              {/* Card Info */}
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium tracking-tight text-brand-charcoal hover:text-brand-plum transition-colors duration-200">
                  {project.brand}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  {project.keysCount}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal/40 mb-3">
                {project.location}
              </p>
              <p className="text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
