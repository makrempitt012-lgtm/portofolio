"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Lock } from "lucide-react";

/* ─── Project Data ────────────────────────────────────────────── */
const projects = [
  {
    title: "PT PRESSTI CARGO INDONESIA",
    category: "Company Profile",
    tag: "Cargo Services",
    description:
      "Website profil perusahaan profesional yang menyajikan informasi resmi perusahaan, katalog lengkap layanan kargo & pengiriman, serta integrasi tombol pemesanan dan konsultasi via WhatsApp customer service.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "WhatsApp API"],
    liveUrl: "https://ptpressti.vercel.app/",
    accentGlow: "hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.35)]",
    tagColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
  },
  {
    title: "SISTEM PEMESANAN MENU BERBASIS QR CODE",
    category: "Web Application",
    tag: "Food & Beverage System",
    description:
      "Solusi pemesanan menu digital interaktif menggunakan pemindaian QR Code pada meja resto/kafe. Sistem internal yang memungkinkan pelanggan memilih menu dan mengirimkan pesanan secara real-time ke kasir/dapur.",
    techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "MySQL"],
    liveUrl: "#",
    isPrivate: true,
    accentGlow: "hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.2)]",
    tagColor: "bg-amber-500/10 border-amber-500/20 text-amber-300",
  },
  {
    title: "AYAM POTONG SAWAL",
    category: "Business Profile",
    tag: "Digital Catalog",
    description:
      "Landing page dan katalog digital usaha Ayam Potong Sawal yang menampilkan informasi bisnis, daftar produk ayam segar beserta penawaran harga, serta fasilitas pemesanan cepat terintegrasi langsung ke WhatsApp penjual.",
    techStack: ["Next.js", "React.js", "Tailwind CSS", "WhatsApp API"],
    liveUrl: "https://ayampotongsawal.vercel.app/",
    accentGlow: "hover:shadow-[0_0_40px_-10px_rgba(239,68,68,0.25)]",
    tagColor: "bg-rose-500/10 border-rose-500/20 text-rose-300",
  },
  {
    title: "LECCATA",
    category: "Frontend Development",
    tag: "UI Design",
    description:
      "Landing page ultra-modern dan fully responsive dengan animasi interaktif, optimasi SEO tinggi, serta kecepatan muat maksimal yang dirancang untuk memperkuat branding digital dan tingkat konversi.",
    techStack: ["HTML5", "Tailwind CSS", "JavaScript", "Framer Motion"],
    liveUrl: "https://lecatta.vercel.app/",
    accentGlow: "hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.25)]",
    tagColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyek" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mb-24" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-pink-400 uppercase tracking-wider mb-4">
            Proyek Unggulan
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Karya Kreatif <span className="gradient-text">Terbaru</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Pilihan proyek yang menunjukkan keahlian saya dalam membangun
            aplikasi web modern yang skalabel dan berdampak nyata.
          </p>
        </motion.div>

        {/* ── Projects Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative backdrop-blur-xl bg-slate-900/40 border border-slate-800/80 rounded-3xl p-4 sm:p-6 lg:p-7 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between ${project.accentGlow}`}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* 1. Header: Category badge + Status tag */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span className={`text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wider ${project.tagColor}`}>
                    {project.tag}
                  </span>
                  <span className="ml-auto text-[10px] px-2.5 py-1 rounded-full bg-slate-800/60 border border-slate-700/60 text-slate-500 font-medium uppercase tracking-wider whitespace-nowrap">
                    Featured
                  </span>
                </div>

                {/* 2. Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* 3. Description */}
                <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* 4. Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-indigo-200 rounded-full bg-indigo-500/10 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Action Button */}
              <div className="pt-4 border-t border-slate-800/60">
                {project.isPrivate ? (
                  <button
                    disabled
                    className="flex items-center gap-2 text-sm font-medium text-slate-500 opacity-60 cursor-not-allowed pointer-events-none"
                  >
                    <Lock size={15} />
                    <span>Sistem Internal (Private)</span>
                  </button>
                ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
                  >
                    <ExternalLink size={15} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    <span>Lihat Detail / Konsultasi</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
