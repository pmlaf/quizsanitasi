// Bank soal quiz "Dari Rumah untuk Bumi"
// Setiap soal punya: pertanyaan, daftar opsi, dan index jawaban benar (0 = opsi pertama, dst)
// Urutan soal & urutan opsi akan diacak otomatis oleh quiz.js

const QUESTION_BANK = [
  {
    question: "Menurut materi, sampah rumah tangga yang tidak dikelola dengan baik dapat menyebabkan apa?",
    options: [
      "Menambah nilai jual barang",
      "Menumpuk dan mencemari lingkungan",
      "Otomatis terurai dalam sehari",
      "Tidak berdampak apapun"
    ],
    answer: 1
  },
  {
    question: "Berikut ini yang BUKAN merupakan dampak sampah rumah tangga yang menumpuk adalah...",
    options: [
      "Menjadi tempat berkembang biak nyamuk dan lalat",
      "Menyumbat saluran air sehingga memicu banjir",
      "Menambah kesuburan tanah secara instan",
      "Menimbulkan bau tidak sedap"
    ],
    answer: 2
  },
  {
    question: "Sampah dari kulit buah dan sisa sayur termasuk kategori sampah apa?",
    options: [
      "Sampah organik",
      "Sampah anorganik",
      "Sampah B3 (bahan berbahaya)",
      "Sampah elektronik"
    ],
    answer: 0
  },
  {
    question: "Botol plastik bekas dapat dimanfaatkan kembali menjadi...",
    options: [
      "Bahan bakar rumah tangga",
      "Pot tanaman",
      "Pupuk kompos secara langsung",
      "Tidak bisa dimanfaatkan lagi"
    ],
    answer: 1
  },
  {
    question: "Kardus bekas dalam metode daur ulang dapat dimanfaatkan sebagai...",
    options: [
      "Vas bunga",
      "Alat masak",
      "Tempat penyimpanan",
      "Bahan pakaian"
    ],
    answer: 2
  },
  {
    question: "Berikut ini kebiasaan sederhana untuk mengurangi sampah, KECUALI...",
    options: [
      "Membawa tas belanja sendiri",
      "Membawa botol minum sendiri",
      "Menggunakan barang sekali pakai sebanyak mungkin",
      "Membawa wadah makan sendiri"
    ],
    answer: 2
  },
  {
    question: "Salah satu langkah mudah mengelola sampah dari rumah menurut materi adalah...",
    options: [
      "Membakar sampah setiap hari",
      "Menyediakan tempat sampah di rumah",
      "Membuang sampah ke sungai",
      "Menumpuk semua jenis sampah jadi satu"
    ],
    answer: 1
  },
  {
    question: "Apa peran ibu dalam menjaga lingkungan menurut materi?",
    options: [
      "Mengajarkan anak membuang sampah pada tempatnya",
      "Membiarkan anak bermain dengan sampah",
      "Tidak perlu terlibat dalam kebersihan rumah",
      "Hanya bertugas memasak"
    ],
    answer: 0
  },
  {
    question: "Botol kaca bekas dapat dimanfaatkan menjadi...",
    options: [
      "Alat tulis",
      "Vas bunga",
      "Pot tanaman",
      "Kerajinan kertas"
    ],
    answer: 1
  },
  {
    question: "Kertas bekas dapat dimanfaatkan menjadi...",
    options: [
      "Kerajinan sederhana",
      "Bahan bakar utama",
      "Pupuk instan",
      "Tidak bisa digunakan lagi"
    ],
    answer: 0
  },
  {
    question: "Apa tema utama dari program kerja KKN pada materi ini?",
    options: [
      "\"Sampahku Tanggung Jawabku Sendiri\"",
      "\"Bumi untuk Sampah\"",
      "\"Dari Rumah untuk Bumi\"",
      "\"Rumah Tanpa Sampah Instan\""
    ],
    answer: 2
  },
  {
    question: "\"Satu langkah kecil, peduli lingkungan dimulai dari...\"",
    options: [
      "Pemerintah",
      "Sekolah",
      "Pabrik",
      "Keluarga"
    ],
    answer: 3
  }
];
