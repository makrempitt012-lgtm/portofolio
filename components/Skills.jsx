"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Layout, Server, Terminal, Globe, Shield, Smartphone, Code2,
  Workflow, RefreshCw, Zap, Sparkles, Layers, Droplets, Waves,
  Orbit, Move, Flame, Cpu, Database, Check
} from "lucide-react";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiGithub, SiFigma, SiPostman, SiDocker, SiVercel,
  SiLaravel, SiMysql, SiFirebase, SiWordpress,
  SiSupabase, SiLinux
} from "react-icons/si";

/* ─── Tech Stack List for Liquid Bubble Fusion ───────────────── */
const ALL_SKILLS = [
  // Frontend
  { id: "react", name: "React.js", icon: SiReact, category: "frontend", color: "#61DAFB", glow: "rgba(97,218,251,0.5)", size: "lg", initialPos: { x: 22, y: 20 } },
  { id: "next", name: "Next.js", icon: SiNextdotjs, category: "frontend", color: "#FFFFFF", glow: "rgba(255,255,255,0.4)", size: "lg", initialPos: { x: 42, y: 16 } },
  { id: "ts", name: "TypeScript", icon: SiTypescript, category: "frontend", color: "#3178C6", glow: "rgba(49,120,198,0.5)", size: "lg", initialPos: { x: 62, y: 22 } },
  { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", color: "#38BDF8", glow: "rgba(56,189,248,0.5)", size: "lg", initialPos: { x: 80, y: 18 } },
  { id: "js", name: "JavaScript", icon: SiJavascript, category: "frontend", color: "#F7DF1E", glow: "rgba(247,223,30,0.5)", size: "md", initialPos: { x: 12, y: 40 } },
  { id: "framer", name: "Framer Motion", icon: SiFramer, category: "frontend", color: "#FF0055", glow: "rgba(255,0,85,0.5)", size: "md", initialPos: { x: 32, y: 38 } },
  { id: "html", name: "HTML5", icon: SiHtml5, category: "frontend", color: "#E34F26", glow: "rgba(227,79,38,0.4)", size: "sm", initialPos: { x: 50, y: 34 } },
  { id: "css", name: "CSS3", icon: SiCss, category: "frontend", color: "#1572B6", glow: "rgba(21,114,182,0.4)", size: "sm", initialPos: { x: 68, y: 40 } },
  { id: "responsive", name: "Responsive UI", icon: Smartphone, category: "frontend", color: "#A855F7", glow: "rgba(168,85,247,0.4)", size: "sm", initialPos: { x: 86, y: 36 } },

  // Backend & CMS
  { id: "node", name: "Node.js", icon: SiNodedotjs, category: "backend", color: "#339933", glow: "rgba(51,153,51,0.5)", size: "lg", initialPos: { x: 18, y: 58 } },
  { id: "laravel", name: "Laravel", icon: SiLaravel, category: "backend", color: "#FF2D20", glow: "rgba(255,45,32,0.5)", size: "lg", initialPos: { x: 38, y: 54 } },
  { id: "supabase", name: "Supabase", icon: SiSupabase, category: "backend", color: "#3ECF8E", glow: "rgba(62,207,142,0.5)", size: "lg", initialPos: { x: 58, y: 56 } },
  { id: "express", name: "Express.js", icon: SiExpress, category: "backend", color: "#E5E7EB", glow: "rgba(229,231,235,0.4)", size: "md", initialPos: { x: 76, y: 54 } },
  { id: "wordpress", name: "WordPress", icon: SiWordpress, category: "backend", color: "#21759B", glow: "rgba(33,117,155,0.4)", size: "md", initialPos: { x: 88, y: 68 } },
  { id: "restapi", name: "RESTful API", icon: Globe, category: "backend", color: "#00D8FF", glow: "rgba(0,216,255,0.4)", size: "sm", initialPos: { x: 28, y: 72 } },

  // Database
  { id: "postgres", name: "PostgreSQL", icon: SiPostgresql, category: "database", color: "#4169E1", glow: "rgba(65,105,225,0.5)", size: "md", initialPos: { x: 46, y: 72 } },
  { id: "mongodb", name: "MongoDB", icon: SiMongodb, category: "database", color: "#47A248", glow: "rgba(71,162,72,0.4)", size: "md", initialPos: { x: 64, y: 74 } },
  { id: "mysql", name: "MySQL", icon: SiMysql, category: "database", color: "#4479A1", glow: "rgba(68,121,161,0.4)", size: "md", initialPos: { x: 12, y: 78 } },
  { id: "firebase", name: "Firebase", icon: SiFirebase, category: "database", color: "#FFCA28", glow: "rgba(255,202,40,0.4)", size: "sm", initialPos: { x: 80, y: 78 } },

  // Tools & DevOps
  { id: "docker", name: "Docker", icon: SiDocker, category: "tools", color: "#2496ED", glow: "rgba(36,150,237,0.5)", size: "md", initialPos: { x: 24, y: 88 } },
  { id: "git", name: "Git & GitHub", icon: SiGithub, category: "tools", color: "#F05032", glow: "rgba(240,80,50,0.4)", size: "md", initialPos: { x: 42, y: 88 } },
  { id: "figma", name: "Figma", icon: SiFigma, category: "tools", color: "#F24E1E", glow: "rgba(242,78,30,0.4)", size: "md", initialPos: { x: 60, y: 88 } },
  { id: "postman", name: "Postman", icon: SiPostman, category: "tools", color: "#FF6C37", glow: "rgba(255,108,55,0.4)", size: "sm", initialPos: { x: 74, y: 88 } },
  { id: "vercel", name: "Vercel", icon: SiVercel, category: "tools", color: "#FFFFFF", glow: "rgba(255,255,255,0.3)", size: "sm", initialPos: { x: 88, y: 88 } },
  { id: "linux", name: "Linux / Bash", icon: SiLinux, category: "tools", color: "#FCC624", glow: "rgba(252,198,36,0.4)", size: "sm", initialPos: { x: 8, y: 92 } },
];

const CATEGORIES = [
  { id: "all", label: "Semua Bubble", icon: Droplets, count: ALL_SKILLS.length },
  { id: "frontend", label: "Frontend & UI", icon: Layout, count: ALL_SKILLS.filter(s => s.category === "frontend").length },
  { id: "backend", label: "Backend & CMS", icon: Server, count: ALL_SKILLS.filter(s => s.category === "backend").length },
  { id: "database", label: "Database & Cloud", icon: Database, count: ALL_SKILLS.filter(s => s.category === "database").length },
  { id: "tools", label: "Tools & DevOps", icon: Workflow, count: ALL_SKILLS.filter(s => s.category === "tools").length },
];

/* ─── Individual Liquid Bubble Component ─────────────────────── */
function LiquidBubble({ skill, index, activeCategory, arenaRef, isAgitated, isMerged }) {
  const Icon = skill.icon;
  const isFiltered = activeCategory === "all" || skill.category === activeCategory;

  // Random floating oscillation offsets & duration
  const floatDuration = 4 + (index % 5) * 0.8;
  const floatDelay = (index % 7) * 0.3;
  const floatRangeX = (index % 2 === 0 ? 1 : -1) * (10 + (index % 3) * 6);
  const floatRangeY = (index % 3 === 0 ? -1 : 1) * (12 + (index % 4) * 5);

  // Position calculations based on state (normal float vs merged center vs agitated)
  const targetX = isMerged
    ? "50%"
    : `${skill.initialPos.x}%`;
  const targetY = isMerged
    ? "50%"
    : `${skill.initialPos.y}%`;

  return (
    <motion.div
      drag
      dragConstraints={arenaRef}
      dragElastic={0.3}
      whileHover={{ scale: 1.15, zIndex: 40 }}
      whileDrag={{ scale: 1.25, zIndex: 50, cursor: "grabbing" }}
      initial={{
        opacity: 0,
        scale: 0.6,
        left: `${skill.initialPos.x}%`,
        top: `${skill.initialPos.y}%`,
      }}
      animate={{
        opacity: isFiltered ? 1 : 0.25,
        scale: isFiltered ? 1 : 0.85,
        left: targetX,
        top: targetY,
        x: isMerged ? 0 : [0, floatRangeX, -floatRangeX * 0.7, 0],
        y: isMerged ? 0 : [0, floatRangeY, -floatRangeY * 0.8, 0],
        rotate: isMerged ? 0 : [0, (index % 2 === 0 ? 3 : -3), 0],
      }}
      transition={{
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
        left: { type: "spring", stiffness: 120, damping: 18 },
        top: { type: "spring", stiffness: 120, damping: 18 },
        x: {
          repeat: Infinity,
          duration: isAgitated ? floatDuration * 0.4 : floatDuration,
          delay: floatDelay,
          ease: "easeInOut",
        },
        y: {
          repeat: Infinity,
          duration: isAgitated ? (floatDuration + 0.5) * 0.4 : floatDuration + 0.5,
          delay: floatDelay,
          ease: "easeInOut",
        },
        rotate: {
          repeat: Infinity,
          duration: floatDuration * 1.5,
          ease: "easeInOut",
        },
      }}
      style={{
        position: "absolute",
        transformOrigin: "center center",
        transform: "translate(-50%, -50%)",
      }}
      className={`group cursor-grab active:cursor-grabbing select-none transform-gpu transition-filter duration-300 ${
        !isFiltered ? "grayscale pointer-events-none" : ""
      }`}
    >
      {/* ── 1. Liquid Goo Fusion Background (Participates in SVG Metaball merge) ── */}
      <div
        style={{
          boxShadow: `0 0 28px -2px ${skill.glow}, 0 0 12px 2px rgba(168,85,247,0.35)`,
        }}
        className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-indigo-600/70 via-purple-600/60 to-pink-600/50 blur-[2px] opacity-80 group-hover:opacity-100 group-hover:blur-0 transition-all duration-300 pointer-events-none"
      />

      {/* ── 2. Glassmorphism Foreground Bubble Surface ── */}
      <div className="relative flex items-center justify-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-slate-900/80 border border-indigo-400/40 backdrop-blur-xl text-white shadow-xl shadow-purple-950/40 group-hover:border-purple-300/80 group-hover:bg-indigo-950/80 transition-all duration-300 whitespace-nowrap">
        {/* Subtle Liquid Inner Specular Sheen */}
        <div className="absolute top-1 left-3 right-3 h-2 rounded-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />

        {/* Icon */}
        <Icon
          size={18}
          style={{ color: skill.color }}
          className="shrink-0 transition-transform duration-300 group-hover:scale-120 group-hover:rotate-12"
        />

        {/* Tech Label */}
        <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100 group-hover:text-white drop-shadow-sm">
          {skill.name}
        </span>

        {/* Interactive Pulse Dot */}
        <span
          style={{ backgroundColor: skill.color }}
          className="w-1.5 h-1.5 rounded-full opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all"
        />
      </div>
    </motion.div>
  );
}

/* ─── Main Skills Component ───────────────────────────────────── */
export default function Skills() {
  const sectionRef = useRef(null);
  const arenaRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("liquid"); // "liquid" | "bento"
  const [isAgitated, setIsAgitated] = useState(false);
  const [isMerged, setIsMerged] = useState(false);

  // Trigger liquid agitation / wave pulse
  const handleAgitate = () => {
    setIsAgitated(true);
    setTimeout(() => setIsAgitated(false), 2400);
  };

  // Toggle Mega Fusion Core
  const handleToggleMerge = () => {
    setIsMerged((prev) => !prev);
  };

  // Reset Bubbles position
  const handleResetBubbles = () => {
    setIsMerged(false);
    setIsAgitated(true);
    setTimeout(() => setIsAgitated(false), 1200);
  };

  return (
    <section id="skills" className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      {/* ── Global SVG Metaball Liquid Fusion Filter ──────────── */}
      <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="liquid-fusion" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            {/* 1. Blur edges */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            {/* 2. Alpha threshold contrast to create liquid bridge */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 24 -10"
              result="liquid"
            />
            {/* 3. Blend back graphic */}
            <feBlend in="SourceGraphic" in2="liquid" mode="normal" />
          </filter>
        </defs>
      </svg>

      {/* Section Divider with Glow */}
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      {/* Cyber Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-xs font-semibold text-purple-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]">
            <Sparkles size={13} className="text-purple-400 animate-pulse" />
            <span>Liquid / Bubble Fusion</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
            Metaball <span className="gradient-text">Tech Stack</span> Fusion
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Setiap teknologi direpresentasikan sebagai cairan gelembung organik (*metaball blobs*).
            <span className="text-purple-300 font-medium"> Dekatkan atau seret bubble satu sama lain untuk melihat fusi cairan elastis!</span>
          </p>
        </motion.div>

        {/* ── Interactive Toolbar & Category Filter Bar ─────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 backdrop-blur-xl bg-slate-900/60 border border-slate-800/90 rounded-2xl p-3 sm:p-4 shadow-xl"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 w-full lg:w-auto">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] border border-indigo-400/40"
                      : "bg-slate-800/50 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-700/50"
                  }`}
                >
                  <Icon size={13} className={isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-slate-700/60 text-slate-400"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Liquid Actions & View Switcher */}
          <div className="flex items-center gap-2 w-full lg:w-auto justify-center sm:justify-end flex-wrap">
            {viewMode === "liquid" && (
              <>
                <button
                  onClick={handleAgitate}
                  title="Guncang / Aduk cairan metaball"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                >
                  <Waves size={13} className="text-purple-400" />
                  <span>Aduk Cairan</span>
                </button>

                <button
                  onClick={handleToggleMerge}
                  title={isMerged ? "Pencarkan kembali bubble" : "Satukan seluruh bubble ke pusat fusi"}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer ${
                    isMerged
                      ? "bg-pink-500/25 text-pink-200 border-pink-400/60 shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                      : "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                  }`}
                >
                  <Orbit size={13} className={isMerged ? "text-pink-300 animate-spin" : "text-indigo-400"} />
                  <span>{isMerged ? "Pencarkan Fusi" : "Mega Fusi"}</span>
                </button>

                <button
                  onClick={handleResetBubbles}
                  title="Kembalikan posisi asal bubble"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700 text-xs font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                >
                  <RefreshCw size={13} className="text-slate-400 hover:rotate-180 transition-transform duration-500" />
                  <span>Reset</span>
                </button>
              </>
            )}

            {/* View Switcher: Liquid Arena vs Bento Matrix */}
            <div className="flex items-center bg-slate-800/80 rounded-xl p-0.5 border border-slate-700/70 ml-1">
              <button
                onClick={() => setViewMode("liquid")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "liquid"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Droplets size={12} />
                <span className="hidden sm:inline">Liquid Fusion</span>
                <span className="sm:hidden">Liquid</span>
              </button>
              <button
                onClick={() => setViewMode("bento")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === "bento"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layout size={12} />
                <span className="hidden sm:inline">Bento Matrix</span>
                <span className="sm:hidden">Bento</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── View 1: Liquid / Bubble Fusion Arena ─────────────── */}
        {viewMode === "liquid" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            {/* Arena Container */}
            <div
              ref={arenaRef}
              className="relative w-full h-[540px] sm:h-[620px] md:h-[680px] rounded-3xl overflow-hidden backdrop-blur-2xl bg-slate-950/80 border border-slate-800/90 shadow-[0_0_60px_-15px_rgba(99,102,241,0.25)] select-none"
            >
              {/* Subtle Cyber Background Ambient Grid & Radial Glows */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Watermark Hint */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-[11px] font-medium text-slate-400 backdrop-blur-md z-10 shadow-sm">
                <Move size={13} className="text-purple-400 animate-pulse" />
                <span>Geser bubble mendekat ke bubble lain untuk efek fusi cairan metaball</span>
              </div>

              {/* Liquid Metaball Filter Fusion Container */}
              <div
                style={{
                  filter: "url(#liquid-fusion)",
                }}
                className="absolute inset-0 w-full h-full overflow-hidden"
              >
                {ALL_SKILLS.map((skill, index) => (
                  <LiquidBubble
                    key={skill.id}
                    skill={skill}
                    index={index}
                    activeCategory={activeCategory}
                    arenaRef={arenaRef}
                    isAgitated={isAgitated}
                    isMerged={isMerged}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ── View 2: Structured Bento Matrix Overview ─────────── */}
        {viewMode === "bento" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {CATEGORIES.filter(c => c.id !== "all").map((category) => {
              const CategoryIcon = category.icon;
              const categorySkills = ALL_SKILLS.filter(s => s.category === category.id);

              return (
                <div
                  key={category.id}
                  className="backdrop-blur-xl bg-slate-900/70 border border-slate-800/90 rounded-3xl p-5 sm:p-6 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-[0_0_35px_-10px_rgba(99,102,241,0.25)] transition-all duration-300 group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
                      <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/25 transition-all">
                        <CategoryIcon size={17} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white tracking-wide">{category.label}</h3>
                        <p className="text-[11px] text-slate-400">{categorySkills.length} Teknologi Terdaftar</p>
                      </div>
                    </div>

                    {/* Skill Badges List */}
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.id}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/70 border border-slate-700/60 text-slate-300 text-xs font-medium hover:border-purple-500/50 hover:text-white transition-all hover:scale-105"
                          >
                            <Icon size={13} style={{ color: skill.color }} />
                            <span>{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Tingkat Penguasaan</span>
                    <span className="font-semibold text-emerald-400">Production Ready</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
