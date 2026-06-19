import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Differentiator {
  title: string;
  desc: string;
}

export default function AboutUsSetsApart() {
  const points: Differentiator[] = [
    {
      title: 'Direct Sourcing',
      desc: 'We partner directly with trusted global manufacturers—eliminating middlemen and markup.',
    },
    {
      title: 'Custom Furniture',
      desc: 'Tailored casegoods and seating that meet brand specifications and elevate guest experiences.',
    },
    {
      title: 'Design-Driven Approach',
      desc: 'Led by architects and interior designers with deep hospitality experience.',
    },
    {
      title: 'Global Logistics',
      desc: 'Reliable fulfillment and shipping, with quality control and KPI monitoring at every stage.',
    },
    {
      title: 'Brand Compliance',
      desc: 'We adhere strictly to ADA and brand-specific requirements for Marriott, Hilton, IHG, and more.',
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean, high-end image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-brand-charcoal/10"
          >
            <img
              src="/images/form-right.jpeg"
              alt="Hospitality FF&E Procurement sourcing workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Soft dark tint to match theme */}
            <div className="absolute inset-0 bg-brand-charcoal/5 pointer-events-none" />
          </motion.div>

          {/* Right Column: Content list */}
          <div className="text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
              Our Differentiators
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-8 leading-tight">
              What Sets Us Apart?
            </h2>

            <ul className="space-y-6">
              {points.map((pt, idx) => (
                <motion.li
                  key={pt.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  {/* Subtle round checkmark icon in gold wrapper */}
                  <div className="w-5 h-5 rounded-full bg-brand-plum/10 flex items-center justify-center text-brand-plum flex-shrink-0 mt-0.5">
                    <Check size={10} className="stroke-[2.5]" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-charcoal leading-tight">
                      {pt.title}
                    </span>
                    <span className="text-xs md:text-sm text-brand-charcoal/70 leading-relaxed font-light tracking-wide mt-1.5">
                      {pt.desc}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
