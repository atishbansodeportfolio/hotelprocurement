import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsGallery() {
  return (
    <section className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        

        {/* Gallery Image Grid with Perfect Alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stacked images (5 cols wide on md) */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {/* Top small image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-charcoal/10 shadow-sm group cursor-pointer"
            >
              <img
                src="/images/Hotel_exterior_white_stone_facade_202606172336.jpeg"
                alt="Hospitality exterior architecture facade"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-plum/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>

            {/* Bottom image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-brand-charcoal/10 shadow-sm group cursor-pointer"
            >
              <img
                src="/images/Hotel_guest_room_interior_warm_202606172336.jpeg"
                alt="Luxury guest room interior"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-plum/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Large image at top, and heading at the bottom */}
          <div className="md:col-span-7 flex flex-col gap-8 justify-between">
            {/* Top image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex-1 rounded-2xl overflow-hidden border border-brand-charcoal/10 shadow-md group cursor-pointer min-h-[300px]"
            >
              <img
                src="/images/Hotel_lobby_lounge_golden_hour_202606172336.jpeg"
                alt="Hotel lobby lounge with fireplace"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-plum/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>

            {/* Bottom text block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col justify-end text-left pb-4"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-3">
                Our Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal leading-tight">
                Crafting Excellence in Every Detail.
              </h2>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
