import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  id: number;
  category: string;
  brand: string;
  type: string;
  year: string;
  image: string;
  aspect: string;
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, category: 'product', brand: 'Arum Watch Co.', type: 'Product Shot', year: '2024', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  { id: 2, category: 'product', brand: 'Kicks Republic', type: 'E-Commerce', year: '2024', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[4/3]' },
  { id: 3, category: 'product', brand: 'SoundWave Co.', type: 'Brand Campaign', year: '2023', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-square' },
  { id: 4, category: 'product', brand: 'Reverie Skincare', type: 'Product Shot', year: '2024', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  { id: 5, category: 'food', brand: 'Burger Bros', type: 'Menu Photography', year: '2024', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-square' },
  { id: 6, category: 'food', brand: 'Nusantara Kitchen', type: 'Hero Shot', year: '2024', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[4/3]' },
  { id: 7, category: 'food', brand: 'Sambal Pawon', type: 'Campaign Visual', year: '2023', image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  { id: 8, category: 'fashion', brand: 'Moda Jakarta', type: 'Lookbook', year: '2024', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  { id: 9, category: 'fashion', brand: 'Luxe Collective', type: 'Campaign', year: '2024', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[4/3]' },
  { id: 10, category: 'fashion', brand: 'Archipelago Brand', type: 'Editorial', year: '2023', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  { id: 11, category: 'beauty', brand: 'Sereh Beauty', type: 'Brand Launch', year: '2024', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  { id: 12, category: 'beauty', brand: 'Glow Lab', type: 'Product Shot', year: '2023', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-square' },
  { id: 13, category: 'beauty', brand: 'La Belle', type: 'Campaign', year: '2024', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100d293?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[4/3]' },
  { id: 14, category: 'lifestyle', brand: 'Forma Living', type: 'Lifestyle Campaign', year: '2024', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[4/3]' },
  { id: 15, category: 'lifestyle', brand: 'Nara Studio', type: 'Brand Content', year: '2024', image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
  { id: 16, category: 'lifestyle', brand: 'Kopi Nusantara', type: 'Lifestyle', year: '2023', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-square' },
  { id: 17, category: 'video', brand: 'TechVerse Indonesia', type: 'Brand Film', year: '2024', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[4/3]' },
  { id: 18, category: 'video', brand: 'Revolve Agency', type: 'Campaign Reel', year: '2024', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=85&auto=format&fit=crop', aspect: 'aspect-[3/4]' },
];

const filters = ['All', 'Product', 'Food', 'Fashion', 'Beauty', 'Lifestyle', 'Video'];
const MOBILE_INITIAL_COUNT = 10;

function PortfolioCard({ item, onClick }: { item: PortfolioItem; onClick: () => void }) {
  return (
    <div
      className="group relative overflow-hidden rounded-[6px] cursor-pointer bg-[#1a1a1a]"
      onClick={onClick}
    >
      {/* ── Desktop: original aspect ratio ── */}
      <div className={`hidden lg:block ${item.aspect} overflow-hidden`}>
        <img
          src={item.image}
          alt={`${item.brand} — ${item.type}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
        />
        {/* Caption on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-1.5">
            {item.type} · {item.year}
          </p>
          <p className="text-white text-[16px] font-normal leading-[1.1] tracking-[-0.02em]">
            {item.brand}
          </p>
        </div>
      </div>

      {/* ── Mobile: square crop + always-visible label ── */}
      <div className="lg:hidden aspect-square overflow-hidden relative">
        <img
          src={item.image}
          alt={`${item.brand} — ${item.type}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-6 pb-2.5 px-2.5">
          <p className="text-white text-[12px] font-normal leading-[1.2] tracking-[-0.01em]">
            {item.brand}
          </p>
          <p className="text-[10px] text-[#a7a7a7] mt-0.5">{item.type}</p>
        </div>
      </div>
    </div>
  );
}

function Lightbox({
  item,
  filteredItems,
  onClose,
  onPrev,
  onNext,
}: {
  item: PortfolioItem;
  filteredItems: PortfolioItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const currentIndex = filteredItems.findIndex((i) => i.id === item.id);
  const total = filteredItems.length;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      key="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={item.id}
            src={item.image}
            alt={`${item.brand} — ${item.type}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-h-[75vh] w-full object-contain rounded-[6px]"
          />
        </AnimatePresence>
        <div className="mt-5 flex items-center justify-between w-full">
          <div>
            <p className="text-white text-[16px] font-normal tracking-[-0.02em]">{item.brand}</p>
            <p className="text-[13px] text-[#767d88] mt-0.5">{item.type} · {item.year}</p>
          </div>
          <p className="text-[13px] text-[#767d88]">{currentIndex + 1} / {total}</p>
        </div>
      </motion.div>

      <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#27272a] rounded-[4px] flex items-center justify-center text-white hover:border-[#767d88] hover:bg-[#1a1a1a] transition-all duration-200"
        aria-label="Previous">←</button>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 border border-[#27272a] rounded-[4px] flex items-center justify-center text-white hover:border-[#767d88] hover:bg-[#1a1a1a] transition-all duration-200"
        aria-label="Next">→</button>
      <button onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 w-9 h-9 border border-[#27272a] rounded-[4px] flex items-center justify-center text-[#767d88] hover:text-white hover:border-[#767d88] transition-all duration-200 text-lg"
        aria-label="Close">✕</button>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === 'All'
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeFilter.toLowerCase());

  const selectedItem = portfolioItems.find((i) => i.id === selectedId) ?? null;
  const filteredIndex = filtered.findIndex((i) => i.id === selectedId);

  const openItem = useCallback((id: number) => setSelectedId(id), []);
  const closeItem = useCallback(() => setSelectedId(null), []);

  const goPrev = useCallback(() => {
    if (filteredIndex <= 0) return;
    setSelectedId(filtered[filteredIndex - 1].id);
  }, [filteredIndex, filtered]);

  const goNext = useCallback(() => {
    if (filteredIndex >= filtered.length - 1) return;
    setSelectedId(filtered[filteredIndex + 1].id);
  }, [filteredIndex, filtered]);

  // Reset showAll when filter changes
  const handleFilterChange = (f: string) => {
    setActiveFilter(f);
    setShowAll(false);
  };

  const mobileDisplayed = showAll ? filtered : filtered.slice(0, MOBILE_INITIAL_COUNT);

  return (
    <section id="portfolio" className="bg-black py-[78px]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 lg:mb-12"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
              Selected Work
            </h2>
            <p className="text-[16px] text-[#767d88] max-w-[360px] leading-[1.55] md:text-right">
              Browse by industry — semua proyek nyata, semua brief brand betulan.
            </p>
          </div>
        </motion.div>

        {/* ── Filter tabs — horizontal scroll on mobile ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 lg:mb-10"
        >
          {/* Mobile: horizontal scroll strip */}
          <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-1 -mx-6 px-6 lg:mx-0 lg:px-0 lg:flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => handleFilterChange(f)}
                className="relative flex-shrink-0 px-4 py-2 text-[13px] rounded-[4px] transition-colors duration-200 cursor-pointer"
              >
                {activeFilter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-white/10 rounded-[4px] border border-[#27272a]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className={`relative transition-colors duration-200 ${
                  activeFilter === f ? 'text-white' : 'text-[#767d88] hover:text-[#a7a7a7]'
                }`}>
                  {f}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Mobile: 2-column grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-mobile`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden grid grid-cols-2 gap-2"
          >
            {mobileDisplayed.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <PortfolioCard item={item} onClick={() => openItem(item.id)} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More button — mobile only */}
        {!showAll && filtered.length > MOBILE_INITIAL_COUNT && (
          <div className="lg:hidden mt-6 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 border border-[#27272a] text-white text-[13px] font-medium rounded-[4px] hover:border-[#767d88] transition-colors duration-200 cursor-pointer"
            >
              Lihat Semua ({filtered.length} karya) →
            </button>
          </div>
        )}

        {/* ── Desktop: masonry columns ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-desktop`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden lg:block columns-3 gap-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid mb-3"
              >
                <PortfolioCard item={item} onClick={() => openItem(item.id)} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <Lightbox
            item={selectedItem}
            filteredItems={filtered}
            onClose={closeItem}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
