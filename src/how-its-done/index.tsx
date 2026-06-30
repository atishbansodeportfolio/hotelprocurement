import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Camera, CheckCircle2, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  image: string;
}

interface Phase {
  id: string;
  name: string;
  steps: Step[];
}

const phases: Phase[] = [
  {
    id: 'design',
    name: '1. Design & Sourcing',
    steps: [
      {
        number: 1,
        title: 'Consultation & Briefing',
        description: 'Collaboratively aligning on design aesthetics, key brand touchpoints, and custom project requirements.',
        image: '/how-its-done/Screenshot 2026-06-19 182132.png',
      },
      {
        number: 2,
        title: 'Custom CAD Drawings',
        description: 'Creating high-fidelity engineering shop drawings specifying joins, materials, load-bearing frames, and tolerances.',
        image: '/how-its-done/Screenshot 2026-06-19 182144.png',
      },
    ],
  },
  {
    id: 'fabrication',
    name: '2. Prototypes & Mockups',
    steps: [
      {
        number: 3,
        title: 'Prototype Suite Fabrication',
        description: 'Constructing full suite mockups in designated factory blocks to test layout alignments and safety compliance.',
        image: '/how-its-done/Screenshot 2026-06-19 182258.png',
      },
      {
        number: 4,
        title: 'Client Evaluation & Approvals',
        description: 'Hosting mockup walkthroughs with designers and owners to secure franchise submittal approvals.',
        image: '/how-its-done/Screenshot 2026-06-19 182312.png',
      },
    ],
  },
  {
    id: 'manufacturing',
    name: '3. Scale Manufacturing',
    steps: [
      {
        number: 5,
        title: 'High-Precision Milling',
        description: 'Utilizing CNC tooling and laser cutting systems to dimension raw materials within millimeter tolerances.',
        image: '/how-its-done/Screenshot 2026-06-19 182421.png',
      },
      {
        number: 6,
        title: 'Artisan Joinery & Finishing',
        description: 'Executing hand-crafted joinery for superior frame rigidity, followed by multi-stage wood sanding and coatings.',
        image: '/how-its-done/Screenshot 2026-06-19 182448.png',
      },
    ],
  },
  {
    id: 'quality',
    name: '4. Quality Assurance',
    steps: [
      {
        number: 7,
        title: 'CAL 133 & Wear Inspections',
        description: 'Ensuring foams, barriers, and fabrics comply with hospitality fire codes and wear specifications.',
        image: '/how-its-done/Screenshot 2026-06-19 182507.png',
      },
      {
        number: 8,
        title: 'Final Inspection & Sign-off',
        description: 'Evaluating finish sheen, alignments, and veneer consistency before preparing final brand compliance dossiers.',
        image: '/how-its-done/Screenshot 2026-06-19 182523.png',
      },
    ],
  },
  {
    id: 'logistics',
    name: '5. Logistics & Hand-off',
    steps: [
      {
        number: 9,
        title: 'Protective Packing & Transit',
        description: 'Wrapping goods in protective foam and crates, consolidating containers, and filing marine transit departures.',
        image: '/how-its-done/Screenshot 2026-06-19 182558.png',
      },
      {
        number: 10,
        title: 'Customs & Just-in-Time Setup',
        description: 'Clearing customs, dispatching site trucks to avoid storage fees, and positioning furniture for handover.',
        image: '/how-its-done/Screenshot 2026-06-19 182733.png',
      },
    ],
  },
];

// Flat list of all steps for convenient lightbox indexing
const allSteps = phases.reduce<Step[]>((acc, phase) => [...acc, ...phase.steps], []);

export default function HowItsDonePage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex + 1) % allSteps.length);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex - 1 + allSteps.length) % allSteps.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const filteredPhases = activeTab === 'all' 
    ? phases 
    : phases.filter(phase => phase.id === activeTab);

  // Jump to page hash anchors
  const handleTabClick = (phaseId: string) => {
    setActiveTab(phaseId);
    if (phaseId !== 'all') {
      setTimeout(() => {
        const element = document.getElementById(phaseId);
        if (element) {
          const navHeight = isScrolled ? 100 : 160;
          const targetPos = element.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-cream min-h-screen text-brand-charcoal antialiased">
      
      {/* Hero Header */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 text-center max-w-4xl mx-auto px-6 border-b border-brand-charcoal/5">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4 animate-pulse">
          Procurement Lifecycle
        </span>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-brand-charcoal mb-6">
          How It's Done
        </h1>
        <p className="text-sm md:text-base text-brand-charcoal/70 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
          A granular visual workflow detailing our custom product design, manufacturing calibrations, quality compliance testing, and site logistics execution.
        </p>
      </section>

      {/* Sticky Category/Phase Filter Bar */}
      <div className={`sticky z-30 bg-brand-cream/85 backdrop-blur-md border-b border-brand-charcoal/5 py-4 transition-all duration-300 ${
        isScrolled ? 'top-0' : 'top-16 md:top-20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto flex justify-start md:justify-center space-x-2 no-scrollbar">
          <button
            onClick={() => handleTabClick('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'all' 
                ? 'bg-brand-plum text-white' 
                : 'bg-brand-charcoal/5 text-brand-charcoal/70 hover:bg-brand-charcoal/10'
            }`}
          >
            All Phases
          </button>
          {phases.map(phase => (
            <button
              key={phase.id}
              onClick={() => handleTabClick(phase.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeTab === phase.id 
                  ? 'bg-brand-plum text-white' 
                  : 'bg-brand-charcoal/5 text-brand-charcoal/70 hover:bg-brand-charcoal/10'
              }`}
            >
              {phase.name.substring(3)}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="space-y-24">
          {filteredPhases.map(phase => (
            <div key={phase.id} id={phase.id} className={`transition-all duration-300 ${isScrolled ? 'scroll-mt-24' : 'scroll-mt-40'}`}>
              {/* Phase header */}
              <div className="mb-12 border-l-4 border-brand-gold pl-4 text-left">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">Category Block</span>
                <h2 className="text-2xl md:text-3xl font-light text-brand-charcoal tracking-tight mt-1">{phase.name}</h2>
              </div>

              {/* Steps Timeline Grid */}
              <div className="space-y-16 md:space-y-20 relative before:absolute before:inset-y-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-brand-charcoal/10">
                {phase.steps.map((step, idx) => {
                  const stepGlobalIdx = allSteps.findIndex(s => s.number === step.number);
                  const isEven = idx % 2 === 0;
                  
                  return (
                    <div 
                      key={step.number}
                      className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full ${
                        isEven ? '' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot marker */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-[7.5px] top-6 w-4 h-4 bg-brand-cream border-2 border-brand-gold rounded-full z-10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-brand-plum rounded-full" />
                      </div>

                      {/* Left/Right Text Detail Container */}
                      <motion.div 
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-[45%] pl-12 md:pl-0 text-left"
                      >
                        <span className="inline-flex items-center space-x-1.5 text-[10px] font-bold tracking-widest text-brand-plum bg-brand-plum/5 px-3 py-1 rounded-full mb-3 uppercase">
                          <CheckCircle2 size={10} className="stroke-[2.5]" />
                          <span>Step {step.number < 10 ? `0${step.number}` : step.number}</span>
                        </span>
                        
                        <h3 className="text-xl md:text-2xl font-light tracking-tight text-brand-charcoal mb-2 leading-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Left/Right Screenshot Picture Container */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-[45%] pl-12 md:pl-0"
                      >
                        <div 
                          onClick={() => setLightboxIndex(stepGlobalIdx)}
                          className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-brand-charcoal/5 border border-brand-charcoal/10 shadow-xxs hover:shadow-xs hover:border-brand-plum/30 transition-all cursor-zoom-in"
                        >
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                            loading="lazy"
                          />
                          
                          {/* Zoom hover label */}
                          <div className="absolute inset-0 bg-brand-charcoal/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="bg-white/10 backdrop-blur-xs border border-white/20 px-4 py-2 rounded-full text-white text-[10px] font-semibold uppercase tracking-widest flex items-center space-x-1.5">
                              <Camera size={12} />
                              <span>Enlarge Image</span>
                            </span>
                          </div>
                        </div>
                      </motion.div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Floating Scroll to Top button on Mobile */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 lg:hidden p-3 rounded-full bg-brand-plum text-white shadow-md hover:bg-brand-charcoal transition-all border border-brand-plum/10 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-brand-charcoal/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Modal Header */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/70 select-none z-10" onClick={e => e.stopPropagation()}>
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
                  Procurement Workflow
                </span>
                <span className="text-sm font-light text-white mt-1">
                  Step {allSteps[lightboxIndex].number < 10 ? `0${allSteps[lightboxIndex].number}` : allSteps[lightboxIndex].number} — {allSteps[lightboxIndex].title}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left/Right controls */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex - 1 + allSteps.length) % allSteps.length);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer hidden md:block"
              aria-label="Previous step"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((lightboxIndex + 1) % allSteps.length);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full border border-white/10 transition-all focus:outline-none cursor-pointer hidden md:block"
              aria-label="Next step"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Picture Frame */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-[90vw] max-h-[80vh] overflow-hidden rounded-lg border border-white/10 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allSteps[lightboxIndex].image}
                alt={allSteps[lightboxIndex].title}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Mobile swipe controls */}
            <div className="absolute bottom-8 flex md:hidden items-center justify-center space-x-6 text-white/80 select-none" onClick={e => e.stopPropagation()}>
              <button 
                onClick={() => setLightboxIndex((lightboxIndex - 1 + allSteps.length) % allSteps.length)} 
                className="p-3 bg-white/5 border border-white/10 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-xs tracking-widest font-mono">
                {lightboxIndex + 1} / {allSteps.length}
              </span>
              <button 
                onClick={() => setLightboxIndex((lightboxIndex + 1) % allSteps.length)} 
                className="p-3 bg-white/5 border border-white/10 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
