import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PencilRuler, Hammer, ClipboardCheck, Package2, ShieldAlert, Truck } from 'lucide-react';

interface PhaseTeaser {
  number: string;
  name: string;
  description: string;
  icon: React.ComponentType;
}

const phases: PhaseTeaser[] = [
  {
    number: '01',
    name: 'Design & CAD Drawing',
    description: 'Translating interior architectural plans into custom shop drawings, specifying load frames and exact millwork dimensions.',
    icon: PencilRuler,
  },
  {
    number: '02',
    name: 'Millwork & Mockups',
    description: 'Constructing full suite mockups and calibrations to test assembly alignments and secure franchise submittals.',
    icon: Hammer,
  },
  {
    number: '03',
    name: 'Scale Manufacturing',
    description: 'Precision scale assembly utilizing computer-guided CNC routers and seasoned hand-joinery craftsmanship.',
    icon: ClipboardCheck,
  },
  {
    number: '04',
    name: 'Quality Assurance',
    description: 'Rigorous fire safety, wear durability testing, and brand submittal audits to guarantee franchise compliance.',
    icon: ShieldAlert,
  },
  {
    number: '05',
    name: 'Packing & Shipping',
    description: 'Multi-layer foam wrapping, custom wood crates, and strategic cargo shipping container consolidations.',
    icon: Package2,
  },
  {
    number: '06',
    name: 'Delivery & Setup',
    description: 'Coordinating customs, just-in-time flatbed site distribution, and final keys handover sweep.',
    icon: Truck,
  },
];

export default function AboutUsHowItsDone() {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-brand-charcoal/5 relative overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute right-[5%] top-[15%] w-80 h-80 bg-brand-gold/2 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
            Our Sourcing Lifecycle
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
            How It's Done
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light leading-relaxed tracking-wide">
            We follow a rigorous, 6-phase global procurement methodology to bring design visions to life safely, transparently, and on schedule.
          </p>
        </div>

        {/* Phase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {phases.map((phase, idx) => {
            const IconComponent = phase.icon;
            return (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => navigate('/how-its-done')}
                className="group flex flex-col justify-between bg-white border border-brand-charcoal/10 hover:border-brand-plum/30 p-8 rounded-xl shadow-xs transition-all duration-300 hover:shadow-sm cursor-pointer"
              >
                <div>
                  {/* Card Header: Phase Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono tracking-widest text-brand-gold/30 font-bold group-hover:text-brand-plum/20 transition-colors">
                      {phase.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-brand-gold/5 border border-brand-gold/10 text-brand-gold group-hover:bg-brand-plum/5 group-hover:border-brand-plum/10 group-hover:text-brand-plum transition-all duration-300">
                      <IconComponent />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-medium tracking-tight text-brand-charcoal group-hover:text-brand-plum transition-colors duration-300 mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-charcoal/60 font-light leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>

                {/* Footer link */}
                <div className="flex items-center text-[10px] font-semibold uppercase tracking-wider text-brand-gold group-hover:text-brand-plum transition-colors duration-300 pt-3 border-t border-brand-charcoal/5">
                  <span>Explore Workflow Steps</span>
                  <motion.span
                    className="ml-1.5"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight size={12} className="stroke-[2.5]" />
                  </motion.span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA Trigger */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/how-its-done')}
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-brand-plum text-white text-xs font-semibold uppercase tracking-widest hover:bg-brand-charcoal shadow-sm transition-all duration-300 cursor-pointer"
          >
            <span>See Step-by-Step Walkthrough</span>
            <ArrowRight size={14} className="stroke-[2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
