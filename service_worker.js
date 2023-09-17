const CACHE_VERSION = '1.0.0';
const CACHE_NAME = `pomodoro-timer-v${CACHE_VERSION}`;
const ASSETS = [
  './index.html',
  './images/classic.jpg',
  './images/lofi.jpg',
  './images/nature.jpg',
  './images/pomo-logo.png',
];

const self = this;

// Add the assets to the cache on installation of the service worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
});

// Delete caches on activation of the service worker
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
    )),
  );
});

// Intercept fetch requests and return cached assets if available
self.addEventListener('fetch', (e) => e.respondWith(
  caches.open('mysite-dynamic').then((cache) => cache.match(e.request).then(
    (response) => response || fetch(e.request).then((response) => {
      if (!e.request.url.includes('chrome-extension')) {
        cache.put(e.request, response.clone());
      }
      return response;
    }),
  )),
));

// eslint-disable-next-line no-console
// console.clear();