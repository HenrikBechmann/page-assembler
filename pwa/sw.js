// sw.js

workbox.precaching.precacheAndRoute(self.__precacheManifest)

console.log('from sw self.__precacheManifest',self.__precacheManifest)

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerNavigationRoute(
  'index.html'
  )

// workbox.routing.registerRoute(
//   new RegExp('.*\.html'),
//   workbox.strategies.cacheFirst(
//       {
//         cacheName:'html-cache'
//       }
//     )
// );

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName:'css-cache'
  })
);

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName:'image-cache'
  }),'GET'
);


