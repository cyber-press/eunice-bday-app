
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('birthday-app').then(function(cache) {
      return cache.addAll([
        './Birthday_Message_App_PWAReady.html',
        './icon-192.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
