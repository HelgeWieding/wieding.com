!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=["client/1acc9e1da983a2f9db51/about.0.js","client/1acc9e1da983a2f9db51/blog.1.js","client/1acc9e1da983a2f9db51/blog_$slug.2.js","client/1acc9e1da983a2f9db51/index.3.js","client/1acc9e1da983a2f9db51/main.js"].concat(["service-worker-index.html","Menlo-Regular.woff","PressStart2P-Regular.woff","PressStart2P-Regular.woff2","UbuntuMono-Bold.ttf","UbuntuMono-Bold.woff","UbuntuMono-Bold.woff2","UbuntuMono-BoldItalic.ttf","UbuntuMono-BoldItalic.woff","UbuntuMono-BoldItalic.woff2","UbuntuMono-Italic.ttf","UbuntuMono-Italic.woff","UbuntuMono-Italic.woff2","UbuntuMono-Regular.ttf","UbuntuMono-Regular.woff","UbuntuMono-Regular.woff2","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json"]),a=new Set(o);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1586213064668").then(e=>e.addAll(o)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586213064668"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&a.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586213064668").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const o=await t.match(e.request);if(o)return o;throw n}}))))})}]);