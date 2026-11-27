import { movies } from './movies.js';

const urls = movies.map(movie => new URL(movie.audio, location.href).href);
const button = document.getElementById('download');
const status = document.getElementById('status');
const bar = document.getElementById('bar');
const saved = new Set();
let cache;
if (localStorage.getItem('tema') === 'oscuro') document.body.classList.add('dark-mode');

function progress() {
  bar.value = saved.size;
  document.getElementById('progreso').textContent = `${saved.size} de ${urls.length} audios guardados`;
  if (saved.size === urls.length) {
    status.textContent = '¡Todo listo para jugar sin conexión!';
    button.disabled = true;
    button.textContent = 'Descarga completa';
  }
}

async function initialize() {
  await workerReady;
  cache = await caches.open('qsdcine');
  const keys = new Set((await cache.keys()).map(key => key.url));
  for (const url of urls) if (keys.has(url)) saved.add(url);
  button.disabled = false;
  progress();
}

button.onclick = async () => {
  button.disabled = true;
  status.textContent = 'Descargando…';
  try {
    for (const url of urls) {
      if (saved.has(url)) continue;
      const response = await fetch(url, { cache: 'no-store' });
      if (response.status !== 200 || /text\/html/i.test(response.headers.get('content-type') || '')) {
        throw new Error('No se pudo descargar ' + decodeURIComponent(new URL(url).pathname.split('/').pop()));
      }
      await cache.put(url, response);
      saved.add(url);
      progress();
    }
  } catch (error) {
    status.textContent = error.name === 'QuotaExceededError'
      ? 'Falta espacio en este dispositivo. Libera espacio y reintenta la descarga.'
      : `Descarga interrumpida. Comprueba la conexión y vuelve a intentarlo. ${error.message}`;
    button.textContent = 'Reanudar descarga';
    button.disabled = false;
  }
};

initialize().catch(error => { status.textContent = error.message; });
