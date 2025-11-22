import React, { useState } from 'react';

const ReviewCard = ({ review, index }) => {
  return (
    <div className="group relative bg-gray-800/90 backdrop-blur-sm rounded-xl px-5 py-4 border border-gray-700/40 shadow-[0_2px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out flex flex-col flex-shrink-0 w-[320px] sm:w-[360px] md:w-[400px]">
      {/* Satin effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with Profile */}
        <div className="flex items-center gap-3 mb-3">
          {/* Incognito Icon */}
          <div className="flex-shrink-0">
            <div className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-600/50 bg-gray-700/50">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </div>
          </div>
          
          {/* Name and Rating */}
          <div className="flex-grow min-w-0">
            <h3 className="text-white font-medium text-sm mb-1 tracking-tight">
              Client
            </h3>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 text-gold flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        
        {/* Review Text */}
        <p className="text-white text-xs sm:text-sm leading-relaxed font-light tracking-wide line-clamp-2">
          {review}
        </p>
      </div>
    </div>
  );
};

const Reviews = () => {
  const reviews = [
    "Ils offrent le meilleur service à la clientèle à Gatineau et leurs prix sont très bons.",
    "Je recommande vivement ! Ils font un travail magnifique, s'adaptent à vos besoins et préférences et leurs prix sont raisonnables. J'ai vu deux magnifiques bagues de fiançailles et ils ont pu transformer un bracelet sentimental en boucles d'oreilles.",
    "Quelques réparations pour ma bague et traitement rhodiage pour ma bague et ma chaîne. Excellent service, ce fût rapide et des prix abordables. Merci",
    "Service merveilleux et personnes honnêtes. Ils ont fait des efforts pour nous éduquer sur les diamants et leur qualité. Un plaisir de faire affaire ici",
    "J'ai fait fabriquer une bague de fiançailles sur mesure par George. Le service était excellent, et George était formidable tout au long du processus ! Bonne communication, bon service pour un bon prix ! Merci encore, George, pour la belle bague ! ❤️ Si vous rêvez de quelque chose, n'importe quoi, George peut le faire 😍💪 a dépassé mes attentes !!",
    "Gens sympathiques, service rapide. Le meilleur endroit où je suis allé. Je n'ai jamais vu mes bijoux polis aussi bien et la qualité du travail pour réparer mes bijoux est la meilleure. Je reviendrai encore.",
    "Nous fréquentons Bijouterie Damas depuis quelques années maintenant et nous sommes toujours chaleureusement accueillis et très satisfaits. Nos bijoux sont toujours magnifiques et le service n'est rien de moins qu'incroyable. Récemment, nous avons acheté nos alliances ici et ils m'ont aidé à trouver l'alliance parfaite pour accompagner ma bague de fiançailles.",
    "Très belle réparation de joncs de mariage et nettoyage des bagues éclatants. Service très rapide et courtois. Merci!",
    "Le service était rapide et efficace! Les employés sont sympathiques. Je suis très satisfaite du résultat pour ma montre.",
    "J'ai fait faire un collier sertie de diamants et je suis vraiment étonné par sa beauté. Je suis extrêmement satisfaite. De plus le service a été AAA, le personnel a été vraiment gentil et avenant. Ils ont fait des extras que je ne m'attendais pas. Merci beaucoup et je recommande la bijouterie Damas de Aylmer.",
    "Merci pour le service incroyable et la bague sur mesure. Elle a été fabriquée de qualité supérieure et exactement comme prévu. Merci d'avoir pris le temps de travailler sur le design et surtout pour les bons conseils en termes de matériau et de style.",
    "Damas est l'une des meilleures bijouteries où j'ai jamais été. Le personnel est si amical et prendra le temps de répondre à toutes vos questions. Leur inventaire est incroyable, plein de nouveaux modèles et leurs prix sont très compétitifs. Fortement recommandé!",
    "Service fantastique ! J'ai apporté ma bague pour la redimensionner et ils l'ont réparée, polie et nettoyée seulement quelques heures plus tard à un prix raisonnable.",
    "Le meilleur service à la clientèle. Ils peuvent estimer votre chaîne gratuitement et ils ont des prix très compétitifs. Je recommande définitivement leurs services",
    "Excellent service avec de très bons produits et prix. Je recommanderais à quiconque souhaite acheter ou réparer des bijoux !"
  ];

  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews multiple times for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section id="avis" className="relative bg-black py-3 sm:py-4 overflow-hidden">
      <div className="relative w-full">
        {/* Scrolling container */}
        <div 
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div 
            className="flex animate-scroll gap-6 sm:gap-8"
            style={{
              animation: isPaused ? 'scroll 80s linear infinite paused' : 'scroll 80s linear infinite',
              width: 'fit-content',
              willChange: 'transform'
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index % reviews.length} />
            ))}
          </div>
        </div>
        
        {/* Subtle gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        
        /* Hide scrollbar for mobile */
        div[style*="overflowX"]::-webkit-scrollbar {
          display: none;
        }
        
        /* Ensure smooth animation */
        .animate-scroll {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </section>
  );
};

export default Reviews;

