// Keeps the app working offline: serves saved copies first, refreshes them in the background.
const CACHE = "glide-v1";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png",
  "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request).then(hit => {
    const net = fetch(e.request).then(res => { if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; }).catch(() => hit);
    return hit || net;
  }));
});
