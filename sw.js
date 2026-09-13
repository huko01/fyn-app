const CACHE = 'fyn-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Los logos (Clearbit) y las fuentes siempre van a la red.
  if (url.hostname.includes('logo.clearbit.com') || url.hostname.includes('fonts.g')) {
    e.respondWith(fetch(e.request).catch(() => new Response('', {status: 404})));
    return;
  }
  // Red primero para los archivos propios de la app: siempre trae la última
  // versión publicada cuando hay conexión, y solo usa la caché si no hay red.
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});
