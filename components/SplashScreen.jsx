"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { Code2, Terminal, Cpu, Layers, Globe, Database, Sparkles, Binary, Code } from "lucide-react";

const floatingIcons = [
  { Icon: Code2, top: "15%", left: "10%", delay: 0, color: "text-indigo-400/40" },
  { Icon: Terminal, top: "20%", right: "15%", delay: 0.5, color: "text-purple-400/40" },
  { Icon: Cpu, top: "75%", left: "15%", delay: 1, color: "text-indigo-400/40" },
  { Icon: Layers, top: "80%", right: "20%", delay: 1.5, color: "text-purple-400/40" },
  { Icon: Globe, top: "40%", left: "5%", delay: 2, color: "text-indigo-400/40" },
  { Icon: Database, top: "50%", right: "8%", delay: 2.5, color: "text-purple-400/40" },
  { Icon: Sparkles, top: "10%", right: "40%", delay: 3, color: "text-indigo-400/40" },
  { Icon: Binary, bottom: "10%", left: "40%", delay: 3.5, color: "text-purple-400/40" },
];

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-purple-500/10 to-transparent blur-[60px] animate-pulse-glow" />
      </div>

      {/* Floating Icons Background */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.color} drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]`}
          style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon className={i % 2 === 0 ? "w-8 h-8 md:w-10 md:h-10" : "w-6 h-6 md:w-8 md:h-8"} />
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center gap-1">
        {/* Top Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs md:text-sm font-semibold tracking-[0.3em] text-indigo-400 uppercase mb-3 drop-shadow-md"
        >
          Selamat Datang Di Ruang Karya Digital Saya
        </motion.p>

        {/* Main Name Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-3 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]"
        >
          Arsyah Khairizal
        </motion.h1>

        {/* Sub-headline Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-slate-300 text-sm md:text-base font-medium drop-shadow-md"
        >
          Full-Stack Web Developer • Politeknik Negeri Bengkalis
        </motion.p>

        {/* Dual-Ring Spinning Loader */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="mt-12 relative flex items-center justify-center"
        >
          {/* Outer Ring */}
          <div 
            className="absolute w-16 h-16 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500 animate-spin" 
            style={{ animationDuration: "1.2s" }} 
          />
          
          {/* Inner Ring Glow & Icon */}
          <div className="relative w-12 h-12 rounded-full bg-slate-900/50 flex items-center justify-center border border-slate-800/80 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code size={20} className="text-indigo-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
