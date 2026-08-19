"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Eye, Sparkles } from "lucide-react";
import Image from "next/image";
import profileImg from "@/public/profile.jpg";
import { useState, useEffect } from "react";

const words = [
  "Full-Stack Web Developer",
  "Mahasiswa Politeknik Negeri Bengkalis",
  "Adaptable Web Developer",
  "Digital Solution Builder"
];

function useSingleTypewriter(text, typingSpeed = 100, startDelay = 500) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let delayTimer = setTimeout(() => setHasStarted(true), startDelay);
    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (displayedText.length < text.length) {
      let timer = setTimeout(() => {
        setDisplayedText(text.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [displayedText, hasStarted, text, typingSpeed]);

  const isFinished = hasStarted && displayedText.length >= text.length;

  return { text: displayedText, isFinished };
}

function useTypewriter(words, typingSpeed = 100, backspaceSpeed = 50, pauseTime = 2000, start = true) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    if (!start) return;

    let timer = setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingDelay(isDeleting ? backspaceSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingDelay, words, typingSpeed, backspaceSpeed, pauseTime, start]);

  return text;
}

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const { text: nameText, isFinished: isNameFinished } = useSingleTypewriter("Arsyah Khairizal", 120, 300);
  const typewriterText = useTypewriter(words, 80, 40, 2000, isNameFinished);

  const handleScrollTo = (e, targetId) => {
    if (e && e.preventDefault) e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const navOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 overflow-x-hidden bg-transparent"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-glow [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse-glow [animation-delay:4s]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Area 1: Main Grid Content (Hero Content & Profile Card) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start justify-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl mb-8 self-start"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
              Available For Hire
            </span>
          </motion.div>

          {/* Baris 1: Nama Utama */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 min-h-[3rem] lg:min-h-[4.5rem] flex flex-wrap items-center tracking-tight"
          >
            <span className="text-indigo-400 font-mono font-bold mr-3 opacity-80">{"//"}</span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
              {nameText}
            </span>
            {!isNameFinished && <span className="animate-pulse text-slate-300 font-normal ml-2">_</span>}
          </motion.h1>

          {/* Baris 2: Peran Dinamis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 min-h-[2.5rem] lg:min-h-[3rem] flex flex-wrap items-center text-lg sm:text-2xl md:text-3xl font-bold font-mono"
          >
            {isNameFinished && (
              <>
                <span className="text-pink-500 font-mono font-bold mr-3 animate-pulse">&gt;_</span>
                <span className="text-indigo-300">
                  {typewriterText}
                  <span className="animate-pulse text-indigo-400 font-bold ml-1">_</span>
                </span>
              </>
            )}
          </motion.div>

          {/* Paragraf Deskripsi */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mb-10 leading-relaxed"
          >
            <span className="font-semibold text-slate-300">Politeknik Negeri Bengkalis — Full-Stack Web Developer.</span><br />
            Seorang Mahasiswa Aktif yang berfokus pada pengembangan aplikasi web modern, skalabel, dan estetis. Berpengalaman membangun solusi digital end-to-end—mulai dari perancangan UI/UX interaktif hingga integrasi backend—dengan fleksibilitas tinggi dalam menerapkan berbagai tech stack dan teknologi web modern sesuai kebutuhan proyek.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#kontak"
              onClick={(e) => handleScrollTo(e, "kontak")}
              className="group flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-glow-indigo hover:shadow-glow-purple transition-all duration-500 hover:scale-105 cursor-pointer active:scale-95"
            >
              <Sparkles size={16} />
              Hire Me
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#proyek"
              onClick={(e) => handleScrollTo(e, "proyek")}
              className="group flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-200 rounded-full border border-slate-700/80 backdrop-blur-xl bg-slate-900/30 hover:border-slate-500 hover:bg-slate-800/50 transition-all duration-500 hover:scale-105 cursor-pointer active:scale-95"
            >
              <Eye size={16} />
              Lihat Karya
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          {/* Wrapper relative untuk badge & glow — di luar overflow-hidden */}
          <div className="relative w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[320px] mx-auto">
            {/* Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse-glow pointer-events-none" />

            {/* Profile Card - Full Portrait Image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-indigo-500/20 bg-indigo-950/10 backdrop-blur-md shadow-2xl shadow-indigo-500/10 group"
            >
              {/* Photo */}
              <Image alt="Arsyah Khairizal" className="object-cover object-center rounded-3xl" fill priority quality={75} sizes="(max-width: 768px) 100vw, 380px" src={profileImg}/>

              {/* Fallback inisial — tampil saat /profile.jpg belum ada */}
              <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 bg-gradient-to-br from-indigo-950/30 via-slate-900/20 to-purple-950/30">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 mb-2">
                  <span className="text-3xl font-extrabold text-white">AK</span>
                </div>
              </div>

              {/* Gradient overlay + nama */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-6 z-20">
                <p className="text-white font-bold text-xl md:text-2xl tracking-wide">Arsyah Khairizal</p>
                <p className="text-indigo-400 text-xs font-mono">Politeknik Negeri Bengkalis</p>
              </div>
            </motion.div>

            {/* Floating Frontend Badge — di luar kartu overflow-hidden */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute -top-3 -right-2 md:-right-4 z-20 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-full text-xs text-emerald-400 font-mono shadow-lg flex items-center gap-1.5 animate-pulse"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Frontend
            </motion.div>

            {/* Floating Backend Badge — di luar kartu overflow-hidden */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 2 }}
              className="absolute -bottom-3 -left-2 md:-left-4 z-20 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-full text-xs text-sky-400 font-mono shadow-lg flex items-center gap-1.5 animate-pulse"
            >
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              Backend
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
