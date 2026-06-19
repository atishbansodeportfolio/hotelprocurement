import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    } else {
      navigate('/' + href);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-cream border-t border-brand-charcoal/10 py-16 md:py-20 text-brand-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-brand-charcoal/10">
          
          {/* Brand Logo column */}
          <div className="col-span-2 md:col-span-4 flex flex-col space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (window.location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-3 text-brand-charcoal"
            >
              <img 
                src="/logo-hotel-procurement.png" 
                alt="Divine Design & Procurement Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col text-left">
                <span className="text-xl font-semibold tracking-tight leading-none">Divine</span>
                <span className="text-[9px] uppercase tracking-[0.22em] font-semibold mt-1.5 leading-none text-brand-plum">Procurement</span>
              </div>
            </a>
            <p className="text-xs md:text-sm text-brand-charcoal/50 font-light max-w-xs leading-relaxed tracking-wide">
              Turnkey hotel FF&E design, sourcing, and logistics for premium hospitality properties globally.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold mb-4">
              Explore
            </h4>
            <div className="flex flex-col space-y-3">
              <a
                href="/about"
                onClick={(e) => handleLinkClick(e, '/about')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                About Us
              </a>
              <a
                href="/projects"
                onClick={(e) => handleLinkClick(e, '/projects')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                Projects
              </a>
              <a
                href="/services/offerings/premium-casegoods"
                onClick={(e) => handleLinkClick(e, '/services/offerings/premium-casegoods')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                Lookbook
              </a>
              <a
                href="/how-its-done"
                onClick={(e) => handleLinkClick(e, '/how-its-done')}
                className="text-xs md:text-sm text-brand-charcoal/80 hover:text-brand-plum transition-colors font-light tracking-wide"
              >
                How It's Done
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
          <div className="col-span-1 md:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
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
