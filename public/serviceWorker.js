const CACHE_NAME = 'version-3';
const urlsToCache = ['index.html', 'offline.html'];
let staticUrlsToCache = ["images/icon-192x192.png", "images/icon-256x256.png", "images/icon-384x384.png", "images/icon-512x512.png"];

const self = this;

// // Install SW
// self.addEventListener('install', (event) => {
// 	event.waitUntil(
// 		caches.open(CACHE_NAME).then((cache) => {
// 			console.log('Opened cache');

// 			return cache.addAll(urlsToCache);
// 		})
// 	);
// });

// // Listen for requests
// self.addEventListener('fetch', (event) => {
// 	event.respondWith(
// 		caches.match(event.request).then(() => {
// 			return fetch(event.request).catch(() => caches.match('offline.html'));
// 		})
// 	);
// });

// // Activate the SW
// self.addEventListener('activate', (event) => {
// 	const cacheWhitelist = [];
// 	cacheWhitelist.push(CACHE_NAME);

// 	event.waitUntil(
// 		caches.keys().then((cacheNames) =>
// 			Promise.all(
// 				cacheNames.map((cacheName) => {
// 					if (!cacheWhitelist.includes(cacheName)) {
// 						return caches.delete(cacheName);
// 					}
// 				})
// 			)
// 		)
// 	);
// });


// let staticUrlsToCache = ["/Assets/Images/anne.jpg", "/Assets/Images/icon-192x192.png", "Assets/Images/icon-384x384.png", "Assets/Images/icon-256x256.png", "Assets/Images/icon-512x512.png", "Assets/Styles/style.css"];
// const cacheVersionName = ['staticCache-v1']

//Når staticUrlsTocache skal opdateres, skal cacheAllowList's value også ændres. Dermed installeres cachen forfra
//og sørger for at alt er opdateret.

self.addEventListener('install', event => {
    console.log('installing..')

    event.waitUntil(
        console.log('Cache of Statics'),
        caches.open(urlsToCache[0])
        .then(cache => cache.addAll(staticUrlsToCache))
    )
})

// self.addEventListener('fetch', (event) => {
//     return;
// })

//CACHE FIRST - FALLING BACK TO NETWORK
 //Tjek om der er noget i cachen og returner det til browseren. Er der ikke noget, så prøv at finde det
//på netværket hvorefter det caches og returneres til browseren.

// self.addEventListener('fetch', (event) => {
//     // Check if this is a request for an image
//       event.respondWith(caches.open(cacheVersionName).then((cache) => {
//         // Go to the cache first
//         return cache.match(event.request.url).then((cachedResponse) => {
//           // Return a cached response if we have one
//           if (cachedResponse) {
//             console.log('Fandt noget i cachen')
//             return cachedResponse;
//           }
  
//           // Otherwise, hit the network
//           return fetch(event.request).then((fetchedResponse) => {

//              // Add the network response to the cache for later visits
//             cache.put(event.request, fetchedResponse.clone());
//             console.log('Fetchede noget..')
            
//              // Return the network response
//             return fetchedResponse;
//           });
//         });
//       }));
   
//   });

//Stale-while-revalidate
//CACHE ALT UNDTAGEN API

self.addEventListener('fetch', (event) => {
    //Hvis der er billeder i cachen, henter den dem først. Derefter tjekker den om der er nogle på netværket
    //som den derefter cacher.

        console.log('Fandt noget at hente til cachen..')
      event.respondWith(caches.open(urlsToCache).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {

          const fetchedResponse = fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
  
          return cachedResponse || fetchedResponse;
        });
      }));
      
  });

// self.addEventListener('activate', (event) => {
//     event.waitUntil(caches.keys().then((keys) => {
//         return Promise.all(keys.map((key) => {
//             if(!cacheAllowList.includes(key)) {
//                 return caches.delete(key);
//             }
//         }))
//     }))
// })

// //cache then fallback to web and cache result..

// self.addEventListener('fetch', (event) => {
//     console.log('Handeling fetch-event for', event.request.url)

//     event.respondWith(
//         caches.open(cacheAllowList[0]).then((cache) => {
//             return cache.match(event.request).then((response) => {
//                 if(response) {
//                     console.log('Fundne response i cache:', response)
//                     return response;
//                 }

//                 console.log("Ingen response fundet i cache. Begynder at fetche", event.request.url)

//                 return fetch(event.request.clone()).then((response) => {
//                     console.log(
//                         "Response for %s fra netværket", event.request.url)
//                 })
//             })
//         })
//     )
// })