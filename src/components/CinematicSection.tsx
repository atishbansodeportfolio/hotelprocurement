import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CinematicSection() {
  const { scrollY } = useScroll();
  
  // Parallax transform for the background image
  const yTranslate = useTransform(scrollY, [1500, 3500], [-50, 50]);

  return (
    <section className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden bg-brand-charcoal flex items-center justify-center">
      {/* Cinematic Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Hotel_rooftop_terrace_lounge_pool_202606172336.jpeg')",
          y: yTranslate,
        }}
      />

      {/* Dark tint overlay for reading contrast */}
      <div className="absolute inset-0 bg-brand-charcoal/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-transparent to-brand-charcoal/50" />
      <div className="absolute inset-0 bg-brand-plum/10 mix-blend-multiply" />

      {/* Text Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block text-xxs md:text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold mb-6"
        >
          Divine Portfolio Showcase
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight mb-4"
        >
          Step inside spaces where exceptional design and hospitality standards meet.
        </motion.h2>

        {/* Minimal aesthetic divider line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[1px] bg-brand-gold mx-auto mt-8"
        />
      </div>
    </section>
  );
}
