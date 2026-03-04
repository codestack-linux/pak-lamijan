"use client";

import React, { useState } from "react";
import {
  Folder,
  FileText,
  Search,
  Download,
  ChevronRight,
  MoreVertical,
  Calendar,
  Grid,
  List,
  Filter,
  HardDrive,
} from "lucide-react";

// Dummy Data Folder Bulanan
const ARCHIVE_FOLDERS = [
  { month: "Januari", year: "2024", count: 124, size: "12.4 MB" },
  { month: "Februari", year: "2024", count: 98, size: "8.1 MB" },
  { month: "Maret", year: "2024", count: 156, size: "15.9 MB" },
  { month: "April", year: "2024", count: 42, size: "4.2 MB", isCurrent: true },
];

// Dummy Data File dalam Folder yang dipilih
const RECENT_FILES = [
  {
    id: "DOC-001",
    name: "Surat_Tugas_Puskesmas.pdf",
    date: "12 Apr 2024",
    tamu: "Drs. Heru Prasetyo",
    size: "245 KB",
  },
  {
    id: "DOC-002",
    name: "Kunjungan_Bank_BJB.pdf",
    date: "10 Apr 2024",
    tamu: "Ratna Sari",
    size: "180 KB",
  },
  {
    id: "DOC-003",
    name: "Maintenace_Wifi.png",
    date: "09 Apr 2024",
    tamu: "Andi Wijaya",
    size: "1.2 MB",
  },
];

export default function ArsipPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3">
            Arsip Digital{" "}
            <span className="text-[10px] bg-primary text-white px-2 py-1 rounded-lg uppercase tracking-[0.2em]">
              Auto-Cloud
            </span>
          </h1>
          <p className="text-slate-500 font-medium">
            Penyimpanan sistematis dokumen surat tugas tamu.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "grid"
                ? "bg-primary text-white shadow-md"
                : "text-slate-400 hover:bg-slate-50"
            }`}
          >
            <Grid size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-xl transition-all ${
              viewMode === "list"
                ? "bg-primary text-white shadow-md"
                : "text-slate-400 hover:bg-slate-50"
            }`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {/* STORAGE OVERVIEW CARD */}
      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-emerald-900/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center border border-white/10 backdrop-blur-md">
              <HardDrive size={32} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">
                Total Kapasitas Terpakai
              </p>
              <h2 className="text-4xl font-black tabular-nums tracking-tighter">
                42.8{" "}
                <span className="text-lg text-slate-400 uppercase tracking-normal">
                  GB
                </span>
              </h2>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
              <span>Cloud Storage Health</span>
              <span>84% Available</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5 p-0.5">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[16%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* FOLDER NAVIGATION SECTION */}
      <div>
        <div className="flex items-center gap-2 mb-6 px-2">
          <Calendar className="text-primary" size={20} />
          <h3 className="font-black text-slate-800 uppercase tracking-widest text-sm">
            Direktori Berdasarkan Waktu (2024)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHIVE_FOLDERS.map((folder) => (
            <div
              key={folder.month}
              className={`group p-6 rounded-[2rem] border-2 transition-all cursor-pointer shadow-sm relative overflow-hidden
                ${
                  folder.isCurrent
                    ? "bg-emerald-50 border-primary/20 shadow-emerald-100"
                    : "bg-white border-transparent hover:border-slate-200"
                }`}
            >
              <div
                className={`p-4 rounded-2xl inline-block mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3
                ${
                  folder.isCurrent
                    ? "bg-primary text-white shadow-lg shadow-emerald-200"
                    : "bg-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white"
                }`}
              >
                <Folder size={28} />
              </div>
              <h4 className="font-black text-slate-800 text-lg tracking-tight">
                {folder.month}
              </h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                {folder.year} • {folder.count} Dokumen
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[10px] font-black text-primary bg-white px-2 py-1 rounded-lg border border-slate-100">
                  {folder.size}
                </span>
                <ChevronRight
                  className={`transition-transform group-hover:translate-x-2 ${
                    folder.isCurrent ? "text-primary" : "text-slate-300"
                  }`}
                />
              </div>

              {/* Decorative Circle for Current Month */}
              {folder.isCurrent && (
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/10 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RECENT DOCUMENTS TABLE */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 rounded-xl text-white">
              <FileText size={20} />
            </div>
            <h3 className="font-black text-slate-800 uppercase tracking-widest text-xs">
              Dokumen Terbaru di April 2024
            </h3>
          </div>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Cari dalam folder ini..."
              className="pl-12 pr-4 py-2.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 outline-none text-sm font-medium w-full md:w-64 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Nama Dokumen
                </th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Pemilik (Tamu)
                </th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Tanggal Unggah
                </th>
                <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {RECENT_FILES.map((file) => (
                <tr
                  key={file.id}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-50 text-rose-500 rounded-lg group-hover:bg-rose-500 group-hover:text-white transition-colors">
                        <FileText size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {file.name}
                        </p>
                        <p className="text-[10px] text-slate-400 font-medium">
                          {file.size}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold text-slate-600">
                    {file.tamu}
                  </td>
                  <td className="px-8 py-5 text-sm font-medium text-slate-500">
                    {file.date}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-white rounded-xl hover:shadow-md transition-all text-slate-400 hover:text-primary">
                      <Download size={18} />
                    </button>
                    <button className="p-2 hover:bg-white rounded-xl hover:shadow-md transition-all text-slate-400">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
