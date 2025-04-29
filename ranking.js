// Función auxiliar para mostrar tiempo formateado
function formatearTiempo(ms) {
  const minutos = Math.floor(ms / 60000);
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;

  if (horas > 0) {
    return `⏱️ Tiempo: ${horas} hora${horas > 1 ? 's' : ''} y ${minutosRestantes} min${minutosRestantes !== 1 ? 's' : ''}`;
  } else {
    return `⏱️ Tiempo: ${minutos} min${minutos !== 1 ? 's' : ''}`;
  }
}

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

// Mostrar ranking (desde index.html si se usa el botón)
if (rankingBtn) {
  rankingBtn.addEventListener("click", () => {
    if (introEl) introEl.style.display = "none";
    if (modoMenu) modoMenu.style.display = "none";
    if (quizEl) quizEl.style.display = "none";
    rankingContainer.style.display = "block";
  });
}


// Botón de volver
volverBtn.onclick = () => {
  window.location.href = "index.html";
};

// Mostrar ranking según modo
rankingModoBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    const modo = btn.dataset.modo;
    await mostrarRanking(modo);
  });
});

// Función principal para mostrar el ranking
async function mostrarRanking(modo) {
  rankingList.innerHTML = "Cargando...";

  try {
    if (!db) {
      throw new Error("Base de datos no disponible.");
    }

    const ref = db.collection("ranking");
    const q = ref.where("modo", "==", modo).orderBy("puntuacion", "desc").limit(10);
    const snapshot = await q.get();

    if (snapshot.empty) {
      rankingList.innerHTML = "<p>No hay resultados aún para este modo.</p>";
      return;
    }

    let html = "<ol>";
    snapshot.forEach((doc) => {
      const data = doc.data();
      const tiempo = data.tiempo ? formatearTiempo(data.tiempo) : "";
      html += `<li><strong>${data.nombre}</strong> — ${data.puntuacion} pts — 🔥 Racha: ${data.racha} ${tiempo}</li>`;
    });
    html += "</ol>";
    rankingList.innerHTML = html;

  } catch (error) {
    console.error("Error al obtener ranking:", error);
    rankingList.innerHTML = "<p>Error al cargar el ranking. Inténtalo más tarde o revisa tu conexión.</p>";
  }
}

// Verificar conexión al cargar
window.addEventListener("load", () => {
  if (!navigator.onLine) {
    rankingContainer.style.display = "none";
    offlineMessage.style.display = "block";
  }
});

// Volver desde modo sin conexión
volverJuegoBtn?.addEventListener("click", () => {
  window.location.href = "index.html";
});
