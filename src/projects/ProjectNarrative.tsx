import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from './types';

interface ProjectNarrativeProps {
  project: Project;
}

export default function ProjectNarrative({ project }: ProjectNarrativeProps) {
  const navigate = useNavigate();

  const paragraphs = (project.narrative && project.narrative.length > 0)
    ? project.narrative
    : [
        "Our Featured Showcase Concept represents the pinnacle of custom design and sourcing for premium hotel lobbies and public lounges. Designed to blur the lines between luxury, comfort, and functionality, this layout utilizes organic textures, warm gold finishes, and custom millwork.",
        "Every piece of furniture, from the grand circular sofas to the accent side tables, was fabricated to custom specifications. We integrated smart charging ports into the seating bases and selected stain-resistant, contract-grade textiles to ensure long-term durability in high-traffic hotel environments.",
        "This concept highlights our capability to handle bespoke design projects that go beyond standardized brand packages, offering boutique and luxury hotels a unique visual identity that elevates the guest arrival experience."
      ];

  return (
    <>
      {/* Narrative Copy paragraphs */}
      <div className="mt-10 md:mt-14 space-y-6 text-left max-w-3xl">
        {paragraphs.map((para, pIdx) => (
          <p 
            key={pIdx} 
            className="text-sm md:text-base text-brand-charcoal/80 font-light leading-relaxed tracking-wide"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Footer CTA Button */}
      <div className="mt-14 md:mt-16 border-t border-brand-charcoal/10 pt-10 text-left">
        <button
          onClick={() => {
            const contactEl = document.getElementById('contact');
            if (contactEl) {
              const navHeight = 80;
              const targetPosition = contactEl.getBoundingClientRect().top + window.scrollY - navHeight;
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
              });
            } else {
              navigate('/#contact');
            }
          }}
          className="inline-flex items-center space-x-3 bg-brand-charcoal hover:bg-brand-plum text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
        >
          <span>Get in Touch</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </>
  );
}
