// Service Worker para PWA
const CACHE_NAME = 'clenio-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/blog-post-1.html',
  '/blog-post-2.html',
  '/manifest.json',
  '/images/clenio.jpeg',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Inter:wght@400;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'
];

// Instalar o service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Cache aberto');
        return Promise.allSettled(
          urlsToCache.map(function(url) {
            return cache.add(url);
          })
        );
      })
  );
});

// Interceptar requisições
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/api/')) return;

  event.respondWith((async function() {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request);

    const fetchPromise = fetch(event.request)
      .then(function(response) {
        if (response && response.status === 200) {
          cache.put(event.request, response.clone());
        }
        return response;
      })
      .catch(function() {
        return null;
      });

    if (cached) {
      event.waitUntil(fetchPromise);
      return cached;
    }

    const networkResponse = await fetchPromise;
    return networkResponse || cached || new Response('', { status: 504, statusText: 'Gateway Timeout' });
  })());
});

// Atualizar o service worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
