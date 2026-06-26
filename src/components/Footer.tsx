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
          <div className="col-span-2 md:col-span-3 flex flex-col space-y-4">
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
                src="/favicon-2.png" 
                alt="Divine Design & Procurement Icon" 
                className="h-12 w-auto object-contain"
              />
              <img 
                src="/new-logo.png" 
                alt="Divine Design & Procurement Logo" 
                className="h-[46px] w-auto object-contain"
              />
            </a>
            <p className="text-xs md:text-sm text-brand-charcoal/50 font-light max-w-xs leading-relaxed tracking-wide">
              Turnkey hotel FF&E design, sourcing, and logistics for premium hospitality properties globally.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://www.linkedin.com/company/divine-procurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-charcoal/60 hover:text-brand-plum transition-colors"
                aria-label="LinkedIn Company"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hotelprocurement/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-charcoal/60 hover:text-brand-plum transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-span-1 md:col-span-2">
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
          <div className="col-span-2 md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
            <div>
              <h5 className="text-[9px] font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Divine Design & Procurement LLC
              </h5>
              <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-light tracking-wide">
                1200 W Walnut Hill Ln #1050 <br />
                Irving, Texas 75038 <br />
                <span className="block mt-2 text-brand-charcoal/40 font-normal">
                  +1 760 617 0800
                </span>
              </p>
            </div>

            <div>
              <h5 className="text-[9px] font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Akshar (Zhangzhou) Trading Co., Ltd
              </h5>
              <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-light tracking-wide">
                #2403, Building #1, Binjiangfu <br />
                Wanke community <br />
                No.101 Jinfeng South Road <br />
                Xiangcheng District <br />
                Zhangzhou City, Fujian Province <br />
                <span className="block mt-2 text-brand-charcoal/40 font-normal">
                  WeChat: ria71212 <br />
                  +86 198 904 42279
                </span>
              </p>
            </div>

            <div>
              <h5 className="text-[9px] font-semibold uppercase tracking-wider text-brand-gold mb-3">
                Akshar Impex Trading Company
              </h5>
              <p className="text-[11px] text-brand-charcoal/60 leading-relaxed font-light tracking-wide">
                Abu Dhabi, UAE <br />
                <span className="block mt-2 text-brand-charcoal/40 font-normal">
                  +971 50 724 8002
                </span>
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
