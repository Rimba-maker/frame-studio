import { motion } from 'framer-motion';

const clients = [
  { name: 'Sambal Pawon', category: 'F&B' },
  { name: 'Burger Bros', category: 'F&B' },
  { name: 'Sereh Beauty', category: 'Beauty' },
  { name: 'Kicks Republic', category: 'Fashion' },
  { name: 'Kopi Nusantara', category: 'F&B' },
  { name: 'Moda Jakarta', category: 'Fashion' },
  { name: 'Glow Lab', category: 'Beauty' },
  { name: 'TechVerse', category: 'Corporate' },
  { name: 'Nusantara Kitchen', category: 'F&B' },
  { name: 'Arum Watch Co.', category: 'Product' },
  { name: 'Luxe Collective', category: 'Fashion' },
  { name: 'Forma Living', category: 'Lifestyle' },
  { name: 'La Belle', category: 'Beauty' },
  { name: 'SoundWave Co.', category: 'Product' },
  { name: 'Revolve Agency', category: 'Corporate' },
  { name: 'Pizzeria Volta', category: 'F&B' },
  { name: 'Kain Studio', category: 'Fashion' },
  { name: 'Urban Capital', category: 'Corporate' },
  { name: 'Teh Wangi', category: 'F&B' },
  { name: 'Natura Skin', category: 'Beauty' },
];

function LogoItem({ name, category }: { name: string; category: string }) {
  return (
    <div className="group flex-shrink-0 flex flex-col items-center justify-center px-8 py-5 border border-[#1a1a1a] rounded-[4px] min-w-[160px] cursor-default hover:border-[#27272a] hover:scale-[1.04] transition-all duration-300">
      <p className="text-[#2a2a2a] group-hover:text-[#a7a7a7] text-[14px] font-medium tracking-[-0.01em] whitespace-nowrap transition-colors duration-300 text-center leading-[1.2]">
        {name}
      </p>
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#1e1e1e] group-hover:text-[#404040] mt-1 transition-colors duration-300">
        {category}
      </p>
    </div>
  );
}

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="bg-black py-[78px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mb-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">
            Clients
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
              Brands We've Worked With
            </h2>
            <p className="text-[16px] text-[#767d88] max-w-[340px] leading-[1.55] md:text-right">
              500+ brand, dari UMKM lokal hingga enterprise nasional.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Marquee — desktop */}
      <div className="hidden md:block relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000 0%, transparent 100%)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #000 0%, transparent 100%)' }} />

        <div className="marquee-track flex gap-4 w-max">
          {doubled.map((client, i) => (
            <LogoItem key={i} name={client.name} category={client.category} />
          ))}
        </div>
      </div>

      {/* Grid — mobile */}
      <div className="md:hidden px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-3"
        >
          {clients.slice(0, 12).map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="border border-[#1a1a1a] rounded-[4px] px-4 py-4"
            >
              <p className="text-[#767d88] text-[13px] font-medium tracking-[-0.01em] leading-[1.2]">
                {client.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#404040] mt-1">
                {client.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-8 md:gap-16 pt-10 border-t border-[#27272a]"
        >
          {[
            { value: 'UMKM', label: 'Small brand & startup' },
            { value: 'F&B Chain', label: 'Food & beverage network' },
            { value: 'Beauty', label: 'Skincare & cosmetics' },
            { value: 'Enterprise', label: 'Corporate & institutional' },
          ].map((item) => (
            <div key={item.value} className="flex flex-col gap-1">
              <p className="text-[18px] font-normal tracking-[-0.03em] text-white">
                {item.value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#767d88]">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
