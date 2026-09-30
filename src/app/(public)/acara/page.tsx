import { getEvents } from "@/services/eventService";
import { formatIndonesianDate, formatTimeWIB } from "@/utils/date";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function AcaraPage() {
  const events = await getEvents();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <section className="w-full bg-primary text-on-primary py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary-fixed">
            AGENDA &amp; KEGIATAN GEREJA
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal">
            Jadwal Acara &amp; Kegerakan Rohani Mendatang
          </h1>
          <p className="text-sm sm:text-base text-on-primary-container max-w-xl mx-auto font-light">
            Temukan berbagai seminar pembinaan rohani, konser pujian penyembahan, retret pemuda, dan kegiatan persekutuan jemaat.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="w-full bg-surface py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <div className="aspect-[16/10] relative overflow-hidden bg-surface-container">
                    <img
                      src={event.bannerUrl || "/images/asset-church.jpg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-secondary font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatIndonesianDate(event.dateStart)}</span>
                    </div>

                    <h3 className="font-serif text-xl text-primary group-hover:text-secondary transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-xs text-secondary line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="pt-2 text-xs text-secondary flex items-start gap-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/ibadah#reservasi`}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 rounded-full bg-surface-container text-primary text-xs font-semibold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                  >
                    <span>Informasi &amp; Pendaftaran</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
