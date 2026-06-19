import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServicesCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-brand-cream border-t border-brand-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-charcoal mb-4">
          Ready to launch your project?
        </h2>
        <p className="text-sm md:text-base text-brand-charcoal/70 font-light tracking-wide max-w-xl mx-auto mb-8 leading-relaxed">
          Partner with Divine Design and Procurement to execute your PIP conversion or custom furniture program on time, on brand, and on budget.
        </p>
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
          <span>Request an Estimate</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </section>
  );
}
