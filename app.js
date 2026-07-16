// Logika bersama: menyimpan & mengambil skor.
// Otomatis pakai Firebase Firestore jika sudah dikonfigurasi di firebase-config.js,
// kalau belum, fallback ke localStorage (hanya tersimpan di browser masing-masing).

const LOCAL_KEY = "dr4b_quiz_scores";

function isFirebaseConfigured() {
  return (
    typeof firebaseConfig !== "undefined" &&
    firebaseConfig.apiKey &&
    !firebaseConfig.apiKey.includes("GANTI")
  );
}

let db = null;
if (isFirebaseConfigured() && typeof firebase !== "undefined") {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
  } catch (e) {
    console.warn("Firebase init gagal, fallback ke localStorage.", e);
    db = null;
  }
}

function getLocalScores() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveLocalScore(entry) {
  const scores = getLocalScores();
  scores.push(entry);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(scores));
}

// Simpan hasil quiz. Mengembalikan Promise.
async function saveScore(name, score, total) {
  const entry = {
    name: name,
    score: score,
    total: total,
    percentage: Math.round((score / total) * 100),
    timestamp: new Date().toISOString()
  };

  // Selalu simpan salinan lokal juga, sebagai cadangan.
  saveLocalScore(entry);

  if (db) {
    try {
      await db.collection("scores").add({
        ...entry,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } catch (e) {
      console.warn("Gagal menyimpan ke Firestore, skor tetap tersimpan lokal.", e);
    }
  }

  return entry;
}

// Ambil semua skor (untuk admin). Mengembalikan Promise<Array>.
async function getAllScores() {
  if (db) {
    try {
      const snapshot = await db.collection("scores").orderBy("score", "desc").get();
      return snapshot.docs.map((doc) => doc.data());
    } catch (e) {
      console.warn("Gagal mengambil data dari Firestore, menampilkan data lokal saja.", e);
    }
  }
  // Fallback: hanya data lokal (perangkat ini saja)
  return getLocalScores().sort((a, b) => b.score - a.score);
}

function usingSharedStorage() {
  return !!db;
}
