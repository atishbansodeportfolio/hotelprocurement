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
        const threshold = path === '/' ? window.innerHeight - 80 : 120;
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
  const isDarkTheme = isOpen || !isScrolled;
  const textColorClass = isDarkTheme ? 'text-white hover:text-brand-gold' : 'text-brand-charcoal hover:text-brand-plum';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hideNavbar && !isOpen ? 'transform -translate-y-full opacity-0 pointer-events-none' : ''
        } ${
          isOpen
            ? 'bg-transparent ' + (isScrolled ? 'py-4' : 'py-7')
            : isScrolled
              ? 'bg-brand-cream/40 backdrop-blur-sm shadow-xxs py-4'
              : 'bg-transparent py-7'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
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
                src="/logo-hotel-procurement.png" 
                alt="Divine Design & Procurement Logo" 
                className="h-10 w-auto object-contain"
              />
              <div className="flex flex-col text-left">
                <span className="text-xl font-semibold tracking-tight leading-none">Divine</span>
                <span className={`text-[9px] uppercase tracking-[0.22em] font-semibold mt-1.5 leading-none ${isDarkTheme ? 'text-brand-gold' : 'text-brand-plum'}`}>Procurement</span>
              </div>
            </a>

            {/* Right Side Plus/Minus Toggle */}
            <button
              onClick={toggleDrawer}
              className={`focus:outline-none transition-colors duration-300 z-50 hover:opacity-85 ${textColorClass}`}
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
