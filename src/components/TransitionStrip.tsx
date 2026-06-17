import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TransitionStrip() {
  const { scrollY } = useScroll();
  
  // Create a subtle parallax shift for the image
  const yTranslate = useTransform(scrollY, [0, 1000], [-30, 30]);

  return (
    <div className="relative w-full h-[180px] md:h-[280px] overflow-hidden bg-brand-charcoal">
      <motion.div
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Staircase_with_glass_balustrade_202606172336.jpeg')",
          y: yTranslate,
        }}
      />
      {/* Soft warm vignette overlays to blend the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/20 via-transparent to-brand-cream/20" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-brand-charcoal/10" />
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-cream" />
    </div>
  );
}
