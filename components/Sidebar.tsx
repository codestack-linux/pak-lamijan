"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  UserCheck,
  FileText,
  History,
  LogOut,
  ShieldCheck,
  ChevronRight,
  Navigation,
  User,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [userName, setUserName] = useState<string>("User");

  useEffect(() => {
    // Ambil data role dan nama dari localStorage
    const savedRole = localStorage.getItem("userRole") || "";
    const savedName = localStorage.getItem("userName") || "Petugas";
    setRole(savedRole);
    setUserName(savedName);
  }, []);

  // Definisi Menu dengan properti 'allowedRoles'
  const adminMenus = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-blue-500",
      allowedRoles: ["ADMIN", "TIM", "KS", "SATPAM"],
    },
    {
      name: "Verifikasi Tamu",
      icon: UserCheck,
      href: "/verifikasi",
      badge: "4",
      color: "text-emerald-500",
      allowedRoles: ["ADMIN", "TIM"],
    },
    {
      name: "Disposisi KS",
      icon: ShieldCheck,
      href: "/disposisi",
      badge: "2",
      color: "text-amber-500",
      allowedRoles: ["ADMIN", "KS"],
    },
    {
      name: "Arsip Dokumen",
      icon: FileText,
      href: "/arsip",
      color: "text-purple-500",
      allowedRoles: ["ADMIN", "TIM"],
    },
    {
      name: "Log Aktivitas",
      icon: History,
      href: "/logs",
      color: "text-slate-500",
      allowedRoles: ["ADMIN"],
    },
  ];

  const securityMenus = [
    {
      name: "Pos Keamanan",
      icon: Navigation,
      href: "/satpam",
      color: "text-orange-500",
      allowedRoles: ["ADMIN", "SATPAM"],
    },
  ];

  // Fungsi Logout
  const handleLogout = () => {
    localStorage.clear();
    router.push("/");
  };

  // Logika Filtering Menu
  const filteredAdminMenus = adminMenus.filter((menu) =>
    menu.allowedRoles.includes(role)
  );
  const filteredSecurityMenus = securityMenus.filter((menu) =>
    menu.allowedRoles.includes(role)
  );

  return (
    <aside className="w-72 bg-gradient-to-b from-emerald-50/50 via-white to-white border-r border-slate-200/60 h-screen flex flex-col relative z-20 shadow-[20px_0_50px_rgba(0,0,0,0.02)]">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

      <div className="p-8 pb-4">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center border border-slate-100 transition-transform group-hover:-rotate-6">
              <Image
                src="/logo-sekolah.png"
                alt="Logo"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-800 tracking-tighter leading-none">
              TAMENG<span className="text-secondary">.</span>
            </h1>
            <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-1 opacity-70">
              Digital Guard
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-4 custom-scrollbar">
        {/* SECTION: MAIN MANAGEMENT (Filtered) */}
        {filteredAdminMenus.length > 0 && (
          <div className="mb-6">
            <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
              Main Management
            </p>
            <nav className="space-y-1.5">
              {filteredAdminMenus.map((item) => (
                <MenuItem
                  key={item.name}
                  item={item}
                  isActive={pathname === item.href}
                />
              ))}
            </nav>
          </div>
        )}

        {/* SECTION: SECURITY OPS (Filtered) */}
        {filteredSecurityMenus.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between px-4 mb-3">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Security Ops
              </p>
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
            </div>
            <nav className="space-y-1.5">
              {filteredSecurityMenus.map((item) => (
                <MenuItem
                  key={item.name}
                  item={item}
                  isActive={pathname === item.href}
                />
              ))}
            </nav>
          </div>
        )}

        {/* SECTION: SETTINGS (Admin Only) */}
        {role === "ADMIN" && (
          <div className="pt-4 border-t border-slate-50">
            <MenuItem
              item={{
                name: "Management Users",
                icon: User,
                href: "/settings/users",
                color: "text-slate-400",
              }}
              isActive={pathname === "/settings/users"}
            />
          </div>
        )}
      </div>

      {/* User Profile Section */}
      <div className="p-4 mt-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 rounded-[2rem] p-5 shadow-xl shadow-slate-200 group">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-colors"></div>

          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-600 p-[2px]">
                  <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white text-[10px] font-black">
                    {role.substring(0, 3)}
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-white text-xs font-black truncate uppercase">
                  {userName}
                </p>
                <p className="text-emerald-400/70 text-[10px] font-bold uppercase tracking-wider">
                  {role} Mode
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:text-secondary"
            >
              <LogOut size={14} /> Keluar Sistem
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function MenuItem({ item, isActive }: { item: any; isActive: boolean }) {
  return (
    <Link
      href={item.href}
      className={`
        group flex items-center justify-between p-3 rounded-2xl transition-all duration-300
        ${
          isActive
            ? "bg-emerald-50 shadow-[0_10px_20px_-5px_rgba(16,185,129,0.1)]"
            : "hover:bg-slate-50 text-slate-500 hover:text-slate-900"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2.5 rounded-xl transition-all duration-500 ${
            isActive
              ? "bg-primary text-white shadow-lg shadow-emerald-200 rotate-0"
              : `bg-slate-50 ${item.color} group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white group-hover:shadow-md`
          }`}
        >
          <item.icon size={18} strokeWidth={isActive ? 3 : 2} />
        </div>
        <span
          className={`text-sm tracking-tight transition-all ${
            isActive ? "font-black text-primary" : "font-bold text-slate-500"
          }`}
        >
          {item.name}
        </span>
      </div>

      {item.badge ? (
        <span className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-20"></span>
          <span className="relative inline-flex items-center justify-center rounded-lg h-5 w-5 bg-secondary text-[10px] font-black text-white shadow-sm">
            {item.badge}
          </span>
        </span>
      ) : (
        isActive && <ChevronRight size={14} className="text-primary" />
      )}
    </Link>
  );
}
