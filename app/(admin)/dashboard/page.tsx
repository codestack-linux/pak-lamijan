"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";
import {
  Users,
  UserCheck,
  UserMinus,
  Clock,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  CalendarDays,
} from "lucide-react";

// Dummy Data untuk Grafik Bulanan
const dataGrafik = [
  { name: "Sen", tamu: 45, verif: 38 },
  { name: "Sel", tamu: 52, verif: 48 },
  { name: "Rab", tamu: 38, verif: 35 },
  { name: "Kam", tamu: 65, verif: 60 },
  { name: "Jum", tamu: 48, verif: 40 },
  { name: "Sab", tamu: 20, verif: 15 },
];

// Dummy Data Aktivitas Terbaru
const recentActivities = [
  {
    id: 1,
    user: "Budi Santoso",
    action: "Check-out via Pos 1",
    time: "2 menit yang lalu",
    status: "Out",
  },
  {
    id: 2,
    user: "Siti Aminah",
    action: "Disposisi diterima KS",
    time: "5 menit yang lalu",
    status: "Approved",
  },
  {
    id: 3,
    user: "Andi Wijaya",
    action: "Menunggu Verifikasi Dokumen",
    time: "12 menit yang lalu",
    status: "Pending",
  },
  {
    id: 4,
    user: "Heru Prasetyo",
    action: "Masuk ke Ruang Kepsek",
    time: "20 menit yang lalu",
    status: "In-Progress",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-1000">
      {/* 1. TOP STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Tamu Hari Ini"
          value="128"
          icon={<Users />}
          trend="+12%"
          color="bg-blue-500"
        />
        <StatCard
          title="Sedang Bertamu"
          value="24"
          icon={<UserCheck />}
          trend="Stabil"
          color="bg-emerald-500"
        />
        <StatCard
          title="Menunggu Verifikasi"
          value="7"
          icon={<Clock />}
          trend="-2"
          color="bg-amber-500"
        />
        <StatCard
          title="Rata-rata Durasi"
          value="45m"
          icon={<Activity />}
          trend="+5m"
          color="bg-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. MAIN CHART: Tren Kunjungan Mingguan */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm shadow-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-black text-slate-800 tracking-tight">
                Tren Kunjungan Mingguan
              </h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">
                Perbandingan Tamu vs Verifikasi
              </p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
              <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-[10px] font-black text-primary uppercase">
                Mingguan
              </button>
              <button className="px-4 py-1.5 text-[10px] font-black text-slate-400 uppercase">
                Bulanan
              </button>
            </div>
          </div>

          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataGrafik}>
                <defs>
                  <linearGradient id="colorTamu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f1f5f9"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 600, fill: "#94a3b8" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 600, fill: "#94a3b8" }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "20px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="tamu"
                  stroke="#10b981"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorTamu)"
                />
                <Area
                  type="monotone"
                  dataKey="verif"
                  stroke="#f59e0b"
                  strokeWidth={4}
                  fillOpacity={0}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 3. SIDE: LIVE ACTIVITY FEED */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-emerald-900/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

          <h3 className="text-lg font-black mb-6 flex items-center gap-3 relative z-10">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
            Aktivitas Real-time
          </h3>

          <div className="space-y-6 relative z-10">
            {recentActivities.map((act) => (
              <div key={act.id} className="flex gap-4 group cursor-pointer">
                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-emerald-500 transition-colors">
                  <CalendarDays
                    size={18}
                    className="text-emerald-400 group-hover:text-white"
                  />
                </div>
                <div className="flex-1 border-b border-white/5 pb-4">
                  <p className="text-xs font-black text-slate-100">
                    {act.user}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">
                    {act.action}
                  </p>
                  <p className="text-[9px] text-emerald-400 font-bold mt-2 uppercase tracking-tighter italic">
                    {act.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-white/5">
            Lihat Semua Log
          </button>
        </div>
      </div>

      {/* 4. BOTTOM ROW: QUICK MONITORING */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h4 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">
            Status Gerbang / Kiosk
          </h4>
          <div className="space-y-4">
            <KioskStatus name="Kiosk Utama Lobi" status="Online" load="12%" />
            <KioskStatus
              name="Kiosk Gerbang Selatan"
              status="Offline"
              load="0%"
            />
          </div>
        </div>
        <div className="bg-emerald-50 p-8 rounded-[2.5rem] border border-emerald-100 flex items-center justify-between group overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="text-primary font-black text-2xl tracking-tight">
              Siap Cetak Laporan?
            </h4>
            <p className="text-emerald-700/60 text-sm font-medium mt-1">
              Ekspor data kunjungan bulan ini ke PDF/Excel.
            </p>
            <button className="mt-6 bg-primary text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-emerald-200 hover:scale-105 transition-transform">
              Generate Report
            </button>
          </div>
          <TrendingUp
            size={120}
            className="text-emerald-200 absolute -right-4 -bottom-4 rotate-12 group-hover:rotate-0 transition-transform duration-700"
          />
        </div>
      </div>
    </div>
  );
}

// Sub-komponen StatCard
function StatCard({ title, value, icon, trend, color }: any) {
  const isUp = trend.includes("+");
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`p-3 rounded-2xl text-white shadow-lg ${color} group-hover:scale-110 transition-transform`}
        >
          {React.cloneElement(icon, { size: 20 })}
        </div>
        <div
          className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-lg ${
            isUp
              ? "bg-emerald-50 text-emerald-600"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          {isUp ? <ArrowUpRight size={12} /> : null} {trend}
        </div>
      </div>
      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
        {title}
      </p>
      <h2 className="text-3xl font-black text-slate-800 mt-1">{value}</h2>
    </div>
  );
}

// Sub-komponen Status Kiosk
function KioskStatus({ name, status, load }: any) {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
      <div className="flex items-center gap-3">
        <div
          className={`h-2 w-2 rounded-full ${
            status === "Online" ? "bg-emerald-500 animate-pulse" : "bg-rose-500"
          }`}
        ></div>
        <span className="text-xs font-bold text-slate-700">{name}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
          Load: {load}
        </span>
        <span
          className={`text-[10px] font-black px-2 py-1 rounded-md uppercase ${
            status === "Online"
              ? "text-emerald-600 bg-emerald-100"
              : "text-rose-600 bg-rose-100"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
