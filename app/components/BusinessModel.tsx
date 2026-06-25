export default function BusinessModel() {
  return (
    <section id="bisnis" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Model Bisnis</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Investasi sekali,{" "}
            <span className="text-[#CCFF00]">manfaat jangka panjang</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* One-time install */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-[#CCFF00]/30 transition-colors">
            <div className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest mb-4">
              Biaya Instalasi
            </div>
            <div className="text-3xl font-black mb-2">One-Time</div>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Pemasangan hardware, konfigurasi sistem, dan pelatihan tim klien. Dibayar sekali untuk setiap unit gerbang.
            </p>
            <ul className="space-y-3">
              {[
                "Pemasangan kamera OCR",
                "Konfigurasi software & integrasi database",
                "Pelatihan tim pengelola",
                "Garansi instalasi",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-white/60">
                  <span className="text-[#CCFF00] mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Annual license */}
          <div className="bg-[#CCFF00] rounded-2xl p-8">
            <div className="text-black/60 text-sm font-bold uppercase tracking-widest mb-4">
              Lisensi Tahunan
            </div>
            <div className="text-black text-3xl font-black mb-2">Subscription</div>
            <p className="text-black/60 text-sm mb-6 leading-relaxed">
              Maintenance software OCR serta update engine Automatic License Plate Recognition berkala dan dashboard monitoring.
            </p>
            <ul className="space-y-3">
              {[
                "Update engine OCR berkala",
                "Maintenance software rutin",
                "Dashboard monitoring aktif",
                "Support teknis prioritas",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-black/70">
                  <span className="text-black mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target market */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8">
          <div className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest mb-4">
            Target Pasar
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Kampus & Universitas", desc: "Kampus besar dengan ribuan kendaraan harian. Mulai dari ITS, lalu berkembang ke kampus lain." },
              { icon: "🏢", title: "Perkantoran", desc: "Gedung perkantoran dan kawasan bisnis yang membutuhkan sistem parkir modern." },
              { icon: "🏥", title: "Fasilitas Publik", desc: "Rumah sakit, mal, dan fasilitas umum dengan volume kendaraan tinggi." },
            ].map((t) => (
              <div key={t.title}>
                <div className="text-2xl mb-2">{t.icon}</div>
                <div className="font-bold mb-1">{t.title}</div>
                <div className="text-white/50 text-sm leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
