import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useScrollAnimation(0.1);
  const processRef = useScrollAnimation(0.1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const services = [
    {
      id: 1,
      title: "Bagues de Mariage et de Fiançailles",
      description: "Je débute toujours chaque création, y compris les bagues de mariage et de fiançailles, en puisant mon inspiration dans les designs classiques, même lorsque la pièce adopte une touche moderne ou abstraite. Cette approche assure à votre bijou une élégance intemporelle et une durabilité exceptionnelle. Pour une création personnalisée et entièrement faite à la main, contactez-nous dès aujourd'hui.",
      image: "/ring.jpg"
    },
    {
      id: 2,
      title: "Colliers en Or",
      description: "Ce collier en or présente un design élégant et intemporel, symbolisant la tranquillité et le raffinement. Grâce à ses lignes épurées et à sa finesse, il conservera tout son éclat au fil du temps. Contactez-moi pour le découvrir en boutique ou pour obtenir plus d'informations. Vous souhaitez créer votre propre collier en or, entièrement fait à la main et unique ? Réservez dès aujourd'hui votre consultation personnalisée.",
      image: "/necklace.jpg"
    },
    {
      id: 3,
      title: "Bijoux Conçus sur Mesure",
      description: "Transformez vos idées en bijoux sur mesure d'une beauté et d'une originalité incomparables. Avec le bon créateur à vos côtés, vos rêves peuvent devenir des pièces uniques, élégantes et finement travaillées. Faites une demande dès aujourd'hui et découvrez nos autres créations personnalisées disponibles à l'achat.",
      image: "/hand.jpg"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-20 fade-in-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de services de création de bijoux sur mesure
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-8"></div>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => {
            const contentRef = useScrollAnimation(0.1);
            const imageRef = useScrollAnimation(0.1);
            
            return (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div ref={contentRef} className="fade-in-left-on-scroll">
                    <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 sm:p-10">
                      <h3 className="text-2xl sm:text-3xl font-light text-black mb-8 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <button
                        onClick={scrollToContact}
                        className="btn-luxury-primary"
                        aria-label="Demander une consultation personnalisée"
                      >
                        Demander une Consultation
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div ref={imageRef} className="fade-in-scale-on-scroll delay-300">
                    <div className="relative">
                      <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-4 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-56 h-56 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div ref={processRef} className="mt-32 fade-in-on-scroll delay-500">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl font-light text-black mb-4 tracking-tight">
              Notre Processus de Création
            </h3>
            <p className="text-gray-600">De l'idée à la réalisation</p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 text-center hover:bg-gold-light/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-black">1</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-3">Consultation</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Nous discutons de votre vision et vos besoins</p>
            </div>
            <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 text-center hover:bg-gold-light/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-black">2</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-3">Design</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Création d'un design unique et personnalisé</p>
            </div>
            <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 text-center hover:bg-gold-light/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-black">3</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-3">Fabrication</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Création artisanale avec les meilleurs matériaux</p>
            </div>
            <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 text-center hover:bg-gold-light/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-light text-black">4</span>
              </div>
              <h4 className="text-lg font-medium text-black mb-3">Livraison</h4>
              <p className="text-sm text-gray-700 leading-relaxed">Votre bijou unique prêt à être porté</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
