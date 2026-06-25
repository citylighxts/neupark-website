const personas = [
  {
    name: "Rizky Pratama",
    role: "Mahasiswa ITS",
    age: "21 Tahun",
    quote: "Saya ingin masuk kampus tanpa harus ribet nyiapin STNK tiap hari.",
    goals: [
      "Masuk dan keluar kampus cepat tanpa hambatan",
      "Tidak perlu repot menyiapkan STNK setiap melewati gerbang",
      "Sistem otomatis yang tidak bergantung pada petugas",
    ],
    pains: [
      "Antrean panjang di gerbang saat jam sibuk",
      "Petugas yang lalai atau tidak konsisten",
      "Sering lupa membawa STNK fisik",
    ],
    color: "from-[#CCFF00]/20 to-[#CCFF00]/5",
    accent: "#CCFF00",
  },
  {
    name: "Rina Kurniawan",
    role: "Kepala Sarpras Kampus",
    age: "50 Tahun",
    quote: "Kalau sistemnya otomatis dan nggak bikin ribet petugas, itu sangat membantu banget di lapangan.",
    goals: [
      "Operasional parkir berjalan lancar & tanpa konflik",
      "Mengurangi beban kerja petugas",
      "Meminimalisir kesalahan manusia",
    ],
    pains: [
      "Petugas kewalahan saat jam sibuk",
      "Banyak mahasiswa protes karena lama",
      "Sulit mengontrol kendaraan ilegal",
    ],
    color: "from-blue-500/20 to-blue-500/5",
    accent: "#60a5fa",
  },
];

export default function Personas() {
  return (
    <section id="pengguna" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Pengguna</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Siapa yang kami bantu?
          </h2>
          <p className="text-white/50 mt-4 max-w-lg">
            NeuPark dirancang untuk dua pengguna utama — mahasiswa yang menggunakan motor harian, dan pengelola fasilitas kampus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br ${p.color}`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-2xl font-black">{p.name}</div>
                    <div className="text-white/50 text-sm mt-1">{p.role} · {p.age}</div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-black text-sm"
                    style={{ backgroundColor: p.accent }}
                  >
                    {p.name[0]}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-white/70 italic text-sm leading-relaxed border-l-2 pl-4 mb-6" style={{ borderColor: p.accent }}>
                  "{p.quote}"
                </blockquote>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: p.accent }}>
                      Goals
                    </div>
                    <ul className="space-y-2">
                      {p.goals.map((g) => (
                        <li key={g} className="text-xs text-white/60 flex gap-2">
                          <span style={{ color: p.accent }}>✓</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">
                      Pain Points
                    </div>
                    <ul className="space-y-2">
                      {p.pains.map((pain) => (
                        <li key={pain} className="text-xs text-white/60 flex gap-2">
                          <span className="text-red-400">✕</span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
