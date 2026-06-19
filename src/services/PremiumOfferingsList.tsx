import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PremiumOffering } from './types';

// Custom SVG Icons matching the style of the portfolio
const CasegoodsIcon = () => (
  <svg className="w-10 h-10 text-brand-plum flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="18" height="12" rx="1" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <circle cx="8" cy="9" r="0.75" fill="currentColor" />
    <circle cx="16" cy="9" r="0.75" fill="currentColor" />
    <circle cx="8" cy="15" r="0.75" fill="currentColor" />
    <circle cx="16" cy="15" r="0.75" fill="currentColor" />
    <line x1="6" y1="18" x2="6" y2="21" />
    <line x1="18" y1="18" x2="18" y2="21" />
  </svg>
);

const SoftSeatingIcon = () => (
  <svg className="w-10 h-10 text-brand-plum flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11V17H21V11" />
    <path d="M2 17v-4c0-1.5 1-2 2-2h16c1 0 2 .5 2 2v4" />
    <path d="M4 9V7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2" />
    <line x1="6" y1="17" x2="6" y2="19" />
    <line x1="18" y1="17" x2="18" y2="19" />
  </svg>
);

const BespokeIcon = () => (
  <svg className="w-10 h-10 text-brand-plum flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v11" />
    <path d="M2 14h20" />
    <path d="M6 14v6" />
    <path d="M18 14v6" />
    <path d="M5 7V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
  </svg>
);

const DoorsWindowsIcon = () => (
  <svg className="w-10 h-10 text-brand-plum flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="9" y1="12" x2="10" y2="12" />
    <line x1="12" y1="12" x2="21" y2="12" />
  </svg>
);

const TheaterSeatingIcon = () => (
  <svg className="w-10 h-10 text-brand-plum flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 10a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0v-2z" />
    <path d="M14 10a4 4 0 0 1 8 0v2a4 4 0 0 1-8 0v-2z" />
    <path d="M5.5 13.5A1.5 1.5 0 0 0 8 11.5h-5a1.5 1.5 0 0 0 2.5 2z" />
    <path d="M17.5 13.5a1.5 1.5 0 0 0 2.5-2h-5a1.5 1.5 0 0 0 2.5 2z" />
    <circle cx="5" cy="9" r="0.5" fill="currentColor" />
    <circle cx="7" cy="9" r="0.5" fill="currentColor" />
    <circle cx="17" cy="9" r="0.5" fill="currentColor" />
    <circle cx="19" cy="9" r="0.5" fill="currentColor" />
  </svg>
);

const iconMap: Record<string, React.ComponentType> = {
  casegoods: CasegoodsIcon,
  seating: SoftSeatingIcon,
  bespoke: BespokeIcon,
  doors: DoorsWindowsIcon,
  theater: TheaterSeatingIcon,
};

const offerings: PremiumOffering[] = [
  {
    slug: 'premium-casegoods',
    title: 'Premium Casegoods',
    description: 'Meticulously crafted furniture such as dressers, nightstands, desks, and credenzas, built for durability and sophisticated design.',
    iconName: 'casegoods',
    defaultCategoryPage: 6, // Chairs & Benches
  },
  {
    slug: 'soft-seating',
    title: 'Soft Seating',
    description: 'Comfortable and stylish sofas, chairs, and ottomans, perfect for lobbies, guest rooms, and common areas.',
    iconName: 'seating',
    defaultCategoryPage: 42, // Sofas
  },
  {
    slug: 'bespoke-furnishings',
    title: 'Bespoke Furnishings',
    description: 'Custom-designed pieces created to meet unique project specifications and design visions, ensuring your space stands out.',
    iconName: 'bespoke',
    defaultCategoryPage: 74, // Slim Collection Tables
  },
  {
    slug: 'doors-windows',
    title: 'Doors & Windows',
    description: 'Fire-rated entry doors, interior doors, and acoustic or insulated windows – sourced for safety, compliance, and seamless design integration.',
    iconName: 'doors',
    defaultCategoryPage: 128, // Leather & Fabric Colours
  },
  {
    slug: 'theater-auditorium-seating',
    title: 'Theater & Auditorium Seating',
    description: 'Ergonomic, high-capacity seating for conference rooms, banquet halls, and theaters – combining comfort with commercial-grade performance.',
    iconName: 'theater',
    defaultCategoryPage: 6, // Chairs & Benches
  },
];

export default function PremiumOfferingsList() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
            Exquisite Craftsmanship
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
            Our Premium Offerings
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light leading-relaxed tracking-wide">
            We provide a comprehensive range of high-quality furnishings designed to enhance the aesthetic and functionality of hospitality environments.
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-stretch">
          {offerings.map((offering, idx) => {
            const IconComponent = iconMap[offering.iconName] || CasegoodsIcon;
            
            // Adjust layouts: the 4th and 5th items span full width on medium screens or center nicely on larger grids
            const isLastTwo = idx >= 3;
            
            return (
              <motion.div
                key={offering.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => navigate(`/services/offerings/${offering.slug}`)}
                className={`group flex flex-col justify-between bg-brand-cream border border-brand-charcoal/10 hover:border-brand-plum/30 p-8 rounded-xl shadow-xs transition-all duration-300 hover:shadow-sm cursor-pointer select-none relative overflow-hidden min-h-[250px] ${
                  isLastTwo && idx === 3 ? 'lg:col-start-1 lg:col-span-1' : ''
                } ${isLastTwo && idx === 4 ? 'lg:col-start-2 lg:col-span-1' : ''}`}
              >
                {/* Decorative hover gradient border overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-brand-gold/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Header Row: Icon + Title */}
                  <div className="flex items-center space-x-5 mb-6">
                    <div className="p-3 bg-brand-gold/5 rounded-lg border border-brand-gold/10 group-hover:bg-brand-plum/5 group-hover:border-brand-plum/10 transition-all duration-300 transform group-hover:scale-105">
                      <IconComponent />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight text-brand-charcoal group-hover:text-brand-plum transition-colors duration-300">
                      {offering.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide mb-6">
                    {offering.description}
                  </p>
                </div>

                {/* Footer link */}
                <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-brand-gold group-hover:text-brand-plum transition-colors duration-300 pt-2 border-t border-brand-charcoal/5 group-hover:border-brand-plum/10">
                  <span>Explore Lookbook</span>
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <ArrowRight size={14} className="stroke-[2.5]" />
                  </motion.span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
