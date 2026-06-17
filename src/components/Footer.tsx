import React from 'react';

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-cream border-t border-brand-charcoal/10 py-16 md:py-20 text-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-brand-charcoal/10">
          
          {/* Brand Logo column */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-1 text-2xl font-semibold tracking-tight"
            >
              <span>Divine</span>
              <span className="text-brand-plum font-bold">*</span>
            </a>
            <p className="text-xs md:text-sm text-brand-charcoal/50 font-light max-w-xs leading-relaxed tracking-wide">
              Turnkey hotel FF&E design, sourcing, and logistics for premium hospitality properties globally.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold mb-4">
              Explore
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, '#services')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                Services
              </a>
              <a
                href="#our-work"
                onClick={(e) => handleLinkClick(e, '#our-work')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                Our Work
              </a>
              <a
                href="#process"
                onClick={(e) => handleLinkClick(e, '#process')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                Process
              </a>
              <a
                href="#insights"
                onClick={(e) => handleLinkClick(e, '#insights')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                Insights
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Offices Column */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            <div>
              <h5 className="text-[9px] font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Irving TX
              </h5>
              <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-light tracking-wide">
                125 E John Carpenter <br />
                Suite 500 <br />
                Irving, TX 75062
              </p>
            </div>

            <div>
              <h5 className="text-[9px] font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Zhangzhou
              </h5>
              <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-light tracking-wide">
                88 Shengli Rd <br />
                Longwen District <br />
                Zhangzhou, China
              </p>
            </div>

            <div>
              <h5 className="text-[9px] font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Abu Dhabi
              </h5>
              <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-light tracking-wide">
                Al Khatem Tower <br />
                Al Maryah Island <br />
                Abu Dhabi, UAE
              </p>
            </div>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-8 text-[11px] text-brand-charcoal/50 font-light tracking-wide space-y-4 sm:space-y-0">
          <div>
            <span>&copy; {currentYear} Divine Design and Procurement LLC. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="mailto:yogin@hotelprocurement.net" className="hover:text-brand-plum transition-colors">
              yogin@hotelprocurement.net
            </a>
            <span className="text-brand-charcoal/20">|</span>
            <span>Domain: hotelprocurement.net</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
