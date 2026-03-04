"use client";

import React, { useState } from "react";
import {
  FileSearch,
  CheckCircle,
  XCircle,
  ExternalLink,
  Phone,
  Mail,
  Search,
  ArrowRight,
  Eye,
  FileText,
  ShieldAlert,
} from "lucide-react";

// Dummy Data Surat Tugas Masuk
const INITIAL_VERIFICATIONS = [
  {
    id: "REQ-992",
    name: "Drs. Heru Prasetyo",
    agency: "Puskesmas Sukamaju",
    purpose: "Sosialisasi Vaksinasi BIAS",
    docUrl:
      "https://jdih.babelprov.go.id/sites/default/files/produk-hukum/PERGUB%20NO.%2020%20TAHUN%202017%20LAMPIRAN%2011.pdf", // Contoh gambar dokumen
    timestamp: "10 menit yang lalu",
  },
  {
    id: "REQ-995",
    name: "Andi Wijaya",
    agency: "CV. Media Tech",
    purpose: "Maintenance Jaringan Internet",
    docUrl:
      "https://jdih.babelprov.go.id/sites/default/files/produk-hukum/PERGUB%20NO.%2020%20TAHUN%202017%20LAMPIRAN%2011.pdf",
    timestamp: "25 menit yang lalu",
  },
];

// Dummy Database Kontak Eksternal
const EXTERNAL_CONTACTS = [
  {
    name: "Dinas Pendidikan Kota",
    phone: "021-555667",
    category: "Pemerintah",
  },
  { name: "PT. Telkom Indonesia", phone: "021-147889", category: "Provider" },
];

export default function VerifikasiPage() {
  const [requests, setRequests] = useState(INITIAL_VERIFICATIONS);
  const [selectedDoc, setSelectedDoc] = useState<any>(null);

  const handleAction = (id: string, action: "approve" | "reject") => {
    // Simulasi hapus dari list setelah diproses
    setRequests(requests.filter((r) => r.id !== id));
    setSelectedDoc(null);
    alert(
      action === "approve"
        ? "Berhasil diteruskan ke Kepala Sekolah"
        : "Kunjungan ditolak"
    );
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* COLUMN 1 & 2: INBOX VERIFIKASI */}
      <div className="xl:col-span-2 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              Inbox Verifikasi
            </h1>
            <p className="text-slate-500 font-medium">
              Saring dokumen dan validasi kelayakan tamu.
            </p>
          </div>
          <div className="bg-emerald-100 text-primary px-4 py-2 rounded-2xl font-black text-sm flex items-center gap-2">
            <FileSearch size={18} /> {requests.length} Tugas Baru
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {requests.map((item) => (
            <div
              key={item.id}
              className={`p-6 bg-white rounded-[2rem] border-2 transition-all cursor-pointer shadow-sm flex items-center justify-between group ${
                selectedDoc?.id === item.id
                  ? "border-primary"
                  : "border-transparent hover:border-emerald-100"
              }`}
              onClick={() => setSelectedDoc(item)}
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <FileText size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black bg-slate-800 text-white px-2 py-0.5 rounded uppercase tracking-widest">
                      {item.id}
                    </span>
                    <span className="text-xs text-slate-400 font-bold italic">
                      {item.timestamp}
                    </span>
                  </div>
                  <h3 className="font-black text-slate-800 text-lg leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {item.agency}
                  </p>
                </div>
              </div>
              <ArrowRight
                className={`transition-transform ${
                  selectedDoc?.id === item.id
                    ? "translate-x-2 text-primary"
                    : "text-slate-300"
                }`}
              />
            </div>
          ))}

          {requests.length === 0 && (
            <div className="py-20 text-center bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
              <ShieldAlert size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                Semua dokumen telah diperiksa
              </p>
            </div>
          )}
        </div>
      </div>

      {/* COLUMN 3: DETAIL, PREVIEW & QUICK CONTACTS */}
      <div className="space-y-6 overflow-hidden">
        {/* PREVIEW CARD */}
        <div className="bg-slate-900 rounded-[2.5rem] p-6 text-white h-[calc(100vh-12rem)] min-h-[580px] flex flex-col shadow-2xl relative overflow-hidden">
          {selectedDoc ? (
            <div className="relative z-10 flex flex-col h-full animate-in zoom-in-95 duration-300">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2 shrink-0">
                <Eye className="text-secondary" size={18} /> Detail Dokumen
              </h3>

              {/* SCROLLABLE AREA: Agar foto tidak mendorong tombol ke bawah */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar-dark space-y-4 mb-4">
                {/* Foto Surat Tugas - Ukuran Diperkecil & Max Height */}
                {/* Foto atau PDF Surat Tugas */}
                <div className="relative w-full h-64 bg-white rounded-xl overflow-hidden group border-2 border-white/10 shadow-inner">
                  {selectedDoc.docUrl.endsWith(".pdf") ? (
                    <iframe
                      src={`${selectedDoc.docUrl}#toolbar=0&navpanes=0`}
                      className="w-full h-full border-none"
                    />
                  ) : (
                    <img
                      src={selectedDoc.docUrl}
                      alt="Surat Tugas"
                      className="w-full h-auto min-h-[200px] object-contain bg-slate-800"
                    />
                  )}

                  {/* Overlay View Fullscreen tetap ada */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={selectedDoc.docUrl}
                      target="_blank"
                      className="text-[9px] font-black bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/30 text-white"
                    >
                      Buka Dokumen Asli
                    </a>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.2em]">
                      Nama Tamu
                    </label>
                    <p className="text-sm font-bold text-slate-100">
                      {selectedDoc.name}
                    </p>
                  </div>
                  <div>
                    <label className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.2em]">
                      Maksud Tujuan
                    </label>
                    <p className="text-xs font-medium leading-relaxed text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                      {selectedDoc.purpose}
                    </p>
                  </div>
                </div>
              </div>

              {/* FIXED ACTION BUTTONS: Selalu terlihat di bawah */}
              <div className="mt-auto pt-4 border-t border-white/10 grid grid-cols-2 gap-3 shrink-0">
                <button
                  onClick={() => handleAction(selectedDoc.id, "reject")}
                  className="group bg-white/5 hover:bg-rose-600 border border-white/10 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all flex flex-col items-center gap-1"
                >
                  <XCircle
                    className="group-hover:scale-110 transition-transform text-rose-500 group-hover:text-white"
                    size={18}
                  />
                  Tolak
                </button>
                <button
                  onClick={() => handleAction(selectedDoc.id, "approve")}
                  className="group bg-primary hover:bg-emerald-400 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-emerald-900/40 flex flex-col items-center gap-1"
                >
                  <CheckCircle
                    className="group-hover:scale-110 transition-transform"
                    size={18}
                  />
                  Validasi
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <FileSearch size={40} />
              </div>
              <p className="font-bold text-xs uppercase tracking-widest leading-loose">
                Pilih satu antrean <br /> untuk verifikasi
              </p>
            </div>
          )}
        </div>

        {/* DATABASE KONTAK EKSTERNAL - Dikecilkan paddingnya */}
        <div className="bg-white rounded-[2rem] border border-slate-200 p-5 shadow-sm">
          <h4 className="font-black text-slate-800 mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
            <Phone size={14} className="text-secondary" /> Kontak Instansi
          </h4>
          <div className="space-y-3">
            {EXTERNAL_CONTACTS.map((contact, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md transition-all"
              >
                <div>
                  <p className="text-xs font-black text-slate-800">
                    {contact.name}
                  </p>
                  <p className="text-[10px] font-bold text-slate-400">
                    {contact.phone}
                  </p>
                </div>
                <button className="p-2 bg-white text-primary border border-slate-200 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <Phone size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
