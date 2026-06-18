import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Brief & Consultation',
    description: 'Discovery call, mood board diskusi, scope final.',
    detail:
      'Kami mulai dengan memahami brand, target audience, dan tujuan visual kamu secara mendalam.',
  },
  {
    number: '02',
    title: 'Pre-Production',
    description: 'Shot list, prop sourcing, location scouting.',
    detail:
      'Semua direncanakan detail sebelum hari H — tidak ada kejutan saat shoot berlangsung.',
  },
  {
    number: '03',
    title: 'Production Day',
    description: 'Studio/on-location shoot dengan tim lengkap.',
    detail:
      'Eksekusi sesuai brief dengan fleksibilitas untuk iterasi langsung on-set.',
  },
  {
    number: '04',
    title: 'Post-Production',
    description: 'Color grading, retouch, masking sesuai brief.',
    detail:
      'Setiap frame diproses dengan standar komersial untuk hasil yang siap publish.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Online gallery, high-res download, license clear.',
    detail:
      'File siap pakai dalam semua format dan aspek rasio — untuk semua platform.',
  },
];

function StepCard({
  step,
  index,
  inView,
}: {
  step: (typeof steps)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.4 + index * 0.13,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col lg:flex-col gap-0"
    >
      {/* Marker row — number + dot */}
      <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0 mb-6 lg:mb-8">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.55 + index * 0.13,
            type: 'spring',
            bounce: 0.35,
          }}
          className="w-10 h-10 border border-[#d0d4d4] rounded-[4px] flex items-center justify-center flex-shrink-0 relative z-10 bg-[#fefefe] lg:mb-8"
        >
          <span className="text-[12px] font-medium text-[#404040] tabular-nums">
            {step.number}
          </span>
        </motion.div>

        {/* Mobile only: vertical connector */}
        <div className="flex-1 h-px bg-[#d0d4d4] lg:hidden" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[18px] md:text-[20px] font-normal leading-[1.1] tracking-[-0.03em] text-black mb-3">
          {step.title}
        </h3>
        <p className="text-[14px] text-[#404040] leading-[1.55] mb-3 font-medium">
          {step.description}
        </p>
        <p className="text-[14px] text-[#767d88] leading-[1.6]">{step.detail}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" className="bg-[#fefefe] py-[78px]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">
            Process
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-black">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-[16px] text-[#767d88] max-w-[360px] leading-[1.55] md:text-right">
              Dari brief hingga delivery — setiap langkah terstruktur dan transparan.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">

          {/* Desktop connecting line */}
          <div className="absolute top-5 left-0 right-0 hidden lg:block overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-px bg-[#d0d4d4] origin-left"
              style={{ transformOrigin: 'left center' }}
            />
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-5 top-10 bottom-0 w-px bg-[#e9ecf2] lg:hidden" />

          {/* Steps grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} inView={isInView} />
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 pt-10 border-t border-[#e9ecf2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-[16px] text-[#404040] leading-[1.55] max-w-[440px]">
            Rata-rata waktu dari brief ke delivery pertama:{' '}
            <span className="text-black font-medium">7–14 hari kerja.</span>
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 px-6 py-3 bg-black text-white text-[14px] font-medium tracking-[-0.01em] rounded-[4px] hover:bg-[#1a1a1a] transition-colors duration-200"
          >
            Mulai Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
