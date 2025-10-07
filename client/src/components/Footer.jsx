import React from 'react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logoDamas.png" alt="Bijouterie DAMAS" className="w-56 h-56 object-cover rounded-xl" />
              <div>
                <h3 className="text-lg font-medium text-white">Bijouterie DAMAS</h3>
                <p className="text-sm text-gray-400">Gatineau, QC</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-sm">
              Création de bijoux sur mesure et objets uniques faits à la main depuis les années 1990. 
              Transformez votre vision en bijoux exceptionnels.
            </p>
                <button
                  onClick={scrollToTop}
                  className="btn-ghost-enhanced"
                >
                  Retour en haut
                </button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-medium text-white mb-6">Navigation</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="btn-secondary-enhanced w-full text-sm px-4 py-2"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="btn-secondary-enhanced w-full text-sm px-4 py-2"
              >
                À Propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-secondary-enhanced w-full text-sm px-4 py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary-enhanced w-full text-sm px-4 py-2"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-medium text-white mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm">
                <a href="mailto:info.bijouteriedamas@gmail.com" className="hover:text-white transition-colors duration-200">
                  info.bijouteriedamas@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <a href="tel:+16138794959" className="hover:text-white transition-colors duration-200">
                  +1 (613) 879-4959
                </a>
              </p>
              <p className="text-sm leading-relaxed">
                181 Principale St<br />
                Gatineau, QC J9H 6A6
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2024 Bijouterie DAMAS. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
