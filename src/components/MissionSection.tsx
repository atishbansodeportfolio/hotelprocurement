import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function MissionSection() {
  const [projectInput, setProjectInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Dispatch custom event to pre-fill the contact form message
    if (projectInput.trim()) {
      const event = new CustomEvent('prefillProject', { detail: projectInput });
      window.dispatchEvent(event);
    }
    
    const targetElement = document.querySelector('#contact');
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      // Focus on the name input after scroll finishes
      setTimeout(() => {
        const nameInput = document.querySelector('#name') as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus();
        }
      }, 800);
    }
  };

  return (
    <section className="relative pt-24 md:pt-36 pb-12 md:pb-16 bg-brand-cream overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Animated Headline with Inline Image */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-charcoal leading-[1.15] mb-10"
        >
          Where your vision <br />
          finds its{' '}
          <span className="inline-block align-middle mx-2 md:mx-3 w-20 md:w-32 h-10 md:h-16 rounded-full overflow-hidden border border-brand-plum/20 shadow-md transform -rotate-2 hover:rotate-0 transition-transform duration-300">
            <img
              src="/images/Hotel_guest_room_corner_warm_202606172336.jpeg"
              className="w-full h-full object-cover scale-110"
              alt="Warm hotel guest room corner"
              loading="lazy"
            />
          </span>{' '}
          home.
        </motion.h2>

        {/* Mission Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-brand-charcoal/80 font-light leading-relaxed max-w-3xl mx-auto mb-14 tracking-wide"
        >
          We are committed to redefining hotel procurement for the modern era — backed by a nationwide team of designers, architects, and project managers delivering every project with efficiency, elegance, and excellence.
        </motion.p>

        {/* Input-style CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between p-1.5 bg-white border border-brand-charcoal/10 rounded-full shadow-sm focus-within:border-brand-plum/30 transition-all duration-300"
          >
            <input
              type="text"
              placeholder="Have a project in mind?"
              value={projectInput}
              onChange={(e) => setProjectInput(e.target.value)}
              className="flex-grow pl-5 pr-2 py-2 text-xs md:text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 font-light bg-transparent border-none outline-none focus:ring-0 focus:outline-none text-left"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-2.5 text-xxs md:text-xs font-semibold uppercase tracking-wider text-white bg-brand-charcoal rounded-full hover:bg-brand-plum transition-all duration-300 cursor-pointer"
            >
              Request a Quote
            </button>
          </form>
        </motion.div>

        {/* Modern Building Image replaced with Staircase with glass balustrade */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative mt-16 max-w-3xl mx-auto overflow-hidden rounded-2xl border border-brand-charcoal/5 shadow-xxs"
        >
          <div className="relative aspect-[16/7] w-full">
            <img
              src="/images/Staircase_with_glass_balustrade_202606172336.jpeg"
              className="w-full h-full object-cover object-center"
              alt="Staircase with glass balustrade"
              loading="lazy"
            />
            {/* Smooth gradient fading into the cream background */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-cream via-brand-cream/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
