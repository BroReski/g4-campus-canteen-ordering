# P10 — Requirements Documentation
**Project:** Campus Canteen Ordering  
**Group:** G4  
**Source Evidence:** SDLC P9 Discovery Notes  

---

## A. Problem & Scope

| Item | Content |
| :--- | :--- |
| **Current Situation** | Pada jam makan siang (11.30-13.00), mahasiswa antre, memesan, dan menunggu dekat tenant. Tenant menangani banyak order sekaligus dengan kapasitas kitchen terbatas. *(Ref: F2, F5, O1-O6)* |
| **Main Problem** | Mahasiswa membuang waktu istirahat yang terbatas (45-60 menit) karena baru mengetahui menu habis setelah mengantre, dan harus menunggu di area tenant tanpa kejelasan kapan pesanan selesai. Di sisi lain, tenant dan dapur kewalahan menerima tumpukan pesanan secara bersamaan dan terinterupsi oleh pertanyaan status pesanan dari mahasiswa, sementara pesanan yang selesai namun tidak diambil berpotensi menjadi kerugian (*waste*). |
| **Impact** | Mahasiswa kehilangan waktu istirahat dan kadang meninggalkan antrean. Cashier terinterupsi, dan order yang tidak diambil bisa menjadi waste. *(Ref: F3, F6, O5)* |
| **In Scope** | 1. Visibilitas ketersediaan stok secara *real-time* kepada mahasiswa.<br>2. Sistem pelacakan status pesanan secara mandiri (tanpa interupsi tanya-jawab).<br>3. Pengaturan masuknya pesanan agar sesuai dengan batas kapasitas dapur (*throttling*).<br>4. Pencatatan pesanan dan operan (*handoff*) dari kasir ke dapur yang efisien. |
| **Out of Scope** | 1. **Integrasi Payment Gateway:** Pembayaran digital tidak dibangun. Transaksi tetap menggunakan Cash/QRIS manual yang sudah ada *(Ref: C5, I5)*.<br>2. **Delivery System:** Pengantaran makanan tidak dibangun, pengambilan (*pickup*) dilakukan mandiri di kampus *(Ref: I5)*.<br>3. **Inventory Management Kompleks:** Tidak ada sistem input bahan baku/gudang, hanya status menu "Tersedia / Habis" demi menjaga kecepatan operasional tenant *(Ref: C4)*. |

---

## B. Stakeholders & Users

| Stakeholder ID | Stakeholder / User | Role / Need | P9 Evidence |
| :---: | :--- | :--- | :--- |
| **S1** | Mahasiswa / Pembeli | Membeli makan siang di sela kelas dengan waktu 45-60 menit; perlu tahu ketersediaan menu dan kapan pesanan siap; ingin proses yang dapat diprediksi dan tidak lebih rumit. | F1, F2, F3, O1-O6, N1, N2, N3 |
| **S2** | Tenant / Kasir | Menerima pesanan dan pembayaran, meneruskan pesanan ke dapur, menjawab pertanyaan stok dan status; perlu info stok akurat, volume pesanan yang sesuai kapasitas, dan proses yang tidak menambah beban administratif saat sibuk. | F4, F5, F6, O2, O3, O5, N4, N5, N6 |
| **S3** | Dapur | Membuat makanan; kapasitasnya menjadi *bottleneck* (hambatan utama). Belum diwawancarai, hanya dari keterangan tenant. | F5, O3 *(lihat Q2)* |
| **S4** | Pihak Kampus | Ingin mengeksplorasi *software* agar pemesanan di kantin menjadi lebih teratur. Belum diwawancarai, hanya dari ringkasan proyek. | Project Brief *(lihat Q5)* |

---

## C. Functional Requirements

| Req ID | Functional Requirement | Source Evidence | Status |
| :---: | :--- | :--- | :---: |
| **R1** | Sistem harus memungkinkan mahasiswa melihat ketersediaan menu saat ini dari setiap tenant. | F1, F4, O1, O2, N1 | Terkonfirmasi |
| **R2** | Sistem harus memungkinkan tenant memperbarui ketersediaan menu mereka dengan usaha administratif seminimal mungkin (misal: tombol cepat / *toggle*). | F4, O2, N4 | Turunan |
| **R3** | Sistem harus memungkinkan mahasiswa membuat pesanan untuk menu yang sedang tersedia. | F1, O2, O3, N1, N3, Project Brief | Turunan |
| **R4** | Sistem harus memungkinkan mahasiswa melihat status pesanan mereka saat ini. | F3, O4, O5, O6, N2 | Terkonfirmasi |
| **R5** | Sistem harus memberikan estimasi rentang waktu atau posisi antrean kepada mahasiswa untuk pesanan mereka. | F3, F5, O4, N2 | Turunan |
| **R6** | Sistem harus menyediakan daftar pesanan yang diterima beserta status tiap pesanan kepada tenant. | F5, F6, O3, O5, N4, N5 | Turunan |
| **R7** | Sistem harus memungkinkan tenant memperbarui status pesanan dengan langkah seminimal mungkin. | F6, O5, O6, N4 | Turunan |
| **R8** | Sistem harus membatasi jumlah pesanan yang diterima pada periode waktu yang sama sesuai dengan batas kapasitas tenant. | F5, C2, C3, N5 | Terbuka |
| **R9** | Sistem harus memungkinkan tenant mengidentifikasi pesanan yang sudah siap tetapi belum diambil. | F6, P6 | Terbuka |
| **R10** | Sistem harus menahan pesanan dan tidak meneruskannya ke daftar dapur sampai tenant mengonfirmasi secara manual bahwa pembayaran telah diterima. | P6, I10, C5 | Tambahan PM |

---

## D. NFR & Constraints

| ID | Type | Requirement / Constraint | Evidence | Status |
| :---: | :--- | :--- | :--- | :---: |
| **NFR1** | NFR (Usabilitas) | Penggunaan sistem tidak boleh membuat proses pemesanan mahasiswa lebih rumit dari proses saat ini. | F2, N3, C1 | Turunan |
| **NFR2** | NFR (Akurasi) | Ketersediaan menu yang ditampilkan harus mencerminkan kondisi terkini. | F4, N4, P4 | Turunan |
| **C1** | Batasan | Waktu mahasiswa terbatas (45-60 menit), dan jadwal kelas membatasi waktu tunggu. | F2, C1 | Terkonfirmasi |
| **C2** | Batasan | Kapasitas dapur terbatas, dan terlalu banyak pesanan sekaligus tetap akan menimbulkan antrean. | F5, C2 | Terkonfirmasi |
| **C3** | Batasan | Waktu persiapan (*preparation time*) berbeda per menu. | F5, C3 | Terkonfirmasi |
| **C4** | Batasan | Solusi tidak boleh menambah beban kerja administratif tenant/kasir saat sibuk. | F6, N6, C4 | Terkonfirmasi |
| **C5** | Batasan | Uang tunai/QRIS saat ini dianggap cukup; integrasi pembayaran digital bukan kebutuhan awal. | C5 (sumber: I5, I10) | Terkonfirmasi |

---

## E. User Stories & Acceptance Criteria

### US1 — Melihat Ketersediaan Menu
* **Status:** `[Sprint 1 - Done]` *(Selesai)*
* **User Story:** Sebagai mahasiswa, saya ingin melihat menu apa saja yang tersedia sebelum mengantre, sehingga saya tidak membuang waktu mengantre untuk menu yang sudah habis. *(Ref: R1)*
* **Acceptance Criteria:**
  * **AC1.1:** **Kondisi** tenant memiliki menu yang tersedia dan habis, **ketika** mahasiswa melihat daftar menu tenant tersebut, **maka** setiap menu menampilkan status ketersediaannya secara visual.
  * **AC1.2:** **Kondisi** tenant mengubah menu dari tersedia menjadi habis, **ketika** mahasiswa membuka menu tersebut lagi, **maka** menu tersebut ditampilkan sebagai habis dan tidak dapat dipilih.

### US2 — Update Stok oleh Tenant
* **Status:** `[Sprint 1 - Done]` *(Selesai)*
* **User Story:** Sebagai tenant, saya ingin memperbarui ketersediaan menu dengan mudah, sehingga mahasiswa melihat informasi yang akurat dan saya menerima lebih sedikit pertanyaan stok yang berulang. *(Ref: R2)*
* **Acceptance Criteria:**
  * **AC2.1:** **Kondisi** sebuah menu ditampilkan tersedia, **ketika** tenant menandainya sebagai habis, **maka** ketersediaan menu tersebut langsung tersimpan sebagai habis.
  * **AC2.2:** **Kondisi** sebuah menu ditandai habis, **ketika** tenant menandainya kembali sebagai tersedia, **maka** ketersediaan menu tersebut tersimpan sebagai tersedia.

### US3 — Memilih & Membuat Pesanan
* **Status:** `[Deferred / Backlog]` *(Ditunda karena Capacity Shock P12)*
* **User Story:** Sebagai mahasiswa, saya ingin memesan menu yang tersedia, sehingga pesanan saya dapat ditangani dalam waktu istirahat yang terbatas. *(Ref: R3)*
* **Acceptance Criteria:**
  * **AC3.1:** **Kondisi** mahasiswa melihat menu yang tersedia, **ketika** mahasiswa mengirimkan pesanan untuk menu tersebut, **maka** pesanan tercatat dan ditampilkan kepada mahasiswa sebagai pesanan yang menunggu pembayaran.
  * **AC3.2:** **Kondisi** sebuah menu ditandai habis, **ketika** mahasiswa mencoba memesannya, **maka** pesanan tidak dibuat dan mahasiswa mendapat info bahwa menu tersebut habis.

### US4 — Pelacakan Status Pesanan
* **Status:** `[Deferred / Backlog]` *(Ditunda ke Sprint 2)*
* **User Story:** Sebagai mahasiswa, saya ingin melihat status dan estimasi posisi antrean pesanan saya, sehingga saya tahu kapan harus mengambilnya tanpa perlu menunggu di dekat tenant. *(Ref: R4, R5)*
* **Acceptance Criteria:**
  * **AC4.1:** **Kondisi** mahasiswa memiliki pesanan terkonfirmasi, **ketika** mahasiswa membuka halaman pesanan, **maka** status saat ini (misal: Dalam Antrean / Siap) ditampilkan.
  * **AC4.2:** **Kondisi** tenant telah mengubah status pesanan, **ketika** mahasiswa melihat pesanannya lagi, **maka** status terbaru langsung ditampilkan.

### US5 — Pengelolaan Order oleh Kasir
* **Status:** `[Deferred / Backlog]` *(Ditunda ke Sprint 2)*
* **User Story:** Sebagai tenant/kasir, saya ingin melihat pesanan yang masuk dan memperbarui status setiap pesanan dengan klik seminimal mungkin, sehingga saya bisa mengelola pesanan saat jam sibuk tanpa diinterupsi pelanggan. *(Ref: R6, R7)*
* **Acceptance Criteria:**
  * **AC5.1:** **Kondisi** ada pesanan lunas yang masuk, **ketika** tenant membuka daftar pesanan, **maka** setiap pesanan ditampilkan beserta status terkininya.
  * **AC5.2:** **Kondisi** sebuah pesanan ada di daftar aktif, **ketika** tenant menekan tombol "Siap", **maka** status pesanan tersebut berubah menjadi siap diambil hanya dengan satu langkah.

  ### US6 — Batas Pesanan Sesuai Kapasitas Dapur
* **Status:** `[Deferred / Backlog]` *(Should Have - Ditunda)*
* **User Story:** Sebagai tenant, saya ingin sistem membatasi pesanan yang diterima per periode waktu berdasarkan kapasitas dapur saya, sehingga pesanan tidak menumpuk melebihi kemampuan kami memasak. *(Ref: R8)*
* **Acceptance Criteria:**
  * **AC6.1:** **Kondisi** tenant memiliki batas pesanan untuk satu periode waktu, **ketika** batas tersebut tercapai, **maka** sistem tidak menerima pesanan baru untuk periode tersebut.
  * **AC6.2:** **Kondisi** batas pesanan telah tercapai, **ketika** mahasiswa mencoba membuat pesanan, **maka** mahasiswa mendapat pemberitahuan bahwa tenant sedang penuh/sibuk.

### US7 — Identifikasi Pesanan Belum Diambil
* **Status:** `[Deferred / Backlog]` *(Could Have - Ditunda)*
* **User Story:** Sebagai tenant, saya ingin melihat pesanan matang mana yang belum diambil, sehingga saya bisa menindaklanjutinya dan mengurangi kerugian (*waste*). *(Ref: R9)*
* **Acceptance Criteria:**
  * **AC7.1:** **Kondisi** pesanan telah ditandai siap, **ketika** pesanan belum diambil, **maka** daftar pesanan tenant menyoroti pesanan tersebut sebagai siap namun menunggu pengambilan.
  * **AC7.2:** **Kondisi** pesanan ditampilkan sedang menunggu pengambilan, **ketika** tenant menandainya sebagai sudah diambil, **maka** pesanan tersebut dihapus dari daftar tunggu aktif.

### US8 — Penahanan Pesanan Sebelum Pembayaran
* **Status:** `[Deferred / Backlog]` *(Ditunda ke Sprint 2)*
* **User Story:** Sebagai tenant, saya ingin pesanan ditahan dari daftar dapur sampai saya memverifikasi pembayarannya secara manual, sehingga pesanan yang belum dibayar tidak dimasak dan tidak menjadi kerugian. *(Ref: R10)*
* **Acceptance Criteria:**
  * **AC8.1:** **Kondisi** mahasiswa membuat pesanan, **ketika** tenant belum mengonfirmasi pembayaran manual, **maka** pesanan tersebut TIDAK muncul di daftar persiapan dapur.
  * **AC8.2:** **Kondisi** ada pesanan tertunda, **ketika** tenant mengklik "Pembayaran Diterima/Lunas", **maka** pesanan tersebut resmi diteruskan ke daftar dapur.