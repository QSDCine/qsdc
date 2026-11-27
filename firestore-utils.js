let db = null;

function initFirestore() {
  if (typeof firebase === "undefined") {
    console.warn("[Firestore] Firebase no está disponible. ¿Estás offline?");
    return;
  }

  try {
    const firebaseConfig = {
      apiKey: "AIzaSyAaHu8OXnzUg8c5ogYLwmvTRpGFGfOXZkM",
      authDomain: "qsdcine.firebaseapp.com",
      databaseURL: "https://qsdcine-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "qsdcine",
      storageBucket: "qsdcine.appspot.com",
      messagingSenderId: "701195152100",
      appId: "1:701195152100:web:2f77da946f74b441fadaf1"
    };

    // Evita inicializar Firebase más de una vez
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      console.log("[Firestore] Firebase inicializado.");
    } else {
      console.log("[Firestore] Firebase ya estaba inicializado.");
    }

    db = firebase.firestore();
    window.db = db;

  } catch (error) {
    console.error("[Firestore] No se pudo inicializar:", error);
  }
}

let pendingFirestore;
function loadRankingScript(file) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/firebasejs/11.6.0/" + file;
    script.onload = resolve;
    script.onerror = () => reject(new Error("No se pudo conectar con el ranking."));
    document.head.appendChild(script);
  });
}

function getRankingDatabase() {
  if (!pendingFirestore) {
    pendingFirestore = (async () => {
      if (!window.firebase) await loadRankingScript("firebase-app-compat.js");
      if (!window.firebase.firestore) await loadRankingScript("firebase-firestore-compat.js");
      initFirestore();
      if (!db) throw new Error("Firestore no está disponible.");
      return db;
    })().catch(error => {
      pendingFirestore = null;
      throw error;
    });
  }
  return pendingFirestore;
}

async function guardarResultadoEnFirestore(nombre, puntuacion, modo, racha, tiempo = null) {
  const database = await getRankingDatabase();
  await database.collection("ranking").add({ nombre, puntuacion, modo, racha, tiempo, fecha: new Date() });
}
