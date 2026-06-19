import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutUsQuote() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll progress relative to this section's container for robust parallax calculation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax translation offset for the background image
  const yTranslate = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[55vh] md:h-[65vh] min-h-[380px] md:min-h-[460px] w-full overflow-hidden bg-brand-charcoal flex items-center justify-center"
    >
      {/* Cinematic Parallax Background Image */}
      <motion.div
        className="absolute top-[-80px] bottom-[-80px] left-0 right-0 w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about_us_quote_bg.png')",
          y: yTranslate,
        }}
      />

      {/* Dark tint overlay for reading contrast (matching CinematicSection.tsx) */}
      <div className="absolute inset-0 bg-brand-charcoal/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-brand-charcoal/60" />
      <div className="absolute inset-0 bg-brand-plum/20 mix-blend-multiply" />

      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Large gold quotation mark */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.35, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-7xl font-serif text-brand-gold leading-none select-none h-8 block"
        >
          “
        </motion.span>

        {/* Quote Body */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-white/95 tracking-wide font-sans italic max-w-3xl text-center mt-4"
        >
          At Divine Procurement, true expertise lies in the harmony of innovation and precision. We don't just design spaces—we curate experiences that leave a lasting impression. From initial concept to final delivery, every step is guided by a commitment to quality, brand alignment, and operational excellence.
        </motion.blockquote>

        {/* Minimal author line and details */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-brand-gold/60 mb-5" />
          <span className="text-sm font-semibold tracking-wider uppercase text-white">
            Yogin Patel
          </span>
          <span className="text-[10px] tracking-widest uppercase text-brand-gold mt-1.5 font-medium">
            Founder & Managing Director
          </span>
        </motion.div>

      </div>
    </section>
  );
}
