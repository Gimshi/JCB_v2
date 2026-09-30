"use client";

import { useState } from "react";
import { Building, QrCode, ShieldCheck, Heart, Copy, Check, ArrowRight } from "lucide-react";

const BANK_ACCOUNTS = [
  {
    name: "Kas Operasional & Persepuluhan",
    bank: "BCA (Bank Central Asia)",
    accNumber: "088-789-9911",
    holder: "Sinode Gereja Mawar Sharon",
    desc: "Untuk perpuluhan rutin jemaat dan kebutuhan operasional ibadah.",
  },
  {
    name: "Kas Diakonia & Bantuan Sosial",
    bank: "BCA (Bank Central Asia)",
    accNumber: "088-789-9922",
    holder: "Sinode Gereja Mawar Sharon - Diakonia",
    desc: "Disalurkan bagi jemaat prasejahtera, beasiswa anak, dan bantuan kesehatan.",
  },
  {
    name: "Kas Perintisan Pos Misi Nusantara",
    bank: "Mandiri",
    accNumber: "142-00-9988776-1",
    holder: "Yayasan Mawar Sharon Misi",
    desc: "Pembangunan pos gereja baru dan tunjangan para perintis di pelosok Nusantara.",
  },
];

export default function MemberiPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-primary text-on-primary py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary-fixed">
            GIVING WITH JOY • PERSEMBAHAN &amp; PERSEPULUHAN
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Memberi dengan Sukacita, Memperluas Kerajaan Allah
          </h1>
          <p className="text-base sm:text-lg text-on-primary-container max-w-2xl mx-auto font-light leading-relaxed">
            “Bawalah seluruh persembahan persepuluhan itu ke dalam rumah perbendaharaan, supaya ada makanan di rumah-Ku...” (Maleakhi 3:10). Setiap benih yang Anda tabur dikelola dengan akuntabilitas tertinggi.
          </p>
        </div>
      </section>

      {/* Bank Accounts Grid */}
      <section className="w-full bg-surface py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              REKENING RESMI
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
              Rekening Bank Resmi Sinode
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Harap pastikan nama penerima transfer sesuai dengan yang tertera di bawah ini.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BANK_ACCOUNTS.map((acc, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                      {acc.bank}
                    </span>
                    <h3 className="font-serif text-xl text-primary mt-1">{acc.name}</h3>
                  </div>

                  <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-secondary font-semibold">
                        Nomor Rekening
                      </span>
                      <p className="font-mono text-base font-bold text-primary">{acc.accNumber}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(acc.accNumber, idx)}
                      className="p-2 rounded-lg bg-surface hover:bg-surface-container-high transition-colors"
                      title="Salin Nomor Rekening"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-secondary" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-secondary leading-relaxed">{acc.desc}</p>
                  <p className="text-[11px] font-medium text-primary">A.n. {acc.holder}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QRIS & Financial Transparency Section */}
      <section id="laporan" className="w-full bg-surface-container-low py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* QRIS Box */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/30 shadow-lg text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed/50 text-secondary text-xs font-semibold">
              <QrCode className="w-4 h-4" /> QRIS NASIONAL
            </div>
            <h3 className="font-serif text-2xl text-primary">Scan QRIS Persembahan</h3>
            <p className="text-xs text-secondary">
              Mendukung semua aplikasi e-wallet (GoPay, OVO, Dana) dan mobile banking di seluruh Indonesia.
            </p>
            <div className="p-4 bg-white rounded-2xl border border-outline-variant/30 inline-block shadow-inner">
              <div className="w-48 h-48 bg-surface-container flex items-center justify-center rounded-xl border border-dashed border-outline-variant">
                <QrCode className="w-24 h-24 text-primary opacity-80" />
              </div>
            </div>
            <p className="text-[11px] font-semibold text-secondary uppercase tracking-widest">
              Gereja Mawar Sharon • NMID: ID1029384756
            </p>
          </div>

          {/* Audit & Transparency Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              AKUNTABILITAS &amp; INTEGRITAS KAS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary">
              Pengelolaan Transparan Berstandar Akuntansi Publik
            </h2>
            <p className="text-sm text-secondary leading-relaxed">
              Sinode Gereja Mawar Sharon mematuhi prinsip tata kelola keuangan yang jujur, terbuka, dan bertanggung jawab. Seluruh pemasukan dan pengeluaran dicatat secara tersistem dan diaudit setiap tahun oleh Kantor Akuntan Publik (KAP) independen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-primary">Opini WTP Berturut-turut</h4>
                  <p className="text-xs text-secondary mt-1">
                    Laporan keuangan diaudit dengan predikat tertinggi Wajar Tanpa Pengecualian.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-base text-primary">Tepat Sasaran</h4>
                  <p className="text-xs text-secondary mt-1">
                    Setiap alokasi dana misi dan diakonia diawasi oleh komite penatua gereja.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
