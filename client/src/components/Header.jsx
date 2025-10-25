import React, { useState, useEffect } from 'react';

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
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
              onClick={() => scrollToSection('galerie')}
              className="btn-nav-primary"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-nav-primary"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden btn-nav-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/30 backdrop-blur-lg border-t border-white/20">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="btn-nav-secondary w-full"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('galerie')}
                className="btn-nav-secondary w-full"
              >
                Galerie
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="btn-nav-secondary w-full"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-nav-secondary w-full"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-nav-secondary w-full"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;