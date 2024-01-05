// const CACHE_NAME = "version-13";
// const staticUrlsToCache = ["images/icon-192x192.png", "images/icon-256x256.png", "images/icon-384x384.png", "images/icon-512x512.png"];

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("Opened cache");

//       return cache.addAll([...staticUrlsToCache]);
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       if (cachedResponse) {
//         return cachedResponse;
//       }

//       return fetch(event.request)
//         .then((response) => {
//           if (!response || response.status !== 200 || response.type !== "basic") {
//             return response;
//           }

//           const responseToCache = response.clone();
//           const requestClone = new Request(event.request.url);

//           caches.open(CACHE_NAME).then((cache) => {
//             cache.put(requestClone, responseToCache);
//           });

//           return response;
//         })
//         .catch((error) => {
//           console.error("Fetch failed:", error);
//         });
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   const cacheWhitelist = [CACHE_NAME];
//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhitelist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     )
//   );
// });
