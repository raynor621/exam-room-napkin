// Exam Room Napkin: cache the app shell so it opens without a connection.
const CACHE = 'napkin-v1';
const SHELL = ['/', '/index.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // the QR library comes from the CDN; let it pass through
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const fresh = fetch(e.request).then(res => { if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; }).catch(() => hit);
    return hit || fresh;
  }));
});
