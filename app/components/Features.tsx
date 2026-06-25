const features = [
  {
    icon: "💰",
    title: "Hemat Biaya Petugas",
    desc: "Kurangi ketergantungan pada operator manual di setiap gerbang parkir kampus.",
    highlight: false,
  },
  {
    icon: "📡",
    title: "Scalable System",
    desc: "Mudah diimplementasikan dan direplikasi di seluruh gerbang kampus manapun.",
    highlight: false,
  },
  {
    icon: "🔒",
    title: "Aman — 100% Terverifikasi",
    desc: "Setiap kendaraan yang masuk dipastikan memiliki plat yang cocok dengan STNK-nya.",
    highlight: true,
  },
  {
    icon: "🎯",
    title: "Mengurangi Human Error",
    desc: "Meminimalisir kesalahan pengecekan atau kelalaian petugas secara signifikan.",
    highlight: false,
  },
  {
    icon: "⚡",
    title: "Real-time Monitoring",
    desc: "Dashboard monitoring siapa yang masuk, kapan, dan riwayat penolakan akses.",
    highlight: false,
  },
  {
    icon: "🖥️",
    title: "Monitoring Terpusat",
    desc: "Semua aktivitas diawasi dari satu dashboard tanpa harus berada di lokasi.",
    highlight: false,
  },
];

export default function Features() {
  return (
    <section id="keunggulan" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Keunggulan</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Kenapa NeuPark?
          </h2>
          <p className="text-white/50 mt-4 max-w-lg">
            Enam nilai utama yang menjadikan NeuPark solusi ideal untuk sistem gerbang kampus modern.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-2xl p-6 border transition-all ${
                f.highlight
                  ? "bg-[#CCFF00] text-black border-transparent"
                  : "bg-[#1a1a1a] border-white/10 hover:border-white/20"
              }`}
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${f.highlight ? "text-black" : ""}`}>
                {f.title}
              </h3>
              <p className={`text-sm leading-relaxed ${f.highlight ? "text-black/70" : "text-white/50"}`}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
