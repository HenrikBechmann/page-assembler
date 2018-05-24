importScripts("/dist/precache-manifest.30b44a119ec5f1c8fdb9cb39faea0660.js", "/dist/workbox-v3.2.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/dist/workbox-v3.2.0"});
// sw.js

// short term solution...
self.__precacheManifest.push({revision:'abcde',url:'/index.html'})

workbox.precaching.precacheAndRoute(self.__precacheManifest)

// console.log('from sw self.__precacheManifest',self.__precacheManifest)


// TODO: isolate external requests (like CDN for google) with staleWhileRevalidate 
workbox.routing.registerRoute(
  /.*\.js'/,
  workbox.strategies.networkFirst()
);

workbox.routing.registerNavigationRoute(
  '/index.html'
  )

workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // Use cache but update in the background ASAP
  workbox.strategies.networkFirst({
    // Use a custom cache name
    cacheName:'css-cache'
  })
);

workbox.routing.registerRoute(
  // Cache image files
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  // Use the cache if it's available
  workbox.strategies.networkFirst({
    // Use a custom cache name
    cacheName:'image-cache'
  })
);



