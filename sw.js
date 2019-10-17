const CACHE_NAME = 'Clicker';
const cacheList = [
    'index.html',
    'vue.min.js',
    'index.js',
    'reset.min.css',
    'index.css',
    "images/clover.svg","images/coin.svg","images/earth.svg","images/explosion.svg","images/galaxy.png","images/jupiter.svg","images/left-arrow.svg","images/mars.svg","images/menu.svg","images/mercury.svg","images/mtr-0-0.svg","images/mtr-0-1.svg","images/mtr-0-2.svg","images/mtr-0-3.svg","images/mtr-0-4.svg","images/mtr-1-0.svg","images/mtr-1-1.svg","images/mtr-1-2.svg","images/mtr-1-3.svg","images/mtr-1-4.svg","images/mtr-2-0.svg","images/mtr-2-1.svg","images/mtr-2-2.svg","images/mtr-2-3.svg","images/mtr-2-4.svg","images/mtr-3-0.svg","images/mtr-3-1.svg","images/mtr-3-2.svg","images/mtr-3-3.svg","images/mtr-3-4.svg","images/mtr-4-0.svg","images/mtr-4-1.svg","images/mtr-4-2.svg","images/mtr-4-3.svg","images/mtr-4-4.svg","images/mtr-5-0.svg","images/mtr-5-1.svg","images/mtr-5-2.svg","images/mtr-5-3.svg","images/mtr-5-4.svg","images/mtr-6-0.svg","images/mtr-6-1.svg","images/mtr-6-2.svg","images/mtr-6-3.svg","images/mtr-6-4.svg","images/mtr-7-0.svg","images/mtr-7-1.svg","images/mtr-7-2.svg","images/mtr-7-3.svg","images/mtr-7-4.svg","images/mtr-8-0.svg","images/mtr-8-1.svg","images/mtr-8-2.svg","images/mtr-8-3.svg","images/mtr-8-4.svg","images/neptune.svg","images/pluto.svg","images/saturn.svg","images/skull.svg","images/uranus.svg","images/venus.svg","images/wp0.svg","images/wp1.svg","images/wp10.svg","images/wp11.svg","images/wp12.svg","images/wp13.svg","images/wp14.svg","images/wp15.svg","images/wp16.svg","images/wp17.svg","images/wp18.svg","images/wp19.svg","images/wp2.svg","images/wp20.svg","images/wp21.svg","images/wp22.svg","images/wp23.svg","images/wp24.svg","images/wp25.svg","images/wp26.svg","images/wp27.svg","images/wp3.svg","images/wp4.svg","images/wp5.svg","images/wp6.svg","images/wp7.svg","images/wp8.svg","images/wp9.svg",
    "images/wp28.svg", "images/wp29.svg", "images/wp30.svg", "images/add-video.svg",
    "images/wp31.svg", "images/wp32.svg", "images/wp33.svg", "images/wp34.svg", "images/left-arrow2.svg"
];
this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(cacheList);
        })
    );
});
const CACHE_PREFIX = 'Clicker-2';

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(keyList.map(key => {
                if (key.indexOf(CACHE_PREFIX) === 0 && key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
