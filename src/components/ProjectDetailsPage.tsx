import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  slug: string;
  brand: string;
  location: string;
  description: string;
  isPlaceholder: boolean;
  imagePath?: string;
  hoverImagePath?: string;
  keysCount: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export default function ProjectDetailsPage() {
  const { clientName } = useParams<{ clientName: string }>();
  const navigate = useNavigate();
  const [[page, direction], setPage] = useState([0, 0]); // [activeImageIndex, direction]

  const projects: Project[] = [
    {
      id: 1,
      slug: 'holiday-inn-express',
      brand: 'Holiday Inn Express',
      location: 'Fairhope, Alabama',
      description: 'A full FF&E refresh delivered on brand standard and on schedule.',
      isPlaceholder: false,
      imagePath: '/images/holiday-inn.jpeg',
      hoverImagePath: '/images/holiday-hover.jpeg',
      keysCount: '84 Keys',
    },
    {
      id: 2,
      slug: 'hampton-inn',
      brand: 'Hampton Inn',
      location: 'Farmington, MO',
      description: 'Complete lobby, guestroom casegoods, and custom soft seating procurement.',
      isPlaceholder: false,
      imagePath: '/images/hampton-inn.jpeg',
      hoverImagePath: '/images/hampton-hover.jpeg',
      keysCount: '92 Keys',
    },
    {
      id: 3,
      slug: 'quality-inn',
      brand: 'Quality Inn',
      location: 'Bemidji, MN',
      description: 'Value engineering and direct sourcing for guestroom PIP compliance.',
      isPlaceholder: false,
      imagePath: '/images/quality-inn.jpeg',
      hoverImagePath: '/images/quality-hover.jpeg',
      keysCount: '78 Keys',
    },
    {
      id: 4,
      slug: 'lobby-lounge-concept',
      brand: 'Lobby & Lounge Concept',
      location: 'Featured Showcase',
      description: 'An inspiring look at custom casegoods and lounge seating designed to create memorable first impressions.',
      isPlaceholder: false,
      imagePath: '/images/Hotel_lobby_lounge_golden_hour_202606172336.jpeg',
      hoverImagePath: '/images/Lobby-hover.jpeg',
      keysCount: 'Public Spaces',
    },
  ];

  const project = projects.find((p) => p.slug === clientName);
  const images = project ? ([project.imagePath, project.hoverImagePath].filter(Boolean) as string[]) : [];

  const handleImageChange = (newDirection: number) => {
    if (images.length === 0) return;
    const nextIndex = (page + newDirection + images.length) % images.length;
    setPage([nextIndex, newDirection]);
  };

  // Scroll to top of the page when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setPage([0, 0]);
  }, [clientName]);

  // Auto-slide gallery images
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      handleImageChange(1); // Auto slide next (direction 1)
    }, 4000); // cycle image every 4 seconds
    return () => clearInterval(timer);
  }, [page, images.length]);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">
        <h1 className="text-3xl font-light text-brand-charcoal mb-4">Project Not Found</h1>
        <p className="text-sm text-brand-charcoal/60 mb-8">The requested project could not be located.</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-brand-charcoal hover:bg-brand-plum text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  // Rich descriptions mapping for each project
  const getExtendedDescription = (id: number) => {
    switch (id) {
      case 1:
        return [
          "Located in the heart of Fairhope, Alabama, this project involved a comprehensive guestroom and public space PIP renovation. Working closely with the franchise requirements, we delivered a modern aesthetic while strictly adhering to the corporate brand standards of Holiday Inn Express.",
          "Our scope included custom guestroom casegoods, tailored seating, contemporary lighting fixtures, and custom drapery. By managing direct global sourcing and freight logistics, we bypassed traditional markups and saved the client over 18% in procurement costs.",
          "The installation was phased to allow the hotel to remain operational, ensuring minimal impact on guest experience and revenue. The final inspection was passed with zero franchise deficiencies, setting a new benchmark for PIP execution in the region."
        ];
      case 2:
        return [
          "The Hampton Inn project in Farmington, Missouri, showcases our expertise in executing full-scope casegoods and custom upholstered seating. From detailed shop drawings to final onsite consolidation, our team managed every milestone of the development cycle.",
          "We collaborated with master craftsmen to develop premium wood veneers, custom-molded foam seating, and high-performance commercial fabrics. The lobby area was transformed into a warm, inviting communal hub designed to facilitate social interactions and morning dining services.",
          "Despite supply chain challenges, all materials were successfully consolidated in our regional warehouse and delivered to the property on a just-in-time schedule, enabling the installation team to complete the setup five days ahead of the original timeline."
        ];
      case 3:
        return [
          "Faced with a tight timeline and budget constraints, the ownership group of the Quality Inn in Bemidji, Minnesota, engaged us to value-engineer their guestroom PIP. We reviewed the original specifications and proposed high-quality, cost-effective material alternatives.",
          "By sourcing casegoods directly from premium factories and optimizing material specs without sacrificing durability or aesthetics, we reduced the total FF&E budget by 22%. The replacement items included custom headboards, desks, nightstands, and energy-efficient lighting.",
          "All products met or exceeded Choice Hotels QA requirements, passing the franchise brand inspection on the first attempt. The project demonstrates that value engineering can deliver beautiful, compliant results while protecting the owner's bottom line."
        ];
      default:
        return [
          "Our Featured Showcase Concept represents the pinnacle of custom design and sourcing for premium hotel lobbies and public lounges. Designed to blur the lines between luxury, comfort, and functionality, this layout utilizes organic textures, warm gold finishes, and custom millwork.",
          "Every piece of furniture, from the grand circular sofas to the accent side tables, was fabricated to custom specifications. We integrated smart charging ports into the seating bases and selected stain-resistant, contract-grade textiles to ensure long-term durability in high-traffic hotel environments.",
          "This concept highlights our capability to handle bespoke design projects that go beyond standardized brand packages, offering boutique and luxury hotels a unique visual identity that elevates the guest arrival experience."
        ];
    }
  };

  const paragraphs = getExtendedDescription(project.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="bg-brand-cream flex flex-col pt-24"
    >
      {/* Main Details Body */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 md:px-12 pt-8 md:pt-14 pb-24 flex flex-col">
        
        {/* Navigation back and stats */}
        <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-brand-charcoal/50 border-b border-brand-charcoal/10 pb-6">
          <Link
            to="/#our-work"
            className="flex items-center space-x-2 text-brand-charcoal hover:text-brand-plum transition-colors uppercase tracking-widest font-bold"
          >
            <ArrowLeft size={14} className="stroke-[2.5]" />
            <span>Go back</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <span className="text-brand-gold">{project.location}</span>
            <span className="text-brand-charcoal/20">|</span>
            <span>{project.keysCount}</span>
          </div>
        </div>

        {/* Project Heading */}
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-brand-charcoal mt-8 md:mt-10 leading-tight text-left">
          {project.brand}
        </h1>

        {/* Subtitle & Badge Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mt-6 gap-6 border-b border-brand-charcoal/5 pb-8">
          <p className="text-base md:text-xl text-brand-charcoal/70 font-light max-w-2xl leading-relaxed text-left">
            {project.description}
          </p>
          <div className="flex-shrink-0">
            <span className="inline-block bg-brand-charcoal text-white px-5 py-3 rounded-full text-xxs font-semibold uppercase tracking-widest">
              {project.keysCount} Capacity
            </span>
          </div>
        </div>

        {/* Gallery Hero Image Display */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 md:mt-10 border border-brand-charcoal/10 bg-brand-charcoal/5">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.25 }
              }}
              src={images[page]}
              alt={`${project.brand} gallery`}
              className="absolute inset-0 w-full h-full object-cover select-none"
              draggable={false}
            />
          </AnimatePresence>
          
          {/* Gallery navigation inside bottom-right corner */}
          {images.length > 1 && (
            <div className="absolute bottom-6 right-6 flex space-x-2.5 z-20">
              <button
                onClick={() => handleImageChange(-1)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-charcoal/90 hover:bg-brand-plum text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleImageChange(1)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-charcoal/90 hover:bg-brand-plum text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Narrative Copy paragraphs */}
        <div className="mt-10 md:mt-14 space-y-6 text-left max-w-3xl">
          {paragraphs.map((para, pIdx) => (
            <p 
              key={pIdx} 
              className="text-sm md:text-base text-brand-charcoal/80 font-light leading-relaxed tracking-wide"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Footer CTA Button */}
        <div className="mt-14 md:mt-16 border-t border-brand-charcoal/10 pt-10 text-left">
          <button
            onClick={() => {
              navigate('/#contact');
            }}
            className="inline-flex items-center space-x-3 bg-brand-charcoal hover:bg-brand-plum text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            <span>Get in Touch</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </main>
    </motion.div>
  );
}
