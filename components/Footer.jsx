"use client";

import { ArrowUp } from "lucide-react";

const footerLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#tentang" },
  { name: "Keahlian", href: "#skills" },
  { name: "Proyek", href: "#proyek" },
  { name: "Kontak", href: "#kontak" },
];

export default function Footer() {
  const handleFooterScroll = (e, targetId) => {
    if (e && e.preventDefault) e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const navOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-800/80 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-xs sm:text-sm font-mono text-zinc-400 text-center sm:text-left">
          © 2026 Arsyah Khairizal. Politeknik Negeri Bengkalis.
        </p>

        {/* Center: Minimalist Nav Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleFooterScroll(e, link.href.slice(1))}
              className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <span>Ke Atas</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
