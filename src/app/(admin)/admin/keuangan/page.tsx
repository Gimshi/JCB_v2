import { getTransactions, getFinancialSummary } from "@/services/financialService";
import { formatRupiah } from "@/utils/currency";
import { formatShortDate } from "@/utils/date";
import { Plus, ArrowDownLeft, ArrowUpRight, DollarSign, Download, Filter } from "lucide-react";

export default async function AdminKeuanganPage() {
  const transactions = await getTransactions();
  const summary = await getFinancialSummary();

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">
            BENDAHARA GEREJA
          </span>
          <h1 className="font-serif text-3xl font-medium text-primary">
            Pencatatan Keuangan &amp; Laporan Kas
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-lowest border border-outline-variant/30 text-xs font-semibold uppercase tracking-wider text-primary hover:bg-surface-container transition-colors shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Export Laporan</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-surface-variant hover:text-on-surface transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Catat Transaksi</span>
          </button>
        </div>
      </div>

      {/* Account Balances Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summary.accountBalances.map((acc) => (
          <div
            key={acc.accountId}
            className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-sm space-y-2"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
              {acc.accountName}
            </span>
            <div className="font-serif text-2xl text-primary font-medium">
              {formatRupiah(acc.balance)}
            </div>
            <p className="text-[11px] text-secondary">Terbuka &amp; Terverifikasi</p>
          </div>
        ))}
      </div>

      {/* Transactions Table */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="font-serif text-xl text-primary">Riwayat Transaksi Kas</h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-outline-variant/30 text-xs font-medium text-secondary hover:text-primary"
            >
              <Filter className="w-3.5 h-3.5" /> Filter Akun
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-container-low text-secondary uppercase font-semibold border-b border-outline-variant/20">
              <tr>
                <th className="px-6 py-4">Tanggal</th>
                <th className="px-6 py-4">Tipe</th>
                <th className="px-6 py-4">Kategori &amp; Keterangan</th>
                <th className="px-6 py-4">Jumlah (Rupiah)</th>
                <th className="px-6 py-4">Petugas Input</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-secondary font-medium">
                    {formatShortDate(tx.transactionDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {tx.type === "IN" ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-100 text-green-800 text-[10px] font-bold">
                        <ArrowDownLeft className="w-3 h-3" /> KAS MASUK
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 text-red-800 text-[10px] font-bold">
                        <ArrowUpRight className="w-3 h-3" /> KAS KELUAR
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium text-primary block">{tx.category}</span>
                    <span className="text-secondary text-[11px] block mt-0.5">{tx.description}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-serif text-sm font-medium">
                    <span className={tx.type === "IN" ? "text-green-700" : "text-red-700"}>
                      {tx.type === "IN" ? "+" : "-"} {formatRupiah(tx.amount)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-secondary whitespace-nowrap">
                    {tx.createdByName || "Bendahara"}
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
