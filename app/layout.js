import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundIcons from "@/components/BackgroundIcons";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Arsyah Khairizal | Portofolio",
  description:
    "Premium portfolio showcasing modern web applications built with Next.js, React, and Node.js. Available for freelance and full-time opportunities.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Developer" }],
  openGraph: {
    title: "Portfolio | Full-Stack Web Developer",
    description:
      "Crafting high-performance modern web applications with cutting-edge technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-slate-950 text-white relative z-10 font-sans">
        <BackgroundIcons />
        {children}
      </body>
    </html>
  );
}
