const CACHE_NAME = "pipboy-v1";
const ASSETS_TO_CACHE = ["/", "/index.php", "/get-playlist.php"];

// 动态缓存匹配特定模式的文件
const CACHE_PATTERNS = [
  /\.css$/,
  /\.js$/,
  /\.(png|jpg|jpeg|gif|svg)$/,
  /\.(mp3|mp4|webm)$/,
  /\.(ttf|woff|woff2)$/,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        const url = new URL(event.request.url);
        const shouldCache = CACHE_PATTERNS.some((pattern) =>
          pattern.test(url.pathname),
        );

        if (shouldCache) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      });
    }),
  );
});
