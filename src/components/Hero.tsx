import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-charcoal">
      {/* Background Image - Desktop */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: "url('/images/hero-4-dt.jpeg')",
        }}
      />
      {/* Background Image - Mobile */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-out scale-105"
        style={{
          backgroundImage: "url('/images/hero-4-mb.jpeg')",
        }}
      />



      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center -translate-y-8 md:-translate-y-16">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.06em] md:tracking-[0.18em] text-brand-gold mb-6 leading-tight max-w-none whitespace-normal md:whitespace-nowrap"
        >
          Hospitality Procurement,<br className="md:hidden" /> Perfected.
        </motion.span>



        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xs md:max-w-xl text-xs md:text-sm lg:text-base text-white/80 font-normal tracking-wide leading-relaxed mb-6"
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
