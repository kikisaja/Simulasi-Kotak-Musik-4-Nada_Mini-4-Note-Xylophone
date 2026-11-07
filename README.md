# 🎼 Mini 4-Note Xylophone (Simulasi Kotak Musik 4 Nada)

Aplikasi simulasi instrumen musik xylophone 4 nada (*Mini 4-Note Xylophone*) berbasis web yang menghasilkan nada *DO-RE-MI-FA* presisi saat bilah diklik menggunakan *mouse* atau ditekan melalui tombol keyboard (`A`, `S`, `D`, `F`).

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Web Audio API (`AudioContext` & `OscillatorNode`):**
   Menciptakan sintesis suara frekuensi nada murni (Hz) melalui JavaScript tanpa memerlukan pustaka atau file rekaman audio eksternal (`.mp3`).
2. **Keyboard Event Handling (`keydown`):**
   Mendengarkan penekanan tombol fisik keyboard serta memetakan karakter huruf (`A`, `S`, `D`, `F`) ke elemen HTML yang sesuai.
3. **Data Attributes (`data-*`):**
   Menyimpan konfigurasi frekuensi audio (`data-freq`) dan pengenal nada (`data-note`) secara rapi langsung di dalam elemen markup HTML.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Display nada aktif, 4 bilah nada warna-warni, & panduan tombol
├── style.css        # Desain Neobrutalism pink-pop, ukuran bilah bertingkat, & animasi tekan
└── script.js        # Logika Web Audio API synth, listener keyboard keydown, & handler DOM
