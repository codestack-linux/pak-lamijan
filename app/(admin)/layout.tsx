import Sidebar from "@/components/Sidebar";
import { Bell } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Sidebar Stay Here */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header / Search Bar */}
        <header className="h-24 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 flex items-center justify-between px-10 shrink-0 z-30 sticky top-0">
          {/* Left Side: Dynamic Title */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-[1px] bg-slate-200 rotate-[20deg] hidden md:block"></div>
            <div>
              <h2 className="text-slate-900 font-black text-2xl tracking-tight flex items-center gap-2">
                System Monitor
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
              </h2>
              <div className="flex items-center gap-2">
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                  Real-time Activity
                </p>
                <span className="text-slate-200 text-[10px]">•</span>
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                  v1.0.4
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Status & Actions */}
          <div className="flex items-center gap-4">
            {/* Server Status Pill */}
            <div className="hidden lg:flex items-center gap-3 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-2xl shadow-sm">
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-wider">
                System Stable
              </span>
            </div>

            {/* Quick Action: Notifications */}
            <button className="relative p-3 bg-white border border-slate-200 rounded-2xl text-slate-500 hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 group">
              <div className="absolute top-2.5 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></div>
              <Bell
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
            </button>

            {/* Date/Time (Optional but useful for Kiosk/Admin) */}
            <div className="hidden md:flex flex-col items-end px-2">
              <p className="text-xs font-black text-slate-800 tracking-tight">
                {new Date().toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                })}
              </p>
              <p className="text-[10px] text-slate-400 font-bold tabular-nums">
                14:52 WIB
              </p>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-10 custom-scrollbar">
          <div className="max-w-full mx-auto animate-in fade-in slide-in-from-bottom-2 duration-700">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
