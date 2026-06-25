export default function Contact() {
  return (
    <section id="kontak" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Tertarik?</span>
        <h2 className="text-4xl md:text-6xl font-black mt-3 mb-4">
          Bawa NeuPark ke<br />
          <span className="text-[#CCFF00]">kampus kamu</span>
        </h2>
        <p className="text-white/50 mb-10 max-w-md mx-auto">
          Hubungi tim kami untuk informasi lebih lanjut tentang demo, harga instalasi, dan kerjasama implementasi.
        </p>
        <a
          href="mailto:hanaazizahn@gmail.com"
          className="inline-flex items-center gap-3 bg-[#CCFF00] text-black font-bold px-8 py-4 rounded-full hover:bg-[#b8e600] transition-colors text-lg"
        >
          Hubungi Kami
          <span>→</span>
        </a>

        <div className="mt-16 pt-8 border-t border-white/10 text-white/30 text-sm">
          NeuPark · Group 10 · KBT ITS · 2025
        </div>
      </div>
    </section>
  );
}
