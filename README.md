# Quiz "Dari Rumah untuk Bumi" 🌱

Website quiz sederhana tanpa login untuk program kerja KKN tentang pengelolaan
sampah rumah tangga. Peserta cukup memasukkan nama, mengerjakan quiz (soal &
opsi jawaban diacak), lalu langsung melihat skornya. Admin bisa melihat skor
semua peserta di halaman terpisah.

## Fitur

- ✅ Tanpa login — peserta hanya mengisi nama
- ✅ 12 soal pilihan ganda berdasarkan materi presentasi
- ✅ Urutan soal & urutan opsi diacak setiap kali quiz dimulai
- ✅ Skor langsung tampil setelah quiz selesai
- ✅ Halaman admin (dengan password) untuk melihat & mengunduh (CSV) semua skor
- ✅ Bisa di-host gratis di GitHub Pages

## Struktur File

```
quiz-website/
├── index.html          # Halaman awal: penjelasan materi + input nama
├── quiz.html           # Halaman quiz
├── result.html         # Halaman hasil skor
├── admin.html          # Halaman admin (lihat semua skor)
├── css/style.css       # Semua styling
├── js/questions.js     # Bank soal (edit di sini untuk ubah/tambah soal)
├── js/firebase-config.js  # Konfigurasi Firebase (opsional, untuk skor bersama)
├── js/admin-config.js  # Password halaman admin
└── js/app.js           # Logika simpan/ambil skor
```

## Cara Hosting di GitHub Pages

1. Buat repository baru di GitHub (bisa public atau private+Pro, tapi GitHub
   Pages gratis untuk repo public).
2. Upload/push semua file di folder `quiz-website/` ke repo tersebut (taruh
   file-file ini di root repo, atau di folder `docs/` — sesuaikan setting).
3. Buka **Settings > Pages** di repo GitHub kamu.
4. Pada "Source", pilih branch `main` dan folder `/ (root)` (atau `/docs` jika
   kamu taruh di situ), lalu klik **Save**.
5. Tunggu 1-2 menit, GitHub akan memberikan URL seperti:
   `https://namakamu.github.io/nama-repo/`
6. Bagikan link tersebut ke peserta. Untuk admin, tambahkan `/admin.html` di
   belakang URL.

## Supaya Admin Bisa Lihat Skor SEMUA Peserta (Rekomendasi: Firebase)

Karena GitHub Pages adalah hosting statis (tidak ada server/database sendiri),
secara default skor hanya tersimpan di browser masing-masing peserta
(localStorage). Supaya admin bisa melihat skor dari semua peserta di
perangkat manapun, sambungkan ke **Firebase Firestore** (gratis, tanpa kartu
kredit untuk skala kecil seperti ini):

1. Buka https://console.firebase.google.com/ dan buat project baru.
2. Di dashboard project, klik ikon **`</>`** (Add app → Web), beri nama bebas.
3. Firebase akan menampilkan objek `firebaseConfig` — copy nilainya.
4. Buka file `js/firebase-config.js` di project ini, ganti isi objek
   `firebaseConfig` dengan nilai yang kamu dapat.
5. Di menu kiri Firebase, buka **Build → Firestore Database → Create database**,
   pilih **Start in test mode**.
6. Commit & push perubahan `firebase-config.js` ke GitHub.
7. Selesai! Quiz sekarang otomatis menyimpan skor ke Firestore, dan halaman
   admin akan menampilkan skor semua peserta secara real-time.

> Kalau langkah di atas dilewati, quiz tetap berjalan normal — hanya saja
> halaman admin cuma menampilkan skor dari perangkat yang sama yang dipakai
> untuk membuka admin.html.

## Mengganti Password Admin

Buka `js/admin-config.js`, ganti nilai `ADMIN_PASSWORD` dengan password
pilihanmu, lalu commit & push. Catatan: karena ini situs statis, password ini
bisa dilihat siapapun yang membuka "View Page Source" — cukup untuk mencegah
orang iseng, tapi bukan proteksi tingkat tinggi.

## Mengedit / Menambah Soal

Buka `js/questions.js`. Setiap soal berbentuk:

```js
{
  question: "Pertanyaan di sini?",
  options: ["Opsi A", "Opsi B", "Opsi C", "Opsi D"],
  answer: 0 // index opsi yang benar (0 = opsi pertama)
}
```

Tinggal tambahkan objek baru ke dalam array `QUESTION_BANK` untuk menambah
soal, atau edit yang sudah ada.

## Coba di Komputer Lokal

Tidak perlu server khusus — cukup buka `index.html` langsung dari browser
(double-click), atau jalankan server sederhana:

```bash
python -m http.server 8000
```

lalu buka `http://localhost:8000` di browser.
