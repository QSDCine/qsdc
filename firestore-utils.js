
let db = null;

try {
  // Configuración de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAaHu8OXnzUg8c5ogYLwmvTRpGFGfOXZkM",
    authDomain: "qsdcine.firebaseapp.com",
    databaseURL: "https://qsdcine-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "qsdcine",
    storageBucket: "qsdcine.firebasestorage.app",
    messagingSenderId: "701195152100",
    appId: "1:701195152100:web:2f77da946f74b441fadaf1"
  };

  const app = firebase.initializeApp(firebaseConfig);
  db = firebase.firestore(app);

} catch (error) {
  console.error('[Firestore] No se pudo inicializar Firebase:', error);
}

/**
 * Guarda el resultado del jugador en Firestore.
 * @param {string} nombre - Nombre del jugador.
 * @param {number} puntuacion - Puntos totales conseguidos.
 * @param {string} modo - Modo de juego (normal, contrarreloj, extremo).
 * @param {number|null} tiempo - Tiempo en milisegundos (solo para contrarreloj).
 */
export async function guardarResultadoEnFirestore(nombre, puntuacion, modo, racha, tiempo = null) {
  try {
    if (!db) {
      throw new Error("Base de datos no inicializada.");
    }

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

