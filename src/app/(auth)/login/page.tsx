"use client";

import { useState } from "react";
import Link from "next/link";
import { Church, Lock, Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login redirect to admin
    window.location.href = "/admin";
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="w-12 h-12 rounded-2xl bg-primary mx-auto flex items-center justify-center text-white shadow-lg mb-4">
          <Church className="w-6 h-6 text-secondary-fixed" />
        </div>
        <h2 className="font-serif text-3xl font-normal text-primary">
          Portal Internal Gereja
        </h2>
        <p className="mt-1 text-xs uppercase tracking-widest text-secondary font-semibold">
          Masuk untuk Pengurus &amp; Bendahara
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-surface-container-lowest py-8 px-6 shadow-xl rounded-3xl border border-outline-variant/30 sm:px-10">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                Alamat Email Pengurus
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gms.church"
                  className="w-full px-4 py-3 pl-10 rounded-xl border border-outline-variant/40 bg-surface text-sm focus:outline-none focus:border-primary"
                />
                <Mail className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-1">
                Kata Sandi
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pl-10 rounded-xl border border-outline-variant/40 bg-surface text-sm focus:outline-none focus:border-primary"
                />
                <Lock className="w-4 h-4 text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-primary text-on-primary text-xs font-semibold uppercase tracking-widest hover:bg-surface-variant hover:text-on-surface transition-all shadow-md flex items-center justify-center gap-2 mt-2"
            >
              <span>Masuk ke Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-outline-variant/20 text-center">
            <Link
              href="/"
              className="text-xs font-medium text-secondary hover:text-primary transition-colors"
            >
              ← Kembali ke Beranda Publik
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
