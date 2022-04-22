// const cacheName = 'ecommerce'
// const cacheAssets = [
//     '/',
//     'index.html',
//     'images\logo.png',
//     'images\running-shoes.png',
//     'images\shoes-img1.png',
//     'images\star-icon.png',
//     'images\footer-logo.png'
    
// ];
// self.addEventListener('fetch', evt => {
//     //console.log('fetch event:',evt)
//     evt.respondWith(
//         caches.match(evt.request).then(res => {
//             return res || fetch(evt.request)
//         })
//     )
// });