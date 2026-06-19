import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FounderDetails {
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
}

const founder: FounderDetails = {
  name: 'Yogin Patel',
  role: 'Founder & CEO',
  bio: 'Leading Divine with over 15 years of hospitality FF&E sourcing expertise. Yogin oversees global client partnerships and end-to-end procurement execution.',
  image: '/about-us/founder.jpeg',
  email: 'yogin@hotelprocurement.net',
  linkedin: 'https://linkedin.com',
};

export default function AboutUsTeam() {
  return (
    <section className="py-24 md:py-36 bg-brand-cream border-t border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 text-left">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold mb-4">
            Our Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
            Meet Our Founder
          </h2>
        </div>

        {/* Single Founder Profile Split Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center md:items-stretch bg-white border border-brand-charcoal/10 rounded-2xl overflow-hidden shadow-xxs p-6 md:p-10 lg:p-12 gap-8 md:gap-12 lg:gap-16 w-full"
        >
          {/* Left Side: Photo */}
          <div className="w-full md:w-[40%] aspect-[3/4] rounded-xl overflow-hidden border border-brand-charcoal/10 bg-brand-charcoal/5 flex-shrink-0 group shadow-xs">
            <img
              src={founder.image}
              alt={`${founder.name} - ${founder.role}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              loading="lazy"
            />
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-[60%] flex flex-col justify-between py-2 text-left">
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold bg-brand-gold/10 px-3 py-1 rounded-full mb-4">
                {founder.role}
              </span>
              
              <h3 className="text-3xl md:text-4xl font-light tracking-tight text-brand-charcoal mb-4">
                {founder.name}
              </h3>
              
              <p className="text-sm md:text-base text-brand-charcoal/70 font-light leading-relaxed tracking-wide mb-8">
                {founder.bio}
              </p>
            </div>

            {/* Contact details */}
            <div className="border-t border-brand-charcoal/5 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center space-x-2.5 text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide group"
              >
                <div className="p-2 rounded-full bg-brand-plum/5 text-brand-plum group-hover:bg-brand-plum group-hover:text-white transition-colors duration-300">
                  <Mail size={14} className="stroke-[2]" />
                </div>
                <span className="font-medium">{founder.email}</span>
              </a>

              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-plum transition-colors duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
