// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//-----------------------------------------------------------------------------
//   Khai báo chạy service worker tự chế  /pwa-serviceworker.js
//-----------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {

    if ('serviceWorker' in navigator) {
        console.log('Service Worker được hỗ trợ trên trình duyệt này');
        navigator.serviceWorker.register('/pwa-serviceworker.js')
            .then(function (swReg) {
                console.log('Service Worker đã được đăng kí từ file site.js', swReg);
            })
            .catch(function (error) {
                console.error('Service Worker Error từ file site.js', error);
            });
    }
    else {
        console.error('Service Worker Không Được Hỗ Trợ');
    }

}, false);