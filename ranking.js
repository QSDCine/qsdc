import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, orderBy, limit } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

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
window.db = db;

// ELEMENTOS
const rankingBtn = document.getElementById("ranking-btn");
const rankingContainer = document.getElementById("ranking-container");
const rankingList = document.getElementById("ranking-list");
const volverBtn = document.getElementById("volver-btn");
const rankingModoBtns = document.querySelectorAll(".ranking-modo-btn");

// MOSTRAR RANKING
rankingBtn.onclick = () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("modo-menu").style.display = "none";
  document.getElementById("quiz-container").style.display = "none";
  rankingContainer.style.display = "block";
};

volverBtn.onclick = () => {
  rankingContainer.style.display = "none";
  document.getElementById("intro").style.display = "block";
};

rankingModoBtns.forEach(btn => {
  btn.addEventListener("click", async () => {
    const modoSeleccionado = btn.dataset.modo;
    await mostrarRanking(modoSeleccionado);
  });
});

async function mostrarRanking(modo) {
  rankingList.innerHTML = "Cargando...";
  const ref = collection(db, "ranking");
  const q = query(ref, where("modo", "==", modo), orderBy("puntuacion", "desc"), limit(10));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    rankingList.innerHTML = "<p>No hay resultados aún para este modo.</p>";
    return;
  }

  let html = "<ol>";
  snapshot.forEach(doc => {
    const data = doc.data();
    const tiempo = data.tiempo ? `⏱️ ${Math.floor(data.tiempo / 1000)}s` : "";
    html += `<li><strong>${data.nombre}</strong> — ${data.puntuacion} pts — 🔥 Racha: ${data.racha} ${tiempo}</li>`;
  });
  html += "</ol>";
  rankingList.innerHTML = html;
}
