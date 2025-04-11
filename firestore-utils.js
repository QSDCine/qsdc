import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Guarda el resultado del jugador en Firestore.
 * @param {string} nombre - Nombre del jugador.
 * @param {number} puntuacion - Puntos totales conseguidos.
 * @param {string} modo - Modo de juego (normal, contrarreloj, extremo).
 * @param {number} racha - Racha más alta alcanzada.
 * @param {number|null} tiempo - Tiempo en milisegundos (solo para contrarreloj).
 */
export async function guardarResultadoEnFirestore(nombre, puntuacion, modo, racha, tiempo = null) {
  try {
    const ref = collection(db, "ranking");
    const docRef = await addDoc(ref, {
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
