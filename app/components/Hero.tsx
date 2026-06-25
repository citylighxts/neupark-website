import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#CCFF00]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
              Smart Parking Gate · ITS Campus
            </div>

            {/* Logo wordmark */}
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4">
              <span className="text-[#CCFF00]">Neu</span>Park
            </h1>

            <p className="text-xl md:text-2xl text-white/60 font-light mb-4">
              Verifikasi STNK Otomatis, Tanpa Petugas
            </p>

            <p className="text-base text-white/40 mb-10 max-w-md">
              Kamera OCR membaca plat nomor dan e-STNK secara otomatis. Palang terbuka dalam hitungan detik, tanpa antrean, tanpa ribet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#cara-kerja"
                className="bg-[#CCFF00] text-black font-bold px-8 py-4 rounded-full hover:bg-[#b8e600] transition-colors text-center"
              >
                Lihat Cara Kerja
              </a>
              <a
                href="#kontak"
                className="border border-white/30 text-white px-8 py-4 rounded-full hover:border-white/60 transition-colors text-center"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-sm">
              {[
                { value: "100%", label: "Terverifikasi" },
                { value: "< 5s", label: "Waktu Proses" },
                { value: "0", label: "Petugas Diperlukan" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-[#CCFF00]">{s.value}</div>
                  <div className="text-xs text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product image */}
          <div className="relative h-[520px] lg:h-[600px] overflow-hidden rounded-2xl -mx-6 lg:mx-0">
            <Image
              src="/product.png"
              alt="NeuPark SmartGate OCR device"
              fill
              className="object-cover"
              style={{ objectPosition: "55% 20%", mixBlendMode: "multiply" }}
              priority
            />
          </div>

        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}
