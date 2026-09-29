// Exam Room Napkin: cache the app shell so it opens without a connection.
// Page loads go network-first (a new version shows up on the next open); offline they fall back to the cache.
const CACHE = 'napkin-v2';
const SHELL = ['/', '/index.html', '/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // the QR library comes from the CDN; let it pass through
  const store = res => { if (res && res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; };
  if (e.request.mode === 'navigate' || url.pathname === '/index.html') {
    e.respondWith(fetch(e.request).then(store).catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || caches.match('/'))));
    return;
  }
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => {
    const fresh = fetch(e.request).then(store).catch(() => hit);
    return hit || fresh;
  }));
});
