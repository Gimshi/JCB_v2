import Link from "next/link";
import { ServiceSelector } from "@/components/public/ServiceSelector";
import { Church, ArrowUpRight, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* ========================================== */}
      {/* 1. HERO SECTION (Charleston Hotel Split Layout) */}
      {/* ========================================== */}
      <section className="relative w-full bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 lg:pt-16 pb-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial Content Panel */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-8 pr-0 lg:pr-6">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary-fixed">
                  Gereja Mawar Sharon • Apostolic &amp; Prophetic Generation
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-on-primary font-normal tracking-tight leading-[1.08]">
                  Gereja yang Hidup, Menjangkau Generasi.
                </h1>
              </div>
              <p className="text-lg text-on-primary-container max-w-xl font-light leading-relaxed">
                Bait kudus yang relevan, dinamis, dan berakar teguh di dalam kuasa Firman serta hadirat Roh Kudus. Menemani setiap langkah transformasi hidup Anda bersama Kristus.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/gereja"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-surface text-primary text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-surface-container-lowest hover:-translate-y-0.5 shadow-md"
                >
                  Mulai Terhubung
                </Link>
                <Link
                  href="/ibadah"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-container text-on-primary text-xs font-semibold uppercase tracking-widest border border-white/20 transition-colors hover:text-secondary-fixed"
                >
                  Jadwal Ibadah Minggu
                </Link>
              </div>
              <div className="pt-8 flex items-center gap-8 text-on-primary-container">
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-on-primary">100+</span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-on-primary-container mt-1">
                    Gereja Lokal
                  </span>
                </div>
                <div className="w-px h-10 bg-surface-container-highest/20"></div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-on-primary">1 Juta</span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-on-primary-container mt-1">
                    Murid Kristus
                  </span>
                </div>
                <div className="w-px h-10 bg-surface-container-highest/20"></div>
                <div className="flex flex-col">
                  <span className="font-serif text-3xl text-on-primary">Global</span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-on-primary-container mt-1">
                    Pelayanan Misi
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Tall Vertical Architectural Sanctuary Window */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl bg-surface-container-highest/10">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  alt="Modern sanctuary architectural interior in warm bronze and alabaster tones"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb6OO3z7OIbnFLKj55EbOUYcCr5kU8H1lxMT4Fwto0YHIvlkv69XS0JHQ91JERCV18GARm8YI7eSHUd7ncXwUyoZa05-P6OFsloS8421kL3u4vmRGcNHrHVeYfKT_6jkng51rvP2lQ66MKAApr4xPepdpU7R0TPp3yicWCkPqG_GvoizdbW4rVEgsdKNsUF6BSJF1OiYV9pOfLobb5u7fS2IN1gI3_4BL_0wl5zy_2SP-Zz9niQgI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-on-primary">
                  <div>
                    <p className="text-[11px] font-semibold tracking-widest uppercase text-secondary-fixed">
                      Ruang Ibadah Utama
                    </p>
                    <p className="font-serif text-xl sm:text-2xl">Grand Lotus Sanctuary, Pakuwon Mall</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Church className="w-5 h-5 text-secondary-fixed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Reservation Selector */}
        <ServiceSelector />
      </section>

      {/* ========================================== */}
      {/* 2. WELCOME / MISSION INTRODUCTION SECTION */}
      {/* ========================================== */}
      <section className="w-full bg-surface pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-secondary">
            Tentang Gereja Mawar Sharon
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal tracking-tight">
            Sebuah Rumah Rohani, Dibangun dalam Kuasa Hadirat-Nya
          </h2>
          <p className="text-lg text-secondary font-light leading-relaxed max-w-2xl mx-auto">
            Menyatukan kehangatan keluarga rohani dengan kegerakan apostolik kontemporer. GMS terpanggil untuk mewujudkan visi Ilahi: mendirikan 1.000 gereja lokal yang mandiri dan memuridkan 1 juta jiwa berkarakter Kristus di seluruh penjuru Indonesia dan bangsa-bangsa.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/gereja"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-surface-container-high text-primary text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-surface-container-highest"
            >
              Eksplorasi Sejarah Kami
            </Link>
            <Link
              href="/gereja#buku"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-on-primary text-xs font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
            >
              Buku Kenangan 40 Tahun
            </Link>
          </div>
        </div>

        {/* Editorial Accent Landscape Panorama */}
        <div className="max-w-6xl mx-auto mt-16 overflow-hidden rounded-2xl shadow-lg relative aspect-[21/9]">
          <img
            className="w-full h-full object-cover"
            alt="Wide serene architectural panorama of contemporary chapel campus courtyard"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZJoLu5lp9SrPneRCNej724IqEehkHmxH4tLFh0jpVMXX3grbuUMRBkrnZDbsq3JgKSk-4Re-YaHqotraSjprxl6BmODt3y-NK3y0kycp85bqRs0UECxLghKaXHpFrA8on4__SvxFsv7NszcTRrZ5uruYOQvwNs1dUPBfNIWc1qhVzuatCOqHUm0VhNgLC2mLpewbfkg_UBLbMRgtA-b4AMSh87Q95tMnZ-h5gV5i1aeEN1qMvETw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-8 text-on-primary">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary-fixed">
              Pusat Misi &amp; Doa
            </span>
            <p className="font-serif text-xl sm:text-2xl">
              Kenyamanan Perjumpaan Pribadi dengan Sang Pencipta
            </p>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. TRIPLE ROUNDED CARDS SECTION */}
      {/* ========================================== */}
      <section className="w-full bg-surface-container-low py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              LANGKAH PERTUMBUHAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
              Panggilan &amp; Langkah Rohani Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Ibadah & Komunitas */}
            <Link href="/ibadah" className="group flex flex-col space-y-4">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Ibadah & Komunitas"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvFNQnVOe1AjW3SAN3NsWffzngDKFwuzWDy_pLlwaD12MJ82QmZO_qTneNwe6uWCR4B8FUH-iTBnimlwmrTlZlSexuXggtPz31L7TgMw5Q5AUFi_xmAeOR5VTtcwkN2cKa52H1RsP8MyYUzDO63JwXyvebf74BRxZXV8Ji2b4EVgx2P7ZUf0dpJVAkLaBr1cPNygqLRsfNiSN8s7W4h9LhAz4HTbSuEWTJ758sjXwqMqJIyx3xq5k"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-primary group-hover:text-secondary transition-colors inline-flex items-center gap-1.5">
                  Ibadah &amp; Komunitas <span className="text-sm">→</span>
                </h3>
                <p className="text-xs text-secondary mt-1">
                  Kebaktian umum Minggu, AOG Youth, dan EagleKidz berkesinambungan.
                </p>
              </div>
            </Link>

            {/* Card 2: Connect Group (CG) */}
            <Link href="/pelayanan#cg" className="group flex flex-col space-y-4">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Connect Group"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAit8jTh-vJQFqJkTqvABkh74ZHK7vuNZXBuf1Whm1LJ9qv-fXZJi8q5xa4wYTDzTnybhGaoeWNrvlhv154-IGX7R6Ti-w4jJKnCb6422EQdHRg-baYzYi0I-Bow8U3FpNnw7TzA2DPY1bI4owH1T9IcZ4vscCfEe2PZLDAawc7rK_oowokXlP4FTpgPbU7h6yZl-Y8G0fhsZ7S6D8PBu5_h7y4lOSKO6WB0YbsI9w2b4BDkjkIHGc"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-primary group-hover:text-secondary transition-colors inline-flex items-center gap-1.5">
                  Connect Group (CG) <span className="text-sm">→</span>
                </h3>
                <p className="text-xs text-secondary mt-1">
                  Kelompok sel intim perumahan untuk saling mendoakan dan menguatkan.
                </p>
              </div>
            </Link>

            {/* Card 3: Pelayanan */}
            <Link href="/pelayanan" className="group flex flex-col space-y-4">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-md">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Departemen Pelayanan"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIab9NEnx74yeGhsoYYgsSShcVJ0U93xUukCZOFilS2A_Qs5oIAbl5fwnJFbHZr_hiFb1WJQA-Yo6JT94EZzKMfiOADRL-ksJ3uE7_D2JqFGCMQroAYaF0mTVlQMOozpYcp45wGYlmWbGO2pYGeIBa2rMbVBs80R-BqwpW4dtquDNiZEDvHTmSLBvYALUEUPs3lZuhx5n4_gT8jhsWE_MLgy8T1RWBiGHtiVufJ0tEVXL_pIcbbW8"
                />
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-serif text-xl text-primary group-hover:text-secondary transition-colors inline-flex items-center gap-1.5">
                  Departemen Pelayanan <span className="text-sm">→</span>
                </h3>
                <p className="text-xs text-secondary mt-1">
                  Salurkan talenta dalam musik, multimedia, usher, konseling, dan logistik.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. HORIZONTAL FEATURE GRID / HIGHLIGHTS */}
      {/* ========================================== */}
      <section className="w-full bg-surface py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
              PELAYANAN HOLISTIK
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-primary font-normal">
              Sentuhan Kasih &amp; Pelayanan Berkelanjutan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6 border border-outline-variant/20">
              <div className="space-y-4">
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt="Misi Nusantara"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9t99iTTOKO_P6UdHLzeC4hUz2dfANZzogsjGF6L63Q9gJUqJnNwW9CiAP_S3v4jdzJHZ1CKQhm7YOUu6R1cQUzUOtjGpRxwIKuqcXpOCSrDYGhMhffoas-wrHcnGDsCT5uMfXiA-5_FOPbRp-N2JUniM_WPXp-4q7qyWD1fw_XjcgRUwYTByQXvvl9z0bKyg4EwG4OuustCrgMVhPGbm5JDfAgH3DBhGDyUPpksM4XUQJNPZYPsk"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                    Misi Nusantara
                  </span>
                  <h3 className="font-serif text-xl text-primary mt-1">Gerakan Penanaman Gereja</h3>
                  <p className="text-xs text-secondary mt-2 leading-relaxed">
                    Membuka pos perintisan di kepulauan terluar, mendampingi masyarakat prasejahtera melalui klinik kasih, beasiswa anak asuh, dan pembangunan sarana air bersih.
                  </p>
                </div>
              </div>
              <Link
                href="/pelayanan#misi"
                className="text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1.5"
              >
                Pelajari Pos Misi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6 border border-outline-variant/20">
              <div className="space-y-4">
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt="Generasi Masa Depan"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_IW27X8QOA_iitcj5j8mSvl1u-V5vrc4_HxU6CwPHk7fHbQDkpDGAx0zss2dp19-q5F6ENi4jNZKIKBE7emWIIUjdzS7mq76BXhUrXyyji6NrmC-fOccXT7-kGxc0LD2a213dXnt6w1ktFc9ipzafDnYjZ_RUnyJ9iWe4dqnXUoFdfnD_mEL-OT1SPRCfvSBzzR_5NfNXUfL1IaBhxqWT2bF2MyAvBV1Nc9QX0-s1_Age_t6f9Fs"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                    Generasi Masa Depan
                  </span>
                  <h3 className="font-serif text-xl text-primary mt-1">EagleKidz &amp; AOG Youth</h3>
                  <p className="text-xs text-secondary mt-2 leading-relaxed">
                    Kurikulum rohani berjenjang sejak balita hingga universitas untuk mencetak pemuda berintegritas, kreatif, tangguh secara mental, dan takut akan Tuhan.
                  </p>
                </div>
              </div>
              <Link
                href="/pelayanan#youth"
                className="text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1.5"
              >
                Info Kelas Anak &amp; Remaja <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6 border border-outline-variant/20">
              <div className="space-y-4">
                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    alt="Pendampingan Jiwa"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAif5_ud6qtZBnudpQ3cdy13tQVtQ8k4FiJApJbKnUAJg1mwofhtObWMKmo4GFjPNeujX67skvPtzNb924wV1q3h5FvULeXJoYsC6RVDEyKwGqxKfCLTEsqhjjaezPe2w14gtfbQa-oSi0Z-HfvNSrvKiThkMAldB5LZyvpuxuTSQUEZVRbRj3NqlhJ5KrVyU_YhfDGRjCnIpf51-ZiAkUrIyaPMP_Rz3kg4AWrfehMMF7IBCCOeHE"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                    Pendampingan Jiwa
                  </span>
                  <h3 className="font-serif text-xl text-primary mt-1">Doa Fajar &amp; Konseling 24/7</h3>
                  <p className="text-xs text-secondary mt-2 leading-relaxed">
                    Layanan menara doa syafaat harian serta konselor pastoral berlisensi untuk mendampingi masa krisis keluarga, pemulihan luka batin, dan kelepasan rohani.
                  </p>
                </div>
              </div>
              <Link
                href="/pelayanan#konseling"
                className="text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1.5"
              >
                Hubungi Tim Doa <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. SPLIT EDITORIAL FEATURE (DARK CARD) */}
      {/* ========================================== */}
      <section className="w-full bg-surface py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden bg-primary text-on-primary shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Side Image */}
            <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Pastoral prayer moment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP5rKOORxhxQ5DCOmqzON9JnC337gRMepS6HF2YbbhjfkaK4aNEoHZtQ3HcfhbXfaTntgBj0czkz134xJpj4LHNEriTU_zz3FIIcgwAA_zQvk0BIn5uiOu1VFOQdIWMVcDIr3lUYejOcj7jA0iUN433RC5kPnK43nLF8ZE6Za0Dn7L1BnlU2fsIpLIvTsof4EFctlpGcLKfVu4vkUN41tU0WhbtHFp1YiFN7N4lHu3nhCchzqf4W8"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>

            {/* Right Side Dark Editorial Content */}
            <div className="lg:col-span-7 p-8 md:p-14 lg:p-16 flex flex-col justify-center space-y-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-secondary-fixed">
                PENGELOLAAN YANG TRANSPARAN • SINODE GMS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-on-primary font-normal leading-tight">
                Memberi dengan Sukacita, Memperluas Kerajaan-Nya
              </h2>
              <p className="text-sm text-on-primary-container max-w-xl font-light leading-relaxed">
                Setiap benih persepuluhan dan persembahan kasih dialokasikan secara akuntabel untuk pembangunan pos misi pedalaman, kesejahteraan pelayan Tuhan di perintisan, serta aksi sosial tanggap bencana nasional. Diaudit tahunan secara independen dengan opini Wajar Tanpa Pengecualian (WTP).
              </p>
              <div className="grid grid-cols-2 gap-6 pt-2 max-w-md">
                <div className="bg-surface-container-highest/10 rounded-xl p-4 border border-white/10">
                  <span className="font-serif text-3xl text-on-primary">100%</span>
                  <p className="text-xs text-on-primary-container mt-1">Audit Akuntansi WTP Berkelanjutan</p>
                </div>
                <div className="bg-surface-container-highest/10 rounded-xl p-4 border border-white/10">
                  <span className="font-serif text-3xl text-on-primary">34</span>
                  <p className="text-xs text-on-primary-container mt-1">Provinsi Terjangkau Program Kasih</p>
                </div>
              </div>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/memberi"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-surface text-primary text-xs font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5 shadow-md"
                >
                  Alokasi Persembahan
                </Link>
                <Link
                  href="/memberi#laporan"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary-container text-on-primary text-xs font-semibold uppercase tracking-widest border border-white/20 transition-colors hover:bg-surface-container-highest/20"
                >
                  Laporan Audit Tahunan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. PULL-QUOTE / PASTORAL MESSAGE SECTION */}
      {/* ========================================== */}
      <section className="w-full bg-surface py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Petite Star Rating Indicator */}
          <div className="flex items-center justify-center gap-1.5 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>

          {/* Large Italic Serif Pull-Quote */}
          <blockquote className="font-serif text-2xl sm:text-3xl text-primary italic font-normal leading-relaxed max-w-3xl mx-auto">
            “Panggilan kita bukan hanya membangun sebuah jemaat yang besar, melainkan membangun umat yang rindu akan Roh Kudus, rendah hati, dan siap diutus ke manapun Tuhan memanggil sampai Injil diberitakan ke ujung bumi.”
          </blockquote>

          {/* Author Attribution */}
          <div className="space-y-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Ps. Philip &amp; Irene Mantofa
            </p>
            <p className="text-xs text-secondary">
              Gembala Sidang Senior • Sinode Gereja Mawar Sharon
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/warta"
              className="text-xs font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-2"
            >
              Baca Renungan Mingguan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. MINIMALIST MOSAIC GALLERY */}
      {/* ========================================== */}
      <section className="w-full bg-surface pb-16">
        <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 px-2">
          <div className="aspect-square overflow-hidden rounded-lg shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Communion"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHcQ9NHXaFdoj1B9BKRnBnocbZCAjSNFGdugmfuceYq4rKAVIqzZxbCeIgC7YYdAeOB5Z-NXNTXk74DRprbRbl9JN8Lyjt0igpYmeZ5z_g2a-dH0VbIU56y7_52v3oiUwsC5w2R3VZCFYjj8YL2uiSS7d4I7sGVRh9gdx6H5uLi4w6ZDk2IackFtpcOlMmPSxbvog9IFj4-02GtLoM0C00WjKdBHSJyfexev9Li1_iXgLxduVr8sc"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Worship team"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq09Dys1g8cHmpOCicD-y5whsJD2qDzeAs7oCyeQVEOovIi-2Cn-EkN4IkeM41Utb1kP-aJbX5mGUhYQwKoNrTjGTBan8UN4o7qVAzfjWUEqvmdRaLgebWaR7mYo8eDv70_OCJX0jvCmTc3P2zDzjseyIDGqkSl1G_ksKpcYvHIZeVaEUp9892FVHbnTwDyRWEpLplvrgyTUz_xR1Q0Yeqkf_jAftO7e62kV60kQSQbQWFdYofVK4"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Youth fellowship"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8445Ugdt9nvm7HED07RmlG2pIWh0YfwW0aJh-T1sxErSP28WAd-tMJiterG5E9Uap5w4kBjbRNEHigMQEyQIt1bwIbtdc9C2KjmRuAiDHvzQnBVPDyJWJ4pZsA3n84PS61ytxoraDP23I9BVNm0HkeM0qr34HlLA2vqH9FXRNu6KWVcNixZJHPSCQJu4sdqIX38NCv9K4C-4XLDYSYULIQGe91gbNC6ACi3SlrJe_HsbDiF-OfoA"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-sm">
            <img
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Church foyer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2gr0haA48SqgfhuVa4QsVstYAiuqTuQ86GdBNzeS21-SgSx_Dzp_H6lG6mLP0aD88tTBQucXRENX94Alw3WbU02cbo-UavHyzBYbJUE_MuNspHCYWNiMXzyLcxEr7hownHSlj79m2QifrVbPLwLJLnh3EzFTSHZIm8bUaB8xpbUNwkfqfLy-pPrqbGrdDpf6gzq4hBNDn6YpWeYI_if0dM9yWXRDfNnNaArX4uHQlPtzGpOV1xxM"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg shadow-sm col-span-2 md:col-span-1">
            <img
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              alt="Prayer garden"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTkF3pzfzBK72yHlJK9CC5NNF5tjTId3Cb19e3v3nVJx1KGLWOF5aEhPWob_E9naf-qr05QsCa__1pEA5yeDOP8zJcjyf8RAobq9RB6xBECPr_AirSU0JK8VLR1mJKOvHEQiS-OiPox8o9EcGIWiJMmVeKNL4ZVkTRta8QLWHB1IVekp0W4FzZsd-XVYqSlh0w8cMJQ9HKk-WRuGBtdakBjnVSdy120ra1jwc0RGGuCUV7WBUboWY"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
