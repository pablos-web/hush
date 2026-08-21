
# Hush

> *"Tech should disappear into the work. Built quiet. Runs loud."* 

Selamat datang di repositori **Hush** 
Ini adalah template 
                                            *landing page*
premium bergaya minimalis dan elegan yang dirancang khusus untuk *brand* teknologi personal masa depan. 

Desain ini lahir dari sebuah pertanyaan sederhana: kenapa setiap *gadget* baru terasa makin berisik? **Hush** dirancang untuk menghapus friksi antara pengguna dan ide-ide mereka — tanpa notifikasi berlebih, tanpa elemen visual yang menyilaukan, dan tanpa kompromi.

---

## ✨ Fitur Utama

- **Zero-Build System:** Tidak perlu Webpack, Vite, atau *bundler* lainnya. Sepenuhnya menggunakan CDN untuk meminimalkan kompleksitas.
- **Premium UI/UX:** Dilengkapi dengan efek visual tingkat lanjut seperti *noise/grain overlay*, animasi *drift background* yang halus, dan efek *hover lift* pada kartu produk.
- **Infinite Marquee:** Komponen teks berjalan (*scrolling marquee*) yang mulus untuk menonjolkan nilai jual utama (USP) *brand*.
- **State Management Ringan:** Fitur keranjang belanja interaktif yang ditenagai oleh Alpine.js dengan ukuran file yang sangat kecil.
- **Tipografi Modern:** Kombinasi kontras antara Space Grotesk (elegan & geometris) dan JetBrains Mono (teknis & presisi).

---

## 📁 Struktur Proyek (Arsitektur 3-File)

Proyek ini telah direfaktor dari arsitektur *multi-partial* menjadi struktur 3-file statis yang sangat efisien untuk dikelola:

```text
hush-tech/
├── index.html     ← Kerangka utama. Berisi seluruh struktur semantik halaman (Navigasi, Hero, Katalog Produk, Story, Spesifikasi, Kontak, dan Footer).
├── style.css      ← Gaya kustom murni. Menangani semua keyframes animasi (grain, drift, fade-up) dan transisi yang tidak dicakup oleh utilitas standar Tailwind.
└── main.js        ← Otak konfigurasi. Menyimpan ekstensi tema Tailwind (palet warna khusus) dan memicu inisialisasi ikon secara dinamis.

🚀 Memulai (Zero-Config)
Karena proyek ini sekarang murni statis, pengaturan lingkungan pengembangan lokal (local server) sama sekali tidak diperlukan.
Unduh atau clone repositori ini ke komputer lokal Anda.
Buka folder hush-tech.
Klik ganda pada file index.html. File akan langsung dirender dengan sempurna di peramban web modern apa pun (Chrome, Safari, Firefox, Edge).

🛠 Teknologi yang Digunakan
Landing page ini sangat ringan dan dioptimalkan untuk kecepatan pemuatan:
Tailwind CSS (via CDN) — Kerangka kerja utility-first untuk penataan gaya yang sangat cepat.
Alpine.js (via CDN) — Menangani interaktivitas frontend minimalis, menggantikan kebutuhan akan React atau Vue.
Lucide Icons — Pustaka ikon SVG yang tajam dan konsisten.
Google Fonts — Menyediakan aset tipografi utama.

✏️ Panduan Kustomisasi
Mengubah tampilan dan nuansa Hush sangatlah mudah:
Mengubah Palet Warna Utama:
Buka main.js. Anda akan menemukan objek konfigurasi colors. Ubah nilai HEX pada properti accent (saat ini hijau neon #C7FF3D) untuk mengubah warna tombol, efek glow, dan teks sorotan di seluruh situs.
Mengontrol Kecepatan Animasi:
Buka style.css. Cari deklarasi @keyframes marquee atau @keyframes drift. Sesuaikan nilai durasi (misalnya mengubah 30s menjadi 45s pada .marquee) untuk memperlambat animasi.
Menambah/Mengurangi Produk:
Buka index.html dan cari bagian <section id="products">. Anda dapat menyalin elemen <article class="product-card..."> untuk menambah katalog baru, atau menghapusnya sesuai kebutuhan.

📦 Deployment
Tidak ada proses build (npm run build) yang diperlukan. Halaman ini 100% siap untuk produksi. Anda dapat langsung mengunggah seluruh folder ini ke hosting statis gratis seperti:
GitHub Pages
Netlify
Vercel
Cloudflare Pages
Cukup drag and drop folder proyek, dan website Anda akan langsung live secara global dalam hitungan detik.
© 2026 pablos-web. All rights reserved. Dirancang dengan presisi.
