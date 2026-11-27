import { movies } from "./movies.js";

let usedIndexes = [];
let currentMovie = null;
let currentScore = 0;
let hintPenalty = 0;
let startTime = null;
let intentosRestantes = 3;
let mejorRacha = 0;


const introEl = document.getElementById("intro");
const quizEl = document.getElementById("quiz-container");
const nameInput = document.getElementById("name-input");
const startBtn = document.getElementById("start-btn");

const descriptionEl = document.getElementById("description");
const audioEl = document.getElementById("audio");
const hintsContainer = document.getElementById("hints-container");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const surrenderBtn = document.getElementById("surrender-btn");
const resultMessage = document.getElementById("result-message");
const scoreEl = document.getElementById("score");

const infoBtn = document.getElementById("info-btn");
const infoBox = document.getElementById("info-box");

let playerName = "";
let modo = "normal";

const modoBtn = document.getElementById("modo-btn");
const modoMenu = document.getElementById("modo-menu");
const modoOpciones = document.querySelectorAll(".modo-opcion");
const changelogBtn = document.getElementById("changelog-btn");
const changelogBox = document.getElementById("changelog-box");

let rachaCorrectas = 0;
const streakEl = document.getElementById("streak");

function updateStreak() {
    streakEl.textContent = `Racha: ${rachaCorrectas}`;
}

function limpiarTexto(texto) {
    return texto
        .trim() // Elimina espacios al principio y al final
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}


modoBtn.onclick = () => {
    introEl.style.display = "none";
    modoMenu.style.display = "block";
};

modoOpciones.forEach((btn) => {
    btn.addEventListener("click", () => {
        modo = btn.dataset.modo;

        // Oculta el menú de modos y vuelve a mostrar la intro
        modoMenu.style.display = "none";
        introEl.style.display = "block";

        startBtn.style.display = "inline-block";

        // Cambiar texto del botón para reflejar el modo elegido
        let textoModo = "";
        if (modo === "normal") textoModo = "Modo seleccionado: Normal";
        else if (modo === "contrarreloj") textoModo = "Modo seleccionado: Contrarreloj";
        else if (modo === "extremo") textoModo = "Modo seleccionado: Extremo";
        else if (modo === "locura") textoModo = "Modo seleccionado: Locura";

        modoBtn.textContent = textoModo;
    });
});

document.getElementById("ranking-btn").onclick = () => {
  window.location.href = "ranking.html";
};


infoBtn.onclick = () => {
    changelogBox.style.display = "none";
    infoBox.style.display = infoBox.style.display === "none" ? "block" : "none";
};

changelogBtn.onclick = () => {
    infoBox.style.display = "none";
    changelogBox.style.display = changelogBox.style.display === "none" ? "block" : "none";
};

document.getElementById("offline-btn").onclick = () => {
  window.location.href = "offline.html";
};

nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startBtn.click();
    }
});

answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (!e.repeat) submitBtn.click();
    }
});

startBtn.onclick = () => {
    const name = nameInput.value.trim();
    if (name === "") {
        alert("Por favor, introduce tu nombre para comenzar.");
        return;
    }
    playerName = name;
    introEl.style.display = "none";
    quizEl.style.display = "block";

    if (modo === "contrarreloj") {
        startTime = Date.now();
    }

    loadNextMovie();
};

function loadNextMovie() {
  if (usedIndexes.length === movies.length) {
    currentMovie = null;

    let mensajeFinal = "¡Has completado el juego por ahora, pero pronto habrá más películas!";
    let bonus = 0;
    let tiempoTotalMs = null;

    if (modo === "contrarreloj") {
      tiempoTotalMs = Date.now() - startTime;
      const minutos = Math.floor(tiempoTotalMs / 60000);

      if (minutos <= 60) bonus = 50;
      else if (minutos <= 120) bonus = 30;
      else if (minutos <= 180) bonus = 15;

      currentScore += bonus;
      scoreEl.textContent = `Puntuación de ${playerName}: ${currentScore}`;
      mensajeFinal = `¡Has completado el juego en ${minutos} minutos.\nBonus por tiempo: +${bonus} puntos.`;
    }

    descriptionEl.textContent = mensajeFinal;
    audioEl.pause();
    audioEl.style.display = "none";
    hintsContainer.innerHTML = "";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
    surrenderBtn.style.display = "none";
    resultMessage.textContent = "";
    streakEl.textContent = `Racha más grande: ${mejorRacha}`;

    const mensajeExtra = document.createElement("p");
    if (navigator.onLine) {
      mensajeExtra.textContent = "Enviando puntuación al ranking…";
      guardarResultadoEnFirestore(playerName, currentScore, modo, mejorRacha, tiempoTotalMs)
        .then(() => { mensajeExtra.textContent = "Puntuación enviada al ranking."; })
        .catch(() => { mensajeExtra.textContent = "No se ha podido enviar la puntuación al ranking."; });
    } else {
      mensajeExtra.textContent = "Partida sin conexión. La puntuación no se ha enviado al ranking.";
    }
    mensajeExtra.style.marginTop = "1rem";

    const rankingBtnFinal = document.createElement("button");
    rankingBtnFinal.textContent = "Ver Ranking";
    rankingBtnFinal.onclick = () => {
      window.location.href = "ranking.html";
    };
    rankingBtnFinal.style.display = "block";
    rankingBtnFinal.style.margin = "2rem auto 0 auto";
    rankingBtnFinal.style.padding = "0.75rem 1.5rem";
    rankingBtnFinal.style.fontSize = "1.2rem";
    rankingBtnFinal.style.cursor = "pointer";

    quizEl.appendChild(mensajeExtra);
    quizEl.appendChild(rankingBtnFinal);

    return;
  }

  let index;
  do {
    index = Math.floor(Math.random() * movies.length);
  } while (usedIndexes.includes(index));

  usedIndexes.push(index);
  currentMovie = movies[index];
  submitBtn.disabled = false;
  surrenderBtn.disabled = false;
  answerInput.readOnly = false;
  hintPenalty = 0;
  intentosRestantes = 3;
  document.getElementById("total-answered").textContent = `Películas respondidas: ${usedIndexes.length}`;

if (modo === "locura") {
  descriptionEl.textContent = ""; // sin descripción
  hintsContainer.innerHTML = ""; // sin pistas
  surrenderBtn.style.display = "none"; // sin botón de rendirse
  intentosRestantes = 1; // solo un intento
} else {
  descriptionEl.textContent = currentMovie.description;
  hintsContainer.innerHTML = "";

  if (modo !== "extremo") {
    currentMovie.hints.forEach((hint, i) => {
      const btn = document.createElement("button");
      btn.textContent = `Mostrar pista ${i + 1}`;
      const div = document.createElement("div");
      div.className = "spoiler";
      div.textContent = hint;

      btn.onclick = () => {
        const isHidden = window.getComputedStyle(div).display === "none";
        div.style.display = isHidden ? "block" : "none";
        if (isHidden && !btn.revealed) {
          hintPenalty++;
          btn.revealed = true;
          updateScore(0);
        }
      };

      hintsContainer.appendChild(btn);
      hintsContainer.appendChild(div);
    });
  }

  surrenderBtn.style.display = "inline-block";
  intentosRestantes = 3; // por defecto
}

  audioEl.src = currentMovie.audio;
  audioEl.style.display = "block";
  audioEl.play().catch(() => { /* El jugador puede activar el audio desde los controles. */ });

  resultMessage.textContent = "";
  answerInput.value = "";
  answerInput.focus();
}

function finishRound() {
    currentMovie = null;
    submitBtn.disabled = true;
    surrenderBtn.disabled = true;
    answerInput.readOnly = true;
    setTimeout(loadNextMovie, 2000);
}

function updateScore(points) {
    if (points) currentScore += points;
    scoreEl.textContent = `Puntuación de ${playerName}: ${currentScore}`;
}

submitBtn.onclick = () => {
    if (!currentMovie) return;

    const answer = limpiarTexto(answerInput.value.trim());
    if (!answer) return;
    const titles = Array.isArray(currentMovie.title) ? currentMovie.title : [currentMovie.title];
    const isCorrect = titles.some((t) => limpiarTexto(t) === answer);

        if (modo === "locura") {
  if (isCorrect) {
    let score = 10;
    rachaCorrectas++;
    if (rachaCorrectas > mejorRacha) {
      mejorRacha = rachaCorrectas;
    }

    // Bonus por racha
    if (rachaCorrectas % 10 === 0 && rachaCorrectas <= movies.length) {
      resultMessage.textContent = `¡Correcto! 🔥 Bonificación por racha de ${rachaCorrectas}: +${rachaCorrectas} puntos extra!`;
      score += rachaCorrectas;
    } else {
      resultMessage.textContent = "¡Correcto!";
    }

    resultMessage.className = "correcto";
    updateScore(score);
    updateStreak();
  } else {
    updateScore(-20);
    rachaCorrectas = 0;
    updateStreak();
    const mostrarTitulo = Array.isArray(currentMovie.title) ? currentMovie.title[0] : currentMovie.title;
    resultMessage.textContent = "Incorrecto. Era: " + mostrarTitulo;
    resultMessage.className = "incorrecto";
  }

  finishRound();
  return;
}
    
    
    if (isCorrect) {
        let score;
        if (modo === "extremo") {
            score = 7;
        } else {
            score = 5 - hintPenalty;
            if (score < 0) score = 0;
        }

        rachaCorrectas++;
        if (rachaCorrectas > mejorRacha) {
            mejorRacha = rachaCorrectas;
        }

        // Bonificación por racha
        if (rachaCorrectas % 10 === 0 && rachaCorrectas <= movies.length) {
            resultMessage.textContent = `¡Correcto! 🔥 Bonificación por racha de ${rachaCorrectas}: +${rachaCorrectas} puntos extra!`;
            score += rachaCorrectas;
        } else {
            resultMessage.textContent = "¡Correcto!";
        }

        resultMessage.className = "correcto";
        updateScore(score);
        updateStreak();
        finishRound();
    } else {
        if (modo === "extremo") {
            intentosRestantes--;

            if (intentosRestantes <= 0) {
                updateScore(-3);
                rachaCorrectas = 0;
                updateStreak();
                const mostrarTitulo = Array.isArray(currentMovie.title) ? currentMovie.title[0] : currentMovie.title;
                resultMessage.textContent = "Intentos agotados. Era: " + mostrarTitulo;
                resultMessage.className = "incorrecto";
                finishRound();
            } else {
                updateScore(-3);
                rachaCorrectas = 0;
                updateStreak();
                resultMessage.textContent = `Incorrecto. Intentos restantes: ${intentosRestantes}`;
                resultMessage.className = "incorrecto";
                answerInput.value = "";
                setTimeout(() => answerInput.focus(), 50);
            }
        } else {
            rachaCorrectas = 0;
            updateStreak();
            resultMessage.textContent = "Incorrecto. Sigue intentando...";
            resultMessage.className = "incorrecto";
            answerInput.value = "";
            setTimeout(() => answerInput.focus(), 50);
        }
    }
};

surrenderBtn.onclick = () => {
    if (!currentMovie) return;

    if (modo === "extremo") {
        updateScore(-5);
    } else {
        updateScore(-3); // penalización en modo normal y contrarreloj
    }

    const mostrarTitulo = Array.isArray(currentMovie.title) ? currentMovie.title[0] : currentMovie.title;
    resultMessage.textContent = "La respuesta era: " + mostrarTitulo;
    resultMessage.className = "incorrecto";
    rachaCorrectas = 0;
    updateStreak();
    finishRound();
};


// Juego creado sin ánimo de lucro por Wildcrow
