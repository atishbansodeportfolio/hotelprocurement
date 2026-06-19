import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Target, Globe } from 'lucide-react';

export default function AboutUsPillars() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  const pillars = [
    {
      title: 'Our Vision',
      tagline: 'Leading the Future of Sourcing',
      desc: 'To be the premier global partner for hospitality procurement—where innovation, integrity, and design excellence meet to create unforgettable guest experiences and tell a story of craftsmanship and brand distinction.',
      icon: <Coins className="w-8 h-8 text-brand-gold stroke-[1.25]" />,
    },
    {
      title: 'Our Mission',
      tagline: 'Empowering Hospitality Sourcing',
      desc: 'We transform procurement into a collaborative, seamless experience—grounded in absolute transparency, creativity, and deep industry compliance. We ensure quality, consistency, and alignment from concept to completion.',
      icon: <Target className="w-8 h-8 text-brand-gold stroke-[1.25]" />,
    },
    {
      title: 'Our Global Reach',
      tagline: 'Connected Sourcing, Local Relevance',
      desc: 'With operational bases in the U.S., UAE, and China, and deep manufacturing partnerships across Asia, we offer procurement solutions that are both globally connected and tailored to local regional codes.',
      icon: <Globe className="w-8 h-8 text-brand-gold stroke-[1.25]" />,
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5 relative overflow-hidden">
      {/* Decorative Brand Circles Outline background */}
      <div className="absolute left-[3%] bottom-[5%] w-32 h-32 border border-brand-gold/15 rounded-full opacity-40 pointer-events-none" />
      <div className="absolute right-[5%] top-[10%] w-48 h-48 border border-brand-plum/5 rounded-[40%_60%_70%_30%] opacity-35 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
            Values that Drive Us.
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide">
            How we translate creative vision into brand-compliant physical assets.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={pillar.title}
              variants={cardVariants}
              className="bg-white p-8 md:p-10 rounded-2xl border border-brand-charcoal/10 hover:border-brand-plum/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-start text-left"
            >
              {/* Icon Container */}
              <div className="p-4 rounded-xl bg-brand-cream border border-brand-charcoal/5 mb-8">
                {pillar.icon}
              </div>

              {/* Title tags */}
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                {pillar.title}
              </span>

              <h4 className="text-xl font-medium tracking-tight text-brand-charcoal mb-4">
                {pillar.tagline}
              </h4>

              {/* Description details */}
              <p className="text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
