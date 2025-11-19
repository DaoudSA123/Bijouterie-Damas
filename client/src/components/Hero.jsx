import React, { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation.js';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = React.useRef(null);
  const titleRef = useScrollAnimation(0.2);
  const subtitleRef = useScrollAnimation(0.2);
  const descriptionRef = useScrollAnimation(0.2);
  const buttonsRef = useScrollAnimation(0.2);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Ensure video controls are disabled
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.controls = false;
      video.removeAttribute('controls');
      video.setAttribute('controls', 'false');
      
      // Prevent context menu on video
      video.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
      });
      
      // Prevent any interaction
      video.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
      
      // Ensure it keeps playing
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, try again
          video.play();
        });
      }
    }
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
    <section 
      id="accueil" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-section"
      style={{ 
        backgroundColor: '#000000',
        width: '100vw',
        maxWidth: '100vw',
        position: 'relative',
        left: 0,
        right: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0
      }}
    >
      {/* Video Background - Mobile Only */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        className="hero-background-video"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          minWidth: '100vw',
          height: '100vh',
          minHeight: '100vh',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
        onContextMenu={(e) => e.preventDefault()}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <source src="/videos/veo30generatepreview_Luxury_jewelry_background_loop_featuring__0 (1).mp4" type="video/mp4" />
      </video>
      
      {/* Image Background - Desktop Only */}
      <div 
        className="hero-background-image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          minWidth: '100vw',
          height: '100%',
          minHeight: '100vh',
          backgroundImage: 'url(/background/backgroundHome.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      ></div>
      {/* Background Overlay for better text readability */}
      <div className="hero-overlay absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Additional dark overlay for video on mobile */}
      <div className="hero-video-overlay absolute inset-0 bg-black/50 z-10"></div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 border border-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 border border-white/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 border border-white/8 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border border-white/6 rounded-full animate-pulse delay-1500"></div>
      </div>

      <div className="hero-content-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30 w-full">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gold-light/20 backdrop-blur-sm border border-gold/30 rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 max-w-5xl mx-auto shadow-2xl w-full box-border">
            <div ref={titleRef} className="slide-in-top-on-scroll">
              <h1 className="hero-title-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight tracking-tight break-words">
                Bijouterie DAMAS
              </h1>
            </div>
            
            <div ref={subtitleRef} className="fade-in-scale-on-scroll delay-200">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
            </div>
            
            <div ref={descriptionRef} className="fade-in-on-scroll delay-400">
              <div className="hero-custom-jewelry-text-wrapper">
                <p className="hero-subtitle-text">
                  Création de bijoux sur mesure et objets uniques faits à la main
                </p>
              </div>
              <p className="hero-description-text text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto break-words px-2 sm:px-0">
                Située à Gatineau, notre entreprise transforme votre vision en bijoux exceptionnels
                depuis les années 1990. Chaque pièce raconte une histoire unique.
              </p>
            </div>

            <div ref={buttonsRef} className="fade-in-on-scroll delay-600">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center w-full px-2 sm:px-0 box-border">
                <button
                  onClick={scrollToContact}
                  className="btn-luxury-primary hero-button w-full sm:w-auto max-w-full box-border"
                  aria-label="Réserver une consultation gratuite"
                >
                  Consultation Gratuite
                </button>
                <button
                  onClick={scrollToServices}
                  className="btn-luxury-secondary hero-button w-full sm:w-auto max-w-full box-border"
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
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