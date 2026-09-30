import Link from "next/link";
import { BookOpen, CheckCircle2, Users, Shield, Heart, Compass, ArrowRight } from "lucide-react";

export default function GerejaPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Split-Screen Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden bg-primary shadow-xl">
          {/* Left Panel: Charcoal Editorial */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between text-on-primary">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary-fixed">
                  PROFIL SINODE GEREJA MAWAR SHARON
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-on-primary leading-tight font-normal mb-6">
                Gereja yang Hidup, Bergerak dalam Kuasa Roh Kudus &amp; Firman.
              </h1>
              <p className="text-base sm:text-lg text-on-primary-container max-w-xl mb-10 leading-relaxed font-light">
                Kegerakan apostolik berakar dari Surabaya yang menjangkau bangsa-bangsa dengan kasih transformatif Kristus. Membangun jemaat yang bertumbuh dalam kebenaran, kepenuhan Roh Kudus, dan misi pemuridan global.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a
                  href="#sejarah"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-surface text-primary text-xs font-semibold uppercase tracking-widest hover:bg-secondary-fixed transition-all duration-300 shadow-md"
                >
                  Jelajahi Sejarah Sinode
                </a>
                <a
                  href="#kepemimpinan"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-surface/10 text-on-primary text-xs font-semibold uppercase tracking-widest hover:bg-surface/20 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Buku Kenangan 40 Tahun
                </a>
              </div>
            </div>

            {/* 3 Key Metrics inside Left Column */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="font-serif text-3xl text-secondary-fixed block">100+</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-on-primary-container">
                  Kampus Lokal &amp; Global
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-secondary-fixed block">100.000+</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-on-primary-container">
                  Jemaat Mingguan
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl text-secondary-fixed block">40+</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-on-primary-container">
                  Tahun Pelayanan
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel: Sanctuary Photography */}
          <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQokplrWpyeMXKgkQPQ0pET0sSTL-ffTIVEqhFF2PhxEbebkp6Ra8tvsbni_Wj1EBjUyuVIf3r0bQU1xNQtNxS1mIBoKdSTKGKoZcnjRDlHkEJEqBrAu6gVO0rojRtuwUE09xZulBf9N8amI6wp1p77_fn3AbfmWF8Y83SNozv66PxL-2m4y9RXY-fDM0vJ5ZqquEuuXzguBdtcmQy76Ou5VTGlL5nhFcJaSD7PzlS0HE-WQ6j09M"
              alt="GMS Sanctuary"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/90 backdrop-blur-md shadow-lg text-primary">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                PUSAT KEBANGUNAN ROHANI
              </p>
              <p className="font-serif text-lg font-medium">GMS Grand Island Campus</p>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Surabaya, Jawa Timur — Tempat ribuan pelayan Tuhan diperlengkapi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Info Navigation Capsule */}
      <section className="w-full max-w-5xl mx-auto px-4 -mt-8 sm:-mt-10 relative z-20">
        <div className="bg-surface-container-lowest rounded-full p-2.5 shadow-xl flex items-center justify-between overflow-x-auto no-scrollbar gap-2 border border-outline-variant/30">
          <a
            href="#sejarah"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-on-surface hover:bg-secondary-fixed transition-colors whitespace-nowrap"
          >
            Akar Sejarah
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant shrink-0"></span>
          <a
            href="#visi-misi"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-on-surface hover:bg-secondary-fixed transition-colors whitespace-nowrap"
          >
            Visi &amp; Misi
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant shrink-0"></span>
          <a
            href="#dna-gms"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-on-surface hover:bg-secondary-fixed transition-colors whitespace-nowrap"
          >
            5 Nilai Inti (DNA)
          </a>
          <span className="w-1.5 h-1.5 rounded-full bg-outline-variant shrink-0"></span>
          <a
            href="#kepemimpinan"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] text-on-surface hover:bg-secondary-fixed transition-colors whitespace-nowrap"
          >
            Kepemimpinan Rohani
          </a>
        </div>
      </section>

      {/* Sejarah Section */}
      <section id="sejarah" className="w-full bg-surface py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              PERJALANAN IMAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
              Akar Sejarah Sinode Gereja Mawar Sharon
            </h2>
            <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed">
              Bermula dari persekutuan doa sederhana di Jalan Cempaka Surabaya pada tahun 1984, Roh Kudus mengobarkan kerinduan untuk pemulihan jiwa-jiwa hingga menjadi sinode dengan ratusan jemaat lokal mandiri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 space-y-4">
              <span className="text-2xl font-serif text-secondary">1984</span>
              <h3 className="font-serif text-xl text-primary">Awal Mula Cempaka</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Dimulai dari kelompok doa fajar kecil yang bertekun dalam Firman dan kehausan akan hadirat Allah yang nyata di Surabaya.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 space-y-4">
              <span className="text-2xl font-serif text-secondary">2000-an</span>
              <h3 className="font-serif text-xl text-primary">Kegerakan Kaum Muda (AOG)</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Lahirnya kebangunan rohani besar di kalangan pelajar dan mahasiswa melalui Army of God yang merebak ke puluhan kota.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 space-y-4">
              <span className="text-2xl font-serif text-secondary">Kini &amp; Selamanya</span>
              <h3 className="font-serif text-xl text-primary">Visi 1.000 Gereja Lokal</h3>
              <p className="text-xs text-secondary leading-relaxed">
                Ekspansi misi terstruktur di Indonesia, Asia Pasifik, Eropa, dan Australia guna memuridkan 1 juta jiwa berkarakter Kristus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Nilai Inti (DNA) */}
      <section id="dna-gms" className="w-full bg-surface-container-low py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              IDENTITAS KAMI
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
              5 Nilai Inti (DNA Sinode GMS)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                icon: Heart,
                num: "01",
                title: "Kasih yang Tulus",
                desc: "Mengasihi Allah tanpa syarat dan mengasihi sesama manusia seperti diri sendiri.",
              },
              {
                icon: Shield,
                num: "02",
                title: "Kekudusan Hidup",
                desc: "Menjaga integritas rohani, kejujuran hati nurani, dan kemurnian motivasi.",
              },
              {
                icon: Users,
                num: "03",
                title: "Kerendahan Hati",
                desc: "Menghormati orang lain lebih dari diri sendiri dan selalu mengandalkan anugerah Allah.",
              },
              {
                icon: Compass,
                num: "04",
                title: "Ketaatan Total",
                desc: "Tunduk setia kepada kehendak Firman Tuhan dan otoritas ilahi yang ditetapkan.",
              },
              {
                icon: CheckCircle2,
                num: "05",
                title: "Kesatuan Tubuh",
                desc: "Berjalan sehati, sepikir, satu tujuan dalam kegerakan memenangkan jiwa bagi Kristus.",
              },
            ].map((dna) => {
              const Icon = dna.icon;
              return (
                <div
                  key={dna.num}
                  className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-serif text-secondary">{dna.num}</span>
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-serif text-lg text-primary">{dna.title}</h3>
                    <p className="text-xs text-secondary leading-relaxed">{dna.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pastoral Leadership */}
      <section id="kepemimpinan" className="w-full bg-surface py-24 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-primary text-on-primary p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 aspect-square rounded-2xl overflow-hidden bg-surface-container-highest/20">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5rKOORxhxQ5DCOmqzON9JnC337gRMepS6HF2YbbhjfkaK4aNEoHZtQ3HcfhbXfaTntgBj0czkz134xJpj4LHNEriTU_zz3FIIcgwAA_zQvk0BIn5uiOu1VFOQdIWMVcDIr3lUYejOcj7jA0iUN433RC5kPnK43nLF8ZE6Za0Dn7L1BnlU2fsIpLIvTsof4EFctlpGcLKfVu4vkUN41tU0WhbtHFp1YiFN7N4lHu3nhCchzqf4W8"
                alt="Ps Philip Mantofa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-7 space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary-fixed">
                GEMBALA SENIOR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-on-primary">
                Ps. Philip &amp; Irene Mantofa
              </h2>
              <p className="text-sm text-on-primary-container leading-relaxed font-light">
                Di bawah kepemimpinan rohani Ps. Philip Mantofa, Tuhan mencurahkan kegerakan keselamatan jiwa dan pemulihan generasi muda. Beliau terus menggembalakan sinode GMS dengan penekanan pada keintiman bersama Roh Kudus, doa syafaat, serta kepatuhan mutlak pada Firman Allah.
              </p>
              <div className="pt-2">
                <Link
                  href="/ibadah"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface text-primary text-xs font-semibold uppercase tracking-widest hover:bg-secondary-fixed transition-colors"
                >
                  Ibadah Bersama Kami <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
