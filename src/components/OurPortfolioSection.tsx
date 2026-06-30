import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Hotel, MapPin } from 'lucide-react';
import { Project } from '../projects/types';
import { projects } from '../projects/data';

interface ProjectMosaicRowProps {
  project: Project;
}

function ProjectMosaicRow({ project }: ProjectMosaicRowProps) {
  const navigate = useNavigate();

  const gallery = project.gallery || [];
  // Keep only the first 4 images for preview, as requested
  const currentImages = gallery.slice(0, 4);

  const handleNavigate = () => {
    navigate(`/projects/${project.slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white rounded-[32px] p-8 md:p-12 border border-brand-charcoal/5 shadow-xl shadow-brand-charcoal/[0.02] flex flex-col md:flex-row gap-10 md:gap-14 items-stretch transition-all duration-500 hover:shadow-2xl hover:shadow-brand-charcoal/[0.04] relative overflow-hidden group">
      
      {/* Decorative top ambient color bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold/30 via-brand-plum/30 to-brand-gold/30"></div>

      {/* Project Info Block */}
      <div className="w-full md:w-[38%] flex flex-col justify-between text-left py-2">
        <div>
          {/* Category & Keys Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-brand-plum/[0.04] text-brand-plum text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-brand-plum/15">
              <Hotel className="w-3.5 h-3.5 text-brand-plum/80" />
              {project.category === 'pip' ? 'Branded PIP' : 'Custom Concept'}
            </span>
            <span className="inline-flex items-center gap-1 bg-brand-charcoal/[0.03] text-brand-charcoal/70 text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-brand-charcoal/10">
              {project.keysCount}
            </span>
          </div>

          {/* Project Title (Brand) */}
          <div className="min-h-[64px] sm:min-h-[80px] md:min-h-[110px] flex items-center mb-3">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal leading-[1.15] w-full text-left">
              {project.brand}
            </h3>
          </div>
          
          {/* Location with Pin */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-brand-gold uppercase mb-6">
            <MapPin className="w-3.5 h-3.5 text-brand-gold stroke-[2]" />
            <span>{project.location}</span>
          </div>

          {/* Description with editorial quote styling */}
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light leading-relaxed tracking-wide mb-8 min-h-[72px] md:min-h-[80px] border-l-2 border-brand-gold/30 pl-4 py-0.5 italic text-left">
            {project.description}
          </p>
        </div>

        <div>
          {/* Main Detail CTA */}
          <button
            onClick={handleNavigate}
            className="group inline-flex items-center gap-3 bg-brand-charcoal hover:bg-brand-plum text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-lg hover:shadow-brand-charcoal/10 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none"
          >
            <span>View Project Lookbook</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Interactive 4-Image Mosaic Grid Block (Clicking images also views project lookbook) */}
      <div className="w-full md:w-[62%] flex flex-col justify-center">
        <div className="relative w-full aspect-[16/10] md:aspect-[18/10] grid grid-cols-2 gap-3 md:gap-4 overflow-visible select-none">
          
          {/* Left Column: 1 Large Tall Image */}
          <div 
            onClick={handleNavigate}
            className="group/img h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative cursor-pointer"
          >
            {currentImages[0] && (
              <img
                src={currentImages[0]}
                alt={`${project.brand} featured space`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                loading="lazy"
              />
            )}
            <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white/95 backdrop-blur-xs text-brand-charcoal text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                View Project
              </span>
            </div>
          </div>

          {/* Right Column: 1 Wide + 2 Square Sub-Grid */}
          <div className="grid grid-rows-2 gap-3 md:gap-4 h-full">
            
            {/* Top Right: Wide Image */}
            <div 
              onClick={handleNavigate}
              className="group/img h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative cursor-pointer"
            >
              {currentImages[1] && (
                <img
                  src={currentImages[1]}
                  alt={`${project.brand} alternative view`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white/95 backdrop-blur-xs text-brand-charcoal text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                  View Project
                </span>
              </div>
            </div>

            {/* Bottom Right: Two Square Images Side by Side */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
              
              <div 
                onClick={handleNavigate}
                className="group/img h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative cursor-pointer"
              >
                {currentImages[2] && (
                  <img
                    src={currentImages[2]}
                    alt={`${project.brand} detail layout`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur-xs text-brand-charcoal text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                    View
                  </span>
                </div>
              </div>

              <div 
                onClick={handleNavigate}
                className="group/img h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative cursor-pointer"
              >
                {currentImages[3] && (
                  <img
                    src={currentImages[3]}
                    alt={`${project.brand} interior accent`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-brand-charcoal/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur-xs text-brand-charcoal text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-md transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
                    View
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default function OurPortfolioSection() {
  const navigate = useNavigate();
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const displayProjects = projects.slice(0, 3);
  const activeProject = displayProjects[activeProjectIdx];

  const handlePrevProject = () => {
    setActiveProjectIdx((prev) => (prev === 0 ? displayProjects.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setActiveProjectIdx((prev) => (prev + 1) % displayProjects.length);
  };

  return (
    <section 
      id="our-portfolio" 
      className="py-20 md:py-28 bg-brand-cream border-t border-brand-charcoal/5"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Editorial Section Header with Navigation Button Group */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-charcoal leading-tight">
              Featured Portfolio
            </h2>
          </div>
          
          {/* Aligned Right Button Group */}
          <div className="flex items-center gap-3">
            {/* See all button */}
            <button
              onClick={() => {
                navigate('/projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-charcoal hover:bg-brand-plum text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] select-none"
            >
              See all projects
            </button>
            
            {/* Slide Prev Button */}
            <button
              onClick={handlePrevProject}
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white hover:bg-brand-plum text-brand-charcoal hover:text-white border border-brand-charcoal/15 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-xxs"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Slide Next Button */}
            <button
              onClick={handleNextProject}
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white hover:bg-brand-plum text-brand-charcoal hover:text-white border border-brand-charcoal/15 transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-xxs"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Active Card with AnimatePresence */}
        <div className="relative w-full overflow-visible">
          <div className="w-full overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectMosaicRow project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Dot Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {displayProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProjectIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeProjectIdx === idx 
                  ? 'w-8 bg-brand-plum' 
                  : 'w-2 bg-brand-charcoal/20 hover:bg-brand-charcoal/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
