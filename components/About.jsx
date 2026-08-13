"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Code2,
  Layers,
  Zap,
  Target,
  Cpu,
  Sparkles,
} from "lucide-react";

/* ─── Marquee tech list ───────────────────────────────────────── */
const ticker = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js",
  "Tailwind CSS", "Framer Motion", "Express.js", "MySQL", "MongoDB",
  "PHP", "Laravel", "Git", "Figma", "Vercel",
];

/* ─── Core principles ─────────────────────────────────────────── */
const principles = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Kode yang mudah dibaca, dipelihara, dan dikembangkan tim.",
    glow: "group-hover:shadow-[0_0_20px_-4px_rgba(99,102,241,0.6)]",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Sparkles,
    title: "Pixel-Perfect UI",
    desc: "Antarmuka presisi yang merespons setiap detail desain.",
    glow: "group-hover:shadow-[0_0_20px_-4px_rgba(168,85,247,0.6)]",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Struktur aplikasi yang kokoh dan siap tumbuh bersama bisnis.",
    glow: "group-hover:shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)]",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

/* ─── Metrics ─────────────────────────────────────────────────── */
const metrics = [
  { icon: GraduationCap, label: "Status Akademis", value: "Mahasiswa Aktif", sub: "Politeknik Negeri Bengkalis", accent: "text-indigo-400" },
  { icon: Code2,         label: "Proyek Selesai",  value: "15+",             sub: "Web Projects",              accent: "text-purple-400" },
  { icon: Cpu,           label: "Tech Stack",      value: "10+",             sub: "Teknologi Dikuasai",         accent: "text-emerald-400" },
  { icon: Target,        label: "Fokus Bidang",    value: "Full-Stack",      sub: "Web Development",           accent: "text-pink-400"   },
];

/* ─── Shared tile base ────────────────────────────────────────── */
const TILE = "backdrop-blur-2xl bg-slate-900/50 border border-slate-800/80 rounded-3xl transition-all duration-300";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="tentang" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mb-24" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ─────────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-indigo-400 uppercase tracking-wider mb-4">
            Tentang Saya
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Bersemangat Membangun{" "}
            <span className="gradient-text">Solusi Digital</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Developer yang berorientasi pada hasil dengan semangat menciptakan
            pengalaman digital yang berdampak nyata.
          </p>
        </motion.div>

        {/* ── Bento Grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* ── Tile 1: Bio Utama  (col-span-7) ─────────────── */}
          <motion.div
            {...fadeUp(0.1)}
            className={`${TILE} lg:col-span-7 p-4 sm:p-6 lg:p-8 hover:border-indigo-500/40 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]`}
          >
            {/* Glow badge status */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
                Aktif & Siap Kolaborasi
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-snug">
              Adaptable Full-Stack<br />
              <span className="gradient-text">Web Developer</span>
            </h3>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed mb-4">
              Sebagai seorang Mahasiswa Aktif Teknik Informatika di Politeknik Negeri Bengkalis, saya memiliki minat besar dalam merancang dan membangun solusi digital end-to-end yang memadukan <span className="text-indigo-400 font-medium">Pengalaman Pengguna (UX)</span> interaktif dengan performa optimal.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
              Berperan sebagai Full-Stack Developer, saya adalah individu yang sangat adaptif. Alih-alih hanya berpegang pada satu bahasa atau framework spesifik, saya memiliki fleksibilitas untuk mempelajari dan menerapkan berbagai teknologi web modern secara efisien, menciptakan arsitektur perangkat lunak yang elegan, skalabel, dan relevan dengan kebutuhan proyek Anda.
            </p>
          </motion.div>

          {/* ── Tile 2: Interactive Metrics  (col-span-5) ────── */}
          <motion.div
            {...fadeUp(0.2)}
            className={`${TILE} lg:col-span-5 p-4 sm:p-6 lg:p-8 hover:border-purple-500/30`}
          >
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-5">
              Snapshot
            </p>
            <div className="grid grid-cols-2 gap-3 h-[calc(100%-36px)]">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="group flex flex-col gap-1.5 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/60 transition-all duration-300"
                >
                  <m.icon size={16} className={`${m.accent} mb-1`} />
                  <span className={`text-xl font-bold ${m.accent}`}>{m.value}</span>
                  <span className="text-xs font-semibold text-white">{m.label}</span>
                  <span className="text-[10px] text-slate-500">{m.sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Tile 3: Core Principles  (col-span-7) ─────────── */}
          <motion.div
            {...fadeUp(0.3)}
            className={`${TILE} lg:col-span-7 p-4 sm:p-6 lg:p-8 hover:border-slate-700/80`}
          >
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-6">
              Prinsip Kerja Utama
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  className={`group flex flex-col gap-3 p-5 rounded-2xl bg-slate-800/30 border border-slate-700/40 hover:border-slate-600/60 transition-all duration-300 ${p.glow}`}
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${p.iconBg}`}>
                    <p.icon size={18} className={p.iconColor} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{p.title}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Tile 4: Tech Ticker  (col-span-5) ─────────────── */}
          <motion.div
            {...fadeUp(0.4)}
            className={`${TILE} lg:col-span-5 p-4 sm:p-6 lg:p-8 overflow-hidden hover:border-emerald-500/30`}
          >
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-5">
              Tech Favourites
            </p>
            {/* Marquee row 1 */}
            <div className="relative overflow-hidden mb-3">
              <div className="flex gap-3 animate-[marquee_22s_linear_infinite] whitespace-nowrap w-max">
                {[...ticker, ...ticker].map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 shrink-0"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Marquee row 2 (reverse) */}
            <div className="relative overflow-hidden">
              <div className="flex gap-3 animate-[marquee_28s_linear_infinite_reverse] whitespace-nowrap w-max">
                {[...ticker.slice(5), ...ticker, ...ticker.slice(0, 5)].map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 shrink-0"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-slate-600 mt-4 italic">
              * Daftar teknologi yang aktif dipelajari &amp; digunakan.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
