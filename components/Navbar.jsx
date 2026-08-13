"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#tentang" },
  { name: "Keahlian", href: "#skills" },
  { name: "Proyek", href: "#proyek" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false); // Tutup dropdown mobile

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none">
      <div className="flex flex-col items-center px-4 pt-6 w-full">
        <motion.nav
          layout
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col px-6 py-2.5 backdrop-blur-xl border shadow-2xl transition-all duration-500 pointer-events-auto ${
            isOpen ? "rounded-3xl w-full max-w-sm" : "rounded-full w-auto"
          } ${
            scrolled
              ? "bg-slate-900/80 border-slate-700/80"
              : "bg-slate-900/60 border-slate-800/80"
          }`}
        >
          <div className="flex items-center gap-6 md:gap-8 justify-between lg:justify-center w-full lg:w-auto">
            {isOpen && (
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 lg:hidden">
                Menu
              </span>
            )}

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href.slice(1))}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-slate-800/80 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Separator Halus */}
            <div className="h-4 w-[1px] bg-slate-800/60 hidden lg:block"></div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="/CV_Arsyah_Khairizal.pdf"
                download="CV_Arsyah_Khairizal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-full transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Unduh CV</span>
              </a>
              <a
                href="#kontak"
                onClick={(e) => handleNavClick(e, "kontak")}
                className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-glow-indigo hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
              >
                <span>Hire Me</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors rounded-lg z-50"
              aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden mt-4"
              >
                <div className="flex flex-col gap-1 pb-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href.slice(1))}
                      className="block px-4 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex gap-3 mt-3 px-4">
                    <a
                      href="/CV_Arsyah_Khairizal.pdf"
                      download="CV_Arsyah_Khairizal.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-xl transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span>Unduh CV</span>
                    </a>
                    <a
                      href="#kontak"
                      onClick={(e) => handleNavClick(e, "kontak")}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-glow-indigo"
                    >
                      Rekrut Saya
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}
