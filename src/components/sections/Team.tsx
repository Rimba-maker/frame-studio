import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  years: string;
  bio: string;
  specialties: string[];
  clients: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: 'Dimas Pratama',
    role: 'Founder & Lead Photographer',
    years: '12+ tahun',
    bio: 'Ex-Vogue Indonesia contributor. Spesialis commercial & editorial photography untuk brand FMCG hingga luxury.',
    specialties: ['Product', 'Corporate', 'Editorial'],
    clients: 'TechVerse · Urban Capital · Arum Watch Co.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Sasha Anindya',
    role: 'Senior Photographer',
    years: '8 tahun',
    bio: 'Background culinary arts. Food & lifestyle specialist dengan sentuhan editorial yang kuat dan food styling in-house.',
    specialties: ['Food', 'Lifestyle', 'Still Life'],
    clients: 'Burger Bros · Kopi Nusantara · Nusantara Kitchen',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Reza Maulana',
    role: 'Senior Photographer',
    years: '9 tahun',
    bio: 'Fashion & beauty specialist. Kolaborasi dengan 30+ label lokal dan internasional — dari lookbook hingga campaign.',
    specialties: ['Fashion', 'Beauty', 'Portrait'],
    clients: 'Moda Jakarta · Sereh Beauty · La Belle',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=85&auto=format&fit=crop',
  },
  {
    name: 'Bayu Kusuma',
    role: 'Senior Videographer & Editor',
    years: '7 tahun',
    bio: 'Brand film dan social content specialist. Expert color grading dan post-production untuk konten multi-platform.',
    specialties: ['Video', 'Color Grading', 'BTS'],
    clients: 'Revolve Agency · Forma Living · TechVerse',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85&auto=format&fit=crop',
  },
];

function TeamCard({ member, index, inView }: { member: TeamMember; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[6px] cursor-default"
    >
      {/* Photo */}
      <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700 ease-out"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />

      {/* ── Mobile content — always visible, compact ── */}
      <div className="absolute bottom-0 left-0 right-0 p-3.5 lg:hidden">
        <span className="block text-[9px] uppercase tracking-[0.28em] text-[#404040] mb-1">
          {member.years}
        </span>
        <p className="text-[9px] uppercase tracking-[0.28em] text-[#767d88] mb-1 leading-[1.3]">
          {member.role.split(' ').slice(0, 2).join(' ')}
        </p>
        <h3 className="text-white text-[14px] font-normal leading-[1.15] tracking-[-0.02em]">
          {member.name}
        </h3>
      </div>

      {/* ── Desktop content — hover reveal ── */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-[#404040] group-hover:text-[#767d88] transition-colors duration-300 mb-2">
          {member.years}
        </span>
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-1.5">
          {member.role}
        </p>
        <h3 className="text-white text-[20px] font-normal leading-[1.1] tracking-[-0.03em] mb-0 group-hover:mb-4 transition-[margin] duration-300">
          {member.name}
        </h3>
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-[13px] text-[#a7a7a7] leading-[1.6] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {member.bio}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              {member.specialties.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-[0.25em] text-[#767d88] border border-[#27272a] px-2.5 py-1 rounded-[4px]">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[12px] text-[#404040] leading-[1.5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[200ms]">
              {member.clients}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="team" className="bg-[#030303] py-[78px]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">Team</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
              Behind The Lens
            </h2>
            <p className="text-[16px] text-[#767d88] max-w-[340px] leading-[1.55] md:text-right">
              Tim fotografer dan videografer berpengalaman, siap eksekusi dari brief apapun.
            </p>
          </div>
        </motion.div>

        {/* Cards — 2 col on mobile, 4 col on desktop */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} inView={isInView} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-[14px] text-[#767d88] leading-[1.6]">
            Perlu tim yang lebih besar? Kami punya network photographer & stylist freelance untuk proyek skala besar.
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 text-[13px] text-white underline underline-offset-4 decoration-[#27272a] hover:decoration-[#767d88] transition-colors duration-200"
          >
            Diskusi kebutuhan tim →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
