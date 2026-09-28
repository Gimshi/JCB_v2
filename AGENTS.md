# AGENTS.md - Rules & Context for AI Agent (Antigravity)

Dokumen ini berisi aturan wajib bagi AI Agent (Antigravity) saat menulis, mengenerate, atau merestrukturisasi kodingan pada proyek ini.

---

## 1. Primary Context

Sebelum mulai mengoding, Agent wajib membaca file panduan utama:

- `ARCHITECTURE.md`: Struktur folder monorepo dan arsitektur Next.js.
- `PRD.md`: Lingkup fitur, aturan peran (RBAC), dan persyaratan proyek.

---

## 2. Tech Stack Standards

- **Framework:** Next.js (App Router, React Server Components).
- **Styling:** Tailwind CSS.
- **Language:** TypeScript (Strict mode, NO `any` types).
- **Database / ORM:** PostgreSQL / Prisma ORM / Supabase Client.
- **Form Handling:** React Hook Form + Zod Validation.

---

## 3. UI/UX & Anti-AI Slop Rules (PENTING)

1. **Google Stitch Fidelity:**
   - Untuk semua komponen dan halaman publik di `src/app/(public)/`, WAJIB mengikuti layout, warna, dan proporsi dari desain Google Stitch yang dirujuk.
2. **Prevent Narrow / Sparse Layouts (Anti-AI Slop):**
   - Gunakan container lebar standar: `max-w-7xl` atau `container mx-auto px-4 sm:px-6 lg:px-8` untuk halaman publik.
   - JANGAN gunakan container sempit (`max-w-md` atau `max-w-2xl`) pada layout utama halaman publik.
   - Hindari padding vertikal berlebihan (misal: `py-24` atau `py-32`). Gunakan spacing responsif yang seimbang seperti `py-6 md:py-12`.
   - Manfaatkan Tailwind Grid (`grid-cols-1 md:grid-cols-3 lg:grid-cols-4`) agar konten terisi seimbang dan tidak menyisakan ruang kosong yang aneh di layar desktop.

---

## 4. Coding & Security Rules

- **Server Actions:** Gunakan Next.js Server Actions untuk mutasi data.
- **Validation:** Semua form input dan payload request harus divalidasi menggunakan Zod schema.
- **Role Protection:** Pastikan area admin memverifikasi session & role user sebelum mengeksekusi action/query.
- **Financial Format:** Nilai uang disimpan dalam tipe data `number`/`bigint` (satuan Rupiah) dan diformat tampilan menggunakan helper `formatRupiah()`.

---

## 5. Development Focus

- **Saat Ini:** Fokus utama adalah membangun Halaman Publik di `src/app/(public)/` agar presisi dengan desain Google Stitch.
- **Dashboard Admin:** Persiapkan struktur folder & tipe data TypeScript-nya, tetapi jangan buat UI kompleks admin sebelum rancangan desain admin difinalisasi.
