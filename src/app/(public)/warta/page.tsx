import { Newspaper, Calendar, Bell, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

const ANNOUNCEMENTS = [
  {
    title: "Pelaksanaan Baptisan Kudus Air Gelombang I",
    date: "Minggu, 12 Oktober 2026",
    category: "Sakramen",
    summary: "Bagi jemaat yang rindu menerima baptisan selam, kelas orientasi baptisan akan diadakan setiap hari Sabtu pukul 15.00 WIB.",
  },
  {
    title: "Pendaftaran Penyerahan Anak & Balita",
    date: "Minggu, 19 Oktober 2026",
    category: "Keluarga",
    summary: "Didoakan langsung oleh Gembala Sidang bagi para orang tua yang rindu mempersembahkan anak ke dalam tangan perlindungan Tuhan.",
  },
  {
    title: "Aksi Donor Darah Peduli Sesama Sinode GMS",
    date: "Sabtu, 25 Oktober 2026",
    category: "Diakonia Sosial",
    summary: "Bekerjasama dengan PMI Jawa Timur bertempat di Selasar Barat Lantai 4 Pakuwon Mall. Terbuka untuk umum.",
  },
];

export default function WartaPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="w-full bg-primary text-on-primary py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary-fixed">
            WARTA JEMAAT &amp; PENGUMUMAN
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Berita &amp; Informasi Resmi Gereja Mawar Sharon
          </h1>
          <p className="text-sm sm:text-base text-on-primary-container max-w-xl mx-auto font-light">
            Dapatkan perkembangan kegiatan seputar pelayanan, kelas pembinaan rohani, dan pengumuman sinode terkini.
          </p>
        </div>
      </section>

      {/* Announcements List */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
            <h2 className="font-serif text-2xl text-primary">Warta Minggu Ini</h2>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest hover:text-secondary"
            >
              <Download className="w-4 h-4" /> Download PDF Warta
            </button>
          </div>

          <div className="space-y-4">
            {ANNOUNCEMENTS.map((item, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-secondary-fixed text-primary">
                      {item.category}
                    </span>
                    <span className="text-xs text-secondary flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {item.date}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-primary">{item.title}</h3>
                  <p className="text-xs text-secondary leading-relaxed max-w-2xl">
                    {item.summary}
                  </p>
                </div>

                <Link
                  href="/pelayanan"
                  className="text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1 shrink-0"
                >
                  Detail Info <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
