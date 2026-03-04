"use client";

import React, { useState } from "react";
import {
  UserCheck,
  LogOut,
  Clock,
  MapPin,
  Search,
  Filter,
  UserPlus,
  ArrowRightLeft,
  MoreVertical,
  CheckCircle2,
} from "lucide-react";

// Dummy Data untuk Antrean & Tamu Aktif
const INITIAL_QUEUE = [
  {
    id: "TMG-001",
    name: "Budi Santoso",
    agency: "PT. Maju Bersama",
    timeIn: "08:45",
    status: "Waiting",
    photo: "https://i.pravatar.cc/150?u=1",
  },
  {
    id: "TMG-002",
    name: "Siti Aminah",
    agency: "Dinas Pendidikan",
    timeIn: "09:10",
    status: "Waiting",
    photo: "https://i.pravatar.cc/150?u=2",
  },
];

const INITIAL_ACTIVE_GUESTS = [
  {
    id: "TMG-000",
    name: "Rahmat Hidayat",
    agency: "Kemenag",
    checkIn: "07:30",
    location: "Ruang Kepsek",
    photo: "https://i.pravatar.cc/150?u=3",
  },
];

export default function SatpamPage() {
  const [queue, setQueue] = useState(INITIAL_QUEUE);
  const [activeGuests, setActiveGuests] = useState(INITIAL_ACTIVE_GUESTS);

  // Fungsi Konfirmasi Kedatangan (Pindah dari Antrean ke Aktif)
  const handleCheckIn = (guest: any) => {
    setQueue(queue.filter((q) => q.id !== guest.id));
    setActiveGuests([
      ...activeGuests,
      {
        ...guest,
        checkIn: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        location: "Menunggu Disposisi",
      },
    ]);
  };

  // Fungsi Check-out (Hapus dari daftar aktif)
  const handleCheckOut = (id: string) => {
    setActiveGuests(activeGuests.filter((g) => g.id !== id));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Pos Keamanan
          </h1>
          <p className="text-slate-500 font-medium">
            Manajemen Arus Masuk & Keluar Tamu Real-time
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Filter size={18} /> Filter
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-2xl font-bold hover:bg-primary-hover shadow-lg shadow-emerald-200 transition-all">
            <UserPlus size={18} /> Input Manual
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT: DAFTAR ANTREAN MASUK (Baru Daftar di Kiosk) */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-emerald-50/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500 rounded-lg text-white shadow-md">
                <ArrowRightLeft size={20} />
              </div>
              <h3 className="font-black text-slate-800">Antrean Masuk</h3>
            </div>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">
              {queue.length} Menunggu
            </span>
          </div>

          <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
            {queue.map((guest) => (
              <div
                key={guest.id}
                className="group p-4 rounded-3xl border border-slate-100 hover:border-primary/30 hover:bg-emerald-50/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 shrink-0">
                    <img
                      src={guest.photo}
                      className="rounded-2xl object-cover w-full h-full border-2 border-white shadow-md"
                      alt="Guest"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-lg border-2 border-white">
                      <Clock size={10} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-slate-800 leading-tight">
                        {guest.name}
                      </h4>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                        {guest.id}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mb-2">
                      {guest.agency}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-emerald-600 font-bold uppercase">
                      <CheckCircle2 size={12} /> Terdaftar pada {guest.timeIn}
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleCheckIn(guest)}
                    className="bg-primary text-white py-2.5 rounded-xl font-bold text-xs hover:bg-primary-hover transition-all flex items-center justify-center gap-2"
                  >
                    Konfirmasi Kedatangan
                  </button>
                  <button className="bg-slate-100 text-slate-600 py-2.5 rounded-xl font-bold text-xs hover:bg-slate-200 transition-all border border-slate-200/50">
                    Cek Dokumen
                  </button>
                </div>
              </div>
            ))}
            {queue.length === 0 && (
              <div className="py-12 text-center text-slate-400 font-medium italic">
                Belum ada antrean masuk saat ini.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: TAMU DI DALAM AREA (Aktif & Perlu Check-out) */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-amber-50/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500 rounded-lg text-white shadow-md">
                <MapPin size={20} />
              </div>
              <h3 className="font-black text-slate-800">Tamu di Lokasi</h3>
            </div>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase">
              {activeGuests.length} Aktif
            </span>
          </div>

          <div className="p-4 space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar">
            {activeGuests.map((guest) => (
              <div
                key={guest.id}
                className="p-5 rounded-3xl bg-slate-50 border border-slate-100 relative group overflow-hidden"
              >
                {/* Accent Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full -mr-8 -mt-8"></div>

                <div className="flex items-start justify-between relative z-10">
                  <div className="flex gap-4">
                    <img
                      src={guest.photo}
                      className="w-12 h-12 rounded-xl object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all"
                      alt="Active Guest"
                    />
                    <div>
                      <h4 className="font-black text-slate-800">
                        {guest.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        {guest.agency}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                          <Clock size={12} className="text-amber-500" /> Masuk:{" "}
                          {guest.checkIn}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                          <MapPin size={12} className="text-primary" />{" "}
                          {guest.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCheckOut(guest.id)}
                    className="p-2.5 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all shadow-sm border border-rose-100"
                    title="Check-out Tamu"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
