"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Shield, Smartphone, Code2, Layout, Server, Wrench } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiHtml5, SiCss, SiFramer,
  SiNodedotjs, SiExpress, SiLaravel, SiWordpress,
  SiMysql, SiPostgresql, SiMongodb, SiFirebase,
  SiGithub, SiFigma, SiPostman, SiDocker, SiVercel,
  SiNpm, SiLinux,
} from "react-icons/si";

/* ─── Tech Matrix Data ────────────────────────────────────────── */
const categories = [
  {
    title: "Frontend Core",
    subtitle: "User Interface, Interactivity & Web Standards",
    icon: Layout,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Responsive Design", icon: Smartphone },
    ],
  },
  {
    title: "Backend & Architecture",
    subtitle: "Server, Data Layer & API Ecosystem",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "WordPress (CMS)", icon: SiWordpress },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "REST API Design", icon: Globe },
      { name: "API Security & Auth", icon: Shield },
    ],
  },
  {
    title: "Tools & Workflow",
    subtitle: "DevOps, Tooling & Collaborative Environment",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", icon: SiGithub },
      { name: "Figma (UI/UX)", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: Code2 },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "NPM / PNPM", icon: SiNpm },
      { name: "Linux / Bash", icon: SiLinux },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6">
      {/* Subtle Section Divider */}
      <div className="border-t border-zinc-800/80 max-w-6xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-3">
            02 / KEAHLIAN TEKNIS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-3">
            Tech Matrix & Kemampuan Rekayasa
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl">
            Klasifikasi perangkat, bahasa pemrograman, dan infrastruktur yang digunakan dalam merancang dan mengembangkan produk digital.
          </p>
        </motion.div>

        {/* Clean Category Rows */}
        <div className="space-y-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              {...fadeUp(0.1 + idx * 0.1)}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 hover:border-zinc-700/60 transition-colors"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300">
                    <category.icon size={16} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-100 tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-normal">{category.subtitle}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-zinc-400 self-start sm:self-auto">
                  {category.skills.length} Technologies
                </span>
              </div>

              {/* Monospace Badge Items */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-300 hover:border-zinc-700 hover:text-zinc-100 transition-colors cursor-default"
                  >
                    <skill.icon size={14} className="text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                    <span className="font-mono text-xs sm:text-sm font-normal">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
