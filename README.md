# Kantinku — Campus Canteen Ordering System (Group G4)

Aplikasi web pemesanan kantin kampus. Mahasiswa memilih kantin (tenant),
menelusuri menu yang tersedia, lalu menambahkan item ke keranjang.

Repositori ini adalah proyek kelompok **G4** untuk mata kuliah Software
Development Life Cycle (SDLC).

> **Status: fondasi awal (ST-01).** Saat ini aplikasi sudah memiliki
> kerangka proyek, konfigurasi Tailwind CSS, komponen navbar dan kartu menu,
> serta state keranjang dasar. Fitur pemesanan lengkap menyusul pada task
> berikutnya sesuai Sprint Backlog.

## Fitur Saat Ini

- Melihat menu dari beberapa kantin (tenant) dengan data tiruan.
- Filter menu berdasarkan kategori dan kantin.
- Status ketersediaan setiap menu — **Tersedia** (hijau) atau **Habis**
  (merah), dengan tombol yang otomatis nonaktif saat stok habis.
- Menambah item ke keranjang, mengubah kuantitas, dan menghapus item.
- Badge counter pada ikon keranjang yang diperbarui secara realtime.

## Persyaratan

- Node.js versi LTS terbaru
- npm

## Menjalankan Proyek

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite (default `http://localhost:5173`).

### Perintah Lain

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan server pengembangan dengan HMR |
| `npm run build` | Membuat build produksi ke `dist/` |
| `npm run preview` | Menjalankan hasil build produksi secara lokal |
| `npm test` | Menjalankan test suite sekali (Vitest) |
| `npm run test:watch` | Menjalankan test suite dalam mode watch |

## Struktur Proyek

```
src/
├── App.jsx                  # State keranjang dan integrasi seluruh komponen
├── main.jsx                 # Entry point React
├── index.css                # Impor Tailwind CSS dan token warna
├── components/
│   ├── Navbar.jsx           # Judul aplikasi dan ikon keranjang + badge counter
│   └── MenuCard.jsx         # Kartu menu: nama, kategori, harga, status, tombol
├── data/
│   └── mockMenu.js          # Data tiruan kantin dan menu
└── utils/
    ├── cart.js              # Logika keranjang (tambah, ubah, hapus, total)
    └── cart.test.js         # Test unit untuk logika keranjang
```

## Alur Kerja Kolaborasi

Pengembangan mengikuti *Sprint Backlog* kelompok G4:

1. Ambil satu task dari backlog.
2. Buat branch bercabang dari `main`, misalnya
   `feat/st-01-scaffold`.
3. Kerjakan perubahan dan buat commit yang fokus.
4. Push branch dan buka Pull Request ke `main`.
5. Minta anggota tim lain mereview sebelum merge.

Setiap perubahan harus terhubung dengan task backlog yang sedang dikerjakan.

## Pembatasan

ST-01 ini murni sisi klien. Belum ada backend, autentikasi, basis data
terpusat, atau sinkronisasi antar perangkat. Data menu masih berupa data
tiruan di dalam kode dan status keranjang hanya bertahan selama sesi browser
terbuka.

## Lisensi

Proyek coursework. Hak cipta milik anggota kelompok G4.

## Catatan untuk Maintainer

Deskripsi repository dan topik GitHub (`react`, `vite`, `tailwindcss`,
`campus-canteen`, `sdlc`) belum dapat diperbarui oleh anggota tim non-admin —
perubahan metadata repository butuh hak admin. Pemilik repo
`BroReski/g4-campus-canteen-ordering` perlu menjalankannya secara manual:

```bash
gh repo edit BroReski/g4-campus-canteen-ordering \
  --description "Kantinku — aplikasi web pemesanan kantin kampus (Campus Canteen Ordering System). Proyek SDLC kelompok G4." \
  --add-topic react --add-topic vite --add-topic tailwindcss \
  --add-topic campus-canteen --add-topic sdlc
```

