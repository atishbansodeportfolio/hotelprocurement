import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Hotel, Layers } from 'lucide-react';
import { Project } from './types';

export default function ProjectsOverviewPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'pip' | 'concept'>('all');

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

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'pip') return project.slug !== 'lobby-lounge-concept';
    if (filter === 'concept') return project.slug === 'lobby-lounge-concept';
    return true;
  });

  const categories = [
    { id: 'all' as const, name: 'All Work', icon: <Layers className="w-4 h-4" /> },
    { id: 'pip' as const, name: 'Branded PIPs', icon: <Hotel className="w-4 h-4" /> },
    { id: 'concept' as const, name: 'Concepts & Spaces', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <div className="bg-brand-cream min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Header Hero Section */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Our Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-brand-charcoal mb-6 leading-[1.2] md:leading-tight">
            Spaces Crafted with <br className="hidden md:inline" />
            Excellence & Precision.
          </h1>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide leading-relaxed max-w-2xl">
            Explore our hospitality FF&E procurement case studies—featuring custom guestroom casegoods, soft seating PIP upgrades, and turnkey lobby transformations.
          </p>
        </div>

        {/* Interactive Filter Pill Row */}
        <div className="flex flex-wrap gap-3 mb-12 pb-6 border-b border-brand-charcoal/10 justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                filter === cat.id
                  ? 'bg-brand-charcoal border-brand-charcoal text-white shadow-md'
                  : 'bg-transparent border-brand-charcoal/10 text-brand-charcoal/75 hover:border-brand-plum/40 hover:text-brand-plum'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col text-left group cursor-pointer select-none"
                onClick={() => navigate(`/projects/${project.slug}`)}
              >
                {/* Image Frame with hover transition */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/5 mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                  
                  {/* Default Image */}
                  <img
                    src={project.imagePath}
                    alt={project.brand}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  
                  {/* Hover Image (Smooth Fade) */}
                  {project.hoverImagePath && (
                    <img
                      src={project.hoverImagePath}
                      alt={`${project.brand} alternative view`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-103"
                      loading="lazy"
                    />
                  )}

                  {/* Top-Right Badge Overlay */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block bg-brand-charcoal/80 backdrop-blur-xs text-white text-[9px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                      {project.keysCount}
                    </span>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="px-1 flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <h3 className="text-2xl font-light tracking-tight text-brand-charcoal mb-1.5 group-hover:text-brand-plum transition-colors">
                      {project.brand}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-brand-gold font-semibold mb-2">
                      {project.location}
                    </p>
                    <p className="text-sm text-brand-charcoal/70 font-light max-w-md line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-brand-charcoal/5 group-hover:bg-brand-charcoal text-brand-charcoal group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
