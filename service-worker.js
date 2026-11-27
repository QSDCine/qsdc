const scope = self.registration.scope;
const shellCache = 'qsdcine-original-shell:' + scope + ':v2';
const audioCache = 'qsdcine';
const assets = [
  'index.html', 'style.css', 'script.js', 'movies.js', 'register.js',
  'offline.html', 'offline.css', 'offline.js', 'manifest.json',
  'ranking.html', 'ranking.css', 'ranking.js', 'firestore-utils.js',
  'icon-192.png', 'icon-512.png', 'favicon.ico'
];
const shellUrls = new Set(assets.map(path => new URL(path, scope).href));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(shellCache).then(cache => cache.addAll([...shellUrls].map(url => new Request(url, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith('qsdcine-original-shell:' + scope + ':') && key !== shellCache) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

async function audioResponse(request) {
  const cache = await caches.open(audioCache);
  const cached = await cache.match(request.url);
  if (!cached) return fetch(request);
  const range = request.headers.get('range');
  if (!range) return cached;
  const blob = await cached.blob();
  const match = /^bytes=(\d*)-(\d*)$/i.exec(range);
  if (!match || (!match[1] && !match[2])) return cached;
  const start = match[1] ? Number(match[1]) : Math.max(0, blob.size - Number(match[2]));
  const end = match[1] && match[2] ? Math.min(Number(match[2]), blob.size - 1) : blob.size - 1;
  if (start > end || start >= blob.size) {
    return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${blob.size}` } });
  }
  return new Response(blob.slice(start, end + 1), {
    status: 206,
    headers: {
      'Content-Range': `bytes ${start}-${end}/${blob.size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': String(end - start + 1),
      'Content-Type': 'audio/mpeg'
    }
  });
}

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET' || !request.url.startsWith(scope)) return;
  const url = new URL(request.url);
  url.search = '';
  if (url.href.startsWith(scope + 'audio/')) {
    event.respondWith(audioResponse(request));
  } else {
    const key = url.href === scope ? scope + 'index.html' : url.href;
    if (shellUrls.has(key)) {
      event.respondWith(caches.open(shellCache).then(async cache => (await cache.match(key)) || fetch(request)));
    }
  }
});
