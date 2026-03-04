"use client";

import React, { useState } from "react";
import {
  UserPlus,
  ShieldCheck,
  ShieldAlert,
  UserCog,
  Search,
  MoreHorizontal,
  Mail,
  Key,
  Trash2,
  CheckCircle2,
  Lock,
  UserCheck,
} from "lucide-react";

// Dummy Data Pengguna Sistem
const INITIAL_USERS = [
  {
    id: 1,
    name: "Drs. H. Mulyadi",
    email: "kepsek@sekolah.sch.id",
    role: "Kepala Sekolah",
    status: "Active",
    avatar: "KS",
  },
  {
    id: 2,
    name: "Zulfa Fachruddin",
    email: "zulfa.tameng@gmail.com",
    role: "Tim TAMENG",
    status: "Active",
    avatar: "ZF",
  },
  {
    id: 3,
    name: "Slamet Riyadi",
    email: "slamet.security@mail.com",
    role: "Satpam",
    status: "Active",
    avatar: "SR",
  },
  {
    id: 4,
    name: "Bambang Pamungkas",
    email: "bambang.sec@mail.com",
    role: "Satpam",
    status: "Inactive",
    avatar: "BP",
  },
];

export default function ManajemenUserPage() {
  const [users, setUsers] = useState(INITIAL_USERS);

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Kepala Sekolah":
        return "bg-amber-100 text-amber-600 border-amber-200";
      case "Tim TAMENG":
        return "bg-emerald-100 text-emerald-600 border-emerald-200";
      case "Satpam":
        return "bg-blue-100 text-blue-600 border-blue-200";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* HEADER: Title & Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">
            Manajemen User
          </h1>
          <p className="text-slate-500 font-medium italic text-sm">
            Kelola otoritas dan hak akses petugas TAMENG.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-200 hover:scale-105 transition-all">
          <UserPlus size={18} /> Tambah Petugas
        </button>
      </div>

      {/* QUICK STATS & SEARCH */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 relative group">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="Cari nama, email, atau jabatan..."
            className="w-full pl-14 pr-4 py-4 bg-white border border-slate-200 rounded-[1.5rem] focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-slate-700 shadow-sm"
          />
        </div>
        <div className="bg-slate-900 rounded-[1.5rem] p-4 flex items-center justify-center gap-3 text-white shadow-xl">
          <UserCheck size={20} className="text-emerald-400" />
          <div className="leading-none">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
              Total Active
            </p>
            <p className="text-lg font-black">
              {users.filter((u) => u.status === "Active").length} Users
            </p>
          </div>
        </div>
      </div>

      {/* USER CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group relative overflow-hidden"
          >
            {/* Action Menu (Top Right) */}
            <div className="absolute top-6 right-6">
              <button className="p-2 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative mb-4">
                <div
                  className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-2xl font-black shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500
                  ${
                    user.role === "Kepala Sekolah"
                      ? "bg-amber-500 text-white"
                      : user.role === "Tim TAMENG"
                      ? "bg-emerald-500 text-white"
                      : "bg-slate-800 text-white"
                  }`}
                >
                  {user.avatar}
                </div>
                {user.status === "Active" && (
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md">
                    <CheckCircle2 size={20} className="text-emerald-500" />
                  </div>
                )}
              </div>

              <h3 className="text-lg font-black text-slate-800 leading-tight mb-1">
                {user.name}
              </h3>
              <div className="flex items-center gap-1 text-slate-400 mb-4">
                <Mail size={12} />
                <span className="text-xs font-medium">{user.email}</span>
              </div>

              {/* Role Badge */}
              <span
                className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 ${getRoleBadge(
                  user.role
                )}`}
              >
                {user.role}
              </span>
            </div>

            {/* Quick Settings Actions */}
            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-50">
              <button className="flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-[10px] font-black text-slate-600 uppercase tracking-tighter transition-all">
                <Key size={14} /> Reset Pass
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-slate-50 hover:bg-rose-50 rounded-xl text-[10px] font-black text-rose-500 uppercase tracking-tighter transition-all">
                <Lock size={14} /> Disable
              </button>
            </div>
          </div>
        ))}

        {/* ADD USER PLACEHOLDER */}
        <div className="border-4 border-dashed border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center p-8 text-slate-300 hover:border-primary/20 hover:text-primary transition-all cursor-pointer group">
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-slate-100 flex items-center justify-center mb-4 group-hover:border-primary group-hover:bg-primary/5 transition-all">
            <UserPlus size={32} />
          </div>
          <p className="font-black text-xs uppercase tracking-widest text-center">
            Rekrut Petugas <br /> Baru
          </p>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <div className="bg-amber-50 rounded-3xl p-6 border border-amber-100 flex items-start gap-4">
        <div className="p-2 bg-amber-500 text-white rounded-xl shadow-sm">
          <ShieldAlert size={20} />
        </div>
        <div>
          <h4 className="font-black text-amber-800 text-sm uppercase tracking-tight">
            Keamanan Otoritas
          </h4>
          <p className="text-xs text-amber-700/70 font-medium leading-relaxed mt-1">
            Hanya Super Admin yang dapat menghapus data Kepala Sekolah. Setiap
            perubahan akses user akan tercatat otomatis di <b>Audit Trail</b>{" "}
            demi menjaga integritas sistem TAMENG.
          </p>
        </div>
      </div>
    </div>
  );
}
