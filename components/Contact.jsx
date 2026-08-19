"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Copy,
  CheckCheck,
  Send,
  Loader2,
  CheckCircle,
  ArrowUpRight,
  MapPin,
  Mail,
} from "lucide-react";
import { SiWhatsapp, SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

/* ─── Social Links ────────────────────────────────────────────── */
const socialLinks = [
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/makrempitt012-lgtm",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arsyah-khairizal-b1529b3aa?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    icon: SiWhatsapp,
    label: "WhatsApp",
    href: "https://wa.me/6289522324356",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/arsyahkhairizal_?igsh=MWx5eGd6Mzdwbmk0dw==",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:arsyahkhairizal10@gmail.com",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const EMAIL = "arsyahkhairizal10@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

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
    await new Promise((r) => setTimeout(r, 600));

    const whatsappNumber = "6289522324356";
    const messageText = `Halo Arsyah Khairizal, ada pesan baru dari Portofolio Web:\n\n📌 *Nama:* ${formState.name}\n✉️ *Email:* ${formState.email}\n🏷️ *Subjek:* ${formState.subject}\n\n💬 *Pesan:*\n${formState.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    window.open(url, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <section id="kontak" className="relative py-20 sm:py-28 px-4 sm:px-6">
      {/* Subtle Section Divider */}
      <div className="border-t border-zinc-800/80 max-w-6xl mx-auto mb-20" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="mb-14">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase block mb-3">
            04 / HUBUNGI SAYA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-3">
            Mari Memulai Kolaborasi
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal max-w-2xl">
            Terbuka untuk kesempatan freelance, proyek kolaboratif, maupun peluang karir. Kirimkan pesan langsung melalui formulir atau kontak di bawah ini.
          </p>
        </motion.div>

        {/* 2-Column Minimalist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 Cols): Direct Actions & Channels */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-5 space-y-6">
            {/* Quick Email Box */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/60 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                Direct Email
              </span>
              <p className="text-base sm:text-lg font-mono font-medium text-zinc-100 break-all mb-4">
                {EMAIL}
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-medium rounded-lg bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCheck size={14} className="text-emerald-400" />
                      <span>Email Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Salin Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  <span>Buka Mail</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/60 transition-colors">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                Fast Response
              </span>
              <p className="text-sm text-zinc-300 mb-4">
                Respon cepat untuk diskusi proyek, konsultasi teknis, dan kerja sama bisnis.
              </p>
              <a
                href="https://wa.me/6289522324356"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs sm:text-sm font-medium border border-zinc-700/60 transition-colors"
              >
                <SiWhatsapp size={15} />
                <span>Chat via WhatsApp (+62 895-2232-4356)</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                Social Profiles
              </span>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 text-xs font-mono transition-colors"
                  >
                    <s.icon size={13} />
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (7 Cols): Minimalist Message Form */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-7 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-base sm:text-lg font-semibold text-zinc-100 mb-6 tracking-tight">
              Kirim Pesan Langsung
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
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
                    placeholder="Nama Anda"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
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
                    placeholder="nama@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
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
                  placeholder="Kebutuhan Proyek / Diskusi Kolaborasi"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Deskripsikan kebutuhan proyek atau ide yang ingin Anda kembangkan..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-xl transition-colors disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin text-zinc-900" />
                    <span>Mempersiapkan Pesan...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={16} className="text-emerald-700" />
                    <span>Pesan Dialihkan ke WhatsApp</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Kirim via WhatsApp</span>
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
