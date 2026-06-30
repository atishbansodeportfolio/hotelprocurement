import React from 'react';
import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 bg-brand-cream overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-[2%] top-[10%] w-40 h-40 border border-brand-gold/15 rounded-full pointer-events-none opacity-40" />
      
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4 animate-pulse">
          Our Services
        </span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-charcoal leading-[1.2] md:leading-[1.15] mb-8"
        >
          Comprehensive FF&E <br className="hidden md:inline" />
          procurement solutions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-sm md:text-base text-brand-charcoal/70 font-light max-w-xl mx-auto leading-relaxed tracking-wide"
        >
          From boutique concepts to large-scale brand conversions, we deliver furniture, fixtures, and equipment that satisfy design requirements and compliance standards.
        </motion.p>
      </div>
    </section>
  );
}
