# Architecture Overview

# Architecture Overview

Dokumen ini adalah panduan arsitektur sistem untuk Website Gereja menggunakan arsitektur **Next.js Fullstack Monorepo**. Dokumen ini mengatur struktur direktori, alur data, integrasi desain Google Stitch, serta kesiapan modul Admin Dashboard di masa mendatang.

---

## 1. Project Structure

Proyek ini dibangun dalam satu repositori (_Monorepo_) menggunakan Next.js App Router:

```text
[Project Root]/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (auth)/               # Login & Authentikasi Admin
│   │   ├── (public)/             # Halaman Publik Jemaat (Mengikuti Google Stitch)
│   │   │   ├── page.tsx          # Landing Page Utama
│   │   │   ├── acara/            # Jadwal Ibadah & Kegiatan
│   │   │   └── warta/            # Berita / Pengumuman Gereja
│   │   ├── (admin)/              # Dashboard Admin & Bendahara (In Development)
│   │   │   ├── acara/            # Kelola Acara & Kegiatan
│   │   │   └── keuangan/         # Kelola Pemasukan, Pengeluaran, & Laporan Kas
│   │   └── api/                  # Integrasi Webhook / API External
│   ├── components/               # Komponen UI
│   │   ├── ui/                   # Reusable UI (Shadcn UI / Tailwind)
│   │   ├── public/               # Komponen Tampilan Jemaat (Presisi Google Stitch)
│   │   └── admin/                # Komponen Dashboard Admin
│   ├── lib/                      # Config (Supabase/Prisma Client, Auth)
│   ├── services/                 # Server Actions & Query Handlers
│   ├── types/                    # Shared TypeScript Types
│   └── utils/                    # Helper Functions (Currency formatter, Date)
├── prisma/                       # Database Schema & Migrations
├── public/                       # Aset Statis (Logo, Gambar, Banner)
├── ARCHITECTURE.md               # Dokumen ini
├── PRD.md                        # Product Requirement Document
└── AGENTS.md                     # Agent Rules & Coding Standards

[Jemaat (Publik)]   <---> [Public Pages (Google Stitch Design)]
                                  |
[Admin / Bendahara] <---> [Admin Dashboard (In Development)]
                                  |
                       (Server Actions / API)
                                  |
                                  +---> [Supabase / NextAuth] (Auth & RBAC)
                                  |
                                  +---> [PostgreSQL Database] (Events, Financials, Users)
                                  |
                                  +---> [Cloud Storage] (Poster Acara & Nota Keuangan)

## 3. Core Components
3.1. Frontend - Public Pages (Jemaat)
Name: Church Public Portal

Description: Halaman publik untuk jemaat melihat jadwal ibadah, warta, dan acara gereja.

UI/UX Source: Mengikuti secara presisi (pixel-perfect / high fidelity) desain dari Google Stitch.

Tech: Next.js (App Router), React Server Components, Tailwind CSS.

3.2. Frontend - Admin Dashboard (Pengurus & Bendahara)
Name: Church Management Portal

Description: Dashboard internal untuk Admin mengelola acara dan Bendahara mengelola pencatatan keuangan. (Desain UI sedang dalam tahap perancangan/draft).

Tech: Next.js, Shadcn UI / Radix UI, React Hook Form + Zod.

3.3. Backend & Storage Layer
Database: PostgreSQL (via Supabase / Neon / Prisma ORM).

Storage: Supabase Storage / Cloudinary (Upload poster acara & bukti nota keuangan).

Authentication: Supabase Auth / NextAuth.js (Role-based: ADMIN_ACARA, BENDAHARA, SUPER_ADMIN).

### 3.1. Frontend

Name: [e.g., Web App, Mobile App]

Description: Briefly describe its primary purpose, key functionalities, and how users or other systems interact with it. E.g., 'The main user interface for interacting with the system, allowing users to manage their profiles, view data dashboards, and initiate workflows.'

Technologies: [e.g., React, Next.js, Vue.js, Swift/Kotlin, HTML/CSS/JS]

Deployment: [e.g., Vercel, Netlify, S3/CloudFront]

### 3.2. Backend Services

(Repeat for each significant backend service. Add more as needed.)

#### 3.2.1. [Service Name 1]

Name: [e.g., User Management Service, Data Processing API]

Description: [Briefly describe its purpose, e.g., "Handles user authentication and profile management."]

Technologies: [e.g., Node.js (Express), Python (Django/Flask), Java (Spring Boot), Go]

Deployment: [e.g., AWS EC2, Kubernetes, Serverless (Lambda/Cloud Functions)]

#### 3.2.2. [Service Name 2]

Name: [e.g., Analytics Service, Notification Service]

Description: [Briefly describe its purpose.]

Technologies: [e.g., Python, Kafka, Redis]

Deployment: [e.g., AWS ECS, Google Cloud Run]

## 4. Data Stores (Database Schema Overview)
users: id, email, role, name.

events: id, title, description, date_start, date_end, location, banner_url, status.

financial_accounts: id, name (Kas Utama, Kas Diakonia, Kas Pembangunan).

financial_transactions: id, type (IN / OUT), amount, account_id, category, description, proof_url, created_by, transaction_date.

audit_logs: Catatan riwayat aksi admin/bendahara untuk transparansi data keuangan.

## 5. Development Strategy
Phase 1 (Current): Selesaikan Halaman Publik (Jemaat) sesuai desain Google Stitch dengan data mock/dummy atau koneksi database awal.

Phase 2: Finalisasi Desain UI Dashboard Admin (Acara & Keuangan).

Phase 3: Integrasi Dashboard Admin dengan Server Actions & PostgreSQL.
```
