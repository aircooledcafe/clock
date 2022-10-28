const staticClock = "clock-v1";
const assets = ["/", "/index.html", "/style.css", "/script.js"];

// self, this is the service worker which installs the app and caches the assets
self.addEventListener("install", (installEvent) => {
  // use wait until as caching in a browser is asynchronous
  installEvent.waitUntil(
    caches.open(staticClock).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// this part fetchs our assets etc. when we return to the page
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
