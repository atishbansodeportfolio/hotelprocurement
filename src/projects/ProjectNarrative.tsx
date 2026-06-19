import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Project } from './types';

interface ProjectNarrativeProps {
  project: Project;
}

export default function ProjectNarrative({ project }: ProjectNarrativeProps) {
  const navigate = useNavigate();

  // Rich descriptions mapping for each project
  const getExtendedDescription = (id: number) => {
    switch (id) {
      case 1:
        return [
          "Located in the heart of Fairhope, Alabama, this project involved a comprehensive guestroom and public space PIP renovation. Working closely with the franchise requirements, we delivered a modern aesthetic while strictly adhering to the corporate brand standards of Holiday Inn Express.",
          "Our scope included custom guestroom casegoods, tailored seating, contemporary lighting fixtures, and custom drapery. By managing direct global sourcing and freight logistics, we bypassed traditional markups and saved the client over 18% in procurement costs.",
          "The installation was phased to allow the hotel to remain operational, ensuring minimal impact on guest experience and revenue. The final inspection was passed with zero franchise deficiencies, setting a new benchmark for PIP execution in the region."
        ];
      case 2:
        return [
          "The Hampton Inn project in Farmington, Missouri, showcases our expertise in executing full-scope casegoods and custom upholstered seating. From detailed shop drawings to final onsite consolidation, our team managed every milestone of the development cycle.",
          "We collaborated with master craftsmen to develop premium wood veneers, custom-molded foam seating, and high-performance commercial fabrics. The lobby area was transformed into a warm, inviting communal hub designed to facilitate social interactions and morning dining services.",
          "Despite supply chain challenges, all materials were successfully consolidated in our regional warehouse and delivered to the property on a just-in-time schedule, enabling the installation team to complete the setup five days ahead of the original timeline."
        ];
      case 3:
        return [
          "Faced with a tight timeline and budget constraints, the ownership group of the Quality Inn in Bemidji, Minnesota, engaged us to value-engineer their guestroom PIP. We reviewed the original specifications and proposed high-quality, cost-effective material alternatives.",
          "By sourcing casegoods directly from premium factories and optimizing material specs without sacrificing durability or aesthetics, we reduced the total FF&E budget by 22%. The replacement items included custom headboards, desks, nightstands, and energy-efficient lighting.",
          "All products met or exceeded Choice Hotels QA requirements, passing the franchise brand inspection on the first attempt. The project demonstrates that value engineering can deliver beautiful, compliant results while protecting the owner's bottom line."
        ];
      default:
        return [
          "Our Featured Showcase Concept represents the pinnacle of custom design and sourcing for premium hotel lobbies and public lounges. Designed to blur the lines between luxury, comfort, and functionality, this layout utilizes organic textures, warm gold finishes, and custom millwork.",
          "Every piece of furniture, from the grand circular sofas to the accent side tables, was fabricated to custom specifications. We integrated smart charging ports into the seating bases and selected stain-resistant, contract-grade textiles to ensure long-term durability in high-traffic hotel environments.",
          "This concept highlights our capability to handle bespoke design projects that go beyond standardized brand packages, offering boutique and luxury hotels a unique visual identity that elevates the guest arrival experience."
        ];
    }
  };

  const paragraphs = getExtendedDescription(project.id);

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
