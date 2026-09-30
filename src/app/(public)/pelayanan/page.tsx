"use client";

import { useState } from "react";
import { Music, Video, Users, HeartHandshake, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const DEPARTMENTS = [
  {
    id: "worship",
    icon: Music,
    name: "GMS Worship & Creative Arts",
    tagline: "Pujian, Penyembahan, & Paduan Suara",
    desc: "Melayani sebagai vokalis, musisi instrumen, dan penari yang menuntun jemaat masuk ke dalam hadirat Tuhan dengan kemahiran dan kekudusan.",
    reqs: ["Anggota CG aktif", "Lulus audisi instrumen/vokal", "Komitmen latihan rutin"],
  },
  {
    id: "media",
    icon: Video,
    name: "Multimedia, Lighting, & Broadcasting",
    tagline: "Teknologi & Visual Kreatif",
    desc: "Mengoperasikan kamera siaran 4K, tata pencahayaan auditorium, sound system, visual switcher, dan grafik warta ibadah.",
    reqs: ["Ketelitian teknis", "Siap belajar software produksi", "Bertugas saat sesi ibadah"],
  },
  {
    id: "usher",
    icon: Users,
    name: "Usher, Greeter, & Hospitallity",
    tagline: "Kehangatan Rumah Tuhan",
    desc: "Menyambut jemaat di pintu masuk, memandu tempat duduk di ruang sanctuary, serta membantu penyerahan persembahan dengan senyuman kasih.",
    reqs: ["Ramah & komunikatif", "Rapi & berpenampilan sopan", "Hadir 45 menit sebelum ibadah"],
  },
  {
    id: "counseling",
    icon: HeartHandshake,
    name: "Pastoral Care & Tim Menara Doa",
    tagline: "Doa Syafaat & Konseling Pribadi",
    desc: "Melayani pendoa syafaat subuh, kunjungan rumah sakit, dan mendampingi jiwa-jiwa baru yang menyerahkan hidup kepada Kristus.",
    reqs: ["Memiliki hati penggembalaan", "Menjaga kerahasiaan konseling", "Telah dibaptis selam"],
  },
];

export default function PelayananPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full bg-primary text-on-primary py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary-fixed">
            PANGGILAN MELAYANI • VOLUNTEER GMS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
            Menemukan Tempat Terbaik untuk Mempersembahkan Talenta Anda
          </h1>
          <p className="text-base sm:text-lg text-on-primary-container max-w-2xl mx-auto font-light leading-relaxed">
            Setiap karunia dan talenta yang Tuhan anugerahkan memiliki peran penting untuk memperlengkapi tubuh Kristus. Mari bertumbuh bersama keluarga besar pelayan Tuhan.
          </p>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="w-full bg-surface py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              DEPARTEMEN PELAYANAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
              Bidang-Bidang Pelayanan yang Tersedia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.id}
                  className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between space-y-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                        {dept.tagline}
                      </span>
                      <h3 className="font-serif text-2xl text-primary mt-1">{dept.name}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      {dept.desc}
                    </p>

                    <div className="pt-2 space-y-2">
                      <p className="text-xs font-semibold text-primary">Persyaratan Dasar:</p>
                      <ul className="text-xs text-secondary space-y-1">
                        {dept.reqs.map((req, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-secondary-fixed shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#form-daftar"
                    className="text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1.5 pt-4 border-t border-outline-variant/20"
                  >
                    Daftar di Bidang Ini <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section id="form-daftar" className="w-full bg-surface-container-low py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto bg-surface-container-lowest p-8 sm:p-12 rounded-3xl shadow-xl border border-outline-variant/30">
          <div className="text-center space-y-2 mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              FORMULIR PENDAFTARAN
            </span>
            <h3 className="font-serif text-3xl text-primary">
              Bergabung Sebagai Pelayan Tuhan
            </h3>
            <p className="text-xs text-secondary">
              Isi data di bawah ini, tim koordinator departemen akan menghubungi Anda untuk tahap orientasi dan pembekalan.
            </p>
          </div>

          {submitted ? (
            <div className="bg-surface-container p-8 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <h4 className="font-serif text-2xl text-primary">Terima Kasih!</h4>
              <p className="text-xs text-secondary">
                Formulir Anda telah diterima. Tim pastoral kami akan segera menghubungi Anda dalam 2-3 hari kerja.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold uppercase text-secondary mb-1">
                  Nama Lengkap Sesuai KTP
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Daniel Setiawan"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-secondary mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-secondary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-secondary mb-1">
                  Pilih Departemen yang Diminati
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface text-sm focus:outline-none focus:border-primary">
                  <option>GMS Worship (Praise & Worship / Musik)</option>
                  <option>Multimedia, Lighting, & Broadcasting</option>
                  <option>Usher, Greeter, & Hospitallity</option>
                  <option>Pastoral Care & Tim Menara Doa</option>
                  <option>EagleKidz Children Ministry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-secondary mb-1">
                  Kelompok Sel / Connect Group (CG)
                </label>
                <input
                  type="text"
                  placeholder="Nama CG / Pemimpin CG Anda saat ini"
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface text-sm focus:outline-none focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-primary text-on-primary text-xs font-semibold uppercase tracking-widest hover:bg-surface-variant hover:text-on-surface transition-all shadow-md mt-4"
              >
                Kirim Formulir Komitmen Pelayanan
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
