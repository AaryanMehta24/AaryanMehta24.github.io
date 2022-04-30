const shoesPWA = "shoes-ordering-pwa-v1"
const assets = [
  "/",
  "/index.html",

  //CSS files
  "css\animate.min.css",
  "css\bootstrap.min.css",
  "css\jquery-ui.css",
  "css\jquery.mCustomScrollbar.min.css",
  "css\meanmenu.css",
  "css\nice-select.css",
  "css\normalize.css",
  "css\owl.carousel.min.css",
  "css\responsive.css",
  "css\slick.css",
  "css\style.css",

    // JS files
  "js\app.js",
  "js\bootstrap.bundle.min.js",
  "js\custom.js",
  "js\jquery-3.0.0.min.js",
  "js\jquery.mCustomScrollbar.concat.min.js",
  "js\jquery.min.js",
  "js\jquery.validate.js",
  "js\plugin.js",
  "js\popper.min.js",
  
  // Images files
  "images\about-img2.png",
  "images\banner.png",
  "images\email-icon.png",
  "images\fb-icon.png",
  "images\footer-logo.png",
  "images\google-icon.png",
  "images\in-icon.png",
  "images\logo.png",
  "images\map-icon.png",
  "images\phone-icon.png",
  "images\running-shoes.png",
  "images\search_icon.png",
  "images\shoes_144x144.png",
  "images\shoes_512x512.png",
  "images\shoes-img1.png",
  "images\shoes-img2.png",
  "images\shoes-img3.png",
  "images\shoes-img4.png",
  "images\shoes-img5.png",
  "images\shoes-img6.png",
  "images\shoes-img7.png",
  "images\shoes-img8.png",
  "images\shoes-img9.png",
  "images\shop_icon.png",
  "images\shop-banner.png",
  "images\star-icon.png",
  "images\twitter-icon.png",
 

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(shoesPWA).then(cache => {
      cache.addAll(assets)
      // cache.addAll([
        // "/",
        // "/index.html",

        // //CSS files
        // "css\animate.min.css",
        // "css\bootstrap.min.css",
        // "css\jquery-ui.css",
        // "css\jquery.mCustomScrollbar.min.css",
        // "css\meanmenu.css",
        // "css\nice-select.css",
        // "css\normalize.css",
        // "css\owl.carousel.min.css",
        // "css\responsive.css",
        // "css\slick.css",
        // "css\style.css",

        //     // JS files
        // "js\app.js",
        // "js\bootstrap.bundle.min.js",
        // "js\custom.js",
        // "js\jquery-3.0.0.min.js",
        // "js\jquery.mCustomScrollbar.concat.min.js",
        // "js\jquery.min.js",
        // "js\jquery.validate.js",
        // "js\plugin.js",
        // "js\popper.min.js",
        
        // // Images files
        // "images\about-img2.png",
        // "images\banner.png",
        // "images\email-icon.png",
        // "images\fb-icon.png",
        // "images\footer-logo.png",
        // "images\google-icon.png",
        // "images\in-icon.png",
        // "images\logo.png",
        // "images\map-icon.png",
        // "images\phone-icon.png",
        // "images\running-shoes.png",
        // "images\search_icon.png",
        // "images\shoes_144x144.png",
        // "images\shoes_512x512.png",
        // "images\shoes-img1.png",
        // "images\shoes-img2.png",
        // "images\shoes-img3.png",
        // "images\shoes-img4.png",
        // "images\shoes-img5.png",
        // "images\shoes-img6.png",
        // "images\shoes-img7.png",
        // "images\shoes-img8.png",
        // "images\shoes-img9.png",
        // "images\shop_icon.png",
        // "images\shop-banner.png",
        // "images\star-icon.png",
        // "images\twitter-icon.png",
        

        // ]);
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  self.addEventListener("push", event => {
    let message = event.data.json();
  
    switch(message.type) {
      case "init":
        doInit();
        break;
      case "shutdown":
        doShutdown();
        break;
    }
  }, false);
  



  self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        event.waitUntil(doTheWork());
    }
});

  