import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Process', href: '#process' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Disable body scroll when drawer is closed
    document.body.style.overflow = 'unset';

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
          isScrolled ? 'py-5' : 'py-7'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className={`flex items-center space-x-1 text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                isDarkTheme ? 'text-white' : 'text-brand-charcoal'
              }`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                document.body.style.overflow = 'unset';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Divine</span>
              <span className={`${isDarkTheme ? 'text-brand-gold' : 'text-brand-plum'} font-bold`}>*</span>
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
                {navLinks.map((link, idx) => (
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
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-3xl md:text-5xl font-extralight tracking-tight text-white hover:text-brand-gold hover:pl-4 transition-all duration-300 block"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Drawer Footer Details */}
            <div className="max-w-7xl mx-auto w-full px-8 md:px-24 pb-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white/40 text-xxs font-light tracking-widest uppercase gap-4">
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
