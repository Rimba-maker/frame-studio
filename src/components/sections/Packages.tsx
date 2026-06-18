import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Package {
  id: string;
  name: string;
  price: string;
  tagline: string;
  popular: boolean;
  features: string[];
  cta: string;
}

const packages: Package[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Rp 4,5 jt',
    tagline: 'Untuk UMKM & small brand',
    popular: false,
    features: [
      '15 product photos (white BG + lifestyle)',
      '1 hari shoot',
      'Basic retouch',
      'High-res delivery 7 hari',
      '1x revision',
    ],
    cta: 'Get Quote',
  },
  {
    id: 'brand',
    name: 'Brand Campaign',
    price: 'Rp 12 jt',
    tagline: 'Untuk launching produk atau campaign',
    popular: true,
    features: [
      '30 product + 15 lifestyle photos',
      '5 video reels (15–30s)',
      '2 hari shoot',
      'Pro retouch + color grading',
      'Delivery 14 hari',
      '2x revision',
      'Model included (jika perlu)',
    ],
    cta: 'Get Quote',
  },
  {
    id: 'full',
    name: 'Full Production',
    price: 'Rp 25 jt+',
    tagline: 'Untuk enterprise & big launch',
    popular: false,
    features: [
      'Custom scope (50+ photos, video, BTS)',
      '3–5 hari shoot',
      'Professional model + styling + makeup',
      'Premium retouch (cosmetic-grade)',
      'Delivery 21 hari',
      '3x revision',
      'Custom set build',
    ],
    cta: 'Talk to Us',
  },
];

const addons = [
  { label: 'Additional photo', value: 'Rp 100k – 250k / foto' },
  { label: 'Additional video reel', value: 'Rp 750k / reel' },
  { label: 'Location fee (luar Jakarta)', value: 'Rp 2,5 jt+' },
  { label: 'Professional model', value: 'Rp 3 – 15 jt / day' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className={`relative flex flex-col h-full rounded-[6px] p-7 md:p-10 border transition-colors duration-300 ${
        pkg.popular
          ? 'bg-[#111] border-[#767d88]'
          : 'bg-[#1a1a1a] border-[#27272a] hover:border-[#404040]'
      }`}
    >
      {/* Most Popular badge */}
      {pkg.popular && (
        <div className="absolute -top-px left-7 md:left-8">
          <span className="inline-block bg-white text-black text-[10px] font-medium uppercase tracking-[0.3em] px-3 py-1 rounded-b-[4px]">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-7 pt-4">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-3">
          {pkg.name}
        </p>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-[32px] md:text-[42px] font-light leading-[1] tracking-[-0.04em] text-white">
            {pkg.price}
          </span>
        </div>
        <p className="text-[14px] text-[#767d88] leading-[1.5]">{pkg.tagline}</p>
      </div>

      <div className={`h-px mb-7 ${pkg.popular ? 'bg-[#404040]' : 'bg-[#27272a]'}`} />

      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className={`mt-0.5 flex-shrink-0 text-[13px] ${pkg.popular ? 'text-white' : 'text-[#767d88]'}`}>
              ✓
            </span>
            <span className="text-[14px] text-[#a7a7a7] leading-[1.5]">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`w-full py-3 text-[14px] font-medium tracking-[-0.01em] rounded-[4px] text-center transition-all duration-200 ${
          pkg.popular
            ? 'bg-white text-black hover:bg-[#e9ecf2]'
            : 'border border-[#27272a] text-white hover:border-[#767d88]'
        }`}
      >
        {pkg.cta}
      </a>
    </motion.div>
  );
}

export default function Packages() {
  const [addonsOpen, setAddonsOpen] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section id="packages" className="bg-[#030303] py-[78px]">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16 px-6 md:px-10"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">Pricing</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
              Paket Layanan
            </h2>
            <p className="text-[16px] text-[#767d88] max-w-[360px] leading-[1.55] md:text-right">
              Harga indikatif. Custom quote tersedia untuk kebutuhan spesifik.
            </p>
          </div>
        </motion.div>

        {/* ── Mobile: horizontal snap-scroll carousel ── */}
        <div
          className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 pb-2 px-6"
          onScroll={(e) => {
            const el = e.currentTarget;
            const cardW = el.scrollWidth / packages.length;
            const dot = Math.round(el.scrollLeft / cardW);
            setActiveDot(dot);
          }}
        >
          {packages.map((pkg, i) => (
            <div key={pkg.id} className="flex-shrink-0 w-[85vw] snap-center">
              <PackageCard pkg={pkg} index={i} />
            </div>
          ))}
          <div className="flex-shrink-0 w-6" />
        </div>

        {/* Mobile dot indicators */}
        <div className="lg:hidden flex justify-center gap-2 mt-5 mb-6">
          {packages.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                activeDot === i ? 'w-6 bg-white' : 'w-1.5 bg-[#27272a]'
              }`}
            />
          ))}
        </div>

        {/* ── Desktop: 3-column grid ── */}
        <div className="hidden lg:grid grid-cols-3 gap-4 mb-6 px-10">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Add-ons toggle */}
        <div className="border border-[#27272a] rounded-[6px] overflow-hidden mx-6 md:mx-10">
          <button
            onClick={() => setAddonsOpen((v) => !v)}
            className="w-full flex items-center justify-between px-6 md:px-8 py-5 text-left hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88]">Add-ons</p>
              <span className="text-[13px] text-[#404040] hidden sm:inline">— layanan tambahan</span>
            </div>
            <motion.span
              animate={{ rotate: addonsOpen ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-[#767d88] text-xl leading-none"
            >
              +
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {addonsOpen && (
              <motion.div
                key="addons"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a] border-t border-[#27272a]">
                  {addons.map((addon) => (
                    <div key={addon.label} className="bg-[#0a0a0a] px-6 md:px-8 py-6">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-2">
                        {addon.label}
                      </p>
                      <p className="text-[16px] text-white font-normal tracking-[-0.02em]">
                        {addon.value}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
