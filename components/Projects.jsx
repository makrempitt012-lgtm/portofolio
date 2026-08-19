"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Lock, Terminal } from "lucide-react";

/* ─── Project Data ────────────────────────────────────────────── */
const projects = [
  {
    title: "PT PRESSTI CARGO INDONESIA",
    role: "Full-Stack Web Developer",
    category: "Company Profile & Service Catalog",
    challenge:
      "Membangun portal resmi perusahaan logistik dan kargo dengan arsitektur modern berkecepatan tinggi, penyajian katalog layanan terstruktur, serta integrasi pemesanan dan konsultasi instan via customer service WhatsApp API.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "WhatsApp API"],
    liveUrl: "https://ptpressti.vercel.app/",
    domain: "ptpressti.vercel.app",
    isPrivate: false,
  },
  {
    title: "SISTEM PEMESANAN MENU QR CODE",
    role: "Full-Stack System Architect",
    category: "Internal Web Application",
    challenge:
      "Perancangan sistem pemesanan menu digital berbasis pemindaian QR meja restoran/kafe. Mengotomatisasi alur pemesanan secara langsung ke kasir dan dapur secara real-time dengan skalabilitas data multi-tabel.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "Tailwind CSS"],
    liveUrl: "#",
    domain: "internal-restaurant.app (Private)",
    isPrivate: true,
  },
  {
    title: "AYAM POTONG SAWAL",
    role: "Frontend Developer",
    category: "Business Landing & Digital Catalog",
    challenge:
      "Digitalisasi katalog produk usaha dagang komoditas segar. Menampilkan rincian penawaran harga harian yang transparan, optimasi SEO lokal, dan alur konversi pesanan cepat langsung ke WhatsApp penjual.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "WhatsApp API"],
    liveUrl: "https://ayampotongsawal.vercel.app/",
    domain: "ayampotongsawal.vercel.app",
    isPrivate: false,
  },
  {
    title: "LECCATA",
    role: "UI/UX & Frontend Engineer",
    category: "Modern Brand Experience",
    challenge:
      "Eksplorasi antarmuka digital ultra-modern dengan performa Lighthouse 100/100. Memadukan micro-interactions interaktif, tipografi presisi, dan rendering aset optimal untuk meningkatkan engagement pengguna.",
    techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Framer Motion"],
    liveUrl: "https://lecatta.vercel.app/",
    domain: "lecatta.vercel.app",
    isPrivate: false,
  },
  {
    title: "BAKERY WORDPRESS",
    role: "CMS & Web Developer",
    category: "Artisan Bakery E-Commerce / Catalog",
    challenge:
      "Pengembangan katalog digital toko roti artisan dengan navigasi produk terfilter, presentasi visual menu sourdough & viennoiserie berkualitas tinggi, serta integrasi alur order instan ke WhatsApp.",
    techStack: ["WordPress", "Next.js", "Tailwind CSS", "WhatsApp API"],
    liveUrl: "https://bakery-puce-kappa.vercel.app/",
    domain: "bakery-puce-kappa.vercel.app",
    isPrivate: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="proyek" className="relative py-20 sm:py-28 px-4 sm:px-6">
      {/* Subtle Section Divider */}
      <div className="border-t border-zinc-800/80 max-w-6xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-3">
            03 / FEATURED CASE STUDIES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-3">
            Karya & Rekayasa Proyek
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl">
            Studi kasus dan implementasi nyata solusi web yang dibangun dengan standar performa tinggi, skalabilitas, dan pengalaman pengguna yang matang.
          </p>
        </motion.div>

        {/* 2-Column Featured Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              {...fadeUp(0.1 + (index % 2) * 0.1)}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 1. Minimal Browser Frame Bar */}
                <div className="flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/70 mb-5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80" />
                  </div>
                  <div className="flex-1 max-w-[200px] sm:max-w-[260px] truncate text-center">
                    <span className="text-[11px] font-mono text-zinc-500 truncate block">
                      {project.domain}
                    </span>
                  </div>
                  <div className="w-8 flex justify-end">
                    {project.isPrivate ? (
                      <Lock size={12} className="text-zinc-500" />
                    ) : (
                      <Terminal size={12} className="text-zinc-600" />
                    )}
                  </div>
                </div>

                {/* 2. Meta: Category & Role */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {project.role}
                  </span>
                </div>

                {/* 3. Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-100 mb-3 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* 4. Problem & Features Description */}
                <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">
                  {project.challenge}
                </p>

                {/* 5. Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Minimal Text Action Links */}
              <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                {project.isPrivate ? (
                  <span className="text-xs font-mono text-zinc-500 inline-flex items-center gap-1.5">
                    <Lock size={12} />
                    Internal Confidential System
                  </span>
                ) : (
                  <div className="flex items-center gap-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-zinc-200 hover:text-white inline-flex items-center gap-1 transition-colors group/link"
                    >
                      <span>Lihat Demo</span>
                      <ArrowUpRight
                        size={14}
                        className="text-zinc-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
