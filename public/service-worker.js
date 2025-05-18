self.addEventListener('install', () => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', function (event) {
  // Aquí puedes manejar caché si deseas, por ahora se deja así
});
