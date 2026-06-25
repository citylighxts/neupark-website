"use client";
import { useState } from "react";

// ─── Empathy Map ─────────────────────────────────────────────────────────────

const empathyQuadrants = [
  {
    label: "Think & Feel",
    icon: "💭",
    color: "yellow",
    items: [
      "Cemas dan frustrasi karena antrean panjang membuat sering terlambat kelas",
      "Berpikir proses pemeriksaan STNK fisik satu per satu sangat membuang waktu",
      "Panik ketika tidak sengaja meninggalkan STNK fisik di tempat kos",
      "Menginginkan sistem masuk kendaraan yang cepat, otomatis, dan tidak bergantung petugas",
    ],
  },
  {
    label: "Hear",
    icon: "👂",
    color: "green",
    items: [
      "Suara bising kendaraan yang menumpuk di gerbang kampus setiap jam 07.00–08.00",
      "Keluhan mahasiswa lain mengenai antrean panjang dan proses manual yang membuang waktu",
      "Instruksi petugas yang menghentikan kendaraan dan meminta menunjukkan STNK fisik",
    ],
  },
  {
    label: "See",
    icon: "👁️",
    color: "blue",
    items: [
      "Antrean kendaraan bermotor yang sangat panjang di gerbang saat jam sibuk",
      "Pengendara lain membongkar dompet atau tas untuk menyiapkan STNK fisik",
      "Petugas keamanan terkadang tidak ada di pos, atau proses pengecekan tidak konsisten",
    ],
  },
  {
    label: "Say & Do",
    icon: "🗣️",
    color: "pink",
    items: [
      "Membawa motor ke kampus setiap hari dan melewati gerbang minimal dua kali sehari",
      "Sangat aktif berinteraksi dengan smartphone dan familiar dengan aplikasi digital berbasis QR",
      "Mengutamakan efisiensi dan sangat menghindari antrean",
    ],
  },
];

const painGain = {
  pain: [
    "Antrean panjang di gerbang saat jam sibuk yang membuang waktu berharga",
    "Keharusan selalu mengingat dan menyiapkan STNK fisik sebelum melewati gerbang",
    "Proses manual yang bergantung pada petugas, rentan terhadap kelalaian",
  ],
  gain: [
    "Proses masuk dan keluar gerbang kampus dengan sangat cepat dan tanpa hambatan",
    "Verifikasi otomatis menggunakan kamera OCR yang membaca plat nomor dan e-STNK dalam hitungan detik",
    "Pengalaman berlalu lintas di kampus yang efisien, aman, berteknologi modern, dan tanpa ribet",
  ],
};

const colorMap: Record<string, string> = {
  yellow: "border-yellow-500/30 bg-yellow-500/5",
  green: "border-green-500/30 bg-green-500/5",
  blue: "border-blue-500/30 bg-blue-500/5",
  pink: "border-pink-500/30 bg-pink-500/5",
};

const iconBgMap: Record<string, string> = {
  yellow: "bg-yellow-500/20 text-yellow-400",
  green: "bg-green-500/20 text-green-400",
  blue: "bg-blue-500/20 text-blue-400",
  pink: "bg-pink-500/20 text-pink-400",
};

// ─── User Journey Map ─────────────────────────────────────────────────────────

const journeyStages = [
  {
    stage: "Before",
    activity: "Bersiap pulang setelah selesai kuliah",
    emotion: "😐",
    emotionLabel: "Netral",
    experience: "User merasa lega karena kuliah sudah selesai",
    problem: "Tidak ada informasi antrean, mahasiswa langsung ke gerbang",
    need: "Informasi antrean dan waktu tunggu secara real-time",
  },
  {
    stage: "Antre Gerbang",
    activity: "Bergabung ke antrean panjang di gerbang kampus",
    emotion: "😓",
    emotionLabel: "Frustasi",
    experience: "User merasa jenuh, panas, dan stress antrean panjang",
    problem: "Antrean panjang terutama di jam selesai kuliah bersama",
    need: "Sistem antrean yang tertib dan transportasi agar lebih nyaman",
  },
  {
    stage: "Pemeriksaan STNK",
    activity: "Menyerahkan STNK ke petugas untuk diperiksa manual",
    emotion: "🙂",
    emotionLabel: "Santai",
    experience: "User merasa cemas dan tidak nyaman saat STNK diperiksa manual",
    problem: "Pemeriksaan STNK manual memakan waktu",
    need: "Proses verifikasi STNK yang cepat dan akurat",
  },
  {
    stage: "Keluar Gerbang",
    activity: "Menunggu keluar gerbang kampus",
    emotion: "😤",
    emotionLabel: "Frustasi",
    experience: "User merasa lega setelah bisa keluar",
    problem: "Proses keluar terhambat karena antrean panjang & pemeriksaan manual",
    need: "Alur keluar yang cepat, efisien, dan minim hambatan",
  },
  {
    stage: "After",
    activity: "Sampai di luar kampus dan melanjutkan perjalanan",
    emotion: "🤩",
    emotionLabel: "Lega",
    experience: "User merasa senang bisa keluar gerbang",
    problem: "Waktu terbuang dan stress karena proses lama",
    need: "Pengalaman keluar kampus yang nyaman, aman, dan efisien",
  },
];

// ─── SWOT ─────────────────────────────────────────────────────────────────────

const swot = {
  strengths: [
    "Otomatisasi verifikasi STNK tanpa petugas sehingga hemat biaya operasional",
    "Akurasi tinggi, efektif meminimalisir human error",
    "Sistem monitoring terpusat yang real-time dan mudah diskalakan",
    "Integrasi dengan sistem keamanan lain (CCTV, barrier gate, database kampus)",
  ],
  weaknesses: [
    "Membutuhkan modal awal untuk biaya instalasi dan hardware",
    "Beban biaya lisensi tahunan untuk maintenance sistem OCR",
    "Belum otonom penuh, tetap butuh intervensi petugas jika data ditolak",
    "Downtime sensitivity yang dapat melumpuhkan operasional gerbang",
  ],
  opportunities: [
    "Menjadi solusi ideal untuk sistem gerbang kampus yang saat ini lambat dan manual",
    "Fitur pengecekan data langsung ke database Samsat",
    "Banyak kampus lain dengan masalah serupa dan tren smart campus",
    "Brand positioning sebagai smart campus pioneer",
  ],
  threats: [
    "Risiko terhambatnya proses jika kamera OCR gagal membaca plat/STNK yang buram",
    "Risiko penumpukan antrean akibat seringnya ketidakcocokan data plat dan STNK",
    "Sangat bergantung pada kondisi optimal dan stabilitas perangkat keras di gerbang",
    "Kamera/alat di gerbang rentan dirusak atau dimanipulasi",
  ],
};

const swotConfig = [
  { key: "strengths", label: "Strengths", icon: "💪", color: "green" },
  { key: "weaknesses", label: "Weaknesses", icon: "⚠️", color: "yellow" },
  { key: "opportunities", label: "Opportunities", icon: "🚀", color: "blue" },
  { key: "threats", label: "Threats", icon: "🛡️", color: "red" },
] as const;

const swotColorMap: Record<string, string> = {
  green: "border-green-500/30 bg-green-500/5",
  yellow: "border-yellow-500/30 bg-yellow-500/5",
  blue: "border-blue-500/30 bg-blue-500/5",
  red: "border-red-500/30 bg-red-500/5",
};

const swotLabelMap: Record<string, string> = {
  green: "text-green-400",
  yellow: "text-yellow-400",
  blue: "text-blue-400",
  red: "text-red-400",
};

// ─── Tabs ─────────────────────────────────────────────────────────────────────

type Tab = "empathy" | "journey" | "swot";

export default function Research() {
  const [tab, setTab] = useState<Tab>("empathy");

  const tabs: { id: Tab; label: string }[] = [
    { id: "empathy", label: "Empathy Map" },
    { id: "journey", label: "User Journey Map" },
    { id: "swot", label: "SWOT Analysis" },
  ];

  return (
    <section id="riset" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Riset</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Riset & Analisis</h2>
          <p className="text-white/50 mt-4 max-w-xl">
            Proses design thinking yang mendasari pengembangan NeuPark, dari memahami pengguna hingga analisis strategis.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 mb-10 border border-white/10 rounded-xl p-1 w-fit">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === t.id
                  ? "bg-[#CCFF00] text-black"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Empathy Map ── */}
        {tab === "empathy" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {empathyQuadrants.map((q) => (
                <div
                  key={q.label}
                  className={`rounded-2xl border p-6 ${colorMap[q.color]}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${iconBgMap[q.color]}`}>
                      {q.icon}
                    </span>
                    <span className="font-bold">{q.label}</span>
                  </div>
                  <ul className="space-y-2">
                    {q.items.map((item) => (
                      <li key={item} className="text-sm text-white/60 flex gap-2">
                        <span className="shrink-0 mt-0.5">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Pain & Gain */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">
                <div className="text-red-400 font-bold mb-4 flex items-center gap-2">
                  <span>😣</span> Pain
                </div>
                <ul className="space-y-2">
                  {painGain.pain.map((p) => (
                    <li key={p} className="text-sm text-white/60 flex gap-2">
                      <span className="text-red-400 shrink-0">✕</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-[#CCFF00]/30 bg-[#CCFF00]/5 p-6">
                <div className="text-[#CCFF00] font-bold mb-4 flex items-center gap-2">
                  <span>😊</span> Gain
                </div>
                <ul className="space-y-2">
                  {painGain.gain.map((g) => (
                    <li key={g} className="text-sm text-white/60 flex gap-2">
                      <span className="text-[#CCFF00] shrink-0">✓</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ── User Journey Map ── */}
        {tab === "journey" && (
          <div className="space-y-4">
            {/* Persona header */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-black text-lg">R</div>
                <div>
                  <div className="font-bold">Reza | 21 Tahun | Mahasiswa Teknik</div>
                  <div className="text-white/40 text-sm">Pengguna Motor Harian</div>
                </div>
              </div>
              <div className="text-white/40 text-sm max-w-sm">
                Membawa motor setiap hari, melewati gerbang minimal dua kali sehari. Familiar dengan aplikasi digital berbasis QR dan mengutamakan efisiensi.
              </div>
            </div>

            {/* Journey table: mobile stacked cards, desktop columns */}
            <div className="hidden lg:grid grid-cols-5 gap-3">
              {journeyStages.map((s) => (
                <div key={s.stage} className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden">
                  {/* Stage header */}
                  <div className="bg-[#CCFF00] text-black text-xs font-black uppercase tracking-wider px-4 py-2 text-center">
                    {s.stage}
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Aktivitas</div>
                      <div className="text-xs text-white/70">{s.activity}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">{s.emotion}</div>
                      <div className="text-[10px] text-white/40 mt-1">{s.emotionLabel}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Problem</div>
                      <div className="text-xs text-red-400/80">{s.problem}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Kebutuhan</div>
                      <div className="text-xs text-[#CCFF00]/80">{s.need}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile: stacked */}
            <div className="lg:hidden space-y-3">
              {journeyStages.map((s) => (
                <div key={s.stage} className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#CCFF00] text-black text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      {s.stage}
                    </span>
                    <span className="text-2xl">{s.emotion}</span>
                  </div>
                  <div className="text-sm text-white/70 mb-3">{s.activity}</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Problem</div>
                      <div className="text-xs text-red-400/80">{s.problem}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Kebutuhan</div>
                      <div className="text-xs text-[#CCFF00]/80">{s.need}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SWOT ── */}
        {tab === "swot" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {swotConfig.map((s) => (
                <div
                  key={s.key}
                  className={`rounded-2xl border p-6 ${swotColorMap[s.color]}`}
                >
                  <div className={`font-black text-lg mb-4 flex items-center gap-2 ${swotLabelMap[s.color]}`}>
                    <span>{s.icon}</span>
                    {s.label}
                  </div>
                  <ul className="space-y-3">
                    {swot[s.key].map((item, i) => (
                      <li key={i} className="text-sm text-white/60 flex gap-2">
                        <span className={`shrink-0 font-bold ${swotLabelMap[s.color]}`}>{i + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Team on SWOT */}
            <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6">
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Analisis oleh</div>
              <div className="font-semibold">Group 10 · Kewirausahaan Berbasis Teknologi · ITS</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
