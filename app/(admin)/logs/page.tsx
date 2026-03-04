"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  History,
  User,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowDownCircle,
  ExternalLink,
  ChevronRight,
  UserCheck,
} from "lucide-react";

// Dummy Data Audit Trail
const AUDIT_LOGS = [
  {
    id: "LOG-8821",
    tamu: "Drs. Heru Prasetyo",
    instansi: "Puskesmas Sukamaju",
    events: [
      {
        status: "Check-out",
        actor: "Sistem (Auto)",
        time: "14:30",
        date: "Today",
        icon: <ArrowDownCircle className="text-rose-500" />,
        desc: "Tamu telah meninggalkan area sekolah.",
      },
      {
        status: "Disposisi Disetujui",
        actor: "Kepala Sekolah",
        time: "11:00",
        date: "Today",
        icon: <ShieldCheck className="text-amber-500" />,
        desc: "Disetujui di Ruang Kepsek.",
      },
      {
        status: "Verifikasi Valid",
        actor: "Tim TAMENG (Zulfa)",
        time: "10:45",
        date: "Today",
        icon: <UserCheck className="text-emerald-500" />,
        desc: "Dokumen Surat Tugas dinyatakan asli.",
      },
      {
        status: "Registrasi Kiosk",
        actor: "Tamu (Mandiri)",
        time: "10:30",
        date: "Today",
        icon: <Clock className="text-blue-500" />,
        desc: "Mendaftar melalui Kiosk Lobi Utama.",
      },
    ],
  },
  {
    id: "LOG-8820",
    tamu: "Andi Wijaya",
    instansi: "CV. Media Tech",
    events: [
      {
        status: "Menunggu Kepsek",
        actor: "Antrean",
        time: "15:20",
        date: "Today",
        icon: <Clock className="text-amber-500" />,
        desc: "Sedang menunggu tanda tangan digital KS.",
      },
      {
        status: "Verifikasi Valid",
        actor: "Tim TAMENG (Admin)",
        time: "15:10",
        date: "Today",
        icon: <UserCheck className="text-emerald-500" />,
        desc: "Kunjungan rutin pemeliharaan server.",
      },
      {
        status: "Registrasi Kiosk",
        actor: "Tamu (Mandiri)",
        time: "15:00",
        date: "Today",
        icon: <Clock className="text-blue-500" />,
        desc: "Check-in di Gerbang Selatan.",
      },
    ],
  },
];

export default function LogAktivitasPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Audit Trail
          </h1>
          <p className="text-slate-500 font-medium italic text-sm">
            Rekam jejak digital seluruh aktivitas kunjungan
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} /> Export Log
          </button>
        </div>
      </div>

      {/* SEARCH & FILTER BAR */}
      <div className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari nama tamu atau ID log..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border-transparent rounded-xl focus:bg-white focus:border-primary outline-none transition-all font-medium text-slate-700"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-100 px-6 py-3 rounded-xl font-bold text-slate-500 flex items-center gap-2 hover:bg-slate-200 transition-all text-sm">
            <Filter size={18} /> Filter Status
          </button>
        </div>
      </div>

      {/* LOGS LIST */}
      <div className="grid grid-cols-1 gap-8">
        {AUDIT_LOGS.map((log) => (
          <div
            key={log.id}
            className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm group"
          >
            {/* Log Header */}
            <div className="p-6 bg-slate-50 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm text-primary">
                  <History size={24} />
                </div>
                <div>
                  <h3 className="font-black text-slate-800">{log.tamu}</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {log.instansi} • {log.id}
                  </p>
                </div>
              </div>
              <button className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:underline">
                Lihat Detail Tamu <ExternalLink size={14} />
              </button>
            </div>

            {/* Timeline Area */}
            <div className="p-8 relative">
              {/* Vertical Line Connector */}
              <div className="absolute left-[47px] top-10 bottom-10 w-0.5 bg-slate-100"></div>

              <div className="space-y-10">
                {log.events.map((event, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-8 group/item"
                  >
                    {/* Icon Node */}
                    <div className="relative z-10 h-10 w-10 bg-white rounded-xl border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover/item:border-primary transition-colors">
                      {event.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-black text-slate-800 text-sm tracking-tight">
                          {event.status}
                        </h4>
                        <span className="text-[10px] font-black text-slate-400 tabular-nums bg-slate-50 px-2 py-1 rounded-md">
                          {event.date}, {event.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="text-primary font-bold">
                          @{event.actor}
                        </span>
                        <span>•</span>
                        <p>{event.desc}</p>
                      </div>
                    </div>

                    {/* Right Indicator */}
                    <ChevronRight size={16} className="text-slate-200 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION / LOAD MORE */}
      <div className="text-center pb-10">
        <button className="px-8 py-3 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
          Muat Log Lebih Lama
        </button>
      </div>
    </div>
  );
}
