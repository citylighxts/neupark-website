# NeuPark — Smart Parking Gate System

Website produk NeuPark, sistem gerbang parkir otomatis berbasis OCR untuk manajemen kendaraan di kampus. Dibangun sebagai bagian dari program Kewirausahaan Berbasis Teknologi (KBT) ITS — Kelompok 10, 2026.

---

## Tentang Proyek

NeuPark hadir sebagai solusi atas masalah antrean panjang di gerbang parkir kampus akibat verifikasi STNK manual oleh petugas. Dengan memanfaatkan teknologi OCR (Optical Character Recognition), NeuPark mengotomasi seluruh proses verifikasi kendaraan:

1. Kamera OCR membaca nomor plat kendaraan secara otomatis
2. Sistem memindai e-STNK (QR Code) atau STNK fisik
3. Plat nomor dicocokkan dengan database registrasi Samsat
4. Gerbang terbuka otomatis dalam waktu kurang dari 5 detik
5. Seluruh aktivitas tercatat di dashboard monitoring real-time

**Target pengguna:** Mahasiswa, staf kampus ITS, dan pengelola fasilitas — serta dapat dikembangkan ke universitas lain, gedung perkantoran, dan fasilitas publik.

---

## Tech Stack

| Layer | Teknologi | Versi |
|-------|-----------|-------|
| Framework | Next.js | 16.2.9 |
| UI Library | React & React-DOM | 19.2.4 |
| Styling | Tailwind CSS | v4 |
| Bahasa | TypeScript | v5 |
| Linting | ESLint | v9 |

Arsitektur menggunakan **Next.js App Router** dengan React Server Components secara default. Komponen interaktif (Navbar, Demo, Research) menggunakan `"use client"`.

---

## Struktur Proyek

```
neupark-website/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigasi fixed dengan hamburger menu mobile
│   │   ├── Hero.tsx          # Landing section dengan statistik produk
│   │   ├── Problem.tsx       # Permasalahan parkir kampus
│   │   ├── Solution.tsx      # Pengenalan solusi NeuPark
│   │   ├── HowItWorks.tsx    # Alur kerja 6 langkah
│   │   ├── Demo.tsx          # Simulator OCR interaktif
│   │   ├── Features.tsx      # 6 keunggulan produk
│   │   ├── Personas.tsx      # User persona (mahasiswa & pengelola)
│   │   ├── Research.tsx      # Empathy Map, Journey Map, SWOT
│   │   ├── BusinessModel.tsx # Model bisnis & target pasar
│   │   ├── Team.tsx          # Profil anggota tim
│   │   └── Contact.tsx       # CTA & footer
│   ├── layout.tsx            # Root layout & metadata
│   ├── page.tsx              # Halaman utama (single-page scroll)
│   └── globals.css           # Variabel warna & style global
├── public/
│   ├── members/              # Foto anggota tim
│   └── *.png / *.svg         # Aset produk & ikon
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Memulai

### Prasyarat

- Node.js 18.17 atau lebih baru
- npm, yarn, pnpm, atau bun

### Instalasi

```bash
# Clone repositori
git clone https://github.com/citylighxts/neupark-website.git
cd neupark-website

# Install dependensi
npm install
```

### Menjalankan Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build Produksi

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Fitur Website

| Seksi | Deskripsi |
|-------|-----------|
| **Hero** | Headline produk dengan statistik kunci (100% Verified, <5s, 0 Staff) |
| **Problem** | 4 masalah utama parkir kampus berdasarkan survei 76 responden ITS |
| **Solution** | Diagram alur otomasi & perbandingan sebelum/sesudah |
| **How It Works** | 6 langkah proses lengkap dengan spesifikasi hardware |
| **Demo** | Simulator scanner plat nomor OCR interaktif dengan activity log |
| **Features** | 6 keunggulan: hemat biaya, skalabel, akurat, monitoring real-time |
| **Personas** | Profil pengguna: Rizky (mahasiswa) & Rina (kepala fasilitas) |
| **Research** | Empathy Map, User Journey Map, dan Analisis SWOT (tab interaktif) |
| **Business Model** | Biaya instalasi sekali & langganan tahunan, segmen pasar |
| **Team** | 5 anggota Kelompok 10 KBT ITS |
| **Contact** | CTA menghubungi tim NeuPark |

---

## Tim

**Kelompok 10 — KBT ITS 2026**

| Nama | NRP | Jurusan |
|------|-----|---------|
| Hana Azizah Nurhadi | 5025231134 | Teknik Komputer (TC) |
| Abbygail Namira W | 5031231019 | Manajemen Bisnis (MB) |
| Nathaniel Supriyo | 5031231021 | Manajemen Bisnis (MB) |
| Ummu Hafsoh | 5031231022 | Manajemen Bisnis (MB) |
| Yohanes Wicaksono | 5031231074 | Manajemen Bisnis (MB) |

**Kontak:** hanaazizahn@gmail.com

---

## Lisensi

Proyek ini bersifat privat dan dikembangkan untuk keperluan program KBT ITS. Seluruh hak cipta milik tim NeuPark © 2026.
