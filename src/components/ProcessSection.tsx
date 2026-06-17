import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Compass, Sofa, ArrowRight } from 'lucide-react';

interface ProcessCard {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

interface SourcingStep {
  number: string;
  title: string;
  description: string;
}

export default function ProcessSection() {
  const cards: ProcessCard[] = [
    {
      title: 'Concept',
      subtitle: 'Innovative Thinking, Timeless Impact',
      description: 'We shape guest-centric hospitality concepts rooted in brand standards, laying the groundwork for a cohesive design direction.',
      icon: <Lightbulb className="w-8 h-8 text-brand-gold stroke-[1.25]" />,
    },
    {
      title: 'Design',
      subtitle: 'Designing Dreams, Delivering Impact',
      description: 'Our creative experts blend functionality with brand-aligned aesthetics, producing detailed specification briefs and finishes.',
      icon: <Compass className="w-8 h-8 text-brand-gold stroke-[1.25]" />,
    },
    {
      title: 'Development',
      subtitle: 'From Vision to Reality',
      description: 'We transform ideas into operational realities — selecting custom materials, reviewing prototypes, and managing direct production.',
      icon: <Sofa className="w-8 h-8 text-brand-gold stroke-[1.25]" />,
    },
  ];

  const steps: SourcingStep[] = [
    {
      number: '01',
      title: 'Assessment',
      description: 'We audit your brand guidelines, design submittals, and budget matrices to outline the full FF&E project scope.',
    },
    {
      number: '02',
      title: 'Evaluation',
      description: 'Our sourcing network values options, requests manufacturer samples, and audits compliance before orders start.',
    },
    {
      number: '03',
      title: 'Contracting',
      description: 'We structure direct factory production agreements to secure custom craftsmanship at high-volume pricing.',
    },
    {
      number: '04',
      title: 'Fulfillment',
      description: 'We supervise final quality assurance inspections, manage sea/land logistics, and coordinate local delivery.',
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-20">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
            A Seamless Path from Plan to Property.
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide">
            How we translate creative vision into brand-compliant physical assets.
          </p>
        </div>

        {/* 3-Column Core Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-brand-charcoal/10 hover:border-brand-plum/30 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-start"
            >
              <div className="p-4 rounded-xl bg-brand-cream border border-brand-charcoal/5 mb-8">
                {card.icon}
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                {card.title}
              </h3>
              <h4 className="text-xl font-medium tracking-tight text-brand-charcoal mb-4">
                {card.subtitle}
              </h4>
              <p className="text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide mt-auto">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4-Step Procurement Timeline Row */}
        <div>
          <div className="border-b border-brand-charcoal/10 pb-6 mb-12">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-plum">
              Procurement Workflow
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Number */}
                <span className="text-4xl md:text-5xl font-extralight tracking-tight text-brand-gold/40 mb-4 font-serif">
                  {step.number}
                </span>

                {/* Title */}
                <div className="flex items-center space-x-2 mb-3">
                  <h4 className="text-lg font-medium tracking-tight text-brand-charcoal">
                    {step.title}
                  </h4>
                  {idx < 3 && (
                    <ArrowRight size={14} className="hidden lg:inline text-brand-charcoal/20 ml-2" />
                  )}
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-brand-charcoal/60 font-light leading-relaxed tracking-wide">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
