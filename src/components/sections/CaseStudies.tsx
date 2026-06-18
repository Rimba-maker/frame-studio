import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  isDecimal?: boolean;
}

interface CaseStudy {
  id: string;
  label: string;
  title: string;
  brief: string;
  image: string;
  stats: Stat[];
  output: string[];
  timeline: string;
  imageRight?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'sambal-pawon',
    label: 'Product Repositioning',
    title: 'Sambal Pawon',
    brief:
      'Refresh visual identity dari "warung-ish" ke "premium artisan" untuk menembus pasar e-commerce nasional.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85&auto=format&fit=crop',
    stats: [
      { value: 280, suffix: '%', label: 'ROAS Meta Ads' },
      { value: 4.5, suffix: 'x', label: 'E-commerce Conversion', isDecimal: true },
    ],
    output: ['45 product shots', '12 lifestyle photos', '8 video reels'],
    timeline: '5 hari shoot · 14 hari delivery',
    imageRight: false,
  },
  {
    id: 'burger-bros',
    label: 'Menu Photography',
    title: 'Burger Bros',
    brief:
      'Hero shot 25 menu items untuk delivery app — setiap foto harus bikin orang langsung order.',
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?w=1200&q=85&auto=format&fit=crop',
    stats: [
      { value: 60, suffix: '%', label: 'Delivery Orders' },
      { value: 1, suffix: '#', label: 'GoFood Top Spot' },
    ],
    output: ['25 hero shots', '25 angle alternatives', 'Full menu coverage'],
    timeline: '3 hari shoot · 7 hari delivery',
    imageRight: true,
  },
  {
    id: 'sereh-beauty',
    label: 'Brand Launch',
    title: 'Sereh Beauty',
    brief:
      'Full visual identity untuk skincare brand launch — dari product shot hingga brand film.',
    image:
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=85&auto=format&fit=crop',
    stats: [
      { value: 3000, suffix: '+', label: 'Units Sold Out' },
      { value: 7, suffix: 'd', label: 'Sell-out Timeline' },
    ],
    output: ['120 product photos', '60 lifestyle photos', '8 brand films'],
    timeline: '14 hari shoot · 21 hari delivery',
    imageRight: false,
  },
];

function AnimatedStat({ value, suffix, label, isDecimal = false }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!isInView) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      delay: 0.2,
      onUpdate(v) {
        if (!node) return;
        node.textContent = isDecimal
          ? v.toFixed(1)
          : Math.round(v).toLocaleString('id-ID');
      },
    });
    return () => controls.stop();
  }, [isInView, value, isDecimal]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline gap-0.5">
        <span
          ref={ref}
          className="text-[44px] md:text-[52px] font-light leading-[1] tracking-[-0.04em] text-white tabular-nums"
        >
          0
        </span>
        <span className="text-[28px] text-[#a7a7a7] leading-[1] ml-1">{suffix}</span>
      </div>
      <p className="text-[11px] text-[#767d88] uppercase tracking-[0.35em]">{label}</p>
    </div>
  );
}

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div ref={ref} className="relative overflow-hidden h-full min-h-[400px] lg:min-h-[520px]">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[116%] object-cover top-[-8%]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const imageOnRight = study.imageRight;

  return (
    <motion.article
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-2 border border-[#27272a] rounded-[6px] overflow-hidden hover:border-[#404040] transition-colors duration-500"
    >
      {/* Image — order changes per card */}
      <div className={`${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
        <ParallaxImage src={study.image} alt={study.title} />
      </div>

      {/* Content */}
      <div
        className={`bg-[#0a0a0a] p-8 md:p-12 flex flex-col justify-between gap-10 ${
          imageOnRight ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88]">
              {study.label}
            </p>
            <span className="text-[11px] text-[#27272a] uppercase tracking-[0.2em]">
              0{index + 1}
            </span>
          </div>

          <h3 className="text-[32px] md:text-[40px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-5">
            {study.title}
          </h3>

          <p className="text-[15px] text-[#767d88] leading-[1.6] max-w-[420px]">
            {study.brief}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 py-8 border-t border-b border-[#27272a]">
          {study.stats.map((stat) => (
            <AnimatedStat key={stat.label} {...stat} />
          ))}
        </div>

        {/* Output + Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-3">
              Output
            </p>
            <ul className="space-y-1.5">
              {study.output.map((item) => (
                <li key={item} className="text-[14px] text-[#a7a7a7] flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-[#404040] rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-3">
              Timeline
            </p>
            <p className="text-[14px] text-[#a7a7a7] leading-[1.6]">{study.timeline}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-[#030303] py-[78px]">
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
            Case Studies
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
              Case Studies
            </h2>
            <p className="text-[16px] text-[#767d88] max-w-[360px] leading-[1.55] md:text-right">
              Bukan sekadar foto bagus — kami bantu brand achieve goals.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-4">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
