if(!self.define){let e,n={};const s=(s,r)=>(s=new URL(s+".js",r).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let c={};const u=e=>s(e,o),a={module:{uri:o},exports:c,require:u};n[o]=Promise.all(r.map((e=>a[e]||u(e)))).then((e=>(i(...e),c)))}}define(["./workbox-03ef139c"],(function(e){"use strict";e.setCacheNameDetails({prefix:"horse-web"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/codingfaner/vuePage/css/app.b59a9059.css",revision:null},{url:"/codingfaner/vuePage/css/chunk-vendors.4bca4d6a.css",revision:null},{url:"/codingfaner/vuePage/index.html",revision:"89aa82b50ea4cb92b16b951cf4607e28"},{url:"/codingfaner/vuePage/js/about.329b67b4.js",revision:null},{url:"/codingfaner/vuePage/js/app.c2d80e09.js",revision:null},{url:"/codingfaner/vuePage/js/chunk-vendors.bcd128f0.js",revision:null},{url:"/codingfaner/vuePage/manifest.json",revision:"8e7af2fca53ffff99b72a55d0b220c74"},{url:"/codingfaner/vuePage/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
