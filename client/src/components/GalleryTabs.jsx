import React, { useEffect, useState } from 'react';

const TABS = [
  { key: 'rings', label: 'Bagues' },
  { key: 'bracelets', label: 'Bracelets' },
  { key: 'pendants', label: 'Pendentifs' },
  { key: 'earrings', label: 'Boucles d’oreilles' },
];

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState('rings');
  const [imagesByCategory, setImagesByCategory] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        setError('');
        const res = await fetch('/api/gallery');
        if (!res.ok) throw new Error('Failed to load gallery');
        const payload = await res.json();
        if (isMounted) {
          setImagesByCategory(payload.data || {});
        }
      } catch (e) {
        if (isMounted) setError('Unable to load images.');
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    fetchImages();
    return () => {
      isMounted = false;
    };
  }, []);

  const currentImages = imagesByCategory[activeTab] || [];
  const activeIndex = TABS.findIndex(t => t.key === activeTab);

  return (
    <section id="galerie" className="py-20 section-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-black tracking-tight">Nos Bijoux</h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">Découvrez notre sélection de pièces raffinées</p>
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-5"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-full" style={{ maxWidth: '900px' }}>
            <div role="tablist" aria-label="Catégories de bijoux" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.key)}
                    className={`${isActive ? 'btn-luxury-primary' : 'btn-secondary-enhanced'} px-5 py-2.5 text-[11px] sm:text-[12px] md:text-sm tracking-[0.1em] uppercase leading-none min-w-[120px] sm:min-w-[140px] md:min-w-[160px]`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="rounded-xl bg-black/5 animate-pulse aspect-[4/5]" />
            ))}
          </div>
        )}
        {error && (
          <div className="text-center text-red-600">{error}</div>
        )}

        {!isLoading && !error && currentImages.length === 0 && (
          <div className="text-center text-gray-600">Aucune image à afficher pour cette catégorie.</div>
        )}

        {!isLoading && !error && currentImages.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {currentImages.map((src) => (
              <div key={src} className="group relative overflow-hidden rounded-xl bg-white border border-black/10 shadow-sm">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={src}
                    alt="Bijou"
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-[11px] sm:text-xs text-white/90 bg-black/40 backdrop-blur-xs px-2 py-1 rounded-md inline-block">
                    {src.split('/').slice(-2).join(' / ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryTabs;


