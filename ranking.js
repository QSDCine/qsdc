import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { guardarResultadoEnFirestore } from "./firestore-utils.js";


// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAaHu8OXnzUg8c5ogYLwmvTRpGFGfOXZkM",
  authDomain: "qsdcine.firebaseapp.com",
  projectId: "qsdcine",
  storageBucket: "qsdcine.firebasestorage.app",
  messagingSenderId: "701195152100",
  appId: "1:701195152100:web:2f77da946f74b441fadaf1"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
window.db = db; // por si necesitas acceso global desde otros scripts

// Elementos del DOM
const rankingBtn = document.getElementById("ranking-btn");
const rankingContainer = document.getElementById("ranking-container");
const rankingList = document.getElementById("ranking-list");
const volverBtn = document.getElementById("volver-btn");
const rankingModoBtns = document.querySelectorAll(".ranking-modo-btn");
const offlineMessage = document.getElementById("offline-message");
const volverJuegoBtn = document.getElementById("volver-juego-btn");
const introEl = document.getElementById("intro");
const modoMenu = document.getElementById("modo-menu");
const quizEl = document.getElementById("quiz-container");

// Mostrar ranking
if (rankingBtn) {
  rankingBtn.addEventListener("click", () => {
    introEl.style.display = "none";
    modoMenu.style.display = "none";
    quizEl.style.display = "none";
    rankingContainer.style.display = "block";
  });
}

// Volver al inicio
document.getElementById("volver-btn").onclick = () => {
  window.location.href = "index.html";
};

// Mostrar ranking por modo
rankingModoBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const modo = btn.dataset.modo;
    await mostrarRanking(modo);
  });
});

async function mostrarRanking(modo) {
  rankingList.innerHTML = "Cargando...";

  try {
    const ref = collection(db, "ranking");
    const q = query(ref, where("modo", "==", modo), orderBy("puntuacion", "desc"), limit(10));
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      rankingList.innerHTML = "<p>No hay resultados aún para este modo.</p>";
      return;
    }

    let html = "<ol>";
    snapshot.forEach((doc) => {
      const data = doc.data();
      const tiempo = data.tiempo ? `⏱️ ${Math.floor(data.tiempo / 1000)}s` : "";
      html += `<li><strong>${data.nombre}</strong> — ${data.puntuacion} pts — 🔥 Racha: ${data.racha} ${tiempo}</li>`;
    });
    html += "</ol>";
    rankingList.innerHTML = html;
  } catch (error) {
    rankingList.innerHTML = "<p>Error al cargar el ranking. Inténtalo más tarde.</p>";
    console.error("Error al obtener ranking:", error);
  }
}

// Verificar conexión al cargar
window.addEventListener("load", () => {
  if (!navigator.onLine) {
    rankingContainer.style.display = "none";
    offlineMessage.style.display = "block";
  }
});

// Volver desde el mensaje offline
volverJuegoBtn?.addEventListener("click", () => {
  window.location.href = "index.html";
});
