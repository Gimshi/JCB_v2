import { getEvents } from "@/services/eventService";
import { formatIndonesianDate } from "@/utils/date";
import { Calendar, Plus, Edit2, Trash2, MapPin } from "lucide-react";

export default async function AdminAcaraPage() {
  const events = await getEvents();

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-secondary">
            ADMINISTRASI KEGIATAN
          </span>
          <h1 className="font-serif text-3xl font-medium text-primary">
            Kelola Acara &amp; Jadwal Ibadah
          </h1>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-surface-variant hover:text-on-surface transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Acara Baru</span>
        </button>
      </div>

      {/* Events Table / List */}
      <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
          <h2 className="font-serif text-xl text-primary">Daftar Semua Kegiatan ({events.length})</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-surface-container-low text-secondary uppercase font-semibold border-b border-outline-variant/20">
              <tr>
                <th className="px-6 py-4">Judul Acara</th>
                <th className="px-6 py-4">Tanggal Pelaksanaan</th>
                <th className="px-6 py-4">Lokasi &amp; Kampus</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {events.map((evt) => (
                <tr key={evt.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary text-sm">
                    {evt.title}
                  </td>
                  <td className="px-6 py-4 text-secondary whitespace-nowrap">
                    {formatIndonesianDate(evt.dateStart, { day: "numeric", month: "short", year: "numeric" })}
                  </td>
                  <td className="px-6 py-4 text-secondary">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
                      <span className="line-clamp-1">{evt.location}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-medium">
                      {evt.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-800 font-semibold uppercase text-[10px]">
                      {evt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-surface-container transition-colors text-secondary hover:text-primary"
                        title="Edit Acara"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-red-50 transition-colors text-secondary hover:text-red-600"
                        title="Hapus Acara"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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
