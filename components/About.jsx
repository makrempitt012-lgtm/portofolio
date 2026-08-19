"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Compass, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  const statusItems = [
    {
      label: "Current Focus",
      value: "Next.js & Full-Stack Systems",
      icon: Compass,
    },
    {
      label: "Education",
      value: "Teknik Informatika — Politeknik Negeri Bengkalis",
      icon: GraduationCap,
    },
    {
      label: "Location",
      value: "Riau, Indonesia",
      icon: MapPin,
    },
    {
      label: "Role",
      value: "Full-Stack Web Developer",
      icon: Briefcase,
    },
    {
      label: "Availability",
      value: "Open for Projects / Freelance & Hiring",
      icon: CheckCircle2,
      highlight: true,
    },
  ];

  return (
    <section id="tentang" className="relative py-20 sm:py-28 px-4 sm:px-6">
      {/* Subtle Section Divider */}
      <div className="border-t border-zinc-800/80 max-w-6xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-3">
            01 / TENTANG SAYA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100">
            Rekayasa Perangkat Lunak & Solusi Digital
          </h2>
        </motion.div>

        {/* 2-Column Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (60% / col-span-7): Professional Narrative */}
          <motion.div
            {...fadeUp(0.1)}
            className="lg:col-span-7 space-y-6 text-zinc-300 font-normal leading-relaxed text-sm sm:text-base"
          >
            <p>
              Saya adalah seorang Mahasiswa Aktif Teknik Informatika di Politeknik Negeri Bengkalis dengan spesialisasi dalam rekayasa perangkat lunak web modern. Fokus utama saya mencakup pembangunan arsitektur aplikasi web menyeluruh—mengintegrasikan antarmuka pengguna yang terstruktur dan responsif dengan rancangan backend serta manajemen basis data yang andal.
            </p>
            <p>
              Dengan pendekatan kerja berbasis <span className="text-zinc-100 font-medium">problem-solving</span>, saya tidak terikat kaku pada satu ekosistem tertentu. Saya terbiasa menganalisis kebutuhan fungsional sebuah proyek, memilih fondasi teknologi yang paling tepat dan skalabel, serta mengeksekusinya dengan standar penulisan kode yang bersih, mudah dipelihara, dan berkinerja tinggi.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800/80">
                • Scalable Architecture
              </span>
              <span className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800/80">
                • Clean & Maintainable Code
              </span>
              <span className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800/80">
                • End-to-End Integration
              </span>
            </div>
          </motion.div>

          {/* Right Column (40% / col-span-5): Minimalist Status Card */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-5 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/60 transition-colors"
          >
            {/* Live Indicator */}
            <div className="flex items-center justify-between pb-5 border-b border-zinc-800/80 mb-5">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                STATUS & OVERVIEW
              </span>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono text-emerald-400 font-medium">Available</span>
              </div>
            </div>

            {/* Key-Value Details */}
            <div className="space-y-4">
              {statusItems.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span
                    className={`text-xs sm:text-sm font-medium ${
                      item.highlight ? "text-emerald-400" : "text-zinc-200"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
