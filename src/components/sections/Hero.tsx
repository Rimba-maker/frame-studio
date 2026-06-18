import { motion, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const heroGridReveal = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const imageBlock = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const gridImages = [
  { src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=85&auto=format&fit=crop', alt: 'Skincare product photography', className: 'row-span-2' },
  { src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=85&auto=format&fit=crop', alt: 'Sneaker product photography', className: '' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85&auto=format&fit=crop', alt: 'Food photography', className: '' },
];

function StatItem({ value, suffix, label, isDecimal = false }: {
  value: number; suffix: string; label: string; isDecimal?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration: 2.2, ease: 'easeOut', delay: 1.2,
      onUpdate(v) {
        if (!node) return;
        node.textContent = isDecimal ? v.toFixed(1) : Math.round(v).toLocaleString('id-ID');
      },
    });
    return () => controls.stop();
  }, [value, isDecimal]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-0.5">
        <span ref={ref} className="text-[28px] md:text-[38px] font-light leading-[1] tracking-[-0.04em] text-white tabular-nums">0</span>
        <span className="text-[16px] md:text-[20px] text-[#a7a7a7] leading-[1] ml-0.5">{suffix}</span>
      </div>
      <p className="text-[10px] md:text-[11px] text-[#767d88] uppercase tracking-[0.3em] leading-[1.3]">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-black min-h-[calc(100vh-64px)] flex flex-col px-6 md:px-10 pt-10 pb-10 max-w-[1600px] mx-auto w-full">

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-10"
      >
        Commercial Photography Studio — Jakarta
      </motion.p>

      {/* Split grid — text left, images right */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20 items-start">

        {/* Left: text + CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
          className="flex flex-col"
        >
          <motion.h1
            variants={textReveal}
            className="text-[46px] md:text-[56px] xl:text-[64px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-7"
          >
            Foto Yang Tidak<br />
            Hanya Cantik —<br />
            <span className="text-[#a7a7a7]">Tapi Menjual.</span>
          </motion.h1>

          <motion.p
            variants={textReveal}
            className="text-[16px] text-[#767d88] leading-[1.55] mb-10 max-w-[420px]"
          >
            Studio fotografi komersial di Jakarta, spesialis product photography,
            lifestyle campaign, dan brand content untuk UMKM hingga enterprise.
          </motion.p>

          <motion.div variants={textReveal} className="flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="px-6 py-3.5 bg-white text-black text-[14px] font-medium tracking-[-0.01em] rounded-[4px] hover:bg-[#e9ecf2] transition-colors duration-200"
            >
              Lihat Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 border border-white/20 text-white text-[14px] font-medium tracking-[-0.01em] rounded-[4px] hover:border-white/40 transition-colors duration-200"
            >
              Konsultasi Gratis
            </a>
          </motion.div>
        </motion.div>

        {/* Right: image grid */}
        <motion.div
          variants={heroGridReveal}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-3"
          style={{ gridTemplateRows: '1fr 1fr' }}
        >
          {gridImages.map((img, i) => (
            <motion.div
              key={i}
              variants={imageBlock}
              className={`relative overflow-hidden rounded-[6px] ${img.className}`}
              style={{ minHeight: i === 0 ? '400px' : '200px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 pt-8 border-t border-[#27272a] grid grid-cols-3 gap-4"
      >
        <StatItem value={500} suffix="+" label="Brand Served" />
        <StatItem value={50000} suffix="+" label="Photos Delivered" />
        <StatItem value={4.9} suffix="★" label="Client Rating" isDecimal />
      </motion.div>
    </section>
  );
}
