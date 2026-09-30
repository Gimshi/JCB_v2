# JCB Church Website (v2)

Website resmi sistem informasi dan portal jemaat Gereja (JCB) yang dibangun menggunakan **Next.js App Router**, **Tailwind CSS**, dan **Prisma ORM** (PostgreSQL).

---

## 📋 Fitur Utama

- **Portal Publik (Jemaat):**
  - **Landing Page:** Informasi gereja, tayangan ibadah, persembahan/donasi, dan lokasi campus.
  - **Jadwal Acara & Ibadah:** Daftar kegiatan dan ibadah raya.
  - **Warta & Pengumuman:** Informasi berita terkini seputar jemaat.
  - **Persembahan & Memberi:** Informasi rekening & QRIS persembahan/kolekte.
- **Admin & Management Portal (In Development):**
  - Kelola Jadwal & Acara Gereja.
  - Pencatatan Transaksi & Kas Keuangan Gereja (Kas Utama, Kas Diakonia, Kas Pembangunan).
  - RBAC (*Role-Based Access Control*): `SUPER_ADMIN`, `ADMIN_ACARA`, `BENDAHARA`.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router, React Server Components)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Database & ORM:** PostgreSQL / Prisma ORM
- **Package Manager:** Bun (direkomendasikan) / npm / pnpm / yarn

---

## 🚀 Panduan Memulai (Getting Started)

### 1. Prasyarat System

Pastikan perangkat Anda sudah terinstall:
- [Node.js](https://nodejs.org/) (v18.x atau lebih baru)
- [Bun](https://bun.sh/) (Opsional tapi direkomendasikan, atau gunakan `npm`)
- [PostgreSQL](https://www.postgresql.org/) (Bisa menggunakan PostgreSQL Lokal, Supabase, atau Neon DB)

---

### 2. Install Dependencies

Jalankan perintah berikut pada terminal di folder proyek:

Menggunakan **Bun**:
```bash
bun install
```

Atau menggunakan **npm**:
```bash
npm install
```

---

### 3. Konfigurasi Environment Variables (`.env`)

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Buka file `.env` dan sesuaikan nilainya:

```env
# URL Koneksi PostgreSQL
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/jcb_church?schema=public"

# NextAuth / Auth Secret
NEXTAUTH_SECRET="your-super-secret-jwt-key-replace-in-production"
NEXTAUTH_URL="http://localhost:3000"
```

---

### 4. Setup Database & Prisma ORM

Generate Prisma Client dan Push Schema ke database PostgreSQL:

Menggunakan **Bun**:
```bash
# Generate Prisma Client
bunx prisma generate

# Synchronize schema ke database (Development)
bunx prisma db push
```

Atau menggunakan **npx**:
```bash
npx prisma generate
npx prisma db push
```

*(Opsional)* Untuk melihat dan mengelola isi database melalui browser interface:
```bash
bunx prisma studio
```

---

### 5. Jalankan Local Development Server

Jalankan server pengembang:

Menggunakan **Bun**:
```bash
bun dev
```

Atau menggunakan **npm**:
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) pada browser Anda untuk melihat hasilnya.

---

## 📜 Perintah yang Tersedia (Available Scripts)

| Perintah | Deskripsi |
| :--- | :--- |
| `bun dev` / `npm run dev` | Menjalankan aplikasi di mode pengembangan (`http://localhost:3000`) |
| `bun run build` / `npm run build` | Membuat *production build* aplikasi |
| `bun start` / `npm start` | Menjalankan aplikasi versi *production build* |
| `bun run lint` / `npm run lint` | Menjalankan linter ESLint untuk mengecek kualitas kode |
| `bunx prisma studio` | Membuka UI web Prisma Studio untuk mengelola data di database |

---

## 📁 Struktur Folder Utama

```text
jcbv2/
├── prisma/               # Schema Prisma DB & Migrasi
├── public/               # Aset statis (gambar, logo, icon)
├── src/
│   ├── app/              # Next.js App Router (Pages & Layouts)
│   │   ├── (auth)/       # Halaman Autentikasi
│   │   ├── (public)/     # Halaman Publik (Jemaat)
│   │   └── (admin)/      # Dashboard Internal Admin & Bendahara
│   ├── components/       # UI Components (Reusable components)
│   ├── lib/              # Konfigurasi Client (Prisma, Auth)
│   ├── services/         # Server Actions & Query Logic
│   ├── types/            # TypeScript Interface & Type Definitions
│   └── utils/            # Helper Functions (Format Rupiah, Date, dsb.)
├── ARCHITECTURE.md       # Arsitektur detail sistem
├── PRD.md                # Product Requirements Document
├── AGENTS.md             # Panduan standar koding untuk AI Agent
└── README.md             # Dokumentasi dan panduan menjalankan aplikasi
```

---

## 🔗 Dokumentasi Terkait

- [ARCHITECTURE.md](file:///c:/Users/Acer/Documents/JCB/jcbv2/architecture.md) — Penjelasan arsitektur proyek dan struktur modul.
- [PRD.md](file:///c:/Users/Acer/Documents/JCB/jcbv2/PRD.md) — Lingkup fitur dan hak akses pengguna (RBAC).
- [AGENTS.md](file:///c:/Users/Acer/Documents/JCB/jcbv2/AGENTS.md) — Aturan koding dan panduan AI Agent.
