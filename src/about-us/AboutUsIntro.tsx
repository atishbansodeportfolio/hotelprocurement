import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsIntro() {
  return (
    <section className="relative pt-24 md:pt-36 pb-12 md:pb-16 bg-brand-cream overflow-hidden">
      {/* Decorative overlapping gold rings to fill empty space and frame content */}
      <div className="absolute -left-20 top-[15%] w-80 h-80 border border-brand-gold/15 rounded-full pointer-events-none opacity-30 hidden lg:block" />
      <div className="absolute -right-24 bottom-[10%] w-[450px] h-[450px] border border-brand-gold/10 rounded-full pointer-events-none opacity-30 hidden lg:block" />
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Animated Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-brand-charcoal leading-[1.2] md:leading-[1.15] mb-10"
        >
          Redefining hospitality <br className="hidden md:inline" />
          procurement with excellence.
        </motion.h2>

        {/* Intro Body Text in 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-12 text-left border-t border-brand-charcoal/10 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed font-light tracking-wide">
              At Divine Design and Procurement LLC, we specialize in premium procurement solutions tailored exclusively for the hospitality industry. From boutique hotels to major brand rollouts, we turn visions into inspired spaces through high-quality casegoods, soft seating, and custom furnishings—delivered on time, on budget, and always on brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-sm md:text-base text-brand-charcoal/80 leading-relaxed font-light tracking-wide">
              With over a decade of experience and a portfolio spanning Hilton, IHG, Marriott, and Choice Hotels properties, we bring a rare blend of design sophistication and operational efficiency to every project.
            </p>
          </motion.div>
        </div>

        {/* Large bottom showcase image fading into cream background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative mt-16 max-w-5xl mx-auto overflow-hidden rounded-2xl border border-brand-charcoal/5 shadow-xxs"
        >
          <div className="relative aspect-[16/7] w-full">
            <img
              src="/images/turnkey-projection.jpeg"
              className="w-full h-full object-cover object-center"
              alt="Hotel room interior construction"
              loading="lazy"
            />
            {/* Smooth gradient fading into the cream background */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-cream via-brand-cream/40 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
