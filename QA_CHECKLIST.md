# QA Testing Checklist & Panduan Code Review Pull Request (PR)

> **Proyek:** Kantinku — Campus Canteen Ordering System (Group G4)  
> **Task Backlog:** [ST-07] Checklist Quality Assurance (QA) & Testing  
> **Status:** Aktif & Terstandarisasi  
> **Target Pengguna:** QA Tester, Code Reviewer, dan Developer  

---

## 1. Pendahuluan & Tujuan

Dokumen ini disusun sebagai acuan resmi pengujian kualitas perangkat lunak (*Quality Assurance*) dan standar panduan *Code Review* saat meninjau Pull Request (PR) developer pada repositori `g4-campus-canteen-ordering`.

Tujuan utama dokumen ini adalah:
1. **Memastikan Kualitas Fitur:** Seluruh skenario fungsionalitas, interaksi UI, dan *edge cases* terverifikasi sebelum kode digabungkan (*merge*) ke branch utama `main`.
2. **Standar Acuan Code Review:** Memberikan daftar periksa (*checklist*) yang objektif bagi reviewer untuk mengevaluasi kode, arsitektur komponen, serta implementasi kriteria penerimaan (*acceptance criteria*).
3. **Mencegah Regresi:** Menjamin bahwa penambahan fitur baru tidak merusak fitur yang sudah berjalan sebelumnya.

---

## 2. Matriks Skenario Pengujian (QA Test Matrix)

Tabel berikut memuat daftar skenario pengujian menyeluruh berdasarkan modul dan *User Story* yang ada pada sistem.

### Status Pengujian:
- `[ ]` Belum Diuji / Menunggu Verifikasi
- `[x]` Lolos Pengujian (Pass)
- `[!]` Gagal / Ditemukan Isu (Fail)

---

### Modul A: Daftar Menu Mahasiswa & Kategori (US1 / ST-02)

| ID Test | Kategori | Skenario Pengujian | Langkah Pengujian | Hasil yang Diharapkan | Prioritas | Status |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-MN-01** | Functional | Menampilkan daftar seluruh menu | Buka halaman utama aplikasi. | Kartu menu tampil dengan informasi lengkap: nama menu, nama tenant, label kategori, harga terformat rupiah (`Rp XX.XXX`), dan ilustrasi/emoji. | High | [ ] |
| **TC-MN-02** | Functional | Filter menu berdasarkan kategori | Klik salah satu pill kategori (contoh: "Makanan", "Minuman", "Snack"). | Hanya menu dengan kategori yang dipilih yang ditampilkan. Pill kategori aktif ditandai dengan latar belakang gelap (`bg-slate-900 text-white`). | High | [ ] |
| **TC-MN-03** | Functional | Reset filter kategori ke "Semua" | Klik pill kategori "Semua". | Seluruh menu dari semua kategori kembali ditampilkan. | Medium | [ ] |
| **TC-MN-04** | Functional | Filter menu berdasarkan tenant/kantin | Pilih salah satu kantin pada dropdown "Pilih kantin" (contoh: "Warteg Bu Siti"). | Hanya menu milik tenant terpilih yang ditampilkan. Angka jumlah menu ter-update sesuai jumlah menu tenant tersebut. | High | [ ] |
| **TC-MN-05** | Functional | Pencarian menu via kata kunci (Search) | Ketikkan nama menu (contoh: "Soto") pada kolom pencarian hero section. | Daftar menu langsung terfilter secara real-time mencocokkan kata kunci pencarian (case-insensitive). | High | [ ] |
| **TC-MN-06** | Functional | Pencarian berdasarkan nama tenant | Ketikkan nama kantin (contoh: "Mahmud") pada kolom pencarian. | Menampilkan seluruh menu yang disediakan oleh "Tenant Pak Mahmud". | Medium | [ ] |
| **TC-MN-07** | Edge Case | Pencarian dengan kata kunci tidak ada | Ketikkan kata kunci yang tidak terdapat pada data (contoh: "PizzaKeju999"). | Tampil tampilan status kosong (*empty state*): icon kaca pembesar 🔎, teks "Menu tidak ditemukan", dan saran "Coba kata kunci atau filter yang berbeda". | Medium | [ ] |
| **TC-MN-08** | Functional | Kombinasi filter kategori, tenant, dan search | Pilih tenant "Tenant Pak Mahmud", kategori "Makanan", lalu cari "Ayam". | Sistem menerapkan logika AND: hanya menu yang memenuhi ketiga kondisi sekaligus yang ditampilkan. | High | [ ] |

---

### Modul B: Badge Status Ketersediaan & Interaksi Tombol (US1 / ST-02)

| ID Test | Kategori | Skenario Pengujian | Langkah Pengujian | Hasil yang Diharapkan | Prioritas | Status |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-ST-01** | UI/UX | Tampilan badge status "Tersedia" | Periksa kartu menu dengan `isAvailable: true` (contoh: "Nasi Goreng Spesial"). | Badge di sudut kanan atas menampilkan teks "Tersedia" dengan indikator dot berwarna hijau (`bg-emerald-500`) dan teks hijau. | High | [ ] |
| **TC-ST-02** | UI/UX | Tampilan badge status "Habis" | Periksa kartu menu dengan `isAvailable: false` (contoh: "Ayam Penyet", "Kentang Goreng"). | Badge di sudut kanan atas menampilkan teks "Habis" dengan indikator dot berwarna merah (`bg-rose-500`) dan teks merah. | High | [ ] |
| **TC-ST-03** | Functional | **Tombol pada menu dengan status Habis tidak dapat diklik** | Arahkan kursor dan coba klik tombol pada kartu menu berstatus "Habis" (contoh: "Ayam Penyet"). | 1. Tombol menampilkan label **"Stok habis"**.<br>2. Tombol memiliki atribut HTML `disabled`.<br>3. Kursor mouse berubah menjadi `not-allowed`.<br>4. Latar belakang tombol menjadi abu-abu pudar (`bg-slate-100 text-slate-400`).<br>5. Aksi klik **TIDAK** memicu penambahan item ke dalam keranjang (tidak ada mutasi state). | **Critical** | [ ] |
| **TC-ST-04** | Functional | Tombol pada menu "Tersedia" dapat diklik | Klik tombol pada menu berstatus "Tersedia" (label "Tambah +"). | Tombol berstatus aktif, responsif terhadap klik, dan item bertambah ke keranjang pesanan. | **Critical** | [ ] |
| **TC-ST-05** | Accessibility | Aksesibilitas badge status | Gunakan screen reader atau inspeksi elemen pada badge status. | Elemen memiliki atribut `aria-label="Status menu: Tersedia"` atau `aria-label="Status menu: Habis"`. | Medium | [ ] |

---

### Modul C: Keranjang Belanja & Kalkulasi Harga (US3 / ST-01)

| ID Test | Kategori | Skenario Pengujian | Langkah Pengujian | Hasil yang Diharapkan | Prioritas | Status |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-CR-01** | UI/UX | Tampilan keranjang saat kosong | Buka aplikasi saat belum ada item yang dipilih. | Panel keranjang menampilkan *empty state*: ikon kantong belanja 🛍️, teks "Belum ada pesanan", deskripsi ajakan pesan, dan Total: `Rp 0`. | Medium | [ ] |
| **TC-CR-02** | Functional | Menambah item baru ke keranjang | Klik tombol "Tambah +" pada item berstatus Tersedia (contoh: "Es Teh Manis"). | Item muncul di keranjang dengan kuantitas = 1, nama, dan harga yang sesuai. Total harga ter-update secara otomatis. | **Critical** | [ ] |
| **TC-CR-03** | Functional | Menambah item yang sama berulang kali | Klik tombol "Tambah +" pada item yang sama sebanyak 3 kali berturut-turut. | Baris item di keranjang tidak terduplikasi; kuantitas item bertambah menjadi 3, dan total harga dikalikan secara akurat. | **Critical** | [ ] |
| **TC-CR-04** | Functional | Menambah beberapa item berbeda | Tambahkan "Nasi Goreng Spesial" (Rp 18.000) dan "Es Teh Manis" (Rp 5.000). | Keranjang memuat 2 baris item terpisah. Total harga menampilkan jumlah akumulatif (`Rp 23.000`). | High | [ ] |
| **TC-CR-05** | Functional | Menambah kuantitas via tombol `+` di keranjang | Klik tombol `+` pada salah satu item di daftar keranjang. | Kuantitas item tersebut bertambah 1 unit, total harga keseluruhan bertambah sesuai harga satuan item. | High | [ ] |
| **TC-CR-06** | Functional | Mengurangi kuantitas via tombol `-` di keranjang | Klik tombol `-` pada item yang memiliki kuantitas > 1. | Kuantitas item tersebut berkurang 1 unit, total harga keseluruhan berkurang sesuai harga satuan item. | High | [ ] |
| **TC-CR-07** | Functional | Mengurangi kuantitas dari 1 menjadi 0 | Klik tombol `-` pada item yang memiliki kuantitas = 1. | Item tersebut otomatis terhapus dari daftar keranjang belanja. Jika tidak ada item lain, keranjang kembali ke *empty state*. | High | [ ] |
| **TC-CR-08** | Functional | Menghapus item secara langsung via tombol "Hapus" | Klik tombol teks "Hapus" pada salah satu baris item keranjang. | Item tersebut langsung dihapus dari keranjang terlepas dari berapa pun jumlah kuantitasnya saat itu. Total harga diperbarui. | High | [ ] |
| **TC-CR-09** | Functional | Validasi format mata uang rupiah | Periksa harga satuan di keranjang dan baris Total. | Format mata uang konsisten menggunakan standar Indonesia Rupiah (IDR) tanpa desimal ganjil. | Medium | [ ] |

---

### Modul D: Navigasi & Badge Counter Header (Navbar)

| ID Test | Kategori | Skenario Pengujian | Langkah Pengujian | Hasil yang Diharapkan | Prioritas | Status |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-NV-01** | UI/UX | Badge counter saat keranjang kosong | Buka aplikasi saat keranjang masih kosong (`cartCount = 0`). | Badge merah counter pada tombol Keranjang di Navbar tidak ditampilkan (*hidden*). | Medium | [ ] |
| **TC-NV-02** | Functional | Real-time update badge counter | Tambahkan 2 porsi Nasi Goreng dan 1 Es Teh ke keranjang. | Badge counter di Navbar otomatis muncul dan menampilkan angka total item = `3` (`totalItems`). | High | [ ] |
| **TC-NV-03** | Functional | Pengurangan badge counter | Kurangi atau hapus item dari keranjang belanja. | Angka pada badge counter langsung berkurang secara sinkron dengan isi keranjang. | High | [ ] |
| **TC-NV-04** | UI/UX | Navigasi anchor klik tombol keranjang | Klik tombol "Keranjang" pada Navbar. | Halaman bergulir (*smooth scroll*) langsung memfokuskan pandangan ke panel `#cart`. | Low | [ ] |

---

### Modul E: Responsivitas & Tampilan Lintas Perangkat

| ID Test | Kategori | Skenario Pengujian | Langkah Pengujian | Hasil yang Diharapkan | Prioritas | Status |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-RS-01** | Responsive | Tampilan Mobile Viewport (< 640px) | Uji halaman pada resolusi layar ponsel (360px - 414px). | 1. Kartu menu tersusun rapi dalam 1 kolom vertikal.<br>2. Filter kategori dapat di-scroll horizontal tanpa merusak layout (*no horizontal page overflow*).<br>3. Panel keranjang berada di bawah daftar menu dan mudah diakses. | High | [ ] |
| **TC-RS-02** | Responsive | Tampilan Tablet Viewport (640px - 1023px) | Uji halaman pada resolusi tablet (768px - 834px). | Kartu menu tertata rapi dalam grid 2 kolom dengan jarak (*gap*) proporsional. | Medium | [ ] |
| **TC-RS-03** | Responsive | Tampilan Desktop Viewport (>= 1024px) | Uji halaman pada layar desktop / laptop (>= 1280px). | 1. Menu tertata dalam grid 3 kolom.<br>2. Panel keranjang berada di sisi kanan dengan posisi *sticky* (`lg:sticky lg:top-24`) saat halaman digulir. | High | [ ] |

---

### Modul F: Ketahanan Sistem & Edge Cases (Robustness)

| ID Test | Kategori | Skenario Pengujian | Langkah Pengujian | Hasil yang Diharapkan | Prioritas | Status |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-ED-01** | Edge Case | Input spasi kosong berlebih pada search bar | Masukkan string spasi saja `"     "` pada kolom pencarian. | Sistem melakukan *trim* string; daftar menu tetap ditampilkan utuh (tidak dianggap pencarian kosong yang error). | Medium | [ ] |
| **TC-ED-02** | Edge Case | Input karakter khusus / regex pada search bar | Masukkan karakter seperti `(`, `[`, `*`, `\`, `?` ke dalam search bar. | Sistem tidak mengalami crash (error regex parsing), pencarian berjalan aman sebagai string literal. | High | [ ] |
| **TC-ED-03** | Edge Case | Rapid clicking (spam klik tombol) | Lakukan klik cepat berkali-kali pada tombol "Tambah +" atau tombol kuantitas `+`/`-`. | State keranjang tetap konsisten, tidak ada perhitungan ganda yang keliru atau ketidaksinkronan angka. | High | [ ] |
| **TC-ED-04** | Edge Case | Integritas Immutability State React | Inspeksi fungsi utilitas `cart.js` (`addToCart`, `updateQuantity`, `removeFromCart`). | Seluruh fungsi mengembalikan array/objek baru tanpa memutasi (*mutate*) array state `cart` asli secara langsung. | **Critical** | [ ] |

---

## 3. Panduan Pelaksanaan Code Review Pull Request (PR)

Gunakan daftar periksa di bawah ini saat bertindak sebagai **Reviewer** sebelum memberikan persetujuan (*Approve*) atau meminta perubahan (*Request Changes*) pada PR developer.

```
                    ALUR VERIFIKASI PULL REQUEST (PR)
                    
  +------------------+      +-------------------+      +------------------+
  |  1. Baca Target  |      |  2. Jalankan Unit |      |  3. Uji Manual   |
  |  Task & User     | ---> |  Test & Linter    | ---> |  Sesuai QA       |
  |  Story PR        |      |  (npm test)       |      |  Checklist       |
  +------------------+      +-------------------+      +------------------+
                                                                 |
                                                                 v
  +------------------+      +-------------------+      +------------------+
  |  6. Putusan:     |      |  5. Evaluasi      |      |  4. Tinjau       |
  |  Approve /       | <--- |  Aksesibilitas &  | <--- |  Kerapian &      |
  |  Request Changes |      |  Responsifitas    |      |  Clean Code      |
  +------------------+      +-------------------+      +------------------+
```

### Checklist 1: Fungsionalitas & Kesesuaian Kebutuhan
- [ ] Apakah kode yang diajukan sudah menyelesaikan seluruh kriteria pada User Story / Task terkait?
- [ ] Apakah tidak ada fitur yang menyimpang dari rancangan spesifikasi sistem?
- [ ] Apakah skenario QA pada **Bagian 2** yang relevan dengan PR ini sudah diuji dan berstatus Lolos (`[x]`)?
- [ ] **Khusus Menu Habis:** Pastikan menu dengan status `isAvailable: false` memiliki tombol yang berstatus `disabled`, berkursor `not-allowed`, dan tidak memicu event handler `onAddToCart`.

### Checklist 2: Kualitas Kode (Clean Code & Best Practices)
- [ ] **Immutability:** Apakah pembaruan state pada React dilakukan secara *immutable* (menggunakan spread operator / map / filter, tanpa memodifikasi array/objek asli)?
- [ ] **Struktur Komponen:** Apakah komponen modular, memiliki tanggung jawab tunggal (*Single Responsibility Principle*), dan props didefinisikan secara jelas?
- [ ] **Penamaan Variabel & Fungsi:** Apakah nama fungsi dan variabel deskriptif serta menggunakan bahasa yang konsisten (contoh: `handleAddToCart`, `isAvailable`, `priceFormatter`)?
- [ ] **Tanpa Dead Code:** Apakah tidak ada `console.log` sisa debugging, variabel yang tidak terpakai, atau blok kode yang di-comment?
- [ ] **Penanganan Logika:** Apakah penanganan kondisi tepi (*edge cases*) seperti nilai `null`, `undefined`, atau angka `<= 0` ditangani dengan aman?

### Checklist 3: Pengujian Otomatis (Automated Testing)
- [ ] Apakah semua unit test pada Vitest (`npm test`) berjalan sukses dengan exit code 0?
- [ ] Apakah ada unit test baru yang ditambahkan untuk menguji fungsi utilitas atau logika bisnis baru?
- [ ] Apakah tidak ada *breaking changes* terhadap test suite yang sudah ada?

### Checklist 4: Tampilan, Styling & Responsivitas
- [ ] Apakah styling menggunakan utilitas Tailwind CSS yang konsisten dengan tema warna aplikasi (`brand-500`, `brand-600`, `slate-*`)?
- [ ] Apakah tata letak telah diverifikasi pada berbagai ukuran layar (*Mobile*, *Tablet*, dan *Desktop*)?
- [ ] Apakah efek interaktif (*hover*, *focus-visible*, *active*, *disabled*) telah diterapkan dengan baik dan nyaman dilihat?

### Checklist 5: Aksesibilitas (A11y) & Standar Web
- [ ] Apakah elemen interaktif menggunakan tag semantik HTML yang tepat (`<button>`, `<a>`, `<input>`, `<select>`)?
- [ ] Apakah tombol ikon atau badge memiliki `aria-label` yang informatif bagi pembaca layar (*screen reader*)?
- [ ] Apakah elemen yang bersifat dekoratif ditandai dengan `aria-hidden="true"`?
- [ ] Apakah fokus keyboard (*keyboard navigation*) terlihat jelas melalui outline atau ring fokus?

---

## 4. Template Komentar Review PR (GitHub PR Review Template)

Salin (*copy*) template markdown di bawah ini saat memberikan komentar review pada Pull Request developer di GitHub:

```markdown
### 📋 Hasil Review QA & Kode PR: [ID_TASK] - [JUDUL_TASK]

**Status Review:** [ ] APPROVED / [ ] REQUEST CHANGES / [ ] COMMENT

#### 1. Verifikasi QA Checklist
- [x] TC-ST-03: Tombol menu dengan status Habis nonaktif dan tidak dapat diklik.
- [x] TC-CR-02: Penambahan item ke keranjang berfungsi dengan tepat.
- [x] TC-CR-07: Mengurangi kuantitas ke 0 otomatis menghapus item dari keranjang.
- [x] TC-NV-02: Real-time update counter keranjang pada Navbar sinkron.
*(Centang skenario yang relevan dengan perubahan pada PR ini)*

#### 2. Kualitas Kode & Arsitektur
- [ ] State React dikelola secara immutable tanpa side-effect tersembunyi.
- [ ] Kode bersih dari `console.log` atau artefak debug.
- [ ] Unit test (`npm test`) lulus seluruhnya tanpa error.

#### 3. Catatan & Feedback Khusus:
> Tuliskan temuan atau saran perbaikan di sini jika ada (sertakan referensi file dan baris jika perlu).

#### 4. Kesimpulan:
- **Rekomendasi:** (Siap dimerge ke `main` / Perlu perbaikan minor / Perlu revisi fungsionalitas)
```

---

*Dokumen ini dikelola oleh Tim Pengembang & QA Kelompok G4 Kantinku. Segala perubahan skenario uji harus disepakati bersama dalam koordinasi sprint backlog.*
