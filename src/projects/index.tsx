import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Project } from './types';
import ProjectHero from './ProjectHero';
import ProjectGallery from './ProjectGallery';
import ProjectNarrative from './ProjectNarrative';

export default function ProjectDetailsPage() {
  const { clientName } = useParams<{ clientName: string }>();

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
