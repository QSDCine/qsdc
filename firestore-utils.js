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

    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("[Firestore] Inicializado correctamente.");

  } catch (error) {
    console.error("[Firestore] No se pudo inicializar:", error);
  }

  window.db = db;
}

initFirestore();

async function guardarResultadoEnFirestore(nombre, puntuacion, modo, racha, tiempo = null) {
  try {
    if (!db) throw new Error("Firestore no está disponible.");

    const ref = db.collection("ranking");
    const docRef = await ref.add({
      nombre,
      puntuacion,
      modo,
      racha,
      tiempo,
      fecha: new Date()
    });

    console.log(`✅ Resultado guardado con ID: ${docRef.id}`);
  } catch (error) {
    console.error("❌ Error al guardar el resultado:", error);
  }
}

window.guardarResultadoEnFirestore = guardarResultadoEnFirestore;


