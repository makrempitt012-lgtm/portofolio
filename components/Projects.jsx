"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import {
  ExternalLink, Lock, ArrowUpRight, ChevronLeft, ChevronRight,
  Sparkles, Layers, Eye, Smartphone, CheckCircle2, ShieldCheck,
  Zap, Globe, Terminal, Code, Cpu, Shuffle, X, Info
} from "lucide-react";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql,
  SiWordpress, SiWhatsapp, SiVercel, SiJavascript,
  SiHtml5
} from "react-icons/si";

/* ─── Projects Data ───────────────────────────────────────────── */
const projects = [
  {
    id: "pressti",
    title: "PT PRESSTI CARGO INDONESIA",
    category: "Company Profile",
    tag: "Cargo & Logistics",
    status: "Live Production",
    urlPreview: "https://ptpressti.vercel.app",
    description:
      "Website profil perusahaan kargo profesional yang menyajikan informasi resmi perusahaan, katalog komprehensif layanan kargo domestik & internasional (Udara, Darat, Laut), tarif pengiriman, serta integrasi tombol pemesanan & konsultasi via WhatsApp customer service 24/7.",
    fullOverview:
      "Dirancang untuk membangun kredibilitas bisnis logistik skala enterprise. Dilengkapi dengan optimasi SEO tinggi, layout responsif modern, pemuatan cepat, dan alur booking konsultasi WhatsApp yang mengonversi pengunjung menjadi klien kargo.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "WhatsApp API", icon: SiWhatsapp },
      { name: "Vercel", icon: SiVercel },
    ],
    features: [
      "Katalog Lengkap Layanan Kargo (Air, Sea, Land Freight)",
      "Kalkulator & Form Konsultasi Tarif Pengiriman",
      "Direct Click-to-Chat WhatsApp Customer Service",
      "100% Mobile & Desktop Ultra Responsive UI",
      "Lighthouse Score 95+ (Performance & SEO)"
    ],
    liveUrl: "https://ptpressti.vercel.app/",
    isPrivate: false,
    accentColor: "#6366F1",
    tagColor: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    mockupTheme: "cargo",
  },
  {
    id: "qrmenu",
    title: "SISTEM PEMESANAN MENU BERBASIS QR CODE",
    category: "Web Application",
    tag: "F&B Digital System",
    status: "Internal System",
    urlPreview: "internal://pos-menu-system.local",
    description:
      "Solusi pemesanan menu digital interaktif menggunakan pemindaian QR Code pada meja resto/kafe. Sistem fullstack yang memungkinkan pelanggan memesan menu favorit dan pesanan langsung tersinkronisasi real-time ke kasir & dapur tanpa antre.",
    fullOverview:
      "Mengurangi waktu tunggu pelanggan dan meminimalkan kesalahan pencatatan pesanan manual. Dilengkapi panel kasir real-time, manajemen meja dinamis, filter kategori hidangan, dan status update otomatis dari dapur ke pelanggan.",
    techStack: [
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
    ],
    features: [
      "Instant Table QR Scan & Auto-Detect Meja",
      "Keranjang Belanja Interaktif & Custom Catatan Pesanan",
      "Real-time Dashboard Sinkronisasi Kasir & Kitchen",
      "Manajemen Menu, Stok & Laporan Penjualan Harian",
      "Sistem Keamanan Autentikasi Internal Karyawan"
    ],
    liveUrl: "#",
    isPrivate: true,
    accentColor: "#F59E0B",
    tagColor: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    mockupTheme: "restaurant",
  },
  {
    id: "ayampotong",
    title: "AYAM POTONG SAWAL",
    category: "Business Profile",
    tag: "Digital Catalog",
    status: "Live Production",
    urlPreview: "https://ayampotongsawal.vercel.app",
    description:
      "Landing page dan katalog digital usaha Ayam Potong Sawal yang menampilkan profil bisnis, varian produk ayam segar harian (Fillet, Paha, Sayap, Utuh) beserta pembaruan harga terkini, serta fasilitas order kilat ke WhatsApp penjual.",
    fullOverview:
      "Membantu UMKM peternakan & distributor daging ayam memperluas jangkauan pasar B2B (restoran, katering) maupun B2C dengan katalog visual yang higienis, terpercaya, dan tombol pemesanan cepat tanpa hambatan.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "WhatsApp API", icon: SiWhatsapp },
    ],
    features: [
      "Daftar Produk Segar dengan Update Harga Harian",
      "Paket Grosir B2B untuk Restoran & Rumah Makan",
      "One-Click Direct Checkout via WhatsApp",
      "Informasi Sertifikasi Halal & Standar Kebersihan",
      "Kecepatan Muat Super Kilat di Jaringan Seluler"
    ],
    liveUrl: "https://ayampotongsawal.vercel.app/",
    isPrivate: false,
    accentColor: "#F43F5E",
    tagColor: "bg-rose-500/15 border-rose-500/30 text-rose-300",
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    mockupTheme: "poultry",
  },
  {
    id: "leccata",
    title: "LECCATA",
    category: "Frontend Development",
    tag: "UI Design & Branding",
    status: "Live Production",
    urlPreview: "https://lecatta.vercel.app",
    description:
      "Landing page modern dan fully responsive dengan animasi interaktif dinamis, micro-interactions elegan, serta optimasi performa maksimal yang dirancang khusus untuk memperkuat branding digital produk dan meningkatkan konversi pengunjung.",
    fullOverview:
      "Eksplorasi visual tingkat lanjut menggabungkan estetika cyber-dark, tipografi presisi, dan animasi framer motion yang berjalan di 60 FPS di seluruh resolusi layar.",
    techStack: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Framer Motion", icon: SiFramer },
    ],
    features: [
      "Desain Visual Glassmorphism & Cyber-Dark Aesthetics",
      "Micro-animations & Interactive Scroll Effects",
      "Perfect Semantic HTML & High Accessibility",
      "Ultra-Fast Asset Loading & Zero Layout Shifts",
      "Fully Responsive Desktop, Tablet, & Mobile"
    ],
    liveUrl: "https://lecatta.vercel.app/",
    isPrivate: false,
    accentColor: "#10B981",
    tagColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    mockupTheme: "cyber",
  },
  {
    id: "bakery",
    title: "BAKERY WORDPRESS",
    category: "E-Commerce / Catalog",
    tag: "Artisan Bakery",
    status: "Live Production",
    urlPreview: "https://bakery-puce-kappa.vercel.app",
    description:
      "Website profil dan katalog digital Artisan Bakery yang menyajikan pilihan roti artisan, sourdough segar, pastry, dan croissant premium. Dilengkapi filter varian produk, galeri visual lezat, dan sistem pemesanan online terintegrasi WhatsApp.",
    fullOverview:
      "Menggabungkan kehangatan branding bakery artisan dengan teknologi web modern, memudahkan pelanggan melihat menu hari ini, memesan hampers/custom cake, dan melakukan reservasi pesanan instan.",
    techStack: [
      { name: "WordPress", icon: SiWordpress },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "WhatsApp API", icon: SiWhatsapp },
    ],
    features: [
      "Filter Kategori Roti (Sourdough, Croissant, Pastry, Cakes)",
      "Galeri Visual Produk Resolusi Tinggi & Deskripsi Rasa",
      "Sistem Pre-Order & Pesanan Khusus Event",
      "Integrasi Lokasi Outlet & Jam Operasional",
      "Pemesanan Cepat Terhubung Otomatis ke WhatsApp Admin"
    ],
    liveUrl: "https://bakery-puce-kappa.vercel.app/",
    isPrivate: false,
    accentColor: "#EA580C",
    tagColor: "bg-orange-500/15 border-orange-500/30 text-orange-300",
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
    mockupTheme: "bakery",
  },
];

/* ─── Mockup Visual Sub-component ────────────────────────────── */
function ProjectMockupVisual({ project }) {
  return (
    <div className="relative w-full h-44 sm:h-52 md:h-60 rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800/80 shadow-inner group/mockup flex flex-col">
      {/* 1. Browser Window Header Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900/90 border-b border-slate-800/80 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-slate-950/60 border border-slate-800 text-[10px] text-slate-400 font-mono max-w-[200px] truncate">
          <Globe size={10} className="text-slate-500 shrink-0" />
          <span className="truncate">{project.urlPreview}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className={`w-2 h-2 rounded-full animate-pulse ${project.isPrivate ? "bg-amber-400" : "bg-emerald-400"}`} />
          <span className="text-[9px] font-medium text-slate-400 uppercase tracking-wider hidden sm:inline">
            {project.isPrivate ? "Private" : "Live"}
          </span>
        </div>
      </div>

      {/* 2. Simulated Vector Interactive App UI */}
      <div className="relative flex-1 p-4 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle Cyber Grid in Mockup */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

        {project.mockupTheme === "cargo" && (
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <Globe size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">PRESSTI CARGO LOGISTICS</p>
                  <p className="text-[9px] text-indigo-300">Domestic &amp; International Freight</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono">
                TRACKING: ACTIVE
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 my-2">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[9px] text-slate-400">Air Freight</p>
                <p className="text-xs font-bold text-indigo-400">Express 24h</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[9px] text-slate-400">Sea Cargo</p>
                <p className="text-xs font-bold text-sky-400">Full Container</p>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[9px] text-slate-400">Land Trucking</p>
                <p className="text-xs font-bold text-purple-400">Door to Door</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
              <span className="flex items-center gap-1 text-emerald-400">
                <SiWhatsapp size={11} /> WhatsApp Booking Active
              </span>
              <span className="font-mono text-slate-400">Status: 99.9% On-Time</span>
            </div>
          </div>
        )}

        {project.mockupTheme === "restaurant" && (
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                  QR
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">CAFE &amp; RESTO POS SYSTEM</p>
                  <p className="text-[9px] text-amber-300">Table #08 • Live Order Session</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono">
                3 Pesanan Dapur
              </span>
            </div>

            <div className="flex items-center gap-2 my-2 overflow-x-auto pb-1">
              <div className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 shrink-0">
                <p className="text-[10px] font-semibold text-white">Ice Caramel Latte</p>
                <p className="text-[9px] text-amber-400 font-mono">Rp 28.000 (Qty: 2)</p>
              </div>
              <div className="px-2.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
                <p className="text-[10px] font-semibold text-white">Truffle Beef Pasta</p>
                <p className="text-[9px] text-amber-400 font-mono">Rp 55.000 (Qty: 1)</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
              <span className="text-slate-300">Total: <strong className="text-amber-400 font-mono">Rp 111.000</strong></span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Zap size={11} /> Real-time Kitchen Synced
              </span>
            </div>
          </div>
        )}

        {project.mockupTheme === "poultry" && (
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <ShieldCheck size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">AYAM POTONG SAWAL</p>
                  <p className="text-[9px] text-rose-300">100% Segar, Bersih &amp; Halal</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono">
                UPDATE HARGA HARI INI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[10px] font-bold text-white">Dada Fillet Premium</p>
                <p className="text-xs font-bold text-rose-400">Rp 48.000 <span className="text-[9px] text-slate-400 font-normal">/Kg</span></p>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[10px] font-bold text-white">Ayam Broiler Segar</p>
                <p className="text-xs font-bold text-rose-400">Rp 35.000 <span className="text-[9px] text-slate-400 font-normal">/Ekor</span></p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
              <span className="flex items-center gap-1 text-emerald-400">
                <SiWhatsapp size={11} /> Order Grosir &amp; Eceran
              </span>
              <span className="text-slate-400">Siap Kirim Pagi &amp; Siang</span>
            </div>
          </div>
        )}

        {project.mockupTheme === "cyber" && (
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Terminal size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">LECCATA DIGITAL CREATIVE</p>
                  <p className="text-[9px] text-emerald-300">Modern Digital Agency &amp; UI</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono">
                60 FPS ANIMATION
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 my-2 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-white">Ultra-Responsive Architecture</p>
                <p className="text-[9px] text-slate-400">Framer Motion + Tailwind CSS Styling</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400">100/100</span>
                <p className="text-[8px] text-slate-500 uppercase">Performance</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
              <span className="text-emerald-400 font-mono">✦ High-Converting UI</span>
              <span className="text-slate-400">Clean Code &amp; SEO Ready</span>
            </div>
          </div>
        )}

        {project.mockupTheme === "bakery" && (
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <Sparkles size={14} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide">ARTISAN BAKERY &amp; CAFE</p>
                  <p className="text-[9px] text-orange-300">Fresh Oven Daily Sourdough &amp; Croissant</p>
                </div>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 font-mono">
                FRESH FROM OVEN
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[10px] font-bold text-white">Butter Croissant</p>
                <p className="text-xs font-bold text-orange-400">Rp 24.000 <span className="text-[9px] text-emerald-400 font-normal">Tersedia</span></p>
              </div>
              <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                <p className="text-[10px] font-bold text-white">Country Sourdough</p>
                <p className="text-xs font-bold text-orange-400">Rp 45.000 <span className="text-[9px] text-emerald-400 font-normal">Tersedia</span></p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800/80">
              <span className="flex items-center gap-1 text-emerald-400">
                <SiWhatsapp size={11} /> Pre-Order &amp; Custom Hampers
              </span>
              <span className="text-slate-400">Katalog WordPress Terpadu</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Projects Component ─────────────────────────────────── */
export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDetailProject, setSelectedDetailProject] = useState(null);
  const [viewMode, setViewMode] = useState("stack"); // "stack" | "grid"
  const [dragDirection, setDragDirection] = useState(0);

  // Holographic 3D Tilt & Foil Shine Mouse Tracker
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHoveringActiveCard, setIsHoveringActiveCard] = useState(false);
  const cardRef = useRef(null);

  const nextProject = useCallback(() => {
    setDragDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setDragDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const shuffleProjects = () => {
    let newIndex = Math.floor(Math.random() * projects.length);
    if (newIndex === activeIndex) {
      newIndex = (activeIndex + 1) % projects.length;
    }
    setDragDirection(1);
    setActiveIndex(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedDetailProject) return;
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextProject, prevProject, selectedDetailProject]);

  // Track mouse for Holographic Foil Sheen
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section id="proyek" className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" ref={sectionRef}>
      {/* Section Divider with Glow */}
      <div className="section-divider max-w-4xl mx-auto mb-20" />

      {/* Cyber Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-600/15 via-indigo-600/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* ── Section Header ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-pink-500/30 text-xs font-semibold text-pink-300 uppercase tracking-widest mb-4 shadow-[0_0_20px_-5px_rgba(236,72,153,0.3)]">
            <Sparkles size={13} className="text-pink-400 animate-pulse" />
            <span>Proyek Unggulan &amp; Studi Kasus</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
            Karya Kreatif <span className="gradient-text">Holographic Deck</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Jelajahi portofolio proyek dalam format kartu 3D interaktif.
            <span className="text-indigo-300 font-medium"> Geser kartu ke samping, nikmati kilauan hologram, atau telusuri detail studi kasus!</span>
          </p>
        </motion.div>

        {/* ── Top View Switcher & Counter ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-between gap-4 mb-8 max-w-4xl mx-auto backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-2xl px-4 py-3 shadow-lg"
        >
          {/* Deck Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-indigo-400">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <span className="hidden sm:inline text-xs text-slate-400 border-l border-slate-700/60 pl-3">
              {projects[activeIndex].title}
            </span>
          </div>

          {/* Controls: Shuffle & View Mode */}
          <div className="flex items-center gap-2">
            {viewMode === "stack" && (
              <button
                onClick={shuffleProjects}
                title="Acak Urutan Kartu"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
              >
                <Shuffle size={13} className="text-purple-400" />
                <span className="hidden sm:inline">Acak Kartu</span>
              </button>
            )}

            <div className="flex items-center bg-slate-800/80 rounded-xl p-0.5 border border-slate-700/70">
              <button
                onClick={() => setViewMode("stack")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "stack"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Layers size={12} />
                <span>3D Stack Deck</span>
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Smartphone size={12} />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── View 1: 3D Holographic Card Shuffle Stack Deck ───── */}
        {viewMode === "stack" && (
          <div className="relative max-w-2xl mx-auto pt-4 pb-8 min-h-[580px] sm:min-h-[640px] flex flex-col justify-between items-center select-none">
            {/* Stack Arena Container */}
            <div className="relative w-full h-[500px] sm:h-[540px] flex items-center justify-center">
              {projects.map((project, index) => {
                // Calculate cyclic distance from activeIndex
                const count = projects.length;
                const offset = (index - activeIndex + count) % count;
                const isFront = offset === 0;

                // Stack positions & transforms
                let scale = 1;
                let yOffset = 0;
                let zIndex = 30;
                let opacity = 1;
                let rotateZ = 0;

                if (offset === 0) {
                  scale = 1;
                  yOffset = 0;
                  zIndex = 30;
                  opacity = 1;
                  rotateZ = 0;
                } else if (offset === 1) {
                  scale = 0.94;
                  yOffset = -22;
                  zIndex = 20;
                  opacity = 0.85;
                  rotateZ = -1.5;
                } else if (offset === 2) {
                  scale = 0.88;
                  yOffset = -44;
                  zIndex = 10;
                  opacity = 0.65;
                  rotateZ = 1.5;
                } else {
                  scale = 0.82;
                  yOffset = -66;
                  zIndex = 5;
                  opacity = 0;
                  rotateZ = 0;
                }

                // Tilt angles for active card on mouse move
                const tiltX = isFront && isHoveringActiveCard ? (mousePos.y - 50) * -0.12 : 0;
                const tiltY = isFront && isHoveringActiveCard ? (mousePos.x - 50) * 0.12 : 0;

                return (
                  <motion.div
                    key={project.id}
                    ref={isFront ? cardRef : null}
                    onMouseMove={isFront ? handleMouseMove : undefined}
                    onMouseEnter={isFront ? () => setIsHoveringActiveCard(true) : undefined}
                    onMouseLeave={isFront ? () => setIsHoveringActiveCard(false) : undefined}
                    drag={isFront ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.65}
                    onDragEnd={(e, { offset: dragOffset, velocity }) => {
                      if (dragOffset.x < -80 || velocity.x < -300) {
                        nextProject();
                      } else if (dragOffset.x > 80 || velocity.x > 300) {
                        prevProject();
                      }
                    }}
                    style={{
                      zIndex,
                      transformStyle: "preserve-3d",
                      perspective: 1000,
                    }}
                    animate={{
                      scale,
                      y: yOffset,
                      opacity,
                      rotateZ,
                      rotateX: tiltX,
                      rotateY: tiltY,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                      mass: 0.8,
                    }}
                    className={`absolute inset-x-0 mx-auto w-full max-w-xl rounded-3xl backdrop-blur-2xl bg-slate-900/85 border border-slate-700/80 p-5 sm:p-6 shadow-2xl transition-shadow duration-300 transform-gpu overflow-hidden ${
                      isFront
                        ? "cursor-grab active:cursor-grabbing hover:border-indigo-400/60 shadow-[0_20px_50px_-15px_rgba(99,102,241,0.35)]"
                        : "pointer-events-none"
                    }`}
                  >
                    {/* ── Holographic Prismatic Foil Sheen Overlay (Active Front Card) ── */}
                    {isFront && (
                      <div
                        style={{
                          background: `
                            radial-gradient(circle 380px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.22) 0%, rgba(168,85,247,0.18) 25%, rgba(56,189,248,0.16) 50%, rgba(236,72,153,0.12) 75%, transparent 100%),
                            linear-gradient(${mousePos.x * 2 + mousePos.y * 1.5}deg, transparent 20%, rgba(255,255,255,0.08) 45%, rgba(168,85,247,0.2) 50%, rgba(56,189,248,0.2) 55%, transparent 80%)
                          `,
                          opacity: isHoveringActiveCard ? 1 : 0.35,
                        }}
                        className="absolute inset-0 rounded-3xl pointer-events-none z-20 mix-blend-screen transition-opacity duration-300"
                      />
                    )}

                    {/* Subtle Holographic Border Glow */}
                    <div
                      style={{
                        background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, ${project.accentColor}33, transparent 70%)`,
                      }}
                      className="absolute inset-0 rounded-3xl pointer-events-none z-0"
                    />

                    {/* ── Card Header: Category & Tag ──── */}
                    <div className="relative z-10 flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                          {project.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wider ${project.tagColor}`}>
                          {project.tag}
                        </span>
                      </div>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-400 font-medium uppercase tracking-wider">
                        Featured
                      </span>
                    </div>

                    {/* ── Card Title ───────────────────────────── */}
                    <h3 className="relative z-10 text-lg sm:text-xl md:text-2xl font-black text-white mb-3 leading-snug tracking-tight hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* ── Mockup Preview Window ─────────────────── */}
                    <div className="relative z-10 mb-4">
                      <ProjectMockupVisual project={project} />
                    </div>

                    {/* ── Short Description ────────────────────── */}
                    <p className="relative z-10 text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* ── Tech Stack Badges ────────────────────── */}
                    <div className="relative z-10 flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech, i) => {
                        const Icon = tech.icon;
                        return (
                          <span
                            key={i}
                            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-slate-200 rounded-full bg-slate-800/80 border border-slate-700/70"
                          >
                            <Icon size={12} className="text-indigo-400" />
                            <span>{tech.name}</span>
                          </span>
                        );
                      })}
                    </div>

                    {/* ── Card Footer Actions ──────────────────── */}
                    <div className="relative z-10 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
                      {/* Left: View Demo / Live link */}
                      {project.isPrivate ? (
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                          <Lock size={14} className="text-amber-400/80" />
                          <span>Sistem Internal (Private Access)</span>
                        </div>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <span>Lihat Live Demo</span>
                          <ExternalLink size={13} />
                        </a>
                      )}

                      {/* Right: Open Case Study Detail Modal */}
                      <button
                        onClick={() => setSelectedDetailProject(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Info size={13} className="text-purple-400" />
                        <span>Detail Proyek</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Interactive Deck Navigation Dock ─────────────── */}
            <div className="flex items-center justify-center gap-4 mt-6 z-30">
              <button
                onClick={prevProject}
                aria-label="Proyek Sebelumnya"
                className="w-11 h-11 rounded-2xl bg-slate-900/90 hover:bg-indigo-600/30 border border-slate-700/80 hover:border-indigo-400 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Project Mini Thumbnail Dots / Tabs */}
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-lg">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setDragDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    title={p.title}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      idx === activeIndex
                        ? "w-8 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                        : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProject}
                aria-label="Proyek Selanjutnya"
                className="w-11 h-11 rounded-2xl bg-slate-900/90 hover:bg-indigo-600/30 border border-slate-700/80 hover:border-indigo-400 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg shadow-black/40 cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* ── View 2: Traditional Grid View ─────────────────────── */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative backdrop-blur-xl bg-slate-900/70 border border-slate-800/90 rounded-3xl p-5 sm:p-6 hover:border-indigo-500/40 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wider ${project.tagColor}`}>
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Mockup */}
                  <div className="mb-4">
                    <ProjectMockupVisual project={project} />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, i) => {
                      const Icon = tech.icon;
                      return (
                        <span
                          key={i}
                          className="flex items-center gap-1 px-2.5 py-1 text-[10px] font-medium text-slate-300 rounded-full bg-slate-800/80 border border-slate-700/60"
                        >
                          <Icon size={11} className="text-indigo-400" />
                          <span>{tech.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  {project.isPrivate ? (
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Lock size={13} /> Sistem Internal
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Lihat Live</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}

                  <button
                    onClick={() => setSelectedDetailProject(project)}
                    className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
                  >
                    Detail Fitur &rarr;
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* ── Case Study & Feature Detail Modal ──────────────────── */}
      <AnimatePresence>
        {selectedDetailProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDetailProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800/90 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-semibold uppercase tracking-wider ${selectedDetailProject.tagColor}`}>
                  {selectedDetailProject.tag}
                </span>
                <span className="text-xs text-slate-400">• {selectedDetailProject.category}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-4 pr-10">
                {selectedDetailProject.title}
              </h3>

              {/* Visual Mockup inside modal */}
              <div className="mb-6">
                <ProjectMockupVisual project={selectedDetailProject} />
              </div>

              {/* Overview */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-2">
                  Ringkasan Solusi
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedDetailProject.fullOverview}
                </p>
              </div>

              {/* Key Features List */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-3">
                  Fitur Utama &amp; Arsitektur
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDetailProject.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                      <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-3">
                  Teknologi yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDetailProject.techStack.map((tech, i) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-white"
                      >
                        <Icon size={14} className="text-indigo-400" />
                        <span>{tech.name}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  onClick={() => setSelectedDetailProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors cursor-pointer"
                >
                  Tutup
                </button>
                {!selectedDetailProject.isPrivate && (
                  <a
                    href={selectedDetailProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 cursor-pointer"
                  >
                    <span>Kunjungi Website</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
