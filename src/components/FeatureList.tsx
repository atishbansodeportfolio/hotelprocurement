import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function FeatureList() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features: FeatureItem[] = [
    {
      id: 0,
      title: 'Direct Global Sourcing',
      description: 'Zero middlemen, transparent pricing, direct partnerships with top-tier manufacturing facilities. We pass the cost savings directly to you while ensuring premium material specifications.',
      image: '/services/direct-global-service.png',
    },
    {
      id: 1,
      title: 'Custom Furniture',
      description: 'Casegoods & soft seating tailored to your brand standard. We collaborate with master craftsmen to develop shop drawings and prototypes that match your specific design directives.',
      image: '/services/custom-furniture.png',
    },
    {
      id: 2,
      title: 'Brand Compliance',
      description: 'Built to match Hilton, IHG, Marriott, and Choice brand requirements. Our expertise guarantees your FF&E satisfies strict franchise submittals and QA standards.',
      image: '/images/Lounge_chair_beside_side_table_202606172336.jpeg',
    },
    {
      id: 3,
      title: 'Global Logistics',
      description: 'Timely delivery with precision, end to end. We manage consolidation, freight, customs clearance, and local warehousing to ensure materials arrive exactly when the site is ready.',
      image: '/services/global-logistics.png',
    },
    {
      id: 4,
      title: 'Turnkey Project Execution',
      description: 'From concept to completion, on time and on budget. Our comprehensive project management coordinates with general contractors, field installers, and franchise inspectors.',
      image: '/images/turnkey-projection.jpeg',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000); // cycle every 5 seconds
    return () => clearInterval(timer);
  }, [activeIndex, features.length]);

  return (
    <section id="services" className="pt-12 md:pt-16 pb-24 md:pb-36 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
            The Art of Exceptional Procurement.
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide">
            Discover the details that make every Divine Procurement project a success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Vertical Accordion Feature List */}
          <div className="flex flex-col justify-center">
            {/* Feature Accordion Items */}
            <div className="border-b border-brand-charcoal/10">
              {features.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={feature.id}
                    className="border-t border-brand-charcoal/10 cursor-pointer py-6 group"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-xl md:text-2xl font-light tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-brand-plum font-normal' : 'text-brand-charcoal hover:text-brand-plum'
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`text-brand-charcoal/30 group-hover:text-brand-plum transition-colors`}
                      >
                        <ChevronRight size={20} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 pb-2 text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide max-w-xl">
                            {feature.description}
                          </p>
                          
                          {/* Mobile-only inline image inside active tab */}
                          <div className="lg:hidden block mt-4 mb-2">
                            <div className="w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-brand-charcoal/10">
                              <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image with matching height */}
          <div className="relative hidden lg:block min-h-[400px]">
            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-md border border-brand-charcoal/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Subtle visual gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent pointer-events-none" />
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
