import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutUsHero() {
  const { scrollY } = useScroll();
  
  // Create beautiful parallax effect on the background and text
  const yBg = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative h-[55vh] md:h-[65vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden bg-brand-charcoal">
      {/* Background Image with Parallax and Plum overlay */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img 
          src="/about-us/hero.jpeg" 
          alt="Divine Design & Procurement luxury hotel lobby lounge"
          className="w-full h-full object-cover brightness-[0.4] saturate-[0.8]"
        />
        {/* Dark/Warm overlay for text readability (matching Hero.tsx) */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-transparent to-brand-cream/10" />
      </motion.div>

      {/* Hero Header Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-20 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto w-full z-10">
        <motion.div
          style={{ opacity: opacityText, scale: scaleText }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Small breadcrumb/label */}
          <span className="inline-block text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3 md:mb-4">
            Divine Design & Procurement LLC
          </span>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none">
            About Us
          </h1>
        </motion.div>
      </div>

      {/* Sleek bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10 z-20" />
    </section>
  );
}
