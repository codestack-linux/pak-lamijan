"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Tambahkan router
import {
  ShieldCheck,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  MonitorSmartphone,
} from "lucide-react";

// DUMMY USERS DATABASE
const DUMMY_USERS = [
  { username: "admin", password: "123", role: "ADMIN", name: "Super Admin" },
  {
    username: "satpam",
    password: "123",
    role: "SATPAM",
    name: "Slamet Riyadi",
  },
  {
    username: "ks",
    password: "123",
    role: "KS",
    name: "Dr. Lamijan, S.Pd., M.Si",
  },
  { username: "tim", password: "123", role: "TIM", name: "Zulfa Fachruddin" },
];

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Mencocokkan input dengan database dummy
    const user = DUMMY_USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Simpan data user & role ke localStorage (simulasi session)
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("userName", user.name);

      // Redirect ke dashboard
      // Note: Di dashboard nanti kita akan cek role ini untuk filter sidebar
      router.push("/dashboard");
    } else {
      setError("Username atau password salah!");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-60"></div>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-900/10 overflow-hidden border border-white relative z-10">
        {/* LEFT SIDE: Visual & Welcome */}
        <div className="bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Mesh Gradient Overlay */}
          <div className="absolute inset-0 animate-mesh bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-700 opacity-90"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Image
                  src="/logo-sekolah.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
              </div>
              <h1 className="text-2xl font-black tracking-tighter">
                TAMENG<span className="text-secondary">.</span>
              </h1>
            </div>

            <h2 className="text-4xl font-black leading-[1.1] mb-6 tracking-tight">
              Tanggap, Aman, <br />
              <span className="text-amber-400">Menghadapi</span> <br />
              Gangguan External
            </h2>
            {/* DESKRIPSI: Penjelasan Visi */}
            <div className="space-y-4 max-w-sm">
              <p className="text-emerald-50 text-lg opacity-90 leading-relaxed font-medium">
                Sistem manajemen keamanan sekolah terintegrasi untuk menciptakan
                lingkungan pendidikan yang kondusif.
              </p>

              {/* Visual Poin untuk mempertegas akronim */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Tanggap", "Aman", "Monitoring", "External"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black bg-white/10 border border-white/20 px-3 py-1 rounded-full uppercase tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary rounded-lg">
                <MonitorSmartphone className="text-white" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Mode Kiosk Aktif</p>
                <Link
                  href="/kiosk"
                  className="text-xs text-emerald-200 hover:text-white flex items-center gap-1 transition-colors underline decoration-emerald-400 underline-offset-4 font-medium uppercase tracking-wider"
                >
                  Buka Halaman Registrasi Tamu <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="p-12 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-3xl font-black text-slate-800 mb-2">
              Selamat Datang
            </h3>
            <p className="text-slate-500 font-medium">
              Silakan masuk untuk melanjutkan.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl text-sm font-bold animate-shake">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">
                Username / ID
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin / satpam / ks / tim"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-primary focus:bg-white outline-none transition-all font-medium"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">
                  Kata Sandi
                </label>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-primary focus:bg-white outline-none transition-all font-medium"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-emerald-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-emerald-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98] mt-4"
            >
              Masuk ke Panel Kontrol <ShieldCheck size={20} />
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <span>© 2024 TAMENG</span>
            <div className="h-1 w-1 bg-slate-200 rounded-full"></div>
            <span>v1.0.4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
