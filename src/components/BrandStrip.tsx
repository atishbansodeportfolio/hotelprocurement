import React from 'react';

export default function BrandStrip() {
  const brands = [
    { name: 'Holiday Inn', logo: '/client-logos/holidayinn.jpg' },
    { name: 'Marriott', logo: '/client-logos/mariott.jpg' },
    { name: 'IHG', logo: '/client-logos/ihg.jpg' },
    { name: 'Hilton', logo: '/client-logos/hilton.jpg' },
    { name: 'Hyatt', logo: '/client-logos/hyatt.jpg' },
    { name: 'Best Western', logo: '/client-logos/best-western.jpg' },
    { name: 'Choice', logo: '/client-logos/choice.jpg' },
    { name: 'AmericInn', logo: '/client-logos/american.jpg' },
    { name: 'Bismarck Hotel', logo: '/client-logos/bismarck.jpg' },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-cream border-t border-brand-charcoal/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Title */}
        <div className="text-center">
          <span className="text-xxs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            Brand Partners
          </span>
          <h2 className="text-lg md:text-xl font-medium tracking-wide text-brand-charcoal/80 mt-2">
            Trusted by the World's Leading Hospitality Names
          </h2>
        </div>
      </div>

      {/* Infinite scrolling cards marquee */}
      <div className="w-full overflow-hidden select-none flex">
        
        {/* Infinite scrolling block 1 */}
        <div className="animate-marquee flex items-center justify-around">
          {brands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center p-4 md:p-6 bg-white border border-brand-charcoal/10 rounded-xl md:rounded-2xl aspect-[5/3] w-32 md:w-56 shadow-xxs hover:shadow-xs hover:border-brand-plum/30 transition-all duration-300 group mx-2 md:mx-4"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-[85%] max-w-[85%] object-contain opacity-100 md:opacity-60 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        {/* Infinite scrolling block 2 (identical duplicate) */}
        <div className="animate-marquee flex items-center justify-around" aria-hidden="true">
          {brands.map((brand, idx) => (
            <div
              key={`${brand.name}-dup-${idx}`}
              className="flex-shrink-0 flex items-center justify-center p-4 md:p-6 bg-white border border-brand-charcoal/10 rounded-xl md:rounded-2xl aspect-[5/3] w-32 md:w-56 shadow-xxs hover:shadow-xs hover:border-brand-plum/30 transition-all duration-300 group mx-2 md:mx-4"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-[85%] max-w-[85%] object-contain opacity-100 md:opacity-60 grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
