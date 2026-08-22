import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blog/data';

export default function InsightsGrid() {
  const featureCard = blogPosts[0];
  const listCards = blogPosts.slice(1, 4);

  return (
    <section id="insights" className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Our Blogs
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
            Divine Perspectives
          </h2>
          <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide">
            Analysis and perspectives on FF&E, manufacturing, and hotel design dynamics.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">

          {/* Left: 1 Large Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col group cursor-pointer"
          >
            <Link to={`/blog/${featureCard.slug}`} className="flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-sm border border-brand-charcoal/10 bg-brand-charcoal/5">
                <img
                  src={featureCard.image}
                  alt={featureCard.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-brand-cream border border-brand-charcoal/10 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider text-brand-plum">
                  {featureCard.category}
                </div>
              </div>

              {/* Text details */}
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-xxs font-semibold uppercase tracking-wider text-brand-gold">
                  Feature Story
                </span>
                <span className="text-brand-charcoal/30 text-xs">•</span>
                <span className="text-xxs text-brand-charcoal/50">{featureCard.date}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-light tracking-tight text-brand-charcoal mb-4 group-hover:text-brand-plum transition-colors duration-300 flex items-start justify-between">
                <span>{featureCard.title}</span>
                <ArrowUpRight size={20} className="text-brand-charcoal/20 group-hover:text-brand-plum transition-colors ml-4 flex-shrink-0 mt-1" />
              </h3>

              <p className="text-xs md:text-sm text-brand-charcoal/70 font-light leading-relaxed tracking-wide">
                {featureCard.description}
              </p>
            </Link>
          </motion.div>

          {/* Right: 3 Small Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:space-y-0">
            {listCards.map((card, idx) => (
              <motion.div
                key={card.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex items-start space-x-4 md:space-x-6 cursor-pointer group border-b border-brand-charcoal/10 pb-6 last:border-0 last:pb-0"
              >
                <Link to={`/blog/${card.slug}`} className="flex items-start space-x-4 md:space-x-6 w-full h-full">
                  {/* Image Thumbnail */}
                  <div className="relative w-24 md:w-32 aspect-square rounded-xl overflow-hidden shadow-xxs border border-brand-charcoal/10 bg-brand-charcoal/5 flex-shrink-0">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-left">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-brand-gold">
                        {card.category}
                      </span>
                      <span className="text-brand-charcoal/30 text-[8px]">•</span>
                      <span className="text-[9px] text-brand-charcoal/50">{card.date}</span>
                    </div>

                    <h4 className="text-base md:text-lg font-medium tracking-tight text-brand-charcoal mb-2 group-hover:text-brand-plum transition-colors duration-300 line-clamp-2">
                      {card.title}
                    </h4>

                    <p className="text-xxs md:text-xs text-brand-charcoal/60 font-light leading-relaxed tracking-wide line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
