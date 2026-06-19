import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Project } from './types';

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <>
      {/* Navigation back and stats */}
      <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-brand-charcoal/50 border-b border-brand-charcoal/10 pb-6">
        <Link
          to="/projects"
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
    </>
  );
}
