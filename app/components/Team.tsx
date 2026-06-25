import Image from "next/image";

const members = [
  {
    name: "Hana Azizah Nurhadi",
    nrp: "5025231134",
    dept: "Teknik Komputer",
    role: "TC",
    photo: "/members/hana.png",
    objectPosition: "center 10%",
    rotate: false,
  },
  {
    name: "Abbygail Namira W",
    nrp: "5031231019",
    dept: "Manajemen Bisnis",
    role: "MB",
    photo: "/members/abby.jpeg",
    objectPosition: "center 25%",
    rotate: false,
  },
  {
    name: "Nathaniel Supriyo",
    nrp: "5031231021",
    dept: "Manajemen Bisnis",
    role: "MB",
    photo: null,
    objectPosition: "center",
    rotate: false,
  },
  {
    name: "Ummu Hafsoh",
    nrp: "5031231022",
    dept: "Manajemen Bisnis",
    role: "MB",
    photo: "/members/ummu.jpeg",
    objectPosition: "65% 12%",
    rotate: true,
  },
  {
    name: "Yohanes Wicaksono",
    nrp: "5031231074",
    dept: "Manajemen Bisnis",
    role: "MB",
    photo: null,
    objectPosition: "center",
    rotate: false,
  },
];

const roleColors: Record<string, string> = {
  TC: "bg-[#CCFF00] text-black",
  MB: "bg-blue-500/20 text-blue-400",
};

export default function Team() {
  return (
    <section id="tim" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Tim</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Meet the Team</h2>
          <p className="text-white/50 mt-4">
            Group 10 · Kewirausahaan Berbasis Teknologi (14) · Institut Teknologi Sepuluh Nopember
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {members.map((m) => (
            <div
              key={m.nrp}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 text-center hover:border-[#CCFF00]/30 transition-colors"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border border-white/10">
                {m.photo ? (
                  <div className="w-full h-full relative">
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      className="object-cover"
                      style={{
                        objectPosition: m.objectPosition,
                        ...(m.rotate && { transform: "scale(1.2)", transformOrigin: "center center" }),
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00] font-black text-2xl">
                    {m.name[0]}
                  </div>
                )}
              </div>

              <div className="font-bold text-sm leading-tight mb-1">{m.name}</div>
              <div className="text-white/40 text-xs mb-3">{m.nrp}</div>
              <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full ${roleColors[m.role]}`}>
                {m.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
