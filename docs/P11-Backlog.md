# P11 | PRIORITIZED PRODUCT BACKLOG

> Sumber: [Campus Canteen Ordering — tab P11](https://docs.google.com/document/d/11JH9TahWUnA7knV8kf4LrVxjy1I2UeWh3OwPsaYpzdA/edit?tab=t.x4qzd3awzmbh). Diarsipkan ke Markdown untuk ST-05 pada 25 Oktober 2026.

**STUDENT TEMPLATE - SOFTWARE DEVELOPMENT LIFE CYCLE**

**PETUNJUK**

Lanjutkan kasus dan evidence dari P9–10. Isi seluruh tabel kosong. Contoh di akhir adalah simulasi, bukan fakta stakeholder. Urutan backlog tetap diperlukan walaupun sudah menggunakan Must Have / Should Have / Could Have / Not Now.

## A. PROJECT INFORMATION

| Information Field | Isi kelompok |
| --- | --- |
| Kelompok / Case | G4 - Campus Canteen Ordering |
| Anggota | Ahmad Fuady; Alyasa Pradipta Haikal Waluyo; Muhammad Reski; Dimas Herdiansyah; Farhan Fathur Rahman; Novendy Farhanudin; Geoffta Handiyan Akwila |
| P10 Requirements Document Link | [Campus Canteen Ordering](https://docs.google.com/document/d/11JH9TahWUnA7knV8kf4LrVxjy1I2UeWh3OwPsaYpzdA) |
| Trello Backlog Document Link | [Trello sdlcp11](https://trello.com/invite/b/6acdaa32a8eeea31652f66dc/ATTI48221c243646f9c5b23a42a39bd658b9FE0010AD/sdlcp11) |

## B. INITIAL ORDERED PRODUCT BACKLOG

Priority Order 1 = tertinggi. Tambahkan baris jika perlu. Cantumkan source P9 and 10 dalam alasan prioritas.

| Priority Order | Product Backlog Item Identifier / User Story | Must Have / Should Have / Could Have / Not Now | Reason for Priority and Supporting Evidence |
| --- | --- | --- | --- |
| 1 | US1 - Melihat ketersediaan menu (R1) | Must Have | Akar masalah paling mengganggu: antre dulu baru tahu menu habis (F1, O1, O2, P1, N1). |
| 2 | US2 - Tenant update ketersediaan menu (R2) | Must Have | Fondasi utama US1. Tanpa ini, data stok basi dan pertanyaan berulang berlanjut (F4, O2, P4, N4, C4). |
| 3 | US3 - Membuat pesanan (R3) | Must Have | Alur inti agar mahasiswa bisa memproses pesanan di sela waktu sempit (F1, F2, N1, N3). |
| 4 | US8 - Tahan pesanan sampai dibayar (R10) | Must Have | Mencegah pesanan masuk ke dapur sebelum bayar manual agar tidak jadi waste (P6, I10, C5). |
| 5 | US5 - Daftar pesanan masuk & update status (R6, R7) | Must Have | Menjaga dapur tetap teratur dan mengurangi interupsi kasir (F5, F6, O3, O5, C4). |
| 6 | US4 - Status pesanan mandiri (R4, R5) | Should Have | Mahasiswa tidak perlu menunggu dekat tenant (F3, O4, O6, N2), estimasi pasti belum ada (Q2). |
| 7 | US6 - Batas order / throttling (R8) | Should Have | Mencegah penumpukan pesanan berlebih (F5, C2, C3), namun nilai batas pasti belum tervalidasi (Q2). |
| 8 | US7 - Identifikasi pesanan belum diambil (R9) | Could Have | Menutup waste (F6, P6). Prioritas rendah karena US8 sudah memitigasi risiko waste keuangan di awal. |

## C. TOP 3 INITIAL PRIORITIES

| Priority Rank | Product Backlog Item Identifier | Why Is This Important Now? | Evidence |
| --- | --- | --- | --- |
| 1 | US1 (R1) | Akar masalah (root cause). Mahasiswa harus bisa mengecek status stok sebelum membuang waktu mengantre. | F1, OF1, OF2 / Pain Point P1 / N1 / R1 |
| 2 | US2 (R2) | Sistem butuh sumber data yang benar (single source of truth). Jika tenant tidak bisa update dengan cepat, US1 tidak berguna. | F4, OF2 / Pain Point P4 / N4 / R2 |
| 3 | US3 (R3) | Setelah mahasiswa melihat menu tersedia, mereka harus bisa langsung mengunci pesanan untuk mengamankan waktu. | F1, F2, OF3 / N1, N3 / R3 |

## D. CASE-SPECIFIC CHANGE INJECTION

Salin persis skenario, jangan mengakuinya sebagai hasil wawancara.

| Information Field | Isi kelompok |
| --- | --- |
| Change injection | Penjual/Kantin membutuhkan fitur pembatalan pesanan jika stok habis tiba-tiba saat pemesanan berlangsung (terjadi bentrok data). |
| Label injection | Simulasi P11 (bukan hasil wawancara P9) |
| Affected Product Backlog Items | US3 (R3); US2 (R2); NEW US8; relative order US4, US5 |
| New Product Backlog Item | US9 (R11) - "Sebagai mahasiswa, saya ingin mendapat pemberitahuan otomatis jika pesanan saya dibatalkan karena menu mendadak habis, agar saya tidak buang waktu menunggu antrean kasir." (Label: Must Have) |
| New constraint | Validasi stok secara real-time saat mahasiswa klik pesan. Pembatalan otomatis + notifikasi tidak boleh menambah beban klik tenant (C4 tetap berlaku). Karena pembayaran manual di luar sistem (C5), sistem tidak mengurus refund. |
| Team interpretation | Mahasiswa pesan (US3) -> Menunggu Bayar (US8). Jika sebelum dibayar stok habis (ada pembeli fisik), sistem otomatis mencoret pesanan digital tersebut tanpa intervensi kasir. Kebutuhan dari sisi penjual, namun story US9 ditulis dari sisi student (penerima dampak). |
| Open questions | (1) Bagaimana menangani jika mahasiswa terlanjur memberikan uang cash ke kasir tepat di detik sistem membatalkan pesanannya secara otomatis? (2) Apakah stok dikunci (reserved) sementara saat pesanan masuk, atau baru dikurangi setelah kasir klik lunas? (Terkait Q6 dan A2). |

## E. REPRIORITIZED BACKLOG

Tampilkan semua item termasuk yang tetap.

| Product Backlog Item | Priority Before Change | Priority After Change | Reason for Decision and Supporting Evidence |
| --- | --- | --- | --- |
| US1 (R1) | 1 | 1 | Tetap sebagai entry point utama (F1, O1, O2). |
| US2 (R2) | 2 | 2 | Tetap Must Have. US9 sangat bergantung pada data stok valid dan real-time dari kasir (F4, C4). |
| US3 (R3) | 3 | 3 | Tetap Must Have. Awal mula pembuatan pesanan (F2, N3). |
| US9 (R11) NEW | New | 4 | P11 Change Injection. Harus dijalankan sistem setelah order (US3) dan sebelum kasir menerima bayaran (US8), untuk membatalkan bentrokan stok. |
| US8 (R10) | 4 | 5 | Turun 1 tingkat karena validasi stok mendadak (US9) harus lolos dulu sebelum kasir mengesahkan pembayaran. |
| US5 (R6, R7) | 5 | 6 | Turun 1 tingkat. Tetap Must Have untuk manajemen operasional dapur kasir (F5, F6). |
| US4 (R4, R5) | 6 | 7 | Tetap Should Have. Digeser ke bawah untuk mengutamakan keamanan stok. |
| US6 (R8) | 7 | 8 | Tetap Should Have. Fitur throttling/kapasitas. |
| US7 (R9) | 8 | 9 | Tetap Could Have dan ditunda. Identifikasi pesanan yang tak diambil kurang krusial jika US8 berjalan baik. |

## F. TRADE-OFF & EVIDENCE

| Reflection Question | Isi Kelompok |
| --- | --- |
| Deferred Product Backlog Items | US7 (Pelacakan pesanan tak diambil); US6 (Pembatasan kapasitas dapur sistematis); Integrasi sistem pembayaran (Out of scope). |
| Reason for Deferral | Fokus utama dialihkan untuk menjaga alur pesan (US3) dan mitigasi stok bentrok (US9) tanpa menambah beban kasir (C4). US7 kekurangan bukti urgensi (Q3/Q6), dan integrasi pembayaran akan melanggar C5 (P9). |
| Remaining Risk and Consequences | Ada kemungkinan mahasiswa marah jika pesanannya otomatis dibatalkan sistem saat ia sedang berjalan ke kasir. Tanpa US7, tenant tidak punya data statistik makanan yang terbuang. |
| Supporting Evidence | P9 (F1-F6, O1-O6, N1-N6, C1-C5); P10 (US1-US8, AC1.1-AC8.2); P11 Change Injection (US9/R11). |
| What Changed | Masuknya US9 memaksa alur validasi berubah. Sistem harus melakukan pengecekan stok ganda sebelum US8 (pembayaran lunas). Prioritas pelacakan dan pembatasan kapasitas dapur digeser ke bawah. |
| People Responsible | Kelompok G4 (Product Owner: Farhan Fathur Rahman / Novendy Farhanudin); validasi lanjutan wajib dengan Tenant & Kitchen. |
| Evidence to Preserve | https://trello.com/invite/b/6acdaa32a8eeea31652f66dc/ATTIb21c0ae6f52b9c13d073e405115e8310B2963BA9/sdlcp11 |
