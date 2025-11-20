import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button 
              onClick={() => navigate('/')}
              className="btn-luxury-primary no-underline"
            >
              Retour à l'accueil
            </button>
          </div>
          
          <h1 className="text-gold text-4xl font-light mb-8 text-center">
            Politique de Confidentialité
          </h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Cette politique de confidentialité décrit la manière dont nous collectons, utilisons et protégeons les informations que vous nous fournissez via notre formulaire de contact.
            </p>

            <section>
              <h2 className="text-gold text-2xl font-light mb-4 mt-8">
                Données collectées
              </h2>
              <p className="mb-4">
                Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :
              </p>
              <ul className="list-disc list-inside ml-4 mt-6 space-y-2">
                <li>Votre nom</li>
                <li>Votre adresse e-mail</li>
                <li>Votre numéro de téléphone (optionnel)</li>
                <li>Votre message</li>
              </ul>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-light mb-4 mt-8">
                Utilisation des informations
              </h2>
              <p>
                Les informations que vous nous fournissez sont utilisées exclusivement pour répondre à vos demandes, assurer le bon fonctionnement de notre formulaire de contact et prévenir tout usage frauduleux.
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-light mb-4 mt-8">
                Partage des données
              </h2>
              <p>
                Nous ne vendons ni ne partageons vos données personnelles avec des tiers. Nous ne divulguons vos informations que dans les cas où la loi l'exige expressément.
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-light mb-4 mt-8">
                Sécurité
              </h2>
              <p>
                Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, toute modification, toute divulgation ou toute destruction.
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-light mb-4 mt-8">
                Vos droits
              </h2>
              <p>
                Vous avez le droit de demander l'accès, la modification ou la suppression de vos données personnelles. Pour exercer ces droits, veuillez nous contacter à l'adresse suivante :{' '}
                <a href="mailto:info.bijouteriedamas@gmail.com" className="text-gold hover:text-gold/80 underline">
                  info.bijouteriedamas@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-gold text-2xl font-light mb-4 mt-8">
                Modifications de la politique
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

