// =========================================================================
// KONFIGURASI FIREBASE (OPSIONAL, TAPI DISARANKAN)
// =========================================================================
// Website ini di-host statis di GitHub Pages, yang TIDAK punya server/database
// sendiri. Supaya admin bisa melihat skor SEMUA peserta (dari HP/laptop
// manapun), kita pakai Firebase Firestore — gratis, tanpa kartu kredit.
//
// CARA SETUP (5 menit):
// 1. Buka https://console.firebase.google.com/ lalu buat project baru (gratis).
// 2. Di dashboard project, klik ikon "</>" (Add app -> Web) untuk daftarkan
//    web app. Beri nama bebas, tidak perlu centang Firebase Hosting.
// 3. Firebase akan menampilkan objek firebaseConfig seperti di bawah ini.
//    Copy-paste nilainya ke sini, GANTI seluruh isi objek di bawah.
// 4. Di menu kiri, buka "Build" -> "Firestore Database" -> "Create database".
//    Pilih mode "Start in test mode" (cukup untuk quiz sederhana ini).
// 5. Selesai! Commit & push perubahan file ini ke GitHub, lalu quiz akan
//    otomatis menyimpan skor ke Firestore dan admin.html bisa menampilkannya.
//
// JIKA TIDAK DIISI:
// Quiz tetap bisa dipakai. Skor hanya akan tersimpan di localStorage
// (penyimpanan lokal) browser masing-masing peserta, dan halaman admin
// hanya akan menampilkan skor dari perangkat yang sama yang dipakai admin.
// =========================================================================

const firebaseConfig = {
  apiKey: "AIzaSyBot999xtUsNrZA6eL7_4xPnxPFb2xscyc",
  authDomain: "quizsanitasi.firebaseapp.com",
  projectId: "quizsanitasi",
  storageBucket: "quizsanitasi.firebasestorage.app",
  messagingSenderId: "470538815531",
  appId: "1:470538815531:web:672ce91a3a97200afdc26e"
};
