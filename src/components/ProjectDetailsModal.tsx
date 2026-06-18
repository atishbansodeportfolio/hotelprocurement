import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Project {
  id: number;
  brand: string;
  location: string;
  description: string;
  isPlaceholder: boolean;
  imagePath?: string;
  hoverImagePath?: string;
  keysCount: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0); // 0 = main, 1 = hover
  const images = project ? ([project.imagePath, project.hoverImagePath].filter(Boolean) as string[]) : [];

  // Lock scroll on body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Auto-slide gallery images
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // cycle image every 4 seconds
    return () => clearInterval(timer);
  }, [activeImageIndex, images.length]);

  if (!project) return null;

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

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] overflow-y-auto bg-brand-cream flex flex-col"
    >
      {/* Modal Navbar Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-charcoal/5 py-5 px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
          className="flex items-center space-x-3 transition-colors duration-300 text-brand-charcoal"
        >
          <img 
            src="/logo-hotel-procurement.png" 
            alt="Divine Design & Procurement Logo" 
            className="h-9 w-auto object-contain"
          />
          <div className="flex flex-col text-left">
            <span className="text-lg font-semibold tracking-tight leading-none">Divine</span>
            <span className="text-[8px] uppercase tracking-[0.22em] font-semibold mt-1 leading-none text-brand-plum">Procurement</span>
          </div>
        </a>

        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          className="p-2 rounded-full border border-brand-charcoal/10 hover:border-brand-charcoal hover:bg-brand-charcoal hover:text-white transition-all duration-300 group"
          aria-label="Close details"
        >
          <X size={20} className="text-brand-charcoal group-hover:text-white transition-colors" />
        </button>
      </header>

      {/* Main Details Body */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 md:px-12 pt-8 md:pt-14 pb-24 flex flex-col">
        
        {/* Navigation back and stats */}
        <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-brand-charcoal/50 border-b border-brand-charcoal/10 pb-6">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-brand-charcoal hover:text-brand-plum transition-colors uppercase tracking-widest font-bold"
          >
            <ArrowLeft size={14} className="stroke-[2.5]" />
            <span>Go back</span>
          </button>
          
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mt-6 gap-4 border-b border-brand-charcoal/5 pb-8">
          <p className="text-base md:text-xl text-brand-charcoal/70 font-light max-w-2xl leading-relaxed text-left">
            {project.description}
          </p>
          <div className="flex-shrink-0 self-start md:self-end">
            <span className="inline-block bg-brand-charcoal text-white px-5 py-2 rounded-full text-xxs font-semibold uppercase tracking-widest">
              {project.keysCount} Capacity
            </span>
          </div>
        </div>

        {/* Gallery Hero Image Display */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl mt-8 md:mt-10 border border-brand-charcoal/10 bg-brand-charcoal/5">
          <img
            src={images[activeImageIndex]}
            alt={`${project.brand} gallery`}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out select-none"
            draggable={false}
          />
          
          {/* Gallery navigation inside bottom-right corner */}
          {images.length > 1 && (
            <div className="absolute bottom-6 right-6 flex space-x-2.5 z-20">
              <button
                onClick={handlePrevImage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-charcoal/90 hover:bg-brand-plum text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNextImage}
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
              onClose();
              setTimeout(() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  const navHeight = 80;
                  const targetPosition = contactSection.getBoundingClientRect().top + window.scrollY - navHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                  });
                }
              }, 400); // Wait for modal exit transition
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
