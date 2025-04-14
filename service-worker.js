const CACHE_NAME = 'qsdcine-core-v1';
const CORE_ASSETS = [
  './',
  'index.html',
  'style.css',
  'script.js',
   'ranking.html',
  'ranking.css',
  'ranking.js',
    'offline.html',
  'offline.css',
  'offline.js',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Instalar: cachea lo esencial
self.addEventListener('install', (e) => {
  console.log('[SW] Instalando...');
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CORE_ASSETS);
    })
  );
});

// Activar: limpiar caches antiguas si hay
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  console.log('[SW] Activado y listo');
});

// Fetch a servidor
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si hay en la caché (qsdcine o qsdcine-core-v1), úsalo
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si no está cacheado, intenta desde red
      return fetch(event.request).catch(() => {
        // Si no hay red, y es un audio, muestra un error 
        if (event.request.destination === "audio") {
          return new Response("", { status: 404, statusText: "Audio no disponible offline" });
        }
        return new Response("Offline", {
          status: 503,
          statusText: "Offline"
        });
      });
    })
  );
});
