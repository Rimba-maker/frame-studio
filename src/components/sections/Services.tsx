import { motion } from 'framer-motion';

interface Service {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'product',
    tag: 'Product',
    title: 'Product Photography',
    description: 'Clean white background, gradient, lifestyle, e-commerce-ready.',
    features: ['360° spin video', 'Multiple angles (front, side, top, back)', 'Stylized lifestyle context'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'food',
    tag: 'Food & Beverage',
    title: 'Food & Beverage Photography',
    description: 'Menu shot, hero shot, campaign visual.',
    features: ['Drink mixology shots', 'Steam & motion food', 'Tablescape composition'],
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'fashion',
    tag: 'Fashion',
    title: 'Fashion & Lifestyle',
    description: 'Lookbook, campaign, e-commerce model shots.',
    features: ['Studio & outdoor shoot', 'Model casting available', 'Hair, makeup, styling included'],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'beauty',
    tag: 'Beauty',
    title: 'Beauty & Cosmetics',
    description: 'Texture, swatch, splash, hero product.',
    features: ['Macro detail product', 'Skin texture close-up', 'Model beauty shot'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'corporate',
    tag: 'Corporate',
    title: 'Corporate & Branding',
    description: 'Office, team, headshot, brand documentation.',
    features: ['Annual report photography', 'LinkedIn-ready headshots', 'Behind-the-scene content'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85&auto=format&fit=crop',
  },
  {
    id: 'video',
    tag: 'Video',
    title: 'Video Content',
    description: 'Reels, TikTok, brand film, product demo.',
    features: ['9:16, 1:1, 16:9 multi-format', 'Short-form social content', 'Brand documentary'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=85&auto=format&fit=crop',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative overflow-hidden rounded-[6px] cursor-pointer bg-[#1a1a1a] border border-[#27272a] h-full">
      {/* Image */}
      <div className="aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

      {/* ── Mobile content — always visible ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5 lg:hidden">
        <p className="text-[10px] uppercase tracking-[0.35em] text-[#767d88] mb-1.5">
          {service.tag}
        </p>
        <h3 className="text-white text-[18px] font-normal leading-[1.1] tracking-[-0.02em] mb-2.5">
          {service.title}
        </h3>
        <p className="text-[13px] text-[#a7a7a7] leading-[1.5]">
          {service.description}
        </p>
      </div>

      {/* ── Desktop content — hover reveal ── */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 p-6">
        <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-2">
          {service.tag}
        </p>
        <h3 className="text-white text-[20px] font-normal leading-[1.1] tracking-[-0.02em] mb-0 group-hover:mb-4 transition-[margin] duration-300">
          {service.title}
        </h3>
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-[14px] text-[#a7a7a7] leading-[1.55] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              {service.description}
            </p>
            <ul className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              {service.features.map((f) => (
                <li key={f} className="text-[13px] text-[#767d88] flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-[#767d88] rounded-full flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-[#030303] py-[78px]">
      <div className="max-w-[1600px] mx-auto">

        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-10 lg:mb-16 px-6 md:px-10"
        >
          <motion.p variants={headingVariants} className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">
            Services
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2 variants={headingVariants} className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
              What We Shoot
            </motion.h2>
            <motion.p variants={headingVariants} className="text-[16px] text-[#767d88] max-w-[360px] leading-[1.55] md:text-right">
              Setiap brand punya visual language berbeda. Kami ngerti.
            </motion.p>
          </div>
        </motion.div>

        {/* ── Mobile: horizontal snap-scroll carousel ── */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 pb-4 px-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[78vw] snap-start"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
          {/* Trailing spacer so last card has breathing room */}
          <div className="flex-shrink-0 w-6" />
        </div>

        {/* Scroll hint */}
        <p className="lg:hidden text-[11px] text-[#404040] uppercase tracking-[0.3em] text-center mt-4 px-6">
          Geser untuk melihat semua →
        </p>

        {/* ── Desktop: 3-column grid ── */}
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="hidden lg:grid grid-cols-3 gap-4 px-10"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
