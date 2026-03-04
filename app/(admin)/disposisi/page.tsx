"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  MapPin,
  Clock,
  FileText,
  ChevronRight,
  ShieldCheck,
  Building2,
  StepForward,
} from "lucide-react";

// Dummy Data Tamu yang sudah lolos verifikasi Tim TAMENG
const INITIAL_APPROVALS = [
  {
    id: "APP-101",
    name: "Drs. Heru Prasetyo",
    agency: "Puskesmas Sukamaju",
    purpose: "Sosialisasi Vaksinasi BIAS",
    time: "10:30",
    priority: "Penting",
  },
  {
    id: "APP-105",
    name: "Ibu Ratna Sari",
    agency: "Bank BJB",
    purpose: "Penawaran Program Tabungan Siswa",
    time: "11:15",
    priority: "Normal",
  },
];

const ROOM_OPTIONS = [
  "Ruang Kepsek",
  "Ruang Tamu Utama",
  "Aula Sekolah",
  "Perpustakaan",
];

export default function DisposisiPage() {
  const [approvals, setApprovals] = useState(INITIAL_APPROVALS);
  const [selectedRoom, setSelectedRoom] = useState(ROOM_OPTIONS[0]);

  const handleAction = (id: string, action: string) => {
    setApprovals(approvals.filter((a) => a.id !== id));
    alert(`Tamu ${action}! Lokasi: ${selectedRoom}`);
  };

  return (
    <div className="max-w-full mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
      {/* HEADER: Ringkas & Elegan */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Persetujuan Tamu
          </h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
            Konfirmasi Disposisi
          </p>
        </div>
        <div className="bg-amber-100 p-3 rounded-2xl border border-amber-200 shadow-sm">
          <ShieldCheck className="text-amber-600" size={24} />
        </div>
      </div>

      {/* LIST TAMU: Card Besar yang mudah di-tap di HP */}
      <div className="space-y-4">
        {approvals.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {/* Info Utama */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-primary shadow-inner shrink-0">
                    <FileText size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-800 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-sm font-bold text-slate-400">
                      {item.agency}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="flex items-center gap-1 text-[10px] font-black bg-slate-100 px-2 py-1 rounded-lg text-slate-500 uppercase tracking-tighter">
                        <Clock size={12} className="text-primary" /> {item.time}{" "}
                        WIB
                      </span>
                      <span
                        className={`text-[10px] font-black px-2 py-1 rounded-lg uppercase tracking-tighter ${
                          item.priority === "Penting"
                            ? "bg-rose-100 text-rose-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maksud Tujuan */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                  Maksud Kunjungan:
                </p>
                <p className="text-sm font-medium text-slate-700 leading-relaxed italic">
                  "{item.purpose}"
                </p>
              </div>

              {/* Dropdown Lokasi */}
              <div className="mb-8">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2 block">
                  Arahkan ke Ruangan:
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                    <Building2 size={18} />
                  </div>
                  <select
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-primary focus:ring-4 focus:ring-emerald-50 outline-none transition-all font-bold text-slate-700 appearance-none shadow-sm cursor-pointer"
                  >
                    {ROOM_OPTIONS.map((room) => (
                      <option key={room} value={room}>
                        {room}
                      </option>
                    ))}
                  </select>
                  <ChevronRight
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 rotate-90 pointer-events-none"
                  />
                </div>
              </div>

              {/* Tombol Aksi: Sangat Besar untuk Jempol */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <button
                  onClick={() => handleAction(item.id, "Diterima")}
                  className="bg-primary hover:bg-emerald-600 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 transition-all active:scale-95"
                >
                  <Check size={18} /> Terima
                </button>
                <button
                  onClick={() => handleAction(item.id, "Diteruskan ke Wakasek")}
                  className="bg-amber-500 hover:bg-amber-600 text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-amber-200 transition-all active:scale-95"
                >
                  <StepForward size={18} /> Wakasek
                </button>
                <button
                  onClick={() => handleAction(item.id, "Ditolak")}
                  className="bg-white hover:bg-slate-50 border-2 border-slate-100 text-rose-500 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <X size={18} /> Tolak
                </button>
              </div>
            </div>
          </div>
        ))}

        {approvals.length === 0 && (
          <div className="py-20 text-center">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Check size={40} />
            </div>
            <h4 className="text-slate-800 font-black text-lg">Semua Beres!</h4>
            <p className="text-slate-400 font-medium text-sm">
              Tidak ada tamu yang menunggu persetujuan Anda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
