import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden bg-brand-charcoal">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[70%_center] md:bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: "url('/images/new-hero.jpeg')",
        }}
      />

      {/* Dark/Warm overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/30 via-transparent to-brand-cream/10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 text-left text-white flex flex-col items-start -translate-y-12 md:-translate-y-28">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block text-xxs font-semibold uppercase tracking-[0.3em] text-brand-gold mb-4"
        >
          Hospitality Procurement, Perfected.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[2.5rem] md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1] md:leading-[1.05] font-sans max-w-2xl"
        >
          Elegance in <br className="hidden md:inline" /> Every Element.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-lg text-xs md:text-sm text-white/75 font-light leading-relaxed tracking-wide mb-8"
        >
          Direct global sourcing, brand-standard expertise, and turnkey project execution for premium hotel furniture, fixtures & equipment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              const targetElement = document.querySelector('#contact');
              if (targetElement) {
                const navHeight = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth',
                });
              }
            }}
            className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-wider text-brand-charcoal bg-white rounded-full hover:bg-brand-plum hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Request a Quote
          </button>
        </motion.div>
      </div>

      {/* Down arrow scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-white/40"
        />
      </div>
    </section>
  );
}
