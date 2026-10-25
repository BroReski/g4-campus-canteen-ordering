# Kantinku - Campus Canteen Ordering System (Group G4)

<<<<<<< Updated upstream
Aplikasi web pemesanan kantin kampus. Mahasiswa memilih kantin (tenant),
menelusuri menu, lalu mengisi keranjang dan membuat pesanan.
=======
Aplikasi web pemesanan kantin kampus (Campus Canteen Ordering System) yang dikembangkan oleh **Kelompok G4** untuk mata kuliah Software Development Life Cycle (SDLC). Aplikasi ini memudahkan mahasiswa menelusuri tenant kantin, mencari menu makanan/minuman, memantau status ketersediaan stok, dan mengelola keranjang pemesanan secara interaktif.
>>>>>>> Stashed changes

**Tautan Resmi Trello Board Kelompok G4:** https://trello.com/invite/b/6acdaa32a8eeea31652f66dc/ATTI48221c243646f9c5b23a42a39bd658b9FE0010AD/sdlcp11

<<<<<<< Updated upstream
## Status Pengembangan

Pengembangan berjalan secara bertahap melalui *Sprint Backlog*. Setiap task
dikerjakan pada branch tersendiri dan digabungkan ke `main` lewat Pull Request
yang direview oleh anggota tim lain.

| Task | Judul | Status |
| --- | --- | --- |
| ST-01 | Setup Proyek Dasar (React + Vite + Tailwind CSS) & Komponen Keranjang | dikerjakan |
=======
## Daftar Isi

1. [Fitur Utama](#fitur-utama)
2. [Tech Stack](#tech-stack)
3. [Prasyarat Sistem (Prerequisites)](#prasyarat-sistem-prerequisites)
4. [Panduan Setup & Instalasi (Quick Start)](#panduan-setup--instalasi-quick-start)
5. [Daftar Perintah (Available Scripts)](#daftar-perintah-available-scripts)
6. [Struktur Direktori Proyek](#struktur-direktori-proyek)
7. [Alur Kolaborasi & Git Workflow](#alur-kolaborasi--git-workflow)
8. [Panduan Troubleshooting](#panduan-troubleshooting)
9. [Batasan Arsitektur Saat Ini](#batasan-arsitektur-saat-ini)
10. [Tim Pengembang & Lisensi](#tim-pengembang--lisensi)

## Fitur Utama

* **Katalog & Tenant Kantin**: Menampilkan daftar menu dari berbagai tenant kantin kampus dengan visualisasi kartu (menu card) yang responsif.
* **Pencarian & Multi-Filter**: Pencarian menu berdasarkan kata kunci (keyword search) serta filter kategori dan tenant secara realtime.
* **Status Ketersediaan Menu**: Indikator stok **Tersedia** (badge hijau) dan **Habis** (badge merah), dengan tombol pemesanan yang otomatis dinonaktifkan ketika stok habis.
* **Manajemen Keranjang Belanja**: Tambah item menu, sesuaikan jumlah pesanan (increment/decrement quantity), kalkulasi harga otomatis, dan hapus item dari keranjang.
* **Navbar Interaktif & Badge Counter**: Penghitung jumlah item di keranjang yang diperbarui secara reaktif.

## Tech Stack
>>>>>>> Stashed changes

| Layer / Kategori | Teknologi | Deskripsi |
| --- | --- | --- |
| **Framework UI** | React 19 (`react`, `react-dom`) | Komponen deklaratif & state reaktif |
| **Build Tool & Dev Server** | Vite 8 (`@vitejs/plugin-react`) | Tooling modern dengan Hot Module Replacement (HMR) cepat |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) | Utility-first CSS engine terbaru |
| **Unit Testing** | Vitest 5 | Test runner cepat berbasis native ESM & Vite pipeline |
| **Package Manager** | npm | Pengelola dependensi proyek |

## Prasyarat Sistem (Prerequisites)

Sebelum memulai proses instalasi, pastikan lingkungan lokal Anda memenuhi persyaratan berikut:

* **Node.js**: Versi LTS terbaru (disarankan **Node.js v18.x**, **v20.x**, atau **v22+**). Periksa versi dengan perintah `node -v`.
* **npm**: Versi 9.x atau lebih baru (bawaan Node.js). Periksa versi dengan perintah `npm -v`.
* **Git**: Terpasang pada sistem operasi. Periksa versi dengan perintah `git -v`.

## Panduan Setup & Instalasi (Quick Start)

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan proyek di mesin lokal:

### 1. Clone Repository

Buka terminal dan clone repository dari GitHub:

```bash
git clone https://github.com/BroReski/g4-campus-canteen-ordering.git
cd g4-campus-canteen-ordering
```

### 2. Instal Dependensi

Pasang semua library dan modul yang dibutuhkan:

```bash
npm install
```

**Catatan:** Pastikan koneksi internet stabil saat proses download `node_modules` berlangsung.

### 3. Jalankan Development Server

Jalankan server pengembangan lokal:

```bash
npm run dev
```

<<<<<<< Updated upstream
Buka alamat lokal yang ditampilkan Vite.
=======
Output terminal akan menampilkan URL akses lokal, secara default:
```text
  VITE v8.x.x  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Buka browser Anda dan akses: `http://localhost:5173`

## Daftar Perintah (Available Scripts)

Semua perintah standar yang dapat dijalankan melalui `npm`:

| Perintah | Deskripsi | Kapan Digunakan |
| --- | --- | --- |
| `npm run dev` | Menjalankan Vite development server dengan HMR | Saat pengembangan aktif di lokal |
| `npm run build` | Mengompilasi dan mengoptimasi aset produksi ke folder `dist/` | Sebelum deployment atau saat validasi build |
| `npm run preview` | Menjalankan web server lokal untuk melihat hasil folder `dist/` | Memverifikasi bundle produksi sebelum rilis |
| `npm test` | Menjalankan seluruh unit test suite sekali jalan | Saat validasi logika atau pada pipeline CI/CD |
| `npm run test:watch` | Menjalankan Vitest dalam mode interaktif (watch mode) | Saat menulis kode unit test baru (TDD) |

## Struktur Direktori Proyek

```text
g4-campus-canteen-ordering/
├── public/                 # Aset statis yang disajikan langsung
├── src/
│   ├── components/         # Komponen UI modular
│   │   ├── MenuCard.jsx    # Kartu item menu, harga, badge stok, tombol aksi
│   │   └── Navbar.jsx      # Header aplikasi, brand, dan tombol keranjang
│   ├── data/
│   │   └── mockMenu.js     # Data tiruan tenant, menu, dan kategori
│   ├── utils/
│   │   ├── cart.js         # Pure function logika keranjang (add, update, remove, total)
│   │   └── cart.test.js    # Unit test Vitest untuk logika keranjang
│   ├── App.jsx             # Root container, filter logic, dan integrasi keranjang
│   ├── index.css           # Konfigurasi Tailwind CSS v4 & custom styles
│   └── main.jsx            # Entry point ReactDOM
├── .gitignore              # Daftar file yang diabaikan oleh Git
├── index.html              # Template HTML utama Vite
├── package.json            # Metadata proyek, dependencies, dan scripts
├── package-lock.json       # Kunci versi dependensi npm yang deterministik
├── vite.config.js          # Konfigurasi Vite (React plugin & Tailwind CSS)
└── README.md               # Dokumentasi proyek dan panduan setup
```
>>>>>>> Stashed changes

## Alur Kolaborasi & Git Workflow

<<<<<<< Updated upstream
Proyek coursework. Hak cipta milik anggota kelompok G4.
=======
Untuk menjaga kebersihan riwayat commit dan kualitas kode kelompok G4:

### 1. Cabang Fitur (Branching Model)
* Selalu buat branch baru dari cabang `main` terbaru:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b feat/[ST-xx]-nama-fitur
  ```
* Contoh format nama branch:
  * `feat/[ST-03]-setup-ci`
  * `fix/[ST-02]-badge-color`
  * `refactor/cart-logic`

### 2. Standar Commit (Conventional Commits)
Gunakan format commit pesan yang deskriptif dan terstandardisasi:
* `feat: [ST-xx] tambah filter tenant di sidebar`
* `fix: perbaiki kalkulasi subtotal saat kuantitas nol`
* `test: tambahkan kasus uji untuk removeItem di cart.test.js`
* `chore: update dependensi package.json`

### 3. Pengujian Mandiri Sebelum Push
Pastikan kode tidak merusak build dan seluruh test unit lulus:
```bash
npm test
npm run build
```

### 4. Pull Request & Review
1. Lakukan push branch ke remote repository: `git push origin feat/[ST-xx]-nama-fitur`.
2. Buka Pull Request (PR) ke branch `main`.
3. Cantumkan nomor task Sprint Backlog dan deskripsi perubahan secara ringkas.
4. Minimal 1 anggota tim wajib melakukan review dan approval sebelum PR di-merge.

## Panduan Troubleshooting

Berikut adalah solusi untuk kendala yang umum terjadi saat setup:

### 1. 'vitest' atau 'vite' Tidak Dikenali
* **Penyebab**: Folder `node_modules` belum diunduh atau instalasi dependensi terputus.
* **Solusi**: Jalankan `npm install` kembali di direktori root proyek.

### 2. Port 5173 Sudah Digunakan
* **Penyebab**: Aplikasi lain atau instance Vite sebelumnya masih aktif di background.
* **Solusi**: Vite secara otomatis akan mencoba port berikutnya (misal `5174`). Anda juga dapat menentukan port secara manual via CLI:
  ```bash
  npm run dev -- --port 3000
  ```

### 3. Error Konflik Dependensi saat npm install
* **Solusi**: Bersihkan cache npm atau gunakan instalasi bersih:
  ```bash
  npm cache clean --force
  npm ci
  ```

## Batasan Arsitektur Saat Ini

* **Client-Side State**: Seluruh status keranjang dan transaksi saat ini disimpan di memory lokal browser (React State) dan akan ter-reset jika halaman di-refresh.
* **Mock Data**: Data tenant dan menu masih bersifat statis dari file `mockMenu.js` (belum terhubung ke database atau backend API eksternal).
* **Autentikasi**: Belum terdapat sistem login mahasiswa maupun admin tenant (direncanakan pada sprint berikutnya).

## Tim Pengembang & Lisensi

Proyek ini dikembangkan untuk kebutuhan akademik mata kuliah Software Development Life Cycle (SDLC).

**Anggota Kelompok G4:**
1. Ahmad Fuady
2. Alyasa Pradipta Haikal Waluyo
3. Muhammad Reski
4. Dimas Herdiansyah
5. Farhan Fathur Rahman
6. Novendy Farhanudin
7. Geoffta Handiyan Akwila

Hak cipta milik **Kelompok G4** - Mahasiswa & Kontributor Repositori.
>>>>>>> Stashed changes
