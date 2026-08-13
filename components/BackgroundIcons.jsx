"use client";

import { Code, Terminal, Cpu, Globe, Database, Layers } from "lucide-react";

export default function BackgroundIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-10" aria-hidden="true">
      <div 
        className="absolute top-[15%] left-[5%] text-indigo-400" 
        style={{ animation: "float 12s ease-in-out infinite" }}
      >
        <Code size={40} />
      </div>
      
      <div 
        className="absolute top-[25%] right-[10%] text-purple-400" 
        style={{ animation: "float 15s ease-in-out 2s infinite" }}
      >
        <Terminal size={48} />
      </div>
      
      <div 
        className="absolute bottom-[30%] left-[12%] text-slate-600" 
        style={{ animation: "float 18s ease-in-out 4s infinite" }}
      >
        <Cpu size={32} />
      </div>
      
      <div 
        className="absolute bottom-[15%] right-[8%] text-indigo-400" 
        style={{ animation: "float 14s ease-in-out 1s infinite" }}
      >
        <Globe size={42} />
      </div>
      
      <div 
        className="absolute top-[45%] left-[85%] text-purple-400" 
        style={{ animation: "float 16s ease-in-out 3s infinite" }}
      >
        <Database size={30} />
      </div>
      
      <div 
        className="absolute top-[65%] left-[20%] text-slate-600" 
        style={{ animation: "float 20s ease-in-out 5s infinite" }}
      >
        <Layers size={36} />
      </div>
    </div>
  );
}
