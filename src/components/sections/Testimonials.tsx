import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  project: string;
  result: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'sambal-pawon',
    quote: 'Foto Frame Studio bikin produk kami terlihat 3x lebih premium. ROAS Meta Ads naik signifikan setelah ganti visual.',
    name: 'Anita Rahayu',
    role: 'Founder, Sambal Pawon',
    project: 'Product Repositioning · 2024',
    result: '+280% ROAS',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'burger-bros',
    quote: 'Tim Frame super organized. Brief jelas, shot list detail, on-time delivery. Worth every rupiah.',
    name: 'Bayu Santoso',
    role: 'Marketing Manager, PT Burger Bros',
    project: 'Menu Photography · 2024',
    result: '+60% Orders',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'sereh-beauty',
    quote: 'Sebagai brand baru, kami butuh visual yang elevate. Frame Studio delivered beyond expectation — sold out di week 1 launch!',
    name: 'Maya Putri',
    role: 'Founder, Sereh Beauty',
    project: 'Brand Launch · 2024',
    result: '3.000 Units Sold',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'moda-jakarta',
    quote: 'Lookbook kami sekarang terasa world-class. Fotografer mereka benar-benar paham fashion dan editorial vision kami.',
    name: 'Liana Hartono',
    role: 'Creative Director, Moda Jakarta',
    project: 'Lookbook Campaign · 2024',
    result: 'Brand Elevation',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=85&auto=format&fit=crop',
  },
  {
    id: 'kopi-nusantara',
    quote: 'Instagram engagement kami naik 3x setelah shoot bareng Frame Studio. Visual yang mereka hasilkan beda level.',
    name: 'Rizki Pratama',
    role: 'Brand Manager, Kopi Nusantara',
    project: 'Lifestyle Campaign · 2023',
    result: '+3x Engagement',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=85&auto=format&fit=crop',
  },
];

const INTERVAL = 8000;

const textVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
  exit: (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const } }),
};

export default function Testimonials() {
  const [[current, direction], setCurrent] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((index: number, dir: number) => {
    setCurrent([index, dir]);
  }, []);

  const next = useCallback(() => {
    go((current + 1) % testimonials.length, 1);
  }, [current, go]);

  const prev = useCallback(() => {
    go((current - 1 + testimonials.length) % testimonials.length, -1);
  }, [current, go]);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="bg-[#fefefe] py-[78px]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">
            Testimonials
          </p>
          <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-black">
            Apa Kata Klien
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] gap-8 lg:gap-16 items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* LEFT: Quote */}
          <div className="relative min-h-[320px] flex flex-col justify-between">

            {/* Decorative quote mark */}
            <AnimatePresence mode="wait">
              <motion.span
                key={`qmark-${current}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 0.08, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-6 -left-2 text-[120px] md:text-[160px] font-light leading-none text-black select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </motion.span>
            </AnimatePresence>

            {/* Quote text */}
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative"
              >
                <blockquote className="text-[22px] md:text-[28px] xl:text-[32px] font-normal leading-[1.3] tracking-[-0.03em] text-black mb-10">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#d0d4d4]" />
                  <div>
                    <p className="text-[15px] font-medium text-black tracking-[-0.01em]">
                      {t.name}
                    </p>
                    <p className="text-[13px] text-[#767d88] mt-0.5">{t.role}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.35em] text-[#767d88]">
                    {t.project}
                  </span>
                  <span className="w-1 h-1 bg-[#d0d4d4] rounded-full" />
                  <span className="text-[11px] uppercase tracking-[0.35em] text-black font-medium">
                    {t.result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center gap-6 mt-12">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i, i > current ? 1 : -1)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      i === current
                        ? 'w-6 h-1.5 bg-black'
                        : 'w-1.5 h-1.5 bg-[#d0d4d4] hover:bg-[#a7a7a7]'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={prev}
                  className="w-9 h-9 border border-[#e9ecf2] rounded-[4px] flex items-center justify-center text-[#767d88] hover:border-[#a7a7a7] hover:text-black transition-all duration-200 cursor-pointer"
                  aria-label="Previous"
                >
                  ←
                </button>
                <button
                  onClick={next}
                  className="w-9 h-9 border border-[#e9ecf2] rounded-[4px] flex items-center justify-center text-[#767d88] hover:border-[#a7a7a7] hover:text-black transition-all duration-200 cursor-pointer"
                  aria-label="Next"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Project image */}
          <div className="relative overflow-hidden rounded-[6px] aspect-[4/5] lg:aspect-auto lg:h-[480px] xl:h-[540px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={`img-${current}`}
                src={t.image}
                alt={`${t.name} — ${t.project}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </AnimatePresence>

            {/* Result badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`badge-${current}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-[4px]"
              >
                <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-0.5">
                  Result
                </p>
                <p className="text-white text-[15px] font-medium tracking-[-0.02em]">
                  {t.result}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
