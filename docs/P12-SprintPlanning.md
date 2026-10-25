# P12 | ESTIMATION & SPRINT PLANNING

**STUDENT TEMPLATE — SOFTWARE DEVELOPMENT LIFE CYCLE**

## PETUNJUK

Gunakan Product Backlog from P11. Relative estimation dengan 1, 2, 3, 5, 8 (bukan jam). Reveal individual votes bersama dan diskusikan perbedaan. Capacity 20 → 14 adalah simulasi, bukan velocity historis.

---

## A. PROJECT INFORMATION

| Information Field | Isi Kelompok |
| --- | --- |
| **Kelompok / Case** | G4 - Campus Canteen Ordering |
| **Anggota** | - Ahmad Fuady<br>- Alyasa Pradipta Haikal Waluyo<br>- Muhammad Reski<br>- Dimas Herdiansyah<br>- Farhan Fathur Rahman<br>- Novendy Farhanudin<br>- Geoffta Handiyan Akwila |
| **P11 Product Backlog Document Link** | [Campus Canteen Ordering](https://docs.google.com/document/d/11JH9TahWUnA7knV8kf4LrVxjy1I2UeWh3OwPsaYpzdA/edit?tab=t.x4qzd3awzmbh) |
| **Trello Document Link** | https://trello.com/invite/b/6acdaa32a8eeea31652f66dc/ATTI48221c243646f9c5b23a42a39bd658b9FE0010AD/sdlcp11 |

---

## B. ESTIMATION TABLE

| Product Backlog Item Identifier / Priority Order | Individual Planning Poker Votes | Agreed Story Points | Estimation Reason and Uncertainty |
| --- | --- | :---: | --- |
| **US1 Melihat ketersediaan menu** / priority 1 | Ahmad: 2, Dimas: 2, Haikal: 2, Reski: 3, Farhan: 2, Farhanudin: 2, Geoffta: 2 | **2** | Menampilkan menu per tenant beserta status ketersediaan. Sangat sederhana (read-only) tanpa form input. Dipakai sebagai story referensi terkecil. **Ketidakpastian:** Jika sistem harus load gambar menu resolusi tinggi, bisa sedikit melambat. |
| **US2 Tenant update ketersediaan menu** / priority 2 | Ahmad: 3, Dimas: 5, Haikal: 4, Reski: 5, Farhan: 5, Farhanudin: 5, Geoffta: 5 | **5** | Lebih besar dari US1 karena ada fungsi input (aksi tenant) dan simpan ke database untuk update realtime. **Ketidakpastian:** Koneksi internet tenant mungkin lambat saat jam sibuk (A3). |
| **US3 Membuat order** / priority 3 | Ahmad: 3, Dimas: 5, Haikal: 5, Reski: 4, Farhan: 5, Farhanudin: 5, Geoffta: 5 | **5** | Menyimpan keranjang belanja dan memvalidasi ketersediaan menu. Bergantung pada US1. **Ketidakpastian:** Varian item (misal: pedas/sedang) tidak ada di P9, jadi kompleksitas tambahan belum dihitung. |
| **US9 [INJECTION] Pembatalan otomatis & notifikasi** / priority 4 | Ahmad: 8, Dimas: 8, Haikal: 8, Reski: 8, Farhan: 8, Farhanudin: 8, Geoffta: 7 | **8** | Deteksi bentrok stok secara real-time dan push notification ke student. **Ketidakpastian tinggi:** Aturan waktu tunggu konfirmasi belum jelas (Q6), dan integrasi notifikasi (push/WA) butuh effort besar. |
| **US8 Tahan pesanan sampai dibayar** / priority 5 | Ahmad: 3, Dimas: 5, Haikal: 5, Reski: 5, Farhan: 5, Farhanudin: 5, Geoffta: 5 | **5** | Menambah status "Menunggu Pembayaran" + tombol kasir "Lunas" (AC8.1). **Ketidakpastian:** Pembayaran manual di luar sistem (C5) rentan salah klik oleh kasir. |
| **US5 Daftar order masuk & update status** / priority 6 | Ahmad: 5, Dimas: 8, Haikal: 8, Reski: 8, Farhan: 8, Farhanudin: 8, Geoffta: 8 | **8** | Membangun dashboard operasional utama kasir. Menyentuh banyak logic perubahan state. **Ketidakpastian:** Tidak boleh menambah beban kasir (C4), UI harus sangat optimal. |
| **US4 Status pesanan mandiri** / priority 7 | Ahmad: 3, Dimas: 5, Haikal: 5, Reski: 5, Farhan: 5, Farhanudin: 5, Geoffta: 6 | **5** | UI mahasiswa untuk melacak pesanan. Bergantung pada update dari US5. **Ketidakpastian:** Waktu persiapan berbeda per menu (C3) menyulitkan estimasi jam pasti. |
| **US6 Batas order sesuai kapasitas** / priority 8 | Ahmad: 2, Dimas: 3, Haikal: 3, Reski: 3, Farhan: 3, Farhanudin: 3, Geoffta: 3 | **3** | Fitur throttling. Jika batas antrean tercapai, tolak order baru. **Ketidakpastian:** Nilai pasti batas (limit) kapasitas dapur belum diketahui (Q2). |
| **US7 Identifikasi order belum diambil** / priority 9 | Ahmad: 2, Dimas: 2, Haikal: 2, Reski: 2, Farhan: 2, Farhanudin: 3, Geoffta: 2 | **2** | Sekadar query filter tambahan untuk order yang sudah matang tapi lewat batas waktu. Kecil seperti US1. **Ketidakpastian:** Penyebab asli order ditinggalkan belum tervalidasi (A5). |

---

## C. CAPACITY & SPRINT GOAL

| Information Field | Isi Kelompok |
| --- | --- |
| **Initial Sprint Capacity** | 20 points |
| **Total Story Points of Candidate Items** | 43 points (2+5+5+8+5+8+5+3+2) - 9 kandidat |
| **Sprint Goal** | Mahasiswa dapat melihat menu yang tersedia, kasir dapat update stok secara real-time, mahasiswa dapat membuat pesanan, dan sistem otomatis membatalkan pesanan jika terjadi bentrok stok. |
| **User value / dependency** | Menjawab akar masalah antre lama (P1) dan melindungi mahasiswa dari PHP ketersediaan makanan akibat bentrok fisik vs digital (US9). Urutan pengerjaan logis: US2 → US1 → US3 → US9. |

---

## D. INITIAL SPRINT BACKLOG

| Selected Product Backlog Item | Points | Work Plan | Goal / Dependency |
| --- | :---: | --- | --- |
| **US1 Melihat ketersediaan menu** | 2 | Tampilan daftar menu per tenant + sinkronisasi status (AC1.1, AC1.2). | Dasar dari US3; menjawab keluhan menu habis baru diketahui setelah antre (F1). |
| **US2 Tenant update ketersediaan menu** | 5 | Tombol toggle cepat di UI kasir + aksi simpan ke database (AC2.1, AC2.2). | Wajib agar data US1 tidak basi. Sumber kebenaran tunggal (NFR2, Q4). |
| **US3 Membuat order** | 5 | Fitur keranjang + tombol checkout + validasi awal (AC3.1, AC3.2). | Bergantung pada US1. Alur inti pemesanan (N3). |
| **US9 [INJECTION] Pembatalan otomatis** | 8 | Pembuatan sistem validasi stok real-time ganda + trigger notifikasi batal (AC9.1, AC9.2). | Menyelesaikan masalah Change Injection P11. Memastikan mahasiswa tidak menunggu pesanan mustahil. |
| **Total Story Points** | **20 / 20** | **Excluded items** | US8 (5pt): Tidak muat. US5 (8pt): Tidak muat. US4 (5pt): Tidak muat. US6 (3pt) & US7 (2pt): Tidak muat. Semuanya ditunda ke Sprint 2. |

---

## E. CAPACITY SHOCK

**Scenario:** satu anggota tidak tersedia, capacity turun dari 20 menjadi 14 points.

| Information Field | Isi Kelompok |
| --- | --- |
| **Impact on Sprint Plan** | Total poin awal (20) kini melebihi kapasitas baru (14). Selisih 6 poin. **Keputusan:** Tim wajib mengeluarkan US9 (8 poin) dari Sprint ini. Jika membuang US3 (5pt) atau US2 (5pt), total poin menjadi 15 (masih > 14). Secara matematis dan fungsional, membuang US9 adalah satu-satunya pilihan agar kapasitas terpenuhi (tersisa 12 poin) sambil tetap menjaga kelancaran alur inti pesanan (US1, US2, US3). |
| **Revised Sprint Capacity** | 14 points |

---

## F. REVISED SPRINT BACKLOG

| Product Backlog Item Identifier | Selected Initially? | Selected After Capacity Change? | Story Points and Reason |
| --- | :---: | :---: | --- |
| **US1 Melihat ketersediaan menu** | Yes | Yes | **2;** Tetap dipilih. Syarat mutlak mengatasi keluhan mahasiswa antre buta (F1). |
| **US2 Tenant update ketersediaan menu** | Yes | Yes | **5;** Tetap dipilih. Jika dikeluarkan, US1 hanya akan menampilkan data statis yang tak pernah diperbarui. |
| **US3 Membuat order** | Yes | Yes | **5;** Tetap dipilih. Jantung aplikasi. Tanpa ini, tidak ada produk pemesanan (N3). |
| **US9 [INJECTION] Pembatalan otomatis** | Yes | No | **8;** Dikeluarkan karena kapasitas anjlok 20 → 14. Satu-satunya item yang masuk akal dibuang secara point maupun ketergantungan fitur. |
| **US8 Tahan pesanan sampai dibayar** | No | No | **5;** Tidak muat sejak awal. |
| **US5 Daftar order masuk & update** | No | No | **8;** Tidak muat sejak awal. |
| **US4 Status pesanan mandiri** | No | No | **5;** Tidak muat sejak awal. |
| **US6 Batas order sesuai kapasitas** | No | No | **3;** Tidak muat sejak awal. |
| **US7 Order siap tak diambil** | No | No | **2;** Tidak muat sejak awal. |
| **Revised Selected Story Points Total** | **20 / 20** | **12 / 14** | Scope sukses dipangkas untuk beradaptasi dengan kapasitas tim yang berkurang (14 poin). Disisakan 2 poin untuk berjaga-jaga (buffer). |

---

## G. TRADE-OFF & EVIDENCE

| Reflection Question | Isi Kelompok |
| --- | --- |
| **Deferred Items and Reasons** | US9 terpaksa ditunda ke Sprint 2 karena Capacity Shock (20 → 14). US8, US5, US4, US6, US7 ditunda sejak awal karena poinnya melampaui kuota awal (20) dan prioritasnya lebih rendah. |
| **Is the Sprint Goal Still Achievable?** | Sebagian tercapai. Mahasiswa bisa melihat menu, kasir bisa update stok, dan pesanan bisa dibuat. Namun, karena US9 (pembatalan otomatis) gagal masuk, fitur mitigasi jika stok tiba-tiba bentrok belum berfungsi. |
| **Revised Sprint Goal, If Necessary** | Mahasiswa dapat melihat menu terkini dan membuat pesanan. Penanganan pembatalan otomatis (US9) dan pembayaran kasir (US8) ditunda ke Sprint 2. |
| **Remaining Uncertainty and Open Questions** | Karena US9 tertunda, bagaimana prosedur tenant menolak pesanan mahasiswa secara manual jika stok di dapur tiba-tiba habis? (Q6). Selain itu, aturan konfirmasi pengembalian dana (jika terlanjur bayar cash) tetap menjadi PR utama di Sprint selanjutnya. |
| **What Changed After the New Constraint?** | Capacity tim turun dari 20 ke 14. US9 dibuang dari papan Todo / Sprint Backlog, dan kembali ditarik masuk ke kolom Product Backlog. Tidak ada angka estimasi yang dikurangi/dikompromikan, murni scope fitur yang dipangkas. |
| **Risks / Dependencies** | Membuang US9 berisiko memunculkan antrean mahasiswa komplain di depan kasir jika aplikasi menyebut makanan masih bisa dipesan padahal di dapur sudah ludes. Solusi sementara (workaround): Kasir wajib sangat disiplin mematikan tombol ketersediaan menu (US2). |
| **Discussion notes** | Tim melakukan voting poker secara terbuka. Tidak dirata-rata; jika ada selisih suara (misal Ahmad 8, Geoffta 7 pada US9), tim berdiskusi hingga sepakat memilih angka deret Fibonacci (8) berdasarkan ketidakpastian. |
