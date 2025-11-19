import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      
      // Calculate opacity based on scroll position
      // Start fading earlier and faster to avoid content overlap
      const fadeStart = 50;
      const fadeEnd = 150;
      
      if (scrollY <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        // Smooth cubic-bezier fade for more natural transition
        const fadeProgress = (scrollY - fadeStart) / (fadeEnd - fadeStart);
        // Use ease-out curve for smoother fade
        const easedProgress = 1 - Math.pow(1 - fadeProgress, 3);
        setScrollOpacity(1 - easedProgress);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`${
          isScrolled ? 'bg-white/20 backdrop-blur-lg border-b border-white/20' : 'bg-transparent'
        }`}
        style={{ opacity: scrollOpacity }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 px-2">
            <div className="flex items-center space-x-2">
              <img src="/logoDamas.png" alt="Bijouterie DAMAS" className="rounded-full" style={{ filter: 'brightness(0)' }} />
           
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-3">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="btn-nav-primary"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="btn-nav-primary"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="btn-nav-primary"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-nav-primary"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-nav-primary"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button - Hidden, rendered separately below */}
            <button 
              className="md:hidden btn-nav-primary"
              style={{ visibility: 'hidden' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Fixed Mobile Menu Button - Rendered separately to stay visible */}
      {typeof document !== 'undefined' && createPortal(
        <button 
          className={`md:hidden btn-nav-primary mobile-menu-btn ${isScrolled ? 'mobile-menu-btn-scrolled' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ opacity: 1 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>,
        document.body
      )}

      {/* Mobile Menu Full-Screen Overlay - Rendered via Portal */}
      {isMenuOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="mobile-menu-overlay"
          onClick={(e) => {
            // Close menu if clicking on overlay background
            if (e.target === e.currentTarget) {
              setIsMenuOpen(false);
            }
          }}
        >
          <div className="mobile-menu-container">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mobile-menu-close"
              aria-label="Close menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <nav className="mobile-menu-nav">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="mobile-menu-item"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="mobile-menu-item"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="mobile-menu-item"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="mobile-menu-item"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mobile-menu-item"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Header;