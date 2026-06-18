import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectTypes = [
  'Product Photography',
  'Food & Beverage',
  'Fashion & Lifestyle',
  'Beauty & Cosmetics',
  'Corporate & Branding',
  'Video Content',
  'Other',
];

const budgetRanges = [
  '< Rp 5 jt',
  'Rp 5 – 15 jt',
  'Rp 15 – 30 jt',
  'Rp 30 jt+',
  'Prefer not to say',
];

const timelines = [
  'ASAP (< 2 minggu)',
  '1 bulan',
  '1 – 3 bulan',
  'Fleksibel',
];

const inputClass =
  'w-full bg-[#1a1a1a] border border-[#27272a] rounded-[4px] px-4 py-3 text-white text-[14px] placeholder:text-[#404040] focus:outline-none focus:border-white/40 transition-colors duration-200';

const selectClass =
  'w-full bg-[#1a1a1a] border border-[#27272a] rounded-[4px] px-4 py-3 text-white text-[14px] focus:outline-none focus:border-white/40 transition-colors duration-200 appearance-none cursor-pointer';

const labelClass = 'block text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-2';

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-center items-start py-16"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', bounce: 0.4 }}
        className="w-14 h-14 border border-[#27272a] rounded-[4px] flex items-center justify-center mb-8 text-[24px]"
      >
        ✓
      </motion.div>
      <h3 className="text-[32px] font-normal leading-[1.1] tracking-[-0.04em] text-white mb-4">
        Brief terkirim!
      </h3>
      <p className="text-[16px] text-[#767d88] leading-[1.6] mb-8 max-w-[380px]">
        Terima kasih. Tim kami akan menghubungi kamu via email atau WhatsApp dalam 1×24 jam.
      </p>
      <button
        onClick={onReset}
        className="text-[13px] text-[#767d88] underline underline-offset-4 decoration-[#27272a] hover:text-white hover:decoration-[#767d88] transition-colors duration-200 cursor-pointer"
      >
        Kirim brief lain →
      </button>
    </motion.div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <section id="contact" className="bg-black py-[78px]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-28">

          {/* LEFT: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#767d88] mb-5">
              Contact
            </p>
            <h2 className="text-[40px] md:text-[48px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-6">
              Tell Us About<br />Your Project
            </h2>
            <p className="text-[16px] text-[#767d88] leading-[1.6] mb-10 max-w-[380px]">
              Setiap proyek dimulai dengan briefing yang baik. Isi form, atau langsung WhatsApp untuk konsultasi cepat.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 w-full max-w-[340px] px-5 py-4 border border-[#27272a] rounded-[4px] text-white hover:border-[#767d88] transition-colors duration-200 group"
            >
              <span className="text-[22px] leading-none">💬</span>
              <div className="flex-1">
                <p className="text-[14px] font-medium tracking-[-0.01em]">WhatsApp Direct</p>
                <p className="text-[12px] text-[#767d88]">Response dalam 1 jam</p>
              </div>
              <span className="text-[#767d88] group-hover:text-white transition-colors">→</span>
            </a>

            {/* Contact details */}
            <div className="mt-12 pt-10 border-t border-[#27272a] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {[
                { label: 'Email', value: 'hello@framestudio.id' },
                { label: 'Studio', value: 'Jakarta Selatan, Indonesia' },
                { label: 'Hours', value: 'Sen – Sab, 09.00 – 18.00 WIB' },
              ].map((item) => (
                <div key={item.label}>
                  <p className={labelClass}>{item.label}</p>
                  <p className="text-white text-[15px] leading-[1.4]">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Form / Success */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <SuccessState key="success" onReset={() => setSubmitted(false)} />
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Row: Nama + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nama</label>
                      <input type="text" placeholder="Nama lengkap" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass}>Email</label>
                      <input type="email" placeholder="email@brand.com" className={inputClass} required />
                    </div>
                  </div>

                  {/* Row: WhatsApp + Brand */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>WhatsApp</label>
                      <input type="tel" placeholder="+62 812 xxxx xxxx" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Brand / Perusahaan</label>
                      <input type="text" placeholder="Nama brand kamu" className={inputClass} required />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className={labelClass}>Tipe Proyek</label>
                    <div className="relative">
                      <select className={selectClass} required defaultValue="">
                        <option value="" disabled>Pilih tipe proyek</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#767d88] text-xs">▾</div>
                    </div>
                  </div>

                  {/* Row: Budget + Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Estimasi Budget</label>
                      <div className="relative">
                        <select className={selectClass} defaultValue="">
                          <option value="" disabled>Pilih range</option>
                          {budgetRanges.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#767d88] text-xs">▾</div>
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Target Timeline</label>
                      <div className="relative">
                        <select className={selectClass} defaultValue="">
                          <option value="" disabled>Pilih timeline</option>
                          {timelines.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#767d88] text-xs">▾</div>
                      </div>
                    </div>
                  </div>

                  {/* Brief description */}
                  <div>
                    <label className={labelClass}>Brief Proyek</label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan tentang proyek kamu — produk, target audience, tujuan visual, referensi yang kamu suka..."
                      className={`${inputClass} resize-none`}
                      required
                    />
                  </div>

                  {/* File upload */}
                  <div>
                    <label className={labelClass}>Referensi Visual (opsional)</label>
                    <label
                      htmlFor="file-upload"
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={handleDrop}
                      className={`flex flex-col items-center justify-center gap-2 border border-dashed rounded-[4px] px-4 py-6 cursor-pointer transition-colors duration-200 ${
                        dragging
                          ? 'border-white/40 bg-white/5'
                          : 'border-[#27272a] hover:border-[#767d88]'
                      }`}
                    >
                      <span className="text-[#767d88] text-[22px]">↑</span>
                      {fileName ? (
                        <p className="text-[13px] text-white">{fileName}</p>
                      ) : (
                        <>
                          <p className="text-[13px] text-[#767d88]">
                            Drop file atau <span className="text-white underline underline-offset-2">browse</span>
                          </p>
                          <p className="text-[11px] text-[#404040]">PNG, JPG, PDF — max 10 MB</p>
                        </>
                      )}
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="mt-2 w-full py-4 bg-white text-black text-[14px] font-medium tracking-[-0.01em] rounded-[4px] hover:bg-[#e9ecf2] active:scale-[0.99] transition-all duration-200 cursor-pointer"
                  >
                    Send Brief
                  </button>

                  <p className="text-[12px] text-[#404040] text-center leading-[1.6]">
                    Kami akan follow up dalam 1×24 jam. Tidak ada commitment sebelum kamu setuju.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
