"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Server, Terminal, Globe, Shield, Smartphone, Code2, Workflow } from "lucide-react";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiGithub, SiFigma, SiPostman, SiDocker, SiVercel,
  SiJsonwebtokens, SiLaravel, SiMysql, SiFirebase,
  SiNpm, SiLinux, SiWordpress,
} from "react-icons/si";

/* ─── Data ────────────────────────────────────────────────────── */
const primary = [
  { name: "React.js",       icon: SiReact,      accent: "hover:border-sky-400/50 hover:text-sky-300 hover:shadow-[0_0_14px_-3px_rgba(56,189,248,0.5)]" },
  { name: "Next.js",        icon: SiNextdotjs,  accent: "hover:border-slate-300/50 hover:text-white hover:shadow-[0_0_14px_-3px_rgba(255,255,255,0.25)]" },
  { name: "TypeScript",     icon: SiTypescript, accent: "hover:border-blue-400/50 hover:text-blue-300 hover:shadow-[0_0_14px_-3px_rgba(96,165,250,0.5)]" },
  { name: "JavaScript",     icon: SiJavascript, accent: "hover:border-yellow-400/50 hover:text-yellow-300 hover:shadow-[0_0_14px_-3px_rgba(250,204,21,0.4)]" },
  { name: "Tailwind CSS",   icon: SiTailwindcss,accent: "hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_14px_-3px_rgba(34,211,238,0.4)]" },
  { name: "Framer Motion",  icon: SiFramer,     accent: "hover:border-pink-400/50 hover:text-pink-300 hover:shadow-[0_0_14px_-3px_rgba(244,114,182,0.4)]" },
  { name: "Responsive Design", icon: Smartphone, accent: "hover:border-indigo-400/50 hover:text-indigo-300 hover:shadow-[0_0_14px_-3px_rgba(129,140,248,0.4)]" },
];

const fundamentals = [
  { name: "HTML5",  icon: SiHtml5,  accent: "hover:border-orange-400/50 hover:text-orange-300 hover:shadow-[0_0_14px_-3px_rgba(251,146,60,0.4)]" },
  { name: "CSS3",   icon: SiCss,    accent: "hover:border-blue-400/50 hover:text-blue-300 hover:shadow-[0_0_14px_-3px_rgba(96,165,250,0.4)]" },
  { name: "Vanilla JS", icon: SiJavascript, accent: "hover:border-yellow-400/50 hover:text-yellow-300 hover:shadow-[0_0_14px_-3px_rgba(250,204,21,0.4)]" },
];

const backend = [
  { name: "Node.js",    icon: SiNodedotjs,      accent: "hover:border-emerald-400/50 hover:text-emerald-300 hover:shadow-[0_0_14px_-3px_rgba(52,211,153,0.4)]" },
  { name: "Express.js", icon: SiExpress,         accent: "hover:border-slate-300/50 hover:text-white" },
  { name: "Laravel",    icon: SiLaravel,          accent: "hover:border-red-400/50 hover:text-red-300 hover:shadow-[0_0_14px_-3px_rgba(248,113,113,0.4)]" },
  { name: "WordPress",  icon: SiWordpress,        accent: "hover:border-sky-400/50 hover:text-sky-300 hover:shadow-[0_0_14px_-3px_rgba(56,189,248,0.4)]" },
  { name: "MySQL",      icon: SiMysql,            accent: "hover:border-sky-400/50 hover:text-sky-300 hover:shadow-[0_0_14px_-3px_rgba(56,189,248,0.4)]" },
  { name: "PostgreSQL", icon: SiPostgresql,       accent: "hover:border-blue-400/50 hover:text-blue-300" },
  { name: "MongoDB",    icon: SiMongodb,          accent: "hover:border-emerald-400/50 hover:text-emerald-300" },
  { name: "Firebase",   icon: SiFirebase,         accent: "hover:border-amber-400/50 hover:text-amber-300 hover:shadow-[0_0_14px_-3px_rgba(251,191,36,0.4)]" },
  { name: "REST API",   icon: Globe,              accent: "hover:border-cyan-400/50 hover:text-cyan-300" },
  { name: "JWT Auth",   icon: SiJsonwebtokens,    accent: "hover:border-pink-400/50 hover:text-pink-300" },
  { name: "API Security", icon: Shield,           accent: "hover:border-slate-400/50 hover:text-slate-200" },
];

const tools = [
  { name: "Git & GitHub",     icon: SiGithub },
  { name: "Figma",            icon: SiFigma },
  { name: "Postman",          icon: SiPostman },
  { name: "VS Code",          icon: Code2 },
  { name: "Docker",           icon: SiDocker },
  { name: "Vercel",           icon: SiVercel },
  { name: "NPM / PNPM",       icon: SiNpm },
  { name: "Linux / Bash",     icon: SiLinux },
];

/* ─── Reusable Badge ──────────────────────────────────────────── */
function SkillBadge({ item, delay, isInView, baseColor = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      className={`group flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/50 border border-slate-700/50 cursor-default transition-all duration-300 hover:scale-[1.06] ${item.accent || baseColor}`}
    >
      <item.icon size={13} className="text-slate-300 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        {item.name}
      </span>
    </motion.div>
  );
}

/* ─── Tile wrapper ────────────────────────────────────────────── */
const TILE = "backdrop-blur-2xl bg-slate-900/50 border border-slate-800/80 rounded-3xl p-4 sm:p-6 lg:p-7 transition-all duration-300";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="skills" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mb-24" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ────────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-purple-400 uppercase tracking-wider mb-4">
            Keahlian &amp; Teknologi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Tech Matrix</span> Saya
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Kumpulan teknologi modern yang saya kuasai untuk membangun
            produk digital yang berdampak dan terukur.
          </p>
        </motion.div>

        {/* ── Bento Grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {/* ── Primary Stack (col-span-8 -> col-span-2) ─────────────────── */}
          <motion.div
            {...fadeUp(0.1)}
            className={`${TILE} lg:col-span-2 hover:border-indigo-500/40 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.25)]`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                <Layout size={17} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Primary Stack</p>
                <p className="text-[11px] text-slate-500">Frontend &amp; Frameworks</p>
              </div>
              <span className="ml-auto text-[10px] px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold uppercase tracking-wider">
                Core
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {primary.map((item, i) => (
                <SkillBadge key={i} item={item} delay={0.15 + i * 0.05} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* ── Core Fundamentals (col-span-4 -> col-span-1) ────────────── */}
          <motion.div
            {...fadeUp(0.2)}
            className={`${TILE} lg:col-span-1 hover:border-orange-500/30 hover:shadow-[0_0_30px_-10px_rgba(249,115,22,0.2)]`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Code2 size={17} className="text-orange-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Fundamentals</p>
                <p className="text-[11px] text-slate-500">Core Web Technologies</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {fundamentals.map((item, i) => (
                <SkillBadge key={i} item={item} delay={0.25 + i * 0.07} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          {/* ── Backend & Database (col-span-7 -> col-span-2) ─────────────── */}
          <motion.div
            {...fadeUp(0.3)}
            className={`${TILE} lg:col-span-2 hover:border-emerald-500/35 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Server size={17} className="text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Backend &amp; Database</p>
                <p className="text-[11px] text-slate-500">Server, API &amp; Data Layer</p>
              </div>
              <span className="ml-auto text-[10px] px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold uppercase tracking-wider">
                Server
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {backend.map((item, i) => (
                <SkillBadge key={i} item={item} delay={0.35 + i * 0.04} isInView={isInView} baseColor="hover:border-emerald-400/40 hover:text-emerald-300" />
              ))}
            </div>
          </motion.div>

          {/* ── Tools & Workflow (col-span-5 -> col-span-1) ────────────────── */}
          <motion.div
            {...fadeUp(0.4)}
            className={`${TILE} lg:col-span-1 hover:border-pink-500/30 hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.2)]`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <Workflow size={17} className="text-pink-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Tools &amp; Workflow</p>
                <p className="text-[11px] text-slate-500">DevOps, Design &amp; Productivity</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {tools.map((item, i) => (
                <SkillBadge
                  key={i}
                  item={item}
                  delay={0.45 + i * 0.05}
                  isInView={isInView}
                  baseColor="hover:border-pink-400/40 hover:text-pink-300 hover:shadow-[0_0_12px_-3px_rgba(244,114,182,0.35)]"
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
