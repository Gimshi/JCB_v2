import Link from "next/link";
import { Church, Phone, Mail, ArrowUpRight, ArrowRight, Play, Radio, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16">
        {/* Emblem & Headline */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 text-on-primary shadow-md">
            <Church className="w-6 h-6 text-secondary-fixed" />
          </div>
          <h3 className="font-serif text-3xl tracking-tight text-primary">
            Gereja Mawar Sharon
          </h3>
          <p className="text-[12px] tracking-[0.2em] uppercase text-secondary mt-1 font-semibold">
            Apostolic & Prophetic Generation
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-outline-variant/20">
          {/* Column 1: Alamat Kampus Pusat */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-xl text-primary">Alamat Kampus Pusat</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Grand Lotus Ballroom, Pakuwon Mall Lt. 4
              <br />
              Jl. Puncak Indah Lontar No. 2
              <br />
              Surabaya, Jawa Timur 60216
            </p>
            <a
              href="https://maps.google.com"
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
                <span className="font-medium text-on-surface">Minggu Raya I</span>
                <span>07.00 WIB</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-1">
                <span className="font-medium text-on-surface">Minggu Raya II</span>
                <span>10.00 WIB</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-outline-variant/10 pb-1">
                <span className="font-medium text-on-surface">Minggu Raya III</span>
                <span>16.00 WIB</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span className="font-medium text-on-surface">Army of God (AOG)</span>
                <span>Sabtu 17.00 WIB</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Kontak & Pastoral Care */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-xl text-primary">Kontak & Konseling</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Pusat Pastoral & Layanan Doa Siap Menopang Setiap Langkah Iman Anda.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-on-surface-variant">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" /> +62 31 739 0088
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" /> pastoralcare@gms.church
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
            © {new Date().getFullYear()} Gereja Mawar Sharon. Hak cipta dilindungi undang-undang.
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
