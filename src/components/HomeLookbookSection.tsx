import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

interface LookbookTeaser {
  title: string;
  categoryName: string;
  image: string;
  count: number;
  route: string;
  description: string;
}

const teasers: LookbookTeaser[] = [
  {
    title: 'Sofas & Sectionals',
    categoryName: 'Sofas',
    image: '/lookbook/sofas/hero-4.jpeg',
    count: 8,
    route: '/services/offerings/soft-seating',
    description: 'Contract-grade sofas styled for hotel lobbies and suites.',
  },
  {
    title: 'Lounge Seating',
    categoryName: 'Clubchairs',
    image: '/lookbook/clubchairs/hero.png',
    count: 8,
    route: '/services/offerings/soft-seating',
    description: 'Deep comfort clubchairs in premium leather and textiles.',
  },
  {
    title: 'Premium Casegoods',
    categoryName: 'Cabinets',
    image: '/lookbook/cabinets/hero-8.jpeg',
    count: 8,
    route: '/services/offerings/premium-casegoods',
    description: 'Walnut credenzas, sideboards, and custom millwork wardrobes.',
  },
  {
    title: 'Textiles & Finishes',
    categoryName: 'Leather & Fabric Colours',
    image: '/lookbook/leather-fabric-colours/hero.jpeg',
    count: 11,
    route: '/services/offerings/doors-windows',
    description: 'Contract-grade swatches meeting high double-rub durability.',
  },
];

export default function HomeLookbookSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] border-t border-brand-charcoal/5 relative overflow-hidden">
      {/* Decorative background logo symbol */}
      <div className="absolute -left-[5%] bottom-[10%] w-72 h-72 border border-brand-gold/10 rounded-full pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
              Design Catalog
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-charcoal leading-tight">
              Explore Our Lookbook
            </h2>
            <p className="text-sm md:text-base text-brand-charcoal/70 font-light mt-4 leading-relaxed max-w-xl">
              Browse our curated directories of high-end, contract-grade furniture, fixtures, and finishes specified for major luxury hoteliers.
            </p>
          </div>
          
          <button
            onClick={() => navigate('/services/offerings/premium-casegoods')}
            className="group flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-plum transition-colors duration-300 self-start md:self-end border-b border-brand-gold/20 pb-1 cursor-pointer"
          >
            <span>View Full Directory</span>
            <ArrowRight size={14} className="stroke-[2.5] transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Catalog Teaser Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teasers.map((teaser, idx) => (
            <motion.div
              key={teaser.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => navigate(teaser.route)}
              className="group flex flex-col justify-between bg-white border border-brand-charcoal/10 p-6 rounded-xl hover:border-brand-plum/30 transition-all duration-300 hover:shadow-md cursor-pointer relative overflow-hidden"
            >
              <div>
                {/* Image Frame */}
                <div className="relative aspect-4/3 rounded-lg overflow-hidden bg-brand-charcoal/5 border border-brand-charcoal/5 mb-6">
                  <img
                    src={teaser.image}
                    alt={teaser.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-brand-charcoal/90 backdrop-blur-xs text-white text-[9px] font-mono tracking-wider px-2 py-1 rounded border border-white/10">
                    {teaser.count} Items
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-base font-semibold tracking-tight text-brand-charcoal group-hover:text-brand-plum transition-colors mb-2">
                  {teaser.title}
                </h3>
                <p className="text-xs text-brand-charcoal/60 font-light leading-relaxed mb-4">
                  {teaser.description}
                </p>
              </div>

              {/* Card Footer action */}
              <div className="flex items-center text-[10px] font-semibold uppercase tracking-wider text-brand-gold group-hover:text-brand-plum transition-colors pt-3 border-t border-brand-charcoal/5 mt-4">
                <BookOpen size={12} className="mr-1.5 stroke-[2]" />
                <span>Explore Catalog</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
