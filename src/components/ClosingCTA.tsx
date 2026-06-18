import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ClosingCTA() {
  const { scrollY } = useScroll();
  
  // Subtle parallax mapping
  const yTranslate = useTransform(scrollY, [3500, 6000], [-30, 30]);

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
  };

  return (
    <section className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden bg-brand-charcoal flex items-center justify-center">
      {/* Background Image */}
      <motion.div
        className="absolute top-[-30px] bottom-[-30px] left-0 right-0 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Hotel_exterior_with_sparkling_pool_202606172336.jpeg')",
          y: yTranslate,
        }}
      />

      {/* Dark/Warm contrast overlays */}
      <div className="absolute inset-0 bg-brand-charcoal/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-brand-charcoal/60" />
      <div className="absolute inset-0 bg-brand-plum/10 mix-blend-color-burn" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xxs md:text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-6"
        >
          Partner with Divine
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6"
        >
          Your Next Project Awaits.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-xs md:text-sm text-white/80 font-light leading-relaxed mb-10 tracking-wide"
        >
          Whether it's a PIP renovation or new construction, we're here to bring your vision to life. Let's build something extraordinary.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={handleContactClick}
            className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-brand-charcoal bg-brand-cream rounded-full hover:bg-brand-plum hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
