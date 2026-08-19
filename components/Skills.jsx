"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  Layout,
  Server,
  Workflow,
  Sparkles,
  Database,
  Code2,
  Globe,
  Cpu,
  Move,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  Layers,
  Zap
} from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiWordpress,
  SiSupabase,
  SiLaravel,
  SiDocker,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVercel
} from "react-icons/si";

/* ─── Structured Skills Data ──────────────────────────────────── */
const ALL_TECH = [
  // Frontend Ring
  { id: "react", name: "React.js", category: "frontend", tier: 0, icon: SiReact, color: "#61DAFB", glow: "rgba(97,218,251,0.5)" },
  { id: "next", name: "Next.js", category: "frontend", tier: 0, icon: SiNextdotjs, color: "#FFFFFF", glow: "rgba(255,255,255,0.4)" },
  { id: "ts", name: "TypeScript", category: "frontend", tier: 0, icon: SiTypescript, color: "#3178C6", glow: "rgba(49,120,198,0.5)" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", tier: 0, icon: SiTailwindcss, color: "#38BDF8", glow: "rgba(56,189,248,0.5)" },
  { id: "framer", name: "Framer Motion", category: "frontend", tier: 0, icon: SiFramer, color: "#FF0055", glow: "rgba(255,0,85,0.5)" },
  { id: "js", name: "JavaScript", category: "frontend", tier: 0, icon: SiJavascript, color: "#F7DF1E", glow: "rgba(247,223,30,0.5)" },
  { id: "html", name: "HTML5", category: "frontend", tier: 0, icon: SiHtml5, color: "#E34F26", glow: "rgba(227,79,38,0.5)" },
  { id: "css", name: "CSS3", category: "frontend", tier: 0, icon: SiCss, color: "#1572B6", glow: "rgba(21,114,182,0.5)" },

  // Backend & Data Ring
  { id: "node", name: "Node.js", category: "backend", tier: 1, icon: SiNodedotjs, color: "#339933", glow: "rgba(51,153,51,0.5)" },
  { id: "express", name: "Express.js", category: "backend", tier: 1, icon: SiExpress, color: "#E5E7EB", glow: "rgba(229,231,235,0.4)" },
  { id: "laravel", name: "Laravel", category: "backend", tier: 1, icon: SiLaravel, color: "#FF2D20", glow: "rgba(255,45,32,0.5)" },
  { id: "wordpress", name: "WordPress", category: "backend", tier: 1, icon: SiWordpress, color: "#21759B", glow: "rgba(33,117,155,0.5)" },
  { id: "supabase", name: "Supabase", category: "backend", tier: 1, icon: SiSupabase, color: "#3ECF8E", glow: "rgba(62,207,142,0.5)" },
  { id: "mysql", name: "MySQL", category: "backend", tier: 1, icon: SiMysql, color: "#4479A1", glow: "rgba(68,121,161,0.5)" },
  { id: "postgres", name: "PostgreSQL", category: "backend", tier: 1, icon: SiPostgresql, color: "#4169E1", glow: "rgba(65,105,225,0.5)" },
  { id: "restapi", name: "RESTful API", category: "backend", tier: 1, icon: Globe, color: "#00D8FF", glow: "rgba(0,216,255,0.5)" },

  // Ecosystem & DevOps Ring
  { id: "git", name: "Git & GitHub", category: "tools", tier: 2, icon: SiGithub, color: "#F05032", glow: "rgba(240,80,50,0.5)" },
  { id: "docker", name: "Docker", category: "tools", tier: 2, icon: SiDocker, color: "#2496ED", glow: "rgba(36,150,237,0.5)" },
  { id: "postman", name: "Postman", category: "tools", tier: 2, icon: SiPostman, color: "#FF6C37", glow: "rgba(255,108,55,0.5)" },
  { id: "figma", name: "Figma", category: "tools", tier: 2, icon: SiFigma, color: "#F24E1E", glow: "rgba(242,78,30,0.5)" },
  { id: "vercel", name: "Vercel", category: "tools", tier: 2, icon: SiVercel, color: "#FFFFFF", glow: "rgba(255,255,255,0.4)" },
  { id: "vscode", name: "VS Code", category: "tools", tier: 2, icon: Code2, color: "#007ACC", glow: "rgba(0,122,204,0.5)" },
];

const CATEGORIES = [
  { id: "all", label: "All Stack", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "backend", label: "Backend & Data", icon: Server },
  { id: "tools", label: "DevOps & Tools", icon: Workflow },
];

/* ─── 1. Desktop 3D Holographic Cylinder Tunnel ──────────────── */
function HolographicCylinderTunnel({ activeCategory }) {
  const [rotY, setRotY] = useState(0);
  const [rotX, setRotX] = useState(-8);
  const [isDragging, setIsDragging] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef(null);

  // Physics animation loop with momentum damping
  useEffect(() => {
    let lastTime = performance.now();

    const updatePhysics = (time) => {
      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      if (!isDragging) {
        // Auto-rotation + inertia deceleration
        setRotY((prev) => (prev + 12 * delta + velocityRef.current.x) % 360);
        setRotX((prev) => {
          const targetX = -8 + Math.sin(time * 0.001) * 3;
          return prev + (targetX - prev) * 0.05 + velocityRef.current.y;
        });

        // Friction damping
        velocityRef.current.x *= 0.94;
        velocityRef.current.y *= 0.94;
      }

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isDragging]);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    lastPosRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
  };

  const handlePointerMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      lastPosRef.current = { x: e.clientX, y: e.clientY };

      const factorX = 0.35;
      const factorY = 0.2;

      setRotY((prev) => prev + dx * factorX);
      setRotX((prev) => Math.max(-30, Math.min(25, prev - dy * factorY)));

      velocityRef.current = { x: dx * 0.25, y: -dy * 0.15 };
    },
    [isDragging]
  );

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }
  }, [isDragging, handlePointerMove]);

  // Cylinder radius and ring spacing
  const radius = 390; // Cylinder distance from center

  return (
    <div className="relative w-full h-[580px] lg:h-[620px] flex flex-col items-center justify-center select-none overflow-hidden rounded-3xl bg-slate-950/70 border border-slate-800/80 shadow-[0_0_60px_-15px_rgba(99,102,241,0.2)] backdrop-blur-2xl">
      {/* Subtle Background Grid & Central Glowing Core */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-600/10 blur-3xl pointer-events-none -z-10" />

      {/* Central Holographic Nexus Core */}
      <div className="absolute pointer-events-none flex flex-col items-center justify-center z-0">
        <div className="w-28 h-28 rounded-full border border-indigo-500/20 bg-indigo-950/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] animate-pulse">
          <Cpu size={36} className="text-indigo-400/80" />
        </div>
        <span className="text-[10px] font-mono text-indigo-300 mt-2 tracking-widest uppercase opacity-75">
          Neural Core
        </span>
      </div>

      {/* 3D Perspective Viewport */}
      <div
        onPointerDown={handlePointerDown}
        className="relative w-full h-full [perspective:1100px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-none z-10"
      >
        {/* Rotating Cylinder Container */}
        <div
          style={{
            transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            transformStyle: "preserve-3d",
          }}
          className="relative w-0 h-0 transform-gpu will-change-transform"
        >
          {ALL_TECH.map((skill, index) => {
            const Icon = skill.icon;
            const isMatch = activeCategory === "all" || skill.category === activeCategory;

            // Compute 3D cylinder cylindrical coordinates
            // 3 vertical tiers with staggered angle offset
            const tierCount = skill.tier === 0 ? 8 : skill.tier === 1 ? 8 : 6;
            const tierIndex = skill.tier === 0 ? index : skill.tier === 1 ? index - 8 : index - 16;
            const angleStep = 360 / tierCount;
            const angleOffset = skill.tier === 1 ? 22.5 : skill.tier === 2 ? 30 : 0;
            const angle = tierIndex * angleStep + angleOffset;

            const yOffset = skill.tier === 0 ? -95 : skill.tier === 1 ? 0 : 95;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px) translateY(${yOffset}px)`,
                  transformStyle: "preserve-3d",
                  opacity: isMatch ? 1 : 0.22,
                }}
                className={`absolute -left-[75px] -top-[24px] w-[150px] h-[48px] rounded-2xl backdrop-blur-xl border transition-all duration-300 transform-gpu flex items-center gap-2.5 px-3.5 shadow-lg group cursor-pointer ${
                  isMatch
                    ? "bg-slate-900/85 border-slate-700/80 hover:border-indigo-400/80 hover:bg-slate-850 hover:scale-115 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
                    : "bg-slate-950/60 border-slate-800/40 pointer-events-none"
                }`}
              >
                {/* Face Holographic Sheen */}
                <div
                  style={{
                    boxShadow: isMatch ? `inset 0 1px 1px 0 rgba(255,255,255,0.15)` : "none",
                  }}
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                />

                <Icon
                  size={20}
                  style={{ color: skill.color }}
                  className="shrink-0 transition-transform duration-200 group-hover:scale-120 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                />

                <span className="text-xs font-semibold text-slate-100 group-hover:text-white tracking-wide truncate">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Floating Status Bar */}
      <div className="absolute bottom-4 inset-x-6 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-[11px] font-medium text-slate-300 backdrop-blur-md shadow-md">
          <Move size={13} className="text-indigo-400 animate-pulse" />
          <span>Drag 360° untuk navigasi silinder spasial</span>
        </div>

        {hoveredSkill && (
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/50 text-xs font-bold text-white backdrop-blur-md shadow-lg shadow-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{hoveredSkill.name} ({hoveredSkill.category.toUpperCase()})</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── 2. Mobile 3D Touch Arc Carousel Sub-component ─────────── */
function MobileArcCarousel({ activeCategory }) {
  const filteredSkills = ALL_TECH.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSkill = () => {
    setActiveIndex((prev) => (prev + 1) % filteredSkills.length);
  };

  const prevSkill = () => {
    setActiveIndex((prev) => (prev - 1 + filteredSkills.length) % filteredSkills.length);
  };

  const currentSkill = filteredSkills[activeIndex] || filteredSkills[0];

  return (
    <div className="w-full select-none">
      {/* 3D Arc Stage */}
      <div className="relative w-full h-[320px] flex items-center justify-center [perspective:1000px] overflow-hidden py-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => {
            const offset = index - activeIndex;
            const isCenter = offset === 0;

            // Only render adjacent cards for optimal mobile performance
            if (Math.abs(offset) > 2) return null;

            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.4}
                onDragEnd={(e, { offset: dragOffset }) => {
                  if (dragOffset.x < -40) nextSkill();
                  if (dragOffset.x > 40) prevSkill();
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  x: offset * 110,
                  z: -Math.abs(offset) * 60,
                  rotateY: offset * -20,
                  scale: isCenter ? 1 : 0.82,
                  opacity: isCenter ? 1 : 0.45,
                  zIndex: 20 - Math.abs(offset) * 5,
                }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                onClick={() => setActiveIndex(index)}
                style={{
                  transformStyle: "preserve-3d",
                }}
                className={`absolute w-[180px] h-[220px] rounded-3xl p-5 flex flex-col justify-between backdrop-blur-2xl border transition-colors shadow-2xl cursor-pointer ${
                  isCenter
                    ? "bg-slate-900/90 border-indigo-500/60 shadow-[0_15px_35px_-10px_rgba(99,102,241,0.4)]"
                    : "bg-slate-950/75 border-slate-800/80"
                }`}
              >
                {/* Header tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 font-mono uppercase">
                    {skill.category}
                  </span>
                  {isCenter && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </div>

                {/* Center Icon */}
                <div className="flex flex-col items-center justify-center my-auto">
                  <div
                    style={{
                      boxShadow: isCenter ? `0 0 25px ${skill.glow}` : "none",
                    }}
                    className="w-16 h-16 rounded-2xl bg-slate-850/80 border border-slate-700/60 flex items-center justify-center mb-3"
                  >
                    <Icon size={34} style={{ color: skill.color }} />
                  </div>
                  <h3 className="text-base font-bold text-white text-center leading-tight">
                    {skill.name}
                  </h3>
                </div>

                {/* Footer */}
                <div className="text-center">
                  <span className="text-[10px] text-indigo-300 font-medium">
                    {isCenter ? "Production Ready" : "Swipe & Tap"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation Dock */}
      <div className="flex items-center justify-between gap-3 px-4 mt-2">
        <button
          onClick={prevSkill}
          className="w-10 h-10 rounded-2xl bg-slate-900/90 border border-slate-700 text-slate-300 flex items-center justify-center active:scale-95 shadow-md"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Counter & Progress */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-indigo-400">
            {String(activeIndex + 1).padStart(2, "0")} / {String(filteredSkills.length).padStart(2, "0")}
          </span>
          <span className="text-xs text-slate-400">&bull; {currentSkill?.name}</span>
        </div>

        <button
          onClick={nextSkill}
          className="w-10 h-10 rounded-2xl bg-slate-900/90 border border-slate-700 text-slate-300 flex items-center justify-center active:scale-95 shadow-md"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* ─── Main Skills Component ───────────────────────────────────── */
export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <section id="skills" className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      {/* Section Divider with Glow */}
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      {/* Cyber Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

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
            <span>Holographic Spatial Architecture</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
            3D Holographic <span className="gradient-text">Cylinder Tunnel</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Jelajahi seluruh ekosistem keahlian teknologi dalam struktur silinder 3D interaktif 360°.
            <span className="text-indigo-300 font-medium"> Geser kursor untuk memutar atau pilih kategori filter di bawah!</span>
          </p>
        </motion.div>

        {/* ── Category Filter Pills Bar ─────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center gap-2 mb-8 flex-wrap"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] border border-indigo-400/50 scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800"
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ── 1. DESKTOP VIEWPORT (>= md): Interactive 3D Cylinder Tunnel ── */}
        <div className="hidden md:block">
          <HolographicCylinderTunnel activeCategory={activeCategory} />
        </div>

        {/* ── 2. MOBILE VIEWPORT (< md): 3D Touch Arc Carousel ── */}
        <div className="block md:hidden">
          <MobileArcCarousel key={activeCategory} activeCategory={activeCategory} />
        </div>
      </div>
    </section>
  );
}
