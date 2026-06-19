import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ServiceDetail } from './types';

interface ServicesDetailListProps {
  services: ServiceDetail[];
}

export default function ServicesDetailList({ services }: ServicesDetailListProps) {
  return (
    <section className="py-16 md:py-24 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-24 md:space-y-36">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
            >
              {/* Image Container (alternating columns) */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm border border-brand-charcoal/10 bg-brand-charcoal/5 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-plum/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-6 right-6 z-10">
                    <span className="inline-block bg-brand-charcoal/95 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-2.5 rounded-full border border-white/10 shadow-xs">
                      {service.metric}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Text details Container */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} text-left`}
              >
                {/* ID badge */}
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full mb-4">
                  0{service.id + 1} / Capability
                </span>
                
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-brand-charcoal mb-2 leading-tight">
                  {service.title}
                </h2>
                
                <p className="text-sm font-semibold tracking-wide text-brand-plum mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm md:text-base text-brand-charcoal/70 font-light leading-relaxed tracking-wide mb-6">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3">
                  {service.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-xs md:text-sm text-brand-charcoal/80 font-light tracking-wide">
                      <span className="p-1 rounded-full bg-brand-gold/10 text-brand-gold mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
