---

### File 2: `PRD.md`

```markdown
# Product Requirement Document (PRD)

## 1. Executive Summary
Website Gereja ini dikembangkan untuk menyediakan informasi bagi jemaat (jadwal ibadah, acara, pengumuman) serta menyediakan sistem manajemen internal untuk pengelolaan kegiatan dan pencatatan keuangan kas gereja yang transparan.

---

## 2. Target Users & Access Control (RBAC)

1. **Jemaat / Publik (Tanpa Login):**
   - Melihat jadwal ibadah mingguan.
   - Melihat daftar acara/kegiatan gereja mendatang.
   - Membaca warta atau berita gereja.
2. **Admin Acara (Login Required):**
   - Mengelola (CRUD) postingan acara, jadwal ibadah, dan poster kegiatan.
3. **Bendahara (Login Required):**
   - Pencatatan kas masuk (Kolekte, Donasi, Persembahan) dan kas keluar (Operasional, Diakonia).
   - Mengunggah foto bukti nota/transaksi.
   - Melihat dan mengunduh ringkasan laporan keuangan.
4. **Super Admin:** Access penuh ke semua modul + kelola akun pengurus.

---

## 3. Scope & Feature Requirements

### 3.1. Halaman Publik (Public Portal)

- **Kepatuhan Desain:** Seluruh layout, komponen, dan tata letak WAJIB menyesuaikan dan presisi dengan rancangan desain dari **Google Stitch**.
- **Kelengkapan Fitur:**
  - **Landing Page:** Hero section, ringkasan jadwal ibadah terdekat, warta terbaru.
  - **Halaman Acara:** Grid/Daftar kegiatan mendatang dengan detail waktu & lokasi.
  - **Halaman Warta/Berita:** Pengumuman resmi gereja.

### 3.2. Dashboard Admin - Manajemen Acara (In Design Phase)

- CRUD Acara (Title, Deskripsi, Tanggal, Lokasi, Status Draft/Published).
- Upload gambar/poster acara.

### 3.3. Dashboard Admin - Manajemen Keuangan (In Design Phase)

- Input Pemasukan & Pengeluaran Kas.
- Lampiran foto nota / bukti transfer.
- Filter laporan per bulan/tahun & export ringkasan kas.
- Audit trail (Pencatatan otomatis siapa yang menginput data).

---

## 4. Non-Functional Requirements (NFR)

- **Design Fidelity:** Komponen publik harus mencerminkan proporsi dan kerapihan desain Google Stitch.
- **Layout Responsif & Density:** Menghindari tampilan "AI Slop" (ruang kosong/padding berlebihan di layar desktop). Layout publik harus terlihat pas, padat, dan elegan.
- **Keamanan Data Keuangan:** Modul keuangan hanya bisa diakses oleh role `BENDAHARA` dan `SUPER_ADMIN`.
