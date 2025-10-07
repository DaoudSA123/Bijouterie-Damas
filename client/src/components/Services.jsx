import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

function Services() {
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
      description: "Je commence toujours n'importe quel projet, même mes bagues de mariage et de fiançailles, en m'inspirant de designs classiques, même si la pièce se veut moderne ou abstraite. Ces techniques garantissent que votre pièce unique durera des années. Pour faire une demande personnalisée pour vos bagues de mariage et de fiançailles uniques et faites à la main, contactez-nous dès aujourd'hui.",
      image: "/ring01.jpg"
    },
    {
      id: 2,
      title: "Colliers en Or",
      description: "Ce collier en or a un design merveilleux et intemporel qui évoque la tranquillité et l'excellence. Avec sa grâce et ses lignes épurées, il traversera les âges. Appelez-moi pour le voir dans mon magasin ou en savoir plus sur l'article. Vous recherchez vos propres colliers en or entièrement fabriqués à la main et originaux ? Appelez pour réserver une consultation aujourd'hui.",
      image: "/collier.jpg"
    },
    {
      id: 3,
      title: "Bijoux Conçus sur Mesure",
      description: "Transformez vos bijoux conçus sur mesure en quelque chose de beau et d'unique. En fait, avec le bon créateur de bijoux à vos côtés, vous pourriez avoir les bijoux sur mesure époustouflants et astucieusement conçus de vos rêves. Faites une demande dès aujourd'hui et renseignez-vous sur d'autres produits sur mesure disponibles pour un achat immédiat.",
      image: "/ring02.jpg"
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
                        className="btn-primary-enhanced"
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
}

export default Services;
