import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold font-light text-lg tracking-wide">
          © Bijouterie DAMAS. All Rights Reserved.
        </p>
        <Link 
          to="/politique-de-confidentialite" 
          className="text-gold hover:text-gold/80 underline text-sm mt-4 block transition-colors"
        >
          Politique de confidentialité
        </Link>
      </div>
    </footer>
  );
};

export default Footer;