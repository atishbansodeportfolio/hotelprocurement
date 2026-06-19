import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from './types';

interface ProjectGalleryProps {
  project: Project;
}

// Dynamically generate column spans to ensure rows are always full in a 3-column grid
const getGridSpans = (total: number): number[] => {
  const spans: number[] = [];
  let remaining = total;
  
  while (remaining > 0) {
    if (remaining === 1) {
      spans.push(3); // Last remaining spans full width
      remaining -= 1;
    } else if (remaining === 2) {
      spans.push(2, 1); // 2 + 1 = 3
      remaining -= 2;
    } else if (remaining === 3) {
      spans.push(1, 1, 1); // 1 + 1 + 1 = 3
      remaining -= 3;
    } else if (remaining === 4) {
      spans.push(3);
      spans.push(1, 1, 1);
      remaining -= 4;
    } else if (remaining === 5) {
      spans.push(2, 1);
      spans.push(1, 1, 1);
      remaining -= 5;
    } else {
      // Alternating patterns to create visual rhythm for larger galleries
      spans.push(3);
      spans.push(1, 2);
      remaining -= 3;
    }
  }
  return spans;
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = (project.gallery && project.gallery.length > 0)
    ? project.gallery
    : ([project.imagePath, project.hoverImagePath].filter(Boolean) as string[]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Calculate spans dynamically for the current images length
  const spans = getGridSpans(images.length);

  // Group spans into rows to determine context
  const getRowContext = (index: number) => {
    let currentSum = 0;
    let rowSpans: number[] = [];

    for (let i = 0; i < spans.length; i++) {
      rowSpans.push(spans[i]);
      currentSum += spans[i];
      if (currentSum === 3) {
        if (index <= i && index > i - rowSpans.length) {
          return rowSpans;
        }
        rowSpans = [];
        currentSum = 0;
      }
    }
    return rowSpans;
  };

  const getGridClass = (index: number) => {
    const span = spans[index] || 1;
    if (span === 3) {
      return "col-span-3 aspect-[16/10] md:aspect-[24/10]";
    } else if (span === 2) {
      return "col-span-2 aspect-[4/3] md:aspect-[16/10]";
    } else {
      // Check if this span 1 item is in a row with a span 2 item
      const row = getRowContext(index);
      if (row.includes(2)) {
        // Stretch to match the height of the span 2 item
        return "col-span-1 aspect-auto h-full";
      }
      return "col-span-1 aspect-square";
    }
  };

  return (
    <div className="mt-12 md:mt-16">
      <div className="border-t border-brand-charcoal/10 pt-10 mb-8 flex justify-between items-center">
        <h2 className="text-xs uppercase tracking-widest text-brand-gold font-bold">
          Project Lookbook
        </h2>
        <span className="text-xs text-brand-charcoal/50 font-light">
          {images.length} Images • Click to Enlarge
        </span>
      </div>
      
      {/* Lookbook balanced grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={`${img}-${idx}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: Math.min(idx * 0.05, 0.25) }}
            className={`group relative overflow-hidden rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/5 cursor-pointer shadow-xxs hover:shadow-md transition-all duration-500 ${getGridClass(idx)}`}
            onClick={() => setLightboxIndex(idx)}
          >
            <img
              src={img}
              alt={`${project.brand} lookbook image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
              loading="lazy"
            />
            
            {/* Zoom Overlay Indicator */}
            <div className="absolute inset-0 bg-brand-charcoal/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white/10 backdrop-blur-xs border border-white/20 p-3.5 rounded-full text-white transform scale-90 group-hover:scale-100 transition-all duration-300">
                <ZoomIn size={18} className="stroke-[2.5]" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-brand-charcoal/95 backdrop-blur-md flex items-center justify-center animate-gpu"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer z-20"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Prev Navigation Arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer z-10 hidden md:block"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Next Navigation Arrow */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % images.length);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer z-10 hidden md:block"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Large Image Frame */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[90vw] max-h-[82vh] overflow-hidden rounded-xl border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex]}
                alt={`${project.brand} gallery view`}
                className="max-w-full max-h-[82vh] object-contain"
              />
              
              {/* Image numbering badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xs text-white/80 px-4 py-1.5 rounded-full text-xs font-mono select-none border border-white/5">
                {lightboxIndex + 1} / {images.length}
              </div>
            </motion.div>

            {/* Mobile Touch Control Indicator */}
            <div className="absolute bottom-6 flex md:hidden items-center justify-center space-x-6 text-white/80 select-none" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)} 
                className="p-3 bg-white/5 border border-white/10 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs font-mono">
                {lightboxIndex + 1} / {images.length}
              </span>
              <button 
                onClick={() => setLightboxIndex((lightboxIndex + 1) % images.length)} 
                className="p-3 bg-white/5 border border-white/10 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
