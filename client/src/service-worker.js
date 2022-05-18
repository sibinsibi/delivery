// import { register } from 'register-service-worker'

//   register(`${process.env.BASE_URL}service-worker.js`, {
//     ready () {
//       console.log(
//         'App is being served from cache by a service worker.\n' +
//         'For more details, visit https://goo.gl/AFskqB'
//       )
//     },
//     registered () {
//       console.log('Service worker has been registered.')
//     },
//     cached () {
//       console.log('Content has been cached for offline use.')
//     },
//     updatefound () {
//       console.log('New content is downloading.')
//     },
//     updated (registration) {
//       console.log('New content is available; please refresh.')
//       let confirmationResult = confirm("New content found! Do you want to reload the app?")
//       if (confirmationResult) registration.waiting.postMessage({action: "skipWaiting"})
//     },
//     offline () {
//       console.log('No internet connection found. App is running in offline mode.')
//     },
//     error (error) {
//       console.error('Error during service worker registration:', error)
//     }
//   })

//   let refreshing
//   navigator.serviceWorker.addEventListener("controllerchange", ()=>{
//     if (refreshing) return
//     window.location.reload()
//     refreshing = true
//   })
  // self.addEventListener('fetch', function(event) {
  //   event.respondWith(async function() {
  //      try{
  //        var res = await fetch(event.request);
  //        var cache = await caches.open('cache');
  //        cache.put(event.request.url, res.clone());
  //        return res;
  //      }
  //      catch(error){
  //        return caches.match(event.request);
  //       }
  //     }());
  //});
