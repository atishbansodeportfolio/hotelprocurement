import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from './types';

interface ProjectGalleryProps {
  project: Project;
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

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const [[page, direction], setPage] = useState([0, 0]); // [activeImageIndex, direction]
  const images = [project.imagePath, project.hoverImagePath].filter(Boolean) as string[];

  const handleImageChange = (newDirection: number) => {
    if (images.length === 0) return;
    const nextIndex = (page + newDirection + images.length) % images.length;
    setPage([nextIndex, newDirection]);
  };

  // Reset page when project changes
  useEffect(() => {
    setPage([0, 0]);
  }, [project.slug]);

  // Auto-slide gallery images
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      handleImageChange(1); // Auto slide next (direction 1)
    }, 4000); // cycle image every 4 seconds
    return () => clearInterval(timer);
  }, [page, images.length]);

  return (
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
  );
}
