"use client";
import { useState } from "react";

const DB_VEHICLES = [
  { name: "Rizky Pratama", plate: "L 1234 AB", vehicle: "Honda Beat", status: "Aktif" },
  { name: "Budi Santoso", plate: "W 5678 CD", vehicle: "Yamaha NMAX", status: "Aktif" },
  { name: "Siti Rahayu", plate: "B 9999 XY", vehicle: "Honda Vario", status: "Aktif" },
  { name: "Dian Kusuma", plate: "L 4321 ZZ", vehicle: "Suzuki GSX", status: "Aktif" },
  { name: "Reza Mahendra", plate: "W 1111 QR", vehicle: "Honda CB150R", status: "Aktif" },
];

const REGISTERED = new Set(DB_VEHICLES.map((v) => v.plate));

type LogEntry = {
  id: number;
  time: string;
  plate: string;
  name: string | null;
  status: "verified" | "rejected";
};

const SEED_LOG: LogEntry[] = [
  { id: 1, time: "07:02:14", plate: "L 1234 AB", name: "Rizky Pratama", status: "verified" },
  { id: 2, time: "07:03:41", plate: "B 0000 XX", name: null, status: "rejected" },
  { id: 3, time: "07:05:09", plate: "W 5678 CD", name: "Budi Santoso", status: "verified" },
];

type ScanState = "idle" | "scanning" | "verified" | "rejected";

function nowTime() {
  return new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function Demo() {
  const [plate, setPlate] = useState("");
  const [scanState, setScanState] = useState<ScanState>("idle");
  const [matchedName, setMatchedName] = useState<string | null>(null);
  const [log, setLog] = useState<LogEntry[]>(SEED_LOG);
  const [nextId, setNextId] = useState(4);

  function handleScan() {
    if (!plate.trim() || scanState === "scanning") return;
    setScanState("scanning");
    setMatchedName(null);

    setTimeout(() => {
      const normalized = plate.trim().toUpperCase();
      const match = DB_VEHICLES.find((v) => v.plate === normalized);
      const result: "verified" | "rejected" = match ? "verified" : "rejected";

      setScanState(result);
      setMatchedName(match?.name ?? null);
      setLog((prev) => [
        { id: nextId, time: nowTime(), plate: normalized, name: match?.name ?? null, status: result },
        ...prev,
      ]);
      setNextId((n) => n + 1);

      setTimeout(() => {
        setScanState("idle");
        setMatchedName(null);
      }, 3500);
    }, 1500);
  }

  function fillPlate(p: string) {
    setPlate(p);
    setScanState("idle");
  }

  return (
    <section id="demo" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-[#CCFF00] text-sm font-bold uppercase tracking-widest">Demo</span>
          <h2 className="text-4xl md:text-5xl font-black mt-3">Coba Sendiri</h2>
          <p className="text-white/50 mt-4 max-w-xl">
            Pilih plat dari database terdaftar atau ketik plat lain untuk melihat bagaimana sistem NeuPark merespons secara real-time.
          </p>
        </div>

        {/* ── 1. Database Kendaraan ── */}
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden mb-6">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
              <span className="text-sm font-bold">Database Kendaraan Terdaftar</span>
            </div>
            <span className="text-xs text-white/30">{DB_VEHICLES.length} kendaraan</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white/40 text-xs uppercase tracking-wider">
                  <th className="text-left px-6 py-3">Nama Pemilik</th>
                  <th className="text-left px-6 py-3">Plat Nomor</th>
                  <th className="text-left px-6 py-3 hidden sm:table-cell">Kendaraan</th>
                  <th className="text-left px-6 py-3">Status</th>
                  <th className="text-left px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {DB_VEHICLES.map((v) => (
                  <tr
                    key={v.plate}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-3 font-medium">{v.name}</td>
                    <td className="px-6 py-3">
                      <span className="font-mono bg-[#CCFF00]/10 text-[#CCFF00] px-2 py-0.5 rounded text-xs font-bold">
                        {v.plate}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-white/50 hidden sm:table-cell">{v.vehicle}</td>
                    <td className="px-6 py-3">
                      <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full font-semibold">
                        {v.status}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <button
                        onClick={() => fillPlate(v.plate)}
                        className="text-xs text-white/30 hover:text-[#CCFF00] transition-colors underline underline-offset-2"
                      >
                        Gunakan
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── 2. Scanner + Log ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Scanner */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
            <div className="text-sm font-bold uppercase tracking-widest text-white/40">
              Simulasi Scan Gerbang
            </div>

            {/* Scan result visual */}
            <div
              className={`rounded-xl border-2 flex flex-col items-center justify-center h-36 transition-all duration-500 ${
                scanState === "scanning"
                  ? "border-[#CCFF00]/60 bg-[#CCFF00]/5"
                  : scanState === "verified"
                  ? "border-green-500/60 bg-green-500/5"
                  : scanState === "rejected"
                  ? "border-red-500/60 bg-red-500/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {scanState === "idle" && (
                <>
                  <div className="text-3xl mb-1">📷</div>
                  <div className="text-white/40 text-sm">Kamera OCR siap</div>
                </>
              )}
              {scanState === "scanning" && (
                <>
                  <div className="w-7 h-7 border-2 border-[#CCFF00] border-t-transparent rounded-full animate-spin mb-2" />
                  <div className="text-[#CCFF00] text-sm font-semibold">Membaca plat nomor...</div>
                  <div className="text-white/30 text-xs mt-1 font-mono">{plate.toUpperCase()}</div>
                </>
              )}
              {scanState === "verified" && (
                <>
                  <div className="text-3xl mb-1">✅</div>
                  <div className="text-green-400 font-bold">Terverifikasi</div>
                  {matchedName && (
                    <div className="text-white/50 text-xs mt-1">{matchedName}</div>
                  )}
                  <div className="text-white/30 text-xs mt-0.5">Palang gerbang terbuka</div>
                </>
              )}
              {scanState === "rejected" && (
                <>
                  <div className="text-3xl mb-1">🚫</div>
                  <div className="text-red-400 font-bold">Ditolak</div>
                  <div className="text-white/30 text-xs mt-0.5">Plat tidak terdaftar. Petugas dipanggil.</div>
                </>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-3">
              <input
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value.toUpperCase())}
                onKeyDown={(e) => e.key === "Enter" && handleScan()}
                placeholder="Ketik atau pilih plat di atas..."
                className="flex-1 bg-[#111] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm font-mono focus:outline-none focus:border-[#CCFF00]/60 uppercase"
              />
              <button
                onClick={handleScan}
                disabled={!plate.trim() || scanState === "scanning"}
                className="bg-[#CCFF00] text-black font-bold px-5 py-3 rounded-xl hover:bg-[#b8e600] disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm whitespace-nowrap"
              >
                Scan
              </button>
            </div>

            <p className="text-xs text-white/25 -mt-1">
              Klik <span className="text-white/40">Gunakan</span> di tabel atas untuk mengisi plat terdaftar, atau ketik plat lain untuk melihat respons penolakan.
            </p>
          </div>

          {/* Log */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold uppercase tracking-widest text-white/40">
                Log Aktivitas Gerbang
              </div>
              <div className="flex items-center gap-2 text-xs text-white/30">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                Live
              </div>
            </div>

            <div className="flex-1 overflow-y-auto max-h-72 flex flex-col gap-2">
              {log.map((entry) => (
                <div
                  key={entry.id}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 border text-sm ${
                    entry.status === "verified"
                      ? "bg-green-500/5 border-green-500/20"
                      : "bg-red-500/5 border-red-500/20"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={entry.status === "verified" ? "text-green-400 shrink-0" : "text-red-400 shrink-0"}>
                      {entry.status === "verified" ? "✓" : "✕"}
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono font-semibold text-xs">{entry.plate}</div>
                      {entry.name ? (
                        <div className="text-white/40 text-xs truncate">{entry.name}</div>
                      ) : (
                        <div className="text-white/25 text-xs">Tidak terdaftar</div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        entry.status === "verified"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {entry.status === "verified" ? "Masuk" : "Ditolak"}
                    </span>
                    <span className="text-white/25 text-xs font-mono">{entry.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-3 text-xs text-white/25 flex justify-between">
              <span>{log.length} entri</span>
              <span>
                {log.filter((e) => e.status === "verified").length} masuk ·{" "}
                {log.filter((e) => e.status === "rejected").length} ditolak
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
