"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Send,
  CheckCheck,
  Sparkles,
  MessageSquare,
  Copy,
  Check,
  RotateCcw,
  ExternalLink,
  ArrowUpRight,
  Zap,
  MapPin,
  ShieldCheck,
  Smile
} from "lucide-react";
import { SiWhatsapp, SiGithub, SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

/* ─── Social Media Data ───────────────────────────────────────── */
const socials = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arsyah-khairizal-b1529b3aa?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    glow: "hover:border-sky-500/60 hover:text-sky-300",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/makrempitt012-lgtm",
    glow: "hover:border-slate-400/60 hover:text-slate-200",
  },
  {
    icon: SiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/arsyahkhairizal_?igsh=MWx5eGd6Mzdwbmk0dw==",
    glow: "hover:border-pink-500/60 hover:text-pink-300",
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "Halo! Selamat datang di portofolio saya 👋",
    time: "Baru saja",
  },
  {
    id: 2,
    sender: "bot",
    text: "Ada proyek web yang ingin didiskusikan, atau sekadar ingin menyapa? Silakan pilih topik cepat di bawah atau ketik langsung pesanmu!",
    time: "Baru saja",
  },
];

const QUICK_REPLIES = [
  {
    label: "🚀 Bangun Website Baru",
    reply: "Keren! Saya siap membantu membangun website modern dengan Next.js, React, Tailwind CSS, & arsitektur yang cepat serta responsif. Yuk diskusikan detail fitur & spesifikasinya langsung di WhatsApp!",
  },
  {
    label: "⚡ Tanya Estimasi Biaya & Waktu",
    reply: "Tentu! Estimasi biaya dan timeline pengerjaan disesuaikan dengan kompleksitas fitur dan target deadline. Mari kita bahas detailnya agar saya bisa berikan penawaran terbaik!",
  },
  {
    label: "☕ Ajak Diskusi Santai / Magang",
    reply: "Siap, dengan senang hati! Saya selalu terbuka untuk ngobrol seputar teknologi web, freelance, magang, maupun peluang kolaborasi. Hubungi saya langsung ya!",
  },
  {
    label: "📱 Konsultasi Fitur & UI/UX",
    reply: "Pilihan tepat! Saya fokus pada pembuatan antarmuka modern dengan interaksi halus (60fps) dan performa tinggi. Ceritakan konsep UI/fitur yang Anda butuhkan!",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const chatContainerRef = useRef(null);

  const WHATSAPP_NUMBER = "6289522324356";
  const EMAIL = "arsyahkhairizal10@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const idCounterRef = useRef(10);

  const handleSend = (textToSend, customBotReply) => {
    const msg = (textToSend || inputMessage).trim();
    if (!msg) return;

    idCounterRef.current += 1;
    const userMsgId = idCounterRef.current;

    // 1. Add user message
    const userMsg = {
      id: userMsgId,
      sender: "user",
      text: msg,
      time: "Baru saja",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    // 2. Automated simulated bot reply
    setTimeout(() => {
      setIsTyping(false);
      idCounterRef.current += 1;
      const botMsgId = idCounterRef.current;

      const replyText =
        customBotReply ||
        "Terima kasih atas pesanmu! Pesan sudah tercatat dan siap diteruskan langsung ke WhatsApp saya untuk respon cepat.";

      setMessages((prev) => [
        ...prev,
        {
          id: botMsgId,
          sender: "bot",
          text: replyText,
          time: "Baru saja",
          showAction: true,
          query: msg,
        },
      ]);
    }, 1100);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setIsTyping(false);
  };

  return (
    <section id="kontak" className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      {/* Section Divider with Glow */}
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      {/* Cyber Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[420px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* ── Section Header ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
            <Sparkles size={13} className="text-emerald-400 animate-pulse" />
            <span>Interactive Live Chat</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
            Mari Berdiskusi <span className="gradient-text">Secara Interaktif</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Simulasi live chat modern. Pilih topik cepat atau ketik pesan Anda langsung di bawah untuk terhubung langsung ke WhatsApp.
          </p>
        </motion.div>

        {/* ── LIVE CHAT SIMULATOR WINDOW ───────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden backdrop-blur-2xl bg-slate-900/85 border border-slate-700/80 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.25)] flex flex-col"
        >
          {/* 1. Header Chat Window */}
          <div className="px-5 py-4 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* Profile Avatar with Live Pulse */}
              <div className="relative shrink-0">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-indigo-500/40 bg-slate-850 flex items-center justify-center shadow-md">
                  <Image
                    src="/profile.jpg"
                    alt="Arsyah Khairizal"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Arsyah Khairizal
                  </h3>
                  <span className="text-[10px] px-2 py-0.2 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-mono hidden sm:inline">
                    Full Stack Web Dev
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Online &bull; Biasanya membalas dalam beberapa menit
                </p>
              </div>
            </div>

            {/* Header Quick Tools */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleCopyEmail}
                title="Salin Email"
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span className="hidden sm:inline">{copied ? "Tersalin!" : "Email"}</span>
              </button>

              <button
                onClick={handleResetChat}
                title="Reset Percakapan"
                className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-400 hover:text-slate-200 transition-all cursor-pointer"
              >
                <RotateCcw size={14} />
              </button>
            </div>
          </div>

          {/* 2. Area Percakapan (Message Thread) */}
          <div
            ref={chatContainerRef}
            className="p-4 sm:p-6 space-y-4 max-h-[420px] min-h-[350px] overflow-y-auto bg-slate-950/40 relative"
          >
            {/* Subtle Chat Background Watermark */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            {messages.map((m) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`relative z-10 flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[78%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-lg ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-br-none shadow-purple-500/20"
                      : "bg-slate-900/90 text-slate-200 border border-slate-700/80 rounded-bl-none shadow-black/30"
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>

                  {/* WhatsApp Action Button on Bot Reply */}
                  {m.showAction && (
                    <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-400">
                        Lanjutkan obrolan langsung:
                      </span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                          `Halo Arsyah, saya ingin mendiskusikan topik dari portofolio:\n\n💬 "${m.query}"`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <SiWhatsapp size={13} />
                        <span>Lanjut ke WhatsApp</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Message Timestamp & Status */}
                <div className="flex items-center gap-1 mt-1 px-1.5 text-[10px] text-slate-500">
                  <span>{m.time}</span>
                  {m.sender === "user" && (
                    <CheckCheck size={13} className="text-emerald-400 inline" />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 flex items-center gap-1.5 px-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl rounded-bl-none w-fit shadow-md"
              >
                <span className="text-[11px] text-slate-400 mr-1">Arsyah sedang mengetik</span>
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </motion.div>
            )}
          </div>

          {/* 3. Quick Replies Bar */}
          <div className="px-4 sm:px-5 py-2.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest shrink-0 mr-1 hidden sm:inline">
              Opsi Cepat:
            </span>
            {QUICK_REPLIES.map((reply, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(reply.label, reply.reply)}
                className="text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-indigo-600/30 border border-slate-700/80 hover:border-indigo-400 text-slate-300 hover:text-white transition-all whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              >
                {reply.label}
              </button>
            ))}
          </div>

          {/* 4. Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 sm:p-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center gap-2.5"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ketik pesan atau pertanyaan untuk Arsyah..."
              className="flex-1 px-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-lg shadow-purple-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>Kirim</span>
              <Send size={14} />
            </button>
          </form>
        </motion.div>

        {/* ── Direct Contact & Social Links Bar ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800/70 max-w-2xl mx-auto backdrop-blur-md"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Koneksi aman &bull; arsyahkhairizal10@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs font-semibold text-slate-300 ${s.glow} transition-all duration-200 cursor-pointer`}
                >
                  <Icon size={14} />
                  <span>{s.label}</span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
