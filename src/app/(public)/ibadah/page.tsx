"use client";

import { useState } from "react";
import { Clock, MapPin, Video, CheckCircle, ChevronDown, ArrowRight, Radio } from "lucide-react";

const SERVICES = [
  {
    id: "ku-1",
    name: "KU 01 - Ibadah Fajar",
    time: "07.00 - 08.45 WIB",
    location: "Auditorium Utama, Pakuwon Mall Lt. 4",
    lead: "Praise & Worship Kontemplatif",
    desc: "Memulai hari pertama dalam minggu dengan keheningan hadirat Tuhan dan pengurapan pagi yang segar.",
    tags: ["Onsite", "EagleKidz Pratama"],
    online: false,
  },
  {
    id: "ku-2",
    name: "KU 02 - Ibadah Raya Pagi",
    time: "10.00 - 12.00 WIB",
    location: "Grand Lotus Ballroom & Live YouTube",
    lead: "Full Orchestra & Choir GMS Worship",
    desc: "Ibadah raya utama keluarga dengan khotbah tematik berseri, pelayanan altar call, dan penumpangan tangan.",
    tags: ["Onsite", "Live Global Stream", "Semua Kelas Anak"],
    online: true,
  },
  {
    id: "ku-3",
    name: "KU 03 - Ibadah Sore",
    time: "16.00 - 18.00 WIB",
    location: "Auditorium Utama & Selasar Kampus",
    lead: "Dynamic Contemporary Praise",
    desc: "Dipersiapkan khusus bagi keluarga muda dan profesional dengan suasana ibadah hangat dan penuh kuasa firman.",
    tags: ["Onsite", "EagleKidz Intermediate"],
    online: false,
  },
  {
    id: "aog",
    name: "Army of God (AOG) Youth",
    time: "Sabtu • 17.00 - 19.00 WIB",
    location: "Main Sanctuary & Regional Centers",
    lead: "AOG Movement Worship",
    desc: "Kebangunan rohani anak muda, pelajar SMP/SMA dan universitas. Diperlengkapi menjadi agen transformasi dunia.",
    tags: ["Onsite", "Live Stream", "Komunitas Pemuda"],
    online: true,
  },
];

export default function IbadahPage() {
  const [selectedCampus, setSelectedCampus] = useState("Surabaya Main Campus - Pakuwon");

  return (
    <div className="flex flex-col w-full">
      {/* 1. Split-Screen Hero */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Deep Charcoal Editorial Card */}
          <div className="lg:col-span-6 bg-primary-container text-on-primary rounded-2xl p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden shadow-xl border border-white/10">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary-fixed">
                  GMS WORSHIP EXPERIENCE
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-on-primary tracking-tight leading-tight">
                Hadirat Tuhan yang <span className="italic text-secondary-fixed">Mengubahkan</span> Hidup.
              </h1>
              <p className="text-base sm:text-lg text-inverse-on-surface/85 max-w-xl font-light leading-relaxed">
                Perjumpaan kudus yang menyalakan iman, memulihkan keluarga, dan meneguhkan panggilan hidup melalui pujian yang intim, firman yang hidup, serta persekutuan jemaat di seluruh dunia.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#jadwal"
                  className="px-6 py-3.5 rounded-full bg-surface text-primary text-xs font-semibold uppercase tracking-[0.14em] hover:bg-surface-variant transition-all duration-300 shadow-md"
                >
                  Lihat Jadwal Ibadah Minggu
                </a>
                <a
                  href="#streaming"
                  className="px-6 py-3.5 rounded-full bg-transparent text-on-primary text-xs font-semibold uppercase tracking-[0.14em] border border-white/20 hover:bg-white/10 transition-colors inline-flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  Live Streaming
                </a>
              </div>
            </div>

            {/* Key Stats Bar */}
            <div className="pt-10 mt-8 border-t border-white/15 grid grid-cols-3 gap-4 relative z-10">
              <div>
                <div className="font-serif text-3xl text-on-primary">100+</div>
                <div className="text-[11px] font-semibold uppercase text-on-primary-container tracking-wider mt-1">
                  Kampus Global
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-on-primary">5 Sesi</div>
                <div className="text-[11px] font-semibold uppercase text-on-primary-container tracking-wider mt-1">
                  Ibadah Minggu
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-on-primary">4K HD</div>
                <div className="text-[11px] font-semibold uppercase text-on-primary-container tracking-wider mt-1">
                  Live Global
                </div>
              </div>
            </div>
          </div>

          {/* Right: Architectural Sanctuary Portrait */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[460px] rounded-2xl overflow-hidden shadow-lg group bg-surface-container-highest/10">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Main Sanctuary"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-5O0SU4LWSQptOb2ya1GFInkY-vjaxabIs7KSiqW4qQeG05ul14hNI32F7Xn9K2zvAPG1xLIqPU3yjH87EtUP2qv_cMjiOMy_aW1I_zEUyQV4vhiKTQit4bNVy9A49ZAKWqWzYZyZY8Ey8yJnefn15axRBOBV-E-GvfRqLgDRWoVemf8Qee3iOVa5v1QKl8Vfxgav-zsTh0ZD9h31u8SZ_EcbpJubhJH9sDCt_A5Y_lHi3vW_vDg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-surface/90 backdrop-blur-md shadow-sm">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-on-surface">
                  MAIN SANCTUARY
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-on-primary">
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-normal">
                    Grand Lotus Hall, Pakuwon Mall
                  </p>
                  <p className="text-xs text-surface-variant/90 tracking-wide mt-0.5">
                    Surabaya Main Campus • Kapasitas 4.500 Kursi
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating Campus Selector Capsule */}
      <section className="w-full max-w-6xl mx-auto px-4 -mt-6 z-20">
        <div className="bg-surface-container-lowest rounded-2xl md:rounded-full p-4 shadow-xl border border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 px-3">
            <div className="py-2 md:py-0 md:px-5 flex flex-col justify-center">
              <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                LOKASI KAMPUS
              </label>
              <div className="relative mt-1">
                <select
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  className="w-full bg-transparent text-sm font-medium text-on-surface focus:outline-none cursor-pointer appearance-none pr-6"
                >
                  <option>Surabaya Main Campus - Pakuwon</option>
                  <option>Surabaya Central - Grand City</option>
                  <option>Jakarta Barat - Central Park</option>
                  <option>Jakarta Utara - PIK Avenue</option>
                  <option>GMS Online Global Stream</option>
                </select>
                <ChevronDown className="w-4 h-4 text-secondary absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="py-2 md:py-0 md:px-5 flex flex-col justify-center">
              <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                SESI HARI MINGGU
              </label>
              <div className="relative mt-1">
                <select className="w-full bg-transparent text-sm font-medium text-on-surface focus:outline-none cursor-pointer appearance-none pr-6">
                  <option>KU 02 - Pagi (10.00 WIB)</option>
                  <option>KU 01 - Fajar (07.00 WIB)</option>
                  <option>KU 03 - Sore (16.00 WIB)</option>
                  <option>AOG Youth (Sabtu 17.00 WIB)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-secondary absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="py-2 md:py-0 md:px-5 flex flex-col justify-center">
              <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                KEHADIRAN
              </label>
              <div className="relative mt-1">
                <select className="w-full bg-transparent text-sm font-medium text-on-surface focus:outline-none cursor-pointer appearance-none pr-6">
                  <option>Hadir Onsite Langsung</option>
                  <option>Live YouTube Streaming</option>
                  <option>Keluarga + Nursery (Balita)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-secondary absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="w-full md:w-auto px-8 py-3.5 rounded-full bg-primary text-on-primary text-xs font-semibold uppercase tracking-[0.14em] hover:bg-surface-variant hover:text-on-surface transition-all duration-300 shadow-md shrink-0 flex items-center justify-center gap-2"
          >
            <span>Reservasi Kursi</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 3. Jadwal Ibadah Detail List */}
      <section id="jadwal" className="w-full bg-surface py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              AGENDA MINGGUAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
              Jadwal Sesi Ibadah &amp; Pelayanan
            </h2>
            <p className="text-sm text-secondary max-w-xl mx-auto">
              Silakan hadir 15 menit sebelum ibadah dimulai untuk persekutuan doa pribadi dan pelayanan penyambutan jemaat baru.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed/50 text-secondary text-[11px] font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      {srv.time}
                    </span>
                    {srv.online && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-100 text-red-700 text-[10px] font-bold">
                        <Radio className="w-3 h-3" /> LIVE STREAM
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-primary">{srv.name}</h3>
                    <p className="text-xs font-medium text-secondary mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {srv.location}
                    </p>
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">{srv.desc}</p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1"
                  >
                    Daftar Onsite <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Live Streaming Broadcast Feature */}
      <section id="streaming" className="w-full bg-surface-container-low py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-primary text-on-primary p-8 sm:p-12 shadow-xl border border-white/10 text-center space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary-fixed">
            GMS ONLINE GLOBAL STREAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-on-primary max-w-2xl mx-auto">
            Ibadah di Manapun Anda Berada Bersama Puluhan Ribu Jemaat Seluruh Dunia
          </h2>
          <p className="text-sm text-on-primary-container max-w-xl mx-auto leading-relaxed font-light">
            Setiap hari Minggu disiarkan secara langsung dalam resolusi 4K dengan terjemahan multibahasa (Indonesia, Inggris, Mandarin).
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-red-600 text-white text-xs font-semibold uppercase tracking-widest hover:bg-red-700 transition-colors shadow-md"
            >
              <Video className="w-4 h-4" /> Buka YouTube Live
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
