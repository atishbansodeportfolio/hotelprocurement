import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Project } from './types';
import { projects } from './data';
import ProjectHero from './ProjectHero';
import ProjectGallery from './ProjectGallery';
import ProjectNarrative from './ProjectNarrative';

export default function ProjectDetailsPage() {
  const { clientName } = useParams<{ clientName: string }>();

  const project = projects.find((p) => p.slug === clientName);

  // Scroll to top of the page when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [clientName]);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="bg-brand-cream flex flex-col pt-24"
    >
      <main className="flex-grow max-w-4xl w-full mx-auto px-6 md:px-12 pt-8 md:pt-14 pb-24 flex flex-col">
        <ProjectHero project={project} />
        <ProjectGallery project={project} />
        <ProjectNarrative project={project} />
      </main>
    </motion.div>
  );
}
