// const cacheName = 'v1'
// const cacheAssets = [
//     '/index.html',
//     '/css/index.css',
//     '/js/cache.js',
//     '/js/utils.js',
//     '/js/formHandle.js',
//     '/js/lazysizes.min.js',
//     '/js/tabController.js',
// ]

// const images = [
//     'common/logo/logo-blue@2x.webp',
//     'common/white-face-down@3x.webp',
//     'common/lightBlue-face-down@3x.webp',
//     'common/vector-smart-object-copy-8@3x.webp',
//     'top-section/woman@2x.webp',
//     'why-section/hours.webp',
//     'why-section/bonus.webp',
//     'why-section/day-one@2x.webp',
//     'why-section/day-one.webp',
//     'why-section/play-button@2x.webp',
//     'job-section/smile-copy@2x.webp',
//     'job-section/check-mark@2x.webp',
// ]

// const webImages = [];
// for (let i = 0; i < images.length; i++) {
//     webImages.push(`../assets/images/${images[i]}`);
// }
// const contentToCache = cacheAssets.concat(webImages);

// function preloadImages(array) {
//     if (!preloadImages.list) {
//         preloadImages.list = [];
//     }
//     var list = preloadImages.list;
//     for (var i = 0; i < array.length; i++) {
//         let img = new Image();
//         img.onload = function () {
//             var index = list.indexOf(this);
//             if (index !== -1) {
//                 // remove image from the array once it's loaded
//                 // for memory consumption reasons
//                 list.splice(index, 1);
//             }
//         }
//         list.push(img);
//         img.src = array[i];
//     }
// }

// preloadImages(contentToCache);

// // //cache pages
// // const cacheName = 'v1'
// // const cacheAssets = [
// //     '/index.html',
// //     '/css/index.css',
// //     '/js/cache.js',
// //     '/js/utils.js',
// //     '/js/formHandle.js',
// //     '/js/lazysizes.min.js',
// //     '/js/tabController.js',
// // ]

// // const images = [
// //     'common/logo/logo-blue@2x.webp',
// //     'common/white-face-down@3x.webp',
// //     'common/lightBlue-face-down@3x.webp',
// //     'common/vector-smart-object-copy-8@3x.webp',
// //     'top-section/woman@2x.webp',
// //     'why-section/hours.webp',
// //     'why-section/bonus.webp',
// //     'why-section/day-one@2x.webp',
// //     'why-section/day-one.webp',
// //     'why-section/play-button@2x.webp',
// //     'job-section/smile-copy@2x.webp',
// //     'job-section/check-mark@2x.webp',
// // ]

// // const webImages = [];
// // for (let i = 0; i < images.length; i++) {
// //     webImages.push(`../assets/images/${images[i]}`);
// // }
// // const contentToCache = cacheAssets.concat(webImages);
// // console.log(contentToCache)

// // // Install event
// // self.addEventListener('install', (event) => {
// //     event.waitUntil(
// //         caches
// //             .open(cacheName)
// //             .then(cache => {
// //                 //AAdd all cache files
// //                 cache.addAll(contentToCache)
// //             })
// //             //stop blocking
// //             .then(() => { self.skipWaiting() })
// //     )
// // })

// // self.addEventListener('install', (e) => {
// //     // e.waitUntil((async () => {
// //     //     const cache = await caches.open(cacheName);
// //     //     //Add all cache files
// //     //     await cache.addAll(cacheAssets);
// //     // })());
// // });


// // // Activate event
// // self.addEventListener('activate', (event) => {
// //     //Remove old cache
// //     event.waitUntil(
// //         caches.keys().then(cacheNames => {
// //             return Promise.all(
// //                 cacheNames.map(name => {
// //                     if (name !== cacheName)
// //                         return caches.delete(name)
// //                 })
// //             )
// //         })
// //     )
// // })


// // //Fetch event
// // // self.addEventListener('fetch', e => {
// // //     console.log('fetch')
// // //     e.respondWith(fetch(e.request))
// // //         .catch(() => caches.match(e.request))
// // // })

// // // self.addEventListener('fetch', (e) => {
// // //     console.log(`[Service Worker] Fetched resource ${e.request.url}`);
// // // });

// // self.addEventListener('fetch', (e) => {

// //     e.respondWith((async () => {
// //         console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
// //         const r = await caches.match(e.request);
// //         if (r) { return r; }
// //         const response = await fetch(e.request);
// //         const cache = await caches.open(cacheName);
// //         console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
// //         cache.put(e.request, response.clone());
// //         return response;
// //     })());



// //     //advantage
// //     // e.respondWith(fetch(e.request))
// //     //     .then(res => {
// //     //         //make a copy of res
// //     //         const resClone = res.clone()
// //     //         //open cache
// //     //         caches.open(cacheName)
// //     //             .then(cache => {
// //     //                 //add the res to cache
// //     //                 cache.put(e.request, resClone);
// //     //             });
// //     //         return res;
// //     //     }).catch(err => caches.match(e.request).then(res => res))
// // });