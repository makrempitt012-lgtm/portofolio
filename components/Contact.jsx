"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Copy,
  CheckCheck,
  MessageSquare,
  CheckCircle,
  Loader2,
  ArrowUpRight,
  Zap,
  MapPin,
} from "lucide-react";
import { SiWhatsapp, SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

/* ─── Social Hub Data ──────────────────────────────────────────── */
const socials = [
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    description: "Diskusi Cepat",
    href: "https://wa.me/6289522324356",
    glow: "hover:border-emerald-500/60 hover:shadow-[0_0_24px_-4px_rgba(16,185,129,0.45)]",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    arrow: "group-hover:text-emerald-400",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    description: "Profil Saya",
    href: "https://www.linkedin.com/in/arsyah-khairizal-b1529b3aa?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    glow: "hover:border-sky-500/60 hover:shadow-[0_0_24px_-4px_rgba(14,165,233,0.45)]",
    iconBg: "bg-sky-500/15 text-sky-400",
    arrow: "group-hover:text-sky-400",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    description: "Lihat Kode Saya",
    href: "https://github.com/makrempitt012-lgtm",
    glow: "hover:border-slate-400/50 hover:shadow-[0_0_24px_-4px_rgba(148,163,184,0.35)]",
    iconBg: "bg-slate-700/60 text-slate-200",
    arrow: "group-hover:text-slate-300",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    description: "Ikuti Perjalanan",
    href: "https://www.instagram.com/arsyahkhairizal_?igsh=MWx5eGd6Mzdwbmk0dw==",
    glow: "hover:border-pink-500/60 hover:shadow-[0_0_24px_-4px_rgba(236,72,153,0.45)]",
    iconBg: "bg-gradient-to-br from-amber-500/20 via-rose-500/20 to-purple-600/20 text-rose-400",
    arrow: "group-hover:text-rose-400",
  },
];

/* ─── Shared card base class ───────────────────────────────────── */
const CARD_BASE =
  "backdrop-blur-xl bg-slate-900/50 border border-slate-800/80 rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  /* Email copy state */
  const EMAIL = "arsyahkhairizal10@gmail.com";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  /* Form state */
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Memberikan efek pemuatan singkat untuk UX yang mulus
    await new Promise((r) => setTimeout(r, 800));

    const whatsappNumber = "6289522324356";
    const messageText = `Halo Arsyah Khairizal, ada pesan baru dari Portofolio Web:\n\n📌 *Nama:* ${formState.name}\n✉️ *Email:* ${formState.email}\n🏷️ *Subjek:* ${formState.subject}\n\n💬 *Pesan:*\n${formState.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(url, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  /* Animation variants */
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="kontak" className="relative py-12 sm:py-20 md:py-28 px-4 sm:px-6">
      {/* Section Divider */}
      <div className="section-divider max-w-4xl mx-auto mb-24" />

      <div className="max-w-6xl mx-auto" ref={ref}>

        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0)}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-xs font-medium text-emerald-400 uppercase tracking-wider mb-4">
            Mari Berkolaborasi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Siap Mewujudkan{" "}
            <span className="gradient-text">Proyek Digital Anda?</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Terbuka untuk diskusi proyek freelance, program magang, maupun kerja
            sama jangka panjang. Jangan ragu — kirim pesan dan mari wujudkan
            visi digital Anda bersama.
          </p>
        </motion.div>

        {/* ── Bento Grid ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">

          {/* ── [Box 1] Quick Action Email Card  (col-span-5) ── */}
          <motion.div
            {...fadeUp(0.15)}
            className={`${CARD_BASE} lg:col-span-5 flex flex-col justify-between gap-6 hover:border-indigo-500/40 hover:shadow-[0_0_40px_-8px_rgba(99,102,241,0.35)]`}
          >
            {/* Top label */}
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
                Email Langsung
              </span>
            </div>

            {/* Email display */}
            <div>
              <p className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                Alamat Email
              </p>
              <p className="text-lg sm:text-xl font-bold text-white break-all leading-snug">
                {EMAIL}
              </p>
            </div>

            {/* Response badge */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <Zap size={13} className="text-emerald-400" />
              <span className="text-xs font-semibold text-emerald-400">
                Respon Cepat &lt; 24 Jam
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-slate-500" />
              <span className="text-xs text-slate-500">
                Berbasis di Indonesia · Tersedia di Seluruh Dunia
              </span>
            </div>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className={`group relative w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border font-semibold text-sm transition-all duration-300
                ${copied
                  ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-400"
                  : "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/60 hover:text-white"
                }`}
            >
              {copied ? (
                <>
                  <CheckCheck size={16} />
                  Tersalin!
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Salin Email
                </>
              )}
            </button>
          </motion.div>

          {/* ── [Box 2] Interactive Social Hub  (col-span-7) ─── */}
          <motion.div
            {...fadeUp(0.25)}
            className={`${CARD_BASE} lg:col-span-7`}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              <span className="text-xs font-semibold text-pink-400 uppercase tracking-widest">
                Social Hub
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[calc(100%-48px)]">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kunjungi profil ${s.label}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50 cursor-pointer ${s.glow} transition-all duration-300`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0 ${s.iconBg}`}
                  >
                    <s.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white">
                      {s.label}
                    </p>
                    <p className="text-xs text-slate-300">{s.description}</p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className={`shrink-0 text-slate-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${s.arrow}`}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── [Box 3] Message Form  (col-span-12) ─────────── */}
          <motion.div
            {...fadeUp(0.35)}
            className={`${CARD_BASE} lg:col-span-12 hover:border-slate-700/80`}
          >
            {/* Form header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center">
                <MessageSquare size={17} className="text-indigo-400" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-xs text-slate-500">
                  Isi formulir di bawah — saya akan segera merespons
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Row 1: Nama + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-2"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-2"
                  >
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Row 2: Subjek */}
              <div className="mb-5">
                <label
                  htmlFor="contact-subject"
                  className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-2"
                >
                  Subjek
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                />
              </div>

              {/* Row 3: Pesan */}
              <div className="mb-7">
                <label
                  htmlFor="contact-message"
                  className="block text-[11px] font-semibold text-slate-300 uppercase tracking-widest mb-2"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan tentang proyek Anda, timeline, dan harapan kerja sama kita..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-white rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-glow-indigo hover:shadow-glow-purple transition-all duration-500 hover:scale-[1.015] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Membuka WhatsApp...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={17} />
                    Dialihkan ke WhatsApp!
                  </>
                ) : (
                  <>
                    <SiWhatsapp size={17} />
                    Kirim via WhatsApp
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
