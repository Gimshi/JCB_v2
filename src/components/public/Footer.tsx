import Link from "next/link";
import { Church, Phone, Mail, ArrowUpRight, ArrowRight, Play, Radio, Share2, MapPin, Clock, Navigation } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-outline-variant/30">
      {/* Section: Temui Kami & Google Maps Location */}
      <section id="temui-kami" className="scroll-mt-24 pt-16 md:pt-20 pb-14 border-b border-outline-variant/20">
        <div id="lokasi" className="max-w-7xl mx-auto px-6 lg:px-12 scroll-mt-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <span className="text-[11px] tracking-[0.25em] uppercase text-secondary font-bold mb-2">
              LOKASI &amp; KEHADIRAN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary tracking-tight">
              Temui Kami
            </h2>
            <div className="w-12 h-0.5 bg-secondary-fixed-dim my-4"></div>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Kami menyambut kehadiran Anda dan keluarga dengan sukacita untuk beribadah,
              bersekutu, dan mengalami kasih anugerah Tuhan bersama di JCB Permata.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Info Card */}
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-secondary-container text-secondary font-semibold">
                    KAMPUS UTAMA
                  </span>
                  <h3 className="font-serif text-2xl text-primary mt-3 font-semibold">
                    Gereja Kasih Anugerah JCB Permata
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary border border-outline-variant/30">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary">
                        Alamat Ibadah
                      </h4>
                      <p className="text-sm text-on-surface leading-relaxed mt-0.5">
                        Kawasan Ruko Permata, Jl. Raya Bekasi, Cakung / Bekasi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary border border-outline-variant/30">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary">
                        Jadwal Ibadah Minggu
                      </h4>
                      <p className="text-sm text-on-surface leading-relaxed mt-0.5">
                        Sesi 1: 07.30 WIB &bull; Sesi 2: 10.00 WIB
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Youth / Remaja: Sabtu 17.00 WIB
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary border border-outline-variant/30">
                      <Navigation className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-semibold text-secondary">
                        Akses &amp; Transportasi
                      </h4>
                      <p className="text-sm text-on-surface leading-relaxed mt-0.5">
                        Akses mudah dari jalan utama, tersedia fasilitas parkir mobil dan motor yang aman dan nyaman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-outline-variant/20 mt-6 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Gereja+Kasih+Anugerah+JCB+Permata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm text-center"
                >
                  <span>Buka Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link
                  href="/pelayanan#konseling"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-container text-primary text-xs font-semibold uppercase tracking-wider hover:bg-surface-container-high transition-colors border border-outline-variant/30 text-center"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* Google Maps Embed Container */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 relative min-h-[360px] sm:min-h-[420px] h-full flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.341139850492!2d106.92866628715818!3d-6.186215100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b04c3cd46ff%3A0x2b6822da110da074!2sGereja%20Kasih%20Anugerah%20JCB%20Permata!5e0!3m2!1sid!2sid!4v1790786866324!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Gereja Kasih Anugerah JCB Permata"
                className="w-full h-full min-h-[360px] sm:min-h-[420px] flex-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Directory & Links Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-16">
        {/* Emblem & Headline */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 text-on-primary shadow-md">
            <Church className="w-6 h-6 text-secondary-fixed" />
          </div>
          <h3 className="font-serif text-3xl tracking-tight text-primary">
            JCB PERMATA
          </h3>
          <p className="text-[12px] tracking-[0.2em] uppercase text-secondary mt-1 font-semibold">
            Gereja Kasih Anugerah
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-outline-variant/20">
          {/* Column 1: Alamat Kampus Pusat */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-xl text-primary">Alamat Gereja</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Gereja Kasih Anugerah JCB Permata
              <br />
              Kawasan Ruko Permata, Jl. Raya Bekasi
              <br />
              DKI Jakarta / Bekasi
            </p>
            <a
              href="https://maps.google.com/?q=Gereja+Kasih+Anugerah+JCB+Permata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1.5 pt-2 transition-colors"
            >
              Buka Petunjuk Arah <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Column 2: Jadwal Ibadah */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-xl text-primary">Jadwal Ibadah</h4>
            <ul className="text-sm text-on-surface-variant space-y-2.5">
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-1">
                <span className="font-medium text-on-surface">Ibadah Raya I</span>
                <span>07.30 WIB</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-1">
                <span className="font-medium text-on-surface">Ibadah Raya II</span>
                <span>10.00 WIB</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-1">
                <span className="font-medium text-on-surface">Youth &amp; Remaja</span>
                <span>Sabtu 17.00 WIB</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span className="font-medium text-on-surface">Doa &amp; Puasa</span>
                <span>Rabu 19.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak & Pastoral Care */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-xl text-primary">Kontak &amp; Doa</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pelayanan pastoral dan tim doa siap mendampingi perjalanan iman Anda.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-on-surface-variant">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" /> +62 21 8899 0011
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" /> info@jcbpermata.church
              </p>
            </div>
            <Link
              href="/pelayanan#konseling"
              className="text-[12px] font-semibold text-primary hover:text-secondary uppercase tracking-widest inline-flex items-center gap-1.5 pt-2 transition-colors"
            >
              Permohonan Doa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] tracking-wider text-on-surface-variant uppercase">
            &copy; {new Date().getFullYear()} Gereja Kasih Anugerah JCB Permata. Hak cipta dilindungi undang-undang.
          </p>
          <div className="flex items-center space-x-4 text-on-surface-variant">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high"
              title="YouTube"
            >
              <Play className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high"
              title="Podcast"
            >
              <Radio className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
