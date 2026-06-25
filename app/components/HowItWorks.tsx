const steps = [
  {
    num: "01",
    title: "Kendaraan Tiba di Gerbang",
    desc: "Kendaraan mendekat ke area gerbang kampus tanpa perlu berhenti atau menyiapkan dokumen.",
  },
  {
    num: "02",
    title: "Kamera Baca Plat Nomor",
    desc: "Kamera OCR mendeteksi dan mengekstrak teks plat nomor secara otomatis dalam hitungan detik.",
  },
  {
    num: "03",
    title: "Kamera Baca STNK / e-STNK",
    desc: "Sistem membaca STNK fisik atau memindai QR code e-STNK yang ditampilkan pengendara.",
  },
  {
    num: "04",
    title: "Pencocokan Data",
    desc: "Plat nomor dicocokkan dengan data STNK. Opsional: cek langsung ke database Samsat.",
  },
  {
    num: "05",
    title: "Palang Gerbang Terbuka",
    desc: "Jika data cocok, palang terbuka otomatis dan log masuk dicatat (timestamp + data STNK).",
  },
  {
    num: "06",
    title: "Fallback Petugas",
    desc: "Jika data tidak cocok, tombol panggil petugas aktif untuk verifikasi manual sebagai backup.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Cara Kerja</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Dari tiba hingga masuk,{" "}
            <span className="text-[#CCFF00]">dalam 5 detik</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-lg">
            Teknologi OCR (Optical Character Recognition) memproses semua verifikasi secara otomatis tanpa intervensi manusia.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute left-[calc(16.67%*0+2rem)] top-8 bottom-8 w-px bg-white/10" style={{ left: "2.5rem" }} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`flex gap-5 bg-[#1a1a1a] border rounded-2xl p-6 transition-colors ${
                  i === 4
                    ? "border-[#CCFF00]/40 bg-[#CCFF00]/5"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00] font-black text-sm">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech badge */}
        <div className="mt-10 flex flex-wrap gap-3">
          {["OCR Technology", "License Plate Recognition", "e-STNK QR Scan", "Samsat DB Integration", "Real-time Logging"].map((t) => (
            <span
              key={t}
              className="bg-white/5 border border-white/10 text-white/60 text-xs px-4 py-2 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
