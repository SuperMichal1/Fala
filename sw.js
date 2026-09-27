// Minimalny service worker — jego jedyną rolą jest spełnienie technicznego
// wymogu przeglądarek, by aplikację dało się zainstalować na telefonie.
// Nie buforuje niczego na stałe, więc radio zawsze gra z sieci na żywo.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
