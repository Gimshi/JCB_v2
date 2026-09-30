"use client";

import { useState } from "react";
import { ChevronDown, Calendar, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServiceSelector() {
  const [campus, setCampus] = useState("Surabaya, Grand City");
  const [session, setSession] = useState("Minggu • KU 2 (10:00 WIB)");
  const [community, setCommunity] = useState("Umum & EagleKidz");

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-6 -mb-12" id="reservasi">
      <div className="bg-surface-container-lowest text-on-surface rounded-2xl shadow-xl p-4 md:p-3 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border border-outline-variant/30">
        {/* Segment 1: Kampus / Kota */}
        <div className="flex-1 px-4 py-2 hover:bg-surface-container-low transition-colors rounded-xl cursor-pointer">
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1">
            PILIH KAMPUS / KOTA
          </label>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">{campus}</span>
            <ChevronDown className="w-4 h-4 text-secondary" />
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-surface-container-high"></div>

        {/* Segment 2: Jadwal Ibadah */}
        <div className="flex-1 px-4 py-2 hover:bg-surface-container-low transition-colors rounded-xl cursor-pointer">
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1">
            JADWAL IBADAH
          </label>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">{session}</span>
            <Calendar className="w-4 h-4 text-secondary" />
          </div>
        </div>

        <div className="hidden md:block w-px h-10 bg-surface-container-high"></div>

        {/* Segment 3: Kategori Ibadah */}
        <div className="flex-1 px-4 py-2 hover:bg-surface-container-low transition-colors rounded-xl cursor-pointer">
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-secondary mb-1">
            KOMUNITAS / KELUARGA
          </label>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">{community}</span>
            <Users className="w-4 h-4 text-secondary" />
          </div>
        </div>

        {/* CTA Button Pill */}
        <div className="md:pl-2">
          <Link
            href="/ibadah"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-on-primary text-xs font-semibold uppercase tracking-widest transition-transform hover:-translate-y-0.5 shadow-md"
          >
            <span>Reservasi Kursi</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
