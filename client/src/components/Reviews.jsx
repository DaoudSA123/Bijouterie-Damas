import React from 'react';

const Reviews = () => {
  const reviews = [
    "Ils offrent le meilleur service à la clientèle à Gatineau et leurs prix sont très bons.",
    "Je recommande vivement ! Ils font un travail magnifique, s'adaptent à vos besoins et préférences et leurs prix sont raisonnables. J'ai vu deux magnifiques bagues de fiançailles et ils ont pu transformer un bracelet sentimental en boucles d'oreilles.",
    "Quelques réparations pour ma bague et traitement rhodiage pour ma bague et ma chaîne. Excellent service, ce fût rapide et des prix abordables. Merci",
    "Service merveilleux et personnes honnêtes. Ils ont fait des efforts pour nous éduquer sur les diamants et leur qualité. Un plaisir de faire affaire ici",
    "J'ai fait fabriquer une bague de fiançailles sur mesure par George. Le service était excellent, et George était formidable tout au long du processus ! Bonne communication, bon service pour un bon prix ! Merci encore, George, pour la belle bague ! ❤️ Si vous rêvez de quelque chose, n'importe quoi, George peut le faire 😍💪 a dépassé mes attentes !!",
    "Gens sympathiques, service rapide. Le meilleur endroit où je suis allé. Je n'ai jamais vu mes bijoux polis aussi bien et la qualité du travail pour réparer mes bijoux est la meilleure. Je reviendrai encore.",
    "Nous fréquentons Bijouterie Damas depuis quelques années maintenant et nous sommes toujours chaleureusement accueillis et très satisfaits. Nos bijoux sont toujours magnifiques et le service n'est rien de moins qu'incroyable. Récemment, nous avons acheté nos alliances ici et ils m'ont aidé à trouver l'alliance parfaite pour accompagner ma bague de fiançailles."
  ];

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="avis" className="bg-black py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="reviews-scroll flex space-x-8">
            {duplicatedReviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 sm:w-96 bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-lg p-4"
              >
                <div className="flex items-start space-x-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-snug line-clamp-5">
                  {review}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/search?sca_esv=f46f8e3b711902b9&biw=1699&bih=911&sxsrf=AE3TifP7ibgeA3DgYo0QFcJqDhi8BbnjrA:1763664397110&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1Pa0C6qYF1Y3FZMCFrfB9YhR0jDcBcvHyRyhaDaY5MHeR_1grUwLUtG1W7DkIZaJYs5ild4Fx5ttEwDMZtnHz3AeoaN&q=Bijouterie+Damas+Avis&sa=X&ved=2ahUKEwjt_ZHvsYGRAxWe6ckDHc-hOUsQ0bkNegQIIRAE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold/80 transition-colors duration-200 text-sm underline"
          >
            Voir tous les avis Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

