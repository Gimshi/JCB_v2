"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Menu, X, Church } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "BERANDA" },
  { href: "/gereja", label: "GEREJA" },
  { href: "/ibadah", label: "IBADAH" },
  { href: "/pelayanan", label: "PELAYANAN" },
  { href: "/memberi", label: "MEMBERI" },
  { href: "/acara", label: "ACARA" },
  { href: "/warta", label: "WARTA" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-white/10">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-container-highest/20 flex items-center justify-center border border-secondary-fixed/30">
            <Church className="w-5 h-5 text-secondary-fixed" />
          </div>
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-xl tracking-wide text-on-primary font-medium">
              GMS CHURCH
            </span>
            <span className="text-[10px] tracking-[0.2em] text-on-primary-container uppercase font-semibold">
              Gereja Mawar Sharon
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[12px] font-semibold tracking-widest uppercase transition-colors py-1 ${
                  isActive
                    ? "text-on-primary underline underline-offset-8 decoration-2 decoration-secondary-fixed"
                    : "text-on-primary-container hover:text-on-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-on-primary-container">
            <button type="button" className="text-on-primary transition-colors">
              ID
            </button>
            <span className="opacity-40">|</span>
            <button
              type="button"
              className="text-on-primary-container hover:text-on-primary transition-colors"
            >
              EN
            </button>
          </div>

          <Link
            href="/ibadah#reservasi"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-surface text-primary text-[12px] font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5 hover:bg-surface-container-lowest shadow-md"
          >
            TEMUKAN GEREJA
          </Link>

          <Link
            href="/admin"
            className="w-9 h-9 rounded-full bg-primary-container border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            title="Dashboard Pengurus / Admin"
          >
            <User className="w-4 h-4 text-on-primary" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-on-primary focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-primary-container/98 border-t border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold tracking-wider uppercase py-2 border-b border-white/5 ${
                    isActive ? "text-secondary-fixed font-bold" : "text-on-primary-container"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/ibadah#reservasi"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-full bg-surface text-primary text-xs font-semibold uppercase tracking-widest shadow-md"
            >
              Temukan Gereja & Ibadah
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
