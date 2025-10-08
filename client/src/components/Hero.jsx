import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useScrollAnimation(0.2);
  const subtitleRef = useScrollAnimation(0.2);
  const descriptionRef = useScrollAnimation(0.2);
  const buttonsRef = useScrollAnimation(0.2);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden section-white">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-white/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-white/8 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-white/6 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-3xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl">
            <div ref={titleRef} className="slide-in-top-on-scroll">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 leading-tight tracking-tight">
                Bijouterie DAMAS
              </h1>
            </div>
            
            <div ref={subtitleRef} className="fade-in-scale-on-scroll delay-200">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
            </div>
            
            <div ref={descriptionRef} className="fade-in-on-scroll delay-400">
              <p className="text-lg sm:text-xl lg:text-2xl text-gold-dark mb-8 leading-relaxed font-light max-w-3xl mx-auto">
                Création de bijoux sur mesure et objets uniques faits à la main
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                Située à Gatineau, notre entreprise transforme votre vision en bijoux exceptionnels
                depuis les années 1990. Chaque pièce raconte une histoire unique.
              </p>
            </div>

            <div ref={buttonsRef} className="fade-in-on-scroll delay-600">
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button
                  onClick={scrollToContact}
                  className="btn-luxury-primary"
                  aria-label="Réserver une consultation gratuite"
                >
                  Consultation Gratuite
                </button>
                <button
                  onClick={scrollToServices}
                  className="btn-luxury-secondary"
                  aria-label="Découvrir nos services de bijouterie"
                >
                  Nos Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;