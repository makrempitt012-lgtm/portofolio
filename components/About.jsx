"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Code2,
  Layers,
  Sparkles,
  Compass,
  CheckCircle2,
  Cpu,
  Target,
} from "lucide-react";

/* ─── Marquee tech list ───────────────────────────────────────── */
const ticker = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js",
  "Tailwind CSS", "Framer Motion", "Express.js", "WordPress", "MySQL",
  "MongoDB", "PHP", "Laravel", "Git", "Figma", "Vercel",
];

/* ─── Core principles ─────────────────────────────────────────── */
const principles = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Kode yang mudah dibaca, dipelihara, dan dikembangkan tim secara efisien.",
    glow: "hover:shadow-[0_0_24px_-4px_rgba(99,102,241,0.4)] hover:border-indigo-500/40",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Sparkles,
    title: "Pixel-Perfect UI",
    desc: "Antarmuka presisi yang merespons setiap detail desain & interaktivitas.",
    glow: "hover:shadow-[0_0_24px_-4px_rgba(168,85,247,0.4)] hover:border-purple-500/40",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    desc: "Struktur aplikasi yang kokoh, teruji, dan siap tumbuh bersama kebutuhan bisnis.",
    glow: "hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.35)] hover:border-emerald-500/40",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

/* ─── Metrics / Snapshot Data ─────────────────────────────────── */
const metrics = [
  {
    icon: Compass,
    label: "Fokus Utama",
    value: "Next.js & Full-Stack",
    sub: "Web Engineering",
    accent: "text-indigo-400",
  },
  {
    icon: GraduationCap,
    label: "Pendidikan",
    value: "Polbeng",
    sub: "Teknik Informatika",
    accent: "text-purple-400",
  },
  {
    icon: Code2,
    label: "Proyek Selesai",
    value: "15+",
    sub: "Web Projects",
    accent: "text-pink-400",
  },
  {
    icon: CheckCircle2,
    label: "Ketersediaan",
    value: "Available",
    sub: "Freelance & Projects",
    accent: "text-emerald-400",
  },
];

/* ─── Shared Card Style ───────────────────────────────────────── */
const CARD_STYLE =
  "backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-7 lg:p-8 transition-all duration-300";

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
      {/* Section Divider with Glow */}
      <div className="section-divider max-w-4xl mx-auto mb-24" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* ── Section Header ──────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-indigo-400 uppercase tracking-wider mb-4">
            Tentang Saya
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            Bersemangat Membangun{" "}
            <span className="gradient-text">Solusi Digital</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Developer yang berorientasi pada pemecahan masalah dengan komitmen menciptakan
            pengalaman web modern yang skalabel dan berdampak nyata.
          </p>
        </motion.div>

        {/* ── Bento Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* ── Tile 1: Bio Utama (col-span-7) ─────────────────── */}
          <motion.div
            {...fadeUp(0.1)}
            className={`${CARD_STYLE} lg:col-span-7 hover:border-indigo-500/40 hover:shadow-[0_0_35px_-10px_rgba(99,102,241,0.25)]`}
          >
            {/* Status Indicator */}
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
              Sebagai seorang Mahasiswa Aktif Teknik Informatika di Politeknik Negeri Bengkalis, saya memiliki dedikasi besar dalam merancang dan membangun solusi digital menyeluruh (*end-to-end*) yang menggabungkan <span className="text-indigo-400 font-medium">Pengalaman Pengguna (UX)</span> interaktif dengan arsitektur backend yang kokoh.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
              Berperan sebagai Full-Stack Developer, saya memiliki kemampuan adaptasi yang tinggi terhadap berbagai ekosistem teknologi web modern. Pendekatan saya berfokus pada <span className="text-purple-400 font-medium">problem-solving</span>, efisiensi penulisan kode, serta performa maksimal yang selaras dengan tujuan produk.
            </p>
          </motion.div>

          {/* ── Tile 2: Snapshot Metrics (col-span-5) ──────────── */}
          <motion.div
            {...fadeUp(0.2)}
            className={`${CARD_STYLE} lg:col-span-5 hover:border-purple-500/30 hover:shadow-[0_0_35px_-10px_rgba(168,85,247,0.2)]`}
          >
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Overview & Snapshot
            </p>
            <div className="grid grid-cols-2 gap-3 h-[calc(100%-36px)]">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="group flex flex-col justify-between p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 hover:border-slate-600/80 transition-all duration-300"
                >
                  <div>
                    <m.icon size={16} className={`${m.accent} mb-2`} />
                    <span className={`text-lg sm:text-xl font-bold block ${m.accent}`}>
                      {m.value}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {m.label}
                    </span>
                    <span className="text-[10px] text-slate-400 block">{m.sub}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Tile 3: Core Principles (col-span-7) ───────────── */}
          <motion.div
            {...fadeUp(0.3)}
            className={`${CARD_STYLE} lg:col-span-7 hover:border-slate-700/80`}
          >
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Prinsip Kerja Utama
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  className={`group flex flex-col gap-3 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 ${p.glow}`}
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

          {/* ── Tile 4: Tech Ticker (col-span-5) ───────────────── */}
          <motion.div
            {...fadeUp(0.4)}
            className={`${CARD_STYLE} lg:col-span-5 overflow-hidden hover:border-emerald-500/30`}
          >
            <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Active Tech Stack
            </p>
            {/* Marquee Row 1 */}
            <div className="relative overflow-hidden mb-3">
              <div className="flex gap-2.5 animate-[marquee_24s_linear_infinite] whitespace-nowrap w-max">
                {[...ticker, ...ticker].map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300 shrink-0"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Marquee Row 2 (Reverse) */}
            <div className="relative overflow-hidden">
              <div className="flex gap-2.5 animate-[marquee_30s_linear_infinite_reverse] whitespace-nowrap w-max">
                {[...ticker.slice(5), ...ticker, ...ticker.slice(0, 5)].map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300 shrink-0"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 mt-4 italic">
              * Daftar teknologi yang aktif dikuasai dan diimplementasikan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
