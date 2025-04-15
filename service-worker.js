const CACHE_NAME = 'qsdcine';
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
    caches.match(event.request, { ignoreSearch: true }).then((response) => {
      if (response) return response;
      return fetch(event.request);
    }).catch((error) => {
      console.error("[SW] Fetch failed:", error);
      return new Response("Archivo no disponible offline", {
        status: 503,
        statusText: "Offline y sin caché",
      });
    })
  );
});
