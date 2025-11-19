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

  // Ensure video controls are disabled and video keeps playing
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      // Aggressively disable controls
      video.controls = false;
      video.removeAttribute('controls');
      video.setAttribute('controls', 'false');
      video.setAttribute('controlslist', 'nodownload nofullscreen noremoteplayback');
      video.setAttribute('disablePictureInPicture', 'true');
      video.setAttribute('disableRemotePlayback', 'true');
      
      // Aggressively hide controls via DOM manipulation
      const hideControls = () => {
        // Hide all child elements
        const controls = video.querySelectorAll('*');
        controls.forEach(el => {
          if (el.style) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
          }
        });
        
        // Remove controls attribute repeatedly
        video.removeAttribute('controls');
        video.controls = false;
        
        // Hide webkit controls
        const style = document.createElement('style');
        style.textContent = `
          video.hero-background-video::-webkit-media-controls {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
          video.hero-background-video::-webkit-media-controls-enclosure {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
          video.hero-background-video::-webkit-media-controls-panel {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
          video.hero-background-video::-webkit-media-controls-play-button {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
          video.hero-background-video::-webkit-media-controls-timeline {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
          video.hero-background-video::-webkit-media-controls-current-time-display {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
          video.hero-background-video::-webkit-media-controls-time-remaining-display {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
        `;
        document.head.appendChild(style);
      };
      
      // Use MutationObserver to watch for controls being added
      const observer = new MutationObserver(() => {
        hideControls();
        video.removeAttribute('controls');
        video.controls = false;
      });
      
      observer.observe(video, {
        attributes: true,
        attributeFilter: ['controls'],
        childList: true,
        subtree: true
      });
      
      // Prevent context menu on video
      const preventContextMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      // Prevent any interaction
      const preventInteraction = (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      
      video.addEventListener('contextmenu', preventContextMenu);
      video.addEventListener('click', preventInteraction);
      video.addEventListener('touchstart', preventInteraction);
      video.addEventListener('touchend', preventInteraction);
      video.addEventListener('loadstart', hideControls);
      video.addEventListener('loadedmetadata', hideControls);
      video.addEventListener('canplay', hideControls);
      
      // Ensure it keeps playing and looping
      const ensurePlaying = () => {
        if (video.paused) {
          video.play().catch(() => {
            // Ignore play errors
          });
        }
      };
      
      video.addEventListener('pause', ensurePlaying);
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
      
      // Initial play
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, try again
          setTimeout(() => video.play(), 100);
        });
      }
      
      // Cleanup
      return () => {
        video.removeEventListener('contextmenu', preventContextMenu);
        video.removeEventListener('click', preventInteraction);
        video.removeEventListener('touchstart', preventInteraction);
        video.removeEventListener('touchend', preventInteraction);
        video.removeEventListener('pause', ensurePlaying);
        video.removeEventListener('ended', ensurePlaying);
      };
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
      <div 
        className="hero-video-wrapper"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          overflow: 'hidden',
          pointerEvents: 'none'
        }}
      >
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
            pointerEvents: 'none',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none'
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }}
          onPlay={(e) => {
            // Force play if paused
            if (e.target.paused) {
              e.target.play();
            }
          }}
        >
          <source src="/videos/veo30generatepreview_Luxury_jewelry_background_loop_featuring__0 (1).mp4" type="video/mp4" />
        </video>
        {/* Blocking overlay to prevent any interaction with video */}
        <div 
          className="hero-video-blocker"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'auto',
            backgroundColor: 'transparent'
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        />
      </div>
      
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