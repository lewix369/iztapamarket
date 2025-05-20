// service-worker.js
// SOLO para producción (no lo uses en desarrollo local)

const CACHE_NAME = "iztapamarket-cache-v1";

if (self.location.hostname !== 'localhost') {
  self.addEventListener('install', (event) => {
    console.log('Service Worker instalado');
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png',
          // Agrega más recursos si es necesario
        ]);
      })
    );
  });

  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return (
          response ||
          fetch(event.request).catch(() => {
            console.error('Fetch falló para', event.request.url);
            return new Response('Offline', {
              status: 503,
              statusText: 'Offline'
            });
          })
        );
      })
    );
  });
}