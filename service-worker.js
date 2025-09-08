const cacheName = "atividades-dev-web-1";
const assets = [
  '/',
  'index.html',
  'styles/styles.css',
  'js/app.js',
  'src/img/meta_img.png'
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});