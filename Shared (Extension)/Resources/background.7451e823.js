!function(e){var r;"function"==typeof e&&(r=e,e=null),function(r,t,n,o,s){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[o]&&i[o],c=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(e,t){if(!c[e]){if(!r[e]){var n="function"==typeof i[o]&&i[o];if(!t&&n)return n(e,!0);if(a)return a(e,!0);if(l&&"string"==typeof e)return l(e);var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}p.resolve=function(t){var n=r[e][1][t];return null!=n?n:t},p.cache={};var f=c[e]=new u.Module(e);r[e][0].call(f.exports,p,f,f.exports,this)}return c[e].exports;function p(e){var r=p.resolve(e);return!1===r?{}:u(r)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=r,u.cache=c,u.parent=a,u.register=function(e,t){r[e]=[function(e,r){r.exports=t},{}]},Object.defineProperty(u,"root",{get:function(){return i[o]}}),i[o]=u;for(var f=0;f<t.length;f++)u(t[f]);if(n){var p=u(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof e&&e.amd?e(function(){return p}):s&&(this[s]=p)}}({jYLaH:[function(e,r,t){e("101e2ae3c8be80ea").register(JSON.parse('{"fLeCQ":"background.7451e823.js","lwRcc":"inject.36295189.js"}'))},{"101e2ae3c8be80ea":"b2jxm"}],b2jxm:[function(e,r,t){"use strict";var n={};r.exports.register=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)n[r[t]]=e[r[t]]},r.exports.resolve=function(e){var r=n[e];if(null==r)throw Error("Could not resolve bundle with id "+e);return r}},{}],kgW6q:[function(e,r,t){e("./messaging"),e("../../../src/background/index"),e("./main-world-scripts")},{"./messaging":"iG3ww","../../../src/background/index":"iqY5N","./main-world-scripts":"8ZbMf"}],iG3ww:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("~background/messages/open-extension"),s=n.interopDefault(o);globalThis.__plasmoInternalPortMap=new Map,chrome.runtime.onMessage.addListener((e,r,t)=>("open-extension"===e.name&&(0,s.default)({sender:r,...e},{send:e=>t(e)}),!0)),chrome.runtime.onConnect.addListener(function(e){globalThis.__plasmoInternalPortMap.set(e.name,e),e.onMessage.addListener(function(r){e.name})})},{"~background/messages/open-extension":"64zpg","@parcel/transformer-js/src/esmodule-helpers.js":"4S1uD"}],"64zpg":[function(e,r,t){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(t);let n=async(e,r)=>{try{chrome.windows.create({url:chrome.runtime.getURL("popup.html"),type:"popup",width:330,height:330},t=>{console.log(`Params received: ${e.body.params}`),console.log(`Popup window created with ID ${t.id}`),r.send({message:"extension open"})})}catch(e){console.log(e)}};t.default=n},{"@parcel/transformer-js/src/esmodule-helpers.js":"4S1uD"}],"4S1uD":[function(e,r,t){t.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},t.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.exportAll=function(e,r){return Object.keys(e).forEach(function(t){"default"===t||"__esModule"===t||r.hasOwnProperty(t)||Object.defineProperty(r,t,{enumerable:!0,get:function(){return e[t]}})}),r},t.export=function(e,r,t){Object.defineProperty(e,r,{enumerable:!0,get:t})}},{}],iqY5N:[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(t),n.export(t,"life",()=>o),e("@plasmohq/messaging/background");let o=47;console.log(`WELCOME - ${o}`)},{"@plasmohq/messaging/background":"2vDz3","@parcel/transformer-js/src/esmodule-helpers.js":"4S1uD"}],"2vDz3":[function(e,r,t){var n=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,a={};((e,r)=>{for(var t in r)n(e,t,{get:r[t],enumerable:!0})})(a,{getPort:()=>l,getPortMap:()=>c}),r.exports=((e,r,t,a)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let t of s(r))i.call(e,t)||void 0===t||n(e,t,{get:()=>r[t],enumerable:!(a=o(r,t))||a.enumerable});return e})(n({},"__esModule",{value:!0}),a);var c=()=>globalThis.__plasmoInternalPortMap,l=e=>{let r=c().get(e);if(!r)throw Error(`Port ${e} not found`);return r};chrome.runtime.onMessage.addListener((e,r,t)=>("__PLASMO_MESSAGING_PING__"===e.__PLASMO_INTERNAL_SIGNAL__&&t(!0),!0))},{}],"8ZbMf":[function(e,r,t){var n=e("@parcel/transformer-js/src/esmodule-helpers.js"),o=e("url:../../../src/contents/inject"),s=n.interopDefault(o);chrome.scripting.registerContentScripts([{id:"srcContentsInject",js:[(0,s.default).split("/").pop().split("?")[0]],matches:["*://localhost/*","https://oth-upload.vercel.app/*"],runAt:"document_start",world:"MAIN"}]).catch(e=>{})},{"url:../../../src/contents/inject":"ge6Ul","@parcel/transformer-js/src/esmodule-helpers.js":"4S1uD"}],ge6Ul:[function(e,r,t){r.exports=e("6f143d966ececfd7").getBundleURL("fLeCQ")+e("94f773e00792b67c").resolve("lwRcc")},{"6f143d966ececfd7":"8Noh3","94f773e00792b67c":"b2jxm"}],"8Noh3":[function(e,r,t){"use strict";var n={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t.getBundleURL=function(e){var r=n[e];return r||(r=function(){try{throw Error()}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),n[e]=r),r},t.getBaseURL=o,t.getOrigin=function(e){var r=(""+e).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);if(!r)throw Error("Origin not found");return r[0]}},{}]},["jYLaH","kgW6q"],"kgW6q","parcelRequire3896"),globalThis.define=r}(globalThis.define);