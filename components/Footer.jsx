"use client";

import { ArrowUp } from "lucide-react";
import { SiGmail, SiWhatsapp, SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#tentang" },
  { name: "Keahlian", href: "#skills" },
  { name: "Proyek", href: "#proyek" },
  { name: "Kontak", href: "#kontak" },
];

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/makrempitt012-lgtm", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/arsyah-khairizal-b1529b3aa?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
  { icon: SiWhatsapp, href: "https://wa.me/6289522324356", label: "WhatsApp" },
  { icon: SiInstagram, href: "https://www.instagram.com/arsyahkhairizal_?igsh=MWx5eGd6Mzdwbmk0dw==", label: "Instagram" },
  { icon: SiGmail, href: "mailto:arsyahkhairizal10@gmail.com", label: "Email" },
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
    <footer className="relative pt-16 pb-8 px-4 sm:px-6">
      {/* Top Gradient Line */}
      <div className="section-divider max-w-4xl mx-auto mb-16" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 mb-12">
          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleFooterScroll(e, link.href.slice(1))}
                className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                title={social.label}
                aria-label={social.label}
                className="w-10 h-10 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 hover:scale-105"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800/60">
          <p className="text-slate-400 text-xs sm:text-sm font-medium text-center sm:text-left">
            © 2026 Hak Cipta Dilindungi. Arsyah Khairizal
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-300 group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
