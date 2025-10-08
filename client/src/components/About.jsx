import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useScrollAnimation(0.1);
  const leftContentRef = useScrollAnimation(0.1);
  const rightContentRef = useScrollAnimation(0.1);
  const valuesRef = useScrollAnimation(0.1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('apropos');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="apropos" className="py-20 sm:py-24 lg:py-32 section-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20 fade-in-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6 tracking-tight">
            Notre Histoire
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={leftContentRef} className="fade-in-left-on-scroll">
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 sm:p-10">
              <h3 className="text-2xl sm:text-3xl font-light text-white mb-8 leading-tight">
                Une Passion Transformée en Expertise
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Fondée à Gatineau, la Bijouterie DAMAS est née d'une véritable passion pour la création de pièces uniques et artisanales. Depuis les années 1990, nous travaillons avec soin et savoir-faire des matériaux de toutes sortes pour concevoir des bijoux alliant élégance, qualité et authenticité.
                </p>
                <p>
                  Ce qui a commencé comme un simple passe-temps s'est transformé, au fil des années, en une véritable vocation et en une carrière dédiée à l'art de la bijouterie. Chaque création reflète notre engagement à offrir des pièces personnalisées qui racontent une histoire et mettent en valeur la beauté de ceux qui les portent.
                </p>
                <p>
                  Contactez-nous dès aujourd'hui pour découvrir notre savoir-faire et discuter de la création de votre bijou sur mesure.
                </p>
              </div>
            </div>
          </div>

          <div ref={rightContentRef} className="fade-in-right-on-scroll delay-300">
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-light text-white mb-2">30+</div>
                  <div className="text-sm text-gray-400 font-medium">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-light text-white mb-2">100%</div>
                  <div className="text-sm text-gray-400 font-medium">Fait à la main</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-light text-white mb-2">∞</div>
                  <div className="text-sm text-gray-400 font-medium">Créativité</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-light text-white mb-2">★</div>
                  <div className="text-sm text-gray-400 font-medium">Qualité</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="mt-24 fade-in-on-scroll delay-500">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center hover:bg-gold/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-3">Artisanat Unique</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Chaque pièce est une œuvre d'art originale</p>
            </div>
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center hover:bg-gold/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-3">Sur Mesure</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Création personnalisée selon vos désirs</p>
            </div>
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center hover:bg-gold/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-3">Matériaux Premium</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Or, argent et pierres précieuses</p>
            </div>
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 text-center hover:bg-gold/20 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-white mb-3">Service Local</h4>
              <p className="text-sm text-gray-400 leading-relaxed">À Gatineau, près de chez vous</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;