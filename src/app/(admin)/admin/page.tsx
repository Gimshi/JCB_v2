import { getFinancialSummary } from "@/services/financialService";
import { getEvents } from "@/services/eventService";
import { formatRupiah } from "@/utils/currency";
import { Calendar, DollarSign, ArrowUpRight, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboardPage() {
  const financial = await getFinancialSummary();
  const events = await getEvents();

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">
            MANAJEMEN GEREJA
          </span>
          <h1 className="font-serif text-3xl font-medium text-primary">
            Ringkasan Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/acara"
            className="px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-surface-container transition-colors shadow-sm"
          >
            + Buat Acara Baru
          </Link>
          <Link
            href="/admin/keuangan"
            className="px-4 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-surface-variant hover:text-on-surface transition-colors shadow-sm"
          >
            + Catat Kas Masuk/Keluar
          </Link>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Total Saldo Semua Kas
            </span>
            <Wallet className="w-5 h-5 text-secondary" />
          </div>
          <div className="font-serif text-3xl font-normal text-primary">
            {formatRupiah(financial.netBalance)}
          </div>
          <p className="text-[11px] text-secondary">
            Dari 3 akun kas: Kas Utama, Diakonia, &amp; Pembangunan
          </p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Total Pemasukan (Bulan Ini)
            </span>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="font-serif text-3xl font-normal text-green-700">
            {formatRupiah(financial.totalIncome)}
          </div>
          <p className="text-[11px] text-secondary">
            Persepuluhan, kolekte minggu, &amp; donasi
          </p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              Total Pengeluaran (Bulan Ini)
            </span>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <div className="font-serif text-3xl font-normal text-red-700">
            {formatRupiah(financial.totalExpense)}
          </div>
          <p className="text-[11px] text-secondary">
            Operasional, bantuan santunan, &amp; pos misi
          </p>
        </div>
      </div>

      {/* Account Balances Grid */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl text-primary">Rincian Saldo per Akun Kas</h2>
          <Link
            href="/admin/keuangan"
            className="text-xs font-semibold text-secondary hover:text-primary uppercase tracking-wider flex items-center gap-1"
          >
            Lihat Buku Kas <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {financial.accountBalances.map((acc) => (
            <div
              key={acc.accountId}
              className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-1"
            >
              <span className="text-xs font-medium text-secondary">{acc.accountName}</span>
              <p className="font-serif text-xl text-primary font-medium">
                {formatRupiah(acc.balance)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events Overview */}
      <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-xl text-primary">Acara &amp; Kegiatan Terjadwal</h2>
          <Link
            href="/admin/acara"
            className="text-xs font-semibold text-secondary hover:text-primary uppercase tracking-wider flex items-center gap-1"
          >
            Semua Acara ({events.length}) <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="divide-y divide-outline-variant/20">
          {events.slice(0, 3).map((evt) => (
            <div key={evt.id} className="py-4 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-base text-primary font-medium">{evt.title}</h4>
                <p className="text-xs text-secondary mt-0.5">{evt.location}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-surface-container text-[11px] font-semibold text-secondary uppercase">
                {evt.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
