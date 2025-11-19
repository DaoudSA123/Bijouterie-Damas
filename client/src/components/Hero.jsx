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
      
      // Force play immediately
      const forcePlay = async () => {
        try {
          video.muted = true; // Ensure muted for autoplay
          await video.play();
        } catch (error) {
          // If autoplay fails, try again after a short delay
          setTimeout(() => {
            video.play().catch(() => {
              // Keep trying
              const interval = setInterval(() => {
                if (video.paused) {
                  video.play().catch(() => {});
                } else {
                  clearInterval(interval);
                }
              }, 500);
              // Stop trying after 10 seconds
              setTimeout(() => clearInterval(interval), 10000);
            });
          }, 100);
        }
      };
      
      // Try to play on various events
      const playEvents = ['loadstart', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough'];
      playEvents.forEach(event => {
        video.addEventListener(event, forcePlay, { once: true });
      });
      
      // Initial play attempt
      forcePlay();
      
      // Aggressively hide controls via DOM manipulation
      const hideControls = () => {
        // Hide all child elements including buttons
        const allElements = video.querySelectorAll('*');
        allElements.forEach(el => {
          if (el.style) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
            el.style.width = '0';
            el.style.height = '0';
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            el.style.top = '-9999px';
            el.style.zIndex = '-9999';
            el.style.clip = 'rect(0, 0, 0, 0)';
            el.style.clipPath = 'inset(100%)';
          }
        });
        
        // Specifically target and hide any buttons
        const buttons = video.querySelectorAll('button, [role="button"], .play-button, .pause-button');
        buttons.forEach(btn => {
          if (btn.style) {
            btn.style.display = 'none';
            btn.style.visibility = 'hidden';
            btn.style.opacity = '0';
            btn.style.pointerEvents = 'none';
            btn.style.width = '0';
            btn.style.height = '0';
            btn.style.position = 'absolute';
            btn.style.left = '-9999px';
            btn.style.top = '-9999px';
            btn.style.zIndex = '-9999';
            btn.style.clip = 'rect(0, 0, 0, 0)';
            btn.style.clipPath = 'inset(100%)';
          }
          btn.remove();
        });
        
        // Remove controls attribute repeatedly
        video.removeAttribute('controls');
        video.controls = false;
        
        // Hide webkit controls with more comprehensive rules
        const styleId = 'hero-video-controls-hide';
        let existingStyle = document.getElementById(styleId);
        if (existingStyle) {
          existingStyle.remove();
        }
        
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
          video.hero-background-video::-webkit-media-controls,
          video.hero-background-video::-webkit-media-controls-enclosure,
          video.hero-background-video::-webkit-media-controls-panel,
          video.hero-background-video::-webkit-media-controls-play-button,
          video.hero-background-video::-webkit-media-controls-start-playback-button,
          video.hero-background-video::-webkit-media-controls-timeline,
          video.hero-background-video::-webkit-media-controls-current-time-display,
          video.hero-background-video::-webkit-media-controls-time-remaining-display {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            width: 0 !important;
            height: 0 !important;
            position: absolute !important;
            left: -9999px !important;
            top: -9999px !important;
            clip: rect(0, 0, 0, 0) !important;
            clip-path: inset(100%) !important;
            z-index: -9999 !important;
          }
          video.hero-background-video button,
          video.hero-background-video [role="button"],
          .hero-background-video button,
          .hero-background-video [role="button"],
          .hero-video-wrapper button,
          .hero-video-wrapper [role="button"] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            width: 0 !important;
            height: 0 !important;
            position: absolute !important;
            left: -9999px !important;
            top: -9999px !important;
            clip: rect(0, 0, 0, 0) !important;
            clip-path: inset(100%) !important;
            z-index: -9999 !important;
          }
        `;
        document.head.appendChild(style);
      };
      
      // Use MutationObserver to watch for controls being added - more aggressive
      const observer = new MutationObserver((mutations) => {
        hideControls();
        video.removeAttribute('controls');
        video.controls = false;
        
        // Remove any buttons that might have been added
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              if (node.tagName === 'BUTTON' || node.getAttribute('role') === 'button' || 
                  node.classList.contains('play-button') || node.classList.contains('pause-button')) {
                node.remove();
              }
              // Also check children
              const buttons = node.querySelectorAll && node.querySelectorAll('button, [role="button"]');
              if (buttons) {
                buttons.forEach(btn => btn.remove());
              }
            }
          });
        });
      });
      
      observer.observe(video, {
        attributes: true,
        attributeFilter: ['controls', 'class'],
        childList: true,
        subtree: true,
        characterData: false
      });
      
      // Also observe the wrapper
      const wrapper = video.parentElement;
      if (wrapper) {
        observer.observe(wrapper, {
          childList: true,
          subtree: true
        });
      }
      
      // Continuously check and hide controls
      const controlCheckInterval = setInterval(() => {
        hideControls();
        video.removeAttribute('controls');
        video.controls = false;
      }, 100);
      
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
      
      // Ensure it keeps playing and looping - more aggressive
      const ensurePlaying = async () => {
        if (video.paused || video.ended) {
          try {
            video.muted = true; // Always ensure muted
            await video.play();
          } catch (error) {
            // Keep trying to play
            setTimeout(() => {
              video.play().catch(() => {});
            }, 100);
          }
        }
      };
      
      // Monitor and force play
      const playMonitor = setInterval(() => {
        if (video.paused && !video.ended) {
          ensurePlaying();
        }
      }, 500);
      
      video.addEventListener('pause', ensurePlaying);
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        ensurePlaying();
      });
      video.addEventListener('waiting', ensurePlaying);
      video.addEventListener('stalled', ensurePlaying);
      
      // Ensure video is always muted for autoplay
      video.muted = true;
      
      // Cleanup
      return () => {
        clearInterval(playMonitor);
        clearInterval(controlCheckInterval);
        if (observer) observer.disconnect();
        video.removeEventListener('contextmenu', preventContextMenu);
        video.removeEventListener('click', preventInteraction);
        video.removeEventListener('touchstart', preventInteraction);
        video.removeEventListener('touchend', preventInteraction);
        video.removeEventListener('pause', ensurePlaying);
        video.removeEventListener('ended', ensurePlaying);
        video.removeEventListener('waiting', ensurePlaying);
        video.removeEventListener('stalled', ensurePlaying);
        playEvents.forEach(event => {
          video.removeEventListener(event, forcePlay);
        });
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
            // If video is paused, try to play it (for autoplay policy)
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
          }}
          onTouchStart={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // If video is paused, try to play it (for autoplay policy)
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => {});
            }
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