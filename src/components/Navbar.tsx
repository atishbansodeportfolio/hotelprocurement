import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [ourWorkOpen, setOurWorkOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const path = location.pathname;
      // Pages that feature a full-bleed dark hero header at the top
      const hasDarkHero = path === '/' || path === '/about';

      if (!hasDarkHero) {
        setIsScrolled(true);
      } else {
        // Shrink logo and animate navbar on the first scroll (20px threshold)
        const threshold = 20;
        if (window.scrollY > threshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }

      // Hide navbar when scrolled on /how-its-done page
      if (path === '/how-its-done') {
        if (window.scrollY > 50) {
          setHideNavbar(true);
        } else {
          setHideNavbar(false);
        }
      } else {
        setHideNavbar(false);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      setOurWorkOpen(false);
    }
  }, [isOpen]);

  interface SubLink {
    name: string;
    href: string;
  }

  interface NavLink {
    name: string;
    href?: string;
    subLinks?: SubLink[];
  }

  const navLinks: NavLink[] = [
    { name: 'About Us', href: '/about' },
    { 
      name: 'Our Work', 
      subLinks: [
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' }
      ]
    },
    { name: 'Lookbook', href: '/services/offerings/premium-casegoods' },
    { name: 'How It\'s Done', href: '/how-its-done' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Disable body scroll when drawer is closed
    document.body.style.overflow = 'unset';

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

  const toggleDrawer = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  // Determine text and icon colors
  const isDarkTheme = isOpen;
  const textColorClass = isOpen ? 'text-white hover:text-brand-gold' : 'text-brand-charcoal hover:text-brand-plum';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hideNavbar && !isOpen ? 'transform -translate-y-full opacity-0 pointer-events-none' : ''
        } ${
          isOpen
            ? 'bg-transparent ' + (isScrolled ? 'py-4' : 'py-7')
            : isScrolled
              ? 'bg-white/95 backdrop-blur-md border-b border-brand-charcoal/5 shadow-xxs py-4'
              : 'bg-white/95 backdrop-blur-md py-5 border-b border-brand-charcoal/5 shadow-xxs'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between w-full">
            {/* Left Column (Logo) */}
            <div className="flex-none md:flex-1 flex justify-start">
              <a
                href="#"
                className={`flex items-center space-x-3 transition-colors duration-300 ${isDarkTheme ? 'text-white' : 'text-brand-charcoal'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.body.style.overflow = 'unset';
                  if (window.location.pathname !== '/') {
                    navigate('/');
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <img 
                  src="/favicon-2.png" 
                  alt="Divine Design & Procurement Icon" 
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? 'h-9' : 'h-12'
                  }`}
                />
                <img 
                  src="/new-logo.png" 
                  alt="Divine Design & Procurement Logo" 
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? 'h-[34px]' : 'h-[46px]'
                  }`}
                />
              </a>
            </div>

            {/* Middle Column (Centered Menus) */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-8 lg:space-x-10">
                {navLinks.filter(link => link.name !== 'Contact').map((link) => {
                  if (link.subLinks) {
                    return (
                      <div key={link.name} className="group py-2">
                        <button className="text-[11px] uppercase tracking-widest font-semibold text-brand-charcoal/80 hover:text-brand-plum transition-colors duration-300 flex items-center space-x-1 focus:outline-none cursor-pointer">
                          <span>{link.name}</span>
                          <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <div className="absolute left-0 right-0 w-full top-full bg-white border-t border-b border-brand-charcoal/5 shadow-md py-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50 text-left before:absolute before:content-[''] before:left-0 before:right-0 before:-top-8 before:h-8">
                          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-4 gap-8 lg:gap-12">
                            {/* Column 1: Featured Case Studies */}
                            <div className="flex flex-col space-y-3">
                              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold">Featured Projects</span>
                              <a href="/projects/americinn-pampa" onClick={(e) => handleLinkClick(e, '/projects/americinn-pampa')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">AmericInn Pampa, TX</a>
                              <a href="/projects/best-western-montrose" onClick={(e) => handleLinkClick(e, '/projects/best-western-montrose')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">Best Western Montrose, CO</a>
                              <a href="/projects/hampton-inn-st-louis" onClick={(e) => handleLinkClick(e, '/projects/hampton-inn-st-louis')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">Hampton Inn St. Louis, IL</a>
                              <a href="/projects" onClick={(e) => handleLinkClick(e, '/projects')} className="text-[13px] md:text-sm font-semibold text-brand-plum hover:underline pt-1">All Case Studies &rarr;</a>
                            </div>

                            {/* Column 2: Procurement Services */}
                            <div className="flex flex-col space-y-3">
                              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold">Our Services</span>
                              <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">Custom Casegoods</a>
                              <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">Soft Seating Programs</a>
                              <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">Logistics & Freight</a>
                              <a href="/services" onClick={(e) => handleLinkClick(e, '/services')} className="text-[13px] md:text-sm font-semibold text-brand-plum hover:underline pt-1">Explore Services &rarr;</a>
                            </div>

                            {/* Column 3: Standards & Compliance */}
                            <div className="flex flex-col space-y-3">
                              <span className="text-xs uppercase tracking-wider font-bold text-brand-gold">Compliance & PIP</span>
                              <a href="/how-its-done" onClick={(e) => handleLinkClick(e, '/how-its-done')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">IHG Formula Blue</a>
                              <a href="/how-its-done" onClick={(e) => handleLinkClick(e, '/how-its-done')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">Hilton Forever Young</a>
                              <a href="/how-its-done" onClick={(e) => handleLinkClick(e, '/how-its-done')} className="text-[13px] md:text-sm font-medium text-brand-charcoal/70 hover:text-brand-plum transition-colors">Wyndham Standards</a>
                              <a href="/how-its-done" onClick={(e) => handleLinkClick(e, '/how-its-done')} className="text-[13px] md:text-sm font-semibold text-brand-plum hover:underline pt-1">How It's Done &rarr;</a>
                            </div>

                            {/* Column 4: Sourcing Showcase Image Card */}
                            <a href="/services/offerings/premium-casegoods" className="block relative overflow-hidden rounded-xl bg-brand-charcoal/5 border border-brand-charcoal/10 h-56 flex flex-col justify-end p-5 group/image cursor-pointer animate-fade-in" onClick={(e) => handleLinkClick(e, '/services/offerings/premium-casegoods')}>
                              <img 
                                src="/images/Hotel_guest_room_interior_warm_202606172336.jpeg" 
                                alt="Premium interior showcase" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/90 via-brand-charcoal/20 to-transparent z-10" />
                              <div className="relative z-20 text-left">
                                <span className="text-[9px] md:text-[10px] uppercase tracking-wider font-bold text-brand-gold">Featured Lookbook</span>
                                <h4 className="text-white text-[13px] md:text-sm font-semibold mt-0.5 leading-tight">Guestroom Sourcing</h4>
                                <p className="text-white/75 text-[10px] md:text-xs mt-1 font-light leading-snug">Turnkey custom casegoods and upholstery.</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href || '#')}
                      className="text-[11px] uppercase tracking-widest font-semibold text-brand-charcoal/80 hover:text-brand-plum transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column (CTA / Mobile Toggle Button) */}
            <div className="flex-none md:flex-1 flex justify-end items-center space-x-4">
              {/* CTA Button (Desktop only) */}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="hidden md:inline-flex items-center justify-center bg-brand-charcoal hover:bg-brand-plum text-white px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-xxs hover:shadow-xs cursor-pointer select-none"
              >
                Get in Touch
              </a>

              {/* Mobile Toggle Button */}
              <button
                onClick={toggleDrawer}
                className={`md:hidden focus:outline-none transition-colors duration-300 z-50 hover:opacity-85 ${textColorClass}`}
                aria-label="Toggle Navigation Drawer"
              >
                {isOpen ? (
                  <Minus size={28} className="stroke-[1.25]" />
                ) : (
                  <Plus size={28} className="stroke-[1.25]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-charcoal/95 backdrop-blur-md flex flex-col justify-between"
          >
            {/* Links Content Container */}
            <div className="flex-grow flex flex-col justify-center max-w-7xl mx-auto w-full px-8 md:px-24">
              <div className="flex flex-col space-y-6 md:space-y-8 text-left">
                {navLinks.map((link, idx) => {
                  if (link.subLinks) {
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.1 + idx * 0.06,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="flex flex-col"
                      >
                        <button
                          onClick={() => setOurWorkOpen(!ourWorkOpen)}
                          className="text-3xl md:text-5xl font-extralight tracking-tight text-white hover:text-brand-gold text-left focus:outline-none transition-all duration-300 flex items-center gap-4 cursor-pointer"
                        >
                          <span>{link.name}</span>
                          <span className={`text-xl md:text-2xl font-light text-white/40 transition-transform duration-300 ${ourWorkOpen ? 'rotate-90' : ''}`}>
                            ➔
                          </span>
                        </button>
                        <AnimatePresence>
                          {ourWorkOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="pl-6 md:pl-10 mt-3 md:mt-4 space-y-3 md:space-y-4 overflow-hidden border-l border-brand-gold/25"
                            >
                              {link.subLinks.map((subLink) => (
                                <a
                                  key={subLink.name}
                                  href={subLink.href}
                                  onClick={(e) => handleLinkClick(e, subLink.href)}
                                  className="text-xl md:text-3xl font-extralight tracking-tight text-white/80 hover:text-brand-gold hover:pl-2 transition-all duration-300 block"
                                >
                                  {subLink.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + idx * 0.06,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href!)}
                        className="text-3xl md:text-5xl font-extralight tracking-tight text-white hover:text-brand-gold hover:pl-4 transition-all duration-300 block"
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Details */}
            <div className="max-w-7xl mx-auto w-full px-8 md:px-24 pb-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white/40 text-xs font-light tracking-widest uppercase gap-4">
              <span>Divine Design & Procurement LLC</span>
              <a href="mailto:yogin@hotelprocurement.net" className="hover:text-brand-gold transition-colors">
                yogin@hotelprocurement.net
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
