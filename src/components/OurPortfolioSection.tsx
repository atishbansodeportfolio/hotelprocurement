import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Hotel } from 'lucide-react';
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

  return (
    <div className="w-full bg-white rounded-3xl p-8 md:p-12 border border-brand-charcoal/5 shadow-md flex flex-col md:flex-row gap-8 md:gap-12 items-center">
      
      {/* Project Info Block */}
      <div className="w-full md:w-[35%] flex flex-col justify-center text-left">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1 bg-brand-plum/10 text-brand-plum text-[9px] font-semibold uppercase tracking-widest px-2.5 py-1.5 rounded-md border border-brand-plum/10">
            <Hotel className="w-3 h-3" />
            {project.category === 'pip' ? 'Branded PIP' : 'Custom Concept'}
          </span>
          <span className="text-[10px] font-medium text-brand-charcoal/50 uppercase tracking-widest px-2 py-1 bg-brand-charcoal/5 rounded-md">
            {project.keysCount}
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-charcoal mb-2">
          {project.brand}
        </h3>
        
        <p className="text-xxs uppercase tracking-[0.2em] text-brand-gold font-semibold mb-4">
          {project.location}
        </p>

        <p className="text-sm md:text-base text-brand-charcoal/70 font-light leading-relaxed tracking-wide mb-8 min-h-[60px]">
          {project.description}
        </p>

        <div>
          {/* Main Detail CTA */}
          <button
            onClick={() => {
              navigate(`/projects/${project.slug}`);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-3 bg-brand-charcoal hover:bg-brand-plum text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs hover:shadow-md"
          >
            <span>View Project Lookbook</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Static 4-Image Mosaic Grid Block (No Pagination Controls) */}
      <div className="w-full md:w-[65%] flex flex-col justify-center">
        <div className="relative w-full aspect-[16/10] md:aspect-[18/10] grid grid-cols-2 gap-3 md:gap-4 overflow-visible select-none">
          
          {/* Left Column: 1 Large Tall Image */}
          <div className="h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative">
            {currentImages[0] && (
              <img
                src={currentImages[0]}
                alt={`${project.brand} featured space`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>

          {/* Right Column: 1 Wide + 2 Square Sub-Grid */}
          <div className="grid grid-rows-2 gap-3 md:gap-4 h-full">
            
            {/* Top Right: Wide Image */}
            <div className="h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative">
              {currentImages[1] && (
                <img
                  src={currentImages[1]}
                  alt={`${project.brand} alternative view`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              )}
            </div>

            {/* Bottom Right: Two Square Images Side by Side */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
              
              <div className="h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative">
                {currentImages[2] && (
                  <img
                    src={currentImages[2]}
                    alt={`${project.brand} detail layout`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="h-full w-full overflow-hidden rounded-2xl bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-sm relative">
                {currentImages[3] && (
                  <img
                    src={currentImages[3]}
                    alt={`${project.brand} interior accent`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
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
              Hospitality Sourcing <br />& Turned PIP Projects.
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

      </div>
    </section>
  );
}
