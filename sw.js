if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,d)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const c=e=>s(e,n),a={module:{uri:n},exports:o,require:c};i[n]=Promise.all(r.map((e=>a[e]||c(e)))).then((e=>(d(...e),o)))}}define(["./workbox-9bc8a7af"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-0fea9141.js",revision:"b2509f0928e1d38993831e740f2787f6"},{url:"assets/index-1da6aa0a.css",revision:"221a830a2ba231a5ba49a592ae1ad5cb"},{url:"assets/webfontloader-91b4d051.js",revision:"acd5cece7b1e9989b8b9d9b1a7fd0efe"},{url:"index.html",revision:"5ce60d9a6056fe4ac89e4dffb4fbe910"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"48x48.png",revision:"3b220566766e2fe9409c9790300eeed0"},{url:"72x72.png",revision:"c0731fc992d3b06abfd5bc7902b22923"},{url:"96x96.png",revision:"9b4f001044ef349ddc37cec072fa4252"},{url:"144x144.png",revision:"be2e9da43974d584ae646945ed0c8d9b"},{url:"192x192.png",revision:"4ea3ed6a1e42b3e2b388efd1f8d068cd"},{url:"512x512.png",revision:"4e9f642ae29bc3bdd9114cd503462d6b"},{url:"manifest.webmanifest",revision:"d4266443e6d0ee3a324663b41a383c05"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
