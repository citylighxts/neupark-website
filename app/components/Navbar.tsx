"use client";
import { useState } from "react";

const links = [
  { label: "Masalah", href: "#masalah" },
  { label: "Solusi", href: "#solusi" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Tim", href: "#tim" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-[#CCFF00] font-black text-xl tracking-tight">Neu</span>
          <span className="font-black text-xl tracking-tight">Park</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="bg-[#CCFF00] text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-[#b8e600] transition-colors"
          >
            Hubungi Kami
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="bg-[#CCFF00] text-black font-bold px-4 py-2 rounded-full text-center"
            onClick={() => setOpen(false)}
          >
            Hubungi Kami
          </a>
        </div>
      )}
    </nav>
  );
}
