import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 px-2">
          <div className="flex items-center space-x-2">
            <img src="/logoDamas.png" alt="Bijouterie DAMAS" className="rounded-full" />
           
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
              onClick={() => scrollToSection('contact')}
              className="btn-nav-primary"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white/90 hover:text-white transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="btn-nav-secondary w-full"
              >
                Accueil
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