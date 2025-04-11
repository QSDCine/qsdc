import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

/**
 * Guarda el resultado del jugador en Firestore.
 * @param {string} nombre - Nombre del jugador.
 * @param {number} puntuacion - Puntos totales conseguidos.
 * @param {string} modo - Modo de juego (normal, contrarreloj, extremo).
 * @param {number} racha - Racha más alta alcanzada.
 * @param {number|null} tiempo - Tiempo en milisegundos (solo para contrarreloj).
 */
export async function guardarResultadoEnFirestore(nombre, puntuacion, modo, racha, tiempo = null) {
  if (!window.db) {
    console.error("❌ Firestore no está inicializado.");
    return;
  }

  try {
    const ref = collection(window.db, "ranking");
    const docRef = await addDoc(ref, {
      nombre,
      puntuacion,
      modo,
      racha,
      tiempo
    });
    console.log(`✅ Resultado guardado con ID: ${docRef.id}`);
  } catch (error) {
    console.error("❌ Error al guardar el resultado:", error);
  }
}
