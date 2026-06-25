import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuPark — Smart Parking Gate",
  description: "Verifikasi STNK otomatis, tanpa petugas. Solusi gerbang parkir cerdas berbasis OCR untuk kampus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#111111] text-white">
        {children}
      </body>
    </html>
  );
}
