import Link from "next/link";
import { Church, LayoutDashboard, Calendar, DollarSign, ArrowLeft, LogOut, Shield } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-container-low flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-primary text-on-primary p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-8">
          {/* Logo & Church Name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-surface-container-highest/20 flex items-center justify-center border border-white/20">
              <Church className="w-5 h-5 text-secondary-fixed" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-medium text-on-primary">GMS Portal</h2>
              <span className="text-[10px] tracking-widest text-on-primary-container uppercase font-semibold block">
                Internal Admin
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-on-primary hover:bg-white/10 transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-secondary-fixed" />
              <span>Ringkasan</span>
            </Link>
            <Link
              href="/admin/acara"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-on-primary-container hover:text-on-primary hover:bg-white/10 transition-colors"
            >
              <Calendar className="w-4 h-4 text-secondary-fixed" />
              <span>Kelola Acara</span>
            </Link>
            <Link
              href="/admin/keuangan"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-on-primary-container hover:text-on-primary hover:bg-white/10 transition-colors"
            >
              <DollarSign className="w-4 h-4 text-secondary-fixed" />
              <span>Keuangan Kas</span>
            </Link>
          </nav>
        </div>

        {/* User Role Badge & Logout */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-2 px-2 text-xs text-on-primary-container">
            <Shield className="w-3.5 h-3.5 text-secondary-fixed" />
            <span>Role: SUPER_ADMIN</span>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-on-primary-container hover:text-on-primary hover:bg-white/5 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Lihat Website Publik</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
