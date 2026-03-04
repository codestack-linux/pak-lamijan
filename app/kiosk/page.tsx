"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  UserPlus,
  Search,
  Upload,
  ShieldCheck,
  Camera,
  ChevronRight,
  Info,
  CheckCircle2,
  Clock,
} from "lucide-react";

export default function KioskPage() {
  const [activeTab, setActiveTab] = useState<"register" | "check">("register");

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
      {/* LEFT SIDE: Creative Branding Panel */}
      <div className="md:w-[40%] lg:w-[35%] relative overflow-hidden flex flex-col p-10 justify-between min-h-screen">
        {/* Animated Mesh Background Layer */}
        <div className="absolute inset-0 z-0 animate-mesh bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-700"></div>

        {/* Decorative Overlay Elements */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          {/* Lingkaran Cahaya yang bergerak pelan */}
          <div className="absolute top-[-10%] left-[-20%] w-[120%] h-[60%] bg-emerald-300/30 rounded-[100%] blur-[80px] rotate-[-15deg] animate-pulse"></div>

          {/* Pola Garis Futuristik (Scanline effect) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100%_4px]"></div>

          {/* Pola Dot Grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        {/* Top Content: Logo & Identity */}
        <div className="relative z-10 flex flex-col items-center md:items-start">
          <div className="mb-8 animate-float">
            <div className="relative group">
              {/* Ring bercahaya di belakang logo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>

              <div className="relative w-28 h-28 p-1.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl transition-all duration-500">
                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center overflow-hidden p-3 shadow-inner">
                  <Image
                    src="/logo-sekolah.png"
                    alt="Logo Sekolah"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl font-black text-white tracking-tighter leading-none flex items-center gap-1">
              TAMENG
              <span className="text-secondary drop-shadow-[0_0_10px_rgba(217,119,6,0.5)]">
                .
              </span>
              DIGITAL
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-8 bg-secondary"></div>
              <p className="text-emerald-100 text-[10px] uppercase tracking-[0.3em] font-bold">
                Smart Security System
              </p>
            </div>
          </div>

          <p className="mt-6 text-emerald-50/80 text-lg font-medium leading-snug max-w-[280px]">
            Sistem Informasi Kunjungan Terpadu & Keamanan Sekolah
          </p>
        </div>

        {/* Middle Content: Glassmorphism Info Card */}
        <div className="relative z-10 my-8">
          <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 shadow-2xl transition-all duration-500 hover:translate-y-[-5px]">
            <h3 className="text-white font-black text-sm mb-6 flex items-center gap-3 uppercase tracking-widest">
              <span className="p-2 bg-secondary rounded-lg shadow-lg shadow-amber-900/20">
                <Clock size={16} className="text-white" />
              </span>
              Prosedur Cepat
            </h3>

            <div className="space-y-6 relative">
              {/* Line Connector vertikal */}
              <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-secondary/50 via-white/20 to-transparent"></div>

              {[
                { title: "Self Registration", desc: "Isi data & foto mandiri" },
                {
                  title: "Auto Verification",
                  desc: "Tim mengecek kelengkapan",
                },
                {
                  title: "Digital Approval",
                  desc: "Disposisi dari Kepala Sekolah",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start relative z-10">
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-white text-primary flex items-center justify-center font-black text-xs shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-110">
                    0{idx + 1}
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-sm tracking-wide">
                      {item.title}
                    </p>
                    <p className="text-emerald-100/60 text-xs font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Content: Support/Footer */}
        <div className="relative z-10 pt-6 flex justify-between items-center border-t border-white/10">
          <div className="flex flex-col">
            <span className="text-[10px] text-emerald-300 uppercase tracking-widest font-black">
              Official Provider
            </span>
            <span className="text-white text-sm font-bold tracking-tight opacity-90">
              ntechcreative.com
            </span>
          </div>
          <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md border border-white/20">
            <ShieldCheck className="text-secondary" size={24} />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Interactive Area (Tetap sama namun disesuaikan paddingnya) */}
      <div className="flex-1 p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-slate-50">
        {/* Navigation Tabs */}
        <div className="flex bg-gray-200 p-1 rounded-2xl w-full max-w-md mb-8">
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold ${
              activeTab === "register"
                ? "bg-white text-primary shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <UserPlus size={18} /> Registrasi
          </button>
          <button
            onClick={() => setActiveTab("check")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all font-bold ${
              activeTab === "check"
                ? "bg-white text-primary shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <Search size={18} /> Cek Status
          </button>
        </div>

        {activeTab === "register" ? (
          /* FORM REGISTRASI */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Buku Tamu Digital
            </h2>
            <p className="text-slate-500 mb-8 font-medium">
              Lengkapi formulir di bawah ini untuk memulai kunjungan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Nama */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all pl-10"
                    placeholder="Masukkan nama Anda..."
                  />
                  <UserPlus
                    className="absolute left-3 top-3.5 text-slate-400"
                    size={18}
                  />
                </div>
              </div>

              {/* Input Instansi */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Instansi / Asal
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Contoh: Dinas Pendidikan"
                />
              </div>

              {/* Input Tujuan */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Tujuan Kunjungan
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-white border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="Jelaskan maksud kunjungan Anda..."
                ></textarea>
              </div>

              {/* Upload Foto Identitas */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Foto Identitas (KTP/SIM)
                </label>
                <div className="border-2 border-dashed border-slate-200 bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-primary cursor-pointer transition-colors group">
                  <div className="bg-emerald-50 p-3 rounded-full group-hover:bg-primary transition-colors">
                    <Camera
                      className="text-primary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Klik untuk Ambil Foto
                  </span>
                </div>
              </div>

              {/* Upload Surat Tugas */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  Surat Tugas (Opsional)
                </label>
                <div className="border-2 border-dashed border-slate-200 bg-white rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-secondary cursor-pointer transition-colors group">
                  <div className="bg-amber-50 p-3 rounded-full group-hover:bg-secondary transition-colors">
                    <Upload
                      className="text-secondary group-hover:text-white"
                      size={24}
                    />
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    Upload PDF atau Foto
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-10 w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 hover:bg-primary-hover transition-all active:scale-[0.98]">
              Daftar Kunjungan <ChevronRight size={20} />
            </button>
          </div>
        ) : (
          /* CEK STATUS */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">
              Pantau Status
            </h2>
            <p className="text-slate-500 mb-8 font-medium">
              Masukkan nomor antrean atau nama untuk melihat progres disposisi.
            </p>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-slate-100 border-none p-4 rounded-2xl focus:ring-2 focus:ring-secondary outline-none transition-all pl-12 text-lg font-bold"
                  placeholder="Contoh: TMG-001 atau Nama..."
                />
                <Search
                  className="absolute left-4 top-5 text-slate-400"
                  size={24}
                />
              </div>
              <button className="bg-secondary text-white font-bold py-4 rounded-2xl hover:bg-secondary-hover transition-all">
                Cari Data Kunjungan
              </button>
            </div>

            {/* Dummy Result Area */}
            <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold tracking-tighter shadow-md">
                TMG
              </div>
              <div>
                <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">
                  Status Saat Ini
                </p>
                <p className="text-blue-900 font-bold uppercase tracking-wider">
                  Sedang Diverifikasi Tim TAMENG
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
