import Image from "next/image";

export default function Solution() {
  return (
    <section id="solusi" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Solusi</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3 max-w-2xl">
            Perkenalkan{" "}
            <span className="text-[#CCFF00]">NeuPark</span>,<br />
            gerbang kampus yang berpikir sendiri
          </h2>
          <p className="text-white/50 mt-4 max-w-xl">
            Sistem Smart Parking Gate berbasis OCR yang membaca plat nomor dan e-STNK secara otomatis. Tidak ada petugas yang diperlukan. Tidak ada dokumen yang harus disiapkan.
          </p>
        </div>

        {/* Macro flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-16">
          {[
            { icon: "🏍️", label: "Kendaraan Datang", sub: "Tidak perlu berhenti" },
            { icon: "📷", label: "Kamera OCR", sub: "Baca plat & e-STNK" },
            { icon: "🧠", label: "Sistem Verifikasi", sub: "Cocokkan data otomatis" },
            { icon: "🚧", label: "Palang Terbuka", sub: "Dalam hitungan detik" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex flex-col items-center text-center flex-1 md:flex-none md:w-36">
                <div className="w-16 h-16 rounded-2xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-3xl mb-3">
                  {item.icon}
                </div>
                <div className="font-bold text-sm">{item.label}</div>
                <div className="text-white/40 text-xs mt-1">{item.sub}</div>
              </div>
              {i < 3 && (
                <div className="hidden md:flex items-center text-[#CCFF00] text-2xl font-black">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">Sebelum NeuPark</div>
            <ul className="space-y-3">
              {[
                "Petugas cek STNK satu per satu secara manual",
                "Antrean panjang di jam sibuk pagi & sore",
                "Mahasiswa wajib bawa STNK fisik setiap hari",
                "Tidak ada log atau data siapa yang masuk",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-white/60">
                  <span className="text-red-400 shrink-0">✕</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#CCFF00]/5 border border-[#CCFF00]/20 rounded-2xl p-6">
            <div className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest mb-4">Sesudah NeuPark</div>
            <ul className="space-y-3">
              {[
                "Kamera OCR verifikasi otomatis dalam &lt;5 detik",
                "Tidak ada antrean, kendaraan langsung masuk",
                "Tidak perlu STNK fisik, e-STNK cukup",
                "Dashboard real-time log seluruh aktivitas gerbang",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-sm text-white/60" dangerouslySetInnerHTML={{ __html: `<span class="text-[#CCFF00] shrink-0">✓</span>${t}` }} />
              ))}
            </ul>
          </div>
        </div>

        {/* Product showcase image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/file_000000001994720891471510218b0482.png"
            alt="NeuPark SmartGate OCR - sistem verifikasi kendaraan otomatis di kampus ITS"
            width={1456}
            height={816}
            className="w-full h-auto"
          />
        </div>

        {/* CTA bridge */}
        <div className="text-center">
          <p className="text-white/40 text-sm mb-4">Penasaran cara kerjanya secara teknis?</p>
          <a
            href="#cara-kerja"
            className="inline-flex items-center gap-2 border border-[#CCFF00]/40 text-[#CCFF00] px-6 py-3 rounded-full hover:bg-[#CCFF00]/10 transition-colors text-sm font-semibold"
          >
            Lihat Cara Kerja Detail
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
