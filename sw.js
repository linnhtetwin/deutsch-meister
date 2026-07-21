const CACHE_NAME = 'deutsch-meister-v3';
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg',
  '/og-image.svg',
  '/social-share.png',
];

const isCacheableResponse = (response) => {
  return response && response.status === 200 && ['basic', 'cors', 'opaque'].includes(response.type);
};

const cacheBuiltAssets = async (cache) => {
  const response = await fetch('/index.html', { cache: 'no-cache' });
  if (!isCacheableResponse(response)) return;

  const html = await response.clone().text();
  await cache.put('/index.html', response);

  const assetUrls = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith('/assets/'));

  await Promise.allSettled(assetUrls.map((url) => cache.add(url)));
};

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(APP_SHELL.map((url) => cache.add(url)));
      await cacheBuiltAssets(cache);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (isCacheableResponse(response)) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put('/index.html', responseToCache));
          }
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        if (isCacheableResponse(response) && event.request.url.startsWith('http')) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseToCache));
        }

        return response;
      });
    })
  );
});
