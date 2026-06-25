const problems = [
  {
    icon: "🚦",
    title: "Antrean Panjang",
    desc: "Gerbang kampus macet setiap pagi pukul 07.00–08.00 karena pemeriksaan STNK satu per satu secara manual.",
  },
  {
    icon: "📄",
    title: "Repot Bawa STNK Fisik",
    desc: "Mahasiswa harus selalu mengingat dan menyiapkan STNK fisik setiap kali hendak melewati gerbang.",
  },
  {
    icon: "👤",
    title: "Human Error",
    desc: "Petugas yang lalai atau tidak konsisten membuat proses pengecekan tidak andal dan rentan manipulasi.",
  },
  {
    icon: "📊",
    title: "Tanpa Monitoring",
    desc: "Tidak ada data real-time siapa yang masuk, kapan, dan riwayat penolakan akses di gerbang.",
  },
];

export default function Problem() {
  return (
    <section id="masalah" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Masalah</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 max-w-xl">
            Sistem gerbang kampus yang masih manual dan tidak efisien
          </h2>
          <p className="text-white/50 mt-4 max-w-lg">
            Berdasarkan survei terhadap 76 responden di area ITS, sistem keluar-masuk kendaraan saat ini sangat bergantung pada petugas dan rentan kesalahan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 hover:border-[#CCFF00]/30 transition-colors"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 md:p-10">
          <p className="text-lg md:text-xl text-white/80 italic leading-relaxed">
            "Setiap pagi, terutama di jam 07.00–08.00, gerbang kampus macet karena petugas memeriksa STNK satu per satu. Saya sering terlambat masuk kelas karena antriannya panjang."
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00] text-sm font-bold">R</div>
            <div>
              <div className="font-semibold text-sm">Rizky Pratama</div>
              <div className="text-white/40 text-xs">Mahasiswa ITS, Pengguna Motor Harian</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
